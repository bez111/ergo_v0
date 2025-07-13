"use client";

import React from "react";
import { CheckCircle, Zap, TrendingUp, ExternalLink, Info, Coins, FlaskConical, Users } from "lucide-react";

const monetaryList: Array<{
  name: string;
  status: "Live" | "Experimental" | "In Development";
  category: "Stablecoins" | "Experimental" | "LETS";
  description: string;
  link: string | null;
  more?: string | null;
  subpages?: Array<{ name: string; href: string }>;
}> = [
  {
    name: "SigmaUSD",
    status: "Live",
    category: "Stablecoins",
    description: "Algorithmic stablecoin protocol providing decentralized, collateral-backed stable assets.",
    link: "https://sigmausd.io/",
    more: "/Docs/ecosystem/financial/monetary-systems/sigmausd"
  },
  {
    name: "DexyGold",
    status: "In Development",
    category: "Stablecoins",
    description: "Gold-backed stable asset protocol for the Ergo blockchain.",
    link: null,
    more: "/Docs/ecosystem/financial/monetary-systems/dexygold"
  },
  {
    name: "ChainCash",
    status: "In Development",
    category: "Experimental",
    description: "Experimental stablecoin protocol designed for the Ergo blockchain.",
    link: null,
    more: "/Docs/ecosystem/financial/monetary-systems/chaincash"
  },
  {
    name: "Gluon",
    status: "In Development",
    category: "Experimental",
    description: "Research project exploring new models for stable value on Ergo.",
    link: null,
    more: "/Docs/ecosystem/financial/monetary-systems/gluon"
  },
  {
    name: "LETS (Local Exchange Trading Systems)",
    status: "Experimental",
    category: "LETS",
    description: "Community-based monetary systems enabling local, trustless exchange of value.",
    link: null,
    more: "/Docs/ecosystem/financial/monetary-systems/lets",
    subpages: [
      { name: "Basic Implementation", href: "/Docs/ecosystem/financial/monetary-systems/basic-implementation" },
      { name: "Trustless LETS", href: "/Docs/ecosystem/financial/monetary-systems/trustless-lets" }
    ]
  }
];

const categories = [
  { key: "Stablecoins", label: "Stablecoins", icon: <Coins className="w-6 h-6 text-cyan-400" /> },
  { key: "Experimental", label: "Experimental", icon: <FlaskConical className="w-6 h-6 text-orange-400" /> },
  { key: "LETS", label: "LETS", icon: <Users className="w-6 h-6 text-green-400" /> },
];

const whyMonetary = [
  "Enable decentralized, censorship-resistant value transfer.",
  "Provide stable assets for DeFi and real-world use.",
  "Support experimental and community-driven monetary models.",
];

export default function MonetarySystemsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Monetary Systems
      </h1>
      {/* Overview Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          Ergo’s monetary systems include a range of stablecoins, experimental protocols, and local exchange trading systems, empowering users with decentralized, community-driven value transfer.
        </p>
      </div>
      {/* Why Monetary Systems Matter */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Why Monetary Systems Matter
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          {whyMonetary.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      {categories.map(cat => (
        <section key={cat.key} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            {cat.icon} {cat.label}
          </h2>
          {/* Info blocks for each category */}
          {cat.key === "Stablecoins" && (
            <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-cyan-400">
                <Coins className="w-5 h-5" /> Stablecoins on Ergo
              </h3>
              <p className="text-gray-300 mb-2">
                Stablecoins on Ergo provide decentralized, collateral-backed assets for payments, DeFi, and savings, without reliance on centralized issuers.
              </p>
            </div>
          )}
          {cat.key === "Experimental" && (
            <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-orange-400">
                <FlaskConical className="w-5 h-5" /> Experimental Protocols
              </h3>
              <p className="text-gray-300 mb-2">
                Experimental protocols explore new models for stability, value, and monetary innovation on the Ergo blockchain.
              </p>
            </div>
          )}
          {cat.key === "LETS" && (
            <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-green-400">
                <Users className="w-5 h-5" /> Local Exchange Trading Systems (LETS)
              </h3>
              <p className="text-gray-300 mb-2">
                LETS are community-based monetary systems that enable local, trustless exchange of value and support grassroots economic activity.
              </p>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {monetaryList.filter(item => item.category === cat.key).map(item => (
              <div
                key={item.name}
                className={`relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-neutral-700 hover:border-cyan-400/60`}
              >
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    {item.name}
                    {item.status && (
                      <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded ${item.status === 'Live' ? 'bg-green-700/80 text-green-200' : item.status === 'Experimental' ? 'bg-orange-700/80 text-orange-200' : item.status === 'In Development' ? 'bg-cyan-800/80 text-cyan-200' : 'bg-neutral-800 text-gray-400'}`}>{item.status}</span>
                    )}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                  {/* Subpages for LETS */}
                  {item.subpages && (
                    <div className="ml-2 mb-2">
                      {item.subpages.map((sub) => (
                        <div key={sub.href} className="pl-2 border-l border-neutral-700 mb-1">
                          <a href={sub.href} className="text-cyan-400 hover:underline text-sm">{sub.name}</a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  {/* More button */}
                  {item.more ? (
                    <a
                      href={item.more}
                      className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                    >
                      More
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                      More
                    </span>
                  )}
                  {/* Visit button */}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                    >
                      Visit <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                      Visit <ExternalLink className="w-4 h-4 ml-1" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
} 