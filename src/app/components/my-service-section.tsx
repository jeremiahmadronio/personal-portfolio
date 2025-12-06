"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Layers, Plug, Server, Bot, Zap, Palette } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Custom Web Applications",
    description: "I build tailormade applications like dashboards, booking systems, and inventory tools specific to your business needs.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless connection and integration of third-party APIs and microservices.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Designing robust backend architectures that scale with your business needs.",
  },
  {
    icon: Bot,
    title: "Automation & Web Scraping",
    description: "Automate manual tasks. I build bots that collect data from websites (like price monitoring) to save you hours of work.",
  },
  {
    icon: Zap,
    title: "Bug Fixes & Optimization",
    description: "Fixing broken features, speeding up slow websites, and ensuring your app runs without errors.",
  },
  {
    icon: Palette,
    title: "Landing Pages & UI Implementation",
    description: "Pixel-perfect conversion pages. I turn your Figma designs into fast, mobile-responsive websites using React & Tailwind.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#01161d]">
       {/* --- BACKGROUND LIGHTING (Ito yung nagbibigay buhay) --- */}
      
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-[#01161d] -z-50" />

      {/* 2. THE SPOTLIGHT: Malaking light source sa gitna */}
      {/* Ito ang magpapatanggal ng "boring" look. Nagbibigay ito ng depth. */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-[#01161d]/40 to-transparent -z-40 pointer-events-none" />

     
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

    
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            My Services
          </span>
           <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-lg">
            Custom Web Development
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
        Turning complex ideas into reliable, high-performance web systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative p-6 rounded-2xl bg-white dark:bg-[#032b38] border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 h-full shadow-md hover:shadow-cyan-500/20 z-10"
                >
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-50 dark:bg-[#054052] group-hover:scale-110 transition-transform duration-300 border border-transparent group-hover:border-cyan-500/30">
                    <Icon className="w-7 h-7 text-cyan-700 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">{service.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
