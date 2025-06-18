import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Secure PoW - Autolykos v2 Mining Algorithm | Ergo Platform",
  description: "Learn about Autolykos v2, Ergo's ASIC-resistant Proof-of-Work algorithm. Designed for decentralized mining with memory-hard functions and energy efficiency.",
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
    title: "Secure PoW - Autolykos v2 Mining Algorithm",
    description: "Learn about Autolykos v2, Ergo's ASIC-resistant Proof-of-Work algorithm. Designed for decentralized mining with memory-hard functions and energy efficiency.",
    type: "website",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure PoW - Autolykos v2 Mining Algorithm",
    description: "ASIC-resistant, energy-efficient mining that promotes decentralization and long-term security.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://ergoplatform.org/technology/secure-pow",
  },
}

export default function SecurePowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 