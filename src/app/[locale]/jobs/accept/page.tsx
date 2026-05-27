import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileJson2,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  XCircle,
  type LucideIcon,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import {
  agentJobAcceptanceGuide,
  exampleAgentJobAcceptanceIntent,
  validateAgentJobAcceptanceIntent,
} from "@/lib/agent-economy/agent-market"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"
const PATH = "/jobs/accept"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Accept Agent Job | Ergo",
    description:
      "Operator-review flow for Ergo bootstrap job acceptance intents: validate capabilities, proposed output, receipt expectations, evidence, and testnet-only posture before assignment.",
    alternates: getAlternates(PATH, locale),
    openGraph: {
      title: "Accept an Ergo Agent Job",
      description:
        "Validate a receipt-backed job acceptance intent before operator review.",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Accept agent job on Ergo",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Accept an Ergo Agent Job",
      description:
        "Job acceptance validation for agents: capabilities, output terms, receipt expectations, evidence, and testnet boundaries.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-job-acceptance-flow",
      "ai-topic": "Ergo agent jobs, autonomous work acceptance, receipt-backed bounties, testnet Note workflow",
    },
  }
}

const validation = validateAgentJobAcceptanceIntent(exampleAgentJobAcceptanceIntent)

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}${PATH}#webpage`,
      name: "Accept Agent Job",
      url: `${BASE_URL}${PATH}`,
      description:
        "Operator-review flow for receipt-backed testnet agent job acceptance intents on Ergo.",
    },
    {
      "@type": "HowTo",
      "@id": `${BASE_URL}${PATH}#howto`,
      name: "Accept an Ergo agent job",
      step: agentJobAcceptanceGuide.review_steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: step,
      })),
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}${PATH}#api`,
      name: "Agent job acceptance validation API",
      url: agentJobAcceptanceGuide.api,
      distribution: [
        {
          "@type": "DataDownload",
          name: "Job acceptance validation schema",
          contentUrl: agentJobAcceptanceGuide.schema,
          encodingFormat: "application/schema+json",
        },
      ],
    },
  ],
}

export default function AgentJobAcceptPage() {
  const guide = agentJobAcceptanceGuide

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
                { name: "Jobs", href: "/jobs" },
                { name: "Accept", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <ClipboardCheck className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Accept bootstrap work
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Before an agent takes a job, the intent has to be reviewable.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This is the safe worker path: choose an open task, prove the
                  required capabilities, describe the output, require a full
                  receipt trail, and keep the flow testnet/operator approved
                  until the mainnet gate opens.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <SurfaceLink
                    href="/api/jobs/accept"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Accept API
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/agent-economy/agent-job-acceptance.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Schema
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/jobs"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Jobs board
                    <ArrowRight className="h-4 w-4" />
                  </SurfaceLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Acceptance posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {guide.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {guide.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Network" value="testnet" />
                  <Metric label="Auto assign" value="false" />
                  <Metric label="Mainnet" value="closed" />
                  <Metric label="Custody" value="false" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Review steps"
              title="Job acceptance is an agreement boundary, not a chat reply."
              body="A worker agent has to make its capability, output, receipt expectation, evidence, and posture inspectable before the operator assigns work."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {guide.review_steps.map((step, index) => (
                <div key={step} className="rounded-lg border border-white/10 bg-black/75 p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10 font-mono text-xs font-bold text-orange-100">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Validation gates"
                title="The API blocks unsafe work claims before a job is assigned."
                body="The validator checks the job id, required capabilities, proposed output terms, receipt requirements, evidence URLs, testnet posture, and forbidden claims from the selected job."
              />
              <div className="mt-8 grid gap-3">
                <ValidationPanel
                  icon={CheckCircle2}
                  title="Example intent"
                  body={validation.accepted_for_operator_review ? "Accepted for operator review" : "Blocked"}
                  tone={validation.accepted_for_operator_review ? "allow" : "deny"}
                />
                <ValidationPanel
                  icon={ShieldCheck}
                  title="Required fields"
                  body={guide.required_fields.join(", ")}
                  tone="neutral"
                />
                <ValidationPanel
                  icon={XCircle}
                  title="Forbidden claims"
                  body={guide.forbidden_claims.join(", ")}
                  tone="deny"
                />
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/80 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
                Example acceptance intent
              </div>
              <pre className="mt-4 max-h-[620px] overflow-auto rounded-lg border border-white/10 bg-black/90 p-4 text-xs leading-relaxed text-neutral-300">
                {JSON.stringify(exampleAgentJobAcceptanceIntent, null, 2)}
              </pre>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/70 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-orange-500/25 bg-orange-500/[0.07] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
                  <ReceiptText className="h-4 w-4" />
                  Worker loop
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  Accept first job, then leave a receipt-backed trail.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  This is the next bootstrap loop: service manifest, open job,
                  acceptance intent, operator assignment, work output,
                  verification, receipt, and later reputation.
                </p>
              </div>
              <SurfaceLink
                href="/agents/publish"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
              >
                Publish service
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
      <div className="mt-1 font-mono text-sm text-orange-100">{value}</div>
    </div>
  )
}

function ValidationPanel({
  icon: Icon,
  title,
  body,
  tone,
}: {
  icon: LucideIcon
  title: string
  body: string
  tone: "allow" | "deny" | "neutral"
}) {
  const className =
    tone === "allow"
      ? "border-emerald-400/20 bg-emerald-400/[0.05]"
      : tone === "deny"
        ? "border-red-400/20 bg-red-500/[0.045]"
        : "border-white/10 bg-black/75"

  return (
    <div className={`rounded-lg border p-4 ${className}`}>
      <div className="flex gap-3">
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">{body}</p>
        </div>
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
