"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Shield,
  ExternalLink,
  AlertTriangle,
  Cpu,
  Gift,
  DollarSign,
  HelpCircle,
  Eye,
  Heart,
  Clock,
  Star,
  TrendingUp,
  Search,
  Filter,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GlitchText } from "@/components/glitch-text"
import { ParticleBackground } from "@/components/particle-background"
import { useState } from "react"

const centralizedExchanges = [
  {
    name: "KuCoin",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Global CEX, supports ERG/USDT, ERG/BTC",
    link: "https://www.kucoin.com/",
    popularity: 9800,
    rating: 4.5,
    verified: true,
    tags: ["Popular", "High Volume", "Mobile App"],
    features: ["Spot Trading", "Futures", "Staking"],
  },
  {
    name: "Gate.io",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Global CEX, various ERG pairs",
    link: "https://www.gate.io/",
    popularity: 7500,
    rating: 4.3,
    verified: true,
    tags: ["User Friendly", "Multiple Pairs"],
    features: ["Spot Trading", "Margin", "Copy Trading"],
  },
  {
    name: "HTX (formerly Huobi)",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Global CEX, ERG trading available",
    link: "https://www.htx.com/",
    popularity: 6200,
    rating: 4.2,
    verified: true,
    tags: ["High Liquidity", "Established"],
    features: ["Spot Trading", "OTC", "Staking"],
  },
  {
    name: "CoinEx",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Fast-growing exchange with ERG pairs",
    link: "https://www.coinex.com/",
    popularity: 4500,
    rating: 4.0,
    verified: true,
    tags: ["Low Fees", "Simple UI"],
    features: ["Spot Trading", "Margin", "AMM Swap"],
  },
]

const decentralizedExchanges = [
  {
    name: "Spectrum Finance",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Primary DEX on Ergo, swap various tokens for ERG",
    link: "https://spectrum.fi/",
    popularity: 8500,
    rating: 4.7,
    verified: true,
    tags: ["Ergo Native", "Multi-Chain"],
    features: ["Swaps", "Liquidity Pools", "Yield Farming"],
  },
  {
    name: "ErgoDEX",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Cross-chain DEX for Ergo and Cardano",
    link: "https://ergodex.io/",
    popularity: 7200,
    rating: 4.5,
    verified: true,
    tags: ["Cross-Chain", "Cardano"],
    features: ["AMM", "Order Book", "Cross-Chain Swaps"],
  },
]

const earningMethods = [
  {
    title: "Mining ERG",
    icon: Cpu,
    description: "Secure the network with your GPU and earn ERG rewards. Algorithm: Autolykos v2 (ASIC-resistant).",
    link: "/use/mining",
    difficulty: "Medium",
    requirements: ["GPU with 4GB+ VRAM", "Mining Software", "Ergo Wallet"],
    estimatedRewards: "Variable based on hashrate and network difficulty",
    popularity: 9200,
  },
  {
    title: "Bounties & Contributions",
    icon: Gift,
    description:
      "Use your skills: development, content, marketing, translation, bug bounties. Find opportunities on ErgoForum, Discord, GitHub.",
    link: "/community/contribute",
    difficulty: "Varies",
    requirements: ["Relevant Skills", "Community Engagement"],
    estimatedRewards: "Project-dependent",
    popularity: 6800,
  },
  {
    title: "DeFi Yields",
    icon: DollarSign,
    description: "Participate in DeFi: liquidity providing, lending, yield farming on Ergo DeFi platforms.",
    link: "/use/defi",
    difficulty: "Advanced",
    requirements: ["ERG Holdings", "DeFi Knowledge", "Risk Management"],
    estimatedRewards: "Variable APY",
    popularity: 8500,
    warning: "Involves smart contract and market risks. DYOR.",
  },
]

const quickGuides = [
  {
    title: "First-Time Buyer Guide",
    description: "Step-by-step walkthrough for first-time ERG buyers",
    image: "/placeholder.svg?height=200&width=400",
    link: "#first-time",
    readTime: 5,
  },
  {
    title: "Security Best Practices",
    description: "Essential security tips for buying and storing ERG",
    image: "/placeholder.svg?height=200&width=400",
    link: "#security",
    readTime: 3,
  },
  {
    title: "Comparing Exchange Options",
    description: "Detailed comparison of CEX vs DEX for ERG",
    image: "/placeholder.svg?height=200&width=400",
    link: "#comparison",
    readTime: 4,
  },
]

export default function GetErgPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [selectedExchangeType, setSelectedExchangeType] = useState("all")
  const [selectedFeature, setSelectedFeature] = useState("")

  const filteredExchanges = [...centralizedExchanges, ...decentralizedExchanges].filter((exchange) => {
    const matchesSearch =
      searchQuery === "" ||
      exchange.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exchange.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exchange.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesType =
      selectedExchangeType === "all" ||
      (selectedExchangeType === "cex" && centralizedExchanges.includes(exchange)) ||
      (selectedExchangeType === "dex" && decentralizedExchanges.includes(exchange))

    const matchesFeature = selectedFeature === "" || exchange.features.includes(selectedFeature)

    return matchesSearch && matchesType && matchesFeature
  })

  const activeFilters = []
  if (searchQuery) activeFilters.push(`Search: "${searchQuery}"`)
  if (selectedExchangeType === "cex") activeFilters.push("Type: Centralized")
  if (selectedExchangeType === "dex") activeFilters.push("Type: Decentralized")
  if (selectedFeature) activeFilters.push(`Feature: ${selectedFeature}`)

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedExchangeType("all")
    setSelectedFeature("")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/tech-pattern.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/resistance-texture.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" />
      </div>

      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-black" />
                  </div>
                  <GlitchText text="GET ERG" className="text-6xl md:text-8xl font-bold" />
                </div>

                <div className="max-w-4xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono">
                    <span className="text-primary">[</span>A GUIDE TO ACQUIRING ERGO'S NATIVE CURRENCY
                    <span className="text-primary">]</span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-4">
                    Welcome! This page will guide you through the various ways to acquire ERG – the native
                    cryptocurrency of the Ergo platform. ERG is essential for paying transaction fees, participating in
                    DeFi, using decentralized applications (dApps), and much more within the Ergo ecosystem.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Guides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {quickGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-orange-500/10 hover:border-orange-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Link href={guide.link}>
                    <div className="relative">
                      <img
                        src={guide.image || "/placeholder.svg"}
                        alt={guide.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-white/60 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{guide.readTime} min read</span>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-1 text-orange-400 text-sm font-medium"
                        >
                          <span>Read guide</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Risk Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="border-red-500/50 bg-red-900/20 text-red-300 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <AlertTriangle className="w-10 h-10 text-red-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-red-200 mb-1">Important Risk Notice</h3>
                      <p className="text-sm leading-relaxed">
                        Investing in cryptocurrencies involves risks. Always do your own research (DYOR) and only invest
                        funds you can afford to lose. This page provides informational guidance and does not constitute
                        financial advice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Exchange Search & Filters */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 mb-12"
            >
              {/* Search Bar */}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: isSearchFocused ? 1.02 : 1,
                    boxShadow: isSearchFocused ? "0 0 30px rgba(255, 136, 0, 0.3)" : "0 0 0px rgba(255, 136, 0, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search exchanges, features, tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:border-orange-400/50 focus:outline-none transition-all duration-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </motion.div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Filter className="w-4 h-4" />
                  <span>Exchange Type:</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedExchangeType("all")}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedExchangeType === "all"
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  All
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedExchangeType("cex")}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedExchangeType === "cex"
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  Centralized
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedExchangeType("dex")}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedExchangeType === "dex"
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  Decentralized
                </motion.button>
              </div>

              {/* Feature Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Filter className="w-4 h-4" />
                  <span>Features:</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFeature("")}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedFeature === ""
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  All
                </motion.button>

                {["Spot Trading", "Margin", "Staking", "Swaps", "Liquidity Pools"].map((feature) => (
                  <motion.button
                    key={feature}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFeature(feature)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedFeature === feature
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                        : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {feature}
                  </motion.button>
                ))}
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 pt-2 border-t border-white/10"
                >
                  <span className="text-white/70 text-sm">Active filters:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter) => (
                      <span
                        key={filter}
                        className="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-300 text-sm border border-orange-500/30"
                      >
                        {filter}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-red-400 hover:text-red-300 text-sm underline transition-colors"
                  >
                    Clear all
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Exchange Results */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-8"
              >
                Available Exchanges
                <span className="text-white/60 text-lg ml-3">({filteredExchanges.length})</span>
              </motion.h2>

              {filteredExchanges.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredExchanges.map((exchange, index) => (
                    <motion.div
                      key={exchange.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-orange-500/10 hover:border-orange-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={exchange.logo || "/placeholder.svg"}
                            alt={`${exchange.name} logo`}
                            width={50}
                            height={50}
                            className="rounded-full border border-white/20 group-hover:scale-110 transition-transform"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                                {exchange.name}
                              </h3>
                              {exchange.verified && (
                                <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-white/60 text-xs mt-1">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{exchange.popularity.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400" />
                                <span>{exchange.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-white/70 text-sm mb-4">{exchange.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {exchange.tags.map((tag) => (
                            <span key={tag} className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="border-t border-white/10 pt-4 mb-4">
                          <div className="text-sm text-white/70 mb-2">Features:</div>
                          <div className="flex flex-wrap gap-2">
                            {exchange.features.map((feature) => (
                              <span
                                key={feature}
                                className="bg-orange-500/20 text-orange-300 text-xs px-2 py-1 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10 font-mono"
                        >
                          <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                            Visit Exchange <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No exchanges found</h3>
                  <p className="text-white/70 mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Earning Methods */}
        <section className="py-16 px-4 bg-gradient-to-b from-transparent to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <GlitchText text="EARN ERG" className="text-4xl md:text-5xl font-bold mb-4" />
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Beyond buying, there are several ways to earn ERG by actively participating in and contributing to the
                Ergo ecosystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {earningMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-orange-500/10 hover:border-orange-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <method.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{method.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-white/60">Difficulty:</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          method.difficulty === "Easy"
                            ? "bg-green-500/20 text-green-300"
                            : method.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-red-500/20 text-red-300"
                        }`}
                      >
                        {method.difficulty}
                      </span>
                    </div>

                    <div className="border-t border-white/10 pt-4 mb-4">
                      <div className="text-sm text-white/70 mb-2">Requirements:</div>
                      <ul className="list-disc list-inside text-xs text-white/70 space-y-1">
                        {method.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    {method.warning && (
                      <div className="bg-red-900/20 border border-red-500/30 text-red-300 text-xs p-2 rounded-lg mb-4">
                        ⚠️ {method.warning}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <TrendingUp className="w-3 h-3" />
                        <span>{method.popularity.toLocaleString()} interested</span>
                      </div>

                      <Button asChild variant="link" className="text-primary p-0 hover:text-orange-400">
                        <Link href={method.link}>
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Reminders */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="border-red-500/70 bg-red-900/30 text-red-200 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-100 font-mono flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    SECURITY PROTOCOL ENGAGED
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>
                      <strong className="text-red-100">Store ERG in a personal wallet:</strong> Control your private
                      keys.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>
                      <strong className="text-red-100">Beware of phishing & scams:</strong> Use only official, verified
                      links.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>
                      <strong className="text-red-100">Never share private keys or seed phrase:</strong> No legitimate
                      entity will ask.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>
                      <strong className="text-red-100">Use strong passwords & 2FA:</strong> Secure your accounts.
                    </span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Related Resources</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Explore these additional resources to enhance your Ergo journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Ergo Wallets", link: "/wallet", icon: Shield },
                { title: "FAQ for Beginners", link: "/start/faq", icon: HelpCircle },
                { title: "Official ErgoDocs", link: "/build/docs", icon: ExternalLink },
                { title: "Join the Community", link: "/community", icon: Heart },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <Button
                    asChild
                    className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2 text-center"
                  >
                    <Link href={item.link}>
                      <item.icon className="h-5 w-5 mb-1" />
                      <span>{item.title.toUpperCase()}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
