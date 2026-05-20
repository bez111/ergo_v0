/**
 * Public agent profile page.
 *
 *   GET /<locale>/ergo-watch/agents/<id>
 *
 * Renders a single Accord Protocol provider manifest from the canonical
 * registry, plus (for providers that publish a `live_activity` endpoint)
 * a live preview of recent settlements pulled from that endpoint at
 * request time. This is the page other agents / dashboards / search
 * crawlers land on when they want a single, citable URL for a paid
 * service running on Ergo or compatible rails.
 *
 * Read-only: to add or update a provider, open a PR against
 * github.com/accord-protocol/accord-protocol/registry/providers.
 */

import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Sparkles,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { getProvider, type ProviderProfile } from "@/lib/agents/registry"
import { siteConfig } from "@/config/site-config"

interface PageProps {
  params: Promise<{ locale: string; id: string }>
}

export const dynamic = "force-dynamic"
export const revalidate = 3600

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const profile = await getProvider(id)
  if (!profile) {
    return { title: "Agent not found — Accord Protocol registry | Ergo" }
  }
  const desc =
    profile.description?.slice(0, 160) ??
    `${profile.display_name} — an Accord Protocol provider listed on the Ergo registry.`
  return {
    title: `${profile.display_name} — Accord Protocol agent profile | Ergo`,
    description: desc,
    alternates: { canonical: `${siteConfig.siteUrl}/ergo-watch/agents/${id}` },
    openGraph: {
      title: profile.display_name,
      description: desc,
      type: "profile",
    },
  }
}

interface SettlementPreview {
  txId: string
  blockHeight: number
  timestamp: number
  paymentNanoErg?: number
}

async function fetchActivityPreview(
  endpoint: string,
  limit: number = 5,
): Promise<SettlementPreview[]> {
  try {
    const url = endpoint.includes("?")
      ? `${endpoint}&limit=${limit}`
      : `${endpoint}?limit=${limit}`
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const body = (await res.json()) as {
      events?: Array<{
        txId: string
        blockHeight: number
        timestamp: number
        type: string
        paymentNanoErg?: number
      }>
    }
    return (body.events ?? [])
      .filter((e) => e.type === "settlement")
      .slice(0, limit)
      .map((e) => ({
        txId: e.txId,
        blockHeight: e.blockHeight,
        timestamp: e.timestamp,
        paymentNanoErg: e.paymentNanoErg,
      }))
  } catch {
    return []
  }
}

function nanoToErg(nano?: number): string {
  if (!nano || nano <= 0) return "0"
  const erg = nano / 1e9
  return erg.toFixed(9).replace(/\.?0+$/, "")
}

export default async function AgentProfilePage({ params }: PageProps) {
  const { id } = await params
  const profile = await getProvider(id)
  if (!profile) notFound()

  const activityEndpoint = profile.endpoints?.live_activity
  const recent = activityEndpoint ? await fetchActivityPreview(activityEndpoint) : []

  return (
    <BackgroundWrapper>
      <SchemaJsonLd profile={profile} />
      <article className="min-h-screen text-gray-200 px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Ergo Watch", href: "/ergo-watch" },
              { name: "Agents", href: "/ergo-watch/agents" },
              { name: profile.display_name, href: `/ergo-watch/agents/${id}` },
            ]}
          />

          <Link
            href="/ergo-watch/agents"
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-orange-300 font-mono uppercase tracking-widest mt-6 mb-8 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> All agents
          </Link>

          <header className="flex items-start gap-4 mb-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/40 shrink-0 mt-1">
              <Sparkles className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-mono leading-none mb-2">
                Accord Protocol provider
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-mono leading-tight tracking-tight">
                {profile.display_name}
              </h1>
              <div className="text-xs text-gray-500 font-mono mt-2 break-all">
                {profile.provider_id}
              </div>
            </div>
          </header>

          {profile.description && (
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mt-8 mb-12">
              {profile.description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-12">
            {profile.homepage && (
              <a
                href={profile.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-orange-300 hover:text-orange-200 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
              >
                Homepage <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {profile.__sourceUrl && (
              <a
                href={profile.__sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-orange-300 px-3 py-1.5 rounded-md border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 transition-colors"
              >
                <GitBranch className="w-3 h-3" /> View manifest
              </a>
            )}
          </div>

          {recent.length > 0 && (
            <Section title="Live settlements">
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] divide-y divide-orange-500/10 overflow-hidden">
                {recent.map((s) => (
                  <a
                    key={s.txId}
                    href={`/r/sage/${s.txId}`}
                    className="flex items-center gap-4 px-4 sm:px-5 py-3 hover:bg-orange-500/5 transition-colors group"
                  >
                    <span className="shrink-0 text-[10px] uppercase tracking-widest font-mono px-2 py-0.5 rounded border border-orange-500/40 bg-orange-500/10 text-orange-300">
                      Settled
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-xs text-gray-300 truncate">
                        {s.txId}
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono mt-0.5">
                        block {s.blockHeight.toLocaleString()} ·{" "}
                        <time dateTime={new Date(s.timestamp).toISOString()}>
                          {new Date(s.timestamp).toLocaleString("en-US", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </time>
                      </div>
                    </div>
                    <div className="shrink-0 text-right font-mono text-sm text-orange-200">
                      {nanoToErg(s.paymentNanoErg)}{" "}
                      <span className="text-gray-500 text-[10px] uppercase">erg</span>
                    </div>
                  </a>
                ))}
              </div>
            </Section>
          )}

          <Section title="Capabilities">
            <ChipGrid items={profile.capabilities ?? []} accent />
          </Section>

          <Section title="Accepted rails">
            <ChipGrid items={profile.accepted_rails ?? []} />
          </Section>

          <Section title="Accepted transports">
            <ChipGrid items={profile.accepted_transports ?? []} />
          </Section>

          {(profile.pricing ?? []).length > 0 && (
            <Section title="Pricing">
              <div className="grid gap-3">
                {(profile.pricing ?? []).map((p) => (
                  <KV key={p.kind} label={p.kind} mono>
                    <span className="text-orange-200">
                      {p.amount} {p.currency}
                    </span>
                  </KV>
                ))}
              </div>
            </Section>
          )}

          {profile.endpoints && Object.keys(profile.endpoints).length > 0 && (
            <Section title="Endpoints">
              <div className="grid gap-2">
                {Object.entries(profile.endpoints).map(([k, v]) => (
                  <KV key={k} label={k} mono>
                    <a
                      href={String(v).startsWith("http") ? v : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-300 hover:text-orange-200 font-mono break-all text-xs underline decoration-orange-500/40"
                    >
                      {v}
                    </a>
                  </KV>
                ))}
              </div>
            </Section>
          )}

          {profile.operational_status && (
            <Section title="Operational status">
              <div className="grid gap-2">
                {Object.entries(profile.operational_status).map(([k, v]) => (
                  <KV key={k} label={k.replace(/_/g, " ")} mono>
                    <span className="text-gray-300 text-xs">{String(v)}</span>
                  </KV>
                ))}
              </div>
            </Section>
          )}

          {profile.conformance && (
            <Section title="Conformance">
              <div className="grid gap-2">
                <KV label="Level" mono>
                  <span className="text-gray-200 uppercase tracking-widest">
                    {profile.conformance.level ?? "—"}
                  </span>
                </KV>
                <KV label="Last run" mono>
                  <span className="text-gray-300 text-xs">
                    {profile.conformance.last_run_at ?? "Pending"}
                  </span>
                </KV>
                {profile.conformance.result_uri && (
                  <KV label="Result" mono>
                    <a
                      href={profile.conformance.result_uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-300 hover:text-orange-200 font-mono break-all text-xs underline decoration-orange-500/40"
                    >
                      signed artifact
                    </a>
                  </KV>
                )}
                {profile.conformance.receipt_uri && (
                  <KV label="Receipt" mono>
                    <a
                      href={profile.conformance.receipt_uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-300 hover:text-orange-200 font-mono break-all text-xs underline decoration-orange-500/40"
                    >
                      full receipt bundle
                    </a>
                  </KV>
                )}
                {profile.conformance.public_key_uri && (
                  <KV label="Public key" mono>
                    <a
                      href={profile.conformance.public_key_uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-300 hover:text-orange-200 font-mono break-all text-xs underline decoration-orange-500/40"
                    >
                      provider signing key
                    </a>
                  </KV>
                )}
                {profile.conformance.notes && (
                  <KV label="Notes" mono>
                    <span className="text-gray-400 text-xs">
                      {profile.conformance.notes}
                    </span>
                  </KV>
                )}
              </div>
            </Section>
          )}

          {activityEndpoint && (
            <Section title="Embed in your app">
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-5 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Show this provider&apos;s live activity on your own site —
                  React component, vanilla DOM mount, or zero-install iframe.
                </p>

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono mb-2">
                    React / Next.js
                  </div>
                  <pre className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-orange-200 font-mono overflow-x-auto">
{`npm install @ergoblockchain/sage-widget

import { SageActivityFeed } from "@ergoblockchain/sage-widget/react"
<SageActivityFeed limit={5} />`}
                  </pre>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono mb-2">
                    Zero install (iframe drop-in)
                  </div>
                  <pre className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-orange-200 font-mono overflow-x-auto">
{`<div id="sage-feed"></div>
<script src="https://www.ergoblockchain.org/agents.js"
        data-target="#sage-feed" data-height="320" async></script>`}
                  </pre>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://www.npmjs.com/package/@ergoblockchain/sage-widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-orange-300 hover:text-orange-200 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 transition-colors"
                  >
                    npm package <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://github.com/bez111/sage-widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-orange-300 hover:text-orange-200 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 transition-colors"
                  >
                    source · GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Section>
          )}

          {profile.implementation && (
            <Section title="Implementation">
              {profile.implementation.reference_example && (
                <KV label="Reference example" mono>
                  <a
                    href={profile.implementation.reference_example}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 font-mono break-all text-xs underline decoration-orange-500/40"
                  >
                    {profile.implementation.reference_example}
                  </a>
                </KV>
              )}
              {profile.implementation.notes && (
                <p className="text-sm text-gray-400 leading-relaxed mt-3">
                  {profile.implementation.notes}
                </p>
              )}
            </Section>
          )}

          <footer className="mt-16 pt-8 border-t border-white/5 text-xs text-gray-600 font-mono space-y-2">
            <p>
              <CheckCircle2 className="w-3 h-3 inline-block mr-1 text-orange-500/60" />
              This profile is fetched live from the canonical Accord Protocol registry on each request.
            </p>
            <p>
              To add or update a provider, open a PR against{" "}
              <a
                href="https://github.com/accord-protocol/accord-protocol/tree/main/registry/providers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/40"
              >
                accord-protocol/registry/providers
              </a>
              .
            </p>
          </footer>
        </div>
      </article>
    </BackgroundWrapper>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xs uppercase tracking-[0.25em] text-orange-400 font-mono mb-4">
        {title}
      </h2>
      {children}
    </section>
  )
}

function ChipGrid({ items, accent }: { items: string[]; accent?: boolean }) {
  if (!items.length) {
    return <span className="text-xs text-gray-600 font-mono">—</span>
  }
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => (
        <span
          key={c}
          className={`text-xs font-mono px-3 py-1.5 rounded-md border ${
            accent
              ? "border-orange-500/30 bg-orange-500/5 text-orange-300"
              : "border-white/10 bg-white/[0.02] text-gray-300"
          }`}
        >
          {c}
        </span>
      ))}
    </div>
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
    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3 px-4 py-3 rounded-lg border border-white/8 bg-white/[0.015]">
      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono md:w-40 shrink-0">
        {label}
      </span>
      <span className={mono ? "font-mono text-sm" : "text-sm"}>{children}</span>
    </div>
  )
}

function SchemaJsonLd({ profile }: { profile: ProviderProfile }) {
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: profile.display_name,
    description: profile.description,
    serviceType: "Accord Protocol provider",
    identifier: profile.provider_id,
  }
  if (profile.homepage) ld.url = profile.homepage
  if (profile.pricing && profile.pricing.length) {
    ld.offers = profile.pricing.map((p) => ({
      "@type": "Offer",
      price: p.amount,
      priceCurrency: p.currency,
      category: p.kind,
    }))
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
