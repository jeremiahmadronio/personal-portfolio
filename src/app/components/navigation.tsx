"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      const targetId = href.replace("#", "")
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent",
      )}
    > 
      <nav className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - Far Left */}
        <a href="#" className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors whitespace-nowrap flex-shrink-0">
          maya<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-6 py-3 text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full hidden md:flex w-14 h-14"
        >
          {mounted && (
            <motion.div
              initial={{ scale: 0.5 , opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun className="h-10 w-10" /> : <Moon className="h-10 w-10" />}
            </motion.div>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Mobile Controls - Theme + Menu */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full w-12 h-12"
          >
            {mounted && (theme === "dark" ? <Sun className="h-8 w-8" /> : <Moon className="h-8 w-8" />)}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full w-12 h-12"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-3 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}