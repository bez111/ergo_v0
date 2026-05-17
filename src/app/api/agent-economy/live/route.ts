import { NextResponse } from "next/server"

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

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 60

const MCP_FLY_HEALTH_URL = "https://ergoblockchain-mcp.fly.dev/health"
const MCP_DNS_HEALTH_URL = "https://mcp.ergoblockchain.org/health"
const DEFAULT_SITE_BASE_URL = "https://www.ergoblockchain.org"

export async function GET(req: Request) {
  const started = Date.now()
  const requestOrigin = new URL(req.url).origin
  const siteBaseUrl = trimSlash(process.env.AGENT_ECONOMY_LIVE_BASE_URL ?? DEFAULT_SITE_BASE_URL)

  const [activity, storage, accord, mcpFly, mcpDns] = await Promise.all([
    probeJson<SageActivityResponse>(`${siteBaseUrl}/api/sage/activity?limit=8`),
    probeJson<{ storage_configured?: boolean }>(`${siteBaseUrl}/api/sage/receipt/blob-probe-2026-05-16`, {
      allowHttpError: true,
    }),
    probeJson<{ ok?: boolean; type?: string; level?: string }>(`${siteBaseUrl}/api/sage/accord`),
    probeJson<{ ok?: boolean; service?: string; version?: string }>(MCP_FLY_HEALTH_URL),
    probeJson<{ ok?: boolean; service?: string }>(MCP_DNS_HEALTH_URL),
  ])

  const latestFullReceipt = await discoverLatestFullReceipt(siteBaseUrl, activity.data)
  const activityEvents = activity.data?.events ?? []
  const settlementCount = activityEvents.filter((event) => event.type === "settlement").length
  const storageConfigured = storage.data?.storage_configured === true

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
      storageConfigured ? "live" : "blocked",
      storageConfigured
        ? "Vercel Blob is configured for new receipt bundles"
        : storage.error ?? "BLOB_READ_WRITE_TOKEN is not visible",
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
      mcpDns.ok ? "mcp.ergoblockchain.org is resolving" : "DNS record still pending",
      MCP_DNS_HEALTH_URL,
    ),
    gate(
      "playground",
      "ErgoScript playground",
      "live",
      "Runtime live; async WASM build warning cleared",
      "/build/playground",
    ),
  ]

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
      latest_full_receipt_id: latestFullReceipt?.id ?? null,
      sage_wallet_event_count: activity.data?.total ?? 0,
      sage_settlement_count: settlementCount,
    },
    gates,
    next_actions: [
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
        label: "Run conformance against the new receipt and publish signed evidence",
        owner: "repo",
        blocked_by_external: !latestFullReceipt,
      },
    ],
    probes: {
      sage_activity: publicProbe(activity),
      receipt_storage: publicProbe(storage),
      accord: publicProbe(accord),
      mcp_fly: publicProbe(mcpFly),
      mcp_dns: publicProbe(mcpDns),
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

  for (const id of Array.from(candidates).slice(0, 10)) {
    const receipt = await probeJson<SageReceiptResponse>(
      `${origin}/api/sage/receipt/${encodeURIComponent(id)}`,
      { allowHttpError: true, timeoutMs: 2_500 },
    )
    if (receipt.data?.ok === true && receipt.data.completeness === "full_receipt_bundle") {
      return receipt.data
    }
  }

  return null
}

async function probeJson<T>(
  url: string,
  opts: { allowHttpError?: boolean; timeoutMs?: number } = {},
): Promise<ProbeResult<T>> {
  const started = Date.now()
  try {
    const res = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(opts.timeoutMs ?? 4_000),
    })
    const text = await res.text()
    const data = text ? JSON.parse(text) as T : null
    const ok = res.ok || opts.allowHttpError === true
    return {
      ok,
      status: res.status,
      ms: Date.now() - started,
      data,
      error: ok ? null : `HTTP ${res.status}`,
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
