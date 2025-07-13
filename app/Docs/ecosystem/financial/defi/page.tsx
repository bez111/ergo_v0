"use client";

import React from "react";
import { CheckCircle, Zap, TrendingUp, Info, Coins, Layers, Gift, ExternalLink } from "lucide-react";
import Link from "next/link";

const defiList: Array<{
  name: string;
  status: "Live" | "Experimental" | "In Development";
  category: "Lending" | "Derivatives and Synthetics" | "Crowdfunding";
  description: string;
  link: string | null;
  more: string | null;
  highlight?: boolean; // Added for highlighting
}> = [
  // Lending
  {
    name: "duckpools",
    status: "Live",
    category: "Lending",
    description: "Decentralized lending pools on Ergo.",
    link: "https://duckpools.io/",
    more: "/Docs/ecosystem/financial/defi/duckpools",
    highlight: false,
  },
  {
    name: "EXLE",
    status: "In Development",
    category: "Lending",
    description: "Experimental lending engine for DeFi.",
    link: "https://github.com/anon-real/exle",
    more: "/Docs/ecosystem/financial/defi/exle",
    highlight: false,
  },
  {
    name: "SigmaFi",
    status: "Live",
    category: "Lending",
    description: "P2P DeFi bond market for collateralized loans on Ergo.",
    link: "https://github.com/SigmaFi/",
    more: "/Docs/ecosystem/financial/defi/sigmafi",
    highlight: false,
  },
  // Derivatives
  {
    name: "Hodlbox",
    status: "Live",
    category: "Derivatives and Synthetics",
    description: "Yield and synthetic asset platform.",
    link: "https://hodlbox.io/",
    more: "/Docs/ecosystem/financial/defi/hodlbox",
    highlight: false,
  },
  {
    name: "HodlCoin",
    status: "Experimental",
    category: "Derivatives and Synthetics",
    description: "Synthetic asset pegged to holding behavior.",
    link: "https://hodlbox.io/",
    more: "/Docs/ecosystem/financial/defi/hodlcoin",
    highlight: false,
  },
  {
    name: "AuctionCoin",
    status: "Experimental",
    category: "Derivatives and Synthetics",
    description: "Auction-based synthetic asset.",
    link: "https://github.com/anon-real/auctioncoin",
    more: "/Docs/ecosystem/financial/defi/auctioncoin",
    highlight: false,
  },
  {
    name: "OptionCoin",
    status: "Experimental",
    category: "Derivatives and Synthetics",
    description: "Options protocol for synthetic assets.",
    link: "https://github.com/anon-real/optioncoin",
    more: "/Docs/ecosystem/financial/defi/optioncoin",
    highlight: false,
  },
  {
    name: "OptionPools",
    status: "Experimental",
    category: "Derivatives and Synthetics",
    description: "Pooled options trading on Ergo.",
    link: "https://github.com/anon-real/optionpools",
    more: "/Docs/ecosystem/financial/defi/optionpools",
    highlight: false,
  },
  {
    name: "SigmaO",
    status: "In Development",
    category: "Derivatives and Synthetics",
    description: "Advanced options and derivatives protocol.",
    link: "https://github.com/SigmaO/",
    more: "/Docs/ecosystem/financial/defi/sigmao",
    highlight: false,
  },
  // Crowdfunding
  {
    name: "ErgoRaffle",
    status: "Live",
    category: "Crowdfunding",
    description: "Decentralized raffle and crowdfunding platform.",
    link: "https://ergoraffle.com/",
    more: null,
    highlight: false,
  },
  {
    name: "Sigma Subscriptions",
    status: "In Development",
    category: "Crowdfunding",
    description: "Subscription-based crowdfunding protocol.",
    link: "https://github.com/anon-real/sigma-subscriptions",
    more: null,
    highlight: false,
  },
];

const categoryIcons: Record<"Lending" | "Derivatives and Synthetics" | "Crowdfunding", JSX.Element> = {
  Lending: <Coins className="w-6 h-6 text-cyan-400" />,
  "Derivatives and Synthetics": <Layers className="w-6 h-6 text-orange-400" />,
  Crowdfunding: <Gift className="w-6 h-6 text-green-400" />,
};

const advantages = [
  "Non-custodial: You keep control of your funds at all times.",
  "Open, permissionless, and censorship-resistant protocols.",
  "Composability: protocols can be combined to create new products.",
  "Low fees and efficient execution thanks to Ergo’s architecture.",
];

export default function DeFiPage() {
  // Группируем проекты по категориям
  const categories: Array<{
    key: "Lending" | "Derivatives and Synthetics" | "Crowdfunding";
    label: string;
    icon: JSX.Element;
  }> = [
    { key: "Lending", label: "Lending", icon: categoryIcons["Lending"] },
    { key: "Derivatives and Synthetics", label: "Derivatives and Synthetics", icon: categoryIcons["Derivatives and Synthetics"] },
    { key: "Crowdfunding", label: "Crowdfunding", icon: categoryIcons["Crowdfunding"] },
  ];

  // Для примера: если нужно выделить какой-то проект, добавьте highlight: true в defiList

  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Decentralized Finance (DeFi)
      </h1>
      {/* Overview Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          Ergo’s DeFi ecosystem empowers anyone to lend, borrow, trade, and build new financial products — all on a secure, decentralized blockchain. Discover the protocols, advantages, and how to get started below.
        </p>
      </div>
      {/* Why DeFi Matters */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Why DeFi Matters
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          {advantages.map((adv, i) => <li key={i}>{adv}</li>)}
        </ul>
      </div>
      {categories.map(cat => (
        <section key={cat.key} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            {cat.icon} {cat.label}
          </h2>
          {/* Lending Info Block */}
          {cat.key === "Lending" && (
            <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-cyan-400">
                <Coins className="w-5 h-5" /> How Lending & Borrowing Work
              </h3>
              <p className="text-gray-300 mb-3">
                Lending and borrowing are two components that increase liquidity flow in financial systems. For example, you have Bitcoins but want to leverage your holding without selling your BTC. So, you can stake your BTC (or even your house as collateral) to borrow SigUSD and use it in exchanges or yield farming protocols. On the other side, another user can leverage their unused SigUSD by staking in the lending protocol. Traditional banks have very low-interest rates and may take a lot of revenue from your deposits. With decentralized lending protocols, users can lend and borrow across crypto ecosystems without relying on centralized platforms. Crypto lending protocols are open to more experimental designs, such as interest-free loans, enabling even more use cases on blockchains.
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm">
                <li>Loans: we have an interest-free loan contract example</li>
                <li>With SigmaUSD, loans can be attractive to miners and not only</li>
                <li>See also the targeted microloan contract from the "Smart Contracts for the People" article</li>
              </ul>
            </div>
          )}
          {/* Derivatives Info Block */}
          {cat.key === "Derivatives and Synthetics" && (
            <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-orange-400">
                <Layers className="w-5 h-5" /> Derivatives & Options on Ergo
              </h3>
              <p className="text-gray-300 mb-3">
                Ergo's powerful capabilities enable the creation of innovative decentralized finance (DeFi) primitives, including derivatives and options trading protocols. These protocols offer traders alternative platforms for speculating on asset prices, managing risk, and generating yield in a trustless and decentralized manner.
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm mb-2">
                <li>Decentralized Options Trading: Protocols for trustless, on-chain options markets</li>
                <li>Mining power derivatives and other advanced DeFi use cases</li>
              </ul>
              <p className="text-gray-400 text-sm">
                Ergo's decentralized finance ecosystem continues to evolve, offering traders and investors innovative ways to manage risk, speculate on asset prices, and generate yield in a trustless and decentralized manner.
              </p>
            </div>
          )}
          {/* Crowdfunding Info Block */}
          {cat.key === "Crowdfunding" && (
            <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-green-400">
                <Gift className="w-5 h-5" /> Crowdfunding on Ergo
              </h3>
              <p className="text-gray-300 mb-3">
                Crowdfunding for common infrastructure and tooling on the Ergo network is a way for users, developers, and miners to work together to fund and advance the network far into the future.
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm">
                <li>We already have crowdfunding on the Ergo blockchain via <b>Ergo Raffle</b>; this allows projects to host 'Raffles' with a prize percentage allocated to the lucky donor.</li>
                <li><b>ErgoWell</b> is a project meant to be used for investing in ventures trying to raise money through crowdfunding.</li>
                <li><b>ErgoFund</b> will eventually provide a more sophisticated crowdfunding experience, with contracts for campaigns with thousands of pledges and enable 'Self-Soverign DeFi'.</li>
              </ul>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {defiList.filter(item => item.category === cat.key).map(item => {
              // Определяем moreLink и highlight
              const moreLink = item.more || null;
              const highlight = (item as any).highlight;

              // Для карточек Derivatives: лаконичные описания
              let description = item.description;
              if (cat.key === "Derivatives and Synthetics") {
                if (item.name === "HodlCoin") {
                  description = `A high-risk, high-reward game that incentivizes users to HODL ERG. Un-HODLing incurs a penalty fee, rewarding long-term holders.`;
                } else if (item.name === "OptionCoin") {
                  description = `A smart contract that issues tokens and sells them via call options, letting traders speculate on future prices in a decentralized way.`;
                } else if (item.name === "OptionPools") {
                  description = `A pool-to-peer AMM protocol for decentralized options trading on Ergo, featuring dual-asset pools and on-chain pricing.`;
                }
              }

              return (
                <div
                  key={item.name}
                  className={`relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 ${highlight ? "border-green-500/70 shadow-lg" : "border-neutral-700 hover:border-cyan-400/60"}`}
                >
                  {highlight && (
                    <div className="absolute -top-3 left-4 flex items-center gap-1 bg-green-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      <CheckCircle className="w-4 h-4 mr-1 text-white" /> Featured
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      {item.name}
                      {item.status && (
                        <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded ${item.status === 'Live' ? 'bg-green-700/80 text-green-200' : item.status === 'Experimental' ? 'bg-orange-700/80 text-orange-200' : item.status === 'In Development' ? 'bg-cyan-800/80 text-cyan-200' : 'bg-neutral-800 text-gray-400'}`}>{item.status}</span>
                      )}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">{description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                    {/* More button */}
                    {moreLink ? (
                      moreLink.startsWith("http") ? (
                        <a
                          href={moreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                        >
                          More
                        </a>
                      ) : (
                        <Link
                          href={moreLink}
                          className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                        >
                          More
                        </Link>
                      )
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
        </section>
      ))}
    </>
  );
} 