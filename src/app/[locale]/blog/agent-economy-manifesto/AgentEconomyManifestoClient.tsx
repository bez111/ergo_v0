"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Code2,
  Coins,
  Shield,
  Zap,
  CreditCard,
  Globe,
  Clock,
  Network,
  Lock,
  FileText,
  ChevronDown,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const TOC = [
  { label: "Five Theses", href: "#theses" },
  { label: "Why Existing Rails Fail", href: "#rails-fail" },
  { label: "The Four Primitives", href: "#primitives" },
  { label: "Why Ergo — Not Any Other Chain", href: "#why-ergo" },
  { label: "What Ergo Delivers Today", href: "#delivers-today" },
  { label: "FAQ", href: "#faq" },
]

const THESES = [
  "Every AI system will need to pay and be paid. The question is not whether, but which chain.",
  "Agents require money primitives, not payment wrappers. The chain that gets this wins the next decade of adoption.",
  "Programmable acceptance turns payments into enforceable contracts. This is the missing layer for autonomous commerce.",
  "Ergo already has the primitives: Notes, Reserves, Trackers, Acceptance Predicates. The gap is developer awareness.",
  "ChainCash is live. Fleet SDK is ready. The only thing missing is builders.",
]

const RAIL_FAILURES = [
  {
    icon: CreditCard,
    rail: "Stripe / PayPal",
    problem: "Requires persistent identity",
    body: "Every Stripe integration requires KYC, a bank account, a registered business or individual identity. An AI agent is an ephemeral process — it has no SSN, no bank, no registration. This is not a missing API endpoint; the entire model is built around persistent human identity. Agents have none of it, and they shouldn't need it.",
  },
  {
    icon: Globe,
    rail: "Traditional payment processors",
    problem: "No programmable acceptance conditions",
    body: "When a user pays on Stripe, the payment succeeds or fails based on card validity. That's it. You can't encode: 'accept this payment only if the agent delivered task output X and the hash matches.' That conditional logic must live in your application layer — off-chain, centralized, and fragile. Every dispute becomes a customer service ticket.",
  },
  {
    icon: Coins,
    rail: "Card networks",
    problem: "Micropayments are economically broken",
    body: "Stripe's fee is 2.9% + $0.30 per transaction. An agent calling an API at $0.001 costs $0.30 in Stripe fees — 300x the value of the transaction. You could batch payments, but batching requires credit, which requires accounts and trust, which brings you back to square one. The math doesn't work at machine speed.",
  },
  {
    icon: Clock,
    rail: "Lightning Network",
    problem: "Requires persistent channels",
    body: "Lightning channels must be opened and funded before payments can flow. Ephemeral agents can't maintain persistent state — they spin up for one task and disappear. Opening a channel for each agent instance defeats the purpose. Both parties must also be online simultaneously — in async agent pipelines, this assumption breaks constantly.",
  },
  {
    icon: Network,
    rail: "Ethereum / EVM",
    problem: "Non-deterministic costs + gas wallet bootstrapping",
    body: "Gas prices fluctuate with network congestion. An agent building a transaction can't know the cost until submission — and by then, a gas spike may make it uneconomical or fail mid-flight. Worse: every agent needs a pre-funded ETH wallet just to pay fees. You can't pay gas in the token you're transacting with. It's a bootstrapping problem with no clean solution.",
  },
  {
    icon: Lock,
    rail: "All human-centric rails",
    problem: "No programmable credit issuance",
    body: "Multi-agent systems need internal credit: an orchestrator issues a budget to sub-agents, sub-agents pay services from that budget, services batch-redeem against the orchestrator. No existing payment rail has a concept of programmable IOUs with spending limits and acceptance conditions. You'd have to build a separate ledger — and trust it.",
  },
]

const PRIMITIVES = [
  {
    number: "01",
    title: "Reserve",
    subtitle: "The collateral layer",
    body: "A UTxO holding ERG as backing collateral. The script enforces: total notes issued ≤ reserve value. Only authorized issuers can create notes. The Reserve can be topped up or drawn down within script rules. It is the source of truth for the entire credit system — auditable, on-chain, no trusted third party.",
    code: `sigmaProp(issuedNotes <= SELF.value && PK(issuerKey))`,
  },
  {
    number: "02",
    title: "Note",
    subtitle: "The programmable IOU",
    body: "A bearer instrument referencing a Reserve. Contains: value, expiry block height, optional acceptance conditions, and the reserve box ID. Notes are transferred between agents as payment — like handing someone a check that enforces its own cashing conditions. Recipients redeem Notes against the Reserve at settlement time.",
    code: `sigmaProp(HEIGHT < expiry && noteValue >= price)`,
  },
  {
    number: "03",
    title: "Tracker",
    subtitle: "The anti-double-spend registry",
    body: "A mutable UTxO maintaining the set of spent Note IDs. Prevents double-redemption across the system. Every Note redemption references the Tracker — the Tracker verifies the Note ID is not already in the spent set, updates the spent set, and outputs a new Tracker state. Deterministic, on-chain, no off-chain coordination.",
    code: `sigmaProp(!spentSet.contains(noteId) && validUpdate)`,
  },
  {
    number: "04",
    title: "Acceptance Predicate",
    subtitle: "The programmable trust layer",
    body: "An ErgoScript condition embedded in the receiver's spending script. 'Accept this Note only if the blake2b256 hash of the task output matches TASK_HASH and the deadline block hasn't passed.' The condition is verified by miners — not your server, not an oracle, not an escrow. Logic lives in the payment itself.",
    code: `blake2b256(getVar[Coll[Byte]](0).get) == TASK_HASH`,
  },
]

const WHY_ERGO = [
  {
    icon: Shield,
    title: "eUTXO: deterministic by design",
    body: "Every transaction outcome is known before submission. Agents don't get surprised by gas spikes or state changes mid-flight. No reentrancy. No hidden global state. No MEV. What the simulation says is what happens on-chain.",
  },
  {
    icon: Code2,
    title: "ErgoScript: logic in the payment",
    body: "Acceptance predicates are first-class language features. The payment IS the contract. No off-chain oracle needed to enforce task completion — it's encoded in the spending condition and verified by every full node.",
  },
  {
    icon: Coins,
    title: "Babel Fees: agents don't need ERG",
    body: "Pay transaction fees in any token. An agent receiving a community token doesn't need a pre-funded ERG wallet. Spin up, operate, settle — all without native token bootstrapping. This is the gas abstraction problem solved at the protocol level.",
  },
  {
    icon: Lock,
    title: "Sigma Protocols: private credentials",
    body: "Zero-knowledge proofs are native to ErgoScript. Agents prove they hold credentials or completed tasks without revealing identity. Privacy as a protocol primitive, not an afterthought or an add-on zkSNARK library.",
  },
  {
    icon: Zap,
    title: "PoW: no governance emergency stops",
    body: "Proof-of-Work has no foundation kill switch, no validator multisig that can freeze contracts, no governance emergency that pauses the chain. Agent infrastructure built on Ergo won't be halted by a cartel decision or a regulatory demand to pause.",
  },
  {
    icon: Network,
    title: "Community currencies: one transaction",
    body: "Deploy a Reserve, issue Notes, create a community money system — in one transaction. Protocol-level primitives, not application-level wrappers. No ERC-20 deployment ceremony, no separate governance token, no migration path.",
  },
]

const DELIVERS_TODAY = [
  "Notes + Reserves + Trackers at the protocol level",
  "Acceptance predicates as first-class ErgoScript primitives",
  "Babel Fees — pay transaction fees in any token",
  "Deterministic execution — know costs before submitting",
  "No reentrancy — each UTxO spent exactly once",
  "Typical agent transaction cost: ~$0.01 on mainnet",
  "ChainCash live reference implementation (mainnet)",
  "Fleet SDK (@fleet-sdk/core) published on npm",
  "Testnet demos open source — see /demos",
  "GPU PoW — no validator governance kill switch",
]

const FAQ_ITEMS = [
  {
    q: "What is the agent economy?",
    a: "The agent economy is the emerging system of autonomous AI agents transacting with each other and with services — paying for compute, data, API calls, and task completion — without human intermediaries. Each transaction may be fractions of a cent, happening at machine speed, with no stable identity on either side.",
  },
  {
    q: "Why can't agents just use a crypto wallet like a human?",
    a: "Human wallets assume a persistent operator who manages keys, approves transactions, and handles errors. Ephemeral agents have no persistent operator — they spin up for one task and disappear. They need payment instruments that work trustlessly, with no wallet pre-funding requirement, and with acceptance conditions baked into the instrument itself.",
  },
  {
    q: "What is a Note in the Ergo agent payment stack?",
    a: "A Note is a bearer instrument — a programmable IOU — that an agent can use as payment. It references a Reserve box (the collateral backing the credit), contains an expiry, and can carry an acceptance predicate: a script condition that must be true for the Note to be redeemed. The receiver's script enforces the condition on-chain.",
  },
  {
    q: "What is ChainCash?",
    a: "ChainCash is the production reference implementation of the Reserve + Note + Tracker stack, built by BetterMoneyLabs and live on Ergo mainnet. It demonstrates community currencies, programmable IOUs, and agent payment flows using the primitives described in this manifesto.",
  },
  {
    q: "How do Babel Fees solve the bootstrapping problem for agents?",
    a: "Normally, every agent would need a pre-funded ERG wallet just to pay transaction fees — a bootstrapping problem for ephemeral processes. Babel Fees allow miners to accept transaction fees paid in any token, converting them to ERG via on-chain swap boxes. Agents receiving payment in any token can immediately transact without acquiring ERG separately.",
  },
  {
    q: "Is this production-ready or theoretical?",
    a: "The primitives are production-ready: the eUTXO model, ErgoScript, Babel Fees, and Sigma Protocols are all live on Ergo mainnet. ChainCash is a working mainnet implementation. Fleet SDK is published on npm. The testnet demos at /demos show live transaction flows. What's needed is developer adoption, not further protocol work.",
  },
]

export function AgentEconomyManifestoClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: "Agent Economy Manifesto", href: "/blog/agent-economy-manifesto" },
          ]}
          className="mb-10 opacity-70"
        />

        <div className="flex gap-12 relative">
          {/* ── Sticky TOC ── */}
          <aside className="hidden xl:block w-56 shrink-0">
            <StickyTOC items={TOC} />
          </aside>

          {/* ── Main content ── */}
          <article className="flex-1 min-w-0 max-w-3xl">

            {/* ── Hero ── */}
            <motion.header
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="pt-8 pb-12"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Bot className="w-3.5 h-3.5" />
                  Vision
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  12 min read
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  Intermediate
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                The Agent Economy Manifesto
                <span className="block text-orange-400 mt-1">
                  Every AI Agent Will Need to Pay and Be Paid.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-gray-300 leading-relaxed mb-6">
                Autonomous agents are a new kind of economic actor. They transact at machine speed,
                without stable identity, at micropayment scale, with conditional acceptance logic
                that current payment rails have no concept of. Stripe fails them. Lightning fails
                them. Ethereum fails them. This manifesto explains why — and what Ergo already has
                built to solve it.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/10 pt-6"
              >
                <span>Developer Relations</span>
                <span>·</span>
                <time>March 20, 2026</time>
              </motion.div>
            </motion.header>

            {/* ── Five Theses ── */}
            <section id="theses" className="mb-16 scroll-mt-24">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-2xl font-bold text-white mb-2"
                >
                  Five Theses
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-8">
                  Before the technical detail — five claims. Each one is falsifiable. None of them
                  have been falsified.
                </motion.p>

                <div className="space-y-3">
                  {THESES.map((thesis, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-lg p-5 hover:border-orange-500/20 transition-colors"
                    >
                      <span className="text-orange-400 font-mono text-sm font-bold shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-gray-200 text-base leading-relaxed">{thesis}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── Why Existing Rails Fail ── */}
            <section id="rails-fail" className="mb-16 scroll-mt-24">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  Why Existing Rails Fail
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-8">
                  Stripe, PayPal, Lightning, and Ethereum were built for humans. Each carries
                  assumptions that make sense for persistent human actors — and become fatal for
                  ephemeral autonomous agents.
                </motion.p>

                <div className="space-y-4">
                  {RAIL_FAILURES.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-red-500/5 border border-red-500/20 rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-red-500/10 rounded-lg shrink-0 mt-0.5">
                          <item.icon className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500 font-mono">{item.rail}</span>
                            <XCircle className="w-3.5 h-3.5 text-red-400" />
                            <span className="text-white font-semibold text-sm">{item.problem}</span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5 text-sm text-gray-400"
                >
                  <AlertTriangle className="w-4 h-4 text-orange-400 inline mr-2 shrink-0" />
                  The failure is not incidental — it's structural. These rails were designed around
                  persistent human identity, legal dispute resolution, and trust hierarchies. None of
                  those exist at the agent layer.
                </motion.div>
              </motion.div>
            </section>

            {/* ── The Four Primitives ── */}
            <section id="primitives" className="mb-16 scroll-mt-24">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  The Four Primitives
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-8">
                  Ergo implements a complete agent payment stack at the protocol level. No
                  application-layer workarounds. No trust assumptions. Four composable UTxO
                  primitives that together solve everything payment rails cannot.
                </motion.p>

                <div className="space-y-6">
                  {PRIMITIVES.map((p, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white/5 border border-white/10 rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-3xl font-mono font-bold text-orange-400/40 leading-none shrink-0">
                          {p.number}
                        </span>
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
                          <p className="text-gray-500 text-sm">{p.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{p.body}</p>
                      <pre className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-orange-300 overflow-x-auto">
                        {p.code}
                      </pre>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 flex items-start gap-3"
                >
                  <FileText className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <strong className="text-white">ChainCash</strong> is the production reference
                    implementation of this stack — live on Ergo mainnet, open source, built by
                    BetterMoneyLabs.{" "}
                    <Link
                      href="/build/agent-payments"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      Read the full technical architecture →
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </section>

            {/* ── Why Ergo ── */}
            <section id="why-ergo" className="mb-16 scroll-mt-24">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  Why Ergo — Not Any Other Chain
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-8">
                  These aren't features added to serve agents. They're protocol properties that
                  make Ergo uniquely suited as the agent economy base layer.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-4">
                  {WHY_ERGO.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/20 transition-colors"
                    >
                      <div className="p-2 bg-orange-500/10 rounded-lg w-fit mb-3">
                        <item.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── What Ergo Delivers Today ── */}
            <section id="delivers-today" className="mb-16 scroll-mt-24">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-xl font-bold text-white mb-2"
                >
                  What Ergo Delivers for Agents — Today
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-6">
                  Not roadmap items. Not testnet-only. Production primitives available now.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-3">
                  {DELIVERS_TODAY.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      {item}
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Code2 className="w-4 h-4" />
                    Technical Architecture
                  </Link>
                  <Link
                    href="/build/quickstart"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Zap className="w-4 h-4" />
                    10-Minute Quickstart
                  </Link>
                  <Link
                    href="/demos"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Live Demos <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-8">
                  Frequently Asked Questions
                </motion.h2>

                <div className="space-y-3">
                  {FAQ_ITEMS.map((item, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <Collapsible
                        open={openFAQ === i}
                        onOpenChange={(open) => setOpenFAQ(open ? i : null)}
                      >
                        <CollapsibleTrigger className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-left hover:border-orange-500/30 transition-colors group">
                          <span className="text-white font-medium text-sm pr-4">{item.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                              openFAQ === i ? "rotate-180" : ""
                            }`}
                          />
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

      <FinalCTASimple
        title="Build the agent economy"
        description="The primitives are ready. ChainCash is live. Fleet SDK is on npm. Join the builders working on autonomous commerce on Ergo."
      />
    </BackgroundWrapper>
  )
}
