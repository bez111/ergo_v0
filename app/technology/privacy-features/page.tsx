"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Eye, Shield, Shuffle, Vote, ArrowRight, ExternalLink, CheckCircle, Lock, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import dynamic from "next/dynamic"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

const HexagonalGrid = dynamic(() => import("@/components/ui-kit/signature-effects").then(m => m.HexagonalGrid), { ssr: false })

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

const TECHNOLOGIES = [
  {
    icon: <Shield className="w-8 h-8" aria-hidden="true" focusable="false" />,
    title: "Sigma Protocols",
    description:
      "Enable powerful privacy tools like ring signatures and zero-knowledge proofs at the protocol level.",
    features: ["Zero-knowledge proofs", "Ring signatures", "Threshold signatures", "Composable privacy"],
  },
  {
    icon: <Shuffle className="w-8 h-8" aria-hidden="true" focusable="false" />,
    title: "ErgoMixer",
    description: "On-chain, non-custodial mixing for transaction privacy and anonymity.",
    features: [
      "Non-custodial mixing",
      "On-chain privacy",
      "Token mixing support",
      "Configurable anonymity",
    ],
  },
  {
    icon: <Eye className="w-8 h-8" aria-hidden="true" focusable="false" />,
    title: "Confidential Assets",
    description: "Issue tokens with hidden amounts and rules for maximum privacy.",
    features: [
      "Hidden token amounts",
      "Private smart contracts",
      "Confidential transactions",
      "Selective disclosure",
    ],
  },
] as const

const ADVANTAGES = [
  "No trusted setup needed — pure cryptographic security",
  "Flexible privacy features usable in dApps, DeFi, and NFTs",
  "Open-source, peer-reviewed cryptography",
  "Composable with other Ergo features",
  "Built into the protocol, not added as afterthought",
  "Mathematically proven security guarantees",
] as const

export const USE_CASES = [
  {
    title: "Private Transactions",
    description:
      "Mix your ERG and tokens to achieve strong on-chain anonymity (within the current anonymity set)",
    icon: <Shuffle className="w-8 h-8" aria-hidden="true" focusable="false" />,
    example: "ErgoMixer",
  },
  {
    title: "Confidential DeFi",
    description: "Build DeFi applications with private balances and logic",
    icon: <Lock className="w-8 h-8" aria-hidden="true" focusable="false" />,
    example: "Private DEX orders",
  },
  {
    title: "Anonymous Voting",
    description: "Create DAOs and voting systems with secret ballots",
    icon: <Vote className="w-8 h-8" aria-hidden="true" focusable="false" />,
    example: "DAO governance",
  },
  {
    title: "Private NFTs",
    description: "NFTs with hidden metadata or ownership information",
    icon: <Eye className="w-8 h-8" aria-hidden="true" focusable="false" />,
    example: "Confidential collectibles",
  },
] as const

export const FAQS = [
  {
    question: "What level of privacy does Ergo offer? Is it just coin mixing?",
    answer:
      "Ergo offers multi-layered privacy, not just a single feature. At its core are Sigma protocols—powerful cryptography that allows data to be hidden. On top of this runs ErgoMixer (non-custodial community tool), the first non-interactive and trustless mixer in the eUTXO space. It helps break the link between your transactions, providing strong anonymity on-chain.",
  },
  {
    question: "If I use privacy features, won't my transactions look suspicious?",
    answer:
      "On the contrary. Because privacy tools are a core part of the Ergo ecosystem, using them is the norm. When many people mix their coins, they create a large anonymity set where it's easy to blend in. On Ergo, protecting your financial data is standard practice, not a reason for suspicion.",
  },
  {
    question: "Doesn't this kind of privacy attract criminals?",
    answer:
      "Privacy is a fundamental right, not an admission of guilt. You don't use curtains on your windows because you're doing something illegal. Businesses need privacy for trade secrets and payrolls, and individuals need it to protect themselves from tracking and profiling.",
  },
  {
    question: "What if I need to prove a transaction for taxes or an audit?",
    answer:
      "Ergo applies a 'privacy by choice' approach with selective disclosure. When needed, you can provide viewing keys for specific transactions to an auditor or regulator without revealing your entire financial history.",
  },
] as const

export default function PrivacyFeaturesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const prefersReduced = useReducedMotion()
  const lastUpdated = new Date().toISOString().slice(0, 10)

  return (
    <>
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What privacy features does Ergo offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Ergo offers multiple privacy features including Sigma protocols, ring signatures, zero-knowledge proofs, and confidential transactions. These technologies enable privacy-preserving transactions while maintaining security and compliance.",
              },
            },
            {
              "@type": "Question",
              name: "How do Sigma protocols work?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sigma protocols are zero-knowledge proof systems that allow proving statements about secret values without revealing the values themselves. They enable privacy-preserving authentication and transaction validation.",
              },
            },
            {
              "@type": "Question",
              name: "Are Ergo's privacy features regulatory compliant?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes, Ergo's privacy features are designed to be regulatory compliant. They provide selective disclosure capabilities, allowing users to reveal transaction details when required while maintaining privacy by default.",
              },
            },
          ],
        }}
      />

      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          "@id": "https://ergoblockchain.org/technology/privacy-features#article",
          headline:
            "Ergo Privacy — Sigma Protocols, Mixer, Confidential Assets",
          description:
            "Ergo bakes privacy into the protocol: Sigma protocols, ring/threshold signatures, ErgoMixer, confidential assets and selective disclosure.",
          image: "https://ergoblockchain.org/og/privacy.png",
          datePublished: "2023-11-10",
          dateModified: "2025-08-10",
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          keywords:
            "Ergo privacy,Sigma protocols,ring signatures,zero-knowledge proofs,ErgoMixer,confidential transactions",
          about: [
            { "@type": "Thing", name: "Sigma protocol" },
            { "@type": "Thing", name: "Zero-knowledge proof" },
          ],
          isPartOf: { "@type": "WebPage", "@id": "https://ergoblockchain.org/technology" },
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Technology", item: "https://ergoblockchain.org/technology" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Features",
              item: "https://ergoblockchain.org/technology/privacy-features",
            },
          ],
        }}
      />
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: "How to increase privacy with ErgoMixer",
          description: "High-level steps to improve on-chain privacy using ErgoMixer with delays and larger anonymity sets.",
          step: [
            { "@type": "HowToStep", position: 1, name: "Prepare funds", text: "Split funds and avoid address reuse." },
            { "@type": "HowToStep", position: 2, name: "Run mix", text: "Choose round count/delay for larger anonymity set." },
            { "@type": "HowToStep", position: 3, name: "Wait & spend", text: "Spend after a delay; avoid direct linkability." },
          ],
        }}
      />

      <div className="min-h-screen relative">
        <a href="#what" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-black/80 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Privacy Features", href: "/technology/privacy-features" },
            ]}
            className="mb-8"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
          <HexagonalGrid className="opacity-[0.02]" />
        </div>

        <LazyMotion features={domAnimation}>
          <m.main
            variants={containerVariants}
            initial={prefersReduced ? false : "hidden"}
            animate={prefersReduced ? false : "visible"}
            className="relative z-10 motion-reduce:animate-none"
          >
            <m.section
              variants={prefersReduced ? undefined : itemVariants}
              transition={prefersReduced ? { duration: 0 } : undefined}
              className="pt-28 md:pt-32 pb-12 md:pb-16 px-4"
              viewport={prefersReduced ? undefined : { once: true, amount: 0.2 }}
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">Privacy Features</h1>
                    <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                    <p className="lead text-xl md:text-2xl text-neutral-300 mb-6 max-w-2xl">Privacy by choice and selective disclosure</p>
                    <p className="text-lg text-neutral-400 mb-6 max-w-2xl leading-relaxed">
                      Financial freedom and privacy go hand in hand. Ergo bakes privacy features directly into its core — not as an afterthought.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        <Link href="/docs">Explore Privacy</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm"
                      >
                        <Link href="/ecosystem">Try ErgoMixer</Link>
                      </Button>
                    </div>
                    <nav aria-label="On-page navigation" className="sticky top-16 z-[5] mt-6 flex flex-wrap gap-3 text-sm text-neutral-400">
                      <Link href="#what" className="underline hover:opacity-80">What</Link>
                      <span aria-hidden>·</span>
                      <Link href="#technologies" className="underline hover:opacity-80">Technologies</Link>
                      <span aria-hidden>·</span>
                      <Link href="#use-cases" className="underline hover:opacity-80">Use cases</Link>
                      <span aria-hidden>·</span>
                      <Link href="#faq" className="underline hover:opacity-80">FAQ</Link>
                    </nav>
                  </div>
                  <div className="relative">
                    <div className="relative z-10">
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-orange-500/30 transition-colors">
                        <CardContent className="p-0">
                          <h3 className="text-2xl font-bold mb-6 text-center text-white">Privacy Levels</h3>
                          <div className="space-y-4">
                            {[{
                              level: "Basic Privacy",
                              description: "Standard transactions with pseudonymous addresses",
                              features: ["Pseudonymous addresses", "UTXO model benefits", "Basic transaction privacy"],
                            },{
                              level: "Enhanced Privacy",
                              description: "Using ErgoMixer for transaction mixing and unlinkability",
                              features: ["Transaction mixing", "Address unlinkability", "Amount obfuscation"],
                            },{
                              level: "Maximum Privacy",
                              description: "Sigma protocols with zero-knowledge proofs and ring signatures",
                              features: ["Zero-knowledge proofs", "Ring signatures", "Confidential assets", "Private smart contracts"],
                            }].map((level) => (
                              <div key={level.level} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                                <h4 className="font-semibold text-white mb-2">{level.level}</h4>
                                <p className="text-sm text-neutral-400 mb-3">{level.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {level.features.map((feature, featureIndex) => (
                                    <Badge key={featureIndex} variant="outline" className="text-xs border-neutral-600 text-neutral-300">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Limits & Best Practices */}
                <div className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">Limits & Best Practices</h3>
                      <ul className="list-disc list-inside text-neutral-400 space-y-1 text-sm">
                        <li>Off-chain network/behavior analysis can deanonymize users.</li>
                        <li>Use delays, avoid back-and-forth patterns, don’t reuse addresses.</li>
                        <li>Check the current anonymity set size before mixing.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </m.section>

            <m.section id="what" variants={prefersReduced ? undefined : itemVariants} transition={prefersReduced ? { duration: 0 } : undefined} className="py-20 px-4" viewport={prefersReduced ? undefined : { once: true, amount: 0.2 }}>
              <div className="max-w-4xl mx-auto">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/30 transition-colors" aria-describedby="why-privacy-desc">
                  <CardContent className="p-8">
                    <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text:white md:text-white">Why Privacy Matters</h2>
                    <p id="why-privacy-desc" className="text-neutral-300 text-lg leading-relaxed mb-6">
                      In an increasingly digital world, financial privacy is not about hiding wrongdoing — it's about protecting your fundamental rights. Privacy enables freedom of expression, protects against discrimination, and ensures that your financial activities remain your own business.
                    </p>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      Ergo recognizes that privacy and transparency can coexist. You should have the choice to keep your transactions private while still participating in a transparent, auditable blockchain ecosystem.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </m.section>

            <m.section id="technologies" variants={prefersReduced ? undefined : itemVariants} transition={prefersReduced ? { duration: 0 } : undefined} className="py-20 px-4" viewport={prefersReduced ? undefined : { once: true, amount: 0.2 }}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Key Privacy Technologies</h2>
                <div className="space-y-8">
                  {TECHNOLOGIES.map((tech) => (
                    <Card key={tech.title} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-orange-500/30 transition-colors">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <span aria-hidden="true" className="p-4 bg-orange-500/20 rounded-lg text-orange-400">{tech.icon}</span>
                          <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4 text-white">
                              {tech.title}
                              {tech.title === "Sigma Protocols" && (
                                <>
                                  {" "}
                                  <Link href="/docs/developers/ergoscript-languages/sigma/intro" className="underline text-neutral-400 hover:text-neutral-300">(docs)</Link>
                                </>
                              )}
                            </h3>
                            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">{tech.description}</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              {tech.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" focusable="false" />
                                  <span className="text-neutral-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </m.section>

            <m.section id="use-cases" variants={prefersReduced ? undefined : itemVariants} transition={prefersReduced ? { duration: 0 } : undefined} className="py-20 px-4" viewport={prefersReduced ? undefined : { once: true, amount: 0.2 }}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">What You Can Do with Ergo Privacy</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {USE_CASES.map((useCase) => (
                    <Card key={useCase.title} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full hover:border-orange-500/30 transition-colors">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <span aria-hidden="true" className="p-3 bg-orange-500/20 rounded-lg text-orange-400">{useCase.icon}</span>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                            <p className="text-neutral-400 mb-4">{useCase.description}</p>
                            <Badge variant="outline" className="border-neutral-700 text-neutral-300 hover:border-orange-500/50">
                              {useCase.example}
                            </Badge>{" "}
                            {useCase.title === "Private Transactions" && (
                              <Link href="/learn/guides/ergomixer" className="underline text-neutral-400 hover:text-neutral-300 ml-2">(guide)</Link>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </m.section>

            <m.section id="faq" aria-labelledby="faq-heading" variants={prefersReduced ? undefined : itemVariants} transition={prefersReduced ? { duration: 0 } : undefined} className="py-20 px-4" viewport={prefersReduced ? undefined : { once: true, amount: 0.2 }}>
              <div className="max-w-4xl mx-auto">
                <h2 id="faq-heading" className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Frequently Asked Questions</h2>
                <div role="list" className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <Card role="listitem" key={index} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                      <Collapsible open={openFAQ === index} onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}>
                        <CollapsibleTrigger asChild>
                          <button
                            id={`faq-trigger-${index}`}
                            aria-expanded={openFAQ === index}
                            aria-controls={`faq-panel-${index}`}
                            className="w-full"
                          >
                            <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                              <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                              <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} aria-hidden="true" focusable="false" />
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
            </m.section>

            <m.section variants={prefersReduced ? undefined : itemVariants} transition={prefersReduced ? { duration: 0 } : undefined} className="py-20 px-4" viewport={prefersReduced ? undefined : { once: true, amount: 0.2 }}>
              <div className="max-w-4xl mx-auto text-center">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                  <CardContent className="p-12">
                    <h2 className="text-4xl font-bold mb-6 text-white">Privacy by Design, Security by Default</h2>
                    <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                      Ergo's privacy features aren't just add-ons — they're fundamental to the platform's architecture.
                      Experience true financial freedom with cryptographically proven privacy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        <Link href="/use/defi" className="flex items-center">
                          <ArrowRight className="mr-2 w-4 h-4" aria-hidden="true" focusable="false" />
                          Try ErgoMixer (non-custodial community tool)
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm">
                        <a href="https://docs.ergoplatform.com/protocol/privacy/?utm_source=site&utm_medium=cta&utm_campaign=privacy" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="mr-2 w-4 h-4" aria-hidden="true" focusable="false" />
                          Privacy Documentation
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </m.section>
          </m.main>
        </LazyMotion>
      </div>
    </>
  )
}
