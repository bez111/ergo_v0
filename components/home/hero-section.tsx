"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Code, Shield, Zap, Layers } from "lucide-react"
import { CyberButton } from "@/components/animations/cyber-button"

const HERO_MESSAGES = [
  "Decentralized Money for a Free Society",
  "The globally-neutral settlement layer for programmable money.",
  "The open-source home of digital freedom",
  "Join the movement for decentralized, open-source money",
]

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Проверка на клиентскую сторону
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Typing animation
  useEffect(() => {
    if (!isClient) return
    
    const currentMessage = HERO_MESSAGES[currentTextIndex]
    if (!currentMessage) return
    
    let timeout: NodeJS.Timeout
    
    if (isTyping && typedText.length < currentMessage.length) {
        timeout = setTimeout(() => {
        setTypedText(currentMessage.slice(0, typedText.length + 1))
        }, 100)
    } else if (isTyping && typedText.length === currentMessage.length) {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
    } else if (!isTyping && typedText.length > 0) {
        timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1))
        }, 50)
    } else if (!isTyping && typedText.length === 0) {
      setCurrentTextIndex((prev) => (prev + 1) % HERO_MESSAGES.length)
        setIsTyping(true)
    }
    
    return () => clearTimeout(timeout)
  }, [typedText, isTyping, currentTextIndex, isClient])

  // Cursor blinking
  useEffect(() => {
    if (!isClient) return
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [isClient])

  const features = [
    { icon: Shield, label: "Secure PoW" },
    { icon: Zap, label: "Smart Contracts" },
    { icon: Code, label: "Privacy" },
    { icon: Layers, label: "eUTXO Model" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 lg:py-32">
      {/* Semi-transparent overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-0"></div>

      <div className="container relative z-20 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* ERGO Title */}
          <div className="relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-orange-500">
              ERGO
            </h2>
          </div>

          {/* Dynamic typing text */}
          <div className="space-y-4 relative">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
              <span className="relative inline-block font-mono" suppressHydrationWarning>
                <span className="text-orange-500">&gt;</span> {isClient ? typedText : HERO_MESSAGES[0]}
                <span
                  className={`text-orange-500 ${isClient && showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                  suppressHydrationWarning
                    >
                      _
                </span>
              </span>
            </h1>
            
                          <p className="text-lg md:text-xl text-neutral-300 font-mono max-w-[65ch] mx-auto leading-relaxed">
              Join a movement for open, programmable, and censorship-resistant finance.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <CyberButton
              className="gap-2 bg-orange-500 text-white hover:bg-orange-600 font-mono uppercase tracking-wider border-2 border-orange-500 px-6 py-3"
              asChild
            >
              <Link href="/start/introduction" className="inline-flex items-center gap-2">
                <span>&gt;</span>
                <span>Explore Ergo</span>
                <span className="animate-pulse">_</span>
              </Link>
            </CyberButton>
            
            <CyberButton
              className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-6 py-3"
              asChild
            >
              <Link href="#choose-path">
                Choose Your Path
              </Link>
            </CyberButton>
          </div>

          {/* Feature icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl">
            {features.map((feature, index) => (
              <div 
                key={feature.label} 
                className="flex flex-col items-center gap-2 text-center group cursor-pointer"
              >
                <div className="rounded-full bg-orange-500/10 p-3 border border-orange-500/30 group-hover:bg-orange-500/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-400 font-mono uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
