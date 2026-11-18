import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Rate limiting simples em memória
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minuto
  const maxRequests = 5;

  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Sanitização básica para prevenir XSS
function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Validação de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    // Rate limiting baseado em IP
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const data = await req.json();

    // Validation of required fields
    if (!data.name || !data.email || !data.message ||
        data.name.trim() === "" || data.email.trim() === "" || data.message.trim() === "") {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // Email validation
    if (!isValidEmail(data.email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    if (!resend) {
      console.error("RESEND_API_KEY not configured");

      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 },
      );
    }

    const destinationEmail = process.env.DESTINATION_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;
    const fromName = process.env.FROM_NAME;
    if (!destinationEmail || !fromEmail || !fromName) {
      console.error("Email environment variables not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [destinationEmail],
      subject: `New message from ${sanitizeHtml(data.name)}`,
      replyTo: data.email,
      html: `
        <h2>New message from website</h2>

        <p><strong>Name:</strong> ${sanitizeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(data.email)}</p>
        <p><strong>WhatsApp:</strong> ${sanitizeHtml(data.whatsapp || "Not provided")}</p>

        <p><strong>Message:</strong></p>
        <p>${sanitizeHtml(data.message)}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          error: "Error sending email.",
        },
        { status: 500 },
      );
    }

    console.log("EMAIL SENT:", emailData);

    return NextResponse.json({
      success: true,
      id: emailData?.id,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: "Internal error sending email" },
      { status: 500 },
    );
  }
}
