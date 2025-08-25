"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Palette, Coins, Code, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, TrendingUp, Shield, Terminal, BookOpen, ChevronDown, Image } from "lucide-react"
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
    title: "On-Chain Metadata",
    description: "Store NFT metadata directly on-chain for true permanence and decentralization",
    icon: Code,
  },
  {
    title: "Protocol Royalties",
    description: "Enforceable royalties at the protocol level, ensuring creators always get paid",
    icon: Coins,
  },
  {
    title: "Dynamic NFTs",
    description: "Programmable NFTs that can evolve based on conditions or user interactions",
    icon: TrendingUp,
  },
  {
    title: "Fractional Ownership",
    description: "Split NFTs into fungible tokens for shared ownership and liquidity",
    icon: Layers,
  },
  {
    title: "Batch Minting",
    description: "Efficient batch minting for collections with minimal transaction costs",
    icon: Image,
  },
  {
    title: "Composable Assets",
    description: "NFTs that can interact with DeFi protocols and other smart contracts",
    icon: Shield,
  },
]

const existingProjects = [
  {
    name: "SkyHarbor",
    description: "Premier NFT marketplace with advanced trading features",
    status: "Live",
    features: ["Collection verification", "Bulk trading", "Royalty enforcement"],
    link: "https://skyharbor.io",
  },
  {
    name: "Auction House",
    description: "Decentralized auction platform for rare digital assets",
    status: "Live",
    features: ["English auctions", "Dutch auctions", "Reserve prices"],
    link: "https://ergauctions.org",
  },
  {
    name: "Lilium",
    description: "Art-focused NFT platform with creator tools",
    status: "Live",
    features: ["Artist profiles", "Curated collections", "Social features"],
    link: "https://lilium.art",
  },
]

export default function NFTsDigitalAssetsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "What makes Ergo NFTs different?",
      answer: "Ergo NFTs are native tokens with on-chain metadata, protocol-level royalties, and programmability through ErgoScript. Unlike simple token standards, Ergo NFTs can have complex behaviors and interact with DeFi protocols."
    },
    {
      question: "How do protocol royalties work?",
      answer: "Royalties are enforced at the protocol level through smart contracts. Every sale automatically distributes the specified percentage to creators, ensuring they always receive compensation without relying on marketplace compliance."
    },
    {
      question: "Can NFTs store data on-chain?",
      answer: "Yes! Ergo NFTs can store metadata directly on-chain, including images (as data URIs), attributes, and descriptions. This ensures permanence without relying on external storage like IPFS."
    },
    {
      question: "What are dynamic NFTs?",
      answer: "Dynamic NFTs can change properties based on conditions like time, user actions, or external data from oracles. Examples include evolving game items, reactive art, or achievement-based collectibles."
    },
    {
      question: "How efficient is NFT minting on Ergo?",
      answer: "Ergo supports batch minting, allowing creators to mint entire collections in a single transaction. The eUTXO model makes this extremely efficient compared to account-based chains."
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
              name: "NFTs & Digital Assets",
              item: "https://ergoblockchain.org/use/nfts-digital-assets"
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
              { name: "NFTs & Digital Assets", href: "/use/nfts-digital-assets" }
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
                    NFTs & Digital Assets
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    True digital ownership, dynamic properties
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    On-chain metadata, protocol royalties, programmable NFTs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://skyharbor.io" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Explore SkyHarbor
                      </Button>
                                      </a>
                  <Link href="/docs/ecosystem/nfts">
                    <Button
                      variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                      >
                        NFT Guide
                      </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">NFT features</a></li>
                      <li><a href="#projects" className="hover:text-orange-400">Marketplaces</a></li>
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
                              name: "Browse NFTs",
                              description: "Explore collections on SkyHarbor",
                              icon: <Palette className="w-6 h-6" />,
                              link: "https://skyharbor.io",
                              external: true
                            },
                            {
                              name: "Create NFTs",
                              description: "Mint your own collection",
                              icon: <Image className="w-6 h-6" />,
                              link: "https://docs.skyharbor.io",
                              external: true
                            },
                            {
                              name: "Developer Docs",
                              description: "Build NFT applications",
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
                  NFT Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Advanced capabilities for digital assets on Ergo
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
                  Technical Implementation
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  How NFTs work on Ergo
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="metadata" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Metadata
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Code Example
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">NFT Architecture</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Ergo NFTs are first-class tokens with unique properties:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Single token with quantity of 1</li>
                          <li>Metadata stored in token registers</li>
                          <li>Programmable through ErgoScript</li>
                          <li>Native royalty enforcement</li>
                          <li>Composable with DeFi protocols</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="metadata" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">NFT Registers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Standard Registers</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• R4: NFT Type/Standard</li>
                              <li>• R5: Name</li>
                              <li>• R6: Description</li>
                              <li>• R7: Image/Media</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Extended Registers</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• R8: Attributes/Properties</li>
                              <li>• R9: Royalty information</li>
                              <li>• Custom data structures</li>
                              <li>• Dynamic properties</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Metadata Storage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-orange-300 overflow-x-auto">
                            <code>{`{
  "name": "Ergo NFT #001",
  "description": "Unique digital artwork",
  "image": "data:image/png;base64,...",
  "attributes": [
    {"trait": "Rarity", "value": "Legendary"},
    {"trait": "Power", "value": 100}
  ],
  "royalty": {
    "address": "9f...",
    "percentage": 5
  }
}`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">NFT Minting Example</CardTitle>
                      <p className="text-neutral-400">ErgoScript for NFT creation</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // NFT minting contract
  val nftId = SELF.id
  val nftAmount = 1L
  
  // Metadata registers
  val nftName = OUTPUTS(0).R5[Coll[Byte]].get
  val nftDesc = OUTPUTS(0).R6[Coll[Byte]].get
  val nftImage = OUTPUTS(0).R7[Coll[Byte]].get
  
  // Royalty configuration
  val royaltyAddress = OUTPUTS(0).R8[Coll[Byte]].get
  val royaltyPercent = OUTPUTS(0).R9[Int].get
  
  // Verify NFT creation
  sigmaProp(
    OUTPUTS(0).tokens(0)._1 == nftId &&
    OUTPUTS(0).tokens(0)._2 == nftAmount &&
    royaltyPercent <= 10 // Max 10% royalty
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
                  NFT Marketplaces
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Platforms for trading digital assets on Ergo
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
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                            {project.status}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-neutral-400">{project.description}</p>
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
                          className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          Visit Marketplace
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
                  Common questions about NFTs on Ergo
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
                Ready to Create Digital Assets?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Start creating and trading NFTs on Ergo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://skyharbor.io" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Explore SkyHarbor
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                                    <Link href="/docs/ecosystem/nfts">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400">
                    NFT Guide
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