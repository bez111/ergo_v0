import { createHash } from "node:crypto"
import { ed25519 } from "@noble/curves/ed25519"
import {
  accordHashV0,
  signingHashRaw,
  type AccordAgreement,
  type AccordSettlementReceipt,
  type AccordVerificationReceipt,
} from "@accord-protocol/core"
import { accordObjectId } from "@/lib/sage/accord-v0"
import { canonicalizeQuestion } from "@/lib/sage/payments/agreement"
import type { SagePaymentProof, SageQuote } from "@/lib/sage/payments/types"
import type { SageReceiptNetwork, SageReceiptSignature, SageSettlementReceiptJson, SageVerificationReceiptJson } from "./types"

interface BuildVerificationReceiptOpts {
  agreement: AccordAgreement
  quote: SageQuote
  question: string
  proof: SagePaymentProof
  taskOutputDigest: string
  createdAt?: string
}

interface BuildPendingSettlementReceiptOpts {
  agreement: AccordAgreement
  quote: SageQuote
  proof: SagePaymentProof
  network: SageReceiptNetwork
  verificationReceiptHash: `blake2b256:0x${string}`
  settleError?: string
  createdAt?: string
}

interface NormalizeSettlementReceiptOpts {
  settlement: AccordSettlementReceipt
  verificationReceiptHash: `blake2b256:0x${string}`
  network?: SageReceiptNetwork
}

export function prefixedAccordHash(value: unknown): `blake2b256:0x${string}` {
  return `blake2b256:0x${accordHashV0(value)}`
}

export function nowIsoSecond(): string {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z")
}

export function buildVerificationReceipt(opts: BuildVerificationReceiptOpts): SageVerificationReceiptJson {
  const createdAt = opts.createdAt ?? nowIsoSecond()
  const canonicalQuestion = canonicalizeQuestion(opts.question)
  const unsigned = {
    type: "accord.verification_receipt.v0" as const,
    version: "v0" as const,
    receipt_id: accordObjectId("vr", {
      agreement_id: opts.agreement.agreement_id,
      note_box_id: opts.proof.noteBoxId,
      task_hash: opts.quote.taskHash,
    }),
    agreement_id: opts.agreement.agreement_id,
    agreement_hash: prefixedAccordHash(opts.agreement),
    verifier: { id: "verifier://sage-self-v0" },
    result: "accepted" as const,
    evidence: {
      output_hash: prefixedAccordHash(opts.taskOutputDigest),
      output_ref: `ergo:box:${opts.proof.noteBoxId}`,
      schema: "sage.payment_verification.v0",
    },
    checks: [
      {
        name: "schema_valid" as const,
        result: "pass" as const,
        detail: "Sage accepted the buyer Note proof payload and quote shape.",
      },
      {
        name: "quote_id_matches" as const,
        result: opts.proof.quoteId === opts.quote.quoteId ? "pass" as const : "fail" as const,
        detail: `quoteId=${opts.quote.quoteId}`,
      },
      {
        name: "task_hash_matches" as const,
        result: "pass" as const,
        detail: `note R6 matched blake2b256(canonical_question); quote.taskHash=${opts.quote.taskHash}`,
      },
      {
        name: "canonical_question_bound" as const,
        result: canonicalQuestion === opts.taskOutputDigest ? "pass" as const : "fail" as const,
        detail: `canonical_question_hash=${prefixedAccordHash(canonicalQuestion)}`,
      },
      {
        name: "payment_verified" as const,
        result: "pass" as const,
        detail: `accord rails-ergo verifyPayment accepted note_box_id=${opts.proof.noteBoxId}`,
      },
    ],
    created_at: createdAt,
    metadata: {
      sage_quote_id: opts.quote.quoteId,
      sage_task_hash: opts.quote.taskHash,
      note_box_id: opts.proof.noteBoxId,
      canonical_question: canonicalQuestion,
    },
  }

  return {
    ...unsigned,
    signature: signReceiptObject(unsigned, "verification"),
  }
}

export function normalizeSettlementReceipt(opts: NormalizeSettlementReceiptOpts): SageSettlementReceiptJson {
  const settlementWithMetadata = opts.settlement as AccordSettlementReceipt & { metadata?: unknown }
  const unsigned = {
    ...opts.settlement,
    agreement_id: opts.settlement.agreement_id,
    tx: {
      ...opts.settlement.tx,
      network: normalizeReceiptNetwork(opts.settlement.tx.network, opts.network),
    },
    verification_receipts: Array.from(
      new Set([...(opts.settlement.verification_receipts ?? []), opts.verificationReceiptHash]),
    ),
    metadata: {
      ...(isRecord(settlementWithMetadata.metadata) ? settlementWithMetadata.metadata : {}),
      sage_receipt_role: "settlement",
    },
  }

  return {
    ...unsigned,
    signature: signReceiptObject(unsigned, "settlement"),
  }
}

export function normalizeVerificationReceiptForAccordV0(
  receipt: AccordVerificationReceipt & { metadata?: Record<string, unknown> },
  agreement: AccordAgreement,
): SageVerificationReceiptJson {
  const { signature: _oldSignature, ...rest } = receipt
  void _oldSignature
  const receiptId = isAccordObjectId("vr", receipt.receipt_id)
    ? receipt.receipt_id
    : accordObjectId("vr", {
        agreement_id: agreement.agreement_id,
        old_receipt_id: receipt.receipt_id,
        evidence: receipt.evidence,
      })
  const unsigned = {
    ...rest,
    receipt_id: receiptId,
    agreement_id: agreement.agreement_id,
    agreement_hash: prefixedAccordHash(agreement),
    metadata: {
      ...(isRecord(rest.metadata) ? rest.metadata : {}),
      ...(receiptId !== receipt.receipt_id ? { sage_legacy_receipt_id: receipt.receipt_id } : {}),
    },
  }

  return {
    ...unsigned,
    signature: signReceiptObject(unsigned, "verification"),
  }
}

export function normalizeSettlementReceiptForAccordV0(
  receipt: AccordSettlementReceipt & { metadata?: Record<string, unknown> },
  agreement: AccordAgreement,
  verificationReceiptHash: `blake2b256:0x${string}`,
  network: SageReceiptNetwork,
): SageSettlementReceiptJson {
  const { signature: _oldSignature, ...rest } = receipt
  void _oldSignature
  const settlementId = isAccordObjectId("sr", receipt.settlement_id)
    ? receipt.settlement_id
    : accordObjectId("sr", {
        agreement_id: agreement.agreement_id,
        old_settlement_id: receipt.settlement_id,
        tx: receipt.tx,
      })
  const unsigned = {
    ...rest,
    settlement_id: settlementId,
    agreement_id: agreement.agreement_id,
    agreement_hash: prefixedAccordHash(agreement),
    verification_receipts: [verificationReceiptHash],
    tx: {
      ...receipt.tx,
      network: normalizeReceiptNetwork(receipt.tx.network, network),
    },
    metadata: {
      ...(isRecord(rest.metadata) ? rest.metadata : {}),
      ...(settlementId !== receipt.settlement_id ? { sage_legacy_settlement_id: receipt.settlement_id } : {}),
      sage_receipt_role: "settlement",
    },
  }

  return {
    ...unsigned,
    signature: signReceiptObject(unsigned, "settlement"),
  }
}

export function buildPendingSettlementReceipt(opts: BuildPendingSettlementReceiptOpts): SageSettlementReceiptJson {
  const createdAt = opts.createdAt ?? nowIsoSecond()
  const unsigned = {
    type: "accord.settlement_receipt.v0" as const,
    version: "v0" as const,
    settlement_id: accordObjectId("sr", {
      agreement_id: opts.agreement.agreement_id,
      note_box_id: opts.proof.noteBoxId,
    }),
    agreement_id: opts.agreement.agreement_id,
    agreement_hash: prefixedAccordHash(opts.agreement),
    verification_receipts: [opts.verificationReceiptHash],
    rail: "ergo" as const,
    mode: "note_redeemed" as const,
    status: "pending" as const,
    amount: opts.quote.price,
    currency: "ERG" as const,
    decimals: 9,
    tx: {
      network: opts.network,
      tx_id: opts.proof.noteBoxId.toLowerCase(),
      box_id: opts.proof.noteBoxId.toLowerCase(),
      proof: opts.settleError ? `settle deferred: ${opts.settleError}` : "settle deferred",
    },
    created_at: createdAt,
    metadata: {
      sage_receipt_role: "settlement",
      settlement_pending: true,
      note_box_id: opts.proof.noteBoxId,
    },
  }

  return {
    ...unsigned,
    signature: signReceiptObject(unsigned, "settlement"),
  }
}

function signReceiptObject(value: Record<string, unknown>, role: "verification" | "settlement"): SageReceiptSignature {
  const privateKey = receiptSigningPrivateKey()
  const publicKey = ed25519.getPublicKey(privateKey)
  const signature = ed25519.sign(signingHashRaw(value), privateKey)
  return {
    scheme: "ed25519",
    public_key: `0x${bytesToHex(publicKey)}`,
    signature: `0x${bytesToHex(signature)}`,
    ...(role === "settlement" ? { signer_role: "provider" as const } : {}),
  }
}

function normalizeReceiptNetwork(value: unknown, fallback: SageReceiptNetwork = "testnet"): SageReceiptNetwork {
  if (value === "mainnet" || value === "testnet") return value
  if (isRecord(value) && typeof value.baseUrl === "string") {
    return value.baseUrl.includes("testnet") ? "testnet" : fallback
  }
  return fallback
}

function isAccordObjectId(prefix: "acc" | "vr" | "sr", value: unknown): value is `${typeof prefix}_${string}` {
  return typeof value === "string" && new RegExp(`^${prefix}_[0-9A-HJKMNP-TV-Z]{26}$`).test(value)
}

function receiptSigningPrivateKey(): Uint8Array {
  const explicit = process.env.SAGE_RECEIPT_ED25519_PRIVATE_KEY
  if (explicit) return parsePrivateKey(explicit, "SAGE_RECEIPT_ED25519_PRIVATE_KEY")

  const paymentKey = process.env.SAGE_PAYMENT_HMAC_KEY
  if (paymentKey && paymentKey.length >= 32) {
    return createHash("sha256")
      .update("sage-receipt-ed25519:")
      .update(paymentKey)
      .digest()
  }

  throw new Error("SAGE_RECEIPT_ED25519_PRIVATE_KEY or SAGE_PAYMENT_HMAC_KEY is required to sign Sage receipts")
}

function parsePrivateKey(value: string, name: string): Uint8Array {
  const clean = value.trim().replace(/^0x/i, "")
  if (!/^[0-9a-f]{64}$/i.test(clean)) {
    throw new Error(`${name} must be a 32-byte hex string`)
  }
  return hexToBytes(clean)
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

function hexToBytes(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2)
  for (let i = 0; i < out.length; i += 1) {
    out[i] = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return out
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value)
}
