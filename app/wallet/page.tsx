"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
} from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { ParticleBackground } from "@/components/particle-background"
import { LucideIcon } from "lucide-react"
import { WALLET_SCHEMA } from '@/lib/schema-constants'
import { SchemaOrg } from '@/components/seo/schema-org'
import Image from "next/image"

interface Wallet {
  id: string
  name: string
  description: string
  image: string
  platforms: string[]
  features: string[]
  category: string
  isOfficial: boolean
  websiteUrl: string
  downloadUrl: string
  rating: number
  users: string
  icon: LucideIcon
  isRecommended?: boolean
}

interface WalletData {
  official: Wallet[]
  desktop: Wallet[]
  mobile: Wallet[]
  browser: Wallet[]
  hardware: Wallet[]
}

const walletData: WalletData = {
  official: [
    {
      id: "ergo-wallet",
      name: "Ergo Wallet",
      description: "Official desktop and mobile wallet with full feature support",
      image: "/placeholder.svg?height=80&width=80",
      platforms: ["Windows", "macOS", "Linux", "iOS", "Android"],
      features: ["Full Node", "dApp Support", "Multi-Sig", "Privacy Features"],
      category: "Official",
      isOfficial: true,
      websiteUrl: "https://ergoplatform.org/en/wallets/",
      downloadUrl: "https://ergoplatform.org/en/wallets/",
      rating: 4.8,
      users: "50K+",
      icon: Globe,
    },
  ],
  desktop: [
    {
      id: "ergo-node",
      name: "Ergo Node",
      description: "Full node wallet for advanced users and developers",
      image: "/placeholder.svg?height=80&width=80",
      platforms: ["Windows", "macOS", "Linux"],
      features: ["Full Node", "API Access", "Mining Support", "Advanced Settings"],
      category: "Desktop",
      isOfficial: true,
      websiteUrl: "https://github.com/ergoplatform/ergo",
      downloadUrl: "https://github.com/ergoplatform/ergo/releases",
      rating: 4.5,
      users: "5K+",
      icon: HardDrive,
    },
  ],
  mobile: [
    {
      id: "ergo-mobile",
      name: "Ergo Mobile",
      description: "Official mobile wallet for iOS and Android",
      image: "/placeholder.svg?height=80&width=80",
      platforms: ["iOS", "Android"],
      features: ["Biometric Auth", "QR Scanner", "dApp Browser", "Push Notifications"],
      category: "Mobile",
      isOfficial: true,
      websiteUrl: "https://ergoplatform.org/en/wallets/",
      downloadUrl: "https://ergoplatform.org/en/wallets/",
      rating: 4.7,
      users: "25K+",
      icon: Smartphone,
    },
    {
      id: "terminus",
      name: "Terminus",
      description: "Feature-rich mobile wallet with advanced dApp integration",
      image: "/placeholder.svg?height=80&width=80",
      platforms: ["iOS", "Android"],
      features: ["dApp Browser", "DeFi Integration", "NFT Support", "Portfolio Tracking"],
      category: "Mobile",
      isOfficial: false,
      websiteUrl: "https://terminus.money/",
      downloadUrl: "https://terminus.money/",
      rating: 4.6,
      users: "15K+",
      icon: Smartphone,
    },
  ],
  browser: [
    {
      id: "nautilus",
      name: "Nautilus",
      description: "Popular browser extension wallet for web3 interactions",
      image: "/placeholder.svg?height=80&width=80",
      platforms: ["Chrome", "Firefox", "Brave", "Edge"],
      features: ["Web3 Integration", "dApp Connector", "Multi-Account", "Hardware Support"],
      category: "Browser",
      isOfficial: false,
      websiteUrl: "https://github.com/capt-nemo429/nautilus-wallet",
      downloadUrl: "https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai",
      rating: 4.4,
      users: "20K+",
      icon: Chrome,
    },
    {
      id: "safew",
      name: "SAFEW",
      description: "Simple and fast Ergo web wallet",
      image: "/placeholder.svg?height=80&width=80",
      platforms: ["Web"],
      features: ["Web-based", "No Download", "Quick Setup", "Basic Features"],
      category: "Browser",
      isOfficial: false,
      websiteUrl: "https://wallet.ergoplatform.com/",
      downloadUrl: "https://wallet.ergoplatform.com/",
      rating: 4.2,
      users: "10K+",
      icon: Globe,
    },
  ],
  hardware: [
    {
      id: "ledger",
      name: "Ledger",
      description: "Hardware wallet with Ergo support for maximum security",
      image: "/placeholder.svg?height=80&width=80",
      platforms: ["Hardware"],
      features: ["Cold Storage", "PIN Protection", "Recovery Phrase", "Multi-Currency"],
      category: "Hardware",
      isOfficial: false,
      websiteUrl: "https://www.ledger.com/",
      downloadUrl: "https://www.ledger.com/ergo-wallet",
      rating: 4.9,
      users: "1M+",
      icon: HardDrive,
    },
  ],
}

const categories = [
  { id: "all", name: "All Wallets", icon: Globe },
  { id: "official", name: "Official", icon: Star },
  { id: "desktop", name: "Desktop", icon: Monitor },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "browser", name: "Browser", icon: Chrome },
  { id: "hardware", name: "Hardware", icon: HardDrive },
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

export default function WalletPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const getAllWallets = () => {
    return [
      ...walletData.official,
      ...walletData.desktop,
      ...walletData.mobile,
      ...walletData.browser,
      ...walletData.hardware,
    ]
  }

  const getFilteredWallets = () => {
    if (selectedCategory === "all") return getAllWallets()
    if (selectedCategory === "official") return walletData.official
    if (selectedCategory === "desktop") return walletData.desktop
    if (selectedCategory === "mobile") return walletData.mobile
    if (selectedCategory === "browser") return walletData.browser
    if (selectedCategory === "hardware") return walletData.hardware
    return []
  }

  const filteredWallets = getFilteredWallets()

  return (
    <div className="min-h-screen relative">
      <SchemaOrg type="SoftwareApplication" data={WALLET_SCHEMA} />
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ParticleBackground />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 136, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 136, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-pulse" />
        <div
          className="absolute top-40 right-20 w-24 h-24 border border-primary/30 rotate-12 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/10 rotate-45 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary/20 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        />

        {/* Scanning Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            style={{
              top: "20%",
              animation: "scan-horizontal 8s linear infinite",
            }}
          />
          <div
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            style={{
              left: "30%",
              animation: "scan-vertical 12s linear infinite",
            }}
          />
        </div>

        {/* Glitch Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0"
            style={{
              animation: "glitch-flash 10s infinite",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container py-12 space-y-16">
          {/* Hero Section */}
          <FadeIn>
            <div className="text-center space-y-6">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 backdrop-blur-sm">
                SECURE YOUR ASSETS
              </Badge>
              <SectionHeading
                title="Ergo Wallets"
                subtitle="Your Gateway to the Ergo Ecosystem"
                description="Choose from a variety of secure wallets to store, manage, and interact with your ERG and Ergo-based assets."
              />
            </div>
          </FadeIn>

          {/* Category Filters */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`gap-2 backdrop-blur-sm ${
                      selectedCategory === category.id
                        ? "bg-primary text-black shadow-lg shadow-primary/25"
                        : "border-primary/30 hover:border-primary/60 bg-black/20 hover:bg-primary/10"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </FadeIn>

          {/* Wallets Grid */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWallets.map((wallet, index) => (
                <motion.div
                  key={wallet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gray-900/80 backdrop-blur-sm border-gray-800 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                            <Image
                              src={wallet.image || "/placeholder.svg"}
                              alt={wallet.name}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg">{wallet.name}</CardTitle>
                              {wallet.isOfficial && (
                                <Badge
                                  variant="secondary"
                                  className="text-xs bg-primary/20 text-primary border-primary/30"
                                >
                                  Official
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(wallet.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-400">
                                {wallet.rating} • {wallet.users}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <CardDescription className="text-gray-300">{wallet.description}</CardDescription>

                      {/* Platforms */}
                      <div className="flex flex-wrap gap-2">
                        {wallet.platforms.map((platform) => {
                          const Icon = platformIcons[platform] || Globe
                          return (
                            <div
                              key={platform}
                              className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-800/50 backdrop-blur-sm text-xs border border-gray-700/50"
                            >
                              <Icon className="h-3 w-3" />
                              {platform}
                            </div>
                          )
                        })}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-300">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {wallet.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-gray-700 hover:border-primary/50 bg-black/20 backdrop-blur-sm"
                      >
                        <Link href={wallet.websiteUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 mr-2" />
                          Website
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="flex-1 bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/25"
                      >
                        <Link href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Get Wallet
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>

          {/* Wallet Education Section */}
          <FadeIn delay={0.4}>
            <div className="space-y-8">
              <SectionHeading
                title="Wallet Education"
                subtitle="Everything You Need to Know"
                description="Learn about wallet security, types, and best practices to keep your assets safe."
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Security Guide */}
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 hover:border-red-500/30 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Shield className="h-6 w-6 text-red-400" />
                    </div>
                    <CardTitle>Security Best Practices</CardTitle>
                    <CardDescription>Essential security measures for protecting your assets</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Lock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium">Backup Your Seed Phrase</p>
                        <p className="text-gray-400">Write it down and store in multiple secure locations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Eye className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium">Never Share Private Keys</p>
                        <p className="text-gray-400">Keep your private information completely private</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium">Use Hardware Wallets</p>
                        <p className="text-gray-400">For large amounts, hardware wallets offer maximum security</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wifi className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium">Keep Software Updated</p>
                        <p className="text-gray-400">Regular updates include important security patches</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full hover:bg-red-500/10">
                      <Link href="/wallet/security">
                        Learn More About Security
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Wallet Types */}
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 hover:border-blue-500/30 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                      <HardDrive className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle>Types of Wallets</CardTitle>
                    <CardDescription>Understanding different wallet categories and their use cases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="hardware" className="border-gray-700">
                        <AccordionTrigger className="text-sm hover:text-primary">Hardware Wallets</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-sm">
                          Physical devices that store your private keys offline. Highest security for long-term storage.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="desktop" className="border-gray-700">
                        <AccordionTrigger className="text-sm hover:text-primary">Desktop Wallets</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-sm">
                          Software installed on your computer. Good balance of security and functionality.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="mobile" className="border-gray-700">
                        <AccordionTrigger className="text-sm hover:text-primary">Mobile Wallets</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-sm">
                          Apps on your smartphone. Convenient for daily transactions and dApp interactions.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="browser" className="border-gray-700">
                        <AccordionTrigger className="text-sm hover:text-primary">Browser Extensions</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-sm">
                          Browser add-ons for web3 interactions. Essential for using decentralized applications.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Getting Started */}
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 hover:border-green-500/30 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Zap className="h-6 w-6 text-green-400" />
                    </div>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Quick steps to set up your first Ergo wallet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center">
                          1
                        </div>
                        <span className="text-sm">Choose a wallet type based on your needs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center">
                          2
                        </div>
                        <span className="text-sm">Download from official sources only</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center">
                          3
                        </div>
                        <span className="text-sm">Securely backup your seed phrase</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center">
                          4
                        </div>
                        <span className="text-sm">Start with small amounts to test</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/25"
                    >
                      <Link href="/wallet/setup-guide">
                        Setup Guide
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </FadeIn>

          {/* Help Section */}
          <FadeIn delay={0.6}>
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center lg:text-left">
                    <h3 className="text-2xl font-bold">Need Help Choosing a Wallet?</h3>
                    <p className="text-gray-300 max-w-2xl">
                      Not sure which wallet is right for you? Our interactive guide will help you find the perfect
                      wallet based on your needs, experience level, and security preferences.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/50 hover:border-primary bg-black/20 backdrop-blur-sm"
                    >
                      <Link href="/wallet/compare">
                        Compare Wallets
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/25">
                      <Link href="/wallet/quiz">
                        Take Wallet Quiz
                        <Zap className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes glitch-flash {
          0%, 98% { opacity: 0; }
          99%, 100% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
