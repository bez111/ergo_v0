"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Code,
  Cpu,
  FileText,
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Users,
  Compass,
  ChevronDown
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { HiddenBreadcrumbs } from "@/components/seo/hidden-breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { useMemo, useState } from "react"
import Script from "next/script"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const stats = [
  { label: "Self-paced tracks", value: "4" },
  { label: "Deep-dive lessons", value: "25+" },
  { label: "Community mentors", value: "400+" }
]

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

const featuredResources = [
  {
    title: "ErgoScript Builder Path",
    description: "Deploy contracts, test with AppKit, and ship deterministic UX.",
      icon: Code,
    difficulty: "Intermediate",
    duration: "10 lessons",
    href: "/learn/ergoscript",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400"
  },
  {
    title: "Ergo Learning FAQ",
    description: "Wallet setup, community onboarding, and best practices.",
      icon: FileText,
    difficulty: "Beginner",
    duration: "12 answers",
    href: "/learn/faq",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Research Vault",
    description: "Economics, privacy primitives, and roadmap-level research.",
      icon: BookOpen,
    difficulty: "Advanced",
    duration: "20+ papers",
    href: "/learn/research",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  }
]

const roadmap = [
  {
    week: "Week 01",
    title: "Map the territory",
    description: "Understand Ergo’s position vs BTC/Ethereum and master wallet flows.",
    resources: ["Ergo in 5 Minutes", "eUTXO vs Accounts", "Wallet security checklist"],
    icon: Compass
  },
  {
    week: "Week 02",
    title: "Ship a contract",
    description: "Spin up the dev stack, deploy a crowdfunding contract, and hook it to the explorer.",
    resources: ["ErgoScript basics", "VS Code snippets", "Playground"],
    icon: Code
  },
  {
    week: "Week 03",
    title: "Add privacy & polish",
    description: "Layer Σ-protocols, integrate selective disclosure, and document the UX.",
    resources: ["Sigma guide", "ErgoMixer docs", "UX checklist"],
    icon: Shield
  }
]

const quickLinks = [
  { label: "Docs & SDKs", href: "/docs", icon: Layers },
  { label: "Glossary", href: "/learn/glossary", icon: BookOpen },
  { label: "Tutorial library", href: "/learn/ergoscript", icon: Code },
  { label: "Watch workshops", href: "https://youtube.com/@ErgoPlatform", icon: Sparkles },
  { label: "Join community", href: "/start/community", icon: Users }
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
        <HiddenBreadcrumbs items={[]} currentPage="Learn" />

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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="/start/introduction">Start the beginner path</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <Link href="/docs">Browse docs & SDKs</Link>
                  </Button>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Learning Tracks</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: "Foundations", icon: <Compass className="w-6 h-6 text-orange-400" />, subtitle: "Wallet security & eUTXO basics" },
                      { name: "Developers", icon: <Code className="w-6 h-6 text-orange-400" />, subtitle: "ErgoScript & AppKit mastery" },
                      { name: "Privacy", icon: <Shield className="w-6 h-6 text-orange-400" />, subtitle: "Σ-protocols & selective disclosure" },
                    ].map((track) => (
                      <div key={track.name} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">{track.icon}</div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{track.subtitle}</h4>
          </div>
        </div>
                      </div>
                    ))}
                    </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                      ))}
                    </div>
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
          <div className="max-w-6xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Featured resources</p>
            <h2 className="text-3xl font-bold text-white mt-3">Top picks to level up</h2>
          </div>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{ 
              hidden: { opacity: 0, y: 24 }, 
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } } 
            }} 
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredResources.map((resource) => (
              <motion.div
                key={resource.title} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="relative h-full"
              >
                <Link href={resource.href} className="block h-full">
                  <Card className="relative bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 h-full flex flex-col cursor-pointer group">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${resource.color} border border-white/10`}>
                          <resource.icon className={`w-7 h-7 ${resource.iconColor}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{resource.title}</h3>
                    </div>
                      <p className="text-neutral-300 text-base mb-6 flex-1">{resource.description}</p>
                      <div className="flex items-center justify-between text-sm text-neutral-400 pb-10">
                      <span>{resource.difficulty}</span>
                      <span>{resource.duration}</span>
                    </div>

                      {/* Hover text */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-orange-400 font-medium text-right flex items-center gap-2">
                          {resource.title === "ErgoScript Builder Path" && "Start Building"}
                          {resource.title === "Ergo Learning FAQ" && "Get Answers"}
                          {resource.title === "Research Vault" && "Explore Research"}
                          <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
      </section>

        <section className="px-4 py-16 bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Learning sprint</p>
                <h2 className="text-3xl font-bold text-white mt-2">3-week roadmap</h2>
              </div>
              <Link href="/start/program" className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors">
                View program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-6">
              {roadmap.map((milestone) => (
                <div key={milestone.week} className="relative flex flex-col md:flex-row gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-400/50 transition-all">
                  <Badge className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
                    Soon
                  </Badge>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <milestone.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{milestone.week}</p>
                      <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 mb-3">{milestone.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      {milestone.resources.map((resource) => (
                        <span key={resource} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Quick access</p>
              <h2 className="text-3xl font-bold text-white mt-3">Essential resources</h2>
            </div>
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={{ 
                hidden: { opacity: 0, y: 24 }, 
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } } 
              }} 
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch"
            >
              {quickLinks.map((item) => (
                <motion.div 
                  key={item.label} 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} 
                  className="relative h-full"
                >
                  <Link href={item.href} className="block h-full">
                    <Card className="bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 hover:scale-105 h-full flex flex-col cursor-pointer group">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30 group-hover:bg-orange-500/30 transition-colors">
                          <item.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{item.label}</h3>
                      </div>
                      <p className="text-neutral-300 text-base flex-1 group-hover:text-neutral-200 transition-colors">
                        {item.label === "Docs & SDKs" && "Technical documentation, API references, and software development kits for building on Ergo."}
                        {item.label === "Glossary" && "Complete dictionary of Ergo terminology: eUTXO, NiPoPoWs, Sigma Protocols, and more."}
                        {item.label === "Tutorial library" && "Step-by-step guides and tutorials covering everything from basics to advanced topics."}
                        {item.label === "Watch workshops" && "Video workshops and presentations from Ergo developers and community experts."}
                        {item.label === "Join community" && "Connect with developers, miners, and enthusiasts in the Ergo ecosystem."}
                      </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Next steps</p>
            <h2 className="text-3xl font-bold text-white mt-3">Continue Your Learning Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
              href="/docs"
              className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Start Building</h3>
                  <p className="text-orange-400 text-sm">Developer Resources</p>
                </div>
            </div>
              <p className="text-neutral-300">
                Access documentation, tutorials, and tools to build your own Ergo applications
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture Form */}
      <FinalCTASimple 
        title="Level Up Your Blockchain Skills"
        description="Get notified about new tutorials, workshops, and learning resources for Ergo development"
      />

    </div>
    </BackgroundWrapper>
  )
}
