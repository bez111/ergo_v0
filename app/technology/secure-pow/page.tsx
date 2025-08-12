"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Shield, Cpu, Zap, Users, ExternalLink, CheckCircle, TrendingUp, ChevronDown, Link as LinkIcon, BookOpen, Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

const features = [
  {
    icon: Shield,
    title: "ASIC-Resistant",
    description:
      "ASIC-resistant (not ASIC-proof): specialized-hardware edge is limited; commodity GPUs remain competitive.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "Memory-hardness dampens the hash-per-watt arms race and extends GPU lifecycles, reducing e-waste.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Users,
    title: "Fair Launch",
    description: "No premine, no ICO, no VC allocation.",
    color: "from-purple-500/20 to-purple-500/5",
  },
]

const networkStats = [
  { label: "Network Hashrate", value: "15.2 TH/s", change: "+5.2%" },
  { label: "Active Miners", value: "12,847", change: "+2.1%" },
  { label: "Block Time", value: "2 min", change: "Stable" },
  { label: "Difficulty", value: "1.2P", change: "+1.8%" },
]

const benefits = [
  "Decentralization by design: a wide GPU set stays competitive.",
  "Higher capture cost: renting/buying 51% hash is harder.",
  "Battle-tested PoW with an ASIC-resistant twist.",
  "Open to all participants.",
  "Competitive on commodity GPUs.",
  "Sustainable long-term economics.",
]

export default function SecurePowPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const exampleCmd = `./miner --algo autolykos2 --pool <pool_url> --wallet <your_ergo_address> --worker <rig_name>`

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  }

  const faqs = [
    {
      question: "What is Autolykos v2?",
      answer:
        "Autolykos v2 is Ergo's memory-hard, GPU-friendly Proof-of-Work algorithm designed to keep mining decentralized and accessible.",
    },
    {
      question: "Is Ergo's PoW completely ASIC-proof?",
      answer:
        "No. It's ASIC-resistant (not ASIC-proof). By making memory bandwidth/latency the bottleneck, specialized-hardware advantages are limited and GPUs remain competitive.",
    },
    {
      question: "Which miner software works with Autolykos v2?",
      answer:
        "See the Mining Guide for current tooling and setup steps. It covers supported miners, configuration basics, and troubleshooting.",
    },
    {
      question: "Pool or solo mining?",
      answer:
        "Both are possible. Pools smooth rewards; solo depends on luck and has higher variance. Choose based on your risk tolerance and expected uptime.",
    },
    {
      question: "Typical hashrate/watt ranges?",
      answer:
        "They vary by GPU model, drivers, and settings. Start with stock settings, ensure stability and thermals, and consult community resources for optimization.",
    },
    {
      question: "Is this approach greener?",
      answer:
        "Memory-hardness dampens the hardware arms race and extends useful GPU lifecycles, which helps reduce e-waste and unnecessary upgrades.",
    },
  ]

  return (
    <>
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
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Technology", item: "https://ergoblockchain.org/technology" },
            { "@type": "ListItem", position: 2, name: "Secure PoW", item: "https://ergoblockchain.org/technology/secure-pow" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Autolykos v2 — Secure, Memory-Hard Proof-of-Work",
          description:
            "Ergo uses Autolykos v2 — a memory-hard, GPU-friendly Proof-of-Work that keeps mining decentralized and accessible.",
          image: "https://ergoblockchain.org/og/secure-pow.png",
          datePublished: "2025-08-10",
          dateModified: "2025-08-10",
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/technology/secure-pow",
        }}
      />
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: "Start Mining Ergo",
          description: "Quick steps to begin mining Ergo with a GPU.",
          totalTime: "PT30M",
          estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
          image: "https://ergoblockchain.org/og/secure-pow.png",
          tool: [
            { "@type": "HowToTool", name: "GPU-enabled computer" },
            { "@type": "HowToTool", name: "Autolykos v2 miner software" },
          ],
          supply: [
            { "@type": "HowToSupply", name: "Ergo wallet address" },
            { "@type": "HowToSupply", name: "Pool URL (optional)" },
          ],
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Install a wallet",
              text: "Set up a compatible Ergo wallet and secure your seed phrase.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Pick miner software",
              text: "Choose supported miner software for Autolykos v2 and download from its official source.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Choose a pool or go solo",
              text: "Pools smooth rewards; solo mining has higher variance. Configure according to your preference.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Launch with your address",
              text: "Run the miner with your wallet address and pool URL if applicable.",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Test stability & thermals",
              text: "Start at stock settings, monitor temperatures, and avoid aggressive memory overclocks on day one.",
            },
          ],
        }}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Secure PoW", href: "/technology/secure-pow" }
            ]}
            className="mb-8"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Network Statistics */}
          <FadeIn delay={0.2}>
            <div className="max-w-7xl mx-auto mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Autolykos v2 — Secure, Memory-Hard Proof-of-Work</h1>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo is committed to fair, transparent, and sustainable decentralization. That's why we use
                    Proof-of-Work (PoW), but with a modern twist: Autolykos v2.
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo uses Autolykos v2 — a memory-hard, GPU-friendly Proof-of-Work that keeps mining decentralized and accessible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                      <Link href="/use/mining">Start Mining</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm">
                      <Link href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer">Read Whitepaper</Link>
                    </Button>
                  </div>
                  {/* Removed inline links per request */}
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-brand-primary-500/30 transition-colors">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          Live Network Statistics
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {networkStats.map((stat, index) => (
                            <div
                              key={stat.label}
                              className="text-center p-4 bg-neutral-900/60 rounded-lg"
                            >
                              <div className="text-xl font-bold text-brand-primary-400 mb-1">{stat.value}</div>
                              <div className="text-xs text-neutral-400 mb-2">{stat.label}</div>
                              <Badge variant={stat.change.includes("+") ? "default" : "secondary"} className="text-xs">
                                {stat.change}
                              </Badge>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-neutral-500 mt-4 text-center">
                          Example metrics. Updated: 2025-08-10 · Source: explorer · 24h avg
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Removed on-page anchor nav per request */}

          {/* Key Features */}
          <FadeIn delay={0.4}>
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                Why Proof-of-Work?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group"
                  >
                    <Card
                      className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl hover:border-brand-primary-500/30 transition-colors h-full`}
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-brand-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                          <feature.icon className="w-8 h-8 text-brand-primary-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* What is Autolykos v2 */}
          <FadeIn delay={0.6}>
            <div id="what-is-autolykos" className="space-y-8 mb-16">
              <Card className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border border-orange-500/20 backdrop-blur-sm rounded-xl overflow-hidden relative group hover:border-orange-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                      What is Autolykos v2?
                    </CardTitle>
                  </div>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    Autolykos is Ergo's unique, ASIC-resistant mining algorithm designed to maintain network
                    decentralization and security.
                  </p>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50">
                    <p className="text-neutral-300 text-sm">
                      Learn more about the <Link href="/technology/eutxo-model" className="text-orange-400 hover:text-orange-300 underline transition-colors">eUTXO model</Link> and
                      how <Link href="/technology/storage-rent" className="text-orange-400 hover:text-orange-300 underline transition-colors ml-1">Storage Rent</Link> supports sustainable network economics.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <Cpu className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-white">Memory-hard algorithm</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <Shield className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-white">ASIC-resistant design</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-white">GPU-friendly mining</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <Cpu className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-white">Memory bandwidth bound</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <Shield className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-white">Blunts ASIC advantages</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-white">Encourages decentralization</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="security-benefits" className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border border-green-500/20 backdrop-blur-sm rounded-xl overflow-hidden relative group hover:border-green-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                      Security Benefits
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {benefits.map((benefit, index) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 p-4 bg-neutral-800/30 rounded-lg border border-neutral-700/30 hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-sm text-neutral-200 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-700/30 rounded-lg p-6 border border-neutral-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-red-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Threat Model</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        <span className="font-medium text-white">Memory bandwidth bottleneck:</span> Limits single-vendor ASIC dominance by making memory access the primary constraint.
                      </p>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        <span className="font-medium text-white">Broader participation:</span> GPU accessibility raises the bar for renting/buying majority hashpower.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Mining Progress */}
          <FadeIn delay={0.8}>
            <Card className="mb-16 bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-primary-400" aria-hidden="true" />
                  Mining Decentralization
                </CardTitle>
                <CardDescription>Distribution of mining power across the network (weekly refresh)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Top 5 Pools</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Solo Miners</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Small Pools</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <p className="text-sm text-neutral-400 mt-4">
                  Healthy distribution ensures no single entity can control the network. Top-5 &lt; 50% — healthy concentration.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Quick Start */}
          <FadeIn delay={0.85}>
            <div id="quick-start" className="max-w-5xl mx-auto mb-16">
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Quick Start: Mining Ergo</CardTitle>
                  <CardDescription>Five steps to begin — see the full guide for details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ol
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-20%" }}
                    className="list-decimal list-inside space-y-2 text-sm text-neutral-300 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {[
                      "Install and secure an Ergo wallet.",
                      "Pick supported miner software for Autolykos v2.",
                      "Choose a pool (or solo) and note the connection URL.",
                      "Launch with your address and pool URL if applicable.",
                      "Test stability and thermals; avoid aggressive memory OC on day one.",
                    ].map((step) => (
                      <motion.li
                        key={step}
                        variants={itemVariants}
                        className="rounded px-1 -mx-1 hover:bg-neutral-800/30 transition-colors"
                      >
                        {step}
                      </motion.li>
                    ))}
                  </motion.ol>
                  <div className="mt-4 text-sm text-neutral-300">
                    <p className="font-semibold mb-2">Common pitfalls</p>
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-20%" }}
                      className="list-disc list-inside space-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {["Don't start with aggressive memory overclocks.", "Monitor VRAM temperatures and power limits.", "Avoid running laptops 24/7 for mining."].map(
                        (pitfall) => (
                          <motion.li
                            key={pitfall}
                            variants={itemVariants}
                            className="rounded px-1 -mx-1 hover:bg-neutral-800/30 transition-colors"
                          >
                            {pitfall}
                          </motion.li>
                        )
                      )}
                    </motion.ul>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-neutral-400">Sample command</span>
                      <button
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(exampleCmd)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1500)
                          } catch {}
                        }}
                        className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-brand-primary-400 transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-400"
                        aria-label="Copy sample command"
                        title="Copy"
                      >
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <pre className="bg-neutral-950/80 p-3 rounded-lg text-sm font-mono text-neutral-200 overflow-x-auto"><code>{exampleCmd}</code></pre>
                  </div>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 rounded-xl">
                      <Link href="/use/mining">Open Mining Guide</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* FAQ Section */}
          <FadeIn delay={0.9}>
            <div id="faq" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl"
                  >
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                    >
                      <CollapsibleTrigger asChild>
                        <button className="w-full">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                          <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                        </CardContent>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={1.0}>
            <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
              <CardContent className="text-center py-12">
                <h3 className="text-4xl font-bold mb-6 text-white">
                  Start Mining Ergo
                </h3>
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                  Join thousands of GPU miners securing Ergo — start in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                    <Link href="/use/mining">Mining Guide</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm gap-2">
                    <Link href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer">
                      Whitepaper
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-neutral-400 mt-6">
                  Related: <Link href="/technology/storage-rent" className="underline hover:opacity-80">Storage Rent</Link> ·
                  <Link href="/technology#adaptive-emission-governance" className="underline hover:opacity-80 ml-2">Adaptive Emission & Governance</Link>
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </>
  )
}
