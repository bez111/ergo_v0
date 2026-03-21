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
import { Gamepad2, Coins, Globe, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, Sparkles, Trophy, Code, Terminal, BookOpen, ChevronDown } from "lucide-react"
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

export default function GamingMetaversePage() {
  const t = useTranslations("use.gaming")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const features = [
    {
      title: t("features.inGameAssets.title"),
      description: t("features.inGameAssets.description"),
      icon: Trophy,
    },
    {
      title: t("features.playToEarn.title"),
      description: t("features.playToEarn.description"),
      icon: Coins,
    },
    {
      title: t("features.virtualWorlds.title"),
      description: t("features.virtualWorlds.description"),
      icon: Globe,
    },
    {
      title: t("features.crossGameItems.title"),
      description: t("features.crossGameItems.description"),
      icon: Layers,
    },
    {
      title: t("features.dynamicNfts.title"),
      description: t("features.dynamicNfts.description"),
      icon: Sparkles,
    },
    {
      title: t("features.daoGovernance.title"),
      description: t("features.daoGovernance.description"),
      icon: CheckCircle,
    },
  ]

  const projects = [
    {
      name: t("projects.blitzTcg.name"),
      description: t("projects.blitzTcg.description"),
      status: t("projects.blitzTcg.status"),
      features: [
        t("projects.blitzTcg.features.feature1"),
        t("projects.blitzTcg.features.feature2"),
        t("projects.blitzTcg.features.feature3")
      ],
    },
    {
      name: t("projects.ergoRacer.name"),
      description: t("projects.ergoRacer.description"),
      status: t("projects.ergoRacer.status"),
      features: [
        t("projects.ergoRacer.features.feature1"),
        t("projects.ergoRacer.features.feature2"),
        t("projects.ergoRacer.features.feature3")
      ],
    },
    {
      name: t("projects.cyberPunks.name"),
      description: t("projects.cyberPunks.description"),
      status: t("projects.cyberPunks.status"),
      features: [
        t("projects.cyberPunks.features.feature1"),
        t("projects.cyberPunks.features.feature2"),
        t("projects.cyberPunks.features.feature3")
      ],
    },
  ]

  const faqs = [
    {
      question: t("faq.howBlockchainGamesWork.question"),
      answer: t("faq.howBlockchainGamesWork.answer")
    },
    {
      question: t("faq.whatAreDynamicGameNfts.question"),
      answer: t("faq.whatAreDynamicGameNfts.answer")
    },
    {
      question: t("faq.canAssetsBeUsedAcrossGames.question"),
      answer: t("faq.canAssetsBeUsedAcrossGames.answer")
    },
    {
      question: t("faq.howPlayToEarnWorks.question"),
      answer: t("faq.howPlayToEarnWorks.answer")
    },
    {
      question: t("faq.whatMakesErgoGoodForGaming.question"),
      answer: t("faq.whatMakesErgoGoodForGaming.answer")
    },
  ]

  const lastUpdated = "2024-01-15"

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
              item: "https://www.ergoblockchain.org/use"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: t("schema.breadcrumbs.gamingMetaverse"),
              item: "https://www.ergoblockchain.org/use/gaming-metaverse"
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
              { name: t("schema.breadcrumbs.gamingMetaverse"), href: "/use/gaming-metaverse" }
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
                      <Link href="/ecosystem">{t("cta.exploreGames")}</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl transition-all duration-300">
                      <Link href="/docs/developers">{t("cta.buildAGame")}</Link>
                    </Button>
                  </div>
                </div>
                <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                      {t("quickStart.title")}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <Link
                        href="/ecosystem"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Gamepad2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.playGames.name")}</h4>
                          </div>
                        </div>
                      </Link>
                      
                      <a
                        href="https://github.com/ergoplatform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Code className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.gameSdk.name")}</h4>
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
                  <TabsTrigger value="economy" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    {t("technical.tabs.economy")}
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

                <TabsContent value="economy" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">{t("technical.economy.title")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">{t("technical.economy.gameTokens.title")}</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• {t("technical.economy.gameTokens.points.point1")}</li>
                              <li>• {t("technical.economy.gameTokens.points.point2")}</li>
                              <li>• {t("technical.economy.gameTokens.points.point3")}</li>
                              <li>• {t("technical.economy.gameTokens.points.point4")}</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">{t("technical.economy.nftAssets.title")}</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• {t("technical.economy.nftAssets.points.point1")}</li>
                              <li>• {t("technical.economy.nftAssets.points.point2")}</li>
                              <li>• {t("technical.economy.nftAssets.points.point3")}</li>
                              <li>• {t("technical.economy.nftAssets.points.point4")}</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">{t("technical.economy.playToEarnModel.title")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-orange-300 overflow-x-auto">
                            <code>{`Revenue Streams:
1. Quest completion rewards
2. PvP tournament prizes
3. NFT trading fees
4. Land ownership income
5. Crafting & creation`}</code>
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
  // Dynamic game item NFT
  val itemId = SELF.tokens(0)._1
  val owner = SELF.R4[Coll[Byte]].get
  
  // Item properties
  val itemType = SELF.R5[Int].get // 1=sword, 2=shield
  val level = SELF.R6[Int].get
  val experience = SELF.R7[Long].get
  val attributes = SELF.R8[Coll[Int]].get
  
  // Level up logic
  val expRequired = level * 1000L
  val canLevelUp = experience >= expRequired
  
  val newLevel = if (canLevelUp) level + 1 else level
  val newExp = if (canLevelUp) 0L else experience
  
  // Update item stats
  sigmaProp(
    OUTPUTS(0).R6[Int].get == newLevel &&
    OUTPUTS(0).R7[Long].get == newExp
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

          {/* Game Projects */}
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
              
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">{project.name}</CardTitle>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === t("projects.cyberPunks.status")
                              ? 'bg-green-500/20 text-green-400' 
                              : project.status === t("projects.blitzTcg.status")
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-purple-500/20 text-purple-400'
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
                Start playing or building blockchain games on Ergo today
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/ecosystem"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Gamepad2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Explore Games</h3>
                      <p className="text-orange-400 text-sm">Start Playing</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Discover and play blockchain games built on Ergo's gaming ecosystem
                  </p>
                </Link>
                
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
                      <p className="text-orange-400 text-sm">Start Building</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Access documentation and tools to build your own blockchain games on Ergo
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* Email Capture */}
          <FinalCTASimple
            title="Stay Updated on Blockchain Gaming"
            description="Get notified about new games, NFT drops, and gaming ecosystem updates on Ergo."
          />
        </motion.div>
        </div>
      </BackgroundWrapper>
    </>
  )
}