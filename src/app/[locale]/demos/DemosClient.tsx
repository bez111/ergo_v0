"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  CreditCard,
  GitBranch,
  Terminal,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Circle,
  Play,
  Github,
  MessageSquare,
  Search,
  Loader2,
  Wallet,
  Coins,
  AlertCircle,
  Copy,
  Code2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const BRAND = "#ff8800"

// ── Demo data ────────────────────────────────────────────────────────────────
const DEMOS = [
  {
    id: "api-call",
    icon: Bot,
    status: "testnet",
    statusLabel: "Live on testnet",
    title: "Agent buys API call",
    tagline: "One call. One proof. No persistent account.",
    description:
      "An autonomous agent creates a note, sends it to an API provider. The provider validates the acceptance predicate on-chain and delivers the response. No API keys, no billing accounts, no Stripe.",
    flow: [
      "Agent creates a note (0.001 ERG face value)",
      "Note contains: provider address + task hash + deadline",
      "Provider checks predicate — verified on Ergo testnet",
      "Provider delivers API response",
      "Note burned, ERG released to provider",
    ],
    why: "This is the atomic unit of agent commerce: one task, one payment, one proof. No identity required.",
    code: `// Install: npm install @fleet-sdk/core
import { TransactionBuilder, OutputBuilder } from "@fleet-sdk/core"

// Create a payment note for one API call
const noteBox = new OutputBuilder(
  1_000_000n,           // 0.001 ERG
  NOTE_CONTRACT_ADDRESS
).setAdditionalRegisters({
  R4: SGroupElement(providerPublicKey), // who receives
  R5: SLong(BigInt(currentHeight + 100)), // deadline
  R6: SColl(SByte, sha256(taskDescription)), // task proof
})

const tx = new TransactionBuilder(currentHeight)
  .from(myInputs)
  .to(noteBox)
  .sendChangeTo(myAddress)
  .payMinFee()
  .build()`,
    links: [
      { label: "ChainCash reference", url: "https://github.com/kushti/chaincash", external: true },
      { label: "Fleet SDK docs", url: "https://fleet-sdk.github.io/docs/", external: true },
      { label: "Architecture", url: "/build/agent-payments#api-call", external: false },
    ],
  },
  {
    id: "credit",
    icon: CreditCard,
    status: "testnet",
    statusLabel: "Live on testnet",
    title: "Agent pays on credit",
    tagline: "Reserve deployed. Notes issued. Tracker monitors.",
    description:
      "A reserve is deployed with collateral. Notes are issued against it up to a credit limit. An agent spends notes over time. The tracker monitors total usage. When the threshold is reached, the reserve auto-settles.",
    flow: [
      "Reserve contract deployed with 10 ERG + 100 ERG credit limit",
      "Notes issued against reserve (up to limit)",
      "Agent transfers notes to providers as payment",
      "Tracker updates cumulative balance on-chain",
      "Auto-settlement when balance threshold hit",
    ],
    why: "Credit is fundamental to economic efficiency. This implements it without a bank — just contracts and cryptographic proofs.",
    code: `// Deploy a reserve with credit limit
const reserveBox = new OutputBuilder(
  10_000_000_000n,      // 10 ERG collateral
  RESERVE_CONTRACT_ADDRESS
).setAdditionalRegisters({
  R4: SLong(100_000_000_000n), // 100 ERG credit limit
  R5: SLong(0n),               // total issued so far
  R6: SGroupElement(controllerKey),
})

// Notes are issued from this reserve
// Tracker enforces: issued <= credit_limit
// Settlement happens when tracker triggers threshold`,
    links: [
      { label: "ChainCash paper", url: "https://github.com/kushti/chaincash/blob/master/paper/chaincash.pdf", external: true },
      { label: "Architecture", url: "/build/agent-payments#credit", external: false },
      { label: "Reserve contract", url: "/build/agent-payments#reserve", external: false },
    ],
  },
  {
    id: "community",
    icon: GitBranch,
    status: "coming",
    statusLabel: "Coming in Week 3",
    title: "Community reserve + tracker",
    tagline: "A local marketplace. A compute co-op. An agent network.",
    description:
      "A group of participants pool ERG into a shared reserve. Community notes are issued proportionally. Acceptance predicates define membership rules. Members can redeem notes for ERG at any time from the reserve.",
    flow: [
      "Community members pool ERG into multi-sig reserve",
      "Members receive community notes proportional to contribution",
      "Notes accepted within community per acceptance rules",
      "Any member can redeem notes for ERG anytime",
      "Tracker provides public auditability of flows",
    ],
    why: "This is the most general form: a programmable local economy. Could be a marketplace, a DAO treasury, or an agent cooperative.",
    code: `// Multi-sig community reserve
const communityReserve = new OutputBuilder(
  TOTAL_POOLED_ERG,
  MULTISIG_RESERVE_ADDRESS
).setAdditionalRegisters({
  R4: SColl(SGroupElement, memberKeys), // 5 members
  R5: SInt(3),                          // 3-of-5 to redeem
  R6: SColl(SByte, communityTokenId),   // community token
})

// Acceptance predicate — members only:
// { val isMember = memberKeys.exists(pk => proveDlog(pk))
//   sigmaProp(isMember) }`,
    links: [
      { label: "Architecture", url: "/build/agent-payments#community", external: false },
      { label: "Native Tokens", url: "/technology/native-tokens", external: false },
      { label: "ErgoScript", url: "/technology/ergoscript", external: false },
    ],
  },
]

// ── Open problems ─────────────────────────────────────────────────────────────
const OPEN_PROBLEMS = [
  {
    id: 1,
    title: "Agent identity without persistent accounts",
    desc: "How do agents build reputation across sessions without deanonymisation?",
  },
  {
    id: 2,
    title: "Note acceptance UX for non-technical agents",
    desc: "SDK-level abstraction so LLM agents can issue and accept notes with minimal setup.",
  },
  {
    id: 3,
    title: "Tracker federation across reserves",
    desc: "Cross-reserve accounting and liquidity — can notes be accepted across different community reserves?",
  },
  {
    id: 4,
    title: "Agent reputation without centralized oracle",
    desc: "Verifiable reputation score derived from on-chain history, no trusted third party.",
  },
  {
    id: 5,
    title: "Local community wallet — one-click deploy",
    desc: "Spin up a community reserve, issue tokens, and configure acceptance rules in under 5 minutes.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
}

function StatusBadge({ status, label }: { status: string; label: string }) {
  if (status === "testnet") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        {label}
      </span>
    )
  }
  if (status === "coming") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
        <Circle className="w-3 h-3" />
        {label}
      </span>
    )
  }
  return null
}

interface AddressToken {
  tokenId: string
  amount: number
  name?: string
  decimals?: number
}

interface AddressBalance {
  nanoErgs: number
  tokens: AddressToken[]
}

interface PlaygroundUtxo {
  boxId: string
  value: number
  creationHeight: number
  assets?: { tokenId: string; amount: number }[]
}

function generatePlaygroundCode(address: string, utxos: PlaygroundUtxo[]): string {
  const totalErg = utxos.reduce((sum, u) => sum + u.value, 0)
  const utxoComments = utxos.slice(0, 3).map((u, i) =>
    `//   Box ${i + 1}: ${u.boxId.slice(0, 16)}... (${(u.value / 1e9).toFixed(4)} ERG)`
  ).join('\n')

  return `// Agent payment — auto-generated for your testnet address
// Address: ${address.slice(0, 22)}...
// ${utxos.length} UTxO${utxos.length !== 1 ? 's' : ''} · ${(totalErg / 1e9).toFixed(4)} ERG total
//
// Run: npm install @fleet-sdk/core && node agent-payment.js

import { TransactionBuilder, OutputBuilder } from "@fleet-sdk/core";

const TESTNET_API  = "https://api-testnet.ergoplatform.com";
const YOUR_ADDRESS = "${address}";
const RECEIVER     = "3WwbzW6u8hKWBcL1W7kNVMr25s2UHfSBnYtwSHvrRQt7DdPuoXrt";
const AMOUNT       = "1000000"; // 0.001 ERG

// Your live UTxOs (fetched from testnet):
${utxoComments}

async function main() {
  const { fullHeight } = await fetch(
    \`\${TESTNET_API}/api/v1/info\`
  ).then(r => r.json());

  const { items: inputs } = await fetch(
    \`\${TESTNET_API}/api/v1/boxes/unspent/byAddress/\${YOUR_ADDRESS}\`
  ).then(r => r.json());

  const unsignedTx = new TransactionBuilder(fullHeight)
    .from(inputs)
    .to(new OutputBuilder(AMOUNT, RECEIVER))
    .sendChangeTo(YOUR_ADDRESS)
    .payMinFee()
    .build()
    .toEIP12Object();

  console.log("Unsigned TX:");
  console.log(JSON.stringify(unsignedTx, null, 2));
  // → Sign with Nautilus wallet (testnet mode) or ergo-lib-wasm
  // → POST signed TX to: \${TESTNET_API}/api/v1/transactions
}

main().catch(console.error);`
}

export function DemosClient() {
  const [expandedCode, setExpandedCode] = useState<string | null>(null)

  // ── Playground state ──────────────────────────────────────────────────────
  const [playgroundAddress, setPlaygroundAddress] = useState("")
  const [playgroundUtxos, setPlaygroundUtxos] = useState<PlaygroundUtxo[] | null>(null)
  const [playgroundLoading, setPlaygroundLoading] = useState(false)
  const [playgroundError, setPlaygroundError] = useState<string | null>(null)
  const [playgroundTab, setPlaygroundTab] = useState<'code' | 'utxos'>('code')
  const [playgroundCopied, setPlaygroundCopied] = useState(false)

  async function handlePlayground(e: React.FormEvent) {
    e.preventDefault()
    const addr = playgroundAddress.trim()
    if (!addr) return
    setPlaygroundLoading(true)
    setPlaygroundError(null)
    setPlaygroundUtxos(null)
    try {
      const res = await fetch(
        `https://api-testnet.ergoplatform.com/api/v1/boxes/unspent/byAddress/${encodeURIComponent(addr)}?limit=10`
      )
      if (!res.ok) {
        setPlaygroundError("Address not found on testnet. Make sure it's a valid Ergo testnet address.")
        return
      }
      const data = await res.json()
      if (!data.items?.length) {
        setPlaygroundError("No UTxOs found. Get free testnet ERG at testnet.ergofaucet.org — takes 30 seconds.")
        return
      }
      setPlaygroundUtxos(data.items)
      setPlaygroundTab('code')
    } catch {
      setPlaygroundError("Could not reach testnet API. Check your network connection.")
    } finally {
      setPlaygroundLoading(false)
    }
  }

  // ── Address Lookup state ──────────────────────────────────────────────────
  const [lookupAddress, setLookupAddress] = useState("")
  const [lookupResult, setLookupResult] = useState<AddressBalance | null>(null)
  const [lookupLoading, setLookupLoading] = useState(false)
  const [lookupError, setLookupError] = useState<string | null>(null)

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault()
    const addr = lookupAddress.trim()
    if (!addr) return

    setLookupLoading(true)
    setLookupError(null)
    setLookupResult(null)

    try {
      const res = await fetch(
        `https://api.ergoplatform.com/api/v1/addresses/${encodeURIComponent(addr)}/balance/confirmed`
      )
      if (!res.ok) {
        setLookupError("Address not found or invalid. Check that it's a valid Ergo address.")
        return
      }
      const data: AddressBalance = await res.json()
      setLookupResult(data)
    } catch {
      setLookupError("Could not reach Ergo API. Check your network connection.")
    } finally {
      setLookupLoading(false)
    }
  }

  return (
    <BackgroundWrapper>
      <main className="min-h-screen bg-black text-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <Breadcrumbs
              items={[{ name: "Demos", href: "/demos" }]}
              className="mb-10 opacity-70"
            />

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
                <Play className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  Working Demos
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight mb-6 text-white"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.0,
                }}
              >
                Working flows,{" "}
                <span style={{ color: BRAND }}>not mockups.</span>
              </h1>

              <p
                className="text-neutral-300 mb-10"
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.5,
                  maxWidth: "58ch",
                }}
              >
                Three composable flows, all running on Ergo testnet. Each includes the contract
                logic, Fleet SDK code, and the exact steps to reproduce.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="https://testnet.ergofaucet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                  >
                    <span>Get testnet ERG</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                  >
                    <span>Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3 Demo Cards ─────────────────────────────────────────────────── */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {DEMOS.map((demo, i) => (
              <motion.div
                key={demo.id}
                id={demo.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className={`bg-black/80 border rounded-3xl transition-all duration-300 ${
                  demo.status === "coming" ? "border-white/8 opacity-80" : "border-white/8 hover:border-orange-500/30"
                }`}>
                  <CardContent className="p-8 md:p-10">

                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                          demo.status === "coming"
                            ? "bg-neutral-900 border-white/10"
                            : "bg-orange-500/10 border-orange-500/20"
                        }`}>
                          <demo.icon className={`w-6 h-6 ${demo.status === "coming" ? "text-neutral-500" : "text-orange-400"}`} />
                        </div>
                        <div>
                          <h2 className="font-bold text-white text-xl leading-tight">{demo.title}</h2>
                          <p className="text-neutral-500 text-sm mt-0.5">{demo.tagline}</p>
                        </div>
                      </div>
                      <StatusBadge status={demo.status} label={demo.statusLabel} />
                    </div>

                    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">

                      {/* Left: description + flow + why */}
                      <div>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-7">{demo.description}</p>

                        {/* Step-by-step flow */}
                        <div className="mb-7">
                          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">
                            Step-by-step
                          </p>
                          <ol className="space-y-3">
                            {demo.flow.map((step, si) => (
                              <li key={si} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-orange-400 font-mono text-xs">{si + 1}</span>
                                </div>
                                <span className="text-neutral-300 text-sm">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Why this matters */}
                        <div className="rounded-2xl bg-orange-500/5 border border-orange-500/15 p-4">
                          <p className="text-orange-400/70 font-mono text-xs uppercase tracking-widest mb-2">Why this matters</p>
                          <p className="text-neutral-300 text-sm leading-relaxed">{demo.why}</p>
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex flex-wrap gap-3">
                          {demo.links.map((link) => (
                            link.external ? (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-orange-400 font-mono text-xs transition-colors border border-white/8 hover:border-orange-500/30 rounded-full px-3 py-1.5"
                              >
                                <span>{link.label}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <Link
                                key={link.label}
                                href={link.url}
                                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-orange-400 font-mono text-xs transition-colors border border-white/8 hover:border-orange-500/30 rounded-full px-3 py-1.5"
                              >
                                <span>{link.label}</span>
                                <ChevronRight className="w-3 h-3" />
                              </Link>
                            )
                          ))}
                        </div>
                      </div>

                      {/* Right: code block */}
                      <div>
                        <div className="rounded-2xl bg-neutral-950 border border-white/8 overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8">
                            <div className="flex items-center gap-2">
                              <Terminal className="w-3.5 h-3.5 text-orange-400" />
                              <span className="text-neutral-500 font-mono text-xs">Fleet SDK (TypeScript)</span>
                            </div>
                            <button
                              onClick={() => setExpandedCode(expandedCode === demo.id ? null : demo.id)}
                              className="text-neutral-500 hover:text-orange-400 font-mono text-xs transition-colors"
                            >
                              {expandedCode === demo.id ? "collapse" : "expand"}
                            </button>
                          </div>
                          <pre className={`px-4 py-4 text-xs text-neutral-300 font-mono leading-relaxed overflow-x-auto transition-all ${
                            expandedCode === demo.id ? "max-h-none" : "max-h-64"
                          }`}>
                            <code>{demo.code}</code>
                          </pre>
                        </div>

                        {demo.status === "testnet" && (
                          <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                            <CheckCircle className="w-3.5 h-3.5 text-orange-400" />
                            <span>Tested on Ergo testnet. Get test ERG at{" "}
                              <a
                                href="https://testnet.ergofaucet.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-400/70 hover:text-orange-400 transition-colors"
                              >
                                testnet.ergofaucet.org
                              </a>
                            </span>
                          </div>
                        )}
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Open Problems / Issue Board ───────────────────────────────────── */}
        <section className="py-24 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">

              <div>
                <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                  Open Problems
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white mb-6"
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  What&apos;s still unsolved
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8" style={{ maxWidth: "46ch" }}>
                  These are the most interesting open problems in agent money. If any of these
                  resonate — we want to hear from you.
                </p>

                <div className="flex flex-col gap-3">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <a
                      href="https://github.com/kushti/chaincash/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl border-2 border-orange-500/40 hover:border-orange-500 transition-all text-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>Open an issue</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Link
                      href="#builder-form"
                      className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-400 font-mono text-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Talk to us about your use case</span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-3">
                {OPEN_PROBLEMS.map((problem, i) => (
                  <motion.div
                    key={problem.id}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/8 bg-black/50 px-5 py-4 hover:border-orange-500/20 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-orange-500/50 font-mono text-xs mt-0.5 flex-shrink-0">
                        #{problem.id}
                      </span>
                      <div>
                        <p className="text-white text-sm font-semibold mb-1">{problem.title}</p>
                        <p className="text-neutral-500 text-xs leading-relaxed">{problem.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick links ──────────────────────────────────────────────────── */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: ArrowRight,
                  title: "Full architecture",
                  desc: "Reserve · Note · Tracker · Predicate",
                  href: "/build/agent-payments",
                  external: false,
                },
                {
                  icon: Github,
                  title: "ChainCash",
                  desc: "Reference implementation for notes + reserves",
                  href: "https://github.com/kushti/chaincash",
                  external: true,
                },
                {
                  icon: Bot,
                  title: "Agent Economy",
                  desc: "Why Ergo is the right base layer",
                  href: "/agent-economy",
                  external: false,
                },
              ].map((link, i) => (
                <motion.div key={link.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl">
                      <Card className="bg-black/80 border border-white/8 rounded-2xl group-hover:border-orange-500/30 group-hover:-translate-y-0.5 transition-all cursor-pointer">
                        <CardContent className="p-5 flex items-center gap-4">
                          <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                            <link.icon className="w-4 h-4 text-orange-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm group-hover:text-orange-100 transition-colors">{link.title}</p>
                            <p className="text-neutral-500 text-xs">{link.desc}</p>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-orange-400 ml-auto transition-colors" />
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Link href={link.href} className="group block rounded-2xl">
                      <Card className="bg-black/80 border border-white/8 rounded-2xl group-hover:border-orange-500/30 group-hover:-translate-y-0.5 transition-all cursor-pointer">
                        <CardContent className="p-5 flex items-center gap-4">
                          <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                            <link.icon className="w-4 h-4 text-orange-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm group-hover:text-orange-100 transition-colors">{link.title}</p>
                            <p className="text-neutral-500 text-xs">{link.desc}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-orange-400 ml-auto transition-colors" />
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interactive TX Playground ────────────────────────────────────── */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">

              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-4">
                  <Code2 className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                    Testnet playground
                  </span>
                </div>
                <h2
                  className="font-extrabold tracking-tight text-white mb-3"
                  style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
                >
                  Generate your first agent payment
                </h2>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">
                  Paste your Ergo testnet address. We fetch your live UTxOs and generate a
                  ready-to-run Fleet SDK script — pre-filled with your actual data.
                </p>
              </div>

              {/* Input */}
              <form onSubmit={handlePlayground} className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={playgroundAddress}
                  onChange={(e) => setPlaygroundAddress(e.target.value)}
                  placeholder="9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5... (testnet address)"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500/50 font-mono"
                  spellCheck={false}
                />
                <button
                  type="submit"
                  disabled={playgroundLoading || !playgroundAddress.trim()}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm shrink-0"
                >
                  {playgroundLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  {playgroundLoading ? "Fetching…" : "Generate"}
                </button>
              </form>

              <p className="text-center text-gray-600 text-xs mb-8">
                Need testnet ERG?{" "}
                <a
                  href="https://testnet.ergofaucet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400/70 hover:text-orange-400 transition-colors"
                >
                  testnet.ergofaucet.org
                </a>
                {" "}— free testnet ERG in seconds.
              </p>

              {/* Error */}
              {playgroundError && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm text-red-300 mb-6"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  {playgroundError}
                </motion.div>
              )}

              {/* Results */}
              {playgroundUtxos && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black/80 border border-white/10 rounded-2xl overflow-hidden"
                >
                  {/* Tab bar */}
                  <div className="flex border-b border-white/10">
                    <button
                      onClick={() => setPlaygroundTab('code')}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        playgroundTab === 'code'
                          ? 'text-orange-400 border-b-2 border-orange-400 bg-orange-500/5'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Code2 className="w-4 h-4" />
                        Ready-to-run code
                      </span>
                    </button>
                    <button
                      onClick={() => setPlaygroundTab('utxos')}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        playgroundTab === 'utxos'
                          ? 'text-orange-400 border-b-2 border-orange-400 bg-orange-500/5'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Wallet className="w-4 h-4" />
                        Your UTxOs ({playgroundUtxos.length})
                      </span>
                    </button>
                  </div>

                  {/* Code tab */}
                  {playgroundTab === 'code' && (
                    <div>
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-neutral-950">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-orange-400" />
                          <span className="text-gray-500 font-mono text-xs">agent-payment.js</span>
                        </div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(generatePlaygroundCode(playgroundAddress, playgroundUtxos))
                            setPlaygroundCopied(true)
                            setTimeout(() => setPlaygroundCopied(false), 2000)
                          }}
                          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          {playgroundCopied ? (
                            <>
                              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                              <span className="text-green-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="px-5 py-4 text-xs text-neutral-300 font-mono leading-relaxed overflow-x-auto">
                        {generatePlaygroundCode(playgroundAddress, playgroundUtxos)}
                      </pre>
                      <div className="border-t border-white/8 p-4 bg-orange-500/5">
                        <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Run it</p>
                        <div className="space-y-1.5 font-mono text-xs text-gray-400">
                          <p><span className="text-orange-400">1.</span> npm install @fleet-sdk/core</p>
                          <p><span className="text-orange-400">2.</span> node agent-payment.js</p>
                          <p><span className="text-orange-400">3.</span> Copy the unsigned TX JSON output</p>
                          <p><span className="text-orange-400">4.</span> Open Nautilus (testnet mode) → sign → submit</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UTxOs tab */}
                  {playgroundTab === 'utxos' && (
                    <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                      {playgroundUtxos.map((utxo, i) => (
                        <div key={utxo.boxId} className="flex items-start justify-between bg-black/40 rounded-xl px-4 py-3">
                          <div className="min-w-0">
                            <div className="text-xs text-gray-500 font-mono mb-1">Box {i + 1}</div>
                            <div className="text-xs text-gray-400 font-mono">{utxo.boxId.slice(0, 24)}…</div>
                            <div className="text-xs text-gray-600 mt-1">
                              height {utxo.creationHeight} · {utxo.assets?.length ?? 0} token(s)
                            </div>
                          </div>
                          <div className="text-orange-300 font-mono font-bold text-sm shrink-0 ml-4">
                            {(utxo.value / 1e9).toFixed(4)} ERG
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

            </div>
          </div>
        </section>

        {/* ── Live Address Lookup ──────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-4">
                <Search className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  Live on mainnet
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Address balance lookup</h2>
              <p className="text-gray-400 text-sm">
                Query any Ergo address balance live from the blockchain. Real data, real network.
              </p>
            </div>

            <form onSubmit={handleLookup} className="flex gap-2 mb-6">
              <input
                type="text"
                value={lookupAddress}
                onChange={(e) => setLookupAddress(e.target.value)}
                placeholder="9hHDQb26AjnJ...  (paste any Ergo address)"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500/50 font-mono"
                spellCheck={false}
              />
              <button
                type="submit"
                disabled={lookupLoading || !lookupAddress.trim()}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm shrink-0"
              >
                {lookupLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
                {lookupLoading ? "Looking up…" : "Lookup"}
              </button>
            </form>

            {/* Error */}
            {lookupError && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm text-red-300"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                {lookupError}
              </motion.div>
            )}

            {/* Result */}
            {lookupResult && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                {/* ERG balance */}
                <div className="flex items-center gap-4 p-5 border-b border-white/10">
                  <div className="p-2.5 bg-orange-500/10 rounded-lg">
                    <Wallet className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl tabular-nums">
                      {(lookupResult.nanoErgs / 1e9).toFixed(4)} ERG
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 font-mono">
                      {lookupResult.nanoErgs.toLocaleString()} nanoERG
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Confirmed
                    </span>
                  </div>
                </div>

                {/* Tokens */}
                {lookupResult.tokens.length > 0 && (
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Coins className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">
                        {lookupResult.tokens.length} token{lookupResult.tokens.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {lookupResult.tokens.map((token) => (
                        <div
                          key={token.tokenId}
                          className="flex items-center justify-between bg-black/30 rounded-lg px-3 py-2 text-sm"
                        >
                          <div className="min-w-0">
                            <span className="text-white font-medium">
                              {token.name || "Unknown Token"}
                            </span>
                            <span className="text-gray-600 font-mono text-xs block truncate">
                              {token.tokenId.slice(0, 16)}…
                            </span>
                          </div>
                          <span className="text-orange-300 font-mono font-bold shrink-0 ml-4">
                            {token.amount.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {lookupResult.tokens.length === 0 && (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No tokens in this address
                  </div>
                )}
              </motion.div>
            )}

            <p className="text-center text-gray-600 text-xs mt-4">
              Data fetched live from{" "}
              <code className="text-gray-500">api.ergoplatform.com</code>
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div id="builder-form">
          <FinalCTASimple
            title="Your use case doesn't fit?"
            description="Tell us what you're building. We'll find the right flow or help design a new one."
          />
        </div>

      </main>
    </BackgroundWrapper>
  )
}
