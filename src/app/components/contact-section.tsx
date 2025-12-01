"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Email", href: "mailto:hello@jeremiah.dev", icon: Mail },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6"
          >
            <Send className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently open to new opportunities and interesting projects. Whether you have a question or just want
            to say hi, I'll do my best to get back to you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild size="lg" className="group rounded-full px-8 mb-12">
              <a href="mailto:hello@jeremiah.dev">
                Say Hello
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
