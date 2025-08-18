"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { GitBranch, Shield, Zap, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, RefreshCw, Settings, Users, TrendingUp, AlertTriangle, ChevronDown, Terminal, BookOpen, Cpu, Network, Clock, BarChart3 } from "lucide-react"
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
    title: "Backward Compatible",
    description: "No forced upgrades, no chain wars - new features coexist with non-upgraded nodes",
    icon: RefreshCw,
  },
  {
    title: "Future Proof",
    description: "Adopt innovations at your own pace without network disruption",
    icon: TrendingUp,
  },
  {
    title: "Gradual Adoption",
    description: "Evolutionary, not revolutionary changes - the network evolves smoothly",
    icon: Settings,
  },
  {
    title: "Consensus Preservation",
    description: "Maintains network consensus even with different node versions",
    icon: Users,
  },
  {
    title: "Security First",
    description: "New features only activate when safe majority adoption is reached",
    icon: Shield,
  },
  {
    title: "Developer Friendly",
    description: "Test new features on mainnet without breaking existing applications",
    icon: CheckCircle,
  },
]

const useCases = [
  {
    title: "NiPoPoWs Integration",
    description: "Non-Interactive Proofs of Proof-of-Work can be added as an optional feature, enabling light clients without forcing all nodes to support them.",
    icon: Layers,
    link: "/technology/nipopows",
    linkText: "Learn about NiPoPoWs →",
  },
  {
    title: "Privacy Enhancements",
    description: "Advanced privacy features like ring signatures or stealth addresses can be introduced without breaking existing transparent transactions.",
    icon: Shield,
    link: "/technology/privacy-features",
    linkText: "Explore privacy features →",
  },
  {
    title: "Smart Contract Extensions",
    description: "New opcodes and scripting capabilities can be added for developers who want to use them, while existing contracts continue to work.",
    icon: Zap,
    link: "/technology/ergoscript",
    linkText: "Learn about ErgoScript →",
  },
  {
    title: "Consensus Improvements",
    description: "Optimizations to block validation, mining algorithms, or network protocols can be tested and adopted gradually.",
    icon: RefreshCw,
    link: "/Docs/introduction/autolykos",
    linkText: "About Autolykos →",
  },
]

export default function VelvetForksPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("concept")

  const faqs = [
    {
      question: "What's the difference between velvet forks and soft forks?",
      answer: "Velvet forks are more flexible than soft forks. While soft forks require all nodes to eventually upgrade to maintain consensus, velvet forks allow indefinite coexistence of upgraded and non-upgraded nodes. Non-upgraded nodes simply ignore the new features."
    },
    {
      question: "How do velvet forks maintain network security?",
      answer: "Velvet forks maintain security by ensuring that new features don't break existing consensus rules. Non-upgraded nodes continue to validate transactions according to the original rules, while upgraded nodes can utilize additional features without compromising the network."
    },
    {
      question: "Can velvet forks cause network splits?",
      answer: "No, velvet forks are designed to prevent network splits. Since they're backward compatible, all nodes continue to agree on the validity of transactions and blocks, regardless of whether they support the new features."
    },
    {
      question: "What happens if I don't upgrade my node?",
      answer: "Nothing bad happens! Your node will continue to work normally, validating transactions and maintaining consensus. You simply won't be able to use the new optional features until you choose to upgrade."
    },
    {
      question: "How are velvet forks activated?",
      answer: "Velvet forks typically activate through miner signaling or predetermined block heights. Since they're backward compatible, activation doesn't require unanimous consensus - the network remains stable regardless of adoption rate."
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
              name: "Velvet Forks",
              item: "https://ergoblockchain.org/technology/velvet-forks"
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
              { label: "Velvet Forks", href: "/technology/velvet-forks" }
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
                  Velvet Forks
                </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Optional, backward-compatible protocol extensions
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    New features without forced upgrades. Evolution without revolution - the network evolves smoothly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://www.ergoforum.org/t/velvet-forks-and-nipopows/3722" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Learn More
                  </Button>
                    </a>
                    <a href="https://eprint.iacr.org/2018/087.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                  >
                      Research Paper
                                    </Button>
                    </a>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-brand-primary-400">Key features</a></li>
                      <li><a href="#concept" className="hover:text-brand-primary-400">Concept</a></li>
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
                              name: "Forum Discussion",
                              description: "Join the conversation about velvet forks",
                              icon: <Users className="w-6 h-6" />,
                              link: "https://www.ergoforum.org/t/velvet-forks-and-nipopows/3722",
                              external: true
                            },
                            {
                              name: "Research Paper",
                              description: "Read the academic paper on velvet forks",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "https://eprint.iacr.org/2018/087.pdf",
                              external: true
                            },
                            {
                              name: "Developer Resources",
                              description: "Technical documentation and guides",
                              icon: <Terminal className="w-6 h-6" />,
                              link: "/Docs",
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
                  Velvet forks enable protocol evolution without the risks of traditional hard forks
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

          {/* Concept Section */}
          <motion.section 
            id="concept"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Concept
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Understanding velvet forks and their implementation in blockchain protocols
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="concept" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Concept
                  </TabsTrigger>
                  <TabsTrigger value="comparison" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Comparison
                  </TabsTrigger>
                  <TabsTrigger value="implementation" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Implementation
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="concept" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">What are Velvet Forks?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Velvet forks are a type of blockchain upgrade that introduces new features while maintaining 
                          complete backward compatibility. Unlike hard forks that require all nodes to upgrade, or soft 
                          forks that tighten rules, velvet forks allow new functionality to coexist with existing protocols.
                        </p>
                        <p className="mb-4">
                          The key innovation is that non-upgraded nodes can continue to operate normally, validating 
                          transactions and maintaining consensus, while upgraded nodes gain access to additional features. 
                          This eliminates the coordination problems and potential network splits associated with traditional upgrades.
                        </p>
                        <p>
                          Velvet forks are particularly useful for adding optional features like new cryptographic 
                          primitives, enhanced privacy tools, or improved efficiency mechanisms without forcing the 
                          entire network to adopt them immediately.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="comparison" className="mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                          Hard Forks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-neutral-400 space-y-2 text-sm">
                          <li>• Require all nodes to upgrade</li>
                          <li>• Can cause network splits</li>
                          <li>• High coordination costs</li>
                          <li>• Risk of chain wars</li>
                          <li>• Forced adoption timeline</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Lock className="w-5 h-5 text-yellow-400" />
                          Soft Forks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-neutral-400 space-y-2 text-sm">
                          <li>• Tighten existing rules</li>
                          <li>• Backward compatible</li>
                          <li>• Limited to restrictions</li>
                          <li>• Eventual upgrade pressure</li>
                          <li>• Can reduce functionality</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm border-brand-primary-500/30">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          Velvet Forks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-neutral-400 space-y-2 text-sm">
                          <li>• Optional upgrades</li>
                          <li>• No network splits</li>
                          <li>• Gradual adoption</li>
                          <li>• Add new features</li>
                          <li>• Indefinite coexistence</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="implementation" className="mt-8">
                  <div className="space-y-8">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Implementation Strategy</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-neutral-400 leading-relaxed">
                          <p className="mb-4">
                            Velvet forks are implemented by designing new features as optional extensions that don't 
                            interfere with existing consensus rules. The key principles include:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>New features must not invalidate existing valid transactions</li>
                            <li>Non-upgraded nodes must be able to validate all blocks</li>
                            <li>Extended functionality is only available to upgraded nodes</li>
                            <li>Activation mechanisms should be gradual and non-disruptive</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Research & Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-neutral-400 leading-relaxed">
                          <p className="mb-4">
                            Velvet forks are an active area of blockchain research, with applications in:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Sidechains and interoperability protocols</li>
                            <li>Privacy-preserving transaction formats</li>
                            <li>Scalability improvements like payment channels</li>
                            <li>New cryptographic primitives and signature schemes</li>
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
                  Practical applications of velvet forks in blockchain development
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
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
                        <Link 
                          href={useCase.link}
                          className="inline-flex items-center text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
                        >
                          {useCase.linkText}
                        </Link>
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
                  Common questions about velvet forks and their implementation
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
                Ready to Explore Velvet Forks?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Learn more about this innovative approach to blockchain protocol evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.ergoforum.org/t/velvet-forks-and-nipopows/3722" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold">
                    Join Discussion
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                                    <Link href="/docs">
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