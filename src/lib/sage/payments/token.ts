/**
 * HMAC-signed payment token.
 *
 * Issued by /api/sage/verify-payment after a buyer's Note redeems
 * successfully on testnet. The widget echoes it back on the next
 * /api/sage/chat request so the chat route can grant premium-tier
 * routing without re-checking the chain on every turn.
 *
 * Why HMAC and not JWT: zero deps, tiny payload, no key rotation needed
 * for testnet. Mainnet hardening swaps to JWT (ed25519) and proper
 * nonce-based single-use enforcement via Vercel KV.
 */

import { createHmac, timingSafeEqual } from "node:crypto"

const TOKEN_TTL_MS = 30 * 60 * 1000 // 30 min — enough for a deep research thread

interface TokenPayload {
  quoteId: string
  receiptId: string
  questionHash: string
  issuedAt: number
}

function getKey(): Buffer {
  const k = process.env.SAGE_PAYMENT_HMAC_KEY
  if (!k || k.length < 32) {
    throw new Error(
      "SAGE_PAYMENT_HMAC_KEY missing or too short (need ≥32 chars). Generate via `openssl rand -hex 32`.",
    )
  }
  return Buffer.from(k, "utf8")
}

export function signPaymentToken(payload: Omit<TokenPayload, "issuedAt">): string {
  const full: TokenPayload = { ...payload, issuedAt: Date.now() }
  const body = base64urlEncode(JSON.stringify(full))
  const sig = base64urlEncode(createHmac("sha256", getKey()).update(body).digest())
  return `${body}.${sig}`
}

export interface VerifyTokenResult {
  ok: boolean
  payload?: TokenPayload
  error?: string
}

export function verifyPaymentToken(token: string): VerifyTokenResult {
  if (!token || !token.includes(".")) return { ok: false, error: "malformed token" }
  const [body, sig] = token.split(".")
  if (!body || !sig) return { ok: false, error: "malformed token" }

  let expected: Buffer
  try {
    expected = createHmac("sha256", getKey()).update(body).digest()
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "hmac key error" }
  }
  const actual = Buffer.from(sig, "base64url")
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    return { ok: false, error: "signature mismatch" }
  }

  let payload: TokenPayload
  try {
    payload = JSON.parse(base64urlDecode(body)) as TokenPayload
  } catch {
    return { ok: false, error: "payload not JSON" }
  }

  if (Date.now() - payload.issuedAt > TOKEN_TTL_MS) {
    return { ok: false, error: "token expired" }
  }

  return { ok: true, payload }
}

function base64urlEncode(input: string | Buffer): string {
  const buf = typeof input === "string" ? Buffer.from(input, "utf8") : input
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function base64urlDecode(input: string): string {
  const padded = input + "=".repeat((4 - (input.length % 4)) % 4)
  return Buffer.from(padded.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8")
}

/**
 * Stable hash of a question for token-binding. Cheap — sha256 is fine
 * since this is auth-tampering surface, not secrecy.
 */
export function hashQuestionForToken(question: string): string {
  return createHmac("sha256", "sage-question-hash-v1").update(question).digest("hex").slice(0, 32)
}
