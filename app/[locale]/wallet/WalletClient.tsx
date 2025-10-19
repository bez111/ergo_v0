"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Download,
  Shield,
  Smartphone,
  HardDrive,
  Monitor,
  Chrome,
  Apple,
  Zap,
  Lock,
  Check,
  Wallet,
  ShieldCheck,
  ExternalLink
} from "lucide-react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"


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
  color: string
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
    type: "Hot",
    color: "from-orange-500/20 to-orange-500/5"
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
    type: "Hybrid",
    color: "from-cyan-500/20 to-cyan-500/5"
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
    type: "Hot",
    color: "from-purple-500/20 to-purple-500/5"
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
    type: "Hot",
    color: "from-blue-500/20 to-blue-500/5"
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
    type: "Hot",
    color: "from-green-500/20 to-green-500/5"
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
    type: "Cold",
    color: "from-red-500/20 to-red-500/5"
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
    type: "Cold",
    color: "from-indigo-500/20 to-indigo-500/5"
  }
]



export default function WalletClient() {
  const t = useTranslations("wallet")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])



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
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 font-mono">Loading wallets...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background pulses */}
      <div className="absolute inset-0 z-0" aria-hidden="true" role="presentation">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-orange-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="pt-32 pb-16 px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Ergo </span>
            <span className="text-orange-400">Wallets</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Secure your ERG with production-ready wallets. From browser extensions to hardware devices - choose the perfect wallet for your security needs.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span>7 Total Wallets</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span>4 Official</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span>3 Security Levels</span>
          </div>
        </motion.section>

        {/* Security First - Compact */}
        <div className="border-y border-neutral-700">
          <motion.section 
            className="max-w-7xl mx-auto px-4 py-8" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl hover:border-orange-500/30 transition-all duration-200">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Security First</h3>
                </div>
                <p className="text-neutral-400 text-sm mb-4 max-w-2xl mx-auto">
                  Always download wallets from official sources and verify checksums for maximum security.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-neutral-300">Verify checksums</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-neutral-300">Official sources only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-orange-400" />
                    <span className="text-neutral-300">Backup your keys</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Wallets Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="bg-black/50 backdrop-blur-lg py-6 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-white">All Wallets</h2>
              <div className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-400 min-w-[80px] text-center">
                {allWallets.length} wallets
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wallets Grid */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ staggerChildren: 0.1 }}
          className="max-w-7xl mx-auto px-4 pb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allWallets.map((wallet, index) => {
                const IconComponent = wallet.icon
                return (
                  <div
                    key={wallet.id}
                    className="group h-full"
                  >
                    <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl hover:border-orange-500/30 transition-all duration-200 h-full flex flex-col">
                      
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
                              <IconComponent className="w-6 h-6 text-orange-400" />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold text-white">{wallet.name}</h2>
                              <Badge variant="secondary" className="mt-1 bg-neutral-800 text-neutral-300 border-neutral-700">{wallet.category}</Badge>
                            </div>
                          </div>
                          <div className={`flex items-center gap-2 ${getSecurityColor(wallet.securityLevel)}`}>
                            <Badge className={`text-xs border ${getSecurityColor(wallet.securityLevel)}`}>
                              {wallet.securityLevel.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-neutral-400 mb-6 flex-1">{wallet.description}</p>
                        <Button asChild variant="outline" className="w-full mt-auto border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500 hover:text-orange-400">
                          <Link href={wallet.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Visit Wallet
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="border-t border-neutral-700 bg-black/50 backdrop-blur-lg py-16 px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Secure Your ERG?
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
              Choose your wallet and start your decentralized journey today. 
              Your keys, your crypto, your sovereignty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500 hover:text-orange-400 px-8 py-3">
                <Link href="/use/get-erg" className="flex items-center gap-2">
                  Get ERG
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500 hover:text-orange-400 px-8 py-3">
                <Link href="/docs" className="flex items-center gap-2">
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
