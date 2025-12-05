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
    description: "Understanding your requirements, goals, and target audience.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description: "Planning the architecture, user experience, and visual design.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "Building with clean, maintainable code following modern standards.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Delivery",
    description: "Thorough testing, deployment, and ongoing support.",
  },
]

// --- FIXED COMPONENT: WavyConnector ---
// Added proper prop types to avoid errors
const WavyConnector = ({ type }: { type: 'horizontal' | 'vertical' }) => {
  
  if (type === "horizontal") {
    // Desktop: Horizontal "Kulot" Wave (Left to Right)
    return (
      <div className="hidden lg:block absolute top-1/2 -right-[12%] w-[24%] h-20 -translate-y-1/2 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
          {/* 1. Base Solid Line (Tuloy-tuloy, hindi putol-putol) */}
          <path 
            d="M0 12 C 25 24, 75 0, 100 12" 
            stroke="currentColor" 
            className="text-gray-200 dark:text-cyan-900/30" 
            strokeWidth="2" 
            fill="none"
          />
          
          {/* 2. Moving Energy Beam (Animation) */}
          <motion.path 
            d="M0 12 C 25 24, 75 0, 100 12" 
            stroke="url(#gradient-h)" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 1, 0],
              pathOffset: [0, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
          />
          <defs>
            <linearGradient id="gradient-h" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="0.5" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  // Mobile: Vertical "Kulot" Wave (Top to Bottom)
  return (
    <div className="block lg:hidden absolute -bottom-16 left-1/2 -translate-x-1/2 w-12 h-16 z-0 pointer-events-none">
       <svg width="100%" height="100%" viewBox="0 0 24 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
          {/* 1. Base Solid Line */}
          <path 
            d="M12 0 C 24 20, 0 44, 12 64" 
            stroke="currentColor" 
            className="text-gray-200 dark:text-cyan-900/30" 
            strokeWidth="2" 
            fill="none"
          />
          
          {/* 2. Moving Energy Beam */}
          <motion.path 
            d="M12 0 C 24 20, 0 44, 12 64" 
            stroke="url(#gradient-v)" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 1, 0],
              pathOffset: [0, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
          />
          <defs>
            <linearGradient id="gradient-v" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="0.5" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
    </div>
  )
}


export function HowIWorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#01161d]">
      
      {/* --- RICH COLORFUL BACKGROUND (The "Mix") --- */}
      <div className="absolute inset-0 bg-[#01161d] -z-50 hidden dark:block" />
      
      {/* 1. Main Teal Glow (Top Left) */}
      <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 2. Blue/Violet Haze (Bottom Right) */}
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-blue-600/10 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 3. Cyan Pop (Center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 4. Horizontal Line Separator */}
      <div className="absolute top-48 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-30" />


      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 relative z-10"
        >
             <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-4 border border-cyan-200 dark:border-cyan-500/20">
           My Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            How I Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             My development process ensures quality, efficiency, and clear communication at every step.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        {/* Adjusted gap-y to accommodate vertical connectors on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              
              {/* --- CONNECTORS (The "Kulot" Lines) --- */}
              {/* Only render connector if it's NOT the last item */}
              {index < steps.length - 1 && (
                <>
                   {/* Desktop: Horizontal Wave */}
                   <WavyConnector type="horizontal" />
                   
                   {/* Mobile: Vertical Wave (Connects bottom to top of next card) */}
                   <WavyConnector type="vertical" />
                </>
              )}

              <motion.div
                whileHover={{ y: -8 }}
                className="relative p-6 rounded-2xl bg-white dark:bg-[#032b38] border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 h-full shadow-md hover:shadow-cyan-500/20 z-10"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 text-6xl font-bold text-slate-200 dark:text-[#054052] group-hover:dark:text-cyan-900/40 transition-colors select-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-cyan-50 dark:bg-[#054052] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-transparent group-hover:border-cyan-500/30">
                    <step.icon className="w-7 h-7 text-cyan-700 dark:text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}