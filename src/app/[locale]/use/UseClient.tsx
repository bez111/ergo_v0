"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */

import { motion } from "framer-motion"
import { Coins, Shield, Palette, Users, TrendingUp, Link2, Eye, Brain, Gamepad2, ArrowRight, ChevronDown, ExternalLink, Code, Database, Layers, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { useMemo, useState, useEffect } from "react"
import { useCases as data } from "./_data"
import { useTranslations } from "next-intl"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Script from "next/script"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const iconNode = {
  coins: <Coins className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  shield: <Shield className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  palette: <Palette className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  users: <Users className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  link: <Link2 className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  "trending-up": <TrendingUp className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  eye: <Eye className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  brain: <Brain className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
  gamepad: <Gamepad2 className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />,
} as const


// FAQ data moved to use.json translations (faq.items)

export default function UseClient() {
  const t = useTranslations('use')
  // Helper for dynamic use-case keys (bypasses next-intl strict typing)
  const ucT = (id: string, field: 'title' | 'subtitle' | 'description') =>
    (t.raw(id as 'stablecoins') as Record<string, string>)[field] ?? ''
  const localizedPath = useLocalizedPath()
  const useCases = useMemo(() => data, [])
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // FAQ Section Component
  function FAQSection() {
    const faqItems = t.raw('faq.items') as { id: string; question: string; answer: string }[]

    const faqJsonLd = useMemo(() => {
      const items = faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      }))
      return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items }
    }, [faqItems])

    return (
      <section aria-labelledby="faq-heading" className="max-w-5xl mx-auto py-16 px-4">
        <Script id="use-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <h2 id="faq-heading" className="text-4xl font-bold text-center mb-8 text-white">
          {t('faq.title')}
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <Card key={faq.id} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
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
                    <div className="text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>
    )
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
      {/* Hidden Breadcrumbs for SEO */}
      <Breadcrumbs items={[{ name: "Use Cases", href: "#" }]} variant="hidden" />
      
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{t('title')}</h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">{t('description')}</p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">{t('subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                  <Link href="/ecosystem">{t('buttons.exploreEcosystem')}</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                  <Link href="/docs">{t('buttons.startBuilding')}</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-neutral-400">
                {t('whyErgo')}{" "}
                <Link href="/compare" className="text-orange-400 underline-offset-2 hover:underline">
                  {t('seeComparison')}
                </Link>
              </p>
            </div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <div className="bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">{t('featuredUseCases.title')}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: t('featuredUseCases.defi'), icon: iconNode.coins, subtitle: "Decentralized Finance (DeFi)" },
                    { name: t('featuredUseCases.nfts'), icon: iconNode.palette, subtitle: "NFTs & Digital Assets" },
                    { name: t('featuredUseCases.privacy'), icon: iconNode.shield, subtitle: "Privacy Applications" },
                  ].map((feature) => (
                    <div key={feature.name} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">{feature.subtitle}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Use Cases Grid */}
      <div className="py-14 px-4 max-w-7xl mx-auto">
        <h2 className="sr-only" id="all-use-cases">{t('allUseCases')}</h2>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } } }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch" aria-labelledby="all-use-cases">
          {useCases.map((uc) => (
            <motion.div key={uc.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="relative h-full">
              <Link href={`/use/${uc.id}`} aria-label={t('aria.learnMoreAbout', { title: ucT(uc.id, 'title') })} className="block h-full">
                <Card className="relative bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 h-full flex flex-col cursor-pointer group">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">{iconNode[uc.icon as keyof typeof iconNode]}</div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{ucT(uc.id, 'title')}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {uc.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-black/60 border border-white/20 text-neutral-300 text-xs px-2 py-1 rounded">{tag}</span>
                      ))}
                      {uc.tags.length > 3 && (
                        <span className="bg-black/60 border border-white/20 text-neutral-300 text-xs px-2 py-1 rounded">+{uc.tags.length - 3}</span>
                      )}
                    </div>
                    <p className="text-neutral-400 font-medium mb-1">{ucT(uc.id, 'subtitle')}</p>
                    <p className="text-neutral-300 text-base mb-5 flex-1">{ucT(uc.id, 'description')}</p>

                    {/* Hover text that appears in bottom right corner */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-orange-400 font-medium text-right">
                        {((t.raw('hoverTexts') as Record<string, string>)[uc.id]) || t('hoverTexts.default')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

        {/* Related Content */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              {t('learnTechnology.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/learn/ergoscript" className="block group">
                <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Code className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {t('learnTechnology.ergoscript.title')}
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1">
                      {t('learnTechnology.ergoscript.description')}
                    </p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-orange-400 font-medium text-sm">
                        {t('learnTechnology.ergoscript.cta')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/technology/eutxo-model" className="block group">
                <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Database className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {t('learnTechnology.eutxo.title')}
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1">
                      {t('learnTechnology.eutxo.description')}
                    </p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-orange-400 font-medium text-sm">
                        {t('learnTechnology.eutxo.cta')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/technology" className="block group">
                <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Layers className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {t('learnTechnology.allTechnology.title')}
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1">
                      {t('learnTechnology.allTechnology.description')}
                    </p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-orange-400 font-medium text-sm">
                        {t('learnTechnology.allTechnology.cta')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQSection />

      {/* Conclusion CTA */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            {t('whatsNext.title')}
          </h2>
          <p className="text-xl text-center text-neutral-300 mb-12">
            {t('whatsNext.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/ecosystem"
              className="bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t('whatsNext.exploreEcosystem.title')}</h3>
                  <p className="text-orange-400 text-sm">{t('whatsNext.exploreEcosystem.subtitle')}</p>
                </div>
              </div>
              <p className="text-neutral-300">
                {t('whatsNext.exploreEcosystem.description')}
              </p>
            </Link>

            <Link
              href="/docs"
              className="bg-black/80 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t('whatsNext.startBuilding.title')}</h3>
                  <p className="text-orange-400 text-sm">{t('whatsNext.startBuilding.subtitle')}</p>
                </div>
              </div>
              <p className="text-neutral-300">
                {t('whatsNext.startBuilding.description')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Agent Economy Banner */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-0.5">New use case: Autonomous Agent Payments</p>
              <p className="text-neutral-400 text-sm">Agents paying agents, programmable credit, community reserves — Ergo combines this stack at the protocol level.</p>
            </div>
          </div>
          <Link
            href="/agent-economy"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            Explore Stack <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Email Capture Form */}
      <FinalCTASimple
        title={t('emailCapture.title')}
        description={t('emailCapture.description')}
      />

      </div>
    </BackgroundWrapper>
  )
} 