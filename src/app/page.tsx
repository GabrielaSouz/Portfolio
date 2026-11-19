"use client"

import React, { useState } from "react";
import { FaFigma, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  ArrowUpRight,
  ArrowRight,
  Asterisk,
  Code2,
  Layout,
  Database,
  Mail,
  ExternalLink,
  Sparkles,
  Monitor,
  Smartphone,
  Layers3,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Doce Paraíso",
    category: "BUSINESS WEBSITE",
    description:
      "A digital presence for a confectionery brand, focused on visual identity, product presentation and user experience.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    type: "CLIENT PROJECT",
    image: "/images/doce-paraiso.png",
    accent: "text-[#59271C]",
    preview: "DOCE PARAÍSO",
    status: "PROJECT PREVIEW",
    link: "https://www.fabricadoceparaiso.com.br/",
  },
  {
    number: "02",
    name: "Debora Pazoti Pilates",
    category: "SERVICE WEBSITE",
    description:
      "A responsive website designed to communicate services, build trust and make contact easier for potential clients.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    type: "CLIENT PROJECT",
    theme: "bg-[#DDECE7]",
    accent: "text-[#064F4B]",
    preview: "DEBORA PAZOTI",
    status: "PROJECT PREVIEW",
    image: "/images/deborapazoti.png",
    link: "http://deborapazoti.com.br/",
  },
  {
    number: "03",
    name: "Ma Che Bonta",
    category: "BUSINESS WEBSITE",
    description:
      "A website for an Italian food brand, showcasing products and brand story with an elegant design.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    type: "CLIENT PROJECT",
    theme: "bg-[#E4DDF2]",
    accent: "text-[#69558E]",
    preview: "MA CHE BONTA",
    status: "PROJECT PREVIEW",
    image: "/images/machebonta.png",
    link: "https://www.machebonta.com/",
  },
  {
    number: "04",
    name: "Sirius Sustainability",
    category: "BUSINESS WEBSITE",
    description:
      "A corporate website focused on sustainability solutions, presenting services and environmental impact initiatives.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    type: "CLIENT PROJECT",
    theme: "bg-[#E6E5E1]",
    accent: "text-[#44443E]",
    preview: "SIRIUS",
    status: "PROJECT PREVIEW",
    image: "/images/sirius.png",
    link: "https://sirius-sustainability.vercel.app/",
  },
  {
    number: "05",
    name: "Sugar & Spice Menu",
    category: "WEB APPLICATION",
    description:
      "A study project creating an interactive menu interface, exploring modern UI patterns and component design.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    type: "STUDY PROJECT",
    theme: "bg-[#E9DFE9]",
    accent: "text-[#775D78]",
    preview: "SUGAR & SPICE",
    status: "PROJECT PREVIEW",
    image: "/images/sugar-spice.png",
    link: "https://menu-sugar-spice.vercel.app/",
  },
  {
    number: "06",
    name: "Calu",
    category: "BUSINESS WEBSITE",
    description:
      "A website for a Brazilian cheese bread brand, highlighting products and brand identity with a modern approach.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    type: "CLIENT PROJECT",
    theme: "bg-[#E2E5EF]",
    accent: "text-[#566080]",
    preview: "CALU",
    status: "PROJECT PREVIEW",
    image: "/images/calu.png",
    link: "https://www.calubraziliancheesebread.com/",
  },
];

const services = [
  {
    number: "01",
    icon: Layout,
    title: "Website Development",
    description:
      "Responsive, modern websites designed to present brands, services and businesses online.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Front-End Development",
    description:
      "Functional interfaces built with React, Next.js and TypeScript, with attention to detail.",
  },
  {
    number: "03",
    icon: Database,
    title: "Web Applications",
    description:
      "Dynamic applications with database integration, authentication and practical functionality.",
  },
  {
    number: "04",
    icon: FaFigma,
    title: "UI / UX Design",
    description:
      "Thoughtful layouts, intuitive navigation and interfaces designed around real users.",
  },
];

const technologies = [
  {
    category: "FRONT-END",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "BACK-END & DATABASE",
    items: ["Node.js", "Supabase", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DESIGN & TOOLS",
    items: ["Figma", "Git", "GitHub", "Vercel"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Understanding the project, its goals and the people who will use it.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description: "Organizing the structure, user experience and visual direction.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Building responsive interfaces and implementing the required features.",
  },
  {
    number: "04",
    title: "Test & Deliver",
    description: "Reviewing performance, usability and responsiveness before delivery.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#8875B2]">
      <Asterisk size={16} />
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [erro, setErro] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setSuccess(false);
    setErro("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const dados = {
      nome: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      mensagem: formData.get("message"),
    };

    console.log("Enviando dados:", dados);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setErro("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErro("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF9F8] text-[#25232A]">

      {/* NAVIGATION */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E2F2] text-[#8875B2]">
            <Asterisk size={26} />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.12em]">Gabi de Souza</p>
            <p className="text-[9px] tracking-[0.18em] text-[#85818B]">
              WEB DEVELOPER
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-[11px] font-semibold tracking-wider text-[#69656E] md:flex">
          <a href="#work" className="transition hover:text-[#8875B2]">WORK</a>
          <a href="#services" className="transition hover:text-[#8875B2]">SERVICES</a>
          <a href="#about" className="transition hover:text-[#8875B2]">ABOUT</a>
          <a href="#contact" className="transition hover:text-[#8875B2]">CONTACT</a>
        </div>

        <a
          href="#contact"
          className="flex items-center gap-2 bg-[#25232A] px-5 py-3 text-[10px] font-semibold tracking-wider text-white transition hover:bg-[#8875B2]"
        >
          LET'S TALK <ArrowUpRight size={14} />
        </a>
      </nav>

      {/* HERO */}
      <header className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-24">

        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#E7E1EC] bg-white px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#8E79BA]" />
            <span className="text-[10px] font-semibold tracking-[0.12em] text-[#6D6676]">
              OPEN TO JUNIOR OPPORTUNITIES & FREELANCE
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] md:text-7xl">
            Where design
            <br />
            meets{" "}
            <span className="font-serif font-normal italic text-[#9884BD]">
              code.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#77727D]">
            I'm Gabriela, a Front-End Developer creating thoughtful digital
            experiences through design, technology and code. I turn ideas
            into functional, accessible and responsive web solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="flex items-center gap-3 bg-[#25232A] px-7 py-4 text-[11px] font-semibold tracking-wider text-white transition hover:bg-[#8875B2]"
            >
              EXPLORE MY WORK <ArrowUpRight size={16} />
            </a>
            <a
              href="/Gabriela-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-[#D9D5DD] bg-transparent px-7 py-4 text-[11px] font-semibold tracking-wider transition hover:border-[#8875B2] hover:text-[#8875B2]"
            >
              VIEW MY CV <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-14 border-t border-[#E9E5E9] pt-7">
            <p className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-[#99939F]">
              CURRENTLY WORKING WITH
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-[#625D69]">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>Supabase</span>
            </div>
          </div>
        </div>

        {/* CREATIVE HERO COMPOSITION */}
        <div className="relative mx-auto flex h-[440px] w-full max-w-[520px] items-center justify-center md:h-[540px]">

    <div className="relative mx-auto w-full max-w-[500px]">

  {/* Quadrado atrás da imagem */}
  <div className="absolute inset-0  bg-[#DCD5E7]" />
 
  {/* Imagem */}
  <Image
    src="/images/gabriela-hero.png"
    alt="Gabriela - Front-End Developer"
    width={500}
    height={500}
    priority
    className="relative z-10 block h-auto w-full object-contain"
    sizes="(max-width: 768px) 100vw, 500px"
  />

</div>

          {/* <div className="absolute left-5 top-12 z-20 flex h-20 w-20 -rotate-12 flex-col items-center justify-center rounded-full bg-[#8875B2] text-white shadow-lg md:left-8 md:h-24 md:w-24">
            <Sparkles size={22} />
            <span className="mt-1 text-[8px] font-bold tracking-widest">
              CREATIVE
            </span>
            <span className="text-[8px] font-bold tracking-widest">
              THINKING
            </span>
          </div> */}

          {/* <div className="relative z-10 flex h-[340px] w-[260px] flex-col justify-between overflow-hidden rounded-t-[150px] rounded-b-2xl bg-[#DCD5E7] p-6 md:h-[430px] md:w-[330px]">
            <div className="absolute inset-0 bg-[#E5DFED]" />
            <div className="relative z-10 mt-8">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#827497]">
                DESIGN MINDED.
              </p>
              <p className="mt-2 font-serif text-4xl italic text-[#4D435B] md:text-5xl">
                Code driven.
              </p>
            </div>

          </div> */}

          <div className="absolute bottom-12 left-0 z-20 rotate-[-6deg] border border-[#E8E2EC] bg-white p-4 shadow-xl md:bottom-16">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#EAE3F1] text-[#8875B2]">
                <Code2 size={20} />
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#8875B2]">
                  const passion =
                </p>
                <p className="font-mono text-[11px] font-semibold">
                  "building.web"
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </header>

      {/* INTRO STRIP */}
      <section className="border-y border-[#E9E5E9] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3 md:px-10">
          <div className="flex items-center gap-4">
            <Monitor className="text-[#9884BD]" size={23} />
            <div>
              <p className="text-xs font-bold">Responsive Websites</p>
              <p className="mt-1 text-[11px] text-[#8A8590]">Built for every screen</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Layers3 className="text-[#9884BD]" size={23} />
            <div>
              <p className="text-xs font-bold">Modern Development</p>
              <p className="mt-1 text-[11px] text-[#8A8590]">Scalable web solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Smartphone className="text-[#9884BD]" size={23} />
            <div>
              <p className="text-xs font-bold">User-centered Design</p>
              <p className="mt-1 text-[11px] text-[#8A8590]">Clear and intuitive experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <SectionLabel>WHAT I DO</SectionLabel>
            <h2 className="mt-7 max-w-sm text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Digital solutions, built with purpose.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#817B87]">
              From the first visual concept to the final line of code,
              I focus on creating experiences that are useful, intuitive
              and thoughtfully developed.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#8875B2] hover:gap-4"
            >
              HAVE A PROJECT IN MIND? <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="border-t border-[#E7E2E9] py-7 sm:px-6 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0"
              >
                <div className="flex items-center justify-between">
                  <service.icon size={24} className="text-[#9884BD]" />
                  <span className="font-mono text-xs text-[#AAA4AF]">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 max-w-xs text-xs leading-6 text-[#817B87]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK - 6 PROJECTS */}
      <section id="work" className="bg-[#F1EEF4] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>SELECTED WORK</SectionLabel>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Ideas into <span className="font-serif italic text-[#9884BD]">reality.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#817B87]">
                A selection of websites and applications that reflect my
                approach to design, development and problem-solving.
              </p>
            </div>
            <span className="text-[11px] font-semibold tracking-widest text-[#8A8491]">
              06 PROJECTS / PORTFOLIO
            </span>
          </div>

          <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden "
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-black/40">
                    {project.number} / 06
                  </div>

                  <div className="absolute inset-5 border border-black/10 transition-transform duration-500 group-hover:scale-[0.96]" /> */}

                  {/* <div className={`relative z-10 text-center ${project.accent}`}>
                    <Asterisk size={34} className="mx-auto mb-3" />
                    <p className="text-xl font-semibold tracking-tight md:text-2xl">
                      {project.preview}
                    </p>
                    <p className="mt-2 text-[8px] font-semibold tracking-[0.2em] opacity-60">
                      {project.status}
                    </p>
                  </div> */}

                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25232A] transition group-hover:bg-[#25232A] group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-[0.16em] text-[#9884BD]">
                    {project.category}
                  </span>
                  <span className="text-[9px] tracking-wider text-[#99939F]">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-xs leading-6 text-[#817B87]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#DED8E4] bg-white/60 px-3 py-1.5 text-[9px] font-medium text-[#6E6876]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 lg:grid-cols-[0.85fr_1.15fr]">

       
               <div className="relative mx-auto w-full max-w-[500px]">

  {/* Quadrado atrás da imagem */}
  <div className="absolute inset-0  bg-[#DCD5E7]" />
  
  {/* Imagem */}
  <Image
    src="/images/gabriela-hero.png"
    alt="Gabriela - Front-End Developer"
    width={500}
    height={500}
    priority
    className="relative z-10 block h-auto w-full object-contain"
    sizes="(max-width: 768px) 100vw, 500px"
  />

       
</div>


      
        <div className="py-4">
          <SectionLabel>BEHIND THE CODE</SectionLabel>

          <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            A curious mind with a passion for{" "}
            <span className="font-serif italic text-[#9884BD]">
              creating.
            </span>
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-8 text-[#77727D]">
            <p>
              I'm Gabriela, a Front-End Developer and Systems Analysis
              and Development student. I enjoy combining visual thinking
              with technical problem-solving to build meaningful digital
              experiences.
            </p>

            <p>
              My professional journey started in the Chemistry field,
              where I developed analytical thinking, attention to detail
              and a structured approach to solving problems. These are
              skills I now bring into software development.
            </p>

            <p>
              Today, I'm focused on building responsive websites and
              web applications, continuously improving my knowledge of
              modern technologies and creating solutions that make a
              difference for businesses and users.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-5 border-t border-[#E9E5E9] pt-7">
            <div>
              <p className="text-[9px] font-bold tracking-[0.16em] text-[#9884BD]">
                EDUCATION
              </p>
              <p className="mt-2 text-sm font-semibold">Systems Analysis & Development</p>
              <p className="mt-1 text-xs text-[#8A8490]">In progress · 2026</p>
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-[0.16em] text-[#9884BD]">
                BACKGROUND
              </p>
              <p className="mt-2 text-sm font-semibold">Chemistry & Technology</p>
              <p className="mt-1 text-xs text-[#8A8490]">Analytical mindset</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-[#25232A] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <SectionLabel>TOOLS & TECHNOLOGIES</SectionLabel>
            <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              The tools behind the{" "}
              <span className="font-serif italic text-[#B8A6D8]">
                ideas.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#B7B2BE]">
              Technologies I use to design, build and develop modern
              web experiences, from the interface to the database.
            </p>
          </div>

          <div>
            {technologies.map((group) => (
              <div key={group.category} className="border-t border-white/15 py-7">
                <p className="mb-5 text-[10px] font-bold tracking-[0.18em] text-[#B8A6D8]">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/15 px-4 py-3 text-xs text-[#E6E1EB] transition hover:border-[#B8A6D8] hover:bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionLabel>HOW I WORK</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              From concept to{" "}
              <span className="font-serif italic text-[#9884BD]">creation.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#817B87]">
            A structured approach that helps turn ideas into functional and thoughtful
            digital products.
          </p>
        </div>

        {/* Container relativo para segurar a linha de conexão */}
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Linha contínua no desktop: posicionada na metade da altura da bolinha (h-12 -> top-6) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-[#DED9E2]"
          />

          {process.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              <div className="flex items-center">
                {/* Círculo com fundo sólido e ring para dar respiro da linha */}
                <p className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1EEF4] font-mono text-sm font-medium text-[#9884BD] ring-4 ring-white">
                  {step.number}
                </p>

                {/* Linha conectora para mobile/tablet (onde os itens ficam empilhados ou em 2 colunas) */}
                {index !== process.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="ml-4 h-px flex-1 bg-[#DED9E2] lg:hidden"
                  />
                )}
              </div>

              <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-xs leading-7 text-[#817B87]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-20 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#E9E2F2] px-8 py-16 md:px-14 md:py-20">

          <Asterisk className="absolute -right-8 -top-12 h-64 w-64 text-[#D8CBEA]" />

          <div className="relative z-10">

            {/* HEADER */}
            <SectionLabel>LET'S CONNECT</SectionLabel>

            <div className="mt-6 mb-14 max-w-2xl">
              <h2 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
                Have an idea?
                <br />
                Let's make it{" "}
                <span className="font-serif italic text-[#8875B2]">
                  happen.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#71697D]">
                Whether you're looking for a developer to join your team
                or someone to bring your website idea to life, I'd love
                to hear from you.
              </p>
            </div>

            {/* CONTENT */}
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

              {/* CONTACT INFORMATION */}
              <div className="flex flex-col justify-between">

                <div>
                  <h3 className="text-lg font-semibold">
                    Get in touch
                  </h3>

                  <p className="mt-3 max-w-xs text-xs leading-6 text-[#71697D]">
                    Feel free to reach out. I'm always open to discussing
                    new opportunities, collaborations and interesting projects.
                  </p>

                  <div className="mt-10 space-y-7">

                    {/* EMAIL */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#8875B2]">
                        <Mail size={19} />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-[#8875B2]">
                          EMAIL
                        </p>
                        <a
                          href="mailto:souza.gab@hotmail.com"
                          className="mt-2 block text-sm font-medium hover:text-[#8875B2]"
                        >
                          souza.gab@hotmail.com
                        </a>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#8875B2]">
                        <Phone size={19} />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-[#8875B2]">
                          PHONE / WHATSAPP
                        </p>
                        <a
                          href="https://wa.me/5519997544434"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 block text-sm font-medium hover:text-[#8875B2]"
                        >
                          +55 (19) 99754-4434
                        </a>
                      </div>
                    </div>

                    {/* LOCATION */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#8875B2]">
                        <MapPin size={19} />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-[#8875B2]">
                          LOCATION
                        </p>
                        <p className="mt-2 text-sm font-medium">
                          Piracicaba, São Paulo, Brazil
                        </p>
                        <p className="mt-1 text-[11px] text-[#817B87]">
                          Available for remote opportunities
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="mt-14 border-t border-[#CFC4DC] pt-7">
                  <p className="mb-4 text-[10px] font-bold tracking-widest text-[#71697D]">
                    FIND ME ONLINE
                  </p>

                  <div className="flex gap-3">

                    <a
                      href="https://github.com/GabrielaSouz"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-[#BFB2D0] px-4 py-3 text-xs font-medium transition hover:bg-[#25232A] hover:text-white"
                    >
                      <FaGithub size={16} />
                      GitHub
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/gabriela-de-souza-0a6847161/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-[#BFB2D0] px-4 py-3 text-xs font-medium transition hover:bg-[#25232A] hover:text-white"
                    >
                      <FaLinkedinIn size={16} />
                      LinkedIn
                      <ArrowUpRight size={13} />
                    </a>

                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="bg-white p-7 md:p-10">

                <div className="mb-8">
                  <h3 className="text-xl font-semibold">
                    Send me a message
                  </h3>
                  <p className="mt-2 text-xs text-[#817B87]">
                    Fill out the form below and I'll get back to you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME + EMAIL */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[10px] font-bold tracking-widest"
                      >
                        YOUR NAME *
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                        className="w-full border border-[#E5E0E9] bg-[#FAF9FB] px-4 py-4 text-xs outline-none transition placeholder:text-[#AAA4AF] focus:border-[#9884BD]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-bold tracking-widest"
                      >
                        YOUR EMAIL *
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@email.com"
                        required
                        className="w-full border border-[#E5E0E9] bg-[#FAF9FB] px-4 py-4 text-xs outline-none transition placeholder:text-[#AAA4AF] focus:border-[#9884BD]"
                      />
                    </div>

                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[10px] font-bold tracking-widest"
                    >
                      WhatsApp
                    </label>

                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      required
                      className="w-full appearance-none border border-[#E5E0E9] bg-[#FAF9FB] px-4 py-4 text-xs text-[#716C76] outline-none focus:border-[#9884BD]"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold tracking-widest"
                    >
                      YOUR MESSAGE *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me a little about your project or opportunity..."
                      required
                      className="w-full resize-none border border-[#E5E0E9] bg-[#FAF9FB] px-4 py-4 text-xs leading-6 outline-none transition placeholder:text-[#AAA4AF] focus:border-[#9884BD]"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex w-full items-center justify-center gap-3 bg-[#25232A] px-7 py-4 text-[11px] font-semibold tracking-widest text-white transition hover:bg-[#8875B2]"
                  >
                    {sending ? "Sending..." : "SEND MESSAGE"}
                    {!sending && (
                      <Send size={15} />
                    )}
                  </button>
                    {
                      success && (
                        <p className="text-center text-[10px] text-[#AAA4AF]">
                          Message sent successfully!
                        </p>
                      )
                    }
                    { erro && (
                       <p className="text-center text-[10px] text-red-600">
                        {erro}
                       </p>
                    )

                    }
                  <p className="text-center text-[10px] text-[#AAA4AF]">
                    I'll get back to you as soon as possible.
                  </p>

                </form>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#E9E5E9] px-6 py-9 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-bold tracking-[0.12em]">GABRIELA</p>
            <p className="mt-1 text-[9px] tracking-[0.18em] text-[#8A8490]">
              FRONT-END DEVELOPER
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-[10px] font-semibold tracking-wider text-[#716C76]">
            <a href="mailto:souza.gab@hotmail.com" className="hover:text-[#8875B2]">
              EMAIL
            </a>
            <a href="https://github.com/GabrielaSouz" target="_blank" rel="noreferrer" className="hover:text-[#8875B2]">
              GITHUB <ExternalLink size={11} className="inline" />
            </a>
            <a href="https://www.linkedin.com/in/gabriela-de-souza-0a6847161/" target="_blank" rel="noreferrer" className="hover:text-[#8875B2]">
              LINKEDIN <ExternalLink size={11} className="inline" />
            </a>
          </div>

          <p className="text-[10px] text-[#99939F]">
            © 2026 Gabriela. Designed & developed with care.
          </p>
        </div>
      </footer>
    </main>
  );
}
