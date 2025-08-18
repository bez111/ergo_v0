"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Gamepad2, Coins, Globe, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, Sparkles, Trophy, Code, Terminal, BookOpen, ChevronDown } from "lucide-react"
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
    title: "In-Game Assets",
    description: "True ownership of game items, characters, and resources as NFTs",
    icon: Trophy,
  },
  {
    title: "Play-to-Earn",
    description: "Earn real value through gameplay with tokenized rewards",
    icon: Coins,
  },
  {
    title: "Virtual Worlds",
    description: "Decentralized metaverse platforms with user-owned land and assets",
    icon: Globe,
  },
  {
    title: "Cross-Game Items",
    description: "Interoperable assets that work across multiple games",
    icon: Layers,
  },
  {
    title: "Dynamic NFTs",
    description: "Game items that evolve based on player actions and achievements",
    icon: Sparkles,
  },
  {
    title: "DAO Governance",
    description: "Player-owned game economies with community governance",
    icon: CheckCircle,
  },
]

const projects = [
  {
    name: "Blitz TCG",
    description: "Trading card game with on-chain card ownership",
    status: "In Development",
    features: ["Collectible cards", "Tournament play", "Card trading"],
  },
  {
    name: "ErgoRacer",
    description: "Racing game with NFT vehicles and tracks",
    status: "Concept",
    features: ["Custom vehicles", "Track ownership", "Racing leagues"],
  },
  {
    name: "CyberPunks",
    description: "Cyberpunk-themed collectible game",
    status: "Live",
    features: ["Unique avatars", "Rarity system", "Community events"],
  },
]

export default function GamingMetaversePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "How do blockchain games work on Ergo?",
      answer: "Ergo games use NFTs for in-game assets and tokens for game currencies. Smart contracts handle game logic, item trading, and reward distribution, ensuring transparent and fair gameplay."
    },
    {
      question: "What are dynamic game NFTs?",
      answer: "Dynamic NFTs on Ergo can change properties based on gameplay. A sword might gain power with use, or a character might evolve based on achievements, all tracked on-chain through smart contracts."
    },
    {
      question: "Can game assets be used across different games?",
      answer: "Yes! Ergo's NFT standard allows assets to be interoperable. Developers can build games that recognize and utilize NFTs from other games, creating a shared gaming metaverse."
    },
    {
      question: "How does play-to-earn work?",
      answer: "Players earn tokens or NFTs through gameplay achievements, competitions, or contributions. These digital assets have real value and can be traded on marketplaces or used in other games."
    },
    {
      question: "What makes Ergo good for gaming?",
      answer: "Ergo's low fees, fast transactions, programmable NFTs, and robust smart contracts make it ideal for gaming. The eUTXO model also enables complex game mechanics while maintaining security."
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
              name: "Gaming & Metaverse",
              item: "https://ergoblockchain.org/use/use-cases/gaming-metaverse"
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
              { label: "Gaming & Metaverse", href: "/use/use-cases/gaming-metaverse" }
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
                    Gaming & Metaverse
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Next-gen gaming assets & digital worlds
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Programmable gaming tokens, NFT-powered economies, metaverse infrastructure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/ecosystem">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Explore Games
                      </Button>
                    </Link>
                    <Link href="/docs/developers">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                      >
                        Build a Game
                      </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-brand-primary-400">Gaming features</a></li>
                      <li><a href="#projects" className="hover:text-brand-primary-400">Game Projects</a></li>
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
                              name: "Play Games",
                              description: "Explore Ergo gaming ecosystem",
                              icon: <Gamepad2 className="w-6 h-6" />,
                              link: "/ecosystem",
                              external: false
                            },
                            {
                              name: "Game SDK",
                              description: "Tools for game developers",
                              icon: <Code className="w-6 h-6" />,
                              link: "https://github.com/ergoplatform",
                              external: true
                            },
                            {
                              name: "Developer Docs",
                              description: "Build blockchain games",
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
                  Gaming Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Building blocks for blockchain gaming
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
                  Game Architecture
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  How blockchain gaming works on Ergo
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="economy" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Game Economy
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Code Example
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Gaming Infrastructure</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Ergo provides complete infrastructure for blockchain gaming:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>NFTs for unique game assets</li>
                          <li>Tokens for in-game currencies</li>
                          <li>Smart contracts for game logic</li>
                          <li>Oracles for randomness</li>
                          <li>DAOs for game governance</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="economy" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Token Economy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">Game Tokens</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• In-game currency</li>
                              <li>• Reward tokens</li>
                              <li>• Governance tokens</li>
                              <li>• Staking mechanisms</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">NFT Assets</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Characters & avatars</li>
                              <li>• Items & equipment</li>
                              <li>• Land & buildings</li>
                              <li>• Achievements & badges</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Play-to-Earn Model</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-brand-primary-300 overflow-x-auto">
                            <code>{`Revenue Streams:
1. Quest completion rewards
2. PvP tournament prizes
3. NFT trading fees
4. Land ownership income
5. Crafting & creation`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Game Item NFT</CardTitle>
                      <p className="text-neutral-400">Dynamic game item with leveling</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-brand-primary-300 overflow-x-auto">
                          <code>{`{
  // Dynamic game item NFT
  val itemId = SELF.tokens(0)._1
  val owner = SELF.R4[Coll[Byte]].get
  
  // Item properties
  val itemType = SELF.R5[Int].get // 1=sword, 2=shield
  val level = SELF.R6[Int].get
  val experience = SELF.R7[Long].get
  val attributes = SELF.R8[Coll[Int]].get
  
  // Level up logic
  val expRequired = level * 1000L
  val canLevelUp = experience >= expRequired
  
  val newLevel = if (canLevelUp) level + 1 else level
  val newExp = if (canLevelUp) 0L else experience
  
  // Update item stats
  sigmaProp(
    OUTPUTS(0).R6[Int].get == newLevel &&
    OUTPUTS(0).R7[Long].get == newExp
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

          {/* Game Projects */}
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
                  Game Projects
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Games building on Ergo
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
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
                              : project.status === 'In Development'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-purple-500/20 text-purple-400'
                          }`}>
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
                  Common questions about gaming on Ergo
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
                Ready to Build the Future of Gaming?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Create blockchain games and metaverse experiences on Ergo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/developers">
                  <Button size="lg" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold">
                    Start Building
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/ecosystem">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400">
                    Explore Games
                    <Gamepad2 className="ml-2 w-4 h-4" />
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