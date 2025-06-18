"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Eye, Shield, Shuffle, Vote, ArrowRight, ExternalLink, CheckCircle, Lock, ChevronDown } from "lucide-react"
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

export default function PrivacyFeaturesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const technologies = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sigma Protocols",
      description:
        "Enable powerful privacy tools like ring signatures and zero-knowledge proofs at the protocol level.",
      features: ["Zero-knowledge proofs", "Ring signatures", "Threshold signatures", "Composable privacy"],
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: "ErgoMixer",
      description: "On-chain, non-custodial mixing for transaction privacy and anonymity.",
      features: ["Non-custodial mixing", "On-chain privacy", "Token mixing support", "Configurable anonymity"],
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Confidential Assets",
      description: "Issue tokens with hidden amounts and rules for maximum privacy.",
      features: [
        "Hidden token amounts",
        "Private smart contracts",
        "Confidential transactions",
        "Selective disclosure",
      ],
      color: "from-purple-500/20 to-purple-500/5",
    },
  ]

  const advantages = [
    "No trusted setup needed — pure cryptographic security",
    "Flexible privacy features usable in dApps, DeFi, and NFTs",
    "Open-source, peer-reviewed cryptography",
    "Composable with other Ergo features",
    "Built into the protocol, not added as afterthought",
    "Mathematically proven security guarantees",
  ]

  const useCases = [
    {
      title: "Private Transactions",
      description: "Mix your ERG and tokens for complete anonymity",
      icon: <Shuffle className="w-8 h-8" />,
      example: "ErgoMixer",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: "Confidential DeFi",
      description: "Build DeFi applications with private balances and logic",
      icon: <Lock className="w-8 h-8" />,
      example: "Private DEX orders",
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      title: "Anonymous Voting",
      description: "Create DAOs and voting systems with secret ballots",
      icon: <Vote className="w-8 h-8" />,
      example: "DAO governance",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      title: "Private NFTs",
      description: "NFTs with hidden metadata or ownership information",
      icon: <Eye className="w-8 h-8" />,
      example: "Confidential collectibles",
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const privacyLevels = [
    {
      level: "Basic Privacy",
      description: "Standard transactions with pseudonymous addresses",
      features: ["Pseudonymous addresses", "UTXO model benefits", "Basic transaction privacy"],
      color: "from-blue-500/20 to-blue-500/10",
      border: "border-blue-500/30",
    },
    {
      level: "Enhanced Privacy",
      description: "Using ErgoMixer for transaction mixing and unlinkability",
      features: ["Transaction mixing", "Address unlinkability", "Amount obfuscation"],
      color: "from-orange-500/20 to-orange-500/10",
      border: "border-orange-500/30",
    },
    {
      level: "Maximum Privacy",
      description: "Sigma protocols with zero-knowledge proofs and ring signatures",
      features: ["Zero-knowledge proofs", "Ring signatures", "Confidential assets", "Private smart contracts"],
      color: "from-cyan-500/20 to-cyan-500/10",
      border: "border-cyan-500/30",
    },
  ]

  const faqs = [
    {
      question: "How private is Ergo really?",
      answer: "Privacy is baked in—mixers, stealth addresses, and selective disclosure. Your transaction, your rules.",
    },
    {
      question: "Will using privacy features put a target on my back?",
      answer: "On Ergo, privacy is the norm, not the exception. You blend in with everyone else.",
    },
    {
      question: "Is private-by-default \"suspicious\"?",
      answer: "Not here. Regulators care about intent, and Ergo's tech offers transparency when you want it.",
    },
    {
      question: "Can I ever prove a private transaction if I need to?",
      answer: "Yes, you can choose when and what to reveal, so compliance and privacy don't have to fight.",
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
                  PRIVACY & SECURITY
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                  Privacy Features
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">Sigma Protocols and Beyond</p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Financial freedom and privacy go hand in hand. Ergo bakes privacy features directly into its core —
                  not as an afterthought.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                    Explore Privacy
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    Try ErgoMixer
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
                        Privacy Levels
                      </h3>
                      <div className="space-y-4">
                        {privacyLevels.map((level, index) => (
                          <motion.div
                            key={level.level}
                            className={`p-4 rounded-lg bg-gradient-to-r ${level.color} ${level.border} border`}
                            whileHover={{ scale: 1.02, x: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <h4 className="font-semibold text-white mb-2">{level.level}</h4>
                            <p className="text-sm text-gray-400 mb-3">{level.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {level.features.slice(0, 2).map((feature, featureIndex) => (
                                <Badge
                                  key={featureIndex}
                                  variant="outline"
                                  className="text-xs border-gray-600 text-gray-300"
                                >
                                  {feature}
                                </Badge>
                              ))}
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

        {/* Why Privacy Matters */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Privacy Matters
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  In an increasingly digital world, financial privacy is not about hiding wrongdoing — it's about
                  protecting your fundamental rights. Privacy enables freedom of expression, protects against
                  discrimination, and ensures that your financial activities remain your own business.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ergo recognizes that privacy and transparency can coexist. You should have the choice to keep your
                  transactions private while still participating in a transparent, auditable blockchain ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Key Technologies */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Key Privacy Technologies
            </h2>

            <div className="space-y-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${tech.color} border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="p-4 bg-orange-500/20 rounded-lg text-orange-400">{tech.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-4 text-white">{tech.title}</h3>
                          <p className="text-gray-400 text-lg mb-6 leading-relaxed">{tech.description}</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {tech.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Unique Advantages */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Unique Advantages
            </h2>

            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              What You Can Do with Ergo Privacy
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
                  Privacy by Design, Security by Default
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Ergo's privacy features aren't just add-ons — they're fundamental to the platform's architecture.
                  Experience true financial freedom with mathematically proven privacy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
                  >
                    <Link href="/use/defi" className="flex items-center">
                      <ArrowRight className="mr-2 w-4 h-4" />
                      Try ErgoMixer
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    <Link href="https://docs.ergoplatform.com/protocol/privacy/" className="flex items-center">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Privacy Documentation
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
