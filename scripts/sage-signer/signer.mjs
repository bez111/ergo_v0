#!/usr/bin/env node
/**
 * Sage signer — local HTTP service that signs Note-redemption txs.
 *
 * The deployed Sage on Vercel POSTs unsigned EIP-12 txs here when it
 * needs to redeem a buyer's paid Note. This process holds the seller
 * wallet's private key; Vercel only knows the public address.
 *
 *   POST /sign
 *   Authorization: Bearer <SAGE_SIGNER_TOKEN>
 *   Content-Type: application/json
 *
 *   { "unsignedTx": <EIP-12 unsigned tx> }
 *
 *   → 200 { "signedTx": <signed tx> }
 *   → 401 missing/invalid token
 *   → 403 policy violation (tx exceeds cap or pays unwhitelisted addr)
 *   → 422 signing failed
 *
 *   GET /health
 *   → 200 minimal process health, no auth required
 *
 *   GET /ready
 *   Authorization: Bearer <SAGE_SIGNER_TOKEN>
 *   → 200 readiness, policy summary and counters
 *
 * See README.md for setup, ngrok / cloudflared / Tailscale Funnel
 * exposure paths, and how to wire SAGE_SIGNER_URL on Vercel.
 *
 * Signing implementation: @fleet-sdk/wallet's Prover accepts the
 * EIP-12 unsigned shape directly (per @fleet-sdk/wallet:
 * `type UnsignedTransaction = EIP12UnsignedTransaction | ErgoUnsignedTransaction`),
 * so we don't need a Fleet-internal conversion step.
 */

import "dotenv/config"
import http from "node:http"
import crypto from "node:crypto"
import { ErgoHDKey, Prover } from "@fleet-sdk/wallet"

const PORT = Number(process.env.PORT ?? 8911)
const TOKEN = process.env.SAGE_SIGNER_TOKEN ?? ""
const SEED = process.env.SAGE_WALLET_SEED ?? ""
const PASSPHRASE = process.env.SAGE_WALLET_PASSPHRASE ?? ""
const NETWORK = (process.env.SAGE_NETWORK ?? "testnet").toLowerCase()
const MAX_SINGLE_TX = BigInt(process.env.SAGE_MAX_SINGLE_TX_NANOERG ?? "10000000")
const MAX_BODY_BYTES = Number(process.env.SAGE_SIGNER_MAX_BODY_BYTES ?? "262144")
const WHITELIST = (process.env.SAGE_WHITELIST_ADDRS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
const BOOTED_AT = new Date()
const SERVICE_VERSION = "0.1.0"

const counters = {
  badRequests: 0,
  policyRejected: 0,
  signFailed: 0,
  signed: 0,
  signRequests: 0,
  unauthorized: 0,
}

if (!TOKEN || TOKEN.length < 32) {
  console.error("✗ SAGE_SIGNER_TOKEN missing or <32 chars. Generate: openssl rand -hex 32")
  process.exit(1)
}
if (!SEED) {
  console.error("✗ SAGE_WALLET_SEED missing. Set BIP-39 mnemonic in .env")
  process.exit(1)
}

// Derive the HD key once at boot — the Prover signs many txs with it.
const KEY = await ErgoHDKey.fromMnemonic(SEED, PASSPHRASE ? { passphrase: PASSPHRASE } : undefined)

console.log("Sage signer starting…")
console.log(`  network: ${NETWORK}`)
console.log(`  port: ${PORT}`)
console.log(`  policy: max ${MAX_SINGLE_TX} nanoERG/tx, ${WHITELIST.length} whitelisted addr(s)`)
console.log(`  max body: ${MAX_BODY_BYTES} bytes`)
console.log()

const prover = new Prover()

const server = http.createServer(async (req, res) => {
  const path = requestPath(req)

  if (req.method === "GET" && path === "/health") {
    sendJson(res, 200, healthPayload())
    return
  }

  if (req.method === "GET" && path === "/ready") {
    if (!isAuthorized(req)) {
      counters.unauthorized++
      sendJson(res, 401, { error: "unauthorized" })
      return
    }
    sendJson(res, 200, readyPayload())
    return
  }

  if (req.method !== "POST" || path !== "/sign") {
    res.writeHead(404, { "content-type": "application/json" })
    res.end(JSON.stringify({ error: "POST /sign only; GET /health and GET /ready available" }))
    return
  }

  // Auth — constant-time compare on the bearer token.
  if (!isAuthorized(req)) {
    counters.unauthorized++
    sendJson(res, 401, { error: "unauthorized" })
    return
  }
  counters.signRequests++

  // Read body (small — single tx, sub-100KB even with many inputs).
  let raw = ""
  let bodyTooLarge = false
  req.on("data", (c) => {
    if (bodyTooLarge) return
    raw += c
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
      bodyTooLarge = true
    }
  })
  req.on("end", async () => {
    if (bodyTooLarge) {
      counters.badRequests++
      audit("REJECT", "request body too large", { maxBodyBytes: MAX_BODY_BYTES })
      sendJson(res, 413, { error: `request body exceeds ${MAX_BODY_BYTES} bytes` })
      return
    }

    let body
    try {
      body = JSON.parse(raw)
    } catch {
      counters.badRequests++
      sendJson(res, 400, { error: "invalid JSON" })
      return
    }
    const unsigned = body?.unsignedTx
    if (!unsigned || typeof unsigned !== "object") {
      counters.badRequests++
      sendJson(res, 400, { error: "unsignedTx missing or not an object" })
      return
    }

    // Policy: spending cap.
    const totalSpend = sumOutputValue(unsigned)
    if (totalSpend > MAX_SINGLE_TX) {
      counters.policyRejected++
      audit("REJECT", "tx exceeds spending cap", { totalSpend: String(totalSpend), cap: String(MAX_SINGLE_TX) })
      sendJson(res, 403, { error: `tx total ${totalSpend} > cap ${MAX_SINGLE_TX}` })
      return
    }

    // Policy: address whitelist.
    if (WHITELIST.length > 0) {
      const recipients = uniqueRecipients(unsigned)
      const offending = recipients.filter((r) => !WHITELIST.includes(r))
      if (offending.length > 0) {
        counters.policyRejected++
        audit("REJECT", "tx pays unwhitelisted addr", { offending })
        sendJson(res, 403, { error: `unwhitelisted recipient: ${offending[0]}` })
        return
      }
    }

    try {
      const signed = prover.signTransaction(unsigned, [KEY])
      counters.signed++
      audit("SIGN", "ok", { txId: signed?.id ?? "(unknown)", spend: String(totalSpend) })
      res.writeHead(200, { "content-type": "application/json" })
      res.end(stringifyWithBigInts({ signedTx: signed }))
    } catch (err) {
      const msg = err instanceof Error ? err.message : "sign failed"
      counters.signFailed++
      audit("SIGN_FAIL", msg)
      sendJson(res, 422, { error: msg })
    }
  })

  req.on("error", (err) => {
    counters.badRequests++
    audit("SIGN_FAIL", `req error: ${err instanceof Error ? err.message : err}`)
    sendJson(res, 400, { error: "request error" })
  })
})

server.listen(PORT, () => {
  console.log(`✓ ready on http://localhost:${PORT}/sign`)
  console.log(`  health: http://localhost:${PORT}/health`)
  console.log(`  ready:  http://localhost:${PORT}/ready`)
  console.log(`  expose via: cloudflared tunnel --url http://localhost:${PORT}`)
  console.log(`  set Vercel: SAGE_SIGNER_URL=https://<tunnel>/sign`)
  console.log(`              SAGE_SIGNER_TOKEN=<same as in .env>`)
  console.log()
})

// ── helpers ──────────────────────────────────────────────────────────────────

function sumOutputValue(tx) {
  try {
    const outs = tx.outputs ?? []
    return outs.reduce((sum, o) => sum + BigInt(o?.value ?? 0), 0n)
  } catch {
    return 0n
  }
}

function uniqueRecipients(tx) {
  try {
    const outs = tx.outputs ?? []
    return [...new Set(outs.map((o) => o?.address).filter(Boolean))]
  } catch {
    return []
  }
}

function requestPath(req) {
  try {
    return new URL(req.url ?? "/", "http://localhost").pathname
  } catch {
    return req.url ?? "/"
  }
}

function isAuthorized(req) {
  const auth = req.headers.authorization ?? ""
  const presented = auth.startsWith("Bearer ") ? auth.slice(7) : ""
  return presented.length === TOKEN.length && crypto.timingSafeEqual(Buffer.from(presented), Buffer.from(TOKEN))
}

function healthPayload() {
  return {
    ok: true,
    service: "sage-signer",
    version: SERVICE_VERSION,
    status: "up",
    uptime_ms: Date.now() - BOOTED_AT.getTime(),
  }
}

function readyPayload() {
  return {
    ...healthPayload(),
    status: "ready",
    network: NETWORK,
    policy: {
      max_single_tx_nanoerg: String(MAX_SINGLE_TX),
      max_body_bytes: MAX_BODY_BYTES,
      whitelist_configured: WHITELIST.length > 0,
      whitelist_count: WHITELIST.length,
    },
    counters: { ...counters },
  }
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "cache-control": "no-store",
    "content-type": "application/json",
  })
  res.end(JSON.stringify(payload))
}

/**
 * JSON.stringify that handles BigInt — Fleet SDK's SignedTransaction
 * has bigint values on outputs. The Ergo node accepts decimal-string
 * values, so we coerce on the way out.
 */
function stringifyWithBigInts(obj) {
  return JSON.stringify(obj, (_key, value) => {
    if (typeof value === "bigint") return value.toString()
    return value
  })
}

function audit(verdict, message, detail) {
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    verdict,
    message,
    ...(detail ? { detail } : {}),
  })
  console.log(`[sage-signer] ${line}`)
}
