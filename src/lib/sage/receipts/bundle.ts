import type { AccordAgreement } from "@accord-protocol/core"
import { accordObjectId, inlineInputRef } from "@/lib/sage/accord-v0"
import { canonicalizeQuestion } from "@/lib/sage/payments/agreement"
import type { SagePaymentProof, SageQuote, SageVerificationResult } from "@/lib/sage/payments/types"
import { explorerBoxUrl, explorerUrl } from "@/lib/sage/explorer/fetch-tx"
import {
  normalizeSettlementReceiptForAccordV0,
  normalizeVerificationReceiptForAccordV0,
  nowIsoSecond,
  prefixedAccordHash,
} from "./artifacts"
import type { SageReceiptBundle, SageReceiptNetwork } from "./types"

interface BuildReceiptBundleOpts {
  quote: SageQuote
  question: string
  proof: SagePaymentProof
  result: SageVerificationResult
  agreement: AccordAgreement
  network: SageReceiptNetwork
}

const SITE_URL = "https://www.ergoblockchain.org"

export function buildSageReceiptBundle(opts: BuildReceiptBundleOpts): SageReceiptBundle {
  const { quote, question, proof, result, agreement, network } = opts
  if (!result.verificationReceipt || !result.settlementReceipt) {
    throw new Error("verification and settlement receipt artifacts are required")
  }

  const settlementTxId = result.settlementTxId && isHex64(result.settlementTxId)
    ? result.settlementTxId.toLowerCase()
    : null
  const id = settlementTxId ?? proof.noteBoxId.toLowerCase()
  const status = settlementTxId ? "settled_on_chain" : "verified_pending_redemption"
  const now = nowIsoSecond()

  return normalizeSageReceiptBundleForAccordV0({
    ok: true,
    type: "sage.receipt_bundle.v1",
    version: "v1",
    id,
    status,
    completeness: "full_receipt_bundle",
    created_at: result.verificationReceipt.created_at,
    updated_at: now,
    network,
    public_receipt_url: `${SITE_URL}/r/sage/${id}`,
    api_receipt_url: `${SITE_URL}/api/sage/receipt/${id}`,
    explorer_url: settlementTxId ? explorerUrl(settlementTxId, network) : explorerBoxUrl(proof.noteBoxId, network),
    quote,
    payment_proof: proof,
    task: {
      question,
      canonical_question: canonicalizeQuestion(question),
      task_hash: quote.taskHash,
    },
    chain: {
      network,
      receiver: quote.receiverAddress,
      note_box_id: proof.noteBoxId,
      note_explorer_url: explorerBoxUrl(proof.noteBoxId, network),
      settlement_tx_id: settlementTxId,
      settlement_explorer_url: settlementTxId ? explorerUrl(settlementTxId, network) : null,
      payment_erg: quote.price,
      payment_nano_erg: ergDecimalToNanoString(quote.price),
    },
    accord: {
      agreement_hash: prefixedAccordHash(agreement),
      verification_receipt_hash: prefixedAccordHash(result.verificationReceipt),
      settlement_receipt_hash: prefixedAccordHash(result.settlementReceipt),
      agreement_json: agreement,
      verification_receipt_json: result.verificationReceipt,
      settlement_receipt_json: result.settlementReceipt,
    },
  })
}

export function normalizeSageReceiptBundleForAccordV0(bundle: SageReceiptBundle): SageReceiptBundle {
  const agreement = bundle.accord.agreement_json
  const verification = bundle.accord.verification_receipt_json
  const settlement = bundle.accord.settlement_receipt_json
  if (!agreement || !verification || !settlement) return bundle

  const normalizedAgreement = normalizeAgreementForAccordV0(agreement, bundle)
  const normalizedVerification = normalizeVerificationReceiptForAccordV0(verification, normalizedAgreement)
  const verificationReceiptHash = prefixedAccordHash(normalizedVerification)
  const normalizedSettlement = normalizeSettlementReceiptForAccordV0(
    settlement,
    normalizedAgreement,
    verificationReceiptHash,
    bundle.network,
  )

  return {
    ...bundle,
    completeness: "full_receipt_bundle",
    accord: {
      agreement_hash: prefixedAccordHash(normalizedAgreement),
      verification_receipt_hash: verificationReceiptHash,
      settlement_receipt_hash: prefixedAccordHash(normalizedSettlement),
      agreement_json: normalizedAgreement,
      verification_receipt_json: normalizedVerification,
      settlement_receipt_json: normalizedSettlement,
    },
  }
}

function normalizeAgreementForAccordV0(agreement: AccordAgreement, bundle: SageReceiptBundle): AccordAgreement {
  const canonicalQuestion =
    bundle.task.canonical_question ??
    (bundle.task.question ? canonicalizeQuestion(bundle.task.question) : null) ??
    stripInlinePrefix(agreement.task.input_ref) ??
    bundle.quote.quoteId
  const agreementId = isAccordObjectId("acc", agreement.agreement_id)
    ? agreement.agreement_id
    : accordObjectId("acc", {
        provider: "sage",
        quote_id: bundle.quote.quoteId,
        task_hash: bundle.quote.taskHash,
        legacy_agreement_id: agreement.agreement_id,
      })
  const inputRef = /^(github|https|ipfs|data|inline):/.test(agreement.task.input_ref)
    ? agreement.task.input_ref
    : inlineInputRef(canonicalQuestion)

  return {
    ...agreement,
    agreement_id: agreementId,
    task: {
      ...agreement.task,
      input_ref: inputRef,
    },
    metadata: {
      ...(agreement.metadata ?? {}),
      sage_quote_id: bundle.quote.quoteId,
      ...(agreementId !== agreement.agreement_id ? { sage_legacy_agreement_id: agreement.agreement_id } : {}),
    },
  }
}

export function receiptAliases(bundle: SageReceiptBundle): string[] {
  const aliases = new Set<string>()
  aliases.add(bundle.quote.quoteId)
  aliases.add(bundle.payment_proof.noteBoxId)
  aliases.add(bundle.accord.agreement_json?.agreement_id ?? "")
  aliases.add(bundle.accord.verification_receipt_json?.receipt_id ?? "")
  aliases.add(bundle.accord.settlement_receipt_json?.settlement_id ?? "")
  if (bundle.chain.settlement_tx_id) aliases.add(bundle.chain.settlement_tx_id)
  aliases.delete("")
  aliases.delete(bundle.id)
  return Array.from(aliases)
}

function isHex64(value: string): boolean {
  return /^[0-9a-f]{64}$/i.test(value)
}

function isAccordObjectId(prefix: "acc" | "vr" | "sr", value: unknown): value is `${typeof prefix}_${string}` {
  return typeof value === "string" && new RegExp(`^${prefix}_[0-9A-HJKMNP-TV-Z]{26}$`).test(value)
}

function stripInlinePrefix(value: string): string {
  return value.startsWith("inline:") ? value.slice("inline:".length) : value
}

function ergDecimalToNanoString(value: string): string {
  const [wholeRaw, fracRaw = ""] = value.split(".")
  const whole = BigInt(wholeRaw || "0")
  const frac = BigInt((fracRaw + "000000000").slice(0, 9))
  return (whole * BigInt("1000000000") + frac).toString()
}
