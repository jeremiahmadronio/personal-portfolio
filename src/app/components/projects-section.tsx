"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { ProjectGallery } from "./project-gallery"
import { PasswordModal } from "./password-modal"

// Import all screenshots
const priceMonitoringScreenshots = [
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 154722.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 154757.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 154820.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 154854.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 154929.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 154937.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155008.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155028.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155040.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155051.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155102.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155110.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155119.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155133.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155146.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155208.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155223.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155239.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155249.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155257.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155311.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155319.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155329.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155352.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155412.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155427.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155435.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155442.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155557.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155622.png",
  "/pricemonitoring&nbudgetplanner/Screenshot 2025-12-06 155633.png",
]

const projects = [
  {
    title: "Budget Planner & Price Monitoring",
    description:
      "A web app for checking real-time market prices and planning your budget. It automatically scrapes price data from the Department of Agriculture and updates whenever DA releases new info. The microservice for web scraping is built in Python (FastAPI), with a React + TypeScript + Tailwind frontend and Spring Boot integration. Tech stack: PostgreSQL, FastAPI, Spring Boot, React, TypeScript, Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Spring Boot", "Python", "PostgreSQL"],
    image: "/images/price.png",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-blue-500/20 to-cyan-500/20",
    screenshots: priceMonitoringScreenshots,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A simple online shop for skin care and beauty products.",
    technologies: ["React", "Tailwind CSS", "Spring Boot", "Python", "PostgreSQL"],
    image: "/images/eco.png",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Barber Shop Booking System",
    description:
      "A web-based booking system for barber shops.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    image: "/images/barber.png",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-green-500/20 to-emerald-500/20",
  },
 
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [passwordModalOpen, setPasswordModalOpen] = useState(false)
  const [pendingAction, setPendingAction] = useState<{ type: "github" | "live" | "gallery"; url?: string } | null>(null)

  const handleOpenGallery = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setGalleryOpen(true)
  }

  const handlePasswordRequired = (action: "github" | "live" | "gallery", url?: string) => {
    setPendingAction({ type: action, url })
    setPasswordModalOpen(true)
  }

  const handlePasswordSubmit = (password: string) => {
    if (pendingAction?.type === "github" && pendingAction.url) {
      window.open(pendingAction.url, "_blank")
    } else if (pendingAction?.type === "live" && pendingAction.url) {
      window.open(pendingAction.url, "_blank")
    }
    setPendingAction(null)
  }

  return (
    <section id="work" className="py-24 px-6 relative bg-white dark:bg-[#01161d] dark:text-white">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <ProjectGallery
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        projectName={selectedProject?.title || ""}
        screenshots={selectedProject?.screenshots || []}
      />

      <PasswordModal
        isOpen={passwordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        onSubmit={handlePasswordSubmit}
        title={pendingAction?.type === "github" ? "GitHub Repository" : pendingAction?.type === "live" ? "Live Demo" : "Project Gallery"}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-cyan-400 text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto dark:text-white/80">
            A collection of projects showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl bg-card dark:bg-[#032b38] border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 dark:text-white"
            >
              {/* Project Image - no extra space above or below */}
              <div className="relative w-full bg-background dark:bg-[#01161d] overflow-hidden rounded-t-2xl" style={{ minHeight: '180px', height: 'auto', display: 'block' }}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />

                {/* Hover overlay with links */}
                <motion.div
                  className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-6 z-20 rounded-t-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => handlePasswordRequired("github", project.githubUrl)}
                    className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button
                    onClick={() => handlePasswordRequired("live", project.liveUrl)}
                    className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live</span>
                  </button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <button
                    onClick={() => handlePasswordRequired("gallery")}
                    className="flex-1 cursor-pointer"
                  >
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors text-left">
                      {project.title}
                    </h3>
                  </button>
                  <button
                    onClick={() => handlePasswordRequired("gallery")}
                    className="p-2 hover:bg-primary/20 rounded-lg transition-all duration-300 flex-shrink-0"
                    title="View gallery"
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
