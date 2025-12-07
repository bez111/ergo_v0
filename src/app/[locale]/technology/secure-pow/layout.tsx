import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autolykos PoW: GPU Mining Algorithm | Ergo",
  description: "Explore Autolykos v2, Ergo's memory-hard ASIC-resistant proof-of-work. GPU-friendly mining for true decentralization and energy efficiency.",
  keywords: [
    "Autolykos",
    "proof of work",
    "GPU mining",
    "ASIC resistant",
    "memory hard",
    "Ergo mining",
    "decentralized mining",
    "PoW algorithm",
    "cryptocurrency mining",
    "fair mining",
    "energy efficient blockchain"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/secure-pow"
  },
  openGraph: {
    title: "Autolykos PoW - GPU Mining on Ergo",
    description: "Memory-hard, ASIC-resistant mining algorithm. Mine ERG with your GPU for true decentralization.",
    url: "https://ergoblockchain.org/technology/secure-pow",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/autolykos-proof-of-work.png",
      width: 1200,
      height: 630,
      alt: "Ergo Autolykos Proof-of-Work"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Autolykos PoW - GPU Mining Algorithm | Ergo",
    description: "Memory-hard, ASIC-resistant mining. GPU-friendly for true decentralization.",
    images: ["https://ergoblockchain.org/og/autolykos-proof-of-work.png"],
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

export default function SecurePowLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/secure-pow",
    headline: "Autolykos Proof-of-Work Mining Algorithm",
    description: "Technical guide to Ergo's ASIC-resistant, GPU-friendly mining algorithm",
    image: "https://ergoblockchain.org/og/autolykos-proof-of-work.png",
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
    mainEntityOfPage: "https://ergoblockchain.org/technology/secure-pow",
    about: [
      { "@type": "Thing", name: "Proof of Work" },
      { "@type": "Thing", name: "Cryptocurrency mining" },
      { "@type": "Thing", name: "GPU mining" }
    ],
    proficiencyLevel: "Beginner",
    technicalAudience: "Miners and blockchain enthusiasts"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
