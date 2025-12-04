"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ProfessionalEffects } from "./background-shapes"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-0 overflow-hidden relative bg-background">
      <div className="absolute inset-0 overflow-hidden">
        {/* UPDATED: Stronger Background Colors 
           Tinaasan ko ang opacity (mula /5 naging /20) para lumitaw ang kulay 
           at hindi magmukhang maputing usok lang.
        */}
        <motion.div
          className="absolute top-[-25%] left-[5%] w-[1200px] h-[1000px] bg-primary/20 rounded-full blur-[220px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] right-[0%] w-[950px] h-[900px] bg-accent/15 rounded-full blur-[200px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]"> {/* Tinaasan konti visibility ng grid */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`bg-particle-${i}`}
            className="absolute rounded-full bg-primary/20"
            style={{
              top: `${5 + ((i * 2.3) % 90)}%`,
              left: `${3 + ((i * 5) % 94)}%`,
              width: 2 + (i % 4),
              height: 2 + (i % 4),
            }}
            animate={{
              y: [0, -40 - (i % 25), 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + (i % 6),
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left relative">
            
            {/* Name Background Glow */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-8 w-[420px] h-[120px] md:w-[520px] md:h-[160px] pointer-events-none z-0"
              style={{ filter: "blur(40px)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 relative z-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Full Stack Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-2 relative z-10"
            >
              <span className="text-foreground">Jeremiah</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary mb-6"
            >
              Madronio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build clean, scalable web applications with modern technologies
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Currently focused on <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-primary font-medium">TypeScript</span>, and{" "}
              <span className="text-primary font-medium">Java Spring Boot</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Button asChild size="lg" className="group rounded-full px-8 bg-primary hover:bg-primary/90">
                <a href="#work">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-border hover:bg-primary/10 hover:border-primary hover:text-primary bg-transparent"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:hello@jeremiah.dev", icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Photo with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Background shapes component */}
            <ProfessionalEffects />

            {/* Photo container with enhanced frame effects */}
            <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]">
              
              {/* Main photo frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                
                {/* TINANGGAL KO NA YUNG GRADIENT OVERLAY DITO.
                   Dati may overlay dito na nagfe-fade to "background" color.
                   Yun ang nagpupuputi sa picture mo. Ngayon, clean image na lang.
                */}

                {/* Animated border glow - Subtle blue border only */}
                <motion.div
                  className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
                  style={{
                    border: '2px solid rgba(6, 182, 212, 0.3)', // Solid Tech Blue Color
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(6, 182, 212, 0)', // No glow
                      '0 0 10px rgba(6, 182, 212, 0.2)', // Very subtle glow
                      '0 0 0px rgba(6, 182, 212, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* TINANGGAL KO NA RIN YUNG "MIST/SMOKE" DIVS DITO.
                   Yun yung ulap sa baba na nagmumukhang puti sa light mode.
                */}

                <Image
                  src="/images/a.jfif"
                  alt="Jeremiah Madronio"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}