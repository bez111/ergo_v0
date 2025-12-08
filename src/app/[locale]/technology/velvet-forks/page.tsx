"use client"

/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { useTranslations } from "next-intl"
import { 
  GitBranch, Shield, Lock, CheckCircle, Layers, RefreshCw, Settings, Users, TrendingUp, ChevronDown, Terminal
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { RelatedTechnologies, WhatsNextCTA, RelatedBlogPostsForTechnology } from "@/components/technology"

// Feature icons mapping
const featureIcons = [RefreshCw, TrendingUp, Settings, Users, Shield, CheckCircle] as const
const useCaseIcons = [Layers, Lock, Terminal] as const
const howItWorksIcons = [GitBranch, Users, CheckCircle, TrendingUp] as const

export default function VelvetForksPage() {
  const t = useTranslations("technologyPages.velvetForks")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // Build data arrays from translations
  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
    icon: featureIcons[i]!,
  }))

  const useCases = Array.from({ length: 3 }, (_, i) => ({
    title: t(`useCases.${i}.title`),
    description: t(`useCases.${i}.description`),
    icon: useCaseIcons[i]!,
  }))

  const howItWorks = Array.from({ length: 4 }, (_, i) => ({
    title: t(`howItWorks.${i}.title`),
    description: t(`howItWorks.${i}.description`),
    icon: howItWorksIcons[i]!,
  }))

  const quickStartSteps = Array.from({ length: 3 }, (_, i) => ({
    number: t(`quickStart.steps.${i}.number`),
    title: t(`quickStart.steps.${i}.title`),
    description: t(`quickStart.steps.${i}.description`),
  }))

  const faqs = Array.from({ length: 4 }, (_, i) => ({
    question: t(`faq.${i}.question`),
    answer: t(`faq.${i}.answer`),
  }))

  return (
    <>
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: t("title"),
          description: t("description"),
          keywords: "velvet forks, protocol upgrades, backward compatibility, blockchain evolution",
          datePublished: "2023-11-10",
          dateModified: "2025-08-10",
          image: "https://ergoblockchain.org/og/technology/velvet-forks.png",
          author: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
          },
          publisher: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoblockchain.org",
            logo: {
              "@type": "ImageObject",
              url: "https://ergoblockchain.org/favicon.ico"
            }
          },
        }}
      />

      <BackgroundWrapper>
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: t("title"), href: "/technology/velvet-forks" },
            ]}
            className="mb-8"
          />
        </div>

        <FadeIn>
          <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
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
                  <Link href="/docs/protocol/velvet-forks">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t("buttons.readDocumentation")}
                    </Button>
                  </Link>
                  <Link href="/technology">
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                    >
                      {t("buttons.exploreOther")}
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white">{t("quickStart.title")}</h3>
                  </div>
                  <div className="space-y-4">
                    {quickStartSteps.map((item) => (
                      <div key={item.number} className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 font-bold text-sm">
                          {item.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                          <p className="text-sm text-neutral-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("featuresTitle")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("featuresSubtitle")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("howItWorksTitle")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("howItWorksSubtitle")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, index) => (
                  <div key={step.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 mt-2">
                      <step.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("comparisonTitle")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("comparisonSubtitle")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">{t("comparison.hardFork.title")}</h3>
                  <p className="text-neutral-400 text-sm mb-6">{t("comparison.hardFork.description")}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Complete protocol redesign possible
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Can fix fundamental issues
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Risk of network split
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Requires coordinated upgrade
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">{t("comparison.softFork.title")}</h3>
                  <p className="text-neutral-400 text-sm mb-6">{t("comparison.softFork.description")}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Maintains backward compatibility
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          No forced upgrades required
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Limited to rule tightening
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          Cannot add new features easily
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm border-orange-400/40">
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">{t("comparison.velvetFork.title")}</h3>
                  <p className="text-neutral-400 text-sm mb-6">{t("comparison.velvetFork.description")}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          No breaking changes ever
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Gradual feature adoption
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Preserves ecosystem stability
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-yellow-400 font-semibold mb-2">Trade-offs</h4>
                      <ul className="space-y-1">
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-yellow-400" />
                          Slower feature rollout
                        </li>
                        <li className="text-neutral-300 text-sm flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-yellow-400" />
                          Requires careful design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.8}>
          <section className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("useCasesTitle")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("useCasesSubtitle")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase) => (
                  <div key={useCase.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.0}>
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("faqTitle")}
                </h2>
                <p className="text-xl text-neutral-400">
                  {t("faqSubtitle")}
                </p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm">
                        <CollapsibleTrigger asChild>
                          <div className="cursor-pointer hover:bg-neutral-800/30 transition-colors p-8">
                            <div className="flex items-center justify-between">
                              <h3 className="text-white text-left font-semibold">{faq.question}</h3>
                              <ChevronDown 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-8 pb-8">
                            <p className="text-neutral-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Related Technologies - Data-driven */}
        <RelatedTechnologies 
          currentSlug="velvet-forks"
          title={t("relatedTitle")}
        />

        {/* Related Blog Articles - lightweight */}
        <RelatedBlogPostsForTechnology currentSlug="velvet-forks" />

        {/* What's Next - CTA Section */}
        <WhatsNextCTA currentSlug="velvet-forks" />
      </BackgroundWrapper>
    </>
  )
}
