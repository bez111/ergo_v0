"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { TrendingUp, Shield, Zap, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, DollarSign, BarChart3, Activity, Users, Code, Terminal, BookOpen, ChevronDown, Coins } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { useState } from "react"
import React from "react"
import { useTranslations } from "next-intl"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

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

export default function AlgorithmicStablecoinsPage() {
  const t = useTranslations("use.stablecoins")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const features = [
    {
      title: t("features.overCollateralized.title"),
      description: t("features.overCollateralized.description"),
      icon: Shield,
    },
    {
      title: t("features.decentralizedGovernance.title"),
      description: t("features.decentralizedGovernance.description"),
      icon: Users,
    },
    {
      title: t("features.transparentReserves.title"),
      description: t("features.transparentReserves.description"),
      icon: BarChart3,
    },
    {
      title: t("features.efficientLiquidations.title"),
      description: t("features.efficientLiquidations.description"),
      icon: Zap,
    },
    {
      title: t("features.multiAssetCollateral.title"),
      description: t("features.multiAssetCollateral.description"),
      icon: Coins,
    },
    {
      title: t("features.composableDefi.title"),
      description: t("features.composableDefi.description"),
      icon: Layers,
    },
  ]

  const existingProjects = [
    {
      name: t("projects.sigmaUsd.name"),
      description: t("projects.sigmaUsd.description"),
      status: t("projects.sigmaUsd.status"),
      tvl: t("projects.sigmaUsd.tvl"),
      link: "https://sigmausd.io",
      features: [
        t("projects.sigmaUsd.features.feature1"),
        t("projects.sigmaUsd.features.feature2"),
        t("projects.sigmaUsd.features.feature3")
      ],
    },
    {
      name: t("projects.gluonGold.name"),
      description: t("projects.gluonGold.description"),
      status: t("projects.gluonGold.status"),
      tvl: t("projects.gluonGold.tvl"),
      link: "https://gluon.gold",
      features: [
        t("projects.gluonGold.features.feature1"),
        t("projects.gluonGold.features.feature2"),
        t("projects.gluonGold.features.feature3")
      ],
    },
  ]

  const faqs = [
    {
      question: t("faq.howMaintainPeg.question"),
      answer: t("faq.howMaintainPeg.answer")
    },
    {
      question: t("faq.whyErgoIdeal.question"),
      answer: t("faq.whyErgoIdeal.answer")
    },
    {
      question: t("faq.howAgeUsdWorks.question"),
      answer: t("faq.howAgeUsdWorks.answer")
    },
    {
      question: t("faq.risks.question"),
      answer: t("faq.risks.answer")
    },
    {
      question: t("faq.buildOwn.question"),
      answer: t("faq.buildOwn.answer")
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
              name: t("schema.breadcrumbs.useCases"),
              item: "https://ergoblockchain.org/use"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: t("schema.breadcrumbs.algorithmicStablecoins"),
              item: "https://ergoblockchain.org/use/stablecoins"
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
      
      <BackgroundWrapper>
        <div className="container mx-auto px-4 py-16">

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: t("schema.breadcrumbs.useCases"), href: "/use" },
              { name: t("schema.breadcrumbs.algorithmicStablecoins"), href: "/use/stablecoins" }
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
            className="pt-28 pb-10 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t("title")}</h1>
                  <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">{t("subtitle")}</p>
                  <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">{t("description")}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50 transition-all duration-300">
                      <a href="https://sigmausd.io" target="_blank" rel="noopener noreferrer">{t("cta.trySignaUsd")}</a>
                    </Button>
                    <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl transition-all duration-300">
                      <a href="https://github.com/Emurgo/age-usd" target="_blank" rel="noopener noreferrer">{t("cta.viewProtocol")}</a>
                    </Button>
                  </div>
                </div>
                <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                      {t("quickStart.title")}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <a
                        href="https://sigmausd.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <DollarSign className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.useSigmaUsd.name")}</h4>
                          </div>
                        </div>
                      </a>
                      
                      <a
                        href="https://github.com/Emurgo/age-usd/blob/main/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.readWhitepaper.name")}</h4>
                          </div>
                        </div>
                      </a>
                      
                      <Link
                        href="/docs/developers"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Terminal className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.developerDocs.name")}</h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
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
                  {t("features.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("features.subtitle")}
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
                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 border border-orange-500/30">
                            <feature.icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        </div>
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
                  {t("technical.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("technical.subtitle")}
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-white/20 rounded-2xl p-1">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    {t("technical.tabs.overview")}
                  </TabsTrigger>
                  <TabsTrigger value="ageusd" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    {t("technical.tabs.ageUsd")}
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    {t("technical.tabs.code")}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">{t("technical.overview.title")}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-neutral-400 leading-relaxed">
                        <p className="mb-4">
                          {t("technical.overview.description")}
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>{t("technical.overview.points.point1")}</li>
                          <li>{t("technical.overview.points.point2")}</li>
                          <li>{t("technical.overview.points.point3")}</li>
                          <li>{t("technical.overview.points.point4")}</li>
                          <li>{t("technical.overview.points.point5")}</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ageusd" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">{t("technical.ageUsd.title")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">{t("technical.ageUsd.sigmaUsd.title")}</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• {t("technical.ageUsd.sigmaUsd.points.point1")}</li>
                              <li>• {t("technical.ageUsd.sigmaUsd.points.point2")}</li>
                              <li>• {t("technical.ageUsd.sigmaUsd.points.point3")}</li>
                              <li>• {t("technical.ageUsd.sigmaUsd.points.point4")}</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">{t("technical.ageUsd.sigmaRsv.title")}</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• {t("technical.ageUsd.sigmaRsv.points.point1")}</li>
                              <li>• {t("technical.ageUsd.sigmaRsv.points.point2")}</li>
                              <li>• {t("technical.ageUsd.sigmaRsv.points.point3")}</li>
                              <li>• {t("technical.ageUsd.sigmaRsv.points.point4")}</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">{t("technical.ageUsd.reserveMechanics.title")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-orange-300 overflow-x-auto">
                            <code>{`Reserve Ratio = (ERG in Reserve × ERG Price) / SigmaUSD Supply

Minimum Reserve Ratio: 400%
Optimal Reserve Ratio: 500-800%

When ERG price rises:
  → Reserve ratio increases
  → More SigmaUSD can be minted
  → SigmaRSV holders profit

When ERG price falls:
  → Reserve ratio decreases
  → Minting restricted if < 400%
  → SigmaRSV holders absorb loss`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-8">
                  <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">{t("technical.codeExample.title")}</CardTitle>
                      <p className="text-neutral-400">{t("technical.codeExample.description")}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <pre className="text-sm text-orange-300 overflow-x-auto">
                          <code>{`{
  // Check reserve ratio is healthy
  val reserveRatio = SELF.R4[Long].get
  val minRatio = 400L // 400%
  
  // Get oracle price
  val oracleBox = CONTEXT.dataInputs(0)
  val ergPrice = oracleBox.R4[Long].get
  
  // Calculate stablecoin amount
  val stableAmount = OUTPUTS(0).R5[Long].get
  val requiredErg = (stableAmount * 1000000) / ergPrice
  
  // Verify conditions
  sigmaProp(
    reserveRatio >= minRatio &&
    OUTPUTS(0).value >= requiredErg &&
    OUTPUTS(0).propositionBytes == userPubKey &&
    OUTPUTS(1).R4[Long].get == reserveRatio - requiredErg
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
                  {t("projects.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("projects.subtitle")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
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
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-full group focus:outline-none focus:ring-2 focus:ring-orange-500/60 rounded-3xl"
                    >
                      <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/10 cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-white group-hover:text-orange-400 transition-colors">{project.name}</CardTitle>
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                project.status === t("projects.sigmaUsd.status")
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {project.status}
                              </span>
                              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-neutral-400">{project.description}</p>
                          {project.tvl !== t("projects.gluonGold.tvl") && (
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-orange-400" />
                              <span className="text-sm text-neutral-300">TVL: {project.tvl}</span>
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature) => (
                              <span key={feature} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </a>
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
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-white">
                {t("faq.title")}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                    <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                      <CollapsibleTrigger asChild>
                        <button className="w-full">
                          <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
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
                          <div className="text-neutral-300 leading-relaxed [&>a]:text-orange-400 [&>a]:underline [&>a]:hover:text-orange-300 [&>b]:text-white [&>br]:mb-2">
                            {faq.answer}
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>

          {/* What's Next Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                What's <span className="text-orange-400">Next?</span>
              </h2>
              <p className="text-xl text-center text-neutral-300 mb-12">
                Start using or building algorithmic stablecoins on Ergo today
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="https://sigmausd.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Use SigmaUSD</h3>
                      <p className="text-orange-400 text-sm">Start Trading</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Experience the first algorithmic stablecoin on Ergo using the AgeUSD protocol
                  </p>
                </a>
                
                <Link 
                  href="/docs/developers"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Developer Docs</h3>
                      <p className="text-orange-400 text-sm">Build Your Own</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Access documentation and tools to build your own stablecoin protocols on Ergo
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* Email Capture */}
          <FinalCTASimple
            title="Stay Updated on Ergo Stablecoins"
            description="Get notified about SigmaUSD updates, new stablecoin protocols, and DeFi innovations."
          />
        </motion.div>
        </div>
      </BackgroundWrapper>
    </>
  )
}