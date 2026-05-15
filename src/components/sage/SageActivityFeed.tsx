"use client"

/**
 * Live "Sage on chain" feed for /agent-economy.
 *
 * Hits /api/sage/activity (cached 30s on the server) on mount + every
 * 60s after, renders the most recent settlements + issuances with a
 * type chip, relative time, value flowing into Sage's wallet, and a
 * link to either the public receipt page (settlements) or the
 * explorer (other tx kinds).
 *
 * Design intent: make the "we eat our own food" claim visceral. A
 * visitor lands on /agent-economy, sees real testnet receipts ticking,
 * and the agent-economy thesis stops being marketing copy.
 */

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"

interface SageActivityEvent {
  txId: string
  blockHeight: number
  timestamp: number
  type: "settlement" | "issuance" | "transfer"
  inflowNanoErg: number
  noteBoxId?: string
}

interface SageActivityResponse {
  ok: boolean
  network: "testnet" | "mainnet"
  receiver: string
  total: number
  events: SageActivityEvent[]
  error?: string
}

const REFRESH_MS = 60_000

function nanoToErg(nano: number): string {
  if (nano <= 0) return "0"
  const erg = nano / 1e9
  return erg.toFixed(9).replace(/\.?0+$/, "")
}

function relativeTime(ms: number, now: number): string {
  const diff = Math.max(0, now - ms)
  const sec = Math.floor(diff / 1000)
  if (sec < 60) return `${sec}s ago`
  const min = Math.floor(sec / 60)
  if (min < 60) return `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}h ago`
  const day = Math.floor(hr / 24)
  return `${day}d ago`
}

function explorerTxUrl(txId: string, network: "testnet" | "mainnet"): string {
  return network === "testnet"
    ? `https://testnet.ergoplatform.com/transactions/${txId}`
    : `https://explorer.ergoplatform.com/transactions/${txId}`
}

const TYPE_LABEL: Record<SageActivityEvent["type"], string> = {
  settlement: "Settled",
  issuance: "Issued",
  transfer: "Transfer",
}

const TYPE_CHIP: Record<SageActivityEvent["type"], string> = {
  settlement: "border-orange-500/40 bg-orange-500/10 text-orange-300",
  issuance: "border-amber-500/30 bg-amber-500/5 text-amber-300/80",
  transfer: "border-white/10 bg-white/[0.02] text-gray-400",
}

export function SageActivityFeed() {
  const [data, setData] = useState<SageActivityResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/sage/activity?limit=8", { cache: "no-store" })
        if (!res.ok) throw new Error(`activity ${res.status}`)
        const body = (await res.json()) as SageActivityResponse
        if (!cancelled) {
          setData(body)
          setLoading(false)
        }
      } catch {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    const id = setInterval(load, REFRESH_MS)
    const tick = setInterval(() => setNow(Date.now()), 15_000)
    return () => {
      cancelled = true
      clearInterval(id)
      clearInterval(tick)
    }
  }, [])

  const events = data?.events ?? []
  const settled = events.filter((e) => e.type === "settlement").length
  const network = data?.network ?? "testnet"

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-mono">
            Live · Ergo {network}
          </div>
          <span className="h-px flex-1 bg-gradient-to-r from-orange-500/40 via-orange-500/10 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-3 tracking-tight">
          Sage, on chain, right now
        </h2>
        <p className="text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Sage is the concierge agent of this site — the same primitives the
          page argues for, running in production. Every paid query settles
          publicly. Below is the seller wallet&apos;s recent activity, fetched
          live from the Ergo {network} explorer.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          <Stat label="Settlements" value={settled.toString()} accent />
          <Stat label="Tx total (wallet)" value={(data?.total ?? 0).toString()} />
          <Stat
            label="Latest inflow"
            value={
              events[0]?.inflowNanoErg
                ? `${nanoToErg(events[0].inflowNanoErg)} ERG`
                : "—"
            }
          />
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/[0.015] divide-y divide-white/5 overflow-hidden">
          {loading && (
            <div className="px-5 py-8 text-sm text-gray-500 font-mono text-center">
              Loading activity from explorer…
            </div>
          )}
          {!loading && events.length === 0 && (
            <div className="px-5 py-8 text-sm text-gray-500 font-mono text-center">
              No on-chain activity yet — be the first to ask Sage a paid query.
            </div>
          )}
          {events.map((evt) => {
            const isSettlement = evt.type === "settlement"
            const href = isSettlement
              ? `/r/sage/${evt.txId}`
              : explorerTxUrl(evt.txId, network)
            return (
              <a
                key={evt.txId}
                href={href}
                target={isSettlement ? "_self" : "_blank"}
                rel={isSettlement ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 px-4 sm:px-5 py-4 hover:bg-orange-500/5 transition-colors group"
              >
                <span
                  className={`shrink-0 text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded border ${TYPE_CHIP[evt.type]}`}
                >
                  {TYPE_LABEL[evt.type]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-gray-300 truncate">
                    {evt.txId}
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono mt-0.5 flex items-center gap-2">
                    <span>block {evt.blockHeight.toLocaleString()}</span>
                    <span className="text-gray-700">·</span>
                    <time dateTime={new Date(evt.timestamp).toISOString()}>
                      {relativeTime(evt.timestamp, now)}
                    </time>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-mono text-sm text-orange-200">
                    {nanoToErg(evt.inflowNanoErg)} <span className="text-gray-500 text-[10px] uppercase">erg</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-gray-500 group-hover:text-orange-300 mt-0.5">
                    {isSettlement ? "receipt" : "explorer"}
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500">
          <Sparkles className="w-3.5 h-3.5 text-orange-400/60" />
          <span>
            Each <span className="text-orange-300">Settled</span> row is a Note
            redeemed by Sage — a buyer paid for a premium answer and the seller
            collected on chain.
          </span>
          <Link
            href="/build/agent-payments"
            className="ml-auto text-orange-300 hover:text-orange-200 underline decoration-orange-500/40"
          >
            How this works →
          </Link>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 ${accent ? "border-orange-500/30 bg-orange-500/[0.04]" : "border-white/8 bg-white/[0.015]"}`}
    >
      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-1">
        {label}
      </div>
      <div
        className={`text-2xl font-mono font-bold ${accent ? "text-orange-200" : "text-white"}`}
      >
        {value}
      </div>
    </div>
  )
}
