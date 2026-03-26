"use client"

import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Layers,
  ChevronDown,
  Image as ImageIcon,
  Bot,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useMemo, useState } from "react"
import Script from "next/script"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { useTranslations } from "next-intl"

const trackIds = ["foundations", "developer", "topics", "privacy", "research"] as const
type TrackId = typeof trackIds[number]

const trackGradients: Record<TrackId, string> = {
  foundations: "from-orange-500 to-red-500",
  developer:   "from-green-500 to-cyan-500",
  topics:      "from-sky-500 to-indigo-500",
  privacy:     "from-purple-500 to-blue-500",
  research:    "from-amber-500 to-lime-500",
}

const trackCtaHrefs: Record<TrackId, string> = {
  foundations: "/start/introduction",
  developer:   "/learn/ergoscript",
  topics:      "/topics",
  privacy:     "/blog/sigma-protocols-explained",
  research:    "/learn/research",
}

export default function LearnClient() {
  const t = useTranslations("learn.hub")
  const tLearn = useTranslations("learn")

  const [activeTrack, setActiveTrack] = useState<TrackId>("foundations")

  // Build learning tracks from translations
  const learningTracks = trackIds.map((id) => ({
    id,
    label: t(`tracks.${id}.label`),
    badge: t(`tracks.${id}.badge`),
    gradient: trackGradients[id],
    description: t(`tracks.${id}.description`),
    bullets: [
      t(`tracks.${id}.bullets.0`),
      t(`tracks.${id}.bullets.1`),
      t(`tracks.${id}.bullets.2`),
    ],
    cta: { label: t(`tracks.${id}.cta`), href: trackCtaHrefs[id] },
    stack: {
      core:        t(`tracks.${id}.stack.core`),
      tooling:     t(`tracks.${id}.stack.tooling`),
      mentors:     t(`tracks.${id}.stack.mentors`),
      deliverable: t(`tracks.${id}.stack.deliverable`),
    },
  }))

  // Build FAQs from translations
  const faqIndices = [0, 1, 2, 3] as const
  const faqs = faqIndices.map((i) => ({
    q: t(`faq.items.${i}.question`),
    a: t(`faq.items.${i}.answer`),
  }))

  const faqJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [])

  const activeTrackData = learningTracks.find((track) => track.id === activeTrack)!

  // Quick reference items (name + subtitle from translations, href + icon stay static)
  const quickRefItems = [
    {
      name: t("quickReference.items.visualGuides.name"),
      href: "/infographics",
      icon: <ImageIcon className="w-6 h-6 text-orange-400" />,
      subtitle: t("quickReference.items.visualGuides.subtitle"),
    },
    {
      name: t("quickReference.items.glossary.name"),
      href: "/learn/glossary",
      icon: <BookOpen className="w-6 h-6 text-orange-400" />,
      subtitle: t("quickReference.items.glossary.subtitle"),
    },
    {
      name: t("quickReference.items.playbooks.name"),
      href: "/playbooks",
      icon: <Layers className="w-6 h-6 text-orange-400" />,
      subtitle: t("quickReference.items.playbooks.subtitle"),
    },
    {
      name: t("quickReference.items.devPatterns.name"),
      href: "/patterns",
      icon: <Cpu className="w-6 h-6 text-orange-400" />,
      subtitle: t("quickReference.items.devPatterns.subtitle"),
    },
  ]

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        <Breadcrumbs items={[{ name: tLearn("title"), href: "#" }]} variant="hidden" />

        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-28 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">{t("badge")}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{t("title")}</h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                  {t("subtitle")}
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  {t("description")}
                </p>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                  <Link href="/start">{t("startButton")}</Link>
                </Button>
              </div>
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">{t("quickReference.title")}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {quickRefItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                            <p className="text-sm text-neutral-300 mt-1">{item.subtitle}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto bg-black/70 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur">
            <div className="flex flex-wrap gap-3 mb-8">
              {learningTracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id as TrackId)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all ${
                    activeTrack === track.id ? "bg-white text-black border-white" : "border-white/10 hover:border-white/30 text-white"
                  }`}
                >
                  <span className={`inline-flex h-2 w-2 rounded-full bg-gradient-to-r ${track.gradient}`} />
                  {track.label}
                  <span className="text-xs text-gray-400">{track.badge}</span>
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">{t("tracks.curatedPathway")}</p>
                <h3 className="text-3xl font-bold text-white mb-4">{activeTrackData.label}</h3>
                <p className="text-gray-300 mb-6">{activeTrackData.description}</p>
                <ul className="space-y-3 mb-6">
                  {activeTrackData.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-gray-200">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-orange-400 mt-1">
                        <ArrowRight className="w-3 h-3" />
              </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href={activeTrackData.cta.href} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                  {activeTrackData.cta.label}
                  <ArrowRight className="w-4 h-4" />
              </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-orange-400" />
                  <p className="text-sm uppercase tracking-wide text-gray-400">{t("tracks.stackTitle")}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">{t("tracks.stackLabels.core")}</p>
                    <p className="font-semibold text-white">{activeTrackData.stack.core}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">{t("tracks.stackLabels.tooling")}</p>
                    <p className="font-semibold text-white">{activeTrackData.stack.tooling}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">{t("tracks.stackLabels.mentors")}</p>
                    <p className="font-semibold text-white">{activeTrackData.stack.mentors}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">{t("tracks.stackLabels.deliverable")}</p>
                    <p className="font-semibold text-white">{activeTrackData.stack.deliverable}</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <Script id="learn-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <h2 className="text-3xl font-bold text-white text-center mb-8">{t("faq.title")}</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.q} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="w-full">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                          <h3 className="text-lg font-semibold text-left text-white">{faq.q}</h3>
                          <ChevronDown className="w-5 h-5 text-neutral-400 transition-transform group-data-[state=open]:rotate-180" />
                        </CardContent>
                </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-neutral-300 leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{t("nextSteps.badge")}</p>
            <h2 className="text-3xl font-bold text-white mt-3">{t("nextSteps.title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/ecosystem"
              className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Layers className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t("nextSteps.exploreEcosystem.title")}</h3>
                  <p className="text-orange-400 text-sm">{t("nextSteps.exploreEcosystem.subtitle")}</p>
                </div>
              </div>
              <p className="text-neutral-300">
                {t("nextSteps.exploreEcosystem.description")}
              </p>
            </Link>
            <Link
              href="/use"
              className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t("nextSteps.useErgo.title")}</h3>
                  <p className="text-orange-400 text-sm">{t("nextSteps.useErgo.subtitle")}</p>
                </div>
              </div>
              <p className="text-neutral-300">
                {t("nextSteps.useErgo.description")}
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
              <p className="font-semibold text-white text-sm mb-0.5">Ready to build autonomous agents?</p>
              <p className="text-neutral-400 text-sm">Learn ErgoScript acceptance predicates, notes, and reserves — the full agent payment stack with working demos on testnet.</p>
            </div>
          </div>
          <Link
            href="/build/agent-payments"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            Agent Payments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Email Capture Form */}
      <FinalCTASimple
        title={t("cta.title")}
        description={t("cta.description")}
      />

    </div>
    </BackgroundWrapper>
  )
}
