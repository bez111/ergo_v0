import type { Metadata } from "next"
import EutxoClient from "./EutxoClient"

export function generateMetadata(): Metadata {
  const url = "https://ergoblockchain.org/technology/eutxo-model"
  const title = "eUTXO Model — UTXO vs Account | Ergo"
  const description =
    "Plain-English guide to the eUTXO model on Ergo: how it works, UTXO vs account-based, security, parallelism, and real use cases."
  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: "https://ergoblockchain.org/og/eutxo.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://ergoblockchain.org/og/eutxo.png"],
      ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  }
}

export default function Page() {
  return <EutxoClient />
}
