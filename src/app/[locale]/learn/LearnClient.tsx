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

const learningTracks = [
  {
    id: "foundations",
    label: "Foundations",
    badge: "Start here",
    gradient: "from-orange-500 to-red-500",
    description: "Learn what makes Ergo different, how wallets stay sovereign, and why Storage Rent keeps the chain sustainable.",
    bullets: [
      "Fair-launch DNA + key principles",
      "Wallet security + on-chain habits",
      "eUTXO vs account mindset shift"
    ],
    cta: { label: "Beginner path", href: "/start/introduction" },
    stack: {
      core: "Wallets · Storage Rent · eUTXO",
      tooling: "Nautilus · SAFEW · Explorer",
      mentors: "Community channels",
      deliverable: "Secure wallet setup"
    }
  },
  {
    id: "developer",
    label: "Developers",
    badge: "Code",
    gradient: "from-green-500 to-cyan-500",
    description: "Hands-on ErgoScript tutorials, VS Code snippets, and full-stack reference dApps.",
    bullets: [
      "Playground + AppKit workflow",
      "Contract templates you can fork",
      "Wallet + explorer integration"
    ],
    cta: { label: "Open dev guide", href: "/learn/ergoscript" },
    stack: {
      core: "eUTXO · ErgoScript · Sigma",
      tooling: "Playground · AppKit · Explorer",
      mentors: "Discord office hours",
      deliverable: "Ship a compliant dApp"
    }
  },
  {
    id: "topics",
    label: "Topics",
    badge: "Explore",
    gradient: "from-sky-500 to-indigo-500",
    description: "Curated topic clusters that group related concepts, articles, and resources together.",
    bullets: [
      "Privacy & Sigma Protocols",
      "Mining & Autolykos",
      "DeFi & Smart Contracts"
    ],
    cta: { label: "Browse topics", href: "/topics" },
    stack: {
      core: "Topic clusters · Related content",
      tooling: "Articles · Glossary · Guides",
      mentors: "Community curators",
      deliverable: "Deep topic understanding"
    }
  },
  {
    id: "privacy",
    label: "Privacy",
    badge: "Sigma",
    gradient: "from-purple-500 to-blue-500",
    description: "Master Σ-protocols, mixers, and selective disclosure flows for auditable privacy.",
    bullets: [
      "Sigma protocols explained visually",
      "ErgoMixer + compliance toolkit",
      "Selective disclosure playbook"
    ],
    cta: { label: "Explore privacy stack", href: "/blog/sigma-protocols-explained" },
    stack: {
      core: "Σ-protocols · ZK proofs · Mixers",
      tooling: "ErgoMixer · Stealth pools",
      mentors: "Privacy researchers",
      deliverable: "Compliant privacy dApp"
    }
  },
  {
    id: "research",
    label: "Research",
    badge: "Deep dive",
    gradient: "from-amber-500 to-lime-500",
    description: "Whitepapers, Storage Rent models, and Autolykos research decks.",
    bullets: [
      "Tokenomics + demurrage models",
      "Autolykos & NiPoPoWs papers",
      "Governance proposals archive"
    ],
    cta: { label: "Download papers", href: "/learn/research" },
    stack: {
      core: "Economics · Consensus · NIPoPoWs",
      tooling: "Research papers · Models",
      mentors: "Core researchers",
      deliverable: "Research contribution"
    }
  }
]

const faqs = [
  {
    q: "How do I get started if I’m brand new?",
    a: "Install Nautilus or SAFEW, back up your seed offline, grab a small amount of ERG, and run through the Beginner Path. It covers wallet hygiene, Storage Rent basics, and how to interact with dApps safely."
  },
  {
    q: "What makes Ergo learning different from other L1s?",
    a: "Ergo combines a research-first roadmap with real-world tooling. You get deterministic contracts (eUTXO), optional privacy (Σ-protocols), and sustainable economics (Storage Rent) without corporate gatekeepers."
  },
  {
    q: "Is ErgoScript hard to learn?",
    a: "If you’ve written Solidity or Rust, ErgoScript will feel familiar. The curated builder path walks through patterns, and AppKit handles most boilerplate so you can focus on business logic."
  },
  {
    q: "Where can I ask questions live?",
    a: "Join the weekly mentor hours on Discord or pop into the #dev or #academy channels any time. Core contributors hang out there and review repos frequently."
  }
]

export default function LearnClient() {
  // Translations available via useTranslations('learn.page') when needed
  const [activeTrack, setActiveTrack] = useState(learningTracks[0].id)
  const faqJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  }), [])

  const activeTrackData = learningTracks.find((track) => track.id === activeTrack)!

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        <Breadcrumbs items={[{ name: "Learn", href: "#" }]} variant="hidden" />

        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-28 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">Ergo Learning Hub</p>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Master Ergo Development</h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                  Learn ErgoScript, eUTXO smart contracts, and Sigma protocols through hands-on tutorials and expert mentorship.
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  From beginner wallet setup to advanced privacy dApps — structured paths with real projects and community support.
                </p>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                  <Link href="/start">Start</Link>
                </Button>
              </div>
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Quick Reference</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        name: "Visual Guides",
                        href: "/infographics",
                        icon: <ImageIcon className="w-6 h-6 text-orange-400" />,
                        subtitle: "Infographics that explain Ergo at a glance",
                      },
                      {
                        name: "Glossary",
                        href: "/learn/glossary",
                        icon: <BookOpen className="w-6 h-6 text-orange-400" />,
                        subtitle: "Ergo terminology & core concepts",
                      },
                      {
                        name: "Playbooks",
                        href: "/playbooks",
                        icon: <Layers className="w-6 h-6 text-orange-400" />,
                        subtitle: "Step-by-step paths for DeFi, privacy, mining",
                      },
                      {
                        name: "Dev Patterns",
                        href: "/patterns",
                        icon: <Cpu className="w-6 h-6 text-orange-400" />,
                        subtitle: "Smart-contract patterns & reusable blueprints",
                      },
                    ].map((track) => (
                      <Link
                        key={track.name}
                        href={track.href}
                        className="block p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            {track.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{track.name}</h4>
                            <p className="text-sm text-neutral-300 mt-1">{track.subtitle}</p>
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
                  onClick={() => setActiveTrack(track.id)}
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
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Curated pathway</p>
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
                  <p className="text-sm uppercase tracking-wide text-gray-400">Stack you will touch</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Core</p>
                    <p className="font-semibold text-white">{activeTrackData.stack.core}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Tooling</p>
                    <p className="font-semibold text-white">{activeTrackData.stack.tooling}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Mentors</p>
                    <p className="font-semibold text-white">{activeTrackData.stack.mentors}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Deliverable</p>
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
            <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
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
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Next steps</p>
            <h2 className="text-3xl font-bold text-white mt-3">Continue Your Journey</h2>
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
                  <h3 className="text-xl font-bold text-white">Explore Ecosystem</h3>
                  <p className="text-orange-400 text-sm">Discover Applications</p>
                </div>
              </div>
              <p className="text-neutral-300">
                Find DeFi protocols, wallets, NFT platforms, and other dApps built on Ergo
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
                  <h3 className="text-xl font-bold text-white">Use Ergo</h3>
                  <p className="text-orange-400 text-sm">Practical Guides</p>
                </div>
              </div>
              <p className="text-neutral-300">
                Step-by-step guides for wallets, DeFi, mining, bridges, and more
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
        title="Level Up Your Blockchain Skills"
        description="Get notified about new tutorials, workshops, and learning resources for Ergo development"
      />

    </div>
    </BackgroundWrapper>
  )
}
