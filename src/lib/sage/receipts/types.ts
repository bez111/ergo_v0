import type { AccordAgreement, AccordSettlementReceipt, AccordVerificationReceipt } from "@accord-protocol/core"
import type { SagePaymentProof, SageQuote } from "@/lib/sage/payments/types"

export type SageReceiptNetwork = "mainnet" | "testnet"
export type SageReceiptStatus = "settled_on_chain" | "verified_pending_redemption"
export type SageReceiptCompleteness = "full" | "chain_proof_only"

export interface SageReceiptSignature {
  scheme: "sage-hmac-sha256" | "unsigned"
  public_key: string
  signature: string
  signing_hash: `blake2b256:0x${string}`
}

export type SageVerificationReceiptJson = Omit<AccordVerificationReceipt, "signature"> & {
  signature: SageReceiptSignature
  metadata?: Record<string, unknown>
}

export type SageSettlementReceiptJson = Omit<AccordSettlementReceipt, "signature"> & {
  signature?: SageReceiptSignature
  metadata?: Record<string, unknown>
}

export interface SageReceiptChainEvidence {
  network: SageReceiptNetwork
  receiver: string | null
  note_box_id: string
  note_explorer_url: string
  settlement_tx_id: string | null
  settlement_explorer_url: string | null
  payment_erg: string
  payment_nano_erg: string
}

export interface SageReceiptStoredMetadata {
  provider: "vercel_blob"
  path: string
  aliases: string[]
  saved_at: string
}

export interface SageReceiptBundle {
  ok: true
  type: "sage.receipt_bundle.v1"
  version: "v1"
  id: string
  status: SageReceiptStatus
  completeness: SageReceiptCompleteness
  created_at: string
  updated_at: string
  network: SageReceiptNetwork
  public_receipt_url: string
  api_receipt_url: string
  explorer_url: string | null
  quote: SageQuote
  payment_proof: SagePaymentProof
  task: {
    question: string | null
    canonical_question: string | null
    task_hash: string
  }
  chain: SageReceiptChainEvidence
  accord: {
    agreement_hash: `blake2b256:0x${string}` | null
    verification_receipt_hash: `blake2b256:0x${string}` | null
    settlement_receipt_hash: `blake2b256:0x${string}` | null
    agreement_json: AccordAgreement | null
    verification_receipt_json: SageVerificationReceiptJson | null
    settlement_receipt_json: SageSettlementReceiptJson | null
  }
  storage?: SageReceiptStoredMetadata
  note?: string
}

export interface SageReceiptAlias {
  type: "sage.receipt_alias.v1"
  target: string
  created_at: string
}

export interface SageReceiptStorageResult {
  ok: boolean
  skipped?: boolean
  reason?: string
  path?: string
  aliases?: string[]
  error?: string
}
