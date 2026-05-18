#!/usr/bin/env node

const base = (process.env.BASE_URL || "http://localhost:3001").replace(/\/$/, "")
const timeoutMs = Number(process.env.ROUTE_SMOKE_TIMEOUT_MS || 45_000)

const okRoutes = [
  "/",
  "/agent-economy",
  "/agent-economy/live",
  "/blog/state-of-agent-payments-2026",
  "/build",
  "/build/playground",
  "/patterns",
  "/patterns/ergo-amm-liquidity-pool",
  "/playbooks/build-defi-on-ergo",
  "/compare/ergo-vs-vc-chains",
  "/ecosystem/spectrum-finance",
  "/infographics/ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners",
  "/learn/glossary/eutxo",
  "/docs/developers/cryptographic-primitives",
  "/docs/developers/data-model-apis",
  "/docs/developers/ergoscript-languages",
  "/docs/developers/tooling/mosaik/simple-ui",
  "/docs/ecosystem/financial/defi/duckpools",
  "/docs/ecosystem/financial/defi/sigmafi",
  "/technology/nipopows",
  "/start",
  "/use/defi",
]

const redirectRoutes = new Map([
  ["/compare/ergo-vs-vc-chain", "/compare/ergo-vs-vc-chains"],
  ["/blog/assurance-contracts", "/patterns/ergo-crowdfunding-assurance-contract"],
  ["/ecosystem/market", "/ergo-watch"],
  ["/miners-pools", "/miners"],
  ["/patterns/time-locked-contracts", "/patterns/ergo-block-height-time-lock"],
  ["/ru/ecosystem/market", "/ru/ergo-watch"],
])

const failures = []

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timer)
  }
}

for (const route of okRoutes) {
  let response
  let body = ""
  let fetchError = null

  try {
    response = await fetchWithTimeout(`${base}${route}`)
    body = await response.text()
  } catch (error) {
    fetchError = error instanceof Error ? error.message : String(error)
  }

  const lower = body.toLowerCase()
  const badBody =
    lower.includes("internal server error") ||
    lower.includes("application error") ||
    lower.includes("this page could not be found")

  if (!response || response.status !== 200 || badBody || fetchError) {
    failures.push({ route, status: response?.status ?? 0, badBody, error: fetchError })
  }
  console.log(`${response?.status ?? 0} ${route}${fetchError ? ` (${fetchError})` : ""}`)
}

for (const [route, target] of redirectRoutes) {
  let response
  let fetchError = null

  try {
    response = await fetchWithTimeout(`${base}${route}`, { redirect: "manual" })
  } catch (error) {
    fetchError = error instanceof Error ? error.message : String(error)
  }

  const location = response?.headers.get("location") || ""
  const locationPath = location.startsWith("http") ? new URL(location).pathname : location

  if (!response || response.status !== 308 || locationPath !== target || fetchError) {
    failures.push({ route, expected: target, status: response?.status ?? 0, location, error: fetchError })
  }
  console.log(`${response?.status ?? 0} ${route} -> ${locationPath}${fetchError ? ` (${fetchError})` : ""}`)
}

if (failures.length > 0) {
  console.error(JSON.stringify({ failures }, null, 2))
  process.exit(1)
}

console.log("route smoke clean")
