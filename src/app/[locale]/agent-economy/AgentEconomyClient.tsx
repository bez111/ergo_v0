"use client"

import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
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
  BarChart3,
  ExternalLink,
  ChevronRight,
  Landmark,
  Cpu,
  WalletCards,
  Rocket,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { PersonaPathPanel } from "@/components/persona-path-panel"
import { SageActivityFeed } from "@/components/sage/SageActivityFeed"

const BRAND = "#ff8800"

// Icons are React components — kept in TSX, not in JSON
const STRIPE_PROBLEM_ICONS = [AlertTriangle, AlertTriangle, AlertTriangle, AlertTriangle]

const WHY_ERGO_ICONS = [Shield, Code2, Coins, Lock, Zap, Network]

const USE_CASE_ICONS = [Bot, CreditCard, GitBranch]

const CREDIT_UNLOCK_ICONS = [CreditCard, CheckCircle, Landmark]

const COCKPIT_ITEMS = [
  {
    name: "Sage paid turn",
    status: "Live testnet proof",
    tone: "live",
    icon: Bot,
    metric: "1 real redemption",
    body: "Premium questions can be priced as Ergo testnet Notes, verified, answered, and redeemed on chain when the signer is online.",
    href: "#sage-activity",
    action: "Open activity",
  },
  {
    name: "Receipt source",
    status: "Storage live",
    tone: "live",
    icon: CheckCircle,
    metric: "Blob-backed bundles",
    body: "New paid turns can persist Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and chain evidence under one receipt API.",
    href: "/api/sage/receipt/blob-probe-2026-05-16",
    action: "Probe storage",
  },
  {
    name: "Accord/402 bridge",
    status: "L1 signed",
    tone: "live",
    icon: GitBranch,
    metric: "/api/sage/accord",
    body: "The bridge is deployed, a post-storage full receipt exists, and signed Sage L1 conformance evidence is published.",
    href: "/api/sage/accord",
    action: "View descriptor",
  },
  {
    name: "MCP endpoint",
    status: "DNS live",
    tone: "live",
    icon: Network,
    metric: "mcp.ergoblockchain.org",
    body: "The Streamable HTTP MCP service is deployed on Fly, pushed to GitHub, and now resolves through the public mcp.ergoblockchain.org endpoint.",
    href: "https://mcp.ergoblockchain.org/health",
    action: "Health check",
  },
  {
    name: "Sage widget",
    status: "npm live",
    tone: "live",
    icon: Cpu,
    metric: "v0.3.0",
    body: "React and vanilla paid widget package is published with payment intents, wallet launcher hooks, quote, Note verification, receipt links, tenant config, and typed callbacks.",
    href: "/agent-economy/sage-widget",
    action: "Embed Sage",
  },
  {
    name: "Developer launch kit",
    status: "Live path",
    tone: "live",
    icon: Rocket,
    metric: "5-minute route",
    body: "A practical developer path ties together live status, receipt bundles, policy checks, MCP, services, npm widget, and mainnet guardrails.",
    href: "/agent-economy/launch-kit",
    action: "Start here",
  },
  {
    name: "Wallet-agent spec",
    status: "Safety spec",
    tone: "live",
    icon: WalletCards,
    metric: "local policy",
    body: "The next wallet-agent layer is specified as local policy, transaction simulation, bounded signing, and receipt-first accountability.",
    href: "/agent-economy/wallet-agent",
    action: "Read spec",
  },
  {
    name: "ErgoScript playground",
    status: "Runtime live",
    tone: "live",
    icon: Code2,
    metric: "WASM build clean",
    body: "The playground works in production, and the webpack async WASM config clears the previous build warning.",
    href: "/build/playground",
    action: "Try it",
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
  const t = useTranslations("agentEconomy")

  const stripeProblemItems = t.raw("stripeProblemItems") as Array<{ title: string; body: string }>
  const whyErgoItems = t.raw("whyErgoItems") as Array<{ title: string; body: string; href: string }>
  const creditUnlockItems = t.raw("creditUnlock.items") as Array<{ title: string; body: string }>
  const stackLayerItems = t.raw("stackLayerItems") as Array<{
    label: string
    sublabel: string
    status: string
    description: string
  }>
  const useCaseItems = t.raw("useCaseItems") as Array<{ title: string; flow: string; detail: string }>

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <Breadcrumbs
              items={[{ name: t("breadcrumb"), href: "/agent-economy" }]}
              className="mb-10 opacity-70"
            />

            <div className="max-w-4xl">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
                <Bot className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  {t("hero.tag")}
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
                {t("hero.titleStart")}{" "}
                <span style={{ color: BRAND }}>{t("hero.titleHighlight")}</span>
                {" "}
                <br />{t("hero.titleEnd")}
              </h1>

              <p
                className="text-neutral-300 mb-10"
                style={{
                  fontSize: "clamp(17px, 2.2vw, 22px)",
                  lineHeight: 1.5,
                  maxWidth: "60ch",
                }}
              >
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/agent-economy/start"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                  >
                    <span>Start building</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/demos"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                  >
                    <span>{t("hero.ctaDemos")}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/agent-economy/live"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                  >
                    <span>Live Hub</span>
                    <BarChart3 className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <PersonaPathPanel
          eyebrow="Agent builder path"
          title="Go from thesis to runnable proof."
          description="A practical route for builders who want agent payments, work verification, settlement receipts, and programmable credit without pretending the stack is production-certified."
          steps={[
            {
              label: "Start here",
              description: "Orient around what is live, what is verifiable, and what remains mainnet-gated.",
              href: "/agent-economy/start",
            },
            {
              label: "Read Accord",
              description: "Review the protocol repo for agreements, receipts, rails, and conformance.",
              href: "https://github.com/accord-protocol/accord-protocol",
              external: true,
            },
            {
              label: "Track metrics",
              description: "See prototype agent-economy status and future event-stream slots.",
              href: "/ergo-watch#agent-economy",
            },
            {
              label: "Study credit",
              description: "Follow the bounded Note pattern for agent-issued task credit.",
              href: "/demos/agent-credit-note",
            },
          ]}
        />

        <LiveCockpit />

        {/* ── Why Stripe/PayPal fails ──────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                {t("problem.sectionLabel")}
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {t("problem.heading")}{" "}
                <span className="text-neutral-400">{t("problem.headingMuted")}</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stripeProblemItems.map((item, i) => {
                const Icon = STRIPE_PROBLEM_ICONS[i]
                return (
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
                          <Icon className="w-4 h-4 text-red-400" />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-base">{item.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Programmable Credit Unlock ─────────────────────────────────── */}
        <section className="py-24 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-start">
              <div>
                <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                  {t("creditUnlock.sectionLabel")}
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white mb-6"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {t("creditUnlock.heading")}
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-8" style={{ maxWidth: "56ch" }}>
                  {t("creditUnlock.description")}
                </p>
                <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5">
                  <p className="text-white font-semibold leading-relaxed">{t("creditUnlock.formula")}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {creditUnlockItems.map((item, i) => {
                  const Icon = CREDIT_UNLOCK_ICONS[i]
                  return (
                    <motion.div
                      key={item.title}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                    >
                      <Card className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/35 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                            <Icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <h3 className="font-bold text-white mb-2 text-base">{item.title}</h3>
                          <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Ergo ─────────────────────────────────────────────────────── */}
        <section className="py-24 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                {t("solution.sectionLabel")}
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {t("solution.heading")}{" "}
                <span style={{ color: BRAND }}>{t("solution.headingHighlight")}</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyErgoItems.map((item, i) => {
                const Icon = WHY_ERGO_ICONS[i]
                return (
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
                            <Icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <h3 className="font-bold text-white mb-2 text-base group-hover:text-orange-100 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                            {item.body}
                          </p>
                          <div className="mt-4 flex items-center gap-1 text-orange-500/60 group-hover:text-orange-400 transition-colors text-xs font-mono">
                            <span>{t("solution.learnMore")}</span>
                            <ChevronRight className="w-3 h-3" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Architecture Stack ───────────────────────────────────────────── */}
        <section id="architecture" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-start">

              {/* Left: copy */}
              <div>
                <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                  {t("stack.sectionLabel")}
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white mb-6"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {t("stack.heading")}
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-8" style={{ maxWidth: "52ch" }}>
                  {t("stack.description")}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0" />
                    <span className="text-neutral-300">{t("stack.legendLive")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 flex-shrink-0" />
                    <span className="text-neutral-300">{t("stack.legendOpen")}</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <Link
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-mono text-sm transition-colors group"
                  >
                    <span>{t("stack.linkArchitecture")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="https://github.com/ergoplatform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-300 font-mono text-sm transition-colors"
                  >
                    <span>{t("stack.linkGithub")}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: stack diagram */}
              <div className="space-y-2">
                {stackLayerItems.map((layer, i) => (
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
                          {t("stack.badgeOpen")}
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
                {t("useCases.sectionLabel")}
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {t("useCases.heading")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {useCaseItems.map((uc, i) => {
                const Icon = USE_CASE_ICONS[i]
                return (
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
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex shrink-0 items-center justify-center">
                            <Icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <h3 className="font-bold text-white text-lg">{uc.title}</h3>
                        </div>
                        <p className="text-orange-400/80 font-mono text-xs mb-4 leading-relaxed border-l-2 border-orange-500/30 pl-3">
                          {uc.flow}
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed">{uc.detail}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-mono text-sm transition-colors group"
              >
                <span>{t("useCases.linkDemos")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Sage Live Activity Feed ──────────────────────────────────────── */}
        <SageActivityFeed />

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
                          {t("bml.tag")}
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
                        {t("bml.heading")}
                      </h2>
                      <p className="text-neutral-300 leading-relaxed" style={{ maxWidth: "52ch" }}>
                        {t("bml.description")}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 md:items-end">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Link
                          href="/build/agent-payments"
                          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm whitespace-nowrap"
                        >
                          <span>{t("bml.ctaArchitecture")}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Link
                          href="#builder-form"
                          className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/40 hover:border-orange-500 transition-all text-sm whitespace-nowrap"
                        >
                          <span>{t("bml.ctaTalk")}</span>
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

        {/* ── Who's Building ──────────────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                Ecosystem
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Who&apos;s Building on Ergo
              </h2>
              <p className="text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                Projects and teams actively building agent economy infrastructure on Ergo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "ChainCash",
                  icon: Coins,
                  status: "Prototype",
                  description: "Open-source prototype of the Note + Reserve + Tracker payment stack — community currencies, bearer instruments, and agent credit systems. Active R&D, no production releases yet.",
                  url: "https://github.com/ChainCashLabs/chaincash",
                },
                {
                  name: "BetterMoneyLabs",
                  icon: Landmark,
                  status: "Research",
                  description: "Research lab developing the financial primitives for autonomous agent commerce on Ergo. Core contributor to ChainCash protocol.",
                  url: "https://github.com/BetterMoneyLabs",
                },
                {
                  name: "Accord Protocol",
                  icon: Code2,
                  status: "Testnet",
                  description: "Open-source agreement protocol for autonomous agent work, migrated into the accord-protocol organization. Three SDK packages — TypeScript / Python / MCP server — and 10 working examples. Testnet beta; mainnet blocked until signed audit manifests.",
                  url: "https://github.com/accord-protocol/accord-protocol",
                },
                {
                  name: "Fleet SDK",
                  icon: Code2,
                  status: "Production",
                  description: "TypeScript SDK for building Ergo transactions. The standard toolkit for general dApp development; ergo-agent-pay builds on top of it.",
                  url: "https://github.com/fleet-sdk",
                },
                {
                  name: "Spectrum Finance",
                  icon: Network,
                  status: "Sunset",
                  description: "Pioneered cross-chain AMM DEX on Ergo. Frozen since Feb 2024; team published a formal sunset notice and is winding the project down. Open-source code remains as eUTXO DeFi reference.",
                  url: "https://spectrum.fi/sunset-notice",
                },
                {
                  name: "Rosen Bridge",
                  icon: GitBranch,
                  status: "Live",
                  description: "Multi-chain bridge connecting Ergo to Ethereum, Cardano, and Bitcoin. Enables agents to operate across blockchain ecosystems.",
                  url: "https://rosen.tech",
                },
                {
                  name: "Agent Payment Demos",
                  icon: Cpu,
                  status: "Testnet",
                  description: "Three working testnet demos: agent buys API call, agent pays on credit, community reserve. Open-source Fleet SDK examples.",
                  url: "/demos",
                },
              ].map((project, i) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <a
                      href={project.url}
                      target={project.url.startsWith("/") ? undefined : "_blank"}
                      rel={project.url.startsWith("/") ? undefined : "noopener noreferrer"}
                      className="group block h-full"
                    >
                      <Card className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/40 hover:-translate-y-0.5 transition-all duration-300">
                        <CardContent className="p-7">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-all">
                              <Icon className="w-5 h-5 text-orange-400" />
                            </div>
                            <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                              project.status === "Mainnet" || project.status === "Production" || project.status === "Live"
                                ? "text-orange-400 border-orange-500/30 bg-orange-500/10"
                                : project.status === "Active" || project.status === "Research"
                                  ? "text-green-400 border-green-500/30 bg-green-500/10"
                                  : project.status === "Prototype" || project.status === "Testnet"
                                    ? "text-yellow-400 border-yellow-500/30 bg-yellow-500/10"
                                    : project.status === "Sunset"
                                      ? "text-red-400 border-red-500/30 bg-red-500/10"
                                      : "text-neutral-400 border-neutral-600 bg-neutral-800/50"
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-lg mb-2 group-hover:text-orange-100 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-neutral-400 text-sm leading-relaxed">
                            {project.description}
                          </p>
                          <div className="mt-4 flex items-center gap-1 text-orange-500/60 group-hover:text-orange-400 transition-colors text-xs font-mono">
                            <span>{project.url.startsWith("/") ? "View demos" : "View project"}</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-neutral-500 text-sm">
                Building on Ergo?{" "}
                <a href="#builder-form" className="text-orange-400 hover:text-orange-300 transition-colors">
                  Get listed
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── Builder form ────────────────────────────────────────────────── */}
        <div id="builder-form">
          <FinalCTASimple
            title={t("finalCta.title")}
            description={t("finalCta.description")}
          />
        </div>

      </main>
    </BackgroundWrapper>
  )
}

function LiveCockpit() {
  return (
    <section id="live-cockpit" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
              Live cockpit
            </p>
            <h2
              className="font-extrabold tracking-tight text-white mb-5"
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              One board for the agent economy stack.
            </h2>
            <p className="text-neutral-400 leading-relaxed max-w-xl">
              Sage receipts, Accord conformance, MCP, the npm widget, and the
              ErgoScript playground now sit on the same operational map. Green
              means live testnet proof. Yellow means useful but not a protocol
              pass yet. Gray means engineering debt we are deliberately tracking.
            </p>

            <div className="mt-7 rounded-2xl border border-yellow-500/25 bg-yellow-500/[0.04] p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-300 mt-0.5 shrink-0" />
                <p className="text-sm text-yellow-50/80 leading-relaxed">
                  Public posture remains testnet-first. No mainnet readiness
                  claim until receipt conformance, signed artifacts, registry
                  evidence, exact script identity, and external audit manifests
                  are published.
                </p>
              </div>
            </div>

            <Link
              href="/agent-economy/live"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-orange-500/35 bg-orange-500/10 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-orange-200 transition-colors hover:border-orange-500/60 hover:bg-orange-500/15"
            >
              Open Live Hub
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {COCKPIT_ITEMS.map((item, i) => {
              const Icon = item.icon
              const external = item.href.startsWith("http")
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group min-h-[248px] rounded-2xl border border-white/10 bg-black/70 p-5 hover:border-orange-500/40 hover:bg-orange-500/[0.035] transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl border border-orange-500/25 bg-orange-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-300" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                        item.tone === "live"
                          ? "border-orange-500/35 bg-orange-500/10 text-orange-300"
                          : item.tone === "pending"
                            ? "border-yellow-500/35 bg-yellow-500/10 text-yellow-200"
                            : "border-white/10 bg-white/[0.03] text-neutral-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-100 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-orange-300/80 mb-4">
                    {item.metric}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-400 mb-5">
                    {item.body}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-1 text-[11px] uppercase tracking-widest font-mono text-orange-300 group-hover:text-orange-200">
                    {item.action}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
