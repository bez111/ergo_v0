"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link } from "@/i18n/navigation"

interface AnimatedNavProps {
  items: Array<{
    title: string
    href?: string
    children?: Array<{
      title: string
      href: string
      description?: string
    }>
  }>
}

export function AnimatedNav({ items }: AnimatedNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className="flex space-x-8">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={item.href || "#"}
              className="text-white hover:text-primary transition-colors font-mono uppercase tracking-wider"
            >
              {item.title}
            </Link>
          </motion.div>

          <AnimatePresence>
            {hoveredIndex === index && item.children && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg border border-primary/30 rounded-lg p-4 z-50"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {item.children.map((child, childIndex) => (
                    <motion.div
                      key={child.title}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={child.href}
                        className="block p-2 rounded hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <div className="font-medium text-sm">{child.title}</div>
                        {child.description && <div className="text-xs text-gray-400 mt-1">{child.description}</div>}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}
