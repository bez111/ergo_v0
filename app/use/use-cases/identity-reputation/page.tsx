"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Brain, Shield, UserCheck, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, Award, Fingerprint, Code, Terminal, BookOpen, ChevronDown } from "lucide-react"
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
    title: "Self-Sovereign Identity",
    description: "Control your own identity without relying on centralized authorities",
    icon: Fingerprint,
  },
  {
    title: "Decentralized Identifiers",
    description: "DIDs that work across platforms and applications",
    icon: UserCheck,
  },
  {
    title: "Reputation Tokens",
    description: "Non-transferable tokens that represent earned reputation",
    icon: Award,
  },
  {
    title: "Sybil Resistance",
    description: "Prevent fake identities and ensure one-person-one-vote",
    icon: Shield,
  },
  {
    title: "Verifiable Credentials",
    description: "Cryptographic proofs of identity attributes and achievements",
    icon: CheckCircle,
  },
  {
    title: "Privacy-Preserving",
    description: "Selective disclosure of identity information using zero-knowledge proofs",
    icon: Lock,
  },
]

const useCases = [
  {
    name: "DAO Governance",
    description: "Reputation-weighted voting for decentralized organizations",
    status: "Concept",
    features: ["Merit-based voting", "Delegation systems", "Contribution tracking"],
  },
  {
    name: "DeFi Credit Scoring",
    description: "On-chain credit history for under-collateralized loans",
    status: "Research",
    features: ["Payment history", "Risk assessment", "Credit limits"],
  },
  {
    name: "Professional Credentials",
    description: "Verifiable professional certifications and achievements",
    status: "Planned",
    features: ["Skill verification", "Work history", "Peer endorsements"],
  },
]

export default function IdentityReputationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "What is self-sovereign identity?",
      answer: "Self-sovereign identity (SSI) gives individuals control over their digital identity without depending on centralized authorities. Users own their identity data and choose what to share and with whom."
    },
    {
      question: "How do reputation tokens work?",
      answer: "Reputation tokens are non-transferable NFTs that represent earned achievements or trust. They cannot be sold or transferred, ensuring reputation must be earned, not bought."
    },
    {
      question: "What are DIDs on Ergo?",
      answer: "Decentralized Identifiers (DIDs) on Ergo are unique identifiers anchored on the blockchain. They enable verifiable, self-sovereign digital identity that works across different platforms and applications."
    },
    {
      question: "How is privacy maintained?",
      answer: "Ergo uses zero-knowledge proofs and selective disclosure to maintain privacy. Users can prove attributes about their identity (like being over 18) without revealing the actual data."
    },
    {
      question: "Can reputation be used for DeFi?",
      answer: "Yes! On-chain reputation can enable under-collateralized lending, better interest rates, and access to exclusive DeFi services based on proven track record rather than just collateral."
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
              name: "Identity & Reputation",
              item: "https://ergoblockchain.org/use/use-cases/identity-reputation"
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
              { label: "Identity & Reputation", href: "/use/use-cases/identity-reputation" }
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
                    Identity & Reputation
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Self-sovereign identity & Web3 reputation
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Decentralized identifiers (DID), Sybil resistance, reputation systems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/docs/ecosystem">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/docs/developers">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                      >
                        Developer Docs
                      </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">Identity features</a></li>
                      <li><a href="#use-cases" className="hover:text-orange-400">Use Cases</a></li>
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
                              name: "Identity Guide",
                              description: "Learn about SSI on Ergo",
                              icon: <Brain className="w-6 h-6" />,
                              link: "/docs/introduction/privacy",
                              external: false
                            },
                            {
                              name: "DID Standards",
                              description: "W3C DID specifications",
                              icon: <UserCheck className="w-6 h-6" />,
                              link: "https://www.w3.org/TR/did-core/",
                              external: true
                            },
                            {
                              name: "Build Identity Apps",
                              description: "Developer resources",
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
                  Identity Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Building blocks for decentralized identity
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
                  Technical Architecture
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  How identity systems work on Ergo
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="reputation" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Reputation
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Code Example
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Identity System</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Ergo enables decentralized identity through:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Cryptographic key pairs for identity</li>
                          <li>On-chain DIDs and credentials</li>
                          <li>Zero-knowledge proofs for privacy</li>
                          <li>Non-transferable reputation tokens</li>
                          <li>Verifiable credential issuance</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reputation" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Reputation System</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Earning Reputation</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Complete verified actions</li>
                              <li>• Receive peer endorsements</li>
                              <li>• Contribute to protocols</li>
                              <li>• Time-based accumulation</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Using Reputation</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Weighted voting power</li>
                              <li>• Access to services</li>
                              <li>• Better loan terms</li>
                              <li>• Trust signaling</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Sybil Resistance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-orange-300 overflow-x-auto">
                            <code>{`Methods for Sybil resistance:

1. Proof of Humanity
2. Social graph analysis
3. Economic stake requirements
4. Time-locked reputation
5. Unique human verification`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Reputation Token Example</CardTitle>
                      <p className="text-neutral-400">Non-transferable reputation NFT</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // Non-transferable reputation token
  val reputationNFT = SELF.tokens(0)._1
  val originalHolder = SELF.R4[Coll[Byte]].get
  
  // Reputation metadata
  val reputationScore = SELF.R5[Long].get
  val earnedDate = SELF.R6[Int].get
  val category = SELF.R7[Coll[Byte]].get
  
  // Ensure non-transferability
  val recipientKey = OUTPUTS(0).propositionBytes
  val isOriginalHolder = recipientKey == originalHolder
  
  // Allow burning but not transfer
  val isBurning = OUTPUTS.size == 0
  
  sigmaProp(
    isOriginalHolder || isBurning
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

          {/* Use Cases */}
          <motion.section 
            id="use-cases"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Identity Use Cases
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Applications for decentralized identity
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.name}
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
                          <CardTitle className="text-white">{useCase.name}</CardTitle>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            useCase.status === 'Concept' 
                              ? 'bg-purple-500/20 text-purple-400' 
                              : useCase.status === 'Research'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {useCase.status}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-neutral-400">{useCase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.features.map((feature) => (
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
                  Common questions about identity on Ergo
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
                Ready to Build Identity Solutions?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Create decentralized identity and reputation systems on Ergo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/developers">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Start Building
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/docs/introduction/privacy">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400">
                    Learn More
                    <BookOpen className="ml-2 w-4 h-4" />
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