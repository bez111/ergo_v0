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
 *   → 422 signing failed (signer error from fleet-sdk)
 *
 * See README.md for setup, ngrok / cloudflared / Tailscale Funnel
 * exposure paths, and how to wire SAGE_SIGNER_URL on Vercel.
 */

import "dotenv/config"
import http from "node:http"
import crypto from "node:crypto"
// Fleet SDK references — wire these in once you've validated the service:
//   import { Mnemonic } from "@fleet-sdk/wallet";
//   import { ErgoUnsignedTransaction } from "@fleet-sdk/core";
//   import { TransactionBuilder, SAFE_MIN_BOX_VALUE } from "@fleet-sdk/core";
// The Fleet SDK signing API surface evolves between minor releases; the
// final implementation here intentionally stays as a clear scaffold so
// you can pin the exact version against your @fleet-sdk/wallet revision
// without reverse-engineering this file.

const PORT = Number(process.env.PORT ?? 8911)
const TOKEN = process.env.SAGE_SIGNER_TOKEN ?? ""
const SEED = process.env.SAGE_WALLET_SEED ?? ""
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

console.log(`Sage signer starting…`)
console.log(`  network: ${NETWORK}`)
console.log(`  port: ${PORT}`)
console.log(`  policy: max ${MAX_SINGLE_TX} nanoERG/tx, ${WHITELIST.length} whitelisted addr(s)`)
console.log()

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

  // Parse body.
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
      audit("REJECT", "tx exceeds spending cap", { totalSpend, cap: String(MAX_SINGLE_TX) })
      res.writeHead(403, { "content-type": "application/json" })
      res.end(
        JSON.stringify({
          error: `tx total ${totalSpend} > cap ${MAX_SINGLE_TX}`,
        }),
      )
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
      const signed = await signUnsignedTx(unsigned)
      audit("SIGN", "ok", { txId: signed?.id ?? "(unknown)" })
      res.writeHead(200, { "content-type": "application/json" })
      res.end(JSON.stringify({ signedTx: signed }))
    } catch (err) {
      const msg = err instanceof Error ? err.message : "sign failed"
      audit("SIGN_FAIL", msg)
      res.writeHead(422, { "content-type": "application/json" })
      res.end(JSON.stringify({ error: msg }))
    }
  })
})

server.listen(PORT, () => {
  console.log(`✓ ready on http://localhost:${PORT}/sign`)
  console.log(`  expose via: ngrok http ${PORT}  (or cloudflared / Tailscale Funnel)`)
  console.log(`  set Vercel: SAGE_SIGNER_URL=https://<tunnel>/sign`)
  console.log(`              SAGE_SIGNER_TOKEN=<same as in .env>`)
})

// ─────────────────────────────────────────────────────────────────────────────
// Signing — Fleet SDK wiring stub.
//
// This is the only function that needs Fleet SDK; it stays a clean stub
// so the version you pin can match your @fleet-sdk/wallet revision.
// Reference: https://github.com/fleet-sdk/fleet/tree/main/packages/wallet
//
// Pseudocode:
//   1. const mnemonic = await Mnemonic.fromPhrase(SEED, PASSPHRASE);
//   2. const seed = mnemonic.toSeed();
//   3. const wallet = HDKey.fromSeed(seed).derive(ERGO_DERIVATION_PATH);
//   4. const prover = new TransactionProver(wallet.privateKey);
//   5. return await prover.signTransaction(unsignedTx);
// ─────────────────────────────────────────────────────────────────────────────
async function signUnsignedTx(_unsigned) {
  throw new Error(
    "signUnsignedTx is a stub — see scripts/sage-signer/signer.mjs and the README's 'Implementation' section to wire @fleet-sdk/wallet against your testnet wallet.",
  )
}

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

function audit(verdict, message, detail) {
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    verdict,
    message,
    ...(detail ? { detail } : {}),
  })
  console.log(`[sage-signer] ${line}`)
}
