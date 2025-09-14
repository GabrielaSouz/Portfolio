"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Saudável em 30",
    description:
      "A web application designed to help women maintain a healthy lifestyle and consistent fitness routine. Built with a modern stack to deliver an intuitive and user-friendly experience.",
    image: "/images/saudavel-em-30.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase"],
    liveUrl: "https://www.saudavelem30.com/",
    // githubUrl: "#",
  },
  {
    title: "Calu Brazilian Cheese Bread",
    description:
      "An e-commerce website developed for a Brazilian cheese bread shop in Kuala Lumpur. Built on WordPress with custom code that allows customers to select products, place orders, and send them directly via WhatsApp.",
    image: "/images/calubrazilian.jpg",
    technologies: ["WordPress", "Custom PHP", "JavaScript", "CSS"],
    liveUrl: "https://calubraziliancheesebread.com/", // substitua pelo link real, se houver
    // githubUrl: "#",
  },
{
  title: "Ma che Bontá PWA",
  description:
    "A Progressive Web App designed for an Italian cuisine business, allowing customers to browse pasta and other dishes by category, add items to the cart, and enjoy a smooth and responsive ordering experience.",
  image: "/images/machebonta.jpg",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "Node.js"],
  liveUrl: "https://www.machebonta.com.br/", // substitua pelo link real, se houver
  // githubUrl: "#",
},
  {
     title: "AD Boas Novas",
  description:
    "A social project developed for a local evangelical church to manage and showcase monthly events. The platform allows the church to share event details with the community in an organized and accessible way.",
  image: "/images/boas-novas.jpg",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "MongoDB"],
  liveUrl: "https://adboasnovas.org/", // substitua pelo link real, se houver
  // githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "} Projects
          
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A collection of web applications and websites I&apos;ve built, showcasing
            my skills in modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-800 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-violet-200 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  {/* <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
