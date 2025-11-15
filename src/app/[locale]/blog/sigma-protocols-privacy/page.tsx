import type { Metadata } from "next"
import { SigmaProtocolsClient } from "./SigmaProtocolsClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/sigma-protocols-privacy`

export function generateMetadata(): Metadata {
  const title = "Ergo And Sigma Protocols: The Next Step In Blockchain Privacy"
  const description = "As first-gen privacy coins see a resurgence of activity, Ergo's composable zero-knowledge signatures offer new options for compliant confidentiality."
  
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Blockchain",
      title,
      description,
      images: [{ url: `${origin}/og/sigma-protocols-privacy.png`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${origin}/og/sigma-protocols-privacy.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: [
      "sigma protocols",
      "blockchain privacy",
      "zero knowledge proofs",
      "ergo privacy",
      "privacy coins",
      "confidential transactions",
      "zkp",
      "monero zcash comparison",
      "compliant privacy"
    ],
  }
}

export default function SigmaProtocolsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Ergo And Sigma Protocols: The Next Step In Blockchain Privacy",
    description: "As first-gen privacy coins see a resurgence of activity, Ergo's composable zero-knowledge signatures offer new options for compliant confidentiality.",
    image: `${origin}/og/sigma-protocols-privacy.png`,
    datePublished: "2024-11-14T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: origin
    },
    publisher: {
      "@type": "Organization", 
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`
      }
    },
    mainEntityOfPage: url,
    wordCount: 2200,
    timeRequired: "PT9M",
    inLanguage: "en",
    dependencies: "Basic understanding of blockchain privacy and cryptography",
    proficiencyLevel: "Intermediate", 
    genre: "Educational",
    technicalAudience: ["Privacy Advocates", "Blockchain Developers", "DeFi Users", "Compliance Officers"],
    about: [
      {
        "@type": "Thing",
        name: "Sigma Protocols",
        description: "Composable zero-knowledge proofs that enable flexible blockchain privacy"
      },
      {
        "@type": "Thing",
        name: "Zero-Knowledge Proofs",
        sameAs: "https://en.wikipedia.org/wiki/Zero-knowledge_proof"
      },
      {
        "@type": "Thing", 
        name: "Privacy Coins",
        sameAs: "https://en.wikipedia.org/wiki/Privacy_coin"
      },
      {
        "@type": "Thing",
        name: "Blockchain Privacy",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain#Privacy_and_identity"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Sigma Protocols Privacy", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What are Sigma Protocols?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sigma Protocols are a class of composable zero-knowledge proofs that allow users to prove mathematical statements without revealing underlying information. They enable flexible, programmable privacy on Ergo."
        }
      },
      {
        "@type": "Question", 
        name: "How do Sigma Protocols differ from ZCash's zkSNARKs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike zkSNARKs, Sigma Protocols don't require trusted setup, are more computationally efficient, and offer greater composability for complex privacy applications and DeFi use cases."
        }
      },
      {
        "@type": "Question",
        name: "Is privacy always-on like Monero?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Ergo's privacy is optional and programmable. Users can choose when to use privacy features, enabling compliance and auditability when needed while maintaining confidentiality when desired."
        }
      },
      {
        "@type": "Question",
        name: "Can Sigma Protocols be used for DeFi applications?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "Yes, Sigma Protocols can be applied to any transaction type, making them ideal for confidential DeFi, private voting, and other complex dApps beyond simple transfers."
        }
      },
      {
        "@type": "Question",
        name: "What makes Ergo's privacy model compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo's optional privacy allows users to selectively reveal information for compliance purposes. Users can prove ownership and transaction history when required while maintaining privacy in other contexts."
        }
      },
      {
        "@type": "Question",
        name: "How do Sigma Protocols compare to ring signatures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sigma Protocols can implement ring signatures and much more. They're more flexible and composable, allowing for complex privacy conditions like threshold signatures and programmable disclosure rules."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <SigmaProtocolsClient />
    </>
  )
}
