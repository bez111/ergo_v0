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
 *   GET /metrics
 *   Authorization: Bearer <SAGE_SIGNER_TOKEN>
 *   → 200 Prometheus-style counters/gauges
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
import { ErgoAddress, Network as FleetNetwork } from "@fleet-sdk/core"

const PORT = Number(process.env.PORT ?? 8911)
const TOKEN = process.env.SAGE_SIGNER_TOKEN ?? ""
const SEED = process.env.SAGE_WALLET_SEED ?? ""
const PASSPHRASE = process.env.SAGE_WALLET_PASSPHRASE ?? ""
const NETWORK = (process.env.SAGE_NETWORK ?? "testnet").toLowerCase()
const MAX_SINGLE_TX = BigInt(process.env.SAGE_MAX_SINGLE_TX_NANOERG ?? "10000000")
const MAX_BODY_BYTES = Number(process.env.SAGE_SIGNER_MAX_BODY_BYTES ?? "262144")
const MAX_REQUESTS_PER_MINUTE = Number(process.env.SAGE_SIGNER_MAX_REQUESTS_PER_MINUTE ?? "30")
const FAILURE_TRIP_THRESHOLD = Number(process.env.SAGE_SIGNER_FAILURE_TRIP_THRESHOLD ?? "5")
const FAILURE_COOLDOWN_MS = Number(process.env.SAGE_SIGNER_FAILURE_COOLDOWN_MS ?? "300000")
const WHITELIST = (process.env.SAGE_WHITELIST_ADDRS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
const BOOTED_AT = new Date()
const SERVICE_VERSION = "0.1.0"

const counters = {
  badRequests: 0,
  policyRejected: 0,
  rateLimited: 0,
  signFailed: 0,
  signed: 0,
  signRequests: 0,
  unauthorized: 0,
}

const opsState = {
  consecutiveSignFailures: 0,
  minuteStartedAt: Date.now(),
  requestsThisMinute: 0,
  trippedUntil: 0,
  lastFailure: null,
  lastPolicyReject: null,
  lastSigned: null,
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
const SIGNER_ADDRESS = ErgoAddress
  .fromPublicKey(KEY.publicKey, NETWORK === "mainnet" ? FleetNetwork.Mainnet : FleetNetwork.Testnet)
  .toString(NETWORK === "mainnet" ? FleetNetwork.Mainnet : FleetNetwork.Testnet)
const EXPECTED_ADDRESS = process.env.SAGE_EXPECTED_WALLET_ADDRESS ?? process.env.SAGE_WALLET_ADDRESS ?? ""

if (EXPECTED_ADDRESS && EXPECTED_ADDRESS !== SIGNER_ADDRESS) {
  console.error("✗ signer wallet mismatch")
  console.error(`  derived signer address: ${SIGNER_ADDRESS}`)
  console.error(`  expected address:       ${EXPECTED_ADDRESS}`)
  console.error("  Fix SAGE_WALLET_SEED or SAGE_WALLET_ADDRESS before exposing /sign.")
  process.exit(1)
}

console.log("Sage signer starting…")
console.log(`  network: ${NETWORK}`)
console.log(`  signer:  ${SIGNER_ADDRESS}`)
console.log(`  port: ${PORT}`)
console.log(`  policy: max ${MAX_SINGLE_TX} nanoERG/tx, ${WHITELIST.length} whitelisted addr(s)`)
console.log(`  max body: ${MAX_BODY_BYTES} bytes`)
console.log(`  rate: ${MAX_REQUESTS_PER_MINUTE}/min, trip after ${FAILURE_TRIP_THRESHOLD} signing failure(s)`)
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

  if (req.method === "GET" && path === "/metrics") {
    if (!isAuthorized(req)) {
      counters.unauthorized++
      sendJson(res, 401, { error: "unauthorized" })
      return
    }
    res.writeHead(200, {
      "cache-control": "no-store",
      "content-type": "text/plain; charset=utf-8",
    })
    res.end(metricsPayload())
    return
  }

  if (req.method !== "POST" || path !== "/sign") {
    res.writeHead(404, { "content-type": "application/json" })
    res.end(JSON.stringify({ error: "POST /sign only; GET /health and GET /ready available" }))
    return
  }

  const requestId = crypto.randomUUID()
  res.setHeader("x-sage-signer-request-id", requestId)

  // Auth — constant-time compare on the bearer token.
  if (!isAuthorized(req)) {
    counters.unauthorized++
    sendJson(res, 401, { error: "unauthorized" })
    return
  }

  const circuit = circuitState()
  if (circuit.open) {
    counters.rateLimited++
    audit("REJECT", "circuit open after repeated signing failures", {
      requestId,
      trippedUntil: circuit.trippedUntil,
    })
    sendJson(res, 503, {
      error: "signer circuit open",
      trippedUntil: circuit.trippedUntil,
    })
    return
  }

  if (!allowRequestThisMinute()) {
    counters.rateLimited++
    audit("REJECT", "rate limit exceeded", {
      requestId,
      maxRequestsPerMinute: MAX_REQUESTS_PER_MINUTE,
    })
    sendJson(res, 429, { error: "signer rate limit exceeded" })
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
      recordFailure("bad_request", "request body too large", { requestId, maxBodyBytes: MAX_BODY_BYTES }, false)
      sendJson(res, 413, { error: `request body exceeds ${MAX_BODY_BYTES} bytes` })
      return
    }

    let body
    try {
      body = JSON.parse(raw)
    } catch {
      counters.badRequests++
      recordFailure("bad_request", "invalid JSON", { requestId }, false)
      sendJson(res, 400, { error: "invalid JSON" })
      return
    }
    const unsigned = body?.unsignedTx
    if (!unsigned || typeof unsigned !== "object") {
      counters.badRequests++
      recordFailure("bad_request", "unsignedTx missing or not an object", { requestId }, false)
      sendJson(res, 400, { error: "unsignedTx missing or not an object" })
      return
    }

    // Policy: spending cap.
    const totalSpend = sumOutputValue(unsigned)
    if (totalSpend > MAX_SINGLE_TX) {
      counters.policyRejected++
      recordPolicyReject("tx exceeds spending cap", {
        requestId,
        totalSpend: String(totalSpend),
        cap: String(MAX_SINGLE_TX),
      })
      sendJson(res, 403, { error: `tx total ${totalSpend} > cap ${MAX_SINGLE_TX}` })
      return
    }

    // Policy: address whitelist.
    if (WHITELIST.length > 0) {
      const recipients = uniqueRecipients(unsigned)
      const offending = recipients.filter((r) => !WHITELIST.includes(r))
      if (offending.length > 0) {
        counters.policyRejected++
        recordPolicyReject("tx pays unwhitelisted addr", { requestId, offending })
        sendJson(res, 403, { error: `unwhitelisted recipient: ${offending[0]}` })
        return
      }
    }

    try {
      const signed = prover.signTransaction(unsigned, [KEY])
      counters.signed++
      opsState.consecutiveSignFailures = 0
      opsState.lastSigned = {
        ts: new Date().toISOString(),
        txId: signed?.id ?? null,
        spend: String(totalSpend),
      }
      audit("SIGN", "ok", { requestId, txId: signed?.id ?? "(unknown)", spend: String(totalSpend) })
      res.writeHead(200, { "content-type": "application/json" })
      res.end(stringifyWithBigInts({ signedTx: signed }))
    } catch (err) {
      const msg = err instanceof Error ? err.message : "sign failed"
      counters.signFailed++
      recordFailure("sign_failed", msg, { requestId }, true)
      sendJson(res, 422, { error: msg })
    }
  })

  req.on("error", (err) => {
    counters.badRequests++
    recordFailure("request_error", `req error: ${err instanceof Error ? err.message : err}`, { requestId }, false)
    sendJson(res, 400, { error: "request error" })
  })
})

server.listen(PORT, () => {
  console.log(`✓ ready on http://localhost:${PORT}/sign`)
  console.log(`  health: http://localhost:${PORT}/health`)
  console.log(`  ready:  http://localhost:${PORT}/ready`)
  console.log(`  metrics: http://localhost:${PORT}/metrics`)
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
  const circuit = circuitState()
  return {
    ok: true,
    service: "sage-signer",
    version: SERVICE_VERSION,
    network: NETWORK,
    signer_address: SIGNER_ADDRESS,
    address_matches_expected: EXPECTED_ADDRESS ? EXPECTED_ADDRESS === SIGNER_ADDRESS : null,
    status: circuit.open ? "degraded" : "up",
    signing_available: !circuit.open,
    uptime_ms: Date.now() - BOOTED_AT.getTime(),
  }
}

function readyPayload() {
  const circuit = circuitState()
  return {
    ...healthPayload(),
    status: circuit.open ? "degraded" : "ready",
    network: NETWORK,
    policy: {
      max_single_tx_nanoerg: String(MAX_SINGLE_TX),
      max_body_bytes: MAX_BODY_BYTES,
      whitelist_configured: WHITELIST.length > 0,
      whitelist_count: WHITELIST.length,
      max_requests_per_minute: MAX_REQUESTS_PER_MINUTE,
      failure_trip_threshold: FAILURE_TRIP_THRESHOLD,
      failure_cooldown_ms: FAILURE_COOLDOWN_MS,
    },
    counters: { ...counters },
    ops: safeOpsState(),
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

function allowRequestThisMinute() {
  const now = Date.now()
  if (now - opsState.minuteStartedAt >= 60_000) {
    opsState.minuteStartedAt = now
    opsState.requestsThisMinute = 0
  }
  opsState.requestsThisMinute += 1
  return opsState.requestsThisMinute <= MAX_REQUESTS_PER_MINUTE
}

function circuitState() {
  const now = Date.now()
  if (opsState.trippedUntil && now >= opsState.trippedUntil) {
    opsState.trippedUntil = 0
    opsState.consecutiveSignFailures = 0
  }
  return {
    open: opsState.trippedUntil > now,
    trippedUntil: opsState.trippedUntil ? new Date(opsState.trippedUntil).toISOString() : null,
  }
}

function recordPolicyReject(message, detail) {
  opsState.lastPolicyReject = {
    ts: new Date().toISOString(),
    message,
    detail,
  }
  audit("REJECT", message, detail)
}

function recordFailure(kind, message, detail, countsTowardTrip) {
  const failure = {
    ts: new Date().toISOString(),
    kind,
    message,
    detail,
  }
  opsState.lastFailure = failure
  if (countsTowardTrip) {
    opsState.consecutiveSignFailures += 1
    if (
      FAILURE_TRIP_THRESHOLD > 0 &&
      opsState.consecutiveSignFailures >= FAILURE_TRIP_THRESHOLD
    ) {
      opsState.trippedUntil = Date.now() + FAILURE_COOLDOWN_MS
      failure.trippedUntil = new Date(opsState.trippedUntil).toISOString()
    }
  }
  audit(kind === "sign_failed" ? "SIGN_FAIL" : "REJECT", message, detail)
}

function safeOpsState() {
  const circuit = circuitState()
  return {
    consecutive_sign_failures: opsState.consecutiveSignFailures,
    circuit_open: circuit.open,
    tripped_until: circuit.trippedUntil,
    requests_this_minute: opsState.requestsThisMinute,
    last_failure: opsState.lastFailure,
    last_policy_reject: opsState.lastPolicyReject,
    last_signed: opsState.lastSigned,
  }
}

function metricsPayload() {
  const lines = [
    "# HELP sage_signer_sign_requests_total Total authorized signing requests.",
    "# TYPE sage_signer_sign_requests_total counter",
    `sage_signer_sign_requests_total ${counters.signRequests}`,
    "# HELP sage_signer_signed_total Total successful signed transactions.",
    "# TYPE sage_signer_signed_total counter",
    `sage_signer_signed_total ${counters.signed}`,
    "# HELP sage_signer_sign_failed_total Total failed signing attempts.",
    "# TYPE sage_signer_sign_failed_total counter",
    `sage_signer_sign_failed_total ${counters.signFailed}`,
    "# HELP sage_signer_policy_rejected_total Total policy rejections.",
    "# TYPE sage_signer_policy_rejected_total counter",
    `sage_signer_policy_rejected_total ${counters.policyRejected}`,
    "# HELP sage_signer_rate_limited_total Total signer rate limit or circuit rejections.",
    "# TYPE sage_signer_rate_limited_total counter",
    `sage_signer_rate_limited_total ${counters.rateLimited}`,
    "# HELP sage_signer_consecutive_sign_failures Current consecutive signing failures.",
    "# TYPE sage_signer_consecutive_sign_failures gauge",
    `sage_signer_consecutive_sign_failures ${opsState.consecutiveSignFailures}`,
    "# HELP sage_signer_circuit_open Whether the signer circuit breaker is open.",
    "# TYPE sage_signer_circuit_open gauge",
    `sage_signer_circuit_open ${circuitState().open ? 1 : 0}`,
  ]
  return `${lines.join("\n")}\n`
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
