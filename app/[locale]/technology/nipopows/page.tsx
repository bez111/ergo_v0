"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Link2, Smartphone, Zap, Shield, ArrowRight, ExternalLink, Network, CheckCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, type ReactNode } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { useTranslations } from "next-intl"
import { useLocalizedPath } from "@/hooks/use-localized-path"

// Types and hoisted data
type UseCase = {
  title: string
  description: string
  example: string
  icon: ReactNode
  href?: string
  external?: boolean
}

// Benefits moved inside component to use translations

// Use cases moved inside component to use translations

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
  const t = useTranslations('technology.nipopowsPage')
  const localizedPath = useLocalizedPath()
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const lastUpdated = new Date().toISOString().slice(0, 10)

  const benefits = [
    { icon: <Link2 className="w-8 h-8" aria-hidden="true" />, title: t('benefits.interoperability.title'), description: t('benefits.interoperability.description') },
    { icon: <Smartphone className="w-8 h-8" aria-hidden="true" />, title: t('benefits.lightClients.title'), description: t('benefits.lightClients.description') },
    { icon: <Zap className="w-8 h-8" aria-hidden="true" />, title: t('benefits.fastVerification.title'), description: t('benefits.fastVerification.description') },
    { icon: <Shield className="w-8 h-8" aria-hidden="true" />, title: t('benefits.trustless.title'), description: t('benefits.trustless.description') },
  ]

  const useCases: UseCase[] = [
    { title: t('useCases.crossChain.title'), description: t('useCases.crossChain.description'), example: t('useCases.crossChain.example'), icon: <Link2 className="w-8 h-8" aria-hidden="true" />, href: "https://rosen.tech", external: true },
    { title: t('useCases.mobileWallets.title'), description: t('useCases.mobileWallets.description'), example: t('useCases.mobileWallets.example'), icon: <Smartphone className="w-8 h-8" aria-hidden="true" />, href: localizedPath("/wallet"), external: false },
    { title: t('useCases.oracleSystems.title'), description: t('useCases.oracleSystems.description'), example: t('useCases.oracleSystems.example'), icon: <Network className="w-8 h-8" aria-hidden="true" />, href: localizedPath("/learn/guides/oracle-pool"), external: false },
    { title: t('useCases.sidechains.title'), description: t('useCases.sidechains.description'), example: t('useCases.sidechains.example'), icon: <Zap className="w-8 h-8" aria-hidden="true" />, href: localizedPath("/docs/introduction/research-whitepapers"), external: false },
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

      <div className="min-h-screen bg-black text-white">
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[{ name: "Technology", href: "/technology" }, { name: "NIPoPoWs", href: "/technology/nipopows" }]}
            className="mb-8"
          />
        </div>

        <div className="relative z-10">
          {/* Hero */}
          <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">NIPoPoWs — Non-Interactive Proofs of Proof-of-Work</h1>
                <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                <p className="text-xl md:text-2xl text-neutral-300 mb-6">Succinct proofs of chain work for trust-minimized verification.</p>
                <p className="text-lg text-neutral-400 mb-8">Verify Ergo from mobile, browsers, or other chains using compact proofs instead of full sync. Learn how PoW works in <Link href="/technology/secure-pow" className="underline hover:opacity-80">Secure PoW</Link>.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl" data-cta="learn-more">
                    <Link href="#what">Learn More</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl" data-cta="view-docs">
                    <Link href="https://docs.ergoplatform.com/protocol/nipopows/" target="_blank" rel="noopener noreferrer">View Docs</Link>
                  </Button>
                </div>
                <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                  <ul className="flex flex-wrap gap-4">
                    <li><a href="#what" className="hover:text-orange-400">What are NIPoPoWs</a></li>
                    <li><a href="#benefits" className="hover:text-orange-400">Benefits</a></li>
                    <li><a href="#use-cases" className="hover:text-orange-400">Use cases</a></li>
                    <li><a href="#faq" className="hover:text-orange-400">FAQ</a></li>
                  </ul>
                </nav>

              </div>
              <div>
                <Card className="bg-neutral-900/50 border-neutral-700 p-8 rounded-xl">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Process Overview</h3>
                    <div className="space-y-4">
                      {workingSteps.map(step => (
                        <div key={step.step} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-black font-bold grid place-items-center">{step.step}</div>
                            <div className="text-orange-400" aria-hidden="true">{step.icon}</div>
                            <div>
                              <h4 className="font-semibold text-white">{step.title}</h4>
                              <p className="text-sm text-neutral-400">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What */}
          <section id="what" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">What are NIPoPoWs?</h2>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">NIPoPoWs are cryptographic proofs that let you verify blockchain events without downloading the entire chain — ideal for mobile and cross-chain use.</p>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-4">Proof size and verification grow <strong>logarithmically</strong> with chain length via sampling of <strong>superblocks</strong> from headers.</p>
                  <p className="text-neutral-300 text-lg leading-relaxed">Compared with classic SPV, NIPoPoWs give formal guarantees to compare competing chains by accumulated work without full state.</p>
                  <ul className="list-disc list-inside text-neutral-400 mt-4">
                    <li>Requires observing a finality window for short reorgs</li>
                    <li>Proofs depend on current network parameters/headers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why it matters */}
          <section id="benefits" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Why NIPoPoWs Matter</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit) => (
                  <Card key={benefit.title} className="bg-neutral-900/50 border-neutral-700 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-neutral-800 rounded-lg text-orange-400" aria-hidden="true">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                          <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Card className="bg-neutral-900/50 border-neutral-700 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-neutral-800 rounded-lg text-orange-400" aria-hidden="true"><Shield className="w-8 h-8" /></div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Reorg-resilience & finality windows</h3>
                        <p className="text-neutral-400 leading-relaxed">Light clients should observe a finality window; new proofs can supersede earlier ones if a short reorg occurs.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section id="comparison" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">NIPoPoWs vs Traditional Verification</h2>
              <p id="comparison-desc" className="text-neutral-300 text-center max-w-3xl mx-auto mb-6">NIPoPoWs preserve PoW security assumptions while cutting verification data from full history to compact proofs.</p>
              <Card className="bg-neutral-900/50 border-neutral-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table aria-describedby="comparison-desc" className="w-full">
                      <caption className="sr-only">Comparison of verification properties</caption>
                      <thead className="bg-neutral-900">
                        <tr>
                          <th scope="col" className="px-6 py-4 text-left text-neutral-300 font-semibold">Aspect</th>
                          <th scope="col" className="px-6 py-4 text-left text-neutral-300 font-semibold">Traditional</th>
                          <th scope="col" className="px-6 py-4 text-left text-neutral-300 font-semibold">NIPoPoWs</th>
                          <th scope="col" className="px-6 py-4 text-left text-neutral-300 font-semibold">Advantage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={row.aspect} className={index % 2 === 0 ? "bg-neutral-900/30" : undefined}>
                            <th scope="row" className="px-6 py-4 font-medium text-white text-left">{row.aspect}</th>
                            <td className="px-6 py-4 text-neutral-300 text-sm">{row.traditional}</td>
                            <td className="px-6 py-4 text-neutral-300 text-sm">{row.nipopows}</td>
                            <td className="px-6 py-4">
                              <Badge variant="outline" className="text-neutral-300 border-neutral-600">{row.advantage}</Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Real use cases */}
          <section id="use-cases" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Real Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase) => (
                  <Card key={useCase.title} className="bg-neutral-900/50 border-neutral-700 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-neutral-800 rounded-lg text-orange-400" aria-hidden="true">{useCase.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                          <p className="text-neutral-400 mb-4">{useCase.description}</p>
                          {useCase.href ? (
                            useCase.external ? (
                              <a href={`${useCase.href}${useCase.href.includes('?') ? '&' : '?'}utm_source=site&utm_medium=referral&utm_campaign=nipopows`} target="_blank" rel="noopener noreferrer" aria-label={`${useCase.example} (opens in a new tab)`} className="inline-flex items-center gap-1 underline hover:opacity-80">
                                {useCase.example} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                              </a>
                            ) : (
                              <Link href={useCase.href} className="inline-flex items-center gap-1 underline hover:opacity-80">
                                {useCase.example} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                              </Link>
                            )
                          ) : null}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Developer quick-start */}
              <div className="max-w-6xl mx-auto mt-8">
                <Card className="bg-neutral-900/50 border-neutral-700">
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-4" id="faq">
            <div className="max-w-4xl mx-auto" aria-live="polite">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {allFaqs.map((faq, index) => (
                  <Card key={index} className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                    <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                      <CollapsibleTrigger asChild>
                        <button className="w-full" aria-expanded={openFAQ === index} aria-controls={`faq-panel-${index}`} id={`faq-trigger-${index}`}>
                          <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                            <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                            <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} aria-hidden="true" />
                          </CardContent>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent id={`faq-panel-${index}`} aria-labelledby={`faq-trigger-${index}`}>
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                <CardContent className="p-12">
                  <h2 className="text-4xl font-bold mb-6 text-white">The Future of Interoperability</h2>
                  <p className="text-xl text-neutral-300 mb-8 leading-relaxed">NIPoPoWs enable a new generation of lightweight, trust-minimized applications across devices and chains.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl" data-cta="explore-apps">
                      <Link href="/ecosystem" className="flex items-center">
                        <ArrowRight className="mr-2 w-4 h-4" aria-hidden="true" />
                        Explore Applications
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl" data-cta="docs">
                      <Link href="https://docs.ergoplatform.com/protocol/nipopows/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 w-4 h-4" aria-hidden="true" />
                        Technical Documentation
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
