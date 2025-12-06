"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

interface ExpandableInfographicProps {
  src: string
  alt: string
  className?: string
}

export function ExpandableInfographic({ src, alt, className = "" }: ExpandableInfographicProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, closeModal])

  return (
    <>
      {/* Clickable Infographic */}
      <button
        onClick={openModal}
        className={`relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black cursor-zoom-in group ${className}`}
        aria-label={`Expand infographic: ${alt}`}
      >
        <div className="relative aspect-[16/9]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
        {/* Zoom hint on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 rounded-full p-3">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
      </button>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95" />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close infographic"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/70 text-sm max-w-2xl px-4">
              {alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

