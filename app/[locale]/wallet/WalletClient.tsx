"use client"

import { useState, useMemo, useEffect } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  Search,
  Filter,
  Users,
  Award,
  Verified,
  Wallet,
  ChevronRight
} from "lucide-react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"
import { CyberButton } from "@/components/animations/cyber-button"

interface Wallet {
  id: string
  name: string
  description: string
  platforms: string[]
  features: string[]
  category: "Desktop" | "Mobile" | "Browser" | "Hardware" | "Paper"
  isOfficial?: boolean
  websiteUrl: string
  downloadUrl?: string
  rating: number
  users: string
  icon: LucideIcon
  isRecommended?: boolean
  securityLevel: "High" | "Very High" | "Maximum"
  type: "Hot" | "Cold" | "Hybrid"
}

const allWallets: Wallet[] = [
  {
    id: "nautilus",
    name: "Nautilus Wallet",
    description: "Feature-rich browser extension wallet with dApp connectivity and advanced DeFi features",
    platforms: ["Chrome", "Firefox", "Edge"],
    features: ["dApp Integration", "Hardware Wallet Support", "Multi-signature", "Token Management", "DeFi Ready"],
    category: "Browser",
    isOfficial: true,
    isRecommended: true,
    websiteUrl: "https://nautilus-wallet.org",
    downloadUrl: "https://chrome.google.com/webstore/detail/nautilus-wallet",
    rating: 4.8,
    users: "50K+",
    icon: Chrome,
    securityLevel: "High",
    type: "Hot"
  },
  {
    id: "satergo",
    name: "Satergo Wallet",
    description: "Desktop wallet with full node integration and advanced privacy features",
    platforms: ["Windows", "macOS", "Linux"],
    features: ["Full Node", "ErgoMixer Integration", "Advanced Privacy", "Multi-Account", "Cold Storage"],
    category: "Desktop",
    isOfficial: true,
    websiteUrl: "https://satergo.com",
    downloadUrl: "https://github.com/Satergo/Satergo/releases",
    rating: 4.9,
    users: "15K+",
    icon: Monitor,
    securityLevel: "Very High",
    type: "Hybrid"
  },
  {
    id: "ergo-wallet-android",
    name: "Ergo Wallet (Android)",
    description: "Official mobile wallet for Android with QR scanning and simple interface",
    platforms: ["Android"],
    features: ["QR Scanning", "Simple Interface", "Backup & Restore", "Multi-language", "Offline Signing"],
    category: "Mobile",
    isOfficial: true,
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    downloadUrl: "https://play.google.com/store/apps/details?id=org.ergoplatform.android",
    rating: 4.6,
    users: "25K+",
    icon: Smartphone,
    securityLevel: "High",
    type: "Hot"
  },
  {
    id: "ergo-wallet-ios",
    name: "Ergo Wallet (iOS)",
    description: "Official mobile wallet for iOS with intuitive design and secure storage",
    platforms: ["iOS"],
    features: ["Touch ID", "Face ID", "iCloud Backup", "Simple Interface", "Secure Enclave"],
    category: "Mobile",
    isOfficial: true,
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    downloadUrl: "https://apps.apple.com/app/ergo-wallet/id1542086230",
    rating: 4.7,
    users: "20K+",
    icon: Apple,
    securityLevel: "High",
    type: "Hot"
  },
  {
    id: "safew",
    name: "SAFEW",
    description: "Simple And Fast Ergo Wallet - lightweight desktop wallet with essential features",
    platforms: ["Windows", "macOS", "Linux"],
    features: ["Lightweight", "Fast Sync", "Multiple Accounts", "Token Support", "Simple UI"],
    category: "Desktop",
    websiteUrl: "https://github.com/ThierryM1212/SAFEW",
    downloadUrl: "https://github.com/ThierryM1212/SAFEW/releases",
    rating: 4.5,
    users: "8K+",
    icon: Zap,
    securityLevel: "High",
    type: "Hot"
  },
  {
    id: "ledger",
    name: "Ledger Hardware Wallet",
    description: "Cold storage solution with Ergo support for maximum security",
    platforms: ["Hardware"],
    features: ["Cold Storage", "Hardware Security", "PIN Protection", "Recovery Phrase", "Offline Signing"],
    category: "Hardware",
    isRecommended: true,
    websiteUrl: "https://www.ledger.com",
    rating: 4.9,
    users: "5M+",
    icon: HardDrive,
    securityLevel: "Maximum",
    type: "Cold"
  },
  {
    id: "ergo-paper-wallet",
    name: "Ergo Paper Wallet",
    description: "Generate secure paper wallets for cold storage of ERG",
    platforms: ["Web"],
    features: ["Offline Generation", "Cold Storage", "No Registration", "Open Source", "Maximum Security"],
    category: "Paper",
    websiteUrl: "https://ergoplatform.org/en/wallets/",
    rating: 4.8,
    users: "Used by thousands",
    icon: Lock,
    securityLevel: "Maximum",
    type: "Cold"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
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
      duration: 0.6,
    },
  },
}

export default function WalletClient() {
  const t = useTranslations("wallet")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const categories = [
    { id: "all", label: "All Wallets", icon: Wallet },
    { id: "Browser", label: "Browser", icon: Globe },
    { id: "Desktop", label: "Desktop", icon: Monitor },
    { id: "Mobile", label: "Mobile", icon: Smartphone },
    { id: "Hardware", label: "Hardware", icon: HardDrive },
    { id: "Paper", label: "Paper", icon: Lock },
  ]

  const filteredWallets = useMemo(() => {
    return allWallets.filter((wallet) => {
      const matchesCategory = selectedCategory === "all" || wallet.category === selectedCategory
      const matchesSearch = wallet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           wallet.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const getSecurityColor = (level: string) => {
    switch (level) {
      case "Maximum": return "text-green-400 border-green-400/30 bg-green-400/10"
      case "Very High": return "text-blue-400 border-blue-400/30 bg-blue-400/10"
      case "High": return "text-orange-400 border-orange-400/30 bg-orange-400/10"
      default: return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cold": return "text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
      case "Hot": return "text-orange-400 border-orange-400/30 bg-orange-400/10"
      case "Hybrid": return "text-purple-400 border-purple-400/30 bg-purple-400/10"
      default: return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading wallets...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <HexagonalGrid />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-mono uppercase tracking-wider text-orange-500">Secure Storage</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-cyan-500 bg-clip-text text-transparent">
            ERGO WALLETS
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Secure your ERG with official and community wallets. From browser extensions to hardware devices - choose the perfect wallet for your needs.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Total Wallets", value: allWallets.length.toString(), icon: Wallet },
              { label: "Official Wallets", value: allWallets.filter(w => w.isOfficial).length.toString(), icon: Verified },
              { label: "Security Levels", value: "3", icon: Shield },
              { label: "Platforms", value: "7+", icon: Monitor }
            ].map((stat, index) => (
              <div key={stat.label} className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <stat.icon className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 font-mono uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder={t("ui.searchWallets")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-900/50 border-neutral-700 text-white placeholder-gray-400 focus:border-orange-500/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => {
                const IconComponent = category.icon
                const isActive = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap font-mono text-sm ${
                      isActive
                        ? "bg-orange-500/20 border-orange-500/50 text-orange-400"
                        : "bg-neutral-900/50 border-neutral-700 text-gray-400 hover:border-orange-500/30 hover:text-orange-500"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Wallets Grid */}
        <motion.div variants={itemVariants}>
          {filteredWallets.length === 0 ? (
            <div className="text-center py-16">
              <Wallet className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">{t("ui.noWalletsFound")}</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWallets.map((wallet, index) => {
                const IconComponent = wallet.icon
                return (
                  <motion.div
                    key={wallet.id}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="bg-neutral-900/60 border-neutral-700 hover:border-orange-500/50 transition-all duration-300 h-full backdrop-blur-sm hover:bg-neutral-900/80">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-orange-500/10 p-3 border border-orange-500/30">
                              <IconComponent className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                              <CardTitle className="text-white text-lg group-hover:text-orange-400 transition-colors">
                                {wallet.name}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                {wallet.isOfficial && (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                                    <Verified className="w-3 h-3 mr-1" />
                                    Official
                                  </Badge>
                                )}
                                {wallet.isRecommended && (
                                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                                    <Award className="w-3 h-3 mr-1" />
                                    Recommended
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {wallet.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">{wallet.rating}</div>
                            <div className="text-xs text-gray-400 font-mono">Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">{wallet.users}</div>
                            <div className="text-xs text-gray-400 font-mono">Users</div>
                          </div>
                          <div className="text-center">
                            <Badge className={`text-xs border ${getSecurityColor(wallet.securityLevel)}`}>
                              {wallet.securityLevel}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        {/* Platforms */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">{t("ui.platforms")}</h4>
                          <div className="flex flex-wrap gap-1">
                            {wallet.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">{t("ui.features")}</h4>
                          <ul className="space-y-1">
                            {wallet.features.slice(0, 3).map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                                <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                            {wallet.features.length > 3 && (
                              <li className="text-xs text-gray-500">
                                +{wallet.features.length - 3} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Type and Security */}
                        <div className="flex items-center gap-2 mb-6">
                          <Badge className={`text-xs border ${getTypeColor(wallet.type)}`}>
                            {wallet.type} Wallet
                          </Badge>
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {wallet.category}
                          </Badge>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button asChild className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                            <Link href={wallet.websiteUrl} target="_blank" rel="noopener noreferrer">
                              {t("ui.visitWebsite")} <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                          {wallet.downloadUrl && (
                            <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50">
                              <Link href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          )}
        </motion.div>

        {/* Security Notice */}
        <motion.div variants={itemVariants} className="mt-16">
          <Card className="bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10 border-orange-500/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Shield className="w-12 h-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{t("ui.securityTitle")}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t("ui.securityNote")}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <Check className="w-4 h-4" />
                  <span>Verify checksums</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Check className="w-4 h-4" />
                  <span>Official sources only</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Check className="w-4 h-4" />
                  <span>Backup your keys</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Getting Started CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Secure Your ERG?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your wallet and start your Ergo journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CyberButton
              className="gap-2 bg-orange-500 text-black hover:bg-orange-600 font-mono uppercase tracking-wider border-2 border-orange-500 px-8 py-3"
              asChild
            >
              <Link href="/use/get-erg">
                <span>&gt;</span>
                <span>Get ERG</span>
                <span className="animate-pulse">_</span>
              </Link>
            </CyberButton>
            
            <CyberButton
              className="gap-2 bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-mono uppercase tracking-wider px-8 py-3"
              asChild
            >
              <Link href="/docs">
                <span>&gt;</span>
                <span>Learn More</span>
                <span className="animate-pulse">_</span>
              </Link>
            </CyberButton>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
