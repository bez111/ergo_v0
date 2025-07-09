"use client";

import React from "react";
import { Zap, BookOpen, FileText, Code2, ExternalLink, Star } from "lucide-react";

export default function SpectrumFinancePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Spectrum Finance
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Spectrum is a pioneering open-source, cross-chain decentralized exchange (DEX) platform, currently offering liquidity provision (LP), yield farming, and babel fees on the Cardano (ADA) and Ergo (ERG) networks.
      </p>

      {/* Current Features */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Current Features of Spectrum Finance
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Liquidity Provision & Yield Farming:</b> Users can engage in liquidity provision and yield farming.</li>
          <li><b>Babel Fees:</b> Babel fees allow transaction fees to be paid with various tokens.</li>
        </ul>
      </div>

      {/* Spectrum Bloom */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Star className="w-6 h-6 text-cyan-400" /> Spectrum Bloom: Next-Generation DeFi Framework
        </h2>
        <p className="text-gray-300 mb-4">
          Spectrum Bloom is an upcoming eUTxO-native framework for decentralized finance (DeFi), designed to address and improve upon the limitations of early decentralized exchanges (DEXes).
        </p>
        <h3 className="text-xl font-bold mb-2 text-orange-300">Highlights from the Spectrum Bloom White Paper</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li><b>Addressing Early DEX Limitations:</b> Spectrum Bloom aims to overcome issues such as lack of transparency, composability, and poor performance in early DEX implementations.</li>
          <li><b>Decentralization and Openness:</b> The framework focuses on principles of decentralization, openness, transparency, and sustainability.</li>
          <li><b>eUTxO Model:</b> Utilizes the eUTxO blockchain model, as seen in Ergo and Cardano, supporting multi-stage contracts and multi-token functionality.</li>
          <li><b>Innovative DEX Protocol:</b> Includes a novel protocol for DEX that consists of both on-chain (UTxO and validators) and off-chain (event handlers for state transitions) elements.</li>
          <li><b>Liquidity Pooling and Execution:</b> Spectrum Bloom proposes unique approaches to liquidity pooling and order execution, aiming to streamline processes and reduce overhead.</li>
          <li><b>Universal Order Composition:</b> Introduces universally composable orders, which can be fulfilled from any liquidity source, enhancing flexibility and efficiency.</li>
          <li><b>Autonomous Account (AA):</b> A key feature where an on-chain entity can validate execution and release user funds for trading, facilitating a dynamic set of applications on eUTxO blockchains.</li>
          <li><b>Future Extensions and Applications:</b> The white paper also discusses potential extensions and applications of the Autonomous Account concept beyond DEXes.</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mb-8 mt-14">
        <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-cyan-300">
          <BookOpen className="w-5 h-5 text-cyan-300" /> Resources
        </h2>
        {/* Tutorials */}
        <div className="mb-10">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-orange-200">
            <FileText className="w-5 h-5 text-orange-200" /> Tutorials
          </h3>
          <ul className="list-disc pl-6 text-gray-300 text-base">
            <li className="mb-1">
              <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                Running an off-chain matching bot <ExternalLink className="w-4 h-4 mb-0.5" />
              </a>
            </li>
          </ul>
        </div>
        {/* Papers */}
        <div className="mb-10">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-cyan-300">
            <FileText className="w-5 h-5 text-cyan-300" /> Papers
          </h3>
          <ul className="list-disc pl-6 text-gray-300 text-base">
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
        </div>
        {/* Dev-Resources */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-green-300">
            <Code2 className="w-5 h-5 text-green-300" /> Dev-Resources
          </h3>
          <ul className="list-disc pl-6 text-gray-300 text-base">
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
      </div>
    </>
  );
}
