"use client"

import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  CreditCard,
  Shield,
  Zap,
  Code2,
  Coins,
  ArrowRight,
  GitBranch,
  Network,
  Lock,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const BRAND = "#ff8800"

// ── Why Stripe fails agents ─────────────────────────────────────────────────
const STRIPE_PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "No persistent identity",
    body: "Agents spin up and disappear. Stripe requires KYC, billing accounts, and static merchant IDs — none of which work for ephemeral autonomous processes.",
  },
  {
    icon: AlertTriangle,
    title: "One-time payments only",
    body: "Agents need credit: issue now, redeem later. Stripe has no programmable IOU layer. Every micro-call requires a round-trip to a payment processor.",
  },
  {
    icon: AlertTriangle,
    title: "No programmable acceptance",
    body: "You can't tell Stripe 'accept payment only if the agent completed task X and holds credential Y.' Logic lives outside the payment layer — fragile by design.",
  },
  {
    icon: AlertTriangle,
    title: "Millisecond economics break",
    body: "A $0.001 API call through Stripe costs more in fees than the call itself. The rails weren't built for machine-to-machine micropayments at any scale.",
  },
]

// ── Why Ergo ────────────────────────────────────────────────────────────────
const WHY_ERGO = [
  {
    icon: Shield,
    title: "eUTXO: verifiable atomicity",
    body: "Every transaction is deterministic. Agents know exactly what will happen before submitting. No reentrancy, no hidden global state, no MEV surprises.",
    href: "/technology/eutxo-model",
  },
  {
    icon: Code2,
    title: "ErgoScript: programmable trust",
    body: "Acceptance predicates are first-class primitives. 'Accept this note only if task hash matches and deadline hasn't passed' — one script, on-chain, trustless.",
    href: "/technology/ergoscript",
  },
  {
    icon: Coins,
    title: "Babel Fees: agents don't need ERG",
    body: "Agents can pay transaction fees with any token. No need to pre-fund an ERG wallet for every new agent instance — critical for ephemeral compute.",
    href: "/technology/babel-fees",
  },
  {
    icon: Lock,
    title: "Sigma Protocols: private credit",
    body: "Zero-knowledge proofs are native. Agents can prove they hold a credential or completed a task without revealing which agent they are.",
    href: "/technology/privacy-features",
  },
  {
    icon: Zap,
    title: "Proof-of-Work: no chain halts",
    body: "PoW has no governance emergency stops. Agent infrastructure built on Ergo won't be frozen by a validator cartel or foundation decision.",
    href: "/technology",
  },
  {
    icon: Network,
    title: "Native tokens: community money",
    body: "Issue a community currency in one transaction. Notes, trackers, and reserve tokens are protocol-level — no custom ERC-20-style contracts required.",
    href: "/technology/native-tokens",
  },
]

// ── The Stack ───────────────────────────────────────────────────────────────
const STACK_LAYERS = [
  {
    label: "Settlement",
    sublabel: "Ergo base layer",
    status: "live",
    color: "orange",
    description: "Proof-of-Work finality, eUTXO atomicity, ~$0.01 fees",
  },
  {
    label: "Reserves",
    sublabel: "reserve contracts",
    status: "live",
    color: "orange",
    description: "On-chain capital backing — holds ERG or tokens as collateral for issued notes",
  },
  {
    label: "Trackers",
    sublabel: "on-chain trackers",
    status: "live",
    color: "orange",
    description: "Verifiable accounting — track balances, credit limits, redemption history",
  },
  {
    label: "Notes",
    sublabel: "ChainCash / custom contracts",
    status: "live",
    color: "orange",
    description: "Programmable IOUs — issue, transfer, and redeem off-chain money",
  },
  {
    label: "Trust Rules",
    sublabel: "ErgoScript predicates",
    status: "live",
    color: "orange",
    description: "Acceptance logic — 'accept this note if and only if...' — fully on-chain",
  },
  {
    label: "Reputation",
    sublabel: "open problem",
    status: "open",
    color: "neutral",
    description: "Agent reputation without a central oracle — active research area",
  },
  {
    label: "Identity",
    sublabel: "open problem",
    status: "open",
    color: "neutral",
    description: "Persistent agent identity across sessions without deanonymisation",
  },
]

// ── Use cases ────────────────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Bot,
    title: "LLM buys inference",
    flow: "Agent → issues note → API provider accepts predicate → delivers tokens",
    detail: "One call, one proof, no persistent account. Provider sets their own acceptance rules — minimum task hash, maximum credit, deadline.",
  },
  {
    icon: CreditCard,
    title: "Agent pays on credit",
    flow: "Reserve deployed → notes issued against it → tracker monitors usage → auto-settle",
    detail: "Credit limit enforced on-chain. No counterparty risk — the reserve contract is the bank.",
  },
  {
    icon: GitBranch,
    title: "Community currency",
    flow: "Reserve holds ERG → community issues local notes → acceptance predicates define rules",
    detail: "A local marketplace, a compute cooperative, or an agent network — each with their own money and trust rules.",
  },
]

// ── Fade-in animation ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
}

export function AgentEconomyClient() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen bg-black text-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <Breadcrumbs
              items={[{ name: "Agent Economy", href: "/agent-economy" }]}
              className="mb-10 opacity-70"
            />

            <div className="max-w-4xl">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
                <Bot className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  Agent Economy
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight mb-6 text-white"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.0,
                }}
              >
                The base layer for{" "}
                <span style={{ color: BRAND }}>autonomous</span>
                <br />economic agents.
              </h1>

              <p
                className="text-neutral-300 mb-10"
                style={{
                  fontSize: "clamp(17px, 2.2vw, 22px)",
                  lineHeight: 1.5,
                  maxWidth: "60ch",
                }}
              >
                Autonomous agents need more than payments. They need{" "}
                <span className="text-white font-semibold">credit</span>,{" "}
                <span className="text-white font-semibold">programmable acceptance rules</span>, and{" "}
                <span className="text-white font-semibold">verifiable settlement</span> — all without
                a central counterparty. Ergo is the only settlement layer built for this.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                  >
                    <span>See the architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/demos"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                  >
                    <span>View demos</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Stripe/PayPal fails ──────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                The Problem
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Why existing payment rails{" "}
                <span className="text-neutral-400">can&apos;t serve agents</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STRIPE_PROBLEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                        <item.icon className="w-4 h-4 text-red-400" />
                      </div>
                      <h3 className="font-bold text-white mb-2 text-base">{item.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Ergo ─────────────────────────────────────────────────────── */}
        <section className="py-24 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                The Solution
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Why Ergo is the right{" "}
                <span style={{ color: BRAND }}>base layer</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_ERGO.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    href={item.href}
                    className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-3xl"
                  >
                    <Card className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all">
                          <item.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-base group-hover:text-orange-100 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                          {item.body}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-orange-500/60 group-hover:text-orange-400 transition-colors text-xs font-mono">
                          <span>Learn more</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Architecture Stack ───────────────────────────────────────────── */}
        <section id="architecture" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

              {/* Left: copy */}
              <div>
                <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                  The Stack
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white mb-6"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  The agent economy stack
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-8" style={{ maxWidth: "52ch" }}>
                  Five layers are live on Ergo today. Two remain open research problems — the most
                  interesting ones for builders to tackle.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0" />
                    <span className="text-neutral-300">Live on Ergo mainnet</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 flex-shrink-0" />
                    <span className="text-neutral-300">Open research problem</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <Link
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-mono text-sm transition-colors group"
                  >
                    <span>Technical architecture →</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="https://github.com/ergoplatform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-300 font-mono text-sm transition-colors"
                  >
                    <span>GitHub repos</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: stack diagram */}
              <div className="space-y-2">
                {STACK_LAYERS.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`
                      group relative rounded-2xl border px-5 py-4 transition-all duration-200
                      ${layer.status === "live"
                        ? "bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/40"
                        : "bg-neutral-900/40 border-white/8 opacity-60"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 ${
                            layer.status === "live" ? "bg-orange-500" : "bg-neutral-600"
                          }`}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm">{layer.label}</span>
                            <span className="text-neutral-500 text-xs font-mono">
                              — {layer.sublabel}
                            </span>
                          </div>
                          <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                      {layer.status === "live" ? (
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <span className="text-xs font-mono text-neutral-500 flex-shrink-0 mt-0.5 border border-neutral-700 rounded-full px-2 py-0.5">
                          open
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Use cases ────────────────────────────────────────────────────── */}
        <section className="py-24 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                What you can build
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Three flows. All live on testnet.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {USE_CASES.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/40 hover:-translate-y-0.5 transition-all duration-300">
                    <CardContent className="p-7">
                      <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                        <uc.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="font-bold text-white text-lg mb-3">{uc.title}</h3>
                      <p className="text-orange-400/80 font-mono text-xs mb-4 leading-relaxed border-l-2 border-orange-500/30 pl-3">
                        {uc.flow}
                      </p>
                      <p className="text-neutral-400 text-sm leading-relaxed">{uc.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-mono text-sm transition-colors group"
              >
                <span>See all demos with code</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── BetterMoneyLabs CTA ──────────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-orange-500/10 via-black/80 to-black/80 border border-orange-500/25 rounded-3xl overflow-hidden">
                <CardContent className="p-10 md:p-14">
                  <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
                        <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                          BetterMoneyLabs
                        </span>
                      </div>
                      <h2
                        className="font-extrabold text-white mb-4"
                        style={{
                          fontSize: "clamp(22px, 3vw, 36px)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.15,
                        }}
                      >
                        We&apos;re building the reference stack.
                      </h2>
                      <p className="text-neutral-300 leading-relaxed" style={{ maxWidth: "52ch" }}>
                        Notes, credit, trackers, reserves, acceptance predicates — and the showcase
                        for agent-to-agent payments. If you&apos;re building in this space, we want
                        to talk to you.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 md:items-end">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Link
                          href="/build/agent-payments"
                          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm whitespace-nowrap"
                        >
                          <span>Technical architecture</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Link
                          href="#builder-form"
                          className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/40 hover:border-orange-500 transition-all text-sm whitespace-nowrap"
                        >
                          <span>Talk to us</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ── Builder form ────────────────────────────────────────────────── */}
        <div id="builder-form">
          <FinalCTASimple
            title="Building agents? Talk to us."
            description="Tell us what you're building. We'll reach out within 24 hours with a concrete next step — demo, design session, or code review."
          />
        </div>

      </main>
    </BackgroundWrapper>
  )
}
