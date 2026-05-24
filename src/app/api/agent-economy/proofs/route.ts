import { NextResponse } from "next/server"

type ProofState = "live" | "pending" | "blocked" | "degraded"

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
  timestamp?: number
}

interface SageActivityResponse {
  ok?: boolean
  total?: number
  events?: SageActivityEvent[]
}

interface SageReceiptBundleResponse {
  ok?: boolean
  type?: string
  id?: string
  status?: string
  completeness?: string
  created_at?: string
  updated_at?: string
  network?: string
  public_receipt_url?: string
  api_receipt_url?: string
  explorer_url?: string | null
  task?: {
    task_hash?: string
  }
  chain?: {
    note_box_id?: string
    settlement_tx_id?: string | null
    payment_erg?: string
    note_explorer_url?: string
    settlement_explorer_url?: string | null
  }
  accord?: {
    agreement_hash?: string | null
    verification_receipt_hash?: string | null
    settlement_receipt_hash?: string | null
    agreement_json?: { agreement_id?: string } | null
    verification_receipt_json?: { receipt_id?: string } | null
    settlement_receipt_json?: { settlement_id?: string } | null
  }
  storage?: {
    provider?: string
    path?: string
    saved_at?: string
  }
}

interface LiveStatusResponse {
  ok?: boolean
  summary?: {
    gates_live?: number
    gates_total?: number
    latest_full_receipt_id?: string | null
    accord_conformance_level?: string | null
    accord_conformance_evidence?: string | null
    accord_registry_merged?: boolean
    sage_widget_npm_version?: string | null
    sage_widget_npm_published?: boolean
    mainnet_gate_status?: string
  }
  posture?: {
    label?: string
    mainnet_ready?: boolean
  }
}

interface ConformanceEvidenceResponse {
  status?: string
  achieved_level?: string | null
  receipt_id?: string | null
  signed_artifact_url?: string | null
  ready_for_registry?: boolean
}

interface NpmPackageResponse {
  name?: string
  version?: string
}

interface MainnetGateResponse {
  status?: string
  mainnet_ready?: boolean
  blockers?: Array<{
    id: string
    label: string
    state: string
    owner: string
  }>
}

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

interface VerifyStep {
  id: string
  label: string
  command: string
  expect: string
  url: string
}

interface ConformanceReceiptResolution {
  receiptId: string | null
  receipt: SageReceiptBundleResponse | null
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 60

const CANONICAL_SITE = "https://www.ergoblockchain.org"
const KNOWN_FULL_RECEIPT_ID = "f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"
const MCP_HEALTH_URL = "https://mcp.ergoblockchain.org/health"
const WIDGET_NPM_URL = "https://registry.npmjs.org/@ergoblockchain%2Fsage-widget/latest"
const PROOF_EXPLORER_SCHEMA_URL = `${CANONICAL_SITE}/agent-economy/proof-explorer.schema.v0.json`

export async function GET(req: Request) {
  const started = Date.now()
  const requestOrigin = new URL(req.url).origin
  const siteBaseUrl = trimSlash(process.env.AGENT_ECONOMY_LIVE_BASE_URL ?? requestOrigin)

  const [live, activity, conformance, mcp, widget, mainnetGate] = await Promise.all([
    probeJson<LiveStatusResponse>(`${siteBaseUrl}/api/agent-economy/live`, { timeoutMs: 6_000 }),
    probeJson<SageActivityResponse>(`${siteBaseUrl}/api/sage/activity?limit=12`),
    probeJson<ConformanceEvidenceResponse>(`${siteBaseUrl}/evidence/sage/latest-evidence.json`),
    probeJson<{ ok?: boolean; service?: string; version?: string }>(MCP_HEALTH_URL),
    probeJson<NpmPackageResponse>(WIDGET_NPM_URL),
    probeJson<MainnetGateResponse>(`${siteBaseUrl}/api/agent-economy/mainnet-gate`),
  ])

  const receiptIds = collectReceiptIds(live.data, activity.data, conformance.data)
  const receiptProbes = await Promise.all(
    receiptIds.map((id) =>
      probeJson<SageReceiptBundleResponse>(
        `${siteBaseUrl}/api/sage/receipt/${encodeURIComponent(id)}`,
        { timeoutMs: 3_500 },
      ),
    ),
  )
  const receipts = receiptProbes
    .map((probe) => probe.data)
    .filter(isReceiptBundle)
  const latestFullReceipt = receipts.find((receipt) => receipt.completeness === "full_receipt_bundle") ?? null
  const conformanceReceiptId = conformance.data?.receipt_id ?? null
  const conformanceReceipt = conformanceReceiptId
    ? receipts.find((receipt) => receipt.id === conformanceReceiptId) ?? null
    : null
  const receiptForVerify =
    latestFullReceipt?.id ??
    live.data?.summary?.latest_full_receipt_id ??
    conformanceReceiptId ??
    receipts[0]?.id ??
    KNOWN_FULL_RECEIPT_ID

  const proofs: ProofRecord[] = [
    ...receipts.map(receiptToProof),
    conformanceToProof(conformance, {
      receiptId: conformanceReceiptId ?? latestFullReceipt?.id ?? receipts[0]?.id ?? null,
      receipt: conformanceReceipt ?? (!conformanceReceiptId ? latestFullReceipt ?? receipts[0] ?? null : null),
    }),
    mcpToProof(mcp),
    widgetToProof(widget, live.data?.summary?.sage_widget_npm_published === true),
    mainnetGateToProof(mainnetGate),
    ...activityToProofs(activity.data),
  ]

  const body = {
    ok: true,
    type: "ergo.agent_economy.proof_explorer.v0",
    version: "v0",
    generated_at: new Date().toISOString(),
    took_ms: Date.now() - started,
    posture: {
      label: live.data?.posture?.label ?? "testnet_live_proof",
      mainnet_ready: false,
      note: "Public proof explorer for Ergo's testnet-first agent economy surfaces. API and JSON artifacts are evidence, not SEO landing pages.",
    },
    summary: {
      proof_count: proofs.length,
      live_count: proofs.filter((proof) => proof.state === "live").length,
      full_receipt_count: receipts.filter((receipt) => receipt.completeness === "full_receipt_bundle").length,
      chain_only_receipt_count: receipts.filter((receipt) => receipt.completeness === "chain_proof_only").length,
      latest_full_receipt_id:
        latestFullReceipt?.id ??
        live.data?.summary?.latest_full_receipt_id ??
        null,
      conformance_receipt_id: conformanceReceiptId,
      conformance_receipt_resolved: conformanceReceipt?.completeness === "full_receipt_bundle",
      gates_live: live.data?.summary?.gates_live ?? null,
      gates_total: live.data?.summary?.gates_total ?? null,
      mainnet_gate_status: mainnetGate.data?.status ?? live.data?.summary?.mainnet_gate_status ?? "closed",
    },
    surfaces: {
      human_page: `${CANONICAL_SITE}/agent-economy/proofs`,
      machine_api: `${CANONICAL_SITE}/api/agent-economy/proofs`,
      schema: PROOF_EXPLORER_SCHEMA_URL,
      live_hub: `${CANONICAL_SITE}/agent-economy/live`,
      launch_kit: `${CANONICAL_SITE}/agent-economy/launch-kit`,
    },
    verify_steps: buildVerifySteps(receiptForVerify),
    proofs,
    probes: {
      live: publicProbe(live),
      activity: publicProbe(activity),
      conformance: publicProbe(conformance),
      mcp: publicProbe(mcp),
      widget_npm: publicProbe(widget),
      mainnet_gate: publicProbe(mainnetGate),
      receipts: receiptProbes.map(publicProbe),
    },
  }

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
      Link: '</agent-economy/proof-explorer.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}

function buildVerifySteps(receiptId: string): VerifyStep[] {
  const receiptUrl = `${CANONICAL_SITE}/api/sage/receipt/${encodeURIComponent(receiptId)}`
  return [
    {
      id: "proof-board",
      label: "Proof board",
      url: `${CANONICAL_SITE}/api/agent-economy/proofs`,
      command: "curl -sS https://www.ergoblockchain.org/api/agent-economy/proofs",
      expect:
        "ok=true, posture.mainnet_ready=false, proofs[] with receipts, MCP, widget, and gate records.",
    },
    {
      id: "receipt-source",
      label: "Receipt source",
      url: receiptUrl,
      command: `curl -sS ${receiptUrl}`,
      expect:
        "One receipt API returns the chain proof plus Accord receipt fields when durable storage exists.",
    },
    {
      id: "mcp-health",
      label: "MCP endpoint",
      url: MCP_HEALTH_URL,
      command: "curl -sS https://mcp.ergoblockchain.org/health",
      expect: "Public machine endpoint reports ok=true for health probes.",
    },
    {
      id: "schema-contract",
      label: "Schema contract",
      url: PROOF_EXPLORER_SCHEMA_URL,
      command: "curl -sS https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
      expect:
        "JSON Schema binds the API shape and keeps mainnet_ready=false until the audit gate opens.",
    },
  ]
}

function collectReceiptIds(
  live: LiveStatusResponse | null,
  activity: SageActivityResponse | null,
  conformance: ConformanceEvidenceResponse | null,
) {
  const ids = new Set<string>()
  ids.add(KNOWN_FULL_RECEIPT_ID)
  addId(ids, live?.summary?.latest_full_receipt_id)
  addId(ids, conformance?.receipt_id)
  for (const event of activity?.events ?? []) {
    addId(ids, event.txId)
    addId(ids, event.noteBoxId)
  }
  return Array.from(ids).filter(isReceiptLookupId).slice(0, 10)
}

function receiptToProof(receipt: SageReceiptBundleResponse): ProofRecord {
  const full = receipt.completeness === "full_receipt_bundle"
  const settled = receipt.status === "settled_on_chain"
  return {
    id: `receipt:${receipt.id}`,
    kind: "receipt_bundle",
    title: full ? "Full Sage receipt bundle" : "Sage chain proof receipt",
    state: full ? "live" : "pending",
    status: receipt.completeness ?? "unknown",
    description: full
      ? "Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and chain evidence resolve from one receipt API."
      : "Explorer-backed chain proof exists, but durable Agreement and receipt JSON were not stored for this older id.",
    updated_at: receipt.updated_at ?? receipt.created_at ?? null,
    primary_url: receipt.public_receipt_url ?? `${CANONICAL_SITE}/r/sage/${receipt.id}`,
    api_url: receipt.api_receipt_url ?? `${CANONICAL_SITE}/api/sage/receipt/${receipt.id}`,
    explorer_url: receipt.explorer_url ?? null,
    identifiers: {
      receipt_id: receipt.id ?? null,
      note_box_id: receipt.chain?.note_box_id ?? null,
      settlement_tx_id: receipt.chain?.settlement_tx_id ?? null,
      agreement_id: receipt.accord?.agreement_json?.agreement_id ?? null,
      verification_receipt_id: receipt.accord?.verification_receipt_json?.receipt_id ?? null,
      settlement_receipt_id: receipt.accord?.settlement_receipt_json?.settlement_id ?? null,
      task_hash: receipt.task?.task_hash ?? null,
    },
    checks: [
      {
        label: "Agreement JSON",
        state: receipt.accord?.agreement_json ? "live" : "pending",
        value: receipt.accord?.agreement_hash ?? "not stored",
      },
      {
        label: "Verification receipt",
        state: receipt.accord?.verification_receipt_json ? "live" : "pending",
        value: receipt.accord?.verification_receipt_hash ?? "not stored",
      },
      {
        label: "Settlement receipt",
        state: receipt.accord?.settlement_receipt_json ? "live" : "pending",
        value: receipt.accord?.settlement_receipt_hash ?? "not stored",
      },
      {
        label: "On-chain settlement",
        state: settled ? "live" : "pending",
        value: receipt.chain?.settlement_tx_id ?? "pending redemption",
      },
    ],
  }
}

function conformanceToProof(
  probe: ProbeResult<ConformanceEvidenceResponse>,
  resolution: ConformanceReceiptResolution,
): ProofRecord {
  const passed = probe.data?.status === "passed" && Boolean(probe.data.achieved_level)
  const receiptFull = resolution.receipt?.completeness === "full_receipt_bundle"
  const receiptResolved = Boolean(resolution.receipt)
  const state: ProofState = passed ? (receiptFull ? "live" : "degraded") : "pending"
  const status = passed
    ? receiptFull
      ? "passed"
      : receiptResolved
        ? "passed_but_receipt_is_not_full"
        : "passed_but_receipt_unreadable"
    : probe.data?.status ?? probe.error ?? "unknown"
  return {
    id: "conformance:sage-l1",
    kind: "conformance_evidence",
    title: "Signed Sage Accord conformance",
    state,
    status,
    description: passed
      ? receiptFull
        ? "Signed L1 evidence binds Sage to a full receipt bundle and the Accord registry surface."
        : "Signed L1 evidence is published, but the referenced receipt is not currently resolving as a full receipt bundle from the receipt API."
      : "Conformance evidence is pending or unreachable.",
    updated_at: null,
    primary_url: probe.data?.signed_artifact_url ?? `${CANONICAL_SITE}/evidence/sage/latest-evidence.json`,
    api_url: `${CANONICAL_SITE}/evidence/sage/latest-evidence.json`,
    identifiers: {
      receipt_id: probe.data?.receipt_id ?? resolution.receiptId,
      achieved_level: probe.data?.achieved_level ?? null,
      ready_for_registry: String(probe.data?.ready_for_registry ?? false),
      receipt_completeness: resolution.receipt?.completeness ?? null,
    },
    checks: [
      {
        label: "Evidence status",
        state: passed ? "live" : "pending",
        value: probe.data?.status ?? "missing",
      },
      {
        label: "Conformance level",
        state: probe.data?.achieved_level ? "live" : "pending",
        value: probe.data?.achieved_level ?? "not reported",
      },
      {
        label: "Registry readiness",
        state: probe.data?.ready_for_registry ? "live" : "pending",
        value: String(probe.data?.ready_for_registry ?? false),
      },
      {
        label: "Referenced receipt API",
        state: receiptFull ? "live" : receiptResolved ? "degraded" : "pending",
        value: receiptFull
          ? "full_receipt_bundle"
          : resolution.receipt?.completeness ?? "not readable",
      },
    ],
  }
}

function mcpToProof(probe: ProbeResult<{ ok?: boolean; service?: string; version?: string }>): ProofRecord {
  return {
    id: "mcp:public-endpoint",
    kind: "mcp_endpoint",
    title: "Public MCP endpoint",
    state: probe.ok && probe.data?.ok === true ? "live" : "degraded",
    status: probe.ok ? "reachable" : probe.error ?? "unreachable",
    description: "Streamable HTTP MCP health is publicly reachable for machines and developer probes.",
    updated_at: null,
    primary_url: MCP_HEALTH_URL,
    api_url: MCP_HEALTH_URL,
    identifiers: {
      service: probe.data?.service ?? null,
      version: probe.data?.version ?? null,
      host: "mcp.ergoblockchain.org",
    },
    checks: [
      {
        label: "Health",
        state: probe.ok && probe.data?.ok === true ? "live" : "degraded",
        value: probe.ok ? "ok" : probe.error ?? "failed",
      },
    ],
  }
}

function widgetToProof(probe: ProbeResult<NpmPackageResponse>, published: boolean): ProofRecord {
  return {
    id: "npm:sage-widget",
    kind: "widget_package",
    title: "Sage embeddable widget package",
    state: published || probe.ok ? "live" : "pending",
    status: probe.data?.version ? `v${probe.data.version}` : probe.error ?? "unknown",
    description: "React and vanilla widget package for quote, payment intent, host wallet launch, verification, and receipt callbacks.",
    updated_at: null,
    primary_url: "https://www.npmjs.com/package/@ergoblockchain/sage-widget",
    api_url: WIDGET_NPM_URL,
    identifiers: {
      package: probe.data?.name ?? "@ergoblockchain/sage-widget",
      version: probe.data?.version ?? null,
    },
    checks: [
      {
        label: "npm latest",
        state: probe.ok ? "live" : "pending",
        value: probe.data?.version ?? "not reported",
      },
    ],
  }
}

function mainnetGateToProof(probe: ProbeResult<MainnetGateResponse>): ProofRecord {
  const status = probe.data?.status ?? "closed"
  const pending = (probe.data?.blockers ?? []).filter((blocker) => blocker.state !== "open")
  return {
    id: "gate:mainnet",
    kind: "mainnet_gate",
    title: "Mainnet/audit gate",
    state: status === "open" ? "live" : "blocked",
    status,
    description: "Mainnet readiness stays closed until external review and audit-bound script identity evidence are published.",
    updated_at: null,
    primary_url: `${CANONICAL_SITE}/agent-economy/trust`,
    api_url: `${CANONICAL_SITE}/api/agent-economy/mainnet-gate`,
    identifiers: {
      mainnet_ready: String(probe.data?.mainnet_ready ?? false),
      pending_blockers: String(pending.length),
    },
    checks: pending.slice(0, 4).map((blocker) => ({
      label: blocker.label,
      state: blocker.state === "open" ? "live" : "blocked",
      value: blocker.owner,
    })),
  }
}

function activityToProofs(activity: SageActivityResponse | null): ProofRecord[] {
  const events = activity?.events ?? []
  return events.slice(0, 4).map((event, index) => {
    const id = event.txId ?? event.noteBoxId ?? `activity-${index}`
    return {
      id: `activity:${id}`,
      kind: "activity_event",
      title: event.type === "settlement" ? "Sage settlement activity" : "Sage wallet activity",
      state: "live",
      status: event.type ?? "wallet_event",
      description: "Recent public explorer event from the Sage testnet wallet activity feed.",
      updated_at: event.timestamp ? new Date(event.timestamp).toISOString() : null,
      primary_url: event.txId
        ? `${CANONICAL_SITE}/api/sage/receipt/${event.txId}`
        : `${CANONICAL_SITE}/api/sage/activity`,
      api_url: `${CANONICAL_SITE}/api/sage/activity`,
      identifiers: {
        tx_id: event.txId ?? null,
        note_box_id: event.noteBoxId ?? null,
      },
      checks: [
        {
          label: "Explorer activity",
          state: "live",
          value: event.type ?? "event",
        },
      ],
    } satisfies ProofRecord
  })
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

function addId(ids: Set<string>, id?: string | null) {
  if (id && isReceiptLookupId(id)) ids.add(id)
}

function isReceiptLookupId(id: string) {
  return /^[a-zA-Z0-9][a-zA-Z0-9._:-]{5,160}$/.test(id)
}

function isReceiptBundle(value: SageReceiptBundleResponse | null): value is SageReceiptBundleResponse & { id: string } {
  return value?.ok === true && value.type === "sage.receipt_bundle.v1" && typeof value.id === "string"
}

function trimSlash(value: string) {
  return value.replace(/\/+$/, "")
}
