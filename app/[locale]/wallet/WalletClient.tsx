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
import { HexagonalGrid, MathematicalPattern, GlitchText } from "@/components/ui-kit/signature-effects"
import { HeroPattern, FeatureGrid } from "@/components/ui-kit/patterns"

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
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Effects - UI Kit Style */}
      <div className="absolute inset-0 opacity-30">
        <HexagonalGrid />
      </div>
      <div className="absolute inset-0 opacity-20">
        <MathematicalPattern />
      </div>
      
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 py-16"
      >
        {/* Hero Section - UI Kit Style */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-orange-500">Secure Storage</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 font-mono">
            <GlitchText className="bg-gradient-to-r from-white via-orange-500 to-cyan-500 bg-clip-text text-transparent">
              ERGO WALLETS
            </GlitchText>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed font-mono">
              &gt; Secure your ERG with production-ready wallets
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From browser extensions to hardware devices - choose the perfect wallet for your security needs. 
              Built with cryptographic excellence and user sovereignty in mind.
            </p>
          </div>


        </motion.div>



        {/* Wallets Grid - UI Kit Style */}
        <motion.div variants={itemVariants}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allWallets.map((wallet, index) => {
                const IconComponent = wallet.icon
                return (
                  <motion.div
                    key={wallet.id}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="group h-full"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/50 transition-all duration-300 h-full backdrop-blur-sm relative overflow-hidden">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${wallet.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-md"></div>
                              <div className="relative rounded-xl bg-neutral-800/80 p-4 border border-orange-500/30">
                                <IconComponent className="w-8 h-8 text-orange-500" />
                              </div>
                            </div>
                            <div>
                              <CardTitle className="text-white text-xl font-mono group-hover:text-orange-400 transition-colors">
                                {wallet.name}
                              </CardTitle>
                              
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono">
                          {wallet.description}
                        </p>

                        {/* Stats - UI Kit Style */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
                            <div className="text-2xl font-bold text-white font-mono">{wallet.rating}</div>
                            <div className="text-xs text-gray-400 font-mono uppercase">Rating</div>
                          </div>
                          <div className="text-center bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
                            <div className="text-2xl font-bold text-white font-mono">{wallet.users}</div>
                            <div className="text-xs text-gray-400 font-mono uppercase">Users</div>
                          </div>
                          <div className="text-center bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
                            <Badge className={`text-xs border font-mono ${getSecurityColor(wallet.securityLevel)}`}>
                              {wallet.securityLevel.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 relative z-10">
                        {/* Platforms */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-200 mb-3 font-mono uppercase tracking-wider">
                            &gt; {t("ui.platforms")}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {wallet.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="text-xs border-gray-600 text-gray-300 font-mono">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-200 mb-3 font-mono uppercase tracking-wider">
                            &gt; {t("ui.features")}
                          </h4>
                          <ul className="space-y-2">
                            {wallet.features.slice(0, 4).map((feature) => (
                              <li key={feature} className="flex items-center gap-3 text-xs text-gray-300 font-mono">
                                <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                            {wallet.features.length > 4 && (
                              <li className="text-xs text-gray-500 font-mono">
                                + {wallet.features.length - 4} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Type and Security */}
                        <div className="flex items-center gap-3 mb-8">
                          <Badge className={`text-xs border font-mono ${getTypeColor(wallet.type)}`}>
                            {wallet.type.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-300 font-mono">
                            {wallet.category.toUpperCase()}
                          </Badge>
                        </div>

                        {/* Action Buttons - UI Kit Style */}
                        <div className="space-y-3">
                          <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-black font-mono uppercase tracking-wider transition-all duration-200">
                            <Link href={wallet.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <span>&gt;</span>
                              <span>{t("ui.visitWebsite")}</span>
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                          {wallet.downloadUrl && (
                            <Button asChild variant="outline" className="w-full border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 font-mono uppercase tracking-wider">
                              <Link href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                <span>DOWNLOAD</span>
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
          </motion.div>

        {/* Security Notice - UI Kit Pattern */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-500/10 via-neutral-900/50 to-cyan-500/10 border-orange-500/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <MathematicalPattern />
              </div>
              <CardContent className="p-12 text-center relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl"></div>
                  <Shield className="relative w-16 h-16 mx-auto text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 font-mono">
                  <GlitchText>&gt; {t("ui.securityTitle")}</GlitchText>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-mono max-w-2xl mx-auto">
                  {t("ui.securityNote")}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Check, text: "Verify checksums", color: "text-green-400" },
                    { icon: ShieldCheck, text: "Official sources only", color: "text-cyan-400" },
                    { icon: Lock, text: "Backup your keys", color: "text-orange-400" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm font-mono">
                      <div className="rounded-lg bg-neutral-800/50 p-2 border border-neutral-700">
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA Section - UI Kit Style */}
        <motion.div variants={itemVariants} className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-mono">
              <GlitchText>&gt; Ready to Secure Your ERG?</GlitchText>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-mono leading-relaxed">
              Choose your wallet and start your decentralized journey today. 
              Your keys, your crypto, your sovereignty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-mono uppercase tracking-[0.2em] px-12 py-4 text-lg border-2 border-orange-500">
                  <Link href="/use/get-erg" className="flex items-center gap-3">
                    <span>&gt;</span>
                    <span>GET ERG</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-mono uppercase tracking-[0.2em] px-12 py-4 text-lg">
                  <Link href="/docs" className="flex items-center gap-3">
                    <span>&gt;</span>
                    <span>LEARN MORE</span>
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Underground Manifesto Style Footer */}
            <div className="mt-16 p-8 bg-neutral-900/30 border border-neutral-700 rounded-xl">
              <p className="text-gray-400 font-mono text-sm leading-relaxed italic">
                "We write code not for compliance. We write code to break the chains."
              </p>
              <p className="text-gray-500 font-mono text-xs mt-2">
                Underground. Sovereign. Open source forever.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
