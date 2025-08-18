"use client";

import React from "react";
import { CheckCircle, Zap, TrendingUp, ExternalLink, Info } from "lucide-react";

const dexList = [
  {
    name: "Mew Finance",
    status: "Live",
    description:
      "Mew Finance is a sophisticated decentralized finance platform on the Ergo Blockchain, designed to deliver a secure, user-friendly, and innovative DeFi experience.",
    highlight: true,
    link: "https://mew.fi"
  },
  {
    name: "Spectrum Finance",
    status: "Live",
    description:
      "Spectrum Finance is a pioneering open-source, cross-chain decentralized exchange (DEX) platform, currently offering liquidity provision (LP), yield farming, and babel fees on the Cardano (ADA) and Ergo (ERG) networks.",
    link: "https://spectrum.fi/"
  },
  {
    name: "Trade House",
    status: "In Development",
    description:
      "Trade House is a new DEX project aiming to bring innovative trading features to the Ergo ecosystem.",
    link: "#"
  },
  {
    name: "Palmyra ComDEX",
    status: "MVP Live",
    description:
      "Palmyra ComDEX, the flagship product of zenGate, enables tokenization and listing of certified commodities for spot and futures trading on a global scale.",
    link: "https://zengate.global/"
  },
  {
    name: "Crystal Pool",
    status: "In Development",
    description:
      "Crystal Pool is an upcoming DEX and liquidity pool platform for the Ergo blockchain.",
    link: "#"
  },
  {
    name: "Machina Finance",
    status: "In Development",
    description:
      "Machina Finance aims to promote decentralization and facilitate P2P trade by leveraging the power of grid contracts.",
    link: "https://machina.finance/"
  },
  {
    name: "GuapSwap",
    status: "V2 in Development",
    description:
      "GuapSwap is a fully decentralized smart contract profit swapping service on the Ergo Blockchain.",
    link: "https://guapswap.com/"
  },
];

export default function DexPage() {
  return (
    <>
      {/* HERO Section with Back Button */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Decentralised Exchanges (DEXs)
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Explore Ergo's DEX landscape: non-custodial, cross-chain, and innovative trading platforms for everyone.
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
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          Ergo’s DEX ecosystem is rapidly evolving, offering a range of platforms for non-custodial, permissionless, and innovative trading. From cross-chain liquidity to commodity tokenization and peer-to-peer swaps, Ergo’s DEX landscape empowers users and developers alike.
        </p>
      </div>
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Why DEXs Matter
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Non-custodial: You keep control of your funds at all times.</li>
          <li>Democratized access for both developers and investors.</li>
          <li>Open, permissionless, and censorship-resistant trading.</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-cyan-400" /> Decentralised Exchanges on Ergo
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {dexList.map((dex, idx) => {
          // Определяем внутреннюю ссылку для More
          let moreLink = null;
          if (dex.name === "Spectrum Finance") moreLink = "/docs/ecosystem/financial/dex/spectrum";
          if (dex.name === "Trade House") moreLink = "/docs/ecosystem/financial/dex/trade-house";
          if (dex.name === "Palmyra ComDEX") moreLink = "/docs/ecosystem/financial/dex/palmyra";
          if (dex.name === "Crystal Pool") moreLink = "/docs/ecosystem/financial/dex/crystal-pool";
          if (dex.name === "Machina Finance") moreLink = "/docs/ecosystem/financial/dex/machina";
          if (dex.name === "Mew Finance") moreLink = "/docs/ecosystem/financial/dex/mew";
          if (dex.name === "GuapSwap") moreLink = "/docs/ecosystem/financial/dex/guapswap";
          if (dex.name === "Token Jay") moreLink = "/docs/ecosystem/financial/dex/token-jay";
          // Можно добавить другие moreLink при появлении внутренних страниц

          return (
            <div
              key={dex.name}
              className={`relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 ${dex.highlight ? "border-green-500/70 shadow-lg" : "border-neutral-700 hover:border-cyan-400/60"}`}
            >
              {dex.highlight && (
                <div className="absolute -top-3 left-4 flex items-center gap-1 bg-green-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  <CheckCircle className="w-4 h-4 mr-1 text-white" /> Featured
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  {dex.name}
                  {dex.status && (
                    <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded ${dex.status.includes('Live') ? 'bg-green-700/80 text-green-200' : 'bg-neutral-800 text-gray-400'}`}>{dex.status}</span>
                  )}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{dex.description}</p>
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
                {dex.link ? (
                  <a
                    href={dex.link}
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
      {/* P2P Trading Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
          P2P Trading
        </h2>
        <p className="text-gray-300 mb-6">
          P2P trading, or peer-to-peer trading, is a method of exchanging cryptocurrencies directly between individuals without needing a centralised exchange or intermediary. In P2P trading, buyers and sellers connect directly with each other through a marketplace or platform, negotiate the terms of the trade, and then transfer the cryptocurrency directly between their wallets.
        </p>
        <p className="text-gray-400 mb-8">
          There are a couple of options for P2P trading on Ergo:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Token Jay */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-2 text-orange-300">Token Jay</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Trade tokens person to person, trustless and decentralised with TokenJay's open P2P Escrow service.
            </p>
            <div className="flex flex-row justify-between items-center gap-2 mt-auto">
              <a
                href="/docs/ecosystem/financial/dex/token-jay"
                className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline"
              >
                More
              </a>
              <a
                href="https://tokenjay.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 font-semibold hover:underline"
              >
                Visit <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          {/* Analog Ergo */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-2 text-cyan-300">Analog Ergo</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Analog Ergo is a cross-chain peer-to-peer marketplace in development.
            </p>
            <div className="flex flex-row justify-between items-center gap-2 mt-auto">
              <a
                href="/docs/ecosystem/financial/dex/analog-ergo"
                className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline"
              >
                More
              </a>
              <a
                href="https://analog-ergo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 font-semibold hover:underline"
              >
                Visit <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          {/* Single Tx Swap */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-2 text-green-300">Single Tx Swap</h3>
            <p className="text-gray-300 mb-4 text-sm">
              single-tx-swap.com is a multi-sig trustless escrow service compatible with Nautilus.
            </p>
            <div className="flex flex-row justify-between items-center gap-2 mt-auto">
              <a
                href="/docs/ecosystem/financial/dex/single-tx-swap"
                className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline"
              >
                More
              </a>
              <a
                href="https://single-tx-swap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 font-semibold hover:underline"
              >
                Visit <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
