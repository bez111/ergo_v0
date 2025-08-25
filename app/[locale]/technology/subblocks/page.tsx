"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Rocket, Shield, Zap, ExternalLink, ArrowRight, ChevronDown, Lock, CheckCircle, Layers, Clock, Network, GitBranch, Activity, Cpu, Database, Server, Users, Globe, Terminal, BookOpen } from "lucide-react"
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
    title: "Sub-Second Confirmations",
    description: "Near-instant transaction finality for improved user experience without sacrificing decentralization",
    icon: Clock,
  },
  {
    title: "Layer 1 Security",
    description: "Full blockchain security without trusted intermediaries or bridges",
    icon: Shield,
  },
  {
    title: "Seamless Integration",
    description: "Works with existing infrastructure - no bridges or sidechains needed",
    icon: Network,
  },
  {
    title: "Parallel Processing",
    description: "Multiple subblocks can be validated in parallel for increased throughput",
    icon: Layers,
  },
  {
    title: "Adaptive Difficulty",
    description: "Dynamic adjustment ensures consistent block times even with varying hash power",
    icon: Activity,
  },
  {
    title: "Miner Incentives",
    description: "Additional rewards for subblock miners while maintaining main chain security",
    icon: Cpu,
  },
]

const technicalDetails = [
  {
    title: "Architecture",
    content: "Subblocks are intermediate blocks between main blocks that provide faster confirmations. They maintain the same security model as main blocks but with adjusted difficulty targets.",
  },
  {
    title: "Consensus Mechanism",
    content: "Uses a modified version of Autolykos that allows for variable difficulty targets. Subblocks contribute to the overall chain weight while maintaining compatibility with existing infrastructure.",
  },
  {
    title: "Transaction Ordering",
    content: "Transactions in subblocks are ordered deterministically using a combination of timestamp and transaction ID, preventing front-running and ensuring fairness.",
  },
  {
    title: "State Management",
    content: "Subblocks update the UTXO set incrementally, allowing for efficient state transitions without full block validation overhead.",
  },
]

const useCases = [
  {
    title: "DeFi Applications",
    description: "Enable high-frequency trading and instant swaps with sub-second finality",
    icon: GitBranch,
  },
  {
    title: "Payment Systems",
    description: "Point-of-sale transactions with immediate confirmation",
    icon: Database,
  },
  {
    title: "Gaming",
    description: "Real-time game state updates without waiting for block confirmations",
    icon: Server,
  },
  {
    title: "Social Applications",
    description: "Instant messaging and social interactions on-chain",
    icon: Users,
  },
]

export default function SubblocksPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("features")

  const faqs = [
    {
      question: "What are subblocks?",
      answer: "Subblocks are intermediate blocks between main blocks that provide faster confirmations while maintaining the same security model. They enable sub-second transaction finality without sacrificing decentralization.",
    },
    {
      question: "How fast are subblock confirmations?",
      answer: "Subblocks provide confirmations in approximately 1 second, compared to the 2-minute main block time, enabling near-instant transaction finality for improved user experience.",
    },
    {
      question: "Do subblocks require a hard fork?",
      answer: "No, subblocks are designed to be backward compatible. Existing infrastructure continues to work while new features are gradually adopted.",
    },
    {
      question: "How do subblocks improve scalability?",
      answer: "Subblocks enable 10x throughput increase through parallel processing and more frequent block production while maintaining Layer 1 security guarantees.",
    },
    {
      question: "Are subblocks secure?",
      answer: "Yes, subblocks maintain the same security model as main blocks with adjusted difficulty targets. They contribute to overall chain weight and are protected by the same PoW consensus.",
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
              name: "Subblocks",
              item: "https://ergoblockchain.org/technology/subblocks"
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
              { label: "Subblocks", href: "/technology/subblocks" }
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
                  Subblocks
                </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Revolutionary Layer 1 scaling solution providing sub-second transaction confirmations
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Subblocks enable near-instant transaction finality without sacrificing decentralization or security. Experience blockchain speed that matches traditional payment systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/docs">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Learn More
                  </Button>
                    </Link>
                    <Link href="/docs/introduction/roadmap/sub-blocks">
                  <Button
                    variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                  >
                      Technical Details
                                    </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">Key features</a></li>
                      <li><a href="#technical" className="hover:text-orange-400">Technical details</a></li>
                      <li><a href="#use-cases" className="hover:text-orange-400">Use cases</a></li>
                      <li><a href="#faq" className="hover:text-orange-400">FAQ</a></li>
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
                              name: "Confirmation Time",
                              value: "< 1 second",
                              description: "Sub-second transaction finality"
                            },
                            {
                              name: "Throughput Increase",
                              value: "10x",
                              description: "Compared to main chain"
                            },
                            {
                              name: "Security Model",
                              value: "Layer 1",
                              description: "Same as main blocks"
                            },
                            {
                              name: "Compatibility",
                              value: "100%",
                              description: "Backward compatible"
                            },
                          ].map((item) => (
                            <div key={item.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-white">{item.name}</h4>
                                  <p className="text-sm text-neutral-400">{item.description}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-orange-400">{item.value}</div>
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
                  Key Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Subblocks combine the best of both worlds: the security of Layer 1 and the speed of modern payment systems
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
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                            <feature.icon className="w-6 h-6 text-orange-400" />
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

          {/* Technical Details Section */}
          <motion.section 
            id="technical"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Technical Details
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Understanding the architecture and implementation of subblocks
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {technicalDetails.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="h-full"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-white">{detail.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-neutral-400 leading-relaxed">
                          {detail.content}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
                  Applications that benefit from sub-second transaction confirmations
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
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                            <useCase.icon className="w-6 h-6 text-orange-400" />
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
                  Common questions about subblocks and their implementation
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
                Ready to Experience Sub-Second Confirmations?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Join the future of blockchain technology with subblocks - where speed meets security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/introduction/roadmap/sub-blocks">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    Read Technical Details
                  </Button>
                </Link>
                <Link href="/technology">
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                  >
                    Explore Other Technologies
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