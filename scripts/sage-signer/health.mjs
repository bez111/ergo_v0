#!/usr/bin/env node
/**
 * Lightweight local health probe for the standalone Sage signer.
 *
 * Defaults to http://127.0.0.1:$PORT. If SAGE_SIGNER_TOKEN is present,
 * also checks the authenticated /ready endpoint without printing the token.
 */

import "dotenv/config"

const port = process.env.PORT ?? "8911"
const base = (process.env.SAGE_SIGNER_HEALTH_URL ?? `http://127.0.0.1:${port}`).replace(/\/+$/, "")
const token = process.env.SAGE_SIGNER_TOKEN ?? ""

await checkHealth()
if (token) {
  await checkReady()
  await checkMetrics()
}

async function checkHealth() {
  const payload = await fetchJson(`${base}/health`)
  if (payload?.service !== "sage-signer" || payload?.ok !== true) {
    throw new Error(`/health returned unexpected payload: ${JSON.stringify(payload)}`)
  }
  console.log(`[sage-signer] health OK - uptime ${Math.round(Number(payload.uptime_ms ?? 0) / 1000)}s`)
}

async function checkReady() {
  const payload = await fetchJson(`${base}/ready`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  if (payload?.service !== "sage-signer" || payload?.status !== "ready") {
    throw new Error(`/ready returned unexpected payload: ${JSON.stringify(payload)}`)
  }
  console.log(
    `[sage-signer] ready OK - network ${payload.network} - signed ${payload.counters?.signed ?? 0}`,
  )
}

async function checkMetrics() {
  const res = await fetch(`${base}/metrics`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  const text = await res.text()
  if (!res.ok || !text.includes("sage_signer_signed_total")) {
    throw new Error(`/metrics returned unexpected payload: HTTP ${res.status}: ${text.slice(0, 200)}`)
  }
  console.log("[sage-signer] metrics OK")
}

async function fetchJson(url, init) {
  const res = await fetch(url, init)
  const text = await res.text()
  let payload
  try {
    payload = text ? JSON.parse(text) : null
  } catch {
    payload = text
  }

  if (!res.ok) {
    throw new Error(`${url} failed with HTTP ${res.status}: ${typeof payload === "string" ? payload : JSON.stringify(payload)}`)
  }

  return payload
}
