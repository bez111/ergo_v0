import type { Metadata } from "next"
import BabelFeesClient from "./BabelFeesClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import {
  createTechArticleSchema,
  createFAQSchema,
  createHowToSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export async function generateMetadata(): Promise<Metadata> {
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
  // Centralized SEO schemas
  const techArticleSchema = createTechArticleSchema("/technology/babel-fees", {
    headline: "Babel Fees: Pay Transaction Fees with Any Token",
    description: "Revolutionary fee payment system allowing users to pay Ergo transaction fees with any token through automated intermediaries",
    about: [{ name: "Babel Fees" }],
  })

  const faqSchema = createFAQSchema([
    {
      question: "What are Babel Fees?",
      answer: "Babel Fees allow users to pay Ergo transaction fees with any token instead of ERG, through automated intermediaries who handle the conversion.",
    },
    {
      question: "How do Babel Fees work?",
      answer: "Users offer tokens as payment, intermediaries detect these offers and pay the ERG fee to miners, receiving the offered tokens in return.",
    },
    {
      question: "Which tokens can be used for fees?",
      answer: "Any token can potentially be used, as long as there are intermediaries willing to accept it and convert it to ERG.",
    },
    {
      question: "Are Babel Fees more expensive?",
      answer: "There may be a small premium due to intermediary services, but the convenience often outweighs the minimal additional cost.",
    },
  ])

  const howToSchema = createHowToSchema({
    name: "How to Use Babel Fees",
    description: "Step-by-step guide to paying transaction fees with any token using Babel Fees",
    steps: [
      { name: "Choose a dApp", text: "Select a dApp that supports Babel Fees functionality" },
      { name: "Select your token", text: "Choose which token you want to use to pay the transaction fee" },
      { name: "Execute transaction", text: "Complete the transaction - intermediaries will automatically handle the ERG conversion" },
    ],
  })

  const knowledgeGraph = generateKnowledgeGraph("technology")

  return (
    <>
      {renderSchemaScripts([techArticleSchema, faqSchema, howToSchema, knowledgeGraph])}
      <BabelFeesClient />
    </>
  )
} 
