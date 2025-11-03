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
import OracleComparisonTable from "@/components/oracle-comparison-table"
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
    link: "/docs/ecosystem/financial",
    icon: Shield,
  },
]

export default function OraclePoolsPage() {
  const t = useTranslations("technology.oraclePools")
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
      
      <BackgroundWrapper>
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
                  <a href="https://oracle-core.ergoplatform.com/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t("buttons.exploreOracles")}
                    </Button>
                  </a>
                  <a href="https://github.com/ergoplatform/oracle-core" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                    >
                      {t("buttons.readDocs")}
                    </Button>
                  </a>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white">Quick Start</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        number: "01",
                        title: "Explore Live Pools",
                        description: "View active oracle pools and price feeds",
                        link: "https://oracle-core.ergoplatform.com/"
                      },
                      {
                        number: "02", 
                        title: "Read Documentation",
                        description: "Learn how to integrate oracle data",
                        link: "/docs"
                      },
                      {
                        number: "03",
                        title: "Join Network",
                        description: "Connect with oracle operators",
                        link: "https://discord.gg/ergo"
                      },
                    ].map((item) => (
                      <div key={item.number} className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 font-bold text-sm">
                          {item.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                          <p className="text-sm text-neutral-400">{item.description}</p>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Key Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Built-in oracle infrastructure that provides reliable, decentralized data feeds for any application
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
          {/* Technical Details Section */}
          <section id="technical" className="py-16 px-4 bg-neutral-900/20">
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
                  <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="pools" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Live Pools
                  </TabsTrigger>
                  <TabsTrigger value="details" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
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
                        <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                          <h3 className="text-white text-xl font-semibold mb-4">{detail.title}</h3>
                          <p className="text-neutral-300 leading-relaxed">
                            {detail.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="pools" className="mt-8">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="text-white text-xl font-semibold mb-2">Live Oracle Pools</h3>
                    <p className="text-neutral-400 mb-6">Current oracle pools providing price feeds</p>
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
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-8">
                  <div className="space-y-8">
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="text-white text-xl font-semibold mb-4">Oracle Pool Architecture</h3>
                      <div className="space-y-4">
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
                      </div>
                    </div>

                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="text-white text-xl font-semibold mb-4">Integration Guide</h3>
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
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          {/* Oracle Comparison Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <OracleComparisonTable />
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.8}>
          {/* Use Cases Section */}
          <section className="py-16 px-4">
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

        <FadeIn delay={1.0}>
          {/* FAQ Section */}
          <section id="faq" className="py-16 px-4 bg-neutral-900/20"
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

        <FadeIn delay={1.2}>
          {/* What's Next Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What's <span className="text-orange-400">Next?</span>
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Ready to integrate oracle data? Explore the tools and resources available.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <a href="https://github.com/ergoplatform/oracle-core" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">View Oracle Core</h3>
                        <p className="text-orange-400 font-medium">Source Code</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Explore the Oracle Core repository with setup guides, documentation, and source code.
                    </p>
                  </div>
                </a>
                
                <Link href="/docs" className="group block">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Technical Documentation</h3>
                        <p className="text-orange-400 font-medium">Learn More</p>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                      Learn how to integrate oracle data into your smart contracts and applications.
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