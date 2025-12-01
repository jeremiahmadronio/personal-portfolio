"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BackgroundShapes } from "./background-shapes"


export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-0 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated gradient orbs */}
        <motion.div
          className="absolute top-[-25%] left-[5%] w-[1200px] h-[1000px] bg-primary/10 rounded-full blur-[220px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] right-[0%] w-[950px] h-[900px] bg-accent/8 rounded-full blur-[200px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 50%)",
          }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[20%] w-[520px] h-[520px] bg-primary/6 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[10%] w-[480px] h-[480px] bg-accent/5 rounded-full blur-[130px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 7 }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
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

        {/* Multiple animated scan lines */}
        <motion.div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{ top: "15%" }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, 150, 300],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent"
          style={{ top: "50%" }}
          animate={{
            opacity: [0, 0.35, 0],
            y: [0, 120, 240],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 4 }}
        />
        <motion.div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{ top: "80%" }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [-100, 50, 200],
          }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 8 }}
        />

        {/* Floating particles across entire background */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`bg-particle-${i}`}
            className="absolute rounded-full bg-primary/20"
            style={{
              top: `${5 + ((i * 4.5) % 90)}%`,
              left: `${3 + ((i * 7) % 94)}%`,
              width: 3 + (i % 3) * 2,
              height: 3 + (i % 3) * 2,
            }}
            animate={{
              y: [0, -30 - (i % 20), 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left relative">

            {/* Animated background behind the name */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-8 w-[420px] h-[120px] md:w-[520px] md:h-[160px] pointer-events-none z-0"
              style={{ filter: "blur(32px)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30" />
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
            <BackgroundShapes />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[400px] sm:h-[400px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/15 to-accent/20 rounded-full blur-[60px]"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-accent/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-dotted border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-12 rounded-full border border-dashed border-accent/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            <motion.div
              className="absolute top-1/2 left-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]"
              style={{ marginLeft: "-210px", marginTop: "-210px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/70 shadow-lg shadow-primary/30" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/50" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              style={{ marginLeft: "-160px", marginTop: "-160px" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute top-[15%] left-[15%] w-2 h-2 rounded-full bg-accent/50" />
              <div className="absolute bottom-[15%] right-[15%] w-2.5 h-2.5 rounded-full bg-primary/60" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 w-[500px] h-[500px]"
              style={{ marginLeft: "-250px", marginTop: "-250px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40" />
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent/40" />
            </motion.div>

            {/* Photo container - using your formal photo */}
            <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-2xl shadow-primary/10">
              <Image
                src="/images/jeremiah-profile-preview.png"
                alt="Jeremiah Madronio"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
