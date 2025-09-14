"use client";

import { Button } from "../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LADO TEXTO */}
        <div className="text-center md:text-left animate-fade-in-up">
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-violet-800">Gabriela de Souza</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            At 26, I decided to transform my career and follow my passion for
            web development. Now, as a Web Development student, I&apos;m eager
            to learn new technologies, create meaningful digital experiences,
            and bring ideas to life through code and creativity.
          </p>

          <div className="flex flex-row justify-center md:justify-start items-center gap-4 mb-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-neutral-800 hover:bg-neutral-600 cursor-pointer"
            >
              View My Work
            </Button>

            <a href="/curriculo.pdf" download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-400 to-purple-600 cursor-pointer"
              >
                Download CV
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/GabrielaSouz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5 text-purple-400" />
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5 text-purple-400" />
              </Button>
            </a>

            <a href="mailto:souza.gab@hotmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5 text-purple-400" />
              </Button>
            </a>
          </div>
        </div>

        {/* LADO IMAGEM */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
