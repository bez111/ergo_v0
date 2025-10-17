"use client"

import { motion } from "framer-motion"
import { Coins, Shield, Palette, Users, TrendingUp, Link2, Eye, Brain, Gamepad2, ArrowRight, ChevronDown, ExternalLink, Code, Database, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMemo, useState, useEffect } from "react"
import { useCases as data } from "./_data"
import { useTranslations } from "next-intl"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Script from "next/script"
import { HiddenBreadcrumbs } from "@/components/seo/hidden-breadcrumbs"

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

function isComingSoon(uc: { supportedProjects: string[] }) {
  return !uc.supportedProjects || uc.supportedProjects.length === 0
}

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
      if (typeof node === "object" && "props" in (node as any)) {
        const { children } = (node as any).props ?? {}
        return nodeToPlainText(children)
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
            <Card key={faq.id} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
              <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                <CollapsibleTrigger asChild>
                  <button className="w-full">
                    <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
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
        <div className="mt-8 pt-6 border-t border-neutral-800">
          <div className="flex justify-end">
            <Button asChild variant="outline" className="bg-neutral-900/60 border-neutral-700 text-neutral-200 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200">
              <Link href="/docs">
                Explore Documentation <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen relative pb-24">
      {/* Hidden Breadcrumbs for SEO */}
      <HiddenBreadcrumbs 
        items={[]} 
        currentPage="Use Cases" 
      />
      
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
                <Button asChild variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-neutral-900/40 px-6 py-3 rounded-xl">
                  <Link href="/docs">{t('buttons.startBuilding')}</Link>
                </Button>
              </div>
            </div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">{t('featuredUseCases.title')}</h3>
                  <div className="space-y-3">
                    {[
                      { name: t('featuredUseCases.defi'), icon: iconNode.coins },
                      { name: t('featuredUseCases.nfts'), icon: iconNode.palette },
                      { name: t('featuredUseCases.privacy'), icon: iconNode.shield },
                    ].map((feature) => (
                      <motion.div key={feature.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700" whileHover={{ scale: 1.01, x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400">{feature.icon}</div>
                          <h4 className="font-semibold text-white">{feature.name}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <Card className="relative bg-neutral-900/50 border border-neutral-700 rounded-xl transition-all duration-200 hover:border-orange-500/30 hover:-translate-y-0.5 h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  {isComingSoon(uc) && (
                    <span className="absolute top-5 right-5 px-3 py-1 rounded-md bg-neutral-900/60 border border-neutral-700 text-[10px] text-neutral-300">{t('buttons.comingSoon')}</span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">{iconNode[uc.icon as keyof typeof iconNode]}</div>
                    <h3 className="text-2xl font-bold text-white">{uc.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {uc.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-neutral-900/60 border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                    {uc.tags.length > 3 && (
                      <span className="bg-neutral-900/60 border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">+{uc.tags.length - 3}</span>
                    )}
                  </div>
                  <p className="text-neutral-400 font-medium mb-1">{uc.subtitle}</p>
                  <p className="text-neutral-300 text-base mb-5">{uc.description}</p>
                                      <Button asChild className="mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-700 bg-neutral-900/50 text-neutral-200 transition-all hover:border-orange-500/50 hover:text-orange-400 hover:bg-orange-500/10 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <Link href={`/use/${uc.id}`} className="flex items-center gap-2" aria-label={`Explore ${uc.title}`}>
                      Explore <ArrowRight className="w-4 h-4" aria-hidden="true" focusable="false" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    ErgoScript
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Learn the smart contract language powering these use cases
                  </p>
                  <Link href="/learn/ergoscript" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    Start Tutorial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    eUTXO Model
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Understand the foundation that enables these applications
                  </p>
                  <Link href="/technology/eutxo-model" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    All Technology
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Explore all of Ergo's technical innovations
                  </p>
                  <Link href="/technology" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQSection />

      {/* Conclusion CTA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
            <CardContent className="text-center py-12 px-8">
              <h3 className="text-4xl font-bold mb-6 text-white">
                Ready to Start Using Ergo?
              </h3>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Whether you're looking to explore DeFi, create NFTs, build private applications, or start mining, 
                Ergo provides the tools and infrastructure you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                  <Link href="/ecosystem">
                    Explore Ecosystem
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl">
                  <Link href="/start">
                    Get Started Guide
                  </Link>
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <p className="text-sm text-neutral-400">
                  Join our community on{" "}
                  <a href="https://discord.gg/ergo" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Discord
                  </a>
                  {" "}or{" "}
                  <a href="https://t.me/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Telegram
                  </a>
                  {" "}for support and updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 