import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Secure PoW - Autolykos v2 Mining Algorithm | Ergo Platform",
  description: "Learn about Ergo's Autolykos v2 Proof-of-Work algorithm - ASIC-resistant, energy-efficient mining that promotes decentralization and long-term network security.",
  keywords: [
    "Autolykos v2",
    "Proof of Work",
    "ASIC resistant",
    "GPU mining",
    "blockchain security",
    "decentralized mining",
    "energy efficient",
    "Ergo blockchain",
    "cryptocurrency mining",
    "fair launch"
  ],
  openGraph: {
    title: "Secure PoW - Autolykos v2 Mining Algorithm | Ergo Platform",
    description: "ASIC-resistant, energy-efficient mining that promotes decentralization. Mine with standard GPUs and contribute to network security.",
    type: "article",
    images: ["/og-secure-pow.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure PoW - Autolykos v2 Mining Algorithm",
    description: "ASIC-resistant, energy-efficient mining that promotes decentralization and long-term security."
  }
}

export default function SecurePowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 