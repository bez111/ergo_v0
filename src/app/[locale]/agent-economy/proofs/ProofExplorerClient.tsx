"use client"

import { useEffect, useMemo, useState } from "react"
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileJson2,
  GitBranch,
  Globe2,
  LockKeyhole,
  PackageCheck,
  Radio,
  ReceiptText,
  ShieldCheck,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"

type ProofState = "live" | "pending" | "blocked" | "degraded"

interface ProofRecord {
  id: string
  kind:
    | "receipt_bundle"
    | "conformance_evidence"
    | "mcp_endpoint"
    | "widget_package"
    | "mainnet_gate"
    | "activity_event"
  title: string
  state: ProofState
  status: string
  description: string
  updated_at: string | null
  primary_url: string
  api_url?: string
  explorer_url?: string | null
  identifiers: Record<string, string | null>
  checks: Array<{
    label: string
    state: ProofState
    value: string
  }>
}

interface ProofExplorerResponse {
  ok: boolean
  generated_at: string
  posture: {
    label: string
    mainnet_ready: boolean
    note: string
  }
  summary: {
    proof_count: number
    live_count: number
    full_receipt_count: number
    chain_only_receipt_count: number
    latest_full_receipt_id: string | null
    gates_live: number | null
    gates_total: number | null
    mainnet_gate_status: string
  }
  surfaces: {
    human_page: string
    machine_api: string
    schema?: string
    live_hub: string
    launch_kit: string
  }
  verify_steps?: VerifyStepRecord[]
  proofs: ProofRecord[]
}

interface VerifyStepRecord {
  id: string
  label: string
  command: string
  expect: string
  url: string
}

const STATE_STYLE: Record<ProofState, string> = {
  live: "border-orange-500/35 bg-orange-500/10 text-orange-100",
  pending: "border-yellow-500/35 bg-yellow-500/10 text-yellow-100",
  blocked: "border-red-500/35 bg-red-500/10 text-red-100",
  degraded: "border-white/15 bg-white/[0.04] text-neutral-300",
}

const STATE_DOT: Record<ProofState, string> = {
  live: "bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.8)]",
  pending: "bg-yellow-300 shadow-[0_0_18px_rgba(253,224,71,0.45)]",
  blocked: "bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.45)]",
  degraded: "bg-neutral-400",
}

const KIND_ICON: Record<ProofRecord["kind"], typeof Bot> = {
  receipt_bundle: ReceiptText,
  conformance_evidence: ShieldCheck,
  mcp_endpoint: Globe2,
  widget_package: PackageCheck,
  mainnet_gate: LockKeyhole,
  activity_event: Radio,
}

const KIND_LABEL: Record<ProofRecord["kind"], string> = {
  receipt_bundle: "Receipt",
  conformance_evidence: "Conformance",
  mcp_endpoint: "MCP",
  widget_package: "Package",
  mainnet_gate: "Gate",
  activity_event: "Activity",
}

const FILTERS: Array<{ label: string; value: "all" | ProofRecord["kind"] }> = [
  { label: "All", value: "all" },
  { label: "Receipts", value: "receipt_bundle" },
  { label: "Conformance", value: "conformance_evidence" },
  { label: "MCP", value: "mcp_endpoint" },
  { label: "Widget", value: "widget_package" },
  { label: "Gate", value: "mainnet_gate" },
]

const FALLBACK_VERIFY_STEPS: VerifyStepRecord[] = [
  {
    id: "proof-board",
    label: "Proof board",
    url: "https://www.ergoblockchain.org/api/agent-economy/proofs",
    command: "curl -sS https://www.ergoblockchain.org/api/agent-economy/proofs",
    expect: "ok=true, posture.mainnet_ready=false, proofs[] with receipts, MCP, widget, and gate records.",
  },
  {
    id: "receipt-source",
    label: "Receipt source",
    url: "https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
    command:
      "curl -sS https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
    expect: "One receipt API returns the chain proof plus Accord receipt fields when durable storage exists.",
  },
  {
    id: "mcp-health",
    label: "MCP endpoint",
    url: "https://mcp.ergoblockchain.org/health",
    command: "curl -sS https://mcp.ergoblockchain.org/health",
    expect: "Public machine endpoint reports ok=true for health probes.",
  },
  {
    id: "schema-contract",
    label: "Schema contract",
    url: "https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
    command: "curl -sS https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
    expect: "JSON Schema binds the API shape and keeps mainnet_ready=false until the audit gate opens.",
  },
]

export function ProofExplorerClient({
  initialData = null,
}: {
  initialData?: ProofExplorerResponse | null
}) {
  const [data, setData] = useState<ProofExplorerResponse | null>(initialData)
  const [filter, setFilter] = useState<"all" | ProofRecord["kind"]>("all")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch("/api/agent-economy/proofs", { cache: "no-store" })
        const body = await res.json() as ProofExplorerResponse
        if (!res.ok || body.ok !== true) throw new Error(`proof explorer ${res.status}`)
        if (!cancelled) {
          setData((current) => shouldUseProofUpdate(current, body) ? body : current)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "proof explorer unavailable")
      }
    }

    load()
    const id = setInterval(load, 60_000)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  const proofs = useMemo(() => {
    const list = data?.proofs ?? []
    if (filter === "all") return list
    return list.filter((proof) => proof.kind === filter)
  }, [data?.proofs, filter])

  const topReceipts = (data?.proofs ?? []).filter((proof) => proof.kind === "receipt_bundle").slice(0, 3)
  const verifySteps = data?.verify_steps?.length ? data.verify_steps : FALLBACK_VERIFY_STEPS

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <ProofExplorerJsonLd data={data} />

        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl min-w-0">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Proof Explorer", href: "/agent-economy/proofs" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_410px] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <ReceiptText className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Public proof explorer
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Receipts, endpoints, and gates a developer can verify.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This is the inspectable surface behind the Agent Economy story:
                  full Sage receipt bundles, signed Accord evidence, MCP health,
                  the embeddable widget, recent wallet activity, and the closed
                  mainnet gate.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/api/agent-economy/proofs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    JSON proof API
                    <FileJson2 className="h-4 w-4" />
                  </a>
                  <a
                    href="/api/agent-economy/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Discovery API
                    <FileJson2 className="h-4 w-4" />
                  </a>
                  <a
                    href="/agent-economy/openapi.v0.json"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    OpenAPI
                    <FileJson2 className="h-4 w-4" />
                  </a>
                  <Link
                    href="/agent-economy/live"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Live hub
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/launch-kit"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Launch kit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-white/12 bg-neutral-950/90 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.52)] backdrop-blur-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Proof posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {data?.posture.label.replace(/_/g, " ") ?? "testnet live proof"}
                    </div>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {data?.posture.note ?? "Collecting public proof records from live endpoints."}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Proofs" value={data ? String(data.summary.proof_count) : "..."} />
                  <Metric label="Live" value={data ? String(data.summary.live_count) : "..."} />
                  <Metric label="Full receipts" value={data ? String(data.summary.full_receipt_count) : "..."} />
                  <Metric label="Mainnet" value={data?.summary.mainnet_gate_status ?? "closed"} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1fr_1fr_1fr]">
            <SurfaceCard
              icon={CheckCircle2}
              title="Single source of truth"
              body="Receipt facts live in /api/sage/receipt/<id>; pages render that API instead of inventing a second copy."
              href="/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"
            />
            <SurfaceCard
              icon={GitBranch}
              title="Signed conformance"
              body="Sage L1 evidence is published as an inspectable artifact and linked from the proof surface."
              href="/evidence/sage/latest-evidence.json"
            />
            <SurfaceCard
              icon={AlertTriangle}
              title="Mainnet remains closed"
              body="The explorer shows live testnet proof while keeping audit and mainnet language explicitly gated."
              href="/agent-economy/trust"
            />
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl min-w-0 gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="min-w-0">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                <Code2 className="h-5 w-5 text-orange-300" />
              </div>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                Verify this yourself
              </div>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Four probes, no trust required.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                The human page is only a reader. The useful contract is the
                public JSON surface: proof board, receipt API, MCP health, and
                schema. These commands are intentionally boring so wallets,
                agents, docs, and reviewers can automate them.
              </p>
            </div>
            <div className="grid min-w-0 gap-3">
              {verifySteps.map((step, index) => (
                <VerifyStep key={step.id} index={index + 1} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/80 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Evidence records
                </div>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Inspect the current proof set.
                </h2>
              </div>
              <div className="flex min-w-0 max-w-full gap-2 overflow-x-auto pb-1">
                {FILTERS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setFilter(item.value)}
                    className={`shrink-0 rounded-md border px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                      filter === item.value
                        ? "border-orange-500 bg-orange-500 text-black"
                        : "border-white/10 bg-black/60 text-neutral-300 hover:border-orange-500/40 hover:bg-black/75 hover:text-orange-200"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {error ? (
              <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                {error}
              </div>
            ) : null}

            <div className="mt-8 grid min-w-0 gap-4 lg:grid-cols-2">
              {(proofs.length > 0 ? proofs : skeletonProofs()).map((proof) => (
                <ProofCard key={proof.id} proof={proof} loading={!data} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/55 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                Receipt shortlist
              </div>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Start with the receipts.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                A developer should be able to open a receipt, follow its Note,
                compare task hash, inspect Accord JSON, and then return to the
                live cockpit.
              </p>
            </div>
            <div className="grid gap-3">
              {(topReceipts.length > 0 ? topReceipts : skeletonProofs().slice(0, 2)).map((proof) => (
                <CompactReceipt key={`receipt-${proof.id}`} proof={proof} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function shouldUseProofUpdate(
  current: ProofExplorerResponse | null,
  incoming: ProofExplorerResponse,
) {
  if (!current) return true

  const currentFullReceipts = current.summary.full_receipt_count ?? 0
  const incomingFullReceipts = incoming.summary.full_receipt_count ?? 0
  if (currentFullReceipts > 0 && incomingFullReceipts === 0) return false

  const currentLatestReceipt = current.summary.latest_full_receipt_id
  const incomingLatestReceipt = incoming.summary.latest_full_receipt_id
  if (currentLatestReceipt && !incomingLatestReceipt) return false

  const currentLive = current.summary.live_count ?? 0
  const incomingLive = incoming.summary.live_count ?? 0
  if (currentLive >= 8 && incomingLive < currentLive - 2) return false

  return true
}

function VerifyStep({
  index,
  label,
  command,
  expect,
}: {
  index: number
  label: string
  command: string
  expect: string
}) {
  return (
    <div className="min-w-0 rounded-lg border border-white/12 bg-neutral-950/90 p-4 shadow-[0_18px_54px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10 font-mono text-xs font-semibold text-orange-200">
          {index}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            {label}
          </div>
          <pre className="mt-2 max-w-full overflow-x-auto rounded-md border border-white/10 bg-black/65 p-3 text-xs leading-relaxed text-orange-100">
            <code className="block w-max max-w-none">{command}</code>
          </pre>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {expect}
          </p>
        </div>
      </div>
    </div>
  )
}

function ProofCard({ proof, loading }: { proof: ProofRecord; loading: boolean }) {
  const Icon = KIND_ICON[proof.kind]
  return (
    <article className={`min-w-0 overflow-hidden rounded-lg border border-white/12 bg-[#030303]/95 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.72)] backdrop-blur-md ${loading ? "animate-pulse" : ""}`}>
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
            <Icon className="h-5 w-5 text-orange-300" />
          </div>
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              {KIND_LABEL[proof.kind]}
            </div>
            <h3 className="mt-1 break-words text-lg font-semibold text-white">{proof.title}</h3>
          </div>
        </div>
        <span className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${STATE_STYLE[proof.state]}`}>
          <span className={`h-2 w-2 rounded-full ${STATE_DOT[proof.state]}`} />
          {proof.state}
        </span>
      </div>

      <p className="mt-4 min-h-[58px] break-words text-sm leading-relaxed text-neutral-400">
        {proof.description}
      </p>

      <div className="mt-5 grid min-w-0 gap-2 sm:grid-cols-2">
        {proof.checks.slice(0, 4).map((check) => (
          <div key={`${proof.id}-${check.label}`} className="min-w-0 rounded-md border border-white/10 bg-black/85 p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 truncate font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                {check.label}
              </span>
              <span className={`h-2 w-2 rounded-full ${STATE_DOT[check.state]}`} />
            </div>
            <div className="mt-2 break-all font-mono text-xs text-neutral-300" title={check.value}>
              {check.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <ProofLink href={proof.primary_url} label="Open" />
        {proof.api_url ? <ProofLink href={proof.api_url} label="JSON" /> : null}
        {proof.explorer_url ? <ProofLink href={proof.explorer_url} label="Explorer" /> : null}
      </div>
    </article>
  )
}

function CompactReceipt({ proof }: { proof: ProofRecord }) {
  const receiptId = proof.identifiers.receipt_id ?? proof.id
  return (
    <div className="rounded-lg border border-white/12 bg-neutral-950/90 p-4 shadow-[0_18px_54px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            {proof.status}
          </div>
          <div className="mt-1 break-all font-mono text-sm text-orange-100">
            {shortId(receiptId)}
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <ProofLink href={proof.primary_url} label="Receipt" />
          {proof.api_url ? <ProofLink href={proof.api_url} label="API" /> : null}
        </div>
      </div>
    </div>
  )
}

function SurfaceCard({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: typeof Bot
  title: string
  body: string
  href: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") || href.startsWith("/api") || href.includes(".json") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group rounded-lg border border-white/12 bg-neutral-950/90 p-5 shadow-[0_18px_54px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:border-orange-500/35 hover:bg-neutral-950"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
          <Icon className="h-5 w-5 text-orange-300" />
        </div>
        <ExternalLink className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-orange-300" />
      </div>
      <h2 className="mt-5 text-lg font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{body}</p>
    </a>
  )
}

function ProofLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      target={external || href.startsWith("/api") || href.includes(".json") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-md border border-orange-500/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-orange-300 transition hover:border-orange-500/50 hover:bg-orange-500/10"
    >
      {label}
      {external || href.startsWith("/api") || href.includes(".json") ? (
        <ExternalLink className="h-3 w-3" />
      ) : (
        <ArrowRight className="h-3 w-3" />
      )}
    </a>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/65 px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 truncate font-mono text-lg font-semibold text-orange-100">{value}</div>
    </div>
  )
}

function ProofExplorerJsonLd({ data }: { data: ProofExplorerResponse | null }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Ergo Agent Economy Proof Explorer",
    description:
      "Machine-readable proof explorer for Ergo testnet agent economy receipts, conformance evidence, MCP health, widget package state, and audit gate status.",
    url: "https://www.ergoblockchain.org/agent-economy/proofs",
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "application/json",
      contentUrl: "https://www.ergoblockchain.org/api/agent-economy/proofs",
    },
    measurementTechnique: "public API probes and receipt bundle inspection",
    dateModified: data?.generated_at,
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}

function skeletonProofs(): ProofRecord[] {
  return [
    "Full Sage receipt bundle",
    "Signed Sage Accord conformance",
    "Public MCP endpoint",
    "Sage embeddable widget package",
  ].map((title, index) => ({
    id: `skeleton-${index}`,
    kind: index === 0 ? "receipt_bundle" : index === 1 ? "conformance_evidence" : index === 2 ? "mcp_endpoint" : "widget_package",
    title,
    state: "degraded",
    status: "refreshing",
    description: "Refreshing proof record from public endpoints.",
    updated_at: null,
    primary_url: "/api/agent-economy/proofs",
    identifiers: {},
    checks: [
      {
        label: "Probe",
        state: "degraded",
        value: "refreshing",
      },
    ],
  }))
}

function shortId(id: string) {
  return id.length > 20 ? `${id.slice(0, 10)}...${id.slice(-8)}` : id
}
