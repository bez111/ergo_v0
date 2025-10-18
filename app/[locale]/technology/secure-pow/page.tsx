"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Shield, Cpu, Zap, Users, ExternalLink, CheckCircle, TrendingUp, ChevronDown, Link as LinkIcon, BookOpen, Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

export default function SecurePowPage() {
  const t = useTranslations("technology.securePow")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
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
      
      <div className="min-h-screen bg-black text-white">
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Secure PoW", href: "/technology/secure-pow" }
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
                    {t("description.intro")}
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t("description.main")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      <Link href="/use/mining">{t("buttons.startMining")}</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm">
                      <Link href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer">{t("buttons.readWhitepaper")}</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-orange-500/30 transition-colors">
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
                    </Card>
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
                      className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/30 transition-colors h-full`}
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                          <feature.icon className="w-8 h-8 text-orange-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
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
              <Card className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border border-orange-500/20 backdrop-blur-sm rounded-xl overflow-hidden relative group hover:border-orange-500/40 transition-all duration-300">
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
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    {t("whatIsAutolykos.description")}
                  </p>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50">
                    <p className="text-neutral-300 text-sm">
                      {t("whatIsAutolykos.learnMore")} <Link href="/technology/eutxo-model" className="text-orange-400 hover:text-orange-300 underline transition-colors">{t("whatIsAutolykos.eutxoLink")}</Link> {t("whatIsAutolykos.and")}
                      <Link href="/technology/storage-rent" className="text-orange-400 hover:text-orange-300 underline transition-colors ml-1">{t("whatIsAutolykos.storageRentLink")}</Link> {t("whatIsAutolykos.sustainableEconomics")}.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {algorithmFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <Cpu className="w-4 h-4 text-orange-400" />
                          </div>
                          <span className="text-sm font-medium text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {algorithmBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
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

              <Card id="security-benefits" className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border border-green-500/20 backdrop-blur-sm rounded-xl overflow-hidden relative group hover:border-green-500/40 transition-all duration-300">
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
                        className="flex items-start gap-3 p-4 bg-neutral-800/30 rounded-lg border border-neutral-700/30 hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-sm text-neutral-200 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-700/30 rounded-lg p-6 border border-neutral-700/50">
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
            <Card className="mb-16 bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
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
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-neutral-400">{t("quickStart.sampleCommand")}</span>
                      <button
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(exampleCmd)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1500)
                          } catch {}
                        }}
                        className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-orange-400 transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                        aria-label="Copy sample command"
                        title="Copy"
                      >
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        {copied ? t("quickStart.copied") : t("quickStart.copy")}
                      </button>
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
                    className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl"
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

          {/* CTA */}
          <FadeIn delay={1.0}>
            <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
              <CardContent className="text-center py-12">
                <h3 className="text-4xl font-bold mb-6 text-white">
                  {t("cta.title")}
                </h3>
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    <Link href="/use/mining">{t("cta.buttons.miningGuide")}</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm gap-2">
                    <Link href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer">
                      {t("cta.buttons.whitepaper")}
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-neutral-400 mt-6">
                  {t("cta.relatedText")}: <Link href="/technology/storage-rent" className="underline hover:opacity-80">{t("cta.storageRentLink")}</Link> ·
                  <Link href="/technology#adaptive-emission-governance" className="underline hover:opacity-80 ml-2">{t("cta.adaptiveEmissionLink")}</Link>
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </>
  )
}
