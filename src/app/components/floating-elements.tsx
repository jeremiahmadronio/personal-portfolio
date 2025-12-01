"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <>
      {/* Code bracket - top left */}
      <motion.div
        className="absolute -left-8 sm:-left-16 top-8 text-primary/40"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6" />
          <polyline points="8,6 2,12 8,18" />
        </svg>
      </motion.div>

      {/* Terminal icon - top right */}
      <motion.div
        className="absolute -right-8 sm:-right-16 top-12 text-accent/50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4,17 10,11 4,5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      </motion.div>

      {/* Database icon - left middle */}
      <motion.div
        className="absolute -left-12 sm:-left-20 top-1/2 text-primary/30"
        animate={{ y: [0, -12, 0], x: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      </motion.div>

      {/* Git branch - right middle */}
      <motion.div
        className="absolute -right-10 sm:-right-16 top-1/3 text-chart-3/40"
        animate={{ y: [0, -6, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      </motion.div>

      {/* Cube/Box - bottom left */}
      <motion.div
        className="absolute -left-6 sm:-left-12 bottom-16 text-accent/40"
        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </motion.div>

      {/* Lightning/Zap - bottom right */}
      <motion.div
        className="absolute -right-6 sm:-right-10 bottom-24 text-chart-5/40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
        </svg>
      </motion.div>

      {/* Decorative dots */}
      <motion.div
        className="absolute -left-4 top-20 w-2 h-2 rounded-full bg-primary/40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-4 top-32 w-3 h-3 rounded-full bg-accent/30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute right-8 bottom-8 w-2 h-2 rounded-full bg-chart-3/40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
      />
    </>
  )
}
