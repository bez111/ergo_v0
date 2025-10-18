import React from "react"
import { DifferentiatorCard } from "./differentiator-card"

export function Differentiation() {
  const differentiators = [
    {
      text: "FAIR LAUNCH & PROOF-OF-WORK",
      iconName: "Shield" as const,
      description:
        "Launched with no ICO or premine, secured by Autolykos v2 – an ASIC-resistant and energy-efficient Proof-of-Work algorithm ensuring fair distribution and robust security from day one.",
    },
    {
      text: "eUTXO & ERGOSCRIPT FOR ADVANCED DEFI",
      iconName: "Zap" as const,
      description:
        "The extended UTXO model combined with our powerful language, ErgoScript, enables highly secure, predictable, and expressive financial applications, pushing the boundaries of DeFi.",
    },
    {
      text: "STORAGE RENT FOR LONG-TERM SUSTAINABILITY",
      iconName: "RefreshCw" as const,
      description:
        'A novel mechanism ensuring network health and predictable operational costs by recycling fees from unused data ("dust") back to miners, preventing bloat and keeping the chain efficient.',
    },
    {
      text: "RESEARCH-DRIVEN INNOVATION",
      iconName: "BookOpen" as const,
      description:
        "Built on peer-reviewed academic research and first principles, Ergo fosters robust, groundbreaking solutions designed for real-world longevity.",
    },
    {
      text: "ROBUST OPTIONAL PRIVACY (Σ-PROTOCOLS)",
      iconName: "Lock" as const,
      description:
        "Ergo offers flexible privacy features powered by Sigma protocols, enabling secure multi-signatures, ring signatures, and zero-knowledge proofs for tailored confidentiality options in transactions.",
    },
    {
      text: "COMMUNITY-LED DEVELOPMENT",
      iconName: "Users" as const,
      description:
        "A truly decentralized, open-source project where development is led by passionate community members and developers worldwide, ensuring the protocol remains free from centralized control.",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-neutral-700">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-orange-400">WHAT MAKES</span> ERGO DIFFERENT
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ergo combines proven cryptographic techniques with innovative blockchain design to create a platform that's secure, scalable, and sustainable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {differentiators.map((diff, index) => (
              <DifferentiatorCard key={index} differentiator={diff} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
    </section>
  )
}
