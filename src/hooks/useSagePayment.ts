"use client"

import { useCallback, useState } from "react"
import type { SageQuote } from "@/lib/sage/payments/types"

export type PaymentStatus =
  | "idle"
  | "requesting_quote"
  | "awaiting_payment"
  | "verifying"
  | "paid"
  | "error"

interface PaymentState {
  status: PaymentStatus
  quote: SageQuote | null
  /** Reason the gate flagged this question as premium. */
  reason?: string
  rationale?: string
  /** HMAC token issued after successful Note redemption. */
  paymentToken: string | null
  /** Public receipt id surfaced as /r/sage/<id>. */
  receiptId: string | null
  /** Settlement tx on testnet. */
  settlementTxId: string | null
  error: string | null
}

const initial: PaymentState = {
  status: "idle",
  quote: null,
  paymentToken: null,
  receiptId: null,
  settlementTxId: null,
  error: null,
}

interface QuoteResponse {
  premium: boolean
  reason?: string
  rationale?: string
  quote?: SageQuote
  error?: string
}

interface VerifyResponse {
  ok?: boolean
  paymentToken?: string
  receiptId?: string
  settlementTxId?: string
  error?: string
}

/**
 * Drives the payment-modal lifecycle. SageWidget owns when to call
 * requestQuote / submitPayment / reset; this hook just holds the state
 * machine + does the network round-trips.
 */
export function useSagePayment() {
  const [state, setState] = useState<PaymentState>(initial)

  const requestQuote = useCallback(async (question: string) => {
    setState({ ...initial, status: "requesting_quote" })
    try {
      const res = await fetch("/api/sage/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question }),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => "")
        const msg = parseErr(text) ?? `HTTP ${res.status}`
        setState({ ...initial, status: "error", error: msg })
        return null
      }
      const body = (await res.json()) as QuoteResponse
      if (!body.premium || !body.quote) {
        // Free question — caller should fall back to a normal chat send.
        setState({ ...initial })
        return null
      }
      setState({
        ...initial,
        status: "awaiting_payment",
        quote: body.quote,
        reason: body.reason,
        rationale: body.rationale,
      })
      return body.quote
    } catch (err) {
      const msg = err instanceof Error ? err.message : "quote fetch failed"
      setState({ ...initial, status: "error", error: msg })
      return null
    }
  }, [])

  const submitPayment = useCallback(
    async (noteBoxId: string, question: string) => {
      const quote = await new Promise<SageQuote | null>((resolve) => {
        setState((s) => {
          resolve(s.quote)
          return { ...s, status: "verifying", error: null }
        })
      })
      if (!quote) {
        setState((s) => ({
          ...s,
          status: "error",
          error: "no quote in scope — request one first",
        }))
        return null
      }

      try {
        const res = await fetch("/api/sage/verify-payment", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ quote, question, noteBoxId }),
        })
        const text = await res.text()
        const body = safeJson<VerifyResponse>(text) ?? { error: text }

        if (!res.ok || !body.ok || !body.paymentToken) {
          setState((s) => ({
            ...s,
            status: "error",
            error: body.error ?? `HTTP ${res.status}`,
          }))
          return null
        }

        setState((s) => ({
          ...s,
          status: "paid",
          paymentToken: body.paymentToken!,
          receiptId: body.receiptId ?? null,
          settlementTxId: body.settlementTxId ?? null,
          error: null,
        }))
        return body.paymentToken
      } catch (err) {
        const msg = err instanceof Error ? err.message : "verify failed"
        setState((s) => ({ ...s, status: "error", error: msg }))
        return null
      }
    },
    [],
  )

  const reset = useCallback(() => setState(initial), [])

  return {
    status: state.status,
    quote: state.quote,
    reason: state.reason,
    rationale: state.rationale,
    paymentToken: state.paymentToken,
    receiptId: state.receiptId,
    settlementTxId: state.settlementTxId,
    error: state.error,
    requestQuote,
    submitPayment,
    reset,
  }
}

function parseErr(text: string): string | null {
  try {
    const parsed = JSON.parse(text) as { error?: string }
    return parsed.error ?? null
  } catch {
    return null
  }
}

function safeJson<T>(text: string): T | null {
  try {
    return JSON.parse(text) as T
  } catch {
    return null
  }
}
