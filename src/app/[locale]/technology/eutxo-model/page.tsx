"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Box, Database, Shield, Zap, Eye, Code, CheckCircle, BookOpen, Users } from "lucide-react"
import { useState } from "react"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { GlossaryLink } from "@/components/glossary"
import { RelatedTechnologies, RelatedPatterns, WhatsNextCTA, RelatedBlogPostsForTechnology } from "@/components/technology"

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

// Feature icons mapping
const featureIcons = [Box, Database, Shield, Zap, Eye, Code]

export default function EUTXOModelPage() {
  const t = useTranslations("technologyPages.eutxoModel")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Build data arrays from translations
  const features = Array.from({ length: 6 }, (_, i) => ({
    icon: featureIcons[i],
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
  }))

  const modelComparison = Array.from({ length: 5 }, (_, i) => ({
    aspect: t(`comparison.${i}.aspect`),
    utxo: t(`comparison.${i}.eutxo`),
    account: t(`comparison.${i}.account`),
    advantage: t(`comparison.${i}.advantage`),
  }))

  const useCases = Array.from({ length: 4 }, (_, i) => ({
    title: t(`useCases.${i}.title`),
    description: t(`useCases.${i}.description`),
    example: t(`useCases.${i}.example`),
  }))

  const faqs = Array.from({ length: 4 }, (_, i) => ({
    question: t(`faq.${i}.question`),
    answer: t(`faq.${i}.answer`),
  }))

  const codeExampleBenefits = Array.from({ length: 4 }, (_, i) => 
    t(`codeExampleBenefits.${i}`)
  )

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
              name: t("title"),
              item: "https://ergoblockchain.org/technology/eutxo-model"
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
      
      <BackgroundWrapper>
        <div className="min-h-screen text-white relative overflow-hidden motion-reduce:animate-none">

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: t("title"), href: "/technology/eutxo-model" }
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
            className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    {t("title")}
                  </h1>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    {t("subtitle")}
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t("description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl"
                      onClick={() => scrollToSection("features")}
                    >
                      {t("buttons.learnMore")}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 px-6 py-3 rounded-xl"
                      asChild
                    >
                      <a
                        href="https://github.com/ergoplatform/ergo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("buttons.viewCode")}
                      </a>
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
                        href="/docs/protocol/eutxo"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Box className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.exploreEutxo.title")}</h4>
                            <p className="text-neutral-400 text-sm">{t("quickStart.exploreEutxo.description")}</p>
                          </div>
                        </div>
                      </Link>
                      
                      <Link
                        href="/docs"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.developerGuide.title")}</h4>
                            <p className="text-neutral-400 text-sm">{t("quickStart.developerGuide.description")}</p>
                          </div>
                        </div>
                      </Link>
                      
                      <a
                        href="https://discord.com/invite/ergo-platform-668903786361651200"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Users className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{t("quickStart.joinCommunity.title")}</h4>
                            <p className="text-neutral-400 text-sm">{t("quickStart.joinCommunity.description")}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section 
            id="features" 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                {t("featuresTitle")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                          </div>
                          <p className="text-neutral-200 leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.section>

          {/* Comparison Section */}
          <motion.section 
            id="comparison" 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                {t("comparisonTitle")}
              </h2>
              <div className="bg-black/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-black/60 border-b border-white/10">
                        <th className="text-left p-4 font-semibold text-white">{t("comparisonHeaders.aspect")}</th>
                        <th className="text-left p-4 font-semibold text-white">{t("comparisonHeaders.eutxo")}</th>
                        <th className="text-left p-4 font-semibold text-white">{t("comparisonHeaders.account")}</th>
                        <th className="text-center p-4 font-semibold text-white">{t("comparisonHeaders.advantage")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelComparison.map((row, index) => (
                        <motion.tr
                          key={row.aspect}
                          className="border-b border-white/10 hover:bg-white/5 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td className="p-4 font-medium text-white">{row.aspect}</td>
                          <td className="p-4 text-neutral-300">{row.utxo}</td>
                          <td className="p-4 text-neutral-300">{row.account}</td>
                          <td className="p-4 text-center">
                            <Badge 
                              variant="secondary"
                              className={
                                row.advantage === "eUTXO"
                                  ? "bg-green-500/20 text-green-400 border-green-500/50"
                                  : "bg-neutral-500/20 text-neutral-400 border-neutral-500/50"
                              }
                            >
                              {row.advantage}
                            </Badge>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section 
            id="use-cases"
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                {t("useCasesTitle")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-3">{useCase.description}</p>
                        <p className="text-sm text-orange-400">{t("exampleLabel")}: {useCase.example}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Code Example Section */}
          <motion.section 
            id="code-example"
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-white">{t("codeExampleTitle")}</h2>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {t("codeExampleDescription")}
                  </p>
                  <ul className="space-y-4">
                    {codeExampleBenefits.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="font-mono text-sm">
                      <div className="text-neutral-500 mb-2"># Box Structure</div>
                      <pre className="text-neutral-200 overflow-x-auto">
{`Box {
  value: 1000000000,      // nanoERGs
  tokens: [...],          // native tokens
  registers: {            // custom data
    R4: "user_data",
    R5: 42,
    R6: [1, 2, 3]
  },
  script: "..."          // guard script
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            id="faq" 
            className="py-16 md:py-24 px-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                {t("faqTitle")}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                      <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                        <CollapsibleTrigger asChild>
                          <button className="w-full">
                            <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                              <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                              <ChevronDown aria-hidden="true" className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                            </CardContent>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="text-neutral-300 leading-relaxed">
                              {faq.answer}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Related Technologies - Data-driven from technology-topics.ts */}
          <RelatedTechnologies 
            currentSlug="eutxo-model"
            title={t("relatedTitle")}
            subtitle={t("relatedSubtitle")}
          />

          {/* Related Dev Patterns - Data-driven */}
          <RelatedPatterns currentSlug="eutxo-model" />

          {/* Related Blog Articles - lightweight, max 2 */}
          <RelatedBlogPostsForTechnology currentSlug="eutxo-model" />

          {/* What's Next - CTA Section */}
          <WhatsNextCTA currentSlug="eutxo-model" />
        </motion.div>
        </div>
      </BackgroundWrapper>
    </>
  )
}
