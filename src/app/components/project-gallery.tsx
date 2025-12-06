"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface ProjectGalleryProps {
  isOpen: boolean
  onClose: () => void
  projectName: string
  screenshots: string[]
}

export function ProjectGallery({ isOpen, onClose, projectName, screenshots }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-6xl max-h-[90vh] bg-[#01161d] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white">{projectName} - Gallery</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Main Gallery */}
              <div className="flex-1 overflow-hidden flex">
                {/* Large Image Viewer */}
                <div className="flex-1 bg-black/40 flex items-center justify-center p-6 relative group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={screenshots[currentIndex]}
                        alt={`${projectName} screenshot ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>

                  {/* Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full">
                    <p className="text-sm font-medium text-white">
                      {currentIndex + 1} / {screenshots.length}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Sidebar */}
                <div className="w-32 bg-[#032b38] border-l border-cyan-500/20 overflow-y-auto flex flex-col gap-2 p-3">
                  {screenshots.map((screenshot, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentIndex
                          ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                          : "border-cyan-500/20 hover:border-cyan-500/50"
                      }`}
                    >
                      <Image
                        src={screenshot}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
