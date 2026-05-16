#!/usr/bin/env node
/**
 * Sage testnet bootstrap.
 *
 *   $ node bootstrap.mjs            (generates a fresh mnemonic + address)
 *   $ node bootstrap.mjs --balance  (checks current balance via explorer)
 *   $ node bootstrap.mjs --env-out  (prints Vercel env-add commands)
 *
 * What it does:
 *   1. Generates a 24-word BIP-39 mnemonic (or reuses SAGE_WALLET_SEED
 *      if .env already has one) and derives the testnet Ergo address at
 *      m/44'/429'/0'/0/0 (the standard Ergo path used by Nautilus).
 *   2. Saves the mnemonic to .env (non-destructive — refuses to overwrite).
 *   3. Prints the testnet address + faucet URL.
 *   4. With --balance, polls the explorer until balance >= 0.15 ERG.
 *   5. With --env-out, prints `vercel env add` commands ready to paste.
 *
 * The mnemonic NEVER leaves this machine. The only thing that should go
 * to Vercel is the SAGE_WALLET_ADDRESS — the seed stays here for the
 * standalone signer (signer.mjs) to use locally.
 */

import "dotenv/config"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { ErgoHDKey, Prover, generateMnemonic } from "@fleet-sdk/wallet"
import {
  ErgoAddress,
  Network,
  OutputBuilder,
  TransactionBuilder,
} from "@fleet-sdk/core"
import { SByte, SColl, SInt } from "@fleet-sdk/serializer"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ENV_PATH = join(__dirname, ".env")
const TESTNET_API = "https://api-testnet.ergoplatform.com/api/v1"
const TESTNET_NODE = "http://213.239.193.208:9052" // public testnet node
const FAUCET_URL = "https://testnet.ergoplatform.com/faucet"
const MIN_BALANCE_NANO = 150_000_000n // 0.15 ERG — covers Reserve + buffer
const RESERVE_VALUE_NANO = 100_000_000n // 0.1 ERG locked in the Reserve

const args = new Set(process.argv.slice(2))

async function main() {
  const seed = await ensureMnemonic()
  const key = await ErgoHDKey.fromMnemonic(seed)
  const address = ErgoAddress.fromPublicKey(key.publicKey, Network.Testnet).toString(Network.Testnet)

  console.log("")
  console.log("──────────────────────────────────────────────────────────────")
  console.log("  Sage testnet wallet")
  console.log("──────────────────────────────────────────────────────────────")
  console.log("  address:  " + address)
  console.log("  network:  testnet")
  console.log("  path:     m/44'/429'/0'/0/0  (standard Ergo)")
  console.log("──────────────────────────────────────────────────────────────")
  console.log("")

  if (args.has("--env-out")) {
    printEnvOut(address)
    return
  }

  if (args.has("--balance")) {
    await pollBalance(address)
    return
  }

  if (args.has("--reserve")) {
    await createReserve(key, address)
    return
  }

  if (args.has("--issue-note")) {
    await issueTestNote(key, address)
    return
  }

  console.log("Next steps:")
  console.log("")
  console.log("  1. Open " + FAUCET_URL)
  console.log("     Paste the address above. Submit. (~1 testnet ERG arrives in ~2 min.)")
  console.log("")
  console.log("  2. Verify funding landed:")
  console.log("       node bootstrap.mjs --balance")
  console.log("")
  console.log("  3. Once funded, get the env vars to set on Vercel:")
  console.log("       node bootstrap.mjs --env-out")
  console.log("")
  console.log("  4. (After step 3, for real Note issuance) create the Reserve:")
  console.log("       node bootstrap.mjs --reserve")
  console.log("")
  console.log("  The mnemonic is stored in scripts/sage-signer/.env on THIS")
  console.log("  machine only. It never leaves your laptop. The standalone")
  console.log("  signer (signer.mjs) reads it from the same .env when you")
  console.log("  run it for redemption settlement.")
  console.log("")
}

async function ensureMnemonic() {
  let seed = process.env.SAGE_WALLET_SEED
  if (seed && seed.split(/\s+/).length >= 12) {
    console.log("[bootstrap] reusing existing SAGE_WALLET_SEED from .env")
    return seed
  }

  // Generate fresh
  seed = generateMnemonic(256) // 24 words
  console.log("[bootstrap] generated fresh 24-word mnemonic")

  // Save non-destructively
  let envBody = ""
  if (existsSync(ENV_PATH)) {
    envBody = readFileSync(ENV_PATH, "utf8")
    if (/^SAGE_WALLET_SEED=.+/m.test(envBody)) {
      throw new Error(
        "scripts/sage-signer/.env already has SAGE_WALLET_SEED — refusing to overwrite. " +
          "Either delete the line manually, or run with that mnemonic kept.",
      )
    }
  } else {
    // Seed from .env.example if available
    const examplePath = join(__dirname, ".env.example")
    if (existsSync(examplePath)) envBody = readFileSync(examplePath, "utf8")
  }

  // Replace empty SAGE_WALLET_SEED= or append
  if (/^SAGE_WALLET_SEED=\s*$/m.test(envBody)) {
    envBody = envBody.replace(/^SAGE_WALLET_SEED=\s*$/m, `SAGE_WALLET_SEED="${seed}"`)
  } else {
    envBody += `\n# Auto-added by bootstrap.mjs on ${new Date().toISOString()}\nSAGE_WALLET_SEED="${seed}"\n`
  }
  writeFileSync(ENV_PATH, envBody, { mode: 0o600 })
  console.log("[bootstrap] wrote scripts/sage-signer/.env (chmod 600)")
  console.log("")
  console.log("  YOUR MNEMONIC (write this down too — losing it = losing funds):")
  console.log("  " + seed.match(/(\S+\s+){6}/g)?.map((l) => "    " + l.trim()).join("\n  "))
  console.log("")
  return seed
}

async function pollBalance(address) {
  console.log(`Polling ${TESTNET_API}/addresses/${address}/balance/total …`)
  for (let attempt = 0; attempt < 40; attempt++) {
    const res = await fetch(`${TESTNET_API}/addresses/${address}/balance/total`)
    if (res.ok) {
      const body = await res.json()
      const nano = BigInt(body?.confirmed?.nanoErgs ?? 0)
      const erg = Number(nano) / 1e9
      const bar = Number(nano) >= Number(MIN_BALANCE_NANO) ? "✓" : "·"
      console.log(`  ${bar} balance: ${erg.toFixed(4)} ERG  (need ≥ 0.15)`)
      if (nano >= MIN_BALANCE_NANO) {
        console.log("")
        console.log("  ✓ funded. Next: node bootstrap.mjs --env-out")
        return
      }
    } else {
      console.log(`  · explorer ${res.status}, retry…`)
    }
    await sleep(15_000)
  }
  console.log("")
  console.log("  Timed out after 10 min. If the faucet tx is in mempool but not confirmed,")
  console.log("  wait a few more minutes and retry. Or check the explorer directly:")
  console.log(`  https://testnet.ergoplatform.com/addresses/${address}`)
}

function printEnvOut(address) {
  console.log("Run these on your Vercel project (one at a time, paste value when prompted):")
  console.log("")
  console.log(`  cd /Users/alexanderbezkrovny/Desktop/ergo_v0`)
  console.log(`  vercel env add SAGE_WALLET_ADDRESS production`)
  console.log(`  # paste: ${address}`)
  console.log("")
  console.log(`  vercel env add SAGE_NETWORK production`)
  console.log(`  # paste: testnet`)
  console.log("")
  console.log("  # SAGE_RESERVE_BOX_ID — pending. Three options:")
  console.log("  #   A) Skip for first test (Sage premium gating still activates")
  console.log("  #      with a placeholder box id; quotes generate but Notes")
  console.log("  #      can't be issued against a non-existent Reserve).")
  console.log("  #   B) Create Reserve via the (separate) Reserve setup script")
  console.log("  #      once we wire signing — pending.")
  console.log("  #   C) Use a known testnet Reserve box id (community shared).")
  console.log("")
  console.log(`  vercel env add SAGE_RESERVE_BOX_ID production`)
  console.log(`  # paste: 0000000000000000000000000000000000000000000000000000000000000000`)
  console.log("  # (placeholder — works for testing the 402 + quote flow)")
  console.log("")
  console.log(`  vercel --prod --yes`)
  console.log("")
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

// ─────────────────────────────────────────────────────────────────────────────
// --reserve : create the on-chain Reserve box.
//
// In dev/testnet mode the Reserve is a plain P2PK output to ourselves with
// a known value (0.1 ERG). The buyer issues Notes that reference this
// box id in their acceptance predicate; Sage redeems Notes against this
// reserve. We build the tx with Fleet SDK's TransactionBuilder, sign
// with Prover + our HD key, submit to a public testnet node, and poll
// the explorer until the new output is indexed — then print the box id.
// ─────────────────────────────────────────────────────────────────────────────
async function createReserve(key, address) {
  console.log("Creating Reserve on testnet…")
  console.log(`  funder address  ${address}`)
  console.log(`  reserve value   ${nanoToErg(RESERVE_VALUE_NANO)} ERG`)
  console.log("")

  // 1. Pull unspent boxes for fee + output coverage.
  const utxos = await fetchUnspentBoxes(address)
  if (utxos.length === 0) {
    throw new Error(`No unspent boxes at ${address}. Fund via ${FAUCET_URL}.`)
  }
  const totalAvailable = utxos.reduce((s, b) => s + BigInt(b.value), 0n)
  console.log(`  unspent boxes   ${utxos.length}  (${nanoToErg(totalAvailable)} ERG total)`)

  // 2. Current chain height for tx creation.
  const height = await fetchHeight()
  console.log(`  current height  ${height}`)
  console.log("")

  // 3. Build the unsigned tx — one output to ourselves, change back, min fee.
  //    .build() (default) returns the Fleet-internal ErgoUnsignedTransaction
  //    that the Prover knows how to sign. .build("EIP-12") gives the wallet-
  //    interchange shape — useful for sending to Nautilus, wrong here.
  const builtTx = new TransactionBuilder(height)
    .from(utxos)
    .to(new OutputBuilder(RESERVE_VALUE_NANO, address))
    .sendChangeTo(address)
    .payMinFee()
    .build()

  // 4. Sign locally with our derived key.
  const prover = new Prover()
  let signedTx
  try {
    signedTx = prover.signTransaction(builtTx, [key])
  } catch (err) {
    throw new Error(`Local signing failed: ${err instanceof Error ? err.message : String(err)}`)
  }
  console.log(`  signed tx id    ${signedTx.id}`)

  // 5. Submit to a public testnet node. The node accepts the standard
  //    JSON shape that SignedTransaction.toJSON() / toEIP12Object() emits.
  const submitPayload =
    typeof signedTx.toEIP12Object === "function"
      ? signedTx.toEIP12Object()
      : signedTx
  const submitRes = await fetch(`${TESTNET_NODE}/transactions`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(submitPayload),
  })
  const submitBody = await submitRes.text()
  if (!submitRes.ok) {
    throw new Error(`Node rejected tx (${submitRes.status}): ${submitBody}`)
  }
  // Node returns the tx id as a JSON string.
  const txId = submitBody.replace(/^"|"$/g, "")
  console.log(`  submitted       ${txId}`)
  console.log(`  explorer        https://testnet.ergoplatform.com/transactions/${txId}`)
  console.log("")

  // 6. Wait until the explorer indexes the tx, then resolve the Reserve box id.
  console.log("Polling explorer for confirmation (testnet block ≈ 2 min)…")
  let reserveBoxId
  for (let attempt = 0; attempt < 40; attempt++) {
    const r = await fetch(`${TESTNET_API}/transactions/${txId}`)
    if (r.ok) {
      const tx = await r.json()
      // The Reserve output is the one paying RESERVE_VALUE_NANO to ourselves
      // (the OTHER output is the change box).
      const reserve = (tx.outputs ?? []).find(
        (o) => o.address === address && BigInt(o.value) === RESERVE_VALUE_NANO,
      )
      if (reserve?.boxId) {
        reserveBoxId = reserve.boxId
        break
      }
    }
    process.stdout.write(".")
    await sleep(15_000)
  }
  console.log("")

  if (!reserveBoxId) {
    console.log("")
    console.log("  Tx submitted but explorer hasn't indexed it yet. Check manually:")
    console.log(`  curl -s ${TESTNET_API}/transactions/${txId} | jq`)
    return
  }

  console.log("")
  console.log("──────────────────────────────────────────────────────────────")
  console.log("  Reserve created")
  console.log("──────────────────────────────────────────────────────────────")
  console.log(`  box id    ${reserveBoxId}`)
  console.log(`  value     ${nanoToErg(RESERVE_VALUE_NANO)} ERG`)
  console.log("──────────────────────────────────────────────────────────────")
  console.log("")
  console.log("Update Vercel:")
  console.log("")
  console.log(`  cd /Users/alexanderbezkrovny/Desktop/ergo_v0`)
  console.log(`  vercel env rm SAGE_RESERVE_BOX_ID production --yes`)
  console.log(`  vercel env add SAGE_RESERVE_BOX_ID production`)
  console.log(`  # paste: ${reserveBoxId}`)
  console.log(`  vercel --prod --yes`)
  console.log("")
  console.log("After redeploy, the full end-to-end Sage flow works:")
  console.log("  → /code … → 402 → quote with this Reserve → buyer issues Note")
  console.log("  → Sage verifies on chain → premium answer streams back")
  console.log("")
}

async function fetchUnspentBoxes(address) {
  const url = `${TESTNET_API}/boxes/unspent/byAddress/${address}`
  const r = await fetch(url)
  if (!r.ok) throw new Error(`explorer ${r.status} fetching UTXOs`)
  const body = await r.json()
  // Explorer returns {items: [...], total} — TransactionBuilder accepts the
  // full box objects directly.
  return body.items ?? []
}

async function fetchHeight() {
  const r = await fetch(`${TESTNET_API}/blocks?limit=1&sortDirection=desc`)
  if (!r.ok) throw new Error(`explorer ${r.status} fetching height`)
  const body = await r.json()
  return Number(body?.items?.[0]?.height ?? 0)
}

function nanoToErg(nano) {
  const n = typeof nano === "bigint" ? nano : BigInt(nano)
  const erg = Number(n) / 1e9
  return erg.toFixed(9).replace(/\.?0+$/, "")
}

// ─────────────────────────────────────────────────────────────────────────────
// --issue-note : self-pay helper for end-to-end round-trip testing.
//
// Asks production Sage for a fresh quote (premium-trigger /code question),
// extracts taskHash/receiverAddress/reserveBoxId/deadline/price, builds
// the Note tx with the same registers ergo-agent-pay would emit
// (R4=reserveBoxId, R5=expiryHeight, R6=taskHash), signs locally, submits,
// and prints the resulting note_box_id ready for paste into the widget's
// PaymentPanel.
//
// The issuing wallet can be Sage's own test wallet or any funded testnet
// buyer wallet. Sage verifyPayment doesn't care who issued the Note, only
// that it matches the agreement's predicate at the right reserve box.
// ─────────────────────────────────────────────────────────────────────────────
async function issueTestNote(key, address) {
  const SAGE_BASE =
    process.env.SAGE_BASE_URL ?? "https://www.ergoblockchain.org"
  const PREMIUM_QUESTION =
    process.env.SAGE_TEST_QUESTION ?? "/code show me a Fleet SDK example"

  console.log("Issuing test Note for end-to-end Sage round-trip…")
  console.log(`  buyer wallet    ${address}`)
  console.log(`  via Sage at     ${SAGE_BASE}`)
  console.log(`  question        "${PREMIUM_QUESTION}"`)
  console.log("")

  // 1. Get a fresh quote.
  const quoteRes = await fetch(`${SAGE_BASE}/api/sage/quote`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ question: PREMIUM_QUESTION }),
  })
  if (!quoteRes.ok) {
    throw new Error(`/api/sage/quote returned ${quoteRes.status}: ${await quoteRes.text()}`)
  }
  const quoteBody = await quoteRes.json()
  if (!quoteBody.premium || !quoteBody.quote) {
    throw new Error(`Sage didn't classify the question as premium: ${JSON.stringify(quoteBody)}`)
  }
  const quote = quoteBody.quote
  console.log("  quote received:")
  console.log(`    quoteId       ${quote.quoteId}`)
  console.log(`    receiver      ${quote.receiverAddress}`)
  console.log(`    reserve       ${quote.reserveBoxId}`)
  console.log(`    taskHash      ${quote.taskHash}`)
  console.log(`    price         ${quote.price} ERG`)
  console.log(`    deadline      ${quote.deadline}`)
  console.log("")

  if (!/^[0-9a-f]{64}$/i.test(quote.reserveBoxId) || quote.reserveBoxId === "0".repeat(64)) {
    throw new Error(
      `Quote returned a placeholder reserve (${quote.reserveBoxId}). Run --reserve first and update SAGE_RESERVE_BOX_ID on Vercel.`,
    )
  }

  // 2. Pull our funded UTXOs + chain height.
  const utxos = await fetchUnspentBoxes(address)
  if (utxos.length === 0) {
    throw new Error(`No unspent boxes at ${address}. Fund via ${FAUCET_URL}.`)
  }
  const totalAvailable = utxos.reduce((s, b) => s + BigInt(b.value), 0n)
  console.log(`  funder UTxOs    ${utxos.length}  (${nanoToErg(totalAvailable)} ERG total)`)

  const height = await fetchHeight()
  console.log(`  chain height    ${height}`)

  // 3. Resolve the +N blocks deadline against current height.
  const deadlineMatch = /^\+(\d+)\s+blocks?$/.exec(quote.deadline)
  if (!deadlineMatch) {
    throw new Error(`Quote has unexpected deadline shape: ${quote.deadline}`)
  }
  const expiryBlock = height + Number(deadlineMatch[1])
  console.log(`  expiry block    ${expiryBlock}  (height + ${deadlineMatch[1]})`)

  // 4. Note value in nanoERG.
  const valueNano = BigInt(Math.round(Number(quote.price) * 1e9))

  // 5. Build the Note output with R4=reserve, R5=expiry, R6=taskHash —
  //    exactly the register layout ergo-agent-pay's buildNoteTx emits.
  const noteOutput = new OutputBuilder(valueNano, quote.receiverAddress)
    .setAdditionalRegisters({
      R4: SColl(SByte, hexToBytes(quote.reserveBoxId)).toHex(),
      R5: SInt(expiryBlock).toHex(),
      R6: SColl(SByte, hexToBytes(quote.taskHash)).toHex(),
    })

  const builtTx = new TransactionBuilder(height)
    .from(utxos)
    .to(noteOutput)
    .sendChangeTo(address)
    .payMinFee()
    .build()

  // 6. Sign locally.
  const prover = new Prover()
  const signedTx = prover.signTransaction(builtTx, [key])
  console.log(`  signed tx id    ${signedTx.id}`)

  // 7. Submit to public testnet node.
  const submitPayload =
    typeof signedTx.toEIP12Object === "function"
      ? signedTx.toEIP12Object()
      : signedTx
  const submitRes = await fetch(`${TESTNET_NODE}/transactions`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(submitPayload),
  })
  const submitBody = await submitRes.text()
  if (!submitRes.ok) {
    throw new Error(`Node rejected tx (${submitRes.status}): ${submitBody}`)
  }
  const txId = submitBody.replace(/^"|"$/g, "")
  console.log(`  submitted       ${txId}`)
  console.log(`  explorer        https://testnet.ergoplatform.com/transactions/${txId}`)
  console.log("")

  // 8. Poll for the Note box id (first output by convention).
  console.log("Polling explorer for Note confirmation…")
  let noteBoxId
  for (let attempt = 0; attempt < 40; attempt++) {
    const r = await fetch(`${TESTNET_API}/transactions/${txId}`)
    if (r.ok) {
      const tx = await r.json()
      const note = tx.outputs?.[0]
      if (note?.boxId) {
        noteBoxId = note.boxId
        break
      }
    }
    process.stdout.write(".")
    await sleep(15_000)
  }
  console.log("")

  if (!noteBoxId) {
    console.log("")
    console.log("  Tx submitted but explorer hasn't indexed it yet. Check manually:")
    console.log(`  curl -s ${TESTNET_API}/transactions/${txId} | jq`)
    return
  }

  console.log("")
  console.log("──────────────────────────────────────────────────────────────")
  console.log("  Note issued — paste the box id into Sage's PaymentPanel")
  console.log("──────────────────────────────────────────────────────────────")
  console.log(`  note_box_id   ${noteBoxId}`)
  console.log(`  value         ${nanoToErg(valueNano)} ERG`)
  console.log(`  task hash     ${quote.taskHash}`)
  console.log(`  expiry block  ${expiryBlock}`)
  console.log(`  quoteId       ${quote.quoteId}`)
  console.log("──────────────────────────────────────────────────────────────")
  console.log("")

  if (process.env.SAGE_SKIP_VERIFY_AFTER_ISSUE === "1") {
    console.log("Verify skipped because SAGE_SKIP_VERIFY_AFTER_ISSUE=1.")
    console.log("To verify manually, POST { quote, question, noteBoxId } to:")
    console.log(`  ${SAGE_BASE}/api/sage/verify-payment`)
    console.log("")
    return
  }

  console.log("Verifying Note with production Sage…")
  const verifyRes = await fetch(`${SAGE_BASE}/api/sage/verify-payment`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      quote,
      question: PREMIUM_QUESTION,
      noteBoxId,
    }),
  })
  const verifyBodyText = await verifyRes.text()
  let verifyBody
  try {
    verifyBody = JSON.parse(verifyBodyText)
  } catch {
    verifyBody = { raw: verifyBodyText }
  }

  if (!verifyRes.ok) {
    throw new Error(
      `/api/sage/verify-payment returned ${verifyRes.status}: ${JSON.stringify(verifyBody)}`,
    )
  }

  console.log("")
  console.log("──────────────────────────────────────────────────────────────")
  console.log("  Sage verified payment")
  console.log("──────────────────────────────────────────────────────────────")
  console.log(`  receipt_id    ${verifyBody.receiptId}`)
  console.log(`  receipt_url   ${verifyBody.receiptUrl}`)
  console.log(`  receipt_api   ${verifyBody.receiptApiUrl}`)
  console.log(`  settlement    ${verifyBody.settlementTxId ?? "pending redemption"}`)
  console.log(
    `  storage       ${
      verifyBody.receiptStorage?.ok
        ? "saved"
        : verifyBody.receiptStorage?.skipped
          ? `skipped (${verifyBody.receiptStorage.reason})`
          : verifyBody.receiptStorage?.error ?? "unknown"
    }`,
  )
  console.log("──────────────────────────────────────────────────────────────")
  console.log("")
}

function hexToBytes(hex) {
  if (hex.length % 2 !== 0) throw new Error(`hex string has odd length: ${hex}`)
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return bytes
}

await main()
