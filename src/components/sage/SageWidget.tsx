"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, RotateCcw, Sparkles } from "lucide-react"
import { useSageChat } from "@/hooks/useSageChat"
import { MessageBody } from "./MessageBody"

const STARTER_PROMPTS = [
  "What is the agent economy?",
  "How do I build my first agent payment on Ergo?",
  "Why Ergo and not Ethereum for AI agents?",
  "Explain Notes, Reserves and Acceptance Predicates.",
]

export function SageWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { messages, isStreaming, send, cancel, reset } = useSageChat()

  // Auto-scroll to bottom on new content
  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, isStreaming])

  // Focus input when widget opens
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 250)
    return () => clearTimeout(t)
  }, [open])

  // Esc to close
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open])

  const onSend = (text?: string) => {
    const value = (text ?? input).trim()
    if (!value || isStreaming) return
    setInput("")
    send(value)
  }

  return (
    <>
      {/* Launcher button — fixed bottom-right. Hidden while panel is open
          so it doesn't double-stack. 56px tap target ≥ a11y minimum. */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            onClick={() => setOpen(true)}
            aria-label="Open Sage — Ergo agent-economy concierge"
            className="fixed z-[60] bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 px-4 h-12 rounded-full bg-orange-500 text-black font-mono font-semibold uppercase tracking-wider text-sm shadow-lg shadow-orange-500/30 hover:bg-orange-400 hover:shadow-orange-400/40 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Ask Sage</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel — full-screen sheet on mobile, floating card on md+ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop on mobile only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Sage chat"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="
                fixed z-[60] flex flex-col
                inset-0 md:inset-auto
                md:bottom-6 md:right-6
                md:w-[440px] md:h-[640px]
                md:max-h-[calc(100vh-3rem)]
                bg-black border border-orange-500/30
                md:rounded-2xl
                shadow-2xl shadow-orange-500/20
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-orange-500/20 bg-orange-500/5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30">
                    <Sparkles className="w-4 h-4 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono font-bold text-sm text-white tracking-wider">
                      SAGE
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-orange-400/70 leading-none mt-0.5">
                      Ergo agent concierge
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <button
                      type="button"
                      onClick={reset}
                      aria-label="Reset conversation"
                      className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-orange-300 hover:bg-orange-500/10 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close Sage"
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-orange-300 hover:bg-orange-500/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages area */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
              >
                {messages.length === 0 ? (
                  <EmptyState onPick={(p) => onSend(p)} />
                ) : (
                  messages.map((m, i) => (
                    <MessageBubble
                      key={i}
                      role={m.role}
                      content={m.content}
                      streaming={isStreaming && i === messages.length - 1 && m.role === "assistant"}
                    />
                  ))
                )}
              </div>

              {/* Composer */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  onSend()
                }}
                className="border-t border-orange-500/20 p-3 bg-black/80"
              >
                <div className="flex items-end gap-2">
                  <span className="font-mono text-orange-400 text-sm pb-3 select-none" aria-hidden="true">
                    $
                  </span>
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        onSend()
                      }
                    }}
                    rows={1}
                    placeholder="Ask about Ergo, agent payments, Notes…"
                    disabled={isStreaming}
                    aria-label="Message Sage"
                    className="
                      flex-1 bg-transparent text-white text-sm font-mono
                      placeholder:text-gray-600 resize-none outline-none
                      max-h-32 py-2.5 leading-snug
                      disabled:opacity-50
                    "
                    style={{ minHeight: "44px" }}
                  />
                  {isStreaming ? (
                    <button
                      type="button"
                      onClick={cancel}
                      aria-label="Stop generating"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-300 hover:bg-orange-500/30 transition-colors"
                    >
                      <span className="block w-2.5 h-2.5 bg-orange-400" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      aria-label="Send message"
                      disabled={!input.trim()}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500 text-black hover:bg-orange-400 disabled:bg-gray-800 disabled:text-gray-600 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="mt-2 px-1 text-[10px] font-mono uppercase tracking-widest text-gray-600">
                  Sage answers from indexed Ergo docs · Free tier · Beta
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function EmptyState({ onPick }: { onPick: (prompt: string) => void }) {
  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="text-sm text-gray-300 leading-relaxed">
        Hi — I&apos;m <span className="text-orange-300 font-mono font-semibold">Sage</span>.
        I answer from the indexed Ergo docs, blog, and the Accord protocol references.
        Try one of these to start, or type your own.
      </div>
      <div className="flex flex-col gap-2">
        {STARTER_PROMPTS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPick(p)}
            className="text-left text-sm text-gray-300 px-3 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-100 transition-colors font-mono"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}

function MessageBubble({
  role,
  content,
  streaming,
}: {
  role: "user" | "assistant"
  content: string
  streaming?: boolean
}) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-orange-500/15 border border-orange-500/30 px-3.5 py-2.5 text-sm text-orange-50 font-mono">
          {content}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-xs uppercase tracking-widest text-orange-400/80">
          sage
        </span>
        <span className="font-mono text-xs text-gray-700">$</span>
      </div>
      <div className="text-sm text-gray-200 leading-relaxed font-mono">
        <MessageBody text={content} />
        {streaming && (
          <span
            className="inline-block w-2 h-3.5 ml-0.5 align-middle bg-orange-400 animate-pulse"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}
