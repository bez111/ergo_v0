import type { Metadata } from "next"
import GrantsClient from "./GrantsClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import {
  createFinancialServiceSchema,
  createFAQSchema,
  createEventSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export const metadata: Metadata = {
  title: "Ergo Grants Program | Funding for Blockchain Projects",
  description: "Get funding for your Ergo project. Grants for developers, researchers, and community builders. Build DeFi, infrastructure, tools, and applications on Ergo blockchain.",
  keywords: ["ergo grants", "blockchain funding", "developer grants", "crypto grants", "defi funding", "ergo foundation", "project funding", "open source grants"],
  alternates: {
    canonical: "https://ergoblockchain.org/ecosystem/grants"
  },
  openGraph: {
    title: "Ergo Grants - Fund Your Blockchain Innovation",
    description: "Apply for grants to build on Ergo. Support for developers, researchers, and community initiatives.",
    url: "https://ergoblockchain.org/ecosystem/grants",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/grants.png",
      width: 1200,
      height: 630,
      alt: "Ergo Grants Program"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Grants Program | Get Funded",
    description: "Funding for developers building on Ergo. Apply for grants today.",
    images: ["https://ergoblockchain.org/og/grants.png"],
    creator: "@ergoplatform",
    site: "@ergoplatform"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function GrantsPage() {
  // Centralized SEO schemas
  const grantsSchema = createFinancialServiceSchema({
    name: "Ergo Grants Program",
    description: "Funding program for projects building on Ergo blockchain",
    url: "https://ergoblockchain.org/ecosystem/grants",
    audienceType: "Developers, Researchers, Community Builders",
  })

  const faqSchema = createFAQSchema([
    {
      question: "Who can apply for Ergo grants?",
      answer: "Developers, researchers, community builders, and organizations working on projects that benefit the Ergo ecosystem can apply for grants.",
    },
    {
      question: "What types of projects get funded?",
      answer: "DeFi protocols, developer tools, infrastructure, educational content, community initiatives, and research projects that advance Ergo technology.",
    },
    {
      question: "How much funding is available?",
      answer: "Grant amounts vary based on project scope and impact, ranging from small community grants to substantial funding for core infrastructure projects.",
    },
    {
      question: "When will the grants program launch?",
      answer: "The Ergo Grants Program is expected to launch in Q3 2025. Sign up for updates to be notified when applications open.",
    },
  ])

  const eventSchema = createEventSchema({
    name: "Ergo Grants Program Launch",
    description: "Official launch of the Ergo ecosystem grants program",
    startDate: "2025-07-01",
    endDate: "2025-12-31",
    location: "https://ergoblockchain.org/ecosystem/grants",
  })

  const knowledgeGraph = generateKnowledgeGraph("ecosystem")

  return (
    <>
      {renderSchemaScripts([grantsSchema, faqSchema, eventSchema, knowledgeGraph])}
      <GrantsClient />
    </>
  )
} 