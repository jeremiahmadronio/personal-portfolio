"use client"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-cyan-500/20 bg-white dark:bg-[#01161d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Jeremiah Madronio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
