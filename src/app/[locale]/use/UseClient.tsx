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


// FAQ data
const faqs = [
  {
    id: "defi-on-ergo",
    q: "What makes DeFi on Ergo different?",
    a: "Ergo's eUTXO model provides superior security and composability for DeFi. Smart contracts are more predictable, costs are deterministic, and parallel transaction processing enables better scalability. Plus, optional privacy features protect your financial data."
  },
  {
    id: "start-using-ergo",
    q: "How do I start using Ergo applications?",
    a: (
      <>
        1. Get an Ergo wallet like Nautilus or SAFEW<br />
        2. Acquire ERG tokens from exchanges<br />
        3. Explore dApps in our ecosystem<br />
        4. Join the community on Discord or Telegram for help
      </>
    )
  },
  {
    id: "ergo-vs-ethereum",
    q: "How does Ergo compare to Ethereum for dApps?",
    a: "Ergo uses the eUTXO model (vs Ethereum's account model), offering better security, parallel processing, and predictable costs. ErgoScript is more secure by design with formal verification capabilities. Native tokens don't require smart contracts, making them cheaper and safer."
  },
  {
    id: "privacy-features",
    q: "Are Ergo's privacy features legal to use?",
    a: "Ergo provides optional privacy features through Sigma protocols. Users should check their local regulations. Privacy is implemented at the protocol level for legitimate uses like business confidentiality, personal financial privacy, and compliance with data protection laws."
  },
  {
    id: "mining-profitable",
    q: "Is mining ERG still profitable?",
    a: "Mining profitability depends on your electricity costs, hardware efficiency, and ERG price. Ergo's ASIC-resistant Autolykos algorithm keeps mining accessible to GPUs. Use mining calculators to estimate your potential returns based on current network difficulty."
  },
  {
    id: "developer-resources",
    q: "What resources are available for developers?",
    a: (
      <>
        Ergo provides comprehensive developer resources:<br />
        • ErgoScript documentation and tutorials<br />
        • SDKs for multiple languages (Scala, JS, Python)<br />
        • AppKit for dApp development<br />
        • Active developer community and support<br />
        • Grants program for ecosystem projects
      </>
    )
  }
]

export default function UseClient() {
  const t = useTranslations('use')
  const localizedPath = useLocalizedPath()
  const useCases = useMemo(() => data, [])
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // FAQ Section Component
  function FAQSection() {
    // Helper to convert React nodes to plain text for JSON-LD
    function nodeToPlainText(node: React.ReactNode): string {
      if (node === null || node === undefined || node === false) return ""
      if (typeof node === "string" || typeof node === "number") return String(node)
      if (Array.isArray(node)) return node.map(nodeToPlainText).join(" ")
      if (typeof node === "object" && node !== null && "props" in (node as React.ReactElement)) {
        const { children } = ((node as React.ReactElement).props as Record<string, unknown>) ?? {}
        return nodeToPlainText(children as React.ReactNode)
      }
      return ""
    }

    const faqJsonLd = useMemo(() => {
      const items = faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : nodeToPlainText(f.a) },
      }))
      return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items }
    }, [])

    return (
      <section aria-labelledby="faq-heading" className="max-w-5xl mx-auto py-16 px-4">
        <Script id="use-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <h2 id="faq-heading" className="text-4xl font-bold text-center mb-8 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={faq.id} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
              <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                <CollapsibleTrigger asChild>
                  <button className="w-full">
                    <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                      <h3 className="text-lg font-semibold text-left text-white">{faq.q}</h3>
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
                    <div className="text-neutral-300 leading-relaxed [&>a]:text-orange-400 [&>a]:underline [&>a]:hover:text-orange-300 [&>b]:text-white [&>br]:mb-2">
                      {faq.a}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t('title')}</h1>
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
                Why Ergo for DeFi & mining?{" "}
                <Link href="/compare" className="text-orange-400 underline-offset-2 hover:underline">
                  See how it compares
                </Link>
              </p>
            </div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
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
              <Link href={`/use/${uc.id}`} aria-label={`Learn more about ${uc.title}`} className="block h-full">
                <Card className="relative bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 h-full flex flex-col cursor-pointer group">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">{iconNode[uc.icon as keyof typeof iconNode]}</div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{uc.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {uc.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-black/60 border border-white/20 text-neutral-300 text-xs px-2 py-1 rounded">{tag}</span>
                      ))}
                      {uc.tags.length > 3 && (
                        <span className="bg-black/60 border border-white/20 text-neutral-300 text-xs px-2 py-1 rounded">+{uc.tags.length - 3}</span>
                      )}
                    </div>
                    <p className="text-neutral-400 font-medium mb-1">{uc.subtitle}</p>
                    <p className="text-neutral-300 text-base mb-5 flex-1">{uc.description}</p>
                    
                    {/* Hover text that appears in bottom right corner */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-orange-400 font-medium text-right">
                        {uc.id === 'stablecoins' ? 'Learn More' :
                         uc.id === 'privacy' ? 'Discover Privacy' :
                         uc.id === 'bridges' ? 'Connect Chains' :
                         uc.id === 'daos' ? 'Join Community' :
                         uc.id === 'nfts' ? 'Create Assets' :
                         uc.id === 'oracles' ? 'Access Data' :
                         uc.id === 'identity' ? 'Build Identity' :
                         uc.id === 'gaming' ? 'Start Gaming' : 'Learn More'}
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
              Learn the Technology
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
                        ErgoScript
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1">
                      Learn the smart contract language powering these use cases
                    </p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-orange-400 font-medium text-sm">
                        Start Tutorial
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
                        eUTXO Model
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1">
                      Understand the foundation that enables these applications
                    </p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-orange-400 font-medium text-sm">
                        Learn More
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
                        All Technology
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1">
                      Explore all of Ergo's technical innovations
                    </p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-orange-400 font-medium text-sm">
                        View All
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
            What's <span className="text-orange-400">Next?</span>
          </h2>
          <p className="text-xl text-center text-neutral-300 mb-12">
            Start exploring applications or learn how to build on Ergo
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/ecosystem"
              className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-orange-400" />
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

      {/* Agent Economy Banner */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-0.5">New use case: Autonomous Agent Payments</p>
              <p className="text-neutral-400 text-sm">Agents paying agents, programmable credit, community reserves — Ergo is the only chain with this stack built in at the protocol level.</p>
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
        title="Discover New Use Cases"
        description="Get notified about new practical applications, real-world implementations, and use case studies"
      />

      </div>
    </BackgroundWrapper>
  )
} 