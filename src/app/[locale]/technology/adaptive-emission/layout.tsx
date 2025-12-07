import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Adaptive Emission: Governance & Economics | Ergo",
  description: "Community-governed monetary policy on Ergo. Miner voting adjusts emission, storage rent ensures perpetual sustainability.",
  keywords: [
    "adaptive emission",
    "Ergo tokenomics",
    "miner governance",
    "emission schedule",
    "cryptocurrency governance",
    "EIP-27",
    "soft fork voting",
    "monetary policy",
    "sustainable blockchain",
    "re-emission"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/adaptive-emission"
  },
  openGraph: {
    title: "Adaptive Emission - Governance & Economics on Ergo",
    description: "Community-governed monetary policy. Miners vote on emission, storage rent ensures sustainability.",
    url: "https://ergoblockchain.org/technology/adaptive-emission",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/technology-1200x630.png",
      width: 1200,
      height: 630,
      alt: "Ergo Adaptive Emission"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaptive Emission - Governance | Ergo",
    description: "Community-governed monetary policy. Miners vote, storage rent sustains.",
    images: ["https://ergoblockchain.org/og/technology-1200x630.png"],
    creator: "@ergoplatform",
    site: "@ergoplatform"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function AdaptiveEmissionLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/adaptive-emission",
    headline: "Adaptive Emission: Ergo's Governance-Driven Economics",
    description: "How Ergo's emission schedule adapts through miner governance for long-term sustainability",
    image: "https://ergoblockchain.org/og/technology-1200x630.png",
    datePublished: "2023-01-15",
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org"
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org",
      logo: {
        "@type": "ImageObject",
        url: "https://ergoblockchain.org/favicon.ico"
      }
    },
    mainEntityOfPage: "https://ergoblockchain.org/technology/adaptive-emission",
    about: [
      { "@type": "Thing", name: "Cryptocurrency economics" },
      { "@type": "Thing", name: "Blockchain governance" },
      { "@type": "Thing", name: "Token emission" }
    ],
    proficiencyLevel: "Intermediate",
    technicalAudience: "Economists and governance researchers"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
