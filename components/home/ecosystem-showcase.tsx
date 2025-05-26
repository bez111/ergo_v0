"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import { CyberCard } from "@/components/animations/cyber-card"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { FadeIn } from "@/components/animations/fade-in"
import { CyberButton } from "@/components/animations/cyber-button"
import { GlitchText } from "@/components/animations/glitch-text"

export function EcosystemShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  const dapps = [
    {
      name: "Spectrum DEX",
      description: "Decentralized exchange for Ergo and Cardano ecosystems",
      image: "/decentralized-exchange.png",
      stats: [
        { label: "TVL", value: "$12.5M" },
        { label: "USERS", value: "15K+" },
      ],
      url: "/ecosystem/projects/spectrum",
    },
    {
      name: "SigmaUSD",
      description: "Algorithmic stablecoin protocol",
      image: "/sigmausd-concept.png",
      stats: [
        { label: "TVL", value: "$8.2M" },
        { label: "APY", value: "5.2%" },
      ],
      url: "/ecosystem/projects/sigmausd",
    },
    {
      name: "Ergo Mixer",
      description: "Non-custodial mixing service for privacy",
      image: "/audio-mixer.png",
      stats: [
        { label: "VOLUME", value: "$3.7M" },
        { label: "TXS", value: "25K+" },
      ],
      url: "/ecosystem/projects/ergomixer",
    },
    {
      name: "Auction House",
      description: "NFT marketplace on Ergo",
      image: "/nft-auction.png",
      stats: [
        { label: "VOLUME", value: "$1.2M" },
        { label: "NFTS", value: "8K+" },
      ],
      url: "/ecosystem/projects/auctionhouse",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-primary/30">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] opacity-20 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      ></motion.div>

      {/* Glowing elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      ></motion.div>

      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="flex flex-col gap-12">
          {/* Cyberpunk header */}
          <FadeIn>
            <div className="flex flex-col gap-2 relative">
              <motion.div
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-full max-w-md h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                <span className="relative inline-block">
                  <span className="relative z-10 font-mono tracking-widest text-white">
                    [<span className="text-primary">_</span>
                    <GlitchText text="ECOSYSTEM" />
                    <span className="text-primary">_</span>]
                  </span>
                </span>
              </h2>

              <motion.p
                className="text-muted-foreground md:text-xl text-center max-w-3xl mx-auto font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="text-primary">&gt;</span> Discover the growing ecosystem of projects and applications
                built on Ergo.
              </motion.p>

              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              ></motion.div>
            </div>
          </FadeIn>

          {/* dApp Showcase with cyberpunk styling */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dapps.map((dapp, index) => (
              <StaggerItem key={index}>
                <CyberCard delay={index * 0.1}>
                  <div className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 bg-black/60 backdrop-blur-sm border-primary/30 hover:border-primary relative flex flex-col">
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-primary/70 z-10"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-primary/70 z-10"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-primary/70 z-10"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-primary/70 z-10"></div>

                    {/* Status indicator */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      ></motion.div>
                      <span className="text-[8px] font-mono text-gray-500">ONLINE</span>
                    </div>

                    {/* ID tag */}
                    <div className="absolute top-2 left-2 font-mono text-[8px] text-primary/70 z-10">
                      ID:
                      {Math.floor(Math.random() * 10000)
                        .toString()
                        .padStart(4, "0")}
                    </div>

                    {/* Project image */}
                    <div className="relative h-40 w-full overflow-hidden border-b border-primary/30">
                      <Image
                        src={dapp.image || "/placeholder.svg"}
                        alt={dapp.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 filter contrast-125 saturate-150"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                      {/* Scanline effect */}
                      <motion.div
                        className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%)] bg-size-[100%_4px] pointer-events-none"
                        animate={{
                          backgroundPosition: ["0 0", "0 100%"],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      ></motion.div>

                      {/* Glitch effect on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-primary/10 to-transparent bg-[length:200%_100%]"
                        animate={{
                          backgroundPosition: ["-200% 0", "200% 0"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      ></motion.div>

                      {/* Project name overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="font-bold text-lg text-white font-mono tracking-wider flex items-center">
                          <span className="text-primary mr-2">&gt;</span>
                          {dapp.name}
                          <motion.span
                            className="text-primary ml-1"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            _
                          </motion.span>
                        </h3>
                      </div>

                      {/* Targeting interface */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        whileHover={{
                          opacity: 1,
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary/30 rounded-full"></div>
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-primary/50 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        ></motion.div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-16 border-l border-primary/30"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 border-t border-primary/30"></div>
                      </motion.div>
                    </div>

                    <CardContent className="p-4 bg-black/80 flex-1 flex flex-col relative">
                      {/* Description */}
                      <p className="text-sm text-gray-400 mb-3 font-mono">{dapp.description}</p>

                      {/* Stats - Aligned in two columns */}
                      <div className="flex justify-between mb-auto">
                        {dapp.stats.map((stat, i) => (
                          <motion.div
                            key={i}
                            className="text-left bg-black/50 border border-primary/20 p-2 rounded"
                            whileHover={{
                              borderColor: "rgba(255, 136, 0, 0.5)",
                              boxShadow: "0 0 10px rgba(255, 136, 0, 0.3)",
                            }}
                          >
                            <p className="text-lg font-bold text-primary font-mono">{stat.value}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">{stat.label}</p>
                            {/* Animated indicator */}
                            <div className="w-full h-0.5 bg-primary/20 mt-1 relative overflow-hidden">
                              <motion.div
                                className="absolute top-0 left-0 h-full w-1/3 bg-primary"
                                animate={{
                                  x: ["-100%", "300%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              ></motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Access button - Now at the bottom of the card */}
                      <div className="mt-4 relative">
                        <CyberButton
                          variant="outline"
                          size="sm"
                          className="w-full gap-1 bg-transparent border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider"
                          asChild
                        >
                          <Link href={dapp.url}>
                            <span className="relative z-10">ACCESS</span>
                            <ExternalLink className="h-3 w-3 ml-1 relative z-10" />
                          </Link>
                        </CyberButton>
                        {/* Button decorative elements */}
                        <motion.div
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-primary/50"
                          animate={{
                            scaleX: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        ></motion.div>
                      </div>
                    </CardContent>
                  </div>
                </CyberCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Cyberpunk CTA button */}
          <FadeIn delay={0.8}>
            <div className="flex justify-center mt-8">
              <CyberButton
                className="gap-2 relative overflow-hidden group bg-transparent border-2 border-primary text-primary hover:text-black px-8 py-6 font-mono uppercase tracking-wider"
                asChild
              >
                <Link href="/ecosystem/projects">
                  <span className="relative z-10">Explore All Projects</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                </Link>
              </CyberButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
