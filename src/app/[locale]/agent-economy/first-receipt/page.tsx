import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileJson2,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentEconomyFirstReceiptFlow } from "@/lib/agent-economy/first-receipt-flow"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"
const PATH = "/agent-economy/first-receipt"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Build First Agent Receipt | Ergo",
    description:
      "One golden path for developers and agents: inspect the latest full Sage receipt bundle, run wallet policy, read OpenAPI/MCP, and verify the closed mainnet gate.",
    alternates: getAlternates(PATH, locale),
    openGraph: {
      title: "Build First Agent Receipt on Ergo",
      description:
        "A concrete testnet proof path from live status to Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, policy check, and mainnet gate.",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo first agent receipt flow",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Build First Agent Receipt on Ergo",
      description:
        "One receipt, one policy check, one mainnet gate: the fastest developer path through Ergo's agent proof surface.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "first-receipt-flow",
      "ai-topic": "Ergo first receipt flow, full receipt bundle, wallet policy check, OpenAPI, MCP, mainnet gate",
    },
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${BASE_URL}${PATH}#howto`,
      name: "Build the first verifiable agent receipt on Ergo",
      description:
        "A testnet-first developer path for inspecting a full Sage receipt bundle, running wallet policy, and reading the mainnet gate.",
      totalTime: "PT5M",
      supply: [
        "Ergo Agent Economy live status API",
        "Full Sage receipt bundle",
        "Wallet-agent policy check",
        "OpenAPI contract",
        "MCP health endpoint",
        "Mainnet gate API",
      ],
      step: agentEconomyFirstReceiptFlow.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.label,
        text: step.expect,
        url: step.endpoint,
      })),
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}${PATH}#api`,
      name: "Ergo First Receipt Flow API",
      applicationCategory: "BlockchainApplication",
      applicationSubCategory: "Autonomous Work Clearing",
      operatingSystem: "Web, JSON API, MCP",
      url: agentEconomyFirstReceiptFlow.api,
      featureList: agentEconomyFirstReceiptFlow.steps.map((step) => step.label),
    },
  ],
}

export default function FirstReceiptPage() {
  const flow = agentEconomyFirstReceiptFlow

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
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "First Receipt", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <ReceiptText className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Golden path
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Build around one receipt first.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  Start from one settled testnet receipt, not from the whole API
                  catalog. Inspect the agreement, verification, settlement,
                  wallet policy, MCP health, and mainnet gate before writing
                  integration code.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <FlowLink
                    href="/api/agent-economy/first-receipt"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Flow JSON
                    <FileJson2 className="h-4 w-4" />
                  </FlowLink>
                  <FlowLink
                    href={flow.outcome.receipt_page}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Open receipt
                    <ExternalLink className="h-4 w-4" />
                  </FlowLink>
                  <FlowLink
                    href="/agent-economy/launch-kit"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Launch kit
                    <ArrowRight className="h-4 w-4" />
                  </FlowLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Expected outcome
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {flow.outcome.expected_receipt_type.replace(/_/g, " ")}
                    </div>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {flow.outcome.goal}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Network" value="testnet" />
                  <Metric label="Status" value={flow.outcome.expected_status.replace(/_/g, " ")} />
                  <Metric label="Policy" value="pre-sign" />
                  <Metric label="Mainnet" value="closed" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
              <div className="rounded-lg border border-orange-500/25 bg-orange-500/[0.06] p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
                  <TerminalSquare className="h-4 w-4" />
                  One command probe
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Use this as the first machine check. It returns the whole
                  route, not just a marketing page.
                </p>
              </div>
              <pre className="min-w-0 overflow-x-auto rounded-lg border border-white/10 bg-black/85 p-5 text-xs leading-relaxed text-orange-100">
                {flow.one_command_probe.command}
              </pre>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Path"
              title="Six checks, one mental model."
              body="The point is to make a developer see the whole clearing loop once: proof state, receipt, policy, callable contract, MCP, and gate."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {flow.steps.map((step, index) => (
                <div key={step.id} className="min-w-0 rounded-lg border border-white/10 bg-black/80">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300/80">
                        {index + 1} / {step.method}
                      </div>
                      <h2 className="mt-2 text-xl font-semibold text-white">{step.label}</h2>
                    </div>
                    <StatusPill status={step.status} />
                  </div>
                  <div className="space-y-4 p-5">
                    <MiniPanel label="Endpoint" value={step.endpoint} mono />
                    <pre className="max-w-full overflow-x-auto rounded-md border border-white/10 bg-white/[0.035] p-4 text-xs leading-relaxed text-orange-100">
                      {step.command}
                    </pre>
                    <MiniPanel label="Expect" value={step.expect} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                eyebrow="Receipt object"
                title="The receipt is the demo."
                body="A transaction hash says value moved. The receipt bundle says what was agreed, how it was verified, and how it settled."
              />
              <FlowLink
                href={flow.outcome.receipt_api}
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
              >
                Inspect JSON
                <ExternalLink className="h-4 w-4" />
              </FlowLink>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {flow.outcome.contains.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-black/80 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                  <p className="text-sm leading-relaxed text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeader
                eyebrow="Policy"
                title="The wallet says yes before the agent signs."
                body="The safe example is allowed. Change the amount, recipient, reserve, network, expiry, task hash, or receipt expectation and it fails closed."
              />
              <div className="mt-8 rounded-lg border border-white/10 bg-black/80 p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Example verdict
                </div>
                <div className="mt-2 text-2xl font-bold text-white">
                  {flow.policy_check.example_verdict.allowed ? "allowed" : "denied"}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {flow.policy_check.signing_boundary}
                </p>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Next"
                title="After the first receipt, choose one path."
                body="The next move depends on whether the builder wants UI, local examples, or trust review."
              />
              <div className="mt-8 grid gap-3">
                {flow.developer_next_actions.map((action) => (
                  <FlowLink
                    key={action.id}
                    href={action.href}
                    className="group rounded-lg border border-white/10 bg-black/80 p-5 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{action.label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{action.reason}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-orange-300 transition-transform group-hover:translate-x-1" />
                    </div>
                  </FlowLink>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/60 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-red-500/25 bg-red-500/[0.055] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-red-200">
                  <LockKeyhole className="h-4 w-4" />
                  Stop condition
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  The first receipt flow proves testnet clearing. It does not open mainnet claims.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Mainnet/payment-production language stays closed until
                  external review and audit-bound script identity are published.
                </p>
              </div>
              <FlowLink
                href="/agent-economy/trust"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-400 bg-red-500/20 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-red-100 transition hover:bg-red-500/30"
              >
                Read gate
                <LockKeyhole className="h-4 w-4" />
              </FlowLink>
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
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-orange-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">{body}</p>
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

function MiniPanel({
  label,
  value,
  mono = false,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="min-w-0 rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className={`mt-2 break-all text-sm leading-relaxed text-neutral-300 ${mono ? "font-mono" : ""}`}>
        {value}
      </div>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  const closed = status.includes("closed")
  return (
    <span
      className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
        closed
          ? "border-red-400/30 bg-red-500/10 text-red-200"
          : "border-orange-500/30 bg-orange-500/10 text-orange-200"
      }`}
    >
      {status.replace(/_/g, " ")}
    </span>
  )
}

function FlowLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: ReactNode
}) {
  if (href.startsWith("http") || href.startsWith("/api/") || href.startsWith("/r/")) {
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
