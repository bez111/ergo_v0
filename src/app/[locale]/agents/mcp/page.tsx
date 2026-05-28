import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  Bot,
  Braces,
  ExternalLink,
  FileJson2,
  KeyRound,
  LockKeyhole,
  Network,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { economicMcpManifest } from "@/lib/agent-economy/economic-mcp"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

const topCards = [
  {
    label: "Runtime",
    value: "pending",
    body: "The public MCP endpoint is live, but these economic tools are published first as contracts and guardrails.",
    icon: Network,
  },
  {
    label: "Signing",
    value: "forbidden",
    body: "MCP tools must not hold private keys, silently sign, or broadcast without a host wallet boundary.",
    icon: KeyRound,
  },
  {
    label: "Policy",
    value: "required",
    body: "Payment intents pass through wallet-agent policy and a human or host-owned wallet before any transaction.",
    icon: ShieldCheck,
  },
  {
    label: "Receipts",
    value: "required",
    body: "The economic memory is still the receipt bundle: Agreement, Verification Receipt, Settlement Receipt, and chain proof.",
    icon: ReceiptText,
  },
] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Economic MCP Tools | Ergo",
    description:
      "Published MCP tool contracts for Ergo autonomous work: service discovery, jobs, quotes, wallet policy, payment intents, receipt verification, reputation, and mainnet boundaries.",
    alternates: getAlternates("/agents/mcp", locale),
    openGraph: {
      title: "Economic MCP Tools | Ergo",
      description:
        "MCP should prepare economic intents and proof checks, not hold keys or sign transactions. Inspect the safe tool contracts for the Ergo Agent Economy.",
      url: getCanonicalUrl("/agents/mcp", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo economic MCP tools",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Economic MCP Tools | Ergo",
      description:
        "Safe MCP contracts for discovery, quotes, wallet policy, receipts, reputation, and jobs.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "mcp-tool-manifest",
      "ai-topic": "Ergo MCP, economic tools, autonomous agents, wallet policy, receipt verification",
      "ai-summary":
        "Ergo publishes economic MCP tool contracts for autonomous work, but MCP tools must prepare intents and proof checks rather than sign transactions or custody value.",
    },
  }
}

const mcpJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/agents/mcp#webpage`,
      name: "Economic MCP Tools",
      url: `${BASE_URL}/agents/mcp`,
      description:
        "Safe MCP tool contracts for Ergo autonomous work discovery, quote, policy, receipt, and reputation flows.",
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${BASE_URL}/agents/mcp#manifest`,
      name: "Ergo Economic MCP Tools Manifest",
      codeRepository: economicMcpManifest.mcp.repository,
      programmingLanguage: "JSON, MCP, TypeScript",
      runtimePlatform: "Streamable HTTP MCP",
      url: economicMcpManifest.canonical,
    },
  ],
}

export default function EconomicMcpPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mcpJsonLd) }}
        />

        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agents", href: "/agents" },
                { name: "MCP tools", href: "/agents/mcp" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <Bot className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Economic MCP surface
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  MCP tools prepare intents, not signatures.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  The next Ergo agent surface is an MCP contract for economic
                  actions: discover services, request quotes, check wallet
                  policy, verify receipts, and query reputation. Signing stays
                  inside the user's wallet boundary.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <SurfaceLink
                    href="/api/agents/mcp-tools"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Tool manifest
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/agent-economy/economic-mcp-tools.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Schema
                    <Braces className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="https://mcp.ergoblockchain.org/health"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    MCP health
                    <Network className="h-4 w-4" />
                  </SurfaceLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Published status
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {economicMcpManifest.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  The endpoint is real. The economic tools are intentionally
                  published as a safe contract before they are advertised by
                  the MCP runtime.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Tools" value={String(economicMcpManifest.counts.tools_total)} />
                  <Metric label="HTTP backed" value={String(economicMcpManifest.counts.http_backed_today)} />
                  <Metric label="MCP runtime" value={String(economicMcpManifest.counts.mcp_runtime_tools_deployed)} />
                  <Metric label="Signing" value="0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {topCards.map((card) => (
              <div key={card.label} className="rounded-lg border border-white/10 bg-black/80 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                    <card.icon className="h-5 w-5 text-orange-300" />
                  </div>
                  <StatusPill status={card.value} />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">{card.label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Tool contracts"
              title="Economic tools need explicit boundaries."
              body="These names are the intended MCP surface for autonomous work. Some already have HTTP-backed APIs; runtime MCP advertisement comes after tests and the MCP repository are updated."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {economicMcpManifest.tools.map((tool) => (
                <div key={tool.name} className="rounded-lg border border-white/10 bg-black/80 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300/80">
                        {tool.status.replace(/_/g, " ")}
                      </div>
                      <h3 className="mt-2 break-words font-mono text-lg font-semibold text-white">
                        {tool.name}
                      </h3>
                    </div>
                    <StatusPill status={tool.http_endpoint ? "http backed" : "planned"} />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">{tool.purpose}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <MiniPanel label="Input" value={tool.input_schema} />
                    <MiniPanel label="Output" value={tool.output_schema} />
                  </div>
                  <div className="mt-4 rounded-md border border-orange-500/20 bg-orange-500/[0.06] p-3 text-sm leading-relaxed text-orange-100">
                    {tool.safe_use}
                  </div>
                  {tool.http_endpoint ? (
                    <SurfaceLink
                      href={
                        tool.http_endpoint.includes("{id}")
                          ? economicMcpManifest.tools[10].output_schema
                          : tool.http_endpoint
                      }
                      className="mt-4 inline-flex min-w-0 items-center gap-2 font-mono text-xs text-orange-300 hover:text-orange-200"
                    >
                      <span className="min-w-0 break-all sm:truncate">{tool.http_endpoint}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </SurfaceLink>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Client flow"
              title="A safe agent flow is discovery first, signing last."
              body="The manifest tells agents how to move from market discovery to receipt verification without confusing tool calls with wallet authority."
            />

            <div className="mt-8 grid gap-3 lg:grid-cols-9">
              {economicMcpManifest.recommended_client_flow.map((step, index) => (
                <div key={step} className="rounded-lg border border-white/10 bg-black/80 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10 font-mono text-xs text-orange-200">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
            <div>
              <SectionHeader
                eyebrow="Forbidden assumptions"
                title="The strongest MCP claim is the boundary."
                body="This is where the site stays professional: public tools can help agents reason, but wallet authority remains local and audit gates remain closed."
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {economicMcpManifest.forbidden_assumptions.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/80 p-5">
                  <div className="flex items-start gap-3">
                    <WalletCards className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                    <p className="text-sm leading-relaxed text-neutral-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
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
    <div className="min-w-0 rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-2 break-words text-sm leading-relaxed text-neutral-300">{value}</div>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  const danger = status.includes("forbidden")
  const pending = status.includes("pending") || status.includes("planned")
  return (
    <span
      className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
        danger
          ? "border-red-400/30 bg-red-500/10 text-red-200"
          : pending
            ? "border-white/15 bg-white/[0.04] text-neutral-300"
            : "border-orange-500/30 bg-orange-500/10 text-orange-200"
      }`}
    >
      {status.replace(/_/g, " ")}
    </span>
  )
}

function SurfaceLink({
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
    href.endsWith(".json") ||
    href.endsWith(".txt")

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
