#!/usr/bin/env node

const DEFAULT_BASE_URL = "https://www.ergoblockchain.org"
const DEFAULT_RECEIPT_ID = "f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"
const HASH_RE = /^blake2b256:0x[0-9a-f]{64}$/

const args = parseArgs(process.argv.slice(2))
const baseUrl = trimSlash(args["base-url"] ?? process.env.BASE_URL ?? DEFAULT_BASE_URL)
const timeoutMs = Number(args.timeout ?? process.env.SAGE_PROOF_RECONCILE_TIMEOUT_MS ?? 20_000)
const requestedReceiptId = args.receipt ?? null
const jsonOutput = args.json === "true"

const startedAt = new Date().toISOString()
const checks = []

let storage = null
let live = null
let proofs = null
let evidence = null
let mainnetGate = null
let receipt = null
let receiptId = requestedReceiptId

try {
  ;[storage, live, proofs, evidence, mainnetGate] = await Promise.all([
    fetchJson(`${baseUrl}/api/sage/receipt/blob-probe-2026-05-16`),
    fetchJson(`${baseUrl}/api/agent-economy/live`),
    fetchJson(`${baseUrl}/api/agent-economy/proofs`),
    fetchJson(`${baseUrl}/evidence/sage/latest-evidence.json`),
    fetchJson(`${baseUrl}/api/agent-economy/mainnet-gate`),
  ])

  receiptId =
    receiptId ??
    evidence?.receipt_id ??
    proofs?.summary?.latest_full_receipt_id ??
    live?.summary?.latest_full_receipt_id ??
    DEFAULT_RECEIPT_ID

  receipt = await fetchJson(`${baseUrl}/api/sage/receipt/${encodeURIComponent(receiptId)}`)
} catch (error) {
  checks.push({
    id: "network.fetch",
    ok: false,
    detail: error instanceof Error ? error.message : "fetch failed",
  })
}

if (storage) {
  add(checks, "storage.configured", storage.storage_configured === true, "BLOB_READ_WRITE_TOKEN visible")
  add(checks, "storage.healthy", storage.ok === true && storage.storage_healthy === true, "Blob write/read probe passed")
}

if (receipt) {
  add(checks, "receipt.full_bundle", receipt.completeness === "full_receipt_bundle", "receipt completeness is full_receipt_bundle")
  add(checks, "receipt.agreement_json", Boolean(receipt.accord?.agreement_json), "Agreement JSON is present")
  add(
    checks,
    "receipt.verification_receipt_json",
    Boolean(receipt.accord?.verification_receipt_json),
    "Verification Receipt JSON is present",
  )
  add(
    checks,
    "receipt.settlement_receipt_json",
    Boolean(receipt.accord?.settlement_receipt_json),
    "Settlement Receipt JSON is present",
  )
  add(checks, "receipt.agreement_hash", HASH_RE.test(receipt.accord?.agreement_hash ?? ""), "Agreement hash is canonical")
  add(
    checks,
    "receipt.verification_hash",
    HASH_RE.test(receipt.accord?.verification_receipt_hash ?? ""),
    "Verification receipt hash is canonical",
  )
  add(
    checks,
    "receipt.settlement_hash",
    HASH_RE.test(receipt.accord?.settlement_receipt_hash ?? ""),
    "Settlement receipt hash is canonical",
  )
  add(
    checks,
    "receipt.on_chain_settlement",
    receipt.status === "settled_on_chain" && Boolean(receipt.chain?.settlement_tx_id),
    "on-chain settlement is linked",
  )
}

if (evidence) {
  add(checks, "evidence.passed", evidence.status === "passed", "signed conformance evidence passed")
  add(checks, "evidence.level", Boolean(evidence.achieved_level), "conformance level is present")
  add(checks, "evidence.registry_ready", evidence.ready_for_registry === true, "evidence is ready for registry")
  add(
    checks,
    "evidence.receipt_matches",
    Boolean(receiptId && evidence.receipt_id === receiptId),
    "evidence receipt_id matches checked receipt",
  )
}

if (live) {
  add(checks, "live.ok", live.ok === true, "Live API is ok")
  add(checks, "live.mainnet_closed", live.posture?.mainnet_ready === false, "Live API keeps mainnet_ready=false")
  add(
    checks,
    "live.conformance_receipt_resolved",
    live.summary?.accord_conformance_receipt_resolved === true,
    "Live API resolves conformance receipt as full bundle",
  )
}

if (proofs) {
  add(checks, "proofs.ok", proofs.ok === true, "Proof API is ok")
  add(checks, "proofs.mainnet_closed", proofs.posture?.mainnet_ready === false, "Proof API keeps mainnet_ready=false")
  add(
    checks,
    "proofs.conformance_receipt_resolved",
    proofs.summary?.conformance_receipt_resolved === true,
    "Proof API resolves conformance receipt as full bundle",
  )
  add(
    checks,
    "proofs.verify_steps",
    Array.isArray(proofs.verify_steps) && proofs.verify_steps.length >= 4,
    "Proof API exposes verify_steps",
  )
}

if (mainnetGate) {
  add(checks, "mainnet.status_closed", mainnetGate.status === "closed", "mainnet gate status is closed")
  add(checks, "mainnet.not_ready", mainnetGate.mainnet_ready === false, "mainnet_ready remains false")
}

const failed = checks.filter((check) => !check.ok)
const report = {
  ok: failed.length === 0,
  type: "sage.proof_reconciliation.v0",
  base_url: baseUrl,
  receipt_id: receiptId,
  started_at: startedAt,
  finished_at: new Date().toISOString(),
  checks,
  next_actions: failed.length === 0
    ? ["Proof chain is internally consistent. Run post-deploy watch after the next production deploy."]
    : buildNextActions(failed),
}

if (jsonOutput) {
  console.log(JSON.stringify(report, null, 2))
} else {
  console.log(`Sage proof reconcile: ${report.ok ? "clean" : "blocked"}`)
  console.log(`base_url = ${baseUrl}`)
  console.log(`receipt_id = ${receiptId ?? "unknown"}`)
  for (const check of checks) {
    console.log(`${check.ok ? "ok" : "fail"} ${check.id} — ${check.detail}`)
  }
  if (report.next_actions.length > 0) {
    console.log("next_actions:")
    for (const action of report.next_actions) console.log(`- ${action}`)
  }
}

process.exit(report.ok ? 0 : 1)

function parseArgs(argv) {
  const out = {}
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i]
    if (!key.startsWith("--")) throw new Error(`Unexpected argument: ${key}`)
    const name = key.slice(2)
    const next = argv[i + 1]
    if (!next || next.startsWith("--")) {
      out[name] = "true"
    } else {
      out[name] = next
      i += 1
    }
  }
  return out
}

function add(target, id, ok, detail) {
  target.push({ id, ok, detail })
}

function buildNextActions(failed) {
  const ids = new Set(failed.map((check) => check.id))
  const actions = []
  if ([...ids].some((id) => id.startsWith("storage."))) {
    actions.push("Check BLOB_READ_WRITE_TOKEN in Vercel and /api/sage/receipt/blob-probe-2026-05-16.")
  }
  if ([...ids].some((id) => id.startsWith("receipt."))) {
    actions.push("Run one new paid Sage flow after Blob storage is healthy, then re-check /api/sage/receipt/<id>.")
  }
  if ([...ids].some((id) => id.startsWith("evidence."))) {
    actions.push("Re-run npm run sage:conformance:evidence for the full receipt bundle and publish signed evidence.")
  }
  if ([...ids].some((id) => id.startsWith("live.") || id.startsWith("proofs."))) {
    actions.push("Deploy the strict Live/Proof API batch and run npm run watch:agent-economy.")
  }
  if ([...ids].some((id) => id.startsWith("mainnet."))) {
    actions.push("Keep mainnet claims closed until external audit and audit-bound script identity exist.")
  }
  return actions.length > 0 ? actions : ["Inspect failed checks and re-run after the matching surface is fixed."]
}

async function fetchJson(url) {
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(timeoutMs),
  })
  const text = await res.text()
  let parsed
  try {
    parsed = text ? JSON.parse(text) : null
  } catch {
    throw new Error(`${url} did not return JSON: ${text.slice(0, 200)}`)
  }
  if (!res.ok) {
    throw new Error(`${url} returned HTTP ${res.status}: ${JSON.stringify(parsed)}`)
  }
  return parsed
}

function trimSlash(value) {
  return value.replace(/\/+$/, "")
}
