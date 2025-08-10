import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autolykos v2: ASIC-Resistant, GPU-Friendly PoW | Ergo",
  description:
    "Ergo uses Autolykos v2 — a memory-hard, GPU-friendly Proof-of-Work that keeps mining decentralized and accessible. Learn how to start mining and why it matters.",
  alternates: { canonical: "https://ergoblockchain.org/technology/secure-pow" },
  openGraph: {
    type: "article",
    url: "https://ergoblockchain.org/technology/secure-pow",
    title: "Autolykos v2 — Secure Proof-of-Work",
    description: "Memory-hard PoW, ASIC-resistant (not ASIC-proof), GPU-friendly.",
    images: [
      { url: "https://ergoblockchain.org/og/secure-pow.png", width: 1200, height: 630 },
    ],
  },
  twitter: { card: "summary_large_image" },
}

export default function SecurePowLayout({ children }: { children: React.ReactNode }) {
  return children
} 