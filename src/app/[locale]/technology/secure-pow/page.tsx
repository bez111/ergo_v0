"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { FadeIn } from "@/components/animations/fade-in"
import { Shield, Cpu, Zap, Users, CheckCircle, TrendingUp, ChevronDown, Pickaxe, BookOpen } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { GlossaryLink } from "@/components/glossary"

export default function SecurePowPage() {
  const t = useTranslations("technology.securePow")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const exampleCmd = t("exampleCommand")

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  }

  const features = [
    {
      icon: Shield,
      title: t("features.asicResistant.title"),
      description: t("features.asicResistant.description"),
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: Zap,
      title: t("features.energyEfficient.title"),
      description: t("features.energyEfficient.description"),
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      icon: Users,
      title: t("features.fairLaunch.title"),
      description: t("features.fairLaunch.description"),
      color: "from-purple-500/20 to-purple-500/5",
    },
  ]

  const networkStats = [
    { label: t("networkStats.hashrate.label"), value: t("networkStats.hashrate.value"), change: t("networkStats.hashrate.change") },
    { label: t("networkStats.miners.label"), value: t("networkStats.miners.value"), change: t("networkStats.miners.change") },
    { label: t("networkStats.blockTime.label"), value: t("networkStats.blockTime.value"), change: t("networkStats.blockTime.change") },
    { label: t("networkStats.difficulty.label"), value: t("networkStats.difficulty.value"), change: t("networkStats.difficulty.change") },
  ]

  const benefits = [
    t("benefits.decentralization"),
    t("benefits.captureResistance"),
    t("benefits.battleTested"),
    t("benefits.openParticipation"),
    t("benefits.gpuCompetitive"),
    t("benefits.sustainableEconomics"),
  ]

  const faqs = [
    {
      question: t("faq.whatIsAutolykos.question"),
      answer: t("faq.whatIsAutolykos.answer"),
    },
    {
      question: t("faq.asicProof.question"),
      answer: t("faq.asicProof.answer"),
    },
    {
      question: t("faq.minerSoftware.question"),
      answer: t("faq.minerSoftware.answer"),
    },
    {
      question: t("faq.poolVsSolo.question"),
      answer: t("faq.poolVsSolo.answer"),
    },
    {
      question: t("faq.hashratePower.question"),
      answer: t("faq.hashratePower.answer"),
    },
    {
      question: t("faq.environmentalImpact.question"),
      answer: t("faq.environmentalImpact.answer"),
    },
  ]

  const quickStartSteps = [
    t("quickStart.steps.installWallet"),
    t("quickStart.steps.chooseMiner"),
    t("quickStart.steps.choosePool"),
    t("quickStart.steps.launchMiner"),
    t("quickStart.steps.testStability"),
  ]

  const commonPitfalls = [
    t("quickStart.pitfalls.memoryOverclock"),
    t("quickStart.pitfalls.monitorTemperatures"),
    t("quickStart.pitfalls.avoidLaptops"),
  ]

  const algorithmFeatures = [
    t("algorithm.features.memoryHard"),
    t("algorithm.features.asicResistant"),
    t("algorithm.features.gpuFriendly"),
  ]

  const algorithmBenefits = [
    t("algorithm.benefits.memoryBandwidth"),
    t("algorithm.benefits.bluntsAsic"),
    t("algorithm.benefits.decentralization"),
  ]

  return (
    <>
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Technology", item: "https://ergoblockchain.org/technology" },
            { "@type": "ListItem", position: 2, name: "Secure PoW", item: "https://ergoblockchain.org/technology/secure-pow" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: t("seo.title"),
          description: t("seo.description"),
          image: "https://ergoblockchain.org/og/secure-pow.png",
          datePublished: "2025-08-10",
          dateModified: "2025-08-10",
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/technology/secure-pow",
        }}
      />
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: t("howTo.title"),
          description: t("howTo.description"),
          totalTime: "PT30M",
          estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
          image: "https://ergoblockchain.org/og/secure-pow.png",
          tool: [
            { "@type": "HowToTool", name: t("howTo.tools.gpu") },
            { "@type": "HowToTool", name: t("howTo.tools.minerSoftware") },
          ],
          supply: [
            { "@type": "HowToSupply", name: t("howTo.supplies.walletAddress") },
            { "@type": "HowToSupply", name: t("howTo.supplies.poolUrl") },
          ],
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: t("howTo.steps.installWallet.title"),
              text: t("howTo.steps.installWallet.description"),
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: t("howTo.steps.pickMiner.title"),
              text: t("howTo.steps.pickMiner.description"),
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: t("howTo.steps.choosePool.title"),
              text: t("howTo.steps.choosePool.description"),
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: t("howTo.steps.launchMiner.title"),
              text: t("howTo.steps.launchMiner.description"),
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: t("howTo.steps.testStability.title"),
              text: t("howTo.steps.testStability.description"),
            },
          ],
        }}
      />
      
      <BackgroundWrapper>
        <div className="min-h-screen text-white">
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: "Secure PoW", href: "/technology/secure-pow" }
            ]}
            className="mb-8"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Network Statistics */}
          <FadeIn delay={0.2}>
            <div className="max-w-7xl mx-auto mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{t("title")}</h1>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo uses Autolykos v2 — a memory-hard, GPU-friendly Proof-of-Work that keeps mining decentralized and accessible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl">
                      {t("buttons.startMining")}
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 px-6 py-3 rounded-xl">
                      {t("buttons.readWhitepaper")}
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          {t("networkStats.title")}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {networkStats.map((stat, index) => (
                            <div
                              key={stat.label}
                              className="text-center p-4 bg-neutral-900/60 rounded-lg"
                            >
                              <div className="text-xl font-bold text-orange-400 mb-1">{stat.value}</div>
                              <div className="text-xs text-neutral-400 mb-2">{stat.label}</div>
                              <Badge variant={stat.change.includes("+") ? "default" : "secondary"} className="text-xs">
                                {stat.change}
                              </Badge>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-neutral-500 mt-4 text-center">
                          {t("networkStats.note")}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Key Features */}
          <FadeIn delay={0.4}>
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                {t("whyPoW.title")}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group"
                  >
                    <Card
                      className={`bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 hover:border-orange-500/30 transition-colors h-full`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-orange-400" aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        </div>
                        <p className="text-neutral-200 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* What is Autolykos v2 */}
          <FadeIn delay={0.6}>
            <div id="what-is-autolykos" className="space-y-8 mb-16">
              <Card className="bg-black border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden relative group hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                      {t("whatIsAutolykos.title")}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  <div className="bg-black/60 rounded-lg p-4 border border-white/20">
                    <p className="text-neutral-300 text-sm">
                      {t("whatIsAutolykos.learnMore")} <Link href="/technology/eutxo-model" className="text-orange-400 hover:text-orange-300 underline transition-colors">{t("whatIsAutolykos.eutxoLink")}</Link> {t("whatIsAutolykos.and")}
                      <Link href="/technology/storage-rent" className="text-orange-400 hover:text-orange-300 underline transition-colors ml-1">{t("whatIsAutolykos.storageRentLink")}</Link> {t("whatIsAutolykos.sustainableEconomics")}.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {algorithmFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-black/60 rounded-lg border border-white/20">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <Cpu className="w-4 h-4 text-orange-400" />
                          </div>
                          <span className="text-sm font-medium text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {algorithmBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-black/60 rounded-lg border border-white/20">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            {index === 0 ? <Cpu className="w-4 h-4 text-orange-400" /> : 
                             index === 1 ? <Shield className="w-4 h-4 text-orange-400" /> : 
                             <Users className="w-4 h-4 text-orange-400" />}
                          </div>
                          <span className="text-sm font-medium text-white">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="security-benefits" className="bg-black border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden relative group hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                      {t("securityBenefits.title")}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {benefits.map((benefit, index) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 p-4 bg-black/60 rounded-lg border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-colors"
                      >
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-sm text-neutral-200 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-black/60 rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-red-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{t("threatModel.title")}</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        <span className="font-medium text-white">{t("threatModel.memoryBottleneck.title")}:</span> {t("threatModel.memoryBottleneck.description")}
                      </p>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        <span className="font-medium text-white">{t("threatModel.broaderParticipation.title")}:</span> {t("threatModel.broaderParticipation.description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Mining Progress */}
          <FadeIn delay={0.8}>
            <Card className="mb-16 bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  {t("miningDecentralization.title")}
                </CardTitle>
                <CardDescription>{t("miningDecentralization.description")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>{t("miningDecentralization.topPools")}</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>{t("miningDecentralization.soloMiners")}</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>{t("miningDecentralization.smallPools")}</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <p className="text-sm text-neutral-400 mt-4">
                  {t("miningDecentralization.healthyNote")}
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Quick Start */}
          <FadeIn delay={0.85}>
            <div id="quick-start" className="max-w-5xl mx-auto mb-16">
              <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{t("quickStart.title")}</CardTitle>
                  <CardDescription>{t("quickStart.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ol
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-20%" }}
                    className="list-decimal list-inside space-y-2 text-sm text-neutral-300 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {quickStartSteps.map((step, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="rounded px-1 -mx-1 hover:bg-neutral-800/30 transition-colors"
                      >
                        {step}
                      </motion.li>
                    ))}
                  </motion.ol>
                  <div className="mt-4 text-sm text-neutral-300">
                    <p className="font-semibold mb-2">{t("quickStart.pitfallsTitle")}</p>
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-20%" }}
                      className="list-disc list-inside space-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {commonPitfalls.map((pitfall, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="rounded px-1 -mx-1 hover:bg-neutral-800/30 transition-colors"
                        >
                          {pitfall}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2">
                      <span className="text-xs text-neutral-400">{t("quickStart.sampleCommand")}</span>
                    </div>
                    <pre className="bg-neutral-950/80 p-3 rounded-lg text-sm font-mono text-neutral-200 overflow-x-auto"><code>{exampleCmd}</code></pre>
                  </div>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 rounded-xl">
                      <Link href="/use/mining">{t("quickStart.openGuide")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* FAQ Section */}
          <FadeIn delay={0.9}>
            <div id="faq" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                {t("faq.title")}
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300"
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
                            className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                            aria-hidden="true"
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

          {/* What's Next Section */}
          <FadeIn delay={1.0}>
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                What's <span className="text-orange-400">Next</span>?
              </h2>
              <p className="text-xl text-center text-neutral-300 mb-12">
                Continue your journey with Ergo mining
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/use/mining"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Pickaxe className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Start Mining</h3>
                      <p className="text-orange-400 text-sm">Get Started</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Learn how to set up your mining operation and join the Ergo network
                  </p>
                </Link>
                
                <a 
                  href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Read Whitepaper</h3>
                      <p className="text-orange-400 text-sm">Technical Details</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Deep dive into the technical specifications of Autolykos v2 consensus algorithm
                  </p>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
        </div>
      </BackgroundWrapper>
    </>
  )
}
