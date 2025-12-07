"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, Share2, Send, Download, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExpandableInfographicProps {
  src: string
  alt: string
  title?: string
  className?: string
}

export function ExpandableInfographic({ src, alt, title, className = "" }: ExpandableInfographicProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href)
    }
  }, [])

  const openSharePopup = (url: string) => {
    window.open(url, "share", "width=600,height=400,menubar=no,toolbar=no")
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = shareUrl
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = src
    const filename = title 
      ? `${title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.png`
      : src.split("/").pop() || "infographic.png"
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getFullImageUrl = () => {
    if (typeof window === "undefined") return src
    return src.startsWith("http") ? src : `${window.location.origin}${src}`
  }

  const shareTitle = title || alt

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

      {/* Share Bar */}
      {isMounted && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400 text-center sm:text-left">
            Share this infographic — help others discover Ergo
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
              onClick={() =>
                openSharePopup(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareTitle}\n${shareUrl}\n@BuildOnErgo $ERG`)}`
                )
              }
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>X</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
              onClick={() =>
                openSharePopup(
                  `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
                )
              }
            >
              <Send className="h-3.5 w-3.5" />
              <span>Telegram</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
              onClick={() => {
                const imageUrl = getFullImageUrl()
                openSharePopup(
                  `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(shareTitle)}`
                )
              }}
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Pinterest</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
              onClick={handleDownload}
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
              onClick={handleCopyLink}
            >
              <Copy className="h-3.5 w-3.5" />
              <span>{copied ? "Copied!" : "Copy link"}</span>
            </Button>
          </div>
        </div>
      )}

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

