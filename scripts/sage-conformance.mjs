#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const DEFAULT_BASE_URL = "https://www.ergoblockchain.org"
const DEFAULT_ACCORD_CLI =
  process.env.ACCORD_CONFORMANCE_CLI ??
  path.resolve(process.cwd(), "../accord-protocol/packages/accord-conformance/dist/cli.js")

const args = parseArgs(process.argv.slice(2))
const baseUrl = trimSlash(args["base-url"] ?? DEFAULT_BASE_URL)
const targetUrl = `${baseUrl}/api/sage/accord`
const receiptIdArg = args.receipt
const accordCli = args["accord-cli"] ?? DEFAULT_ACCORD_CLI
const outPath = args.out ?? defaultOutPath()
const registryOutPath = args["registry-out"]

const startedAt = new Date().toISOString()
let receipt
try {
  receipt = receiptIdArg
    ? await fetchReceipt(baseUrl, receiptIdArg)
    : await discoverLatestFullReceipt(baseUrl)
} catch (error) {
  const artifact = {
    type: "sage.conformance_result.v0",
    target: targetUrl,
    started_at: startedAt,
    finished_at: new Date().toISOString(),
    receipt_id: receiptIdArg ?? null,
    agreement_id: null,
    sage: {
      passed: false,
      checks: [
        {
          id: "receipt.discovery.fetch",
          result: "fail",
          detail: error instanceof Error ? error.message : "receipt discovery failed",
        },
      ],
    },
    accord_l1: null,
    achieved_level: null,
    status: "failed_receipt_discovery",
    next_actions: [
      "Check network access to the Sage API.",
      "Check /api/sage/activity and /api/sage/receipt/<id> manually.",
      "Re-run conformance after discovery succeeds.",
    ],
  }
  writeArtifact(artifact)
  writeRegistryEvidenceMaybe(artifact, null)
  console.error(`Receipt discovery failed. Artifact written to ${outPath}`)
  process.exit(1)
}

if (!receipt) {
  const artifact = {
    type: "sage.conformance_result.v0",
    target: targetUrl,
    started_at: startedAt,
    finished_at: new Date().toISOString(),
    receipt_id: receiptIdArg ?? null,
    agreement_id: null,
    sage: {
      passed: false,
      checks: [
        {
          id: "receipt.full_receipt_bundle.discovered",
          result: "fail",
          detail: "No post-Blob full_receipt_bundle was found in /api/sage/activity candidates.",
        },
      ],
    },
    accord_l1: null,
    achieved_level: null,
    status: "blocked_missing_full_receipt_bundle",
    next_actions: [
      "Run one new paid Sage flow after Blob storage is configured.",
      "Re-run npm run sage:conformance after /api/sage/receipt/<id> returns completeness=full_receipt_bundle.",
    ],
  }
  writeArtifact(artifact)
  writeRegistryEvidenceMaybe(artifact, null)
  console.error(
    `No full_receipt_bundle found yet. Pending artifact written to ${outPath}. Trigger one new paid Sage flow after the Blob deploy, then rerun \`npm run sage:conformance\`.`,
  )
  process.exit(1)
}

const local = validateReceiptShape(receipt)
if (!local.passed) {
  const artifact = {
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
  }
  writeArtifact(artifact)
  writeRegistryEvidenceMaybe(artifact, receipt)
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
const achievedLevel = accord.result?.achieved_level ?? highestPassedLevel(accord.result?.levels)

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
  achieved_level: achievedLevel,
  status: accord.exitCode === 0 ? "passed" : "failed_or_inconclusive",
  signing_hint:
    "Sign with: accord-conformance sign --key-file <private-key-file> --signer provider://sage --output <signed.json> <this artifact>",
}

writeArtifact(artifact)
writeRegistryEvidenceMaybe(artifact, receipt)

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

function highestPassedLevel(levels) {
  if (!Array.isArray(levels)) return null
  const passed = levels
    .filter((level) => level?.passed === true && typeof level.level === "string")
    .map((level) => level.level)
  if (passed.includes("L3")) return "L3"
  if (passed.includes("L2")) return "L2"
  if (passed.includes("L1")) return "L1"
  return passed[0] ?? null
}

function parseJsonMaybe(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function writeArtifact(value) {
  writeJson(outPath, value)
}

function writeRegistryEvidenceMaybe(artifact, receipt) {
  if (!registryOutPath) return
  const evidence = {
    type: "sage.registry_evidence.v0",
    provider_id: "provider://sage-ergoblockchain",
    provider_endpoint: targetUrl,
    generated_at: new Date().toISOString(),
    status: artifact.status,
    achieved_level: artifact.achieved_level ?? null,
    receipt_id: artifact.receipt_id ?? null,
    agreement_id: artifact.agreement_id ?? null,
    public_receipt_url: receipt?.public_receipt_url ?? null,
    api_receipt_url: receipt?.api_receipt_url ?? null,
    conformance_artifact_path: path.relative(process.cwd(), outPath),
    signed_artifact_path: null,
    registry_patch_path: "docs/handoff/accord-protocol-sage-registry-bump.patch",
    ready_for_registry:
      artifact.status === "passed" && Boolean(receipt?.public_receipt_url) && Boolean(artifact.achieved_level),
    next_actions:
      artifact.status === "passed"
        ? [
            "Sign the conformance artifact with accord-conformance sign.",
            "Update accord-protocol/registry/providers/sage.json evidence fields.",
            "Attach this evidence JSON and the signed artifact to the registry PR.",
          ]
        : [
            "Create a post-Blob full Sage receipt bundle.",
            "Re-run conformance until status=passed.",
          ],
  }
  writeJson(registryOutPath, evidence)
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`)
}

function defaultOutPath() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-")
  return path.join(process.cwd(), "artifacts", "sage-conformance", `${stamp}.json`)
}

function trimSlash(value) {
  return value.replace(/\/+$/, "")
}
