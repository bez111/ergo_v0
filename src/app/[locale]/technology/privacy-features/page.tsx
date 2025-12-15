"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Shield, Shuffle, Vote, ArrowRight, ExternalLink, CheckCircle, Lock, ChevronDown, BookOpen, Terminal } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { useState } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import PrivacyComparisonTable from "@/components/privacy-comparison-table"
import { GlossaryLink } from "@/components/glossary"
import { RelatedTechnologies, WhatsNextCTA, RelatedBlogPostsForTechnology } from "@/components/technology"

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

  const TECHNOLOGIES = [
    {
      icon: <Shield className="w-8 h-8" aria-hidden="true" focusable="false" />,
      title: "Sigma Protocols",
      titleComponent: <GlossaryLink term="sigma-protocols" showTooltip={false}>Sigma Protocols</GlossaryLink>,
      description: "Enable powerful privacy tools like ring signatures and zero-knowledge proofs at the protocol level.",
      features: [
        "Zero-knowledge proofs",
        "Ring signatures",
        "Threshold signatures",
        "Composable privacy",
      ],
    },
    {
      icon: <Shuffle className="w-8 h-8" aria-hidden="true" focusable="false" />,
      title: "ErgoMixer",
      description: "On-chain, non-custodial mixing for transaction privacy and anonymity.",
      features: [
        "Non-custodial mixing",
        "On-chain privacy",
        "Token mixing support",
        "Configurable anonymity",
      ],
    },
    {
      icon: <Eye className="w-8 h-8" aria-hidden="true" focusable="false" />,
      title: "Confidential Assets",
      description: "Issue tokens with hidden amounts and rules for maximum privacy.",
      features: [
        "Hidden token amounts",
        "Private smart contracts",
        "Confidential transactions",
        "Selective disclosure",
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
      title: "Private Transactions",
      description: "Mix your ERG and tokens to achieve strong on-chain anonymity (within the current anonymity set)",
      icon: <Shuffle className="w-6 h-6" aria-hidden="true" focusable="false" />,
      example: "ErgoMixer",
    },
    {
      title: "Confidential DeFi",
      description: "Build DeFi applications with private balances and logic",
      icon: <Lock className="w-6 h-6" aria-hidden="true" focusable="false" />,
      example: "Private DEX orders",
    },
    {
      title: "Anonymous Voting",
      description: "Create DAOs and voting systems with secret ballots",
      icon: <Vote className="w-6 h-6" aria-hidden="true" focusable="false" />,
      example: "DAO governance",
    },
    {
      title: "Private NFTs",
      description: "NFTs with hidden metadata or ownership information",
      icon: <Eye className="w-6 h-6" aria-hidden="true" focusable="false" />,
      example: "Confidential collectibles",
    },
  ]

  const FAQS = [
    {
      question: "What level of privacy does Ergo offer? Is it just coin mixing?",
      answer: "Ergo offers multi-layered privacy, not just a single feature. At its core are Sigma protocols—powerful cryptography that allows data to be hidden. On top of this runs ErgoMixer (non-custodial community tool), the first non-interactive and trustless mixer in the eUTXO space. It helps break the link between your transactions, providing strong anonymity on-chain.",
    },
    {
      question: "If I use privacy features, won't my transactions look suspicious?",
      answer: "On the contrary. Because privacy tools are a core part of the Ergo ecosystem, using them is the norm. When many people mix their coins, they create a large anonymity set where it's easy to blend in. On Ergo, protecting your financial data is standard practice, not a reason for suspicion.",
    },
    {
      question: "Doesn't this kind of privacy attract criminals?",
      answer: "Privacy is a fundamental right, not an admission of guilt. You don't use curtains on your windows because you're doing something illegal. Businesses need privacy for trade secrets and payrolls, and individuals need it to protect themselves from tracking and profiling.",
    },
    {
      question: "What if I need to prove a transaction for taxes or an audit?",
      answer: "Ergo applies a 'privacy by choice' approach with selective disclosure. When needed, you can provide viewing keys for specific transactions to an auditor or regulator without revealing your entire financial history.",
    },
  ]

  const privacyLevels = [
    {
      level: "Basic Privacy",
      description: "Standard transactions with pseudonymous addresses",
      features: [
        "Pseudonymous addresses",
        "UTXO model benefits",
        "Basic transaction privacy",
      ],
    },
    {
      level: "Enhanced Privacy",
      description: "Using ErgoMixer for transaction mixing and unlinkability",
      features: [
        "Transaction mixing",
        "Address unlinkability",
        "Amount obfuscation",
      ],
    },
    {
      level: "Maximum Privacy",
      description: "Sigma protocols with zero-knowledge proofs and ring signatures",
      features: [
        "Zero-knowledge proofs",
        "Ring signatures",
        "Confidential assets",
        "Private smart contracts",
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

      <BackgroundWrapper>
        <div className="min-h-screen text-white">
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: "Privacy Features", href: "/technology/privacy-features" },
            ]}
            className="mb-8"
          />
        </div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            {/* Hero Section */}
            <FadeIn delay={0.1}>
              <div className="max-w-7xl mx-auto mb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Privacy Features</h1>
                    <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                      Financial freedom and privacy go hand in hand. Ergo bakes privacy features directly into its core — not as an afterthought.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl">
                        <Link href="/topics/ergo-privacy">Explore Privacy</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 px-6 py-3 rounded-xl">
                        <Link href="/learn/glossary/ergomixer">Try ErgoMixer</Link>
                      </Button>
                    </div>
                  </div>
                  <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-6 text-center text-white">Privacy Levels</h3>
                      <div className="space-y-4">
                        {privacyLevels.map((level) => (
                          <Link
                            key={level.level}
                            href="/docs/ecosystem/privacy"
                            className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300 block"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                                <Shield className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-white text-lg">{level.level}</h4>
                                <p className="text-neutral-400 text-sm mt-1">{level.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            {/* Features Section */}
            <FadeIn delay={0.2}>
              <div className="max-w-7xl mx-auto mb-16" id="what">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Technologies</h2>
                  <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                    Explore the cryptographic foundations that make Ergo's privacy features possible
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {TECHNOLOGIES.map((tech, index) => (
                    <Card key={tech.title} className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            {tech.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                        </div>
                        <p className="text-neutral-200 leading-relaxed mb-4">{tech.description}</p>
                        <div className="space-y-2">
                          {tech.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                              <span className="text-neutral-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Privacy Comparison Table */}
            <FadeIn delay={0.3}>
              <div className="max-w-7xl mx-auto mb-16">
                <PrivacyComparisonTable />
              </div>
            </FadeIn>

            {/* Use Cases Section */}
            <FadeIn delay={0.5}>
              <div className="max-w-7xl mx-auto mb-16" id="use-cases">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Use Cases</h2>
                  <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                    Real-world applications of Ergo's privacy features in decentralized applications
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {USE_CASES.map((useCase, index) => (
                    <Card key={useCase.title} className="group bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 text-orange-400 group-hover:bg-orange-500/30 group-hover:text-orange-300 transition-all duration-300">
                            {useCase.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{useCase.title}</h3>
                        </div>
                        <p className="text-neutral-200 leading-relaxed group-hover:text-neutral-100 transition-colors duration-300">{useCase.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* FAQ Section */}
            <FadeIn delay={0.7}>
              <div id="faq" className="max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
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
                            <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Related Technologies - Data-driven */}
            <RelatedTechnologies 
              currentSlug="privacy-features"
              title="Related Technologies"
            />

            {/* Related Blog Articles - lightweight */}
            <RelatedBlogPostsForTechnology currentSlug="privacy-features" />

            {/* What's Next - CTA Section */}
            <WhatsNextCTA currentSlug="privacy-features" />
          </div>
        </div>
      </BackgroundWrapper>
    </>
  )
}
