"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"


export function Contact() {
  



  return (
    <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600  bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                I'm always excited to work on new projects and collaborate with fellow developers and businesses.
                Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:souza.gab@hotmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition"
                  >
                    souza.gab@hotmail.com
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">Malaysia</p>
                </div>
              </div>

              {/* TELEPHONE */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Telephone</h4>
                  <a
                    href="tel:+601129245819"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-600 transition"
                  >
                    +60 11 2924-5819
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <Card className="p-8 bg-white dark:bg-slate-800 border-0 shadow-xl">
            <CardHeader className="p-0 mb-6">
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form
                action="https://formsubmit.co/souza.gab@hotmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://seusite.com/obrigado" />

                <div>
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Textarea name="message" placeholder="Your Message" rows={5} required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-400 to-purple-600  cursor-pointer"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
