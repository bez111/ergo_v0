"use client"

import { useMemo, useState } from "react"
import { ExternalLink, Search } from "lucide-react"

const ERGO_EXPLORER_API = "https://api.ergoplatform.com/api/v1"
const ERGO_EXPLORER_V0_API = "https://api.ergoplatform.com/api/v0"

export function ErgoWatchLookupPanel() {
  const [query, setQuery] = useState("")
  const value = query.trim()
  const encoded = encodeURIComponent(value)
  const disabled = value.length === 0

  const links = useMemo(
    () => [
      {
        label: "Address boxes",
        body: "Unspent boxes by Ergo address.",
        href: `${ERGO_EXPLORER_API}/boxes/unspent/byAddress/${encoded}?limit=20`,
      },
      {
        label: "Token boxes",
        body: "Unspent boxes holding a token id.",
        href: `${ERGO_EXPLORER_API}/boxes/unspent/byTokenId/${encoded}?limit=20`,
      },
      {
        label: "Confirmed tx",
        body: "Transaction lookup by id.",
        href: `${ERGO_EXPLORER_API}/transactions/${encoded}`,
      },
      {
        label: "Unconfirmed tx",
        body: "Mempool transaction lookup by id.",
        href: `${ERGO_EXPLORER_V0_API}/transactions/unconfirmed/${encoded}`,
      },
    ],
    [encoded],
  )

  return (
    <div className="rounded-3xl border border-white/8 bg-black/80 p-7 md:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
          <Search className="h-5 w-5 text-orange-400" />
        </div>
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-400">
            Lookup
          </p>
          <h3 className="text-2xl font-extrabold text-white">Address, token or tx.</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            Paste an Ergo address, token id, or transaction id. This opens raw public Explorer API
            views so the site does not invent a second source of truth.
          </p>
        </div>
      </div>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Paste address, token id, or transaction id"
        className="mb-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-orange-500/40"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) =>
          disabled ? (
            <div
              key={link.label}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 opacity-55"
            >
              <p className="font-bold text-white">{link.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">{link.body}</p>
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-orange-500/35"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="font-bold text-white">{link.label}</p>
                <ExternalLink className="h-3.5 w-3.5 text-orange-400" />
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">{link.body}</p>
            </a>
          ),
        )}
      </div>
    </div>
  )
}
