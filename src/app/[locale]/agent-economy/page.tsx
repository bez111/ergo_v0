import type { Metadata } from "next"
import { getCanonicalUrl, getAlternates } from "@/lib/seo"
import { AgentEconomyClient } from "./AgentEconomyClient"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy on Ergo — Notes, Credit & Programmable Trust",
    description:
      "Ergo is the base layer for autonomous economic agents: programmable notes, acceptance predicates, on-chain trackers, and reserves. No counterparty. No Stripe. Just verifiable settlement.",
    keywords: [
      "agent economy",
      "autonomous agents payments",
      "programmable money",
      "ErgoScript acceptance predicates",
      "agent credit",
      "on-chain notes",
      "ChainCash",
      "AI agent payments",
      "micropayments blockchain",
      "Ergo agent economy",
      "eUTXO agents",
      "BetterMoneyLabs",
    ],
    alternates: getAlternates("/agent-economy", locale),
    openGraph: {
      title: "Agent Economy on Ergo — Notes, Credit & Programmable Trust",
      description:
        "Autonomous agents need credit, programmable acceptance rules, and verifiable settlement — not Stripe. Ergo is the only settlement layer built for this.",
      url: getCanonicalUrl("/agent-economy", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: "https://ergoblockchain.org/og/agent-economy.png",
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy — Base layer for autonomous economic agents",
        },
      ],
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Agent Economy on Ergo",
      description:
        "Notes · Credit · Trust Rules · Settlement — the open stack for autonomous agent commerce.",
      images: ["https://ergoblockchain.org/og/agent-economy.png"],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

export default function AgentEconomyPage() {
  return <AgentEconomyClient />
}
