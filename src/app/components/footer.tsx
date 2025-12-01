"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Email", href: "mailto:hello@jeremiah.dev", icon: Mail },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Process", href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold text-foreground mb-4 block">
              Jeremiah<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jeremiah Madronio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
