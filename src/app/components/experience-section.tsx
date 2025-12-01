"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description:
      "Building custom web solutions for clients worldwide. Specializing in landing pages, e-commerce platforms, and web applications.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Tech Startup",
    description:
      "Developed responsive user interfaces and implemented complex features for a SaaS platform. Collaborated with designers and backend developers.",
    technologies: ["React", "TypeScript", "Redux", "REST APIs"],
  },
  {
    period: "2022 — 2023",
    role: "Junior Developer",
    company: "Software Agency",
    description:
      "Started my professional journey building web applications with Java Spring Boot and React. Gained experience in agile methodologies.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
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
