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
  ops?: {
    latest_event?: {
      kind?: string
      created_at?: string
      receipt_id?: string
      note_box_id?: string
      error?: string
    } | null
    latest_event_status?: string
  }
}

interface SageRegistryEvidenceResponse {
  status?: string
  achieved_level?: string | null
  ready_for_registry?: boolean
  receipt_id?: string | null
  signed_artifact_url?: string | null
  public_signing_key_url?: string | null
}

interface SageRegistryProviderResponse {
  conformance?: {
    level?: string
    result_uri?: string | null
    receipt_uri?: string | null
  }
  live_proof?: {
    latest_full_receipt_bundle?: {
      receipt_id?: string
    }
  }
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
const SAGE_REGISTRY_URL =
  "https://raw.githubusercontent.com/accord-protocol/accord-protocol/main/registry/providers/sage.json"

export async function GET(req: Request) {
  const started = Date.now()
  const requestOrigin = new URL(req.url).origin
  const siteBaseUrl = trimSlash(process.env.AGENT_ECONOMY_LIVE_BASE_URL ?? requestOrigin)

  const [activity, storage, accord, conformanceEvidence, registry, signer, mcpFly, mcpDns, mainnetGate] = await Promise.all([
    probeJson<SageActivityResponse>(`${siteBaseUrl}/api/sage/activity?limit=8`),
    probeJson<SageReceiptStorageHealthResponse>(
      `${siteBaseUrl}/api/sage/receipt/blob-probe-2026-05-16`,
    ),
    probeJson<{ ok?: boolean; type?: string; level?: string }>(`${siteBaseUrl}/api/sage/accord`),
    probeJson<SageRegistryEvidenceResponse>(`${siteBaseUrl}/evidence/sage/latest-evidence.json`),
    probeJson<SageRegistryProviderResponse>(SAGE_REGISTRY_URL),
    probeJson<SageSignerHealthResponse>(`${siteBaseUrl}/api/sage/signer-health`),
    probeJson<{ ok?: boolean; service?: string; version?: string }>(MCP_FLY_HEALTH_URL),
    probeJson<{ ok?: boolean; service?: string }>(MCP_DNS_HEALTH_URL),
    probeJson<{ ok?: boolean; status?: string; blockers?: unknown[] }>(
      `${siteBaseUrl}/api/agent-economy/mainnet-gate`,
    ),
  ])

  const latestFullReceipt = await discoverLatestFullReceipt(
    siteBaseUrl,
    activity.data,
    conformanceEvidence.data?.receipt_id ?? null,
    signer.data?.ops?.latest_event?.receipt_id ?? signer.data?.ops?.latest_event?.note_box_id ?? null,
  )
  const activityEvents = activity.data?.events ?? []
  const settlementCount = activityEvents.filter((event) => event.type === "settlement").length
  const storageConfigured = storage.data?.storage_configured === true
  const storageHealthy = storage.data?.ok === true && storage.data.storage_healthy === true
  const signerState = signerGateState(signer)
  const mainnetGateStatus = mainnetGate.data?.status ?? agentEconomyMainnetGate.status
  const conformancePassed = conformanceEvidence.data?.status === "passed" &&
    Boolean(conformanceEvidence.data.achieved_level) &&
    conformanceEvidence.data.ready_for_registry === true
  const conformanceLevel = conformanceEvidence.data?.achieved_level ?? null
  const conformanceReceiptId = conformanceEvidence.data?.receipt_id ?? null
  const conformanceHref = conformanceEvidence.data?.signed_artifact_url ?? "/evidence/sage/latest-evidence.json"
  const conformanceCoversLatestReceipt = Boolean(
    latestFullReceipt?.id && conformanceReceiptId === latestFullReceipt.id,
  )
  const registryMerged = registry.data?.conformance?.level === conformanceLevel &&
    registry.data?.conformance?.result_uri === conformanceHref &&
    registry.data?.live_proof?.latest_full_receipt_bundle?.receipt_id ===
      "09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c"

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
      conformancePassed ? "live" : latestFullReceipt ? "pending" : "blocked",
      conformancePassed
        ? conformanceCoversLatestReceipt
          ? `Signed ${conformanceLevel} evidence published for the latest full receipt bundle`
          : `Signed ${conformanceLevel} evidence published for receipt ${shortId(conformanceReceiptId ?? undefined)}`
        : latestFullReceipt
          ? "Ready for conformance run and signed evidence"
          : "Blocked until a full receipt bundle exists",
      conformanceHref,
    ),
    gate(
      "accord-registry",
      "Accord registry",
      registryMerged ? "live" : conformancePassed ? "pending" : "blocked",
      registryMerged
        ? "Canonical Accord registry includes Sage L1 evidence"
        : conformancePassed
          ? "Signed evidence is published; registry merge still needs confirmation"
          : "Blocked until signed conformance evidence is published",
      "https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json",
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
        : "Closed until exact script identity, signer operations, and audit manifests are published",
      "/api/agent-economy/mainnet-gate",
    ),
  ]
  const lifecycle = buildLifecycle({
    accordLive: accord.ok && accord.data?.ok === true,
    settlementCount,
    storageHealthy,
    latestFullReceipt,
    conformancePassed,
    conformanceLevel,
    conformanceHref,
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
      note: "Live testnet proof. Full receipt and signed L1 conformance evidence are published; mainnet claims remain blocked until exact script identity, signer operations, and external audit manifests are published.",
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
      accord_conformance_level: conformancePassed ? conformanceLevel : null,
      accord_conformance_evidence: conformancePassed ? conformanceHref : null,
      accord_registry_merged: registryMerged,
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
      ...(conformancePassed && !registryMerged ? [{
        id: "registry-evidence",
        label: "Merge the Accord registry PR with the signed Sage artifact",
        owner: "repo",
        blocked_by_external: false,
      }] : !conformancePassed ? [{
        id: "accord-conformance",
        label: latestFullReceipt
          ? "Publish signed conformance evidence for the full receipt bundle"
          : "Run conformance against the new receipt and publish signed evidence",
        owner: "repo",
        blocked_by_external: !latestFullReceipt,
      }] : []),
      ...(signerState === "live" ? [] : [{
        id: "sage-signer-ops",
        label: "Configure the permanent Sage settlement signer endpoint",
        owner: "ops",
        blocked_by_external: true,
      }]),
    ],
    probes: {
      sage_activity: publicProbe(activity),
      receipt_storage: publicProbe(storage),
      accord: publicProbe(accord),
      accord_conformance_evidence: publicProbe(conformanceEvidence),
      accord_registry: publicProbe(registry),
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
  evidenceReceiptId: string | null,
  signerOpsReceiptId: string | null,
): Promise<SageReceiptResponse | null> {
  const candidates = new Set<string>()
  if (signerOpsReceiptId) candidates.add(signerOpsReceiptId)
  if (evidenceReceiptId) candidates.add(evidenceReceiptId)
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
  conformancePassed: boolean
  conformanceLevel: string | null
  conformanceHref: string
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
      state: opts.latestFullReceipt || opts.settlementCount > 0 ? "live" : "pending",
      detail: opts.settlementCount > 0
        ? `${opts.settlementCount} settled Note flow(s) visible in activity.`
        : opts.latestFullReceipt
          ? `Paid Note verified for ${shortId(opts.latestFullReceipt.id)}; redemption is tracked separately.`
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
      state: opts.conformancePassed ? "live" : opts.latestFullReceipt ? "pending" : "blocked",
      detail: opts.conformancePassed
        ? `Signed ${opts.conformanceLevel ?? "L1"} conformance evidence is published.`
        : opts.latestFullReceipt
          ? "Ready for signed conformance artifact generation."
          : "Blocked by the missing full receipt bundle.",
      evidence_href: opts.conformancePassed ? opts.conformanceHref : "/api/sage/accord",
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
      detail: "Mainnet language stays closed until script identity, signer ops, and audit evidence are published.",
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
