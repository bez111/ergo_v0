"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Users, Vote, Coins, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, TrendingUp, Shield, Code, Terminal, BookOpen, ChevronDown } from "lucide-react"
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
    title: "On-Chain Governance",
    description: "Transparent voting and proposal systems with automatic execution",
    icon: Vote,
  },
  {
    title: "Treasury Management",
    description: "Decentralized fund management with multi-signature controls",
    icon: Coins,
  },
  {
    title: "Profit Sharing",
    description: "Automatic distribution of revenues to DAO members",
    icon: TrendingUp,
  },
  {
    title: "Composable Infrastructure",
    description: "Modular DAO components for custom governance models",
    icon: Layers,
  },
  {
    title: "Token Economies",
    description: "Create custom tokens with built-in economic models",
    icon: Coins,
  },
  {
    title: "Reputation Systems",
    description: "Non-transferable reputation tokens for merit-based governance",
    icon: Shield,
  },
]

const existingProjects = [
  {
    name: "Paideia",
    description: "Complete DAO infrastructure and governance toolkit",
    status: "Live",
    features: ["Treasury management", "Proposal system", "Token distribution"],
    link: "https://paideia.im",
  },
  {
    name: "ErgoPad DAO",
    description: "Community-governed launchpad and incubator",
    status: "Live",
    features: ["Staking governance", "Revenue sharing", "Project funding"],
    link: "https://ergopad.io",
  },
  {
    name: "SigmaDAO",
    description: "Experimental DAO for protocol governance",
    status: "In Development",
    features: ["Quadratic voting", "Delegation", "Time-locked proposals"],
    link: "#",
  },
]

export default function DAOsAlternativeEconomiesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "What makes Ergo ideal for DAOs?",
      answer: "Ergo's eUTXO model provides superior security for treasury management, ErgoScript enables complex governance logic, and native tokens allow for custom economic models without smart contract risks."
    },
    {
      question: "How does Paideia work?",
      answer: "Paideia provides a complete DAO toolkit including proposal creation, on-chain voting, treasury management, and token distribution. It uses ErgoScript for transparent and automatic execution of governance decisions."
    },
    {
      question: "Can DAOs manage real-world assets?",
      answer: "Yes, Ergo DAOs can manage both digital and tokenized real-world assets through oracle integration and legal wrapper structures, enabling hybrid on-chain/off-chain governance models."
    },
    {
      question: "What governance models are supported?",
      answer: "Ergo supports various governance models including token-weighted voting, quadratic voting, reputation-based systems, delegated voting, and time-locked proposals with customizable parameters."
    },
    {
      question: "How are DAO treasuries secured?",
      answer: "DAO treasuries use multi-signature contracts, time-locks, and spending limits. ErgoScript enables complex security policies that protect funds while allowing legitimate governance actions."
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
              name: "DAOs & Alternative Economies",
              item: "https://ergoblockchain.org/use/use-cases/daos-alternative-economies"
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
              { label: "DAOs & Alternative Economies", href: "/use/use-cases/daos-alternative-economies" }
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
                    DAOs & Alternative Economies
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Community governance and alternative economic systems
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Composable DAO infrastructure: treasury, voting, profit-sharing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://paideia.im" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Try Paideia
                      </Button>
                    </a>
                    <Link href="https://github.com/paideiadao" target="_blank">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                      >
                        View Code
                      </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-brand-primary-400">DAO features</a></li>
                      <li><a href="#projects" className="hover:text-brand-primary-400">Live DAOs</a></li>
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
                              name: "Create a DAO",
                              description: "Launch your DAO with Paideia",
                              icon: <Users className="w-6 h-6" />,
                              link: "https://paideia.im",
                              external: true
                            },
                            {
                              name: "DAO Guide",
                              description: "Learn DAO best practices",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "/Docs/ecosystem/daos",
                              external: false
                            },
                            {
                              name: "Developer Docs",
                              description: "Build DAO applications",
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
                  DAO Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Complete toolkit for decentralized organizations
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
                  DAO Architecture
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  How DAOs work on Ergo
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="governance" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Governance
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Code Example
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">DAO Components</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Ergo DAOs combine multiple components for complete governance:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Governance tokens for voting rights</li>
                          <li>Proposal contracts for decision making</li>
                          <li>Treasury contracts for fund management</li>
                          <li>Distribution contracts for profit sharing</li>
                          <li>Time-locks for security</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="governance" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Voting Mechanisms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">Token Voting</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• 1 token = 1 vote</li>
                              <li>• Delegation supported</li>
                              <li>• Snapshot voting</li>
                              <li>• No double voting</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">Quadratic Voting</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Cost = votes squared</li>
                              <li>• Reduces whale influence</li>
                              <li>• Fair distribution</li>
                              <li>• Sybil resistant</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Proposal Lifecycle</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-brand-primary-300 overflow-x-auto">
                            <code>{`1. Create proposal with:
   - Description
   - Required quorum
   - Voting period

2. Stake tokens to submit

3. Voting period opens

4. Members cast votes

5. Tally results

6. Execute if passed`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">DAO Voting Contract</CardTitle>
                      <p className="text-neutral-400">Simplified voting mechanism</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-brand-primary-300 overflow-x-auto">
                          <code>{`{
  // DAO voting contract
  val proposalId = SELF.R4[Coll[Byte]].get
  val votingDeadline = SELF.R5[Int].get
  val quorumRequired = SELF.R6[Long].get
  
  // Check voting period
  val votingOpen = HEIGHT < votingDeadline
  
  // Verify voter has tokens
  val voterBalance = INPUTS(1).tokens(0)._2
  val hasVotingPower = voterBalance > 0L
  
  // Record vote
  val voteChoice = OUTPUTS(0).R4[Boolean].get
  val voteWeight = voterBalance
  
  // Prevent double voting
  val voterPubKey = INPUTS(1).propositionBytes
  val notVotedYet = !votedAddresses.contains(voterPubKey)
  
  sigmaProp(
    votingOpen && 
    hasVotingPower && 
    notVotedYet
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
                  Live DAOs
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Active DAOs operating on Ergo
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
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span key={feature} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                        {project.link !== "#" ? (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
                          >
                            Visit DAO
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
                  Common questions about DAOs on Ergo
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
                Ready to Build a DAO?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Start your decentralized organization on Ergo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://paideia.im" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold">
                    Launch with Paideia
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Link href="/Docs/ecosystem/daos">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400">
                    DAO Guide
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