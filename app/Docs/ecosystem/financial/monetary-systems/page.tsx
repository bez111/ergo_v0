"use client";

import React from "react";
import { CheckCircle, Zap, TrendingUp, ExternalLink, Info } from "lucide-react";

const monetaryList = [
  {
    name: "SigmaUSD",
    status: "Live",
    description:
      "SigmaUSD is an algorithmic stablecoin protocol on Ergo, providing decentralized, collateral-backed stable assets.",
    link: "https://sigmausd.io/"
  },
  {
    name: "ChainCash",
    status: "In Development",
    description:
      "ChainCash is an experimental stablecoin protocol designed for the Ergo blockchain.",
    link: null
  },
  {
    name: "Gluon",
    status: "In Development",
    description:
      "Gluon is a research project exploring new models for stable value on Ergo.",
    link: null
  },
  {
    name: "DexyGold",
    status: "In Development",
    description:
      "DexyGold is a gold-backed stable asset protocol for the Ergo blockchain.",
    link: null
  },
  {
    name: "Local Exchange Trading Systems",
    status: "Experimental",
    description:
      "LETS are community-based monetary systems enabling local, trustless exchange of value.",
    link: null,
    subpages: [
      { name: "Basic Implementation", href: "/Docs/ecosystem/financial/monetary-systems/basic-implementation" },
      { name: "Trustless LETS", href: "/Docs/ecosystem/financial/monetary-systems/trustless-lets" }
    ]
  }
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
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-cyan-400" /> Monetary Systems on Ergo
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {monetaryList.map((item, idx) => {
          // Определяем внутреннюю ссылку для More
          let moreLink = null;
          if (item.name === "SigmaUSD") moreLink = "/Docs/ecosystem/financial/monetary-systems/sigmausd";
          if (item.name === "ChainCash") moreLink = "/Docs/ecosystem/financial/monetary-systems/chaincash";
          if (item.name === "Gluon") moreLink = "/Docs/ecosystem/financial/monetary-systems/gluon";
          if (item.name === "DexyGold") moreLink = "/Docs/ecosystem/financial/monetary-systems/dexygold";
          if (item.name === "Local Exchange Trading Systems") moreLink = "/Docs/ecosystem/financial/monetary-systems/lets";

          return (
            <div
              key={item.name}
              className={`relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-neutral-700 hover:border-cyan-400/60`}
            >
              <div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  {item.name}
                  {item.status && (
                    <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded ${item.status.includes('Live') ? 'bg-green-700/80 text-green-200' : 'bg-neutral-800 text-gray-400'}`}>{item.status}</span>
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
                {moreLink ? (
                  <a
                    href={moreLink}
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
          );
        })}
      </div>
    </>
  );
} 