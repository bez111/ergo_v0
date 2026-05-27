import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  BadgeCheck,
  FileJson2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  ReceiptText,
  ShieldCheck,
  SlidersHorizontal,
  WalletCards,
  XCircle,
  type LucideIcon,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { ergoConnectBoundary } from "@/lib/agent-economy/ergo-connect"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"
const PATH = "/build/ergo-connect"

const flowIcons: LucideIcon[] = [
  WalletCards,
  Fingerprint,
  SlidersHorizontal,
  Network,
  ShieldCheck,
  KeyRound,
  BadgeCheck,
  ReceiptText,
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "ErgoConnect Wallet Boundary | Ergo",
    description:
      "A TrustConnect-style, CAIP-native wallet boundary spec for Ergo autonomous-work flows: wallet connection, ErgoAuth proof, ErgoPay handoff, policy checks, reduced transactions, receipts, and audit-gated mainnet posture.",
    alternates: getAlternates(PATH, locale),
    openGraph: {
      title: "ErgoConnect Wallet Boundary",
      description:
        "Connect wallets, delegate safely, sign only policy-approved intents, and attach each agent action to a verifiable receipt.",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "ErgoConnect wallet boundary for autonomous work",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "ErgoConnect Wallet Boundary",
      description:
        "Wallet policy, ErgoAuth, ErgoPay, receipt expectations, and safe agent signing boundaries for Ergo testnet-first autonomous work.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "wallet-boundary-spec",
      "ai-topic":
        "ErgoConnect, CAIP Ergo namespace, wallet policy, ErgoAuth, ErgoPay, autonomous work clearing, receipt-backed settlement",
    },
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}${PATH}#webpage`,
      name: "ErgoConnect Wallet Boundary",
      url: `${BASE_URL}${PATH}`,
      description:
        "A testnet-first wallet boundary spec for autonomous work settlement on Ergo.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}${PATH}#software`,
      name: "ErgoConnect",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description: ergoConnectBoundary.positioning,
      softwareVersion: ergoConnectBoundary.version,
      url: `${BASE_URL}${PATH}`,
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}${PATH}#manifest`,
      name: "ErgoConnect Wallet Boundary Manifest",
      description: ergoConnectBoundary.purpose,
      url: ergoConnectBoundary.canonical,
      distribution: [
        {
          "@type": "DataDownload",
          name: "ErgoConnect manifest JSON",
          contentUrl: ergoConnectBoundary.canonical,
          encodingFormat: "application/json",
        },
        {
          "@type": "DataDownload",
          name: "ErgoConnect schema",
          contentUrl: ergoConnectBoundary.schema,
          encodingFormat: "application/schema+json",
        },
      ],
    },
  ],
}

export default function ErgoConnectPage() {
  const spec = ergoConnectBoundary
  const visibleFlow = spec.flow.slice(0, 8)

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Build", href: "/build" },
                { name: "ErgoConnect", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/70 px-3 py-1.5">
                  <WalletCards className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Wallet boundary for agents
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Connect wallets. Delegate safely. Settle with proof.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  ErgoConnect defines the boundary between a human-controlled
                  Ergo wallet and autonomous-work agents: address proof, wallet
                  policy, exact transaction handoff, signing approval, receipt
                  retention, and settlement verification.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BuildLink
                    href="/.well-known/ergo-connect.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Manifest JSON
                    <FileJson2 className="h-4 w-4" />
                  </BuildLink>
                  <BuildLink
                    href="/agent-economy/ergo-connect.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Schema
                    <FileJson2 className="h-4 w-4" />
                  </BuildLink>
                  <BuildLink
                    href="/build/agent-payments/policy-playground"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Policy playground
                    <ArrowRight className="h-4 w-4" />
                  </BuildLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/80 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Current posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {spec.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {spec.claim_boundary.public_language}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Metric label="Network" value={spec.posture.network} />
                  <Metric label="Mainnet" value="closed" />
                  <Metric label="Custody" value="false" />
                  <Metric label="Signing" value="wallet boundary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-black/55 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <LanguagePanel
              icon={ShieldCheck}
              title="Safe claim"
              body={spec.claim_boundary.safe_claim}
              tone="orange"
            />
            <LanguagePanel
              icon={XCircle}
              title="Do not claim"
              body={spec.claim_boundary.do_not_claim}
              tone="red"
            />
            <LanguagePanel
              icon={LockKeyhole}
              title="Security line"
              body="Agents create intents and request policy checks; they never receive raw private keys or silent signing authority."
              tone="neutral"
            />
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Signing path"
              title="The wallet signs one approved action, not an agent's imagination."
              body="ErgoConnect turns agent autonomy into reviewable stages: prove wallet control, define policy, create an intent, check the verdict, hand off exactly one transaction, then verify the receipt."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {visibleFlow.map((step, index) => {
                const Icon = flowIcons[index] ?? ShieldCheck
                return (
                  <div key={step} className="rounded-lg border border-white/10 bg-black/75 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10">
                        <Icon className="h-5 w-5 text-orange-300" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-bold text-white">{step}</h2>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeader
                eyebrow="CAIP namespace"
                title="Ergo can be described in chain-agnostic agent language."
                body="The point is not to claim a finished upstream integration. The point is to make Ergo accounts, assets, wallets, and payment intents explicit enough for agents and wallet libraries to inspect."
              />
              <div className="mt-8 rounded-lg border border-white/10 bg-black/80 p-5">
                <CodeLine label="namespace" value={spec.caip.namespace} />
                <CodeLine label="mainnet" value={spec.caip.mainnet} />
                <CodeLine label="testnet" value={spec.caip.testnet} />
                <CodeLine label="account" value={spec.caip.account_format} />
                <CodeLine label="asset" value={spec.caip.asset_format} />
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Signing surfaces"
                title="Proof, handoff, policy."
                body="Each surface has a different role. Keeping them separate is what prevents a quote, prompt, or remote tool from becoming a wallet."
              />
              <div className="mt-8 grid gap-3">
                {spec.signing_surfaces.map((surface) => (
                  <div key={surface.id} className="rounded-lg border border-white/10 bg-black/75 p-5">
                    <h3 className="text-lg font-semibold text-white">{surface.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">{surface.role}</p>
                    <p className="mt-3 rounded-md border border-orange-500/20 bg-orange-500/[0.06] px-3 py-2 text-xs leading-relaxed text-orange-100">
                      {surface.custody_boundary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Capability contract"
              title="Capabilities are useful only if the boundary is explicit."
              body="These are the callable pieces agents and developer tools can reason about. The manifest is intentionally conservative and keeps mainnet disabled."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {spec.capabilities.map((capability) => (
                <div key={capability.id} className="rounded-lg border border-white/10 bg-black/75 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300/80">
                    {capability.id}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{capability.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Policy demo"
                title="Agent cannot spend unless policy allows."
                body="This is the first demo ErgoConnect should make obvious: an allowed testnet intent reaches a wallet handoff; a risky intent stops before signing."
              />
              <div className="mt-8 grid gap-3">
                <DemoPanel label="Allow case" value={spec.demo.allow_case} tone="allow" />
                <DemoPanel label="Deny case" value={spec.demo.deny_case} tone="deny" />
                <DemoPanel label="Expected result" value={spec.demo.expected_result} tone="neutral" />
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/80 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">
                Example policy
              </div>
              <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-black/90 p-4 text-xs leading-relaxed text-neutral-300">
                {JSON.stringify(spec.example_policy, null, 2)}
              </pre>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Package plan"
              title="Small SDK surface first, production claims later."
              body="The package plan is a developer target, not a published production guarantee. It should wrap ErgoAuth, ErgoPay, policy checks, and receipt verification without turning agents into custodians."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {spec.package_plan.map((pkg) => (
                <div key={pkg} className="rounded-lg border border-white/10 bg-black/75 p-5">
                  <div className="font-mono text-sm text-orange-200">{pkg}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-orange-500/25 bg-orange-500/[0.07] p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
                    <ReceiptText className="h-4 w-4" />
                    Next build step
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-white">
                    Turn the wallet boundary into a reference flow.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    The next implementation layer is a small ErgoConnect kit:
                    hooks for connection state, ErgoAuth proof, ErgoPay handoff,
                    policy verdicts, and receipt verification around one
                    testnet payment intent.
                  </p>
                </div>
                <BuildLink
                  href="/build/agent-payments/wallet-agent-runner"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
                >
                  Reference runner
                  <ArrowRight className="h-4 w-4" />
                </BuildLink>
              </div>
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
      <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">{body}</p>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 break-words font-mono text-sm text-neutral-100">{value}</div>
    </div>
  )
}

function LanguagePanel({
  icon: Icon,
  title,
  body,
  tone,
}: {
  icon: LucideIcon
  title: string
  body: string
  tone: "orange" | "red" | "neutral"
}) {
  const toneClass =
    tone === "red"
      ? "border-red-500/25 bg-red-500/[0.05] text-red-100"
      : tone === "orange"
        ? "border-orange-500/25 bg-orange-500/[0.06] text-orange-100"
        : "border-white/10 bg-black/70 text-neutral-300"

  return (
    <div className={`rounded-lg border p-5 ${toneClass}`}>
      <Icon className="h-5 w-5" />
      <h2 className="mt-4 text-lg font-bold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  )
}

function CodeLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 border-b border-white/10 py-3 last:border-b-0 sm:grid-cols-[120px_minmax(0,1fr)]">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="break-all font-mono text-sm text-neutral-200">{value}</div>
    </div>
  )
}

function DemoPanel({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: "allow" | "deny" | "neutral"
}) {
  const className =
    tone === "allow"
      ? "border-emerald-400/20 bg-emerald-400/[0.05]"
      : tone === "deny"
        ? "border-red-400/20 bg-red-500/[0.045]"
        : "border-white/10 bg-black/70"

  return (
    <div className={`rounded-lg border p-4 ${className}`}>
      <div className="font-mono text-[10px] uppercase tracking-widest text-orange-300/80">{label}</div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{value}</p>
    </div>
  )
}

function BuildLink({
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
