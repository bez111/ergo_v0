"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { Code, Shield, Zap, ExternalLink, ArrowRight, ChevronDown, Lock, CheckCircle, Microscope, ShieldCheck, Layers, FileText, KeyRound, Puzzle, Copy, Coins, Eye, ArrowLeftRight, BookOpen, Terminal, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import React from "react"

function CopyButton({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = code
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
        setCopied(true)
      } finally {
        document.body.removeChild(ta)
      }
    } finally {
      setTimeout(() => setCopied(false), 1200)
    }
  }

  return (
    <button
      aria-live="polite"
      onClick={onCopy}
      className="p-1 hover:bg-brand-primary-500/10 rounded transition-colors"
      aria-label={`Copy ${label} code`}
      title="Copy to clipboard"
    >
      <Copy className="w-4 h-4 text-neutral-400 hover:text-brand-primary-400" aria-hidden="true" />
      <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
    </button>
  )
}

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
    title: "Formal Verification Support",
    description: "Supports formal verification and auditability via declarative constraints and first-class crypto primitives",
    icon: Shield,
  },
  {
    title: "eUTXO Security Model",
    description: "The class of reentrancy vulnerabilities common to account-based systems is absent in eUTXO",
    icon: Lock,
  },
  {
    title: "Deterministic Execution",
    description: "Computational complexity is predictable, though network fees are market-driven",
    icon: Zap,
  },
  {
    title: "Native Sigma Protocols",
    description: "First-class support for multi-signature, threshold, and ring-signature constructions",
    icon: Code,
  },
  {
    title: "UTXO Concurrency",
    description: "Parallel transaction processing with batcher patterns for high-contention scenarios",
    icon: CheckCircle,
  },
  {
    title: "Restricted Computation",
    description: "Non-Turing-complete within scripts for safety, yet sequences can express complex behaviors",
    icon: Code,
  },
]

const useCases = [
  "Non-custodial DeFi protocols",
  "Custom multi-signature wallets",
  "Auctions and DAOs",
  "Oracle systems",
  "Privacy tools and mixers",
  "Advanced NFT contracts",
]

export default function ErgoScriptPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("features")



  const faqs = [
    {
      question: "How does ErgoScript prevent re-entrancy attacks?",
      answer: "The eUTXO model removes the class of re-entrancy found in account systems; each transaction consumes specific UTXOs and cannot be 're-entered'. There's no shared global state that can be manipulated during execution.",
    },
    {
      question: "Is ErgoScript Turing-complete like Solidity?",
      answer: "ErgoScript is intentionally not Turing-complete within individual scripts (no loops or recursion) for safety and predictability. However, Turing-complete behaviors are possible through sequences of transactions that can self-reproduce and evolve.",
    },
    {
      question: "What about throughput and scaling for high-demand applications?",
      answer: "The eUTXO model enables parallel transaction processing. For high-contention scenarios like DEXs, batcher/aggregator patterns can collect multiple orders and execute them in batches, effectively scaling throughput while maintaining the security guarantees.",
    },
    {
      question: "Can I build complex DeFi applications with ErgoScript?",
      answer: "Yes. ErgoScript supports sophisticated financial instruments including DEXs, stablecoins, lending protocols, and advanced NFT contracts. The declarative model and native cryptographic primitives often make complex protocols simpler to implement and audit than on account-based systems.",
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
              name: "ErgoScript",
              item: "https://ergoblockchain.org/technology/ergoscript"
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
              { label: "ErgoScript", href: "/technology/ergoscript" }
            ]}
            className="mb-8"
          />
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 motion-reduce:animate-none">
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
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  ErgoScript
                </h1>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Mathematical-by-design smart contracts on an eUTXO ledger
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    No shared global state, first-class Sigma protocols, verifiable execution. Build secure applications that are predictable by design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/Docs">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Start Building
                  </Button>
                    </Link>
                    <a href="https://scastie.scala-lang.org/ErgoPlayground" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                  >
                      View Examples
                                    </Button>
                    </a>
                  </div>
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
                              name: "Try Online Playground",
                              description: "Write and test ErgoScript in your browser",
                              icon: <Terminal className="w-6 h-6" />,
                              link: "https://scastie.scala-lang.org/ErgoPlayground",
                              external: true
                            },
                            {
                              name: "Read Documentation",
                              description: "Comprehensive guides and API references",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "/Docs",
                              external: false
                            },
                            {
                              name: "Join Community",
                              description: "Get help from experienced developers",
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

          {/* Rest of the content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col gap-16 md:gap-24">
              {/* Key Features Section */}
              <motion.section 
                className="px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
              >
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
              Key Features
            </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      className="motion-reduce:transform-none motion-reduce:transition-none"
                  >
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-brand-primary-500/50 transition-colors h-full">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                            <feature.icon className="w-6 h-6 text-brand-primary-400" />
                      </div>
                          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                          <p className="text-neutral-200 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
            </motion.section>

        {/* Tabs Section */}
        <FadeIn delay={0.6}>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="flex w-full gap-2 bg-transparent p-0 mb-6">
              <TabsTrigger
                value="features"
                    className="flex-1 rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-neutral-300 hover:bg-neutral-900 data-[state=active]:border-orange-500/50 data-[state=active]:text-orange-400 data-[state=active]:bg-orange-500/10"
              >
                    Deep Dive
              </TabsTrigger>
              <TabsTrigger
                value="usecases"
                    className="flex-1 rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-neutral-300 hover:bg-neutral-900 data-[state=active]:border-orange-500/50 data-[state=active]:text-orange-400 data-[state=active]:bg-orange-500/10"
              >
                Use Cases
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                    className="flex-1 rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-neutral-300 hover:bg-neutral-900 data-[state=active]:border-orange-500/50 data-[state=active]:text-orange-400 data-[state=active]:bg-orange-500/10"
              >
                Resources
              </TabsTrigger>
            </TabsList>

                {/* Fixed container for all tab contents */}
                <div className="mt-6 min-h-0 md:min-h-[420px]">
                  <TabsContent value="features" className="m-0">
                    <div className="grid lg:grid-cols-2 gap-6 h-full">
                {/* Security Features Card */}
                      <div>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                                <Shield className="w-6 h-6 text-brand-primary-400" />
                        </div>
                              <CardTitle className="text-2xl font-bold text-white">Security First</CardTitle>
                      </div>
                            <p className="text-neutral-300 leading-relaxed">
                        Built from the ground up with security as the primary concern, eliminating entire classes of
                        vulnerabilities.
                      </p>
                    </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-3">
                        {[
                          {
                            title: "Formal Verification Support",
                                  description: "Declarative constraints enable external verification tools and auditing",
                                  icon: Microscope,
                          },
                          {
                                  title: "eUTXO Security Model",
                                  description: "No shared global state eliminates reentrancy vulnerability class",
                                  icon: ShieldCheck,
                          },
                          {
                                  title: "Native Sigma Protocols",
                                  description: "First-class cryptographic primitives for multi-party signatures",
                                  icon: Zap,
                          },
                        ].map((feature) => (
                                <div
                            key={feature.title}
                                  className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-all duration-300"
                          >
                                  <feature.icon className="w-5 h-5 text-brand-primary-400 mt-0.5" aria-hidden="true" />
                            <div>
                              <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                    <p className="text-neutral-400 text-sm">{feature.description}</p>
                            </div>
                                </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                      </div>

                {/* Developer Experience Card */}
                      <div>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                                <Code className="w-6 h-6 text-brand-primary-400" />
                        </div>
                              <CardTitle className="text-2xl font-bold text-white">Developer Experience</CardTitle>
                      </div>
                            <p className="text-neutral-300 leading-relaxed">
                        Designed for clarity and ease of use, making complex cryptographic operations accessible to all
                        developers.
                      </p>
                    </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-3">
                        {[
                          {
                                  title: "Interactive Playground",
                                  description: "Test contracts instantly in your browser without setup",
                                  icon: FileText,
                          },
                          {
                                  title: "Rich Tooling Ecosystem",
                                  description: "SDKs for Java, JavaScript, Python, and more",
                                  icon: KeyRound,
                          },
                          {
                                  title: "Extensive Examples",
                                  description: "Learn from production-ready contract templates",
                                  icon: Puzzle,
                          },
                        ].map((feature) => (
                                <div
                            key={feature.title}
                                  className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-all duration-300"
                          >
                                  <feature.icon className="w-5 h-5 text-brand-primary-400 mt-0.5" aria-hidden="true" />
                            <div>
                              <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                    <p className="text-neutral-400 text-sm">{feature.description}</p>
                            </div>
                                </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
              </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="usecases" className="m-0">
                    <div className="grid lg:grid-cols-2 gap-6 h-full">
                      {/* DeFi & Finance Card */}
                      <div>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                                <Coins className="w-6 h-6 text-brand-primary-400" />
                              </div>
                              <CardTitle className="text-2xl font-bold text-white">DeFi & Finance</CardTitle>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                              Build secure financial applications with predictable costs and formal verification.
                    </p>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-2">
                              {[
                                { name: "Non-custodial DeFi protocols", icon: Shield },
                                { name: "Custom multi-signature wallets", icon: KeyRound },
                                { name: "Decentralized oracle networks", icon: Eye },
                                { name: "Stablecoins and native tokens", icon: Coins },
                              ].map((useCase, index) => (
                                <div
                                  key={useCase.name}
                                  className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-colors"
                                >
                                  <useCase.icon className="w-5 h-5 text-brand-primary-400 mt-0.5" />
                                  <span className="text-neutral-200 text-sm">{useCase.name}</span>
                                </div>
                              ))}
                    </div>
                  </CardContent>
                </Card>
                      </div>

                      {/* Privacy & Governance Card */}
                      <div>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                                <Lock className="w-6 h-6 text-brand-primary-400" />
                              </div>
                              <CardTitle className="text-2xl font-bold text-white">Privacy & Governance</CardTitle>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                              Leverage advanced cryptography for privacy-preserving and governance solutions.
                            </p>
                </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-2">
                              {[
                                { name: "Privacy tools and mixers (check legal status in your jurisdiction)", icon: Eye },
                                { name: "DAOs & governance systems", icon: Users },
                                { name: "Advanced NFT contracts", icon: Puzzle },
                                { name: "SPV/NIPoPoW-based protocols", icon: ArrowLeftRight },
                              ].map((useCase, index) => (
                                <div
                                  key={useCase.name}
                                  className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-colors"
                      >
                                  <useCase.icon className="w-5 h-5 text-brand-primary-400 mt-0.5" />
                                  <span className="text-neutral-200 text-sm">{useCase.name}</span>
                                </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
                      </div>
                    </div>
            </TabsContent>

                  <TabsContent value="resources" className="m-0">
                    <div className="grid lg:grid-cols-2 gap-6 h-full">
                      {/* Learning Resources Card */}
                      <div>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-brand-primary-400" />
                              </div>
                              <CardTitle className="text-2xl font-bold text-white">Learning Resources</CardTitle>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                              Start your ErgoScript journey with interactive tutorials and comprehensive documentation.
                            </p>
                  </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-2">
                              {[
                                { name: "ErgoScript Playground", url: "https://scastie.scala-lang.org/ErgoPlayground", external: true },
                                { name: "Official Documentation", url: "https://docs.ergoplatform.com/ergo-script/", external: true },
                                { name: "Code Examples & Tutorials", url: "/Docs/developers/tutorials", external: false },
                                { name: "Community Guides", url: "/learn/guides", external: false },
                              ].map((resource, index) => (
                                <div key={resource.name}>
                                  <Link href={resource.url} {...(resource.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                                    <div className="flex items-center gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-colors cursor-pointer">
                                      <BookOpen className="w-5 h-5 text-brand-primary-400" />
                                      <span className="text-neutral-200 text-sm flex-1">{resource.name}</span>
                                      {resource.external ? (
                                        <ExternalLink className="w-4 h-4 text-neutral-400" />
                                      ) : (
                                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                                      )}
                                    </div>
                    </Link>
                                </div>
                              ))}
                            </div>
                  </CardContent>
                </Card>
                      </div>

                      {/* Developer Tools Card */}
                      <div>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                                <Terminal className="w-6 h-6 text-brand-primary-400" />
                              </div>
                              <CardTitle className="text-2xl font-bold text-white">Developer Tools</CardTitle>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                              Essential tools and SDKs for building with ErgoScript in your preferred environment.
                            </p>
                  </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-2">
                              {[
                                { name: "Appkit for JVM & Android", url: "https://github.com/ergoplatform/ergo-appkit", external: true },
                                { name: "ErgoScript Compiler", url: "https://github.com/ergoplatform/sigmastate-interpreter", external: true },
                                { name: "SDKs & APIs", url: "/Docs/developers/tooling", external: false },
                                { name: "Node.js Library", url: "https://github.com/ergoplatform/ergo-ts", external: true },
                              ].map((tool, index) => (
                                <div key={tool.name}>
                                  <Link href={tool.url} {...(tool.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                                    <div className="flex items-center gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-colors cursor-pointer">
                                      <Terminal className="w-5 h-5 text-brand-primary-400" />
                                      <span className="text-neutral-200 text-sm flex-1">{tool.name}</span>
                                      {tool.external ? (
                                        <ExternalLink className="w-4 h-4 text-neutral-400" />
                                      ) : (
                                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                                      )}
                                    </div>
                    </Link>
                                </div>
                              ))}
                            </div>
                  </CardContent>
                </Card>
                      </div>
              </div>
            </TabsContent>
                </div>
          </Tabs>
        </FadeIn>

        {/* Comparison Section */}
        <FadeIn delay={0.7}>
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
              How ErgoScript Compares
            </h2>

                  <div className="grid lg:grid-cols-2 gap-6 mb-12">
                  {/* ErgoScript's Key Advantages Card */}
                  <div>
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                            <Shield className="w-6 h-6 text-brand-primary-400" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-white">ErgoScript's Key Advantages</CardTitle>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          Built from the ground up with security and mathematical precision as core principles.
                        </p>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-3">
                          {[
                            {
                              title: "eUTXO – Extended Bitcoin Model",
                              description: "Like Bitcoin Script, works with outputs, not accounts. Unlike BTC, scripts are much more powerful for DeFi, DAO, and complex contracts.",
                              icon: Layers
                            },
                            {
                              title: "No Shared State, No Global Variables",
                              description: "Eliminates the reentrancy vulnerability class; mitigates some MEV patterns, but does not fully prevent frontrunning.",
                              icon: ShieldCheck
                            },
                            {
                              title: "Cryptography-first Design",
                              description: "Sigma protocols and zero-knowledge proofs are native. No need for external libraries or complex implementations.",
                              icon: Lock
                            },
                            {
                              title: "Predictable Execution Costs",
                              description: "Script execution cost is statically bounded; the final network fee is still market-driven (mempool conditions).",
                              icon: Zap
                            }
                          ].map((advantage, index) => (
                            <div
                              key={advantage.title}
                              className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-colors"
                            >
                              <advantage.icon className="w-5 h-5 text-brand-primary-400 mt-0.5" aria-hidden="true" />
                              <div>
                                <h4 className="font-semibold text-white mb-1">{advantage.title}</h4>
                                <p className="text-neutral-400 text-sm">{advantage.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Philosophy & Design Card */}
                  <div>
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-primary-500/20 rounded-lg flex items-center justify-center">
                            <Code className="w-6 h-6 text-brand-primary-400" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-white">Philosophy & Design</CardTitle>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          ErgoScript's design philosophy prioritizes safety, predictability, and mathematical rigor.
                        </p>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-3">
                          {[
                            {
                              title: "Restricted Computation",
                              description: "Intentionally limited to prevent infinite loops and ensure all contracts terminate predictably.",
                              icon: Shield
                            },
                            {
                              title: "Declarative Scripting",
                              description: "Express what you want to achieve rather than how to achieve it. More readable and less error-prone.",
                              icon: FileText
                            },
                            {
                              title: "\"Crypto Notepad\"",
                              description: "Think of contracts as mathematical proofs rather than imperative programs. Safer and more verifiable.",
                              icon: Puzzle
                            },
                            {
                              title: "Mathematical Verification",
                              description: "Formal methods and mathematical proofs ensure your contracts work exactly as intended.",
                              icon: Microscope
                            }
                          ].map((concept, index) => (
                            <div
                              key={concept.title}
                              className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-brand-primary-500/10 transition-colors"
                            >
                              <concept.icon className="w-5 h-5 text-brand-primary-400 mt-0.5" aria-hidden="true" />
                              <div>
                                <h4 className="font-semibold text-white mb-1">{concept.title}</h4>
                                <p className="text-neutral-400 text-sm">{concept.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

            {/* Comparison Table */}
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl mb-12 overflow-hidden">
              <CardHeader>
                    <CardTitle className="text-white text-center">
                  ErgoScript vs. Other Smart Contract Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                      <caption className="sr-only">Language comparison</caption>
                    <thead>
                          <tr className="border-b border-neutral-700">
                            <th className="text-left p-4 font-semibold text-brand-primary-400">Feature</th>
                            <th className="text-left p-4 font-semibold text-brand-primary-400">ErgoScript (Ergo)</th>
                        <th className="text-left p-4 font-semibold text-blue-400">Solidity (Ethereum)</th>
                        <th className="text-left p-4 font-semibold text-purple-400">Plutus (Cardano)</th>
                        <th className="text-left p-4 font-semibold text-yellow-400">Bitcoin Script</th>
                        <th className="text-left p-4 font-semibold text-green-400">Move (Aptos/Sui)</th>
                      </tr>
                    </thead>
                        <tbody className="text-neutral-300">
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                        <th scope="row" className="p-4 font-medium">Platform Type</th>
                        <td className="p-4">eUTXO</td>
                        <td className="p-4">Account-based (EVM)</td>
                        <td className="p-4">eUTXO</td>
                        <td className="p-4">UTXO</td>
                        <td className="p-4">Account-based</td>
                      </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                        <th scope="row" className="p-4 font-medium">Language Base</th>
                        <td className="p-4">Sigma-based (Scala-like)</td>
                        <td className="p-4">JS/C++-like</td>
                        <td className="p-4">Haskell, DSL</td>
                        <td className="p-4">Forth-like, stack-based</td>
                        <td className="p-4">Rust-like</td>
                      </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                        <th scope="row" className="p-4 font-medium">Turing-complete</th>
                        <td className="p-4">
                              <span className="text-brand-primary-400">No (restricted for security)</span>
                        </td>
                        <td className="p-4">Yes (with gas limits)</td>
                        <td className="p-4">No (highly restricted)</td>
                        <td className="p-4">No</td>
                        <td className="p-4">Yes</td>
                      </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                            <th scope="row" className="p-4 font-medium">Type Safety</th>
                            <td className="p-4">
                              <span className="text-green-400">Strong typing system</span>
                            </td>
                            <td className="p-4">
                              <span className="text-yellow-400">Good, but pitfalls remain</span>
                            </td>
                            <td className="p-4">
                              <span className="text-green-400">Very high (Haskell-based)</span>
                            </td>
                            <td className="p-4">
                              <span className="text-green-400">Simple but safe</span>
                            </td>
                            <td className="p-4">
                              <span className="text-green-400">Very high (Rust-based)</span>
                            </td>
                          </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                        <th scope="row" className="p-4 font-medium">Security</th>
                        <td className="p-4">
                          <span className="text-green-400">High (no reentrancy, no shared state)</span>
                        </td>
                        <td className="p-4">
                          <span className="text-red-400">Complex (reentrancy, overflows)</span>
                        </td>
                        <td className="p-4">
                          <span className="text-green-400">Very high (strong types)</span>
                        </td>
                        <td className="p-4">
                          <span className="text-green-400">Very high (minimal features)</span>
                        </td>
                        <td className="p-4">Above average</td>
                      </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                        <th scope="row" className="p-4 font-medium">Custom Cryptography</th>
                        <td className="p-4">
                              <span className="text-green-400">Native Sigma protocols</span>
                        </td>
                        <td className="p-4">
                              <span className="text-yellow-400">External libraries</span>
                        </td>
                        <td className="p-4">
                              <span className="text-yellow-400">Limited support</span>
                        </td>
                            <td className="p-4">
                              <span className="text-red-400">Minimal</span>
                            </td>
                            <td className="p-4">
                              <span className="text-yellow-400">Moderate</span>
                            </td>
                      </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                            <th scope="row" className="p-4 font-medium">Formal Verification</th>
                        <td className="p-4">
                              <span className="text-green-400">Strong support</span>
                        </td>
                        <td className="p-4">
                              <span className="text-yellow-400">External tools</span>
                        </td>
                        <td className="p-4">
                              <span className="text-green-400">Strong support</span>
                        </td>
                            <td className="p-4">
                              <span className="text-yellow-400">Limited</span>
                            </td>
                            <td className="p-4">
                              <span className="text-yellow-400">Moderate</span>
                            </td>
                          </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                            <th scope="row" className="p-4 font-medium">Learning Curve</th>
                            <td className="p-4">
                              <span className="text-green-400">Gentle</span>
                            </td>
                            <td className="p-4">
                              <span className="text-yellow-400">Steep</span>
                            </td>
                            <td className="p-4">
                              <span className="text-red-400">Very steep</span>
                            </td>
                            <td className="p-4">
                              <span className="text-green-400">Simple but limited</span>
                            </td>
                            <td className="p-4">
                              <span className="text-yellow-400">Moderate</span>
                            </td>
                          </tr>
                          <tr className="border-b border-neutral-800 hover:bg-neutral-800/30">
                            <th scope="row" className="p-4 font-medium">Transaction Costs</th>
                            <td className="p-4">
                              <span className="text-green-400">Predictable, low</span>
                            </td>
                            <td className="p-4">
                              <span className="text-red-400">Variable, can be high</span>
                            </td>
                            <td className="p-4">
                              <span className="text-yellow-400">Predictable, moderate</span>
                            </td>
                            <td className="p-4">
                              <span className="text-green-400">Low, simple</span>
                            </td>
                            <td className="p-4">
                              <span className="text-green-400">Low, predictable</span>
                            </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

                {/* Code Example Comparison - Simplified */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12"
                >
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl overflow-hidden">
                    <CardHeader className="text-center">
                      <CardTitle className="text-white">
                        Code Comparison: 2-of-3 Multisig
                  </CardTitle>
                      <p className="text-neutral-300 text-sm">
                        See how ErgoScript's mathematical approach compares to traditional smart contracts
                      </p>
                </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="p-6 border-r border-neutral-700">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-orange-400">ErgoScript</h3>
                            <CopyButton code={'atLeast(2, Coll(proveDlog(A), proveDlog(B), proveDlog(C)))'} label="ErgoScript" />
                  </div>
                          <pre className="bg-neutral-950/80 p-4 rounded-lg text-sm font-mono text-neutral-200 overflow-x-auto">
                            <code>atLeast(2, Coll(
  proveDlog(A),
  proveDlog(B), 
  proveDlog(C)
))</code>
                          </pre>
                          <p className="text-xs text-neutral-400 mt-2 italic">
                            Mathematical proof: "At least 2 of these 3 signatures must be valid"
                    </p>
                  </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-blue-400">Solidity</h3>
                            <CopyButton
                              code={`require(validSignatures >= 2, "Need 2+ sigs");\nfor (uint i = 0; i < signers.length; i++) {\n  if (verify(signers[i], signature[i])) {\n    validSignatures++;\n  }\n}`}
                              label="Solidity"
                            />
                  </div>
                          <pre className="bg-neutral-950/80 p-4 rounded-lg text-sm font-mono text-neutral-200 overflow-x-auto">
                            {(() => {
                              const solidity = `require(validSignatures >= 2, "Need 2+ sigs");\nfor (uint i = 0; i < signers.length; i++) {\n  if (verify(signers[i], signature[i])) {\n    validSignatures++;\n  }\n}`;
                              return <code>{solidity}</code>;
                            })()}
                          </pre>
                          <p className="text-xs text-neutral-400 mt-2 italic">
                            Imperative logic with loops, state variables, and manual validation
                    </p>
                  </div>
                  </div>
                </CardContent>
              </Card>
                </motion.div>
          </div>
        </FadeIn>

            {/* FAQ Section */}
            <FadeIn delay={0.9}>
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card
                      key={index}
                      className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl"
                    >
                      <Collapsible
                        open={openFAQ === index}
                        onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                      >
                        <CollapsibleTrigger asChild>
                          <button className="w-full">
                            <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                            <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                            <ChevronDown
                                aria-hidden="true"
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                openFAQ === index ? "rotate-180" : ""
                              }`}
                            />
                          </CardContent>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.8}>
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                  <CardContent className="text-center py-16">
                    <h3 className="text-4xl font-bold mb-6 text-white">
                Ready to Start Building?
              </h3>
                    <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Explore ErgoScript and start developing secure smart contracts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="https://scastie.scala-lang.org/ErgoPlayground" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                    Try Playground
                  </Button>
                </Link>
                      <Link href="/Docs">
                  <Button
                    variant="outline"
                          className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                  >
                    View Documentation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
            </div>
      </div>
        </motion.div>
    </div>
    </>
  )
}
