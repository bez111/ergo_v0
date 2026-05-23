#!/usr/bin/env node
import { readFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const watchlistPath = join(root, "public/agent-economy/release-watchlist.v0.json")
const watchlist = JSON.parse(readFileSync(watchlistPath, "utf8"))
const productionBase = "https://www.ergoblockchain.org"
const baseOverride = process.env.BASE_URL?.replace(/\/$/, "") ?? null
const timeoutMs = Number(process.env.POST_DEPLOY_WATCH_TIMEOUT_MS || 30_000)
const requiredHeaders = watchlist.security_baseline?.required_security_headers ?? []
const failures = []

function resolveUrl(value) {
  if (!baseOverride || !value.startsWith(productionBase)) return value

  const url = new URL(value)
  return `${baseOverride}${url.pathname}${url.search}`
}

function getPath(source, path) {
  return path.split(".").reduce((value, segment) => {
    if (value === null || typeof value !== "object") return undefined
    return value[segment]
  }, source)
}

function formatValue(value) {
  if (typeof value === "string") return JSON.stringify(value)
  return String(value)
}

async function fetchWithTimeout(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  try {
    return await fetch(url, {
      redirect: "manual",
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timer)
  }
}

for (const target of watchlist.watch_targets) {
  const url = resolveUrl(target.url)
  const started = Date.now()
  let response = null
  let bodyText = ""
  let error = null

  try {
    response = await fetchWithTimeout(url)
    bodyText = await response.text()
  } catch (caught) {
    error = caught instanceof Error ? caught.message : String(caught)
  }

  const elapsed = Date.now() - started
  const status = response?.status ?? 0
  const targetFailures = []

  if (!response || !target.expect_status.includes(status)) {
    targetFailures.push(`status ${status}, expected ${target.expect_status.join("/")}`)
  }

  if (error) {
    targetFailures.push(error)
  }

  if (target.check_security_headers) {
    for (const header of requiredHeaders) {
      if (!response?.headers.has(header)) {
        targetFailures.push(`missing security header ${header}`)
      }
    }
  }

  if (target.expect_json && response && target.expect_status.includes(status)) {
    let json = null
    try {
      json = JSON.parse(bodyText)
    } catch {
      targetFailures.push("response is not JSON")
    }

    if (json) {
      for (const [path, expected] of Object.entries(target.expect_json)) {
        const actual = getPath(json, path)
        if (actual !== expected) {
          targetFailures.push(`${path}=${formatValue(actual)}, expected ${formatValue(expected)}`)
        }
      }
    }
  }

  const line = `${targetFailures.length === 0 ? "ok" : "fail"} ${status} ${target.id} ${elapsed}ms`
  console.log(line)

  if (targetFailures.length > 0) {
    failures.push({
      id: target.id,
      url,
      failures: targetFailures,
    })
  }
}

if (failures.length > 0) {
  console.error(JSON.stringify({ failures }, null, 2))
  process.exit(1)
}

console.log("post-deploy watch clean")
console.log("mainnet_ready = false")
