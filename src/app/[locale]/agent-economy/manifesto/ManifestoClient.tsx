"use client"

/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Code2,
  Coins,
  Network,
  Lock,
  FileText,
  CreditCard,
  Globe,
  Clock,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

// ── The Problem ──────────────────────────────────────────────────────────────
const AGENT_PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "No persistent identity",
    body: "Agents are ephemeral. They spin up, complete a task, and disappear. Every payment rail built for humans assumes a stable identity, a billing account, a KYC record. Agents have none of these — and they shouldn't need them.",
  },
  {
    icon: CreditCard,
    title: "No programmable acceptance",
    body: "When an agent pays for a service, the payment should encode the terms: 'Accept only if task X is complete, before block Y, with proof Z.' Today's rails have no concept of conditional acceptance. Logic lives off-chain — fragile, gameable, slow.",
  },
  {
    icon: Clock,
    title: "Micropayments are economically broken",
    body: "An agent pays $0.001 for an API call. Stripe charges more in fees than the call costs. Credit card networks require minimums. Lightning Network requires persistent channels. None of these work for ephemeral machine-to-machine commerce.",
  },
  {
    icon: Globe,
    title: "Credit has no settlement layer",
    body: "Multi-agent systems need internal credit: an orchestrator issues tokens to sub-agents, sub-agents pay services, services batch-redeem. There is no protocol for programmable IOUs at machine speed. Until now.",
  },
]

// ── The Stack ────────────────────────────────────────────────────────────────
const PRIMITIVES = [
  {
    number: "01",
    title: "Reserve",
    subtitle: "The collateral layer",
    color: "orange",
    body: "A UTxO holding ERG as backing. Script rules: total notes issued ≤ reserve value. Only authorized issuers can create notes. Topped up or drawn down within rules. The source of truth for the credit system.",
    code: "sigmaProp(issuedNotes <= SELF.value && PK(issuerKey))",
  },
  {
    number: "02",
    title: "Note",
    subtitle: "The programmable IOU",
    color: "blue",
    body: "A bearer instrument referencing a Reserve. Contains: value, expiry height, optional acceptance conditions, reserve box ID. Transferred between agents as payment. Recipients redeem against Reserve at settlement.",
    code: "sigmaProp(HEIGHT < expiry && noteValue >= price)",
  },
  {
    number: "03",
    title: "Tracker",
    subtitle: "The anti-double-spend registry",
    color: "purple",
    body: "A mutable UTxO maintaining spent note IDs. Prevents double-redemption. Note redemption references Tracker — Tracker verifies note ID not in spent set, updates spent set, outputs new Tracker state.",
    code: "sigmaProp(!spentSet.contains(noteId) && validUpdate)",
  },
  {
    number: "04",
    title: "Acceptance Predicate",
    subtitle: "The programmable trust layer",
    color: "green",
    body: "An ErgoScript condition in the receiver's spending script. 'Accept this note only if the blake2b256 hash of the task output matches TASK_HASH and the deadline hasn't passed.' Logic lives in the payment itself.",
    code: "blake2b256(getVar[Coll[Byte]](0).get) == TASK_HASH",
  },
]

// ── Why Ergo ─────────────────────────────────────────────────────────────────
const WHY_ERGO = [
  {
    icon: Shield,
    title: "eUTXO: deterministic by design",
    body: "Every transaction outcome is known before submission. Agents don't get surprised. No reentrancy. No hidden global state. No MEV. What the simulation says is what happens on-chain.",
  },
  {
    icon: Code2,
    title: "ErgoScript: logic in the payment",
    body: "Acceptance predicates are first-class. The payment IS the contract. No off-chain oracle needed to enforce task completion — it's encoded in the spending condition.",
  },
  {
    icon: Coins,
    title: "Babel Fees: agents don't need ERG",
    body: "Pay transaction fees in any token. An agent receiving a community token doesn't need a pre-funded ERG wallet. Spin up, operate, settle — all without native token bootstrapping.",
  },
  {
    icon: Lock,
    title: "Sigma Protocols: private credentials",
    body: "Zero-knowledge proofs are native. Agents prove they hold credentials or completed tasks without revealing their identity. Privacy as a protocol primitive, not an afterthought.",
  },
  {
    icon: Zap,
    title: "PoW: no governance emergency stops",
    body: "Proof-of-Work has no foundation kill switch. Agent infrastructure built on Ergo won't be frozen by a validator cartel or an emergency governance vote.",
  },
  {
    icon: Network,
    title: "Community currencies: one transaction",
    body: "Deploy a Reserve, issue Notes, create community money — in one transaction. Protocol-level, not application-level. No ERC-20 wrapper, no deployment ceremony.",
  },
]

// ── The Vision ───────────────────────────────────────────────────────────────
const THESES = [
  "Every AI system will need to pay and be paid. The question is not whether, but which chain.",
  "Agents require money primitives, not payment wrappers. The chain that gets this wins the next decade of adoption.",
  "Programmable acceptance turns payments into enforceable contracts. This is the missing layer for autonomous commerce.",
  "Ergo already has the primitives: Notes, Reserves, Trackers, Acceptance Predicates. The gap is developer awareness.",
  "ChainCash is live. Fleet SDK is ready. The only thing missing is builders.",
]

export function ManifestoClient() {
  return (
    <BackgroundWrapper>
      <Breadcrumbs
        items={[
          { name: "Agent Economy", href: "/agent-economy" },
          { name: "Manifesto", href: "/agent-economy/manifesto" },
        ]}
        className="mb-10 opacity-70"
      />

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 pt-16 pb-12 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full">
              <Bot className="w-4 h-4" />
              Agent Economy Manifesto
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Every AI agent will need
            <br />
            <span className="text-orange-400">to pay and be paid.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            The chain that wins agent commerce wins the next decade of blockchain adoption. Ergo
            already has the primitives. This document explains why — and what it means for builders.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/build/agent-payments"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Technical Architecture <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Live Demos
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Theses ── */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {THESES.map((thesis, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-lg p-5"
            >
              <span className="text-orange-400 font-mono text-sm font-bold shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-gray-200 text-base leading-relaxed">{thesis}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── The Problem ── */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why existing rails fail agents
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stripe, PayPal, Lightning, and Ethereum were all built for humans. Agents are a
              different kind of economic actor entirely.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {AGENT_PROBLEMS.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-red-500/5 border border-red-500/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-500/10 rounded-lg shrink-0">
                    <p.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── The Stack ── */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The four primitives
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ergo implements a complete agent payment stack at the protocol level. No application
              layer workarounds. No trust assumptions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRIMITIVES.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-mono font-bold text-orange-400/40">{p.number}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{p.title}</h3>
                    <p className="text-gray-400 text-sm">{p.subtitle}</p>
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
            className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center"
          >
            <FileText className="w-6 h-6 text-orange-400 mx-auto mb-3" />
            <p className="text-gray-300 text-sm mb-4">
              ChainCash is the production reference implementation of this stack — live on Ergo
              mainnet, open source, built by BetterMoneyLabs.
            </p>
            <Link
              href="/build/agent-payments"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            >
              Read the full technical architecture <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Why Ergo ── */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Ergo — not any other chain
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These aren't features added to serve agents. They're protocol properties that make
              Ergo uniquely suited as the agent economy base layer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ERGO.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-colors"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg w-fit mb-4">
                  <item.icon className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Call to action ── */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The stack is ready. <span className="text-orange-400">Are you?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              The primitives exist. ChainCash is live. Fleet SDK is published. The only thing
              missing is builders who understand what autonomous agents actually need from money.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/build/agent-payments"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Code2 className="w-4 h-4" />
                Start Building
              </Link>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                See Live Demos
              </Link>
              <Link
                href="/playbooks/build-agent-economy-apps"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                7-Step Playbook
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Checkmarks ── */}
      <section className="container mx-auto px-4 pb-16 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-8"
        >
          <motion.h3 variants={fadeUp} className="text-white font-bold text-lg mb-6 text-center">
            What Ergo delivers for agents today
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Notes + Reserves + Trackers at the protocol level",
              "Acceptance predicates as first-class ErgoScript primitives",
              "Babel Fees — pay tx fees in any token",
              "Deterministic execution — know costs before submitting",
              "No reentrancy — each UTxO spent exactly once",
              "Typical agent tx cost: ~$0.01 on mainnet",
              "ChainCash live reference implementation",
              "Fleet SDK (@fleet-sdk/core) on npm",
              "Testnet demos open source at /demos",
              "GPU PoW — no validator governance kill switch",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <FinalCTASimple
        title="Build the agent economy"
        description="The primitives are ready. Join the builders working on autonomous commerce on Ergo."
      />
    </BackgroundWrapper>
  )
}
