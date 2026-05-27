import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileJson2,
  Globe2,
  LockKeyhole,
  PackageCheck,
  Radio,
  ReceiptText,
  ShieldCheck,
  TerminalSquare,
  WalletCards,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentEconomyDeveloperLaunchKit } from "@/lib/agent-economy/developer-launch-kit"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

const statusRows = [
  {
    label: "Live now",
    state: "testnet proof",
    tone: "live",
    body: "Sage receipts, MCP health, wallet-agent policy checks, developer services, npm widget, and proof APIs are publicly inspectable.",
  },
  {
    label: "Safe boundary",
    state: "mainnet closed",
    tone: "blocked",
    body: "Production and mainnet claims remain blocked until external review and audit-bound script identity are published.",
  },
  {
    label: "Developer contract",
    state: "schema-backed",
    tone: "live",
    body: "Launch Kit, Proof Explorer, wallet policy, release watchlist, and review pack expose machine-readable JSON contracts.",
  },
]

const pathCards = [
  {
    title: "See the live system",
    href: "/agent-economy/live",
    icon: Radio,
    body: "Open the operational cockpit for Sage, Blob receipts, MCP, widget, wallet-agent surfaces, and the mainnet gate.",
    action: "Open Live Hub",
  },
  {
    title: "Verify the evidence",
    href: "/agent-economy/proofs",
    icon: ReceiptText,
    body: "Inspect receipts, conformance evidence, MCP health, package state, activity records, and verify steps from one board.",
    action: "Open Proof Explorer",
  },
  {
    title: "Build the first flow",
    href: "/agent-economy/launch-kit",
    icon: Code2,
    body: "Follow the five-minute route through status, policy, receipt, developer services, and the Sage widget.",
    action: "Open Launch Kit",
  },
  {
    title: "Read the roadmap",
    href: "/agent-economy/roadmap",
    icon: CheckCircle2,
    body: "See what is live, what is next, what is audit-gated, and why the mainnet gate remains closed.",
    action: "Open Roadmap",
  },
]

const developerSurfaces = [
  {
    label: "Proof API",
    href: "/api/agent-economy/proofs",
    icon: FileJson2,
    value: "verify_steps[]",
  },
  {
    label: "Discovery",
    href: "/.well-known/agent-economy.json",
    icon: FileJson2,
    value: "well-known",
  },
  {
    label: "Discovery API",
    href: "/api/agent-economy/discovery",
    icon: FileJson2,
    value: "schema-linked",
  },
  {
    label: "OpenAPI",
    href: "/agent-economy/openapi.v0.json",
    icon: FileJson2,
    value: "public spec",
  },
  {
    label: "Roadmap",
    href: "/api/agent-economy/roadmap",
    icon: FileJson2,
    value: "live/next/gated",
  },
  {
    label: "MCP",
    href: "https://mcp.ergoblockchain.org/health",
    icon: Globe2,
    value: "public health",
  },
  {
    label: "Policy check",
    href: "/api/agent-economy/wallet-agent/policy-check",
    icon: ShieldCheck,
    value: "local safety",
  },
  {
    label: "Sage widget",
    href: "/agent-economy/sage-widget",
    icon: PackageCheck,
    value: "npm v0.3.0",
  },
  {
    label: "Services",
    href: "/build/services",
    icon: TerminalSquare,
    value: "utility belt",
  },
  {
    label: "Wallet agent",
    href: "/agent-economy/wallet-agent",
    icon: WalletCards,
    value: "spec layer",
  },
  {
    label: "ErgoConnect",
    href: "/build/ergo-connect",
    icon: WalletCards,
    value: "wallet boundary",
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Start Building the Ergo Agent Economy | Ergo",
    description:
      "The fastest starting point for Ergo's testnet agent economy: live proof, receipt verification, MCP, wallet-agent policy, Sage widget, and audit-gated mainnet status.",
    alternates: getAlternates("/agent-economy/start", locale),
    openGraph: {
      title: "Start Building the Ergo Agent Economy",
      description:
        "See what is live, verify the proof surface, and follow the developer path without crossing the mainnet/audit boundary.",
      url: getCanonicalUrl("/agent-economy/start", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy start page",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Start Building the Ergo Agent Economy",
      description:
        "Live status, proof APIs, receipts, MCP, wallet policy, Sage widget, and mainnet gate in one starting path.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-economy-start",
      "ai-topic": "Ergo Agent Economy developer start, proof explorer, launch kit, MCP, wallet-agent policy",
    },
  }
}

export default function AgentEconomyStartPage() {
  const kit = agentEconomyDeveloperLaunchKit
  const firstRecipe = kit.api_recipes.find((recipe) => recipe.id === "proof-explorer")

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Start", href: "/agent-economy/start" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <Bot className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Start here
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  From agent-economy thesis to verifiable Ergo flow.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This is the fastest route through the new site surface: see
                  what is live, verify the public evidence, build against the
                  JSON contracts, and keep the mainnet boundary explicit.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <StartLink
                    href="/agent-economy/proofs"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Verify proof
                    <ArrowRight className="h-4 w-4" />
                  </StartLink>
                  <StartLink
                    href="/agent-economy/launch-kit"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Build path
                    <ArrowRight className="h-4 w-4" />
                  </StartLink>
                  <StartLink
                    href="/api/agent-economy/proofs"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    JSON API
                    <FileJson2 className="h-4 w-4" />
                  </StartLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Public posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {kit.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  Mainnet stays closed until external review and audit-bound
                  script identity exist. That boundary is visible on every
                  machine-readable surface.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Proof API" value="live" />
                  <Metric label="MCP" value="live" />
                  <Metric label="Widget" value={`v${kit.npm.version}`} />
                  <Metric label="Mainnet" value="closed" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
            {statusRows.map((row) => (
              <div key={row.label} className="rounded-lg border border-white/10 bg-black/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {row.label}
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
                      row.tone === "live"
                        ? "border-orange-500/30 bg-orange-500/10 text-orange-200"
                        : "border-red-500/30 bg-red-500/10 text-red-100"
                    }`}
                  >
                    {row.state}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">{row.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Choose the first move"
              title="Three doors into the same proof surface."
              body="The site is now organized around live state, verifiable evidence, and developer execution. Start anywhere; the links converge."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {pathCards.map((card) => (
                <StartLink
                  key={card.href}
                  href={card.href}
                  className="group rounded-lg border border-white/10 bg-black/70 p-5 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                      <card.icon className="h-5 w-5 text-orange-300" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-orange-300 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-white">{card.title}</h2>
                  <p className="mt-3 min-h-[78px] text-sm leading-relaxed text-neutral-400">{card.body}</p>
                  <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-orange-300">
                    {card.action}
                  </div>
                </StartLink>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl min-w-0 gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="min-w-0">
              <SectionHeader
                eyebrow="Developer surfaces"
                title="Use the boring endpoints first."
                body="The strongest part of the site is not the copy. It is the public JSON, schemas, and explicit gates that external tools can verify."
              />
              {firstRecipe ? (
                <pre className="mt-6 max-w-full overflow-x-auto rounded-lg border border-orange-500/20 bg-orange-500/[0.055] p-4 text-sm leading-relaxed text-orange-100">
                  <code>{firstRecipe.curl}</code>
                </pre>
              ) : null}
            </div>
            <div className="grid min-w-0 gap-3 md:grid-cols-2">
              {developerSurfaces.map((surface) => (
                <StartLink
                  key={surface.href}
                  href={surface.href}
                  className="min-w-0 rounded-lg border border-white/10 bg-black/72 p-4 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                      <surface.icon className="h-4 w-4 text-orange-300" />
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-500" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{surface.label}</h3>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {surface.value}
                  </div>
                </StartLink>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-red-200">Mainnet gate</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                The next trust level needs two external artifacts.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Until these are published, the right public claim is testnet
                live proof. This is a feature, not a weakness: the site makes
                the boundary inspectable instead of hiding it.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {kit.open_gates.map((gate) => (
                <StartLink
                  key={gate.id}
                  href={gate.href}
                  className="rounded-lg border border-red-500/25 bg-red-500/[0.055] p-5 transition hover:border-red-400/45"
                >
                  <LockKeyhole className="h-5 w-5 text-red-200" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{gate.label}</h3>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-red-100/70">
                    owner: {gate.owner}
                  </div>
                </StartLink>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function StartLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: ReactNode
}) {
  if (href.startsWith("http") || href.startsWith("/api") || href.endsWith(".json")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 truncate font-mono text-lg font-semibold text-orange-100">{value}</div>
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
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-orange-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">{body}</p>
    </div>
  )
}
