import { NextResponse } from "next/server"
import { agentEconomyMainnetGate } from "@/lib/agent-economy/mainnet-gate"

type GateState = "live" | "pending" | "blocked" | "degraded"

interface ProbeResult<T = unknown> {
  ok: boolean
  status: number | null
  ms: number
  data: T | null
  error: string | null
}

interface SageActivityEvent {
  txId?: string
  noteBoxId?: string
  type?: string
}

interface SageActivityResponse {
  ok?: boolean
  total?: number
  events?: SageActivityEvent[]
}

interface SageReceiptResponse {
  ok?: boolean
  id?: string
  completeness?: string
  public_receipt_url?: string
}

interface SageReceiptStorageHealthResponse {
  ok?: boolean
  storage_configured?: boolean
  storage_healthy?: boolean
  writable?: boolean
  readable?: boolean
  error?: string | null
}

interface SageSignerHealthResponse {
  ok?: boolean
  configured?: boolean
  reachable?: boolean
  status?: string
  settlement_mode?: string
  version?: string | null
}

interface LifecycleStage {
  id: string
  label: string
  state: GateState
  detail: string
  evidence_href: string
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 60

const MCP_FLY_HEALTH_URL = "https://ergoblockchain-mcp.fly.dev/health"
const MCP_DNS_HEALTH_URL = "https://mcp.ergoblockchain.org/health"

export async function GET(req: Request) {
  const started = Date.now()
  const requestOrigin = new URL(req.url).origin
  const siteBaseUrl = trimSlash(process.env.AGENT_ECONOMY_LIVE_BASE_URL ?? requestOrigin)

  const [activity, storage, accord, signer, mcpFly, mcpDns, mainnetGate] = await Promise.all([
    probeJson<SageActivityResponse>(`${siteBaseUrl}/api/sage/activity?limit=8`),
    probeJson<SageReceiptStorageHealthResponse>(
      `${siteBaseUrl}/api/sage/receipt/blob-probe-2026-05-16`,
    ),
    probeJson<{ ok?: boolean; type?: string; level?: string }>(`${siteBaseUrl}/api/sage/accord`),
    probeJson<SageSignerHealthResponse>(`${siteBaseUrl}/api/sage/signer-health`),
    probeJson<{ ok?: boolean; service?: string; version?: string }>(MCP_FLY_HEALTH_URL),
    probeJson<{ ok?: boolean; service?: string }>(MCP_DNS_HEALTH_URL),
    probeJson<{ ok?: boolean; status?: string; blockers?: unknown[] }>(
      `${siteBaseUrl}/api/agent-economy/mainnet-gate`,
    ),
  ])

  const latestFullReceipt = await discoverLatestFullReceipt(siteBaseUrl, activity.data)
  const activityEvents = activity.data?.events ?? []
  const settlementCount = activityEvents.filter((event) => event.type === "settlement").length
  const storageConfigured = storage.data?.storage_configured === true
  const storageHealthy = storage.data?.ok === true && storage.data.storage_healthy === true
  const signerState = signerGateState(signer)
  const mainnetGateStatus = mainnetGate.data?.status ?? agentEconomyMainnetGate.status

  const gates = [
    gate(
      "sage-activity",
      "Sage activity",
      activity.ok && activity.data?.ok === true ? "live" : "degraded",
      activity.ok
        ? `${activity.data?.total ?? 0} wallet events, ${settlementCount} settlement rows`
        : activity.error ?? "activity endpoint unavailable",
      "/api/sage/activity",
    ),
    gate(
      "receipt-storage",
      "Receipt storage",
      storageHealthy ? "live" : "blocked",
      storageHealthy
        ? "Vercel Blob write/read probe passed for receipt bundles"
        : storage.data?.error ?? storage.error ?? "BLOB_READ_WRITE_TOKEN is not visible or Blob probe failed",
      "/api/sage/receipt/blob-probe-2026-05-16",
    ),
    gate(
      "full-receipt-bundle",
      "Full receipt bundle",
      latestFullReceipt ? "live" : "blocked",
      latestFullReceipt
        ? `Latest full bundle: ${shortId(latestFullReceipt.id)}`
        : "Needs one new paid Sage flow after Blob",
      latestFullReceipt?.public_receipt_url ?? "/api/sage/receipt/blob-probe-2026-05-16",
    ),
    gate(
      "accord-bridge",
      "Accord/402 bridge",
      accord.ok && accord.data?.ok === true ? "live" : "degraded",
      accord.ok ? `Descriptor level: ${accord.data?.level ?? "reported"}` : accord.error ?? "descriptor unavailable",
      "/api/sage/accord",
    ),
    gate(
      "accord-conformance",
      "Accord conformance",
      latestFullReceipt ? "pending" : "blocked",
      latestFullReceipt
        ? "Ready for conformance run and signed evidence"
        : "Blocked until a full receipt bundle exists",
      "/api/sage/accord",
    ),
    gate(
      "sage-signer",
      "Sage signer ops",
      signerState,
      signerDetail(signer),
      "/api/sage/signer-health",
    ),
    gate(
      "sage-widget",
      "Sage widget",
      "pending",
      "v0.2 paid widget source is in this batch; npm publish waits for the final sweep",
      "https://github.com/bez111/sage-widget",
    ),
    gate(
      "mcp-fly",
      "MCP Fly endpoint",
      mcpFly.ok && mcpFly.data?.ok === true ? "live" : "degraded",
      mcpFly.ok ? `Service ${mcpFly.data?.version ?? "0.1.0"} responding` : mcpFly.error ?? "Fly health failed",
      MCP_FLY_HEALTH_URL,
    ),
    gate(
      "mcp-dns",
      "MCP public DNS",
      mcpDns.ok && mcpDns.data?.ok === true ? "live" : "pending",
      mcpDns.ok ? "mcp.ergoblockchain.org is resolving" : "Public MCP DNS or health probe is not responding",
      MCP_DNS_HEALTH_URL,
    ),
    gate(
      "playground",
      "ErgoScript playground",
      "live",
      "Runtime live; async WASM build warning cleared",
      "/build/playground",
    ),
    gate(
      "mainnet-audit-gate",
      "Mainnet/audit gate",
      mainnetGateStatus === "open" ? "live" : "blocked",
      mainnetGateStatus === "open"
        ? "All mainnet gate artifacts are published"
        : "Closed until full receipt, conformance, script identity, and audit manifests are published",
      "/api/agent-economy/mainnet-gate",
    ),
  ]
  const lifecycle = buildLifecycle({
    accordLive: accord.ok && accord.data?.ok === true,
    settlementCount,
    storageHealthy,
    latestFullReceipt,
    mcpFlyLive: mcpFly.ok && mcpFly.data?.ok === true,
    mcpDnsLive: mcpDns.ok && mcpDns.data?.ok === true,
    mainnetGateStatus,
  })

  const body = {
    ok: true,
    type: "agent_economy.live_status.v1",
    generated_at: new Date().toISOString(),
    took_ms: Date.now() - started,
    posture: {
      label: "testnet_live_proof",
      mainnet_ready: false,
      note: "Live testnet proof. Mainnet claims remain blocked until conformance evidence, exact script identity, signed artifacts, and external audit manifests are published.",
    },
    monitor: {
      request_origin: requestOrigin,
      site_base_url: siteBaseUrl,
    },
    summary: {
      gates_live: gates.filter((item) => item.state === "live").length,
      gates_total: gates.length,
      storage_configured: storageConfigured,
      receipt_storage_healthy: storageHealthy,
      latest_full_receipt_id: latestFullReceipt?.id ?? null,
      sage_wallet_event_count: activity.data?.total ?? 0,
      sage_settlement_count: settlementCount,
      sage_signer_status: signer.data?.status ?? (signer.ok ? "unknown" : "unreachable"),
      mainnet_gate_status: mainnetGateStatus,
    },
    mainnet_gate: mainnetGate.data?.blockers ? mainnetGate.data : {
      ok: true,
      ...agentEconomyMainnetGate,
    },
    lifecycle,
    gates,
    next_actions: [
      ...(mcpDns.ok && mcpDns.data?.ok === true ? [] : [{
        id: "mcp-dns",
        label: "Restore mcp.ergoblockchain.org DNS and health",
        owner: "dns",
        blocked_by_external: true,
      }]),
      ...(latestFullReceipt ? [] : [{
        id: "post-blob-paid-flow",
        label: "Run one new paid Sage flow to create a full receipt bundle",
        owner: "wallet",
        blocked_by_external: true,
      }]),
      {
        id: "accord-conformance",
        label: latestFullReceipt
          ? "Publish signed conformance evidence for the full receipt bundle"
          : "Run conformance against the new receipt and publish signed evidence",
        owner: "repo",
        blocked_by_external: !latestFullReceipt,
      },
    ],
    probes: {
      sage_activity: publicProbe(activity),
      receipt_storage: publicProbe(storage),
      accord: publicProbe(accord),
      sage_signer: publicProbe(signer),
      mcp_fly: publicProbe(mcpFly),
      mcp_dns: publicProbe(mcpDns),
      mainnet_gate: publicProbe(mainnetGate),
    },
  }

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
    },
  })
}

function gate(id: string, label: string, state: GateState, detail: string, href: string) {
  return { id, label, state, detail, href }
}

async function discoverLatestFullReceipt(
  origin: string,
  activity: SageActivityResponse | null,
): Promise<SageReceiptResponse | null> {
  const candidates = new Set<string>()
  for (const event of activity?.events ?? []) {
    if (typeof event.txId === "string") candidates.add(event.txId)
    if (typeof event.noteBoxId === "string") candidates.add(event.noteBoxId)
  }

  const receipts = await Promise.all(
    Array.from(candidates).slice(0, 8).map((id) =>
      probeJson<SageReceiptResponse>(
        `${origin}/api/sage/receipt/${encodeURIComponent(id)}`,
        { timeoutMs: 2_500 },
      ),
    ),
  )

  const full = receipts.find(
    (receipt) => receipt.data?.ok === true && receipt.data.completeness === "full_receipt_bundle",
  )
  if (full?.data) return full.data

  return null
}

async function probeJson<T>(
  url: string,
  opts: { timeoutMs?: number } = {},
): Promise<ProbeResult<T>> {
  const started = Date.now()
  try {
    const res = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(opts.timeoutMs ?? 4_000),
    })
    const text = await res.text()
    const data = text ? JSON.parse(text) as T : null
    return {
      ok: res.ok,
      status: res.status,
      ms: Date.now() - started,
      data,
      error: res.ok ? null : `HTTP ${res.status}`,
    }
  } catch (error) {
    return {
      ok: false,
      status: null,
      ms: Date.now() - started,
      data: null,
      error: error instanceof Error ? error.message : "probe failed",
    }
  }
}

function publicProbe<T>(probe: ProbeResult<T>) {
  return {
    ok: probe.ok,
    status: probe.status,
    ms: probe.ms,
    error: probe.error,
  }
}

function shortId(id?: string) {
  if (!id) return "unknown"
  return id.length > 14 ? `${id.slice(0, 8)}...${id.slice(-6)}` : id
}

function trimSlash(value: string) {
  return value.replace(/\/+$/, "")
}

function buildLifecycle(opts: {
  accordLive: boolean
  settlementCount: number
  storageHealthy: boolean
  latestFullReceipt: SageReceiptResponse | null
  mcpFlyLive: boolean
  mcpDnsLive: boolean
  mainnetGateStatus: string
}): LifecycleStage[] {
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
      state: opts.accordLive ? "live" : "degraded",
      detail: opts.accordLive
        ? "Accord provider endpoint describes the payment challenge and receipt schema."
        : "Accord provider endpoint is not reporting cleanly.",
      evidence_href: "/api/sage/accord",
    },
    {
      id: "note",
      label: "Ergo Note payment",
      state: opts.settlementCount > 0 ? "live" : "pending",
      detail: opts.settlementCount > 0
        ? `${opts.settlementCount} settled Note flow(s) visible in activity.`
        : "Waiting for the first paid Note flow.",
      evidence_href: "/api/sage/activity",
    },
    {
      id: "receipt",
      label: "Full receipt bundle",
      state: opts.latestFullReceipt ? "live" : "blocked",
      detail: opts.latestFullReceipt
        ? `Full bundle stored for ${shortId(opts.latestFullReceipt.id)}.`
        : opts.storageHealthy
          ? "Needs one new paid Sage flow after Blob storage."
          : "Receipt storage must pass the Blob write/read probe first.",
      evidence_href: opts.latestFullReceipt?.public_receipt_url ?? "/api/sage/receipt/blob-probe-2026-05-16",
    },
    {
      id: "conformance",
      label: "Accord conformance",
      state: opts.latestFullReceipt ? "pending" : "blocked",
      detail: opts.latestFullReceipt
        ? "Ready for signed conformance artifact generation."
        : "Blocked by the missing full receipt bundle.",
      evidence_href: "/api/sage/accord",
    },
    {
      id: "mcp",
      label: "MCP tool surface",
      state: opts.mcpDnsLive ? "live" : opts.mcpFlyLive ? "pending" : "degraded",
      detail: opts.mcpDnsLive
        ? "Public MCP DNS is resolving."
        : opts.mcpFlyLive
          ? "Fly endpoint works; public DNS is the remaining gate."
          : "MCP service health is degraded.",
      evidence_href: opts.mcpDnsLive ? MCP_DNS_HEALTH_URL : MCP_FLY_HEALTH_URL,
    },
    {
      id: "widget",
      label: "Embeddable widget",
      state: "pending",
      detail: "Paid widget code is prepared locally; npm publish waits for the final sweep.",
      evidence_href: "https://github.com/bez111/sage-widget",
    },
    {
      id: "mainnet",
      label: "Mainnet/audit gate",
      state: opts.mainnetGateStatus === "open" ? "live" : "blocked",
      detail: "Mainnet language stays closed until conformance, script identity, and audit evidence are published.",
      evidence_href: "/api/agent-economy/mainnet-gate",
    },
  ]
}

function signerGateState(probe: ProbeResult<SageSignerHealthResponse>): GateState {
  if (!probe.ok) return "degraded"
  if (probe.data?.configured === false) return "pending"
  if (probe.data?.reachable === true) return "live"
  return "degraded"
}

function signerDetail(probe: ProbeResult<SageSignerHealthResponse>): string {
  if (!probe.ok) return probe.error ?? "Signer health endpoint unavailable"
  if (probe.data?.configured === false) {
    return "Verify-only mode; redemption settlement waits for SAGE_SIGNER_URL"
  }
  if (probe.data?.reachable === true) {
    return `Settlement signer reachable${probe.data.version ? ` (${probe.data.version})` : ""}`
  }
  return "Signer configured but health is not reachable; verify-only fallback should remain available"
}
