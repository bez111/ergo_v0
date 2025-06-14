"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function EcosystemShowcase() {
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
      image: "/decentralized-exchange.png",
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
      image: "/audio-mixer.png",
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
      image: "/sigmausd-concept.png",
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
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-primary/30">
      {/* Статичный фон */}
      <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] opacity-20 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header with category tabs */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-mono">
                Decentralize Everything.
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
          {/* Featured project showcase */}
          <div className="grid lg:grid-cols-2 gap-8 bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden">
            {/* Visual/Image side */}
            <div className="relative h-64 lg:h-96 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-20 bg-cover bg-center"></div>
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  width={300}
                  height={200}
                  className="object-contain filter brightness-110 contrast-125"
                />
              </div>
            </div>
            {/* Info side */}
            <div className="flex flex-col justify-center p-8 gap-4">
              <h3 className="text-3xl font-bold text-primary mb-2">{currentProject.title}</h3>
              <div className="text-lg text-white font-mono mb-2">{currentProject.subtitle}</div>
              <p className="text-gray-300 mb-4">{currentProject.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {currentProject.stats.map((stat) => (
                  <div key={stat.label} className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 text-primary font-mono text-sm">
                    <span className="font-bold mr-2">{stat.label}:</span> {stat.value}
                  </div>
                ))}
              </div>
              <Link href={currentProject.ctaLink} target={currentProject.ctaLink.startsWith('http') ? "_blank" : undefined}>
                <Button className="bg-primary text-black font-mono px-6 py-3 rounded-lg">
                  {currentProject.ctaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
