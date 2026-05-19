const baseUrl = (process.env.BASE_URL ?? process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "")

const checks = [
  { path: "/", expect: [200] },
  { path: "/blog", expect: [200] },
  { path: "/admin/blog", expect: [200, 401, 503] },
  { path: "/agent-economy/live", expect: [200] },
  { path: "/api/agent-economy/live", expect: [200] },
  { path: "/api/sage/activity", expect: [200] },
  { path: "/api/sage/quote", expect: [405, 400, 200] },
  { path: "/api/sage/signer-health", expect: [200, 503] },
  { path: "/api/sage/receipt/blob-probe-2026-05-16", expect: [200, 503] },
]

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

if (failed > 0) {
  console.error(`staging smoke failed: ${failed} check(s) failed`)
  process.exit(1)
}

console.log("staging smoke clean")
