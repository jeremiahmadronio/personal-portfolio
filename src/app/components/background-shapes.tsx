import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ProfessionalEffects() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  // Gamit tayo ng mas DARK na Cyan/Teal values (RGB: 8, 145, 178 -> Cyan-600) 
  // para visible siya sa White Background.
  const darkCyan = '8, 145, 178' 
  const darkTeal = '13, 148, 136'

  return (
    <>
      {/* Multi-layered Rotating Rings - SHARPER & DARKER FOR VISIBILITY */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 300 + i * 70,
            height: 300 + i * 70,
            border: `1px ${i % 2 === 0 ? 'solid' : 'dashed'} rgba(${darkCyan}, ${0.5 - i * 0.05})`, 
          }}
          animate={isMobile ? {} : {
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.01, 1],
          }}
          transition={isMobile ? {} : {
            rotate: {
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
           {i % 2 !== 0 && (
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-cyan-600" />
           )}
           {i % 2 !== 0 && (
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-cyan-600" />
           )}
        </motion.div>
      ))}

      {/* Enhanced Grid Background - VISIBLE LINES */}
      {!isMobile && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{ opacity: 0.3 }}
        >
          <svg className="w-full h-full" viewBox="0 0 600 600">
            <defs>
              <pattern
                id="professionalGrid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 30 0 L 0 0 0 30"
                  fill="none"
                  stroke={`rgba(${darkCyan}, 0.4)`}
                  strokeWidth="0.8"
                />
                <circle cx="0" cy="0" r="1.5" fill={`rgba(${darkCyan}, 0.6)`} /> 
              </pattern>
            </defs>
            <rect width="600" height="600" fill="url(#professionalGrid)" />
          </svg>
        </motion.div>
      )}

      {/* Advanced Corner Brackets - SOLID & SHARP */}
      {!isMobile && [
        { top: 'calc(50% - 220px)', left: 'calc(50% - 170px)', rotate: 0 },
        { top: 'calc(50% - 220px)', left: 'calc(50% + 145px)', rotate: 90 },
        { top: 'calc(50% + 195px)', left: 'calc(50% - 170px)', rotate: 270 },
        { top: 'calc(50% + 195px)', left: 'calc(50% + 145px)', rotate: 180 },
      ].map((corner, i) => (
        <React.Fragment key={`corner-group-${i}`}>
          <motion.div
            className="absolute"
            style={{
              top: corner.top,
              left: corner.left,
              rotate: corner.rotate,
              opacity: 0.8,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path
                d="M0 0 L40 0 M0 0 L0 40"
                fill="none"
                stroke={`rgba(${darkCyan}, 0.9)`}
                strokeWidth="2.5"
                strokeLinecap="square"
              />
              <path
                d="M8 0 L8 8 L0 8"
                fill="none"
                stroke={`rgba(${darkCyan}, 0.7)`}
                strokeWidth="2"
              />
              <rect x="36" y="0" width="4" height="4" fill={`rgba(${darkCyan}, 1)`} />
            </svg>
          </motion.div>
        </React.Fragment>
      ))}

      {/* Vertical Data Lines - DEEP COLORS */}

      {/* Horizontal Scan Lines - DEEP COLORS */}

      {/* Pulsing Frames - DARKER BORDERS */}

      {/* Particles - SOLID DARK DOTS */}
      {[...Array(isMobile ? 5 : 12)].map((_, i) => {
        const angle = (i * 360) / (isMobile ? 5 : 12)
        const radius = 160
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute top-1/2 left-1/2"
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: i % 2 === 0 ? `rgb(${darkCyan})` : `rgb(${darkTeal})`, 
              boxShadow: 'none',
              ...(isMobile ? { transform: `translate(${x * 0.6}px, ${y * 0.6}px)` } : {}),
            }}
            animate={isMobile ? {} : {
              x: [0, x * 0.8],
              y: [0, y * 0.8],
              opacity: [0, 1, 0.7],
              scale: [0.8, 1.2, 1],
            }}
            transition={isMobile ? {} : {
              duration: 10,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        )
      })}

      {/* Tech Indicator Lines - GRADIENT */}

      {/* Orbiting Tech Elements - Strong Outlines */}
      {!isMobile && [0, 1].map((i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute top-1/2 left-1/2"
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: `2px solid rgba(${darkCyan}, 0.8)`,
            background: 'transparent',
          }}
          animate={{
            x: [
              Math.cos((i * 180 * Math.PI) / 180) * 200,
              Math.cos(((i * 180 + 360) * Math.PI) / 180) * 200,
            ],
            y: [
              Math.sin((i * 180 * Math.PI) / 180) * 200,
              Math.sin(((i * 180 + 360) * Math.PI) / 180) * 200,
            ],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Orbiting Planets on Each Ring - Rotating WITH the rings */}
      {!isMobile && [0, 1, 2, 3, 4].map((ringIdx) => {
        const ringRadius = 150 + ringIdx * 70
        const numPlanets = 2 + ringIdx
        const ringDuration = 20 + ringIdx * 4
        const startAngle = (planetIdx: number) => (planetIdx * 360 / numPlanets)
        
        return [...Array(numPlanets)].map((_, planetIdx) => (
          <motion.div
            key={`planet-ring${ringIdx}-${planetIdx}`}
            className="absolute top-1/2 left-1/2"
            style={{
              transformOrigin: '0px 0px',
            }}
            animate={{
              rotate: ringIdx % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: ringDuration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: ringIdx % 2 === 0 ? `rgba(${darkCyan}, 0.85)` : `rgba(${darkTeal}, 0.75)`,
                boxShadow: ringIdx % 2 === 0 ? `0 0 10px rgba(${darkCyan}, 0.9)` : `0 0 10px rgba(${darkTeal}, 0.8)`,
                opacity: 0.75,
                left: Math.cos(((startAngle(planetIdx)) * Math.PI) / 180) * ringRadius,
                top: Math.sin(((startAngle(planetIdx)) * Math.PI) / 180) * ringRadius,
              }}
            />
          </motion.div>
        ))
      })}



      {/* Main Frame Glow - REDUCED BLUR, INCREASED OPACITY */}
      {!isMobile && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
          style={{
            width: '295px',
            height: '405px',
            border: `1px solid rgba(${darkCyan}, 0.6)`,
            boxShadow: `0 0 10px rgba(${darkCyan}, 0.25)`,
            opacity: 0.7,
          }}
        />
      )}

      {/* Data Streams - Solid Colors */}

      {/* Grid System - DARKER LINES */}

      {/* Tech Badge */}
      <div
        className="absolute"
        style={{
          top: 'calc(50% - 235px)',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.8,
        }}
      >
        <div className="px-4 py-1.5 rounded-full border border-cyan-600 bg-transparent backdrop-blur-[2px]">
          <span className="text-xs text-cyan-700 font-mono tracking-wider font-bold"></span>
        </div>
      </div>

      {/* Code Symbols - Darkest for visibility */}
      {!isMobile && [
        { symbol: '</>', x: -250, y: -190, delay: 0, size: 'text-base' },
        { symbol: '{ }', x: 250, y: -190, delay: 1, size: 'text-sm' },
        { symbol: '[ ]', x: -250, y: 190, delay: 2, size: 'text-sm' },
        { symbol: '=>', x: 250, y: 190, delay: 3, size: 'text-base' },
      ].map((item, i) => (
        <motion.div
          key={`symbol-${i}`}
          className={`absolute top-1/2 left-1/2 text-cyan-600/60 ${item.size} font-mono`} 
          style={{
            x: item.x,
            y: item.y,
            fontWeight: 800,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </>
  )
}