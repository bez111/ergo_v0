import type { Metadata } from "next"
import NiPoPoWsExplainedClient from "./NiPoPoWsExplainedClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/nipopows-explained`

export function generateMetadata(): Metadata {
  const title = "NiPoPoWs: Trustless Light Clients & Bridges on Ergo"
  const description = "Learn how NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) enable lightweight blockchain verification, stateless clients, and trustless cross-chain bridges on Ergo."
  
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title,
      description,
      images: [{ 
        url: `${origin}/og/nipopows-explained.png`, 
        width: 1200, 
        height: 630,
        alt: "How NiPoPoWs Enable Trustless Light Clients And Cross-Chain Bridges On Ergo"
      }],
      locale: "en_US",
      publishedTime: "2024-01-15T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Ergo Team"],
      tags: ["NiPoPoW", "Blockchain", "Light Clients", "Cross-Chain", "Proof-of-Work"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/blog-default.svg`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: [
      "nipopow",
      "non-interactive proofs of proof-of-work",
      "ergo nipopow",
      "popow",
      "proof-of-work light client",
      "lightweight blockchain proofs",
      "blockchain scalability",
      "trustless bridges",
      "superblocks",
      "succinct proofs",
      "bitcoin spv",
      "stateless clients",
      "interoperability"
    ],
  }
}

export default function NiPoPoWsExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "NiPoPoWs: Trustless Light Clients & Bridges on Ergo",
    description: "Learn how NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) enable lightweight blockchain verification, stateless clients, and trustless cross-chain bridges on Ergo.",
    image: `${origin}/og/nipopows-explained.png`,
    datePublished: "2024-01-15T00:00:00Z",
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
    wordCount: 1200,
    timeRequired: "PT8M",
    inLanguage: "en",
    about: [
      {
        "@type": "Thing",
        name: "Non-Interactive Proofs of Proof-of-Work",
        sameAs: "https://eprint.iacr.org/2017/963.pdf"
      },
      {
        "@type": "Thing", 
        name: "Light Client",
        sameAs: "https://en.wikipedia.org/wiki/Light_client"
      },
      {
        "@type": "Thing",
        name: "Cross-Chain Bridge",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain_bridge"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "NiPoPoWs Explained", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What are NiPoPoWs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) are cryptographic proofs that allow verification of blockchain properties without downloading the entire chain. They use superblocks to create compact proofs that maintain security guarantees."
        }
      },
      {
        "@type": "Question",
        name: "How do NiPoPoWs differ from Bitcoin's SPV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike SPV which requires downloading all block headers, NiPoPoWs use superblocks to create logarithmically-sized proofs. This makes them much more efficient for light clients and cross-chain applications."
        }
      },
      {
        "@type": "Question",
        name: "What are the main use cases for NiPoPoWs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NiPoPoWs enable trustless light clients, cross-chain bridges, mobile wallets, IoT applications, and any scenario where you need to verify blockchain state without full node requirements."
        }
      },
      {
        "@type": "Question",
        name: "How do NiPoPoWs enable cross-chain bridges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NiPoPoWs allow one blockchain to verify events on another without trusting intermediaries. A smart contract on Chain B can verify a transaction happened on Ergo by checking a compact NiPoPoW proof, enabling trustless asset transfers."
        }
      },
      {
        "@type": "Question",
        name: "What are superblocks in NiPoPoWs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Superblocks are rare blocks with unusually high proof-of-work difficulty. They form a 'spine' of the blockchain that can be verified quickly. The probability of finding superblocks follows a geometric distribution, enabling logarithmic proof sizes."
        }
      },
      {
        "@type": "Question",
        name: "Can NiPoPoWs work with Bitcoin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bitcoin's block headers don't natively support NiPoPoWs. Ergo was designed from the start with NiPoPoW-friendly headers, making it one of the few PoW chains with native support for these proofs."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <NiPoPoWsExplainedClient />
    </>
  )
}
