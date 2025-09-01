"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Database,
  Recycle,
  TrendingUp,
  Clock,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Zap,
  Shield,
  Coins,
  Timer,
  BarChart3,
  RefreshCw,
  Target,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { useMemo } from "react"

const PUBLISHED = "2023-11-10"
const UPDATED = "2025-08-10"

function RentEstimator() {
  const t = useTranslations("technology.storageRent")
  const [ageYears, setAgeYears] = useState<number>(4)
  const [boxValue, setBoxValue] = useState<number>(1.0)
  // Simplified illustrative estimator; not protocol-accurate
  const estimatedRent = useMemo(() => {
    const periods = Math.max(0, Math.floor(ageYears / 4))
    const perPeriod = 0.13 // ERG per 4 years (illustrative)
    return +(periods * perPeriod).toFixed(4)
  }, [ageYears])
  const remaining = Math.max(0, +(boxValue - estimatedRent).toFixed(4))
  const topUpNeeded = estimatedRent > boxValue ? +(estimatedRent - boxValue).toFixed(4) : 0
  return (
    <div className="grid md:grid-cols-3 gap-4 items-end">
      <div>
        <label className="block text-xs text-neutral-400 mb-1">{t("estimator.boxAge")}</label>
        <input type="number" min={0} step={1} value={ageYears} onChange={(e)=>setAgeYears(Number(e.target.value))} className="w-full bg-neutral-900/60 border border-neutral-700 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div>
        <label className="block text-xs text-neutral-400 mb-1">{t("estimator.boxValue")}</label>
        <input type="number" min={0} step={0.01} value={boxValue} onChange={(e)=>setBoxValue(Number(e.target.value))} className="w-full bg-neutral-900/60 border border-neutral-700 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div className="text-sm text-neutral-300" aria-live="polite">
        <div className="flex justify-between"><span>{t("estimator.estimatedRent")}:</span><span className="font-semibold">{estimatedRent} ERG</span></div>
        <div className="flex justify-between"><span>{t("estimator.topUpNeeded")}:</span><span className="font-semibold">{topUpNeeded} ERG</span></div>
        <div className="flex justify-between"><span>{t("estimator.remainingValue")}:</span><span className="font-semibold">{remaining} ERG</span></div>
        <p className="text-xs text-neutral-500 mt-1">{t("estimator.disclaimer")}</p>
      </div>
    </div>
  )
}

export default function StorageRentPage() {
  const t = useTranslations("technology.storageRent")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const problems = [
    {
      title: t("problems.bloat.title"),
      description: t("problems.bloat.description"),
      icon: <Database className="w-8 h-8" aria-hidden="true" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      stats: t("problems.bloat.stats"),
    },
    {
      title: t("problems.forgottenWallets.title"),
      description: t("problems.forgottenWallets.description"),
      icon: <AlertTriangle className="w-8 h-8" aria-hidden="true" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      stats: t("problems.forgottenWallets.stats"),
    },
    {
      title: t("problems.networkStagnation.title"),
      description: t("problems.networkStagnation.description"),
      icon: <TrendingUp className="w-8 h-8" aria-hidden="true" />,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      stats: t("problems.networkStagnation.stats"),
    },
  ]

  const benefits = [
    { text: t("benefits.cleanBlockchain"), icon: <Zap className="w-5 h-5" aria-hidden="true" /> },
    { text: t("benefits.minerRewards"), icon: <Coins className="w-5 h-5" aria-hidden="true" /> },
    { text: t("benefits.networkHealth"), icon: <Shield className="w-5 h-5" aria-hidden="true" /> },
    { text: t("benefits.reduceLostFunds"), icon: <RefreshCw className="w-5 h-5" aria-hidden="true" /> },
    { text: t("benefits.predictableCosts"), icon: <BarChart3 className="w-5 h-5" aria-hidden="true" /> },
    { text: t("benefits.automaticCleanup"), icon: <Target className="w-5 h-5" aria-hidden="true" /> },
  ]

  const timeline = [
    {
      year: t("timeline.noRent.year"),
      status: t("timeline.noRent.status"),
      description: t("timeline.noRent.description"),
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      icon: <Shield className="w-6 h-6" aria-hidden="true" />,
      details: t("timeline.noRent.details"),
    },
    {
      year: t("timeline.rentBegins.year"),
      status: t("timeline.rentBegins.status"),
      description: t("timeline.rentBegins.description"),
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      icon: <Timer className="w-6 h-6" aria-hidden="true" />,
      details: t("timeline.rentBegins.details"),
    },
    {
      year: t("timeline.ownerReturns.year"),
      status: t("timeline.ownerReturns.status"),
      description: t("timeline.ownerReturns.description"),
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      icon: <RefreshCw className="w-6 h-6" aria-hidden="true" />,
      details: t("timeline.ownerReturns.details"),
    },
    {
      year: t("timeline.boxDepleted.year"),
      status: t("timeline.boxDepleted.status"),
      description: t("timeline.boxDepleted.description"),
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      icon: <Recycle className="w-6 h-6" aria-hidden="true" />,
      details: t("timeline.boxDepleted.details"),
    },
  ]

  const solutions = [
    {
      title: t("solutions.automaticRecycling.title"),
      description: t("solutions.automaticRecycling.description"),
      icon: <Recycle className="w-12 h-12" aria-hidden="true" />,
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: t("solutions.noForgottenWallets.title"),
      description: t("solutions.noForgottenWallets.description"),
      icon: <Clock className="w-12 h-12" aria-hidden="true" />,
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      title: t("solutions.predictableCosts.title"),
      description: t("solutions.predictableCosts.description"),
      icon: <TrendingUp className="w-12 h-12" aria-hidden="true" />,
      color: "text-green-400",
      gradient: "from-green-500/20 to-green-500/5",
    },
  ]

  const faqs = [
    {
      question: t("faq.whyStorageRent.question"),
      answer: t("faq.whyStorageRent.answer"),
    },
    {
      question: t("faq.longTermInvestor.question"),
      answer: t("faq.longTermInvestor.answer"),
    },
    {
      question: t("faq.whyImportant.question"),
      answer: t("faq.whyImportant.answer"),
    },
    {
      question: t("faq.whereRentGoes.question"),
      answer: t("faq.whereRentGoes.answer"),
    },
  ]

  const corePrinciples = [
    {
      name: t("corePrinciples.preventBloat.name"),
      description: t("corePrinciples.preventBloat.description"),
      icon: <Recycle className="w-6 h-6 text-orange-400" aria-hidden="true" />,
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      name: t("corePrinciples.economicSustainability.name"),
      description: t("corePrinciples.economicSustainability.description"),
      icon: <TrendingUp className="w-6 h-6 text-orange-400" aria-hidden="true" />,
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      name: t("corePrinciples.predictableCosts.name"),
      description: t("corePrinciples.predictableCosts.description"),
      icon: <Clock className="w-6 h-6 text-orange-400" aria-hidden="true" />,
      color: "from-purple-500/20 to-purple-500/5",
    },
  ]

  const avoidRentSteps = [
    t("avoidRent.steps.moveFunds"),
    t("avoidRent.steps.consolidateDust"),
    t("avoidRent.steps.planTopUps"),
  ]

  const developerTips = [
    t("developer.tips.avoidTinyBoxes"),
    t("developer.tips.maintenancePath"),
    t("developer.tips.trackBoxAge"),
  ]

  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Technology", item: "https://ergoblockchain.org/technology" },
            { "@type": "ListItem", position: 2, name: "Storage Rent", item: "https://ergoblockchain.org/technology/storage-rent" },
          ],
        }}
      />
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
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: t("seo.title"),
          description: t("seo.description"),
          image: "https://ergoblockchain.org/og/storage-rent.png",
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/technology/storage-rent",
        }}
      />
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: t("howTo.title"),
          description: t("howTo.description"),
          step: [
            { "@type": "HowToStep", position: 1, name: t("howTo.steps.moveFunds.title"), text: t("howTo.steps.moveFunds.description") },
            { "@type": "HowToStep", position: 2, name: t("howTo.steps.consolidateDust.title"), text: t("howTo.steps.consolidateDust.description") },
            { "@type": "HowToStep", position: 3, name: t("howTo.steps.planTopUps.title"), text: t("howTo.steps.planTopUps.description") },
          ],
        }}
      />

      <main className="min-h-screen relative">
        {/* Breadcrumbs */}
        <div className="sr-only">
                      <Breadcrumbs
              items={[
                { name: "Technology", href: "/technology" },
                { name: "Storage Rent", href: "/technology/storage-rent" }
              ]}
              className="mb-8"
            />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{t("title")}</h1>
                  <h2 className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-2xl">{t("subtitle")}</h2>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t("description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      <Link href="#how-it-works">{t("buttons.learnMore")}</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm">
                      <Link href="https://docs.ergoplatform.com/protocol/storage-rent/" target="_blank" rel="noopener noreferrer">{t("buttons.viewDetails")}</Link>
                    </Button>
                  </div>
                  <div className="mt-6 text-sm text-neutral-400 space-x-3">
                    <Link href="#problem" className="underline hover:opacity-80">{t("navigation.what")}</Link>
                    <span>·</span>
                    <Link href="#how-it-works" className="underline hover:opacity-80">{t("navigation.how")}</Link>
                    <span>·</span>
                    <Link href="#estimator" className="underline hover:opacity-80">{t("navigation.costs")}</Link>
                    <span>·</span>
                    <Link href="#faq" className="underline hover:opacity-80">{t("navigation.faq")}</Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-orange-500/30">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">{t("corePrinciples.title")}</h3>
                        <div className="space-y-4">
                          {corePrinciples.map((feature, index) => (
                            <div
                              key={feature.name}
                              className={`p-4 rounded-lg bg-neutral-900/60 border border-neutral-700`}
                            >
                              <div className="flex items-center space-x-3">
                                <div>{feature.icon}</div>
                                <div>
                                  <h4 className="font-semibold text-white">{feature.name}</h4>
                                  <p className="text-sm text-neutral-400">{feature.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problems Section - Enhanced */}
          <section className="py-20 px-4" id="problem">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("problemSection.title")}</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  {t("problemSection.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {problems.map((problem, index) => (
                  <div
                    key={problem.title}
                    className="group cursor-pointer"
                  >
                    <Card className={`bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-colors h-full`}>
                      <CardContent className="p-8 relative">
                        <div className="p-3 bg-neutral-800 rounded-xl text-orange-400 w-fit mb-6">
                          {problem.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {problem.title}
                        </h3>

                        <p className="text-neutral-300 leading-relaxed mb-4">{problem.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-neutral-400 border-neutral-600">{t("problemSection.exampleMetric")}</Badge>
                            <span className="text-xs text-neutral-500">{problem.stats}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-400" aria-hidden="true" />
                        </div>
                        <p className="text-xs text-neutral-500 mt-2">{t("problemSection.disclaimer")}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick estimator */}
          <section className="py-20 px-4" id="estimator">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{t("estimator.title")}</h3>
                  <p className="text-neutral-300 text-sm mb-4">{t("estimator.description")}</p>
                  <RentEstimator />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Avoid rent / Developer tips */}
          <section className="py-12 px-4" id="tips">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t("avoidRent.title")}</h3>
                  <ol className="list-decimal list-inside text-sm text-neutral-300 space-y-1">
                    {avoidRentSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t("developer.title")}</h3>
                  <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
                    {developerTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-3">
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-4 py-2 rounded-xl" data-cta="design-patterns">
                      <Link href="/docs/developers">{t("developer.buttons.designPatterns")}</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-4 py-2 rounded-xl" data-cta="sdk-snippet">
                      <Link href="/docs/developers/tutorials">{t("developer.buttons.sdkSnippet")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Solutions Section - Redesigned */}
          <section className="py-20 px-4" id="solution">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("solutionSection.title")}</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  {t("solutionSection.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div
                    key={solution.title}
                    className="group cursor-pointer"
                  >
                    <Card className={`bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-colors h-full`}>
                      <CardContent className="p-8 text-center relative overflow-hidden">
                        <div className="mx-auto mb-6 text-orange-400">{solution.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                        <p className="text-neutral-300 leading-relaxed">{solution.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Timeline */}
          <section className="py-20 px-4" id="how-it-works">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("timeline.title")}</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  {t("timeline.description")} <Link href="/technology/eutxo-model" className="underline hover:opacity-80">{t("timeline.eutxoLink")}</Link>.
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500 rounded-full" aria-hidden="true" />

                <div className="space-y-16">
                  {timeline.map((phase, index) => (
                    <div
                      key={phase.year}
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <div className="flex-1 px-8">
                        <Card className={`bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-colors`}>
                          <CardContent className="p-8">
                            <div className="flex items-center mb-4">
                              <div className={`p-3 bg-neutral-800 rounded-xl text-orange-400 mr-4`} aria-hidden="true">{phase.icon}</div>
                              <div>
                                <h3 className={`text-2xl font-bold text-white`}>{phase.status}</h3>
                                <p className="text-neutral-400 font-medium">{phase.year}</p>
                              </div>
                            </div>
                            <p className="text-neutral-300 text-lg mb-3">{phase.description}</p>
                            <p className="text-neutral-400 text-sm">{phase.details}</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Node */}
                      <div className={`w-6 h-6 rounded-full bg-orange-500 border-4 border-black z-10`} aria-hidden="true" />

                      <div className="flex-1 px-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("benefitsSection.title")}</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  {t("benefitsSection.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-colors rounded-xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-orange-400" aria-hidden="true">
                            {benefit.icon}
                          </div>
                          <span className="text-neutral-300 leading-relaxed">
                            {benefit.text}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4" id="faq">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("faq.title")}</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                    >
                      <CollapsibleTrigger asChild>
                        <button className="w-full" aria-expanded={openFAQ === index} aria-controls={`faq-panel-${index}`} id={`faq-trigger-${index}`}>
                          <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                            <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                            <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} aria-hidden="true" />
                          </CardContent>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent id={`faq-panel-${index}`} aria-labelledby={`faq-trigger-${index}`}>
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/30">
                <CardContent className="p-12">
                  <h2 className="text-4xl font-bold mb-6 text-white">{t("cta.title")}</h2>
                  <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                    {t("cta.description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl" data-cta="start-building">
                      <Link href="/ecosystem" className="flex items-center">
                        <ArrowRight className="mr-2 w-4 h-4" aria-hidden="true" />
                        {t("cta.buttons.startBuilding")}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm" data-cta="view-details">
                      <Link href="https://docs.ergoplatform.com/protocol/storage-rent/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 w-4 h-4" aria-hidden="true" />
                        {t("cta.buttons.technicalDocs")}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
