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
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Link2, Shield, Zap, ExternalLink, ArrowRight, Lock, CheckCircle, Layers, Globe, Network, Code, Terminal, BookOpen, ChevronDown } from "lucide-react"
import { Link } from "@/i18n/navigation"
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

export default function CrossChainBridgesPage() {
  const t = useTranslations("use.bridges")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const features = [
    {
      title: t("features.trustlessTransfers.title"),
      description: t("features.trustlessTransfers.description"),
      icon: Shield,
    },
    {
      title: t("features.multiSignatureSecurity.title"),
      description: t("features.multiSignatureSecurity.description"),
      icon: Lock,
    },
    {
      title: t("features.fastFinality.title"),
      description: t("features.fastFinality.description"),
      icon: Zap,
    },
    {
      title: t("features.multipleChains.title"),
      description: t("features.multipleChains.description"),
      icon: Network,
    },
    {
      title: t("features.wrappedAssets.title"),
      description: t("features.wrappedAssets.description"),
      icon: Layers,
    },
    {
      title: t("features.atomicSwaps.title"),
      description: t("features.atomicSwaps.description"),
      icon: Globe,
    },
  ]

  const existingProjects = [
    {
      name: t("projects.rosenBridge.name"),
      description: t("projects.rosenBridge.description"),
      status: t("projects.rosenBridge.status"),
      chains: [
        t("projects.rosenBridge.chains.chain1"),
        t("projects.rosenBridge.chains.chain2"),
        t("projects.rosenBridge.chains.chain3")
      ],
      link: "https://rosen.tech",
    },
    {
      name: t("projects.spectrumBridge.name"),
      description: t("projects.spectrumBridge.description"),
      status: t("projects.spectrumBridge.status"),
      chains: [
        t("projects.spectrumBridge.chains.chain1"),
        t("projects.spectrumBridge.chains.chain2")
      ],
      link: "https://spectrum.fi",
    },
    {
      name: t("projects.graviton.name"),
      description: t("projects.graviton.description"),
      status: t("projects.graviton.status"),
      chains: [
        t("projects.graviton.chains.chain1"),
        t("projects.graviton.chains.chain2"),
        t("projects.graviton.chains.chain3")
      ],
      link: "#",
    },
  ]

  const faqs = [
    {
      question: t("faq.howBridgesWork.question"),
      answer: t("faq.howBridgesWork.answer")
    },
    {
      question: t("faq.whatIsRosenBridge.question"),
      answer: t("faq.whatIsRosenBridge.answer")
    },
    {
      question: t("faq.areBridgedAssetsSecure.question"),
      answer: t("faq.areBridgedAssetsSecure.answer")
    },
    {
      question: t("faq.whichChainsConnect.question"),
      answer: t("faq.whichChainsConnect.answer")
    },
    {
      question: t("faq.transferTimes.question"),
      answer: t("faq.transferTimes.answer")
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
              name: t("schema.breadcrumbs.crossChainBridges"),
              item: "https://www.ergoblockchain.org/use/cross-chain-bridges"
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

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: t("schema.breadcrumbs.useCases"), href: "/use" },
              { name: t("schema.breadcrumbs.crossChainBridges"), href: "/use/cross-chain-bridges" }
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    {t("title")}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                    {t("subtitle")}
                  </p>
                  <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t("description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://rosen.tech" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50 transition-all duration-300">
                        {t("cta.tryRosenBridge")}
                      </Button>
                    </a>
                    <Link href="https://github.com/rosen-bridge" target="_blank">
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl transition-all duration-300"
                      >
                        {t("cta.viewCode")}
                      </Button>
                    </Link>
                  </div>
                </div>
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                      {t("quickStart.title")}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <a
                        href="https://rosen.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Link2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.useRosenBridge.name")}</h4>
                          </div>
                        </div>
                      </a>
                      
                      <a
                        href="https://docs.rosen.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.bridgeDocs.name")}</h4>
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
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.developerGuide.name")}</h4>
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
                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full hover:bg-black/90 hover:border-orange-400/40 transition-colors">
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
                <TabsList className="bg-black/60 border border-white/20 rounded-2xl p-1">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    {t("technical.tabs.overview")}
                  </TabsTrigger>
                  <TabsTrigger value="rosen" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300">
                    {t("technical.tabs.rosen")}
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

                <TabsContent value="rosen" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">{t("technical.rosen.title")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">{t("technical.rosen.watchers.title")}</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• {t("technical.rosen.watchers.points.point1")}</li>
                              <li>• {t("technical.rosen.watchers.points.point2")}</li>
                              <li>• {t("technical.rosen.watchers.points.point3")}</li>
                              <li>• {t("technical.rosen.watchers.points.point4")}</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">{t("technical.rosen.guards.title")}</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• {t("technical.rosen.guards.points.point1")}</li>
                              <li>• {t("technical.rosen.guards.points.point2")}</li>
                              <li>• {t("technical.rosen.guards.points.point3")}</li>
                              <li>• {t("technical.rosen.guards.points.point4")}</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">{t("technical.rosen.transferProcess.title")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-neutral-950/50 rounded-lg p-4">
                          <pre className="text-sm text-orange-300 overflow-x-auto">
                            <code>{`1. User locks assets on source chain
2. Watchers detect and report event
3. Guards validate the lock proof
4. Multi-sig approves minting
5. Wrapped tokens minted on Ergo
6. User receives wrapped assets`}</code>
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
  // Bridge lock contract
  val bridgeMultiSig = atLeast(
    3, // Minimum 3 of 5 guards
    Coll(
      guard1PubKey,
      guard2PubKey,
      guard3PubKey,
      guard4PubKey,
      guard5PubKey
    )
  )
  
  // Verify lock conditions
  val validLock = {
    OUTPUTS(0).value >= minLockAmount &&
    OUTPUTS(0).R4[Coll[Byte]].get == targetChain &&
    OUTPUTS(0).R5[Coll[Byte]].get == targetAddress
  }
  
  // Allow unlock by guards consensus
  sigmaProp(
    bridgeMultiSig && validLock
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
                    {project.link !== "#" ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full hover:bg-black/90 hover:border-orange-400/40 transition-colors group-hover:shadow-lg group-hover:shadow-orange-500/10">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-white group-hover:text-orange-400 transition-colors">{project.name}</CardTitle>
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  project.status === t("projects.rosenBridge.status")
                                    ? 'bg-green-500/20 text-green-400' 
                                    : project.status === t("projects.spectrumBridge.status")
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : 'bg-blue-500/20 text-blue-400'
                                }`}>
                                  {project.status}
                                </span>
                                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.chains.map((chain) => (
                                <span key={chain} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                                  {chain}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    ) : (
                      <Card className="bg-black/80 border-white/10 rounded-3xl backdrop-blur-sm h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-white">{project.name}</CardTitle>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              project.status === t("projects.rosenBridge.status")
                                ? 'bg-green-500/20 text-green-400' 
                                : project.status === t("projects.spectrumBridge.status")
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-neutral-400">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.chains.map((chain) => (
                              <span key={chain} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                                {chain}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
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
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {t("faq.title")}
                </h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <CollapsibleTrigger asChild>
                        <button className="flex w-full items-center justify-between p-6 text-left hover:bg-black/70 transition-colors rounded-3xl">
                          <span className="text-lg font-medium text-white">{faq.question}</span>
                          <ChevronDown className={`h-5 w-5 text-neutral-400 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
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
                Start bridging assets or learn how to build cross-chain applications on Ergo
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="https://rosen.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Link2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Use Rosen Bridge</h3>
                      <p className="text-orange-400 text-sm">Start Bridging</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Bridge assets between Ergo and other blockchains using the most secure and decentralized bridge protocol
                  </p>
                </a>
                
                <Link 
                  href="/docs/developers"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Developer Docs</h3>
                      <p className="text-orange-400 text-sm">Build Bridges</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Learn how to integrate cross-chain functionality into your applications and contribute to the bridge ecosystem
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* Email Capture */}
          <FinalCTASimple
            title="Stay Updated on Cross-Chain Bridges"
            description="Get notified about new bridge integrations, security updates, and cross-chain opportunities."
          />
        </motion.div>
      </BackgroundWrapper>
    </>
  )
}