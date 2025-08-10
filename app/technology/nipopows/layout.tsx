import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NIPoPoWs — Non-Interactive Proofs of Proof-of-Work | Ergo",
  description:
    "Verify Ergo on mobile/web with compact PoW proofs. NIPoPoWs enable light clients, bridges, and efficient oracles.",
  alternates: { canonical: "https://ergoblockchain.org/technology/nipopows" },
  openGraph: {
    title: "NIPoPoWs — Light Clients & Cross-Chain | Ergo",
    description: "Verify Ergo on mobile/web with compact PoW proofs.",
    url: "https://ergoblockchain.org/technology/nipopows",
    images: ["/og/nipopows.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIPoPoWs — Light Clients & Cross-Chain | Ergo",
    description: "Verify Ergo on mobile/web with compact PoW proofs.",
    images: ["/og/nipopows.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function NIPoPoWsLayout({ children }: { children: React.ReactNode }) {
  return children
} 