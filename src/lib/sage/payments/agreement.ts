/**
 * Build an Accord Agreement for a single Sage premium query.
 *
 * The agreement carries a task hash derived from the user's question +
 * a fixed answer-quality predicate (verifier_receipt). The buyer's
 * browser wallet issues a Note pinned to this hash; Sage's seller agent
 * verifies the Note matches the agreement before answering.
 */

import { accordHashV0, type AccordAgreement } from "@accord-protocol/core"
import { computeTaskHashAsync } from "ergo-agent-pay"
import type { SageQuote } from "./types.js"
import { getSageWalletConfig } from "./wallet.js"

const QUOTE_PRICE_ERG = "0.001"
const QUOTE_TTL_SECONDS = 600

export interface BuildQuoteOpts {
  question: string
  /** Optional client-supplied id for de-dup; otherwise generated. */
  quoteId?: string
}

/**
 * Generate a quote (Agreement template + price + receiver address) for
 * the given user question. Stateless — the quote is signed implicitly
 * by being verifiable: any future Note must match the task hash that
 * derives from the question, and Sage will only honor unredeemed Notes
 * at its own receiver address.
 */
export async function buildSageQuote(opts: BuildQuoteOpts): Promise<SageQuote> {
  const cfg = getSageWalletConfig()
  const taskHash = await computeTaskHashAsync(canonicalize(opts.question))

  const expiresAt = new Date(Date.now() + QUOTE_TTL_SECONDS * 1000)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z")

  return {
    quoteId: opts.quoteId ?? generateQuoteId(opts.question),
    taskHash,
    price: QUOTE_PRICE_ERG,
    expiresAt,
    receiverAddress: cfg.address,
    reserveBoxId: cfg.reserveBoxId,
    deadline: "+120 blocks",
  }
}

/**
 * Project a SageQuote into a full accord.agreement.v0 — used when
 * verifying the buyer's Note against the rail.
 */
export function quoteToAgreement(quote: SageQuote, question: string): AccordAgreement {
  return {
    type: "accord.agreement.v0",
    version: "v0",
    agreement_id: `acc_sage_${quote.quoteId}`,
    created_at: nowIsoUtc(),
    buyer: { id: "agent://sage-anonymous-buyer" },
    seller: { id: `agent://ergo-testnet/${quote.receiverAddress}` },
    task: {
      kind: "sage_premium_query",
      input_ref: question.slice(0, 200),
      description: "Premium answer from Sage with code-grade depth and Sonnet 4.6 reasoning.",
      output_schema: "sage.premium_answer.v0",
    },
    price: { amount: quote.price, currency: "ERG", decimals: 9 },
    payment: {
      mode: "note",
      rail: "ergo",
      reserve_ref: `ergo:box:${quote.reserveBoxId}`,
      deadline: quote.deadline,
    },
    verification: {
      required: true,
      method: "verifier_receipt",
      verifier: "verifier://sage-self-v0",
      evidence_required: ["schema_valid"],
    },
    settlement: {
      mode: "inline",
      refund_policy: "expiry",
      dispute_policy: "verifier_panel",
    },
    metadata: { labels: ["sage", "premium-query"] },
  }
}

function canonicalize(question: string): string {
  // Stable canonicalization so the same question (modulo whitespace +
  // trailing punctuation) hashes to the same task hash. Matters because
  // a user might re-issue identical-ish questions across sessions.
  return question
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/, "")
    .toLowerCase()
}

function generateQuoteId(question: string): string {
  // Quote id is hash(question + minute-bucket). Collisions are fine —
  // they just mean two near-simultaneous quotes for the same question
  // share an id, which the buyer can disambiguate by paying twice.
  const bucket = Math.floor(Date.now() / 60_000)
  return accordHashV0(`sage:${canonicalize(question)}:${bucket}`).slice(0, 20)
}

function nowIsoUtc(): string {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z")
}
