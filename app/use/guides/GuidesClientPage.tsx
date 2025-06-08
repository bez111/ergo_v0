"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlitchText } from "@/components/glitch-text"
import { FadeIn } from "@/components/animations/fade-in"
import { ParticleBackground } from "@/components/particle-background"
import {
  Search,
  Cpu,
  Users,
  Wallet,
  ArrowRight,
  Zap,
  ArrowRightLeft,
  ShieldCheck,
  AppWindow,
  Lightbulb,
  Clock,
  Filter,
  TrendingUp,
  Star,
  Calendar,
  CheckCircle,
  ExternalLink,
  X,
  Eye,
  Heart,
} from "lucide-react"

// Define types
type GuideLevel = "Beginner" | "Intermediate" | "Advanced"
type SortOption = "popular" | "newest" | "recommended"

interface Guide {
  id: string
  title: string
  description: string
  category: string
  subcategory?: string
  level: GuideLevel
  estimatedTime: string
  icon: React.ReactNode
  href: string
  isComingSoon?: boolean
  isPopular?: boolean
  isNew?: boolean
  completedBy?: number
  author: {
    name: string
    avatar?: string
    role: string
  }
  publishedAt: string
  views: number
  likes: number
  image?: string
}

interface Category {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  color: string
  count: number
}

// Categories with cyberpunk colors
const categories: Category[] = [
  {
    id: "wallets",
    title: "Wallets",
    icon: <Wallet className="h-6 w-6" />,
    description: "Choose, set up, and secure your gateway to Ergo",
    color: "from-orange-500 to-red-500",
    count: 5,
  },
  {
    id: "transactions",
    title: "Transactions",
    icon: <ArrowRightLeft className="h-6 w-6" />,
    description: "Master sending, receiving, and tracking ERG",
    color: "from-green-400 to-orange-500",
    count: 3,
  },
  {
    id: "security",
    title: "Security",
    icon: <ShieldCheck className="h-6 w-6" />,
    description: "Essential practices to protect your digital assets",
    color: "from-red-400 to-orange-500",
    count: 4,
  },
  {
    id: "dapps",
    title: "dApps",
    icon: <AppWindow className="h-6 w-6" />,
    description: "Explore DeFi, NFTs, and decentralized applications",
    color: "from-purple-400 to-orange-500",
    count: 8,
  },
  {
    id: "mining",
    title: "Mining",
    icon: <Cpu className="h-6 w-6" />,
    description: "Contribute to network security and earn rewards",
    color: "from-yellow-400 to-orange-500",
    count: 2,
  },
  {
    id: "community",
    title: "Community",
    icon: <Users className="h-6 w-6" />,
    description: "Engage with the Ergo ecosystem and governance",
    color: "from-blue-400 to-orange-500",
    count: 2,
  },
]

// Guides data with blog-style structure
const allGuides: Guide[] = [
  {
    id: "choose-wallet",
    title: "How to Choose Your Ergo Wallet",
    description: "Overview of available wallets for every device and need.",
    category: "wallets",
    level: "Beginner",
    estimatedTime: "5 min",
    icon: <Wallet className="h-5 w-5 text-orange-500" />,
    href: "/use/guides/choose-wallet",
    isPopular: true,
    completedBy: 1250,
    author: {
      name: "ergonaut",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "Community Guide",
    },
    publishedAt: "2023-03-15",
    views: 2500,
    likes: 120,
    image: "/placeholder.svg?height=200&width=400&text=Wallet+Guide",
  },
  {
    id: "nautilus-setup",
    title: "Installing and Setting Up Nautilus Wallet",
    description: "Step-by-step browser extension setup.",
    category: "wallets",
    level: "Beginner",
    estimatedTime: "8 min",
    icon: <Wallet className="h-5 w-5 text-orange-500" />,
    href: "/use/guides/nautilus-setup",
    isPopular: true,
    completedBy: 980,
    author: {
      name: "kushti",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "Core Developer",
    },
    publishedAt: "2023-04-01",
    views: 1800,
    likes: 95,
    image: "/placeholder.svg?height=200&width=400&text=Nautilus+Setup",
  },
  {
    id: "spectrum-swap",
    title: "Swap Tokens on Spectrum Finance",
    description: "A step-by-step guide to DeFi trading.",
    category: "dapps",
    subcategory: "DeFi",
    level: "Beginner",
    estimatedTime: "8 min",
    icon: <ArrowRightLeft className="h-5 w-5 text-orange-500" />,
    href: "/use/guides/spectrum-swap",
    isPopular: true,
    completedBy: 540,
    author: {
      name: "anon_real",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "DeFi Expert",
    },
    publishedAt: "2023-04-15",
    views: 3200,
    likes: 150,
    image: "/placeholder.svg?height=200&width=400&text=Spectrum+Finance",
  },
  {
    id: "mining-intro",
    title: "Intro to Ergo Mining",
    description: "What you need to get started with mining.",
    category: "mining",
    level: "Beginner",
    estimatedTime: "15 min",
    icon: <Cpu className="h-5 w-5 text-orange-500" />,
    href: "/use/guides/mining-intro",
    completedBy: 190,
    author: {
      name: "greenpill",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "Mining Expert",
    },
    publishedAt: "2023-05-01",
    views: 1500,
    likes: 80,
    image: "/placeholder.svg?height=200&width=400&text=Mining+Guide",
  },
  {
    id: "nft-marketplace",
    title: "Buy and Sell NFTs on Marketplaces",
    description: "Trade digital collectibles with ease.",
    category: "dapps",
    subcategory: "NFTs",
    level: "Beginner",
    estimatedTime: "10 min",
    icon: <AppWindow className="h-5 w-5 text-orange-500" />,
    href: "/use/guides/nft-marketplace",
    isNew: true,
    completedBy: 220,
    author: {
      name: "ergodex",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "NFT Specialist",
    },
    publishedAt: "2023-05-15",
    views: 1200,
    likes: 110,
    image: "/placeholder.svg?height=200&width=400&text=NFT+Trading",
  },
  {
    id: "security-practices",
    title: "Best Security Practices",
    description: "Protect your crypto like a pro.",
    category: "security",
    level: "Intermediate",
    estimatedTime: "15 min",
    icon: <ShieldCheck className="h-5 w-5 text-orange-500" />,
    href: "/use/guides/security-practices",
    completedBy: 290,
    author: {
      name: "sigmastamp",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "Security Expert",
    },
    publishedAt: "2023-06-01",
    views: 2100,
    likes: 130,
    image: "/placeholder.svg?height=200&width=400&text=Security+Guide",
  },
]

// Quick action links
const quickActions = [
  { label: "Wallets", category: "wallets", icon: <Wallet className="h-4 w-4" /> },
  { label: "dApps", category: "dapps", icon: <AppWindow className="h-4 w-4" /> },
  { label: "Security", category: "security", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "NFTs", category: "dapps", subcategory: "NFTs", icon: <Zap className="h-4 w-4" /> },
  { label: "Mining", category: "mining", icon: <Cpu className="h-4 w-4" /> },
  { label: "Community", category: "community", icon: <Users className="h-4 w-4" /> },
]

// Blog-style Guide Card Component
function GuideCard({ guide, index = 0 }: { guide: Guide; index?: number }) {
  const getCategoryGradient = (category: string) => {
    const gradients = {
      wallets: "from-orange-500 to-red-500",
      dapps: "from-orange-400 to-amber-500",
      security: "from-amber-500 to-yellow-500",
      mining: "from-red-500 to-orange-500",
      transactions: "from-yellow-500 to-orange-500",
      community: "from-orange-600 to-red-600",
    }
    return gradients[category as keyof typeof gradients] || "from-orange-500 to-amber-500"
  }

  const levelColors = {
    Beginner: "bg-green-500/20 text-green-300 border-green-500/50",
    Intermediate: "bg-orange-500/20 text-orange-500 border-orange-500/50",
    Advanced: "bg-red-500/20 text-red-300 border-red-500/50",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -10 }}
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-orange-500/10 hover:border-orange-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      <Link href={guide.href}>
        <div className="relative">
          <img
            src={guide.image || "/placeholder.svg?height=200&width=400"}
            alt={guide.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-block px-3 py-1 rounded-xl bg-gradient-to-r ${getCategoryGradient(guide.category)} text-white text-sm font-medium backdrop-blur-md`}
            >
              {guide.category.toUpperCase()}
            </span>
          </div>

          {/* Status badges */}
          <div className="absolute top-4 right-4 flex gap-1">
            {guide.isNew && (
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/50 text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                New
              </Badge>
            )}
            {guide.isPopular && (
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/50 text-xs">
                <Star className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
            {guide.isComingSoon && (
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-xs">
                Coming Soon
              </Badge>
            )}
          </div>

          {/* Stats overlay */}
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-white/80 text-sm bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg">
              <Eye className="w-3 h-3" />
              <span>{guide.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-white/80 text-sm bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg">
              <Heart className="w-3 h-3" />
              <span>{guide.likes}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge className={`text-xs px-2 py-1 font-mono ${levelColors[guide.level]}`}>{guide.level}</Badge>
            <div className="flex items-center text-xs text-neutral-400 font-mono">
              <Clock className="h-3 w-3 mr-1" />
              {guide.estimatedTime}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors leading-tight">
            {guide.title}
          </h3>

          <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">{guide.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={guide.author.avatar || "/placeholder.svg?height=32&width=32"}
              alt={guide.author.name}
              className="w-8 h-8 rounded-full border border-white/20"
            />
            <div>
              <div className="text-white text-sm font-medium">{guide.author.name}</div>
              <div className="text-white/60 text-xs">{guide.author.role}</div>
            </div>
          </div>

          {guide.completedBy && (
            <div className="flex items-center text-xs text-orange-500/70 mb-4 font-mono">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed by {guide.completedBy.toLocaleString()} users
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span>{guide.publishedAt}</span>
            </div>

            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-1 text-orange-400 text-sm font-medium">
              <span>Read Guide</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

// Blog-style Filters Component
function GuidesFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  sortBy,
  setSortBy,
  activeFilters,
  clearFilters,
}: {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedLevel: string
  setSelectedLevel: (level: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
  activeFilters: string[]
  clearFilters: () => void
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <section className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
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
              placeholder="Search guides, topics, authors..."
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

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Filter className="w-4 h-4" />
            <span>Categories:</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === ""
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            All
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span>{category.title}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
            </motion.button>
          ))}
        </div>

        {/* Level and Sort Filters */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">Level:</span>
            <div className="flex gap-2">
              {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                <motion.button
                  key={level}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedLevel === level
                      ? "bg-orange-500 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {level}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">Sort:</span>
            <div className="flex gap-2">
              {[
                { key: "popular", label: "Popular", icon: TrendingUp },
                { key: "newest", label: "Newest", icon: Calendar },
                { key: "recommended", label: "Recommended", icon: Star },
              ].map((sort) => (
                <motion.button
                  key={sort.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSortBy(sort.key)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    sortBy === sort.key
                      ? "bg-orange-500 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <sort.icon className="h-3 w-3" />
                  {sort.label}
                </motion.button>
              ))}
            </div>
          </div>
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
    </section>
  )
}

export default function GuidesClientPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [sortBy, setSortBy] = useState("popular")

  const filteredGuides = React.useMemo(() => {
    let result = allGuides

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (guide) =>
          guide.title.toLowerCase().includes(query) ||
          guide.description.toLowerCase().includes(query) ||
          guide.category.toLowerCase().includes(query) ||
          guide.author.name.toLowerCase().includes(query) ||
          (guide.subcategory && guide.subcategory.toLowerCase().includes(query)),
      )
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((guide) => guide.category === selectedCategory)
    }

    // Level filter
    if (selectedLevel !== "All") {
      result = result.filter((guide) => guide.level === selectedLevel)
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.completedBy || 0) - (a.completedBy || 0)
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case "recommended":
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
        default:
          return 0
      }
    })

    return result
  }, [searchQuery, selectedCategory, selectedLevel, sortBy])

  const activeFilters = React.useMemo(() => {
    const filters = []
    if (searchQuery) filters.push(`Search: "${searchQuery}"`)
    if (selectedCategory) {
      const category = categories.find((cat) => cat.id === selectedCategory)
      if (category) filters.push(`Category: ${category.title}`)
    }
    if (selectedLevel !== "All") filters.push(`Level: ${selectedLevel}`)
    return filters
  }, [searchQuery, selectedCategory, selectedLevel])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedLevel("All")
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center mb-16">
                  <motion.div
                    className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-orange-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <GlitchText text="ERGO GUIDES" />
                  </motion.div>

                  <motion.p
                    className="text-xl md:text-2xl text-gray-400 font-mono mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <span className="text-orange-500">&gt;</span> Step-by-step tutorials for every Ergo journey
                  </motion.p>

                  <motion.p
                    className="text-lg text-neutral-400 mb-8 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    From your first wallet to DeFi, NFTs, and beyond
                  </motion.p>

                  {/* Quick Actions */}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Filters & Search */}
          <GuidesFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            sortBy={sortBy}
            setSortBy={setSortBy}
            activeFilters={activeFilters}
            clearFilters={clearFilters}
          />

          {/* Guides Grid */}
          <section className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8"
            >
              {selectedCategory
                ? `${categories.find((cat) => cat.id === selectedCategory)?.title} Guides`
                : "All Guides"}
              <span className="text-white/60 text-lg ml-3">({filteredGuides.length})</span>
            </motion.h2>

            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGuides.map((guide, index) => (
                  <GuideCard key={guide.id} guide={guide} index={index} />
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No guides found</h3>
                <p className="text-white/70 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </section>

          {/* CTA Section */}
          <motion.section
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Lightbulb className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              <GlitchText text="Missing a Guide?" />
            </h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto font-mono">
              Can't find what you're looking for? Suggest a topic on ErgoForum or Discord.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="outline"
                className="border-orange-500/50 hover:bg-orange-500/20 text-orange-500 font-mono"
              >
                <Link href="https://www.ergoforum.org/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  ErgoForum
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-orange-500/50 hover:bg-orange-500/20 text-orange-500 font-mono"
              >
                <Link href="https://discord.gg/ergo" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Discord
                </Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
