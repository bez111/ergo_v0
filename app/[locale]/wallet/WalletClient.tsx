"use client"

import { useState, useMemo, MouseEvent, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Download,
  Shield,
  Smartphone,
  HardDrive,
  Globe,
  Monitor,
  Chrome,
  Apple,
  Zap,
  Lock,
  Eye,
  Wifi,
  Star,
  ExternalLink,
  Check,
} from "lucide-react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface Wallet {
  id: string
  name: string
  description: string
  platforms: string[]
  features: string[]
  category: "Desktop" | "Mobile" | "Browser" | "Hardware" | "paper" | "node"
  isOfficial?: boolean
  websiteUrl: string
  downloadUrl?: string
  rating: number
  users: string
  icon: LucideIcon
  isRecommended?: boolean
}

const categoryMap: Record<string, Wallet["category"] | null> = {
  desktop: "Desktop",
  mobile: "Mobile",
  "browser-extension": "Browser",
  web: null, // web-кошельков нет в allWallets, если появятся — добавить
  hardware: "Hardware",
  paper: "paper",
  node: "node",
  all: null,
}

const allWallets: Wallet[] = [
  // Recommended Official Wallets
  {
    id: "nautilus-wallet",
    name: "Nautilus Wallet",
    description: "Feature-rich browser extension and mobile wallet for dApp interaction.",
    platforms: ["Chrome", "Firefox", "Android", "iOS"],
    features: ["dApp Connector", "Multi-Account", "Hardware Wallet Support", "NFT Gallery"],
    category: "Browser",
    isOfficial: true,
    isRecommended: true,
    websiteUrl: "https://nautilus-wallet.io/",
    rating: 4.8,
    users: "30K+",
    icon: Zap,
  },
  {
    id: "satergo",
    name: "Satergo",
    description: "Full-node desktop wallet for maximum security and decentralization.",
    platforms: ["Windows", "macOS", "Linux"],
    features: ["Full Node Integration", "Enhanced Privacy", "Offline Vault", "Token Management"],
    category: "Desktop",
    isOfficial: true,
    isRecommended: true,
    websiteUrl: "https://satergo.com/",
    rating: 4.9,
    users: "10K+",
    icon: HardDrive,
  },
  // Other Wallets
  {
    id: "safew",
    name: "SAFEW",
    description: "A simple and fast web-based wallet with ErgoMixer integration.",
    platforms: ["Web"],
    features: ["ErgoMixer Privacy", "Quick Setup", "No Download Required"],
    category: "Browser",
    websiteUrl: "https://safew.org/",
    rating: 4.5,
    users: "15K+",
    icon: Shield,
  },
  {
    id: "minotaur-wallet",
    name: "Minotaur Wallet",
    description: "Mobile wallet with multi-signature support for shared fund management.",
    platforms: ["Android"],
    features: ["Multi-Signature", "Mobile-first", "User-friendly"],
    category: "Mobile",
    websiteUrl: "https://github.com/minotaur-ergo/minotaur-wallet",
    rating: 4.6,
    users: "5K+",
    icon: Smartphone,
  },
  {
    id: "ledger",
    name: "Ledger",
    description: "Hardware wallet support for ultimate cold storage security.",
    platforms: ["Hardware"],
    features: ["Cold Storage", "Physical Confirmation", "Recovery Phrase"],
    category: "Hardware",
    websiteUrl: "https://www.ledger.com/",
    rating: 4.9,
    users: "1M+",
    icon: Lock,
  },
  {
    id: "paper-wallet",
    name: "Paper Wallet",
    description: "Offline key generation and storage for maximum security.",
    platforms: ["Offline Generation"],
    features: ["Cold Storage", "No Internet Required", "Printable Keys"],
    category: "paper",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    rating: 4.7,
    users: "N/A",
    icon: Lock,
  },
  {
    id: "node-wallet",
    name: "Node Wallet (Core)",
    description: "Wallet built into the Ergo reference node for advanced users.",
    platforms: ["Windows", "macOS", "Linux"],
    features: ["Full Node Integration", "CLI/API Access", "Cold Storage"],
    category: "node",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    rating: 4.2,
    users: "N/A",
    icon: HardDrive,
  },
]

const categories = [
  { id: "browser-extension", name: "Browser Extension", icon: Chrome },
  { id: "desktop", name: "Desktop", icon: Monitor },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "hardware", name: "Hardware", icon: HardDrive },
  { id: "paper", name: "Paper/Offline", icon: Lock },
  { id: "node", name: "Node/Core", icon: HardDrive },
  { id: "all", name: "All Wallets", icon: Globe },
]

const platformIcons: Record<string, LucideIcon> = {
  Windows: Monitor,
  macOS: Apple,
  Linux: Monitor,
  iOS: Apple,
  Android: Smartphone,
  Chrome: Chrome,
  Firefox: Globe,
  Brave: Globe,
  Edge: Globe,
  Web: Globe,
  Hardware: HardDrive,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function WalletPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)
      setSelectedCategory(isMobile ? "mobile" : "desktop")
    }
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const filteredWallets = useMemo(() => {
    const mappedCategory = categoryMap[selectedCategory]
    let wallets = mappedCategory === null
      ? allWallets
      : allWallets.filter((wallet) => wallet.category === mappedCategory)
    wallets = wallets.slice().sort((a, b) => {
      if ((b.isRecommended ? 1 : 0) !== (a.isRecommended ? 1 : 0)) {
        return (b.isRecommended ? 1 : 0) - (a.isRecommended ? 1 : 0)
      }
      if (b.rating !== a.rating) {
        return b.rating - a.rating
      }
      return a.name.localeCompare(b.name)
    })
    return wallets
  }, [selectedCategory])

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white" onMouseMove={handleMouseMove}>
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="pt-32 pb-16 px-4 text-center"
        >
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
            SECURE & EMPOWER
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pr-4">
              Ergo Wallets
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your gateway to the Ergo ecosystem. Choose from a variety of secure, community-trusted wallets to store,
            send, and receive ERG and other assets.
          </p>
        </motion.section>

        {/* Filters Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="sticky top-0 z-20 bg-black/50 backdrop-blur-lg py-6 px-4"
        >
          <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full backdrop-blur-sm"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Wallets Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredWallets.map((wallet) => (
              <motion.div key={wallet.id} variants={itemVariants} className="h-full">
                <Card
                  className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl h-full flex flex-col transition-all duration-300 ${
                    wallet.isRecommended ? "border-orange-500/50" : ""
                  }`}
                >
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {wallet.isRecommended && (
                      <Badge className="mb-4 self-start bg-orange-500/20 text-orange-400 border-orange-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        Recommended
                      </Badge>
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <wallet.icon className="w-10 h-10 text-orange-400 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-white">{wallet.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {wallet.platforms.map((platform) => {
                            const Icon = platformIcons[platform] || Globe
                            return (
                              <Badge key={platform} variant="secondary" className="gap-1">
                                <Icon className="w-3 h-3" />
                                {platform}
                              </Badge>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 text-sm flex-1">{wallet.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-200 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {wallet.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={wallet.websiteUrl} target="_blank">
                          Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      {wallet.downloadUrl && (
                        <Button asChild variant="outline" className="flex-1">
                          <Link href={wallet.downloadUrl} target="_blank">
                            <Download className="w-4 h-4 mr-2" /> Download
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Note */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto px-4 py-12"
        >
          <Card className="bg-gray-900/50 border-gray-800/50 text-center">
            <CardContent className="p-8">
              <Shield className="w-10 h-10 mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
              <p className="text-gray-400 text-sm">
                Always download wallets from official sources. Be cautious of phishing sites and never share your seed
                phrase or private keys.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
