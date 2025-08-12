import type { Metadata } from "next"
import GrantsClient from "./GrantsClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

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
  // SEO схемы для грантов
  const grantsSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://ergoblockchain.org/ecosystem/grants",
    name: "Ergo Grants Program",
    description: "Funding program for projects building on Ergo blockchain",
    provider: {
      "@type": "Organization",
      name: "Ergo Foundation",
      url: "https://ergoblockchain.org"
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide"
    },
    audience: {
      "@type": "Audience",
      audienceType: "Developers, Researchers, Community Builders"
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://ergoblockchain.org/ecosystem/grants",
      serviceType: "Online Application"
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "Who can apply for Ergo grants?",
      answer: "Developers, researchers, community builders, and organizations working on projects that benefit the Ergo ecosystem can apply for grants."
    },
    {
      question: "What types of projects get funded?",
      answer: "DeFi protocols, developer tools, infrastructure, educational content, community initiatives, and research projects that advance Ergo technology."
    },
    {
      question: "How much funding is available?",
      answer: "Grant amounts vary based on project scope and impact, ranging from small community grants to substantial funding for core infrastructure projects."
    },
    {
      question: "When will the grants program launch?",
      answer: "The Ergo Grants Program is expected to launch in Q3 2025. Sign up for updates to be notified when applications open."
    }
  ])
  
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Ergo Grants Program Launch",
    description: "Official launch of the Ergo ecosystem grants program",
    startDate: "2025-07-01",
    endDate: "2025-12-31",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://ergoblockchain.org/ecosystem/grants"
    },
    organizer: {
      "@type": "Organization",
      name: "Ergo Foundation",
      url: "https://ergoblockchain.org"
    }
  }
  
  const knowledgeGraph = generateKnowledgeGraph('ecosystem')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grantsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <GrantsClient />
    </>
  )
} 