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
      "Ergo demos",
      "agent payments demo",
      "Fleet SDK examples",
      "ErgoScript demo",
      "ChainCash demo",
      "agent economy testnet",
      "blockchain micropayments demo",
      "autonomous agent payments",
      "eUTXO examples",
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
          url: "https://ergoblockchain.org/og/demos.png",
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
      images: ["https://ergoblockchain.org/og/demos.png"],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

export default function DemosPage() {
  return <DemosClient />
}
