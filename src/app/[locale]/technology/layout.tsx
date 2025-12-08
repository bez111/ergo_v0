import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ergo Technology — eUTXO, ErgoScript, Autolykos | ergoblockchain.org",
  description:
    "Ergo tech: eUTXO, ErgoScript, Autolykos PoW, Storage Rent, Sigma Protocols, NIPoPoWs, and more. How Ergo differs from account-based systems.",
  alternates: { 
    canonical: "https://ergoblockchain.org/technology" 
  },
  openGraph: {
    type: "website",
    url: "https://ergoblockchain.org/technology",
    title: "Ergo Technology",
    description:
      "Explore Ergo’s technology stack: eUTXO, ErgoScript, Autolykos PoW, Storage Rent, Sigma Protocols, NIPoPoWs.",
    images: [{ url: "https://ergoblockchain.org/og/technology/technology.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
} 