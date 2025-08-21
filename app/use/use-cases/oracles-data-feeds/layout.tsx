import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oracles & Data Feeds on Ergo | Decentralized Data Infrastructure",
  description: "Connect real-world data to Ergo blockchain. Decentralized oracle pools, price feeds, custom data sources for DeFi and prediction markets.",
  keywords: "oracles, data feeds, oracle pools, price feeds, external data, DeFi oracles, Ergo oracle",
  openGraph: {
    title: "Oracles & Data Feeds on Ergo",
    description: "Bringing real-world data on-chain with decentralized oracle pools.",
    images: ["/og-oracles.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/oracles-data-feeds",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracles on Ergo",
    description: "Decentralized oracle pools for reliable data feeds",
    images: ["/og-oracles.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/oracles-data-feeds",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 