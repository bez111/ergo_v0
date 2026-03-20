"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { Coins, FileText, CheckCircle, XCircle, ArrowRight, Bot, ChevronDown, Zap, Shield } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const TOC = [
  { label: "Tokens: What They Are", href: "#tokens" },
  { label: "Notes: What They Are", href: "#notes" },
  { label: "The Key Differences", href: "#differences" },
  { label: "When Agents Need Notes, Not Tokens", href: "#when-notes" },
  { label: "When Tokens Are the Right Tool", href: "#when-tokens" },
  { label: "The Composability Argument", href: "#composability" },
  { label: "FAQ", href: "#faq" },
]

const COMPARISON_ROWS = [
  { label: "What it represents", token: "Ownership of a fungible asset", note: "A credit claim against a specific Reserve" },
  { label: "Settlement model", token: "Transfer of ownership on-chain", note: "Deferred redemption against Reserve" },
  { label: "Acceptance conditions", token: "None — transfer is unconditional", note: "Programmable — any ErgoScript condition" },
  { label: "Expiry", token: "None — exists until spent or burned", note: "Yes — HEIGHT < expiry enforced in script" },
  { label: "Reserve backing", token: "None (or separate stablecoin mechanism)", note: "Always — Note references specific Reserve" },
  { label: "Double-spend protection", token: "eUTXO model (UTxO spent once)", note: "eUTXO model + Tracker registry" },
  { label: "Micropayment suitability", token: "Yes (same tx cost)", note: "Yes (same tx cost)" },
  { label: "Multi-agent pipelines", token: "Works but no expiry/conditions", note: "Native — conditions + expiry built in" },
  { label: "Privacy via ZK", token: "Possible with Sigma Protocols", note: "Possible with Sigma Protocols" },
  { label: "Gas payment (Babel Fees)", token: "Yes — any token", note: "Yes — any token" },
]

const FAQ_ITEMS = [
  { q: "Can you use Ergo native tokens for agent payments?", a: "Yes — native tokens work for simple transfers. The limitation is no acceptance predicates and no expiry. For 'pay me when I complete task X by block Y' you need a Note, not a token." },
  { q: "What is a bearer instrument in the context of Ergo?", a: "A bearer instrument is a payment that is valid to whoever holds it — like cash. Ergo Notes are bearer instruments: any agent holding the Note UTxO can attempt to redeem it (subject to the acceptance predicate). No registry of 'who owns this Note' exists." },
  { q: "Can Notes be used as tokens in a DeFi protocol?", a: "Notes and tokens can coexist in the same transaction and reference each other. A DEX could accept Notes as payment. An escrow could hold tokens and release against a Note. The primitives compose." },
  { q: "Why doesn't Ethereum have bearer instruments?", a: "Ethereum's account model tracks balances in contract state — ownership is recorded in a mapping, not in a UTxO. A true bearer instrument requires the payment itself to carry its spending conditions, which requires the eUTXO model." },
  { q: "What's the difference between a Note and a cheque?", a: "A cheque is a bearer instrument backed by a bank account, with no programmable acceptance conditions, requiring a trusted bank intermediary. A Note is backed by an on-chain Reserve, has programmable conditions enforced by miners, and requires no intermediary. Same economic concept, trustless execution." },
]

export function NotesVsTokensClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Notes vs Tokens", href: "/blog/notes-vs-tokens" }]} className="mb-10 opacity-70" />

        <div className="flex gap-12 relative">
          <aside className="hidden xl:block w-56 shrink-0"><StickyTOC items={TOC} /></aside>
          <article className="flex-1 min-w-0 max-w-3xl">

            <motion.header variants={stagger} initial="hidden" animate="visible" className="pt-8 pb-12">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full"><Bot className="w-3.5 h-3.5" />Agent Economy</span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">8 min read</span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">Intermediate</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Notes vs Tokens
                <span className="block text-orange-400 mt-1">Why Bearer Instruments Matter for Agents</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-300 leading-relaxed mb-6">
                Ergo has native tokens — fungible assets you can mint, transfer, and burn. It also has Notes — programmable bearer instruments backed by a Reserve with acceptance conditions and expiry. For most uses, tokens are fine. For agent payment pipelines, Notes are the right tool. This post explains exactly why — and when to use each.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/10 pt-6">
                <span>Developer Relations</span><span>·</span><time>March 20, 2026</time>
              </motion.div>
            </motion.header>

            <section id="tokens" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">Tokens: What They Are</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-6">Ergo native tokens are first-class citizens in the eUTXO model. No ERC-20 wrapper, no separate contract — they live directly in UTxOs alongside ERG.</motion.p>
                <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 text-sm text-gray-300">
                  {["Minted in any transaction — just declare a new token ID", "Fungible: 1 unit of token X = 1 unit of token X, always", "Transferred by including in a transaction output", "Spent exactly once per UTxO — eUTXO model handles double-spend", "Can pay transaction fees via Babel Fees", "No expiry, no acceptance conditions, no reserve backing by default"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />{item}</div>
                  ))}
                </motion.div>
              </motion.div>
            </section>

            <section id="notes" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">Notes: What They Are</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-6">Notes are a higher-level concept built on top of eUTXO. They're UTxOs with a specific structure — a spending script (acceptance predicate) and registers encoding credit claim data.</motion.p>
                <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 text-sm text-gray-300">
                  {["Reference a Reserve box by ID (R4) — the backing collateral", "Carry an expiry block height (R5) — void after deadline", "Optionally carry an acceptance predicate (R6+) — task hash, credential, etc.", "Transferred between agents as payment instruments", "Redeemed against Reserve at settlement — Reserve pays out ERG", "Tracker prevents double-redemption of the same Note"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />{item}</div>
                  ))}
                </motion.div>
                <motion.div variants={fadeUp} className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 text-sm text-gray-300">
                  <strong className="text-white">Key insight:</strong> a Note is not a token. It's a credit claim — a promise backed by a specific Reserve, with conditions. The economic analogy is a cheque (bearer instrument) rather than cash (token).
                </motion.div>
              </motion.div>
            </section>

            <section id="differences" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">The Key Differences</motion.h2>
                <motion.div variants={fadeUp} className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10">
                        <th className="text-left px-4 py-3 text-gray-400 font-medium">Property</th>
                        <th className="text-left px-4 py-3 text-orange-400 font-medium">Note</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Token</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_ROWS.map((row, i) => (
                        <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                          <td className="px-4 py-3 text-gray-400">{row.label}</td>
                          <td className="px-4 py-3 text-gray-200">{row.note}</td>
                          <td className="px-4 py-3 text-gray-500">{row.token}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </motion.div>
            </section>

            <section id="when-notes" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">When Agents Need Notes, Not Tokens</motion.h2>
                <div className="space-y-4">
                  {[
                    { title: "Task-conditional payments", body: 'You want to pay Agent B only if they produce a specific output. Tokens can\'t encode "accept only if blake2b256(output) == X." Notes can.' },
                    { title: "Multi-step pipelines with budgets", body: "Orchestrator issues a budget to sub-agents. Each sub-agent has a spending limit and a deadline. Notes carry these constraints natively — tokens don\'t." },
                    { title: "Deferred settlement", body: "Agent B accumulates Notes from multiple payers throughout the day, then redeems them in a single batch transaction against the Reserve. Tokens would require individual transfers." },
                    { title: "Credit systems with issuer control", body: "The issuer (orchestrator) needs to be able to limit total outstanding credit. The Reserve contract enforces total issued Notes ≤ reserve value. No equivalent for tokens." },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="when-tokens" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">When Tokens Are the Right Tool</motion.h2>
                <div className="space-y-4">
                  {[
                    { title: "Simple unconditional payments", body: "Pay Agent B 10 units of token X — no conditions, no expiry. Just transfer. Tokens are simpler and more efficient for this." },
                    { title: "Governance and staking", body: "Voting rights, staking positions, protocol ownership — these are ownership claims that don\'t expire and don\'t need acceptance conditions. Use tokens." },
                    { title: "NFTs and unique assets", body: "Non-fungible items are tokens with quantity 1. Notes are always fungible bearer instruments. For unique digital assets, use tokens." },
                    { title: "Long-lived liquidity positions", body: "LP tokens in a DEX represent a share of a liquidity pool indefinitely. Notes expire. Wrong tool for long-lived positions." },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="composability" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">The Composability Argument</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-6">Notes and tokens don't compete — they compose. A real agent economy application uses both.</motion.p>
                <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6 text-sm text-gray-300 space-y-3">
                  {[
                    "Orchestrator holds ERG in a Reserve → issues Notes to sub-agents",
                    "Sub-agents hold Notes as spendable credit → pay services with Notes",
                    "Service providers accumulate Notes → redeem for ERG from Reserve",
                    "Service providers receive governance tokens as bonus → hold or trade",
                    "Governance token holders → vote on Reserve parameters with token weight",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-orange-400 font-mono text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </div>
                  ))}
                </motion.div>
                <motion.p variants={fadeUp} className="mt-4 text-gray-400 text-sm">
                  The primitives are orthogonal and composable. Notes handle the payment layer. Tokens handle the ownership layer. ErgoScript makes them interoperable in the same transaction.
                </motion.p>
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
      <FinalCTASimple title="Build with Notes and tokens" description="The primitives are composable. See working examples in the open source repo." />
    </BackgroundWrapper>
  )
}
