"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { Bot, TrendingUp, AlertTriangle, CheckCircle, XCircle, ArrowRight, ChevronDown, Zap, Globe, Code2 } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const TOC = [
  { label: "Where We Are: 2026", href: "#where-we-are" },
  { label: "What's Working", href: "#whats-working" },
  { label: "What's Still Broken", href: "#whats-broken" },
  { label: "Chain-by-Chain Report Card", href: "#report-card" },
  { label: "Ergo: What's Live", href: "#ergo-live" },
  { label: "What Builders Are Doing", href: "#builders" },
  { label: "Predictions for 2027", href: "#predictions" },
  { label: "FAQ", href: "#faq" },
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
  { chain: "Ergo", deterministic: "✅", micropayments: "✅", noIdentity: "✅", acceptancePredicates: "✅", creditIssuance: "✅", gasBootstrap: "✅ (Babel)", killSwitch: "✅ PoW", overall: "A" },
  { chain: "Ethereum", deterministic: "❌", micropayments: "❌ L1", noIdentity: "✅", acceptancePredicates: "⚠️ complex", creditIssuance: "⚠️ ERC-20", gasBootstrap: "❌", killSwitch: "⚠️ validators", overall: "C" },
  { chain: "Solana", deterministic: "⚠️", micropayments: "✅", noIdentity: "✅", acceptancePredicates: "❌ native", creditIssuance: "❌ native", gasBootstrap: "❌", killSwitch: "❌ halted 2x", overall: "C+" },
  { chain: "Lightning", deterministic: "✅", micropayments: "✅", noIdentity: "✅", acceptancePredicates: "❌", creditIssuance: "❌", gasBootstrap: "❌ channels", killSwitch: "✅", overall: "D+" },
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
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "State of Agent Payments 2026", href: "/blog/state-of-agent-payments-2026" }]} className="mb-10 opacity-70" />

        <div className="flex gap-12 relative">
          <aside className="hidden xl:block w-56 shrink-0"><StickyTOC items={TOC} /></aside>
          <article className="flex-1 min-w-0 max-w-3xl">

            <motion.header variants={stagger} initial="hidden" animate="visible" className="pt-8 pb-12">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full"><TrendingUp className="w-3.5 h-3.5" />State of the Ecosystem</span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">12 min read</span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">Intermediate</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The State of On-Chain Agent Payments
                <span className="block text-orange-400 mt-1">2026 Report</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-300 leading-relaxed mb-6">
                Autonomous AI agents are running at scale. GPT-4 wrappers call APIs. Multi-agent pipelines orchestrate computation. Agents book meetings, write code, and analyze markets. But when they need to pay for something — an API call, a compute job, a data feed — the payment layer falls apart. This is where we are, chain by chain, primitive by primitive, in Q1 2026.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/10 pt-6">
                <span>Developer Relations</span><span>·</span><time>March 20, 2026</time>
              </motion.div>
            </motion.header>

            <section id="where-we-are" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">Where We Are: 2026</motion.h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Agent frameworks in production", value: "50+", sub: "LangChain, AutoGPT, CrewAI, and many more" },
                    { label: "Native payment APIs in frameworks", value: "~0", sub: "Agents bill the human operator, humans pay manually" },
                    { label: "Chains with full agent payment stack", value: "1", sub: "Ergo: Reserve + Note + Tracker + Acceptance Predicate" },
                  ].map((stat, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                      <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
                      <div className="text-gray-500 text-xs">{stat.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="whats-working" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">What's Working</motion.h2>
                <div className="space-y-4">
                  {WHATS_WORKING.map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <div><h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3><p className="text-gray-400 text-sm leading-relaxed">{item.body}</p></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="whats-broken" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">What's Still Broken</motion.h2>
                <div className="space-y-4">
                  {WHATS_BROKEN.map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div><h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3><p className="text-gray-400 text-sm leading-relaxed">{item.body}</p></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="report-card" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">Chain-by-Chain Report Card</motion.h2>
                <motion.div variants={fadeUp} className="overflow-x-auto rounded-xl border border-white/10">
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
                </motion.div>
              </motion.div>
            </section>

            <section id="ergo-live" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">Ergo: What's Live Today</motion.h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {["ChainCash: Reserve + Note + Tracker on mainnet", "Fleet SDK (@fleet-sdk/core): TypeScript/JS, npm", "Babel Fees: pay tx fees in any token", "Acceptance predicates: ErgoScript first-class", "Testnet demos: open source at /demos", "~$0.01 per transaction on mainnet", "Deterministic eUTXO: costs known before submission", "GPU PoW: no validator governance kill switch"].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="builders" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">What Builders Are Doing</motion.h2>
                <div className="space-y-4">
                  {[
                    { type: "Workaround", title: "Centralized billing with crypto settlement", body: "Most agent frameworks use centralized billing (Stripe, credits) and settle with crypto manually. Works but defeats the purpose of autonomous payments." },
                    { type: "Early", title: "API monetization via EVM micropayments", body: "Some developers are building L2-based micropayment channels for API calls. Works for simple pay-per-call flows but has no acceptance predicates or credit issuance." },
                    { type: "Pioneer", title: "Ergo Notes for multi-agent pipelines", body: "Early builders are using ChainCash Notes for orchestrator-to-sub-agent budget allocation. Acceptance predicates let orchestrators encode task conditions in the budget itself." },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className={`rounded-xl p-5 border ${item.type === "Pioneer" ? "bg-orange-500/5 border-orange-500/20" : "bg-white/5 border-white/10"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${item.type === "Pioneer" ? "bg-orange-500/20 text-orange-400" : item.type === "Workaround" ? "bg-gray-500/20 text-gray-400" : "bg-blue-500/20 text-blue-400"}`}>{item.type}</span>
                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="predictions" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">Predictions for 2027</motion.h2>
                <div className="space-y-3">
                  {[
                    "A major AI orchestration framework ships a native payment API — most likely EVM-based L2, but the concept will be validated",
                    "A standard for agent payment advertisement emerges — how agents signal 'I accept Notes / tokens / channel payments'",
                    "Ergo's agent payment stack gets its first major non-Ergo adoption — developers discover Notes after EVM payment APIs prove insufficient for conditional flows",
                    "The 'acceptance predicate' concept gets independently reinvented on Ethereum — as a complex escrow pattern — before developers discover Ergo has it natively",
                    "ChainCash forks or derivative projects appear on other chains — validating the Reserve + Note + Tracker model as the right architecture",
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-3 bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-gray-300">
                      <span className="text-orange-400 font-mono shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="faq" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-8">FAQ</motion.h2>
                <div className="space-y-3">
                  {FAQ_ITEMS.map((item, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <Collapsible open={openFAQ === i} onOpenChange={(open) => setOpenFAQ(open ? i : null)}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-left hover:border-orange-500/30 transition-colors">
                          <span className="text-white font-medium text-sm pr-4">{item.q}</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openFAQ === i ? "rotate-180" : ""}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="bg-white/3 border border-t-0 border-white/10 rounded-b-xl px-5 py-4">
                          <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          </article>
        </div>
      </div>
      <FinalCTASimple title="Don't wait for 2027" description="The primitives are ready on Ergo now. ChainCash is live. Start building." />
    </BackgroundWrapper>
  )
}
