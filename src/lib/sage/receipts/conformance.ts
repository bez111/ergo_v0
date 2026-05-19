import {
  validateAgreement,
  validateSettlementReceipt,
  validateVerificationReceipt,
  type AccordSettlementReceipt,
  type AccordVerificationReceipt,
  type ValidationResult,
} from "@accord-protocol/core"
import { prefixedAccordHash } from "./artifacts"
import type { SageReceiptBundle } from "./types"

export type SageConformanceCheckResult = "pass" | "fail"

export interface SageConformanceCheck {
  id: string
  result: SageConformanceCheckResult
  detail?: string
}

export interface SageReceiptConformanceResult {
  ok: boolean
  checks: SageConformanceCheck[]
}

export function validateSageReceiptBundle(bundle: SageReceiptBundle): SageReceiptConformanceResult {
  const checks: SageConformanceCheck[] = []
  const add = (id: string, ok: boolean, detail?: string) => {
    checks.push({
      id,
      result: ok ? "pass" : "fail",
      ...(ok ? {} : { detail: detail ?? "check failed" }),
    })
  }

  add("bundle.type", bundle.type === "sage.receipt_bundle.v1", `got ${bundle.type}`)
  add("bundle.version", bundle.version === "v1", `got ${bundle.version}`)
  add(
    "bundle.completeness",
    bundle.completeness === "full_receipt_bundle",
    `got ${bundle.completeness}`,
  )

  const agreement = bundle.accord.agreement_json
  const verification = bundle.accord.verification_receipt_json
  const settlement = bundle.accord.settlement_receipt_json

  add("artifact.agreement.present", !!agreement)
  add("artifact.verification_receipt.present", !!verification)
  add("artifact.settlement_receipt.present", !!settlement)
  add("hash.agreement.present", !!bundle.accord.agreement_hash)
  add("hash.verification_receipt.present", !!bundle.accord.verification_receipt_hash)
  add("hash.settlement_receipt.present", !!bundle.accord.settlement_receipt_hash)

  if (!agreement || !verification || !settlement) {
    return summarise(checks)
  }

  addValidation(checks, "agreement.core", validateAgreement(agreement))
  addValidation(
    checks,
    "verification_receipt.core",
    validateVerificationReceipt(verification as unknown as AccordVerificationReceipt, {
      agreement,
    }),
  )
  addValidation(
    checks,
    "settlement_receipt.core",
    validateSettlementReceipt(settlement as unknown as AccordSettlementReceipt, {
      agreement,
    }),
  )

  const agreementHash = prefixedAccordHash(agreement)
  const verificationHash = prefixedAccordHash(verification)
  const settlementHash = prefixedAccordHash(settlement)

  add(
    "hash.agreement.matches",
    bundle.accord.agreement_hash === agreementHash,
    `stored=${bundle.accord.agreement_hash ?? "null"} actual=${agreementHash}`,
  )
  add(
    "hash.verification_receipt.matches",
    bundle.accord.verification_receipt_hash === verificationHash,
    `stored=${bundle.accord.verification_receipt_hash ?? "null"} actual=${verificationHash}`,
  )
  add(
    "hash.settlement_receipt.matches",
    bundle.accord.settlement_receipt_hash === settlementHash,
    `stored=${bundle.accord.settlement_receipt_hash ?? "null"} actual=${settlementHash}`,
  )

  add(
    "verification.agreement_id.matches",
    verification.agreement_id === agreement.agreement_id,
    `verification=${verification.agreement_id} agreement=${agreement.agreement_id}`,
  )
  add(
    "verification.agreement_hash.matches",
    verification.agreement_hash === agreementHash,
    `verification=${verification.agreement_hash} agreement=${agreementHash}`,
  )
  add(
    "settlement.agreement_id.matches",
    settlement.agreement_id === agreement.agreement_id,
    `settlement=${settlement.agreement_id} agreement=${agreement.agreement_id}`,
  )
  add(
    "settlement.agreement_hash.matches",
    settlement.agreement_hash === agreementHash,
    `settlement=${settlement.agreement_hash} agreement=${agreementHash}`,
  )
  add(
    "settlement.includes_verification_receipt",
    (settlement.verification_receipts ?? []).includes(verificationHash),
    `missing ${verificationHash}`,
  )
  add(
    "settlement.rail.ergo",
    settlement.rail === "ergo" && agreement.payment.rail === "ergo",
    `settlement=${settlement.rail} agreement=${agreement.payment.rail}`,
  )

  if (bundle.status === "settled_on_chain") {
    add("chain.settlement_tx_id.present", !!bundle.chain.settlement_tx_id)
    add(
      "chain.settlement_tx_id.matches_receipt",
      !bundle.chain.settlement_tx_id || settlement.tx.tx_id === bundle.chain.settlement_tx_id,
      `settlement=${settlement.tx.tx_id} chain=${bundle.chain.settlement_tx_id}`,
    )
  }

  return summarise(checks)
}

export function failingSageConformanceChecks(
  result: SageReceiptConformanceResult,
): SageConformanceCheck[] {
  return result.checks.filter((check) => check.result === "fail")
}

function addValidation(checks: SageConformanceCheck[], id: string, result: ValidationResult) {
  checks.push({
    id,
    result: result.ok ? "pass" : "fail",
    ...(result.ok
      ? {}
      : {
          detail: result.problems
            .map((problem) => `${problem.path}: ${problem.message}`)
            .join("; "),
        }),
  })
}

function summarise(checks: SageConformanceCheck[]): SageReceiptConformanceResult {
  return {
    ok: checks.every((check) => check.result === "pass"),
    checks,
  }
}
