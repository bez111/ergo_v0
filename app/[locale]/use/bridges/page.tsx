"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Link2, Shield, Zap, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, Globe, Network, Code, Terminal, BookOpen, ChevronDown } from "lucide-react"
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
    title: "Trustless Transfers",
    description: "Move assets between chains without relying on centralized custodians",
    icon: Shield,
  },
  {
    title: "Multi-Signature Security",
    description: "Decentralized validator sets ensure bridge security and reliability",
    icon: Lock,
  },
  {
    title: "Fast Finality",
    description: "Quick confirmation times for cross-chain transactions",
    icon: Zap,
  },
  {
    title: "Multiple Chains",
    description: "Connect to Ethereum, BSC, Cardano, and other major blockchains",
    icon: Network,
  },
  {
    title: "Wrapped Assets",
    description: "Native support for wrapped tokens with 1:1 backing",
    icon: Layers,
  },
  {
    title: "Atomic Swaps",
    description: "Direct peer-to-peer cross-chain exchanges without intermediaries",
    icon: Globe,
  },
]

const existingProjects = [
  {
    name: "Rosen Bridge",
    description: "Decentralized bridge connecting Ergo to multiple chains",
    status: "Live",
    chains: ["Cardano", "Bitcoin", "Ethereum"],
    link: "https://rosen.tech",
  },
  {
    name: "Spectrum Bridge",
    description: "Cross-chain liquidity bridge for DeFi applications",
    status: "In Development",
    chains: ["Cardano", "BSC"],
    link: "https://spectrum.fi",
  },
  {
    name: "Graviton",
    description: "Multi-chain bridge protocol with oracle validation",
    status: "Planned",
    chains: ["Ethereum", "Polygon", "Avalanche"],
    link: "#",
  },
]

export default function CrossChainBridgesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "How do cross-chain bridges work on Ergo?",
      answer: "Ergo bridges use a combination of multi-signature wallets, oracle pools, and smart contracts to lock assets on one chain and mint wrapped versions on another. Validators ensure the integrity of cross-chain transactions."
    },
    {
      question: "What is Rosen Bridge?",
      answer: "Rosen Bridge is Ergo's flagship decentralized bridge solution. It uses a network of watchers and guards to facilitate trustless asset transfers between Ergo and other blockchains without central points of failure."
    },
    {
      question: "Are bridged assets secure?",
      answer: "Yes, bridged assets are secured through multi-signature contracts and decentralized validator networks. The original assets are locked in secure contracts, and wrapped versions maintain 1:1 backing."
    },
    {
      question: "Which chains can Ergo connect to?",
      answer: "Ergo can connect to any blockchain that supports multi-signature wallets or smart contracts. Current bridges support Cardano, Bitcoin, and Ethereum, with more chains being added regularly."
    },
    {
      question: "How long do bridge transfers take?",
      answer: "Transfer times vary by destination chain. Typically, transfers complete within 10-30 minutes, depending on network congestion and confirmation requirements on both chains."
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
              name: "Cross-Chain Bridges",
              item: "https://ergoblockchain.org/use/cross-chain-bridges"
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
              { name: "Use Cases", href: "/use" },
              { name: "Cross-Chain Bridges", href: "/use/cross-chain-bridges" }
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
                    Cross-Chain Bridges
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Secure, trustless value transfer between blockchains
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Decentralized bridges with multi-signature security, no central custody.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://rosen.tech" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Try Rosen Bridge
                      </Button>
                    </a>
                    <Link href="https://github.com/rosen-bridge" target="_blank">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                      >
                        View Code
                      </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">Key features</a></li>
                      <li><a href="#projects" className="hover:text-orange-400">Live Bridges</a></li>
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
                              name: "Use Rosen Bridge",
                              description: "Bridge assets between chains",
                              icon: <Link2 className="w-6 h-6" />,
                              link: "https://rosen.tech",
                              external: true
                            },
                            {
                              name: "Bridge Docs",
                              description: "Integration documentation",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "https://docs.rosen.tech",
                              external: true
                            },
                            {
                              name: "Developer Guide",
                              description: "Build bridge applications",
                              icon: <Terminal className="w-6 h-6" />,
                              link: "/docs/developers",
                              external: false
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
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Bridge Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Connect Ergo to the multi-chain ecosystem
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
                        <feature.icon className="w-12 h-12 text-orange-400 mb-4" />
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
                  How It Works
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Technical architecture of Ergo bridges
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="rosen" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Rosen Bridge
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Code Example
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Bridge Architecture</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Cross-chain bridges on Ergo use decentralized validator networks
                          to ensure secure asset transfers:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Lock assets in source chain contracts</li>
                          <li>Validators confirm the lock transaction</li>
                          <li>Mint wrapped tokens on destination chain</li>
                          <li>Multi-sig ensures no single point of failure</li>
                          <li>Oracle pools provide price feeds</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="rosen" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Rosen Architecture</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Watchers</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Monitor source chain events</li>
                              <li>• Report lock transactions</li>
                              <li>• Validate bridge requests</li>
                              <li>• Decentralized network</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Guards</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Sign multi-sig transactions</li>
                              <li>• Protect bridge funds</li>
                              <li>• Execute minting/burning</li>
                              <li>• Consensus required</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Transfer Process</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-orange-300 overflow-x-auto">
                            <code>{`1. User locks assets on source chain
2. Watchers detect and report event
3. Guards validate the lock proof
4. Multi-sig approves minting
5. Wrapped tokens minted on Ergo
6. User receives wrapped assets`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Bridge Contract Example</CardTitle>
                      <p className="text-neutral-400">Simplified bridge locking contract</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // Bridge lock contract
  val bridgeMultiSig = atLeast(
    3, // Minimum 3 of 5 guards
    Coll(
      guard1PubKey,
      guard2PubKey,
      guard3PubKey,
      guard4PubKey,
      guard5PubKey
    )
  )
  
  // Verify lock conditions
  val validLock = {
    OUTPUTS(0).value >= minLockAmount &&
    OUTPUTS(0).R4[Coll[Byte]].get == targetChain &&
    OUTPUTS(0).R5[Coll[Byte]].get == targetAddress
  }
  
  // Allow unlock by guards consensus
  sigmaProp(
    bridgeMultiSig && validLock
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
                  Live Bridges
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Active bridge solutions connecting Ergo
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
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
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full hover:border-orange-500/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">{project.name}</CardTitle>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === 'Live' 
                              ? 'bg-green-500/20 text-green-400' 
                              : project.status === 'In Development'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-neutral-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.chains.map((chain) => (
                            <span key={chain} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                              {chain}
                            </span>
                          ))}
                        </div>
                        {project.link !== "#" ? (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            Visit Bridge
                            <ExternalLink className="ml-1 w-4 h-4" />
                          </a>
                        ) : (
                          <span className="text-neutral-500">Coming Soon</span>
                        )}
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
                  Common questions about cross-chain bridges
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
                Ready to Bridge Assets?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Connect Ergo to the multi-chain ecosystem today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://rosen.tech" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Use Rosen Bridge
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Link href="/docs/developers">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400">
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