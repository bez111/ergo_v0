"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { CyberButton } from "@/components/animations/cyber-button"
import { GlitchText } from "@/components/animations/glitch-text"

// Stable messages to avoid re-creating the array on every render
const HERO_MESSAGES: readonly string[] = [
  "Decentralized Money for a Free Society",
  "Global neutral settlement layer",
  "Territory of digital freedom",
  "Join the Resistance",
] as const

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Backward compatibility if we ever need to compute messages
  const texts = useMemo(() => HERO_MESSAGES, [])

  useEffect(() => {
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
    // Do NOT depend on `texts` reference to avoid effect resets
  }, [typedText, isTyping, currentTextIndex])

  const features = [
    { icon: Shield, label: "Secure PoW" },
    { icon: Zap, label: "Smart Contracts" },
    { icon: Code, label: "Privacy" },
    { icon: Layers, label: "eUTXO Model" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neutral-950 z-0 pointer-events-none"></div>

      {/* Subtle base texture (existing asset) */}
      <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] bg-cover bg-center opacity-10 z-0 pointer-events-none"></div>

      {/* Cyberpunk color glows (very subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12)_0%,transparent_60%)] z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12)_0%,transparent_60%)] z-0 pointer-events-none"></div>

      {/* Low-contrast animated grid lines with cyan/magenta tint */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:40px_40px] z-0"
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      ></motion.div>

      <div className="container relative z-20 px-4 md:px-6" ref={containerRef}>
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <motion.div
                className="text-7xl font-extrabold tracking-tighter text-primary"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255, 136, 0, 0.75)",
                }}
                transition={{ duration: 0.3 }}
              >
                <GlitchText text="ERGO" />
              </motion.div>
            </div>
          </FadeIn>

          {/* Animated Tagline */}
          <FadeIn delay={0.4}>
            <div className="space-y-4 relative">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                <span className="relative inline-block">
                  <span
                    className="relative z-10 font-mono whitespace-nowrap overflow-hidden"
                    style={{
                      fontSize: `${Math.max(0.6, 1 - typedText.length * 0.01)}em`,
                      transition: "font-size 0.1s ease-out",
                    }}
                  >
                    <span className="text-primary">&gt;</span> {typedText}
                    <motion.span
                      className="text-primary"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      _
                    </motion.span>
                  </span>
                </span>
              </h1>
              <motion.p
                className="text-xl md:text-2xl text-neutral-300 font-mono max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Join a movement for open, programmable, and censorship-resistant finance.
              </motion.p>
            </div>
          </FadeIn>

          {/* CTA Buttons */}
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

          {/* Feature Icons */}
          <FadeIn delay={1.2}>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl">
              {features.map((feature) => (
                <StaggerItem key={feature.label}>
                  <motion.div
                    className="flex flex-col items-center gap-2 text-center"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="rounded-full bg-primary/10 p-3 border border-primary/30"
                      whileHover={{
                        backgroundColor: "rgba(255, 136, 0, 0.2)",
                        borderColor: "rgba(255, 136, 0, 0.6)",
                        boxShadow: "0 0 20px rgba(255, 136, 0, 0.4)",
                      }}
                    >
                      <feature.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{feature.label}</p>
                    {/* brighten labels */}
                    <style jsx>{`
                      p { color: rgb(212 212 212); }
                    `}</style>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
