"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  CircuitBoard,
  Code2,
  ExternalLink,
  GitBranch,
  Globe2,
  Network,
  Radio,
  ReceiptText,
  Rocket,
  ShieldCheck,
  SlidersHorizontal,
  WalletCards,
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { SageActivityFeed } from "@/components/sage/SageActivityFeed"

type GateState = "live" | "pending" | "blocked" | "degraded"

interface LiveGate {
  id: string
  label: string
  state: GateState
  detail: string
  href: string
}

interface LiveStatusResponse {
  ok: boolean
  generated_at: string
  took_ms: number
  posture: {
    label: string
    mainnet_ready: boolean
    note: string
  }
  summary: {
    gates_live: number
    gates_total: number
    storage_configured: boolean
    receipt_storage_healthy?: boolean
    latest_full_receipt_id: string | null
    accord_conformance_level?: string | null
    accord_conformance_evidence?: string | null
    accord_registry_merged?: boolean
    sage_widget_npm_version?: string | null
    sage_widget_npm_published?: boolean
    sage_wallet_event_count: number
    sage_settlement_count: number
    sage_signer_status?: string
    mainnet_gate_status?: string
    review_pack_published?: boolean
    wallet_agent_spec_published?: boolean
    wallet_agent_policy_check_published?: boolean
    wallet_agent_reference_flow_published?: boolean
    wallet_agent_policy_playground_published?: boolean
    developer_launch_kit_published?: boolean
  }
  mainnet_gate?: {
    status: string
    public_claim?: string
    blockers?: Array<{
      id: string
      label: string
      state: string
      owner: string
      detail: string
    }>
    required_artifacts?: string[]
  }
  lifecycle?: Array<{
    id: string
    label: string
    state: GateState
    detail: string
    evidence_href: string
  }>
  gates: LiveGate[]
  next_actions: Array<{
    id: string
    label: string
    owner: string
    blocked_by_external: boolean
  }>
}

const REFRESH_MS = 60_000

const GATE_ICONS: Record<string, typeof Bot> = {
  "sage-activity": Bot,
  "receipt-storage": ReceiptText,
  "full-receipt-bundle": ShieldCheck,
  "accord-bridge": GitBranch,
  "accord-conformance": CheckCircle2,
  "accord-registry": GitBranch,
  "sage-signer": ShieldCheck,
  "sage-widget": CircuitBoard,
  "developer-launch-kit": Rocket,
  "wallet-agent-spec": WalletCards,
  "wallet-agent-policy": ShieldCheck,
  "wallet-agent-reference-flow": GitBranch,
  "wallet-agent-policy-playground": SlidersHorizontal,
  "mcp-fly": Network,
  "mcp-dns": Globe2,
  "mainnet-audit-gate": AlertTriangle,
  "audit-review-pack": ShieldCheck,
  playground: Code2,
}

const STATE_STYLE: Record<GateState, string> = {
  live: "border-orange-500/35 bg-orange-500/10 text-orange-200",
  pending: "border-yellow-500/35 bg-yellow-500/10 text-yellow-100",
  blocked: "border-red-500/35 bg-red-500/10 text-red-100",
  degraded: "border-white/15 bg-white/[0.04] text-neutral-300",
}

const STATE_DOT: Record<GateState, string> = {
  live: "bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.8)]",
  pending: "bg-yellow-300 shadow-[0_0_18px_rgba(253,224,71,0.45)]",
  blocked: "bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.45)]",
  degraded: "bg-neutral-400",
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
}

export function AgentEconomyLiveClient() {
  const [status, setStatus] = useState<LiveStatusResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch("/api/agent-economy/live", { cache: "no-store" })
        const body = await res.json() as LiveStatusResponse
        if (!res.ok || body.ok !== true) throw new Error(`live status ${res.status}`)
        if (!cancelled) {
          setStatus(body)
          setError(null)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "live status unavailable")
          setLoading(false)
        }
      }
    }

    load()
    const id = setInterval(load, REFRESH_MS)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  const gates = status?.gates ?? []
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden pt-28 pb-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Live Hub", href: "/agent-economy/live" },
              ]}
              className="mb-10 opacity-70"
            />

            <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-14 items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 mb-7">
                  <Radio className="w-3.5 h-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Live proof layer
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.96] text-white">
                  Ergo Agent Economy{" "}
                  <span className="block text-orange-400">Live Hub</span>
                </h1>
                <p className="mt-7 max-w-3xl text-neutral-300 leading-relaxed text-lg">
                  One operational board for Sage paid turns, receipt storage,
                  Accord, MCP, the npm widget, and the ErgoScript playground.
                  The page tracks what is live, what is blocked, and what must
                  happen before the stack can claim a protocol pass.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/build/agent-payments/quickstart"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Build first flow
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/launch-kit"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Launch kit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/sage-widget"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Widget demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/75 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Production posture
                    </div>
                    <div className="mt-1 text-xl font-semibold text-white">
                      Testnet live proof
                    </div>
                  </div>
                  <ShieldCheck className="w-9 h-9 text-orange-300" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <MiniStat label="Live gates" value={status ? `${status.summary.gates_live}/${status.summary.gates_total}` : "pending"} />
                  <MiniStat label="Full receipt" value={status?.summary.latest_full_receipt_id ? "found" : "needed"} />
                  <MiniStat label="Sage events" value={status ? String(status.summary.sage_wallet_event_count) : "pending"} />
                  <MiniStat label="Signer" value={status?.summary.sage_signer_status ?? "pending"} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-black/65 p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Complete lifecycle
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    From agent intent to verifiable settlement
                  </h2>
                </div>
                <div className="max-w-xl text-sm leading-relaxed text-neutral-400">
                  This is the public proof path the site is turning into:
                  quote, Ergo Note, durable receipt, conformance, MCP/tooling,
                  and finally a closed mainnet gate until audit evidence exists.
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {(status?.lifecycle ?? fallbackLifecycle()).map((stage, index) => (
                  <LifecycleStageCard key={stage.id} stage={stage} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {error ? (
              <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                Live status API is not reachable: {error}
              </div>
            ) : null}

            <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6 items-start">
              <div className="grid md:grid-cols-2 gap-4">
                {(loading && gates.length === 0 ? skeletonGates() : gates).map((gate, i) => {
                  const Icon = GATE_ICONS[gate.id] ?? CircuitBoard
                  const external = gate.href.startsWith("http")
                  return (
                    <motion.a
                      key={gate.id}
                      href={gate.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className="group min-h-[206px] rounded-2xl border border-white/10 bg-black/70 p-5 transition-all hover:border-orange-500/40 hover:bg-orange-500/[0.035]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10">
                            <Icon className="h-5 w-5 text-orange-300" />
                          </div>
                          <span className={`h-2.5 w-2.5 rounded-full ${STATE_DOT[gate.state]}`} />
                        </div>
                        <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${STATE_STYLE[gate.state]}`}>
                          {gate.state}
                        </span>
                      </div>
                      <h2 className="mt-5 text-lg font-bold text-white group-hover:text-orange-100">
                        {gate.label}
                      </h2>
                      <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-neutral-400">
                        {gate.detail}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-300">
                        Inspect
                        {external ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              <aside className="lg:sticky lg:top-24 space-y-4">
                <div className="rounded-2xl border border-yellow-500/25 bg-yellow-500/[0.05] p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-200" />
                    <div>
                      <h2 className="font-semibold text-yellow-50">Protocol pass runway</h2>
                      <p className="mt-2 text-sm leading-relaxed text-yellow-50/75">
                        Full receipt and signed L1 evidence are live. The next
                        unlock is an audit-bound mainnet script identity plus
                        an external review artifact.
                      </p>
                      <Link
                        href="/agent-economy/trust"
                        className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-yellow-100 hover:text-white"
                      >
                        Trust gate
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/agent-economy/review-pack"
                        className="ml-4 mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-yellow-100 hover:text-white"
                      >
                        Review pack
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/75 p-5">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                    Next actions
                  </h2>
                  <div className="mt-4 space-y-3">
                    {(status?.next_actions ?? fallbackActions()).map((action, index) => (
                      <div key={action.id} className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-mono text-xs text-orange-200">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{action.label}</div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                            {action.blocked_by_external ? "external gate" : "ready when prior gate clears"} · {action.owner}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-orange-500/25 bg-orange-500/[0.045] p-5">
                  <h2 className="font-semibold text-orange-100">Wallet-agent direction</h2>
                  <p className="mt-2 text-sm leading-relaxed text-orange-50/75">
                    The next thesis layer is local wallet agents: intent
                    parsing, policy limits, route discovery, transaction
                    simulation, local signing, and receipts.
                  </p>
                  <Link
                    href="/build/agent-payments/quickstart"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-200 hover:text-orange-100"
                  >
                    Quickstart
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/agent-economy/launch-kit"
                    className="ml-4 mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-200 hover:text-orange-100"
                  >
                    Launch kit
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="rounded-2xl border border-red-500/25 bg-red-500/[0.045] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-semibold text-red-50">Mainnet gate</h2>
                      <p className="mt-2 text-sm leading-relaxed text-red-50/70">
                        {status?.mainnet_gate?.public_claim ??
                          "Testnet live proof only until the required evidence is published."}
                      </p>
                      <Link
                        href="/agent-economy/trust"
                        className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-red-100 hover:text-white"
                      >
                        Evidence pack
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-red-100">
                      {status?.mainnet_gate?.status ?? "closed"}
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {(status?.mainnet_gate?.blockers ?? fallbackMainnetBlockers()).slice(0, 4).map((blocker) => (
                      <div key={blocker.id} className="border-t border-white/10 pt-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-medium text-white">{blocker.label}</div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                            {blocker.state}
                          </div>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-neutral-400">{blocker.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-4">
              <ProofTile
                icon={ReceiptText}
                label="Receipt source"
                value={
                  status
                    ? status.summary.receipt_storage_healthy
                      ? "Blob healthy"
                      : status.summary.storage_configured
                        ? "Blob failing"
                        : "Setup pending"
                    : "pending"
                }
              />
              <ProofTile
                icon={CheckCircle2}
                label="Conformance"
                value={
                  status?.summary.accord_conformance_level
                    ? `${status.summary.accord_conformance_level} live`
                    : status?.summary.latest_full_receipt_id
                      ? "Ready to run"
                      : "Blocked"
                }
              />
              <ProofTile
                icon={CircuitBoard}
                label="Widget npm"
                value={
                  status?.summary.sage_widget_npm_published
                    ? `${status.summary.sage_widget_npm_version ?? "v0.3"} live`
                    : status?.summary.sage_widget_npm_version
                      ? `${status.summary.sage_widget_npm_version} latest`
                      : "pending"
                }
              />
              <ProofTile icon={WalletCards} label="Mainnet gate" value={status?.summary.mainnet_gate_status ?? "closed"} />
            </div>
          </div>
        </section>

        <SageActivityFeed />
      </main>
    </BackgroundWrapper>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 truncate font-mono text-lg font-semibold text-orange-100">{value}</div>
    </div>
  )
}

function ProofTile({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Bot
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <Icon className="h-5 w-5 text-orange-300" />
      <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 text-xl font-semibold text-white">{value}</div>
    </div>
  )
}

function LifecycleStageCard({
  stage,
  index,
}: {
  stage: NonNullable<LiveStatusResponse["lifecycle"]>[number]
  index: number
}) {
  const external = stage.evidence_href.startsWith("http")
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] font-mono text-xs text-orange-200">
          {index + 1}
        </div>
        <span className={`rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${STATE_STYLE[stage.state]}`}>
          {stage.state}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{stage.label}</h3>
      <p className="mt-2 min-h-[54px] text-sm leading-relaxed text-neutral-400">{stage.detail}</p>
      <div className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-300">
        Evidence
        {external ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
      </div>
    </>
  )

  if (external) {
    return (
      <a
        href={stage.evidence_href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={stage.evidence_href}
      className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
    >
      {content}
    </Link>
  )
}

function gateStateLabel(state?: GateState) {
  if (!state) return "pending"
  if (state === "live") return "live"
  if (state === "pending") return "pending"
  if (state === "blocked") return "blocked"
  return "degraded"
}

function fallbackActions() {
  return [
    {
      id: "script-identity",
      label: "Publish audit-bound mainnet script identity before mainnet claims",
      owner: "audit",
      blocked_by_external: true,
    },
    {
      id: "external-audit",
      label: "Publish external audit or review artifact",
      owner: "audit",
      blocked_by_external: true,
    },
  ]
}

function skeletonGates(): LiveGate[] {
  return [
    "sage-activity",
    "receipt-storage",
    "full-receipt-bundle",
    "accord-bridge",
    "accord-conformance",
    "accord-registry",
    "sage-signer",
    "sage-widget",
    "developer-launch-kit",
    "wallet-agent-spec",
    "wallet-agent-policy",
    "wallet-agent-reference-flow",
    "wallet-agent-policy-playground",
    "mcp-fly",
    "mcp-dns",
    "playground",
    "mainnet-audit-gate",
    "audit-review-pack",
  ].map((id) => ({
    id,
    label: "Live gate",
    state: "degraded" as const,
    detail: "Awaiting first status response",
    href: "/api/agent-economy/live",
  }))
}

function fallbackLifecycle(): NonNullable<LiveStatusResponse["lifecycle"]> {
  return [
    {
      id: "intent",
      label: "Intent captured",
      state: "live",
      detail: "Sage accepts a user question and canonicalizes the task.",
      evidence_href: "/api/sage/chat",
    },
    {
      id: "quote",
      label: "Accord quote",
      state: "live",
      detail: "The provider endpoint describes payment and receipt expectations.",
      evidence_href: "/api/sage/accord",
    },
    {
      id: "note",
      label: "Ergo Note payment",
      state: "live",
      detail: "At least one testnet paid flow exists in activity.",
      evidence_href: "/api/sage/activity",
    },
    {
      id: "receipt",
      label: "Full receipt bundle",
      state: "live",
      detail: "Post-Blob full receipt bundle is settled and published.",
      evidence_href: "/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
    },
    {
      id: "conformance",
      label: "Accord conformance",
      state: "live",
      detail: "Signed Sage L1 conformance evidence is published.",
      evidence_href: "/evidence/sage/conformance-l1-2026-05-21.signed.json",
    },
    {
      id: "mcp",
      label: "MCP tool surface",
      state: "live",
      detail: "Public MCP DNS and health endpoint are live.",
      evidence_href: "https://mcp.ergoblockchain.org/health",
    },
    {
      id: "widget",
      label: "Embeddable widget",
      state: "live",
      detail: "Sage widget v0.3.0 is published for payment intents and host-owned wallet flows.",
      evidence_href: "/agent-economy/sage-widget",
    },
    {
      id: "launch-kit",
      label: "Developer launch kit",
      state: "live",
      detail: "A five-minute developer path and JSON launch manifest are published.",
      evidence_href: "/agent-economy/launch-kit",
    },
    {
      id: "mainnet",
      label: "Mainnet/audit gate",
      state: "blocked",
      detail: "Mainnet language stays closed until audit evidence exists.",
      evidence_href: "/api/agent-economy/mainnet-gate",
    },
  ]
}

function fallbackMainnetBlockers() {
  return [
    {
      id: "post-blob-full-receipt",
      label: "Post-Blob full receipt",
      state: "open",
      owner: "wallet",
      detail: "First post-Blob full receipt bundle is published.",
    },
    {
      id: "accord-conformance-signed",
      label: "Signed conformance",
      state: "open",
      owner: "repo",
      detail: "Signed Sage L1 evidence is published.",
    },
    {
      id: "exact-contract-identity",
      label: "Exact script identity",
      state: "pending",
      owner: "audit",
      detail: "Testnet observed identity is published; audit-bound mainnet identity is still required.",
    },
    {
      id: "external-audit-manifests",
      label: "Audit manifests",
      state: "pending",
      owner: "audit",
      detail: "Draft scope is published; signed external review is still required.",
    },
  ]
}
