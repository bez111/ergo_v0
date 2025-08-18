"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Coins, Package, Shield, Zap, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, Image, Code, Database, Globe, DollarSign, Palette, FileText, ChevronDown, Terminal, BookOpen, Users } from "lucide-react"
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
    title: "One-Click Creation",
    description: "Issue tokens, stablecoins, or NFTs in a single transaction without smart contracts",
    icon: Zap,
  },
  {
    title: "True Native Assets",
    description: "First-class tokens with protocol-level security guarantees, not contract-based",
    icon: Shield,
  },
  {
    title: "DeFi Ready",
    description: "Native integration with all Ergo applications and protocols",
    icon: Package,
  },
  {
    title: "Cost Effective",
    description: "Minimal fees for token creation and transfers - just simple, secure, native assets",
    icon: DollarSign,
  },
  {
    title: "Rich Metadata",
    description: "Support for complex metadata including images, descriptions, and custom properties",
    icon: Database,
  },
  {
    title: "Universal Compatibility",
    description: "Any smart contract can access oracle data without special integrations",
    icon: Globe,
  },
]

const useCases = [
  {
    title: "DeFi Tokens",
    description: "Create governance tokens, utility tokens, and reward tokens for DeFi protocols",
    icon: Coins,
  },
  {
    title: "NFT Collections",
    description: "Build unique digital art, collectibles, and gaming assets",
    icon: Image,
  },
  {
    title: "Stablecoins",
    description: "Issue algorithmic or collateralized stablecoins with oracle integration",
    icon: DollarSign,
  },
  {
    title: "Gaming Assets",
    description: "Create in-game currencies, items, and character tokens",
    icon: Package,
  },
]

export default function NativeTokensPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("tokens")

  const faqs = [
    {
      question: "How do native tokens differ from ERC-20 tokens?",
      answer: "Native tokens on Ergo are first-class protocol assets that don't require smart contracts. They have protocol-level security guarantees and are more cost-effective to create and transfer compared to ERC-20 tokens which require contract deployment and gas fees.",
    },
    {
      question: "What's the cost to create a native token?",
      answer: "Creating a native token costs approximately $0.01 in ERG fees, which is significantly cheaper than deploying smart contracts on other blockchains. The cost is just the standard transaction fee.",
    },
    {
      question: "Can I create NFTs with rich metadata?",
      answer: "Yes, native tokens support complex metadata including images, descriptions, and custom properties. You can store metadata on-chain or reference external data through IPFS or other storage solutions.",
    },
    {
      question: "Are native tokens compatible with all Ergo applications?",
      answer: "Yes, native tokens are universally compatible with all Ergo applications, wallets, and protocols. They don't require special integrations since they're treated as first-class assets by the protocol.",
    },
    {
      question: "How do I create a stablecoin using native tokens?",
      answer: "You can create stablecoins by combining native tokens with oracle data feeds. The AgeUSD stablecoin is an example of this approach, using oracle pools to maintain price stability.",
    },
  ]

  const lastUpdated = new Date().toISOString().slice(0, 10)

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
              name: "Native Tokens & NFTs",
              item: "https://ergoblockchain.org/technology/native-tokens"
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
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Native Tokens & NFTs", href: "/technology/native-tokens" }
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
                  Native Tokens & NFTs
                </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Create and trade tokens and NFTs directly at the protocol level
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    No smart contracts needed - just simple, secure, and cost-effective native assets. Issue tokens, stablecoins, or NFTs in a single transaction with protocol-level security guarantees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/docs/ecosystem/nfts">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Explore NFT Ecosystem
                  </Button>
                    </Link>
                    <a href="https://docs.ergo.getblok.io/api/issuing/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                  >
                      Token API Docs
                                    </Button>
                    </a>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-brand-primary-400">Key features</a></li>
                      <li><a href="#asset-types" className="hover:text-brand-primary-400">Asset types</a></li>
                      <li><a href="#use-cases" className="hover:text-brand-primary-400">Use cases</a></li>
                      <li><a href="#faq" className="hover:text-brand-primary-400">FAQ</a></li>
                    </ul>
                  </nav>
              </div>
              <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl p-8">
                    <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          Key Metrics
                      </h3>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Token Creation",
                              value: "1 TX",
                              description: "Single transaction creation"
                            },
                            {
                              name: "Creation Cost",
                              value: "~$0.01",
                              description: "Minimal fees in ERG"
                            },
                            {
                              name: "Protocol Security",
                              value: "100%",
                              description: "First-class assets"
                            },
                            {
                              name: "Token Types",
                              value: "∞",
                              description: "Unlimited possibilities"
                            },
                          ].map((item) => (
                            <div key={item.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-white">{item.name}</h4>
                                  <p className="text-sm text-neutral-400">{item.description}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-brand-primary-400">{item.value}</div>
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

          {/* Features Section */}
          <motion.section 
            id="features"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Native Assets?
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Unlike other blockchains that require complex smart contracts, Ergo treats custom tokens as first-class citizens
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
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-brand-primary-500/10 rounded-lg">
                            <feature.icon className="w-6 h-6 text-brand-primary-400" />
                          </div>
                          <CardTitle className="text-white">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Asset Types Section */}
          <motion.section 
            id="asset-types"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Asset Types
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Create any type of digital asset with native protocol support
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 w-full bg-neutral-900/50">
                  <TabsTrigger value="tokens">Fungible Tokens</TabsTrigger>
                  <TabsTrigger value="nfts">NFTs</TabsTrigger>
                  <TabsTrigger value="hybrid">Hybrid Assets</TabsTrigger>
                </TabsList>

                <TabsContent value="tokens" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white">
                          <Coins className="w-5 h-5 text-brand-primary-400" />
                          Standard Tokens
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-4">
                          Create any type of fungible token with customizable properties:
                        </p>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Fixed or variable supply</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Decimal precision control</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Metadata and descriptions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Burn and mint capabilities</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white">
                          <DollarSign className="w-5 h-5 text-brand-primary-400" />
                          Stablecoins
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-4">
                          Build algorithmic or collateralized stablecoins:
                        </p>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Oracle price feeds integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Collateral management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Redemption mechanisms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Governance tokens</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="nfts" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white">
                          <Image className="w-5 h-5 text-brand-primary-400" />
                          Art & Collectibles
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-4">
                          Create unique digital assets with rich metadata:
                        </p>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>IPFS image storage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Royalty mechanisms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Collection support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Custom attributes</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white">
                          <Package className="w-5 h-5 text-brand-primary-400" />
                          Gaming Assets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-4">
                          Build gaming tokens and collectibles:
                        </p>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Character tokens</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>In-game items</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Rarity systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Cross-game compatibility</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="hybrid" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white">
                          <Layers className="w-5 h-5 text-brand-primary-400" />
                          Semi-Fungible Tokens
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-4">
                          Create tokens with both fungible and non-fungible properties:
                        </p>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Batch NFTs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Fractional ownership</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Dynamic metadata</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Conditional transfers</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white">
                          <Code className="w-5 h-5 text-brand-primary-400" />
                          Programmable Assets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-4">
                          Combine native tokens with smart contracts:
                        </p>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Conditional logic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Time-based features</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Multi-signature support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                            <span>Oracle integration</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section 
            id="use-cases"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Use Cases
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Applications that benefit from native token creation
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-brand-primary-500/10 rounded-lg">
                            <useCase.icon className="w-6 h-6 text-brand-primary-400" />
                          </div>
                          <CardTitle className="text-white text-lg">{useCase.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-400 leading-relaxed">
                          {useCase.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Code Example Section */}
          <motion.section 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Simple Token Creation
                </h2>
                <p className="text-xl text-neutral-400">
                  Create tokens with just a few lines of code
                </p>
              </div>
              
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="bg-neutral-900/60 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm">
                      <code className="language-scala text-brand-primary-300">{`// Token creation parameters
val tokenName = "MyToken"
val tokenDescription = "My awesome token on Ergo"
val tokenDecimals = 2
val tokenAmount = 1000000L

// Create token in a single transaction
val token = Minting.issueToken(
  ergoClient = client,
  tokenName = tokenName,
  tokenDescription = tokenDescription,
  tokenAmount = tokenAmount,
  tokenDecimals = tokenDecimals,
  mintingAddress = address,
  txFee = Parameters.MinFee
)

// Token is now live on the blockchain!
println(s"Token ID: \${token.getId}")
println(s"Token created in TX: \${token.creationTx}")`}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-neutral-400 mt-4">
                    No smart contract deployment, no complex setup - just simple, native token creation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Ecosystem Section */}
          <motion.section 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Token Ecosystem
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  A thriving ecosystem of tools and platforms for native tokens
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Marketplaces</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      <li>• SkyHarbor - NFT marketplace</li>
                      <li>• Spectrum - Token DEX</li>
                      <li>• ErgoAuctionHouse - Auction platform</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Creation Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      <li>• ErgoMixer - Privacy tokens</li>
                      <li>• Ergo Token Minter - Simple UI</li>
                      <li>• Blitz TCG - Gaming tokens</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      <li>• Token API - REST endpoints</li>
                      <li>• Explorer - Token tracking</li>
                      <li>• Wallets - Native support</li>
                    </ul>
                  </CardContent>
                </Card>
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
            className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-neutral-400">
                  Common questions about native tokens and their implementation
                </p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-neutral-800/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-white text-left">{faq.question}</CardTitle>
                              <ChevronDown 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <p className="text-neutral-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  </motion.div>
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
            className="py-16 px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Creating Native Assets
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who have already issued tokens and NFTs on Ergo's native asset layer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://docs.ergoplatform.com/dev/tokens/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                    Read Documentation
                  </Button>
                </a>
                <a href="https://ergoplatform.org/en/blog/2022-03-08-building-ergo-how-the-ageusd-stablecoin-works/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                  >
                    Learn About AgeUSD
                  </Button>
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
} 