"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Coins, Package, Shield, Zap, ArrowRight, CheckCircle, Image, Database, Globe, DollarSign, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
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

export default function NativeTokensPage() {
  const t = useTranslations("technology.nativeTokens")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("tokens")

  const features = [
    {
      title: t("features.oneClick.title"),
      description: t("features.oneClick.description"),
      icon: Zap,
    },
    {
      title: t("features.trueNative.title"),
      description: t("features.trueNative.description"),
      icon: Shield,
    },
    {
      title: t("features.defiReady.title"),
      description: t("features.defiReady.description"),
      icon: Package,
    },
    {
      title: t("features.costEffective.title"),
      description: t("features.costEffective.description"),
      icon: DollarSign,
    },
    {
      title: t("features.richMetadata.title"),
      description: t("features.richMetadata.description"),
      icon: Database,
    },
    {
      title: t("features.universalCompatibility.title"),
      description: t("features.universalCompatibility.description"),
      icon: Globe,
    },
  ]

  const useCases = [
    {
      title: t("useCases.defiTokens.title"),
      description: t("useCases.defiTokens.description"),
      icon: Coins,
    },
    {
      title: t("useCases.nftCollections.title"),
      description: t("useCases.nftCollections.description"),
      icon: Image,
    },
    {
      title: t("useCases.stablecoins.title"),
      description: t("useCases.stablecoins.description"),
      icon: DollarSign,
    },
    {
      title: t("useCases.gamingAssets.title"),
      description: t("useCases.gamingAssets.description"),
      icon: Package,
    },
  ]

  const faqs = [
    {
      question: t("faq.0.question"),
      answer: t("faq.0.answer"),
    },
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer"),
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer"),
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer"),
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer"),
    },
  ]

  const lastUpdated = "2024-01-15"

  return (
    <>
      {/* BreadcrumbList Schema */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Technology",
              item: "https://ergoblockchain.org/technology"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "Native Tokens & NFTs",
              item: "https://ergoblockchain.org/technology/native-tokens"
            }
          ]
        }}
      />

      {/* FAQPage Schema */}
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

      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs items={[
            { name: "Technology", href: "/technology" },
            { name: "Native Tokens & NFTs", href: "/technology/native-tokens" }
          ]} className="mb-8" />
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 pb-24">
          {/* Hero Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-28 md:pt-32 pb-12 md:pb-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
                    {t("title")}
                  </h1>
                  <p className="text-sm text-neutral-500 mb-4">{t("lastUpdated")}: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    {t("subtitle")}
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t("details")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/docs/ecosystem/nfts">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        {t("buttons.exploreNftEcosystem")}
                      </Button>
                    </Link>
                    <a href="https://docs.ergo.getblok.io/api/issuing/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl">
                        {t("buttons.tokenApiDocs")}
                      </Button>
                    </a>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-orange-400">{t("navigation.keyFeatures")}</a></li>
                      <li><a href="#asset-types" className="hover:text-orange-400">{t("navigation.assetTypes")}</a></li>
                      <li><a href="#use-cases" className="hover:text-orange-400">{t("navigation.useCases")}</a></li>
                      <li><a href="#faq" className="hover:text-orange-400">{t("navigation.faq")}</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl p-8">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          {t("keyMetrics.title")}
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              name: t("keyMetrics.tokenCreation.name"),
                              value: t("keyMetrics.tokenCreation.value"),
                              description: t("keyMetrics.tokenCreation.description")
                            },
                            {
                              name: t("keyMetrics.creationCost.name"),
                              value: t("keyMetrics.creationCost.value"),
                              description: t("keyMetrics.creationCost.description")
                            },
                            {
                              name: t("keyMetrics.protocolSecurity.name"),
                              value: t("keyMetrics.protocolSecurity.value"),
                              description: t("keyMetrics.protocolSecurity.description")
                            },
                            {
                              name: t("keyMetrics.tokenTypes.name"),
                              value: t("keyMetrics.tokenTypes.value"),
                              description: t("keyMetrics.tokenTypes.description")
                            },
                          ].map((item) => (
                            <div key={item.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-white">{item.name}</h4>
                                  <p className="text-sm text-neutral-400">{item.description}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-orange-400">{item.value}</div>
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
          </motion.section>

          {/* Features Section */}
          <motion.section 
            id="features"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("whyNativeAssets.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("whyNativeAssets.subtitle")}
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
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                            <feature.icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <CardTitle className="text-white">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section 
            id="use-cases"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">{t("useCases.title")}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase) => (
                  <Card key={useCase.title} className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="text-orange-400 mb-4 flex justify-center">
                        <useCase.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-neutral-300 text-sm mb-4">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section variants={itemVariants} id="faq" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">{t("faq.title")}</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible key={index} open={openFAQ === index} onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}>
                    <Card className="bg-neutral-900/50 border-neutral-700">
                      <CollapsibleTrigger asChild>
                        <CardContent className="p-6 cursor-pointer hover:bg-neutral-800/30 transition-colors">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                            <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section variants={itemVariants} className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("cta.title")}</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/ecosystem/nfts">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    {t("buttons.exploreNftEcosystem")}
                  </Button>
                </Link>
                <a href="https://docs.ergo.getblok.io/api/issuing/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl">
                    {t("buttons.tokenApiDocs")}
                  </Button>
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
} 