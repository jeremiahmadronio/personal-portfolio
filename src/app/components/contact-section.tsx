"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/jeremiahmadronio", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jeremiah-madronio-27a184354/", icon: Linkedin },
  
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)
  const [errorTimeout, setErrorTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault?.()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      // Clear any existing timeout
      if (errorTimeout) clearTimeout(errorTimeout)
      
      setStatus("error")
      const newTimeout = setTimeout(() => setStatus(null), 5000)
      setErrorTimeout(newTimeout)
      return
    }

    
    if (errorTimeout) clearTimeout(errorTimeout)
    
    setIsSubmitting(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error(`Server error: ${res.status}`)

      setFormData({ name: "", email: "", message: "" })
      setStatus("success")
    } catch (error) {
      console.error("Submit error:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
      // Clear any existing timeout
      if (errorTimeout) clearTimeout(errorTimeout)
      
      const newTimeout = setTimeout(() => setStatus(null), 5000)
      setErrorTimeout(newTimeout)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (errorTimeout) clearTimeout(errorTimeout)
    }
  }, [errorTimeout])

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#01161d]">
      {/* Background decoration */}

      {/* 2. THE SPOTLIGHT: Malaking light source sa gitna */}
      {/* Ito ang magpapatanggal ng "boring" look. Nagbibigay ito ng depth. */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-[#01161d]/40 to-transparent -z-40 pointer-events-none" />

      {/* 3. Horizontal Light Line (Tech Accent) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

      {/* 4. Subtle Orbs for Ambient Light */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-lg">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mt-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
                Let's Create Impact
                <br />
                <span className="text-cyan-600 dark:text-cyan-400">Together</span>
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                <p>
                  I'm open to collaboration, freelance work, and exciting ideas. If you have a project or just wanna connect, I'll get back to you ASAP.
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-4 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 w-fit"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 flex-shrink-0">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {link.name === "GitHub" ? "jeremiahmadronio" : "Jeremiah Madronio"}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white dark:bg-[#032b38] border border-gray-200 dark:border-cyan-500/30 rounded-2xl shadow-lg dark:shadow-cyan-500/10 p-8 backdrop-blur-sm">
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-cyan-300 ml-1">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-cyan-500/30 bg-white dark:bg-[#054052] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-cyan-200/50 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 outline-none transition-all"
                      placeholder="Your Name"
                    />
                    {formData.name && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-cyan-300 ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-cyan-500/30 bg-white dark:bg-[#054052] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-cyan-200/50 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 outline-none transition-all"
                      placeholder="you@email.com"
                    />
                    {formData.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-cyan-300 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-cyan-500/30 bg-white dark:bg-[#054052] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-cyan-200/50 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 outline-none transition-all resize-none"
                    placeholder="Type your message..."
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-300 bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/40 p-3 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message sent successfully!</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-500/20 border border-red-200 dark:border-red-500/40 p-3 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Please fill in all fields correctly.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-lg font-semibold bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      Sending{" "}
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}