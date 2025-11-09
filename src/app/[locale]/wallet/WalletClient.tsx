"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
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
  ShieldCheck} from "lucide-react"
import { LucideIcon } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { FinalCTASimple } from "@/components/home/final-cta-simple"


interface Wallet {
  id: string
  name: string
  description: string
  platforms: string[]
  features: string[]
  category: "Desktop" | "Mobile" | "Browser" | "Hardware" | "Paper"
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
    isRecommended: true,
    websiteUrl: "https://github.com/capt-nemo429/nautilus-wallet",
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
  const localizedPath = useLocalizedPath();

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
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Ergo <span className="text-orange-400">Wallets</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                Secure your ERG with production-ready wallets
              </p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                From browser extensions to hardware devices - choose the perfect wallet for your security needs. 
                All wallets are non-custodial, giving you full control of your funds.
              </p>
            </div>
            <div className="relative z-10">
              <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  Quick Start
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://chrome.google.com/webstore/detail/nautilus-wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <Chrome className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">Nautilus Wallet</h4>
                        <p className="text-gray-400 text-sm">Browser • Most Popular</p>
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/Satergo/Satergo/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">Satergo Wallet</h4>
                        <p className="text-gray-400 text-sm">Desktop • Full Node</p>
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.ledger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <HardDrive className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">Ledger Hardware</h4>
                        <p className="text-gray-400 text-sm">Hardware • Maximum Security</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Security First</h3>
                <p className="text-orange-400/80 text-sm font-medium">Best practices for wallet safety</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Always download wallets from official sources and verify checksums for maximum security.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">Verify checksums after download</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">Download only from official sources</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">Backup your seed phrase securely offline</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wallets Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-xl font-bold text-black">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                All Wallets
              </h2>
              <p className="text-lg text-gray-400">
                {allWallets.length} secure options for storing your ERG
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wallets Grid */}
      <div className="max-w-6xl mx-auto pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {allWallets.map((wallet, index) => {
              const IconComponent = wallet.icon
              return (
                <div
                  key={wallet.id}
                  className={`group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 flex flex-col w-full max-w-md ${
                    wallet.isRecommended ? 'ring-2 ring-orange-500/20' : ''
                  }`}
                >
                  {wallet.isRecommended && (
                    <div className="absolute -top-3 left-6 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      Recommended
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">{wallet.name}</h3>
                      <p className="text-orange-400/80 text-sm font-medium">{wallet.category} · {wallet.platforms.join(", ")}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-4 flex-grow min-h-[60px]">{wallet.description}</p>
                  
                  <div className="flex items-center gap-2 mb-6 min-h-[28px]">
                    <Badge className={`text-xs border ${getSecurityColor(wallet.securityLevel)}`}>
                      {wallet.securityLevel}
                    </Badge>
                    <Badge className={`text-xs border ${getTypeColor(wallet.type)}`}>
                      {wallet.type}
                    </Badge>
                  </div>
                  
                  <div className="mt-auto">
                    <EnhancedButton
                      href={wallet.downloadUrl || wallet.websiteUrl}
                      external={true}
                      variant="primary"
                      size="lg"
                      className="w-full"
                      icon={<IconComponent className="h-5 w-5" />}
                      ariaLabel={`Download ${wallet.name}`}
                    >
                      {wallet.downloadUrl ? `Download ${wallet.name.split(" ")[0]}` : `Visit ${wallet.name.split(" ")[0]}`}
                    </EnhancedButton>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      {/* Next Steps Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What's <span className="text-orange-400">Next</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Now that you have a wallet, get some ERG and explore the ecosystem
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href={localizedPath("/use/get-erg")}
              className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">Get ERG</h3>
                  <p className="text-orange-400/80 text-sm font-medium">Buy ERG Tokens</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">Purchase ERG from exchanges or DEXs</p>
            </Link>
            
            <Link
              href={localizedPath("/docs")}
              className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">Learn More</h3>
                  <p className="text-orange-400/80 text-sm font-medium">Documentation</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">Deep dive into Ergo's technology</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture Form */}
      <FinalCTASimple 
        title="Wallet Security Tips"
        description="Get the latest wallet security updates, best practices, and safety tips delivered to your inbox"
      />

    </div>
  )
}