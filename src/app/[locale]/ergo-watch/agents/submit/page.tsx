/**
 * Submit your agent to the public Accord Protocol registry.
 *
 *   GET /<locale>/ergo-watch/agents/submit
 *
 * The registry lives on GitHub — adding a provider means opening a PR
 * against accord-protocol/registry/providers/<slug>.json. This page
 * removes the friction by:
 *
 *   1. Letting the user fill out a guided form with the ProviderProfile
 *      schema (display_name, capabilities, rails, pricing, endpoints, …)
 *   2. Generating a valid v0 manifest as JSON, live, in the preview pane
 *   3. Building a deeplink to the GitHub "create new file" editor with
 *      the JSON pre-filled — one click and the user is reviewing the PR
 *      diff in their own browser, signed in as their own account
 *
 * No service account, no GitHub token on our side, no PR created without
 * the user's explicit signature. We're a UX layer on top of the canonical
 * source of truth, not a gatekeeper.
 */

import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { SubmitAgentForm } from "@/components/agents/SubmitAgentForm"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Submit your agent — Accord Protocol registry | Ergo",
  description:
    "Add your AI service or paid API to the public Accord Protocol provider registry. Guided form generates a valid v0 manifest and opens a pre-filled PR against the canonical source on GitHub.",
  alternates: { canonical: `${siteConfig.siteUrl}/ergo-watch/agents/submit` },
  openGraph: {
    title: "Submit your agent — Accord Protocol registry",
    description:
      "Add your provider to the public registry. One form, one click, one PR — your manifest goes live as soon as it's reviewed.",
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
              Open registry submission
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-mono leading-tight tracking-tight mb-4">
              List your agent on Accord Protocol
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
              Fill the form below, click <strong className="text-orange-200">Open PR on GitHub</strong>,
              review the auto-generated manifest in the GitHub editor that
              opens, and submit. Your provider goes live in the public
              registry — and on every dashboard / discovery page that
              consumes it — as soon as the PR is reviewed.
            </p>
          </header>

          <div className="mb-8 rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-5 text-sm text-gray-300 leading-relaxed">
            <strong className="text-orange-300">Heads up:</strong> the registry
            is read-only on this site — the canonical source is{" "}
            <a
              href="https://github.com/accord-protocol/accord-protocol/tree/main/registry/providers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-orange-200 underline decoration-orange-500/40"
            >
              accord-protocol/registry/providers
            </a>
            . We don&apos;t store anything you type here; the form runs entirely
            in your browser and the only thing that leaves is the
            pre-filled GitHub deeplink you click.
          </div>

          <SubmitAgentForm />

          <footer className="mt-16 pt-8 border-t border-white/5 text-xs text-gray-500 font-mono space-y-2">
            <p>
              The PR review is fast — provider profiles are validated against{" "}
              <a
                href="https://github.com/accord-protocol/accord-protocol/blob/main/schemas/provider_profile.v0.json"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/40"
              >
                schemas/provider_profile.v0.json
              </a>{" "}
              automatically; reviewers focus on basic fit and conformance.
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
