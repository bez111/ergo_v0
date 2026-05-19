import { NextResponse } from "next/server"
import { parseServiceUrl } from "@/lib/security/service-url"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface SignerHealthPayload {
  ok?: boolean
  service?: string
  version?: string
  status?: string
  uptime_ms?: number
}

const DEFAULT_TIMEOUT_MS = 2_500

export async function GET() {
  const signerUrl = process.env.SAGE_SIGNER_URL
  const healthUrl = signerUrl ? signerHealthUrl(signerUrl) : null

  if (!healthUrl) {
    return NextResponse.json(
      {
        ok: true,
        type: "sage.signer_health.v0",
        configured: false,
        reachable: false,
        status: "verify_only",
        settlement_mode: "verify_only",
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

    return NextResponse.json(
      {
        ok: true,
        type: "sage.signer_health.v0",
        configured: true,
        reachable,
        status: reachable ? "up" : "degraded",
        settlement_mode: reachable ? "settlement_available" : "verify_only_fallback",
        service: body?.service ?? null,
        version: body?.version ?? null,
        signer_status: body?.status ?? null,
        uptime_ms: typeof body?.uptime_ms === "number" ? body.uptime_ms : null,
        checked_ms: Date.now() - started,
        ready_requires_auth: true,
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
