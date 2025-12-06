"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Layers, Hexagon, Network, Globe } from "lucide-react"
import { 
   SiSpringboot, SiPython, SiGo, SiReact, SiTypescript, SiTailwindcss, 
  SiPostgresql, SiMongodb, SiMysql, SiDocker, SiApachekafka, SiGit, SiGithubactions, SiPostman 
} from 'react-icons/si';


const technologies = [
  // --- BACKEND ---
  
  { name: "Spring Boot", category: "Backend", icon: <SiSpringboot className="w-8 h-8" /> },
  { name: "Python", category: "Backend", icon: <SiPython className="w-8 h-8" /> },
  { name: "Golang", category: "Backend", icon: <SiGo className="w-8 h-8" /> },
  
  // --- FRONTEND ---
  { name: "React", category: "Frontend", icon: <SiReact className="w-8 h-8" /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="w-8 h-8" /> },
  { name: "Tailwind", category: "Frontend", icon: <SiTailwindcss className="w-8 h-8" /> },

  // --- DATABASE ---
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="w-8 h-8" /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb className="w-8 h-8" /> },
  
  // 💥 MySQL Fix: Nagbigay ito ng standard MySQL logo. Hindi ito ang Dolphin mascot, pero ito ang opisyal na logo ng library at guaranteed malinis.
  { name: "MySQL", category: "Database", icon: <SiMysql className="w-8 h-8" /> }, 
  
  // --- ARCHITECTURE ---
  // Hayaan nating Lucide ang gamit sa generic icons para consistent
  { name: "Microservices", category: "Architecture", icon: <Network className="w-8 h-8" /> },
  { name: "Hexagonal", category: "Architecture", icon: <Hexagon className="w-8 h-8" /> },
  { name: "Layered", category: "Architecture", icon: <Layers className="w-8 h-8" /> },
  { name: "REST API", category: "Architecture", icon: <Globe className="w-8 h-8" /> },

  // --- DEVOPS ---
  { name: "Docker", category: "DevOps", icon: <SiDocker className="w-8 h-8" /> },
  { name: "Git", category: "DevOps", icon: <SiGit className="w-8 h-8" /> }, 
  { name: "Kafka", category: "DevOps", icon: <SiApachekafka className="w-8 h-8" /> },
  { name: "Postman", category: "DevOps", icon: <SiPostman className="w-8 h-8" /> },
  // 💥 GitHub Actions Fix: Ito ang official slanted box logo. Dahil library-based na ito, wala nang glitch.
  { name: "GitHub Actions", category: "DevOps", icon: <SiGithubactions className="w-8 h-8" /> },
];
// Define Tabs
const categories = ["All", "Backend", "Database", "Frontend", "Architecture", "DevOps"]

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter items based on active category
  const filteredTech = technologies.filter(
    (tech) => activeCategory === "All" || tech.category === activeCategory
  )

  return (
    // BACKGROUND: Match About/Process Section (#01161d)
    <section id="stack" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#01161d]">
      
      {/* --- BACKGROUND LIGHTING --- */}
      <div className="absolute inset-0 bg-[#01161d] -z-50 hidden dark:block" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-4 border border-cyan-200 dark:border-cyan-500/20">
            My Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools and technologies I use to build robust, scalable systems.
          </p>
        </motion.div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-cyan-600 text-white border-cyan-600 shadow-lg shadow-cyan-500/20"
                  : "bg-white dark:bg-[#032b38] text-muted-foreground border-gray-200 dark:border-cyan-900/30 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

       
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-5 rounded-2xl bg-white dark:bg-[#032b38] border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-cyan-500/20 min-w-0 flex flex-col items-center text-center"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center w-full">
                  {/* Icon Container */}
                  <div className="text-cyan-700 dark:text-cyan-400 group-hover:text-cyan-500 group-hover:scale-110 transition-all duration-300 mb-4 p-3 rounded-xl bg-cyan-50 dark:bg-[#054052] border border-transparent group-hover:border-cyan-500/20 flex items-center justify-center mx-auto">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-base">
                      {tech.name}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-cyan-600/70 dark:group-hover:text-cyan-400/70 uppercase tracking-wider">
                      {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}