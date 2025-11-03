"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
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
  const t = useTranslations("technology.nativeTokens")
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
      
      <BackgroundWrapper>
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: "Native Tokens & NFTs", href: "/technology/native-tokens" }
            ]}
            className="mb-8"
          />
        </div>

        <FadeIn>
          {/* Hero Section */}
          <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  {t("title")}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                  {t("subtitle")}
                </p>
                <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  {t("description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/docs/ecosystem/nfts">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t("buttons.exploreNFTs")}
                    </Button>
                  </Link>
                  <a href="https://docs.ergo.getblok.io/api/issuing/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                    >
                      {t("buttons.tokenAPI")}
                    </Button>
                  </a>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">
                    {t("keyMetrics.title")}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
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
                      <div key={item.name} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                            <p className="text-sm text-neutral-400">{item.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Features Section */}
          <section id="features" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("features.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("features.subtitle")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={feature.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          {/* Asset Types Section */}
          <section id="asset-types" className="py-16 px-4 bg-neutral-900/20">
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
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="flex items-center gap-2 text-white text-xl font-semibold mb-6">
                          <Coins className="w-5 h-5 text-orange-400" />
                          Standard Tokens
                      </h3>
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
                    </div>

                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="flex items-center gap-2 text-white text-xl font-semibold mb-6">
                          <DollarSign className="w-5 h-5 text-orange-400" />
                          Stablecoins
                      </h3>
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
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="nfts" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="flex items-center gap-2 text-white text-xl font-semibold mb-6">
                          <Image className="w-5 h-5 text-orange-400" />
                          Art & Collectibles
                      </h3>
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
                    </div>

                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="flex items-center gap-2 text-white text-xl font-semibold mb-6">
                          <Package className="w-5 h-5 text-orange-400" />
                          Gaming Assets
                      </h3>
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
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hybrid" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="flex items-center gap-2 text-white text-xl font-semibold mb-6">
                          <Layers className="w-5 h-5 text-orange-400" />
                          Semi-Fungible Tokens
                      </h3>
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
                    </div>

                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="flex items-center gap-2 text-white text-xl font-semibold mb-6">
                          <Code className="w-5 h-5 text-orange-400" />
                          Programmable Assets
                      </h3>
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
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          {/* Use Cases Section */}
          <section id="use-cases" className="py-16 px-4">
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
                  <div key={useCase.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.8}>
          {/* Code Example Section */}
          <section className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Simple Token Creation
                </h2>
                <p className="text-xl text-neutral-400">
                  Create tokens with just a few lines of code
                </p>
              </div>
              
              <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="bg-neutral-900/60 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm">
                      <code className="language-scala text-orange-300">{`// Token creation parameters
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
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.0}>
          {/* Ecosystem Section */}
          <section className="py-16 px-4">
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
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">Marketplaces</h3>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      <li>• SkyHarbor - NFT marketplace</li>
                      <li>• Spectrum - Token DEX</li>
                      <li>• ErgoAuctionHouse - Auction platform</li>
                    </ul>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">Creation Tools</h3>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      <li>• ErgoMixer - Privacy tokens</li>
                      <li>• Ergo Token Minter - Simple UI</li>
                      <li>• Blitz TCG - Gaming tokens</li>
                    </ul>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">Infrastructure</h3>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      <li>• Token API - REST endpoints</li>
                      <li>• Explorer - Token tracking</li>
                      <li>• Wallets - Native support</li>
                    </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.2}>
          {/* FAQ Section */}
          <section id="faq" className="py-16 px-4 bg-neutral-900/20">
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
                  <div key={index}>
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm">
                        <CollapsibleTrigger asChild>
                          <div className="cursor-pointer hover:bg-neutral-800/30 transition-colors p-8">
                            <div className="flex items-center justify-between">
                              <h3 className="text-white text-left font-semibold">{faq.question}</h3>
                              <ChevronDown 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-8 pb-8">
                            <p className="text-neutral-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.4}>
          {/* What's Next Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What's <span className="text-orange-400">Next?</span>
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Continue your native token development journey
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <a href="https://docs.ergoplatform.com/dev/tokens/" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Coins className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Try Token Creator</h3>
                        <p className="text-orange-400 font-medium">Interactive Tool</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Create your first native token with our step-by-step interactive tool
                    </p>
                  </div>
                </a>
                
                <Link href="/docs/ecosystem/nfts" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">View Documentation</h3>
                        <p className="text-orange-400 font-medium">Learn More</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Explore comprehensive guides and tutorials for native token development
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </BackgroundWrapper>
    </>
  )
} 