/**
 * GET /api/sage/receipt/<settlement_tx_id_or_note_box_id>
 *
 * Machine-readable Sage receipt source of truth.
 *
 * Happy path: read the full stored receipt bundle from Vercel Blob.
 * Degraded path: if Blob is not configured or this receipt predates durable
 * storage, reconstruct public chain evidence and label it chain_proof_only.
 */

import { NextResponse } from "next/server"
import {
  explorerBoxUrl,
  explorerUrl,
  fetchBox,
  fetchTransaction,
  nanoToErg,
  txPaysAddress,
  type BoxInfo,
  type ChainTx,
  type TxBox,
} from "@/lib/sage/explorer/fetch-tx"
import {
  isValidReceiptLookupId,
  loadReceiptBundle,
  probeReceiptStorage,
} from "@/lib/sage/receipts/storage"
import { normalizeSageReceiptBundleForAccordV0 } from "@/lib/sage/receipts/bundle"
import type { SageReceiptBundle } from "@/lib/sage/receipts/types"

interface ReceiptRouteProps {
  params: Promise<{ id: string }>
}

export const runtime = "nodejs"
export const revalidate = 30

export async function GET(_req: Request, { params }: ReceiptRouteProps) {
  const { id } = await params
  const network = (process.env.SAGE_NETWORK ?? "testnet") as "mainnet" | "testnet"
  const receiver = process.env.SAGE_WALLET_ADDRESS

  if (!isValidReceiptLookupId(id)) {
    return NextResponse.json(
      { ok: false, error: "invalid receipt id" },
      { status: 400, headers: noStoreHeaders() },
    )
  }

  if (id === "blob-probe-2026-05-16") {
    const probe = await probeReceiptStorage()
    return NextResponse.json(
      {
        ok: probe.ok,
        type: "sage.receipt_storage_health.v1",
        storage_configured: probe.configured,
        storage_healthy: probe.ok,
        writable: probe.writable,
        readable: probe.readable,
        path: probe.path ?? null,
        checked_at: probe.checked_at,
        error: probe.error ?? null,
      },
      { status: probe.ok ? 200 : 503, headers: noStoreHeaders() },
    )
  }

  const stored = await loadReceiptBundle(id)
  if (stored.ok && stored.bundle) {
    return NextResponse.json(normalizeSageReceiptBundleForAccordV0(stored.bundle), { headers: cacheHeaders() })
  }

  if (!/^[0-9a-f]{64}$/i.test(id)) {
    return NextResponse.json(
      {
        ok: false,
        error: stored.error ?? stored.reason ?? "Sage receipt not found in storage",
        id,
        storage_configured: stored.configured,
      },
      { status: 404, headers: noStoreHeaders() },
    )
  }

  const txResult = await fetchTransaction(id, network)
  if (txResult.ok && txResult.tx) {
    const paid = receiver ? txPaysAddress(txResult.tx, receiver, 1) : true
    if (!paid) {
      return NextResponse.json(
        { ok: false, error: "transaction does not pay the configured Sage receiver" },
        { status: 404, headers: noStoreHeaders() },
      )
    }

    return NextResponse.json(buildSettledReceipt(txResult.tx, id, network, receiver, stored.reason), {
      headers: cacheHeaders(),
    })
  }

  const boxResult = await fetchBox(id, network, receiver ?? undefined)
  if (boxResult.ok && boxResult.box) {
    return NextResponse.json(buildNoteReceipt(boxResult.box, network, receiver, stored.reason), {
      headers: cacheHeaders(),
    })
  }

  return NextResponse.json(
    {
      ok: false,
      error: stored.error ?? "Sage receipt not found yet",
      id,
      network,
      storage_configured: stored.configured,
      storage_reason: stored.reason ?? null,
      explorer_url: explorerUrl(id, network),
    },
    { status: txResult.status === 400 ? 400 : 404, headers: noStoreHeaders() },
  )
}

function buildSettledReceipt(
  tx: ChainTx,
  id: string,
  network: "mainnet" | "testnet",
  receiver?: string,
  storageReason?: string,
): SageReceiptBundle {
  const noteInput = findNoteBox(tx.inputs) ?? tx.inputs[0]
  const totalToSage = receiver
    ? tx.outputs.filter((o) => o.address === receiver).reduce((sum, o) => sum + o.value, 0)
    : tx.outputs[0]?.value ?? 0
  const paidNanoErg = noteInput?.value ?? totalToSage
  const settledAt = new Date(tx.timestamp).toISOString()

  return {
    ok: true,
    type: "sage.receipt_bundle.v1",
    version: "v1",
    status: "settled_on_chain",
    completeness: "chain_proof_only",
    created_at: settledAt,
    updated_at: settledAt,
    network,
    id,
    public_receipt_url: `https://www.ergoblockchain.org/r/sage/${id}`,
    api_receipt_url: `https://www.ergoblockchain.org/api/sage/receipt/${id}`,
    explorer_url: explorerUrl(id, network),
    quote: nullLegacyQuote(),
    payment_proof: {
      quoteId: "unknown",
      noteBoxId: noteInput?.boxId ?? id,
    },
    task: {
      question: null,
      canonical_question: null,
      task_hash: "unknown",
    },
    chain: {
      network,
      receiver: receiver ?? null,
      note_box_id: noteInput?.boxId ?? id,
      note_explorer_url: noteInput?.boxId ? explorerBoxUrl(noteInput.boxId, network) : explorerUrl(id, network),
      settlement_tx_id: tx.id,
      settlement_explorer_url: explorerUrl(tx.id, network),
      payment_nano_erg: String(paidNanoErg),
      payment_erg: nanoToErg(paidNanoErg),
    },
    accord: chainOnlyAccordArtifacts(),
    note:
      storageReason ??
      "This is a chain-only fallback receipt. Full Agreement, Verification Receipt, and Settlement Receipt JSON were not found in durable storage for this id.",
  }
}

function buildNoteReceipt(
  box: BoxInfo,
  network: "mainnet" | "testnet",
  receiver?: string,
  storageReason?: string,
): SageReceiptBundle {
  const status = box.spent && box.spentTransactionId
    ? "settled_on_chain"
    : "verified_pending_redemption"
  const createdAt = box.creationTimestamp
    ? new Date(box.creationTimestamp).toISOString()
    : new Date().toISOString()

  return {
    ok: true,
    type: "sage.receipt_bundle.v1",
    version: "v1",
    status,
    completeness: "chain_proof_only",
    created_at: createdAt,
    updated_at: createdAt,
    network,
    id: box.boxId,
    public_receipt_url: `https://www.ergoblockchain.org/r/sage/${box.boxId}`,
    api_receipt_url: `https://www.ergoblockchain.org/api/sage/receipt/${box.boxId}`,
    explorer_url: explorerBoxUrl(box.boxId, network),
    quote: nullLegacyQuote(),
    payment_proof: {
      quoteId: "unknown",
      noteBoxId: box.boxId,
    },
    task: {
      question: null,
      canonical_question: null,
      task_hash: "unknown",
    },
    chain: {
      network,
      receiver: receiver ?? null,
      note_box_id: box.boxId,
      note_explorer_url: explorerBoxUrl(box.boxId, network),
      settlement_tx_id: box.spentTransactionId ?? null,
      settlement_explorer_url: box.spentTransactionId
        ? explorerUrl(box.spentTransactionId, network)
        : null,
      payment_nano_erg: String(box.value),
      payment_erg: nanoToErg(box.value),
    },
    accord: chainOnlyAccordArtifacts(),
    note:
      storageReason ??
      "This is a chain-only fallback receipt. Full Agreement, Verification Receipt, and Settlement Receipt JSON were not found in durable storage for this id.",
  }
}

function chainOnlyAccordArtifacts() {
  return {
    agreement_hash: null,
    verification_receipt_hash: null,
    settlement_receipt_hash: null,
    agreement_json: null,
    verification_receipt_json: null,
    settlement_receipt_json: null,
  }
}

function nullLegacyQuote() {
  return {
    quoteId: "unknown",
    taskHash: "unknown",
    price: "0",
    expiresAt: "1970-01-01T00:00:00Z",
    receiverAddress: "unknown",
    reserveBoxId: "unknown",
    deadline: "+0 blocks" as const,
  }
}

function findNoteBox(boxes: TxBox[]): TxBox | undefined {
  return boxes.find((box) => {
    const regs = box.additionalRegisters
    if (!regs || typeof regs !== "object") return false
    const keys = Object.keys(regs)
    return keys.includes("R4") && keys.includes("R5") && keys.includes("R6")
  })
}

function cacheHeaders() {
  return { "cache-control": "public, max-age=30, s-maxage=30" }
}

function noStoreHeaders() {
  return { "cache-control": "no-store" }
}
