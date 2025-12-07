import type { Metadata } from "next"
import LearnClient from "./LearnClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { FAQSchema } from '@/components/seo/faq-schema'
import { SchemaTypes } from '@/lib/schema-ultimate'
import { siteConfig } from '@/config/site-config'

const learnUrl = "https://ergoblockchain.org/learn"

// FAQ data for learn page
const learnFAQ = [
  {
    question: "How do I start learning Ergo development?",
    answer: "Start with the Foundations track to understand eUTXO and ErgoScript basics. Then move to hands-on tutorials in the Developers track. Join the Discord developer channel for support and explore example contracts on GitHub."
  },
  {
    question: "What prerequisites do I need for ErgoScript?",
    answer: "Basic programming knowledge is helpful. Familiarity with functional programming concepts (like Scala or Haskell) makes ErgoScript easier, but it's not required. Understanding of blockchain concepts (UTXOs, transactions, addresses) is beneficial."
  },
  {
    question: "How long does it take to learn ErgoScript?",
    answer: "Basic ErgoScript takes 2-4 weeks with consistent practice. Building production dApps typically takes 2-3 months. The eUTXO model has a learning curve, but once understood, development becomes faster and safer than account-based chains."
  },
  {
    question: "Are there Ergo development courses?",
    answer: "Yes! The Learn hub offers structured paths: Foundations (basics), Developers (hands-on), Privacy (Sigma Protocols), and Research (advanced). Community members also create tutorials on YouTube and the Ergo blog."
  },
  {
    question: "Where can I find Ergo code examples?",
    answer: "Explore the Patterns section for reusable contract patterns, check GitHub repos of ecosystem projects, read technical blog articles, and browse the Ergo docs for code snippets. The /patterns page has copy-paste blueprints."
  }
]

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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: learnUrl
      }
    ]
  }

  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Learn Ergo Development",
    summary: "Master ErgoScript programming, eUTXO smart contracts, and Sigma protocols. Hands-on tutorials, structured learning paths, and expert mentorship.",
    url: learnUrl
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourcesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <FAQSchema faqs={learnFAQ} pageUrl={learnUrl} />
      <LearnClient />
    </>
  )
}