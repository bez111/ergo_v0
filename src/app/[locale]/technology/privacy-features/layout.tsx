import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sigma Protocols: Zero-Knowledge Privacy | Ergo",
  description: "Native zero-knowledge proofs and ring signatures on Ergo. Optional privacy with ErgoMixer, confidential assets, and Sigma protocols.",
  keywords: [
    "Sigma protocols",
    "zero knowledge proofs",
    "ZKP",
    "ring signatures",
    "ErgoMixer",
    "blockchain privacy",
    "confidential transactions",
    "privacy coins",
    "optional privacy",
    "cryptographic privacy"
  ],
  alternates: {
    canonical: "https://ergoblockchain.org/technology/privacy-features"
  },
  openGraph: {
    title: "Sigma Protocols - Zero-Knowledge Privacy on Ergo",
    description: "Native ZK proofs, ring signatures, and ErgoMixer. Optional privacy without compromising auditability.",
    url: "https://ergoblockchain.org/technology/privacy-features",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/sigma-protocols-explained.png",
      width: 1200,
      height: 630,
      alt: "Ergo Sigma Protocols Privacy"
    }],
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigma Protocols - Zero-Knowledge Privacy | Ergo",
    description: "Native ZK proofs, ring signatures, ErgoMixer. Optional privacy for everyone.",
    images: ["https://ergoblockchain.org/og/sigma-protocols-explained.png"],
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

export default function PrivacyFeaturesLayout({ children }: { children: React.ReactNode }) {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/technology/privacy-features",
    headline: "Sigma Protocols: Zero-Knowledge Privacy on Ergo",
    description: "Comprehensive guide to Ergo's privacy features including Sigma protocols and ErgoMixer",
    image: "https://ergoblockchain.org/og/sigma-protocols-explained.png",
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
    mainEntityOfPage: "https://ergoblockchain.org/technology/privacy-features",
    about: [
      { "@type": "Thing", name: "Zero-knowledge proof" },
      { "@type": "Thing", name: "Cryptographic privacy" },
      { "@type": "Thing", name: "Ring signatures" }
    ],
    proficiencyLevel: "Intermediate",
    technicalAudience: "Privacy advocates and cryptographers"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      {children}
    </>
  )
}
