#!/usr/bin/env node
import { readFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = process.cwd()
const AGENTS_HOST = "agents.ergoblockchain.org"
const FORBIDDEN_HOSTS = [
  "agenthub.ergoblockchain.org",
  "agentichub.ergoblockchain.org",
]

const expectedRewrites = [
  ["/", "/agent-economy/live"],
  ["/live", "/agent-economy/live"],
  ["/launch-kit", "/agent-economy/launch-kit"],
  ["/sage-widget", "/agent-economy/sage-widget"],
  ["/wallet-agent", "/agent-economy/wallet-agent"],
  ["/wallet-agent-runner", "/build/agent-payments/wallet-agent-runner"],
  ["/policy-playground", "/build/agent-payments/policy-playground"],
  ["/runner", "/build/agent-payments/wallet-agent-runner"],
  ["/trust", "/agent-economy/trust"],
  ["/review-pack", "/agent-economy/review-pack"],
  ["/quickstart", "/build/agent-payments/quickstart"],
  ["/playground", "/build/playground"],
  ["/services", "/build/services"],
  ["/api/live", "/api/agent-economy/live"],
  ["/api/launch-kit", "/api/agent-economy/launch-kit"],
  ["/api/wallet-agent/policy-check", "/api/agent-economy/wallet-agent/policy-check"],
  ["/api/wallet-agent/reference-flow", "/api/agent-economy/wallet-agent/reference-flow"],
]

const proxyAliases = expectedRewrites.filter(([source]) => !source.startsWith("/api/") && source !== "/")
const failures = []

function read(relativePath) {
  return readFileSync(join(ROOT, relativePath), "utf8")
}

function fail(message) {
  failures.push(message)
}

function assertNoForbiddenHosts(label, source) {
  for (const host of FORBIDDEN_HOSTS) {
    if (source.includes(host)) {
      fail(`${label} still references ${host}`)
    }
  }
}

const nextConfig = read("next.config.ts")
const proxy = read("src/proxy.ts")
const stagingSmoke = read("scripts/staging-smoke.mjs")
const vercel = JSON.parse(read("vercel.json"))

assertNoForbiddenHosts("next.config.ts", nextConfig)
assertNoForbiddenHosts("src/proxy.ts", proxy)
assertNoForbiddenHosts("scripts/staging-smoke.mjs", stagingSmoke)
assertNoForbiddenHosts("vercel.json", JSON.stringify(vercel))

if (!nextConfig.includes(`const agentsHost = '${AGENTS_HOST}'`)) {
  fail("next.config.ts does not declare the canonical agents host")
}

for (const [source, destination] of expectedRewrites) {
  const tuple = `['${source}', '${destination}']`
  if (!nextConfig.includes(tuple)) {
    fail(`next.config.ts missing agentsHostRoutes tuple ${tuple}`)
  }
}

const vercelRewrites = new Set(
  (vercel.rewrites ?? [])
    .filter((rule) => (rule.has ?? []).some((item) => item.type === "host" && item.value === AGENTS_HOST))
    .map((rule) => `${rule.source} -> ${rule.destination}`),
)

for (const [source, destination] of expectedRewrites) {
  const key = `${source} -> ${destination}`
  if (!vercelRewrites.has(key)) {
    fail(`vercel.json missing agents rewrite ${key}`)
  }
}

if (!proxy.includes(`'${AGENTS_HOST}'`)) {
  fail("src/proxy.ts does not list the canonical agents host")
}

if (!proxy.includes("if (normalized === '/') return '/en/agent-economy/live'")) {
  fail("src/proxy.ts no longer rewrites agents root to the localized Live Hub")
}

for (const [source, destination] of proxyAliases) {
  const alias = `['${source}', '${destination}']`
  if (!proxy.includes(alias)) {
    fail(`src/proxy.ts missing alias ${alias}`)
  }
}

for (const [source] of expectedRewrites) {
  const path = source === "/" ? "/" : source
  const url = `https://${AGENTS_HOST}${path}`
  if (!stagingSmoke.includes(url)) {
    fail(`scripts/staging-smoke.mjs missing ${url}`)
  }
}

if (failures.length > 0) {
  console.error("agent host routes audit failed")
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log("agent host routes audit clean")
console.log(`host = ${AGENTS_HOST}`)
console.log(`rewrites = ${expectedRewrites.length}`)
