"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { CyberButton } from "@/components/animations/cyber-button"
import { GlitchText } from "@/components/animations/glitch-text"
import { cn } from "@/lib/utils"

export function EcosystemShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("DEFI")

  const categories = [
    { id: "DEFI", label: "DEFI" },
    { id: "PRIVACY", label: "PRIVACY" },
    { id: "STABLE", label: "STABLE ASSETS" },
    { id: "GAMING", label: "GAMING" },
  ]

  const featuredProjects = {
    DEFI: {
      title: "Rosen Bridge",
      subtitle: "Connecting Ergo's Ecosystem",
      description:
        "Seamlessly transfer assets between Ergo and other leading blockchains like Bitcoin, Ethereum, Cardano, and BSC with Rosen Bridge. Our secure Watcher & Guard system unlocks cross-chain liquidity and new DeFi possibilities.",
      image: "/placeholder.svg",
      stats: [
        { label: "Cross-Chain", value: "BTC, ETH, ADA, BSC & more" },
        { label: "Secure Bridge", value: "Watcher & Guard Model" },
        { label: "Unlock Liquidity", value: "Access New Markets" },
      ],
      ctaText: "VISIT ROSEN BRIDGE",
      ctaLink: "https://rosen.tech",
    },
    PRIVACY: {
      title: "ErgoMixer",
      subtitle: "Non-Custodial Privacy Protocol",
      description:
        "ErgoMixer provides cutting-edge privacy solutions using Sigma protocols and ring signatures. Enjoy complete financial privacy while maintaining regulatory compliance through optional transparency features.",
      image: "/placeholder.svg",
      stats: [
        { label: "Mixed Volume", value: "$3.7M" },
        { label: "Privacy Score", value: "99.9%" },
        { label: "Transactions", value: "25K+" },
      ],
      ctaText: "LEARN ABOUT PRIVACY ON ERGO",
      ctaLink: "/ecosystem/privacy",
    },

    STABLE: {
      title: "SigmaUSD",
      subtitle: "Algorithmic Stablecoin Protocol",
      description:
        "SigmaUSD is a crypto-backed algorithmic stablecoin protocol built on Ergo. It provides a decentralized way to create stable value without relying on traditional banking systems or centralized reserves.",
      image: "/placeholder.svg",
      stats: [
        { label: "Stability Score", value: "99.2%" },
        { label: "Total Supply", value: "$2.1M" },
        { label: "Collateral Ratio", value: "400%" },
      ],
      ctaText: "EXPLORE SIGMAUSD",
      ctaLink: "/ecosystem/sigmausd",
    },
    GAMING: {
      title: "Ergo Gaming Ecosystem",
      subtitle: "Blockchain Gaming Platform",
      description:
        "Experience the future of gaming with true asset ownership, play-to-earn mechanics, and decentralized tournaments. Powered by Ergo's efficient and secure blockchain infrastructure.",
      image: "/placeholder.svg?height=400&width=600",
      stats: [
        { label: "Active Games", value: "12" },
        { label: "Players", value: "5K+" },
        { label: "Rewards Paid", value: "$250K" },
      ],
      ctaText: "START GAMING ON ERGO",
      ctaLink: "/ecosystem/gaming",
    },
  }

  const currentProject = featuredProjects[activeCategory as keyof typeof featuredProjects]

  return (
    <section className="relative py-24 overflow-hidden" id="ecosystem">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

      {/* Digital rain effect removed - was causing issues */}

      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path
                d="M25,0 L50,14.4 L50,43.4 L25,57.8 L0,43.4 L0,14.4 Z"
                fill="none"
                stroke="rgba(255, 136, 0, 0.5)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Animated circuit lines */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <g stroke="rgba(255, 136, 0, 0.4)" fill="none" strokeWidth="1">
            <motion.path
              d="M0,500 Q250,400 500,500 T1000,500"
              strokeDasharray="5,5"
              animate={{
                strokeDashoffset: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </g>
        </svg>
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="flex flex-col gap-12">
          {/* Header with category tabs */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-mono">
                  <GlitchText text="Decentralize Everything" className="text-primary" />.
                </h2>
              </div>

              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "font-mono uppercase tracking-wider transition-all duration-300",
                      activeCategory === category.id
                        ? "bg-primary text-black border-primary hover:bg-primary/80"
                        : "bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
                    )}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Featured project showcase */}
          <FadeIn delay={0.2}>
            <motion.div
              key={activeCategory}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden"
            >
              {/* Visual/Image side */}
              <div className="relative h-64 lg:h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] opacity-20 bg-cover bg-center"></div>

                {/* Project branding/visual */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <Image
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.title}
                    width={300}
                    height={200}
                    className="object-contain filter brightness-110 contrast-125"
                  />
                </div>

                {/* Animated elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"
                  initial={false}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1 h-1 bg-primary rounded-full"
                  initial={false}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                />
              </div>

              {/* Content side */}
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-mono text-sm">&gt;</span>
                      <span className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                        {currentProject.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white font-mono tracking-wider mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-mono">{currentProject.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {currentProject.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-primary font-mono">{stat.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA - эта кнопка будет справа */}
                  <div className="flex justify-end">
                    <CyberButton
                      className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider w-fit"
                      asChild
                    >
                      <Link href={currentProject.ctaLink}>
                        {currentProject.ctaText}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CyberButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Bottom CTA - эта кнопка остается по центру */}
          <FadeIn delay={0.6}>
            <div className="text-center">
              <CyberButton
                className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-8 py-4"
                asChild
              >
                <Link href="/ecosystem/projects">EXPLORE ECOSYSTEM</Link>
              </CyberButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
