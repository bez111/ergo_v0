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
  ShieldCheck,
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
    latest_full_receipt_id: string | null
    sage_wallet_event_count: number
    sage_settlement_count: number
  }
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
  "mcp-fly": Network,
  "mcp-dns": Globe2,
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
                  Ergo Agent Economy
                  <span className="block text-orange-400">Live Hub</span>
                </h1>
                <p className="mt-7 max-w-3xl text-neutral-300 leading-relaxed text-lg">
                  One operational board for Sage paid turns, receipt storage,
                  Accord, MCP, the npm widget, and the ErgoScript playground.
                  The page tracks what is live, what is blocked, and what must
                  happen before the stack can claim a protocol pass.
                </p>
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
                  <MiniStat label="Live gates" value={status ? `${status.summary.gates_live}/${status.summary.gates_total}` : "..." } />
                  <MiniStat label="Full receipt" value={status?.summary.latest_full_receipt_id ? "found" : "needed"} />
                  <MiniStat label="Sage events" value={String(status?.summary.sage_wallet_event_count ?? "...")} />
                  <MiniStat label="MCP DNS" value={gateStateLabel(gates.find((gate) => gate.id === "mcp-dns")?.state)} />
                </div>
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
                        Mainnet language stays locked. The next unlock is a
                        post-Blob paid Sage receipt, then conformance evidence.
                      </p>
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
                    href="/build/agent-payments"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-200 hover:text-orange-100"
                  >
                    Architecture
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-4">
              <ProofTile icon={ReceiptText} label="Receipt source" value={status?.summary.storage_configured ? "Blob live" : "Not configured"} />
              <ProofTile icon={CheckCircle2} label="Conformance" value={status?.summary.latest_full_receipt_id ? "Ready to run" : "Blocked"} />
              <ProofTile icon={Network} label="MCP" value={gateStateLabel(gates.find((gate) => gate.id === "mcp-fly")?.state)} />
              <ProofTile icon={WalletCards} label="Mainnet gate" value={status?.posture.mainnet_ready ? "Open" : "Closed"} />
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

function gateStateLabel(state?: GateState) {
  if (!state) return "..."
  if (state === "live") return "live"
  if (state === "pending") return "pending"
  if (state === "blocked") return "blocked"
  return "degraded"
}

function fallbackActions() {
  return [
    {
      id: "mcp-dns",
      label: "Point mcp.ergoblockchain.org at Fly",
      owner: "dns",
      blocked_by_external: true,
    },
    {
      id: "post-blob-paid-flow",
      label: "Run one new paid Sage flow to create a full receipt bundle",
      owner: "wallet",
      blocked_by_external: true,
    },
    {
      id: "accord-conformance",
      label: "Run conformance and publish signed evidence",
      owner: "repo",
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
    "mcp-fly",
    "mcp-dns",
  ].map((id) => ({
    id,
    label: "Loading gate",
    state: "degraded" as const,
    detail: "Checking live status...",
    href: "#",
  }))
}
