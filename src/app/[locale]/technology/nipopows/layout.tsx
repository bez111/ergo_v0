import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NIPoPoWs: Light Clients & Bridges | Ergo",
  description: "Non-Interactive Proofs of Proof-of-Work enable instant mobile sync and trustless cross-chain bridges. Verify blockchain in seconds.",
  keywords: [
    "NIPoPoWs",
    "Non-Interactive Proofs of Proof-of-Work",
    "light clients",
    "mobile wallet",
    "cross-chain bridges",
    "blockchain interoperability",
    "SPV",
    "succinct proofs",
    "sidechains",
    "Rosen Bridge"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/nipopows"
  },
  openGraph: {
    title: "NIPoPoWs - Light Clients & Trustless Bridges",
    description: "Instant mobile sync, trustless bridges, and cross-chain interoperability. Verify blockchain in seconds, not hours.",
    url: "https://ergoblockchain.org/technology/nipopows",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/nipopows-explained.png",
      width: 1200,
      height: 630,
      alt: "Ergo NIPoPoWs Technology"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "NIPoPoWs - Light Clients & Bridges | Ergo",
    description: "Instant mobile sync and trustless cross-chain bridges. Verify blockchain in seconds.",
    images: ["https://ergoblockchain.org/og/nipopows-explained.png"],
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

export default function NipopowsLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/nipopows",
    headline: "NIPoPoWs: Non-Interactive Proofs of Proof-of-Work",
    description: "How NIPoPoWs enable light clients and trustless cross-chain bridges on Ergo",
    image: "https://ergoblockchain.org/og/nipopows-explained.png",
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
    mainEntityOfPage: "https://ergoblockchain.org/technology/nipopows",
    about: [
      { "@type": "Thing", name: "Light client" },
      { "@type": "Thing", name: "Cross-chain bridge" },
      { "@type": "Thing", name: "Blockchain interoperability" }
    ],
    proficiencyLevel: "Advanced",
    technicalAudience: "Blockchain researchers and developers"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
