import type { Metadata } from "next"
import AutolykosArticleClient from "./AutolykosArticleClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/autolykos-proof-of-work`

export function generateMetadata(): Metadata {
  const title = "Autolykos: Ergo's Sustainable GPU Mining Algorithm"
  const description =
    "Explore Autolykos, Ergo's memory-hard, ASIC-resistant proof-of-work algorithm. Learn why GPU-friendly mining ensures decentralization and long-term sustainability."

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
      images: [{ url: `${origin}/og/autolykos-proof-of-work.png`, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      publishedTime: "2024-11-19T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Ergo Team"],
      tags: ["Autolykos", "Proof-of-Work", "GPU Mining", "ASIC Resistance"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/autolykos-proof-of-work.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { 
      index: true, 
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    keywords: [
      "Autolykos mining",
      "Ergo proof-of-work",
      "ASIC resistant PoW",
      "GPU mining Ergo",
      "sustainable proof of work",
      "memory hard PoW",
      "ergo mining algorithm",
      "decentralized mining",
      "fair mining",
      "GPU friendly crypto"
    ],
  }
}

export default function AutolykosProofOfWorkPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Autolykos: Ergo's Sustainable GPU Mining Algorithm",
    description:
      "Autolykos is the Ergo mining algorithm: a memory-hard proof-of-work designed for ASIC-resistant mining, sustainable PoW, and a more decentralised, GPU-friendly Ergo blockchain.",
    image: `${origin}/og/autolykos-proof-of-work.png`,
    datePublished: "2024-11-19T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: origin,
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`,
      },
    },
    mainEntityOfPage: url,
    wordCount: 2400,
    timeRequired: "PT10M",
    inLanguage: "en",
    proficiencyLevel: "Intermediate",
    genre: "Educational",
    technicalAudience: ["Miners", "Blockchain Developers", "Cryptocurrency Enthusiasts"],
    about: [
      {
        "@type": "Thing",
        name: "Proof of Work",
        sameAs: "https://en.wikipedia.org/wiki/Proof_of_work"
      },
      {
        "@type": "Thing",
        name: "GPU Mining",
        sameAs: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
      },
      {
        "@type": "Thing",
        name: "ASIC Resistance",
        description: "Mining algorithm design that prevents specialized hardware from dominating"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Autolykos Proof-of-Work", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Autolykos and why is it important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Autolykos is Ergo's memory-hard proof-of-work mining algorithm designed to be ASIC-resistant. It ensures fair mining by requiring significant RAM (4GB+), making it accessible to regular GPU miners rather than specialized hardware manufacturers."
        }
      },
      {
        "@type": "Question",
        name: "Can I mine Ergo with a GPU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Ergo is designed for GPU mining. Any modern GPU with 4GB+ VRAM can mine ERG profitably. Popular choices include NVIDIA GTX 1660, RTX 3060, and AMD RX 580/5700 series."
        }
      },
      {
        "@type": "Question",
        name: "How does Autolykos prevent ASIC dominance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Autolykos uses memory-hard puzzles that require large amounts of RAM access. This makes ASICs impractical since memory is expensive to integrate, leveling the playing field for consumer GPUs."
        }
      },
      {
        "@type": "Question",
        name: "Is Ergo mining profitable in 2024?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profitability depends on electricity costs and GPU efficiency. Ergo's ASIC resistance means GPUs remain competitive, and the algorithm is power-efficient compared to Bitcoin mining."
        }
      },
      {
        "@type": "Question",
        name: "What makes Autolykos sustainable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Autolykos is more energy-efficient than SHA-256 mining, uses existing consumer hardware (GPUs), and maintains decentralization by preventing mining centralization through ASIC farms."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <AutolykosArticleClient />
    </>
  )
}


