"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { CyberButton } from "@/components/animations/cyber-button"
import { GlitchText } from "@/components/animations/glitch-text"

const HERO_MESSAGES: readonly string[] = [
  "Decentralized Money for a Free Society",
  "Global neutral settlement layer",
  "Territory of digital freedom",
  "Join the Resistance",
] as const

export function HeroSection() {
  // Initialize with first text immediately visible
  const [typedText, setTypedText] = useState(HERO_MESSAGES[0])
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [animationsEnabled, setAnimationsEnabled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const texts = useMemo(() => HERO_MESSAGES, [])

  // Respect reduced-motion and defer non-critical animations to idle
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setAnimationsEnabled(false)
      // Text is already set in initial state
      return
    }
    
    // Start typing animation after a short delay
    const start = () => {
      setAnimationsEnabled(true)
      setTypedText("")  // Clear text to start typing animation
      setIsTyping(true)
    }
    
    if ("requestIdleCallback" in window) {
      ;(window as any).requestIdleCallback(start, { timeout: 800 })
    } else {
      setTimeout(start, 300)
    }
  }, [])

  useEffect(() => {
    if (!animationsEnabled) return
    let timeout: NodeJS.Timeout
    if (isTyping) {
      if (typedText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setTypedText(texts[currentTextIndex].slice(0, typedText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, typedText.length - 1))
        }, 50)
      } else {
        setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [animationsEnabled, typedText, isTyping, currentTextIndex, texts])

  const features = [
    { icon: Shield, label: "Secure PoW" },
    { icon: Zap, label: "Smart Contracts" },
    { icon: Code, label: "Privacy" },
    { icon: Layers, label: "eUTXO Model" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-neutral-950 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] bg-cover bg-center opacity-10 z-0 pointer-events-none"></div>
      {animationsEnabled && (
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:40px_40px] z-0"
          initial={false}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      )}

      <div className="container relative z-20 px-4 md:px-6" ref={containerRef}>
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="relative">
            <div className="text-7xl font-extrabold tracking-tighter text-primary">
              <GlitchText text="ERGO" />
            </div>
          </div>

          <div className="space-y-4 relative">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
              <span className="relative inline-block">
                <span
                  className="relative z-10 font-mono whitespace-nowrap overflow-hidden"
                  style={{
                    fontSize: `${Math.max(0.6, 1 - typedText.length * 0.01)}em`,
                    transition: animationsEnabled ? "font-size 0.1s ease-out" : undefined,
                  }}
                >
                  <span className="text-primary">&gt;</span> {typedText}
                  {animationsEnabled && (
                    <motion.span
                      className="text-primary"
                      initial={false}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      _
                    </motion.span>
                  )}
                </span>
              </span>
            </h1>
            {animationsEnabled && (
              <motion.p
                className="text-xl md:text-2xl text-neutral-300 font-mono max-w-3xl mx-auto"
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Join a movement for open, programmable, and censorship-resistant finance.
              </motion.p>
            )}
            {!animationsEnabled && (
              <p className="text-xl md:text-2xl text-neutral-300 font-mono max-w-3xl mx-auto">
                Join a movement for open, programmable, and censorship-resistant finance.
              </p>
            )}
          </div>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 mt-8" staggerDelay={0.1}>
            <StaggerItem>
              <CyberButton
                size="lg"
                className="gap-2 bg-primary text-white hover:bg-primary/80 font-mono uppercase tracking-wider border-2 border-primary px-6 py-3"
                asChild
              >
                <Link href="/start" className="flex items-center">
                  <span className="text-white">&gt;</span>
                  <span className="ml-2">get-started</span>
                  <span className="ml-1 animate-pulse">_</span>
                </Link>
              </CyberButton>
            </StaggerItem>
            <StaggerItem>
              <CyberButton
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono uppercase tracking-wider"
                asChild
              >
                <Link href="/Docs">
                  <Code className="h-5 w-5" />
                  Read Docs
                </Link>
              </CyberButton>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full bg-primary/10 p-3 border border-primary/30">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
