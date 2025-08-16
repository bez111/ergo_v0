"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Eye, Shield, Zap, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, Database, Globe, Activity, TrendingUp, Users, Server, AlertCircle, ChevronDown, Terminal, BookOpen, Cpu, Network, Clock, BarChart3, DollarSign } from "lucide-react"
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
    title: "Reliable Price Feeds",
    description: "Consensus-based data aggregation ensures accurate, manipulation-resistant prices",
    icon: TrendingUp,
  },
  {
    title: "Universal Compatibility",
    description: "Any smart contract can access oracle data without special integrations",
    icon: Globe,
  },
  {
    title: "Fully Decentralized",
    description: "No central authority or single point of failure in the data pipeline",
    icon: Users,
  },
  {
    title: "Economic Security",
    description: "Stake-based incentives ensure honest data provision",
    icon: Shield,
  },
  {
    title: "Consensus Mechanism",
    description: "Outlier detection and averaging for robust data quality",
    icon: CheckCircle,
  },
  {
    title: "Low Latency Updates",
    description: "Frequent updates ensure data freshness for DeFi applications",
    icon: Activity,
  },
]

const oraclePools = [
  {
    name: "ERG/USD",
    status: "Live",
    providers: 14,
    updateFreq: "5 min",
    deviation: "0.5%",
  },
  {
    name: "ADA/USD",
    status: "Live",
    providers: 12,
    updateFreq: "5 min",
    deviation: "0.5%",
  },
  {
    name: "BTC/USD",
    status: "Live",
    providers: 10,
    updateFreq: "10 min",
    deviation: "1%",
  },
  {
    name: "Gold/USD",
    status: "Testing",
    providers: 8,
    updateFreq: "30 min",
    deviation: "0.25%",
  },
]

const technicalDetails = [
  {
    title: "Data Aggregation",
    content: "The oracle pool uses a robust averaging mechanism that filters out outliers by removing the top and bottom 25% of submissions, then calculating the average of remaining values for consensus.",
  },
  {
    title: "Update Triggers",
    content: "New data is published when price deviation exceeds threshold (e.g., 0.5%), maximum time since last update (e.g., 1 hour), or minimum oracle submissions are reached.",
  },
  {
    title: "Economic Security",
    content: "Oracle operators must stake collateral, with slashing for malicious behavior and rewards for honest participation, creating strong economic incentives for reliable data.",
  },
  {
    title: "Attack Resistance",
    content: "Sybil attack protection via staking, outlier filtering prevents manipulation, and decentralization prevents censorship of oracle data.",
  },
]

const useCases = [
  {
    title: "SigmaUSD Stablecoin",
    description: "Algorithmic stablecoin using ERG/USD price feed for collateral calculations",
    link: "https://sigmausd.io",
    icon: DollarSign,
  },
  {
    title: "Spectrum DEX",
    description: "Decentralized exchange using price feeds for limit orders and liquidations",
    link: "https://spectrum.fi",
    icon: BarChart3,
  },
  {
    title: "Lending Protocols",
    description: "Collateralized lending using oracle prices for liquidation thresholds",
    link: "/Docs/ecosystem/financial",
    icon: Shield,
  },
]

export default function OraclePoolsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "How do Oracle Pools ensure data accuracy?",
      answer: "Oracle Pools use a consensus mechanism that aggregates data from multiple independent providers, removes outliers, and publishes the median value. This prevents manipulation and ensures reliable price feeds."
    },
    {
      question: "What happens if an oracle provides false data?",
      answer: "Oracle operators stake collateral that can be slashed for malicious behavior. The consensus mechanism also filters out outliers, making it difficult for individual bad actors to manipulate the final price."
    },
    {
      question: "How often do oracle prices update?",
      answer: "Update frequency varies by pool, typically ranging from 5 minutes to 1 hour. Updates are triggered by price deviations or time thresholds, ensuring data freshness while minimizing unnecessary on-chain transactions."
    },
    {
      question: "Can any smart contract use oracle data?",
      answer: "Yes, any Ergo smart contract can access oracle data by reading from oracle pool boxes. No special permissions or integrations are required - it's a built-in protocol feature."
    },
    {
      question: "How do I become an oracle operator?",
      answer: "To become an oracle operator, you need to run oracle software, stake collateral, and submit data to the pool. Check the documentation for technical requirements and setup instructions."
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
              name: "Oracle Pools",
              item: "https://ergoblockchain.org/technology/oracle-pools"
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
              { label: "Oracle Pools", href: "/technology/oracle-pools" }
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
                  Oracle Pools
                </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Decentralized price feeds and data oracles built into the protocol
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    No single point of failure, no centralized operators - just reliable, composable data for DeFi applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://oracle-core.ergoplatform.com/" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Oracle Dashboard
                  </Button>
                    </a>
                    <a href="https://github.com/ergoplatform/oracle-core" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                  >
                      View on GitHub
                                    </Button>
                    </a>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-brand-primary-400">Key features</a></li>
                      <li><a href="#technical" className="hover:text-brand-primary-400">Technical Details</a></li>
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
                              name: "Oracle Dashboard",
                              description: "View live oracle data and pool statistics",
                              icon: <BarChart3 className="w-6 h-6" />,
                              link: "https://oracle-core.ergoplatform.com/",
                              external: true
                            },
                            {
                              name: "Read Documentation",
                              description: "Learn how to integrate oracle data",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "/Docs",
                              external: false
                            },
                            {
                              name: "Join Community",
                              description: "Get help from oracle operators",
                              icon: <Users className="w-6 h-6" />,
                              link: "https://discord.gg/ergo",
                              external: true
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
                  Built-in oracle infrastructure that provides reliable, decentralized data feeds for any application
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

          {/* Technical Details Section */}
          <motion.section 
            id="technical"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Technical Details
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Deep dive into oracle pool architecture and consensus mechanisms
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="pools" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Live Pools
                  </TabsTrigger>
                  <TabsTrigger value="details" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Implementation
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {technicalDetails.map((detail, index) => (
                      <motion.div
                        key={detail.title}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="motion-reduce:transform-none"
                      >
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                          <CardHeader>
                            <CardTitle className="text-white">{detail.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-400 leading-relaxed">
                              {detail.content}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="pools" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Live Oracle Pools</CardTitle>
                      <p className="text-neutral-400">Current oracle pools providing price feeds</p>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-neutral-700">
                              <th className="text-left py-3 px-4 text-neutral-300">Pool</th>
                              <th className="text-left py-3 px-4 text-neutral-300">Status</th>
                              <th className="text-left py-3 px-4 text-neutral-300">Providers</th>
                              <th className="text-left py-3 px-4 text-neutral-300">Update Freq</th>
                              <th className="text-left py-3 px-4 text-neutral-300">Deviation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {oraclePools.map((pool) => (
                              <tr key={pool.name} className="border-b border-neutral-800">
                                <td className="py-3 px-4 text-white font-medium">{pool.name}</td>
                                <td className="py-3 px-4">
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    pool.status === 'Live' 
                                      ? 'bg-green-500/20 text-green-400' 
                                      : 'bg-yellow-500/20 text-yellow-400'
                                  }`}>
                                    {pool.status}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-neutral-400">{pool.providers}</td>
                                <td className="py-3 px-4 text-neutral-400">{pool.updateFreq}</td>
                                <td className="py-3 px-4 text-neutral-400">{pool.deviation}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="details" className="mt-8">
                  <div className="space-y-8">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Oracle Pool Architecture</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-neutral-400 leading-relaxed">
                          <p className="mb-4">
                            Oracle pools are implemented as a collection of smart contracts that manage data aggregation, 
                            consensus, and reward distribution. The architecture consists of:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Pool contract that holds the current price and metadata</li>
                            <li>Oracle contracts that submit data and stake collateral</li>
                            <li>Aggregation logic that filters outliers and calculates consensus</li>
                            <li>Reward distribution mechanism for honest participants</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Integration Guide</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-neutral-400 leading-relaxed">
                          <p className="mb-4">
                            Any Ergo smart contract can read oracle data by accessing the oracle pool box. 
                            The data is stored in a standardized format that includes:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Current price value</li>
                            <li>Timestamp of last update</li>
                            <li>Number of contributing oracles</li>
                            <li>Confidence interval and deviation metrics</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Use Cases
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Real-world applications using Ergo oracle pools for reliable price data
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full hover:border-brand-primary-500/50 transition-colors">
                      <CardContent className="p-6">
                        <useCase.icon className="w-12 h-12 text-brand-primary-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                        <p className="text-neutral-400 leading-relaxed mb-4">{useCase.description}</p>
                        <a 
                          href={useCase.link} 
                          target={useCase.link.startsWith('http') ? '_blank' : undefined}
                          rel={useCase.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
                        >
                          Learn more
                          {useCase.link.startsWith('http') ? (
                            <ExternalLink className="ml-1 w-4 h-4" />
                          ) : (
                            <ArrowRight className="ml-1 w-4 h-4" />
                          )}
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
                  Common questions about oracle pools and their implementation
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
                Ready to Use Oracle Data?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Start integrating reliable, decentralized price feeds into your Ergo applications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://oracle-core.ergoplatform.com/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold">
                    View Oracle Dashboard
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Link href="/Docs">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400">
                    Read Documentation
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