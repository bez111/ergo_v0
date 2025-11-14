import type { Metadata } from "next"
import { SigmaProtocolsExplainedClient } from "./SigmaProtocolsExplainedClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/sigma-protocols-explained`

export function generateMetadata(): Metadata {
  const title = "Sigma Protocols Explained (Without A PhD)"
  const seoTitle = "Sigma Protocols Explained: Zero-Knowledge Privacy Made Simple | Ergo"
  const description = "A plain-English guide to Sigma Protocols – the powerful, flexible zero-knowledge cryptography that powers Ergo's privacy and smart contracts."
  const optimizedDescription = "Learn Sigma Protocols through simple analogies and real-world examples. No advanced mathematics required! Discover how Ergo's composable zero-knowledge proofs enable programmable privacy."
  
  return {
    title: seoTitle,
    description: optimizedDescription,
    keywords: [
      "sigma protocols explained",
      "zero knowledge proofs tutorial",
      "blockchain privacy guide",
      "ergo cryptography beginner",
      "zkp without phd",
      "accessible cryptography",
      "programmable privacy",
      "composable zero knowledge",
      "sigma protocols vs zksnark",
      "ergo privacy features"
    ],
    authors: [{ name: "Privacy Team" }],
    creator: "Privacy Team",
    publisher: "Ergo Platform",
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Platform",
      title: seoTitle,
      description: optimizedDescription,
      images: [{ 
        url: `${origin}/og/sigma-protocols-explained.png`, 
        width: 1200, 
        height: 630,
        alt: "Sigma Protocols Explained - Zero-Knowledge Privacy Made Simple"
      }],
      locale: "en_US",
      publishedTime: "2024-11-14T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Privacy Team"],
      tags: ["Sigma Protocols", "Zero Knowledge", "Privacy", "Cryptography", "Beginner Guide"]
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: optimizedDescription,
      images: [`${origin}/og/sigma-protocols-explained.png`],
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
  }
}

export default function SigmaProtocolsExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Sigma Protocols Explained (Without A PhD)",
    alternativeHeadline: "Zero-Knowledge Privacy Made Simple: A Beginner's Guide to Sigma Protocols",
    description: "Learn Sigma Protocols through simple analogies and real-world examples. No advanced mathematics required! Discover how Ergo's composable zero-knowledge proofs enable programmable privacy.",
    image: {
      "@type": "ImageObject",
      url: `${origin}/og/sigma-protocols-explained.png`,
      width: 1200,
      height: 630,
      caption: "Sigma Protocols Explained - Zero-Knowledge Privacy Made Simple"
    },
    datePublished: "2024-11-14T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      "@id": `${origin}#organization`,
      name: "Ergo Platform Privacy Team",
      url: origin,
      sameAs: [
        "https://twitter.com/ergoplatform",
        "https://github.com/ergoplatform"
      ]
    },
    publisher: {
      "@type": "Organization", 
      "@id": `${origin}#organization`,
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`,
        width: 512,
        height: 512
      },
      sameAs: [
        "https://twitter.com/ergoplatform",
        "https://github.com/ergoplatform",
        "https://discord.gg/ergo-platform-668903786361651200"
      ]
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    wordCount: 2400,
    timeRequired: "PT10M",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    creativeWorkStatus: "Published",
    dependencies: "No prior cryptography knowledge required",
    proficiencyLevel: "Beginner", 
    genre: "Educational",
    learningResourceType: "Tutorial",
    educationalLevel: "Beginner",
    typicalAgeRange: "18-",
    technicalAudience: ["Beginners", "Non-Technical Users", "Developers", "Privacy Enthusiasts", "Blockchain Students"],
    keywords: "sigma protocols, zero knowledge proofs, blockchain privacy, ergo cryptography, zkp tutorial, accessible cryptography, programmable privacy",
    articleSection: "Privacy",
    articleBody: "A comprehensive beginner-friendly guide to understanding Sigma Protocols through simple analogies and practical examples.",
    about: [
      {
        "@type": "Thing",
        name: "Sigma Protocols",
        description: "Interactive zero-knowledge proofs with composable properties that enable flexible privacy solutions",
        url: "https://en.wikipedia.org/wiki/Proof_of_knowledge"
      },
      {
        "@type": "Thing",
        name: "Zero-Knowledge Proofs",
        sameAs: "https://en.wikipedia.org/wiki/Zero-knowledge_proof"
      },
      {
        "@type": "Thing", 
        name: "Cryptography",
        sameAs: "https://en.wikipedia.org/wiki/Cryptography"
      },
      {
        "@type": "Thing",
        name: "Blockchain Privacy",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain#Privacy_and_identity"
      },
      {
        "@type": "Thing",
        name: "Ergo Platform",
        sameAs: "https://en.wikipedia.org/wiki/Ergo_(cryptocurrency)"
      }
    ],
    mentions: [
      {
        "@type": "SoftwareApplication",
        name: "ErgoMixer",
        description: "Privacy mixer application built on Ergo using Sigma Protocols"
      },
      {
        "@type": "SoftwareApplication", 
        name: "ZCash",
        description: "Privacy-focused cryptocurrency using zkSNARKs"
      },
      {
        "@type": "SoftwareApplication",
        name: "Monero", 
        description: "Privacy-focused cryptocurrency using ring signatures"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Sigma Protocols Explained", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What are Sigma Protocols in simple terms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sigma Protocols are a way to prove you know something (like a password or secret) without actually revealing what that something is. Think of it like proving you can unlock your phone without showing anyone your PIN code."
        }
      },
      {
        "@type": "Question", 
        name: "How do Sigma Protocols work with a simple example?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Imagine proving a dice roll is greater than 3 without showing the number. You cover faces 4, 5, 6 with stickers, roll the dice. If a sticker shows up, it proves the number is >3 without revealing the exact number."
        }
      },
      {
        "@type": "Question",
        name: "What makes Sigma Protocols composable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sigma Protocols can be combined like Lego blocks using logical operators (AND, OR). You can prove 'I know secret A OR secret B' or 'I know secret X AND secret Y' without revealing any of the actual secrets."
        }
      },
      {
        "@type": "Question",
        name: "Do I need a PhD to understand Sigma Protocols?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "No! While the underlying math is complex, the concepts can be understood through simple analogies like combination locks, dice games, and card tricks. You don't need advanced mathematics to grasp how they work."
        }
      },
      {
        "@type": "Question",
        name: "How are Sigma Protocols different from other privacy technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sigma Protocols are lightweight, composable, and don't require trusted setup. Unlike ZCash's heavy zkSNARKs or Monero's always-on privacy, they offer flexible, optional privacy that can be combined in creative ways."
        }
      },
      {
        "@type": "Question",
        name: "What can you build with Sigma Protocols?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can build threshold signatures, confidential voting systems, private DeFi applications, ring signatures, and any application requiring flexible privacy with selective disclosure capabilities."
        }
      },
      {
        "@type": "Question",
        name: "Are Sigma Protocols secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sigma Protocols are cryptographically secure and have been extensively studied in academic literature. They provide strong privacy guarantees while being computationally efficient."
        }
      }
    ]
  }

  // Additional SEO schemas
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: "How to Understand Sigma Protocols Without Advanced Mathematics",
    description: "Step-by-step guide to learning Sigma Protocols through simple analogies and examples",
    image: `${origin}/og/sigma-protocols-explained.png`,
    totalTime: "PT10M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0"
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Basic understanding of passwords and locks"
      }
    ],
    tool: [
      {
        "@type": "HowToTool", 
        name: "Web browser for reading examples"
      }
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Learn the basics",
        text: "Start with simple analogies like bike locks and phone PINs to understand zero-knowledge proofs",
        url: `${url}#zkp-matter`
      },
      {
        "@type": "HowToStep",
        name: "Understand composability",
        text: "Learn how Sigma Protocols work like Lego blocks that can be combined using AND/OR logic",
        url: `${url}#what-are-sigma`
      },
      {
        "@type": "HowToStep",
        name: "Compare technologies",
        text: "See how Sigma Protocols differ from other privacy technologies like ZCash and Monero",
        url: `${url}#comparison`
      }
    ]
  }

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}#course`,
    name: "Sigma Protocols Explained (Without A PhD)",
    description: "A beginner-friendly course on understanding Sigma Protocols and zero-knowledge cryptography",
    provider: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: origin
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT10M",
      instructor: {
        "@type": "Organization",
        name: "Ergo Platform Privacy Team"
      }
    },
    educationalCredentialAwarded: "Certificate of Completion",
    educationalLevel: "Beginner",
    teaches: [
      "Zero-knowledge proof concepts",
      "Sigma Protocol fundamentals", 
      "Privacy technology comparison",
      "Composable cryptography"
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      
      <SigmaProtocolsExplainedClient />
    </>
  )
}
