import { createHmac } from "node:crypto"
import {
  accordHashV0,
  signingHash,
  type AccordAgreement,
  type AccordSettlementReceipt,
} from "@accord-protocol/core"
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
    receipt_id: `vr_sage_${accordHashV0({
      agreement_id: opts.agreement.agreement_id,
      note_box_id: opts.proof.noteBoxId,
      task_hash: opts.quote.taskHash,
    }).slice(0, 24)}`,
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

export function buildPendingSettlementReceipt(opts: BuildPendingSettlementReceiptOpts): SageSettlementReceiptJson {
  const createdAt = opts.createdAt ?? nowIsoSecond()
  const unsigned = {
    type: "accord.settlement_receipt.v0" as const,
    version: "v0" as const,
    settlement_id: `sr_sage_${accordHashV0({
      agreement_id: opts.agreement.agreement_id,
      note_box_id: opts.proof.noteBoxId,
    }).slice(0, 24)}`,
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
  const digest = signingHash(value)
  const signing_hash = `blake2b256:0x${digest}` as const
  const key = process.env.SAGE_PAYMENT_HMAC_KEY
  if (key && key.length >= 32) {
    const signature = createHmac("sha256", key)
      .update(`sage-receipt.${role}.${digest}`)
      .digest("hex")
    return {
      scheme: "sage-hmac-sha256",
      public_key: "env:SAGE_PAYMENT_HMAC_KEY",
      signature: `hmac-sha256:${signature}`,
      signing_hash,
    }
  }

  return {
    scheme: "unsigned",
    public_key: "not-configured",
    signature: `unsigned:${digest}`,
    signing_hash,
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value)
}
