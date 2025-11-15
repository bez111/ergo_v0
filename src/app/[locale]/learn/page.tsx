import type { Metadata } from "next"
import LearnClient from "./LearnClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

const learnUrl = "https://ergoblockchain.org/learn"

export async function generateMetadata(): Promise<Metadata> {
  const title = "Learn Ergo Development — ErgoScript Tutorials & Smart Contracts"
  const description = "Master ErgoScript programming, eUTXO smart contracts, and Sigma protocols. Hands-on tutorials, structured learning paths, and expert mentorship for Ergo blockchain development."

  return {
    title,
    description,
    keywords: [
      "ErgoScript tutorial",
      "Ergo smart contracts",
      "eUTXO programming",
      "Sigma protocols guide",
      "blockchain development course",
      "Ergo developer tutorial",
      "ErgoScript programming",
      "Ergo dApp development"
    ],
    alternates: {
      canonical: learnUrl
    },
    openGraph: {
      title,
      description,
      url: learnUrl,
      siteName: "Ergo Platform",
      images: [
        {
          url: "https://ergoblockchain.org/og/learn.png",
          width: 1200,
          height: 630,
          alt: "Ergo Learn — Build with Sigma Protocols"
        }
      ],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://ergoblockchain.org/og/learn.png"],
      site: "@ergoplatform",
      creator: "@ergoplatform"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  }
}

export default function LearnPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${learnUrl}#course`,
    name: "Ergo Learning Hub",
    description: "A structured set of paths that teach Ergo fundamentals, developer tooling, privacy design, and research-grade economics.",
    provider: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: "https://ergoblockchain.org"
    },
    audience: {
      "@type": "Audience",
      audienceType: "Developers, founders, researchers, privacy builders"
    },
    educationalLevel: "Beginner to advanced",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: "ErgoScript Builder Path",
        description: "Hands-on lessons that walk through ErgoScript patterns, determinism, and deployment.",
        courseMode: "online",
        duration: "PT20H"
      },
      {
        "@type": "CourseInstance",
        name: "Privacy & Sigma Protocols",
        description: "Interactive explainer of Σ-protocols, mixers, and selective disclosure flows.",
        courseMode: "online"
      },
      {
        "@type": "CourseInstance",
        name: "Research & Tokenomics Library",
        description: "Original whitepapers, Storage Rent models, and Autolykos research decks.",
        courseMode: "online"
      }
    ]
  }

  const learningResourcesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured learning resources",
    description: "Top hand-picked paths to get productive on Ergo.",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "ErgoScript Builder Path",
        description: "Deploy contracts, test locally, and hook into wallet UX.",
        provider: {
          "@type": "Organization",
          name: "Ergo Platform",
          url: learnUrl
        }
      },
      {
        "@type": "FAQPage",
        position: 2,
        name: "Ergo Learning FAQ",
        description: "Wallet setup, community onboarding, and key differences."
      },
      {
        "@type": "Article",
        position: 3,
        name: "Research Vault",
        description: "Storage Rent economics, Autolykos proofs, and governance proposals."
      }
    ]
  }

  const knowledgeGraph = generateKnowledgeGraph("learn")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourcesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <LearnClient />
    </>
  )
}