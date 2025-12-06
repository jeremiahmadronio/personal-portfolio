"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Zap, Target, Quote } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#01161d]">
      
      {/* --- BACKGROUND LIGHTING (Ito yung nagbibigay buhay) --- */}
      
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-[#01161d] -z-50" />

      {/* 2. THE SPOTLIGHT: Malaking light source sa gitna */}
      {/* Ito ang magpapatanggal ng "boring" look. Nagbibigay ito ng depth. */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-[#01161d]/40 to-transparent -z-40 pointer-events-none" />

     
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

    
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />


      {/* --- CONTENT --- */}
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Headline */}
           <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-4 border border-cyan-200 dark:border-cyan-500/20">
           My Anchor
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer focused on building <span className="text-cyan-600 dark:text-cyan-400 font-medium">scalable</span>, elegant solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* --- LEFT COLUMN: BIO --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
                Turning Ideas into <br/>
                <span className="text-cyan-600 dark:text-cyan-400 drop-shadow-md">
                  Digital Reality
                </span>
              </h3>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm a <strong className="text-foreground font-semibold border-b border-cyan-500/30">Full Stack Developer</strong> specializing in backend architecture. I build clean, purposeful solutions that solve real problems.
              </p>
              <p>
                With hands-on experience across web development and modern frameworks, I focus on understanding how systems truly work to deliver reliable code that stands the test of time.
              </p>
            </div>

            {/* Quote Box - Made slightly lighter */}
            <div className="mt-8 relative p-6 rounded-2xl border border-gray-200 dark:border-cyan-500/30 bg-white/50 dark:bg-[#032b38]/60 backdrop-blur-sm shadow-lg dark:shadow-cyan-900/10">
              <Quote className="absolute -top-3 -left-2 w-8 h-8 text-cyan-500/40 fill-cyan-500/10" />
              <p className="text-lg sm:text-xl text-foreground font-medium italic leading-relaxed relative z-10">
                "Every line of code is an opportunity to build something better. I create systems that scale, perform, and make a lasting impact."
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: FEATURE CARDS --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              {
                icon: Target,
                title: "Core Focus",
                description: "Backend systems, API design & scalable architecture",
                delay: 0.3,
              },
              {
                icon: Zap,
                title: "Approach",
                description: "Problem-solving first, clean code always, built to last",
                delay: 0.4,
              },
              {
                icon: Code2,
                title: "Philosophy",
                description: "Great software is clarity, purpose, and collaboration",
                delay: 0.5,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ x: 5 }}
                // UPDATED CARD STYLE:
                // dark:bg-[#032b38] -> Ito ay lighter shade kaysa sa background (#01161d). 
                // Nagdadagdag ito ng contrast para lumutang yung cards.
                className="group relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#032b38] border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 cursor-pointer shadow-md hover:shadow-cyan-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-[#054052] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 text-cyan-600 dark:text-cyan-400`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}