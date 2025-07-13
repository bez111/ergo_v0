"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, Globe, Users, Shield, Target } from "lucide-react";

export default function EXLEPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        EXLE (Ergo-Lend): Global DeFi Lending Platform
      </h1>
      
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          EXLE is enhancing financial access globally through its decentralized finance (DeFi) initiatives on the Ergo Blockchain. By targeting those typically excluded by traditional banking institutions, EXLE employs blockchain technology to create a global lending platform, governed transparently by a decentralized autonomous organization (DAO). Stay connected with EXLE through Telegram and Twitter for updates and community engagement.
        </p>
      </div>

      {/* Beta Status */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Zap className="w-5 h-5" /> EXLE 2.0 Beta
        </h2>
        <p className="text-gray-300 mb-4">
          EXLE 2.0 is currently in private beta. Key developments include:
        </p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Peer-to-peer (P2P) lending: <span className="text-green-400 font-semibold">Completed</span></span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Crowdloans backend: <span className="text-green-400 font-semibold">Completed</span></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-orange-400 flex items-center justify-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            </div>
            <span className="text-gray-300">Website redesign to integrate crowdloans feature: <span className="text-orange-400 font-semibold">In progress</span></span>
          </div>
        </div>
        <a
          href="https://github.com/anon-real/exle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-orange-500/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
        >
          View EXLE 2.0 Project Proposal <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>

      {/* Kenya Microfinance */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Globe className="w-5 h-5" /> Streamlining Microfinance in Kenya
        </h2>
        <p className="text-gray-300 mb-4">
          EXLE is committed to using blockchain for social impact, as seen in its work in Kenya. Through peer-to-peer, uncollateralized loan projects, EXLE bridges the gap between lenders and borrowers in underserved areas. The shift from informal to structured, zero-interest loans under EXLE contracts, funded through raffles (Exle P2P Microfinance Initiative and Interest-Free Loans to a Kenyan Cooperative), showcases the potential of blockchain in microfinance.
        </p>
        <p className="text-gray-300 mb-4">
          In 2022, EXLE, in collaboration with the WEQNT Cardano Stake Pool, has made significant strides in increasing micro loan accessibility in Kenya, launching in Kakuma County and gaining government certification. This certification allows WEQNT and EXLE to legally issue microcredit and crypto-based loans, providing local businesses with fair and competitive loan options. This access to micro loans fosters the growth of new businesses and promotes social and economic engagement in the region.
        </p>
        <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
          <h3 className="font-semibold text-green-400 mb-2">Introducing the first Micro-Credit Cooperative in Northern Kenya</h3>
          <p className="text-gray-300 text-sm">with - lowest interest rates - WEQNT</p>
        </div>
      </div>

      {/* GoodThingsDAO */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Users className="w-5 h-5" /> GoodThingsDAO
        </h2>
        <p className="text-gray-300 mb-4">
          The GoodThingsDAO hasn't fully formed until it started in Paideia. Donors from both raffles will receive DAO membership tokens. The funds raised in both auctions are expected to be repaid by the borrowers who took the interest-free loans. The DAO will decide which loans to fund and plan future fundraisers. Currently, the process is facilitated through a Christian missionary cooperative in Kenya.
        </p>
        <p className="text-gray-300 text-sm">
          Loan requests are made through an intake process on EXLE.
        </p>
      </div>

      {/* Financial Exclusion */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Target className="w-5 h-5" /> Addressing Financial Exclusion
        </h2>
        <p className="text-gray-300 mb-4">
          The core mission of EXLE is to address the challenges faced by the unbanked, offering solutions to the limitations imposed by traditional financial institutions. By focusing on reducing loan costs, including underwriting and financing expenses, EXLE aims to make financial services more accessible. This approach not only benefits borrowers with more options and better rates but also provides lenders with opportunities to make direct, impactful loans.
        </p>
      </div>

      {/* Blockchain Innovation */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Zap className="w-5 h-5" /> Innovating with Blockchain
        </h2>
        <p className="text-gray-300 mb-4">
          EXLE leverages blockchain technology to automate loan processes and create a global pool of lenders, significantly reducing the cost and accessibility barriers associated with traditional loans. This innovation enables loans to be as accessible as an app on a cell phone, reaching individuals regardless of their location. The platform's design eliminates the need for physical bank branches, extensive legal frameworks, and the traditional banking infrastructure, making smaller loans viable for a broader audience.
        </p>
      </div>

      {/* Community-Driven Platform */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Users className="w-5 h-5" /> Building a Community-Driven Platform
        </h2>
        <p className="text-gray-300 mb-4">
          The foundation of EXLE's approach is the creation of a democratic lending and borrowing community, guided by the principles outlined in The Ergo Manifesto. The platform aims to foster a community DAO that will provide social underwriting for borrowers and decide on the development and financial products of the platform. This community-driven approach is aimed at ensuring fairer access to loans, thereby creating new economic relationships and opportunities.
        </p>
      </div>

      {/* Future of Lending */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Shield className="w-5 h-5" /> The Future of Lending with Ergo-Lend
        </h2>
        <p className="text-gray-300 mb-4">
          With ongoing projects in Kenya and plans for expansion into other regions, EXLE is positioned to redefine the landscape of lending. By developing real-world pilot projects and leveraging the technical and entrepreneurial capabilities of the Ergo-Lend team, EXLE is not just providing immediate financial solutions but also laying the groundwork for sustainable economic empowerment. The platform's goal is to transform lending through blockchain technology, making it more inclusive, efficient, and accessible to all, thereby embodying the vision of democratic access to financial services.
        </p>
      </div>

      {/* Community Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Community Resources
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://t.me/ErgoLend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-cyan-700/80 rounded-xl font-semibold text-white hover:bg-orange-500 hover:text-black transition-transform hover:scale-105"
          >
            Telegram <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://twitter.com/ErgoLend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-cyan-700/80 rounded-xl font-semibold text-white hover:bg-orange-500 hover:text-black transition-transform hover:scale-105"
          >
            Twitter <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/anon-real/exle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-cyan-700/80 rounded-xl font-semibold text-white hover:bg-orange-500 hover:text-black transition-transform hover:scale-105"
          >
            Github <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 