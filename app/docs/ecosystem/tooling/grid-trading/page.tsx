"use client";

import React from "react";
import {
  Layers,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Grid3X3,
  Zap,
  Info,
  Cpu,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function GridTradingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Layers className="w-8 h-8 text-purple-400" /> Decentralized Grid Trading
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Decentralized grid trading is a powerful concept implemented on the Ergo blockchain. It allows for automated trading orders while ensuring users maintain control over their funds. Two notable implementations of this concept are the <b>Off the Grid</b> and <b>Machina Finance</b> projects.
        </p>
        <a
          href="https://www.investopedia.com/terms/g/grid-trading.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white text-lg hover:bg-neutral-700 mb-2"
        >
          <ExternalLink className="w-5 h-5 mr-2" /> Learn more about grid trading on Investopedia
        </a>
      </div>

      {/* Off the Grid Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Off the Grid
        </h2>
        <p className="text-gray-300 mb-4">
          <b>Off the Grid</b> is a decentralized application (dApp) that builds on the grid trading contract proposed by kushti. It includes an execution bot/batcher for automating order matching without user interaction.
        </p>
        <Link
          href="/docs/ecosystem/tooling/off-the-grid"
          className="inline-flex items-center text-blue-400 font-semibold hover:underline mt-auto"
        >
          Learn more about Off the Grid <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Machina Finance Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Grid3X3 className="w-6 h-6 text-orange-400" /> Machina Finance
        </h2>
        <p className="text-gray-300 mb-4">
          <b>Machina Finance</b> is another project on Ergo that is exploring the concept of grid trading. It is developing a decentralized exchange (DEX) that utilizes grid order contracts for peer-to-peer trading.
        </p>
        <Link
          href="/docs/ecosystem/financial/dex/machina"
          className="inline-flex items-center text-orange-400 font-semibold hover:underline mt-auto"
        >
          Learn more about Machina Finance <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Closing Info Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
          <Info className="w-5 h-5 text-cyan-400" /> Why Grid Trading?
        </h3>
        <p className="text-gray-300 mb-2">
          Grid trading enables users to automate buy and sell orders at preset intervals, capturing profits from market volatility while maintaining full custody of their assets. On Ergo, this is achieved in a decentralized, non-custodial manner, leveraging smart contracts and open-source bots.
        </p>
      </div>
    </>
  );
} 