"use client";

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
import Link from "next/link";

const toolingSections = [
  {
    title: "Crux Finance",
    description: "A DeFi tool or protocol in the Ergo ecosystem. (Description coming soon)",
    icon: Wrench,
    color: "text-cyan-400",
    link: "/Docs/ecosystem/tooling/crux-finance"
  },
  {
    title: "ErgoNames",
    description: "A naming service for Ergo addresses and dApps. (Description coming soon)",
    icon: Star,
    color: "text-yellow-400",
    link: "/Docs/ecosystem/tooling/ergonames"
  },
  {
    title: "Celaut",
    description: "A modular platform for building decentralized applications and systems on Ergo. (Description coming soon)",
    icon: Layers,
    color: "text-purple-400",
    link: "/Docs/ecosystem/tooling/celaut"
  },
  {
    title: "Reputation System (Celaut)",
    description: "A subsystem for managing and tracking user reputation within Celaut. (Description coming soon)",
    icon: Users,
    color: "text-blue-400",
    link: "/Docs/ecosystem/tooling/reputation-system"
  },
  {
    title: "Netnotes",
    description: "A tool for networked note-taking or collaboration on Ergo. (Description coming soon)",
    icon: Network,
    color: "text-green-400",
    link: "/Docs/ecosystem/tooling/netnotes"
  },
  {
    title: "SigmaRand",
    description: "A randomness oracle or random number generator for Ergo smart contracts. (Description coming soon)",
    icon: Puzzle,
    color: "text-pink-400",
    link: "/Docs/ecosystem/tooling/sigmarand"
  },
  {
    title: "Moria Finance",
    description: "A DeFi protocol or tool in the Ergo ecosystem. (Description coming soon)",
    icon: Wrench,
    color: "text-orange-400",
    link: "/Docs/ecosystem/tooling/moria-finance"
  },
  // Trading section header will be inserted here
  {
    title: "Arbit (Trading)",
    description: "A tool or strategy for arbitrage trading on Ergo. (Description coming soon)",
    icon: Star,
    color: "text-yellow-400",
    link: "/Docs/ecosystem/tooling/arbit"
  },
  {
    title: "Grid Trading (Trading)",
    description: "Automated grid trading strategies for Ergo. (Description coming soon)",
    icon: Layers,
    color: "text-purple-400",
    link: "/Docs/ecosystem/tooling/grid-trading"
  },
  {
    title: "Off the Grid (Grid Trading)",
    description: "A specific grid trading implementation. (Description coming soon)",
    icon: BookOpen,
    color: "text-blue-400",
    link: "/Docs/ecosystem/tooling/off-the-grid"
  },
  {
    title: "Tutorial (Off the Grid)",
    description: "Step-by-step guide for using Off the Grid. (Description coming soon)",
    icon: BookOpen,
    color: "text-green-400",
    link: "/Docs/ecosystem/tooling/tutorial"
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