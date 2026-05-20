/**
 * Public Accord Protocol agent registry, surfaced from the canonical
 * source at github.com/accord-protocol/accord-protocol/tree/main/registry/providers.
 *
 * This page is the DEPLOY & DISCOVER quadrant entry point: anyone
 * looking for an Accord-compliant agent can find them here, with their
 * capabilities, accepted rails, pricing, and conformance status.
 *
 * The registry is read-only from the site's perspective — to add an
 * agent, open a PR against the accord-protocol repo. We surface what's
 * there without any submission flow of our own.
 */

import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Sparkles,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import {
  bucketCapability,
  listProviders,
  providerSlugFromId,
  sortProviders,
  type ProviderProfile,
} from "@/lib/agents/registry"
import { siteConfig } from "@/config/site-config"

export const dynamic = "force-dynamic"
export const revalidate = 3600

export const metadata: Metadata = {
  title: "Agent registry — Accord Protocol providers | Ergo",
  description:
    "Public directory of Accord Protocol agents — paid AI services, paid APIs, and tool providers settled on Ergo or compatible rails. Sourced live from the public registry.",
  alternates: { canonical: `${siteConfig.siteUrl}/ergo-watch/agents` },
  openGraph: {
    title: "Agent registry — Accord Protocol providers",
    description:
      "Public directory of paid AI services and agent-economy providers, settled on Ergo and compatible rails.",
    type: "website",
  },
}

export default async function AgentRegistryPage() {
  const providers = await listProviders().catch(() => [])
  const sorted = sortProviders(providers)
  const sage = sorted.find((p) => p.provider_id.includes("sage-ergoblockchain"))
  const rest = sorted.filter((p) => p.provider_id !== sage?.provider_id)

  return (
    <BackgroundWrapper>
      <article className="min-h-screen text-gray-200 px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Ergo Watch", href: "/ergo-watch" },
              { name: "Agent registry", href: "/ergo-watch/agents" },
            ]}
          />

          <header className="mt-6 mb-12">
            <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono mb-2">
              Accord Protocol — public registry
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Agent registry
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              Every Accord-compliant provider — paid AI services, paid APIs, tool
              providers — listed in the public registry, sourced live from{" "}
              <a
                href="https://github.com/accord-protocol/accord-protocol/tree/main/registry/providers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200 underline decoration-orange-500/40"
              >
                accord-protocol/registry/providers
              </a>
              . Cached for one hour. To list your agent, open a PR.
            </p>
          </header>

          {sage && <SageFeature provider={sage} />}

          <section className="mt-12">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-4">
              All providers · {sorted.length}
            </h2>

            {sorted.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {(sage ? [sage, ...rest] : sorted).map((p) => (
                  <ProviderCard key={p.provider_id} provider={p} highlight={p.provider_id === sage?.provider_id} />
                ))}
              </div>
            )}
          </section>

          <section className="mt-16 p-5 rounded-2xl border border-orange-500/20 bg-orange-500/5">
            <h2 className="text-xs uppercase tracking-widest text-orange-400 font-mono mb-3">
              How to list an agent
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Open a PR against{" "}
              <a
                href="https://github.com/accord-protocol/accord-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200 underline decoration-orange-500/40"
              >
                accord-protocol/accord-protocol
              </a>{" "}
              adding a single JSON file at{" "}
              <code className="text-orange-200 bg-black/40 px-1 rounded text-[12px]">
                registry/providers/&lt;your-id&gt;.json
              </code>{" "}
              conforming to{" "}
              <code className="text-orange-200 bg-black/40 px-1 rounded text-[12px]">
                accord.provider_profile.v0
              </code>
              . Once merged, your agent appears here automatically within an hour.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/ergo-watch/agents/submit"
                className="text-xs font-mono uppercase tracking-widest text-black bg-orange-500 hover:bg-orange-400 px-3 py-1.5 rounded-md border border-orange-500 transition-colors"
              >
                Submit your agent →
              </Link>
              <Link
                href="/agent-economy"
                className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
              >
                What is the agent economy →
              </Link>
              <Link
                href="/build/agent-payments"
                className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
              >
                Architecture →
              </Link>
              <a
                href="https://github.com/accord-protocol/accord-protocol/blob/main/registry/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
              >
                Registry spec →
              </a>
            </div>
          </section>

          <ItemListJsonLd providers={sorted} />
        </div>
      </article>
    </BackgroundWrapper>
  )
}

function SageFeature({ provider }: { provider: ProviderProfile }) {
  const isVerifyOnly = provider.operational_status?.settlement_mode
    ?.toString()
    .includes("verify-only")
  return (
    <section className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-6 md:p-8">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/40 shrink-0">
          <Sparkles className="w-5 h-5 text-orange-300" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono">
            Featured · live on this site
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">{provider.display_name}</h2>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-5 max-w-3xl">
        {provider.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {provider.capabilities?.map((c) => (
          <span
            key={c}
            className="text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded border border-orange-500/30 bg-orange-500/10 text-orange-200"
          >
            {c}
          </span>
        ))}
        {isVerifyOnly && (
          <span className="text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded border border-yellow-500/40 bg-yellow-500/10 text-yellow-300">
            verify-only mode
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest bg-orange-500 text-black hover:bg-orange-400 px-3 py-2 rounded-md transition-colors"
        >
          Try Sage now <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/blog/shipping-paid-ai-on-chain"
          className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 border border-orange-500/30 hover:border-orange-500/50 px-3 py-2 rounded-md transition-colors"
        >
          How it was built →
        </Link>
        {provider.__sourceUrl && (
          <a
            href={provider.__sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-orange-300 px-3 py-2 transition-colors"
          >
            registry entry <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </section>
  )
}

function ProviderCard({ provider, highlight }: { provider: ProviderProfile; highlight?: boolean }) {
  const isExample = provider.provider_id.startsWith("provider://example")
  const buckets = Array.from(new Set((provider.capabilities ?? []).map(bucketCapability)))
  const conformance = provider.conformance?.last_run_at
  const slug = providerSlugFromId(provider.provider_id)
  return (
    <div
      className={`flex flex-col p-5 rounded-2xl border transition-colors ${
        highlight
          ? "border-orange-500/30 bg-orange-500/5"
          : "border-white/8 bg-white/[0.02] hover:border-orange-500/20"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <Link
            href={`/ergo-watch/agents/${slug}`}
            className="text-base md:text-lg font-bold text-white truncate hover:text-orange-200 transition-colors block"
          >
            {provider.display_name}
          </Link>
          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-0.5 truncate">
            {provider.provider_id.replace("provider://", "")}
          </div>
        </div>
        {isExample && (
          <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-gray-700 text-gray-500 font-mono shrink-0">
            example
          </span>
        )}
      </div>

      {provider.description && (
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {provider.description}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {buckets.map((b) => (
          <span
            key={b}
            className="text-[9px] uppercase tracking-widest font-mono px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.03] text-gray-300"
          >
            {b}
          </span>
        ))}
        {provider.accepted_rails?.map((r) => (
          <span
            key={`rail-${r}`}
            className="text-[9px] uppercase tracking-widest font-mono px-1.5 py-0.5 rounded border border-orange-500/15 bg-orange-500/5 text-orange-300/80"
          >
            rail · {r}
          </span>
        ))}
        {conformance ? (
          <span className="text-[9px] uppercase tracking-widest font-mono px-1.5 py-0.5 rounded border border-green-500/30 bg-green-500/5 text-green-300 inline-flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5" />
            {provider.conformance?.level ?? "L?"}
          </span>
        ) : (
          <span className="text-[9px] uppercase tracking-widest font-mono px-1.5 py-0.5 rounded border border-gray-700 text-gray-600">
            conformance pending
          </span>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 text-xs">
        <Link
          href={`/ergo-watch/agents/${slug}`}
          className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-mono uppercase tracking-widest text-[10px]"
        >
          profile →
        </Link>
        {provider.homepage && (
          <a
            href={provider.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-orange-300 font-mono uppercase tracking-widest text-[10px]"
          >
            site <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {provider.__sourceUrl && (
          <a
            href={provider.__sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-orange-300 font-mono uppercase tracking-widest text-[10px]"
          >
            <GitBranch className="w-3 h-3" /> manifest
          </a>
        )}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8 text-center">
      <p className="text-sm text-gray-400 font-mono mb-4">
        Could not reach the public registry right now.
      </p>
      <a
        href="https://github.com/accord-protocol/accord-protocol/tree/main/registry/providers"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-mono uppercase tracking-widest"
      >
        View on GitHub <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  )
}

function ItemListJsonLd({ providers }: { providers: ProviderProfile[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Accord Protocol agent registry",
    description:
      "Public directory of Accord-compliant agents and paid AI services settled on Ergo and compatible rails.",
    itemListElement: providers.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.display_name,
        description: p.description,
        url: p.homepage,
        applicationCategory: "AgentEconomyProvider",
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
