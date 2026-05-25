import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { agentEconomyLiveSnapshot } from "@/lib/agent-economy/static-proof-snapshots"
import { AgentEconomyLiveClient } from "./AgentEconomyLiveClient"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo Agent Economy Live Hub | Sage, Accord, MCP & Receipts",
    description:
      "A live operational cockpit for Ergo's testnet-first agent economy stack: Sage paid turns, receipt storage, Accord conformance, MCP, widgets and the ErgoScript playground.",
    alternates: getAlternates("/agent-economy/live", locale),
    openGraph: {
      title: "Ergo Agent Economy Live Hub",
      description:
        "Live status for Sage receipts, Accord, MCP, the Sage widget and the ErgoScript playground.",
      url: getCanonicalUrl("/agent-economy/live", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy live cockpit",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Economy Live Hub",
      description: "Sage receipts, Accord, MCP and ErgoScript status in one live cockpit.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agentic-blockchain-live-proof",
      "ai-topic": "Ergo agent economy, Sage receipts, Accord conformance, MCP endpoint",
    },
  }
}

export default function AgentEconomyLivePage() {
  return <AgentEconomyLiveClient initialStatus={agentEconomyLiveSnapshot} />
}
