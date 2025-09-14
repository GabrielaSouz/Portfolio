import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Code, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate about creating innovative web solutions that bridge cultures and connect people across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Born in Brazil, currently studying and living in Malaysia. This multicultural experience enriches my
                  approach to web development and user experience design.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Currently pursuing a degree in Web Systems Analysis and Development at Descomplica University in Brazil. I am in my third semester of this distance-learning program, which allows me to balance academic studies with hands-on practice in real-world projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                <Code className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                <p className="text-slate-600 dark:text-slate-300">
                 Focused on modern web technologies such as React, Next.js, and responsive design principles, I aim to deliver engaging and accessible user experiences.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="text-center">
                <Globe className="h-16 w-16 mx-auto mb-6 text-purple-600" />
                <h3 className="text-2xl font-bold mb-4">My Mission</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To create web solutions that not only meet technical requirements but also provide meaningful
                  experiences for users worldwide. I believe in the power of technology to connect cultures and create
                  positive impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
