"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import {
  Code,
  Shield,
  Zap,
  ExternalLink, 
  ArrowRight, 
  Lock, 
  CheckCircle, 
  Layers, 
  Terminal, 
  BookOpen, 
  ChevronDown, 
  Cpu,
  Database,
  Settings,
  Eye,
  Box,
  Rocket,
  Timer,
  Users,
  FileText,
  Play
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import React from "react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function ErgoScriptPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("basics")

  const features = [
    {
      title: "Sigma Protocols",
      description: "Built-in zero-knowledge proofs for privacy and complex multi-party contracts",
      icon: Shield,
    },
    {
      title: "UTXO Model",
      description: "Extended UTXO model with data and logic attached to boxes for enhanced security",
      icon: Box,
    },
    {
      title: "Functional Programming",
      description: "Immutable data structures and functional paradigms for safer smart contracts",
      icon: Code,
    },
    {
      title: "Oracle Integration",
      description: "Native oracle support for real-world data integration without external dependencies",
      icon: Database,
    },
    {
      title: "Multi-Stage Contracts",
      description: "Complex contracts that evolve through multiple stages with different conditions",
      icon: Layers,
    },
    {
      title: "Predictable Fees",
      description: "Know exact execution costs before deployment with deterministic fee calculation",
      icon: Zap,
    },
  ]

  const tutorials = [
    {
      title: "Hello World Contract",
      description: "Your first ErgoScript contract - basic syntax and structure",
      difficulty: "Beginner",
      time: "15 min",
      link: "/docs/ergoscript/hello-world",
    },
    {
      title: "Token Minting",
      description: "Create and manage custom tokens on Ergo blockchain",
      difficulty: "Intermediate",
      time: "30 min",
      link: "/docs/ergoscript/token-minting",
    },
    {
      title: "Multi-Signature Wallet",
      description: "Build a secure multi-sig wallet with ErgoScript",
      difficulty: "Advanced",
      time: "45 min",
      link: "/docs/ergoscript/multisig",
    },
    {
      title: "Oracle Data Usage",
      description: "Integrate external data sources into your contracts",
      difficulty: "Intermediate",
      time: "25 min",
      link: "/docs/ergoscript/oracles",
    },
  ]

  const faqs = [
    {
      question: "What makes ErgoScript different from Solidity?",
      answer: "ErgoScript is based on the extended UTXO model, making it more secure and predictable than account-based models. It uses functional programming principles, has built-in zero-knowledge proofs, and offers deterministic fee calculation."
    },
    {
      question: "Do I need to know Scala to write ErgoScript?",
      answer: "While ErgoScript is inspired by Scala, you don't need prior Scala knowledge. The syntax is designed to be accessible to developers familiar with any modern programming language. However, understanding functional programming concepts helps."
    },
    {
      question: "How do I test ErgoScript contracts?",
      answer: "You can test contracts using the Ergo Playground, local testnet, or the official Ergo testing framework. The Ergo SDK provides comprehensive testing tools for contract development and debugging."
    },
    {
      question: "What are the gas fees like for ErgoScript?",
      answer: "ErgoScript contracts have predictable, low fees typically under $0.01. The extended UTXO model allows for efficient execution and the ability to calculate exact costs before deployment."
    },
    {
      question: "Can I build DeFi protocols with ErgoScript?",
      answer: "Yes! ErgoScript is perfect for DeFi. Examples include SigmaUSD (algorithmic stablecoin), DEXs like ErgoDEX, and various DeFi primitives. The language's security features make it ideal for financial applications."
    },
  ]

  return (
    <>
      {/* SEO Schemas */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Learn",
              item: "https://ergoblockchain.org/learn"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "ErgoScript",
              item: "https://ergoblockchain.org/learn/ergoscript"
            }
          ]
        }}
      />

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
        <div className="container mx-auto px-4 py-16">

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Learn", href: "/learn" },
              { name: "ErgoScript", href: "/learn/ergoscript" }
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
            className="pt-28 pb-10 px-4 motion-reduce:transform-none"
          >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">ErgoScript</h1>
                  <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">Smart Contract Language for the Future</p>
                  <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    ErgoScript is a powerful, secure smart contract language built on Sigma protocols and the extended UTXO model. 
                    Create complex financial contracts with built-in privacy, predictable fees, and mathematical guarantees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50 transition-all duration-300">
                      <a href="https://storage.googleapis.com/ergo-cms-media/docs/AdvancedErgoScriptTutorial.pdf" target="_blank" rel="noopener noreferrer">Start Learning</a>
                  </Button>
                    <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl transition-all duration-300">
                      <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
                        href="/docs/ergoscript/playground"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Play className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Try Playground</h4>
                          </div>
                        </div>
                      </Link>
                      
                      <Link
                        href="/docs/ergoscript/tutorial"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Read Tutorial</h4>
                          </div>
                        </div>
                      </Link>
                      
                      <Link
                        href="/docs/ergoscript/examples"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Code className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">View Examples</h4>
                          </div>
                        </div>
                      </Link>
                      </div>
                </div>
                </motion.div>
            </div>
          </div>
        </motion.section>

          {/* Features Section */}
          <motion.section 
            id="features"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Why ErgoScript?
            </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Built for security, privacy, and developer productivity with cutting-edge cryptographic features
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 border border-orange-500/30">
                            <feature.icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                  </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

          {/* Technical Implementation */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Learn by Example
            </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Explore ErgoScript through practical examples and interactive tutorials
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-white/20 rounded-2xl p-1">
                  <TabsTrigger value="basics" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    Basics
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    Advanced
                  </TabsTrigger>
                  <TabsTrigger value="defi" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    DeFi
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="basics" className="mt-8">
                  <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Simple Payment Contract</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // Simple payment to a public key
  val recipientPK = PK("9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8v")
  
  // Check that the output goes to the recipient
  val validRecipient = OUTPUTS(0).propositionBytes == recipientPK.propBytes
  
  // Check minimum amount
  val validAmount = OUTPUTS(0).value >= 1000000L // 0.001 ERG
  
  sigmaProp(validRecipient && validAmount)
}`}</code>
                        </pre>
                        </div>
                      <p className="text-neutral-400">
                        This basic contract ensures that funds can only be spent to a specific recipient with a minimum amount.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="advanced" className="mt-8">
                  <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Multi-Signature with Timelock</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // Multi-sig with timelock fallback
  val alice = PK("9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8v")
  val bob   = PK("9f5QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8w")
  val carol = PK("9f6QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8x")
  
  val lockTime = 1000000L // Block height
  
  // Either 2-of-3 multisig OR timelock + alice
  val multiSig = atLeast(2, Coll(alice, bob, carol))
  val timelock = alice && (HEIGHT > lockTime)
  
  sigmaProp(multiSig || timelock)
}`}</code>
                        </pre>
                      </div>
                      <p className="text-neutral-400">
                        Advanced contract combining multi-signature security with timelock recovery mechanism.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="defi" className="mt-8">
                  <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">DEX Order Contract</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // DEX order: sell tokenA for tokenB at specific rate
  val tokenAId = fromBase64("tokenA_id_here")
  val tokenBId = fromBase64("tokenB_id_here")
  
  val rate = 1000L // 1 tokenA = 1000 nanoERG worth of tokenB
  val sellerPK = PK("seller_public_key")
  
  val tokenAAmount = SELF.tokens(0)._2
  val expectedTokenB = tokenAAmount * rate
  
  val validSwap = {
    val output = OUTPUTS(0)
    output.propositionBytes == sellerPK.propBytes &&
    output.tokens.exists { (id, amount) =>
      id == tokenBId && amount >= expectedTokenB
    }
  }
  
  sigmaProp(validSwap)
}`}</code>
                        </pre>
                      </div>
                      <p className="text-neutral-400">
                        DeFi contract for decentralized token exchange with price validation and atomic swaps.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
          </div>
        </motion.section>

          {/* Tutorials Section */}
          <motion.section 
            id="tutorials"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Interactive Tutorials
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Step-by-step guides to master ErgoScript development
                </p>
                </div>

              <div className="grid md:grid-cols-2 gap-8">
                {tutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Link 
                      href={tutorial.link}
                      className="block h-full group focus:outline-none focus:ring-2 focus:ring-orange-500/60 rounded-3xl"
                    >
                      <Card className="relative bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/10 cursor-pointer">
                        <Badge className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 border-orange-500/30 z-10">
                          Soon
                        </Badge>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-white group-hover:text-orange-400 transition-colors">{tutorial.title}</CardTitle>
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                tutorial.difficulty === 'Beginner'
                                  ? 'bg-green-500/20 text-green-400' 
                                  : tutorial.difficulty === 'Intermediate'
                                  ? 'bg-yellow-500/20 text-yellow-400'
                                  : 'bg-red-500/20 text-red-400'
                              }`}>
                                {tutorial.difficulty}
                              </span>
                              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-neutral-400">{tutorial.description}</p>
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4 text-orange-400" />
                            <span className="text-sm text-neutral-300">{tutorial.time}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
                          </div>
                        </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            id="faq"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                    <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                      <CollapsibleTrigger asChild>
                        <button className="w-full">
                          <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                            <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                        <ChevronDown
                              aria-hidden="true" 
                          className={`w-5 h-5 text-neutral-400 transition-transform ${
                                openFAQ === index ? "rotate-180" : ""
                          }`}
                        />
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
              ))}
            </div>
          </div>
        </motion.section>

          {/* What's Next Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                What's <span className="text-orange-400">Next?</span>
            </h2>
              <p className="text-xl text-center text-neutral-300 mb-12">
                Start building with ErgoScript today
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/docs/ergoscript/playground"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Play className="w-6 h-6 text-orange-400" />
            </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Try Playground</h3>
                      <p className="text-orange-400 text-sm">Interactive Learning</p>
          </div>
                  </div>
                  <p className="text-neutral-300">
                    Experiment with ErgoScript in an interactive online environment
                  </p>
                  </Link>
                
                <Link 
                  href="/docs/developers"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Full Documentation</h3>
                      <p className="text-orange-400 text-sm">Complete Guide</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Access comprehensive documentation, API references, and advanced tutorials
                  </p>
                  </Link>
                  </div>
            </div>
          </section>

          {/* Email Capture Form */}
          <FinalCTASimple 
            title="Advanced ErgoScript Tutorials"
            description="Get the latest ErgoScript guides, advanced tutorials, and developer resources delivered to your inbox"
          />

      </motion.div>
    </div>
      </BackgroundWrapper>
    </>
  )
}