#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const DEFAULT_BASE_URL = "https://www.ergoblockchain.org"
const DEFAULT_ACCORD_CLI =
  "/Users/alexanderbezkrovny/Desktop/accord-protocol/packages/accord-conformance/dist/cli.js"

const args = parseArgs(process.argv.slice(2))
const baseUrl = trimSlash(args["base-url"] ?? DEFAULT_BASE_URL)
const targetUrl = `${baseUrl}/api/sage/accord`
const receiptIdArg = args.receipt
const accordCli = args["accord-cli"] ?? DEFAULT_ACCORD_CLI
const outPath = args.out ?? defaultOutPath()

const startedAt = new Date().toISOString()
const receipt = receiptIdArg
  ? await fetchReceipt(baseUrl, receiptIdArg)
  : await discoverLatestFullReceipt(baseUrl)

if (!receipt) {
  console.error(
    "No full_receipt_bundle found yet. Trigger one new paid Sage flow after the Blob deploy, then rerun `npm run sage:conformance`.",
  )
  process.exit(1)
}

const local = validateReceiptShape(receipt)
if (!local.passed) {
  writeArtifact({
    type: "sage.conformance_result.v0",
    target: targetUrl,
    started_at: startedAt,
    finished_at: new Date().toISOString(),
    receipt_id: receipt.id,
    agreement_id: receipt.accord?.agreement_json?.agreement_id ?? null,
    sage: local,
    accord_l1: null,
    achieved_level: null,
    status: "failed_local_receipt_checks",
  })
  console.error(`Local receipt checks failed. Artifact written to ${outPath}`)
  process.exit(1)
}

const agreementId = receipt.accord.agreement_json.agreement_id
const paymentJson = JSON.stringify({ receipt_id: receipt.id })
const accord = runAccordL1({
  cliPath: accordCli,
  targetUrl,
  agreementId,
  paymentJson,
})

const artifact = {
  type: "sage.conformance_result.v0",
  target: targetUrl,
  started_at: startedAt,
  finished_at: new Date().toISOString(),
  receipt_id: receipt.id,
  agreement_id: agreementId,
  sage: local,
  accord_l1: accord.result,
  accord_l1_exit_code: accord.exitCode,
  accord_l1_stderr: accord.stderr || undefined,
  achieved_level: accord.result?.achieved_level ?? null,
  status: accord.exitCode === 0 ? "passed" : "failed_or_inconclusive",
  signing_hint:
    "Sign with: accord-conformance sign --key-file <private-key-file> --signer provider://sage --output <signed.json> <this artifact>",
}

writeArtifact(artifact)

if (accord.exitCode === 0) {
  console.log(`Sage Accord conformance passed. Artifact written to ${outPath}`)
  process.exit(0)
}

console.error(`Sage Accord conformance did not fully pass. Artifact written to ${outPath}`)
process.exit(1)

function parseArgs(argv) {
  const out = {}
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i]
    if (!key?.startsWith("--")) {
      throw new Error(`Unexpected argument: ${key}`)
    }
    const name = key.slice(2)
    const value = argv[i + 1]
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${name}`)
    }
    out[name] = value
    i += 1
  }
  return out
}

async function discoverLatestFullReceipt(base) {
  const activity = await fetchJson(`${base}/api/sage/activity?limit=25`)
  const events = Array.isArray(activity?.events) ? activity.events : []
  const candidates = []
  for (const event of events) {
    if (typeof event.txId === "string") candidates.push(event.txId)
    if (typeof event.noteBoxId === "string") candidates.push(event.noteBoxId)
  }

  for (const candidate of [...new Set(candidates)]) {
    const receipt = await fetchReceipt(base, candidate, false)
    if (isFullReceipt(receipt)) return receipt
  }
  return null
}

async function fetchReceipt(base, id, throwOnMissing = true) {
  try {
    const receipt = await fetchJson(`${base}/api/sage/receipt/${encodeURIComponent(id)}`)
    return isFullReceipt(receipt) ? receipt : null
  } catch (error) {
    if (throwOnMissing) throw error
    return null
  }
}

async function fetchJson(url) {
  const res = await fetch(url, { cache: "no-store" })
  const body = await res.text()
  let parsed
  try {
    parsed = body ? JSON.parse(body) : null
  } catch {
    throw new Error(`${url} did not return JSON: ${body.slice(0, 200)}`)
  }
  if (!res.ok) {
    throw new Error(`${url} returned HTTP ${res.status}: ${JSON.stringify(parsed)}`)
  }
  return parsed
}

function isFullReceipt(value) {
  return (
    value?.ok === true &&
    value?.type === "sage.receipt_bundle.v1" &&
    value?.completeness === "full_receipt_bundle" &&
    typeof value?.id === "string" &&
    typeof value?.accord?.agreement_json?.agreement_id === "string"
  )
}

function validateReceiptShape(receipt) {
  const checks = []
  add(checks, "bundle.full_receipt_bundle", receipt.completeness === "full_receipt_bundle")
  add(checks, "agreement.present", !!receipt.accord?.agreement_json)
  add(checks, "verification_receipt.present", !!receipt.accord?.verification_receipt_json)
  add(checks, "settlement_receipt.present", !!receipt.accord?.settlement_receipt_json)
  add(checks, "agreement_hash.present", /^blake2b256:0x[0-9a-f]{64}$/.test(receipt.accord?.agreement_hash ?? ""))
  add(
    checks,
    "verification_hash.present",
    /^blake2b256:0x[0-9a-f]{64}$/.test(receipt.accord?.verification_receipt_hash ?? ""),
  )
  add(
    checks,
    "settlement_hash.present",
    /^blake2b256:0x[0-9a-f]{64}$/.test(receipt.accord?.settlement_receipt_hash ?? ""),
  )

  const agreementId = receipt.accord?.agreement_json?.agreement_id
  add(
    checks,
    "verification.agreement_id.matches",
    receipt.accord?.verification_receipt_json?.agreement_id === agreementId,
  )
  add(
    checks,
    "settlement.agreement_id.matches",
    receipt.accord?.settlement_receipt_json?.agreement_id === agreementId,
  )
  add(
    checks,
    "settlement.includes_verification_receipt",
    Array.isArray(receipt.accord?.settlement_receipt_json?.verification_receipts) &&
      receipt.accord.settlement_receipt_json.verification_receipts.includes(
        receipt.accord.verification_receipt_hash,
      ),
  )

  return {
    passed: checks.every((check) => check.result === "pass"),
    checks,
  }
}

function add(checks, id, ok) {
  checks.push({ id, result: ok ? "pass" : "fail" })
}

function runAccordL1({ cliPath, targetUrl, agreementId, paymentJson }) {
  if (!fs.existsSync(cliPath)) {
    return {
      exitCode: 1,
      stderr: `accord-conformance CLI not found at ${cliPath}`,
      result: null,
    }
  }

  const run = spawnSync(
    process.execPath,
    [
      cliPath,
      "run",
      "--levels",
      "L1",
      "--target",
      targetUrl,
      "--agreement-id",
      agreementId,
      "--payment",
      paymentJson,
      "--json",
    ],
    { encoding: "utf8" },
  )

  return {
    exitCode: run.status ?? 1,
    stderr: run.stderr.trim(),
    result: parseJsonMaybe(run.stdout),
  }
}

function parseJsonMaybe(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function writeArtifact(value) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(value, null, 2)}\n`)
}

function defaultOutPath() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-")
  return path.join(process.cwd(), "artifacts", "sage-conformance", `${stamp}.json`)
}

function trimSlash(value) {
  return value.replace(/\/+$/, "")
}
