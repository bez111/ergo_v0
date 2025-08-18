"use client";

import React from "react";
import { 
  Zap, 
  BookOpen, 
  FileText, 
  Code2, 
  ExternalLink, 
  Star, 
  ChevronRight,
  GitBranch,
  Globe,
  Users,
  Shield,
  Coins
} from "lucide-react";
import Link from "next/link";

export default function SpectrumFinancePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Spectrum Finance
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Spectrum is a pioneering open-source, cross-chain decentralized exchange (DEX) platform, currently offering liquidity provision (LP), yield farming, and babel fees on the Cardano (ADA) and Ergo (ERG) networks.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/Docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://github.com/spectrum-finance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <GitBranch className="w-5 h-5 mr-2" /> Spectrum GitHub
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Current Features
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Liquidity Provision & Yield Farming:</b> Users can engage in liquidity provision and yield farming.</li>
          <li><b>Babel Fees:</b> Babel fees allow transaction fees to be paid with various tokens.</li>
          <li><b>Cross-Chain Support:</b> Currently supporting Cardano (ADA) and Ergo (ERG) networks.</li>
          <li><b>Open-Source:</b> Pioneering open-source DEX platform with transparent development.</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-cyan-400" /> Spectrum Bloom
          </h3>
          <p className="text-gray-300 mb-2">Next-generation eUTxO-native framework for decentralized finance (DeFi), designed to address and improve upon the limitations of early decentralized exchanges (DEXes).</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> eUTxO Model
          </h3>
          <p className="text-gray-300 mb-2">Utilizes the eUTxO blockchain model, as seen in Ergo and Cardano, supporting multi-stage contracts and multi-token functionality with enhanced security and transparency.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <BookOpen className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Spectrum Bloom & Resources</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Spectrum Bloom: Next-Generation DeFi Framework</h4>
              <p className="text-gray-300 mb-4">
                Spectrum Bloom is an upcoming eUTxO-native framework for decentralized finance (DeFi), designed to address and improve upon the limitations of early decentralized exchanges (DEXes).
              </p>
              
              <h4 className="font-semibold text-cyan-400 mb-2">Highlights from the Spectrum Bloom White Paper</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li><b>Addressing Early DEX Limitations:</b> Spectrum Bloom aims to overcome issues such as lack of transparency, composability, and poor performance in early DEX implementations.</li>
                <li><b>Decentralization and Openness:</b> The framework focuses on principles of decentralization, openness, transparency, and sustainability.</li>
                <li><b>eUTxO Model:</b> Utilizes the eUTxO blockchain model, as seen in Ergo and Cardano, supporting multi-stage contracts and multi-token functionality.</li>
                <li><b>Innovative DEX Protocol:</b> Includes a novel protocol for DEX that consists of both on-chain (UTxO and validators) and off-chain (event handlers for state transitions) elements.</li>
                <li><b>Liquidity Pooling and Execution:</b> Spectrum Bloom proposes unique approaches to liquidity pooling and order execution, aiming to streamline processes and reduce overhead.</li>
                <li><b>Universal Order Composition:</b> Introduces universally composable orders, which can be fulfilled from any liquidity source, enhancing flexibility and efficiency.</li>
                <li><b>Autonomous Account (AA):</b> A key feature where an on-chain entity can validate execution and release user funds for trading, facilitating a dynamic set of applications on eUTxO blockchains.</li>
                <li><b>Future Extensions and Applications:</b> The white paper also discusses potential extensions and applications of the Autonomous Account concept beyond DEXes.</li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Resources</h4>
              
              <h5 className="font-semibold text-orange-300 mb-2">Tutorials</h5>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-4">
                <li className="mb-1">
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    Running an off-chain matching bot <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
              </ul>

              <h5 className="font-semibold text-cyan-300 mb-2">Papers</h5>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-4">
                <li className="mb-1">
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    Extended UTxO in production: Techniques, trade-offs, and finding a better balance <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    Spectrum Bloom White Paper <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
              </ul>

              <h5 className="font-semibold text-green-300 mb-2">Dev-Resources</h5>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-4">
                <li className="mb-1">
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    🥇 Contracts Repository: ErgoScript contracts for the DEX. <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    🥇 Backend Repository: Off-chain services (bots) for matching and execution. <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    EIP-0014: Decentralized Exchange Contracts <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Spectrum Finance represents the cutting edge of decentralized exchange technology, combining current DEX functionality with the innovative Spectrum Bloom framework. By leveraging eUTxO models and focusing on transparency and composability, Spectrum is building the future of cross-chain DeFi infrastructure.</p>
      </div>
    </>
  );
}
