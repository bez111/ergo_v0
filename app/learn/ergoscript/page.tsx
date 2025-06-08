"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronDown,
  ArrowRight,
  Clock,
  Code,
  Users,
  Shield,
  Zap,
  Database,
  Layers,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

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

// Define difficulty levels with their corresponding colors
const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  Basic: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Advanced: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Expert: "bg-red-500/20 text-red-400 border-red-500/30",
}

export default function ErgoScriptPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)

  const toggleModule = (moduleIndex: number) => {
    if (expandedModule === moduleIndex) {
      setExpandedModule(null)
    } else {
      setExpandedModule(moduleIndex)
    }
  }

  const whyLearnFeatures = [
    {
      title: "Secure by Design",
      description: "Built-in security and formal verifiability, minimizing smart contract risks",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: "Powerful & Expressive",
      description: "Enables complex DeFi, multi-stage protocols, and unique dApps",
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      title: "Leverage eUTXO",
      description: "Only ErgoScript unlocks the full power of eUTXO: predictable costs, local state, composability",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      title: "Built-in Cryptography",
      description: "Native support for Sigma-protocols, privacy, and advanced access schemes",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const targetAudience = [
    {
      title: "New to Smart Contracts",
      description: "Step-by-step explanations of core blockchain and smart contract concepts",
      icon: <Users className="w-8 h-8" />,
      examples: ["Blockchain basics", "Smart contract fundamentals", "eUTXO introduction"],
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: "Experienced Blockchain Developers",
      description: "Discover eUTXO, new safe patterns, and advanced contract design",
      icon: <Code className="w-8 h-8" />,
      examples: ["eUTXO patterns", "Security best practices", "Advanced cryptography"],
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      title: "Scala/Functional Programmers",
      description: "ErgoScript's syntax and philosophy will feel familiar—apply your skills easily",
      icon: <Layers className="w-8 h-8" />,
      examples: ["Functional paradigms", "Type safety", "Immutable data structures"],
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      title: "DeFi Enthusiasts",
      description: "Build the next generation of decentralized financial applications",
      icon: <Zap className="w-8 h-8" />,
      examples: ["DEX protocols", "Lending platforms", "Algorithmic stablecoins"],
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const modules = [
    {
      title: "Foundations of Ergo and ErgoScript",
      number: 1,
      totalDuration: "185 min",
      lessons: [
        { title: "Introduction to Ergo & the eUTXO Model", duration: "20 min", level: "Beginner" },
        { title: "What is ErgoScript? Philosophy and Design Goals", duration: "15 min", level: "Beginner" },
        { title: "Setting Up Your ErgoScript Development Environment", duration: "30 min", level: "Beginner" },
        { title: "Basic Syntax, Data Types, Operators", duration: "40 min", level: "Beginner" },
        { title: "Boxes, Registers, Context Variables", duration: "45 min", level: "Beginner" },
        { title: "Anatomy of an Ergo Transaction", duration: "35 min", level: "Beginner" },
      ],
    },
    {
      title: "Creating Basic Contracts",
      number: 2,
      totalDuration: "165 min",
      lessons: [
        { title: 'Your First Contract: "Always True"', duration: "20 min", level: "Beginner" },
        { title: "Simple P2PK Scripts", duration: "30 min", level: "Beginner" },
        { title: "Time-Locked Contracts", duration: "45 min", level: "Intermediate" },
        { title: "ErgoTree & Compilation", duration: "40 min", level: "Intermediate" },
        { title: "Fees & Transaction Size", duration: "30 min", level: "Intermediate" },
      ],
    },
    {
      title: "Working with Data and Tokens",
      number: 3,
      totalDuration: "230 min",
      lessons: [
        { title: "Reading/Writing Registers", duration: "40 min", level: "Intermediate" },
        { title: "Handling ERG & Native Tokens", duration: "45 min", level: "Intermediate" },
        { title: "Minting/Burning Tokens", duration: "50 min", level: "Intermediate" },
        { title: "NFTs in ErgoScript", duration: "55 min", level: "Intermediate" },
        { title: "Token Standards (EIP-004)", duration: "40 min", level: "Intermediate" },
      ],
    },
    {
      title: "Intermediate Contract Logic",
      number: 4,
      totalDuration: "285 min",
      lessons: [
        { title: "Multi-Stage Contracts & State Transitions", duration: "60 min", level: "Intermediate" },
        { title: "Using Oracles", duration: "50 min", level: "Advanced" },
        { title: "Basic Escrow", duration: "45 min", level: "Intermediate" },
        { title: "Sigma Protocols & Proofs of Knowledge", duration: "70 min", level: "Advanced" },
        { title: "DAOs & Voting", duration: "60 min", level: "Advanced" },
      ],
    },
    {
      title: "Advanced ErgoScript & Cryptography",
      number: 5,
      totalDuration: "360 min",
      lessons: [
        { title: "Ring Signatures, Mixing", duration: "75 min", level: "Advanced" },
        { title: "Threshold Signatures", duration: "65 min", level: "Advanced" },
        { title: "Designing DeFi Primitives", duration: "90 min", level: "Advanced" },
        { title: "Gas Optimization & Script Complexity", duration: "60 min", level: "Advanced" },
        { title: "Advanced Context Extensions", duration: "70 min", level: "Expert" },
      ],
    },
    {
      title: "Testing, Debugging & Best Practices",
      number: 6,
      totalDuration: "330 min",
      lessons: [
        { title: "Unit & Integration Testing", duration: "60 min", level: "Intermediate" },
        { title: "Debugging Techniques", duration: "55 min", level: "Intermediate" },
        { title: "Pitfalls & Vulnerabilities", duration: "65 min", level: "Advanced" },
        { title: "Secure Development Best Practices", duration: "70 min", level: "Advanced" },
        { title: "Intro to Formal Verification", duration: "80 min", level: "Expert" },
      ],
    },
    {
      title: "Practical Projects & dApp Examples",
      number: 7,
      totalDuration: "600 min",
      lessons: [
        { title: "NFT Marketplace", duration: "120 min", level: "Advanced" },
        { title: "Decentralized Lottery", duration: "100 min", level: "Advanced" },
        { title: "DeFi Lending Protocol", duration: "140 min", level: "Expert" },
        { title: "Privacy-Preserving Payment Channel", duration: "130 min", level: "Expert" },
        { title: "Custom Oracle Implementation", duration: "110 min", level: "Expert" },
      ],
    },
  ]

  const faqs = [
    {
      question: "Do I need prior blockchain experience to start?",
      answer:
        "No! Our tutorial series starts from the basics and gradually builds up complexity. We explain blockchain and smart contract concepts as we go, making it accessible for complete beginners.",
    },
    {
      question: "How is ErgoScript different from Solidity?",
      answer:
        "ErgoScript is based on Scala and designed for the eUTXO model, offering better security guarantees, predictable costs, and native support for advanced cryptography like Sigma protocols. It's more functional and mathematically rigorous than Solidity.",
    },
    {
      question: "What development tools do I need?",
      answer:
        "You'll need a text editor, the Ergo node software, and optionally the ErgoScript compiler. We provide detailed setup instructions in Module 1.3 to get you started with the complete development environment.",
    },
    {
      question: "How long does it take to complete the entire series?",
      answer:
        "The complete series contains approximately 32 hours of content. Depending on your pace and prior experience, you can expect to complete it in 4-8 weeks with consistent study.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
                  LEARN ERGOSCRIPT
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                  ErgoScript Tutorial Series
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  Master ErgoScript: Your path to building secure and powerful smart contracts on Ergo
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Step-by-step tutorials covering everything from basics to advanced DeFi protocols, designed for
                  developers of all experience levels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                    Start Learning
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    View Documentation
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
                        Your First ErgoScript Contract
                      </h3>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="text-xs text-gray-400">contract.es</div>
                        </div>
                        <pre className="text-cyan-400">
                          {`{
  val verifyInput = INPUTS(0).propositionBytes == 
                    SELF.propositionBytes
  val heightIncreased = HEIGHT > SELF.creationInfo._1
  verifyInput && heightIncreased
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Learn ErgoScript */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Why Learn ErgoScript?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {whyLearnFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`bg-gradient-to-br ${feature.color} border-gray-700/50 backdrop-blur-xl h-full`}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{feature.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Target Audience */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Who Is This Tutorial Series For?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${audience.color} border-gray-700/50 backdrop-blur-xl h-full hover:border-orange-500/50 transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{audience.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{audience.title}</h3>
                          <p className="text-gray-400 mb-4">{audience.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-cyan-400 mb-2">You'll learn:</p>
                        <div className="flex flex-wrap gap-2">
                          {audience.examples.map((example) => (
                            <Badge
                              key={example}
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:border-orange-500/50"
                            >
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Curriculum Overview */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  What You Will Learn
                </h2>
                <p className="text-xl text-gray-300 mb-6">Your Path to ErgoScript Mastery</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>ErgoScript language fundamentals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>eUTXO model and box management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Advanced contract logic patterns</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Tokens, NFTs, and Sigma-protocols</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Multi-stage dApps and DeFi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Testing and security best practices</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Advanced</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Expert</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Module Structure */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Tutorial Series Structure
            </h2>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl"
                >
                  <Collapsible open={expandedModule === index} onOpenChange={() => toggleModule(index)}>
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                            {module.number}
                          </div>
                          <div className="text-left">
                            <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{module.totalDuration}</span>
                              </span>
                              <span>{module.lessons.length} lessons</span>
                            </div>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedModule === index ? "rotate-180" : ""
                          }`}
                        />
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                <span className="text-gray-400">
                                  {module.number}.{lessonIndex + 1}
                                </span>
                                <span>{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-gray-400">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-sm">{lesson.duration}</span>
                                </div>
                                <Badge className={difficultyColors[lesson.level as keyof typeof difficultyColors]}>
                                  {lesson.level}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
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
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border-orange-500/30 backdrop-blur-xl">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Master ErgoScript?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join our community of developers building the future of decentralized applications on Ergo. Start your
                  journey from beginner to expert with our comprehensive tutorial series.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
                  >
                    <Link href="#" className="flex items-center">
                      Start Learning Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    <Link href="#" className="flex items-center">
                      Join Community
                      <ExternalLink className="ml-2 w-4 h-4" />
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
