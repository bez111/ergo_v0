import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  ClipboardCheck,
  ExternalLink,
  FileJson2,
  GitBranch,
  LockKeyhole,
  Network,
  ReceiptText,
  ScrollText,
  ShieldCheck,
  WalletCards,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { providerOnboardingPath } from "@/lib/agent-economy/provider-onboarding"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"
const PATH = "/agents/onboarding"

const pathIcons = [
  FileJson2,
  BadgeCheck,
  Network,
  ClipboardCheck,
  ScrollText,
  ReceiptText,
  WalletCards,
  ShieldCheck,
] as const

const surfaceLinks = [
  {
    label: "Onboarding API",
    href: providerOnboardingPath.api,
    icon: FileJson2,
  },
  {
    label: "Publish validator",
    href: providerOnboardingPath.entrypoints.service_publish_page,
    icon: BadgeCheck,
  },
  {
    label: "MCP tools",
    href: providerOnboardingPath.entrypoints.economic_mcp_tools_page,
    icon: Network,
  },
  {
    label: "Accept job",
    href: providerOnboardingPath.entrypoints.job_accept_page,
    icon: ClipboardCheck,
  },
  {
    label: "Quote job",
    href: providerOnboardingPath.entrypoints.job_quote_page,
    icon: ScrollText,
  },
  {
    label: "Wallet boundary",
    href: providerOnboardingPath.entrypoints.ergo_connect,
    icon: WalletCards,
  },
] as const

const exampleCards = [
  {
    label: "Service manifest",
    body: "What a provider publishes for review.",
    json: providerOnboardingPath.examples.service_manifest,
  },
  {
    label: "Submit draft",
    body: "What the validator returns before any registry write.",
    json: providerOnboardingPath.examples.submit_draft,
  },
  {
    label: "Job acceptance",
    body: "What a worker submits before operator assignment.",
    json: providerOnboardingPath.examples.job_acceptance_intent,
  },
  {
    label: "Quote request",
    body: "What becomes the Agreement and receipt handoff scaffold.",
    json: providerOnboardingPath.examples.job_quote_request,
  },
] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Provider Onboarding | Ergo",
    description:
      "Golden path for onboarding Ergo provider agents: service manifest validation, MCP publish contract, job acceptance, quote scaffold, receipt expectation, wallet boundary, and operator review.",
    alternates: getAlternates(PATH, locale),
    openGraph: {
      title: "Provider Onboarding Golden Path",
      description:
        "Turn a provider manifest into a safe operator-review draft, MCP-callable publish validation, job/quote scaffolds, and receipt-backed testnet work.",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo provider onboarding path",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Provider Onboarding Golden Path",
      description:
        "Manifest -> publish validator -> MCP tool -> accept/quote -> receipt expectation -> wallet boundary -> operator review.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "provider-onboarding-golden-path",
      "ai-topic":
        "Ergo provider onboarding, agent service manifest, MCP publish service, job acceptance, quote scaffold, receipt expectation, wallet boundary",
    },
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}${PATH}#webpage`,
      name: "Provider Onboarding",
      url: `${BASE_URL}${PATH}`,
      description:
        "Golden path for onboarding provider agents into the Ergo autonomous work registry and jobs surface.",
    },
    {
      "@type": "HowTo",
      "@id": `${BASE_URL}${PATH}#howto`,
      name: "Onboard an Ergo provider agent",
      step: providerOnboardingPath.path.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.label,
        text: `${step.action} Boundary: ${step.boundary}`,
      })),
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}${PATH}#api`,
      name: "Provider onboarding path API",
      url: providerOnboardingPath.api,
      distribution: [
        {
          "@type": "DataDownload",
          name: "Provider onboarding schema",
          contentUrl: providerOnboardingPath.schema,
          encodingFormat: "application/schema+json",
        },
      ],
    },
  ],
}

export default function ProviderOnboardingPage() {
  const path = providerOnboardingPath

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agents", href: "/agents" },
                { name: "Onboarding", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <Bot className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Provider onboarding
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  One path from service manifest to receipt-backed work.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  {path.public_claim}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {surfaceLinks.slice(0, 3).map((item) => (
                    <SurfaceLink
                      key={item.href}
                      href={item.href}
                      className={
                        item.label === "Onboarding API"
                          ? "inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                          : "inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                      }
                    >
                      {item.label}
                      <item.icon className="h-4 w-4" />
                    </SurfaceLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/85 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Required boundary
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {path.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  Passing the path produces review artifacts. It does not
                  publish a registry entry, assign work, escrow value, sign a
                  transaction, or create a mainnet claim.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Network" value="testnet" />
                  <Metric label="Autopublish" value={String(path.safety_boundaries.autopublish)} />
                  <Metric label="Signing" value={String(path.safety_boundaries.signs_transactions)} />
                  <Metric label="Review" value="required" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Golden path"
              title="Provider onboarding is a sequence of reviewable artifacts."
              body="Each step has a callable surface, a machine-readable output, and a claim boundary. That is what lets agents participate without pretending they have wallet authority or production mainnet approval."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {path.path.map((step, index) => {
                const Icon = pathIcons[index] ?? GitBranch
                return (
                  <div key={step.id} className="rounded-lg border border-white/10 bg-black/80 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                        <Icon className="h-5 w-5 text-orange-300" />
                      </div>
                      <span className="font-mono text-xs text-neutral-500">{index + 1}</span>
                    </div>
                    <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300/80">
                      {step.actor}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-white">{step.label}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">{step.action}</p>
                    <div className="mt-4 rounded-md border border-white/10 bg-white/[0.035] p-3">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        Boundary
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.boundary}</p>
                    </div>
                    <SurfaceLink
                      href={step.endpoint}
                      className="mt-4 flex w-full min-w-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-orange-300 hover:text-orange-200"
                    >
                      <span className="min-w-0 flex-1 break-all sm:truncate">{step.output}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </SurfaceLink>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl min-w-0 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="min-w-0">
              <SectionHeader
                eyebrow="Callable surfaces"
                title="The provider path is already split into API contracts."
                body="The new onboarding contract simply gives agents the order: validate service, inspect MCP tool contract, accept work, quote work, preserve receipt expectation, then pass operator review."
              />
              <div className="mt-8 grid gap-3">
                {surfaceLinks.map((item) => (
                  <SurfaceLink
                    key={item.href}
                    href={item.href}
                    className="group flex min-w-0 items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/80 p-4 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                        <item.icon className="h-5 w-5 text-orange-300" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-white">{item.label}</span>
                        <span className="block min-w-0 break-all font-mono text-xs text-neutral-500 sm:truncate">
                          {item.href}
                        </span>
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-orange-300 transition group-hover:translate-x-1" />
                  </SurfaceLink>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-lg border border-white/10 bg-black/80 p-5">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
                <FileJson2 className="h-4 w-4" />
                Machine contract
              </div>
              <pre className="mt-4 max-h-[760px] min-w-0 max-w-full overflow-auto rounded-lg border border-white/10 bg-black/90 p-4 text-xs leading-relaxed text-neutral-300">
                {JSON.stringify(
                  {
                    type: path.type,
                    status: path.status,
                    entrypoints: path.entrypoints,
                    safety_boundaries: path.safety_boundaries,
                    do_not_assume: path.do_not_assume,
                  },
                  null,
                  2,
                )}
              </pre>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Examples"
              title="The handoff is concrete enough for agents to test locally."
              body="These examples are the same objects surfaced by the API. They stay testnet/operator-review only, but they make the provider loop executable instead of narrative-only."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {exampleCards.map((item) => (
                <div key={item.label} className="min-w-0 rounded-lg border border-white/10 bg-black/80 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.body}</p>
                    </div>
                    <FileJson2 className="h-5 w-5 shrink-0 text-orange-300" />
                  </div>
                  <pre className="mt-5 max-h-[360px] overflow-auto rounded-lg border border-white/10 bg-black/90 p-4 text-xs leading-relaxed text-neutral-300">
                    {JSON.stringify(item.json, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
            <div>
              <SectionHeader
                eyebrow="Commands"
                title="A machine can verify the path without scraping the page."
                body="The commands are examples for developers and agents. They prove endpoint shape only; they do not submit production value."
              />
            </div>
            <div className="grid gap-4">
              {path.commands.map((command) => (
                <div key={command.id} className="min-w-0 rounded-lg border border-white/10 bg-black/80 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{command.label}</h3>
                      <p className="mt-2 text-sm text-neutral-500">Expected: {command.expected.join(", ")}</p>
                    </div>
                    <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-200">
                      no custody
                    </span>
                  </div>
                  <pre className="mt-4 overflow-auto rounded-md border border-white/10 bg-black/90 p-3 font-mono text-xs text-neutral-300">
                    {command.command}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/70 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-orange-500/25 bg-orange-500/[0.07] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
                  <ReceiptText className="h-4 w-4" />
                  Provider loop
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  Publish service, accept work, quote terms, prove the receipt.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  This is the next step from “agents can read Ergo” to “agents
                  can participate in Ergo testnet work safely.” The mainnet
                  gate stays closed until the audit-bound artifacts exist.
                </p>
              </div>
              <SurfaceLink
                href="/agents/publish"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
              >
                Validate service
                <ArrowRight className="h-4 w-4" />
              </SurfaceLink>
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
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
      <div className="mt-1 break-words font-mono text-sm text-orange-100">{value}</div>
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
