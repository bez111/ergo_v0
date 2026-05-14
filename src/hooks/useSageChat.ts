"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export interface SageMessage {
  role: "user" | "assistant"
  content: string
  timestamp: number
  /** Tier the answer was served at — annotates assistant messages. */
  tier?: ChatTier
  /** When this answer was paid for, the resulting receipt id (Note box id
   *  or settlement tx). Surfaces a "view receipt" link under the message. */
  receiptId?: string
  /** Settlement tx id, if redemption actually settled. */
  settlementTxId?: string
}

/** Set when /api/sage/chat returns 402 — widget should open the
 *  payment modal and re-call send() with paymentToken once paid. */
export interface PaymentRequired {
  question: string
  reason?: string
  rationale?: string
}

/** First SSE event from /api/sage/chat — tells us which model is serving. */
export type ChatTier = "free" | "premium"

interface ChatState {
  messages: SageMessage[]
  isStreaming: boolean
  error: string | null
  /** Non-null when chat returned 402; widget renders payment modal. */
  paymentRequired: PaymentRequired | null
  /** Tier of the most recent (or in-flight) assistant turn. */
  currentTier: ChatTier | null
}

const STORAGE_KEY = "sage:chat-history-v1"
const MAX_PERSISTED = 30

function loadHistory(): SageMessage[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter(
        (m): m is SageMessage =>
          m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string",
      )
      .slice(-MAX_PERSISTED)
  } catch {
    return []
  }
}

function persistHistory(messages: SageMessage[]) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_PERSISTED)))
  } catch {
    // localStorage full or disabled — silently drop
  }
}

function parseSSEBlock(block: string): { event: string; data: unknown } | null {
  const lines = block.split("\n")
  let event = "message"
  let dataRaw = ""
  for (const line of lines) {
    if (line.startsWith("event:")) event = line.slice(6).trim()
    else if (line.startsWith("data:")) dataRaw += line.slice(5).trim()
  }
  if (!dataRaw) return null
  try {
    return { event, data: JSON.parse(dataRaw) }
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

export interface SendOpts {
  /** HMAC token from /api/sage/verify-payment — promotes to premium tier. */
  paymentToken?: string
  /** True when re-sending after a 402 → payment cycle. The user message
   *  is already in state; only a fresh assistant placeholder is appended. */
  resume?: boolean
  /** Receipt id from successful payment — attached to the assistant
   *  message so the bubble can render a "view receipt" link. */
  receiptId?: string
  settlementTxId?: string
}

export function useSageChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isStreaming: false,
    error: null,
    paymentRequired: null,
    currentTier: null,
  })
  const abortRef = useRef<AbortController | null>(null)
  const hydrated = useRef(false)
  // Stable read of messages for the next send() — avoids stale closures
  // without making every send re-create on every keystroke.
  const messagesRef = useRef<SageMessage[]>([])

  useEffect(() => {
    if (hydrated.current) return
    hydrated.current = true
    const loaded = loadHistory()
    if (loaded.length > 0) {
      setState((s) => ({ ...s, messages: loaded }))
    }
  }, [])

  useEffect(() => {
    messagesRef.current = state.messages
    if (!hydrated.current) return
    persistHistory(state.messages)
  }, [state.messages])

  const send = useCallback(async (content: string, opts: SendOpts = {}) => {
    const trimmed = content.trim()
    if (!trimmed) return

    const isResume = opts.resume === true
    const userMessage: SageMessage = {
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    }
    const placeholder: SageMessage = {
      role: "assistant",
      content: "",
      timestamp: Date.now(),
    }

    // Build the snapshot for the API. On resume, the user turn already
    // exists; otherwise append it. Strip empty/error placeholders.
    const baseForApi = isResume ? messagesRef.current : [...messagesRef.current, userMessage]
    const apiMessages = baseForApi
      .filter(
        (m) =>
          !(m.role === "assistant" && (m.content === "" || m.content.startsWith("_Sage stumbled"))),
      )
      .map((m) => ({ role: m.role, content: m.content }))

    const placeholderWithReceipt: SageMessage = {
      ...placeholder,
      ...(opts.receiptId ? { receiptId: opts.receiptId } : {}),
      ...(opts.settlementTxId ? { settlementTxId: opts.settlementTxId } : {}),
    }

    setState((s) => {
      const baseMessages = isResume
        ? s.messages.filter(
            (m, i) =>
              !(
                i === s.messages.length - 1 &&
                m.role === "assistant" &&
                (m.content === "" || m.content.startsWith("_Sage stumbled"))
              ),
          )
        : [...s.messages, userMessage]
      return {
        ...s,
        messages: [...baseMessages, placeholderWithReceipt],
        isStreaming: true,
        error: null,
        paymentRequired: null,
        currentTier: null,
      }
    })

    abortRef.current?.abort()
    const ctrl = new AbortController()
    abortRef.current = ctrl

    try {
      const res = await fetch("/api/sage/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: apiMessages,
          ...(opts.paymentToken ? { paymentToken: opts.paymentToken } : {}),
        }),
        signal: ctrl.signal,
      })

      // 402 → premium-required. Drop the empty assistant placeholder
      // and let the widget handle the payment flow.
      if (res.status === 402) {
        const text = await res.text().catch(() => "")
        const parsed = safeJson<{ reason?: string; rationale?: string }>(text)
        setState((s) => ({
          ...s,
          messages: s.messages.filter(
            (m, i) =>
              !(i === s.messages.length - 1 && m.role === "assistant" && m.content === ""),
          ),
          isStreaming: false,
          paymentRequired: {
            question: trimmed,
            reason: parsed?.reason,
            rationale: parsed?.rationale,
          },
        }))
        return
      }

      if (!res.ok || !res.body) {
        const text = await res.text().catch(() => "")
        let friendly = text || `HTTP ${res.status}`
        const parsed = safeJson<{ error?: string }>(text)
        if (parsed?.error) friendly = parsed.error
        throw new Error(friendly)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""
      let assistantText = ""
      let tier: ChatTier = "free"

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })

        const blocks = buffer.split("\n\n")
        buffer = blocks.pop() ?? ""

        for (const block of blocks) {
          const evt = parseSSEBlock(block)
          if (!evt) continue

          if (evt.event === "tier") {
            const t = (evt.data as { tier?: string })?.tier
            if (t === "premium" || t === "free") {
              tier = t
              setState((s) => ({ ...s, currentTier: t }))
            }
          } else if (evt.event === "delta") {
            const text = (evt.data as { text?: string })?.text ?? ""
            assistantText += text
            setState((s) => {
              const next = [...s.messages]
              const last = next[next.length - 1]
              next[next.length - 1] = { ...last, content: assistantText, tier }
              return { ...s, messages: next }
            })
          } else if (evt.event === "error") {
            const msg = (evt.data as { message?: string })?.message ?? "stream error"
            throw new Error(msg)
          }
          // "done" event — loop ends naturally
        }
      }
    } catch (err) {
      if ((err as { name?: string })?.name === "AbortError") {
        setState((s) => ({ ...s, isStreaming: false }))
        return
      }
      const message = err instanceof Error ? err.message : "Sage failed to respond."
      setState((s) => {
        const next = [...s.messages]
        const last = next[next.length - 1]
        if (last && last.role === "assistant" && last.content === "") {
          next[next.length - 1] = { ...last, content: `_Sage stumbled: ${message}_` }
        }
        return { ...s, messages: next, isStreaming: false, error: message }
      })
      return
    }

    setState((s) => ({ ...s, isStreaming: false }))
  }, [])

  const cancel = useCallback(() => abortRef.current?.abort(), [])

  const reset = useCallback(() => {
    abortRef.current?.abort()
    setState({
      messages: [],
      isStreaming: false,
      error: null,
      paymentRequired: null,
      currentTier: null,
    })
    if (typeof window !== "undefined") {
      try { window.localStorage.removeItem(STORAGE_KEY) } catch { /* noop */ }
    }
  }, [])

  const clearPaymentRequired = useCallback(() => {
    setState((s) => ({ ...s, paymentRequired: null }))
  }, [])

  return {
    messages: state.messages,
    isStreaming: state.isStreaming,
    error: state.error,
    paymentRequired: state.paymentRequired,
    currentTier: state.currentTier,
    send,
    cancel,
    reset,
    clearPaymentRequired,
  }
}
