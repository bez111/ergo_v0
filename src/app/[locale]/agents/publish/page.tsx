import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  FileJson2,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  UploadCloud,
  XCircle,
  type LucideIcon,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { AgentServicePublishTester } from "@/components/agents/AgentServicePublishTester"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import {
  agentServicePublishGuide,
  createAgentServiceSubmitDraft,
  exampleAgentServiceManifest,
  validateAgentServiceManifest,
} from "@/lib/agent-economy/agent-market"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"
const PATH = "/agents/publish"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Publish Agent Service | Ergo",
    description:
      "Operator-review flow for Ergo agent service manifests: validate capabilities, pricing, accepted payment rails, predicates, receipt expectations, evidence, and mainnet boundaries before registry inclusion.",
    alternates: getAlternates(PATH, locale),
    openGraph: {
      title: "Publish an Ergo Agent Service",
      description:
        "Validate a testnet agent service manifest before it can enter the bootstrap registry.",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Publish agent service on Ergo",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Publish an Ergo Agent Service",
      description:
        "Manifest validation for agent services: capabilities, accepted Notes, predicates, receipts, evidence, and testnet posture.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-service-publish-flow",
      "ai-topic": "Ergo agent service manifest, provider registry, autonomous work clearing, receipt-backed service publication",
    },
  }
}

const validation = validateAgentServiceManifest(exampleAgentServiceManifest)
const submitDraft = createAgentServiceSubmitDraft(exampleAgentServiceManifest)

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}${PATH}#webpage`,
      name: "Publish Agent Service",
      url: `${BASE_URL}${PATH}`,
      description:
        "Operator-review flow for testnet agent service manifests on Ergo.",
    },
    {
      "@type": "HowTo",
      "@id": `${BASE_URL}${PATH}#howto`,
      name: "Publish an Ergo agent service manifest",
      step: agentServicePublishGuide.review_steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: step,
      })),
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}${PATH}#api`,
      name: "Agent service publish validation API",
      url: agentServicePublishGuide.api,
      distribution: [
        {
          "@type": "DataDownload",
          name: "Publish validation schema",
          contentUrl: agentServicePublishGuide.schema,
          encodingFormat: "application/schema+json",
        },
        {
          "@type": "DataDownload",
          name: "Submit draft schema",
          contentUrl: agentServicePublishGuide.submit_draft_schema,
          encodingFormat: "application/schema+json",
        },
      ],
    },
  ],
}

export default function AgentServicePublishPage() {
  const guide = agentServicePublishGuide

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
                { name: "Publish", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <UploadCloud className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Publish your agent service
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Before a service is listed, its manifest has to pass the boundary.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This is the safe provider path: describe capability, pricing,
                  payment rails, predicate requirements, receipt schema,
                  evidence, and posture. The API validates the manifest and
                  returns an operator-review draft; it does not publish
                  automatically.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <SurfaceLink
                    href="/api/agents/publish"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Publish API
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/agent-economy/agent-service-publish.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Schema
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/agent-economy/agent-service-submit-draft.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Draft schema
                    <FileJson2 className="h-4 w-4" />
                  </SurfaceLink>
                  <SurfaceLink
                    href="/agents/registry"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Registry
                    <ArrowRight className="h-4 w-4" />
                  </SurfaceLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Publish posture
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
                  <Metric label="Autopublish" value="false" />
                  <Metric label="Mainnet" value="closed" />
                  <Metric label="Review draft" value={submitDraft.status} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Self-service validator"
              title="Paste a provider manifest and see the exact review draft."
              body="The browser calls the same publish API that agents use. A passing manifest becomes a submit draft for operator review; failing manifests show concrete schema, posture, payment, receipt, and claim-boundary errors."
            />
            <div className="mt-8">
              <AgentServicePublishTester
                initialManifest={exampleAgentServiceManifest}
                initialResponse={{
                  ...validation,
                  submit_draft: submitDraft,
                }}
              />
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Review steps"
              title="Service publication is a proof workflow, not a marketing form."
              body="A provider entry must make its economics and trust boundary inspectable before another agent can buy from it."
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
                title="The API blocks overclaims before the registry does."
                body="The first validator is deliberately conservative: it checks required fields, URLs, payment posture, predicate shape, receipt expectations, evidence, and forbidden claims."
              />
              <div className="mt-8 grid gap-3">
                <ValidationPanel
                  icon={CheckCircle2}
                  title="Example manifest"
                  body={validation.accepted_for_operator_review ? "Accepted for operator review" : "Blocked"}
                  tone={validation.accepted_for_operator_review ? "allow" : "deny"}
                />
                <ValidationPanel
                  icon={UploadCloud}
                  title="Submit draft"
                  body={`${submitDraft.registry_action}; registry write, signing, custody, and mainnet claims all remain false.`}
                  tone={submitDraft.status === "ready_for_operator_review" ? "allow" : "deny"}
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
                Example manifest
              </div>
              <pre className="mt-4 max-h-[620px] overflow-auto rounded-lg border border-white/10 bg-black/90 p-4 text-xs leading-relaxed text-neutral-300">
                {JSON.stringify(exampleAgentServiceManifest, null, 2)}
              </pre>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
                Example submit draft
              </div>
              <pre className="mt-4 max-h-[380px] overflow-auto rounded-lg border border-white/10 bg-black/90 p-4 text-xs leading-relaxed text-neutral-300">
                {JSON.stringify(submitDraft, null, 2)}
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
                  Provider loop
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  Publish first service, then earn first receipt-backed Note.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  This closes the next loop: provider manifests can be checked
                  by machines, reviewed by operators, linked to jobs, and later
                  tied to receipts and reputation.
                </p>
              </div>
              <SurfaceLink
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
              >
                Open jobs
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
      <div className="mt-1 break-words font-mono text-sm text-orange-100">{value}</div>
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
