import type { Metadata } from "next"
import BabelFeesClient from "./BabelFeesClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'babelFees.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: ["babel fees", "ergo transaction fees", "pay fees with tokens", "defi fees", "blockchain fees", "ergo babel", "token fees", "gas fees alternative"],
    alternates: {
      canonical: "https://ergoblockchain.org/use/babel-fees"
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "https://ergoblockchain.org/use/babel-fees",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/babel-fees.png",
        width: 1200,
        height: 630,
        alt: "Ergo Babel Fees"
      }],
      type: "article",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://ergoblockchain.org/og/babel-fees.png"],
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
}

export default function BabelFeesPage() {
  // SEO схемы для Babel Fees
  const babelFeesSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/use/babel-fees",
    headline: "Babel Fees: Pay Transaction Fees with Any Token",
    description: "Technical guide to Ergo's Babel Fees system for flexible transaction fee payments",
    author: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString(),
    about: {
      "@type": "Thing",
      name: "Blockchain Transaction Fees",
      description: "Alternative fee payment methods in blockchain"
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What are Babel Fees?",
      answer: "Babel Fees allow users to pay transaction fees on Ergo using any token instead of ERG, making DeFi more accessible by removing the need to hold ERG for fees."
    },
    {
      question: "How do Babel Fees work?",
      answer: "Service providers accept tokens as payment for fees, then handle the ERG payment to miners behind the scenes, creating a seamless experience for users."
    },
    {
      question: "Which tokens can be used for Babel Fees?",
      answer: "Any token on Ergo can potentially be used for Babel Fees if a service provider supports it. Popular options include SigUSD, SigRSV, and major Ergo tokens."
    },
    {
      question: "Are Babel Fees more expensive than regular fees?",
      answer: "Babel Fees may include a small premium to compensate service providers, but the convenience often outweighs the minimal additional cost."
    }
  ])
  
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Babel Fees on Ergo",
    description: "Step-by-step guide to paying transaction fees with tokens",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose a supported dApp",
        text: "Select a dApp or wallet that supports Babel Fees"
      },
      {
        "@type": "HowToStep",
        name: "Select fee token",
        text: "Choose which token you want to use for paying fees"
      },
      {
        "@type": "HowToStep",
        name: "Execute transaction",
        text: "Complete your transaction with automatic fee conversion"
      }
    ]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('use-cases')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(babelFeesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <BabelFeesClient />
    </>
  )
} 