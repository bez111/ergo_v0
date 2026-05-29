"use client"

import { useMemo, useState } from "react"
import { CheckCircle2, Copy, FileJson2, RefreshCw, ShieldCheck, XCircle } from "lucide-react"

interface PublishResponse {
  ok: boolean
  type: string
  status: "accepted_for_operator_review" | "blocked"
  accepted_for_operator_review: boolean
  accepted_service_id: string | null
  accepted_category: string | null
  errors: string[]
  warnings: string[]
  submit_draft?: {
    status: "ready_for_operator_review" | "blocked"
    registry_action: string
    operator_review_required: true
    draft_publishes_registry: false
    draft_signs_transactions: false
    draft_holds_private_keys: false
    mainnet_claims_opened: false
    registry_delta?: {
      existing_entry: boolean
      pending_operator_review_candidates: number
    }
  }
}

export function AgentServicePublishTester({
  initialManifest,
  initialResponse,
}: {
  initialManifest: Record<string, unknown>
  initialResponse: PublishResponse
}) {
  const initialJson = useMemo(() => JSON.stringify(initialManifest, null, 2), [initialManifest])
  const [manifestText, setManifestText] = useState(initialJson)
  const [result, setResult] = useState<PublishResponse>(initialResponse)
  const [parseError, setParseError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  async function validateManifest() {
    setParseError(null)
    let manifest: unknown

    try {
      manifest = JSON.parse(manifestText)
    } catch (error) {
      setParseError(error instanceof Error ? error.message : "Invalid JSON")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/agents/publish", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(manifest),
      })
      setResult(await response.json())
    } catch (error) {
      setParseError(error instanceof Error ? error.message : "Validation request failed")
    } finally {
      setLoading(false)
    }
  }

  function resetManifest() {
    setManifestText(initialJson)
    setResult(initialResponse)
    setParseError(null)
  }

  function copyResult() {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2)).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    })
  }

  const accepted = result.accepted_for_operator_review

  return (
    <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_440px]">
      <div className="min-w-0 overflow-hidden rounded-lg border border-white/10 bg-black/80 shadow-2xl shadow-black/30">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.025] px-4 py-3">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
            <FileJson2 className="h-4 w-4" />
            Manifest JSON
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={resetManifest}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/60 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-neutral-300 transition hover:border-orange-500/40 hover:text-orange-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset
            </button>
            <button
              type="button"
              onClick={validateManifest}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md border border-orange-500 bg-orange-500 px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400 disabled:cursor-wait disabled:opacity-70"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              {loading ? "Validating" : "Validate"}
            </button>
          </div>
        </div>
        <textarea
          value={manifestText}
          onChange={(event) => setManifestText(event.target.value)}
          spellCheck={false}
          className="min-h-[620px] min-w-0 w-full resize-y bg-black/40 p-4 font-mono text-xs leading-relaxed text-neutral-200 outline-none placeholder:text-neutral-700"
        />
      </div>

      <div className="min-w-0 space-y-4">
        <div
          className={`rounded-lg border p-4 ${
            accepted ? "border-emerald-400/25 bg-emerald-400/[0.06]" : "border-red-400/25 bg-red-500/[0.055]"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                Validation result
              </div>
              <div className="mt-1 text-2xl font-bold text-white">{result.status.replace(/_/g, " ")}</div>
            </div>
            {accepted ? (
              <CheckCircle2 className="h-8 w-8 text-emerald-300" />
            ) : (
              <XCircle className="h-8 w-8 text-red-300" />
            )}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Fact label="Service" value={result.accepted_service_id ?? "not accepted"} />
            <Fact label="Category" value={result.accepted_category ?? "not accepted"} />
            <Fact label="Draft" value={result.submit_draft?.status ?? "none"} />
            <Fact label="Action" value={result.submit_draft?.registry_action ?? "blocked"} />
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/80 p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
            Boundary
          </div>
          <div className="mt-4 grid gap-2 text-sm text-neutral-300">
            <Boundary label="Operator review required" value={result.submit_draft?.operator_review_required === true} />
            <Boundary label="Registry write by API" value={Boolean(result.submit_draft?.draft_publishes_registry)} invert />
            <Boundary label="Transaction signing" value={Boolean(result.submit_draft?.draft_signs_transactions)} invert />
            <Boundary label="Custody / private keys" value={Boolean(result.submit_draft?.draft_holds_private_keys)} invert />
            <Boundary label="Mainnet claims opened" value={Boolean(result.submit_draft?.mainnet_claims_opened)} invert />
          </div>
        </div>

        {(parseError || result.errors.length > 0 || result.warnings.length > 0) && (
          <div className="rounded-lg border border-white/10 bg-black/80 p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
              Review notes
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed">
              {parseError && <Note tone="deny" text={parseError} />}
              {result.errors.map((error) => (
                <Note key={error} tone="deny" text={error} />
              ))}
              {result.warnings.map((warning) => (
                <Note key={warning} tone="warn" text={warning} />
              ))}
            </div>
          </div>
        )}

        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/80">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
              API response
            </div>
            <button
              type="button"
              onClick={copyResult}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-400 transition hover:text-orange-200"
            >
              <Copy className="h-3.5 w-3.5" />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="max-h-[420px] min-w-0 overflow-auto p-4 font-mono text-xs leading-relaxed text-neutral-300">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/45 p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 break-words font-mono text-xs text-orange-100">{value}</div>
    </div>
  )
}

function Boundary({ label, value, invert }: { label: string; value: boolean; invert?: boolean }) {
  const ok = invert ? !value : value
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
      <span>{label}</span>
      <span className={`font-mono text-xs ${ok ? "text-emerald-300" : "text-red-300"}`}>
        {String(value)}
      </span>
    </div>
  )
}

function Note({ tone, text }: { tone: "deny" | "warn"; text: string }) {
  return (
    <div
      className={`rounded-md border px-3 py-2 ${
        tone === "deny"
          ? "border-red-400/25 bg-red-500/[0.055] text-red-100"
          : "border-orange-400/25 bg-orange-500/[0.06] text-orange-100"
      }`}
    >
      {text}
    </div>
  )
}
