const baseUrl = (process.env.BASE_URL ?? process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "")

const checks = [
  { path: "/", expect: [200] },
  { path: "/blog", expect: [200] },
  { path: "/admin/blog", expect: [200, 401, 503] },
  { path: "/agent-economy/live", expect: [200] },
  { path: "/agent-economy/launch-kit", expect: [200] },
  { path: "/agent-economy/developer-launch-kit.schema.v0.json", expect: [200] },
  { path: "/agent-economy/release-watchlist.v0.json", expect: [200] },
  { path: "/agent-economy/release-watchlist.schema.v0.json", expect: [200] },
  { path: "/agent-economy/current-release.schema.v0.json", expect: [200] },
  { path: "/agent-economy/release-attestation-2026-05-23.v0.json", expect: [200] },
  { path: "/agent-economy/release-attestation.schema.v0.json", expect: [200] },
  { path: "/agent-economy/review-pack", expect: [200] },
  { path: "/agent-economy/external-audit-review.schema.v0.json", expect: [200] },
  { path: "/agent-economy/mainnet-script-identity.schema.v0.json", expect: [200] },
  { path: "/agent-economy/wallet-agent-policy.schema.v0.json", expect: [200] },
  { path: "/agent-economy/wallet-agent-policy-check.schema.v0.json", expect: [200] },
  { path: "/agent-economy/wallet-agent-policy.profile.template.json", expect: [200] },
  { path: "/agent-economy/wallet-agent-reference-flow.v0.json", expect: [200] },
  { path: "/agent-economy/sage-widget", expect: [200] },
  { path: "/agent-economy/trust", expect: [200] },
  { path: "/agent-economy/wallet-agent", expect: [200] },
  { path: "/build/agent-payments/quickstart", expect: [200] },
  { path: "/build/agent-payments/policy-playground", expect: [200] },
  { path: "/build/agent-payments/wallet-agent-runner", expect: [200] },
  { path: "/build/playground", expect: [200] },
  { path: "/build/services", expect: [200] },
  { path: "/api/agent-economy/live", expect: [200] },
  { path: "/api/agent-economy/launch-kit", expect: [200] },
  { path: "/api/agent-economy/release/current", expect: [200] },
  { path: "/api/agent-economy/mainnet-gate", expect: [200] },
  { path: "/api/agent-economy/review-pack", expect: [200] },
  { path: "/api/agent-economy/wallet-agent", expect: [200] },
  { path: "/api/agent-economy/wallet-agent/policy-check", expect: [200] },
  { path: "/api/agent-economy/wallet-agent/reference-flow", expect: [200] },
  { path: "/api/sage/activity", expect: [200] },
  { path: "/api/sage/quote", expect: [405, 400, 200] },
  { path: "/api/sage/signer-health", expect: [200, 503] },
  {
    path: "/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
    expect: [200],
  },
  { path: "/api/sage/receipt/blob-probe-2026-05-16", expect: [200, 503] },
]

const hostChecks = process.env.CHECK_AGENT_HOSTS === "true"
  ? [
      { url: "https://agents.ergoblockchain.org/", expect: [200], label: "agents root" },
      { url: "https://agents.ergoblockchain.org/live", expect: [200], label: "agents live" },
      { url: "https://agents.ergoblockchain.org/launch-kit", expect: [200], label: "agents launch-kit" },
      { url: "https://agents.ergoblockchain.org/review-pack", expect: [200], label: "agents review-pack" },
      { url: "https://agents.ergoblockchain.org/sage-widget", expect: [200], label: "agents sage-widget" },
      { url: "https://agents.ergoblockchain.org/wallet-agent", expect: [200], label: "agents wallet-agent" },
      { url: "https://agents.ergoblockchain.org/wallet-agent-runner", expect: [200], label: "agents wallet-agent-runner" },
      { url: "https://agents.ergoblockchain.org/policy-playground", expect: [200], label: "agents policy-playground" },
      { url: "https://agents.ergoblockchain.org/runner", expect: [200], label: "agents runner alias" },
      { url: "https://agents.ergoblockchain.org/playground", expect: [200], label: "agents playground" },
      { url: "https://agents.ergoblockchain.org/services", expect: [200], label: "agents services" },
      { url: "https://agents.ergoblockchain.org/api/wallet-agent/policy-check", expect: [200], label: "agents wallet-agent policy-check" },
      { url: "https://agents.ergoblockchain.org/api/wallet-agent/reference-flow", expect: [200], label: "agents wallet-agent reference-flow" },
      { url: "https://agents.ergoblockchain.org/trust", expect: [200], label: "agents trust" },
      { url: "https://agents.ergoblockchain.org/quickstart", expect: [200], label: "agents quickstart" },
      { url: "https://agents.ergoblockchain.org/api/live", expect: [200], label: "agents api/live" },
      { url: "https://agents.ergoblockchain.org/api/launch-kit", expect: [200], label: "agents api/launch-kit" },
    ]
  : []

let failed = 0

for (const check of checks) {
  const url = `${baseUrl}${check.path}`
  try {
    const response = await fetch(url, { redirect: "manual" })
    const ok = check.expect.includes(response.status)
    console.log(`${ok ? "ok" : "fail"} ${response.status} ${check.path}`)
    if (!ok) failed += 1
  } catch (error) {
    failed += 1
    console.log(`fail ERR ${check.path} ${error instanceof Error ? error.message : String(error)}`)
  }
}

for (const check of hostChecks) {
  try {
    const response = await fetch(check.url, { redirect: "manual" })
    const ok = check.expect.includes(response.status)
    console.log(`${ok ? "ok" : "fail"} ${response.status} ${check.label}`)
    if (!ok) failed += 1
  } catch (error) {
    failed += 1
    console.log(`fail ERR ${check.label} ${error instanceof Error ? error.message : String(error)}`)
  }
}

if (failed > 0) {
  console.error(`staging smoke failed: ${failed} check(s) failed`)
  process.exit(1)
}

console.log("staging smoke clean")
