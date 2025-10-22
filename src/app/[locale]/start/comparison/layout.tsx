import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ergo vs Others — Practical Comparison (eUTXO, PoW, Privacy)",
  description:
    "Quick comparison of Ergo vs account-based chains: eUTXO, ASIC-resistant PoW (Autolykos), Sigma protocols, predictable fees, native L1 tokens, and light clients (NIPoPoWs).",
  alternates: {
    canonical: "https://ergoblockchain.org/start/comparison",
  },
  openGraph: {
    type: "article",
    url: "https://ergoblockchain.org/start/comparison",
    title: "Ergo vs Others — Practical Comparison",
    description: "eUTXO, Autolykos PoW, Sigma protocols, predictable fees.",
    images: [{ url: "https://ergoblockchain.org/og/comparison.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
}

export default function ComparisonLayout({ children }: { children: React.ReactNode }) {
  return children
} 