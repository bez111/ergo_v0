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
  Eye,
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
  { label: "Five Theses", href: "#theses" },
  { label: "Why Existing Rails Fail", href: "#rails-fail" },
  { label: "The Four Primitives", href: "#primitives" },
  { label: "Why Ergo — Not Any Other Chain", href: "#why-ergo" },
  { label: "What Ergo Delivers Today", href: "#delivers-today" },
  { label: "FAQ", href: "#faq" },
]

const tldrItems = [
  {
    icon: Bot,
    title: "Every AI System Will Pay and Be Paid",
    description: "Autonomous agents are a new kind of economic actor — they transact at machine speed, without stable identity, at micropayment scale. The question is not whether, but which chain.",
  },
  {
    icon: AlertTriangle,
    title: "Existing Rails Fail by Design",
    description: "Stripe requires KYC. Lightning requires persistent channels. Ethereum has non-deterministic gas. These aren't bugs — they're fundamental design decisions built for humans.",
  },
  {
    icon: Shield,
    title: "Ergo Has All Four Primitives",
    description: "Reserve, Note, Tracker, Acceptance Predicate — at the protocol level. Not wrappers, not application-layer workarounds. Protocol primitives that solve every agent payment requirement.",
  },
  {
    icon: CheckCircle,
    title: "ChainCash Is Live on Mainnet",
    description: "The reference implementation is in production on Ergo mainnet. Fleet SDK is on npm. The only thing missing is builders who know these tools exist.",
  },
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
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "The Agent Economy Manifesto", href: "/blog/agent-economy-manifesto" },
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
              The Agent Economy Manifesto
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              Autonomous agents are a new kind of economic actor. They transact at machine speed, without stable identity, at micropayment scale, with conditional acceptance logic that current payment rails have no concept of. Stripe fails them. Lightning fails them. Ethereum fails them. This manifesto explains why — and what Ergo already has built to solve it.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="The Agent Economy Manifesto"
                url="https://www.ergoblockchain.org/blog/agent-economy-manifesto"
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

          {/* Five Theses */}
          <motion.section
            id="theses"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Five Theses</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Before the technical detail — five claims. Each one is falsifiable. None of them have been falsified.
              </p>
              <div className="space-y-3">
                {THESES.map((thesis, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/20 transition-colors"
                  >
                    <span className="text-orange-400 font-mono text-sm font-bold shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-200 leading-relaxed">{thesis}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Why Existing Rails Fail */}
          <motion.section
            id="rails-fail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Existing Rails Fail</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Stripe, PayPal, Lightning, and Ethereum were built for humans. Each carries assumptions that make sense for persistent human actors — and become fatal for ephemeral autonomous agents.
              </p>
            </div>
            <div className="grid gap-6 mb-8">
              {RAIL_FAILURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-red-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs text-gray-500 font-mono">{item.rail}</span>
                            <XCircle className="w-3.5 h-3.5 text-red-400" />
                            <span className="text-white font-semibold">{item.problem}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">
                  The failure is not incidental — it's structural. These rails were designed around persistent human identity, legal dispute resolution, and trust hierarchies. None of those exist at the agent layer.
                </p>
              </div>
            </div>
          </motion.section>

          {/* The Four Primitives */}
          <motion.section
            id="primitives"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Four Primitives</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Ergo implements a complete agent payment stack at the protocol level. No application-layer workarounds. No trust assumptions. Four composable UTxO primitives that together solve everything payment rails cannot.
              </p>
            </div>
            <div className="space-y-6">
              {PRIMITIVES.map((p, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-black border border-white/10 rounded-2xl p-6"
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
                  <p className="text-gray-300 leading-relaxed mb-4">{p.body}</p>
                  <pre className="bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-orange-300 overflow-x-auto">
                    {p.code}
                  </pre>
                </motion.div>
              ))}
            </div>
            <div className="mt-6">
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">ChainCash</strong> is the production reference implementation of this stack — live on Ergo mainnet, open source, built by BetterMoneyLabs.{" "}
                      <Link href="/build/agent-payments" className="text-orange-400 hover:text-orange-300 transition-colors">
                        Read the full technical architecture →
                      </Link>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.section>

          {/* Why Ergo */}
          <motion.section
            id="why-ergo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Ergo — Not Any Other Chain</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                These aren't features added to serve agents. They're protocol properties that make Ergo uniquely suited as the agent economy base layer.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {WHY_ERGO.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-colors h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What Ergo Delivers Today */}
          <motion.section
            id="delivers-today"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What Ergo Delivers for Agents — Today</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Not roadmap items. Not testnet-only. Production primitives available now.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {DELIVERS_TODAY.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
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
                  Live Demos
                </Link>
              </div>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
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
            title="The Agent Economy Manifesto"
            description="Every AI system will need to pay and be paid. Ergo already has the protocol primitives — Reserve, Note, Tracker, Acceptance Predicate. The only thing missing is builders."
            url="https://www.ergoblockchain.org/blog/agent-economy-manifesto"
          />

          {/* Continue Learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/agents-cant-use-stripe" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <CreditCard className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Why Agents Can't Use Stripe</h3>
                        <p className="text-gray-400 text-sm mb-2">Deep dive into why every human payment rail fails for autonomous agents</p>
                        <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 text-xs">
                          Analysis
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/ergoscript-acceptance-predicates" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Code2 className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">ErgoScript Acceptance Predicates</h3>
                        <p className="text-gray-400 text-sm mb-2">How task completion logic lives inside the payment — enforced by miners</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Development
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
