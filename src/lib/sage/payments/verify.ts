/**
 * Verify a buyer's Note proof against a quote, then redeem.
 *
 * Sprint 1 ships the structure; the actual rails-ergo wiring happens in
 * Sprint 2 once the Sage seller signer is hooked up. The interface here
 * is the contract /api/sage/verify-payment will call.
 */

import { createErgoRailAdapter } from "@accord-protocol/rails-ergo"
import type { ErgoNoteOps } from "@accord-protocol/rails-ergo"
import type { SagePaymentProof, SageQuote, SageVerificationResult } from "./types"
import { quoteToAgreement } from "./agreement"
import { getSageAgent } from "./wallet"

export interface VerifyOpts {
  quote: SageQuote
  /** The original question the quote was issued for. */
  question: string
  /** Buyer's payment proof — note_box_id, etc. */
  proof: SagePaymentProof
  /** Stand-in for the eventual answer used as task_output during settle. */
  taskOutputDigest: string
}

/**
 * Verify the Note matches the quote and redeem it. Returns settlement
 * receipt id for the /r/sage/<id> page on success, or an error code
 * shaped for the widget to render.
 */
export async function verifyAndSettle(opts: VerifyOpts): Promise<SageVerificationResult> {
  const agreement = quoteToAgreement(opts.quote, opts.question)

  const sellerAgent = getSageAgent()
  // Same TS-private-but-runtime-public pattern as example 16 — see
  // packages/accord-rails-ergo/README and example 16's seller/tool.ts.
  const ops = sellerAgent as unknown as ErgoNoteOps
  const rail = createErgoRailAdapter({ ops })

  // 1. Verify the buyer's Note exists, is unredeemed, and matches the
  //    agreement's task hash + reserve binding + value.
  const verify = await rail.verifyPayment({
    agreement,
    payment: {
      note_box_id: opts.proof.noteBoxId,
      task_output: opts.taskOutputDigest,
      receiver_address: opts.quote.receiverAddress,
    },
  })

  if (!verify.ok) {
    return {
      ok: false,
      error: `${verify.code}: ${verify.message ?? "rail rejected payment"}`,
    }
  }

  // 2. Try to redeem the Note. settle() is optional on the
  //    AccordRailAdapter spec; rails-ergo implements it but the actual
  //    redemption signature requires SAGE_WALLET_SEED / SAGE_SIGNER_URL.
  //    If the signer isn't configured, treat the verified Note as the
  //    payment proof — the buyer's funds either get redeemed later by
  //    a separate sweeper or auto-refund on expiry. Either way, the
  //    answer flows: verify is the contract, settle is bookkeeping.
  if (!rail.settle) {
    return {
      ok: true,
      receiptId: opts.proof.noteBoxId,
      error: "settle() missing on adapter — verified-only mode",
    }
  }
  try {
    const settle = await rail.settle({
      agreement,
      payment: {
        note_box_id: opts.proof.noteBoxId,
        task_output: opts.taskOutputDigest,
        receiver_address: opts.quote.receiverAddress,
      },
      verification: undefined,
    })
    return {
      ok: true,
      settlementTxId: settle.tx?.tx_id,
      receiptId: settle.settlement_id,
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "settle threw"
    console.warn(`[sage] settle failed (verify ok, deferring redemption): ${msg}`)
    return {
      ok: true,
      // No settlement tx yet — receipt anchors to the Note box id, the
      // /r/sage/<id> page detects this and renders "settlement pending".
      receiptId: opts.proof.noteBoxId,
      error: `settle deferred: ${msg}`,
    }
  }
}
