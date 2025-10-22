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
import { useTranslations } from "next-intl"

export function EcosystemShowcase() {
  const t = useTranslations('ecosystemShowcase')
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("DEFI")

  const categories = [
    { id: "DEFI", label: t("categories.defi") || "DEFI" },
    { id: "PRIVACY", label: t("categories.privacy") || "PRIVACY" },
    { id: "STABLE", label: t("categories.stable") || "STABLE ASSETS" },
    { id: "GAMING", label: t("categories.gaming") || "GAMING" },
  ]

  const featuredProjects = {
    DEFI: {
      title: t("projects.rosenBridge.title") || "Rosen Bridge",
      subtitle: t("projects.rosenBridge.subtitle") || "Connecting Ergo's Ecosystem",
      description: t("projects.rosenBridge.description") || "Seamlessly transfer assets between Ergo and other leading blockchains like Bitcoin, Ethereum, Cardano, and BSC with Rosen Bridge. Our secure Watcher & Guard system unlocks cross-chain liquidity and new DeFi possibilities.",
      image: "/placeholder.svg",
      stats: [
        { label: t("projects.rosenBridge.stats.crossChain.label") || "Cross-Chain", value: t("projects.rosenBridge.stats.crossChain.value") || "BTC, ETH, ADA, BSC & more" },
        { label: t("projects.rosenBridge.stats.secureBridge.label") || "Secure Bridge", value: t("projects.rosenBridge.stats.secureBridge.value") || "Watcher & Guard Model" },
        { label: t("projects.rosenBridge.stats.unlockLiquidity.label") || "Unlock Liquidity", value: t("projects.rosenBridge.stats.unlockLiquidity.value") || "Access New Markets" },
      ],
      ctaText: t("projects.rosenBridge.cta") || "VISIT ROSEN BRIDGE",
      ctaLink: "https://rosen.tech",
    },
    PRIVACY: {
      title: t("projects.ergoMixer.title") || "ErgoMixer",
      subtitle: t("projects.ergoMixer.subtitle") || "Non-Custodial Privacy Protocol",
      description: t("projects.ergoMixer.description") || "ErgoMixer provides cutting-edge privacy solutions using Sigma protocols and ring signatures. Enjoy complete financial privacy while maintaining regulatory compliance through optional transparency features.",
      image: "/placeholder.svg",
      stats: [
        { label: t("projects.ergoMixer.stats.mixedVolume.label") || "Mixed Volume", value: t("projects.ergoMixer.stats.mixedVolume.value") || "$3.7M" },
        { label: t("projects.ergoMixer.stats.privacyScore.label") || "Privacy Score", value: t("projects.ergoMixer.stats.privacyScore.value") || "99.9%" },
        { label: t("projects.ergoMixer.stats.transactions.label") || "Transactions", value: t("projects.ergoMixer.stats.transactions.value") || "25K+" },
      ],
      ctaText: t("projects.ergoMixer.cta") || "LEARN ABOUT PRIVACY ON ERGO",
      ctaLink: "/ecosystem/privacy",
    },

    STABLE: {
      title: t("projects.sigmaUSD.title") || "SigmaUSD",
      subtitle: t("projects.sigmaUSD.subtitle") || "Algorithmic Stablecoin Protocol",
      description: t("projects.sigmaUSD.description") || "SigmaUSD is a crypto-backed algorithmic stablecoin protocol built on Ergo. It provides a decentralized way to create stable value without relying on traditional banking systems or centralized reserves.",
      image: "/placeholder.svg",
      stats: [
        { label: t("projects.sigmaUSD.stats.stabilityScore.label") || "Stability Score", value: t("projects.sigmaUSD.stats.stabilityScore.value") || "99.2%" },
        { label: t("projects.sigmaUSD.stats.totalSupply.label") || "Total Supply", value: t("projects.sigmaUSD.stats.totalSupply.value") || "$2.1M" },
        { label: t("projects.sigmaUSD.stats.collateralRatio.label") || "Collateral Ratio", value: t("projects.sigmaUSD.stats.collateralRatio.value") || "400%" },
      ],
      ctaText: t("projects.sigmaUSD.cta") || "EXPLORE SIGMAUSD",
      ctaLink: "/ecosystem/sigmausd",
    },
    GAMING: {
      title: t("projects.gaming.title") || "Ergo Gaming Ecosystem",
      subtitle: t("projects.gaming.subtitle") || "Blockchain Gaming Platform",
      description: t("projects.gaming.description") || "Experience the future of gaming with true asset ownership, play-to-earn mechanics, and decentralized tournaments. Powered by Ergo's efficient and secure blockchain infrastructure.",
      image: "/placeholder.svg?height=400&width=600",
      stats: [
        { label: t("projects.gaming.stats.activeGames.label") || "Active Games", value: t("projects.gaming.stats.activeGames.value") || "12" },
        { label: t("projects.gaming.stats.players.label") || "Players", value: t("projects.gaming.stats.players.value") || "5K+" },
        { label: t("projects.gaming.stats.rewardsPaid.label") || "Rewards Paid", value: t("projects.gaming.stats.rewardsPaid.value") || "$250K" },
      ],
      ctaText: t("projects.gaming.cta") || "START GAMING ON ERGO",
      ctaLink: "/ecosystem/gaming",
    },
  }

  const currentProject = featuredProjects[activeCategory as keyof typeof featuredProjects]

  return (
    <section className="relative py-24 overflow-hidden" id="ecosystem">
      {/* Semi-transparent overlay - same as GET STARTED WITH ERGO */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="flex flex-col gap-12">
          {/* Header with category tabs */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-mono">
                  <GlitchText text={t("title") || "Decentralize Everything"} className="text-primary" />.
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
            <Link href={currentProject.ctaLink}>
              <motion.div
                key={activeCategory}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden hover:border-primary/50 hover:bg-black/80 transition-all duration-300 cursor-pointer group"
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

                  {/* CTA indicator - показываем что карточка кликабельна */}
                  <div className="flex justify-end">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm group-hover:text-primary/80 transition-colors">
                      <span>{currentProject.ctaText}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          </FadeIn>

          {/* Bottom CTA - эта кнопка остается по центру */}
          <FadeIn delay={0.6}>
            <div className="text-center">
              <CyberButton
                className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-8 py-4"
                asChild
              >
                <Link href="/ecosystem/">{t("exploreEcosystem") || "EXPLORE ECOSYSTEM"}</Link>
              </CyberButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
