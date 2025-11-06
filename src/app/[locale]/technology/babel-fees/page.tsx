import type { Metadata } from "next"
import BabelFeesClient from "./BabelFeesClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Babel Fees | Pay Transaction Fees with Any Token - Ergo Technology",
    description: "Learn how Babel Fees allow users to pay Ergo transaction fees with any token through automated intermediaries. Revolutionary UX improvement for blockchain transactions.",
    keywords: ["babel fees", "ergo transaction fees", "pay fees with tokens", "defi fees", "blockchain fees", "ergo babel", "token fees", "gas fees alternative", "ergo technology"],
    alternates: {
      canonical: "https://ergoblockchain.org/technology/babel-fees"
    },
    openGraph: {
      title: "Babel Fees - Pay Transaction Fees with Any Token | Ergo Technology",
      description: "Revolutionary fee payment system allowing users to pay Ergo transaction fees with any token through automated intermediaries.",
      url: "https://ergoblockchain.org/technology/babel-fees",
      siteName: "Ergo Platform",
      images: [{
        url: "https://ergoblockchain.org/og/babel-fees.png",
        width: 1200,
        height: 630,
        alt: "Ergo Babel Fees Technology"
      }],
      type: "article",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Babel Fees - Pay Fees with Any Token | Ergo",
      description: "Revolutionary fee payment system on Ergo blockchain - pay transaction fees with any token!",
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
    "@id": "https://ergoblockchain.org/technology/babel-fees",
    headline: "Babel Fees: Pay Transaction Fees with Any Token",
    description: "Revolutionary fee payment system allowing users to pay Ergo transaction fees with any token through automated intermediaries",
    author: {
      "@type": "Organization",
      name: "Ergo Platform"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString(),
    about: {
      "@type": "Thing",
      name: "Babel Fees",
      description: "Technology that enables paying blockchain transaction fees with any token"
    }
  }
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What are Babel Fees?",
      answer: "Babel Fees allow users to pay Ergo transaction fees with any token instead of ERG, through automated intermediaries who handle the conversion."
    },
    {
      question: "How do Babel Fees work?",
      answer: "Users offer tokens as payment, intermediaries detect these offers and pay the ERG fee to miners, receiving the offered tokens in return."
    },
    {
      question: "Which tokens can be used for fees?",
      answer: "Any token can potentially be used, as long as there are intermediaries willing to accept it and convert it to ERG."
    },
    {
      question: "Are Babel Fees more expensive?",
      answer: "There may be a small premium due to intermediary services, but the convenience often outweighs the minimal additional cost."
    }
  ])
  
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Babel Fees",
    description: "Step-by-step guide to paying transaction fees with any token using Babel Fees",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose a dApp",
        text: "Select a dApp that supports Babel Fees functionality"
      },
      {
        "@type": "HowToStep",
        name: "Select your token",
        text: "Choose which token you want to use to pay the transaction fee"
      },
      {
        "@type": "HowToStep",
        name: "Execute transaction",
        text: "Complete the transaction - intermediaries will automatically handle the ERG conversion"
      }
    ]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('technology')
  
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
