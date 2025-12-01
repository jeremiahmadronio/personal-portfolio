"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left content */}
            <div className="lg:col-span-3">
              {/* Profile header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src="/images/jeremiah-profile.png" alt="Jeremiah Madronio" fill className="object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Turning Ideas into Digital Reality</h3>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer | Problem Solver | Continuous Learner
                  </p>
                </div>
              </div>

              {/* About text */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a quiet but driven Full Stack Developer specializing in backend development, focused on building
                  scalable and robust systems. I enjoy transforming ideas into practical and meaningful digital
                  solutions. I've worked on various web development projects, explored cloud technologies, and
                  integrated APIs — not just to complete tasks, but to truly understand how systems connect and function
                  behind the scenes.
                </p>
                <p>
                  As a developer, I take pride in showing up with focus, discipline, and a strong problem-solving
                  mindset. I may not be the loudest in the room, but I think deeply before I code — aiming to build
                  systems that are reliable, efficient, and maintainable. My passion lies in backend development, where
                  I focus on designing scalable, robust, and efficient architectures built with clean, organized code.
                </p>
                <p>
                  I believe good code isn't just about syntax — it's about clarity, purpose, and collaboration. I value
                  teamwork, consistency, and a continuous commitment to learning and growth, both technically and
                  personally.
                </p>
                <p className="text-foreground/80 italic">
                  I'm still learning — and I've learned to embrace that journey. My goal is to grow into a dependable
                  developer who creates impactful, human-centered software that truly makes a difference.
                </p>
              </div>
            </div>

            {/* Right images */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-48 rounded-xl overflow-hidden"
              >
                <Image src="/modern-developer-workspace-with-multiple-monitors-.jpg" alt="Developer workspace" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative h-48 rounded-xl overflow-hidden"
              >
                <Image src="/clean-minimalist-desk-setup-with-laptop-and-coffee.jpg" alt="Clean desk setup" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
