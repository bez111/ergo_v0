"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Zap, Shield, Coins, Code, Users, TrendingUp } from "lucide-react"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import Link from "next/link"

const comparisonData = [
  {
    feature: "Consensus Mechanism",
    ergo: { value: "Proof-of-Work (Autolykos v2)", score: "excellent", icon: Shield },
    bitcoin: { value: "Proof-of-Work (SHA-256)", score: "excellent", icon: Shield },
    ethereum: { value: "Proof-of-Stake", score: "good", icon: Users },
    solana: { value: "Proof-of-History + PoS", score: "experimental", icon: Zap },
  },
  {
    feature: "Accounting Model",
    ergo: { value: "eUTXO (Extended UTXO)", score: "excellent", icon: Code },
    bitcoin: { value: "UTXO", score: "good", icon: Code },
    ethereum: { value: "Account-based", score: "fair", icon: Users },
    solana: { value: "Account-based", score: "fair", icon: Users },
  },
  {
    feature: "Smart Contract Language",
    ergo: { value: "ErgoScript (Σ-protocols)", score: "excellent", icon: Code },
    bitcoin: { value: "Bitcoin Script (Limited)", score: "poor", icon: X },
    ethereum: { value: "Solidity, Vyper (EVM)", score: "good", icon: Code },
    solana: { value: "Rust, C, C++", score: "good", icon: Code },
  },
  {
    feature: "Native Advanced Crypto",
    ergo: { value: "Σ-protocols (ZKP)", score: "excellent", icon: Shield },
    bitcoin: { value: "Basic cryptography", score: "fair", icon: Shield },
    ethereum: { value: "Limited (L2 solutions)", score: "fair", icon: Shield },
    solana: { value: "Limited (Precompiles)", score: "fair", icon: Shield },
  },
  {
    feature: "Light Client Technology",
    ergo: { value: "NIPOPOWs (High security)", score: "excellent", icon: Zap },
    bitcoin: { value: "SPV (Limited security)", score: "fair", icon: Zap },
    ethereum: { value: "Sync Committees", score: "good", icon: Zap },
    solana: { value: "Limited / RPC dependent", score: "poor", icon: X },
  },
  {
    feature: "Launch Method",
    ergo: { value: "Fair PoW launch", score: "excellent", icon: Check },
    bitcoin: { value: "Fair PoW launch", score: "excellent", icon: Check },
    ethereum: { value: "ICO, Pre-mine", score: "poor", icon: X },
    solana: { value: "VC, Private sales", score: "poor", icon: X },
  },
  {
    feature: "Mining/Staking Focus",
    ergo: { value: "GPU (ASIC-resistant)", score: "excellent", icon: Users },
    bitcoin: { value: "ASIC (Dominance)", score: "fair", icon: TrendingUp },
    ethereum: { value: "Capital (Staking ETH)", score: "fair", icon: Coins },
    solana: { value: "Capital + Hardware", score: "fair", icon: Coins },
  },
  {
    feature: "Transaction Cost Model",
    ergo: { value: "Predictable", score: "excellent", icon: Check },
    bitcoin: { value: "Competition-based", score: "fair", icon: TrendingUp },
    ethereum: { value: "Gas (Variable)", score: "poor", icon: X },
    solana: { value: "Low fixed fees", score: "good", icon: Check },
  },
]

const getScoreColor = (score: string) => {
  switch (score) {
    case "excellent":
      return "text-orange-400 border-orange-400/30 bg-orange-400/10"
    case "good":
      return "text-amber-400 border-amber-400/30 bg-amber-400/10"
    case "fair":
      return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
    case "poor":
      return "text-red-400 border-red-400/30 bg-red-400/10"
    case "experimental":
      return "text-purple-400 border-purple-400/30 bg-purple-400/10"
    default:
      return "text-gray-400 border-gray-400/30 bg-gray-400/10"
  }
}

const platforms = [
  { id: "bitcoin", name: "Bitcoin", color: "text-orange-400", bgColor: "bg-orange-400/10" },
  { id: "ethereum", name: "Ethereum", color: "text-amber-400", bgColor: "bg-amber-400/10" },
  { id: "solana", name: "Solana", color: "text-purple-400", bgColor: "bg-purple-400/10" },
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

            {/* Comparison Table */}
            <section className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Technical Comparison Matrix
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
                      <div className="font-semibold text-purple-400 text-center">Solana</div>
                    </div>

                    {/* Rows */}
                    {comparisonData.map((row, index) => (
                      <motion.div
                        key={row.feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors"
                      >
                        <div className="font-medium text-gray-300 flex items-center">{row.feature}</div>

                        {/* Ergo */}
                        <div className="text-center">
                          <Badge className={`${getScoreColor(row.ergo.score)} text-xs`}>{row.ergo.value}</Badge>
                        </div>

                        {/* Bitcoin */}
                        <div className="text-center">
                          <Badge className={`${getScoreColor(row.bitcoin.score)} text-xs`}>{row.bitcoin.value}</Badge>
                        </div>

                        {/* Ethereum */}
                        <div className="text-center">
                          <Badge className={`${getScoreColor(row.ethereum.score)} text-xs`}>{row.ethereum.value}</Badge>
                        </div>

                        {/* Solana */}
                        <div className="text-center">
                          <Badge className={`${getScoreColor(row.solana.score)} text-xs`}>{row.solana.value}</Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Detailed Comparisons */}
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

                  {/* Solana Comparison */}
                  <TabsContent value="solana" className="mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-purple-400 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Different Philosophies
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Security vs Speed</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: Security-first approach | Solana: Speed-optimized with trade-offs
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Launch Method</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: Fair PoW launch | Solana: VC-backed with private sales
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Code className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Architecture</h4>
                              <p className="text-gray-400 text-sm">
                                Ergo: PoW/eUTXO proven model | Solana: PoH+PoS experimental approach
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-orange-400 flex items-center gap-2">
                            <Check className="w-5 h-5" />
                            Ergo's Advantages
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Proven Security</h4>
                              <p className="text-gray-400 text-sm">
                                Battle-tested PoW consensus vs experimental PoH mechanism
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">True Decentralization</h4>
                              <p className="text-gray-400 text-sm">Fair distribution vs concentrated VC ownership</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-white">Network Stability</h4>
                              <p className="text-gray-400 text-sm">Consistent uptime vs Solana's historical outages</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="mt-8 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border-purple-500/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">The Bottom Line</h3>
                        <p className="text-gray-300 leading-relaxed">
                          The comparison with Solana highlights Ergo's commitment to fair launch principles and
                          decentralization as core values, contrasting with VC-driven approaches. While Solana optimizes
                          for transaction throughput, Ergo focuses on long-term sustainability, security, and true
                          decentralization - representing different solutions to the blockchain trilemma.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
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
