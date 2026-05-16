/**
 * Shared types for Sage's premium-query payment flow.
 *
 * The shape mirrors Accord's vocabulary so the wire payloads between the
 * widget and /api/sage/* are direct subsets of accord.agreement.v0.
 * Keeping the alignment one-to-one lets us swap stubs for real Accord
 * objects without renaming fields.
 */

export interface SageQuote {
  /** Stable identifier — generated server-side, returned to widget. */
  quoteId: string
  /** Hash of the question this quote prices. Used in acceptance predicate. */
  taskHash: string
  /** Decimal string in ERG — e.g. "0.001". */
  price: string
  /** ISO string when this quote/agreement was issued. */
  issuedAt?: string
  /** ISO string when the quote stops being honored. */
  expiresAt: string
  /** Sage's testnet address — receiver of the Note. */
  receiverAddress: string
  /** Reserve box id Sage will redeem the Note against. */
  reserveBoxId: string
  /** Block-relative deadline embedded in the Note. */
  deadline: `+${number} blocks`
}

export interface SagePaymentProof {
  quoteId: string
  noteBoxId: string
}

export interface SageVerificationResult {
  ok: boolean
  /** Settlement tx id once Sage redeems the Note. */
  settlementTxId?: string
  /** Receipt id surfaced as /r/sage/<id>. */
  receiptId?: string
  /** Accord rail settlement id when available. */
  accordSettlementId?: string
  /** Full Accord Agreement JSON used for this verification. */
  agreement?: import("@accord-protocol/core").AccordAgreement
  /** Full Sage Verification Receipt JSON for this verification. */
  verificationReceipt?: import("@/lib/sage/receipts/types").SageVerificationReceiptJson
  /** Full Sage Settlement Receipt JSON, settled or pending. */
  settlementReceipt?: import("@/lib/sage/receipts/types").SageSettlementReceiptJson
  error?: string
}

/** Why the chat endpoint flagged a request as premium. */
export type PremiumReason =
  | "explicit_command"
  | "code_request"
  | "long_answer"
  | "deep_research"
  | "multi_turn_followup"

export interface PremiumDecision {
  isPremium: boolean
  reason?: PremiumReason
  /** Human-facing explanation surfaced in the payment modal. */
  rationale?: string
}
