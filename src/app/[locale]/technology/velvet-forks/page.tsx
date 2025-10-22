"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { 
  GitBranch, Shield, ExternalLink, Lock, CheckCircle, Layers, RefreshCw, Settings, Users, TrendingUp, AlertTriangle, ChevronDown, Terminal, BookOpen, Cpu, Network
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import React from "react"
import { useTranslations } from "next-intl"

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

export default function VelvetForksPage() {
  const t = useTranslations("technology.velvetForks")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const features = [
    {
      title: t("features.0.title"),
      description: t("features.0.description"),
      icon: RefreshCw,
    },
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
      icon: TrendingUp,
    },
    {
      title: t("features.2.title"),
      description: t("features.2.description"),
      icon: Settings,
    },
    {
      title: t("features.3.title"),
      description: t("features.3.description"),
      icon: Users,
    },
    {
      title: t("features.4.title"),
      description: t("features.4.description"),
      icon: Shield,
    },
    {
      title: t("features.5.title"),
      description: t("features.5.description"),
      icon: CheckCircle,
    },
  ]

  const useCases = [
    {
      title: t("useCases.0.title"),
      description: t("useCases.0.description"),
      icon: Layers,
      link: "/technology/nipopows",
      linkText: t("useCases.0.linkText"),
    },
    {
      title: t("useCases.1.title"),
      description: t("useCases.1.description"),
      icon: Lock,
      link: "/technology/privacy-features",
      linkText: t("useCases.1.linkText"),
    },
    {
      title: t("useCases.2.title"),
      description: t("useCases.2.description"),
      icon: Terminal,
      link: "/docs/ergoscript",
      linkText: t("useCases.2.linkText"),
    },
    {
      title: t("useCases.3.title"),
      description: t("useCases.3.description"),
      icon: Cpu,
      link: "/use/mining",
      linkText: t("useCases.3.linkText"),
    },
  ]

  const steps = [
    {
      title: t("howItWorks.steps.0.title"),
      description: t("howItWorks.steps.0.description"),
      icon: GitBranch,
    },
    {
      title: t("howItWorks.steps.1.title"),
      description: t("howItWorks.steps.1.description"),
      icon: RefreshCw,
    },
    {
      title: t("howItWorks.steps.2.title"),
      description: t("howItWorks.steps.2.description"),
      icon: CheckCircle,
    },
    {
      title: t("howItWorks.steps.3.title"),
      description: t("howItWorks.steps.3.description"),
      icon: Network,
    },
  ]

  const comparisonData = {
    hardFork: {
      title: t("comparison.hardFork.title"),
      description: t("comparison.hardFork.description"),
      pros: [
        t("comparison.hardFork.pros.0"),
        t("comparison.hardFork.pros.1")
      ],
      cons: [
        t("comparison.hardFork.cons.0"),
        t("comparison.hardFork.cons.1"),
        t("comparison.hardFork.cons.2")
      ]
    },
    softFork: {
      title: t("comparison.softFork.title"),
      description: t("comparison.softFork.description"),
      pros: [
        t("comparison.softFork.pros.0"),
        t("comparison.softFork.pros.1")
      ],
      cons: [
        t("comparison.softFork.cons.0"),
        t("comparison.softFork.cons.1")
      ]
    },
    velvetFork: {
      title: t("comparison.velvetFork.title"),
      description: t("comparison.velvetFork.description"),
      pros: [
        t("comparison.velvetFork.pros.0"),
        t("comparison.velvetFork.pros.1"),
        t("comparison.velvetFork.pros.2"),
        t("comparison.velvetFork.pros.3")
      ],
      cons: [
        t("comparison.velvetFork.cons.0"),
        t("comparison.velvetFork.cons.1")
      ]
    }
  }

  const faqs = [
    {
      question: t("faq.items.0.question"),
      answer: t("faq.items.0.answer"),
    },
    {
      question: t("faq.items.1.question"),
      answer: t("faq.items.1.answer"),
    },
    {
      question: t("faq.items.2.question"),
      answer: t("faq.items.2.answer"),
    },
    {
      question: t("faq.items.3.question"),
      answer: t("faq.items.3.answer"),
    },
  ]

  return (
    <>
      {/* SEO Schema */}
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: t("title"),
          description: t("description"),
          keywords: "velvet forks, protocol upgrades, backward compatibility, soft forks, blockchain evolution",
          datePublished: "2023-11-10",
          dateModified: "2025-08-10",
          author: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
          },
          image: "https://ergoplatform.org/img/velvet-forks.png",
          publisher: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
            logo: {
              "@type": "ImageObject",
              url: "https://ergoplatform.org/img/logo-dark.svg",
            },
          },
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: "Technology", href: "/technology" },
          { name: "Velvet Forks", href: "/technology/velvet-forks" },
        ]}
        className="mb-8"
      />

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" aria-hidden />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-16 relative z-10"
        >
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="text-center mb-16">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                {t("title")}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
            </FadeIn>
          </motion.section>

          {/* Features Grid */}
          <motion.section variants={containerVariants} className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, i) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-gray-700/50 backdrop-blur-xl h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <feature.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.section>

          {/* How It Works */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("howItWorks.title")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={step.title} className="bg-neutral-900/50 border-neutral-700 relative">
                  <CardContent className="p-6">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 mt-2">
                      <step.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-neutral-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Use Cases */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Use Cases for Velvet Forks</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-neutral-300 text-sm mb-4">{useCase.description}</p>
                        <Link href={useCase.link} className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                          {useCase.linkText}
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Fork Comparison */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("comparison.title")}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-xl text-red-400">{comparisonData.hardFork.title}</CardTitle>
                  <p className="text-neutral-400 text-sm">{comparisonData.hardFork.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {comparisonData.hardFork.pros.map((pro, index) => (
                          <li key={index} className="text-neutral-300 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {comparisonData.hardFork.cons.map((con, index) => (
                          <li key={index} className="text-neutral-300 text-sm flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-400">{comparisonData.softFork.title}</CardTitle>
                  <p className="text-neutral-400 text-sm">{comparisonData.softFork.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {comparisonData.softFork.pros.map((pro, index) => (
                          <li key={index} className="text-neutral-300 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {comparisonData.softFork.cons.map((con, index) => (
                          <li key={index} className="text-neutral-300 text-sm flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400">{comparisonData.velvetFork.title}</CardTitle>
                  <p className="text-neutral-400 text-sm">{comparisonData.velvetFork.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {comparisonData.velvetFork.pros.map((pro, index) => (
                          <li key={index} className="text-neutral-300 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {comparisonData.velvetFork.cons.map((con, index) => (
                          <li key={index} className="text-neutral-300 text-sm flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{t("faq.title")}</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible
                    key={index}
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-neutral-800/50">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{faq.question}</CardTitle>
                            <ChevronDown
                              className={`w-5 h-5 text-neutral-400 transition-transform ${
                                openFAQ === index ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-neutral-300">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold mb-8">{t("cta.title")}</h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/docs">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                  {t("cta.buttons.readDocumentation")}
                  <BookOpen className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://github.com/ergoplatform/ergo" target="_blank">
                <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl">
                  {t("cta.buttons.viewCode")}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
} 