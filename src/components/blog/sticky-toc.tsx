"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface TOCItem {
  label: string
  href: string
}

interface StickyTOCProps {
  items: TOCItem[]
  title?: string
}

export function StickyTOC({ items, title = "Article Contents" }: StickyTOCProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Show TOC after scrolling 300px
      setIsVisible(window.scrollY > 300)

      // Calculate reading progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      setProgress(Math.min((scrolled / documentHeight) * 100, 100))

      // Find active section
      const sections = items.map(item => item.href.replace('#', ''))
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-32 z-40 hidden 2xl:block"
          style={{ 
            maxHeight: "calc(100vh - 200px)",
            left: "calc(50% + 480px)" // Position right after article (max-w-4xl = 896px / 2 + gap)
          }}
        >
          <div className="bg-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 w-64 shadow-2xl">
            {/* Progress bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-l-2xl overflow-hidden">
              <motion.div 
                className="w-full bg-gradient-to-b from-orange-500 to-orange-600"
                style={{ height: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-4 pl-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-white">{title}</span>
              </div>
              <span className="text-xs text-neutral-500">{Math.round(progress)}%</span>
            </div>

            {/* Navigation */}
            <nav className="space-y-1 pl-2">
              {items.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full text-left text-sm py-1.5 px-2 rounded-lg transition-all duration-200 flex items-center gap-2",
                      isActive 
                        ? "bg-orange-500/20 text-orange-400 font-medium" 
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors",
                      isActive ? "bg-orange-400" : "bg-neutral-600"
                    )} />
                    <span className="truncate">{item.label}</span>
                  </button>
                )
              })}
            </nav>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="mt-4 w-full flex items-center justify-center gap-2 text-xs text-neutral-500 hover:text-orange-400 transition-colors py-2 border-t border-white/5"
            >
              <ChevronUp className="w-3 h-3" />
              Back to top
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

