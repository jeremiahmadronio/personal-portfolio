"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, and secure Stripe payment integration. Built with performance and scalability in mind.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/modern-ecommerce-website-dashboard-dark-theme-with.jpg",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop interface, and team workspaces for seamless productivity.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/kanban-board-task-management-app-dark-theme-modern.jpg",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization platform with interactive charts, real-time metrics tracking, and customizable reports for data-driven decisions.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "/analytics-dashboard-with-charts-and-graphs-dark-th.jpg",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API backend for social networking with JWT authentication, real-time notifications, and scalable architecture.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "/api-documentation-interface-swagger-dark-theme.jpg",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-orange-500/20 to-amber-500/20",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 px-6 bg-muted/30 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 z-10`} />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay with links */}
                <motion.div
                  className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-6 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
