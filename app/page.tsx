import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Projects } from "../components/projects"
import { Skills } from "../components/skills"
import { Contact } from "../components/contact"
import { Navigation } from "../components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
