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
const WHITELIST = (process.env.SAGE_WHITELIST_ADDRS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)

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
console.log()

const prover = new Prover()

const server = http.createServer(async (req, res) => {
  if (req.method !== "POST" || req.url !== "/sign") {
    res.writeHead(404, { "content-type": "application/json" })
    res.end(JSON.stringify({ error: "POST /sign only" }))
    return
  }

  // Auth — constant-time compare on the bearer token.
  const auth = req.headers.authorization ?? ""
  const presented = auth.startsWith("Bearer ") ? auth.slice(7) : ""
  if (
    presented.length !== TOKEN.length ||
    !crypto.timingSafeEqual(Buffer.from(presented), Buffer.from(TOKEN))
  ) {
    res.writeHead(401, { "content-type": "application/json" })
    res.end(JSON.stringify({ error: "unauthorized" }))
    return
  }

  // Read body (small — single tx, sub-100KB even with many inputs).
  let raw = ""
  req.on("data", (c) => (raw += c))
  req.on("end", async () => {
    let body
    try {
      body = JSON.parse(raw)
    } catch {
      res.writeHead(400, { "content-type": "application/json" })
      res.end(JSON.stringify({ error: "invalid JSON" }))
      return
    }
    const unsigned = body?.unsignedTx
    if (!unsigned || typeof unsigned !== "object") {
      res.writeHead(400, { "content-type": "application/json" })
      res.end(JSON.stringify({ error: "unsignedTx missing or not an object" }))
      return
    }

    // Policy: spending cap.
    const totalSpend = sumOutputValue(unsigned)
    if (totalSpend > MAX_SINGLE_TX) {
      audit("REJECT", "tx exceeds spending cap", { totalSpend: String(totalSpend), cap: String(MAX_SINGLE_TX) })
      res.writeHead(403, { "content-type": "application/json" })
      res.end(JSON.stringify({ error: `tx total ${totalSpend} > cap ${MAX_SINGLE_TX}` }))
      return
    }

    // Policy: address whitelist.
    if (WHITELIST.length > 0) {
      const recipients = uniqueRecipients(unsigned)
      const offending = recipients.filter((r) => !WHITELIST.includes(r))
      if (offending.length > 0) {
        audit("REJECT", "tx pays unwhitelisted addr", { offending })
        res.writeHead(403, { "content-type": "application/json" })
        res.end(JSON.stringify({ error: `unwhitelisted recipient: ${offending[0]}` }))
        return
      }
    }

    try {
      const signed = prover.signTransaction(unsigned, [KEY])
      audit("SIGN", "ok", { txId: signed?.id ?? "(unknown)", spend: String(totalSpend) })
      res.writeHead(200, { "content-type": "application/json" })
      res.end(stringifyWithBigInts({ signedTx: signed }))
    } catch (err) {
      const msg = err instanceof Error ? err.message : "sign failed"
      audit("SIGN_FAIL", msg)
      res.writeHead(422, { "content-type": "application/json" })
      res.end(JSON.stringify({ error: msg }))
    }
  })

  req.on("error", (err) => {
    audit("SIGN_FAIL", `req error: ${err instanceof Error ? err.message : err}`)
    res.writeHead(400, { "content-type": "application/json" })
    res.end(JSON.stringify({ error: "request error" }))
  })
})

server.listen(PORT, () => {
  console.log(`✓ ready on http://localhost:${PORT}/sign`)
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
