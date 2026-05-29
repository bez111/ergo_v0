import { ErgoAddress, Network } from "@fleet-sdk/core"
import { NextResponse } from "next/server"
import { parseServiceUrl } from "@/lib/security/service-url"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface FaucetRequest {
  address?: string
  turnstileToken?: string
}

const WINDOW_MS = 60 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 2
const PUBLIC_TESTNET_FAUCET_URL = "https://testnet.ergofaucet.org/"
const DEFAULT_FAUCET_AMOUNT_NANOERG = BigInt("100000000")
const REQUIRED_BACKEND_ENV = [
  "ERGO_TESTNET_FAUCET_ENABLED=true",
  "ERGO_TESTNET_FAUCET_BACKEND_URL=<dedicated faucet worker>",
  "ERGO_TESTNET_FAUCET_BACKEND_TOKEN=<shared secret>",
  "ERGO_TESTNET_FAUCET_TURNSTILE_SECRET=<optional anti-abuse gate>",
] as const
const memoryRateLimit = new Map<string, { count: number; resetAt: number }>()

export async function GET() {
  try {
    return NextResponse.json(faucetDescriptor(), {
      headers: { "Cache-Control": "s-maxage=30, stale-while-revalidate=60" },
    })
  } catch (error) {
    return jsonError(500, "Faucet descriptor failed.", {
      cause: error instanceof Error ? error.message : "unknown",
      fallback_url: PUBLIC_TESTNET_FAUCET_URL,
    })
  }
}

export async function POST(req: Request) {
  try {
    let body: FaucetRequest
    try {
      body = (await req.json()) as FaucetRequest
    } catch {
      return jsonError(400, "Invalid JSON body.", faucetUnavailableExtras())
    }

    const address = body.address?.trim() ?? ""
    const inspected = inspectTestnetAddress(address)
    if (!inspected.ok) {
      return jsonError(400, inspected.error, { address, ...faucetUnavailableExtras() })
    }

    const rate = checkRateLimit(clientKey(req))
    if (!rate.allowed) {
      return jsonError(429, "Faucet rate limit hit. Try again later.", {
        retry_after_seconds: Math.ceil((rate.resetAt - Date.now()) / 1000),
        ...faucetUnavailableExtras(),
      })
    }

    const turnstile = await verifyTurnstile(body.turnstileToken, req)
    if (!turnstile.ok) {
      return jsonError(403, turnstile.error, faucetUnavailableExtras())
    }

    if (!faucetEnabled()) {
      return jsonError(503, "Faucet payouts are not enabled yet.", faucetUnavailableExtras())
    }

    const backend = readFaucetBackendUrl()
    if (!backend.ok) {
      return jsonError(503, `Faucet backend URL is invalid: ${backend.error}`, faucetUnavailableExtras())
    }

    const amountNanoErg = faucetAmountNanoErg()
    let res: Response
    try {
      res = await fetch(backend.url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(process.env.ERGO_TESTNET_FAUCET_BACKEND_TOKEN
            ? { authorization: `Bearer ${process.env.ERGO_TESTNET_FAUCET_BACKEND_TOKEN}` }
            : {}),
        },
        body: JSON.stringify({
          address,
          amountNanoErg: amountNanoErg.toString(),
          source: "ergoblockchain.org",
        }),
        signal: AbortSignal.timeout(15_000),
      })
    } catch (error) {
      return jsonError(502, "Faucet backend request failed.", {
        cause: error instanceof Error ? error.message : "network error",
        ...faucetUnavailableExtras(),
      })
    }

    const responseBody = await readBackendResponse(res)

    return NextResponse.json({
      ok: res.ok,
      type: "ergo.testnet_faucet.request.v1",
      status: res.status,
      address,
      network: "testnet",
      amount_nanoerg: amountNanoErg.toString(),
      amount_erg: Number(amountNanoErg) / 1e9,
      backend: responseBody,
      fallback_url: PUBLIC_TESTNET_FAUCET_URL,
    }, {
      status: res.ok ? 200 : 502,
      headers: { "Cache-Control": "no-store" },
    })
  } catch (error) {
    return jsonError(500, "Faucet request failed before payout.", {
      cause: error instanceof Error ? error.message : "unknown",
      ...faucetUnavailableExtras(),
    })
  }
}

function inspectTestnetAddress(address: string): { ok: true } | { ok: false; error: string } {
  if (!address) return { ok: false, error: "address required" }
  if (!ErgoAddress.validate(address)) return { ok: false, error: "invalid Ergo address" }
  const network = ErgoAddress.getNetworkType(address)
  if (network !== Network.Testnet) return { ok: false, error: "faucet only accepts testnet addresses" }
  return { ok: true }
}

async function verifyTurnstile(token: string | undefined, req: Request): Promise<{ ok: true } | { ok: false; error: string }> {
  const secret = process.env.ERGO_TESTNET_FAUCET_TURNSTILE_SECRET
  if (!secret) return { ok: true }
  if (!token) return { ok: false, error: "turnstileToken required" }

  const form = new FormData()
  form.set("secret", secret)
  form.set("response", token)
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  if (ip) form.set("remoteip", ip)

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
      signal: AbortSignal.timeout(5_000),
    })
    const data = await res.json() as { success?: boolean }
    return data.success ? { ok: true } : { ok: false, error: "Turnstile verification failed" }
  } catch {
    return { ok: false, error: "Turnstile verification unavailable" }
  }
}

function checkRateLimit(key: string) {
  const now = Date.now()
  const current = memoryRateLimit.get(key)
  if (!current || current.resetAt <= now) {
    const next = { count: 1, resetAt: now + WINDOW_MS }
    memoryRateLimit.set(key, next)
    return { allowed: true, resetAt: next.resetAt }
  }
  current.count += 1
  return { allowed: current.count <= MAX_REQUESTS_PER_WINDOW, resetAt: current.resetAt }
}

function clientKey(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local"
  )
}

function faucetEnabled() {
  return process.env.ERGO_TESTNET_FAUCET_ENABLED === "true" && faucetConfigured()
}

function faucetConfigured() {
  return Boolean(process.env.ERGO_TESTNET_FAUCET_BACKEND_URL && process.env.ERGO_TESTNET_FAUCET_BACKEND_TOKEN)
}

function faucetAmountNanoErg() {
  const raw = process.env.ERGO_TESTNET_FAUCET_AMOUNT_NANOERG ?? "100000000"
  try {
    const amount = BigInt(raw)
    return amount > BigInt(0) ? amount : DEFAULT_FAUCET_AMOUNT_NANOERG
  } catch {
    return DEFAULT_FAUCET_AMOUNT_NANOERG
  }
}

function readFaucetBackendUrl(): { ok: true; url: URL } | { ok: false; error: string } {
  const raw = process.env.ERGO_TESTNET_FAUCET_BACKEND_URL
  if (!raw) return { ok: false, error: "missing" }
  try {
    return { ok: true, url: parseServiceUrl(raw) }
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "invalid backend URL" }
  }
}

function jsonError(status: number, error: string, extras?: Record<string, unknown>) {
  return NextResponse.json({ ok: false, error, ...(extras ?? {}) }, {
    status,
    headers: { "Cache-Control": "no-store" },
  })
}

async function readBackendResponse(res: Response) {
  const responseText = await res.text()
  if (!responseText) return null
  try {
    return JSON.parse(responseText) as unknown
  } catch {
    return { raw: responseText.slice(0, 1_000) }
  }
}

function faucetDescriptor() {
  const amountNanoErg = faucetAmountNanoErg()
  return {
    ok: true,
    type: "ergo.testnet_faucet.v1",
    enabled: faucetEnabled(),
    configured: faucetConfigured(),
    amount_nanoerg: amountNanoErg.toString(),
    amount_erg: Number(amountNanoErg) / 1e9,
    network: "testnet",
    fallback_url: PUBLIC_TESTNET_FAUCET_URL,
    anti_abuse: {
      turnstile_required: Boolean(process.env.ERGO_TESTNET_FAUCET_TURNSTILE_SECRET),
      hourly_ip_limit: MAX_REQUESTS_PER_WINDOW,
    },
    status: faucetEnabled() ? "ready" : "guarded",
    message: faucetEnabled()
      ? "POST { address, turnstileToken? } to request testnet ERG."
      : "Faucet surface is live, but payouts are disabled until the dedicated backend/wallet is configured.",
    required_env: faucetEnabled() ? [] : REQUIRED_BACKEND_ENV,
    note: faucetEnabled()
      ? "Keep payout limits and backend signing outside the public website runtime."
      : "Keep the payout wallet in a separate backend service, not inside the public website runtime.",
  }
}

function faucetUnavailableExtras() {
  return {
    configured: faucetConfigured(),
    enabled: faucetEnabled(),
    status: faucetEnabled() ? "ready" : "guarded",
    fallback_url: PUBLIC_TESTNET_FAUCET_URL,
    required_env: REQUIRED_BACKEND_ENV,
    note: "Keep the payout wallet in a separate backend service, not inside the public website runtime.",
  }
}
