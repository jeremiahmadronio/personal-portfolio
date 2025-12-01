"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Palette, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Understanding your requirements, goals, and target audience to create a solid foundation for the project.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "Planning the architecture, user experience, and visual design to ensure a seamless and intuitive interface.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "Building with clean, maintainable code following best practices and modern development standards.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Delivery",
    description: "Thorough testing, deployment, and ongoing support to ensure your application runs smoothly.",
  },
]

export function HowIWorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">How I Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My development process ensures quality, efficiency, and clear communication at every step
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 h-full"
              >
                {/* Large number background */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
