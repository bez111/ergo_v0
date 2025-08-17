"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { TrendingUp, Shield, Zap, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, DollarSign, BarChart3, Activity, Users, Code, Terminal, BookOpen, ChevronDown, Coins } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import React from "react"

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

const features = [
  {
    title: "Over-Collateralized Stability",
    description: "Maintain stable value through robust collateralization mechanisms and algorithmic adjustments",
    icon: Shield,
  },
  {
    title: "Decentralized Governance",
    description: "Community-driven protocol parameters without central authority or single points of failure",
    icon: Users,
  },
  {
    title: "Transparent Reserves",
    description: "On-chain verifiable reserves and real-time collateral ratios for complete transparency",
    icon: BarChart3,
  },
  {
    title: "Efficient Liquidations",
    description: "Automated liquidation mechanisms protect protocol solvency during market volatility",
    icon: Zap,
  },
  {
    title: "Multi-Asset Collateral",
    description: "Support for various collateral types including ERG, wrapped assets, and LP tokens",
    icon: Coins,
  },
  {
    title: "Composable DeFi",
    description: "Seamlessly integrate with other DeFi protocols for lending, yield farming, and more",
    icon: Layers,
  },
]

const existingProjects = [
  {
    name: "SigmaUSD",
    description: "The first algorithmic stablecoin on Ergo using the AgeUSD protocol",
    status: "Live",
    tvl: "$2.5M+",
    link: "https://sigmausd.io",
    features: ["ERG-backed", "Dual token model", "Reserve ratio protection"],
  },
  {
    name: "Gluon Gold",
    description: "Gold-backed stablecoin leveraging Ergo's oracle pools",
    status: "In Development",
    tvl: "TBD",
    link: "https://gluon.gold",
    features: ["Gold-pegged", "Oracle-powered", "Cross-chain compatible"],
  },
]

export default function AlgorithmicStablecoinsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "How do algorithmic stablecoins maintain their peg?",
      answer: "Algorithmic stablecoins on Ergo maintain their peg through a combination of over-collateralization, algorithmic supply adjustments, and market incentives. The AgeUSD protocol uses a dual-token system where reserve providers absorb volatility to maintain stability."
    },
    {
      question: "What makes Ergo ideal for stablecoins?",
      answer: "Ergo's eUTXO model provides superior security for collateral management, native oracle pools ensure reliable price feeds, and ErgoScript enables complex stability mechanisms while maintaining transparency and auditability."
    },
    {
      question: "How does the AgeUSD protocol work?",
      answer: "AgeUSD uses a reserve pool of ERG collateral and two tokens: SigmaUSD (stable) and SigmaRSV (reserve). Reserve providers mint SigmaRSV to add collateral and earn from fees and price appreciation, while users can mint SigmaUSD when the reserve ratio is healthy."
    },
    {
      question: "What are the risks of algorithmic stablecoins?",
      answer: "Main risks include under-collateralization during extreme market conditions, oracle manipulation, smart contract bugs, and liquidity crises. Ergo mitigates these through robust reserve requirements, decentralized oracles, and formal verification capabilities."
    },
    {
      question: "Can I build my own stablecoin on Ergo?",
      answer: "Yes! Ergo provides all necessary infrastructure: oracle pools for price feeds, ErgoScript for stability mechanisms, and proven protocols like AgeUSD as reference implementations. The community offers extensive documentation and support."
    },
  ]

  const lastUpdated = new Date().toISOString().slice(0, 10)

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
              name: "Use Cases",
              item: "https://ergoblockchain.org/use"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "Algorithmic Stablecoins",
              item: "https://ergoblockchain.org/use/use-cases/algorithmic-stablecoins"
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
      
      <div className="min-h-screen bg-black relative overflow-hidden motion-reduce:animate-none">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Use Cases", href: "/use" },
              { label: "Algorithmic Stablecoins", href: "/use/use-cases/algorithmic-stablecoins" }
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
                    Algorithmic Stablecoins
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Stable value storage without centralized control
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Over-collateralized stablecoins with innovative AgeUSD protocol. Decentralized, transparent, and resilient.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://sigmausd.io" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Try SigmaUSD
                      </Button>
                    </a>
                    <Link href="https://github.com/Emurgo/age-usd" target="_blank">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                      >
                        View Protocol
                      </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-brand-primary-400">Key features</a></li>
                      <li><a href="#projects" className="hover:text-brand-primary-400">Live Projects</a></li>
                      <li><a href="#faq" className="hover:text-brand-primary-400">FAQ</a></li>
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
                              name: "Use SigmaUSD",
                              description: "Start using Ergo's native stablecoin",
                              icon: <DollarSign className="w-6 h-6" />,
                              link: "https://sigmausd.io",
                              external: true
                            },
                            {
                              name: "Read Whitepaper",
                              description: "Understand the AgeUSD protocol",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "https://github.com/Emurgo/age-usd/blob/main/README.md",
                              external: true
                            },
                            {
                              name: "Developer Docs",
                              description: "Build your own stablecoin",
                              icon: <Terminal className="w-6 h-6" />,
                              link: "/Docs/developers",
                              external: false
                            },
                          ].map((item) => (
                            <div key={item.name}>
                              {item.external ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-brand-primary-500/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-brand-primary-400">{item.icon}</div>
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
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-brand-primary-500/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-brand-primary-400">{item.icon}</div>
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
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Key Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Why Ergo is the perfect platform for algorithmic stablecoins
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
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                      <CardContent className="p-6">
                        <feature.icon className="w-12 h-12 text-brand-primary-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
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
                  Technical Implementation
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  How algorithmic stablecoins work on Ergo
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="ageusd" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    AgeUSD Protocol
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Code Example
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">How It Works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Algorithmic stablecoins on Ergo maintain their peg through smart contract mechanisms
                          that automatically adjust supply and demand based on market conditions.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Oracle pools provide reliable price feeds</li>
                          <li>Smart contracts manage collateral and minting</li>
                          <li>Reserve providers absorb volatility</li>
                          <li>Liquidation mechanisms protect solvency</li>
                          <li>Governance tokens enable parameter updates</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ageusd" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">AgeUSD Protocol Design</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">SigmaUSD (Stable)</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Pegged to $1 USD</li>
                              <li>• Backed by ERG reserves</li>
                              <li>• Mintable when reserve ratio {'>'} 400%</li>
                              <li>• Redeemable for $1 worth of ERG</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">SigmaRSV (Reserve)</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Provides reserve collateral</li>
                              <li>• Absorbs ERG price volatility</li>
                              <li>• Earns fees from minting/redeeming</li>
                              <li>• Profits from ERG appreciation</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Reserve Mechanics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-brand-primary-300 overflow-x-auto">
                            <code>{`Reserve Ratio = (ERG in Reserve × ERG Price) / SigmaUSD Supply

Minimum Reserve Ratio: 400%
Optimal Reserve Ratio: 500-800%

When ERG price rises:
  → Reserve ratio increases
  → More SigmaUSD can be minted
  → SigmaRSV holders profit

When ERG price falls:
  → Reserve ratio decreases
  → Minting restricted if < 400%
  → SigmaRSV holders absorb loss`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">ErgoScript Example</CardTitle>
                      <p className="text-neutral-400">Simplified stablecoin minting contract</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-brand-primary-300 overflow-x-auto">
                          <code>{`{
  // Check reserve ratio is healthy
  val reserveRatio = SELF.R4[Long].get
  val minRatio = 400L // 400%
  
  // Get oracle price
  val oracleBox = CONTEXT.dataInputs(0)
  val ergPrice = oracleBox.R4[Long].get
  
  // Calculate stablecoin amount
  val stableAmount = OUTPUTS(0).R5[Long].get
  val requiredErg = (stableAmount * 1000000) / ergPrice
  
  // Verify conditions
  sigmaProp(
    reserveRatio >= minRatio &&
    OUTPUTS(0).value >= requiredErg &&
    OUTPUTS(0).propositionBytes == userPubKey &&
    OUTPUTS(1).R4[Long].get == reserveRatio - requiredErg
  )
}`}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </motion.section>

          {/* Existing Projects */}
          <motion.section 
            id="projects"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Live Projects
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Stablecoin projects currently running on Ergo
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {existingProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full hover:border-brand-primary-500/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">{project.name}</CardTitle>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === 'Live' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-neutral-400">{project.description}</p>
                        {project.tvl !== "TBD" && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-brand-primary-400" />
                            <span className="text-sm text-neutral-300">TVL: {project.tvl}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span key={feature} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
                        >
                          Visit Project
                          <ExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </CardContent>
                    </Card>
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
            className="py-16 px-4 bg-neutral-900/20 motion-reduce:transform-none"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-neutral-400">
                  Common questions about algorithmic stablecoins on Ergo
                </p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible
                    key={index}
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-neutral-900/50 border border-neutral-700 p-6 text-left hover:bg-neutral-900/70 transition-colors">
                      <span className="text-lg font-medium text-white">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-neutral-400 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6 pt-2">
                      <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Build Stable Value?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Start using or building algorithmic stablecoins on Ergo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://sigmausd.io" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold">
                    Use SigmaUSD
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Link href="/Docs/developers">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400">
                    Developer Docs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
} 