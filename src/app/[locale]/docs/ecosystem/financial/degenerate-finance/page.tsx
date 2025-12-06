"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

import React from "react";
import { Info, Zap, Flame, AlertTriangle, ExternalLink } from "lucide-react";

const degfiProjects = [
  {
    name: "Hodlbox",
    status: "Live",
    description: "Yield and synthetic asset platform with game-theoretic elements.",
    link: "https://hodlbox.io/",
    more: "/docs/ecosystem/financial/degenerate-finance/hodlbox",
  },
  {
    name: "HodlCoin",
    status: "Experimental",
    description: "A game-theoretic protocol where users lock ERG and can un-HODL with a penalty. High risk, high reward.",
    link: "https://hodlbox.io/",
    more: "/docs/ecosystem/financial/degenerate-finance/hodlcoin",
  },
  {
    name: "OptionCoin",
    status: "Experimental",
    description: "Options protocol for synthetic assets, with degenerate risk profiles.",
    link: "https://github.com/anon-real/optioncoin",
    more: "/docs/ecosystem/financial/degenerate-finance/optioncoin",
  },
  {
    name: "AuctionCoin",
    status: "Experimental",
    description: "Auction-based token issuance and buyback mechanism. Transparent but highly speculative.",
    link: "https://github.com/anon-real/auctioncoin",
    more: "/docs/ecosystem/financial/degenerate-finance/auctioncoin",
  },
  {
    name: "Obolflip",
    status: "Experimental",
    description: "A blockchain-based coin flip game with high volatility.",
    link: "https://github.com/ObolFlip/obolflip-client",
    more: "/docs/ecosystem/financial/degenerate-finance/obolflip",
  },
  {
    name: "Lotteries",
    status: "Experimental",
    description: "Decentralized lottery protocols with unpredictable outcomes.",
    link: "https://github.com/anon-real/lotteries",
    more: "/docs/ecosystem/financial/degenerate-finance/lotteries",
  },
  {
    name: "The Field",
    status: "Experimental",
    description: "A community-driven speculative experiment in the DegFi space.",
    link: "https://github.com/anon-real/thefield",
    more: "/docs/ecosystem/financial/degenerate-finance/the-field",
  },
  {
    name: "Grand Gambit",
    status: "Experimental",
    description: "A high-stakes, experimental financial game on the blockchain.",
    link: "https://github.com/anon-real/grandgambit",
    more: "/docs/ecosystem/financial/degenerate-finance/grand-gambit",
  },  
];

export default function DegenerateFinancePage() {
  return (
    <>
      {/* HERO Section with Back Button */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Degenerate Finance (DegFi)
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Explore high-risk, high-reward protocols and experimental financial games on Ergo. Not for the faint of heart!
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/docs/ecosystem/financial"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            Back to Financial
          </a>
        </div>
      </div>
      {/* Overview Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-orange-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          <strong>DegFi</strong> (short for "Degenerate Finance") is a subcategory of DeFi focused on high-risk, high-reward financial strategies and instruments. These protocols often push the boundaries of financial engineering, leveraging game theory, community speculation, and experimental mechanisms. DegFi is not for the faint of heart—participants should always be aware of the risks and never invest more than they can afford to lose.
        </p>
      </div>
      {/* Risk Warning */}
      <div className="bg-neutral-900/50 border border-red-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-400" /> Risk Warning
        </h2>
        <p className="text-gray-300 mb-2">
          Participation in DegFi protocols is highly experimental and comes with significant risks: smart contract bugs, rug pulls, market manipulation, and extreme volatility. There are no guarantees. Reliability is proven only over time. Always manage your risk and trade wisely.
        </p>
      </div>
      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-400" /> DegFi Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {degfiProjects.map((proj) => (
            <div
              key={proj.name}
              className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col transition-all duration-300 border-neutral-700 hover:border-cyan-400/60"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl font-bold">{proj.name}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap ${proj.status === "Live" ? "bg-green-700 text-green-200" : proj.status === "Experimental" ? "bg-orange-700 text-orange-200" : "bg-cyan-800 text-cyan-200"}`}>{proj.status}</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{proj.description}</p>
              </div>
              <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                {proj.more ? (
                  <a
                    href={proj.more}
                    className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                  >
                    More
                  </a>
                ) : <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">More</span>}
                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                ) : <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">Visit <ExternalLink className="w-4 h-4 ml-1" /></span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
} 