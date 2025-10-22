"use client"

import { useState, useRef } from "react"
import { useTranslations, useLocale } from "next-intl"
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
  const t = useTranslations('ecosystemShowcase')
  const locale = useLocale()

  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("DEFI")

  const categories = [
    { id: "DEFI", label: t('categories.defi') },
    { id: "PRIVACY", label: t('categories.privacy') },
    { id: "STABLE", label: t('categories.stable') },
    { id: "GAMING", label: t('categories.gaming') },
  ]

  const featuredProjects = {
    DEFI: {
      title: t('projects.rosenBridge.title'),
      subtitle: t('projects.rosenBridge.subtitle'),
      description: t('projects.rosenBridge.description'),
      image: "/placeholder.svg",
      stats: [
        { label: t('projects.rosenBridge.stats.crossChain.label'), value: t('projects.rosenBridge.stats.crossChain.value') },
        { label: t('projects.rosenBridge.stats.secureBridge.label'), value: t('projects.rosenBridge.stats.secureBridge.value') },
        { label: t('projects.rosenBridge.stats.unlockLiquidity.label'), value: t('projects.rosenBridge.stats.unlockLiquidity.value') },
      ],
      ctaText: t('projects.rosenBridge.cta'),
      ctaLink: "https://rosen.tech",
    },
    PRIVACY: {
      title: t('projects.ergoMixer.title'),
      subtitle: t('projects.ergoMixer.subtitle'),
      description: t('projects.ergoMixer.description'),
      image: "/placeholder.svg",
      stats: [
        { label: t('projects.ergoMixer.stats.mixedVolume.label'), value: t('projects.ergoMixer.stats.mixedVolume.value') },
        { label: t('projects.ergoMixer.stats.privacyScore.label'), value: t('projects.ergoMixer.stats.privacyScore.value') },
        { label: t('projects.ergoMixer.stats.transactions.label'), value: t('projects.ergoMixer.stats.transactions.value') },
      ],
      ctaText: t('projects.ergoMixer.cta'),
      ctaLink: "/ecosystem/privacy",
    },

    STABLE: {
      title: t('projects.sigmaUSD.title'),
      subtitle: t('projects.sigmaUSD.subtitle'),
      description: t('projects.sigmaUSD.description'),
      image: "/placeholder.svg",
      stats: [
        { label: t('projects.sigmaUSD.stats.stabilityScore.label'), value: t('projects.sigmaUSD.stats.stabilityScore.value') },
        { label: t('projects.sigmaUSD.stats.totalSupply.label'), value: t('projects.sigmaUSD.stats.totalSupply.value') },
        { label: t('projects.sigmaUSD.stats.collateralRatio.label'), value: t('projects.sigmaUSD.stats.collateralRatio.value') },
      ],
      ctaText: t('projects.sigmaUSD.cta'),
      ctaLink: "/ecosystem/sigmausd",
    },
    GAMING: {
      title: t('projects.gaming.title'),
      subtitle: t('projects.gaming.subtitle'),
      description: t('projects.gaming.description'),
      image: "/placeholder.svg?height=400&width=600",
      stats: [
        { label: t('projects.gaming.stats.activeGames.label'), value: t('projects.gaming.stats.activeGames.value') },
        { label: t('projects.gaming.stats.players.label'), value: t('projects.gaming.stats.players.value') },
        { label: t('projects.gaming.stats.gameAssets.label'), value: t('projects.gaming.stats.gameAssets.value') },
      ],
      ctaText: t('projects.gaming.cta'),
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
                <Link href="/ecosystem/projects">EXPLORE ECOSYSTEM</Link>
              </CyberButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
