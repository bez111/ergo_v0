import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { ProofExplorerClient } from "./ProofExplorerClient"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Proof Explorer | Ergo",
    description:
      "A public proof explorer for Ergo's testnet agent economy: Sage receipt bundles, Accord conformance evidence, MCP health, Sage widget, and the audit-gated mainnet path.",
    alternates: getAlternates("/agent-economy/proofs", locale),
    openGraph: {
      title: "Ergo Agent Economy Proof Explorer",
      description:
        "Inspect the live proof surface: full Sage receipts, signed Accord evidence, MCP, widget package, and mainnet gate state.",
      url: getCanonicalUrl("/agent-economy/proofs", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy proof explorer",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Economy Proof Explorer",
      description: "Receipts, conformance evidence, MCP health, package state, and audit gate in one public board.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-economy-proof-explorer",
      "ai-topic": "Ergo Sage receipt bundles, Accord conformance, MCP endpoint, audit gate",
    },
  }
}

export default function AgentEconomyProofsPage() {
  return <ProofExplorerClient />
}
