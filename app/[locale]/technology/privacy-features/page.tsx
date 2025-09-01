"use client"

import { useTranslations } from "next-intl"
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Eye, Shield, Shuffle, Vote, ArrowRight, ExternalLink, CheckCircle, Lock, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import dynamic from "next/dynamic"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

// Removed HexagonalGrid due to loading issues

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
  const t = useTranslations("technology.privacyFeatures")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const prefersReduced = useReducedMotion()
  const lastUpdated = new Date().toISOString().slice(0, 10)

  const TECHNOLOGIES = [
    {
      icon: <Shield className="w-8 h-8" aria-hidden="true" focusable="false" />,
      title: t("technologies.sigmaProtocols.title"),
      description: t("technologies.sigmaProtocols.description"),
      features: [
        t("technologies.sigmaProtocols.features.zeroKnowledge"),
        t("technologies.sigmaProtocols.features.ringSignatures"),
        t("technologies.sigmaProtocols.features.thresholdSignatures"),
        t("technologies.sigmaProtocols.features.composablePrivacy"),
      ],
    },
    {
      icon: <Shuffle className="w-8 h-8" aria-hidden="true" focusable="false" />,
      title: t("technologies.ergoMixer.title"),
      description: t("technologies.ergoMixer.description"),
      features: [
        t("technologies.ergoMixer.features.nonCustodial"),
        t("technologies.ergoMixer.features.onChain"),
        t("technologies.ergoMixer.features.tokenSupport"),
        t("technologies.ergoMixer.features.configurableAnonymity"),
      ],
    },
    {
      icon: <Eye className="w-8 h-8" aria-hidden="true" focusable="false" />,
      title: t("technologies.confidentialAssets.title"),
      description: t("technologies.confidentialAssets.description"),
      features: [
        t("technologies.confidentialAssets.features.hiddenAmounts"),
        t("technologies.confidentialAssets.features.privateContracts"),
        t("technologies.confidentialAssets.features.confidentialTransactions"),
        t("technologies.confidentialAssets.features.selectiveDisclosure"),
      ],
    },
  ]

  const ADVANTAGES = [
    t("advantages.noTrustedSetup"),
    t("advantages.flexibleFeatures"),
    t("advantages.openSource"),
    t("advantages.composable"),
    t("advantages.builtInProtocol"),
    t("advantages.mathematicalSecurity"),
  ]

  const USE_CASES = [
    {
      title: t("useCases.privateTransactions.title"),
      description: t("useCases.privateTransactions.description"),
      icon: <Shuffle className="w-8 h-8" aria-hidden="true" focusable="false" />,
      example: t("useCases.privateTransactions.example"),
    },
    {
      title: t("useCases.confidentialDefi.title"),
      description: t("useCases.confidentialDefi.description"),
      icon: <Lock className="w-8 h-8" aria-hidden="true" focusable="false" />,
      example: t("useCases.confidentialDefi.example"),
    },
    {
      title: t("useCases.anonymousVoting.title"),
      description: t("useCases.anonymousVoting.description"),
      icon: <Vote className="w-8 h-8" aria-hidden="true" focusable="false" />,
      example: t("useCases.anonymousVoting.example"),
    },
    {
      title: t("useCases.privateNfts.title"),
      description: t("useCases.privateNfts.description"),
      icon: <Eye className="w-8 h-8" aria-hidden="true" focusable="false" />,
      example: t("useCases.privateNfts.example"),
    },
  ]

  const FAQS = [
    {
      question: t("faq.privacyLevel.question"),
      answer: t("faq.privacyLevel.answer"),
    },
    {
      question: t("faq.suspicious.question"),
      answer: t("faq.suspicious.answer"),
    },
    {
      question: t("faq.criminals.question"),
      answer: t("faq.criminals.answer"),
    },
    {
      question: t("faq.auditProof.question"),
      answer: t("faq.auditProof.answer"),
    },
  ]

  const privacyLevels = [
    {
      level: t("privacyLevels.basic.title"),
      description: t("privacyLevels.basic.description"),
      features: [
        t("privacyLevels.basic.features.pseudonymous"),
        t("privacyLevels.basic.features.utxoBenefits"),
        t("privacyLevels.basic.features.basicPrivacy"),
      ],
    },
    {
      level: t("privacyLevels.enhanced.title"),
      description: t("privacyLevels.enhanced.description"),
      features: [
        t("privacyLevels.enhanced.features.mixing"),
        t("privacyLevels.enhanced.features.unlinkability"),
        t("privacyLevels.enhanced.features.amountObfuscation"),
      ],
    },
    {
      level: t("privacyLevels.maximum.title"),
      description: t("privacyLevels.maximum.description"),
      features: [
        t("privacyLevels.maximum.features.zeroKnowledge"),
        t("privacyLevels.maximum.features.ringSignatures"),
        t("privacyLevels.maximum.features.confidentialAssets"),
        t("privacyLevels.maximum.features.privateContracts"),
      ],
    },
  ]

  const bestPractices = [
    t("bestPractices.offChainAnalysis"),
    t("bestPractices.useDelays"),
    t("bestPractices.checkAnonymitySet"),
  ]

  return (
    <>
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: t("seo.faq.whatFeatures.question"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t("seo.faq.whatFeatures.answer"),
              },
            },
            {
              "@type": "Question",
              name: t("seo.faq.howSigmaWorks.question"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t("seo.faq.howSigmaWorks.answer"),
              },
            },
            {
              "@type": "Question",
              name: t("seo.faq.regulatoryCompliant.question"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t("seo.faq.regulatoryCompliant.answer"),
              },
            },
          ],
        }}
      />

      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          "@id": "https://ergoblockchain.org/technology/privacy-features#article",
          headline: t("seo.title"),
          description: t("seo.description"),
          image: "https://ergoblockchain.org/og/privacy.png",
          datePublished: "2023-11-10",
          dateModified: "2025-08-10",
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          keywords: t("seo.keywords"),
          about: [
            { "@type": "Thing", name: "Sigma protocol" },
            { "@type": "Thing", name: "Zero-knowledge proof" },
          ],
          isPartOf: { "@type": "WebPage", "@id": "https://ergoblockchain.org/technology" },
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Technology", item: "https://ergoblockchain.org/technology" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Features",
              item: "https://ergoblockchain.org/technology/privacy-features",
            },
          ],
        }}
      />
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: t("howTo.title"),
          description: t("howTo.description"),
          step: [
            { "@type": "HowToStep", position: 1, name: t("howTo.steps.prepareFunds.title"), text: t("howTo.steps.prepareFunds.description") },
            { "@type": "HowToStep", position: 2, name: t("howTo.steps.runMix.title"), text: t("howTo.steps.runMix.description") },
            { "@type": "HowToStep", position: 3, name: t("howTo.steps.waitAndSpend.title"), text: t("howTo.steps.waitAndSpend.description") },
          ],
        }}
      />

      <div className="min-h-screen relative">
        <a href="#what" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-black/80 text-white px-3 py-2 rounded">
          {t("skipToContent")}
        </a>
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: "Privacy Features", href: "/technology/privacy-features" },
            ]}
            className="mb-8"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
          <div className="opacity-[0.02] w-full h-full bg-gradient-to-br from-orange-500/5 to-transparent" />
        </div>

        <LazyMotion features={domAnimation}>
          <m.main
            variants={containerVariants}
            initial={prefersReduced ? false : "hidden"}
            animate={prefersReduced ? false : "visible"}
            className="relative z-10 motion-reduce:animate-none"
          >
            <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">{t("title")}</h1>
                    <p className="text-sm text-neutral-500 mb-4">{t("lastUpdated")}: {lastUpdated}</p>
                    <p className="lead text-xl md:text-2xl text-neutral-300 mb-6 max-w-2xl">{t("subtitle")}</p>
                    <p className="text-lg text-neutral-400 mb-6 max-w-2xl leading-relaxed">
                      {t("description")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        <Link href="/docs">{t("buttons.explorePrivacy")}</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm"
                      >
                        <Link href="/ecosystem">{t("buttons.tryErgoMixer")}</Link>
                      </Button>
                    </div>
                    <nav aria-label="On-page navigation" className="sticky top-16 z-[5] mt-6 flex flex-wrap gap-3 text-sm text-neutral-400">
                      <Link href="#what" className="underline hover:opacity-80">{t("navigation.what")}</Link>
                      <span aria-hidden>·</span>
                      <Link href="#technologies" className="underline hover:opacity-80">{t("navigation.technologies")}</Link>
                      <span aria-hidden>·</span>
                      <Link href="#use-cases" className="underline hover:opacity-80">{t("navigation.useCases")}</Link>
                      <span aria-hidden>·</span>
                      <Link href="#faq" className="underline hover:opacity-80">{t("navigation.faq")}</Link>
                    </nav>
                  </div>
                  <div className="relative">
                    <div className="relative z-10">
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-orange-500/30 transition-colors">
                        <CardContent className="p-0">
                          <h3 className="text-2xl font-bold mb-6 text-center text-white">{t("privacyLevels.title")}</h3>
                          <div className="space-y-4">
                            {privacyLevels.map((level) => (
                              <div key={level.level} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                                <h4 className="font-semibold text-white mb-2">{level.level}</h4>
                                <p className="text-sm text-neutral-400 mb-3">{level.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {level.features.map((feature, featureIndex) => (
                                    <Badge key={featureIndex} variant="outline" className="text-xs border-neutral-600 text-neutral-300">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Limits & Best Practices */}
                <div className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{t("bestPractices.title")}</h3>
                      <ul className="list-disc list-inside text-neutral-400 space-y-1 text-sm">
                        {bestPractices.map((practice, index) => (
                          <li key={index}>{practice}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section id="what" className="py-20 px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/30 transition-colors" aria-describedby="why-privacy-desc">
                  <CardContent className="p-8">
                    <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text:white md:text-white">{t("whyPrivacyMatters.title")}</h2>
                    <p id="why-privacy-desc" className="text-neutral-300 text-lg leading-relaxed mb-6">
                      {t("whyPrivacyMatters.description1")}
                    </p>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      {t("whyPrivacyMatters.description2")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="technologies" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("technologiesSection.title")}</h2>
                <div className="space-y-8">
                  {TECHNOLOGIES.map((tech) => (
                    <Card key={tech.title} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/30 transition-colors">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <span aria-hidden="true" className="p-4 bg-orange-500/20 rounded-lg text-orange-400">{tech.icon}</span>
                          <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4 text-white">
                              {tech.title}
                              {tech.title === t("technologies.sigmaProtocols.title") && (
                                <>
                                  {" "}
                                  <Link href="/docs/developers/ergoscript-languages/sigma/intro" className="underline text-neutral-400 hover:text-neutral-300">({t("technologiesSection.docsLink")})</Link>
                                </>
                              )}
                            </h3>
                            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">{tech.description}</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              {tech.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" focusable="false" />
                                  <span className="text-neutral-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section id="use-cases" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("useCasesSection.title")}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {USE_CASES.map((useCase) => (
                    <Card key={useCase.title} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full hover:border-orange-500/30 transition-colors">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <span aria-hidden="true" className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{useCase.icon}</span>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                            <p className="text-neutral-400 mb-4">{useCase.description}</p>
                            <Badge variant="outline" className="border-neutral-700 text-neutral-300 hover:border-orange-500/50">
                              {useCase.example}
                            </Badge>{" "}
                            {useCase.title === t("useCases.privateTransactions.title") && (
                              <Link href="/learn/guides/ergomixer" className="underline text-neutral-400 hover:text-neutral-300 ml-2">({t("useCasesSection.guideLink")})</Link>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" aria-labelledby="faq-heading" className="py-20 px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="faq-heading" className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">{t("faq.title")}</h2>
                <div role="list" className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <Card role="listitem" key={index} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                      <Collapsible open={openFAQ === index} onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}>
                        <CollapsibleTrigger asChild>
                          <button
                            id={`faq-trigger-${index}`}
                            aria-expanded={openFAQ === index}
                            aria-controls={`faq-panel-${index}`}
                            className="w-full"
                          >
                            <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                              <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                              <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} aria-hidden="true" focusable="false" />
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

            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                  <CardContent className="p-12">
                    <h2 className="text-4xl font-bold mb-6 text-white">{t("cta.title")}</h2>
                    <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                      {t("cta.description")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        <Link href="/use/defi" className="flex items-center">
                          <ArrowRight className="mr-2 w-4 h-4" aria-hidden="true" focusable="false" />
                          {t("cta.buttons.tryErgoMixer")}
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm">
                        <a href="https://docs.ergoplatform.com/protocol/privacy/?utm_source=site&utm_medium=cta&utm_campaign=privacy" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="mr-2 w-4 h-4" aria-hidden="true" focusable="false" />
                          {t("cta.buttons.privacyDocs")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </m.main>
        </LazyMotion>
      </div>
    </>
  )
}
