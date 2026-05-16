"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Wrench,
  Layers,
  Users,
  Star,
  Network,
  List,
  Puzzle,
  BookOpen,
  ChevronRight
} from "lucide-react";
import { Link } from "@/i18n/navigation";

const toolingSections = [
  {
    title: "Crux Finance",
    description: "Portfolio, trading, accounting, and alerting tools for tracking and managing Ergo DeFi positions from one interface.",
    icon: Wrench,
    color: "text-cyan-400",
    link: "/docs/ecosystem/tooling/crux-finance"
  },
  {
    title: "ErgoNames",
    description: "Decentralized naming for Ergo addresses, letting users register readable names instead of relying on long wallet strings.",
    icon: Star,
    color: "text-yellow-400",
    link: "/docs/ecosystem/tooling/ergonames"
  },
  {
    title: "Celaut",
    description: "Peer-to-peer runtime for deploying autonomous services and AI agents with verifiable execution and open coordination.",
    icon: Layers,
    color: "text-purple-400",
    link: "/docs/ecosystem/tooling/celaut"
  },
  {
    title: "Reputation System (Celaut)",
    description: "UTXO-based trust layer for Celaut services, recording auditable reputation proofs on Ergo without a central authority.",
    icon: Users,
    color: "text-blue-400",
    link: "/docs/ecosystem/tooling/reputation-system"
  },
  {
    title: "Netnotes",
    description: "Cross-platform crypto management suite and reactive app framework for wallets, blockchain data, prices, and integrations.",
    icon: Network,
    color: "text-green-400",
    link: "/docs/ecosystem/tooling/netnotes"
  },
  {
    title: "SigmaRand",
    description: "Commit-reveal random number generation service for games, lotteries, and contracts that need fair randomness on Ergo.",
    icon: Puzzle,
    color: "text-pink-400",
    link: "/docs/ecosystem/tooling/sigmarand"
  },
  {
    title: "Moria Finance",
    description: "Smart-contract fund management platform for transparent custody and Bitcoin-backed financial flows on Ergo.",
    icon: Wrench,
    color: "text-orange-400",
    link: "/docs/ecosystem/tooling/moria-finance"
  },
  // Trading section header will be inserted here
  {
    title: "Arbit (Trading)",
    description: "Arbitrage interface for finding and executing profitable swaps across decentralized markets on Ergo and Cardano.",
    icon: Star,
    color: "text-yellow-400",
    link: "/docs/ecosystem/tooling/arbit"
  },
  {
    title: "Grid Trading (Trading)",
    description: "Overview of non-custodial grid order strategies that automate buy and sell levels through Ergo smart contracts.",
    icon: Layers,
    color: "text-purple-400",
    link: "/docs/ecosystem/tooling/grid-trading"
  },
  {
    title: "Off the Grid (Grid Trading)",
    description: "Decentralized grid trading dApp with an execution bot for matching orders while users keep control of funds.",
    icon: BookOpen,
    color: "text-blue-400",
    link: "/docs/ecosystem/tooling/off-the-grid"
  },
  {
    title: "Tutorial (Off the Grid)",
    description: "Setup guide for installing, configuring, and operating the Off-the-Grid trading bot on Ergo.",
    icon: BookOpen,
    color: "text-green-400",
    link: "/docs/ecosystem/tooling/tutorial"
  }
];

export default function ToolingPage() {
  // Индекс, с которого начинаются трейдинговые инструменты
  const tradingStartIndex = toolingSections.findIndex(s => s.title.includes("Arbit (Trading)"));
  return (
    <>
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Tooling
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore the developer and user tools powering the Ergo ecosystem: DeFi protocols, naming, reputation, trading strategies, and more.
      </p>

      {/* Tooling Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {toolingSections.map((section, index) => {
          // Вставляем Trading разделитель перед первой трейдинг-карточкой
          if (index === tradingStartIndex) {
            return (
              <React.Fragment key={section.title}>
                <div className="col-span-2 flex items-center gap-2 mb-2 mt-2">
                  <List className="w-6 h-6 text-cyan-400" />
                  <span className="text-2xl font-bold text-cyan-300 tracking-tight">Trading</span>
                </div>
                <Link
                  href={section.link}
                  className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <section.icon className={`w-6 h-6 ${section.color}`} />
                      {section.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {section.description}
                    </p>
                  </div>
                  <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                    Learn more
                  </div>
                </Link>
              </React.Fragment>
            );
          }
          return (
            <Link
              key={section.title}
              href={section.link}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <section.icon className={`w-6 h-6 ${section.color}`} />
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.description}
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
} 
