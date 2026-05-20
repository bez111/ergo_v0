#!/usr/bin/env node
/**
 * Inspect local signer configuration without printing secrets.
 *
 * Compares the address derived from scripts/sage-signer/.env with the
 * Vercel production env pull at ../../.vercel/.env.production.local when
 * that file exists. This catches the most dangerous ops mistake: exposing
 * a signer whose seed does not match the wallet address used by quotes.
 */

import "dotenv/config"
import { existsSync, readFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { ErgoHDKey } from "@fleet-sdk/wallet"
import { ErgoAddress, Network } from "@fleet-sdk/core"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, "../..")
const productionEnvPath = join(repoRoot, ".vercel/.env.production.local")
const network = (process.env.SAGE_NETWORK ?? "testnet").toLowerCase()
const fleetNetwork = network === "mainnet" ? Network.Mainnet : Network.Testnet
const seed = process.env.SAGE_WALLET_SEED ?? ""
const passphrase = process.env.SAGE_WALLET_PASSPHRASE ?? ""

if (!seed) {
  console.error("[sage-signer] SAGE_WALLET_SEED missing in scripts/sage-signer/.env")
  process.exit(1)
}

const key = await ErgoHDKey.fromMnemonic(seed, passphrase ? { passphrase } : undefined)
const signerAddress = ErgoAddress.fromPublicKey(key.publicKey, fleetNetwork).toString(fleetNetwork)
const prod = existsSync(productionEnvPath) ? parseEnv(readFileSync(productionEnvPath, "utf8")) : {}
const expectedAddress = prod.SAGE_WALLET_ADDRESS ?? process.env.SAGE_EXPECTED_WALLET_ADDRESS ?? process.env.SAGE_WALLET_ADDRESS ?? ""
const prodSignerUrl = prod.SAGE_SIGNER_URL ?? ""
const tokenMatch = prod.SAGE_SIGNER_TOKEN && process.env.SAGE_SIGNER_TOKEN
  ? prod.SAGE_SIGNER_TOKEN === process.env.SAGE_SIGNER_TOKEN
  : null

console.log("[sage-signer] inspect")
console.log(`  network:              ${network}`)
console.log(`  derived address:      ${signerAddress}`)
console.log(`  expected address:     ${expectedAddress || "(not configured)"}`)
console.log(`  address match:        ${expectedAddress ? yesNo(expectedAddress === signerAddress) : "unknown"}`)
console.log(`  production env file:  ${existsSync(productionEnvPath) ? productionEnvPath : "(not found)"}`)
console.log(`  production signer:    ${prodSignerUrl || "(not configured)"}`)
console.log(`  token match:          ${tokenMatch === null ? "unknown" : yesNo(tokenMatch)}`)

let failed = false
if (expectedAddress && expectedAddress !== signerAddress) {
  failed = true
  console.error("")
  console.error("[sage-signer] wallet mismatch: this seed cannot settle production quotes.")
}
if (tokenMatch === false) {
  failed = true
  console.error("")
  console.error("[sage-signer] token mismatch: Vercel and local signer will reject each other.")
}
if (/\.trycloudflare\.com\/sign$/i.test(prodSignerUrl)) {
  console.warn("")
  console.warn("[sage-signer] warning: production points at an ad-hoc trycloudflare tunnel.")
  console.warn("Use a named tunnel or controlled host for durable settlement mode.")
}

if (failed) process.exit(1)

function parseEnv(body) {
  const out = {}
  for (const line of body.split(/\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)\s*$/)
    if (!m) continue
    out[m[1]] = m[2].replace(/^['"]|['"]$/g, "")
  }
  return out
}

function yesNo(value) {
  return value ? "yes" : "no"
}
