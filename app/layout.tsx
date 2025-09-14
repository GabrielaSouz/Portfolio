import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Developer Portfolio | Brazilian Developer in Malaysia",
  description:
    "Portfolio of a Brazilian web analysis and development student based in Malaysia. Showcasing modern web applications built with React, Next.js, and cutting-edge technologies.",
  keywords: "web developer, portfolio, React, Next.js, Brazil, Malaysia, web development student",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Web Developer Portfolio",
    description: "Brazilian web developer based in Malaysia - Creating innovative web solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
