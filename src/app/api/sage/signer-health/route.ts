import { NextResponse } from "next/server"
import { parseServiceUrl } from "@/lib/security/service-url"
import { loadLatestSignerOpsEvent, signerOpsPolicy } from "@/lib/sage/signer-ops"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface SignerHealthPayload {
  ok?: boolean
  service?: string
  version?: string
  network?: string
  signer_address?: string
  address_matches_expected?: boolean | null
  status?: string
  uptime_ms?: number
}

const DEFAULT_TIMEOUT_MS = 2_500

export async function GET() {
  const signerUrl = process.env.SAGE_SIGNER_URL
  const healthUrl = signerUrl ? signerHealthUrl(signerUrl) : null
  const [latestOps] = await Promise.all([loadLatestSignerOpsEvent()])
  const ops = {
    policy: signerOpsPolicy(),
    latest_event: latestOps.ok ? latestOps.event : null,
    latest_event_status: latestOps.ok
      ? "recorded"
      : latestOps.configured
        ? "none_or_unavailable"
        : "storage_not_configured",
    latest_event_error: latestOps.ok ? null : latestOps.error ?? latestOps.reason ?? null,
  }

  if (!healthUrl) {
    return NextResponse.json(
      {
        ok: true,
        type: "sage.signer_health.v0",
        configured: false,
        reachable: false,
        status: "verify_only",
        settlement_mode: "verify_only",
        ops,
        note:
          "SAGE_SIGNER_URL is not configured. Sage can verify payments and serve premium answers, but redemption settlement is deferred.",
      },
      { headers: noStoreHeaders() },
    )
  }

  const started = Date.now()
  try {
    const res = await fetch(healthUrl, {
      cache: "no-store",
      signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
    })
    const body = await readJson<SignerHealthPayload>(res)
    const reachable = res.ok && body?.ok === true && body.service === "sage-signer"
    const expectedAddress = process.env.SAGE_WALLET_ADDRESS ?? null
    const signerAddress = typeof body?.signer_address === "string" ? body.signer_address : null
    const addressMatches = reachable && signerAddress && expectedAddress
      ? signerAddress === expectedAddress
      : null
    const settlementReady = reachable && addressMatches !== false

    return NextResponse.json(
      {
        ok: true,
        type: "sage.signer_health.v0",
        configured: true,
        reachable,
        status: settlementReady ? "up" : "degraded",
        settlement_mode: settlementReady ? "settlement_available" : "verify_only_fallback",
        service: body?.service ?? null,
        version: body?.version ?? null,
        network: body?.network ?? null,
        signer_address: signerAddress,
        expected_address: expectedAddress,
        address_matches_expected: addressMatches,
        signer_status: body?.status ?? null,
        uptime_ms: typeof body?.uptime_ms === "number" ? body.uptime_ms : null,
        checked_ms: Date.now() - started,
        ready_requires_auth: true,
        ops,
      },
      { headers: noStoreHeaders() },
    )
  } catch (error) {
    return NextResponse.json(
      {
        ok: true,
        type: "sage.signer_health.v0",
        configured: true,
        reachable: false,
        status: "degraded",
        settlement_mode: "verify_only_fallback",
        checked_ms: Date.now() - started,
        ops,
        error: error instanceof Error ? error.message : "signer health probe failed",
      },
      { headers: noStoreHeaders() },
    )
  }
}

function signerHealthUrl(value: string): string | null {
  try {
    const url = parseServiceUrl(value)
    if (url.pathname.endsWith("/sign")) {
      url.pathname = url.pathname.replace(/\/sign$/, "/health")
    } else {
      url.pathname = `${url.pathname.replace(/\/+$/, "")}/health`
    }
    url.search = ""
    return url.toString()
  } catch {
    return null
  }
}

async function readJson<T>(res: Response): Promise<T | null> {
  const text = await res.text()
  if (!text) return null
  try {
    return JSON.parse(text) as T
  } catch {
    return null
  }
}

function noStoreHeaders() {
  return { "cache-control": "no-store" }
}
