import type { Metadata } from "next"
import { SlidersHorizontal } from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { PolicyPlaygroundClient } from "./PolicyPlaygroundClient"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Wallet-Agent Policy Playground | Ergo Agent Payments",
    description:
      "An interactive policy-check playground for Ergo wallet-agent flows. Change amount, recipient, reserve, expiry and receipt settings, then inspect the allow/deny verdict.",
    alternates: getAlternates("/build/agent-payments/policy-playground", locale),
    openGraph: {
      title: "Ergo Wallet-Agent Policy Playground",
      description:
        "Test the machine-readable wallet-agent policy verdict before a host-owned wallet is asked to sign.",
      url: getCanonicalUrl("/build/agent-payments/policy-playground", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo wallet-agent policy playground",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Wallet-Agent Policy Playground",
      description:
        "Change a proposed wallet action and inspect the policy-check verdict in real time.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

export default function WalletAgentPolicyPlaygroundPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden border-b border-white/10 px-4 pb-10 pt-28 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Build", href: "/build" },
                { name: "Agent Payments", href: "/build/agent-payments" },
                { name: "Policy Playground", href: "/build/agent-payments/policy-playground" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                <SlidersHorizontal className="h-3.5 w-3.5 text-orange-300" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                  Try the policy verdict
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                Break the policy before a wallet ever sees it.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                This playground calls the same policy-check API used by the
                wallet-agent reference runner. Change the proposed action and
                watch the verdict explain exactly why a local agent may proceed
                or must stop.
              </p>
            </div>
          </div>
        </section>

        <PolicyPlaygroundClient />
      </main>
    </BackgroundWrapper>
  )
}
