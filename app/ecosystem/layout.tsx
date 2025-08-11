import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ergo Ecosystem — dApps, wallets, tools, DeFi",
  description: "Explore the Ergo ecosystem: decentralized apps, wallets, privacy tools, DeFi protocols, SDKs and infrastructure.",
  alternates: { canonical: "https://ergoblockchain.org/ecosystem" },
  openGraph: {
    type: "website",
    url: "https://ergoblockchain.org/ecosystem",
    title: "Ergo Ecosystem",
    description: "Directory of Ergo dApps, wallets, infrastructure and tools.",
    images: [{ url: "/og/ecosystem.png", width: 1200, height: 630 }],
    siteName: "Ergo",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", site: "@ergoplatform", creator: "@ergoplatform" },
}

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return children
} 