import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileJson2,
  GitBranch,
  LockKeyhole,
  PackageCheck,
  Radio,
  Rocket,
  ScrollText,
  ShieldCheck,
  TerminalSquare,
  UploadCloud,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentEconomyDeveloperLaunchKit } from "@/lib/agent-economy/developer-launch-kit"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Developer Launch Kit | Ergo",
    description:
      "A practical developer launch kit for Ergo's testnet agent economy: live status, policy checks, receipts, MCP, Sage widget, and audit-gated mainnet rules.",
    alternates: getAlternates("/agent-economy/launch-kit", locale),
    openGraph: {
      title: "Ergo Agent Economy Developer Launch Kit",
      description:
        "Start from the live cockpit, inspect receipts, try wallet-agent policy checks, call MCP, and embed the Sage widget.",
      url: getCanonicalUrl("/agent-economy/launch-kit", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy developer launch kit",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Economy Developer Launch Kit",
      description:
        "The shortest path for builders: live status, receipt bundle, policy playground, MCP, developer services, and Sage widget.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

const quickLinks = [
  {
    label: "Live cockpit",
    href: "/agent-economy/live",
    icon: Radio,
    detail: "Operational state for Sage, MCP, receipts, widget, policy, and mainnet gate.",
  },
  {
    label: "Proof explorer",
    href: "/agent-economy/proofs",
    icon: FileJson2,
    detail: "One board for receipt bundles, conformance evidence, MCP health, widget state, and audit gates.",
  },
  {
    label: "Roadmap",
    href: "/agent-economy/roadmap",
    icon: GitBranch,
    detail: "Strategic map for live surfaces, next repo work, external trust gates, and later provider registry work.",
  },
  {
    label: "Policy playground",
    href: "/build/agent-payments/policy-playground",
    icon: ShieldCheck,
    detail: "Interactive allow/deny lab before any wallet is asked to sign.",
  },
  {
    label: "Publish service",
    href: "/agents/publish",
    icon: UploadCloud,
    detail: "Validate provider manifests before registry review: capability, pricing, payment rails, predicates, receipts, and evidence.",
  },
  {
    label: "Reputation graph",
    href: "/agents/reputation",
    icon: BarChart3,
    detail: "Receipt-derived trust signals for providers, tools, verifier templates, settlement evidence, and disputes.",
  },
  {
    label: "Accept job",
    href: "/jobs/accept",
    icon: ClipboardCheck,
    detail: "Validate a worker intent before assignment: job id, capabilities, output terms, receipt expectations, evidence, and testnet posture.",
  },
  {
    label: "Quote job",
    href: "/jobs/quote",
    icon: ScrollText,
    detail: "Scaffold a job-bound quote, Agreement draft, receipt expectation, and settlement handoff before signing.",
  },
  {
    label: "Developer services",
    href: "/build/services",
    icon: TerminalSquare,
    detail: "Hashing, address checks, box/tx lookup, receipt verification, and live probes.",
  },
  {
    label: "Builder kit",
    href: "https://github.com/buildonergo/agent-economy-kit",
    icon: PackageCheck,
    detail: "Cloneable receipt verifier, provider templates, bootstrap jobs, ErgoConnect helpers, interop map, and CLI.",
  },
  {
    label: "Review pack",
    href: "/agent-economy/review-pack",
    icon: ClipboardCheck,
    detail: "External review scope, evidence, checklist, and forbidden claims.",
  },
]

export default function AgentEconomyLaunchKitPage() {
  const kit = agentEconomyDeveloperLaunchKit

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Launch Kit", href: "/agent-economy/launch-kit" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <Rocket className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Developer launch kit
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  The shortest path from curiosity to a working agent flow.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This page turns the live proof surface into an operator-grade
                  checklist: which endpoint to call first, what to inspect,
                  how to test wallet-agent policy, where receipts live, and
                  which mainnet claims remain closed.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LaunchLink
                    href="/api/agent-economy/launch-kit"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    JSON launch kit
                    <FileJson2 className="h-4 w-4" />
                  </LaunchLink>
                  <LaunchLink
                    href="https://agents.ergoblockchain.org"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Agent host
                    <ExternalLink className="h-4 w-4" />
                  </LaunchLink>
                  <LaunchLink
                    href="/api/agent-economy/discovery"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Discovery API
                    <FileJson2 className="h-4 w-4" />
                  </LaunchLink>
                  <LaunchLink
                    href="/agent-economy/openapi.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    OpenAPI
                    <FileJson2 className="h-4 w-4" />
                  </LaunchLink>
                  <LaunchLink
                    href="/agent-economy/developer-launch-kit.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    JSON schema
                    <FileJson2 className="h-4 w-4" />
                  </LaunchLink>
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
                  <ShieldCheck className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {kit.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Path" value="5 min" />
                  <Metric label="APIs" value={String(kit.api_recipes.length)} />
                  <Metric label="npm" value={kit.npm.version} />
                  <Metric label="Mainnet" value="closed" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((item) => (
              <LaunchLink
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-white/10 bg-black/70 p-5 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                    <item.icon className="h-5 w-5 text-orange-300" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-orange-300 transition-transform group-hover:translate-x-1" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.detail}</p>
              </LaunchLink>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Golden path"
              title="One receipt path before the full API surface."
              body="The first developer journey should be boring and concrete: check live state, open one receipt, inspect its JSON, run policy, build the same flow, then read the mainnet gate."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {kit.five_minute_path.map((step, index) => (
                <LaunchLink
                  key={step.id}
                  href={step.href}
                  className="rounded-lg border border-white/10 bg-black/70 p-4 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10 font-mono text-xs text-orange-200">
                      {index + 1}
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-500" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{step.label}</h3>
                  <p className="mt-2 min-h-[88px] text-sm leading-relaxed text-neutral-400">{step.goal}</p>
                  <div className="mt-4 rounded-md border border-orange-500/20 bg-orange-500/[0.055] p-3 text-xs leading-relaxed text-orange-100/80">
                    {step.expected}
                  </div>
                </LaunchLink>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeader
                eyebrow="Builder kernel"
                title="Clone the proof surface into a local developer kit."
                body="The BuildOnErgo kit gives builders a small command-line path before they touch the full site: verify one receipt, generate provider manifests, create bootstrap jobs, model wallet handoff, and keep interop boundaries explicit."
              />
              <div className="mt-8 rounded-lg border border-orange-500/25 bg-orange-500/[0.055] p-5">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-orange-300" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-orange-200/80">
                      {kit.builder_kit.package}
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">{kit.builder_kit.status.replace(/_/g, " ")}</div>
                  </div>
                </div>
                <pre className="mt-5 max-w-full overflow-auto rounded-md border border-white/10 bg-black/70 p-4 text-sm text-orange-100">
                  {kit.builder_kit.install}
                </pre>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-lg border border-white/10 bg-black/75">
                <div className="border-b border-white/10 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">CLI commands</div>
                  <h3 className="mt-1 text-lg font-semibold text-white">Run the kernel locally</h3>
                </div>
                <div className="grid gap-2 p-4">
                  {kit.builder_kit.commands.map((command) => (
                    <code
                      key={command}
                      className="block overflow-auto rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-xs text-orange-100"
                    >
                      {command}
                    </code>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {kit.builder_kit.surfaces.map((surface) => (
                  <div key={surface} className="flex gap-3 rounded-lg border border-white/10 bg-black/70 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                    <p className="text-sm leading-relaxed text-neutral-300">{surface}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="API recipes"
              title="Machine-readable surfaces to wire first."
              body="These are deliberately boring endpoints: stable JSON, explicit status, and no signing authority."
            />
            <div className="mt-8 grid min-w-0 gap-4 lg:grid-cols-2">
              {kit.api_recipes.map((recipe) => (
                <div key={recipe.id} className="min-w-0 rounded-lg border border-white/10 bg-black/75">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4">
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        {recipe.method}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-white">{recipe.label}</h3>
                    </div>
                    <LaunchLink
                      href={recipe.url}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-neutral-300 transition hover:border-orange-500/35 hover:text-orange-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </LaunchLink>
                  </div>
                  <pre className="max-w-full overflow-auto border-b border-white/10 p-4 text-xs leading-relaxed text-orange-100">
                    {recipe.curl}
                  </pre>
                  <div className="flex flex-wrap gap-2 p-4">
                    {recipe.checks.map((check) => (
                      <span
                        key={check}
                        className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400"
                      >
                        {check}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl min-w-0 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="min-w-0">
              <SectionHeader
                eyebrow="Widget"
                title="Embed Sage without handing over wallet authority."
                body="The package is a host-owned wallet handoff surface: the widget can produce payment intent JSON, but the host decides how to authorize, simulate, sign, and persist receipts."
              />
              <div className="mt-8 rounded-lg border border-orange-500/25 bg-orange-500/[0.055] p-5">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-orange-300" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-orange-200/80">
                      {kit.npm.package}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">v{kit.npm.version}</div>
                  </div>
                </div>
                <pre className="mt-5 max-w-full overflow-auto rounded-md border border-white/10 bg-black/70 p-4 text-sm text-orange-100">
                  {kit.npm.install}
                </pre>
              </div>
              <div className="mt-4 grid gap-3">
                {kit.npm.surfaces.map((surface) => (
                  <div key={surface} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                    <p className="text-sm leading-relaxed text-neutral-300">{surface}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Guardrails"
                title="The claims boundary is part of the product."
                body="The system is strongest when every developer can see what is live and what is still blocked."
              />
              <div className="mt-8 space-y-3">
                {kit.guardrails.map((rule) => (
                  <div key={rule} className="flex gap-3 rounded-lg border border-white/10 bg-black/70 p-4">
                    <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-yellow-200" />
                    <p className="text-sm leading-relaxed text-neutral-300">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-red-200">Mainnet gate</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Two external artifacts still decide the next level.</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Everything in this launch kit is testnet live proof. Mainnet
                language opens only after external review and audit-bound
                script identity are published as completed artifacts.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {kit.open_gates.map((gate) => (
                <LaunchLink
                  key={gate.id}
                  href={gate.href}
                  className="rounded-lg border border-red-500/25 bg-red-500/[0.055] p-5 transition hover:border-red-400/45"
                >
                  <GitBranch className="h-5 w-5 text-red-200" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{gate.label}</h3>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-red-100/70">
                    owner: {gate.owner}
                  </div>
                </LaunchLink>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function LaunchLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: ReactNode
}) {
  if (href.startsWith("http")) {
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
