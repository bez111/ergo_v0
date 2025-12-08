import type { Metadata } from "next"
import LearnClient from "./LearnClient"
import { siteConfig } from "@/config/site-config"
import {
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const learnUrl = `${siteConfig.siteUrl}/learn`

// SEO Configuration
const SEO = {
  title: "Learn Ergo Development — ErgoScript Tutorials & Smart Contracts",
  description: "Master ErgoScript programming, eUTXO smart contracts, and Sigma protocols. Hands-on tutorials, structured learning paths, and expert mentorship for Ergo blockchain development.",
}

// FAQ Content
const FAQ_ITEMS = [
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

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SEO.title,
    description: SEO.description,
    keywords: [
      "ErgoScript tutorial", "Ergo smart contracts", "eUTXO programming",
      "Sigma protocols guide", "blockchain development course",
      "Ergo developer tutorial", "ErgoScript programming", "Ergo dApp development"
    ],
    alternates: { canonical: learnUrl },
    openGraph: {
      title: SEO.title,
      description: SEO.description,
      url: learnUrl,
      siteName: "Ergo Platform",
      images: [{ url: `${siteConfig.siteUrl}/og/hubs/learn.png`, width: 1200, height: 630, alt: "Ergo Learn — Build with Sigma Protocols" }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [`${siteConfig.siteUrl}/og/hubs/learn.png`],
      site: "@ergoplatform",
      creator: "@ergoplatform"
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 }
    }
  }
}

// Page Component
export default function LearnPage() {
  // Custom Course schema (complex, kept structured)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${learnUrl}#course`,
    name: "Ergo Learning Hub",
    description: "A structured set of paths that teach Ergo fundamentals, developer tooling, privacy design, and research-grade economics.",
    provider: { "@type": "Organization", name: "Ergo Platform", url: siteConfig.siteUrl },
    audience: { "@type": "Audience", audienceType: "Developers, founders, researchers, privacy builders" },
    educationalLevel: "Beginner to advanced",
    hasCourseInstance: [
      { "@type": "CourseInstance", name: "ErgoScript Builder Path", description: "Hands-on lessons for ErgoScript patterns, determinism, and deployment.", courseMode: "online", duration: "PT20H" },
      { "@type": "CourseInstance", name: "Privacy & Sigma Protocols", description: "Interactive explainer of Sigma-protocols, mixers, and selective disclosure flows.", courseMode: "online" },
      { "@type": "CourseInstance", name: "Research & Tokenomics Library", description: "Original whitepapers, Storage Rent models, and Autolykos research decks.", courseMode: "online" }
    ]
  }

  const schemas = [
    courseSchema,
    createBreadcrumbSchema([{ name: "Learn", href: "/learn" }]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <LearnClient />
    </>
  )
}
