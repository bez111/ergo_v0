/**
 * Public Sage receipt page.
 *
 *   GET /<locale>/r/sage/<settlement_tx_id>
 *
 * Pure server component — fetches the settlement tx from the testnet
 * explorer at request time, validates it pays Sage's wallet, renders a
 * cyberpunk receipt with Schema.org markup so AI engines and search
 * crawlers can index every paid Sage turn as a separate entity.
 *
 * No server-side database needed: the chain is the canonical source of
 * truth. If the tx isn't (yet) on testnet — 404 with an explorer link.
 */

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ExternalLink, Sparkles } from "lucide-react"
import {
  explorerBoxUrl,
  explorerUrl,
  fetchBox,
  fetchTransaction,
  nanoToErg,
  txPaysAddress,
} from "@/lib/sage/explorer/fetch-tx"

interface ReceiptPageProps {
  params: Promise<{ locale: string; id: string }>
}

export async function generateMetadata({ params }: ReceiptPageProps): Promise<Metadata> {
  const { id } = await params
  const short = id.slice(0, 12) + "…"
  return {
    title: `Sage receipt · ${short} — Ergo`,
    description:
      "Public receipt for a Sage premium-tier answer paid via an Accord Note on Ergo testnet. The settlement transaction is verifiable on-chain.",
    robots: { index: true, follow: true },
    openGraph: {
      title: `Sage receipt · ${short}`,
      description:
        "Premium-tier answer paid in testnet ERG via Accord. Settlement verifiable on-chain.",
      type: "article",
    },
  }
}

// Force per-request rendering so env reads + chain fetches always run
// against current state — the receipt page is dynamic by nature.
export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function SageReceiptPage({ params }: ReceiptPageProps) {
  // Read env at request time, NOT at module top — Next.js can otherwise
  // capture an empty value at build time and never refresh it.
  const SAGE_NETWORK = (process.env.SAGE_NETWORK ?? "testnet") as "mainnet" | "testnet"
  const SAGE_ADDRESS = process.env.SAGE_WALLET_ADDRESS

  const { id } = await params

  if (!/^[0-9a-f]{64}$/i.test(id)) notFound()

  // The id can be either a settlement tx (settle() ran) or a Note box id
  // (settle deferred). Try tx first — that's the happy path; fall back
  // to a box lookup so the page still renders something useful. fetchBox
  // takes SAGE_ADDRESS as a fallback so unspent Note boxes that the
  // standalone /boxes/{id} endpoint misses still resolve via the address
  // unspent list. Wrap the explorer calls so a transient failure renders
  // "not confirmed yet" instead of a 500.
  let txResult, boxResult
  try {
    txResult = await fetchTransaction(id, SAGE_NETWORK)
  } catch (err) {
    console.error(`[receipt] fetchTransaction(${id}) threw:`, err)
    txResult = { ok: false, status: 500, error: String(err) } as const
  }
  if (!txResult.ok || !("tx" in txResult)) {
    try {
      boxResult = await fetchBox(id, SAGE_NETWORK, SAGE_ADDRESS ?? undefined)
    } catch (err) {
      console.error(`[receipt] fetchBox(${id}) threw:`, err)
      boxResult = { ok: false, status: 500, error: String(err) } as const
    }
    if (boxResult.ok && "box" in boxResult && boxResult.box) {
      return <SettlementPending box={boxResult.box} network={SAGE_NETWORK} />
    }
    return <NotConfirmedYet txId={id} status={txResult.status} network={SAGE_NETWORK} />
  }

  const tx = txResult.tx!
  // Validate the tx actually paid Sage. If wallet env isn't set, skip
  // validation (still render — we're optimistic on testnet).
  const paid = SAGE_ADDRESS ? txPaysAddress(tx, SAGE_ADDRESS, 0) : true
  if (!paid) {
    return <NotASageReceipt txId={id} network={SAGE_NETWORK} />
  }

  const settledAt = new Date(tx.timestamp).toISOString()
  const settledHuman = new Date(tx.timestamp).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  // The Note that was redeemed is the first input — that's the box the
  // seller's settle() spent. Surfacing both txs makes the chain story
  // legible: "Note tx X created the redeemable box, settle tx Y spent it."
  const noteInput = tx.inputs[0]
  const totalToSage = SAGE_ADDRESS
    ? tx.outputs.filter((o) => o.address === SAGE_ADDRESS).reduce((s, o) => s + o.value, 0)
    : tx.outputs[0]?.value ?? 0

  return (
    <article className="min-h-screen bg-black text-gray-200 px-4 py-12 md:py-20">
      <SchemaJsonLd
        txId={id}
        settledAt={settledAt}
        priceErg={nanoToErg(totalToSage)}
      />

      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-orange-300 font-mono uppercase tracking-widest mb-8 transition-colors"
        >
          <ArrowLeft className="w-3 h-3" /> ergoblockchain.org
        </Link>

        <header className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/40">
            <Sparkles className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono leading-none">
              Sage receipt
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white font-mono mt-1 leading-none">
              Premium answer · paid
            </h1>
          </div>
        </header>

        <div className="flex items-center gap-2 mb-8 text-xs text-gray-400 font-mono">
          <Check className="w-3.5 h-3.5 text-orange-400" />
          <span>Settled on Ergo {SAGE_NETWORK}</span>
          <span className="text-gray-700">·</span>
          <time dateTime={settledAt}>{settledHuman}</time>
        </div>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10 max-w-2xl">
          A user asked Sage — the agent-economy concierge for{" "}
          <Link href="/" className="text-orange-300 hover:text-orange-200 underline decoration-orange-500/40">
            ergoblockchain.org
          </Link>{" "}
          — a premium-tier question. They paid <strong className="text-orange-200">{nanoToErg(totalToSage)} {SAGE_NETWORK === "testnet" ? "testnet " : ""}ERG</strong> by issuing an Accord Note pinned to a task hash. Sage&apos;s rail adapter verified the Note matched the agreement, ran the upgraded Claude Sonnet 4.6 answer, and redeemed the Note in this transaction.
        </p>

        <div className="grid gap-3 md:gap-4 mb-12">
          <KV label="Settlement tx" mono>
            <a
              href={explorerUrl(id, SAGE_NETWORK)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-orange-200 font-mono break-all inline-flex items-center gap-1 group"
            >
              <span>{id}</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100" />
            </a>
          </KV>

          {noteInput && (
            <KV label="Redeemed Note" mono>
              <span className="text-gray-300 font-mono break-all">{noteInput.boxId}</span>
            </KV>
          )}

          <KV label="Block height" mono>
            <span className="text-gray-200">{tx.inclusionHeight.toLocaleString()}</span>
          </KV>

          <KV label="Network" mono>
            <span className="text-gray-200 uppercase tracking-wider">{SAGE_NETWORK}</span>
          </KV>

          {SAGE_ADDRESS && (
            <KV label="Sage receiver" mono>
              <span className="text-gray-300 font-mono break-all text-xs">{SAGE_ADDRESS}</span>
            </KV>
          )}
        </div>

        <section className="mb-12 p-5 rounded-2xl border border-orange-500/20 bg-orange-500/5">
          <h2 className="text-xs uppercase tracking-widest text-orange-400 font-mono mb-3">
            What you&apos;re looking at
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            This is a public receipt for a single premium-tier query Sage answered.
            Sage is the concierge agent on ergoblockchain.org. It uses{" "}
            <Link href="/blog/agent-economy-manifesto" className="text-orange-300 hover:text-orange-200 underline decoration-orange-500/40">
              the same primitives the rest of the site argues for
            </Link>
            : an Accord Agreement defines the work, a Note carries the payment,
            an Acceptance Predicate gates redemption to the agreement&apos;s task hash, and a Settlement Receipt records what closed. Sage is a working demo of the thesis the site explains.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Link
              href="/agent-economy"
              className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
            >
              Agent economy →
            </Link>
            <Link
              href="/build/agent-payments"
              className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
            >
              Architecture →
            </Link>
            <a
              href="https://github.com/accord-protocol/accord-protocol/tree/main/examples/16-paid-mcp-ergo-testnet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
            >
              Same pattern → example 16
            </a>
          </div>
        </section>

        <footer className="text-xs text-gray-600 font-mono">
          The question and the answer aren&apos;t stored on chain. Only the settlement is. Sage&apos;s server logs hold neither user identity nor IP.
        </footer>
      </div>
    </article>
  )
}

function KV({
  label,
  children,
  mono,
}: {
  label: string
  children: React.ReactNode
  mono?: boolean
}) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3 px-4 py-3 rounded-lg border border-white/8 bg-white/[0.02]">
      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono md:w-32 shrink-0">
        {label}
      </span>
      <span className={mono ? "font-mono text-sm" : "text-sm"}>{children}</span>
    </div>
  )
}

function SchemaJsonLd({
  txId,
  settledAt,
  priceErg,
}: {
  txId: string
  settledAt: string
  priceErg: string
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Action",
    name: "Sage premium-tier answer settlement",
    description:
      "Sage, the agent-economy concierge on ergoblockchain.org, answered a premium-tier question. Payment was made via an Accord Note redeemed in the linked Ergo settlement transaction.",
    actionStatus: "CompletedActionStatus",
    startTime: settledAt,
    endTime: settledAt,
    agent: {
      "@type": "SoftwareApplication",
      name: "Sage",
      url: "https://www.ergoblockchain.org",
      applicationCategory: "AgentEconomyConcierge",
    },
    object: {
      "@type": "MonetaryAmount",
      value: priceErg,
      currency: "ERG",
      additionalType: "https://docs.ergoplatform.com/whitepaper.pdf",
    },
    instrument: {
      "@type": "CreativeWork",
      name: "Accord Note",
      url: "https://github.com/accord-protocol/accord-protocol",
    },
    identifier: txId,
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}

function NotConfirmedYet({
  txId,
  status,
  network,
}: {
  txId: string
  status: number
  network: "mainnet" | "testnet"
}) {
  return (
    <article className="min-h-screen bg-black text-gray-300 px-4 py-20 flex items-center">
      <div className="max-w-md mx-auto text-center space-y-4 font-mono">
        <div className="text-orange-400 text-xs uppercase tracking-widest">Receipt pending</div>
        <h1 className="text-2xl text-white font-bold">Settlement tx not confirmed yet</h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          Testnet block time is ~2 min. If you just paid, refresh in a moment. If
          this lingers, check the explorer directly.
        </p>
        <a
          href={explorerUrl(txId, network)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-orange-500/40 text-orange-300 hover:bg-orange-500/5"
        >
          Check explorer <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <p className="text-[10px] text-gray-700 mt-6">
          fetch status: {status} · tx: <span className="break-all">{txId}</span>
        </p>
      </div>
    </article>
  )
}

function SettlementPending({
  box,
  network,
}: {
  box: import("@/lib/sage/explorer/fetch-tx").BoxInfo
  network: "mainnet" | "testnet"
}) {
  const settledAt = box.creationTimestamp
    ? new Date(box.creationTimestamp).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "—"
  const heightStr = typeof box.inclusionHeight === "number" && box.inclusionHeight > 0
    ? box.inclusionHeight.toLocaleString()
    : "—"
  return (
    <article className="min-h-screen bg-black text-gray-200 px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-orange-300 font-mono uppercase tracking-widest mb-8 transition-colors"
        >
          <ArrowLeft className="w-3 h-3" /> ergoblockchain.org
        </Link>

        <header className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/40">
            <Sparkles className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono leading-none">
              Sage receipt
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white font-mono mt-1 leading-none">
              Premium answer · settlement pending
            </h1>
          </div>
        </header>

        <div className="flex items-center gap-2 mb-8 text-xs text-gray-400 font-mono">
          <span className="px-2 py-0.5 rounded border border-yellow-500/40 bg-yellow-500/10 text-yellow-300 text-[10px] uppercase tracking-widest">
            verified · pending redemption
          </span>
          <span className="text-gray-700">·</span>
          <span>{settledAt}</span>
        </div>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10 max-w-2xl">
          The buyer&apos;s Note is on chain and was verified by Sage&apos;s rail adapter.
          Sage delivered the premium-tier answer. Note redemption (the second
          on-chain tx) hasn&apos;t happened yet — Sage runs in verify-only mode
          when the seller signer isn&apos;t configured. The Note auto-refunds to
          the buyer&apos;s reserve at expiry if it&apos;s not redeemed first.
        </p>

        <div className="grid gap-3 md:gap-4 mb-12">
          <KV label="Note box" mono>
            <a
              href={explorerBoxUrl(box.boxId, network)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-orange-200 font-mono break-all inline-flex items-center gap-1 group"
            >
              <span>{box.boxId}</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100" />
            </a>
          </KV>
          <KV label="Issuance tx" mono>
            <a
              href={explorerUrl(box.transactionId, network)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-orange-200 font-mono break-all inline-flex items-center gap-1 group"
            >
              <span>{box.transactionId}</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100" />
            </a>
          </KV>
          <KV label="Value" mono>
            <span className="text-orange-200">{nanoToErg(box.value)} {network === "testnet" ? "testnet " : ""}ERG</span>
          </KV>
          <KV label="Block height" mono>
            <span className="text-gray-200">{heightStr}</span>
          </KV>
          <KV label="Status" mono>
            <span className="text-yellow-300">unspent · awaiting Sage settle</span>
          </KV>
        </div>

        <footer className="text-xs text-gray-600 font-mono">
          Once Sage&apos;s signer redeems this Note, the URL above will resolve to
          the settlement tx; this page upgrades to a settled receipt automatically.
        </footer>
      </div>
    </article>
  )
}

function NotASageReceipt({
  txId,
  network,
}: {
  txId: string
  network: "mainnet" | "testnet"
}) {
  return (
    <article className="min-h-screen bg-black text-gray-300 px-4 py-20 flex items-center">
      <div className="max-w-md mx-auto text-center space-y-4 font-mono">
        <div className="text-orange-400 text-xs uppercase tracking-widest">Not a Sage receipt</div>
        <h1 className="text-2xl text-white font-bold">This tx isn&apos;t a Sage settlement</h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          The transaction exists on chain but its outputs don&apos;t pay Sage&apos;s
          configured wallet. Either the URL was mistyped or the tx is from a
          different agent.
        </p>
        <a
          href={explorerUrl(txId, network)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-orange-500/40 text-orange-300 hover:bg-orange-500/5"
        >
          See it on explorer <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  )
}
