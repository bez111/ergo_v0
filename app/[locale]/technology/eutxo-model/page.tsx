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
      
      <div className="min-h-screen bg-black relative overflow-hidden motion-reduce:animate-none">
        {/* Background - точно такой же как на ergoscript */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

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
                  <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
                    eUTXO Model
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    The foundation of Ergo's advanced smart contract capabilities
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Extended UTXO combines Bitcoin's proven security model with powerful smart contract functionality, 
                    enabling parallel execution and eliminating entire classes of vulnerabilities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/docs">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Learn More
                      </Button>
                    </Link>
                    <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                      >
                        View Code
                      </Button>
                    </a>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">Key features</a></li>
                      <li><a href="#comparison" className="hover:text-orange-400">Comparison</a></li>
                      <li><a href="#use-cases" className="hover:text-orange-400">Use cases</a></li>
                      <li><a href="#faq" className="hover:text-orange-400">FAQ</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl p-8">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          Quick Start
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Explore eUTXO",
                              description: "Interactive visualization of the model",
                              icon: <Box className="w-6 h-6" />,
                              link: "/docs/protocol/eutxo",
                              external: false
                            },
                            {
                              name: "Developer Guide",
                              description: "Build with eUTXO patterns",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "/docs",
                              external: false
                            },
                            {
                              name: "Join Community",
                              description: "Get help from experienced developers",
                              icon: <Users className="w-6 h-6" />,
                              link: "https://discord.gg/ergo",
                              external: true
                            },
                          ].map((item) => (
                            <div key={item.name}>
                              {item.external ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-orange-400">{item.icon}</div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{item.name}</h4>
                                      <p className="text-sm text-neutral-400">{item.description}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={item.link}
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-orange-400">{item.icon}</div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{item.name}</h4>
                                      <p className="text-sm text-neutral-400">{item.description}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
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
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors h-full">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
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
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-700">
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
                        className="border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className="p-4 font-medium text-neutral-200">{row.aspect}</td>
                        <td className="p-4 text-neutral-400">{row.utxo}</td>
                        <td className="p-4 text-neutral-400">{row.account}</td>
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
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
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
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
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
                  <Collapsible key={index} open={openFAQ === index}>
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                      <CollapsibleTrigger
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full"
                      >
                        <CardHeader className="cursor-pointer">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-left text-lg text-white">{faq.question}</CardTitle>
                            <ChevronDown
                              className={`w-5 h-5 text-neutral-400 transition-transform ${
                                openFAQ === index ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
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
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                      ErgoScript Tutorial
                    </h3>
                    <p className="text-neutral-300 mb-4">
                      Learn to program smart contracts with ErgoScript on the eUTXO model
                    </p>
                    <Link href="/learn/ergoscript" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                      <Coins className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                      Native Tokens
                    </h3>
                    <p className="text-neutral-300 mb-4">
                      How eUTXO enables first-class token support without smart contracts
                    </p>
                    <Link href="/technology/native-tokens" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                      Privacy Features
                    </h3>
                    <p className="text-neutral-300 mb-4">
                      Privacy capabilities built on the eUTXO foundation
                    </p>
                    <Link href="/technology/privacy-features" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                      Explore Privacy
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Ready to Build on eUTXO?
                  </h2>
                  <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                    Start learning ErgoScript and harness the power of the extended UTXO model for your next project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/learn/ergoscript">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Learn ErgoScript
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                      >
                        Explore GitHub
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
}