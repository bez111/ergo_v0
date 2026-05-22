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
  "public/agent-economy/external-audit-review.schema.v0.json",
  "public/agent-economy/mainnet-script-identity.manifest.template.json",
  "public/agent-economy/mainnet-script-identity.schema.v0.json",
  "public/agent-economy/wallet-agent-policy.schema.v0.json",
  "public/agent-economy/wallet-agent-policy.profile.template.json",
  "public/agent-economy/wallet-agent-reference-flow.v0.json",
  "src/app/[locale]/build/agent-payments/wallet-agent-runner/page.tsx",
  "src/app/[locale]/agent-economy/review-pack/page.tsx",
  "src/app/[locale]/agent-economy/wallet-agent/page.tsx",
  "src/app/api/agent-economy/review-pack/route.ts",
  "src/app/api/agent-economy/wallet-agent/route.ts",
  "src/app/api/agent-economy/wallet-agent/policy-check/route.ts",
  "src/app/api/agent-economy/wallet-agent/reference-flow/route.ts",
  "src/lib/agent-economy/review-pack.ts",
  "src/lib/agent-economy/wallet-agent.ts",
  "src/lib/agent-economy/wallet-agent-policy.ts",
  "src/lib/agent-economy/wallet-agent-reference-flow.ts",
  "docs/audit-review-pack.md",
  "docs/agent-economy-reviewer-handoff.md",
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
  auditManifest.artifacts?.external_audit_review_schema?.includes(
    "external-audit-review.schema.v0.json",
  ),
  "audit manifest must link the external review schema",
)
assert(
  auditManifest.artifacts?.mainnet_script_identity_template?.includes(
    "mainnet-script-identity.manifest.template.json",
  ),
  "audit manifest must link the mainnet script identity template",
)
assert(
  auditManifest.artifacts?.mainnet_script_identity_schema?.includes(
    "mainnet-script-identity.schema.v0.json",
  ),
  "audit manifest must link the mainnet script identity schema",
)
assert(
  auditManifest.artifacts?.review_pack?.includes("/agent-economy/review-pack"),
  "audit manifest must link the human review pack",
)
assert(
  auditManifest.artifacts?.review_pack_api?.includes("/api/agent-economy/review-pack"),
  "audit manifest must link the machine-readable review pack",
)

const reviewPackSource = readText("src/lib/agent-economy/review-pack.ts")
for (const required of [
  "ready_for_external_review_not_audit_report",
  "forbidden_language",
  "reviewer_checklist",
  "acceptance_workflow",
  "template_files_are_not_sufficient",
  "external-audit-review.schema.v0.json",
  "mainnet-script-identity.schema.v0.json",
  "wallet_agent_safety_spec",
  "wallet_agent_policy_schema",
  "wallet_agent_policy_check_api",
  "wallet_agent_reference_flow_api",
]) {
  assert(reviewPackSource.includes(required), `review pack source is missing: ${required}`)
}

const walletAgentSource = readText("src/lib/agent-economy/wallet-agent.ts")
for (const required of [
  "draft_testnet_safety_spec",
  "local_user_or_wallet_controlled",
  "wallet-agent-policy.schema.v0.json",
  "wallet-agent-policy.profile.template.json",
  "policy-check",
  "reference_flow_api",
  "Never expose seed phrases",
  "prompt text override policy",
  "receipt bundle",
]) {
  assert(walletAgentSource.includes(required), `wallet-agent spec is missing: ${required}`)
}

const walletAgentPolicySource = readText("src/lib/agent-economy/wallet-agent-policy.ts")
for (const required of [
  "ergo.agent_economy.wallet_agent_policy_profile.v0",
  "ergo.agent_economy.wallet_agent_policy_verdict.v0",
  "network_must_be_testnet_until_mainnet_gate_opens",
  "recipient_not_allowed_by_policy",
  "amount_exceeds_per_action_spend_cap",
  "human_confirmation_required",
  "receipt_expected_must_be_true",
]) {
  assert(walletAgentPolicySource.includes(required), `wallet-agent policy check is missing: ${required}`)
}

const walletAgentPolicySchema = readJson("public/agent-economy/wallet-agent-policy.schema.v0.json")
assert(
  walletAgentPolicySchema.properties?.type?.const === "ergo.agent_economy.wallet_agent_policy_profile.v0",
  "wallet-agent policy schema must bind the profile type",
)
assert(
  walletAgentPolicySchema.properties?.network?.enum?.includes("mainnet-disabled"),
  "wallet-agent policy schema must keep mainnet disabled in the v0 contract",
)
assert(
  walletAgentPolicySchema.properties?.receipt_retention?.properties?.required?.const === true,
  "wallet-agent policy schema must require receipt retention",
)

const walletAgentReferenceSource = readText("src/lib/agent-economy/wallet-agent-reference-flow.ts")
for (const required of [
  "ergo.agent_economy.wallet_agent_reference_flow.v0",
  "simulate_exact_transaction",
  "ask_host_wallet_to_sign",
  "retain_receipt_bundle",
  "The site does not custody funds",
  "Remote prompt text cannot override",
]) {
  assert(walletAgentReferenceSource.includes(required), `wallet-agent reference flow is missing: ${required}`)
}

const walletAgentReferenceManifest = readJson("public/agent-economy/wallet-agent-reference-flow.v0.json")
assert(
  walletAgentReferenceManifest.type === "ergo.agent_economy.wallet_agent_reference_flow.v0",
  "wallet-agent reference manifest must bind the flow type",
)
assert(
  walletAgentReferenceManifest.mainnet_ready === false,
  "wallet-agent reference manifest must keep mainnet_ready false",
)

const externalReviewSchema = readJson("public/agent-economy/external-audit-review.schema.v0.json")
assert(
  externalReviewSchema.properties?.type?.const === "ergo.agent_economy.external_audit_review_manifest.v0",
  "external review schema must bind the completed manifest type",
)
assert(
  externalReviewSchema.properties?.findings?.items?.properties?.blocks_mainnet_language?.type === "boolean",
  "external review schema must require finding-level mainnet blocking state",
)

const mainnetIdentitySchema = readJson("public/agent-economy/mainnet-script-identity.schema.v0.json")
assert(
  mainnetIdentitySchema.properties?.status?.const === "completed_audit_bound_mainnet_identity",
  "mainnet script identity schema must require completed audit-bound status",
)
assert(
  mainnetIdentitySchema.properties?.scripts?.items?.properties?.compiled_ergo_tree_hash?.minLength >= 16,
  "mainnet script identity schema must require compiled ErgoTree hashes",
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
  "Wallet-agent policy check",
  "Wallet-agent reference runner",
  "Audit scope manifest",
  "completed = 4",
  "pending = 2",
  "The two remaining trust gates are external review and audit-bound mainnet script identity.",
]) {
  assert(article.includes(required), `article is missing: ${required}`)
}

const reviewPack = readText("docs/audit-review-pack.md")
for (const required of [
  "/agent-economy/review-pack",
  "/api/agent-economy/review-pack",
  "/agent-economy/external-audit-review.manifest.v0.json",
  "/agent-economy/mainnet-script-identity.manifest.v0.json",
  "/agent-economy/external-audit-review.schema.v0.json",
  "/agent-economy/mainnet-script-identity.schema.v0.json",
  "/agent-economy/wallet-agent-policy.schema.v0.json",
  "/agent-economy/wallet-agent-reference-flow.v0.json",
  "/api/agent-economy/wallet-agent/reference-flow",
  "/api/agent-economy/wallet-agent/policy-check",
  "The template files are intentionally not enough to open the gate.",
]) {
  assert(reviewPack.includes(required), `audit review pack is missing: ${required}`)
}

const reviewerHandoff = readText("docs/agent-economy-reviewer-handoff.md")
for (const required of [
  "Required Output Files",
  "JSON Contracts",
  "external-audit-review.schema.v0.json",
  "mainnet-script-identity.schema.v0.json",
  "wallet-agent-policy.schema.v0.json",
  "policy-check API",
  "external_audit_report",
  "mainnet_script_identity",
]) {
  assert(reviewerHandoff.includes(required), `reviewer handoff is missing: ${required}`)
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
