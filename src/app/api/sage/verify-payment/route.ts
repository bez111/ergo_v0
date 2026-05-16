/**
 * POST /api/sage/verify-payment
 *
 * Buyer has issued a Note on testnet. Body carries the quote that was
 * priced + the note_box_id. We verify the Note on-chain via rails-ergo,
 * settle (redeem) it, and return an HMAC-signed payment token the
 * widget echoes on its next /api/sage/chat call.
 */

import { NextRequest } from "next/server"
import { canonicalizeQuestion } from "@/lib/sage/payments/agreement"
import { verifyAndSettle } from "@/lib/sage/payments/verify"
import { hashQuestionForToken, signPaymentToken } from "@/lib/sage/payments/token"
import { checkRateLimit, clientKey } from "@/lib/sage/rate-limit"
import type { SageQuote } from "@/lib/sage/payments/types"
import { buildSageReceiptBundle, receiptAliases } from "@/lib/sage/receipts/bundle"
import { saveReceiptBundle } from "@/lib/sage/receipts/storage"

export const runtime = "nodejs"
export const maxDuration = 60

interface VerifyRequest {
  quote?: SageQuote
  question?: string
  noteBoxId?: string
}

export async function POST(req: NextRequest) {
  const rl = checkRateLimit(clientKey(req))
  if (!rl.allowed) {
    return jsonError(429, "Rate limit hit. Try again shortly.", {
      retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000),
    })
  }

  let body: VerifyRequest
  try {
    body = (await req.json()) as VerifyRequest
  } catch {
    return jsonError(400, "Invalid JSON body.")
  }

  const { quote, question, noteBoxId } = body
  if (!quote || !quote.quoteId) return jsonError(400, "quote required")
  if (!question || question.length === 0) return jsonError(400, "question required")
  if (!noteBoxId || !/^[0-9a-f]{64}$/i.test(noteBoxId)) {
    return jsonError(400, "noteBoxId must be 64-char hex")
  }

  // Quote freshness: refuse anything past expiry — buyer can request a
  // new quote and re-issue the Note. We don't try to grace-period this
  // because the on-chain Note has its own block-relative deadline.
  if (quote.expiresAt && new Date(quote.expiresAt).getTime() < Date.now()) {
    return jsonError(410, "Quote expired. Request a new quote and reissue the Note.")
  }

  let result
  try {
    result = await verifyAndSettle({
      quote,
      question,
      proof: { quoteId: quote.quoteId, noteBoxId },
      // task_output is the bytes whose blake2b256 hash equals the
      // Note's R6 (taskHash). The Note was issued with
      //   R6 = blake2b256(canonicalize(question))
      // so we send the same canonical string here. NOT the HMAC token-
      // binding hash — that's a different surface entirely.
      taskOutputDigest: canonicalizeQuestion(question),
    })
  } catch (err) {
    return jsonError(500, err instanceof Error ? err.message : "verifyAndSettle threw")
  }

  if (!result.ok) {
    return jsonError(402, result.error ?? "payment verification failed")
  }

  if (!result.agreement || !result.verificationReceipt || !result.settlementReceipt) {
    return jsonError(500, "payment verified but receipt artifacts were not produced")
  }

  const network = (process.env.SAGE_NETWORK ?? "testnet") as "mainnet" | "testnet"
  const receiptBundle = buildSageReceiptBundle({
    quote,
    question,
    proof: { quoteId: quote.quoteId, noteBoxId },
    result,
    agreement: result.agreement,
    network,
  })
  const storage = await saveReceiptBundle(receiptBundle, receiptAliases(receiptBundle))

  let token: string
  try {
    token = signPaymentToken({
      quoteId: quote.quoteId,
      receiptId: result.receiptId ?? quote.quoteId,
      questionHash: hashQuestionForToken(question),
    })
  } catch (err) {
    return jsonError(500, err instanceof Error ? err.message : "payment token signing failed")
  }

  console.log(
    `[sage] paid quoteId=${quote.quoteId} receipt=${receiptBundle.id} settleTx=${result.settlementTxId} storage=${storage.ok ? "saved" : storage.skipped ? "skipped" : "failed"} q="${question.slice(0, 60).replace(/\s+/g, " ")}"`,
  )

  return jsonOk({
    ok: true,
    paymentToken: token,
    receiptId: receiptBundle.id,
    receiptUrl: receiptBundle.public_receipt_url,
    receiptApiUrl: receiptBundle.api_receipt_url,
    settlementTxId: result.settlementTxId,
    accordSettlementId: result.accordSettlementId,
    receiptStorage: storage,
  })
}

function jsonOk(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  })
}

function jsonError(status: number, error: string, extras?: Record<string, unknown>) {
  return new Response(JSON.stringify({ error, ...(extras ?? {}) }), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
      ...(status === 429 && extras?.retryAfter
        ? { "retry-after": String(extras.retryAfter) }
        : {}),
    },
  })
}
