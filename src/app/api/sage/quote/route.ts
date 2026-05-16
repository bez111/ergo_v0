/**
 * POST /api/sage/quote
 *
 * Decides whether a question is premium-tier and, if so, returns a
 * SageQuote (price, receiver address, task hash, deadline). The widget
 * uses this to show the payment modal *before* burning a Claude call.
 *
 * Free queries get { premium: false } and the widget proceeds straight
 * to /api/sage/chat.
 */

import { NextRequest } from "next/server"
import { buildSageQuote } from "@/lib/sage/payments/agreement"
import { decidePremium } from "@/lib/sage/payments/gate"
import { assertPaymentTokenKeyConfigured } from "@/lib/sage/payments/token"
import { checkRateLimit, clientKey } from "@/lib/sage/rate-limit"

export const runtime = "nodejs"
export const maxDuration = 10

interface QuoteRequest {
  question?: string
  history?: { role: "user" | "assistant"; content: string }[]
}

export async function POST(req: NextRequest) {
  const rl = checkRateLimit(clientKey(req))
  if (!rl.allowed) {
    return jsonError(429, "Rate limit: 10 quotes/minute. Try again shortly.", {
      retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000),
    })
  }

  let body: QuoteRequest
  try {
    body = (await req.json()) as QuoteRequest
  } catch {
    return jsonError(400, "Invalid JSON body.")
  }

  const question = (body.question ?? "").trim()
  if (!question) return jsonError(400, "question is required")
  if (question.length > 4000) return jsonError(400, "question too long (max 4000 chars)")

  const history = Array.isArray(body.history) ? body.history.slice(-12) : []

  const decision = decidePremium(question, history)
  if (!decision.isPremium) {
    return jsonOk({ premium: false })
  }

  try {
    assertPaymentTokenKeyConfigured()
  } catch (err) {
    const msg = err instanceof Error ? err.message : "payment token config error"
    return jsonError(503, msg)
  }

  // Surface the friendly env-var error from getSageWalletConfig as a
  // 503 instead of a 500 — the widget can render a "Sage premium tier
  // is offline" message rather than crashing.
  let quote
  try {
    quote = await buildSageQuote({ question })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "wallet config error"
    return jsonError(503, msg)
  }

  return jsonOk({
    premium: true,
    reason: decision.reason,
    rationale: decision.rationale,
    quote,
  })
}

function jsonOk(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  })
}

function jsonError(status: number, error: string, extras?: Record<string, unknown>) {
  return new Response(JSON.stringify({ error, ...(extras ?? {}) }), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
      ...(status === 429 && extras?.retryAfter
        ? { "retry-after": String(extras.retryAfter) }
        : {}),
    },
  })
}
