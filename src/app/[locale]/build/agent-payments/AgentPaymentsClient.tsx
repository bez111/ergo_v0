"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Terminal,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Circle,
  Github,
  Code2,
  Shield,
  Coins,
  Database,
  GitBranch,
  Layers,
  BookOpen,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const BRAND = "#ff8800"

// ── Primitives ──────────────────────────────────────────────────────────────
const PRIMITIVES = [
  {
    id: "reserve",
    tKey: "reserve" as const,
    icon: Database,
    color: "orange",
    ergoScript: `{
  // Reserve contract: allow withdrawal only
  // if redemption note is burned
  val noteBox = INPUTS(1)
  val burnCheck = noteBox.tokens.size == 0
  sigmaProp(burnCheck && SELF.R4[Long].get > 0)
}`,
  },
  {
    id: "note",
    tKey: "note" as const,
    icon: Code2,
    color: "orange",
    ergoScript: `{
  // Note: transferable by holder,
  // redeemable against reserve
  val holder = SELF.R4[GroupElement].get
  val isHolder = proveDlog(holder)
  val isRedemption = INPUTS.exists { box =>
    box.tokens.exists(_._1 == reserveId)
  }
  isHolder || isRedemption
}`,
  },
  {
    id: "tracker",
    tKey: "tracker" as const,
    icon: Layers,
    color: "orange",
    ergoScript: `{
  // Tracker: ensure running total
  // doesn't exceed credit limit
  val limit = SELF.R4[Long].get
  val used  = SELF.R5[Long].get
  val newUsed = used + INPUTS(0).value
  sigmaProp(newUsed <= limit)
}`,
  },
  {
    id: "predicate",
    tKey: "predicate" as const,
    icon: Shield,
    color: "orange",
    ergoScript: `{
  // Accept note only if:
  // 1. Task hash matches R4
  // 2. Deadline not passed
  val taskHash  = SELF.R4[Coll[Byte]].get
  val deadline  = SELF.R5[Int].get
  val inputHash = INPUTS(0).R4[Coll[Byte]].get
  val onTime    = HEIGHT <= deadline
  sigmaProp(taskHash == inputHash && onTime)
}`,
  },
]

// ── Flows ───────────────────────────────────────────────────────────────────
const FLOW_DATA = [
  {
    id: "api-call",
    tKey: "apiCall" as const,
    stepCount: 4,
    code: `// Fleet SDK: create a note for API payment
import { TransactionBuilder, OutputBuilder, SAFE_MIN_BOX_VALUE } from "@fleet-sdk/core"

const noteBox = new OutputBuilder(
  1_000_000n, // 0.001 ERG
  NOTE_CONTRACT_ADDRESS
)
  .setAdditionalRegisters({
    R4: SGroupElement(providerPubKey),  // recipient
    R5: SLong(BigInt(HEIGHT + 100)),    // deadline
    R6: SColl(SByte, taskHashBytes),    // task identifier
  })

const tx = new TransactionBuilder(currentHeight)
  .from(inputs)
  .to(noteBox)
  .sendChangeTo(agentAddress)
  .payMinFee()
  .build()`,
  },
  {
    id: "credit",
    tKey: "credit" as const,
    stepCount: 4,
    code: `// Deploy a reserve with 10 ERG, 100 ERG credit limit
const reserveBox = new OutputBuilder(
  10_000_000_000n, // 10 ERG collateral
  RESERVE_CONTRACT_ADDRESS
)
  .setAdditionalRegisters({
    R4: SLong(100_000_000_000n), // 100 ERG credit limit
    R5: SLong(0n),               // issued so far
    R6: SGroupElement(ownerKey), // reserve controller
  })

// Issue a note against the reserve
const noteBox = new OutputBuilder(
  1_000_000_000n, // 1 ERG face value
  NOTE_CONTRACT_ADDRESS
)
  .setAdditionalRegisters({
    R4: SGroupElement(agentKey),  // holder
    R5: SColl(SByte, reserveId),  // backing reserve
  })`,
  },
  {
    id: "community",
    tKey: "community" as const,
    stepCount: 4,
    code: `// Community reserve: multiple funders
const communityReserve = new OutputBuilder(
  TOTAL_POOLED_ERG,
  MULTISIG_RESERVE_CONTRACT
)
  .setAdditionalRegisters({
    R4: SColl(SGroupElement, memberKeys), // governance
    R5: SInt(3),                          // 3-of-5 threshold
    R6: SColl(SByte, communityTokenId),   // community token
  })

// Acceptance predicate: only members of community
const memberPredicate = \`{
  val isMember = CONTEXT.dataInputs(0)
    .R4[Coll[GroupElement]].get
    .exists(pk => proveDlog(pk))
  sigmaProp(isMember)
}\``,
  },
]

// ── SDKs & Tools ────────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: "Fleet SDK",
    lang: "TypeScript / JS",
    tKey: "fleetSdk" as const,
    url: "https://fleet-sdk.github.io/docs/",
    github: "https://github.com/fleet-sdk/fleet",
    recommended: true,
  },
  {
    name: "sigma-rust",
    lang: "Rust",
    tKey: "sigmaRust" as const,
    url: "https://github.com/ergoplatform/sigma-rust",
    github: "https://github.com/ergoplatform/sigma-rust",
    recommended: false,
  },
  {
    name: "AppKit",
    lang: "JVM (Scala / Java)",
    tKey: "appKit" as const,
    url: "https://github.com/ergoplatform/ergo-appkit",
    github: "https://github.com/ergoplatform/ergo-appkit",
    recommended: false,
  },
  {
    name: "Ergo Node API",
    lang: "REST / OpenAPI",
    tKey: "ergoNodeApi" as const,
    url: "https://api.ergoplatform.com/api/v1/docs/",
    github: "https://github.com/ergoplatform/ergo",
    recommended: false,
  },
]

// ── What's live today ────────────────────────────────────────────────────────
const STATUS_ITEMS = [
  { tKey: "ergoTestnetFaucet" as const, status: "live", url: "https://testnet.ergofaucet.org/" },
  { tKey: "fleetSdk" as const, status: "live", url: "https://fleet-sdk.github.io/docs/" },
  { tKey: "appKit" as const, status: "live", url: "https://github.com/ergoplatform/ergo-appkit" },
  { tKey: "sigmaRust" as const, status: "live", url: "https://github.com/ergoplatform/sigma-rust" },
  { tKey: "chainCash" as const, status: "live", url: "https://github.com/kushti/chaincash" },
  { tKey: "ergoNodeApi" as const, status: "live", url: "https://api.ergoplatform.com/api/v1/docs/" },
  { tKey: "starterRepo" as const, status: "soon", url: "#" },
  { tKey: "identityLayer" as const, status: "open", url: "#" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06 },
  }),
}

export function AgentPaymentsClient() {
  const t = useTranslations('buildPage')
  return (
    <BackgroundWrapper>
      <main className="min-h-screen bg-black text-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <Breadcrumbs
              items={[
                { name: t('breadcrumbs.agentEconomy'), href: "/agent-economy" },
                { name: t('breadcrumbs.agentPayments'), href: "/build/agent-payments" },
              ]}
              className="mb-10 opacity-70"
            />

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  {t('hero.tag')}
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight mb-6 text-white"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 60px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.0,
                }}
              >
                {t('hero.titleStart')}
                <span style={{ color: BRAND }}>{t('hero.titleHighlight')}</span>
              </h1>

              <p
                className="text-neutral-300 mb-10"
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.5,
                  maxWidth: "60ch",
                }}
              >
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="https://github.com/kushti/chaincash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('hero.ctaChainCash')}</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="https://github.com/bez111/ergo-agent-economy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('hero.ctaCodeExamples')}</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/demos"
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                  >
                    <span>{t('hero.ctaLiveDemos')}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 Primitives ─────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                {t('primitives.sectionLabel')}
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {t('primitives.heading')}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {PRIMITIVES.map((p, i) => (
                <motion.div
                  key={p.id}
                  id={p.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/30 transition-all duration-300">
                    <CardContent className="p-7">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <p.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg leading-tight">{t(`primitives.${p.tKey}.title`)}</h3>
                          <p className="text-orange-400/70 font-mono text-xs">{t(`primitives.${p.tKey}.subtitle`)}</p>
                        </div>
                      </div>

                      <p className="text-neutral-400 text-sm leading-relaxed mb-5">{t(`primitives.${p.tKey}.description`)}</p>

                      {/* Properties */}
                      <ul className="space-y-1.5 mb-5">
                        {(t.raw(`primitives.${p.tKey}.properties`) as string[]).map((prop) => (
                          <li key={prop} className="flex items-center gap-2 text-xs text-neutral-300">
                            <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                            {prop}
                          </li>
                        ))}
                      </ul>

                      {/* ErgoScript code block */}
                      <div className="rounded-2xl bg-neutral-950 border border-white/8 overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8">
                          <Terminal className="w-3.5 h-3.5 text-orange-400" />
                          <span className="text-neutral-500 font-mono text-xs">ErgoScript</span>
                        </div>
                        <pre className="px-4 py-4 text-xs text-neutral-300 font-mono leading-relaxed overflow-x-auto">
                          <code>{p.ergoScript}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 Flows ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                {t('flows.sectionLabel')}
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {t('flows.heading')}
              </h2>
            </div>

            <div className="space-y-8">
              {FLOW_DATA.map((flow, fi) => (
                <motion.div
                  key={flow.id}
                  id={flow.id}
                  custom={fi}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">

                        {/* Left: description + steps */}
                        <div>
                          <h3
                            className="font-bold text-white mb-2"
                            style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
                          >
                            {t(`flows.${flow.tKey}.title`)}
                          </h3>
                          <p className="text-neutral-400 text-sm mb-7">{t(`flows.${flow.tKey}.description`)}</p>

                          <ol className="space-y-4">
                            {(t.raw(`flows.${flow.tKey}.steps`) as { label: string; detail: string }[]).map((step, si) => (
                              <li key={si} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-orange-400 font-mono text-xs font-bold">
                                    {si + 1}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-white text-sm font-semibold">{step.label}</p>
                                  <p className="text-neutral-500 text-xs mt-0.5">{step.detail}</p>
                                </div>
                              </li>
                            ))}
                          </ol>

                          <div className="mt-7">
                            <Link
                              href="/demos"
                              className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-mono text-xs transition-colors group"
                            >
                              <span>{t('flows.seeLiveDemo')}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>

                        {/* Right: code */}
                        <div className="rounded-2xl bg-neutral-950 border border-white/8 overflow-hidden">
                          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8">
                            <Code2 className="w-3.5 h-3.5 text-orange-400" />
                            <span className="text-neutral-500 font-mono text-xs">Fleet SDK (TypeScript)</span>
                          </div>
                          <pre className="px-4 py-4 text-xs text-neutral-300 font-mono leading-relaxed overflow-x-auto">
                            <code>{flow.code}</code>
                          </pre>
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SDKs ─────────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                {t('sdks.sectionLabel')}
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {t('sdks.heading')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-3xl"
                  >
                    <Card className="h-full bg-black/80 border border-white/8 rounded-3xl group-hover:border-orange-500/40 group-hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-bold text-white text-base">{tool.name}</p>
                            <p className="text-orange-400/70 font-mono text-xs">{tool.lang}</p>
                          </div>
                          {tool.recommended && (
                            <span className="text-xs font-mono text-orange-400 border border-orange-500/30 bg-orange-500/10 rounded-full px-2 py-0.5">
                              {t('sdks.recommended')}
                            </span>
                          )}
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">{t(`sdks.${tool.tKey}.desc`)}</p>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1 text-neutral-500 group-hover:text-orange-400 font-mono text-xs transition-colors">
                            <span>{t('sdks.docs')}</span>
                            <ExternalLink className="w-3 h-3" />
                          </span>
                          <a
                            href={tool.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-neutral-500 hover:text-white font-mono text-xs transition-colors"
                          >
                            <Github className="w-3 h-3" />
                            <span>GitHub</span>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Status ───────────────────────────────────────────────────────── */}
        <section className="py-24 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-start">

              <div>
                <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                  {t('status.sectionLabel')}
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white mb-6"
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {t('status.heading')}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8" style={{ maxWidth: "48ch" }}>
                  {t('status.description')}
                </p>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-neutral-300">{t('status.legendLive')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Circle className="w-4 h-4 text-yellow-500/70 flex-shrink-0" />
                    <span className="text-neutral-300">{t('status.legendSoon')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GitBranch className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                    <span className="text-neutral-300">{t('status.legendOpen')}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {STATUS_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.tKey}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`
                      flex items-center justify-between gap-4 rounded-2xl border px-5 py-3.5 transition-all
                      ${item.status === "live"
                        ? "bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40"
                        : item.status === "soon"
                        ? "bg-yellow-500/5 border-yellow-500/15 opacity-70"
                        : "bg-neutral-900/30 border-white/6 opacity-50"
                      }
                    `}
                  >
                    <span className="text-white text-sm font-medium">{t(`status.${item.tKey}`)}</span>
                    <div className="flex items-center gap-2">
                      {item.status === "live" && item.url !== "#" ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-mono text-xs transition-colors"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>{t('status.live')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : item.status === "live" ? (
                        <span className="inline-flex items-center gap-1 text-orange-400 font-mono text-xs">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>{t('status.live')}</span>
                        </span>
                      ) : item.status === "soon" ? (
                        <span className="text-yellow-500/70 font-mono text-xs">{t('status.soon')}</span>
                      ) : (
                        <span className="text-neutral-500 font-mono text-xs">{t('status.open')}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Links ────────────────────────────────────────────────────────── */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: BookOpen,
                  tKey: "ergoDocs" as const,
                  href: "https://docs.ergoplatform.com/",
                  external: true,
                },
                {
                  icon: Layers,
                  tKey: "devPatterns" as const,
                  href: "/patterns",
                  external: false,
                },
                {
                  icon: Coins,
                  tKey: "babelFees" as const,
                  href: "/technology/babel-fees",
                  external: false,
                },
              ].map((link, i) => (
                <motion.div key={link.tKey} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="group block focus:outline-none rounded-2xl">
                      <Card className="bg-black/80 border border-white/8 rounded-2xl group-hover:border-orange-500/30 group-hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                        <CardContent className="p-5 flex items-center gap-4">
                          <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                            <link.icon className="w-4 h-4 text-orange-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm group-hover:text-orange-100 transition-colors">{t(`links.${link.tKey}.title`)}</p>
                            <p className="text-neutral-500 text-xs">{t(`links.${link.tKey}.desc`)}</p>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-orange-400 ml-auto transition-colors" />
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Link href={link.href} className="group block focus:outline-none rounded-2xl">
                      <Card className="bg-black/80 border border-white/8 rounded-2xl group-hover:border-orange-500/30 group-hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                        <CardContent className="p-5 flex items-center gap-4">
                          <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                            <link.icon className="w-4 h-4 text-orange-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm group-hover:text-orange-100 transition-colors">{t(`links.${link.tKey}.title`)}</p>
                            <p className="text-neutral-500 text-xs">{t(`links.${link.tKey}.desc`)}</p>
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

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <FinalCTASimple
          title={t('cta.title')}
          description={t('cta.description')}
        />

      </main>
    </BackgroundWrapper>
  )
}
