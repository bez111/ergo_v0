import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  BarChart3,
  Database,
  ExternalLink,
  FileJson2,
  LockKeyhole,
  Network,
  ReceiptText,
  ShieldCheck,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import {
  agentReputationGraph,
  type AgentReputationSubject,
} from "@/lib/agent-economy/agent-reputation"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"
const PATH = "/agents/reputation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Reputation Graph | Ergo",
    description:
      "Receipt-derived reputation graph for Ergo autonomous-work services: full receipts, testnet settlements, verifier coverage, disputes, evidence links, and mainnet boundaries.",
    alternates: getAlternates(PATH, locale),
    openGraph: {
      title: "Ergo Agent Reputation Graph",
      description:
        "Reputation from receipts and settlement evidence, not centralized identity claims.",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Reputation Graph",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Reputation Graph",
      description:
        "A receipt-derived reputation surface for autonomous work on Ergo testnet.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-reputation-graph",
      "ai-topic": "Ergo agent reputation, receipt-derived trust, autonomous work receipts, verifier coverage, settlement evidence",
    },
  }
}

const reputationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}${PATH}#webpage`,
      name: "Ergo Agent Reputation Graph",
      url: `${BASE_URL}${PATH}`,
      description:
        "Receipt-derived reputation graph for autonomous-work services on Ergo.",
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}${PATH}#dataset`,
      name: "Ergo Agent Reputation Graph",
      description: agentReputationGraph.public_claim,
      url: agentReputationGraph.canonical,
      distribution: [
        {
          "@type": "DataDownload",
          name: "Agent reputation graph JSON",
          contentUrl: agentReputationGraph.canonical,
          encodingFormat: "application/json",
        },
        {
          "@type": "DataDownload",
          name: "Agent reputation schema",
          contentUrl: agentReputationGraph.schema,
          encodingFormat: "application/schema+json",
        },
      ],
    },
  ],
}

export default function AgentReputationPage() {
  const graph = agentReputationGraph

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reputationJsonLd) }}
        />

        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agents", href: "/agents" },
                { name: "Reputation", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <BarChart3 className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Receipt-derived reputation
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Trust should come from receipts, not vibes.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  The reputation graph starts where the receipt bundle ends:
                  completed work, verifier coverage, settlement evidence,
                  visible disputes, and a mainnet boundary that stays closed
                  until external review exists.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <SurfaceLink
                    href="/api/agents/reputation"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Reputation JSON
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/agent-economy/agent-reputation.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Schema
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/agent-economy/proofs"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Proof explorer
                    <ArrowRight className="h-4 w-4" />
                  </SurfaceLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Graph posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {graph.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {graph.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Subjects" value={String(graph.summary.subjects_total)} />
                  <Metric label="Receipt-backed" value={String(graph.summary.receipt_backed_subjects)} />
                  <Metric label="Settlements" value={String(graph.summary.settled_testnet_notes)} />
                  <Metric label="Mainnet" value={String(graph.summary.mainnet_ready_subjects)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Methodology"
              title="The graph is evidence-weighted, not identity-weighted."
              body={graph.methodology.principle}
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <SignalPanel title="Included signals" values={graph.methodology.included_signals} />
              <SignalPanel title="Excluded signals" values={graph.methodology.excluded_signals} danger />
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Subjects"
              title="Every reputation record links back to evidence."
              body="For now this is a bootstrap graph. It becomes more valuable as independent verifier agents publish reports and more paid work produces receipt bundles."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {graph.subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/70 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                eyebrow="Next"
                title="The first real unlock is independent verification."
                body="Once verifier agents start producing reports, reputation can stop being a static bootstrap graph and become an economy graph."
              />
              <div className="mt-6 space-y-3">
                {graph.next_steps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-lg border border-white/10 bg-black/75 p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-500/25 bg-orange-500/10 font-mono text-xs text-orange-100">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/80 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
                Graph edges
              </div>
              <div className="mt-4 grid gap-3">
                {graph.edges.map((edge) => (
                  <SurfaceLink
                    key={`${edge.from}-${edge.kind}-${edge.to}`}
                    href={edge.evidence}
                    className="rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-orange-500/35 hover:bg-orange-500/[0.045]"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      {edge.kind.replace(/_/g, " ")}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-neutral-300">
                      <span>{edge.from}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-orange-300" />
                      <span>{edge.to}</span>
                    </div>
                  </SurfaceLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function SubjectCard({ subject }: { subject: AgentReputationSubject }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/80 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300/80">
            {subject.role}
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-white">{subject.label}</h3>
        </div>
        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-200">
          {subject.status.replace(/_/g, " ")}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{subject.summary}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Metric label="Receipts" value={String(subject.metrics.full_receipt_bundles)} />
        <Metric label="Settlements" value={String(subject.metrics.settled_testnet_notes)} />
        <Metric label="Disputes" value={String(subject.metrics.disputed_receipts)} />
      </div>

      <div className="mt-5 rounded-md border border-white/10 bg-white/[0.035] p-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          <ShieldCheck className="h-3.5 w-3.5 text-orange-300" />
          Trust boundary
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300">{subject.trust_boundary}</p>
      </div>

      <div className="mt-5 grid gap-2">
        {Object.entries(subject.evidence).map(([label, href]) => (
          <SurfaceLink
            key={label}
            href={href}
            className="flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-300 transition hover:border-orange-500/35 hover:text-white"
          >
            {label.includes("mcp") || label.includes("health") ? (
              <Network className="h-3.5 w-3.5 shrink-0 text-orange-300" />
            ) : label.includes("receipt") ? (
              <ReceiptText className="h-3.5 w-3.5 shrink-0 text-orange-300" />
            ) : (
              <Database className="h-3.5 w-3.5 shrink-0 text-orange-300" />
            )}
            <span className="font-mono uppercase tracking-wider text-neutral-500">{label.replace(/_/g, " ")}</span>
            <ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 text-neutral-500" />
          </SurfaceLink>
        ))}
      </div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300/80">{eyebrow}</div>
      <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400">{body}</p>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 break-words font-mono text-sm text-orange-100">{value}</div>
    </div>
  )
}

function SignalPanel({ title, values, danger = false }: { title: string; values: readonly string[]; danger?: boolean }) {
  return (
    <div className={`rounded-lg border p-5 ${danger ? "border-red-400/25 bg-red-500/[0.055]" : "border-white/10 bg-black/75"}`}>
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-2">
        {values.map((value) => (
          <div key={value} className="flex gap-2 text-sm leading-relaxed text-neutral-300">
            <ShieldCheck className={`mt-0.5 h-4 w-4 shrink-0 ${danger ? "text-red-200" : "text-orange-300"}`} />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
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
  const direct = href.startsWith("http") || href.startsWith("/api/") || href.endsWith(".json")
  if (direct) {
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
