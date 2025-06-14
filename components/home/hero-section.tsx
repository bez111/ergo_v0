"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const texts = [
    "Decentralized Money for a Free Society",
    "Global neutral settlement layer",
    "Territory of digital freedom",
    "Join the Resistance",
  ]

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
  }, [typedText, isTyping, currentTextIndex, texts])

  const features = [
    { icon: Shield, label: "Secure PoW" },
    { icon: Zap, label: "Smart Contracts" },
    { icon: Code, label: "Privacy" },
    { icon: Layers, label: "eUTXO Model" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] opacity-20 bg-cover bg-center z-0"></div>

      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] z-0"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      ></motion.div>

      {/* Glowing elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>

      <div className="container relative z-10 px-4 md:px-6" ref={containerRef}>
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <motion.div
                className="text-7xl font-extrabold tracking-tighter text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                ERGO
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
                    <span className="text-primary animate-pulse">_</span>
                  </span>
                </span>
              </h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-400 font-mono max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Join a movement for open, programmable, and censorship-resistant finance.
              </motion.p>
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                href="/start"
                className="flex items-center gap-2 bg-primary text-white hover:bg-primary/80 font-mono uppercase tracking-wider border-2 border-primary px-6 py-3 rounded-lg"
              >
                <span className="text-white">&gt;</span>
                <span className="ml-2">get-started</span>
                <span className="ml-1 animate-pulse">_</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                href="/build"
                className="flex items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono uppercase tracking-wider px-6 py-3 rounded-lg"
              >
                <Code className="h-5 w-5" />
                Start Building
              </Link>
            </motion.div>
          </div>

          {/* Feature Icons */}
          <FadeIn delay={1.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl">
              {features.map((feature) => (
                <motion.div
                  key={feature.label}
                  className="flex flex-col items-center gap-2 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-white/70">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
