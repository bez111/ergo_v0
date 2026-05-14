/**
 * Thin server-side fetcher for Ergo testnet/mainnet transactions.
 *
 * Sage's receipt page uses this to reconstruct what happened from the
 * settlement tx_id alone — no server-side receipt store needed for the
 * Phase 2 ship. The chain itself is the canonical record.
 */

const TESTNET_API = "https://api-testnet.ergoplatform.com/api/v1"
const MAINNET_API = "https://api.ergoplatform.com/api/v1"

export interface TxBox {
  boxId: string
  value: number
  address: string
  index: number
  /** Optional R4-R9 register hex blobs. */
  additionalRegisters?: Record<string, string | { serializedValue?: string }>
}

export interface ChainTx {
  id: string
  inclusionHeight: number
  timestamp: number
  inputs: TxBox[]
  outputs: TxBox[]
  size: number
}

export interface FetchTxResult {
  ok: boolean
  tx?: ChainTx
  status: number
  error?: string
}

const ONE_HOUR = 3600

export async function fetchTransaction(
  txId: string,
  network: "testnet" | "mainnet" = "testnet",
): Promise<FetchTxResult> {
  if (!/^[0-9a-f]{64}$/i.test(txId)) {
    return { ok: false, status: 400, error: "tx_id must be 64-char hex" }
  }
  const base = network === "testnet" ? TESTNET_API : MAINNET_API
  try {
    const res = await fetch(`${base}/transactions/${txId}`, {
      next: { revalidate: ONE_HOUR },
    })
    if (res.status === 404) return { ok: false, status: 404, error: "tx not found" }
    if (!res.ok) return { ok: false, status: res.status, error: `explorer ${res.status}` }
    const tx = (await res.json()) as ChainTx
    return { ok: true, status: 200, tx }
  } catch (err) {
    return {
      ok: false,
      status: 502,
      error: err instanceof Error ? err.message : "explorer fetch failed",
    }
  }
}

/**
 * True iff the tx pays at least the given nanoERG amount to the given
 * receiver address. Used by the receipt page to validate that the tx
 * the URL points at actually settled to Sage.
 */
export function txPaysAddress(tx: ChainTx, address: string, minNanoERG: number): boolean {
  const totalToAddr = tx.outputs
    .filter((o) => o.address === address)
    .reduce((sum, o) => sum + o.value, 0)
  return totalToAddr >= minNanoERG
}

export function explorerUrl(txId: string, network: "testnet" | "mainnet" = "testnet"): string {
  return network === "testnet"
    ? `https://testnet.ergoplatform.com/transactions/${txId}`
    : `https://explorer.ergoplatform.com/transactions/${txId}`
}

export function nanoToErg(nano: number): string {
  // 1 ERG = 1e9 nanoERG. Format with up to 9 decimals, trim trailing zeros.
  const erg = nano / 1e9
  return erg.toFixed(9).replace(/\.?0+$/, "")
}

export interface BoxInfo {
  boxId: string
  transactionId: string
  inclusionHeight: number
  value: number
  address: string
  /** Block timestamp of the parent tx, ms epoch. */
  creationTimestamp?: number
  /** Whether the box has been spent (settlement happened). */
  spent: boolean
  spentTransactionId?: string
}

export interface FetchBoxResult {
  ok: boolean
  box?: BoxInfo
  status: number
  error?: string
}

/**
 * Fetch a box by id from the explorer. Used by the receipt page when the
 * `id` param is a Note box id (settle deferred) rather than a settlement
 * tx id — lets the page show the canonical Note tx as the payment proof
 * even before redemption happens.
 */
export async function fetchBox(
  boxId: string,
  network: "testnet" | "mainnet" = "testnet",
): Promise<FetchBoxResult> {
  if (!/^[0-9a-f]{64}$/i.test(boxId)) {
    return { ok: false, status: 400, error: "box_id must be 64-char hex" }
  }
  const base = network === "testnet" ? TESTNET_API : MAINNET_API
  try {
    const res = await fetch(`${base}/boxes/${boxId}`, {
      next: { revalidate: ONE_HOUR },
    })
    if (res.status === 404) return { ok: false, status: 404, error: "box not found" }
    if (!res.ok) return { ok: false, status: res.status, error: `explorer ${res.status}` }
    const raw = (await res.json()) as {
      boxId: string
      transactionId: string
      inclusionHeight: number
      value: number
      address: string
      spentTransactionId?: string | null
      creationTimestamp?: number
    }
    return {
      ok: true,
      status: 200,
      box: {
        boxId: raw.boxId,
        transactionId: raw.transactionId,
        inclusionHeight: raw.inclusionHeight,
        value: raw.value,
        address: raw.address,
        creationTimestamp: raw.creationTimestamp,
        spent: !!raw.spentTransactionId,
        spentTransactionId: raw.spentTransactionId ?? undefined,
      },
    }
  } catch (err) {
    return {
      ok: false,
      status: 502,
      error: err instanceof Error ? err.message : "explorer fetch failed",
    }
  }
}

export function explorerBoxUrl(boxId: string, network: "testnet" | "mainnet" = "testnet"): string {
  return network === "testnet"
    ? `https://testnet.ergoplatform.com/boxes/${boxId}`
    : `https://explorer.ergoplatform.com/boxes/${boxId}`
}
