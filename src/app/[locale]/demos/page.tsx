import type { Metadata } from "next"
import { getCanonicalUrl, getAlternates } from "@/lib/seo"
import { DemosClient } from "./DemosClient"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Demos — Working Flows on Ergo Testnet",
    description:
      "Three working demos: agent buys API call, agent pays on credit, community reserve. All live on Ergo testnet with Fleet SDK code examples and step-by-step instructions.",
    keywords: [
      // Demo / testnet
      "Ergo agent economy demos",
      "live blockchain agent demo",
      "agent payments testnet demo",
      "Fleet SDK working examples",
      "ErgoScript live demo",
      "ChainCash demo",
      "eUTXO code examples",
      // AI agent specific
      "AI agent payments demo",
      "autonomous agent payment example",
      "crypto agent demo working",
      "LLM agent payment example code",
      "agent API payment blockchain demo",
      "multi-agent flow demo",
      // Use cases demonstrated
      "agent buys API call blockchain",
      "agent credit system demo",
      "community reserve blockchain demo",
      "programmable IOU demo",
      "acceptance predicate example",
      // Ergo
      "Ergo testnet demo",
      "blockchain micropayments demo",
      "autonomous agent commerce example",
    ],
    alternates: getAlternates("/demos", locale),
    openGraph: {
      title: "Agent Economy Demos — Working Flows on Ergo Testnet",
      description:
        "Working demos, not mockups. Three flows: API call payment, credit system, community reserve. With code.",
      url: getCanonicalUrl("/demos", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: "https://www.ergoblockchain.org/og/demos.png",
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy Demos",
        },
      ],
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Economy Demos",
      description:
        "Agent buys API call. Agent pays on credit. Community reserve. All live on Ergo testnet.",
      images: ["https://www.ergoblockchain.org/og/demos.png"],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

export default function DemosPage() {
  return <DemosClient />
}
