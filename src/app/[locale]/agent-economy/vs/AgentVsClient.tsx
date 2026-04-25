"use client"

/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowRight,
  Shield,
  Zap,
  Code2,
  Coins,
  AlertTriangle,
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

// ── Comparison data ──────────────────────────────────────────────────────────
type Score = "yes" | "no" | "partial" | "unknown"

interface CriterionRow {
  criterion: string
  description: string
  ergo: Score
  ergoNote: string
  ethereum: Score
  ethereumNote: string
  solana: Score
  solanaNote: string
  cardano: Score
  cardanoNote: string
}

const CRITERIA: CriterionRow[] = [
  {
    criterion: "Reentrancy-safe",
    description: "Can autonomous agent code be exploited via reentrancy attacks?",
    ergo: "yes",
    ergoNote: "eUTXO: each UTxO spent exactly once. Reentrancy impossible by design.",
    ethereum: "no",
    ethereumNote: "Account model with shared state. DAO hack was reentrancy. Agents at risk.",
    solana: "yes",
    solanaNote: "No reentrancy in Solana's execution model.",
    cardano: "yes",
    cardanoNote: "eUTXO model like Ergo. No reentrancy by design.",
  },
  {
    criterion: "Deterministic fees",
    description: "Agent knows exact transaction cost before submitting.",
    ergo: "yes",
    ergoNote: "Fee calculated from input/output sizes. Fully deterministic before submission.",
    ethereum: "no",
    ethereumNote: "Gas price volatile. EIP-1559 improves predictability but agents still face uncertainty.",
    solana: "partial",
    solanaNote: "Base fees predictable, but priority fees vary with congestion.",
    cardano: "yes",
    cardanoNote: "Fee formula is deterministic from transaction size.",
  },
  {
    criterion: "Acceptance predicates",
    description: "Payment can encode 'accept only if task X is complete' logic on-chain.",
    ergo: "yes",
    ergoNote: "ErgoScript acceptance predicates are first-class protocol primitives.",
    ethereum: "partial",
    ethereumNote: "Possible via escrow contracts, but not embedded in the payment instrument itself.",
    solana: "no",
    solanaNote: "No equivalent primitive. Would require complex off-chain coordination.",
    cardano: "partial",
    cardanoNote: "Plutus scripts can encode conditions, but not as payment-embedded predicates.",
  },
  {
    criterion: "Note + Reserve stack",
    description: "Protocol-level bearer instruments with collateral backing for agent credit.",
    ergo: "yes",
    ergoNote: "Note+Reserve+Tracker is a first-class pattern. ChainCash is open-source prototype implementation.",
    ethereum: "no",
    ethereumNote: "No equivalent protocol primitive. Would require custom token + escrow + oracle.",
    solana: "no",
    solanaNote: "No equivalent primitive.",
    cardano: "partial",
    cardanoNote: "Can be built in Plutus but not a native pattern.",
  },
  {
    criterion: "Babel Fees (any-token fees)",
    description: "Agents can pay transaction fees with any token — no native token wallet required.",
    ergo: "yes",
    ergoNote: "Babel Fees are live on Ergo mainnet. Agents don't need pre-funded ERG wallets.",
    ethereum: "partial",
    ethereumNote: "ERC-4337 account abstraction allows gas sponsorship, but complex and costly.",
    solana: "no",
    solanaNote: "SOL required for fees. No equivalent gas abstraction.",
    cardano: "no",
    cardanoNote: "ADA required for fees in the base protocol.",
  },
  {
    criterion: "MEV exposure",
    description: "Transactions can be front-run or reordered by miners/validators.",
    ergo: "yes",
    ergoNote: "eUTXO eliminates most MEV vectors. No mempool frontrunning on deterministic outputs.",
    ethereum: "no",
    ethereumNote: "Significant MEV. Front-running and sandwich attacks common on agent transactions.",
    solana: "no",
    solanaNote: "MEV present. Jito bundles and searchers actively extract from Solana transactions.",
    cardano: "yes",
    cardanoNote: "eUTXO also limits MEV. Batchers introduce some centralization but minimal MEV.",
  },
  {
    criterion: "Micropayment viability",
    description: "Sub-cent payments ($0.001) are economically viable.",
    ergo: "yes",
    ergoNote: "~$0.01 per tx on mainnet. $0.001 API calls viable with Note batching.",
    ethereum: "no",
    ethereumNote: "Gas often $0.50–$5+ per tx. Sub-cent payments never economically viable on L1.",
    solana: "yes",
    solanaNote: "$0.00025 base fee. Micropayments viable.",
    cardano: "partial",
    cardanoNote: "~$0.17 min tx. Too high for true micropayments.",
  },
  {
    criterion: "Chain halt history",
    description: "Has the network had full outages? Critical for autonomous agent infrastructure.",
    ergo: "yes",
    ergoNote: "No chain halts. PoW provides continuous liveness without governance emergencies.",
    ethereum: "yes",
    ethereumNote: "No full halts. Some finality issues post-merge but chain keeps producing blocks.",
    solana: "no",
    solanaNote: "Multiple full chain halts. 7+ documented outages. Unacceptable for agent infra.",
    cardano: "yes",
    cardanoNote: "No significant chain halts.",
  },
  {
    criterion: "Ephemeral agent support",
    description: "Agents can operate without persistent identity, KYC, or pre-registered wallets.",
    ergo: "yes",
    ergoNote: "Any key pair can transact. Babel Fees remove ERG bootstrapping requirement.",
    ethereum: "partial",
    ethereumNote: "Any address can transact but ETH required for gas. ERC-4337 helps but adds complexity.",
    solana: "partial",
    solanaNote: "Any keypair can transact. SOL for fees required.",
    cardano: "partial",
    cardanoNote: "Any key can transact. ADA for fees required.",
  },
  {
    criterion: "Fair launch / censorship resistance",
    description: "No foundation kill switch. No governance emergency stop for agent infrastructure.",
    ergo: "yes",
    ergoNote: "PoW with no pre-mine, no foundation token, no validator cartel. No kill switch.",
    ethereum: "partial",
    ethereumNote: "Foundation has significant influence. OFAC compliance led to ~72% MEV-boost censorship.",
    solana: "no",
    solanaNote: "Foundation and validators have coordinated chain restarts. Governance intervention possible.",
    cardano: "partial",
    cardanoNote: "IOHK/Emurgo/CF have significant governance power. Less decentralized than Ergo.",
  },
]

const CHAIN_HEADERS = [
  { key: "ergo", label: "Ergo", color: "orange", highlight: true },
  { key: "ethereum", label: "Ethereum", color: "blue" },
  { key: "solana", label: "Solana", color: "purple" },
  { key: "cardano", label: "Cardano", color: "green" },
]

// ── Score icons ──────────────────────────────────────────────────────────────
function ScoreIcon({ score }: { score: Score }) {
  if (score === "yes") return <CheckCircle className="w-5 h-5 text-green-400" />
  if (score === "no") return <XCircle className="w-5 h-5 text-red-400" />
  if (score === "partial") return <AlertCircle className="w-5 h-5 text-yellow-400" />
  return <AlertCircle className="w-5 h-5 text-gray-500" />
}

function ScorePill({ score, note }: { score: Score; note: string }) {
  const colors = {
    yes: "bg-green-500/10 border-green-500/20 text-green-300",
    no: "bg-red-500/10 border-red-500/20 text-red-300",
    partial: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
    unknown: "bg-gray-500/10 border-gray-500/20 text-gray-400",
  }
  return (
    <div className={`group relative border rounded-lg p-3 ${colors[score]}`}>
      <div className="flex items-center gap-2 mb-1">
        <ScoreIcon score={score} />
        <span className="text-xs font-semibold capitalize">{score}</span>
      </div>
      <p className="text-xs opacity-80 leading-relaxed">{note}</p>
    </div>
  )
}

// ── Summary scores ───────────────────────────────────────────────────────────
function summaryScore(key: keyof CriterionRow): { yes: number; partial: number; no: number } {
  const counts = { yes: 0, partial: 0, no: 0 }
  CRITERIA.forEach((c) => {
    const score = c[key] as Score
    if (score === "yes") counts.yes++
    else if (score === "partial") counts.partial++
    else if (score === "no") counts.no++
  })
  return counts
}

const HIGHLIGHTS = [
  {
    icon: Shield,
    title: "Reentrancy-free by design (eUTXO)",
    body: "eUTXO architecture makes reentrancy attacks structurally impossible. Critical for autonomous agent code executing without human oversight.",
  },
  {
    icon: Code2,
    title: "Native protocol-level acceptance predicates",
    body: "ErgoScript acceptance predicates embed task completion logic directly in payment instruments. No off-chain oracle, no escrow contract, no dispute layer.",
  },
  {
    icon: Coins,
    title: "Combines Babel Fees with the Note stack",
    body: "Agents don't need pre-funded native token wallets. Babel Fees handle gas in any token. The Note+Reserve+Tracker stack is protocol-level, not application-layer.",
  },
  {
    icon: Zap,
    title: "No chain halts + PoW liveness",
    body: "Agent infrastructure requires 24/7 liveness. Ergo's PoW has no governance emergency stops, no validator cartel, no foundation kill switch.",
  },
]

export function AgentVsClient() {
  const ergoScore = summaryScore("ergo")
  const ethScore = summaryScore("ethereum")
  const solScore = summaryScore("solana")
  const adaScore = summaryScore("cardano")

  return (
    <BackgroundWrapper>
      <Breadcrumbs
        items={[
          { name: "Agent Economy", href: "/agent-economy" },
          { name: "Chain Comparison", href: "/agent-economy/vs" },
        ]}
        className="mb-10 opacity-70"
      />

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 pt-16 pb-12 max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full">
              <Bot className="w-4 h-4" />
              Agent Economy — Chain Comparison
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Which blockchain for
            <br />
            <span className="text-orange-400">AI agent payments?</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4"
          >
            10 agent-critical criteria. Ergo, Ethereum, Solana, Cardano — evaluated honestly across
            reentrancy risk, fee predictability, acceptance predicates, Babel Fees, MEV exposure,
            and chain halt history.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Summary scores ── */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Ergo", score: ergoScore, highlight: true },
            { label: "Ethereum", score: ethScore },
            { label: "Solana", score: solScore },
            { label: "Cardano", score: adaScore },
          ].map((chain) => (
            <motion.div
              key={chain.label}
              variants={fadeUp}
              className={`rounded-xl p-5 border text-center ${
                chain.highlight
                  ? "bg-orange-500/10 border-orange-500/30"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div
                className={`text-lg font-bold mb-3 ${chain.highlight ? "text-orange-400" : "text-white"}`}
              >
                {chain.label}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Yes</span>
                  <span className="font-bold text-green-400">{chain.score.yes}/10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Partial</span>
                  <span className="font-bold text-yellow-400">{chain.score.partial}/10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">No</span>
                  <span className="font-bold text-red-400">{chain.score.no}/10</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Legend ── */}
      <section className="container mx-auto px-4 pb-4 max-w-5xl">
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-400" /> Supported / safe
          </div>
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-yellow-400" /> Partial / workaround
          </div>
          <div className="flex items-center gap-1.5">
            <XCircle className="w-4 h-4 text-red-400" /> Not supported / problematic
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {CRITERIA.map((row, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              {/* Row header */}
              <div className="bg-white/5 border-b border-white/10 px-5 py-3">
                <h3 className="text-white font-semibold">{row.criterion}</h3>
                <p className="text-gray-400 text-sm">{row.description}</p>
              </div>
              {/* Chain scores */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
                <ScorePill score={row.ergo} note={row.ergoNote} />
                <ScorePill score={row.ethereum} note={row.ethereumNote} />
                <ScorePill score={row.solana} note={row.solanaNote} />
                <ScorePill score={row.cardano} note={row.cardanoNote} />
              </div>
              {/* Chain labels (hidden on mobile) */}
              <div className="hidden md:grid grid-cols-4 px-4 pb-2 text-center text-xs text-gray-500">
                <span className="text-orange-400 font-medium">Ergo</span>
                <span>Ethereum</span>
                <span>Solana</span>
                <span>Cardano</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Why Ergo wins ── */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              What makes Ergo uniquely suited
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These aren't marketing claims. They're structural properties of Ergo's protocol that
              no other chain replicates for autonomous agent use cases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg w-fit mb-4">
                  <h.icon className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap gap-4 items-center justify-between"
        >
          <div>
            <p className="text-white font-semibold mb-1">
              Ready to build agent payments on Ergo?
            </p>
            <p className="text-gray-400 text-sm">
              From zero to your first testnet transaction in under 10 minutes.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/build/quickstart"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              10-min Quickstart <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/build/agent-payments"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Architecture
            </Link>
          </div>
        </motion.div>
      </section>

      <FinalCTASimple
        title="The data is clear. Build on Ergo."
        description="The only chain with zero reentrancy, acceptance predicates, Babel Fees, and Note+Reserve as protocol primitives."
      />
    </BackgroundWrapper>
  )
}
