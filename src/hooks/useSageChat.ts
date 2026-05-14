"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export interface SageMessage {
  role: "user" | "assistant"
  content: string
  timestamp: number
}

interface ChatState {
  messages: SageMessage[]
  isStreaming: boolean
  error: string | null
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
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages.slice(-MAX_PERSISTED)),
    )
  } catch {
    // localStorage full or disabled — silently drop
  }
}

/**
 * Parse a single SSE event block into { event, data }.
 * Returns null if the block is malformed.
 */
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

export function useSageChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isStreaming: false,
    error: null,
  })
  const abortRef = useRef<AbortController | null>(null)
  const hydrated = useRef(false)

  // Load history once on mount
  useEffect(() => {
    if (hydrated.current) return
    hydrated.current = true
    const loaded = loadHistory()
    if (loaded.length > 0) {
      setState((s) => ({ ...s, messages: loaded }))
    }
  }, [])

  // Persist on every message change
  useEffect(() => {
    if (!hydrated.current) return
    persistHistory(state.messages)
  }, [state.messages])

  const send = useCallback(async (content: string) => {
    const trimmed = content.trim()
    if (!trimmed) return

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

    // Snapshot the messages we'll POST (history + new user turn) BEFORE
    // appending the empty assistant placeholder, so we don't send an
    // empty assistant message to the API.
    const apiMessages = [...state.messages, userMessage].map((m) => ({
      role: m.role,
      content: m.content,
    }))

    setState((s) => ({
      ...s,
      messages: [...s.messages, userMessage, placeholder],
      isStreaming: true,
      error: null,
    }))

    abortRef.current?.abort()
    const ctrl = new AbortController()
    abortRef.current = ctrl

    try {
      const res = await fetch("/api/sage/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
        signal: ctrl.signal,
      })

      if (!res.ok || !res.body) {
        const text = await res.text().catch(() => "")
        throw new Error(text || `HTTP ${res.status}`)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""
      let assistantText = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })

        // SSE events are separated by blank lines (\n\n)
        const blocks = buffer.split("\n\n")
        buffer = blocks.pop() ?? ""

        for (const block of blocks) {
          const evt = parseSSEBlock(block)
          if (!evt) continue
          if (evt.event === "delta") {
            const text = (evt.data as { text?: string })?.text ?? ""
            assistantText += text
            // Update only the last (assistant) message
            setState((s) => {
              const next = [...s.messages]
              next[next.length - 1] = { ...next[next.length - 1], content: assistantText }
              return { ...s, messages: next }
            })
          } else if (evt.event === "error") {
            const msg = (evt.data as { message?: string })?.message ?? "stream error"
            throw new Error(msg)
          }
          // "done" event — we just stop reading; loop ends naturally
        }
      }
    } catch (err) {
      if ((err as { name?: string })?.name === "AbortError") {
        // User canceled; leave messages as-is
        setState((s) => ({ ...s, isStreaming: false }))
        return
      }
      const message = err instanceof Error ? err.message : "Sage failed to respond."
      setState((s) => {
        // Replace empty placeholder with error note, or append if already has content
        const next = [...s.messages]
        const last = next[next.length - 1]
        if (last && last.role === "assistant" && last.content === "") {
          next[next.length - 1] = {
            ...last,
            content: `_Sage stumbled: ${message}_`,
          }
        }
        return { ...s, messages: next, isStreaming: false, error: message }
      })
      return
    }

    setState((s) => ({ ...s, isStreaming: false }))
  }, [state.messages])

  const cancel = useCallback(() => {
    abortRef.current?.abort()
  }, [])

  const reset = useCallback(() => {
    abortRef.current?.abort()
    setState({ messages: [], isStreaming: false, error: null })
    if (typeof window !== "undefined") {
      try { window.localStorage.removeItem(STORAGE_KEY) } catch { /* noop */ }
    }
  }, [])

  return {
    messages: state.messages,
    isStreaming: state.isStreaming,
    error: state.error,
    send,
    cancel,
    reset,
  }
}
