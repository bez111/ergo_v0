"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Zap, Shield, Coins, Code, Users, TrendingUp, ArrowRight, CheckCircle, ExternalLink, Brain, Target, Globe, Rocket, Heart, Star, Award, Eye, Database } from "lucide-react"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import Link from "next/link"

// UI Kit style hex component (менее цветастый)
const ErgoHex = ({ size = "w-5 h-5", className = "" }: { size?: string; className?: string }) => {
  // Flat-top hexagon formula
  const R = 10; // радиус для viewBox 24x24
  const cx = 12, cy = 12; // центр
  const points = [...Array(6)].map((_, i) => {
    const angle = Math.PI / 3 * i; // шаг 60°
    return [
      cx + R * Math.cos(angle),
      cy + R * Math.sin(angle)
    ].join(',');
  }).join(' ');

  return (
    <div className={`${size} ${className}`}>
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points={points} />
        <text x="12" y="16" textAnchor="middle" className="text-[8px] font-bold fill-current" stroke="none">Σ</text>
      </svg>
    </div>
  )
}

// Comparison data - менее цветастый стиль
const keyDifferentiators = [
  {
    title: "Predictable & Secure",
    ergo: "No reentrancy attacks, predictable costs",
    others: "Vulnerable to exploits, gas surprises",
    icon: Shield,
    color: "text-orange-400"
  },
  {
    title: "Native Privacy",
    ergo: "Built-in Sigma protocols & ring signatures",
    others: "Privacy requires external solutions",
    icon: Brain,
    color: "text-orange-400"
  },
  {
    title: "Developer Experience",
    ergo: "Simple, logical ErgoScript syntax",
    others: "Complex, error-prone languages",
    icon: Code,
    color: "text-orange-400"
  },
  {
    title: "Fair & Decentralized",
    ergo: "Fair launch, no ICO, GPU mining",
    others: "VC-funded, pre-mines, centralized",
    icon: Heart,
    color: "text-orange-400"
  }
]

// Simple comparison for key metrics - менее цветастый
const simpleComparison = [
  {
    metric: "Smart Contract Security",
    ergo: { value: "Built-in safety", score: "excellent" },
    ethereum: { value: "Complex & risky", score: "poor" },
    bitcoin: { value: "Very limited", score: "fair" },
    cardano: { value: "Research-heavy", score: "good" }
  },
  {
    metric: "Transaction Costs",
    ergo: { value: "Predictable", score: "excellent" },
    ethereum: { value: "Highly variable", score: "poor" },
    bitcoin: { value: "Competition-based", score: "fair" },
    cardano: { value: "Generally low", score: "good" }
  },
  {
    metric: "Developer Onboarding",
    ergo: { value: "Logical & simple", score: "excellent" },
    ethereum: { value: "Steep learning curve", score: "fair" },
    bitcoin: { value: "Very limited", score: "poor" },
    cardano: { value: "Academic complexity", score: "fair" }
  },
  {
    metric: "Launch Fairness",
    ergo: { value: "Fair PoW launch", score: "excellent" },
    ethereum: { value: "ICO pre-mine", score: "poor" },
    bitcoin: { value: "Fair PoW launch", score: "excellent" },
    cardano: { value: "ICO distribution", score: "poor" }
  }
]

// Success stories - менее цветастый стиль
const successStories = [
  {
    title: "DeFi Pioneer",
    quote: "Ergo's eUTXO model made building our DEX predictable and secure",
    author: "SigmaUSD Team",
    icon: Coins,
    color: "text-orange-400"
  },
  {
    title: "Privacy Advocate", 
    quote: "Native mixing and ring signatures - privacy by design",
    author: "ErgoMixer Developer",
    icon: Shield,
    color: "text-orange-400"
  },
  {
    title: "Smart Contract Dev",
    quote: "ErgoScript just makes sense - no hidden gotchas",
    author: "Community Developer",
    icon: Brain,
    color: "text-orange-400"
  }
]

const getScoreColor = (score: string) => {
  switch (score) {
    case "excellent":
      return "border-orange-500/50 bg-orange-500/10 text-orange-400"
    case "good":
      return "border-neutral-500/50 bg-neutral-500/10 text-neutral-400"
    case "fair":
      return "border-neutral-600/50 bg-neutral-600/10 text-neutral-400"
    case "poor":
      return "border-neutral-700/50 bg-neutral-700/10 text-neutral-500"
    default:
      return "border-neutral-600/50 bg-neutral-600/10 text-neutral-400"
  }
}

export default function ComparisonPage() {
  const [activeStory, setActiveStory] = useState(0)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <PageTransition>
          
          {/* Hero Section - Technical Style like eutxo-model */}
          <section className="pt-8 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                    BLOCKCHAIN COMPARISON
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    Platform <span className="text-orange-400">Analysis</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                    Understanding Ergo's Technical Advantages
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo combines the security and predictability of UTXO with the programmability needed 
                    for complex smart contracts, while maintaining native privacy and avoiding common pitfalls 
                    of account-based blockchains.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      <Rocket className="w-5 h-5 mr-2" />
                      Start Building
                    </Button>
                    <Button
                      variant="outline"
                      className="border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                    >
                      <Target className="w-5 h-5 mr-2" />
                      View Comparison
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Comparison Cards */}
                  <div className="space-y-4">
                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-orange-400" />
                        <h3 className="text-lg font-semibold text-white">Predictable Security</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        No reentrancy attacks, deterministic gas costs, formal verification friendly
                      </p>
                    </div>

                                         <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
                       <div className="flex items-center gap-3 mb-3">
                         <Zap className="w-6 h-6 text-orange-400" />
                         <h3 className="text-lg font-semibold text-white">Parallel Processing</h3>
                       </div>
                      <p className="text-gray-400 text-sm">
                        Independent UTXOs enable true parallelism without state contention
                      </p>
                    </div>

                                         <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
                       <div className="flex items-center gap-3 mb-3">
                         <Eye className="w-6 h-6 text-orange-400" />
                         <h3 className="text-lg font-semibold text-white">Native Privacy</h3>
                       </div>
                       <p className="text-gray-400 text-sm">
                         Σ-protocols and UTXO mixing built into the protocol layer
                       </p>
                     </div>

                     <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
                       <div className="flex items-center gap-3 mb-3">
                         <Database className="w-6 h-6 text-orange-400" />
                        <h3 className="text-lg font-semibold text-white">First-Class Assets</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Tokens are protocol-level primitives, not contract workarounds
                      </p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl opacity-60 animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-500/10 rounded-full blur-lg opacity-40 animate-pulse delay-1000" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Vision Block - менее цветастый UI Kit Style */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-orange-400" />
              Why Developers Choose Ergo
            </h2>
            <p className="text-gray-300">
              "Other platforms force you to work around their limitations. Ergo works around yours." 
              Experience the difference of building on a platform designed for security, predictability, and developer productivity.
            </p>
          </div>

          {/* Stats Grid - менее цветастый стиль */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">$0</div>
              <div className="text-sm text-gray-400">Surprise Gas Fees</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">0</div>
              <div className="text-sm text-gray-400">Reentrancy Attacks</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">Predictable Costs</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">Native</div>
              <div className="text-sm text-gray-400">Privacy Features</div>
            </div>
          </div>

          {/* The Problem vs Solution - менее цветастый стиль */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              The Problem with <span className="text-orange-400">Current Platforms</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                  <X className="w-6 h-6 text-orange-400" /> Development Nightmares
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    Unpredictable gas costs bankrupting users
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    Reentrancy attacks draining protocols
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    Complex languages creating security holes
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    VC-controlled platforms changing rules
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                  <CheckCircle className="w-6 h-6 text-orange-400" /> The Ergo Solution
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    Predictable costs that users can trust
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    Security built into the platform design
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    ErgoScript: simple, logical, safe
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    Community-owned, fair launch principles
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Differentiators - менее цветастый стиль */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              What Makes <span className="text-orange-400">Ergo</span> Different
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyDifferentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-400">{item.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-white">Ergo:</div>
                        <div className="text-gray-300 text-sm">{item.ergo}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-400">Others:</div>
                        <div className="text-gray-400 text-sm">{item.others}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Platform Comparison Table - менее цветастый стиль */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Quick <span className="text-orange-400">Platform</span> Comparison
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-5 gap-4 p-6 border-b border-neutral-700 bg-neutral-800/50">
                <div className="font-bold text-gray-200">Key Factor</div>
                <div className="font-bold text-orange-400 text-center">Ergo</div>
                <div className="font-bold text-neutral-400 text-center">Ethereum</div>
                <div className="font-bold text-neutral-400 text-center">Bitcoin</div>
                <div className="font-bold text-neutral-400 text-center">Cardano</div>
              </div>
              
              {/* Rows */}
              {simpleComparison.map((row, index) => (
                <div key={row.metric} className="grid grid-cols-5 gap-4 p-6 border-b border-neutral-700/50 hover:bg-neutral-800/30 transition-colors">
                  <div className="font-medium text-gray-200">{row.metric}</div>
                  <div className="text-center">
                    <Badge className={`${getScoreColor(row.ergo.score)} text-sm border-2 px-3 py-1`}>
                      {row.ergo.value}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Badge className={`${getScoreColor(row.ethereum.score)} text-sm border-2 px-3 py-1`}>
                      {row.ethereum.value}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Badge className={`${getScoreColor(row.bitcoin.score)} text-sm border-2 px-3 py-1`}>
                      {row.bitcoin.value}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Badge className={`${getScoreColor(row.cardano.score)} text-sm border-2 px-3 py-1`}>
                      {row.cardano.value}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Success Stories - менее цветастый стиль */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              <span className="text-orange-400">Developers</span> Already Building
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <story.icon className="w-8 h-8 text-orange-400" />
                    <h3 className="text-lg font-semibold text-white">{story.title}</h3>
                  </div>
                  <blockquote className="text-gray-300 text-sm italic mb-3">
                    "{story.quote}"
                  </blockquote>
                  <div className="text-sm font-medium text-orange-400">
                    — {story.author}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Features Grid - менее цветастый стиль */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              <span className="text-orange-400">Trust</span> Indicators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Battle-tested since 2019</h3>
                <p className="text-gray-400 text-sm">Proven security track record</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">1000+ developers</h3>
                <p className="text-gray-400 text-sm">Growing active community</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Zero major exploits</h3>
                <p className="text-gray-400 text-sm">Uncompromised security</p>
              </div>
            </div>
          </section>

          {/* Call to Action - менее цветастый стиль */}
          <section className="text-center">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Join the growing community of developers building secure, predictable, and privacy-focused applications on Ergo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl"
                  asChild
                >
                  <Link href="/build">Start Building Today</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  asChild
                >
                  <Link href="/Docs/ecosystem">Explore Ecosystem</Link>
                </Button>
              </div>
            </div>
          </section>

        </PageTransition>
      </div>
    </div>
  )
}
