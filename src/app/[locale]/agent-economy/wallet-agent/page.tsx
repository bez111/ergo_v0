import type { Metadata } from "next"
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  ExternalLink,
  FileJson2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  ReceiptText,
  ShieldCheck,
  SlidersHorizontal,
  WalletCards,
  type LucideIcon,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentEconomyWalletAgentSpec } from "@/lib/agent-economy/wallet-agent"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Wallet-Agent Safety Spec | Ergo Agent Economy",
    description:
      "A testnet-first safety spec for local Ergo wallet agents: policy caps, simulation, signing boundaries, receipt links, and mainnet gate rules.",
    alternates: getAlternates("/agent-economy/wallet-agent", locale),
    openGraph: {
      title: "Ergo Wallet-Agent Safety Spec",
      description:
        "How local wallet agents should reason about policy, simulation, signing, and receipts before any autonomous Ergo payment flow.",
      url: getCanonicalUrl("/agent-economy/wallet-agent", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo wallet-agent safety spec",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Wallet-Agent Safety Spec",
      description:
        "Local policy, simulation, signing boundaries, and receipts for testnet-first wallet agents.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

const lifecycleIcons: LucideIcon[] = [
  BrainCircuit,
  SlidersHorizontal,
  Network,
  Fingerprint,
  BadgeCheck,
  KeyRound,
  WalletCards,
  ReceiptText,
]

export default function WalletAgentPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Wallet Agent", href: "/agent-economy/wallet-agent" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Local wallet-agent boundary
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Wallet agents should sign less, know more, and keep policy local.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This spec defines the safety envelope for the next Ergo agent
                  surface: local policy, explicit simulation, bounded signing,
                  and receipt-first accountability. It is a testnet-first
                  design contract, not custody software.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/api/agent-economy/wallet-agent"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    JSON spec
                    <FileJson2 className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/sage-widget"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Widget surface
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Current posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {agentEconomyWalletAgentSpec.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <WalletCards className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {agentEconomyWalletAgentSpec.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <SpecStat label="Network" value={agentEconomyWalletAgentSpec.posture.network} />
                  <SpecStat label="Signing" value="local only" />
                  <SpecStat label="Custody" value="non-custodial" />
                  <SpecStat label="Mainnet" value="closed" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-black/45 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <LanguagePanel
              icon={CheckCircle2}
              title="Allowed language"
              items={agentEconomyWalletAgentSpec.posture.allowed_language}
              tone="orange"
            />
            <LanguagePanel
              icon={AlertTriangle}
              title="Forbidden language"
              items={agentEconomyWalletAgentSpec.posture.forbidden_language}
              tone="red"
            />
            <LanguagePanel
              icon={LockKeyhole}
              title="Never do"
              items={agentEconomyWalletAgentSpec.never_do}
              tone="neutral"
            />
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Lifecycle"
              title="The only acceptable signing path."
              body="Remote services may produce useful quotes, but they do not get signing authority. A local wallet-agent must move through policy, simulation, and exact transaction approval before any key is touched."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {agentEconomyWalletAgentSpec.lifecycle.map((step, index) => {
                const Icon = lifecycleIcons[index] ?? ShieldCheck
                return (
                  <div key={step.id} className="rounded-lg border border-white/10 bg-black/70 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10">
                        <Icon className="h-5 w-5 text-orange-300" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                        {step.state}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-bold text-white">{step.label}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.rule}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Threat model"
                title="What the local agent must resist."
                body="The main enemy is not only a bad transaction. It is any workflow that lets text, UI, or a remote quote bypass the user's local policy."
              />
              <div className="mt-8 space-y-3">
                {agentEconomyWalletAgentSpec.threat_model.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-red-500/20 bg-red-500/[0.035] p-4">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-200" />
                    <p className="text-sm leading-relaxed text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Transaction checks"
                title="Every signature request must pass these checks."
                body="This is the minimum transaction checklist for a wallet-agent before signing a Note payment, receipt flow, or future agent-to-agent action."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {agentEconomyWalletAgentSpec.transaction_checks.map((item, index) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-orange-300">
                      Check {index + 1}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Policy profile"
              title="A wallet-agent starts with policy, not a prompt."
              body="The policy profile is intentionally boring: caps, allowlists, expiry limits, confirmation thresholds, and receipt retention. That boring layer is what makes autonomous flows survivable."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-lg border border-white/10 bg-black/70 p-5">
                <h2 className="text-xl font-bold text-white">Required fields</h2>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {agentEconomyWalletAgentSpec.policy_profile.required_fields.map((field) => (
                    <div key={field} className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-xs text-orange-100">
                      {field}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/[0.045] p-5">
                <h2 className="text-xl font-bold text-white">Recommended defaults</h2>
                <div className="mt-5 space-y-3">
                  {Object.entries(agentEconomyWalletAgentSpec.policy_profile.recommended_defaults).map(([key, value]) => (
                    <div key={key} className="grid gap-2 border-t border-white/10 pt-3 first:border-t-0 first:pt-0 sm:grid-cols-[210px_minmax(0,1fr)]">
                      <div className="font-mono text-xs uppercase tracking-widest text-orange-200">{formatLabel(key)}</div>
                      <div className="text-sm leading-relaxed text-neutral-300">{Array.isArray(value) ? value.join(", ") : value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Integration surfaces"
              title="Where this spec touches the live stack."
              body="The wallet-agent layer is designed to sit beside Sage, MCP, receipts, and the review pack. It narrows signing authority instead of adding a new remote signer."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {agentEconomyWalletAgentSpec.integration_surfaces.map((surface) => (
                <a
                  key={surface.id}
                  href={surface.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-black/70 p-5 transition-colors hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg font-bold text-white">{surface.label}</h2>
                    <ExternalLink className="h-4 w-4 text-orange-300" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{surface.role}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Acceptance criteria"
              title="What a real implementation must prove."
              body="This list turns the direction into a reviewable surface. A wallet-agent implementation should be judged by observable policy decisions, not by promises about autonomy."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {agentEconomyWalletAgentSpec.acceptance_criteria.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                  <p className="text-sm leading-relaxed text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function SpecStat({ label, value }: { label: string; value: string }) {
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

function LanguagePanel({
  icon: Icon,
  title,
  items,
  tone,
}: {
  icon: LucideIcon
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

function formatLabel(value: string) {
  return value.replace(/_/g, " ")
}
