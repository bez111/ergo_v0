import type { Metadata } from "next"
import { ErgoIn5MinutesClient } from "./ErgoIn5MinutesClient"

export const revalidate = 86400

const origin = "https://ergoblockchain.org"
const url = `${origin}/blog/ergo-in-5-minutes`

export function generateMetadata(): Metadata {
  const title = "Ergo in 5 Minutes: Why It Matters & How It Works"
  const description = "Proof-of-Work blockchain with eUTXO and Sigma protocols: fair launch (no ICO), privacy, Storage Rent, and the Ergo DeFi ecosystem."
  
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
      images: [{ url: `${origin}/og/ergo-5-minutes.png`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${origin}/og/ergo-5-minutes.png`],
      site: "@BuildOnErgo",
      creator: "@BuildOnErgo",
    },
    robots: { index: true, follow: true },
    keywords: [
      "ergo blockchain",
      "proof of work",
      "eutxo model", 
      "sigma protocols",
      "ergoscript",
      "storage rent",
      "fair launch",
      "privacy blockchain",
      "defi ergo"
    ],
  }
}

export default function ErgoIn5MinutesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Ergo in 5 Minutes: Why It Matters & How It Works",
    description: "Proof-of-Work blockchain with eUTXO and Sigma protocols: fair launch (no ICO), privacy, Storage Rent, and the Ergo DeFi ecosystem.",
    image: `${origin}/og/ergo-5-minutes.png`,
    datePublished: "2024-01-01T00:00:00Z",
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
    wordCount: 1500,
    timeRequired: "PT5M",
    inLanguage: "en",
    about: [
      {
        "@type": "Thing",
        name: "Blockchain Technology",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain"
      },
      {
        "@type": "Thing", 
        name: "Proof of Work",
        sameAs: "https://en.wikipedia.org/wiki/Proof_of_work"
      },
      {
        "@type": "Thing",
        name: "Smart Contracts",
        sameAs: "https://en.wikipedia.org/wiki/Smart_contract"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Ergo in 5 Minutes", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Ergo blockchain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo is a Proof-of-Work blockchain that blends Bitcoin-level security with the eUTXO smart-contract model and Sigma-protocol privacy to power secure, auditable DeFi."
        }
      },
      {
        "@type": "Question", 
        name: "How is Ergo different from Ethereum and Bitcoin (eUTXO vs account)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo uses eUTXO, attaching conditions to outputs for deterministic, easily parallelized execution—avoiding many global-state side effects seen in account-based chains, while extending Bitcoin's UTXO with rich programmability."
        }
      },
      {
        "@type": "Question",
        name: "What are Sigma protocols on Ergo?", 
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sigma protocols are native zero-knowledge proofs (AND/OR, threshold, ring) that enable auditable privacy—you keep details confidential yet can prove compliance or selectively disclose when required."
        }
      },
      {
        "@type": "Question",
        name: "What is storage rent on Ergo?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "Storage rent is a small fee on long-inactive boxes (UTXOs) that recycles lost ERG to fund network security; active users avoid it simply by moving coins periodically."
        }
      },
      {
        "@type": "Question",
        name: "Was there an ICO or pre-mine (fair launch)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No—ERG had a fair launch with Proof-of-Work only, no ICO and no pre-mine, aligning incentives and decentralization from day one."
        }
      },
      {
        "@type": "Question",
        name: "What is Autolykos and can I mine Ergo with GPUs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Autolykos is Ergo's memory-hard PoW algorithm, designed to be GPU-friendly and more resistant to ASIC centralization; yes, you can mine ERG with consumer-grade GPUs."
        }
      },
      {
        "@type": "Question",
        name: "What can I build or use on Ergo (DeFi & apps)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo supports DEX trading (e.g., Spectrum), algorithmic stablecoins (SigmaUSD), DAO tooling (Paideia), NFTs, and privacy-preserving apps—using ErgoScript and the eUTXO model."
        }
      },
      {
        "@type": "Question",
        name: "Is Ergo a 'privacy coin'? (compliance & audits)",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Privacy on Ergo is optional and policy-driven: Sigma proofs enable selective disclosure and auditability, making privacy features compatible with compliance workflows."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <ErgoIn5MinutesClient />
    </>
  )
}
