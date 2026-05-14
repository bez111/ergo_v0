/**
 * Sage server-side wallet — single shared instance per cold start.
 *
 * Phase 2 testnet design:
 *   - Address comes from SAGE_WALLET_ADDRESS env var.
 *   - Signer comes from SAGE_WALLET_SEED (BIP-39 mnemonic) via sigma-rust,
 *     or a remote signer URL via SAGE_SIGNER_URL.
 *   - Reserve box id from SAGE_RESERVE_BOX_ID — Sage redeems Notes
 *     against this Reserve.
 *
 * For Phase 2 ship, only the `address` + `reserveBoxId` are required at
 * boot; the actual signer wiring is deferred to /api/sage/verify-payment
 * because Sage only signs the *redemption* tx, not the issuance. The
 * buyer's wallet (browser-side, via Nautilus deeplink) signs Note
 * issuance.
 *
 * Mainnet hardening (Sprint 9+): swap env-var seed for a managed signer
 * (KMS / HSM / external service). This file is the single chokepoint.
 */

import type { SignerFn } from "ergo-agent-pay"
import { ErgoAgentPay } from "ergo-agent-pay"

interface SageWalletConfig {
  address: string
  reserveBoxId: string
  network: "mainnet" | "testnet"
}

let cachedAgent: ErgoAgentPay | null = null
let cachedConfig: SageWalletConfig | null = null

/**
 * Returns the Sage seller agent. Throws with a friendly env-var hint if
 * the wallet isn't configured. Cached per cold start.
 */
export function getSageAgent(): ErgoAgentPay {
  if (cachedAgent) return cachedAgent
  const cfg = readWalletConfig()
  cachedAgent = new ErgoAgentPay({
    address: cfg.address,
    network: cfg.network,
    signer: buildSigner(),
  })
  cachedConfig = cfg
  return cachedAgent
}

export function getSageWalletConfig(): SageWalletConfig {
  if (cachedConfig) return cachedConfig
  cachedConfig = readWalletConfig()
  return cachedConfig
}

function readWalletConfig(): SageWalletConfig {
  const address = process.env.SAGE_WALLET_ADDRESS
  const reserveBoxId = process.env.SAGE_RESERVE_BOX_ID
  const network = (process.env.SAGE_NETWORK ?? "testnet") as "mainnet" | "testnet"

  if (!address || !reserveBoxId) {
    throw new Error(
      [
        "Sage wallet not configured.",
        "",
        "Required env vars:",
        "  SAGE_WALLET_ADDRESS  — Sage's testnet receiver address (9f… for testnet)",
        "  SAGE_RESERVE_BOX_ID  — Reserve box id Sage redeems Notes against",
        "  SAGE_WALLET_SEED     — BIP-39 mnemonic for redemption-tx signer",
        "  SAGE_NETWORK         — 'testnet' (default) or 'mainnet'",
        "",
        "Run `npm run sage:wallet` to generate a fresh testnet wallet + Reserve.",
      ].join("\n"),
    )
  }

  return { address, reserveBoxId, network }
}

/**
 * Builds the Sage seller signer. Only signs *redemption* transactions;
 * the buyer's browser wallet signs Note *issuance*.
 *
 * Three supported strategies (auto-selected by env):
 *   1. SAGE_SIGNER_URL set → POST unsigned tx, expect signed tx back.
 *      Works with any external signer service (own KMS, HSM, etc.).
 *   2. SAGE_WALLET_SEED set → derive ed25519 signer from BIP-39 seed
 *      via sigma-rust. Local, lowest latency.
 *   3. Neither set → throws on first sign attempt with a clear message.
 *      This lets the wallet config load without a signer (e.g. for
 *      read-only routes that just need the address).
 */
function buildSigner(): SignerFn {
  const remoteUrl = process.env.SAGE_SIGNER_URL
  const seed = process.env.SAGE_WALLET_SEED

  if (remoteUrl) {
    return async (unsignedTx) => {
      const res = await fetch(remoteUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ unsignedTx }),
      })
      if (!res.ok) {
        throw new Error(`Sage remote signer ${remoteUrl} returned ${res.status}`)
      }
      const body = (await res.json()) as { signedTx: unknown }
      if (!body.signedTx) throw new Error("Sage remote signer returned no signedTx")
      return body.signedTx as Awaited<ReturnType<SignerFn>>
    }
  }

  if (seed) {
    // TODO(Sprint 2): import sigma-rust HD wallet, derive private key
    // from seed, sign unsignedTx locally. Stubbed for the Sprint 1
    // scaffold so the wallet config can load without a signer.
    return async () => {
      throw new Error(
        "Sage local signer (SAGE_WALLET_SEED → sigma-rust) not yet wired. See src/lib/sage/payments/wallet.ts:buildSigner — Sprint 2 task.",
      )
    }
  }

  return async () => {
    throw new Error(
      "Sage signer is read-only. Set SAGE_SIGNER_URL or SAGE_WALLET_SEED to enable signing.",
    )
  }
}
