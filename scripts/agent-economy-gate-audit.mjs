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
  "public/agent-economy/developer-launch-kit.schema.v0.json",
  "public/agent-economy/wallet-agent-policy.schema.v0.json",
  "public/agent-economy/wallet-agent-policy-check.schema.v0.json",
  "public/agent-economy/wallet-agent-policy.profile.template.json",
  "public/agent-economy/wallet-agent-reference-flow.v0.json",
  "src/app/[locale]/build/agent-payments/policy-playground/page.tsx",
  "src/app/[locale]/build/agent-payments/policy-playground/PolicyPlaygroundClient.tsx",
  "src/app/[locale]/build/agent-payments/wallet-agent-runner/page.tsx",
  "src/app/[locale]/agent-economy/launch-kit/page.tsx",
  "src/app/[locale]/agent-economy/review-pack/page.tsx",
  "src/app/[locale]/agent-economy/wallet-agent/page.tsx",
  "src/app/api/agent-economy/launch-kit/route.ts",
  "src/app/api/agent-economy/review-pack/route.ts",
  "src/app/api/agent-economy/wallet-agent/route.ts",
  "src/app/api/agent-economy/wallet-agent/policy-check/route.ts",
  "src/app/api/agent-economy/wallet-agent/reference-flow/route.ts",
  "src/lib/agent-economy/review-pack.ts",
  "src/lib/agent-economy/developer-launch-kit.ts",
  "src/lib/agent-economy/wallet-agent.ts",
  "src/lib/agent-economy/wallet-agent-policy.ts",
  "src/lib/agent-economy/wallet-agent-reference-flow.ts",
  "docs/audit-review-pack.md",
  "docs/agent-economy-reviewer-handoff.md",
  "docs/mcp-endpoint-runbook.md",
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
assert(
  auditManifest.artifacts?.developer_launch_kit?.includes("/agent-economy/launch-kit"),
  "audit manifest must link the developer launch kit",
)
assert(
  auditManifest.artifacts?.developer_launch_kit_api?.includes("/api/agent-economy/launch-kit"),
  "audit manifest must link the machine-readable developer launch kit",
)
assert(
  auditManifest.artifacts?.developer_launch_kit_schema?.includes(
    "/agent-economy/developer-launch-kit.schema.v0.json",
  ),
  "audit manifest must link the developer launch kit schema",
)
assert(
  auditManifest.artifacts?.wallet_agent_policy_check_schema?.includes(
    "/agent-economy/wallet-agent-policy-check.schema.v0.json",
  ),
  "audit manifest must link the wallet-agent policy-check schema",
)
assert(
  auditManifest.artifacts?.mcp_endpoint_runbook?.includes("docs/mcp-endpoint-runbook.md"),
  "audit manifest must link the MCP endpoint runbook",
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
  "wallet_agent_policy_playground",
  "developer_launch_kit",
  "developer_launch_kit_schema",
  "mcp_endpoint_runbook",
]) {
  assert(reviewPackSource.includes(required), `review pack source is missing: ${required}`)
}

const mcpRunbookSource = readText("docs/mcp-endpoint-runbook.md")
for (const required of [
  "https://mcp.ergoblockchain.org/health",
  "https://mcp.ergoblockchain.org/mcp",
  "dig +short mcp.ergoblockchain.org",
  "Streamable HTTP",
  "Do not expose wallet seed phrases",
]) {
  assert(mcpRunbookSource.includes(required), `MCP endpoint runbook is missing: ${required}`)
}

const launchKitSource = readText("src/lib/agent-economy/developer-launch-kit.ts")
for (const required of [
  "ergo.agent_economy.developer_launch_kit.v0",
  "five_minute_path",
  "api_recipes",
  "developer-launch-kit.schema.v0.json",
  "policy-playground",
  "@ergoblockchain/sage-widget",
  "Mainnet remains audit-gated",
  "Do not expose seed phrases",
]) {
  assert(launchKitSource.includes(required), `developer launch kit is missing: ${required}`)
}

const launchKitSchema = readJson("public/agent-economy/developer-launch-kit.schema.v0.json")
assert(
  launchKitSchema.properties?.type?.const === "ergo.agent_economy.developer_launch_kit.v0",
  "developer launch kit schema must bind the launch kit type",
)
assert(
  launchKitSchema.properties?.entrypoints?.required?.includes("schema"),
  "developer launch kit schema must require a schema entrypoint",
)
assert(
  launchKitSchema.properties?.open_gates?.minItems === 2,
  "developer launch kit schema must preserve the two audit-gated next steps",
)

const walletAgentSource = readText("src/lib/agent-economy/wallet-agent.ts")
for (const required of [
  "draft_testnet_safety_spec",
  "local_user_or_wallet_controlled",
  "wallet-agent-policy.schema.v0.json",
  "wallet-agent-policy-check.schema.v0.json",
  "wallet-agent-policy.profile.template.json",
  "policy-check",
  "reference_flow_api",
  "policy_playground",
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
  "WALLET_AGENT_POLICY_CHECK_SCHEMA_URL",
  "network_must_be_testnet_until_mainnet_gate_opens",
  "recipient_not_allowed_by_policy",
  "amount_exceeds_per_action_spend_cap",
  "human_confirmation_required",
  "receipt_expected_must_be_true",
  "policy_profile_has_unknown_fields",
  "proposed_action_has_unknown_fields",
  "policy_allowed_actions_include_unknown_values",
  "spent_today_must_be_non_negative_decimal",
  "task_hash_must_be_hex_with_minimum_length",
  "receipt_retention_mode_invalid",
  "DECIMAL_PATTERN",
  "TASK_HASH_PATTERN",
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

const walletAgentPolicyCheckSchema = readJson("public/agent-economy/wallet-agent-policy-check.schema.v0.json")
assert(
  walletAgentPolicyCheckSchema.properties?.profile?.$ref?.includes("wallet-agent-policy.schema.v0.json"),
  "wallet-agent policy-check schema must reference the policy profile schema",
)
assert(
  walletAgentPolicyCheckSchema.$defs?.proposedAction?.additionalProperties === false,
  "wallet-agent policy-check proposed action schema must reject unknown fields",
)
assert(
  walletAgentPolicyCheckSchema.$defs?.proposedAction?.properties?.task_hash?.pattern === "^[0-9a-fA-F]{16,}$",
  "wallet-agent policy-check schema must require canonical hex task hashes",
)
assert(
  walletAgentPolicyCheckSchema.$defs?.policyVerdict?.properties?.normalized_action?.properties?.spent_today?.type?.includes("null"),
  "wallet-agent policy-check verdict schema must allow null spent_today for malformed input",
)

const walletAgentPolicyRoute = readText("src/app/api/agent-economy/wallet-agent/policy-check/route.ts")
for (const required of [
  "strict_contract",
  "request_schema",
  "unknown profile or proposed-action fields fail closed",
  "monetary fields must be decimal strings",
  "mainnet-disabled profiles cannot authorize signing",
]) {
  assert(walletAgentPolicyRoute.includes(required), `wallet-agent policy route is missing: ${required}`)
}

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

const walletAgentPolicyPlaygroundSource = readText(
  "src/app/[locale]/build/agent-payments/policy-playground/PolicyPlaygroundClient.tsx",
)
for (const required of [
  "/api/agent-economy/wallet-agent/policy-check",
  "wrong_recipient_address",
  "Tampered payload",
  "remote_prompt_override",
  "prompt_says_ignore_policy",
  "Run check",
  "Request payload",
  "Verdict JSON",
]) {
  assert(walletAgentPolicyPlaygroundSource.includes(required), `wallet-agent policy playground is missing: ${required}`)
}

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
  "Wallet-agent policy playground",
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
  "/agent-economy/launch-kit",
  "/api/agent-economy/launch-kit",
  "/agent-economy/external-audit-review.manifest.v0.json",
  "/agent-economy/mainnet-script-identity.manifest.v0.json",
  "/agent-economy/external-audit-review.schema.v0.json",
  "/agent-economy/mainnet-script-identity.schema.v0.json",
  "/agent-economy/wallet-agent-policy.schema.v0.json",
  "/agent-economy/wallet-agent-policy-check.schema.v0.json",
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
  "wallet-agent-policy-check.schema.v0.json",
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
