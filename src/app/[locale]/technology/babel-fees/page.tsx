import type { Metadata } from "next"
import BabelFeesClient from "./BabelFeesClient"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import {
  createTechArticleSchema,
  createFAQSchema,
  createHowToSchema,
  getAlternates,
  getCanonicalUrl,
  getOgLocale,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "Babel Fees | Supported Token Fee Paths - Ergo Technology",
    description: "Learn how Babel Fees let users cover Ergo transaction fees through supported token-to-ERG conversion paths while miners still receive ERG.",
    keywords: ["babel fees", "ergo transaction fees", "pay fees with tokens", "defi fees", "blockchain fees", "ergo babel", "token fees", "gas fees alternative", "ergo technology"],
    alternates: getAlternates('/technology/babel-fees', locale),
    openGraph: {
      title: "Babel Fees - Supported Token Fee Paths | Ergo Technology",
      description: "Fee abstraction on Ergo: supported token-to-ERG paths let users cover fees while miners still receive ERG.",
      url: getCanonicalUrl('/technology/babel-fees', locale),
      siteName: "Ergo Platform",
      images: [{
        url: "https://www.ergoblockchain.org/og/babel-fees.jpg",
        width: 1200,
        height: 630,
        alt: "Ergo Babel Fees Technology"
      }],
      type: "article",
      locale: getOgLocale(locale)
    },
    twitter: {
      card: "summary_large_image",
      title: "Babel Fees - Supported Token Fee Paths | Ergo",
      description: "Learn how supported token-to-ERG fee paths improve Ergo UX.",
      images: ["https://www.ergoblockchain.org/og/babel-fees.jpg"],
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
    headline: "Babel Fees: Supported Token Fee Paths",
    description: "Fee abstraction that lets users cover Ergo transaction fees through supported token-to-ERG paths while miners still receive ERG",
    about: [{ name: "Babel Fees" }],
  })

  const faqSchema = createFAQSchema([
    {
      question: "What are Babel Fees?",
      answer: "Babel Fees allow users to cover Ergo transaction fees through supported token-to-ERG conversion paths instead of manually pre-funding ERG for every transaction.",
    },
    {
      question: "How do Babel Fees work?",
      answer: "Users offer tokens as payment, intermediaries detect these offers and pay the ERG fee to miners, receiving the offered tokens in return.",
    },
    {
      question: "Which tokens can be used for fees?",
      answer: "A token can be used only where a Babel box or intermediary is willing to accept that token and provide the required ERG fee coverage.",
    },
    {
      question: "Are Babel Fees more expensive?",
      answer: "There may be a small premium due to intermediary services, but the convenience often outweighs the minimal additional cost.",
    },
  ])

  const howToSchema = createHowToSchema({
    name: "How to Use Babel Fees",
    description: "Step-by-step guide to paying transaction fees through supported token paths using Babel Fees",
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
