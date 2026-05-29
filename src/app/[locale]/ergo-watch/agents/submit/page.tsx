/**
 * Legacy submit path for the older Ergo Watch agent registry.
 *
 *   GET /<locale>/ergo-watch/agents/submit
 *
 * The newer Agent Economy registry path is /agents/publish. Keep this
 * route as a compatibility bridge so old links do not imply a second
 * source of truth.
 */

import type { Metadata } from "next"
import { ArrowRight, FileJson2, GitBranch, ShieldCheck } from "lucide-react"
import { siteConfig } from "@/config/site-config"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Link } from "@/i18n/navigation"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Submit your agent service | Ergo",
  description:
    "Compatibility bridge for older Ergo Watch agent submit links. New provider manifests should use the Agent Service publish validator and operator-review draft flow.",
  alternates: { canonical: `${siteConfig.siteUrl}/ergo-watch/agents/submit` },
  openGraph: {
    title: "Submit your agent service",
    description:
      "Use the Agent Service publish validator before operator review. No automatic registry write, custody, signing, or mainnet claim.",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function SubmitAgentPage() {
  return (
    <BackgroundWrapper>
      <article className="min-h-screen text-gray-200 px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Ergo Watch", href: "/ergo-watch" },
              { name: "Agents", href: "/ergo-watch/agents" },
              { name: "Submit", href: "/ergo-watch/agents/submit" },
            ]}
          />

          <header className="mt-8 mb-10">
            <div className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-mono mb-3">
              Registry submission bridge
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-mono leading-tight tracking-tight mb-4">
              Publish agent services through the new review draft flow.
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
              This older Ergo Watch path now points builders to the Agent
              Service Registry flow. The current path validates a testnet
              service manifest, returns a machine-readable submit draft, and
              keeps registry writes behind operator review.
            </p>
          </header>

          <div className="mb-8 rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-5 text-sm text-gray-300 leading-relaxed">
            <strong className="text-orange-300">Boundary:</strong> the new
            publish API does not publish automatically, sign transactions,
            hold private keys, accept custody, or open mainnet claims. It only
            checks whether a manifest is ready for operator review.
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/65 p-5">
              <div className="flex items-center gap-2 text-orange-300 font-mono text-[11px] uppercase tracking-[0.2em]">
                <ShieldCheck className="h-4 w-4" />
                Current path
              </div>
              <h2 className="mt-3 text-xl font-bold text-white">Agent Service publish validator</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Paste a provider manifest, validate capabilities, pricing,
                accepted payment rails, predicates, receipt schema, evidence,
                and posture, then inspect the exact submit draft.
              </p>
              <Link
                href="/agents/publish"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-orange-400"
              >
                Open /agents/publish
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/65 p-5">
              <div className="flex items-center gap-2 text-orange-300 font-mono text-[11px] uppercase tracking-[0.2em]">
                <GitBranch className="h-4 w-4" />
                Legacy note
              </div>
              <h2 className="mt-3 text-xl font-bold text-white">Accord provider PRs remain separate</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Older Accord provider profiles can still be reviewed in their
                own repository, but they are not the same as the new Ergo Agent
                Service Registry bootstrap flow.
              </p>
              <a
                href="https://github.com/accord-protocol/accord-protocol/tree/main/registry/providers"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/70 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-gray-200 transition hover:border-orange-500/50 hover:bg-orange-500/10"
              >
                Legacy provider registry
                <FileJson2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-white/5 text-xs text-gray-500 font-mono space-y-2">
            <p>
              The old provider PR path validates against{" "}
              <a
                href="https://github.com/accord-protocol/accord-protocol/blob/main/schemas/provider_profile.v0.json"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/40"
              >
                schemas/provider_profile.v0.json
              </a>{" "}
              in the Accord repository. The new Agent Service Registry draft
              validates against the site API first and remains operator-review
              only.
            </p>
            <p>
              Looking for the spec?{" "}
              <a
                href="https://github.com/accord-protocol/accord-protocol/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/40"
              >
                ACCORD-000 through ACCORD-006
              </a>{" "}
              cover the protocol surface.
            </p>
          </footer>
        </div>
      </article>
    </BackgroundWrapper>
  )
}
