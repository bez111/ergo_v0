"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Database,
  Recycle,
  TrendingUp,
  Clock,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Zap,
  Shield,
  Coins,
  Timer,
  BarChart3,
  RefreshCw,
  Target,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { useMemo } from "react"

// Removed page-level metadata from client component; moved to route layout

const PUBLISHED = "2023-11-10"
const UPDATED = "2025-08-10"

// Hoisted static data with a11y fixes
const problems = [
  {
    title: "Blockchain Bloat",
    description:
      "Traditional blockchains accumulate unused data over time, leading to inefficiency and higher costs.",
    icon: <Database className="w-8 h-8" aria-hidden="true" />,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    stats: "2TB+ wasted space",
  },
  {
    title: "Forgotten Wallets",
    description: "Lost private keys mean funds are stuck forever, reducing the effective money supply.",
    icon: <AlertTriangle className="w-8 h-8" aria-hidden="true" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    stats: "4M+ lost coins",
  },
  {
    title: "Network Stagnation",
    description: "Accumulated dust and inactive data slow down the network and increase storage requirements.",
    icon: <TrendingUp className="w-8 h-8" aria-hidden="true" />,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    stats: "50% slower sync",
  },
]

const benefits = [
  { text: "The blockchain stays clean, compact, and fast", icon: <Zap className="w-5 h-5" aria-hidden="true" /> },
  { text: "Miners are rewarded for maintaining real, active data", icon: <Coins className="w-5 h-5" aria-hidden="true" /> },
  { text: "Network remains healthy — even decades from now", icon: <Shield className="w-5 h-5" aria-hidden="true" /> },
  { text: "Reduces the share of permanently lost funds (‘stuck’ UTXOs)", icon: <RefreshCw className="w-5 h-5" aria-hidden="true" /> },
  { text: "Predictable, transparent storage costs", icon: <BarChart3 className="w-5 h-5" aria-hidden="true" /> },
  { text: "Automatic state cleanup & miner incentives (per protocol)", icon: <Target className="w-5 h-5" aria-hidden="true" /> },
]

const timeline = [
  {
    year: "Year 0–4",
    status: "No rent accrual period",
    description: "Your UTXO (box) is stored for free on the blockchain",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    icon: <Shield className="w-6 h-6" aria-hidden="true" />,
    details: "No fees, full access to your funds",
  },
  {
    year: "Year 4+",
    status: "Storage Rent Begins",
    description: "Small rent fee may be deducted from box value (if applicable)",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    icon: <Timer className="w-6 h-6" aria-hidden="true" />,
    details: "Approximate; depends on protocol parameters/min box value. See docs.",
  },
  {
    year: "Owner Returns",
    status: "Rent Top-Up",
    description: "Owner can pay rent and regain full access to funds",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    icon: <RefreshCw className="w-6 h-6" aria-hidden="true" />,
    details: "Pay accumulated rent to restore full control",
  },
  {
    year: "Box Depleted",
    status: "Eligible for miner claim (per protocol rules)",
    description: "If rent isn't paid, remaining value goes to miners",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    icon: <Recycle className="w-6 h-6" aria-hidden="true" />,
    details: "Funds return to active circulation",
  },
]

const solutions = [
  {
    title: "Automatic Fee Recycling",
    description: "If coins are left untouched for years, a small fee is recycled back to miners.",
    icon: <Recycle className="w-12 h-12" aria-hidden="true" />,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-orange-500/5",
  },
  {
    title: "No Forgotten Wallets",
    description: "If you lose your keys, your funds aren't stuck forever in the system.",
    icon: <Clock className="w-12 h-12" aria-hidden="true" />,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Predictable Costs",
    description: "Users pay a transparent fee for long-term data storage.",
    icon: <TrendingUp className="w-12 h-12" aria-hidden="true" />,
    color: "text-green-400",
    gradient: "from-green-500/20 to-green-500/5",
  },
]

const faqs = [
  {
    question: "Why does Ergo charge \"storage rent\"? Do I have to pay just to hold ERG?",
    answer: "No, this isn't a holding tax—it's a way to keep the blockchain \"clean.\" Fees apply only to coins (UTXOs) left untouched for more than 4 years. Think of it like long-term storage: if you abandon a box and never return, a tiny fee is charged for the space you occupy. This keeps the network from getting clogged with forgotten data.",
  },
  {
    question: "Can I lose my funds if I'm a long-term investor (HODLer)?",
    answer: "Almost impossible. Any action—like sending your coins, even to yourself—resets the 4-year timer. The rent is so small it only affects very low-value UTXOs (\"dust\"). The system is designed to clean up lost change, not to penalize active users or investors.",
  },
  {
    question: "Why is it so important to get rid of \"blockchain dust\"?",
    answer: "It directly affects decentralization. Every forgotten transaction increases the size of the blockchain state, which full nodes must store and process. Without cleanup, running a full node would become too expensive over time, leaving control to big corporations. Storage rent is a long-term guarantee that Ergo stays accessible and truly decentralized.",
  },
  {
    question: "Where does the collected rent go? Does anyone profit from it?",
    answer: "The fees aren't kept by a company or burned—they're paid out to miners. This gives miners a direct incentive to help clean up the blockchain state, which aligns perfectly with the community's long-term interests. It's a self-sustaining economic model that keeps the blockchain healthy and resilient.",
  },
]

function RentEstimator() {
  const [ageYears, setAgeYears] = useState<number>(4)
  const [boxValue, setBoxValue] = useState<number>(1.0)
  // Simplified illustrative estimator; not protocol-accurate
  const estimatedRent = useMemo(() => {
    const periods = Math.max(0, Math.floor(ageYears / 4))
    const perPeriod = 0.13 // ERG per 4 years (illustrative)
    return +(periods * perPeriod).toFixed(4)
  }, [ageYears])
  const remaining = Math.max(0, +(boxValue - estimatedRent).toFixed(4))
  const topUpNeeded = estimatedRent > boxValue ? +(estimatedRent - boxValue).toFixed(4) : 0
  return (
    <div className="grid md:grid-cols-3 gap-4 items-end">
      <div>
        <label className="block text-xs text-neutral-400 mb-1">Box age (years)</label>
        <input type="number" min={0} step={1} value={ageYears} onChange={(e)=>setAgeYears(Number(e.target.value))} className="w-full bg-neutral-900/60 border border-neutral-700 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div>
        <label className="block text-xs text-neutral-400 mb-1">Box value (ERG)</label>
        <input type="number" min={0} step={0.01} value={boxValue} onChange={(e)=>setBoxValue(Number(e.target.value))} className="w-full bg-neutral-900/60 border border-neutral-700 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div className="text-sm text-neutral-300" aria-live="polite">
        <div className="flex justify-between"><span>Estimated rent:</span><span className="font-semibold">{estimatedRent} ERG</span></div>
        <div className="flex justify-between"><span>Top-up needed:</span><span className="font-semibold">{topUpNeeded} ERG</span></div>
        <div className="flex justify-between"><span>Remaining value:</span><span className="font-semibold">{remaining} ERG</span></div>
        <p className="text-xs text-neutral-500 mt-1">Illustrative; see docs for formula and current parameters.</p>
      </div>
    </div>
  )
}

export default function StorageRentPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Technology", item: "https://ergoblockchain.org/technology" },
            { "@type": "ListItem", position: 2, name: "Storage Rent", item: "https://ergoblockchain.org/technology/storage-rent" },
          ],
        }}
      />
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Storage Rent on Ergo",
          description: "Predictable on-chain state budgeting for decades-long sustainability.",
          image: "https://ergoblockchain.org/og/storage-rent.png",
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/technology/storage-rent",
        }}
      />
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: "How to avoid storage rent",
          description: "Actions to minimize rent accrual on Ergo.",
          step: [
            { "@type": "HowToStep", position: 1, name: "Move funds periodically", text: "Any spend resets the 4‑year timer." },
            { "@type": "HowToStep", position: 2, name: "Consolidate dust", text: "Merge small UTXOs into larger boxes." },
            { "@type": "HowToStep", position: 3, name: "Plan top‑ups in apps", text: "Add maintenance/top‑up paths for contract boxes." },
          ],
        }}
      />

      <main className="min-h-screen relative">
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Storage Rent", href: "/technology/storage-rent" }
            ]}
            className="mb-8"
          />
        </div>

        {/* Background removed for /ui-kit neutrality */}

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Storage Rent</h1>
                  <h2 className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-2xl">What is Storage Rent?</h2>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo's storage rent system ensures long-term network health by preventing blockchain bloat and creating a predictable cost for data storage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                      <Link href="#how-it-works">Learn More</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm">
                      <Link href="https://docs.ergoplatform.com/protocol/storage-rent/" target="_blank" rel="noopener noreferrer">View Details</Link>
                    </Button>
                  </div>
                  <div className="mt-6 text-sm text-neutral-400 space-x-3">
                    <Link href="#problem" className="underline hover:opacity-80">What</Link>
                    <span>·</span>
                    <Link href="#how-it-works" className="underline hover:opacity-80">How</Link>
                    <span>·</span>
                    <Link href="#estimator" className="underline hover:opacity-80">Costs</Link>
                    <span>·</span>
                    <Link href="#faq" className="underline hover:opacity-80">FAQ</Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-brand-primary-500/30">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">Core Principles</h3>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Prevent Bloat",
                              description: "Keeps the blockchain lean and efficient",
                              icon: <Recycle className="w-6 h-6 text-brand-primary-400" aria-hidden="true" />,
                              color: "from-orange-500/20 to-orange-500/5",
                            },
                            {
                              name: "Economic Sustainability",
                              description: "Creates long-term incentives for miners",
                              icon: <TrendingUp className="w-6 h-6 text-brand-primary-400" aria-hidden="true" />,
                              color: "from-cyan-500/20 to-cyan-500/5",
                            },
                            {
                              name: "Predictable Costs",
                              description: "Users pay a transparent fee for data storage",
                              icon: <Clock className="w-6 h-6 text-brand-primary-400" aria-hidden="true" />,
                              color: "from-purple-500/20 to-purple-500/5",
                            },
                          ].map((feature, index) => (
                            <div
                              key={feature.name}
                              className={`p-4 rounded-lg bg-neutral-900/60 border border-neutral-700`}
                            >
                              <div className="flex items-center space-x-3">
                                <div>{feature.icon}</div>
                                <div>
                                  <h4 className="font-semibold text-white">{feature.name}</h4>
                                  <p className="text-sm text-neutral-400">{feature.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problems Section - Enhanced */}
          <section className="py-20 px-4" id="problem">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">The Problem</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  Traditional blockchains face critical sustainability challenges that threaten their long-term viability
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {problems.map((problem, index) => (
                  <div
                    key={problem.title}
                    className="group cursor-pointer"
                  >
                    <Card className={`bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/30 transition-colors h-full`}>
                      <CardContent className="p-8 relative">
                        <div className="p-3 bg-neutral-800 rounded-xl text-brand-primary-400 w-fit mb-6">
                          {problem.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {problem.title}
                        </h3>

                        <p className="text-neutral-300 leading-relaxed mb-4">{problem.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-neutral-400 border-neutral-600">Example metric</Badge>
                            <span className="text-xs text-neutral-500">{problem.stats}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-400" aria-hidden="true" />
                        </div>
                        <p className="text-xs text-neutral-500 mt-2">Illustrative figure; see docs for current parameters.</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick estimator */}
          <section className="py-20 px-4" id="estimator">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">How much rent would I pay?</h3>
                  <p className="text-neutral-300 text-sm mb-4">Approximate estimator for educational purposes. Parameters may change — see docs.</p>
                  <RentEstimator />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Avoid rent / Developer tips */}
          <section className="py-12 px-4" id="tips">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">How to avoid rent</h3>
                  <ol className="list-decimal list-inside text-sm text-neutral-300 space-y-1">
                    <li>Move funds periodically to reset the 4-year timer</li>
                    <li>Consolidate dust into larger boxes</li>
                    <li>Apps: plan top-up/rotation logic into contract design</li>
                  </ol>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">For developers</h3>
                  <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
                    <li>Avoid spawning many tiny boxes</li>
                    <li>Provide a “maintenance path” for rent top-ups</li>
                    <li>Track box age off-chain (indexer)</li>
                  </ul>
                  <div className="mt-3 flex gap-3">
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-4 py-2 rounded-xl" data-cta="design-patterns">
                      <Link href="/Docs/developers" >Design patterns</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-4 py-2 rounded-xl" data-cta="sdk-snippet">
                      <Link href="/Docs/developers/tutorials">SDK snippet</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Solutions Section - Redesigned */}
          <section className="py-20 px-4" id="solution">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Ergo's Solution</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  Revolutionary storage rent mechanics that keep the blockchain healthy and sustainable
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div
                    key={solution.title}
                    className="group cursor-pointer"
                  >
                    <Card className={`bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/30 transition-colors h-full`}>
                      <CardContent className="p-8 text-center relative overflow-hidden">
                        <div className="mx-auto mb-6 text-brand-primary-400">{solution.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                        <p className="text-neutral-300 leading-relaxed">{solution.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Timeline */}
          <section className="py-20 px-4" id="how-it-works">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">How Storage Rent Works</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  Follow the lifecycle of a UTXO through Ergo's storage rent system. Learn more about the model in the <Link href="/technology/eutxo-model" className="underline hover:opacity-80">eUTXO deep dive</Link>.
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-primary-500 rounded-full" aria-hidden="true" />

                <div className="space-y-16">
                  {timeline.map((phase, index) => (
                    <div
                      key={phase.year}
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <div className="flex-1 px-8">
                        <Card className={`bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/30 transition-colors`}>
                          <CardContent className="p-8">
                            <div className="flex items-center mb-4">
                              <div className={`p-3 bg-neutral-800 rounded-xl text-brand-primary-400 mr-4`} aria-hidden="true">{phase.icon}</div>
                              <div>
                                <h3 className={`text-2xl font-bold text-white`}>{phase.status}</h3>
                                <p className="text-neutral-400 font-medium">{phase.year}</p>
                              </div>
                            </div>
                            <p className="text-neutral-300 text-lg mb-3">{phase.description}</p>
                            <p className="text-neutral-400 text-sm">{phase.details}</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Node */}
                      <div className={`w-6 h-6 rounded-full bg-brand-primary-500 border-4 border-black z-10`} aria-hidden="true" />

                      <div className="flex-1 px-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Why Storage Rent Matters</h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  The benefits extend far beyond just cleaning up the blockchain
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/30 transition-colors rounded-xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-brand-primary-400" aria-hidden="true">
                            {benefit.icon}
                          </div>
                          <span className="text-neutral-300 leading-relaxed">
                            {benefit.text}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4" id="faq">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                    >
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

          {/* CTA Section — NIPoPoWs Style */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-brand-primary-500/30">
                <CardContent className="p-12">
                  <h2 className="text-4xl font-bold mb-6 text-white">The Future is Sustainable</h2>
                  <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                    Storage Rent keeps Ergo efficient, fair, and ready for the decades ahead. No bloat, no dead coins, no stale data — just a healthy, sustainable blockchain economy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl" data-cta="start-building">
                      <Link href="/ecosystem" className="flex items-center">
                        <ArrowRight className="mr-2 w-4 h-4" aria-hidden="true" />
                        Start Building on Ergo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm" data-cta="view-details">
                      <Link href="https://docs.ergoplatform.com/protocol/storage-rent/" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
      </main>
    </>
  )
}
