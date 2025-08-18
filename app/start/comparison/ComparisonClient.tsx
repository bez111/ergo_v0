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
import { SchemaOrg } from "@/components/seo/schema-org"

// Metadata is defined in this route's layout.tsx (server-only)

// Comparison data - adjusted wording
const keyDifferentiators = [
  {
    title: "Predictable & Auditable Security",
    ergo: "No known protocol-level reentrancy class; predictable execution costs",
    others: "Reentrancy patterns and gas price auctions common in account models",
    icon: Shield,
    color: "text-orange-400",
  },
  {
    title: "Native Privacy",
    ergo: "Sigma protocols for threshold/multisig and privacy; ring-like constructions possible",
    others: "Often requires external add-ons or trusted services",
    icon: Brain,
    color: "text-orange-400",
  },
  {
    title: "Developer Experience",
    ergo: "Declarative ErgoScript with eUTXO reasoning",
    others: "Mutable global state; complex reentrancy-safe patterns",
    icon: Code,
    color: "text-orange-400",
  },
  {
    title: "Fair & Decentralized",
    ergo: "Fair PoW launch, ASIC-resistant (GPU-friendly)",
    others: "ICO allocations or validator gating",
    icon: Heart,
    color: "text-orange-400",
  },
]

// Simple comparison for key metrics - convert to semantic table later
const simpleComparison = [
  {
    metric: "Reentrancy risk",
    ergo: { value: "Absent in eUTXO", score: "excellent" },
    ethereum: { value: "Present in app patterns", score: "fair" },
    bitcoin: { value: "N/A (no contracts)", score: "fair" },
    cardano: { value: "Absent in eUTXO", score: "good" },
  },
  {
    metric: "Fee model",
    ergo: { value: "Predictable; no gas auctions", score: "good" },
    ethereum: { value: "Auction-based gas", score: "poor" },
    bitcoin: { value: "Mempool-driven", score: "fair" },
    cardano: { value: "Generally stable", score: "good" },
  },
  {
    metric: "Contract paradigm",
    ergo: { value: "eUTXO (declarative)", score: "good" },
    ethereum: { value: "Account (imperative)", score: "fair" },
    bitcoin: { value: "Script (limited)", score: "fair" },
    cardano: { value: "eUTXO (Plutus)", score: "good" },
  },
  {
    metric: "Assets",
    ergo: { value: "Native L1 tokens/NFTs", score: "good" },
    ethereum: { value: "Wrapped via contracts", score: "fair" },
    bitcoin: { value: "No native tokens", score: "poor" },
    cardano: { value: "Native assets", score: "good" },
  },
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

export default function ComparisonClient() {
  const [activeStory, setActiveStory] = useState(0)
  const isoDate = new Date().toISOString().slice(0, 10)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Schema.org */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Start", item: "https://ergoblockchain.org/start" },
            { "@type": "ListItem", position: 2, name: "Comparison", item: "https://ergoblockchain.org/start/comparison" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Ergo vs Others — Practical Comparison",
          description:
            "Comparison of eUTXO vs account models, PoW vs PoS, privacy and fees: Ergo, Ethereum, Bitcoin, Cardano.",
          image: "https://ergoblockchain.org/og/comparison.png",
          datePublished: isoDate,
          dateModified: isoDate,
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/start/comparison",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <PageTransition>
          
          {/* Hero Section */}
          <section className="pt-8 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    Platform <span className="text-orange-400">Analysis</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                    Understanding Ergo's Technical Advantages
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo combines the security and predictability of the eUTXO model with the programmability needed for complex smart contracts, and supports light clients via NIPoPoWs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl" asChild>
                    <Link href="/docs">
                      <Rocket className="w-5 h-5 mr-2" aria-hidden="true" />
                      Start Building
                    </Link>
                  </Button>
                    <Button
                      variant="outline"
                      className="border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                      asChild
                    >
                      <Link href="#comparison">
                        <Target className="w-5 h-5 mr-2" aria-hidden="true" />
                        View Comparison
                      </Link>
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
                        <Shield className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Predictable & Auditable Security</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        No known protocol-level reentrancy class; deterministic execution bounds; friendly to audits
                      </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Parallel Execution</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Independent UTXOs enable parallel execution; shared-box patterns may introduce contention
                      </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <Eye className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Native Privacy</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Σ-protocols and UTXO mixing at the protocol layer
                      </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Native L1 Assets</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Native L1 tokens/NFTs (no wrapper contracts)
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

          {/* Vision Block */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-orange-400" aria-hidden="true" />
              Why Developers Choose Ergo
            </h2>
            <p className="text-gray-300">
              "Other platforms force you to work around their limitations. Ergo works around yours." Experience the difference of building on a platform designed for security, predictability, and developer productivity.
            </p>
          </div>

          {/* Stats Grid - soften absolutes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">Predictable</div>
              <div className="text-sm text-gray-400">Fees; no gas price auctions</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">No class</div>
              <div className="text-sm text-gray-400">of protocol-level reentrancy</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">Native</div>
              <div className="text-sm text-gray-400">L1 tokens/NFTs</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-400 mb-1">Light</div>
              <div className="text-sm text-gray-400">clients (NIPoPoWs)</div>
            </div>
          </div>

          {/* The Problem vs Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              The Problem with <span className="text-orange-400">Current Platforms</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                  <X className="w-6 h-6 text-orange-400" aria-hidden="true" /> Development Nightmares
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Unpredictable gas costs bankrupting users
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Reentrancy attacks draining protocols
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Complex languages creating security holes
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    VC-controlled platforms changing rules
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                  <CheckCircle className="w-6 h-6 text-orange-400" aria-hidden="true" /> The Ergo Solution
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Predictable fees; auditable execution bounds
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Security-by-design in the eUTXO model
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    ErgoScript: declarative, explicit state transitions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Community-owned, fair launch principles
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Differentiators */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              What Makes <span className="text-orange-400">Ergo</span> Different
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keyDifferentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Main Card */}
                  <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-700 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-7 h-7 text-orange-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <div className="text-xs text-gray-500 mt-1">Key Advantage</div>
                        </div>
                      </div>
                    </div>

                    {/* Comparison Content */}
                    <div className="space-y-4">
                      {/* Ergo Advantage */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                        <div className="pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                            <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Ergo Advantage</span>
                          </div>
                          <p className="text-white font-medium">{item.ergo}</p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-neutral-700/50" />
                        </div>
                        <div className="relative flex justify-center">
                          <span className="px-3 bg-gradient-to-br from-neutral-900 to-neutral-900/50 text-xs text-gray-500">VS</span>
                        </div>
                      </div>

                      {/* Others Limitation */}
                      <div className="relative opacity-60">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-full" />
                        <div className="pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <X className="w-5 h-5 text-neutral-500" aria-hidden="true" />
                            <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Others</span>
                          </div>
                          <p className="text-gray-400">{item.others}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 mb-6">Experience the difference of building on a platform designed for the future</p>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl"
                asChild
              >
                <Link href="/technology">
                  Explore Technology
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </section>

          {/* Platform Comparison Table */}
          <section className="mb-16" id="comparison">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Quick <span className="text-orange-400">Platform</span> Comparison
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
              <div className="p-6">
                <table className="w-full border-separate border-spacing-0 text-sm">
                  <caption className="sr-only">Comparison of key platform characteristics for Ergo, Ethereum, Bitcoin, and Cardano</caption>
                  <thead>
                    <tr className="bg-neutral-800/50">
                      <th scope="col" className="text-left p-3 text-gray-200">Key Factor</th>
                      <th scope="col" className="text-center p-3 text-orange-400">Ergo</th>
                      <th scope="col" className="text-center p-3 text-neutral-400">Ethereum</th>
                      <th scope="col" className="text-center p-3 text-neutral-400">Bitcoin</th>
                      <th scope="col" className="text-center p-3 text-neutral-400">Cardano</th>
                    </tr>
                  </thead>
                  <tbody>
                    {simpleComparison.map((row) => (
                      <tr key={row.metric} className="odd:bg-neutral-800/20 hover:bg-orange-500/10 transition-colors">
                        <th scope="row" className="text-left p-3 font-medium text-gray-200">{row.metric}</th>
                        <td className="text-center p-3">
                          <Badge className={`${getScoreColor(row.ergo.score)} text-xs border-2 px-2 py-0.5`}>{row.ergo.value}</Badge>
                        </td>
                        <td className="text-center p-3">
                          <Badge className={`${getScoreColor(row.ethereum.score)} text-xs border-2 px-2 py-0.5`}>{row.ethereum.value}</Badge>
                        </td>
                        <td className="text-center p-3">
                          <Badge className={`${getScoreColor(row.bitcoin.score)} text-xs border-2 px-2 py-0.5`}>{row.bitcoin.value}</Badge>
                        </td>
                        <td className="text-center p-3">
                          <Badge className={`${getScoreColor(row.cardano.score)} text-xs border-2 px-2 py-0.5`}>{row.cardano.value}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-neutral-500 mt-4">
                  Methodology: qualitative assessment of model-level properties (reentrancy risk, fee model, contract paradigm, asset layer). Updated: {isoDate}.
                </p>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              <span className="text-orange-400">Trust</span> Indicators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-2">Battle-tested since 2019</h3>
                <p className="text-gray-400 text-sm">Proven security track record</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-2">100+ developers</h3>
                <p className="text-gray-400 text-sm">Growing active community</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-2">No critical protocol-level incidents</h3>
                <p className="text-gray-400 text-sm">As of {isoDate}</p>
              </div>
            </div>
          </section>

          {/* Mini FAQ for SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[{
                q: "How does eUTXO reduce reentrancy risk?",
                a: "Transactions consume specified UTXOs and cannot be re-entered; the shared-state pattern behind reentrancy is absent.",
              }, {
                q: "Are fees predictable on Ergo?",
                a: "Script cost is bounded and fees are predictable; there are no gas price auctions (final fees depend on mempool conditions).",
              }, {
                q: "Does Ergo have light clients?",
                a: "Yes. NIPoPoWs enable succinct proofs for trust-minimized light clients.",
              }].map((item) => (
                <div key={item.q} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.q}</h3>
                  <p className="text-neutral-300 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
            <SchemaOrg
              type="FAQPage"
              data={{
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How does eUTXO reduce reentrancy risk?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Transactions consume specified UTXOs and cannot be re-entered; the shared-state pattern behind reentrancy is absent.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are fees predictable on Ergo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Script cost is bounded and fees are predictable; there are no gas price auctions (final fees depend on mempool conditions).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Ergo have light clients?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. NIPoPoWs enable succinct proofs for trust-minimized light clients.",
                    },
                  },
                ],
              }}
            />
          </section>

          {/* Call to Action */}
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
                  <Link href="/docs">Start Building Today</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  asChild
                >
                  <Link href="/docs/ecosystem">Explore Ecosystem</Link>
                </Button>
              </div>
              <p className="text-xs text-neutral-500 mt-6">Last updated: {isoDate}. Sources: <a href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Autolykos v2</a> · <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">ergo (GitHub)</a></p>
            </div>
          </section>

        </PageTransition>
      </div>
    </div>
  )
}
