import Script from 'next/script'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
  className?: string
  showVisual?: boolean
}

export function FAQSchema({ items, className = '', showVisual = false }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      
      {showVisual && (
        <div className={`space-y-4 ${className}`}>
          {items.map((item, index) => (
            <div key={index} className="border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                {item.question}
              </h3>
              <p className="text-neutral-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

// Pre-defined FAQs for common pages
export const commonFAQs: Record<string, FAQItem[]> = {
  ergoscript: [
    {
      question: "What is ErgoScript?",
      answer: "ErgoScript is a powerful and protocol-friendly scripting language for Ergo blockchain smart contracts. It's based on Sigma protocols and provides a high level of security and expressiveness for complex DeFi applications."
    },
    {
      question: "How does ErgoScript differ from Solidity?",
      answer: "ErgoScript uses the eUTXO model instead of accounts, is based on Sigma protocols for enhanced privacy, and focuses on self-amendable protocols. It's more secure by design with no reentrancy attacks possible."
    },
    {
      question: "What can you build with ErgoScript?",
      answer: "You can build DEXs, stablecoins, oracle pools, NFT marketplaces, DAOs, privacy tools, and complex DeFi protocols. ErgoScript's composability allows for sophisticated multi-stage protocols."
    }
  ],
  stablecoins: [
    {
      question: "How do algorithmic stablecoins work on Ergo?",
      answer: "Ergo's algorithmic stablecoins use the AgeUSD protocol, which maintains stability through over-collateralization with ERG. The protocol uses reserve providers and stablecoin holders to maintain a 400-800% collateralization ratio."
    },
    {
      question: "What is SigmaUSD?",
      answer: "SigmaUSD is Ergo's native algorithmic stablecoin pegged to USD. It's backed by ERG reserves and maintained through the AgeUSD protocol, providing decentralized stable value without centralized custody."
    },
    {
      question: "How is SigmaUSD different from USDT or USDC?",
      answer: "Unlike USDT or USDC which are centralized and backed by traditional assets, SigmaUSD is fully decentralized, algorithmically managed, and backed by ERG cryptocurrency with transparent on-chain reserves."
    }
  ],
  mining: [
    {
      question: "How profitable is Ergo mining?",
      answer: "Ergo mining profitability depends on your electricity costs, hardware efficiency, and ERG price. With efficient GPUs and low electricity costs, mining can be profitable. Use mining calculators to estimate your specific returns."
    },
    {
      question: "What hardware do I need to mine Ergo?",
      answer: "Ergo uses the Autolykos v2 algorithm optimized for GPUs. You need a GPU with at least 4GB VRAM, though 6GB+ is recommended. Popular choices include AMD RX 580/5700 and NVIDIA RTX 3060 Ti/3070."
    },
    {
      question: "Can I mine Ergo with a CPU?",
      answer: "No, Ergo mining is GPU-only. The Autolykos v2 algorithm is memory-hard and optimized for GPU mining, making CPU mining unprofitable."
    }
  ],
  privacy: [
    {
      question: "How does Ergo provide privacy?",
      answer: "Ergo provides optional privacy through Sigma protocols, ErgoMix (a non-interactive mixer), stealth addresses, and ring signatures. Users can choose their privacy level for each transaction."
    },
    {
      question: "What are Sigma protocols?",
      answer: "Sigma protocols are zero-knowledge proof protocols that allow proving statements without revealing the underlying information. Ergo uses them for privacy features and complex smart contracts."
    },
    {
      question: "Is Ergo a privacy coin?",
      answer: "Ergo is not a privacy coin by default. It provides optional privacy features that users can choose to use. Most transactions are transparent, but privacy tools are available when needed."
    }
  ]
}

export default FAQSchema 