"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ChevronDown,
  Zap,
  Globe,
  Code2,
  Eye,
  Network,
  Coins,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { ShareInline } from "@/components/blog/share-inline"
import { ShareCTA } from "@/components/blog/share-cta"

const articleContents = [
  { label: "Where We Are: 2026", href: "#where-we-are" },
  { label: "What's Working", href: "#whats-working" },
  { label: "What's Still Broken", href: "#whats-broken" },
  { label: "Chain-by-Chain Report Card", href: "#report-card" },
  { label: "Ergo: What's Live", href: "#ergo-live" },
  { label: "What Builders Are Doing", href: "#builders" },
  { label: "Predictions for 2027", href: "#predictions" },
  { label: "FAQ", href: "#faq" },
]

const tldrItems = [
  {
    icon: TrendingUp,
    title: "50+ Agent Frameworks, ~0 Native Payments",
    description: "LangChain, AutoGPT, CrewAI and many more are in production. None have native payment APIs. Agents bill the human operator who pays manually.",
  },
  {
    icon: CheckCircle,
    title: "Micropayments Are Technically Solved",
    description: "On Ergo, Solana, and L2s, the cost per transaction is low enough for $0.001-level payments. Gas is no longer the bottleneck.",
  },
  {
    icon: AlertTriangle,
    title: "Developer Awareness Is the Gap",
    description: "Ergo's agent payment primitives are technically ahead, but virtually unknown outside the Ergo community. The dominant problem is not technical readiness.",
  },
  {
    icon: Zap,
    title: "Ergo Is the Only Complete Stack",
    description: "Reserve + Note + Tracker + Acceptance Predicate + Babel Fees. ChainCash is live on mainnet. Fleet SDK is on npm. The primitives are ready.",
  },
]

const WHATS_WORKING = [
  { title: "Micropayments are technically solved", body: "On Ergo, Solana, and L2s, the cost per transaction is low enough for $0.001-level payments. The gas problem is no longer the bottleneck for micropayments specifically." },
  { title: "No-identity transactions are possible", body: "Any key pair can transact on-chain without KYC. Ephemeral agents can generate keys, transact, and discard keys. This was always true of crypto — it's now being recognized as a feature for agents." },
  { title: "Fleet SDK and tooling exist", body: "Ergo's Fleet SDK (@fleet-sdk/core) makes building agent payments in TypeScript/JavaScript straightforward. Python and Rust SDKs exist. The tooling gap is closing." },
  { title: "ChainCash is live on mainnet", body: "The Reserve + Note + Tracker stack is not theoretical. ChainCash is deployed on Ergo mainnet, demonstrating programmable IOUs, community currencies, and agent payment flows in production." },
]

const WHATS_BROKEN = [
  { title: "Developer awareness is near zero", body: "Ask 100 AI developers 'which blockchain would you use for agent payments?' and you'll get Ethereum, Solana, or 'I haven't thought about it.' Ergo's primitives are virtually unknown outside the Ergo community. This is the dominant problem." },
  { title: "No standard agent payment protocol", body: "There's no EIP/BIP equivalent for agent payment flows. No standard for how agents advertise payment requirements, how Notes are structured, how Reserves are discoverable. Coordination infrastructure is missing." },
  { title: "Gas bootstrapping is unsolved on most chains", body: "Babel Fees solve the problem on Ergo. Everywhere else, agents still need pre-funded native token wallets. This is a real deployment friction that most builders are ignoring or working around with centralized subsidies." },
  { title: "Multi-agent orchestration tooling is primitive", body: "LangChain, AutoGPT, and similar frameworks have no native payment integration. Agents call APIs, APIs bill the human operator, the human pays manually. The machine-to-machine payment layer doesn't exist yet in these frameworks." },
]

const REPORT_CARD = [
  { chain: "Ergo", deterministic: "✅", micropayments: "✅", noIdentity: "✅", acceptancePredicates: "✅", creditIssuance: "✅", gasBootstrap: "✅ Babel", killSwitch: "✅ PoW", overall: "A" },
  { chain: "Ethereum", deterministic: "❌", micropayments: "❌ L1", noIdentity: "✅", acceptancePredicates: "⚠️ complex", creditIssuance: "⚠️ ERC-20", gasBootstrap: "❌", killSwitch: "⚠️ validators", overall: "C" },
  { chain: "Solana", deterministic: "⚠️", micropayments: "✅", noIdentity: "✅", acceptancePredicates: "❌ native", creditIssuance: "❌ native", gasBootstrap: "❌", killSwitch: "❌ halted 2x", overall: "C+" },
  { chain: "Lightning", deterministic: "✅", micropayments: "✅", noIdentity: "✅", acceptancePredicates: "❌", creditIssuance: "❌", gasBootstrap: "❌ channels", killSwitch: "✅", overall: "D+" },
]

const ERGO_LIVE_ITEMS = [
  "ChainCash: Reserve + Note + Tracker on mainnet",
  "Fleet SDK (@fleet-sdk/core): TypeScript/JS, npm",
  "Babel Fees: pay tx fees in any token",
  "Acceptance predicates: ErgoScript first-class",
  "Testnet demos: open source at /demos",
  "~$0.01 per transaction on mainnet",
  "Deterministic eUTXO: costs known before submission",
  "GPU PoW: no validator governance kill switch",
]

const BUILDERS = [
  { type: "Workaround", title: "Centralized billing with crypto settlement", body: "Most agent frameworks use centralized billing (Stripe, credits) and settle with crypto manually. Works but defeats the purpose of autonomous payments." },
  { type: "Early", title: "API monetization via EVM micropayments", body: "Some developers are building L2-based micropayment channels for API calls. Works for simple pay-per-call flows but has no acceptance predicates or credit issuance." },
  { type: "Pioneer", title: "Ergo Notes for multi-agent pipelines", body: "Early builders are using ChainCash Notes for orchestrator-to-sub-agent budget allocation. Acceptance predicates let orchestrators encode task conditions in the budget itself." },
]

const PREDICTIONS = [
  "A major AI orchestration framework ships a native payment API — most likely EVM-based L2, but the concept will be validated",
  "A standard for agent payment advertisement emerges — how agents signal 'I accept Notes / tokens / channel payments'",
  "Ergo's agent payment stack gets its first major non-Ergo adoption — developers discover Notes after EVM payment APIs prove insufficient for conditional flows",
  "The 'acceptance predicate' concept gets independently reinvented on Ethereum — as a complex escrow pattern — before developers discover Ergo has it natively",
  "ChainCash forks or derivative projects appear on other chains — validating the Reserve + Note + Tracker model as the right architecture",
]

const FAQ_ITEMS = [
  { q: "What is the state of AI agent payments in 2026?", a: "Micropayments are technically feasible on low-fee chains. The main gaps are: no standard protocol for agent payment flows, near-zero developer awareness of purpose-built primitives (like Ergo's Note/Reserve stack), and no native integration between AI orchestration frameworks and payment layers." },
  { q: "Which blockchain is most advanced for AI agent payments?", a: "Ergo has the most complete purpose-built stack: Reserve + Note + Tracker + Acceptance Predicate + Babel Fees. ChainCash is live on mainnet. The gap is developer adoption, not technical readiness." },
  { q: "Why aren't AI developers using Ergo for agent payments?", a: "Awareness. Ergo's agent payment primitives are technically ahead, but the developer community building AI agents is primarily familiar with Ethereum and Solana. Ergo's documentation, examples, and community presence in the AI/agent space are still being built out." },
  { q: "What needs to happen for agent payments to become mainstream?", a: "Three things: (1) AI orchestration frameworks (LangChain, AutoGPT, etc.) need native payment APIs; (2) a standard protocol for agent payment flows needs to emerge; (3) developers need working examples they can run in 5 minutes. #3 is solvable now." },
]

export function StateOfAgentPaymentsClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "The State of On-Chain Agent Payments: 2026 Report", href: "/blog/state-of-agent-payments-2026" },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              The State of On-Chain Agent Payments: 2026 Report
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              Autonomous AI agents are running at scale. GPT-4 wrappers call APIs. Multi-agent pipelines orchestrate computation. Agents book meetings, write code, and analyze markets. But when they need to pay for something — an API call, a compute job, a data feed — the payment layer falls apart. This is where we are, chain by chain, primitive by primitive, in Q1 2026.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="The State of On-Chain Agent Payments: 2026 Report"
                url="https://www.ergoblockchain.org/blog/state-of-agent-payments-2026"
              />
            </div>
          </motion.div>

          {/* TL;DR */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">TL;DR</h2>
            <div className="grid gap-2">
              {tldrItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="bg-black border border-white/10 rounded-xl">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <item.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Article Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 2xl:hidden"
          >
            <Card className="bg-black/80 border border-orange-500/20 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-400" />
                  Article Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {articleContents.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors py-1"
                    >
                      → {item.label}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </motion.section>

          {/* Where We Are */}
          <motion.section
            id="where-we-are"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Where We Are: 2026</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Agent frameworks in production", value: "50+", sub: "LangChain, AutoGPT, CrewAI, and many more" },
                { label: "Native payment APIs in frameworks", value: "~0", sub: "Agents bill the human operator, humans pay manually" },
                { label: "Chains with full agent payment stack", value: "1", sub: "Ergo: Reserve + Note + Tracker + Acceptance Predicate" },
              ].map((stat, i) => (
                <Card key={i} className="bg-black border border-white/10 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                    <div className="text-white text-sm font-semibold mb-2">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.sub}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-8">
              <p className="text-gray-300 leading-relaxed">
                The gap between what agents can do and what they can pay for is the defining infrastructure problem of the current AI moment. Micropayments are technically feasible. The primitives exist. The tooling exists. The missing piece is developer awareness and framework integration.
              </p>
            </div>
          </motion.section>

          {/* What's Working */}
          <motion.section
            id="whats-working"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What's Working</h2>
            <div className="grid gap-6">
              {WHATS_WORKING.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-green-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What's Still Broken */}
          <motion.section
            id="whats-broken"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What's Still Broken</h2>
            <div className="grid gap-6">
              {WHATS_BROKEN.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-red-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Report Card */}
          <motion.section
            id="report-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Chain-by-Chain Report Card</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    {["Chain", "Deterministic", "Micro-payments", "No Identity", "Predicates", "Credit", "Gas-free", "No Kill Switch", "Grade"].map(h => (
                      <th key={h} className={`px-3 py-3 text-left font-medium ${h === "Chain" || h === "Grade" ? "text-white" : "text-gray-400"}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {REPORT_CARD.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${row.chain === "Ergo" ? "bg-orange-500/5" : ""}`}>
                      <td className={`px-3 py-3 font-semibold ${row.chain === "Ergo" ? "text-orange-400" : "text-gray-400"}`}>{row.chain}</td>
                      <td className="px-3 py-3 text-gray-300">{row.deterministic}</td>
                      <td className="px-3 py-3 text-gray-300">{row.micropayments}</td>
                      <td className="px-3 py-3 text-gray-300">{row.noIdentity}</td>
                      <td className="px-3 py-3 text-gray-300">{row.acceptancePredicates}</td>
                      <td className="px-3 py-3 text-gray-300">{row.creditIssuance}</td>
                      <td className="px-3 py-3 text-gray-300">{row.gasBootstrap}</td>
                      <td className="px-3 py-3 text-gray-300">{row.killSwitch}</td>
                      <td className={`px-3 py-3 font-bold ${row.chain === "Ergo" ? "text-orange-400" : "text-gray-500"}`}>{row.overall}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Ergo: What's Live */}
          <motion.section
            id="ergo-live"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Ergo: What's Live Today</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Not roadmap. Not testnet-only. Production primitives available now on mainnet.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {ERGO_LIVE_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* What Builders Are Doing */}
          <motion.section
            id="builders"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What Builders Are Doing</h2>
            <div className="space-y-6">
              {BUILDERS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  <Card className={`bg-black border rounded-2xl transition-colors ${item.type === "Pioneer" ? "border-orange-500/30 hover:border-orange-400/60" : "border-white/10 hover:border-white/30"}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant="outline"
                          className={`text-xs ${item.type === "Pioneer" ? "bg-orange-500/20 border-orange-500/30 text-orange-400" : item.type === "Workaround" ? "bg-gray-500/20 border-gray-500/30 text-gray-400" : "bg-blue-500/20 border-blue-500/30 text-blue-400"}`}
                        >
                          {item.type}
                        </Badge>
                        <h3 className="text-white font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Predictions for 2027 */}
          <motion.section
            id="predictions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Predictions for 2027</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-4">
              {PREDICTIONS.map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-orange-400 font-mono text-sm font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <Card className="bg-black border border-white/10 rounded-xl hover:border-orange-400/40 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold text-left">{item.q}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-orange-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-black/50 border border-white/5 rounded-xl">
                        <p className="text-gray-300 leading-relaxed">{item.a}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <ShareCTA
            title="The State of On-Chain Agent Payments: 2026 Report"
            description="Chain-by-chain analysis of the agent payment landscape. Ergo is the only chain with the full stack — and the primitives are ready now."
            url="https://www.ergoblockchain.org/blog/state-of-agent-payments-2026"
          />

          {/* Continue Learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/agents-cant-use-stripe" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <Bot className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Why Agents Can't Use Stripe</h3>
                        <p className="text-gray-400 text-sm mb-2">The structural problems with every human-centric payment rail</p>
                        <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 text-xs">
                          Analysis
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/notes-vs-tokens" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Coins className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Notes vs Tokens</h3>
                        <p className="text-gray-400 text-sm mb-2">When to use bearer instruments vs fungible tokens for agent payments</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Concepts
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.section>

          <FinalCTASimple />
        </div>
      </div>
    </BackgroundWrapper>
  )
}
