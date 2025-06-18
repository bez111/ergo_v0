"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Link2, Smartphone, Zap, Shield, ArrowRight, ExternalLink, Network, CheckCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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

export default function NIPOPOWsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const benefits = [
    {
      icon: <Link2 className="w-8 h-8" />,
      title: "Interoperability",
      description: "Enables trustless bridges with other blockchains like Cardano, Ethereum, Bitcoin, and BSC.",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Light Clients",
      description: "Use Ergo securely on mobile devices or in browsers without downloading the full blockchain.",
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scalability",
      description: "New chains can verify Ergo's history in seconds, not hours or days.",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trustless Verification",
      description: "No need for trusted third parties or centralized relays — pure cryptographic proofs.",
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const useCases = [
    {
      title: "Cross-Chain Bridges",
      description: "Trustless asset transfers between Ergo and other blockchains",
      example: "Rosen Bridge",
      icon: <Link2 className="w-8 h-8" />,
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: "Mobile Wallets",
      description: "Lightweight wallets that can verify transactions without full node",
      example: "Ergo Mobile Wallet",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      title: "Oracle Systems",
      description: "Efficient verification of blockchain data for external systems",
      example: "Oracle Pools",
      icon: <Network className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      title: "Sidechains",
      description: "Enable sidechains to efficiently verify main chain state",
      example: "Layer 2 Solutions",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const comparisonData = [
    {
      aspect: "Verification Time",
      traditional: "Hours to days (full sync)",
      nipopows: "Seconds to minutes",
      advantage: "NIPoPoWs",
    },
    {
      aspect: "Data Required",
      traditional: "Entire blockchain history",
      nipopows: "Small cryptographic proof",
      advantage: "NIPoPoWs",
    },
    {
      aspect: "Trust Requirements",
      traditional: "Trust full nodes or validators",
      nipopows: "Trustless cryptographic verification",
      advantage: "NIPoPoWs",
    },
    {
      aspect: "Mobile Compatibility",
      traditional: "Impractical due to size",
      nipopows: "Perfect for mobile devices",
      advantage: "NIPoPoWs",
    },
  ]

  const workingSteps = [
    {
      step: 1,
      title: "Event Occurs",
      description: "A transaction, block, or other event happens on the Ergo blockchain.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Proof Generation",
      description:
        "A cryptographic proof is created that demonstrates the event occurred, using only a small subset of blocks.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Verification",
      description: "Anyone can verify the proof quickly and trustlessly, even on another blockchain or mobile device.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ]

  const faqs = [
    {
      question: "How do NiPoPoWs let my phone wallet work instantly instead of waiting for hours?",
      answer: "Instead of downloading the entire multi-gigabyte blockchain history, NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) allow your device to verify it using a tiny cryptographic proof. It's like reading a book's summary and being certain of the plot without reading every word. The result: syncing and security validation take seconds, not hours.",
    },
    {
      question: "How secure is this \"light\" verification compared to a full node?",
      answer: "It is cryptographically ironclad. NiPoPoWs are based on the same mathematical principles as the blockchain itself. Cheating the system is as difficult as breaking Bitcoin's underlying cryptography. You get the security of a full node without the need to store hundreds of gigabytes of data.",
    },
    {
      question: "What does this enable in practice that wasn't possible before?",
      answer: "This opens the door for truly decentralized mobile applications. Imagine DeFi protocols that don't drain your battery, instant cross-chain bridges right from your phone, and wallets that are ready to use immediately after installation. This is the technology that makes blockchain practical for everyday use.",
    },
    {
      question: "Do I need to understand cryptography to use this?",
      answer: "Not at all. You don't need to understand how an engine works to drive a car. For users, it simply means speed and convenience. For developers, it's a powerful tool that works \"out of the box,\" allowing them to focus on building their product, not on complex math.",
    },
  ]

  return (
    <div className="min-h-screen relative">
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
                  INTEROPERABILITY
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                  NIPoPoWs
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  Lightweight, Trustless Proofs for Blockchain Interoperability
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) let anyone prove facts about Ergo's blockchain —
                  without downloading the full chain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    View Applications
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
                        How NIPoPoWs Work
                      </h3>
                      <div className="space-y-4">
                        {workingSteps.map((step, index) => (
                          <motion.div
                            key={step.step}
                            className="p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700/50"
                            whileHover={{ scale: 1.02, x: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                                {step.step}
                              </div>
                              <div className="text-orange-400">{step.icon}</div>
                              <div>
                                <h4 className="font-semibold text-white">{step.title}</h4>
                                <p className="text-sm text-gray-400">{step.description}</p>
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

        {/* What are NIPoPoWs */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  What are NIPoPoWs?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  NIPoPoWs are cryptographic proofs that allow you to verify blockchain events without needing to
                  download or process the entire blockchain history. Think of them as "blockchain receipts" that prove
                  something happened on Ergo.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  These proofs are logarithmically smaller than the full blockchain, making them perfect for mobile
                  devices, cross-chain bridges, and any application that needs to verify blockchain data efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Why It Matters */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Why NIPoPoWs Matter
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${benefit.color} border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Comparison Table */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              NIPoPoWs vs Traditional Verification
            </h2>

            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
                      <tr>
                        <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Aspect</th>
                        <th className="px-6 py-4 text-left text-red-400 font-semibold">Traditional</th>
                        <th className="px-6 py-4 text-left text-orange-400 font-semibold">NIPoPoWs</th>
                        <th className="px-6 py-4 text-left text-green-400 font-semibold">Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <motion.tr
                          key={row.aspect}
                          className={index % 2 === 0 ? "bg-gray-800/20" : ""}
                          whileHover={{ backgroundColor: "rgba(255, 136, 0, 0.1)" }}
                        >
                          <td className="px-6 py-4 font-medium text-white">{row.aspect}</td>
                          <td className="px-6 py-4 text-gray-300 text-sm">{row.traditional}</td>
                          <td className="px-6 py-4 text-gray-300 text-sm">{row.nipopows}</td>
                          <td className="px-6 py-4">
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              {row.advantage}
                            </Badge>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Real Use Cases */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Real Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${useCase.color} border-gray-700/50 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 h-full`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">{useCase.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                          <p className="text-gray-400 mb-4">{useCase.description}</p>
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                            {useCase.example}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
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
        </motion.section>

        {/* Learn More */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border-orange-500/30 backdrop-blur-xl">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  The Future of Blockchain Interoperability
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  NIPoPoWs enable a new generation of lightweight, trustless applications that can interact with Ergo
                  from anywhere — mobile devices, other blockchains, or web browsers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
                  >
                    <Link href="/ecosystem" className="flex items-center">
                      <ArrowRight className="mr-2 w-4 h-4" />
                      Explore Applications
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    <Link href="https://docs.ergoplatform.com/protocol/nipopows/" className="flex items-center">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Technical Documentation
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
