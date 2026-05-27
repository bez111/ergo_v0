import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  Bot,
  Database,
  ExternalLink,
  FileJson2,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentServiceRegistry, type AgentService } from "@/lib/agent-economy/agent-market"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Service Registry | Ergo",
    description:
      "Bootstrap registry for Ergo autonomous-work services: capabilities, pricing, accepted Notes, predicate requirements, receipt schemas, MCP/OpenAPI endpoints, evidence, and mainnet boundaries.",
    alternates: getAlternates("/agents/registry", locale),
    openGraph: {
      title: "Ergo Agent Service Registry",
      description:
        "Machine-readable service registry for the Ergo Agent Economy testnet proof surface.",
      url: getCanonicalUrl("/agents/registry", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Service Registry",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Service Registry",
      description:
        "Capabilities, accepted payment rails, predicates, receipt schemas, and evidence for bootstrap agent services.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-service-registry",
      "ai-topic": "Ergo agent services, service manifest, autonomous work clearing, receipt-backed provider registry",
    },
  }
}

const registryJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/agents/registry#webpage`,
      name: "Ergo Agent Service Registry",
      url: `${BASE_URL}/agents/registry`,
      description:
        "Bootstrap registry for autonomous-work services and tool surfaces on Ergo.",
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}/agents/registry#dataset`,
      name: "Ergo Agent Service Registry",
      description: agentServiceRegistry.recommended_summary,
      url: agentServiceRegistry.canonical,
      distribution: [
        {
          "@type": "DataDownload",
          name: "Agent service registry JSON",
          contentUrl: agentServiceRegistry.canonical,
          encodingFormat: "application/json",
        },
        {
          "@type": "DataDownload",
          name: "Agent service registry schema",
          contentUrl: agentServiceRegistry.schema,
          encodingFormat: "application/schema+json",
        },
      ],
    },
  ],
}

export default function AgentServiceRegistryPage() {
  const registry = agentServiceRegistry

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(registryJsonLd) }}
        />

        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agents", href: "/agents" },
                { name: "Registry", href: "/agents/registry" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <Database className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Agent service registry
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Services agents can inspect before they buy or build.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  The registry turns capabilities into contracts: what a service
                  can do, how it is priced, which payment rails it accepts, what
                  predicate it expects, and what evidence backs the claim.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <RegistryLink
                    href="/api/agents/registry"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Registry JSON
                    <FileJson2 className="h-4 w-4" />
                  </RegistryLink>
                  <RegistryLink
                    href="/.well-known/ergo-agent-registry.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Well-known
                    <FileJson2 className="h-4 w-4" />
                  </RegistryLink>
                  <RegistryLink
                    href="/agent-economy/agent-service-registry.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Schema
                    <FileJson2 className="h-4 w-4" />
                  </RegistryLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Registry posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {registry.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {registry.recommended_summary}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Services" value={String(registry.counts.services_total)} />
                  <Metric label="Live" value={String(registry.counts.live_testnet)} />
                  <Metric label="Templates" value={String(registry.counts.reference_templates)} />
                  <Metric label="Mainnet" value="0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Publishable manifest"
              title="A service entry must be inspectable before it can be trusted."
              body="The first registry is intentionally conservative: entries can be live testnet surfaces or reference templates, but none can claim audited mainnet payment production."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <PolicyCard title="Required fields" values={registry.registry_policy.required_provider_fields} />
              <PolicyCard title="Entry types" values={registry.registry_policy.publishable_entry_types} />
              <PolicyCard title="Forbidden claims" values={registry.registry_policy.forbidden_claims} danger />
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Bootstrap services"
              title="Live surfaces first, provider market next."
              body="These entries are the first practical bridge from proof pages into an economy: Sage, MCP, wallet policy, verifier templates, and code-agent templates."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {registry.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/70 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-orange-500/25 bg-orange-500/[0.07] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
                  <ShieldCheck className="h-4 w-4" />
                  Next provider step
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  Publish first service, then earn first receipt-backed Note.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  The next layer is a provider onboarding flow: capability
                  manifest, quote endpoint, accepted Note policy, receipt
                  schema, and bootstrap job history.
                </p>
              </div>
              <RegistryLink
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
              >
                Open jobs
                <ArrowRight className="h-4 w-4" />
              </RegistryLink>
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function ServiceCard({ service }: { service: AgentService }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/80 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300/80">
            {service.category}
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-white">{service.name}</h3>
        </div>
        <StatusPill status={service.status} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{service.summary}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <MiniPanel label="Pricing" value={`${service.pricing.mode} / ${service.pricing.currency}`} />
        <MiniPanel label="Rails" value={service.accepted_payment.rails.join(", ")} />
        <MiniPanel label="Task hash" value={service.predicate_requirements.task_hash} />
        <MiniPanel label="Expiry blocks" value={String(service.predicate_requirements.max_expiry_blocks)} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.capabilities.map((capability) => (
          <span
            key={capability}
            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-neutral-300"
          >
            {capability}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        {Object.entries(service.endpoints).slice(0, 4).map(([label, href]) => (
          <RegistryLink
            key={label}
            href={href}
            className="flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-300 transition hover:border-orange-500/35 hover:text-white"
          >
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-orange-300" />
            <span className="shrink-0 capitalize">{label.replace(/_/g, " ")}</span>
            <span className="min-w-0 truncate font-mono text-neutral-500">{shortUrl(href)}</span>
          </RegistryLink>
        ))}
      </div>
    </div>
  )
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300/80">
        {eyebrow}
      </div>
      <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400">{body}</p>
    </div>
  )
}

function PolicyCard({
  title,
  values,
  danger = false,
}: {
  title: string
  values: readonly string[]
  danger?: boolean
}) {
  return (
    <div className={`rounded-lg border p-5 ${danger ? "border-red-400/25 bg-red-500/[0.06]" : "border-white/10 bg-black/75"}`}>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-2">
        {values.map((value) => (
          <div key={value} className="flex gap-2 text-sm text-neutral-300">
            <Bot className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 font-mono text-sm text-orange-100">{value}</div>
    </div>
  )
}

function MiniPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-2 break-words text-sm leading-relaxed text-neutral-300">{value}</div>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  const live = status.includes("live")
  return (
    <span
      className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
        live
          ? "border-orange-500/30 bg-orange-500/10 text-orange-200"
          : "border-cyan-400/25 bg-cyan-400/10 text-cyan-100"
      }`}
    >
      {status.replace(/_/g, " ")}
    </span>
  )
}

function RegistryLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  const isDirectSurface =
    href.startsWith("http") ||
    href.startsWith("/api/") ||
    href.startsWith("/.well-known/") ||
    href.endsWith(".json")

  if (isDirectSurface) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function shortUrl(value: string) {
  return value.replace("https://www.ergoblockchain.org", "").replace("https://mcp.ergoblockchain.org", "mcp:")
}
