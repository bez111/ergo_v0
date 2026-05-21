"use client"

import { useMemo, useState } from "react"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clipboard,
  Loader2,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from "lucide-react"

interface SageQuote {
  quoteId: string
  taskHash: string
  price: string
  issuedAt?: string
  expiresAt: string
  receiverAddress: string
  reserveBoxId: string
  deadline: `+${number} blocks`
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
  receiptUrl?: string
  receiptApiUrl?: string
  settlementTxId?: string
  accordSettlementId?: string
  error?: string
}

const DEMO_QUESTION =
  "/deep explain how Accord receipts prove paid AI work on Ergo"

export function SageWidgetLiveDemo() {
  const [question, setQuestion] = useState(DEMO_QUESTION)
  const [noteBoxId, setNoteBoxId] = useState("")
  const [quote, setQuote] = useState<QuoteResponse | null>(null)
  const [verify, setVerify] = useState<VerifyResponse | null>(null)
  const [answer, setAnswer] = useState("")
  const [busy, setBusy] = useState<"quote" | "verify" | "chat" | null>(null)
  const [error, setError] = useState<string | null>(null)

  const canVerify = useMemo(() => {
    return Boolean(quote?.quote && /^[0-9a-f]{64}$/i.test(noteBoxId.trim()))
  }, [noteBoxId, quote?.quote])

  async function requestQuote() {
    setBusy("quote")
    setError(null)
    setVerify(null)
    setAnswer("")

    try {
      const response = await fetch("/api/sage/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question }),
      })
      const body = (await response.json()) as QuoteResponse
      if (!response.ok) throw new Error(body.error ?? `quote failed (${response.status})`)
      setQuote(body)
      if (!body.premium) {
        await streamChat()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not request quote")
    } finally {
      setBusy(null)
    }
  }

  async function verifyPayment() {
    if (!quote?.quote) return
    setBusy("verify")
    setError(null)
    setAnswer("")

    try {
      const response = await fetch("/api/sage/verify-payment", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          quote: quote.quote,
          question,
          noteBoxId: noteBoxId.trim(),
        }),
      })
      const body = (await response.json()) as VerifyResponse
      if (!response.ok) throw new Error(body.error ?? `verify failed (${response.status})`)
      setVerify(body)
      if (body.paymentToken) {
        await streamChat(body.paymentToken)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not verify Note")
    } finally {
      setBusy(null)
    }
  }

  async function streamChat(paymentToken?: string) {
    setBusy("chat")
    setError(null)
    setAnswer("")

    try {
      const response = await fetch("/api/sage/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: question }],
          ...(paymentToken ? { paymentToken } : {}),
        }),
      })

      if (!response.ok || !response.body) {
        const text = await response.text()
        throw new Error(text || `chat failed (${response.status})`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""

      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split("\n\n")
        buffer = events.pop() ?? ""

        for (const event of events) {
          const dataLine = event.split("\n").find((line) => line.startsWith("data: "))
          if (!dataLine) continue
          const data = JSON.parse(dataLine.slice(6)) as { text?: string; message?: string }
          if (data.text) setAnswer((current) => current + data.text)
          if (data.message) setError(data.message)
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not stream Sage answer")
    } finally {
      setBusy(null)
    }
  }

  async function copyQuote() {
    if (!quote?.quote) return
    await navigator.clipboard.writeText(JSON.stringify(quote.quote, null, 2))
  }

  return (
    <div className="rounded-lg border border-orange-500/25 bg-black/75 p-5 shadow-2xl shadow-black/30">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
            <MessageSquareText className="h-3.5 w-3.5 text-orange-300" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
              Live host demo
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Try the exact embed flow without hiding the wallet step.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-400">
            This demo calls the production Sage APIs directly. The host app asks
            for a quote, the user creates a testnet Note elsewhere, then the
            host verifies the Note and receives a receipt link. The widget never
            signs funds.
          </p>
        </div>
        <div className="rounded-md border border-red-500/25 bg-red-500/[0.06] px-3 py-2 text-xs leading-relaxed text-red-100">
          Testnet only. Mainnet stays audit-gated.
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-4">
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              Question
            </span>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={4}
              className="w-full resize-none rounded-md border border-white/10 bg-neutral-950 px-3 py-3 text-sm leading-relaxed text-white outline-none transition focus:border-orange-400"
            />
          </label>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={requestQuote}
              disabled={Boolean(busy) || question.trim().length === 0}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-orange-500 px-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy === "quote" ? <Loader2 className="h-4 w-4 animate-spin" /> : <WalletCards className="h-4 w-4" />}
              Request quote
            </button>
            <button
              type="button"
              onClick={() => streamChat(verify?.paymentToken)}
              disabled={Boolean(busy) || !verify?.paymentToken}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-neutral-200 transition hover:border-orange-400 hover:text-orange-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {busy === "chat" ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageSquareText className="h-4 w-4" />}
              Stream paid answer
            </button>
          </div>

          {quote?.quote && (
            <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    Quote
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {quote.quote.price} ERG · {quote.quote.deadline}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyQuote}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 px-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-300 hover:border-orange-400 hover:text-orange-200"
                >
                  <Clipboard className="h-3.5 w-3.5" />
                  Copy
                </button>
              </div>
              <dl className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
                <QuoteField label="receiver" value={quote.quote.receiverAddress} />
                <QuoteField label="reserve" value={quote.quote.reserveBoxId} />
                <QuoteField label="task hash" value={quote.quote.taskHash} />
                <QuoteField label="expires" value={quote.quote.expiresAt} />
              </dl>
            </div>
          )}

          {quote?.quote && (
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                Note box id
              </span>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  value={noteBoxId}
                  onChange={(event) => setNoteBoxId(event.target.value)}
                  placeholder="64-char Ergo testnet box id"
                  className="h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-neutral-950 px-3 font-mono text-xs text-white outline-none transition placeholder:text-neutral-700 focus:border-orange-400"
                />
                <button
                  type="button"
                  onClick={verifyPayment}
                  disabled={!canVerify || Boolean(busy)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-orange-500/50 bg-orange-500/10 px-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-orange-100 transition hover:bg-orange-500/15 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {busy === "verify" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
                  Verify
                </button>
              </div>
            </label>
          )}
        </div>

        <div className="space-y-4">
          <StatusLine
            live={Boolean(quote?.quote)}
            label="Quote generated"
            detail={quote?.rationale ?? "Run a premium-shaped prompt to request a quote."}
          />
          <StatusLine
            live={Boolean(verify?.paymentToken)}
            label="Payment verified"
            detail={verify?.settlementTxId ? `Settlement tx ${short(verify.settlementTxId)}` : "Paste a Note box id after issuing the testnet Note."}
          />
          <StatusLine
            live={Boolean(verify?.receiptUrl)}
            label="Receipt linked"
            detail={verify?.receiptId ? short(verify.receiptId) : "Full receipt bundle appears after verification."}
          />

          {verify?.receiptUrl && (
            <a
              href={verify.receiptUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-orange-500 bg-orange-500 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:bg-orange-400"
            >
              <ReceiptText className="h-4 w-4" />
              Open receipt
              <ArrowRight className="h-4 w-4" />
            </a>
          )}

          {(answer || busy === "chat") && (
            <div className="rounded-md border border-white/10 bg-neutral-950 p-4">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                Sage answer
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-300">
                {answer || "Streaming..."}
              </p>
            </div>
          )}

          {error && (
            <div className="flex items-start gap-3 rounded-md border border-red-500/25 bg-red-500/[0.06] p-3 text-sm text-red-100">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function QuoteField({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="font-mono uppercase tracking-[0.14em] text-neutral-600">{label}</dt>
      <dd className="mt-1 truncate font-mono text-neutral-300" title={value}>
        {value}
      </dd>
    </div>
  )
}

function StatusLine({
  live,
  label,
  detail,
}: {
  live: boolean
  label: string
  detail: string
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-2">
        {live ? (
          <CheckCircle2 className="h-4 w-4 text-orange-300" />
        ) : (
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
        )}
        <div className="text-sm font-semibold text-white">{label}</div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-neutral-500">{detail}</p>
    </div>
  )
}

function short(value: string): string {
  return value.length > 18 ? `${value.slice(0, 10)}...${value.slice(-6)}` : value
}
