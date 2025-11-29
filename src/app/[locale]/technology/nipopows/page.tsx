"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link2, Smartphone, Zap, Shield, ArrowRight, ExternalLink, Network, CheckCircle, ChevronDown, BookOpen, Terminal } from "lucide-react"
import Link from "next/link"
import { useState, type ReactNode } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { useTranslations } from "next-intl"
import { GlossaryLink } from "@/components/glossary"

// Types and hoisted data
type UseCase = {
  title: string
  description: string
  example: string
  icon: ReactNode
  href?: string
  external?: boolean
}

const benefits = [
  { icon: <Link2 className="w-8 h-8" aria-hidden="true" />, title: "Interoperability", description: "Enables SPV/NIPoPoW-style protocols and trust-minimized cross-chain interactions." },
  { icon: <Smartphone className="w-8 h-8" aria-hidden="true" />, title: "Light Clients", description: "Secure verification on mobile or web without downloading the full blockchain." },
  { icon: <Zap className="w-8 h-8" aria-hidden="true" />, title: "Fast Verification", description: "Verify chain work in seconds using compact proofs instead of full syncs." },
  { icon: <Shield className="w-8 h-8" aria-hidden="true" />, title: "Trustless", description: "No trusted relays or validators; verification follows PoW assumptions." },
] as const

const useCases: UseCase[] = [
  { title: "Cross-Chain Protocols", description: "Trust-minimized bridges and SPV-style interoperability.", example: "Rosen Bridge", icon: <Link2 className="w-8 h-8" aria-hidden="true" />, href: "https://rosen.tech", external: true },
  { title: "Mobile Wallets", description: "Light wallets that prove chain work with succinct proofs.", example: "Ergo Mobile", icon: <Smartphone className="w-8 h-8" aria-hidden="true" />, href: "/wallet", external: false },
  { title: "Oracle Systems", description: "Efficient verification of external chain data.", example: "Oracle Pools", icon: <Network className="w-8 h-8" aria-hidden="true" />, href: "/learn/guides/oracle-pool", external: false },
  { title: "Sidechains", description: "Sidechains can verify L1 succinctly for security and liveness.", example: "Research", icon: <Zap className="w-8 h-8" aria-hidden="true" />, href: "/docs/introduction/research-whitepapers", external: false },
]

const comparisonData = [
  { aspect: "Verification Time", traditional: "Hours to days (full sync)", nipopows: "Seconds to minutes", advantage: "NIPoPoWs" },
  { aspect: "Data Required", traditional: "Entire blockchain history", nipopows: "Small cryptographic proof", advantage: "NIPoPoWs" },
  { aspect: "Trust Requirements", traditional: "Trust full nodes or validators", nipopows: "Trustless cryptographic verification", advantage: "NIPoPoWs" },
  { aspect: "Mobile Compatibility", traditional: "Impractical due to size", nipopows: "Optimized for mobile devices", advantage: "NIPoPoWs" },
  { aspect: "Security model", traditional: "Varies by design", nipopows: "Preserves PoW assumptions", advantage: "NIPoPoWs" },
  { aspect: "Finality handling", traditional: "Implementation-specific", nipopows: "Observe window; new proof can supersede", advantage: "NIPoPoWs" },
  { aspect: "State access", traditional: "Full state on device", nipopows: "Event/work proof only (no full state)", advantage: "Depends" },
]

const workingSteps = [
  { step: 1, title: "Event Occurs", description: "A transaction or block appears on Ergo.", icon: <Zap className="w-6 h-6" aria-hidden="true" /> },
  { step: 2, title: "Proof Generation", description: "A succinct proof is built from sampled headers.", icon: <Shield className="w-6 h-6" aria-hidden="true" /> },
  { step: 3, title: "Verification", description: "Anyone verifies the proof quickly and trustlessly.", icon: <CheckCircle className="w-6 h-6" aria-hidden="true" /> },
]

const baseFaqs = [
  { question: "How do NIPoPoWs enable light clients?", answer: "They let devices verify chain work using compact proofs rather than the full history, providing fast sync and security on mobile/web." },
  { question: "Is security comparable to a full node?", answer: "Security follows PoW assumptions; cheating requires breaking underlying cryptography or majority work." },
  { question: "What new apps does this unlock?", answer: "Trust-minimized bridges, instant mobile onboarding, and efficient oracle/sidechain designs." },
  { question: "Do I need crypto expertise to use it?", answer: "No. Users see faster, lighter wallets; developers integrate proofs via libraries and docs." },
]

const extraFaqs = [
  { question: "How do NIPoPoWs behave under reorgs?", answer: "Light clients should observe a finality window. If a reorg occurs within that window, a new proof can supersede the previous one." },
  { question: "Do NIPoPoWs require special headers or parameters?", answer: "Implementations rely on header data and protocol-specific structures defined in the docs. Use libraries that match current network parameters." },
  { question: "Can a malicious party forge a proof?", answer: "Not without violating PoW assumptions or cryptographic primitives. Security follows the underlying consensus model." },
]

const allFaqs = [...baseFaqs, ...extraFaqs]

export default function NIPOPOWsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const t = useTranslations('technology.nipopows')
  
  const features = [
    {
      title: t('features.0.title'),
      description: t('features.0.description'),
      icon: <Link2 className="w-8 h-8" aria-hidden="true" />,
    },
    {
      title: t('features.1.title'),
      description: t('features.1.description'),
      icon: <Smartphone className="w-8 h-8" aria-hidden="true" />,
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description'),
      icon: <Zap className="w-8 h-8" aria-hidden="true" />,
    },
    {
      title: t('features.3.title'),
      description: t('features.3.description'),
      icon: <Shield className="w-8 h-8" aria-hidden="true" />,
    },
  ]
  
  const useCases = [
    {
      title: t('useCases.0.title'),
      description: t('useCases.0.description'),
      example: t('useCases.0.example'),
      icon: <Link2 className="w-8 h-8" aria-hidden="true" />,
      href: "https://rosen.tech",
      external: true
    },
    {
      title: t('useCases.1.title'),
      description: t('useCases.1.description'),
      example: t('useCases.1.example'),
      icon: <Smartphone className="w-8 h-8" aria-hidden="true" />,
      href: "/wallet",
      external: false
    },
    {
      title: t('useCases.2.title'),
      description: t('useCases.2.description'),
      example: t('useCases.2.example'),
      icon: <Network className="w-8 h-8" aria-hidden="true" />,
      href: "/technology/oracle-pools",
      external: false
    },
    {
      title: t('useCases.3.title'),
      description: t('useCases.3.description'),
      example: t('useCases.3.example'),
      icon: <Zap className="w-8 h-8" aria-hidden="true" />,
      href: "/docs/introduction/research-whitepapers",
      external: false
    },
    {
      title: t('useCases.4.title'),
      description: t('useCases.4.description'),
      example: t('useCases.4.example'),
      icon: <Shield className="w-8 h-8" aria-hidden="true" />,
      href: "/use/defi",
      external: false
    },
    {
      title: t('useCases.5.title'),
      description: t('useCases.5.description'),
      example: t('useCases.5.example'),
      icon: <CheckCircle className="w-8 h-8" aria-hidden="true" />,
      href: "/ecosystem/financial",
      external: false
    }
  ]

  return (
    <>
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: allFaqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Technology", item: "https://ergoblockchain.org/technology" },
            { "@type": "ListItem", position: 2, name: "NIPoPoWs", item: "https://ergoblockchain.org/technology/nipopows" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          "@id": "https://ergoblockchain.org/technology/nipopows#article",
          headline: "NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) on Ergo — Light Clients & Cross-Chain",
          description: "Verify Ergo on mobile/web with compact PoW proofs. NIPoPoWs enable light clients, bridges, and efficient oracles.",
          image: "https://ergoblockchain.org/og/nipopows.png",
          datePublished: "2023-11-10",
          dateModified: "2025-08-10",
          mainEntityOfPage: "https://ergoblockchain.org/technology/nipopows",
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          keywords: "NIPoPoWs, Non-Interactive Proofs of Proof-of-Work, SPV, light clients, succinct proofs, cross-chain, Ergo",
          about: [
            { "@type": "Thing", name: "NIPoPoW" },
            { "@type": "Thing", name: "Light client" },
            { "@type": "Thing", name: "Cross-chain bridge" },
            { "@type": "Thing", name: "Proof-of-Work" },
          ],
          isPartOf: { "@type": "WebPage", "@id": "https://ergoblockchain.org/technology" },
        }}
      />

      <BackgroundWrapper>
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[{ name: "Technology", href: "/technology" }, { name: "NIPoPoWs", href: "/technology/nipopows" }]}
            className="mb-8"
          />
        </div>
        <FadeIn>
          {/* Hero */}
          <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">NIPoPoWs — Non-Interactive Proofs of Proof-of-Work</h1>
                <p className="text-xl md:text-2xl text-neutral-300 mb-6">Succinct proofs of chain work for trust-minimized verification.</p>
                <p className="text-lg text-neutral-400 mb-8">Verify Ergo from mobile, browsers, or other chains using compact proofs instead of full sync. Learn how <GlossaryLink term="proof-of-work" variant="subtle" /> works in <Link href="/technology/secure-pow" className="underline hover:opacity-80">Secure PoW</Link>.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl" data-cta="learn-more">
                    <Link href="#what">Learn More</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl" data-cta="view-docs">
                    <Link href="/api/pdf/documents/Non-Interactive%20Proofs%20of%20Proof-of-Work.pdf" target="_blank" rel="noopener noreferrer">View Docs</Link>
                  </Button>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">
                    Quick Start
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {workingSteps.map(step => (
                      <div key={step.step} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <div className="w-6 h-6 rounded-full bg-orange-500 text-black font-bold text-sm grid place-items-center">{step.step}</div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{step.title}</h4>
                            <p className="text-neutral-400 text-sm">{step.description}</p>
                          </div>
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
          {/* What */}
          <section id="what" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 text-white">What are NIPoPoWs?</h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6"><GlossaryLink term="nipopows" showTooltip={false}>NIPoPoWs</GlossaryLink> are cryptographic proofs that let you verify blockchain events without downloading the entire chain — ideal for mobile and cross-chain use via <GlossaryLink term="light-clients" variant="subtle" />.</p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-4">Proof size and verification grow <strong>logarithmically</strong> with chain length via sampling of <strong>superblocks</strong> from headers.</p>
                <p className="text-neutral-300 text-lg leading-relaxed">Compared with classic SPV, NIPoPoWs give formal guarantees to compare competing chains by accumulated work without full state.</p>
                <ul className="list-disc list-inside text-neutral-400 mt-4">
                  <li>Requires observing a finality window for short reorgs</li>
                  <li>Proofs depend on current network parameters/headers</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          {/* Why it matters */}
          <section id="benefits" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Why NIPoPoWs Matter</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-orange-400 w-6 h-6" aria-hidden="true">{benefit.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-orange-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Reorg-resilience & finality windows</h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">Light clients should observe a finality window; new proofs can supersede earlier ones if a short reorg occurs.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          {/* Comparison */}
          <section id="comparison" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">NIPoPoWs vs Traditional Verification</h2>
              <p id="comparison-desc" className="text-neutral-300 text-center max-w-3xl mx-auto mb-6">NIPoPoWs preserve PoW security assumptions while cutting verification data from full history to compact proofs.</p>
              <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-12 overflow-hidden">
                <div className="overflow-x-auto">
                  <table aria-describedby="comparison-desc" className="w-full text-sm">
                    <caption className="sr-only">Comparison of verification properties</caption>
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">Aspect</th>
                        <th className="text-left p-4 font-semibold text-red-400">Traditional</th>
                        <th className="text-left p-4 font-semibold text-green-400">NIPoPoWs</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {comparisonData.map((row, index) => (
                        <tr key={row.aspect} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                          <th scope="row" className="p-4 font-medium">{row.aspect}</th>
                          <td className="p-4">
                            <span className="text-red-400">{row.traditional}</span>
                          </td>
                          <td className="p-4">
                            <span className="text-green-400">{row.nipopows}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Color Legend */}
              <div className="mt-4 mb-6">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Comparison aspects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Traditional limitations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">NIPoPoW advantages</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.8}>
          {/* Real use cases */}
          <section id="use-cases" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Real Use Cases</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase) => {
                  const CardComponent = useCase.href ? (
                    useCase.external ? (
                      <a 
                        key={useCase.title}
                        href={`${useCase.href}${useCase.href.includes('?') ? '&' : '?'}utm_source=site&utm_medium=referral&utm_campaign=nipopows`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`${useCase.title} - ${useCase.example} (opens in a new tab)`}
                        className="group bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 cursor-pointer block"
                      >
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 text-orange-400 group-hover:bg-orange-500/30 group-hover:text-orange-300 transition-all duration-300">
                              <div className="w-6 h-6" aria-hidden="true">{useCase.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{useCase.title}</h3>
                          </div>
                          <p className="text-neutral-200 leading-relaxed group-hover:text-neutral-100 transition-colors duration-300">{useCase.description}</p>
                        </div>
                      </a>
                    ) : (
                      <Link 
                        key={useCase.title}
                        href={useCase.href}
                        className="group bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 cursor-pointer block"
                      >
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 text-orange-400 group-hover:bg-orange-500/30 group-hover:text-orange-300 transition-all duration-300">
                              <div className="w-6 h-6" aria-hidden="true">{useCase.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{useCase.title}</h3>
                          </div>
                          <p className="text-neutral-200 leading-relaxed group-hover:text-neutral-100 transition-colors duration-300">{useCase.description}</p>
                        </div>
                      </Link>
                    )
                  ) : (
                    <div 
                      key={useCase.title}
                      className="group bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1"
                    >
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 text-orange-400 group-hover:bg-orange-500/30 group-hover:text-orange-300 transition-all duration-300">
                            <div className="w-6 h-6" aria-hidden="true">{useCase.icon}</div>
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{useCase.title}</h3>
                        </div>
                        <p className="text-neutral-200 leading-relaxed group-hover:text-neutral-100 transition-colors duration-300">{useCase.description}</p>
                      </div>
                    </div>
                  );
                  
                  return CardComponent;
                })}
              </div>
              {/* Developer quick-start */}
              <div className="max-w-6xl mx-auto mt-8">
                <div className="bg-black/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Developer quick-start</h3>
                  <pre className="text-sm text-neutral-200 overflow-x-auto bg-neutral-950/60 rounded p-4"><code className="language-ts">{`// TypeScript pseudo: verify NiPoPoW proof against best header
import { verifyProof } from "@ergo/nipopow"; // replace with actual lib

const proof = await fetch("/api/proof?txId=...").then(r => r.json());
const headers = await fetch("/api/headers?from=...").then(r => r.json());

const ok = verifyProof(proof, headers);
if (!ok) throw new Error("Invalid proof");
// continue: accept event / show confirmed state
`}</code></pre>
                  <div className="mt-3 text-sm text-neutral-500">Library names/endpoints are illustrative — see docs/SDK.</div>
                </div>
              </div>
            </div>
          </section>

        </FadeIn>

        <FadeIn delay={1.0}>
          {/* FAQ */}
          <section className="py-20 px-4" id="faq">
            <div className="max-w-4xl mx-auto" aria-live="polite">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {allFaqs.map((faq, index) => (
                  <div key={index} className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                      <CollapsibleTrigger asChild>
                        <button className="w-full" aria-expanded={openFAQ === index} aria-controls={`faq-panel-${index}`} id={`faq-trigger-${index}`}>
                          <div className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                            <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                            <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} aria-hidden="true" />
                          </div>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent id={`faq-panel-${index}`} aria-labelledby={`faq-trigger-${index}`}>
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.2}>
          {/* What's Next */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                What's <span className="text-orange-400">Next</span>?
              </h2>
              <p className="text-xl text-center text-neutral-300 mb-12">
                Continue exploring Ergo's innovative blockchain technology
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/ecosystem"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Explore Applications</h3>
                      <p className="text-orange-400 text-sm">Discover Ecosystem</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Discover applications and tools built with NIPoPoW technology
                  </p>
                </Link>
                
                <a 
                  href="https://docs.ergoplatform.com/protocol/nipopows/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Technical Documentation</h3>
                      <p className="text-orange-400 text-sm">Learn More</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Deep dive into NIPoPoW implementation details and specifications
                  </p>
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </BackgroundWrapper>
    </>
  )
}
