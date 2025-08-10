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
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"

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
      utxo: "The reentrancy vulnerability class common to account-based systems is absent in eUTXO; script execution cost is bounded (fees depend on mempool conditions)",
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
      name: "Registers (R0–R9)",
      description: "User-defined: R4–R9 (R0–R3 are protocol-reserved)",
      icon: <Box className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      name: "Metadata",
      description: "Creation height, boxId (derived from creating tx)",
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
      <div className="sr-only">
        <Breadcrumbs
          items={[
            { label: "Technology", href: "/technology" },
            { label: "eUTXO Model", href: "/technology/eutxo-model" }
          ]}
          className="mb-8"
        />
      </div>

      {/* Background Effects (UI Kit style) */}
      <div className="absolute inset-0 pointer-events-none">
        <HexagonalGrid className="opacity-[0.02]" />
      </div>

      <main>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 motion-reduce:animate-none">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">eUTXO Model</h1>
                <p className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-2xl">
                  How Ergo Differs from Account-Based Blockchains
                </p>
                <p className="text-lg text-neutral-400 mb-6 max-w-2xl leading-relaxed">
                  Ergo's eUTXO model fuses the security, parallelism, and simplicity of UTXO with the expressive power
                  needed for complex smart contracts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                    <Link href="/Docs">Learn More</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    <Link href="/Docs/developers/tutorials">View Examples</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-brand-primary-500/30 transition-colors">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold mb-6 text-center text-white">
                        eUTXO Box Structure
                      </h3>
                      <div className="space-y-4">
                        {boxComponents.map((component, index) => (
                          <div
                            key={component.name}
                            className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700"
                          >
                            <div className="flex items-center space-x-3">
                              <span aria-hidden="true" className="text-orange-400">{component.icon}</span>
                              <div>
                                <h4 className="font-semibold text-white">{component.name}</h4>
                                <p className="text-sm text-neutral-400">{component.description}</p>
                              </div>
                            </div>
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

        {/* Introduction */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-brand-primary-500/30 transition-colors">
              <CardContent className="p-8">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                  Introduction
                </h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Every blockchain's heart is its ledger model: it defines how assets and data move. The two dominant
                  models are UTXO (pioneered by Bitcoin) and account-based (popularized by Ethereum). Each has unique
                  trade-offs.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed">
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
            <h2 id="ledger-models" className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
              Blockchain Ledger Models: UTXO vs. Account
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* UTXO Model */}
              <div className="motion-reduce:transform-none motion-reduce:transition-none">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full hover:border-brand-primary-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">UTXO Model (Bitcoin-style)</h3>
                    <p className="text-neutral-300 mb-4">No global balances — only a collection of unspent outputs.</p>
                    <p className="text-neutral-400 mb-6 italic">
                      Analogy: Like having cash bills/coins. Each transaction spends some bills, creates new ones.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                          Strengths:
                        </h4>
                        <p className="text-neutral-300 text-sm">
                          Simplicity, privacy, parallel processing, easier audit trails.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Weakness:</h4>
                        <p className="text-neutral-300 text-sm">Not naturally suited for stateful dApps.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Account Model */}
              <div className="motion-reduce:transform-none motion-reduce:transition-none">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full hover:border-brand-primary-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Account Model (Ethereum-style)</h3>
                    <p className="text-neutral-300 mb-4">
                      Global state: Each account has a balance and (for contracts) its own data storage.
                    </p>
                    <p className="text-neutral-400 mb-6 italic">
                      Analogy: Like a bank account — all assets tracked in one place.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                          Strengths:
                        </h4>
                        <p className="text-neutral-300 text-sm">
                          Intuitive, flexible for stateful apps, natural for Turing-complete contracts.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Weaknesses:</h4>
                        <p className="text-neutral-300 text-sm">
                          Potential for re-entrancy bugs, unpredictable gas, global state bloat.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Transaction Flow */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="transaction-flow" className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
              How eUTXO Transactions Work
            </h2>

            <div className="space-y-6">
              {transactionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="flex items-center space-x-6 motion-reduce:transform-none motion-reduce:transition-none hover:translate-x-2 transition-transform"
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <Card className="flex-1 bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-brand-primary-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <span aria-hidden="true" className="text-orange-400">{step.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-orange-400">{step.title}</h3>
                          <p className="text-neutral-300">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < transactionSteps.length - 1 && <ArrowRight className="w-6 h-6 text-neutral-400" />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Key Differences Table */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="key-differences" className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
              eUTXO vs. Account Model — Key Differences
            </h2>

            <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <caption className="sr-only">Key differences between eUTXO and account models</caption>
                    <thead className="bg-neutral-900/60">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-cyan-400 font-semibold">Aspect</th>
                        <th scope="col" className="px-6 py-4 text-left text-orange-400 font-semibold">eUTXO</th>
                        <th scope="col" className="px-6 py-4 text-left text-purple-400 font-semibold">Account</th>
                        <th scope="col" className="px-6 py-4 text-left text-green-400 font-semibold">Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelComparison.map((row) => (
                        <tr
                          key={row.aspect}
                          className="odd:bg-neutral-800/20 hover:bg-orange-500/10 transition-colors"
                        >
                          <th scope="row" className="px-6 py-4 font-medium text-white text-left">{row.aspect}</th>
                          <td className="px-6 py-4 text-neutral-300 text-sm">{row.utxo}</td>
                          <td className="px-6 py-4 text-neutral-300 text-sm">{row.account}</td>
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
                        </tr>
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
            <h2 id="use-cases" className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
              eUTXO in Action — When It Shines
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  variants={itemVariants}
                  className="group motion-reduce:transform-none motion-reduce:transition-none"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full hover:border-brand-primary-500/30 transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <span aria-hidden="true" className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{useCase.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                          <p className="text-neutral-400 mb-4">{useCase.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-cyan-400 mb-2">Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.examples.map((example) => (
                            <span key={example} className="inline-block">
                  <Badge
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:border-brand-primary-500/50"
                  >
                    {example}
                  </Badge>
                </span>
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
            <h2 id="faq" className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const id = faq.question.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
                return (
                <Card
                  id={id}
                  key={id}
                  className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl"
                >
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                  >
                    <CollapsibleTrigger asChild>
                      <button className="w-full">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                          <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 transition-transform ${
                              openFAQ === index ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </CardContent>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              )})}
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
              <CardContent className="p-12">
                <h2 id="conclusion" className="text-4xl font-bold mb-6 text-white">
                  Conclusion: The Future is eUTXO
                </h2>
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                  The eUTXO model is a quantum leap: it keeps UTXO's clarity, security, and scalability while unlocking
                  true programmability. For developers who want robust, auditable, and future-proof dApps — Ergo's
                  approach is both powerful and elegant.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl"
                  >
                    <Link href="/Docs" className="flex items-center">
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
      </main>
      
      <SchemaOrg
        type="FAQPage"
        data={{
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            url: `https://ergoblockchain.org/technology/eutxo-model#${faq.question.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'')}`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Technology', item: 'https://ergoblockchain.org/technology' },
            { '@type': 'ListItem', position: 2, name: 'eUTXO Model', item: 'https://ergoblockchain.org/technology/eutxo-model' },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          '@type': 'TechArticle',
          headline: 'eUTXO Model',
          description: 'Ergo eUTXO vs account-based',
          image: 'https://ergoblockchain.org/icon-512x512.png',
          datePublished: '2024-01-01',
          dateModified: '2024-01-01',
          author: { '@type': 'Organization', name: 'Ergo Foundation', url: 'https://ergoblockchain.org' },
          publisher: { '@type': 'Organization', name: 'Ergo Platform', url: 'https://ergoblockchain.org', logo: { '@type': 'ImageObject', url: 'https://ergoblockchain.org/icon-512x512.png' } },
          mainEntityOfPage: 'https://ergoblockchain.org/technology/eutxo-model',
        }}
      />
    </div>
  )
}
