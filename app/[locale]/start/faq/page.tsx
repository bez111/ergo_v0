import type { Metadata } from "next"
import FAQClientLocalized from "./FAQClientLocalized"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"

export const metadata: Metadata = {
  title: "Ergo FAQ | Frequently Asked Questions About Blockchain",
  description: "Get answers to common questions about Ergo blockchain. Learn about mining, wallets, smart contracts, tokenomics, and technical specifications. Beginner-friendly explanations.",
  keywords: ["ergo faq", "blockchain questions", "ergo help", "crypto faq", "mining questions", "wallet help", "smart contracts faq", "ergo support"],
  alternates: {
    canonical: "https://ergoblockchain.org/start/faq"
  },
  openGraph: {
    title: "Ergo FAQ - All Your Questions Answered",
    description: "Complete FAQ covering Ergo basics, technology, mining, wallets, and development.",
    url: "https://ergoblockchain.org/start/faq",
    siteName: "Ergo Platform",
    images: [{
      url: "https://ergoblockchain.org/og/faq.png",
      width: 1200,
      height: 630,
      alt: "Ergo FAQ"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo FAQ | Quick Answers to Common Questions",
    description: "Everything you need to know about Ergo blockchain in one place.",
    images: ["https://ergoblockchain.org/og/faq.png"]
  }
}

export default function FAQPage() {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ergoblockchain.org/start/faq",
    name: "Ergo Frequently Asked Questions",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Ergo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ergo is a next-generation Proof-of-Work blockchain platform with smart contracts, designed for financial contracts and DeFi applications."
        }
      },
      {
        "@type": "Question",
        name: "How do I get an Ergo wallet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can use Nautilus (browser extension), Satergo (desktop), or SAFEW (mobile) wallets. All are free and open-source."
        }
      },
      {
        "@type": "Question",
        name: "Can I mine Ergo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Ergo uses the Autolykos v2 algorithm optimized for GPU mining. You need a GPU with at least 4GB VRAM."
        }
      }
    ]
  }
  
  const knowledgeGraph = generateKnowledgeGraph('faq')
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      
      <FAQClientLocalized />
    </>
  )
} 