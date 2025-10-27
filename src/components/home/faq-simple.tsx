"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function FAQSimple() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "What is Ergo in one sentence?",
      a: "Ergo is a secure, open-source PoW blockchain for programmable, censorship-resistant money using the eUTXO model.",
      link: "/docs/why-ergo"
    },
    {
      q: "How do I get started (wallet + first transaction)?",
      a: "Install a supported wallet, back up your seed offline, get ERG (DEX/exchange/faucet), then send your first test transaction.",
      link: "/start"
    },
    {
      q: "How much are network fees and who gets them?",
      a: "Typical fees are ≈ $0.01 and go to miners for processing blocks; the exact fee is shown before you confirm. Fees vary with network load.",
      link: "/docs/introduction/faq"
    },
    {
      q: "What makes Ergo different from other smart-contract chains?",
      a: "Ergo uses the eUTXO model for safer composition and predictable parallel execution, plus ErgoScript and Sigma protocols for short, auditable contracts and optional privacy tooling.",
      link: "/technology/eutxo-model"
    },
    {
      q: "How is Ergo secured?",
      a: "Ergo is secured by the Autolykos Proof-of-Work algorithm, open code, and community audits. Users should keep seed phrases offline, verify downloads/URLs, and prefer hardware wallets.",
      link: "/technology/secure-pow"
    },
    {
      q: "What risks should I know before using Ergo?",
      a: "Self-custody means irreversible transactions; markets are volatile; third-party dApps carry smart-contract and operational risk; watch for phishing.",
      link: "/docs/introduction/faq"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 
            className="font-bold tracking-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
          >
            <span className="text-orange-400">Common</span> <span className="text-white">questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know to get started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card 
              key={i}
              className="bg-black border-neutral-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-900/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.q}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {faq.a}
                  </p>
                  {faq.link && (
                    <div className="flex justify-end">
                      <Link
                        href={faq.link}
                        className="text-orange-400 hover:text-orange-300 transition-colors font-medium text-sm"
                      >
                        Learn more
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
