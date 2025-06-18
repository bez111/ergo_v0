"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ArrowRight, Box, Database, Shield, Zap, Eye, Code, ExternalLink, CheckCircle } from "lucide-react"
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
      utxo: "UTXO mixing, Σ-protocols for advanced privacy",
      account: "Global state makes privacy harder by default",
      advantage: "eUTXO",
    },
    {
      aspect: "Token Handling",
      utxo: "Tokens are first-class citizens in boxes",
      account: "Requires separate contract logic (ERC-20/721)",
      advantage: "eUTXO",
    },
    {
      aspect: "Learning Curve",
      utxo: "Must 'think in boxes', different paradigm",
      account: "More intuitive for traditional developers",
      advantage: "Account",
    },
  ]

  const boxComponents = [
    {
      name: "Value",
      description: "ERG + custom tokens",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      name: "Guarding Script",
      description: "ErgoScript code controlling spending conditions",
      icon: <Shield className="w-6 h-6" />,
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      name: "Registers (R0-R9)",
      description: "Typed fields for custom data storage",
      icon: <Box className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      name: "Metadata",
      description: "Creation height, transaction ID, box ID",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const transactionSteps = [
    {
      step: 1,
      title: "Inputs",
      description: "Consume existing boxes ('spend' them)",
      icon: <Database className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Outputs",
      description: "Create new boxes with new logic or data",
      icon: <Box className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Script Checks",
      description: "Each input's script must return `true`",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "State Transition",
      description: "State changes by consuming and recreating boxes",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  const useCases = [
    {
      title: "DeFi with Strong Guarantees",
      description: "DEXs, algorithmic stablecoins, trust-minimized lending",
      icon: <Zap className="w-8 h-8" />,
      examples: ["Spectrum Finance", "SigmaUSD", "DuckPools"],
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: "NFTs & Asset Registries",
      description: "Each NFT is a unique box, no global ledger needed",
      icon: <Box className="w-8 h-8" />,
      examples: ["Ergo Auction House", "SkyHarbor", "Unique Assets"],
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      title: "Privacy Protocols",
      description: "Zero-knowledge logic baked into core language",
      icon: <Eye className="w-8 h-8" />,
      examples: ["ErgoMixer", "Σ-protocols", "Confidential Assets"],
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      title: "Verifiable Applications",
      description: "eUTXO's explicitness ideal for audit-heavy environments",
      icon: <Shield className="w-8 h-8" />,
      examples: ["Oracle Pools", "Governance", "Compliance Tools"],
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const faqs = [
    {
      question: "Is eUTXO more complex for new developers?",
      answer:
        "The concepts are different, but eUTXO makes many safety problems easier to solve and enables powerful new designs. Once developers understand the 'box thinking' paradigm, they often find it more predictable and secure than account-based models.",
    },
    {
      question: "Can you port Ethereum dApps to Ergo?",
      answer:
        "Not directly — but most DeFi primitives can be recreated with eUTXO patterns and are often safer by default. The architecture requires rethinking the application logic, but the result is typically more robust and auditable.",
    },
    {
      question: "How does eUTXO handle shared state?",
      answer:
        "Shared state is managed through 'shared boxes' that multiple transactions can reference. Advanced dApps use techniques like batching, state splitting, or stateless proxies to minimize contention and maintain scalability.",
    },
    {
      question: "What are the main advantages over Bitcoin's UTXO?",
      answer:
        "eUTXO extends Bitcoin's UTXO with programmable logic, custom data storage in registers, and support for complex smart contracts while maintaining the security and parallelism benefits of the UTXO model.",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs
          items={[
            { label: "Technology", href: "/technology" },
            { label: "eUTXO Model", href: "/technology/eutxo-model" }
          ]}
          className="mb-8"
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-cyan-500/10" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                  BLOCKCHAIN TECHNOLOGY
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                  eUTXO Model
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  How Ergo Differs from Account-Based Blockchains
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Ergo's eUTXO model fuses the security, parallelism, and simplicity of UTXO with the expressive power
                  needed for complex smart contracts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    View Examples
                  </Button>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl p-8">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        eUTXO Box Structure
                      </h3>
                      <div className="space-y-4">
                        {boxComponents.map((component, index) => (
                          <motion.div
                            key={component.name}
                            className={`p-4 rounded-lg bg-gradient-to-r ${component.color} border border-gray-700/50`}
                            whileHover={{ scale: 1.02, x: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-orange-400">{component.icon}</div>
                              <div>
                                <h4 className="font-semibold text-white">{component.name}</h4>
                                <p className="text-sm text-gray-400">{component.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Introduction */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Introduction
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Every blockchain's heart is its ledger model: it defines how assets and data move. The two dominant
                  models are UTXO (pioneered by Bitcoin) and account-based (popularized by Ethereum). Each has unique
                  trade-offs.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ergo's eUTXO (extended UTXO) model fuses the security, parallelism, and simplicity of UTXO with the
                  expressive power needed for complex smart contracts. Here's how it works, why it matters, and how it
                  stands apart.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Model Comparison */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Blockchain Ledger Models: UTXO vs. Account
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* UTXO Model */}
              <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-orange-500/30 backdrop-blur-xl h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">UTXO Model (Bitcoin-style)</h3>
                    <p className="text-gray-300 mb-4">No global balances — only a collection of unspent outputs.</p>
                    <p className="text-gray-400 mb-6 italic">
                      Analogy: Like having cash bills/coins. Each transaction spends some bills, creates new ones.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Strengths:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Simplicity, privacy, parallel processing, easier audit trails.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Weakness:</h4>
                        <p className="text-gray-300 text-sm">Not naturally suited for stateful dApps.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Account Model */}
              <motion.div whileHover={{ scale: 1.02, rotateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 backdrop-blur-xl h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Account Model (Ethereum-style)</h3>
                    <p className="text-gray-300 mb-4">
                      Global state: Each account has a balance and (for contracts) its own data storage.
                    </p>
                    <p className="text-gray-400 mb-6 italic">
                      Analogy: Like a bank account — all assets tracked in one place.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Strengths:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Intuitive, flexible for stateful apps, natural for Turing-complete contracts.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Weaknesses:</h4>
                        <p className="text-gray-300 text-sm">
                          Potential for re-entrancy bugs, unpredictable gas, global state bloat.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Transaction Flow */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              How eUTXO Transactions Work
            </h2>

            <div className="space-y-6">
              {transactionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="flex items-center space-x-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {step.step}
                  </div>
                  <Card className="flex-1 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-orange-400">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-orange-400">{step.title}</h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < transactionSteps.length - 1 && <ArrowRight className="w-6 h-6 text-gray-600" />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Key Differences Table */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              eUTXO vs. Account Model — Key Differences
            </h2>

            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
                      <tr>
                        <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Aspect</th>
                        <th className="px-6 py-4 text-left text-orange-400 font-semibold">eUTXO</th>
                        <th className="px-6 py-4 text-left text-purple-400 font-semibold">Account</th>
                        <th className="px-6 py-4 text-left text-green-400 font-semibold">Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelComparison.map((row, index) => (
                        <motion.tr
                          key={row.aspect}
                          className={index % 2 === 0 ? "bg-gray-800/20" : ""}
                          whileHover={{ backgroundColor: "rgba(255, 136, 0, 0.1)" }}
                        >
                          <td className="px-6 py-4 font-medium text-white">{row.aspect}</td>
                          <td className="px-6 py-4 text-gray-300 text-sm">{row.utxo}</td>
                          <td className="px-6 py-4 text-gray-300 text-sm">{row.account}</td>
                          <td className="px-6 py-4">
                            <Badge
                              className={
                                row.advantage === "eUTXO"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : "bg-blue-500/20 text-blue-400 border-blue-500/30"
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
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              eUTXO in Action — When It Shines
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${useCase.color} border-gray-700/50 backdrop-blur-xl h-full hover:border-orange-500/50 transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{useCase.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                          <p className="text-gray-400 mb-4">{useCase.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-cyan-400 mb-2">Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.examples.map((example) => (
                            <Badge
                              key={example}
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:border-orange-500/50"
                            >
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl"
                >
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors">
                        <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                        />
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border-orange-500/30 backdrop-blur-xl">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Conclusion: The Future is eUTXO
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The eUTXO model is a quantum leap: it keeps UTXO's clarity, security, and scalability while unlocking
                  true programmability. For developers who want robust, auditable, and future-proof dApps — Ergo's
                  approach is both powerful and elegant.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
                  >
                    <Link href="/build" className="flex items-center">
                      Start Building
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    <Link href="/ecosystem" className="flex items-center">
                      Explore Ecosystem
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </motion.div>
      
      <SchemaOrg
        type="FAQPage"
        data={{
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />
    </div>
  )
}
