import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 70 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Supabase", level: 60 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 80 },
      { name: "Docker", level: 20 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
           Skills
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various web development
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 text-center text-violet-600">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
               As a web development student, I am continuously improving my skills while building real-world projects that combine creativity and functionality. Currently, I am deepening my knowledge of React, Next.js, and modern web practices, always seeking to transform ideas into meaningful digital experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
