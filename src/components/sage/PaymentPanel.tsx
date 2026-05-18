"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Copy, ExternalLink, Sparkles, Loader2 } from "lucide-react"
import type { SageQuote } from "@/lib/sage/payments/types"

export interface PaymentPanelProps {
  question: string
  rationale?: string
  /** Status mirror of useSagePayment.status. */
  status: "idle" | "requesting_quote" | "awaiting_payment" | "verifying" | "paid" | "error"
  quote: SageQuote | null
  error: string | null
  receiptId: string | null
  settlementTxId: string | null
  onSubmitPayment: (noteBoxId: string) => void
  onCancel: () => void
}

/**
 * Renders inside SageWidget's body when chat returns 402. Walks the
 * user through:
 *   1. Why this question is premium (rationale + price)
 *   2. How to pay (address + task hash + deadline)
 *   3. Paste-back of the resulting note_box_id
 *   4. Verifying spinner → success → auto-resume chat
 */
export function PaymentPanel({
  question,
  rationale,
  status,
  quote,
  error,
  receiptId,
  settlementTxId,
  onSubmitPayment,
  onCancel,
}: PaymentPanelProps) {
  const [noteBoxId, setNoteBoxId] = useState("")
  const [copied, setCopied] = useState<"address" | "task" | null>(null)

  const isVerifying = status === "verifying"
  const isPaid = status === "paid"

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(null), 1500)
    return () => clearTimeout(t)
  }, [copied])

  const submit = () => {
    const trimmed = noteBoxId.trim().toLowerCase()
    if (!/^[0-9a-f]{64}$/.test(trimmed)) return
    onSubmitPayment(trimmed)
  }

  const copy = async (value: string, kind: "address" | "task") => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(kind)
    } catch {
      /* noop */
    }
  }

  if (status === "requesting_quote" || (status === "idle" && !quote)) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-3">
        <Loader2 className="w-6 h-6 text-orange-400 animate-spin" />
        <div className="text-sm text-gray-300 font-mono">Pricing your question…</div>
      </div>
    )
  }

  if (isPaid) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="flex flex-col items-center justify-center py-10 gap-4 px-4"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500/20 border-2 border-orange-500/50">
          <Check className="w-7 h-7 text-orange-300" />
        </div>
        <div className="text-center space-y-1">
          <div className="font-mono font-bold text-white text-lg tracking-wider">PAID</div>
          <div className="text-xs text-gray-400 font-mono uppercase tracking-widest">
            Switching to premium tier…
          </div>
        </div>
        {receiptId && (
          <a
            href={`/r/sage/${receiptId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-orange-400 hover:text-orange-300 font-mono underline decoration-orange-500/40 inline-flex items-center gap-1"
          >
            View public receipt <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {settlementTxId && (
          <a
            href={`https://testnet.ergoplatform.com/transactions/${settlementTxId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-gray-500 hover:text-gray-300 font-mono"
          >
            settlement tx · {settlementTxId.slice(0, 16)}…
          </a>
        )}
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-4 py-2 px-1">
      {/* Header */}
      <button
        type="button"
        onClick={onCancel}
        className="self-start flex items-center gap-1 text-xs text-gray-500 hover:text-orange-300 font-mono uppercase tracking-widest transition-colors"
        disabled={isVerifying}
      >
        <ArrowLeft className="w-3 h-3" /> Back to free chat
      </button>

      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-orange-400" />
        <div className="font-mono font-bold text-white text-sm uppercase tracking-wider">
          Premium answer
        </div>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        {rationale ??
          "This question gets the deeper-tier answer (Sonnet 4.6, longer reasoning). Pay once on testnet, the next reply runs on the upgraded tier."}
      </p>

      <div className="text-[11px] text-gray-500 font-mono italic border-l-2 border-orange-500/30 pl-2 py-0.5 bg-orange-500/5">
        &quot;{question.length > 140 ? `${question.slice(0, 140)}…` : question}&quot;
      </div>

      {/* Quote details */}
      {quote && (
        <div className="flex flex-col gap-2.5 rounded-lg border border-orange-500/20 bg-black/40 p-3">
          <KV label="Price" value={`${quote.price} testnet ERG`} mono accent />

          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-1">
              Send to (Sage&apos;s address)
            </div>
            <div className="flex items-stretch gap-1">
              <code className="flex-1 min-w-0 text-[10px] text-gray-200 font-mono bg-black/60 border border-white/10 rounded px-2 py-1.5 break-all">
                {quote.receiverAddress}
              </code>
              <button
                type="button"
                onClick={() => copy(quote.receiverAddress, "address")}
                aria-label="Copy address"
                className="shrink-0 flex items-center justify-center w-9 rounded border border-white/10 bg-black/60 text-gray-400 hover:text-orange-300 hover:border-orange-500/40 transition-colors"
              >
                {copied === "address" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-1">
              Task hash (R6 of the Note)
            </div>
            <div className="flex items-stretch gap-1">
              <code className="flex-1 min-w-0 text-[10px] text-gray-200 font-mono bg-black/60 border border-white/10 rounded px-2 py-1.5 break-all">
                {quote.taskHash}
              </code>
              <button
                type="button"
                onClick={() => copy(quote.taskHash, "task")}
                aria-label="Copy task hash"
                className="shrink-0 flex items-center justify-center w-9 rounded border border-white/10 bg-black/60 text-gray-400 hover:text-orange-300 hover:border-orange-500/40 transition-colors"
              >
                {copied === "task" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <KV label="Deadline" value={quote.deadline} mono />
          <KV label="Reserve" value={`${quote.reserveBoxId.slice(0, 12)}…`} mono />
          <p className="text-[11px] leading-relaxed text-gray-500">
            Full paid receipts are public by receipt id and include the Agreement,
            Verification Receipt, and Settlement Receipt JSON for this testnet proof.
          </p>
        </div>
      )}

      {/* How to pay */}
      <details className="text-xs text-gray-400 font-mono">
        <summary className="cursor-pointer text-orange-300 hover:text-orange-200 uppercase tracking-widest text-[10px]">
          How to issue the Note ↓
        </summary>
        <ol className="mt-2 space-y-1.5 list-decimal pl-4 leading-relaxed">
          <li>
            Open <a href="https://github.com/capt-nemo429/nautilus-wallet" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-orange-200 underline decoration-orange-500/40">Nautilus</a> testnet wallet.
          </li>
          <li>
            Issue a Note via <code className="text-orange-200 bg-black/40 px-1 rounded">ergo-agent-pay</code>&apos;s <code className="text-orange-200 bg-black/40 px-1 rounded">issueNote</code> with the address + task hash above (matching <code className="text-orange-200 bg-black/40 px-1 rounded">{quote?.deadline ?? "+120 blocks"}</code> deadline).
          </li>
          <li>
            Find the resulting note&apos;s <code className="text-orange-200 bg-black/40 px-1 rounded">box_id</code> on{" "}
            <a href="https://testnet.ergoplatform.com" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-orange-200 underline decoration-orange-500/40">testnet explorer</a>.
          </li>
          <li>Paste the 64-char hex below and verify.</li>
        </ol>
      </details>

      {/* Note box id input */}
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-1.5">
          Note box id (64 hex)
        </label>
        <input
          type="text"
          value={noteBoxId}
          onChange={(e) => setNoteBoxId(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isVerifying) submit()
          }}
          disabled={isVerifying}
          placeholder="0123abcd…"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          className="w-full bg-black/60 border border-white/10 rounded px-2.5 py-2 text-[11px] text-white font-mono placeholder:text-gray-700 focus:border-orange-500/40 focus:outline-none disabled:opacity-50"
        />
      </div>

      {error && (
        <div className="text-xs text-red-300 font-mono bg-red-500/5 border border-red-500/20 rounded px-2 py-1.5 leading-relaxed">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={submit}
        disabled={isVerifying || !/^[0-9a-f]{64}$/i.test(noteBoxId.trim())}
        className="flex items-center justify-center gap-2 w-full h-11 rounded-lg bg-orange-500 text-black font-mono font-semibold uppercase tracking-wider text-sm hover:bg-orange-400 disabled:bg-gray-800 disabled:text-gray-600 transition-colors"
      >
        {isVerifying ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Verifying on testnet…</span>
          </>
        ) : (
          <span>Verify &amp; unlock answer</span>
        )}
      </button>
    </div>
  )
}

function KV({
  label,
  value,
  mono,
  accent,
}: {
  label: string
  value: string
  mono?: boolean
  accent?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-2 text-xs">
      <span className="text-gray-500 uppercase tracking-widest text-[10px] font-mono">{label}</span>
      <span
        className={[
          mono ? "font-mono" : "",
          accent ? "text-orange-300 font-semibold" : "text-gray-200",
          "text-right",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {value}
      </span>
    </div>
  )
}
