"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useTranslations } from "next-intl"
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
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { HiddenBreadcrumbs } from "@/components/seo/hidden-breadcrumbs"

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

export default function ErgoScriptClient() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)
  const t = useTranslations("learnErgoscript")

  const toggleModule = (moduleIndex: number) => {
    if (expandedModule === moduleIndex) {
      setExpandedModule(null)
    } else {
      setExpandedModule(moduleIndex)
    }
  }

  const whyLearnFeatures = [
    {
      title: t("whyLearnFeatures.secureByDesign.title"),
      description: t("whyLearnFeatures.secureByDesign.description"),
      icon: <Shield className="w-6 h-6" aria-hidden="true" focusable="false" />,
      color: "",
    },
    {
      title: t("whyLearnFeatures.powerfulExpressive.title"),
      description: t("whyLearnFeatures.powerfulExpressive.description"),
      icon: <Zap className="w-6 h-6" aria-hidden="true" focusable="false" />,
      color: "",
    },
    {
      title: t("whyLearnFeatures.leverageEutxo.title"),
      description: t("whyLearnFeatures.leverageEutxo.description"),
      icon: <Database className="w-6 h-6" aria-hidden="true" focusable="false" />,
      color: "",
    },
    {
      title: t("whyLearnFeatures.builtInCryptography.title"),
      description: t("whyLearnFeatures.builtInCryptography.description"),
      icon: <Code className="w-6 h-6" aria-hidden="true" focusable="false" />,
      color: "",
    },
  ]

  const targetAudience = [
    {
      title: t("targetAudience.newToSmartContracts.title"),
      description: t("targetAudience.newToSmartContracts.description"),
      icon: <Users className="w-8 h-8" aria-hidden="true" focusable="false" />,
      examples: t("targetAudience.newToSmartContracts.examples"),
      color: "",
    },
    {
      title: t("targetAudience.experiencedDevelopers.title"),
      description: t("targetAudience.experiencedDevelopers.description"),
      icon: <Code className="w-8 h-8" aria-hidden="true" focusable="false" />,
      examples: t("targetAudience.experiencedDevelopers.examples"),
      color: "",
    },
    {
      title: t("targetAudience.scalaFunctionalProgrammers.title"),
      description: t("targetAudience.scalaFunctionalProgrammers.description"),
      icon: <Layers className="w-8 h-8" aria-hidden="true" focusable="false" />,
      examples: t("targetAudience.scalaFunctionalProgrammers.examples"),
      color: "",
    },
    {
      title: t("targetAudience.defiEnthusiasts.title"),
      description: t("targetAudience.defiEnthusiasts.description"),
      icon: <Zap className="w-8 h-8" aria-hidden="true" focusable="false" />,
      examples: t("targetAudience.defiEnthusiasts.examples"),
      color: "",
    },
  ]

  const modules = [
    {
      title: t("modules.foundations.title"),
      number: 1,
      totalDuration: t("modules.foundations.totalDuration"),
      lessons: [
        { title: t("modules.foundations.lessons.0.title"), duration: t("modules.foundations.lessons.0.duration"), level: t("modules.foundations.lessons.0.level") },
        { title: t("modules.foundations.lessons.1.title"), duration: t("modules.foundations.lessons.1.duration"), level: t("modules.foundations.lessons.1.level") },
        { title: t("modules.foundations.lessons.2.title"), duration: t("modules.foundations.lessons.2.duration"), level: t("modules.foundations.lessons.2.level") },
        { title: t("modules.foundations.lessons.3.title"), duration: t("modules.foundations.lessons.3.duration"), level: t("modules.foundations.lessons.3.level") },
        { title: t("modules.foundations.lessons.4.title"), duration: t("modules.foundations.lessons.4.duration"), level: t("modules.foundations.lessons.4.level") },
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
      question: t("faqs.needPriorExperience.question"),
      answer:
        t("faqs.needPriorExperience.answer"),
    },
    {
      question: t("faqs.ergoScriptDifferentFromSolidity.question"),
      answer:
        t("faqs.ergoScriptDifferentFromSolidity.answer"),
    },
    {
      question: t("faqs.developmentTools.question"),
      answer:
        t("faqs.developmentTools.answer"),
    },
    {
      question: t("faqs.completeSeriesDuration.question"),
      answer:
        t("faqs.completeSeriesDuration.answer"),
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hidden Breadcrumbs for SEO */}
      <HiddenBreadcrumbs 
        items={[{ name: 'Learn', href: '/learn' }]} 
        currentPage="ErgoScript" 
      />
      
      {/* Background simplified to match technology style */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  ErgoScript Tutorial Series
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                  Master ErgoScript: Your path to building secure and powerful smart contracts on Ergo
                </p>
                <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  Step-by-step tutorials covering everything from basics to advanced DeFi protocols, designed for
                  developers of all experience levels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    Start Learning
                  </Button>
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold mb-6 text-center text-white">
                        Your First ErgoScript Contract
                      </h3>
                      <div className="bg-neutral-950/80 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="text-xs text-neutral-400">contract.es</div>
                        </div>
                        <pre className="text-neutral-300">
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
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Learn ErgoScript */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Why Learn ErgoScript?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {whyLearnFeatures.map((feature) => (
                <div key={feature.title}>
                  <Card className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full rounded-xl hover:border-orange-500/50 transition-colors`}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{feature.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                          <p className="text-neutral-400">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Target Audience */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Who Is This Tutorial Series For?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {targetAudience.map((audience) => (
                <div key={audience.title} className="group">
                  <Card className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full rounded-xl hover:border-orange-500/50 transition-colors`}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{audience.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{audience.title}</h3>
                          <p className="text-neutral-400 mb-4">{audience.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-orange-400 mb-2">You'll learn:</p>
                        <p className="text-sm text-neutral-300">
                          {audience.examples}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Curriculum Overview */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  What You Will Learn
                </h2>
                <p className="text-xl text-neutral-300 mb-6">Your Path to ErgoScript Mastery</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" focusable="false" />
                      <span>ErgoScript language fundamentals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" focusable="false" />
                      <span>eUTXO model and box management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" focusable="false" />
                      <span>Advanced contract logic patterns</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" focusable="false" />
                      <span>Tokens, NFTs, and Sigma-protocols</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" focusable="false" />
                      <span>Multi-stage dApps and DeFi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" focusable="false" />
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
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Tutorial Series Structure
            </h2>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <Card
                  key={index}
                  className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl"
                >
                  <Collapsible open={expandedModule === index} onOpenChange={() => toggleModule(index)}>
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-black font-bold text-lg">
                            {module.number}
                          </div>
                          <div className="text-left">
                            <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-neutral-400">
                              <span className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" aria-hidden="true" focusable="false" />
                                <span>{module.totalDuration}</span>
                              </span>
                              <span>{module.lessons.length} lessons</span>
                            </div>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-400 transition-transform ${
                            expandedModule === index ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                          focusable="false"
                        />
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-neutral-900/60 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                <span className="text-neutral-400">
                                  {module.number}.{lessonIndex + 1}
                                </span>
                                <span>{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-neutral-400">
                                  <Clock className="w-4 h-4" aria-hidden="true" focusable="false" />
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
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                    <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        {/* Related Content */}
        <motion.section variants={itemVariants} className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              What to Learn Next
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    eUTXO Model
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Understand the data model that ErgoScript operates on
                  </p>
                  <Link href="/technology/eutxo-model" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    Learn eUTXO
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    Build DeFi Apps
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Apply your ErgoScript skills to real DeFi projects
                  </p>
                  <Link href="/use/defi" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    Start Building
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    Developer Docs
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Tools and SDKs for ErgoScript development
                  </p>
                  <Link href="/docs/developers" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    View Docs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section variants={itemVariants} className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Start Your ErgoScript Journey
                </h2>
                <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers building the future of decentralized finance on Ergo
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl"
                  >
                    <Link href="/docs/developers" className="flex items-center">
                      Start Learning Now
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" focusable="false" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    <Link href="https://discord.gg/ergo" target="_blank" className="flex items-center">
                      Join Community
                      <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" focusable="false" />
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
