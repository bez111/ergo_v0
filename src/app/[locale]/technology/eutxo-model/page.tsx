"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ArrowRight, Box, Database, Shield, Zap, Eye, Code, ExternalLink, CheckCircle, BookOpen, Users, Coins } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function EUTXOModelPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const modelComparison = [
    {
      aspect: "State Management",
      utxo: "No global balances — only unspent outputs",
      account: "Global state with account balances and storage",
      advantage: "eUTXO",
    },
    {
      aspect: "Security",
      utxo: "No re-entrancy attacks, predictable costs",
      account: "Vulnerable to re-entrancy, unpredictable gas",
      advantage: "eUTXO",
    },
    {
      aspect: "Parallelism",
      utxo: "Independent boxes enable parallel processing",
      account: "State contention forces sequential processing",
      advantage: "eUTXO",
    },
    {
      aspect: "Privacy",
      utxo: "Natural transaction privacy through separate boxes",
      account: "All balances publicly visible",
      advantage: "eUTXO",
    },
    {
      aspect: "Composability",
      utxo: "Modular outputs compose into complex protocols",
      account: "Monolithic contracts with complex interactions",
      advantage: "Tie",
    },
  ]

  const features = [
    {
      icon: Box,
      title: "Box-Based State",
      description: "Each UTXO is a 'box' containing value, data, and a guarding script that defines spending conditions.",
    },
    {
      icon: Database,
      title: "Immutable Data",
      description: "Boxes are immutable — once created, they cannot be modified, only consumed and new ones created.",
    },
    {
      icon: Shield,
      title: "No Re-entrancy",
      description: "The UTXO model eliminates re-entrancy attacks by design — no mutable state to exploit.",
    },
    {
      icon: Zap,
      title: "Parallel Execution",
      description: "Transactions touching different boxes can execute in parallel, improving scalability.",
    },
    {
      icon: Eye,
      title: "Local Verification",
      description: "Smart contracts only need to verify their own inputs, not global blockchain state.",
    },
    {
      icon: Code,
      title: "Composable Protocols",
      description: "Complex DeFi protocols built from simple, reusable box patterns.",
    },
  ]

  const useCases = [
    {
      title: "DEX Order Books",
      description: "Each order is a separate box, enabling parallel matching and atomic swaps",
      example: "Spectrum Finance",
    },
    {
      title: "Lending Protocols",
      description: "Collateral locked in boxes with clear liquidation conditions",
      example: "DuckPools",
    },
    {
      title: "Stablecoins",
      description: "Reserve boxes track collateral independently for each position",
      example: "SigmaUSD",
    },
    {
      title: "NFT Auctions",
      description: "Bid boxes compete without blocking each other",
      example: "Ergo Auction House",
    },
  ]

  const faqs = [
    {
      question: "How is eUTXO different from Bitcoin's basic UTXO?",
      answer: "While Bitcoin's UTXO model only tracks value transfers, Ergo's eUTXO extends this with arbitrary data storage in boxes and Turing-complete smart contracts via ErgoScript. This enables complex DeFi applications while keeping UTXO benefits.",
    },
    {
      question: "Can eUTXO handle complex DeFi applications?",
      answer: "Yes! Ergo has DEXes (Spectrum), lending protocols, stablecoins (SigmaUSD), and more. The eUTXO model actually makes these more secure by preventing re-entrancy and enabling parallel execution.",
    },
    {
      question: "Why is the eUTXO model more scalable?",
      answer: "Independent boxes enable parallel transaction processing. Unlike account models where state contention forces sequential execution, eUTXO transactions touching different boxes can run simultaneously.",
    },
    {
      question: "How do smart contracts work in eUTXO?",
      answer: "Each box has a guard script that defines its spending conditions. When spending a box, the script is executed with provided inputs. If it returns true, the box can be spent. This is simpler and more predictable than account-based execution.",
    },
  ]

  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <>
      {/* BreadcrumbList Schema */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Technology",
              item: "https://ergoblockchain.org/technology"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "eUTXO Model",
              item: "https://ergoblockchain.org/technology/eutxo-model"
            }
          ]
        }}
      />

      {/* FAQPage Schema */}
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
              "@type": "Question",
            name: faq.question,
              acceptedAnswer: {
                "@type": "Answer", 
              text: faq.answer
              }
          }))
        }}
      />
      
      <BackgroundWrapper>
        <div className="min-h-screen text-white relative overflow-hidden motion-reduce:animate-none">

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: "eUTXO Model", href: "/technology/eutxo-model" }
            ]}
            className="mb-8"
          />
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 motion-reduce:animate-none pb-24">
          {/* Hero Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    eUTXO Model
                  </h1>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    The foundation of Ergo's advanced smart contract capabilities
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Extended UTXO combines Bitcoin's proven security model with powerful smart contract functionality, 
                    enabling parallel execution and eliminating entire classes of vulnerabilities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl">
                      Learn More
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 px-6 py-3 rounded-xl"
                    >
                      View Code
                    </Button>
                  </div>
                </div>
                <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                      Quick Start
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <Link
                        href="/docs/protocol/eutxo"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Box className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Explore eUTXO</h4>
                            <p className="text-neutral-400 text-sm">Interactive visualization of the model</p>
                          </div>
                        </div>
                      </Link>
                      
                      <Link
                        href="/docs"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Developer Guide</h4>
                            <p className="text-neutral-400 text-sm">Build with eUTXO patterns</p>
                          </div>
                        </div>
                      </Link>
                      
                      <a
                        href="https://discord.com/invite/ergo-platform-668903786361651200"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Users className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Join Community</h4>
                            <p className="text-neutral-400 text-sm">Get help from experienced developers</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section 
            id="features" 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                          </div>
                          <p className="text-neutral-200 leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.section>

          {/* Comparison Section */}
          <motion.section 
            id="comparison" 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                eUTXO vs Account Model
              </h2>
              <div className="bg-black/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-black/60 border-b border-white/10">
                        <th className="text-left p-4 font-semibold text-white">Aspect</th>
                        <th className="text-left p-4 font-semibold text-white">eUTXO Model</th>
                        <th className="text-left p-4 font-semibold text-white">Account Model</th>
                        <th className="text-center p-4 font-semibold text-white">Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelComparison.map((row, index) => (
                        <motion.tr
                          key={row.aspect}
                          className="border-b border-white/10 hover:bg-white/5 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td className="p-4 font-medium text-white">{row.aspect}</td>
                          <td className="p-4 text-neutral-300">{row.utxo}</td>
                          <td className="p-4 text-neutral-300">{row.account}</td>
                          <td className="p-4 text-center">
                            <Badge 
                              variant="secondary"
                              className={
                                row.advantage === "eUTXO"
                                  ? "bg-green-500/20 text-green-400 border-green-500/50"
                                  : "bg-neutral-500/20 text-neutral-400 border-neutral-500/50"
                              }
                            >
                              {row.advantage}
                            </Badge>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section 
            id="use-cases"
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                Real-World Use Cases
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-3">{useCase.description}</p>
                        <p className="text-sm text-orange-400">Example: {useCase.example}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Code Example Section */}
          <motion.section 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Simple Yet Powerful</h2>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    The eUTXO model simplifies smart contract development by treating everything as boxes with clear 
                    spending conditions. No complex state management, no re-entrancy concerns — just straightforward logic.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Predictable execution costs",
                      "Natural transaction batching",
                      "Built-in multi-sig support",
                      "Atomic multi-asset swaps"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="font-mono text-sm">
                      <div className="text-neutral-500 mb-2"># Box Structure</div>
                      <pre className="text-neutral-200 overflow-x-auto">
{`Box {
  value: 1000000000,      // nanoERGs
  tokens: [...],          // native tokens
  registers: {            // custom data
    R4: "user_data",
    R5: 42,
    R6: [1, 2, 3]
  },
  script: "..."          // guard script
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            id="faq" 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                      <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                        <CollapsibleTrigger asChild>
                          <button className="w-full">
                            <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                              <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                              <ChevronDown aria-hidden="true" className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                            </CardContent>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="text-neutral-300 leading-relaxed">
                              {faq.answer}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Related Content */}
          <motion.section 
            className="py-16 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Continue Learning
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/learn/ergoscript" className="block h-full group focus:outline-none focus:ring-2 focus:ring-orange-500/60 rounded-3xl">
                  <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                          <Code className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          ErgoScript Tutorial
                        </h3>
                      </div>
                      <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
                        Learn to program smart contracts with ErgoScript on the eUTXO model
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/technology/native-tokens" className="block h-full group focus:outline-none focus:ring-2 focus:ring-orange-500/60 rounded-3xl">
                  <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                          <Coins className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          Native Tokens
                        </h3>
                      </div>
                      <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
                        How eUTXO enables first-class token support without smart contracts
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/technology/privacy-features" className="block h-full group focus:outline-none focus:ring-2 focus:ring-orange-500/60 rounded-3xl">
                  <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                          <Shield className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          Privacy Features
                        </h3>
                      </div>
                      <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
                        Privacy capabilities built on the eUTXO foundation
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* What's Next Section */}
          <motion.section 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                What's <span className="text-orange-400">Next</span>?
              </h2>
              <p className="text-xl text-center text-neutral-300 mb-12">
                Continue your journey with eUTXO development
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/learn/ergoscript"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Learn ErgoScript</h3>
                      <p className="text-orange-400 text-sm">Start Building</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Master smart contract development on the eUTXO model with our comprehensive guides
                  </p>
                </Link>
                
                <a 
                  href="https://github.com/ergoplatform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Explore Code</h3>
                      <p className="text-orange-400 text-sm">GitHub Repository</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Dive into the source code and examples to understand eUTXO implementation
                  </p>
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
        </div>
      </BackgroundWrapper>
    </>
  )
}