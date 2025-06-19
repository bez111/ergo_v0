"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Code, Shield, Zap, ExternalLink, ArrowRight, ChevronDown, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const features = [
  {
    icon: Shield,
    title: "Formal Verification",
    description: "Mathematical proofs, not trust. Every condition is explicit and verifiable.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Code,
    title: "Logic-First Design",
    description: "No hidden side-effects or gotchas. Clean, predictable smart contract execution.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Zap,
    title: "Sigma Protocols",
    description: "Native privacy features with ring signatures and zero-knowledge proofs.",
    color: "from-purple-500/20 to-purple-500/5",
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

const codeExample = `{
  // Multi-signature wallet: 2 out of 3 keys required
  sigmaProp(
    (pkAlice && pkBob) || 
    (pkAlice && pkCharlie) || 
    (pkBob && pkCharlie)
  )
}`

export default function ErgoScriptPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is ErgoScript's main advantage over other languages like Solidity?",
      answer: "Predictability and security. ErgoScript is designed to eliminate entire classes of vulnerabilities that have plagued other platforms (like re-entrancy attacks). There are no hidden traps or unexpected behaviors in the code. It's a language where what you see is exactly what you get.",
    },
    {
      question: "Do I need to be a coding guru to build with ErgoScript?",
      answer: "Not at all. If you understand \"if-then\" logic, you're already halfway there. ErgoScript is intentionally made to be simpler and more logical. It helps developers avoid mistakes rather than creating new opportunities for them to make them. It's the shortest path from an idea to a working and secure dApp.",
    },
    {
      question: "Why not just use Solidity since it's so popular?",
      answer: "Solidity's popularity comes at a price—complexity that has led to billions of dollars in hacks. ErgoScript is the seatbelt for your smart contracts. It deliberately limits certain features to prevent catastrophic errors. Fewer \"footguns,\" more peace of mind in the code's reliability.",
    },
    {
      question: "Can I build complex projects like DeFi and NFTs with ErgoScript?",
      answer: "Absolutely. ErgoScript is powerful enough to create the most sophisticated financial instruments, including DEXs, stablecoins, lending protocols, and complex NFT projects. Its eUTXO model allows for unique and efficient solutions that are difficult or impossible to build on other platforms.",
    },
  ]

  return (
    <>
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is ErgoScript?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ErgoScript is a powerful smart contract language designed specifically for the eUTXO model. It provides formal verification capabilities, eliminates re-entrancy attacks, and includes advanced cryptographic primitives for building secure DeFi applications."
              }
            },
            {
              "@type": "Question", 
              name: "How does ErgoScript prevent re-entrancy attacks?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ErgoScript prevents re-entrancy attacks through its eUTXO model design. Each transaction consumes UTXOs and creates new ones, making it impossible for a contract to be called multiple times during execution. This eliminates a major security vulnerability common in account-based systems."
              }
            },
            {
              "@type": "Question",
              name: "What are the advantages of ErgoScript over other smart contract languages?",
              acceptedAnswer: {
                "@type": "Answer", 
                text: "ErgoScript offers formal verification capabilities, built-in re-entrancy protection, advanced cryptographic primitives, and is specifically designed for the eUTXO model. It enables parallel transaction processing and provides better security guarantees than traditional account-based smart contract languages."
              }
            }
          ]
        }}
      />
      
      <div className="min-h-screen relative">
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

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-cyan-500/10" />
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                    SMART CONTRACT LANGUAGE
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                    ErgoScript
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                    Secure, Verifiable Smart Contracts
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                    ErgoScript combines mathematical certainty with practical simplicity. Build DeFi applications that are secure by design, not by accident.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                      Start Building
                    </Button>
                    <Button
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                    >
                      View Examples
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl p-8">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                          Key Features
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Formal Verification",
                              description: "Mathematically prove your contracts are correct",
                              icon: <Shield className="w-6 h-6" />,
                              color: "from-orange-500/20 to-orange-500/5",
                            },
                            {
                              name: "Zero-Knowledge Proofs",
                              description: "Built-in support for advanced cryptography",
                              icon: <Lock className="w-6 h-6" />,
                              color: "from-cyan-500/20 to-cyan-500/5",
                            },
                            {
                              name: "No Re-entrancy",
                              description: "Immune to common smart contract vulnerabilities",
                              icon: <CheckCircle className="w-6 h-6" />,
                              color: "from-purple-500/20 to-purple-500/5",
                            },
                          ].map((feature, index) => (
                            <motion.div
                              key={feature.name}
                              className={`p-4 rounded-lg bg-gradient-to-r ${feature.color} border border-gray-700/50`}
                              whileHover={{ scale: 1.02, x: 10 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="text-orange-400">{feature.icon}</div>
                                <div>
                                  <h4 className="font-semibold text-white">{feature.name}</h4>
                                  <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Rest of the content */}
          <div className="container mx-auto px-4 py-16 relative z-10">
            {/* Key Features */}
            <FadeIn delay={0.4}>
              <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="group"
                    >
                      <Card
                        className={`bg-gradient-to-br ${feature.color} border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full`}
                      >
                        <CardContent className="p-8 text-center">
                          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <feature.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Tabs Section */}
            <FadeIn delay={0.6}>
              <Tabs defaultValue="features" className="mb-16">
                <TabsList className="flex w-full gap-2 bg-transparent p-0">
                  <TabsTrigger
                    value="features"
                    className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
                  >
                    Key Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="usecases"
                    className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
                  >
                    Use Cases
                  </TabsTrigger>
                  <TabsTrigger
                    value="resources"
                    className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
                  >
                    Resources
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Security Features Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent border-orange-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                        <CardHeader className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                              <Shield className="w-6 h-6 text-orange-400" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-orange-400">Security First</CardTitle>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Built from the ground up with security as the primary concern, eliminating entire classes of
                            vulnerabilities.
                          </p>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="space-y-4">
                            {[
                              {
                                title: "Formal Verification Support",
                                description: "Mathematical proofs ensure contract correctness",
                                icon: "🔬",
                              },
                              {
                                title: "No Reentrancy Attacks",
                                description: "eUTXO model prevents state manipulation",
                                icon: "🛡️",
                              },
                              {
                                title: "Predictable Execution Costs",
                                description: "No surprise gas fees or failed transactions",
                                icon: "⚡",
                              },
                            ].map((feature, index) => (
                              <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-start gap-3 p-3 bg-black/20 rounded-lg hover:bg-orange-500/10 transition-all duration-300"
                                whileHover={{ x: 5 }}
                              >
                                <span className="text-xl">{feature.icon}</span>
                                <div>
                                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                  <p className="text-gray-400 text-sm">{feature.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Developer Experience Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent border-cyan-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                        <CardHeader className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                              <Code className="w-6 h-6 text-cyan-400" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-cyan-400">Developer Experience</CardTitle>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Designed for clarity and ease of use, making complex cryptographic operations accessible to all
                            developers.
                          </p>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="space-y-4">
                            {[
                              {
                                title: "Clean, Readable Syntax",
                                description: "Express complex logic in simple, mathematical terms",
                                icon: "📝",
                              },
                              {
                                title: "Built-in Privacy Features",
                                description: "Native support for zero-knowledge proofs and ring signatures",
                                icon: "🔐",
                              },
                              {
                                title: "Composable Contracts",
                                description: "Build complex applications from simple, reusable components",
                                icon: "🧩",
                              },
                            ].map((feature, index) => (
                              <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex items-start gap-3 p-3 bg-black/20 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                                whileHover={{ x: 5 }}
                              >
                                <span className="text-xl">{feature.icon}</span>
                                <div>
                                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                  <p className="text-gray-400 text-sm">{feature.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Bottom Summary Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8"
                  >
                    <Card className="bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 border-gradient-to-r border-orange-500/30 backdrop-blur-xl">
                      <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          The ErgoScript Advantage
                        </h3>
                        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                          While other platforms force you to choose between security and functionality, ErgoScript delivers
                          both. Build sophisticated financial applications with the confidence that comes from mathematical
                          certainty.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                          {["Mathematically Secure", "Developer Friendly", "Privacy Native", "Cost Predictable"].map(
                            (badge, index) => (
                              <motion.div
                                key={badge}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="px-4 py-2 bg-black/30 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                                >
                                  {badge}
                                </Badge>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="usecases" className="mt-8">
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        What Can You Build?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {useCases.map((useCase, index) => (
                          <motion.div
                            key={useCase}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-orange-500/10 transition-colors"
                            whileHover={{ x: 10 }}
                          >
                            <ArrowRight className="w-4 h-4 text-primary" />
                            <span>{useCase}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="resources" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                          Learning Resources
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Link href="https://scastie.scala-lang.org/ErgoPlayground" target="_blank">
                          <Button variant="outline" className="w-full justify-between hover:bg-orange-500/10">
                            ErgoScript Playground
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Link href="https://docs.ergoplatform.com/ergo-script/" target="_blank">
                          <Button variant="outline" className="w-full justify-between hover:bg-orange-500/10">
                            Official Documentation
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                          Developer Tools
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Link href="/build/docs" target="_blank">
                          <Button variant="outline" className="w-full justify-between hover:bg-orange-500/10">
                            SDKs & APIs
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Link href="/build/tutorials" target="_blank">
                          <Button variant="outline" className="w-full justify-between hover:bg-orange-500/10">
                            Code Examples
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </FadeIn>

            {/* Comparison Section */}
            <FadeIn delay={0.7}>
              <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  How ErgoScript Compares
                </h2>

                {/* Comparison Table */}
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl mb-12 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent text-center">
                      ErgoScript vs. Other Smart Contract Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left p-4 font-semibold text-primary">Feature</th>
                            <th className="text-left p-4 font-semibold text-orange-400">ErgoScript (Ergo)</th>
                            <th className="text-left p-4 font-semibold text-blue-400">Solidity (Ethereum)</th>
                            <th className="text-left p-4 font-semibold text-purple-400">Plutus (Cardano)</th>
                            <th className="text-left p-4 font-semibold text-yellow-400">Bitcoin Script</th>
                            <th className="text-left p-4 font-semibold text-green-400">Move (Aptos/Sui)</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                            <td className="p-4 font-medium">Platform Type</td>
                            <td className="p-4">eUTXO</td>
                            <td className="p-4">Account-based (EVM)</td>
                            <td className="p-4">eUTXO</td>
                            <td className="p-4">UTXO</td>
                            <td className="p-4">Account-based</td>
                          </tr>
                          <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                            <td className="p-4 font-medium">Language Base</td>
                            <td className="p-4">Sigma-based (Scala-like)</td>
                            <td className="p-4">JS/C++-like</td>
                            <td className="p-4">Haskell, DSL</td>
                            <td className="p-4">Forth-like, stack-based</td>
                            <td className="p-4">Rust-like</td>
                          </tr>
                          <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                            <td className="p-4 font-medium">Turing-complete</td>
                            <td className="p-4">
                              <span className="text-orange-400">No (restricted for security)</span>
                            </td>
                            <td className="p-4">Yes (with gas limits)</td>
                            <td className="p-4">No (highly restricted)</td>
                            <td className="p-4">No</td>
                            <td className="p-4">Yes</td>
                          </tr>
                          <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                            <td className="p-4 font-medium">Security</td>
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
                          <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                            <td className="p-4 font-medium">Custom Cryptography</td>
                            <td className="p-4">
                              <span className="text-green-400">Easy (Sigma, ZKPs, ring sigs)</span>
                            </td>
                            <td className="p-4">
                              <span className="text-red-400">Very hard</span>
                            </td>
                            <td className="p-4">Possible but complex</td>
                            <td className="p-4">
                              <span className="text-red-400">Nearly impossible</span>
                            </td>
                            <td className="p-4">Possible</td>
                          </tr>
                          <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                            <td className="p-4 font-medium">Resource/Gas Cost</td>
                            <td className="p-4">
                              <span className="text-green-400">Predictable (restricted execution)</span>
                            </td>
                            <td className="p-4">
                              <span className="text-red-400">Can be huge</span>
                            </td>
                            <td className="p-4">Capped (script units)</td>
                            <td className="p-4">
                              <span className="text-green-400">Very cheap</span>
                            </td>
                            <td className="p-4">Predictable</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Differences */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30 backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="text-orange-400 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        ErgoScript's Key Advantages
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-white">eUTXO – Extended Bitcoin Model</h4>
                        <p className="text-gray-300 text-sm">
                          Like Bitcoin Script, works with outputs, not accounts. Unlike BTC, scripts are much more powerful
                          for DeFi, DAO, and complex contracts.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-white">No Shared State, No Global Variables</h4>
                        <p className="text-gray-300 text-sm">
                          No "global storage" as in Ethereum. This protects against most EVM bugs like reentrancy and
                          frontrunning.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-white">Cryptography-first Approach</h4>
                        <p className="text-gray-300 text-sm">
                          Built-in Sigma protocols, zero-knowledge proofs, ring signatures. Build private DEXs and mixers
                          natively.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-cyan-500/30 backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="text-cyan-400 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Philosophy & Design
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-white">Restricted Computation for Security</h4>
                        <p className="text-gray-300 text-sm">
                          Not Turing-complete; no infinite loops. Safer for users and the network—no "ran out of gas"
                          disasters.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-white">Declarative Scripting</h4>
                        <p className="text-gray-300 text-sm">
                          Describe what must be true for transactions to pass. No loops or tricky state—just logic and
                          cryptography.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-white">"Crypto Notepad" Philosophy</h4>
                        <p className="text-gray-300 text-sm">
                          Not a "world computer" but a secure way to prove logic with mathematics, not just code.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Code Example Comparison */}
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                      Code Comparison: 2-of-3 Multisig
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-400">ErgoScript</h4>
                        <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                          <pre className="text-green-400">{`// Simple 2-of-3 multisig
sigmas = proveDlog(A) || proveDlog(B) || proveDlog(C)
val nSigs = (if proveDlog(A) then 1 else 0) + 
          (if proveDlog(B) then 1 else 0) + 
          (if proveDlog(C) then 1 else 0)
nSigs >= 2`}</pre>
                        </div>
                        <p className="text-gray-400 mt-2 text-sm italic">Concise, mathematical, and secure</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-400">Solidity Equivalent</h4>
                        <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                          <pre className="text-green-400">{`// Would require a long function with:
// - require() statements
// - loops for signature verification
// - potential reentrancy guards
// - gas optimization considerations
// - 50+ lines of code`}</pre>
                        </div>
                        <p className="text-gray-400 mt-2 text-sm italic">Complex, verbose, and error-prone</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            {/* FAQ Section */}
            <FadeIn delay={0.9}>
              <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl"
                    >
                      <Collapsible
                        open={openFAQ === index}
                        onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                      >
                        <CollapsibleTrigger className="w-full">
                          <CardContent className="p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors">
                            <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 transition-transform ${
                                openFAQ === index ? "rotate-180" : ""
                              }`}
                            />
                          </CardContent>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
              <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border-orange-500/30 backdrop-blur-xl">
                <CardContent className="text-center py-12">
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                    Ready to Start Building?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Explore ErgoScript and start developing secure smart contracts today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://scastie.scala-lang.org/ErgoPlayground" target="_blank">
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                        Try Playground
                      </Button>
                    </Link>
                    <Link href="/build/docs">
                      <Button
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                      >
                        View Documentation
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </motion.div>
      </div>
    </>
  )
}
