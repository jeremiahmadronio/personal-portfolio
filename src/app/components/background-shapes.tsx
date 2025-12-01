"use client"

import { motion } from "framer-motion"

export function BackgroundShapes() {
  return (
    <>
      {/* Top Left Orb */}
      <motion.div
        className="absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.18) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Top Right Orb */}
      <motion.div
        className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Bottom Left Orb */}
      <motion.div
        className="absolute -left-32 bottom-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
      />

      {/* Bottom Right Orb */}
      <motion.div
        className="absolute -right-40 bottom-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />

      {/* Center Large Orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 80%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
      />
      {/* Extra animated lines for more coverage */}
      <motion.div
        className="absolute left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.25), transparent)",
          top: "30%",
        }}
        animate={{
          opacity: [0, 0.3, 0],
          x: [-80, 80, -80],
        }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.18), transparent)",
          top: "60%",
        }}
        animate={{
          opacity: [0, 0.25, 0],
          x: [60, -60, 60],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.18), transparent)",
          top: "90%",
        }}
        animate={{
          opacity: [0, 0.2, 0],
          x: [-40, 40, -40],
        }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
      />

      <motion.div
        className="absolute -left-40 top-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="absolute right-1/4 bottom-0 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon
              points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      <motion.div
        className="absolute right-[-20px] top-10 w-40 h-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-primary/25" />
        <div className="absolute inset-3 rounded-full border border-dashed border-accent/20" />
        <div className="absolute inset-6 rounded-full border border-dotted border-primary/15" />
      </motion.div>

      <motion.div
        className="absolute -left-16 bottom-32 w-32 h-32"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-accent/25" />
        <div className="absolute inset-4 rounded-full border border-primary/20" />
      </motion.div>

      <motion.div
        className="absolute left-1/3 -top-10 w-28 h-28"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-primary/20" />
      </motion.div>

      <motion.div
        className="absolute right-1/4 bottom-10 w-24 h-24"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-accent/20" />
        <div className="absolute inset-2 rounded-full border border-dotted border-primary/15" />
      </motion.div>

      {[
        // Extra squares for more coverage
        { top: "60%", right: "18%", size: 14, delay: 2.2, rotation: 30 },
        { top: "35%", left: "18%", size: 10, delay: 2.7, rotation: 15 },
        { top: "70%", right: "15%", size: 12, delay: 3.2, rotation: 60 },
        { top: "85%", left: "8%", size: 10, delay: 3.7, rotation: 90 },
        { top: "10%", right: "8%", size: 16, delay: 0, rotation: 45 },
        { top: "25%", right: "3%", size: 12, delay: 0.5, rotation: 0 },
        { top: "45%", right: "12%", size: 14, delay: 1, rotation: 45 },
        { top: "15%", left: "5%", size: 10, delay: 1.5, rotation: 0 },
        { top: "55%", left: "3%", size: 16, delay: 2, rotation: 45 },
        { top: "75%", left: "10%", size: 12, delay: 2.5, rotation: 0 },
        { top: "80%", right: "6%", size: 10, delay: 3, rotation: 45 },
        { top: "5%", left: "15%", size: 8, delay: 3.5, rotation: 0 },
      ].map((item, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute border-2 border-primary/25"
          style={{
            top: item.top,
            right: item.right,
            left: item.left,
            width: item.size,
            height: item.size,
            rotate: `${item.rotation}deg`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [item.rotation, item.rotation + 180, item.rotation],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: item.delay,
          }}
        />
      ))}

      {[
        // Extra dots for more coverage
        { top: "30%", left: "25%", size: 4, delay: 1.1 },
        { top: "60%", right: "10%", size: 5, delay: 2.3 },
        { top: "80%", left: "20%", size: 3, delay: 3.5 },
        { top: "15%", right: "30%", size: 4, delay: 2.8 },
        { top: "8%", right: "5%", size: 4, delay: 0 },
        { top: "12%", right: "15%", size: 3, delay: 0.3 },
        { top: "20%", right: "2%", size: 5, delay: 0.6 },
        { top: "28%", right: "18%", size: 3, delay: 0.9 },
        { top: "35%", right: "8%", size: 4, delay: 1.2 },
        { top: "42%", right: "22%", size: 3, delay: 1.5 },
        { top: "50%", left: "5%", size: 5, delay: 1.8 },
        { top: "58%", left: "12%", size: 3, delay: 2.1 },
        { top: "65%", left: "3%", size: 4, delay: 2.4 },
        { top: "72%", left: "18%", size: 3, delay: 2.7 },
        { top: "78%", right: "15%", size: 4, delay: 3 },
        { top: "85%", right: "5%", size: 3, delay: 3.3 },
        { top: "92%", left: "8%", size: 5, delay: 3.6 },
        { top: "5%", left: "25%", size: 3, delay: 3.9 },
        { top: "18%", left: "8%", size: 4, delay: 4.2 },
        { top: "88%", right: "25%", size: 3, delay: 4.5 },
      ].map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full bg-primary/40"
          style={{
            top: dot.top,
            right: dot.right,
            left: dot.left,
            width: dot.size * 3,
            height: dot.size * 3,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {[
        // Extra pluses for more coverage
        { top: "10%", left: "30%", size: 18, delay: 2.2 },
        { top: "50%", right: "10%", size: 20, delay: 3.1 },
        { top: "90%", left: "10%", size: 16, delay: 4.3 },
        { top: "15%", right: "20%", size: 24, delay: 0 },
        { top: "35%", left: "8%", size: 20, delay: 1 },
        { top: "60%", right: "25%", size: 18, delay: 2 },
        { top: "80%", left: "15%", size: 22, delay: 3 },
        { top: "25%", left: "20%", size: 16, delay: 4 },
        { top: "70%", right: "8%", size: 20, delay: 5 },
      ].map((plus, i) => (
        <motion.div
          key={`plus-${i}`}
          className="absolute text-primary/20 font-light"
          style={{
            top: plus.top,
            right: plus.right,
            left: plus.left,
            fontSize: plus.size,
          }}
          animate={{
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, 90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: plus.delay,
          }}
        >
          +
        </motion.div>
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Constellation lines */}
        <motion.line
          x1="10%"
          y1="20%"
          x2="25%"
          y2="35%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary/10"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.line
          x1="75%"
          y1="15%"
          x2="90%"
          y2="30%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent/10"
          animate={{ opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.line
          x1="5%"
          y1="60%"
          x2="20%"
          y2="75%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary/10"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
        <motion.line
          x1="80%"
          y1="70%"
          x2="95%"
          y2="85%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent/10"
          animate={{ opacity: [0.06, 0.18, 0.06] }}
          transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
        />
      </svg>

      <motion.div
        className="absolute left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.4), transparent)",
          top: "15%",
        }}
        animate={{
          opacity: [0, 0.5, 0],
          x: [-100, 100, -100],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)",
          top: "45%",
        }}
        animate={{
          opacity: [0, 0.4, 0],
          x: [100, -100, 100],
        }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.35), transparent)",
          top: "75%",
        }}
        animate={{
          opacity: [0, 0.45, 0],
          x: [-50, 150, -50],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
      />

      <motion.div
        className="absolute top-0 h-full w-px"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(20, 184, 166, 0.3), transparent)",
          left: "15%",
        }}
        animate={{
          opacity: [0, 0.35, 0],
          y: [-50, 100, -50],
        }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-0 h-full w-px"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.25), transparent)",
          right: "20%",
        }}
        animate={{
          opacity: [0, 0.3, 0],
          y: [50, -100, 50],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
      />

      <motion.div
        className="absolute left-6 bottom-[20%] text-primary/15 text-5xl font-mono"
        animate={{ opacity: [0.1, 0.25, 0.1], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {"</>"}
      </motion.div>

      <motion.div
        className="absolute right-8 top-[12%] text-accent/15 text-4xl font-mono"
        animate={{ opacity: [0.08, 0.2, 0.08], y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        className="absolute left-[15%] top-[8%] text-primary/12 text-3xl font-mono"
        animate={{ opacity: [0.06, 0.18, 0.06], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      >
        {"[ ]"}
      </motion.div>

      <motion.div
        className="absolute right-[18%] bottom-[15%] text-accent/12 text-3xl font-mono"
        animate={{ opacity: [0.08, 0.2, 0.08], y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
      >
        {"=>"}
      </motion.div>

      <motion.div
        className="absolute left-[8%] top-[45%] text-primary/10 text-2xl font-mono"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
      >
        {"//"}
      </motion.div>

      <motion.div
        className="absolute right-[5%] top-[55%] text-accent/10 text-2xl font-mono"
        animate={{ opacity: [0.06, 0.16, 0.06] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 }}
      >
        {"( )"}
      </motion.div>

      {[
        { top: "22%", right: "10%", size: 12, delay: 0.5 },
        { top: "68%", left: "6%", size: 10, delay: 1.5 },
        { top: "40%", left: "12%", size: 14, delay: 2.5 },
        { top: "85%", right: "18%", size: 10, delay: 3.5 },
      ].map((tri, i) => (
        <motion.div
          key={`tri-${i}`}
          className="absolute"
          style={{
            top: tri.top,
            right: tri.right,
            left: tri.left,
            width: 0,
            height: 0,
            borderLeft: `${tri.size / 2}px solid transparent`,
            borderRight: `${tri.size / 2}px solid transparent`,
            borderBottom: `${tri.size}px solid rgba(20, 184, 166, 0.2)`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 8 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: tri.delay,
          }}
        />
      ))}

      {[
        { top: "30%", right: "5%", size: 60 },
        { top: "70%", left: "5%", size: 50 },
        { top: "10%", left: "30%", size: 40 },
        { top: "85%", right: "30%", size: 45 },
      ].map((circle, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full border border-primary/15"
          style={{
            top: circle.top,
            right: circle.right,
            left: circle.left,
            width: circle.size,
            height: circle.size,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0, 0.15],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.div
        className="absolute top-[20%] left-[5%] w-32 h-32 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[25%] right-[8%] w-40 h-40 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
    </>
  )
}
