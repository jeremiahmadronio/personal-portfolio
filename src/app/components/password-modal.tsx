"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Lock } from "lucide-react"
import { useState } from "react"

interface PasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (password: string) => void
  title: string
}

export function PasswordModal({ isOpen, onClose, onSubmit, title }: PasswordModalProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate password check (you can replace with actual API call)
    if (password === "Jeremiah2003") {
      setPassword("")
      setIsLoading(false)
      onSubmit(password)
      onClose()
    } else {
      setError("Incorrect password. Try again.")
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setPassword("")
    setError("")
    onClose()
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
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-white dark:bg-[#032b38] border border-gray-200 dark:border-cyan-500/30 rounded-2xl shadow-2xl dark:shadow-cyan-500/20 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-cyan-500/20 bg-gray-50 dark:bg-[#01161d]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg">
                    <Lock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Access Required</h3>
                    <p className="text-xs text-gray-600 dark:text-cyan-300/60">{title}</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-cyan-500/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-cyan-300" />
                </button>
              </div>

              {/* Content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-cyan-300 block">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError("")
                    }}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-cyan-500/30 bg-white dark:bg-[#01161d] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-cyan-200/40 focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-500/20 outline-none transition-all"
                    autoFocus
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-red-50 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-300 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || !password}
                  className="w-full py-3 px-4 rounded-lg font-semibold bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Unlock Access
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 dark:text-cyan-300/50 text-center">
                  This content is password protected
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
