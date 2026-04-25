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
  ExternalLink,
  ChevronRight,
  Users,
  Landmark,
  Cpu,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const BRAND = "#ff8800"

// Icons are React components — kept in TSX, not in JSON
const STRIPE_PROBLEM_ICONS = [AlertTriangle, AlertTriangle, AlertTriangle, AlertTriangle]

const WHY_ERGO_ICONS = [Shield, Code2, Coins, Lock, Zap, Network]

const USE_CASE_ICONS = [Bot, CreditCard, GitBranch]

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
  const stackLayerItems = t.raw("stackLayerItems") as Array<{
    label: string
    sublabel: string
    status: string
    description: string
  }>
  const useCaseItems = t.raw("useCaseItems") as Array<{ title: string; flow: string; detail: string }>

  return (
    <BackgroundWrapper>
      <main className="min-h-screen bg-black text-white">

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
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                  >
                    <span>{t("hero.ctaArchitecture")}</span>
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
              </div>
            </div>
          </div>
        </section>

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
                        <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                          <Icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <h3 className="font-bold text-white text-lg mb-3">{uc.title}</h3>
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
                  name: "Fleet SDK",
                  icon: Code2,
                  status: "Production",
                  description: "TypeScript SDK for building Ergo transactions. The standard toolkit for agent payment integrations and dApp development.",
                  url: "https://github.com/fleet-sdk",
                },
                {
                  name: "Spectrum Finance",
                  icon: Network,
                  status: "Live",
                  description: "Cross-chain DEX with automated market making on Ergo. Provides the liquidity layer agents need for token swaps.",
                  url: "https://spectrum.fi",
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
