
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next"
import QuizClient from "./QuizClient"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo Quiz | Find Your Path in Blockchain",
  description: "Take our interactive quiz to discover your ideal path in the Ergo ecosystem. Whether you're a developer, miner, investor, or enthusiast, find personalized recommendations.",
  keywords: ["ergo quiz", "blockchain quiz", "crypto personality test", "find your path", "blockchain career", "ergo ecosystem", "interactive quiz", "crypto quiz"],
  alternates: {
    canonical: "https://ergoblockchain.org/start/quiz"
  },
  openGraph: {
    title: "Ergo Quiz - Discover Your Blockchain Path",
    description: "Interactive quiz to find your perfect role in the Ergo ecosystem.",
    url: "https://ergoblockchain.org/start/quiz",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/quiz.png",
      width: 1200,
      height: 630,
      alt: "Ergo Quiz"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Path in Ergo | Interactive Quiz",
    description: "Developer? Miner? Investor? Take the quiz to find your perfect fit.",
    images: ["https://ergoblockchain.org/og/quiz.png"]
  }
}

export default function QuizPage() {
  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": "https://ergoblockchain.org/start/quiz",
    name: "Ergo Ecosystem Path Finder Quiz",
    description: "Interactive quiz to help users find their ideal path in the Ergo ecosystem",
    educationalLevel: "Beginner",
    learningResourceType: "Quiz",
    timeRequired: "PT5M",
    isAccessibleForFree: true
  }
  
  const knowledgeGraph = generateKnowledgeGraph('quiz')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <QuizClient />
    </>
  )
} 