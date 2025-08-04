"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Zap, Shield, Coins, Code, Users, TrendingUp } from "lucide-react"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const platformComparisonData = [
  {
    feature: "Consensus Mechanism",
    ergo: { value: "Proof-of-Work (Autolykos v2)", score: "excellent" },
    bitcoin: { value: "Proof-of-Work (SHA-256)", score: "excellent" },
    ethereum: { value: "Proof-of-Stake", score: "good" },
    cardano: { value: "Proof-of-Stake (Ouroboros)", score: "good" },
  },
  {
    feature: "Accounting Model",
    ergo: { value: "eUTXO (Extended UTXO)", score: "excellent" },
    bitcoin: { value: "UTXO", score: "good" },
    ethereum: { value: "Account-based", score: "fair" },
    cardano: { value: "eUTXO", score: "excellent" },
  },
  {
    feature: "Smart Contract Language",
    ergo: { value: "ErgoScript (Σ-protocols)", score: "excellent" },
    bitcoin: { value: "Bitcoin Script (Limited)", score: "poor" },
    ethereum: { value: "Solidity, Vyper (EVM)", score: "good" },
    cardano: { value: "Plutus (Haskell)", score: "good" },
  },
  {
    feature: "Native Advanced Crypto",
    ergo: { value: "Σ-protocols (ZKP)", score: "excellent" },
    bitcoin: { value: "Basic cryptography", score: "fair" },
    ethereum: { value: "Limited (L2 solutions)", score: "fair" },
    cardano: { value: "Research-based", score: "good" },
  },
  {
    feature: "Light Client Technology",
    ergo: { value: "NIPOPOWs (High security)", score: "excellent" },
    bitcoin: { value: "SPV (Limited security)", score: "fair" },
    ethereum: { value: "Sync Committees", score: "good" },
    cardano: { value: "Mithril (Research)", score: "good" },
  },
  {
    feature: "Launch Method",
    ergo: { value: "Fair PoW launch", score: "excellent" },
    bitcoin: { value: "Fair PoW launch", score: "excellent" },
    ethereum: { value: "ICO, Pre-mine", score: "poor" },
    cardano: { value: "ICO, Gradual rollout", score: "poor" },
  },
  {
    feature: "Transaction Cost Model",
    ergo: { value: "Predictable", score: "excellent" },
    bitcoin: { value: "Competition-based", score: "fair" },
    ethereum: { value: "Gas (Variable)", score: "poor" },
    cardano: { value: "Predictable fees", score: "good" },
  },
]

const comparisonData = [
  {
    feature: "Platform Type",
    ergo: { value: "eUTXO", score: "excellent" },
    ethereum: { value: "Account-based (EVM)", score: "good" },
    cardano: { value: "eUTXO", score: "excellent" },
    bitcoin: { value: "UTXO", score: "good" },
    move: { value: "Account-based", score: "good" },
  },
  {
    feature: "Language Base",
    ergo: { value: "Sigma-based (Scala-like)", score: "excellent" },
    ethereum: { value: "JS/C++-like", score: "good" },
    cardano: { value: "Haskell, DSL", score: "good" },
    bitcoin: { value: "Forth-like, stack-based", score: "poor" },
    move: { value: "Rust-like", score: "good" },
  },
  {
    feature: "Turing-complete",
    ergo: { value: "No (restricted for security)", score: "excellent" },
    ethereum: { value: "Yes (with gas limits)", score: "fair" },
    cardano: { value: "No (highly restricted)", score: "excellent" },
    bitcoin: { value: "No", score: "good" },
    move: { value: "Yes", score: "fair" },
  },
  {
    feature: "Security",
    ergo: { value: "High (no reentrancy, no shared state)", score: "excellent" },
    ethereum: { value: "Complex (reentrancy, overflows)", score: "poor" },
    cardano: { value: "Very high (strong types)", score: "excellent" },
    bitcoin: { value: "Very high (minimal features)", score: "excellent" },
    move: { value: "Above average", score: "good" },
  },
  {
    feature: "Custom Cryptography",
    ergo: { value: "Easy (Sigma, ZKPs, ring sigs)", score: "excellent" },
    ethereum: { value: "Very hard", score: "poor" },
    cardano: { value: "Possible but complex", score: "fair" },
    bitcoin: { value: "Nearly impossible", score: "poor" },
    move: { value: "Possible", score: "fair" },
  },
  {
    feature: "Resource/Gas Cost",
    ergo: { value: "Predictable (restricted execution)", score: "excellent" },
    ethereum: { value: "Can be huge", score: "poor" },
    cardano: { value: "Capped (script units)", score: "good" },
    bitcoin: { value: "Very cheap", score: "excellent" },
    move: { value: "Predictable", score: "good" },
  },
]

const getPlatformScoreColor = (score: string) => {
  switch (score) {
    case "excellent":
      return "border-orange-400/50 bg-orange-400/10 text-orange-300 hover:bg-orange-400/20"
    case "good":
      return "border-amber-400/50 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"
    case "fair":
      return "border-yellow-500/50 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
    case "poor":
      return "border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20"
    case "experimental":
      return "border-purple-500/50 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
    default:
      return "border-gray-600/50 bg-gray-600/10 text-gray-400"
  }
}

const getScoreColor = (score: string) => {
  switch (score) {
    case "excellent":
      return "border-green-400/50 bg-green-400/10 text-green-300 hover:bg-green-400/20"
    case "good":
      return "border-blue-400/50 bg-blue-400/10 text-blue-300 hover:bg-blue-400/20"
    case "fair":
      return "border-yellow-500/50 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
    case "poor":
      return "border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20"
    case "experimental":
      return "border-purple-500/50 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
    default:
      return "border-gray-600/50 bg-gray-600/10 text-gray-400"
  }
}

const platforms = [
  { id: "bitcoin", name: "Bitcoin", color: "text-orange-400", bgColor: "bg-orange-400/10" },
  { id: "ethereum", name: "Ethereum", color: "text-amber-400", bgColor: "bg-amber-400/10" },
  { id: "cardano", name: "Cardano", color: "text-purple-400", bgColor: "bg-purple-400/10" },
]

export default function ComparisonPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("bitcoin")

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <PageTransition>
          <div className="max-w-7xl mx-auto py-8">
            {/* Hero Section */}
            <section>
              <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
                <FadeIn>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 text-center"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block text-center">
                      WHY CHOOSE ERGO?
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Understanding Ergo's positioning in the blockchain ecosystem through technical and philosophical comparisons with leading platforms.
                    </p>
                  </motion.div>
                </FadeIn>
              </div>
            </section>

            {/* Quick Stats */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { label: "Fair Launch", value: "✓", color: "text-orange-400", desc: "No ICO or pre-mine" },
                { label: "ASIC Resistant", value: "✓", color: "text-orange-400", desc: "GPU-friendly mining" },
                {
                  label: "Advanced Crypto",
                  value: "Σ-protocols",
                  color: "text-amber-400",
                  desc: "Built-in privacy",
                },
                { label: "Predictable Fees", value: "✓", color: "text-orange-400", desc: "No gas surprises" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-orange-500/10 hover:border-orange-400/30 transition-all duration-300 group"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.desc}</div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Platform Comparison Table */}
            <section className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Platform Comparison Matrix
                  </h2>
                </FadeIn>

                <div className="overflow-x-auto">
                  <div className="min-w-[800px] bg-gray-900/30 border border-gray-800 rounded-lg backdrop-blur-sm">
                    {/* Header */}
                    <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800">
                      <div className="font-semibold text-gray-300">Feature</div>
                      <div className="font-semibold text-orange-400 text-center">Ergo</div>
                      <div className="font-semibold text-amber-400 text-center">Bitcoin</div>
                      <div className="font-semibold text-yellow-400 text-center">Ethereum</div>
                      <div className="font-semibold text-purple-400 text-center">Cardano</div>
                    </div>

                    {/* Rows */}
                    {platformComparisonData.map((row, index) => (
                      <motion.div
                        key={row.feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors duration-300"
                      >
                        <div className="font-medium text-gray-200 flex items-center">{row.feature}</div>

                        {/* Ergo */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getPlatformScoreColor(row.ergo.score)} text-xs transition-all`}>
                            {row.ergo.value}
                          </Badge>
                        </div>

                        {/* Bitcoin */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getPlatformScoreColor(row.bitcoin.score)} text-xs transition-all`}>
                            {row.bitcoin.value}
                          </Badge>
                        </div>

                        {/* Ethereum */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getPlatformScoreColor(row.ethereum.score)} text-xs transition-all`}>
                            {row.ethereum.value}
                          </Badge>
                        </div>

                        {/* Cardano */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getPlatformScoreColor(row.cardano.score)} text-xs transition-all`}>
                            {row.cardano.value}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Smart Contract Languages Comparison Table */}
            <section className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    ErgoScript vs. Other Smart Contract Languages
                  </h2>
                </FadeIn>

                <div className="overflow-x-auto">
                  <div className="min-w-[900px] bg-gray-900/90 border border-gray-700 rounded-xl backdrop-blur-sm">
                    {/* Header */}
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-700 bg-gray-800/50">
                      <div className="font-bold text-gray-200 text-lg">Feature</div>
                      <div className="font-bold text-orange-400 text-center text-lg">ErgoScript (Ergo)</div>
                      <div className="font-bold text-blue-400 text-center text-lg">Solidity (Ethereum)</div>
                      <div className="font-bold text-purple-400 text-center text-lg">Plutus (Cardano)</div>
                      <div className="font-bold text-yellow-400 text-center text-lg">Bitcoin Script</div>
                      <div className="font-bold text-green-400 text-center text-lg">Move (Aptos/Sui)</div>
                    </div>

                    {/* Rows */}
                    {comparisonData.map((row, index) => (
                      <motion.div
                        key={row.feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="grid grid-cols-6 gap-4 p-6 border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors duration-300"
                      >
                        <div className="font-medium text-gray-200 flex items-center text-base">{row.feature}</div>

                        {/* ErgoScript (Ergo) */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getScoreColor(row.ergo.score)} text-sm transition-all border-2 px-3 py-1`}>
                            {row.ergo.value}
                          </Badge>
                        </div>

                        {/* Solidity (Ethereum) */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getScoreColor(row.ethereum.score)} text-sm transition-all border-2 px-3 py-1`}>
                            {row.ethereum.value}
                          </Badge>
                        </div>

                        {/* Plutus (Cardano) */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getScoreColor(row.cardano.score)} text-sm transition-all border-2 px-3 py-1`}>
                            {row.cardano.value}
                          </Badge>
                        </div>

                        {/* Bitcoin Script */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getScoreColor(row.bitcoin.score)} text-sm transition-all border-2 px-3 py-1`}>
                            {row.bitcoin.value}
                          </Badge>
                        </div>

                        {/* Move (Aptos/Sui) */}
                        <div className="text-center">
                          <Badge variant="outline" className={`${getScoreColor(row.move.score)} text-sm transition-all border-2 px-3 py-1`}>
                            {row.move.value}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Detailed Platform Comparisons */}
            <section className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Detailed Platform Analysis
                  </h2>
                </FadeIn>

                <Tabs value={selectedPlatform} onValueChange={setSelectedPlatform} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border border-gray-800">
                    {platforms.map((platform) => (
                      <TabsTrigger
                        key={platform.id}
                        value={platform.id}
                        className={`${platform.color} data-[state=active]:${platform.bgColor} data-[state=active]:border-current`}
                      >
                        Ergo vs {platform.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Bitcoin Comparison */}
                  <TabsContent value="bitcoin" className="mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-orange-400 flex items-center gap-2">
                            <Check className="w-5 h-5" />
                            Similarities
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">PoW & UTXO Foundation</h4>
                              <p className="text-gray-400 text-sm">
                                Both use Proof-of-Work consensus and UTXO accounting model for maximum security
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Fair Launch</h4>
                              <p className="text-gray-400 text-sm">
                                No ICOs, pre-mines, or VC funding - truly decentralized from day one
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Security First</h4>
                              <p className="text-gray-400 text-sm">
                                Both prioritize network security and decentralization over speed
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-amber-400 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Key Differences
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Code className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Smart Contracts</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: Advanced ErgoScript with Σ-protocols | Bitcoin: Limited Script functionality
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Light Clients</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: NIPOPOWs for ultra-secure light clients | Bitcoin: SPV with limited security
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Coins className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Mining Algorithm</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: ASIC-resistant Autolykos v2 | Bitcoin: ASIC-dominated SHA-256
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="mt-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">The Bottom Line</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Ergo can be seen as an evolution of Bitcoin's ideas, retaining its core strengths (PoW, UTXO,
                          fair launch) while adding significantly more flexibility and functionality. Ergo aims to
                          provide the advanced features that Bitcoin deliberately forgoes to maintain simplicity,
                          effectively acting as a "smart contract layer" for users who need advanced capabilities on a
                          secure PoW foundation.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Ethereum Comparison */}
                  <TabsContent value="ethereum" className="mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-yellow-400 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Fundamental Differences
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Consensus Model</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: Proven PoW security | Ethereum: PoS with different trade-offs
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Code className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">State Management</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: eUTXO for predictability | Ethereum: Account-based with global state
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Coins className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Transaction Costs</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: Predictable fees | Ethereum: Variable gas with potential spikes
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-orange-400 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Ergo Advantages
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Fair Launch</h4>
                              <p className="text-gray-400 text-sm">
                                No ICO or pre-mine vs Ethereum's initial token distribution
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Better Parallelism</h4>
                              <p className="text-gray-400 text-sm">
                                eUTXO enables true parallel transaction processing
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Native Privacy</h4>
                              <p className="text-gray-400 text-sm">
                                Built-in Σ-protocols vs Ethereum's limited privacy options
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">The Bottom Line</h3>
                        <p className="text-gray-300 leading-relaxed">
                          The key distinction lies in the choice between eUTXO/PoW (Ergo) and Account/PoS (Ethereum)
                          models. Ergo bets on proven principles with enhancements for predictability and security,
                          offering a potentially safer environment for DeFi applications, while Ethereum has chosen a
                          different path optimizing for ecosystem size and developer adoption.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Cardano Comparison */}
                  <TabsContent value="cardano" className="mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-purple-400 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Similarities
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">eUTXO Model</h4>
                              <p className="text-gray-400 text-sm">
                                Both use Extended UTXO model for predictable and secure smart contracts
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Academic Rigor</h4>
                              <p className="text-gray-400 text-sm">
                                Strong focus on mathematical foundations and formal verification
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Security Focus</h4>
                              <p className="text-gray-400 text-sm">
                                Both prioritize security and predictability over raw throughput
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-orange-400 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Key Differences
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Code className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Consensus Mechanism</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: Proven PoW security | Cardano: Ouroboros PoS research-based
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Smart Contract Language</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: ErgoScript with Σ-protocols | Cardano: Plutus with Haskell
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Coins className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Launch Method</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: Fair PoW launch | Cardano: ICO and gradual rollout
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="mt-8 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border-purple-500/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">The Bottom Line</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Ergo and Cardano share the eUTXO model philosophy but differ in execution. Ergo combines 
                          PoW security with native cryptographic primitives for immediate utility, while Cardano 
                          focuses on academic research and gradual feature rollout. Both offer superior predictability 
                          compared to account-based models.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            {/* ErgoScript Advantages */}
            <section className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Why ErgoScript Stands Out
                  </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-orange-400 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Security First
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">No Reentrancy</h4>
                          <p className="text-gray-400 text-sm">
                            eUTXO model eliminates reentrancy attacks that plague Ethereum
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">No Shared State</h4>
                          <p className="text-gray-400 text-sm">
                            Immutable boxes prevent complex state manipulation bugs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">Predictable Costs</h4>
                          <p className="text-gray-400 text-sm">
                            Restricted execution ensures predictable resource usage
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-cyan-400 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Advanced Cryptography
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">Sigma Protocols</h4>
                          <p className="text-gray-400 text-sm">
                            Built-in zero-knowledge proofs and ring signatures
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">Native Privacy</h4>
                          <p className="text-gray-400 text-sm">
                            Privacy features at the protocol level, not Layer 2
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">Easy Implementation</h4>
                          <p className="text-gray-400 text-sm">
                            Complex cryptography made simple with built-in primitives
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-purple-400 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Developer Experience
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">Scala-like Syntax</h4>
                          <p className="text-gray-400 text-sm">
                            Familiar functional programming concepts
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">Type Safety</h4>
                          <p className="text-gray-400 text-sm">
                            Strong type system prevents many runtime errors
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">Composability</h4>
                          <p className="text-gray-400 text-sm">
                            eUTXO enables true parallel and composable contracts
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-12 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border-orange-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">The ErgoScript Advantage</h3>
                    <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                      ErgoScript combines the security of Bitcoin Script, the expressiveness of Solidity, 
                      and the mathematical rigor of Plutus, while adding unique features like native Sigma protocols 
                      and eUTXO composability. It's designed for developers who need both advanced functionality 
                      and predictable security.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <FadeIn>
                  <Card className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
                      <p className="text-gray-300 mb-8 text-lg">
                        Discover why developers and users are choosing Ergo for secure, predictable, and truly
                        decentralized applications.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
                          asChild
                        >
                          <Link href="/build">Start Building on Ergo</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
                          Explore the Ecosystem
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </section>
          </div>
        </PageTransition>
      </div>
    </div>
  )
}
