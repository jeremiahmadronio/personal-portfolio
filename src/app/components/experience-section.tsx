"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description:
      "Building custom web solutions for clients worldwide. Specializing in e-commerce platforms, and web applications.",
    technologies: ["TypeScript", "Golang", "Tailwind CSS", "Microservices Architecture","PostgreSQL", "Docker" ,"Kafka" ],
  },
  {
    period: "2024",
    role: "Full Stack Developer",
    company: "STI College Novaliches",
    description:
      "Primarily focused on developing enterprise backend foundations, utilizing frameworks to build robust APIs. Successfully integrated these services with clean, responsive user interfaces for end-user interaction.",
    technologies: ["Spring Boot", "React", "MySQL", "REST APIs","Layered Architecture","Git","Tailwind CSS" ],
  },
  {
    period: "2023",
    role: "Programming Foundations",
    company: "STI College Novaliches",
    description:
      "Gained solid foundational skills in key programming languages. Mastered core concepts in Java and Python while building basic web components using HTML, CSS, and JavaScript.",
    technologies: ["Java",  "Python", "HTML","JS", "CSS"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#01161d]">
      {/* --- BACKGROUND LIGHTING (Match About Section) --- */}
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-[#01161d] -z-50 hidden dark:block" />
      {/* 2. THE SPOTLIGHT: Malaking light source sa gitna */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-[#01161d]/40 to-transparent -z-40 pointer-events-none" />
      {/* 3. Horizontal Light Line (Tech Accent) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
      {/* 4. Subtle Orbs for Ambient Light */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Professional Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                </div>

                <motion.div
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <span className="text-primary font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
