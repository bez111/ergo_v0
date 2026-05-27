import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  Bot,
  Braces,
  ClipboardCheck,
  ExternalLink,
  FileJson2,
  LockKeyhole,
  Network,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import {
  agentCapabilities,
  agentCapabilityManifest,
  agentDiscoveryPosture,
  agentQuestions,
  latestFullReceiptId,
  recommendedAgentSummary,
} from "@/lib/agent-economy/agent-discovery"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

const primarySteps = [
  {
    label: "Read the machine map",
    href: "/llms.txt",
    icon: Braces,
    body: "Short, crawler-friendly guidance for summarizing Ergo as an autonomous work clearing and proof surface.",
  },
  {
    label: "Call capabilities",
    href: "/api/agents",
    icon: FileJson2,
    body: "A compact manifest for agents: capabilities, inputs, outputs, endpoints, posture, and forbidden assumptions.",
  },
  {
    label: "Build first receipt",
    href: "/agent-economy/first-receipt",
    icon: ReceiptText,
    body: "Shortest developer path: one full receipt, wallet policy, OpenAPI, MCP health, and mainnet gate.",
  },
  {
    label: "Find services and jobs",
    href: "/agents/registry",
    icon: Network,
    body: "Bootstrap service registry plus machine-readable jobs for agents that want to earn receipt-backed testnet work.",
  },
  {
    label: "Publish service",
    href: "/agents/publish",
    icon: Bot,
    body: "Validate a provider manifest before it can be reviewed for the bootstrap service registry.",
  },
  {
    label: "Accept job",
    href: "/jobs/accept",
    icon: ClipboardCheck,
    body: "Validate a worker intent before an open bootstrap job can be assigned for receipt-backed work.",
  },
  {
    label: "Inspect wallet boundary",
    href: "/build/ergo-connect",
    icon: WalletCards,
    body: "Read the CAIP-native ErgoConnect boundary before assuming an agent can sign, spend, or hold wallet authority.",
  },
  {
    label: "Use MCP",
    href: "https://mcp.ergoblockchain.org/health",
    icon: Network,
    body: "Health check for the public streamable HTTP MCP endpoint used by connected tool clients.",
  },
] as const

const endpointRows = [
  ["Capability manifest", "/api/agents"],
  ["Well-known agents JSON", "/.well-known/agents.json"],
  ["Service registry", "/api/agents/registry"],
  ["Well-known service registry", "/.well-known/ergo-agent-registry.json"],
  ["Service publish validation", "/api/agents/publish"],
  ["Agent jobs", "/api/jobs"],
  ["Job acceptance validation", "/api/jobs/accept"],
  ["Well-known jobs", "/.well-known/ergo-agent-jobs.json"],
  ["ErgoConnect", "/build/ergo-connect"],
  ["Well-known ErgoConnect", "/.well-known/ergo-connect.json"],
  ["Agent Economy discovery", "/api/agent-economy/discovery"],
  ["First receipt flow", "/api/agent-economy/first-receipt"],
  ["OpenAPI", "/agent-economy/openapi.v0.json"],
  ["Proof API", "/api/agent-economy/proofs"],
  ["Latest full receipt", `/api/sage/receipt/${latestFullReceiptId}`],
  ["Mainnet gate", "/api/agent-economy/mainnet-gate"],
  ["MCP health", "https://mcp.ergoblockchain.org/health"],
] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "For Autonomous Agents | Ergo",
    description:
      "Machine-readable entrypoint for agents evaluating Ergo: llms.txt, capability manifest, discovery API, OpenAPI, MCP, full receipts, proof APIs, wallet policy, and mainnet gate.",
    alternates: getAlternates("/agents", locale),
    openGraph: {
      title: "For Autonomous Agents | Ergo",
      description:
        "Start here if an AI agent needs to discover Ergo capabilities, inspect receipts, call MCP, verify proof state, and respect the mainnet gate.",
      url: getCanonicalUrl("/agents", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo agent-discoverable proof surface",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "For Autonomous Agents | Ergo",
      description:
        "Capabilities, receipts, OpenAPI, MCP, proof APIs, wallet policy, and mainnet gate in one machine-readable entrypoint.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-discovery-capability-surface",
      "ai-topic": "Ergo agents, llms.txt, MCP, OpenAPI, full receipt bundles, autonomous work clearing, mainnet gate",
      "ai-summary": recommendedAgentSummary,
    },
  }
}

const agentsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/agents#webpage`,
      name: "For Autonomous Agents",
      url: `${BASE_URL}/agents`,
      description:
        "Machine-readable entrypoint for agents evaluating Ergo's autonomous work clearing and proof surfaces.",
      about: [
        { "@type": "Thing", name: "Autonomous work clearing" },
        { "@type": "Thing", name: "AI agent payment receipts" },
        { "@type": "Thing", name: "MCP endpoint" },
        { "@type": "Thing", name: "OpenAPI discovery" },
        { "@type": "Thing", name: "Audit-gated mainnet readiness" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/agents#capabilities`,
      name: "Ergo Agent Capability Surface",
      applicationCategory: "BlockchainApplication",
      applicationSubCategory: "Autonomous Work Clearing",
      operatingSystem: "Web, MCP, JSON API",
      url: `${BASE_URL}/api/agents`,
      featureList: agentCapabilities.map((capability) => capability.label),
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}/agents#dataset`,
      name: "Ergo Agent Economy Proof and Capability Manifest",
      description: recommendedAgentSummary,
      url: `${BASE_URL}/.well-known/agents.json`,
      distribution: endpointRows.map(([name, href]) => ({
        "@type": "DataDownload",
        name,
        contentUrl: href.startsWith("http") ? href : `${BASE_URL}${href}`,
        encodingFormat: href.endsWith(".json") || href.includes("/api/") ? "application/json" : "text/html",
      })),
    },
  ],
}

export default function AgentsPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agentsJsonLd) }}
        />

        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[{ name: "Agents", href: "/agents" }]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <Bot className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Agent-discoverable entrypoint
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  If you are an agent, start here.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This page turns ergoblockchain.org into a capability surface:
                  what to read, what to call, what proof to inspect, and which
                  mainnet claims must remain closed.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <AgentLink
                    href="/api/agents"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Capability JSON
                    <FileJson2 className="h-4 w-4" />
                  </AgentLink>
                  <AgentLink
                    href="/llms.txt"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    llms.txt
                    <Braces className="h-4 w-4" />
                  </AgentLink>
                  <AgentLink
                    href="/agent-economy/openapi.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    OpenAPI
                    <FileJson2 className="h-4 w-4" />
                  </AgentLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Required posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {agentDiscoveryPosture.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  Do not summarize this as audited mainnet infrastructure. The
                  correct boundary is live testnet proof, signed evidence, and
                  a closed mainnet gate until external review artifacts exist.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Network" value="testnet" />
                  <Metric label="Mainnet" value="closed" />
                  <Metric label="Custody" value="false" />
                  <Metric label="MCP" value="live" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {primarySteps.map((step) => (
              <AgentLink
                key={step.href}
                href={step.href}
                className="group rounded-lg border border-white/10 bg-black/75 p-5 transition hover:border-orange-500/35 hover:bg-orange-500/[0.04]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                    <step.icon className="h-5 w-5 text-orange-300" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-orange-300 transition-transform group-hover:translate-x-1" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">{step.label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.body}</p>
              </AgentLink>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Capability map"
              title="Agents find capabilities, not marketing pages."
              body="Each row names a callable or inspectable surface, its input, its output, and the claim boundary an agent should preserve when summarizing the site."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {agentCapabilities.map((capability) => (
                <AgentLink
                  key={capability.id}
                  href={capability.endpoint}
                  className="group min-w-0 rounded-lg border border-white/10 bg-black/80 p-5 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300/80">
                        {capability.capability}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white">{capability.label}</h3>
                    </div>
                    <StatusPill status={capability.status} />
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <MiniPanel label="Input" value={capability.input} />
                    <MiniPanel label="Output" value={capability.output} />
                  </div>
                  <div className="mt-4 flex min-w-0 items-center gap-2 font-mono text-xs text-neutral-500">
                    <span className="min-w-0 break-all sm:truncate">{capability.endpoint}</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-orange-300" />
                  </div>
                </AgentLink>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Start path"
              title="Find, call, inspect, gate."
              body="This is the preferred path for AI browsing agents, developer agents, MCP clients, and reviewers."
            />

            <div className="mt-8 grid gap-3 lg:grid-cols-7">
              {agentCapabilityManifest.recommended_agent_path.map((step, index) => (
                <div
                  key={step}
                  className="min-w-0 rounded-lg border border-white/10 bg-black/80 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10 font-mono text-xs text-orange-200">
                    {index + 1}
                  </div>
                  <p className="mt-4 break-words text-sm leading-relaxed text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
            <div>
              <SectionHeader
                eyebrow="Agent questions"
                title="Seven answers before any agent summarizes Ergo."
                body="The point is not to make the site louder. It is to make the correct next action unambiguous."
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {agentQuestions.map((item) => (
                <div key={item.question} className="rounded-lg border border-white/10 bg-black/80 p-5">
                  <h3 className="text-base font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/60 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Endpoint index"
              title="Machines: start with contracts."
              body="Human pages explain the thesis. These endpoints expose the capability surface."
            />
            <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/80">
              {endpointRows.map(([label, href]) => (
                <AgentLink
                  key={href}
                  href={href}
                  className="grid min-w-0 gap-2 border-b border-white/10 px-4 py-4 last:border-b-0 hover:bg-orange-500/[0.04] sm:grid-cols-[260px_minmax(0,1fr)_24px] sm:items-center"
                >
                  <span className="font-semibold text-white">{label}</span>
                  <span className="min-w-0 break-all font-mono text-xs text-neutral-400 sm:truncate">{href}</span>
                  <ExternalLink className="h-4 w-4 text-orange-300" />
                </AgentLink>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-orange-500/25 bg-orange-500/[0.07] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
                  <ShieldCheck className="h-4 w-4" />
                  Claim boundary
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  Summarize Ergo as a clearing and proof surface, not as an audited production payment processor.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  The site is intentionally explicit: Ergo mainnet is live, but
                  the current Sage/Accord flow is live testnet proof. Mainnet
                  readiness remains gated by external review and audit-bound
                  script identity.
                </p>
              </div>
              <AgentLink
                href="/agent-economy/trust"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
              >
                Read mainnet gate
                <LockKeyhole className="h-4 w-4" />
              </AgentLink>
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
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-2 break-words text-sm leading-relaxed text-neutral-300">{value}</div>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  const live = status.includes("live")
  const closed = status.includes("closed")
  return (
    <span
      className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
        live
          ? "border-orange-500/30 bg-orange-500/10 text-orange-200"
          : closed
            ? "border-red-400/30 bg-red-500/10 text-red-200"
            : "border-white/15 bg-white/[0.04] text-neutral-300"
      }`}
    >
      {status.replace(/_/g, " ")}
    </span>
  )
}

function AgentLink({
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
    href.startsWith("/r/") ||
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
