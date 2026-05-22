import type { Metadata } from "next"
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  ExternalLink,
  FileJson2,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentEconomyReviewPack } from "@/lib/agent-economy/review-pack"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Review Pack | Ergo",
    description:
      "A reviewer handoff pack for Ergo's Agent Economy testnet proof: public evidence, scope, checklist, excluded claims, and mainnet gate rules.",
    alternates: getAlternates("/agent-economy/review-pack", locale),
    openGraph: {
      title: "Ergo Agent Economy Review Pack",
      description:
        "Inspect the public review pack for Sage receipts, Accord evidence, signer ops, MCP, npm widget, and the audit-gated mainnet path.",
      url: getCanonicalUrl("/agent-economy/review-pack", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy review pack",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Economy Review Pack",
      description:
        "A public handoff pack for external review, audit scope, evidence, and mainnet gate controls.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

const evidenceEntries = Object.entries(agentEconomyReviewPack.evidence)
const repositoryEntries = Object.entries(agentEconomyReviewPack.repositories)

export default function AgentEconomyReviewPackPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Review Pack", href: "/agent-economy/review-pack" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <ClipboardCheck className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    External review handoff
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  One pack for reviewers to inspect.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This is the operational handoff for the Ergo Agent Economy
                  testnet proof. It lists the scope, evidence, commands, claims,
                  and mainnet gate rules an external reviewer needs before any
                  stronger public language can be considered.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/api/agent-economy/review-pack"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    JSON review pack
                    <FileJson2 className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/trust"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Trust gate
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Review posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {agentEconomyReviewPack.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {agentEconomyReviewPack.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <ReviewStat label="Network" value={agentEconomyReviewPack.posture.network} />
                  <ReviewStat label="Mainnet" value="closed" />
                  <ReviewStat label="Evidence" value={String(evidenceEntries.length)} />
                  <ReviewStat label="Last review" value={agentEconomyReviewPack.last_reviewed} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <PosturePanel
              icon={BadgeCheck}
              title="Allowed language"
              items={agentEconomyReviewPack.posture.allowed_language}
              tone="orange"
            />
            <PosturePanel
              icon={LockKeyhole}
              title="Forbidden language"
              items={agentEconomyReviewPack.posture.forbidden_language}
              tone="red"
            />
            <PosturePanel
              icon={Scale}
              title="Mainnet gate rule"
              items={agentEconomyReviewPack.mainnet_gate_rule.must_remain_closed_until}
              tone="neutral"
            />
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Review boundary"
              title="What is included and what is not."
              body="The point is to keep the review target exact. The current pack covers the hosted testnet proof and the public evidence surface, not a real-funds mainnet deployment."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <ChecklistPanel title="Included in review" items={agentEconomyReviewPack.review_scope.included} />
              <ChecklistPanel title="Excluded until separate review" items={agentEconomyReviewPack.review_scope.excluded_until_separate_review} muted />
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Evidence"
              title="Every artifact the reviewer should open."
              body="These links point at the same receipt, conformance, signer, identity, npm, and gate artifacts surfaced by the Live Hub and Trust Gate."
            />
            <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/70">
              {evidenceEntries.map(([key, value], index) => (
                <ArtifactRow key={key} name={formatLabel(key)} href={value} first={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                eyebrow="Repositories"
                title="Source locations to pin."
                body="A completed external review should record exact commits, lockfile hashes, deployment ids, package versions, and workflow runs."
              />
              <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/70">
                {repositoryEntries.map(([key, value], index) => (
                  <ArtifactRow key={key} name={formatLabel(key)} href={value} first={index === 0} compact />
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Reviewer checklist"
                title="Questions the report must answer."
                body="The final report should be attributable and should state whether each finding blocks mainnet language."
              />
              <div className="mt-8 space-y-3">
                {agentEconomyReviewPack.reviewer_checklist.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-500/25 bg-orange-500/10 font-mono text-xs text-orange-200">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Acceptance workflow"
              title="How a review becomes gate evidence."
              body="The next external artifact should be strict enough to pin code, deployments, script identities, findings, and residual risk without changing the public mainnet posture prematurely."
            />
            <div className="mt-8 grid gap-3 lg:grid-cols-5">
              {agentEconomyReviewPack.acceptance_workflow.map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/70 p-4">
                  <div className="font-mono text-xs uppercase tracking-widest text-orange-300">
                    Step {index + 1}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Local verification"
              title="Commands to run before accepting the pack."
              body="These commands do not replace external review. They keep the website, content claims, and public gate mechanics honest while the review is pending."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {agentEconomyReviewPack.local_commands.map((command) => (
                <div key={command} className="rounded-lg border border-white/10 bg-black/70 p-4 font-mono text-sm text-orange-100">
                  {command}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function ReviewStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 truncate font-mono text-sm font-semibold text-orange-50">{value}</div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">{body}</p>
    </div>
  )
}

function PosturePanel({
  icon: Icon,
  title,
  items,
  tone,
}: {
  icon: typeof BadgeCheck
  title: string
  items: readonly string[]
  tone: "orange" | "red" | "neutral"
}) {
  const accent = tone === "red" ? "text-red-200 border-red-500/25 bg-red-500/[0.045]" :
    tone === "orange" ? "text-orange-200 border-orange-500/25 bg-orange-500/[0.055]" :
      "text-neutral-200 border-white/10 bg-white/[0.025]"

  return (
    <div className={`rounded-lg border p-5 ${accent}`}>
      <Icon className="h-6 w-6" />
      <h2 className="mt-5 text-xl font-bold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ChecklistPanel({ title, items, muted = false }: { title: string; items: readonly string[]; muted?: boolean }) {
  return (
    <div className={`rounded-lg border p-5 ${muted ? "border-white/10 bg-white/[0.02]" : "border-orange-500/20 bg-orange-500/[0.04]"}`}>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArtifactRow({
  name,
  href,
  first,
  compact = false,
}: {
  name: string
  href: string | null
  first: boolean
  compact?: boolean
}) {
  const enabled = typeof href === "string" && href.length > 0
  const internalHref = enabled && href.startsWith(BASE_URL)
    ? href.slice(BASE_URL.length) || "/"
    : null
  const rowClass = `${first ? "" : "border-t border-white/10"} grid gap-3 px-4 py-4 ${compact ? "sm:grid-cols-[180px_minmax(0,1fr)_100px]" : "sm:grid-cols-[270px_minmax(0,1fr)_120px]"} sm:items-center`

  return (
    <div className={rowClass}>
      <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">{name}</div>
      <div className="min-w-0 truncate text-sm text-neutral-300">
        {enabled ? href : "not published yet"}
      </div>
      {enabled && internalHref ? (
        <Link
          href={internalHref}
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-300 hover:text-orange-200"
        >
          Open
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      ) : enabled ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-300 hover:text-orange-200"
        >
          Open
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">Pending</span>
      )}
    </div>
  )
}

function formatLabel(key: string) {
  return key.replace(/_/g, " ")
}
