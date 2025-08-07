import { StructuredData } from './structured-data'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
  pageName?: string
}

export function FAQSchema({ items, pageName = "Ergo Platform FAQ" }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageName,
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return <StructuredData data={faqSchema} />
}

// Pre-defined FAQ for common Ergo questions
export const commonErgoFAQ: FAQItem[] = [
  {
    question: "What is Ergo Platform?",
    answer: "Ergo is a next-generation proof-of-work blockchain platform that enables new models of financial interaction, underpinned by smart contracts built with flexible and powerful Zero-Knowledge proofs (Σ-protocols)."
  },
  {
    question: "How is Ergo different from Bitcoin?",
    answer: "While Ergo uses Bitcoin's UTXO model, it extends it with smart contract capabilities, storage rent to ensure long-term sustainability, and advanced cryptographic features like Sigma protocols for privacy-preserving applications."
  },
  {
    question: "What is storage rent in Ergo?",
    answer: "Storage rent is a small fee charged for keeping data on the blockchain. This ensures the blockchain remains sustainable by preventing state bloat and incentivizing efficient use of storage."
  },
  {
    question: "What programming language does Ergo use?",
    answer: "Ergo uses ErgoScript, a powerful and protocol-friendly scripting language for cryptocurrencies. It's based on Sigma protocols and designed to be safe, clear, and powerful for DeFi applications."
  },
  {
    question: "Is Ergo environmentally friendly?",
    answer: "Yes, Ergo uses Autolykos, an ASIC-resistant Proof-of-Work algorithm that's more energy-efficient than Bitcoin's SHA-256. It's designed to be mined on consumer-grade GPUs, promoting decentralization."
  },
  {
    question: "What wallets support Ergo?",
    answer: "Ergo is supported by multiple wallets including Nautilus (browser extension), Ergo Mobile Wallet (iOS/Android), SAFEW, and Satergo (desktop). Each offers different features for various use cases."
  },
  {
    question: "How can I mine Ergo?",
    answer: "Ergo can be mined using GPUs with at least 4GB of memory. Popular mining software includes TeamRedMiner, T-Rex, and NBMiner. You can mine solo or join mining pools for more consistent rewards."
  },
  {
    question: "What is SigmaUSD?",
    answer: "SigmaUSD is an algorithmic stablecoin protocol on Ergo that maintains USD peg through an innovative reserve mechanism. It uses ERG as collateral and doesn't require centralized custody."
  }
] 