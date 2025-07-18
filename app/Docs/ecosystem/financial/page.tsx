"use client";

import React from "react";
import { TrendingUp, Coins, Layers, Flame, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FinancialPage() {
  const financialSections = [
    {
      title: "Decentralized Finance",
      description:
        "Lending, borrowing, derivatives, and crowdfunding — all on a secure, decentralized blockchain. Dive into Ergo’s DeFi protocols.",
      icon: Layers,
      color: "text-green-400",
      link: "/Docs/ecosystem/financial/defi"
    },
    {
      title: "Decentralized Exchanges",
      description:
        "Non-custodial, permissionless trading platforms and liquidity protocols on Ergo. Explore DEXs, cross-chain swaps, and more.",
      icon: TrendingUp,
      color: "text-cyan-400",
      link: "/Docs/ecosystem/financial/dex"
    },
    {
      title: "Monetary Systems",
      description:
        "Stablecoins, experimental protocols, and local exchange trading systems. Discover how Ergo enables decentralized, community-driven value transfer.",
      icon: Coins,
      color: "text-orange-400",
      link: "/Docs/ecosystem/financial/monetary-systems"
    },
    {
      title: "Degenerate Finance",
      description:
        "High-risk, high-reward protocols and experimental financial games. For the bold and curious — explore the world of DegFi on Ergo.",
      icon: Flame,
      color: "text-orange-500",
      link: "/Docs/ecosystem/financial/degenerate-finance"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Financial Ecosystem
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        The financial layer of Ergo: DEXs, stablecoins, DeFi, and experimental DegFi. Discover the protocols and innovations powering open finance on Ergo.
      </p>

      {/* Financial Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {financialSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link
              key={index}
              href={section.link}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <IconComponent className={`w-6 h-6 ${section.color}`} />
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