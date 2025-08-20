"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Shield, Lock, Eye, EyeOff, ExternalLink, ArrowRight, Key, UserX, Zap, Layers, Code, Terminal, BookOpen, ChevronDown, ShieldCheck } from "lucide-react"
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
    title: "Non-Custodial Mixers",
    description: "Mix coins without trusting third parties using ErgoMixer's advanced protocols",
    icon: UserX,
  },
  {
    title: "Stealth Addresses",
    description: "One-time addresses for enhanced transaction privacy and unlinkability",
    icon: EyeOff,
  },
  {
    title: "Zero-Knowledge Proofs",
    description: "Prove statements without revealing underlying data using Sigma protocols",
    icon: Key,
  },
  {
    title: "Ring Signatures",
    description: "Sign transactions as a member of a group without revealing which member",
    icon: Shield,
  },
  {
    title: "Confidential Assets",
    description: "Hide asset types and amounts while maintaining verifiability",
    icon: Lock,
  },
  {
    title: "Privacy Pools",
    description: "Join privacy-preserving pools for enhanced anonymity sets",
    icon: Layers,
  },
]

const existingProjects = [
  {
    name: "ErgoMixer",
    description: "Non-custodial, non-interactive mixer for enhanced privacy",
    status: "Live",
    features: ["CoinJoin++", "No trusted setup", "Tor support"],
    link: "https://ergomixer.com",
  },
  {
    name: "Stealth Addresses",
    description: "One-time payment addresses for transaction privacy",
    status: "Live",
    features: ["Unlinkable payments", "Receiver privacy", "SPV compatible"],
    link: "https://github.com/ergoplatform/eips/blob/master/eip-0015.md",
  },
  {
    name: "SigmaUSD Privacy",
    description: "Privacy features for stablecoin transactions",
    status: "In Development",
    features: ["Private minting", "Shielded transfers", "Confidential balances"],
    link: "#",
  },
]

export default function PrivacyConfidentialityPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const faqs = [
    {
      question: "How does ErgoMixer provide privacy?",
      answer: "ErgoMixer uses a CoinJoin++ protocol that allows users to mix their coins with others without trusting a central party. It leverages Ergo's Sigma protocols to create complex spending conditions that ensure privacy while maintaining security."
    },
    {
      question: "What are Sigma protocols?",
      answer: "Sigma protocols are a class of zero-knowledge proofs that allow proving knowledge of a secret without revealing it. Ergo's ErgoScript natively supports Sigma protocols, enabling complex privacy-preserving applications without trusted setups."
    },
    {
      question: "How do stealth addresses work on Ergo?",
      answer: "Stealth addresses allow receivers to publish a single address while senders generate unique one-time addresses for each payment. This breaks the link between the published address and on-chain transactions, enhancing receiver privacy."
    },
    {
      question: "Is Ergo privacy optional or mandatory?",
      answer: "Ergo provides optional privacy features. Users can choose when to use privacy tools like ErgoMixer or stealth addresses based on their needs, maintaining flexibility while ensuring regulatory compliance when needed."
    },
    {
      question: "What makes Ergo's privacy different from other chains?",
      answer: "Ergo's eUTXO model naturally provides better privacy than account-based systems. Combined with native Sigma protocols, optional privacy tools, and no trusted setups, Ergo offers a unique balance of privacy, transparency, and compliance."
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
              name: "Privacy & Confidentiality",
              item: "https://ergoblockchain.org/use/use-cases/privacy-confidentiality"
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
              { label: "Privacy & Confidentiality", href: "/use/use-cases/privacy-confidentiality" }
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
                    Privacy & Confidentiality
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Financial privacy in an increasingly surveilled world
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Non-custodial mixers, stealth addresses, and zero-knowledge proofs for complete privacy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://ergomixer.com" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Try ErgoMixer
                      </Button>
                    </a>
                    <Link href="/docs/introduction/privacy">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                      >
                        Privacy Guide
                      </Button>
                    </Link>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">Privacy features</a></li>
                      <li><a href="#projects" className="hover:text-orange-400">Live Projects</a></li>
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
                              name: "Use ErgoMixer",
                              description: "Start mixing coins for privacy",
                              icon: <Shield className="w-6 h-6" />,
                              link: "https://ergomixer.com",
                              external: true
                            },
                            {
                              name: "Privacy Guide",
                              description: "Learn privacy best practices",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "/docs/introduction/privacy-guide",
                              external: false
                            },
                            {
                              name: "Developer Docs",
                              description: "Build privacy applications",
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
                  Privacy Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Comprehensive privacy toolkit for financial sovereignty
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
                  How privacy technologies work on Ergo
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="ergomixer" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    ErgoMixer
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Code Example
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Privacy Technologies</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          Ergo provides multiple layers of privacy through cryptographic protocols
                          and smart contract capabilities:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Sigma protocols for zero-knowledge proofs</li>
                          <li>Ring signatures for signer ambiguity</li>
                          <li>Stealth addresses for receiver privacy</li>
                          <li>CoinJoin++ for transaction mixing</li>
                          <li>Confidential assets for amount privacy</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ergomixer" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">ErgoMixer Protocol</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">How It Works</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Users create mixing requests</li>
                              <li>• Funds locked in mixing contracts</li>
                              <li>• Ring signatures hide sender</li>
                              <li>• Mixed outputs to new addresses</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Key Features</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• No trusted coordinator</li>
                              <li>• No interaction required</li>
                              <li>• Configurable anonymity sets</li>
                              <li>• Tor/VPN compatible</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Mixing Process</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-orange-300 overflow-x-auto">
                            <code>{`1. Create mixing request with:
   - Amount to mix
   - Number of rounds
   - Fee parameters

2. Generate stealth addresses

3. Submit to mixing pool

4. Wait for anonymity set

5. Withdraw to new addresses`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Sigma Protocol Example</CardTitle>
                      <p className="text-neutral-400">Zero-knowledge proof for mixing</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // Ring signature for privacy
  val ring = Coll(
    proveDlog(g1),
    proveDlog(g2),
    proveDlog(g3)
  )
  
  // Prove knowledge of one secret
  val sigmaOr = atLeast(
    1, 
    ring
  )
  
  // Stealth address generation
  val stealthPubKey = dlogGroup.exp(
    SELF.R4[GroupElement].get,
    blake2b256(INPUTS(0).id)
  )
  
  // Verify conditions
  sigmaProp(
    sigmaOr && 
    OUTPUTS(0).propositionBytes == stealthPubKey
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
                  Privacy Projects
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Privacy-preserving applications on Ergo
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
                            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            Learn More
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
                  Common questions about privacy on Ergo
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
                Ready for Financial Privacy?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Start using privacy tools on Ergo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://ergomixer.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Try ErgoMixer
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Link href="/docs/introduction/privacy">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400">
                    Privacy Guide
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