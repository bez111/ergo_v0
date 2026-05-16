/**
 * Public Sage receipt page.
 *
 * This page deliberately reads from /api/sage/receipt/<id> and does not
 * reconstruct its own version of the facts. The API route is the single
 * machine-readable source of truth; this component is only presentation.
 */

import type { Metadata } from "next"
import Link from "next/link"
import { headers } from "next/headers"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ExternalLink, Sparkles } from "lucide-react"
import type { SageReceiptBundle } from "@/lib/sage/receipts/types"

interface ReceiptPageProps {
  params: Promise<{ locale: string; id: string }>
}

export async function generateMetadata({ params }: ReceiptPageProps): Promise<Metadata> {
  const { id } = await params
  const short = id.slice(0, 12) + "..."
  return {
    title: `Sage receipt · ${short} — Ergo`,
    description:
      "Public receipt for a Sage premium-tier answer paid via an Accord Note on Ergo testnet.",
    robots: { index: true, follow: true },
    openGraph: {
      title: `Sage receipt · ${short}`,
      description: "Premium-tier answer paid in testnet ERG via Accord receipts.",
      type: "article",
    },
  }
}

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function SageReceiptPage({ params }: ReceiptPageProps) {
  const { id } = await params
  if (!/^[a-zA-Z0-9][a-zA-Z0-9._:-]{5,160}$/.test(id)) notFound()

  const receipt = await fetchReceipt(id)
  if (!receipt) return <NotConfirmedYet id={id} />

  const settled = receipt.status === "settled_on_chain"
  const fullReceiptBundle = isFullReceiptBundle(receipt)
  const title = settled ? "Premium answer · paid" : "Premium answer · settlement pending"
  const tone = fullReceiptBundle ? "Full Accord bundle" : "Chain proof only"
  const happenedAt = receipt.accord.settlement_receipt_json?.created_at ?? receipt.updated_at

  return (
    <article className="min-h-screen bg-black px-4 py-12 text-gray-200 md:py-20">
      <SchemaJsonLd receipt={receipt} />

      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-orange-300"
        >
          <ArrowLeft className="h-3 w-3" /> ergoblockchain.org
        </Link>

        <header className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/40 bg-orange-500/15">
            <Sparkles className="h-5 w-5 text-orange-400" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase leading-none tracking-widest text-orange-400">
              Sage receipt
            </div>
            <h1 className="mt-1 font-mono text-xl font-bold leading-none text-white md:text-2xl">
              {title}
            </h1>
          </div>
        </header>

        <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs text-gray-400">
          {settled ? <Check className="h-3.5 w-3.5 text-orange-400" /> : null}
          <span>{settled ? `Settled on Ergo ${receipt.network}` : `Verified on Ergo ${receipt.network}`}</span>
          <span className="text-gray-700">·</span>
          <time dateTime={happenedAt}>{formatDate(happenedAt)}</time>
          <span className="text-gray-700">·</span>
          <span className={fullReceiptBundle ? "text-emerald-300" : "text-yellow-300"}>
            {tone}
          </span>
        </div>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
          Sage priced a premium-tier question as an Accord Note, verified the Note
          against the task hash, and {settled ? "recorded settlement on chain" : "is waiting for note redemption"}.
          The machine-readable receipt JSON is the source of truth for this page.
        </p>

        {receipt.task.question ? (
          <section className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
              Agreement task
            </h2>
            <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-gray-200">
              {receipt.task.question}
            </p>
          </section>
        ) : null}

        <div className="mb-12 grid gap-3 md:gap-4">
          <KV label={settled ? "Settlement tx" : "Receipt id"} mono>
            {receipt.chain.settlement_explorer_url && receipt.chain.settlement_tx_id ? (
              <ExternalAnchor href={receipt.chain.settlement_explorer_url}>
                {receipt.chain.settlement_tx_id}
              </ExternalAnchor>
            ) : (
              <span className="break-all text-gray-300">{receipt.id}</span>
            )}
          </KV>

          <KV label="Note box" mono>
            <ExternalAnchor href={receipt.chain.note_explorer_url}>{receipt.chain.note_box_id}</ExternalAnchor>
          </KV>

          <KV label="Amount" mono>
            <span className="text-orange-200">
              {receipt.chain.payment_erg} {receipt.network === "testnet" ? "testnet " : ""}ERG
            </span>
          </KV>

          <KV label="Task hash" mono>
            <span className="break-all text-gray-300">{receipt.task.task_hash}</span>
          </KV>

          <KV label="Agreement" mono>
            <span className="break-all text-gray-300">
              {receipt.accord.agreement_json?.agreement_id ?? "not stored"}
            </span>
          </KV>

          <KV label="Verification" mono>
            <span className="break-all text-gray-300">
              {receipt.accord.verification_receipt_json?.receipt_id ?? "not stored"}
            </span>
          </KV>

          <KV label="Settlement" mono>
            <span className="break-all text-gray-300">
              {receipt.accord.settlement_receipt_json?.settlement_id ?? "not stored"}
            </span>
          </KV>
        </div>

        <section className="mb-12 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
            Machine-readable source
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            The API endpoint contains the receipt bundle: chain evidence,
            Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON
            when durable storage is available.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`/api/sage/receipt/${encodeURIComponent(receipt.id)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-orange-500/30 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-orange-400 transition-colors hover:border-orange-500/50 hover:bg-orange-500/5 hover:text-orange-300"
            >
              Receipt JSON →
            </a>
            <Link
              href="/build/agent-payments"
              className="rounded-md border border-orange-500/30 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-orange-400 transition-colors hover:border-orange-500/50 hover:bg-orange-500/5 hover:text-orange-300"
            >
              Architecture →
            </Link>
            <Link
              href="/agent-economy"
              className="rounded-md border border-orange-500/30 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-orange-400 transition-colors hover:border-orange-500/50 hover:bg-orange-500/5 hover:text-orange-300"
            >
              Agent economy →
            </Link>
          </div>
        </section>

        <footer className="space-y-3 font-mono text-xs text-gray-600">
          {fullReceiptBundle ? (
            <p>
              Full receipt bundle loaded from durable storage. Other pages should
              link here or to the API, not duplicate these facts.
            </p>
          ) : (
            <p>
              This older receipt is rendered from public chain evidence because
              no stored bundle was found for this id.
            </p>
          )}
          {receipt.note ? <p>{receipt.note}</p> : null}
        </footer>
      </div>
    </article>
  )
}

async function fetchReceipt(id: string): Promise<SageReceiptBundle | null> {
  const h = await headers()
  const host = h.get("x-forwarded-host") ?? h.get("host")
  if (!host) return null
  const proto = host.startsWith("localhost") || host.startsWith("127.0.0.1")
    ? "http"
    : h.get("x-forwarded-proto") ?? "https"
  const res = await fetch(`${proto}://${host}/api/sage/receipt/${encodeURIComponent(id)}`, {
    cache: "no-store",
  })
  if (!res.ok) return null
  const body = (await res.json()) as unknown
  if (!isReceiptBundle(body)) return null
  return body
}

function isReceiptBundle(value: unknown): value is SageReceiptBundle {
  return !!value && typeof value === "object" && (value as { type?: string }).type === "sage.receipt_bundle.v1"
}

function isFullReceiptBundle(receipt: SageReceiptBundle): boolean {
  return receipt.completeness === "full_receipt_bundle" || receipt.completeness === "full"
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
    <div className="flex flex-col gap-1 rounded-lg border border-white/8 bg-white/[0.02] px-4 py-3 md:flex-row md:items-baseline md:gap-3">
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-gray-500 md:w-32">
        {label}
      </span>
      <span className={mono ? "font-mono text-sm" : "text-sm"}>{children}</span>
    </div>
  )
}

function ExternalAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex break-all font-mono text-orange-300 hover:text-orange-200"
    >
      <span>{children}</span>
      <ExternalLink className="ml-1 h-3 w-3 shrink-0 opacity-50 group-hover:opacity-100" />
    </a>
  )
}

function SchemaJsonLd({ receipt }: { receipt: SageReceiptBundle }) {
  const settledAt = receipt.accord.settlement_receipt_json?.created_at ?? receipt.updated_at
  const ld = {
    "@context": "https://schema.org",
    "@type": "Action",
    name: "Sage premium-tier answer receipt",
    description:
      "Sage, the agent-economy concierge on ergoblockchain.org, answered a premium-tier question paid via an Accord Note.",
    actionStatus: receipt.status === "settled_on_chain" ? "CompletedActionStatus" : "ActiveActionStatus",
    startTime: receipt.created_at,
    endTime: receipt.status === "settled_on_chain" ? settledAt : undefined,
    agent: {
      "@type": "SoftwareApplication",
      name: "Sage",
      url: "https://www.ergoblockchain.org",
      applicationCategory: "AgentEconomyConcierge",
    },
    object: {
      "@type": "MonetaryAmount",
      value: receipt.chain.payment_erg,
      currency: "ERG",
    },
    identifier: receipt.id,
    url: receipt.public_receipt_url,
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}

function NotConfirmedYet({ id }: { id: string }) {
  return (
    <article className="flex min-h-screen items-center bg-black px-4 py-20 text-gray-300">
      <div className="mx-auto max-w-md space-y-4 text-center font-mono">
        <div className="text-xs uppercase tracking-widest text-orange-400">Receipt pending</div>
        <h1 className="text-2xl font-bold text-white">Receipt not found yet</h1>
        <p className="text-sm leading-relaxed text-gray-400">
          If you just paid, refresh in a moment. The API may still be waiting for
          durable receipt storage or explorer indexing.
        </p>
        <p className="mt-6 break-all text-[10px] text-gray-700">id: {id}</p>
      </div>
    </article>
  )
}

function formatDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  })
}
