import type { Metadata } from "next"
import { getCanonicalUrl, getAlternates } from "@/lib/seo"
import { AgentPaymentsClient } from "./AgentPaymentsClient"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Payment Architecture — Reserve, Note, Tracker, Predicate | Ergo",
    description:
      "Technical reference for building agent payments on Ergo. Four on-chain primitives, three composable flows, Fleet SDK code examples. Reserve → Note → Tracker → Acceptance Predicate.",
    keywords: [
      "agent payments Ergo",
      "ErgoScript acceptance predicates",
      "Fleet SDK tutorial",
      "on-chain notes",
      "reserve contract",
      "tracker contract",
      "ChainCash",
      "Ergo smart contracts",
      "autonomous agent payments",
      "programmable trust",
      "eUTXO payments",
    ],
    alternates: getAlternates("/build/agent-payments", locale),
    openGraph: {
      title: "Agent Payment Architecture on Ergo",
      description:
        "Reserve · Note · Tracker · Predicate — four primitives for building verifiable agent-to-agent payments. With Fleet SDK examples.",
      url: getCanonicalUrl("/build/agent-payments", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: "https://ergoblockchain.org/og/agent-payments.png",
          width: 1200,
          height: 630,
          alt: "Ergo Agent Payment Architecture",
        },
      ],
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Agent Payment Stack — Technical Architecture",
      description:
        "Reserve → Note → Tracker → Acceptance Predicate. The reference architecture for agent payments on Ergo.",
      images: ["https://ergoblockchain.org/og/agent-payments.png"],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

export default function AgentPaymentsPage() {
  return <AgentPaymentsClient />
}
