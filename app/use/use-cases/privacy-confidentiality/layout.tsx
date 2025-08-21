import { Metadata } from "next"
import { SchemaOrg } from "@/components/seo/schema-org"

export const metadata: Metadata = {
  title: "Privacy & Confidentiality on Ergo | Financial Privacy Solutions",
  description: "Build privacy-preserving applications on Ergo. Non-custodial mixers, stealth addresses, zero-knowledge proofs, and ring signatures for complete financial privacy.",
  keywords: "privacy, confidentiality, ErgoMixer, stealth addresses, zero-knowledge proofs, ring signatures, financial privacy, anonymous transactions",
  openGraph: {
    title: "Privacy & Confidentiality on Ergo",
    description: "Financial privacy in an increasingly surveilled world. Non-custodial mixers and zero-knowledge proofs.",
    images: ["/og-privacy.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/privacy-confidentiality",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy & Confidentiality on Ergo",
    description: "Build privacy-preserving applications with ErgoMixer and Sigma protocols",
    images: ["/og-privacy.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/privacy-confidentiality",
  },
}

export default function PrivacyConfidentialityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Privacy & Confidentiality on Ergo",
          description: "Comprehensive guide to privacy technologies and applications on Ergo blockchain",
          author: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
          },
          publisher: {
            "@type": "Organization",
            name: "Ergo Platform",
            url: "https://ergoplatform.org",
            logo: {
              "@type": "ImageObject",
              url: "https://ergoblockchain.org/logo.png",
            },
          },
          image: "https://ergoblockchain.org/og-privacy.png",
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString(),
          keywords: "privacy, ErgoMixer, stealth addresses, zero-knowledge proofs",
        }}
      />
      
      <SchemaOrg
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: "How to Use Privacy Features on Ergo",
          description: "Step-by-step guide to using privacy tools on Ergo",
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Set up Ergo wallet",
              text: "Install a privacy-focused Ergo wallet",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Access ErgoMixer",
              text: "Connect to ErgoMixer through Tor for enhanced privacy",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Configure mixing",
              text: "Set mixing rounds and anonymity parameters",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Mix coins",
              text: "Submit coins for mixing and wait for completion",
            },
          ],
        }}
      />
      
      {children}
    </>
  )
} 