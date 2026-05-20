import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const failures = []

function readText(path) {
  return readFileSync(join(root, path), "utf8")
}

function readJson(path) {
  return JSON.parse(readText(path))
}

function assert(condition, message) {
  if (!condition) failures.push(message)
}

function assertExists(path) {
  assert(existsSync(join(root, path)), `${path} is missing`)
}

function blockerState(source, id) {
  const pattern = new RegExp(
    `id:\\s*"${id}"[\\s\\S]*?state:\\s*"(open|pending|closed)"`,
    "m",
  )
  return source.match(pattern)?.[1] ?? null
}

function assertStatus(path, expected) {
  const json = readJson(path)
  assert(
    json.status === expected,
    `${path} status expected ${expected}, got ${json.status ?? "missing"}`,
  )
  return json
}

const paths = [
  "public/agent-economy/audit-manifest.v0.json",
  "public/agent-economy/audit-scope-manifest.v0.json",
  "public/agent-economy/script-identity-manifest.v0.json",
  "public/agent-economy/signer-ops-evidence.v0.json",
  "public/agent-economy/external-audit-review.manifest.template.json",
  "public/agent-economy/mainnet-script-identity.manifest.template.json",
  "docs/audit-review-pack.md",
  "src/content/blog/ergo-live-proof-surface-agent-economy.md",
  "src/lib/agent-economy/mainnet-gate.ts",
]

paths.forEach(assertExists)

const auditManifest = assertStatus(
  "public/agent-economy/audit-manifest.v0.json",
  "draft",
)
assertStatus("public/agent-economy/audit-scope-manifest.v0.json", "draft_scope_not_audit_report")
assertStatus("public/agent-economy/script-identity-manifest.v0.json", "draft_testnet_observed_identity")
assertStatus("public/agent-economy/signer-ops-evidence.v0.json", "testnet_operational")
assertStatus(
  "public/agent-economy/external-audit-review.manifest.template.json",
  "template_external_review_pending",
)
assertStatus(
  "public/agent-economy/mainnet-script-identity.manifest.template.json",
  "template_mainnet_identity_pending",
)

assert(
  auditManifest.artifacts?.audit_report === null,
  "audit report must remain null until an external review is published",
)
assert(
  auditManifest.artifacts?.mainnet_script_identity === null,
  "mainnet script identity must remain null until audit-bound identity is published",
)
assert(
  auditManifest.artifacts?.external_audit_review_template?.includes(
    "external-audit-review.manifest.template.json",
  ),
  "audit manifest must link the external review template",
)
assert(
  auditManifest.artifacts?.mainnet_script_identity_template?.includes(
    "mainnet-script-identity.manifest.template.json",
  ),
  "audit manifest must link the mainnet script identity template",
)

const gateSource = readText("src/lib/agent-economy/mainnet-gate.ts")
assert(gateSource.includes('status: "closed"'), "mainnet gate must stay closed")
assert(
  gateSource.includes("external_audit_report: null"),
  "mainnet gate must not point to a completed external audit report yet",
)
assert(
  gateSource.includes("mainnet_script_identity: null"),
  "mainnet gate must not point to a completed mainnet script identity yet",
)

const completed = [
  "post-blob-full-receipt",
  "accord-conformance-signed",
  "signer-ops-runbook",
  "mcp-dns",
]
const pending = ["exact-contract-identity", "external-audit-manifests"]

for (const id of completed) {
  assert(blockerState(gateSource, id) === "open", `${id} should be completed/open`)
}

for (const id of pending) {
  assert(blockerState(gateSource, id) === "pending", `${id} should be pending`)
}

const article = readText("src/content/blog/ergo-live-proof-surface-agent-economy.md")
for (const required of [
  "Testnet script identity",
  "Signer ops evidence",
  "Audit scope manifest",
  "completed = 4",
  "pending = 2",
  "The two remaining trust gates are external review and audit-bound mainnet script identity.",
]) {
  assert(article.includes(required), `article is missing: ${required}`)
}

const reviewPack = readText("docs/audit-review-pack.md")
for (const required of [
  "/agent-economy/external-audit-review.manifest.v0.json",
  "/agent-economy/mainnet-script-identity.manifest.v0.json",
  "The template files are intentionally not enough to open the gate.",
]) {
  assert(reviewPack.includes(required), `audit review pack is missing: ${required}`)
}

if (failures.length > 0) {
  console.error("agent economy gate audit failed")
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log("agent economy gate audit clean")
console.log("completed = 4")
console.log("pending = 2")
console.log("mainnet_ready = false")
