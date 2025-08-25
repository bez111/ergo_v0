import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ergo Introduction — PoW Smart Contracts, eUTXO, Sigma Protocols",
  description:
    "Meet Ergo: a PoW smart‑contract platform using the eUTXO model and Sigma protocols. Build privacy‑aware, auditable dApps with predictable costs.",
  alternates: { 
    canonical: "https://ergoblockchain.org/start/introduction",
    languages: {
      en: "https://ergoblockchain.org/start/introduction",
      // ru: "https://ergoblockchain.org/ru/start/introduction",
    }
  },
  openGraph: {
    type: "article",
    url: "https://ergoblockchain.org/start/introduction",
    title: "Ergo Introduction",
    description: "PoW smart contracts with eUTXO & Sigma Protocols.",
    images: [{ url: "https://ergoblockchain.org/og/intro.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
}

export default function IntroductionLayout({ children }: { children: React.ReactNode }) {
  return children
} 