import { get, put } from "@vercel/blob"
import { isReceiptStorageConfigured } from "@/lib/sage/receipts/storage"

const SIGNER_OPS_PREFIX = "sage/signer-ops/v1"
const LATEST_PATH = `${SIGNER_OPS_PREFIX}/latest.json`

export type SageSignerOpsEventKind =
  | "redemption_settled"
  | "redemption_deferred"
  | "redemption_verify_only"

export interface SageSignerOpsEvent {
  type: "sage.signer_ops_event.v1"
  version: "v1"
  event_id: string
  kind: SageSignerOpsEventKind
  created_at: string
  network: "mainnet" | "testnet"
  quote_id?: string
  agreement_id?: string
  note_box_id?: string
  receipt_id?: string
  settlement_tx_id?: string
  signer_configured: boolean
  error?: string
}

export interface SageSignerOpsPolicy {
  failure_logging: "vercel_blob_latest_event"
  runbook_path: string
  fallback_mode: "verify_only_fallback"
  limits: {
    verify_payment_per_ip_per_minute: number
    signer_health_timeout_ms: number
    verify_payment_max_duration_s: number
  }
}

export interface SageSignerOpsResult {
  ok: boolean
  configured: boolean
  path?: string
  event?: SageSignerOpsEvent
  reason?: string
  error?: string
}

export function signerOpsPolicy(): SageSignerOpsPolicy {
  return {
    failure_logging: "vercel_blob_latest_event",
    runbook_path: "docs/sage-signer-ops.md",
    fallback_mode: "verify_only_fallback",
    limits: {
      verify_payment_per_ip_per_minute: 10,
      signer_health_timeout_ms: 2_500,
      verify_payment_max_duration_s: 60,
    },
  }
}

export async function recordSignerOpsEvent(
  event: Omit<SageSignerOpsEvent, "type" | "version" | "event_id" | "created_at" | "signer_configured"> & {
    signer_configured?: boolean
  },
): Promise<SageSignerOpsResult> {
  if (!isReceiptStorageConfigured()) {
    return { ok: false, configured: false, reason: "BLOB_READ_WRITE_TOKEN is not configured" }
  }

  const createdAt = new Date().toISOString().replace(/\.\d{3}Z$/, "Z")
  const eventId = buildEventId(createdAt, event.kind, event.receipt_id ?? event.note_box_id ?? event.quote_id)
  const { signer_configured: signerConfiguredOverride, ...eventBody } = event
  const stored: SageSignerOpsEvent = {
    type: "sage.signer_ops_event.v1",
    version: "v1",
    event_id: eventId,
    created_at: createdAt,
    signer_configured: signerConfiguredOverride ?? Boolean(process.env.SAGE_SIGNER_URL),
    ...eventBody,
  }
  const path = `${SIGNER_OPS_PREFIX}/events/${eventId}.json`

  try {
    await put(path, JSON.stringify(stored, null, 2), {
      access: "private",
      allowOverwrite: false,
      contentType: "application/json; charset=utf-8",
      cacheControlMaxAge: 60,
    })
    await put(LATEST_PATH, JSON.stringify(stored, null, 2), {
      access: "private",
      allowOverwrite: true,
      contentType: "application/json; charset=utf-8",
      cacheControlMaxAge: 60,
    })
    return { ok: true, configured: true, path, event: stored }
  } catch (error) {
    return {
      ok: false,
      configured: true,
      path,
      event: stored,
      error: error instanceof Error ? error.message : "Vercel Blob signer ops write failed",
    }
  }
}

export async function loadLatestSignerOpsEvent(): Promise<SageSignerOpsResult> {
  if (!isReceiptStorageConfigured()) {
    return { ok: false, configured: false, reason: "BLOB_READ_WRITE_TOKEN is not configured" }
  }

  try {
    const result = await get(LATEST_PATH, { access: "private", useCache: false })
    if (!result?.stream) {
      return { ok: false, configured: true, reason: "no signer ops events recorded yet" }
    }
    const text = await new Response(result.stream as ReadableStream<Uint8Array>).text()
    const event = JSON.parse(text) as SageSignerOpsEvent
    if (event.type !== "sage.signer_ops_event.v1") {
      return { ok: false, configured: true, reason: "latest signer ops blob has unexpected type" }
    }
    return { ok: true, configured: true, path: LATEST_PATH, event }
  } catch (error) {
    return {
      ok: false,
      configured: true,
      path: LATEST_PATH,
      error: error instanceof Error ? error.message : "Vercel Blob signer ops read failed",
    }
  }
}

function buildEventId(createdAt: string, kind: string, reference?: string): string {
  const ts = createdAt.replace(/[-:]/g, "").replace("T", "-").replace("Z", "")
  const ref = reference ? `-${reference.slice(0, 12).toLowerCase()}` : ""
  return `${ts}-${kind}${ref}`.replace(/[^a-z0-9_.-]/gi, "-")
}
