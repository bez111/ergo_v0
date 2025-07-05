import React from "react";
import { BookOpen, FileText, Video, Star, ExternalLink } from "lucide-react";

export default function ResearchWhitepapersPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-orange-400" /> Documents
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo is following the fundamental approach and uses stable well-tested solutions, even if that leads to slower short-term innovations. Most of Ergo solutions are formalized in papers presented at peer-reviewed conferences and have been widely discussed in the community.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          This page contains links to documents with a general overview of Ergo platform, as well as fundamental papers underlying Ergo protocol.
        </p>
      </div>
      {/* Overviews Section */}
      <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-orange-400" /> Overviews
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Whitepaper I: Ergo: The Resilient Platform For Contractual Money</li>
          <li>Whitepaper II: ErgoScript, a Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs</li>
          <li>Teaser: The Ergo Platform Project Overview</li>
          <li>Whitepaper III: Advanced ErgoScript Tutorial</li>
        </ul>
      </div>
      {/* Foundational Papers Section */}
      <div className="bg-blue-400/10 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-blue-400" /> Foundational Papers
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>On Contractual Money</li>
          <li>Improving authenticated dynamic dictionaries, with applications to cryptocurrencies</li>
          <li>Self-reproducing Coins as Universal Turing Machine</li>
          <li>Multi-mode Cryptocurrency Systems</li>
          <li>Multi-stage Contracts in the UTXO Model</li>
          <li>EDRAX: A Cryptocurrency with Stateless Transaction Validation</li>
          <li>Revisiting Difficulty Control for Blockchain Systems</li>
          <li>Storage Rent: A Systematic Approach To Cryptocurrency Fees</li>
          <li>ZeroJoin: Combining ZeroCoin and CoinJoin</li>
          <li>Soft Power: Upgrading Chain Macroeconomic Policy Through Soft Forks</li>
        </ul>
      </div>
      {/* Post-Mainnet Section */}
      <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-cyan-400" /> Post-Mainnet
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts</li>
          <li>Ergo Hackathon: Crowdfunded Smart Contract Pools Research and Conceptualization</li>
          <li>Succinct, Non-Interactive Share Proofs (See Lithos Protocol)</li>
          <li>Dexy (See Dexy)</li>
          <li>Sigmajoin</li>
          <li>ChainCash</li>
          <li>KYA - A Treatise On Assumptions in Cryptocurrencies and Defi</li>
        </ul>
      </div>
      {/* Video Section */}
      <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Video className="w-6 h-6 text-orange-400" /> Notable Youtube Appearances
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Blockchain at Berkeley CESC2017 - Dmitry Meshkov - On Space-Scare Economy - October 17, 2017.</li>
          <li>Master Workshop at Amsterdam - Vasily Kharin - Autolykos: Practical Non-Outsourceable Proof-of-Work Protocol - November 17, 2018.</li>
          <li>Binary District Journal - Alexander Chepurnoy - Blockchain Research and Adoption – Interview - November 10, 2017.</li>
          <li>IOHK Research - Alexander Chepurnoy - Future technology - July 22, 2016.</li>
          <li>IOHK & Shanghai Jiao Tong University – Alexander Chepurnoy - Interview - March 6, 2017.</li>
          <li>IOHK Interview on Scorex – Charles Hoskinson, Alexander Chepurnoy - A Modular Toolbox for Cryptocurrency Research & Blockchain Technologies - August 15, 2016.</li>
          <li>CTCrypt 2017 – Alexander Chepurnoy - Challenges in Blockchain Research - August 15, 2016.</li>
          <li>SF Scala – Dmitry Meshkov, Interview - October 4, 2017.</li>
          <li>NXT Cryptocurrency Explained - By Alexander Chepurnoy & Bas Wisselink at Bitcoin Wednesday Amsterdam - January 7, 2015.</li>
        </ul>
      </div>
      {/* Meetups Section */}
      <div className="bg-blue-400/10 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-6 h-6 text-blue-400" /> Meetups and Presentations
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Ergo Platform Presentation, Seoul - September 2019.</li>
          <li>Ergo Platform Presentation, Hong Kong (at Genesis Block) - September 2019.</li>
          <li>Ergo Platform Presentation, Ho Chi Minh - September 2019.</li>
          <li>Ergo Platform Presentation, Shanghai - September 2019.</li>
          <li>Ergo Platform Presentation, Hong Kong (at Genesis Block) - January 2019.</li>
          <li>Ergo Platform Presentation, Sanya, Hainan - January 2019. 2019年区块链技术大会 / 2019 International Blockchain Technology Conference (IBTC2019).</li>
        </ul>
      </div>
    </>
  );
}
