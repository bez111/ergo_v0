"use client";

import React from "react";
import { CheckCircle, Zap, TrendingUp, Info, Coins, Layers, Gift, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const defiList: Array<{
  name: string;
  status: "Live" | "Experimental" | "In Development";
  category: "Lending" | "Synthetics & Derivatives" | "Crowdfunding";
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
    name: "SigmaFi",
    status: "Live",
    category: "Lending",
    description: "P2P DeFi bond market for collateralized loans on Ergo.",
    link: "https://github.com/SigmaFi/",
    more: "/Docs/ecosystem/financial/defi/sigmafi",
    highlight: false,
  },
  {
    name: "EXLE",
    status: "In Development",
    category: "Lending",
    description: "Experimental lending engine for DeFi.",
    link: "https://github.com/ergo-pad",
    more: "/Docs/ecosystem/financial/defi/exle",
    highlight: false,
  },  
  {
    name: "Micro Credit",
    status: "In Development",
    category: "Lending",
    description: "Micro-loans for individuals and small businesses — expand access to DeFi on Ergo.",
    link: null,
    more: "/Docs/ecosystem/financial/defi/micro-credit",
  },
  {
    name: "Flash Loans",
    status: "Experimental",
    category: "Lending",
    description: "Instant, collateral-free loans for advanced DeFi strategies and arbitrage on Ergo.",
    link: null,
    more: "/Docs/ecosystem/financial/defi/flash-loans",
  },
  {
    name: "Mutual Credit",
    status: "Experimental",
    category: "Lending",
    description: "Peer-to-peer credit protocols for trustless, decentralized borrowing and lending circles.",
    link: null,
    more: "/Docs/ecosystem/financial/defi/mutual-credit",
  },
  // Synthetics & Derivatives
  {
    name: "SigmaO",
    status: "In Development",
    category: "Synthetics & Derivatives",
    description: "Advanced options and derivatives protocol.",
    link: "https://github.com/SigmaO/",
    more: "/Docs/ecosystem/financial/defi/sigmao",
    highlight: false,
  },
  {
    name: "OptionPools",
    status: "Experimental",
    category: "Synthetics & Derivatives",
    description: "Pooled options trading on Ergo.",
    link: "https://github.com/anon-real/optionpools",
    more: "/Docs/ecosystem/financial/defi/optionpools",
    highlight: false,
  },
  {
    name: "Trustless Prediction Markets",
    status: "Experimental",
    category: "Synthetics & Derivatives",
    description: "100% trustless, permissionless prediction markets powered by the UTXO model. Make markets on any on-chain data, with automatic verification and payout based on smart contracts.",
    link: null,
    more: "/Docs/ecosystem/financial/defi/trustless-prediction-markets",
  },
  {
    name: "Perpetual Tokens",
    status: "Experimental",
    category: "Synthetics & Derivatives",
    description: "Tokens designed to persist indefinitely on-chain, enabled by ErgoScript. Perpetual tokens can only be removed via garbage collection, ensuring long-term existence and innovative protocol design.",
    link: null,
    more: "/Docs/ecosystem/financial/defi/perpetual-tokens",
  },
  {
    name: "Multi-Stage Protocols",
    status: "In Development",
    category: "Synthetics & Derivatives",
    description: "Protocols enabling advanced DeFi logic through scripts that reference each other across stages. Supports complex interactions, including cyclic references and persistent state across transactions.",
    link: null,
    more: "/Docs/ecosystem/financial/defi/multi-stage-protocols",
  },
  
  
  // Crowdfunding
  {
    name: "ErgoRaffle",
    status: "Live",
    category: "Crowdfunding",
    description: "Decentralized raffle and crowdfunding platform.",
    link: "https://ergoraffle.com/",
    more: "/Docs/ecosystem/financial/defi/ergoraffle",
    highlight: false,
  },
  {
    name: "Sigma Subscriptions",
    status: "In Development",
    category: "Crowdfunding",
    description: "Subscription-based crowdfunding protocol.",
    link: "https://github.com/cornbelt-dev/sigma-subscriptions",
    more: "/Docs/ecosystem/financial/defi/sigma-subscriptions",
    highlight: false,
  },
];

const categoryIcons: Record<"Lending" | "Synthetics & Derivatives" | "Crowdfunding", JSX.Element> = {
  Lending: <Coins className="w-6 h-6 text-cyan-400" />,
  "Synthetics & Derivatives": <Layers className="w-6 h-6 text-orange-400" />,
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
    key: "Lending" | "Synthetics & Derivatives" | "Crowdfunding";
    label: string;
    icon: JSX.Element;
  }> = [
    { key: "Lending", label: "Lending", icon: categoryIcons["Lending"] },
    { key: "Synthetics & Derivatives", label: "Synthetics & Derivatives", icon: categoryIcons["Synthetics & Derivatives"] },
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
      {/* Sectors Accordion */}
      <Accordion type="single" collapsible className="mb-12">
        {categories.map((cat, idx) => (
          <AccordionItem key={cat.key} value={cat.key}>
            <AccordionTrigger>
              <span className="flex items-center gap-2">{cat.icon} {cat.label}</span>
            </AccordionTrigger>
            <AccordionContent>
              {/* Info Block */}
          {cat.key === "Lending" && (
            <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-cyan-400">
                    <Coins className="w-5 h-5" /> Lending on Ergo
              </h3>
              <p className="text-gray-300 mb-3">
                    Lending and borrowing are core pillars of DeFi, enabling users to earn yield or unlock liquidity from their assets — all without banks or intermediaries.
                  </p>
                  <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm mb-2">
                    <li><b>Borrow against your crypto:</b> Use your ERG, stablecoins, or even NFTs as collateral to access instant liquidity without selling your holdings.</li>
                    <li><b>Lend and earn:</b> Put your idle assets to work and earn competitive yields by providing liquidity to lending pools.</li>
                    <li><b>Experiment with new models:</b> Explore innovative designs like interest-free loans, microloans, and peer-to-peer credit circles, all powered by smart contracts.</li>
                  </ul>
                  <p className="text-gray-400 text-sm mb-2">
                    Traditional banks offer low interest rates and restrict access. In contrast, Ergo DeFi lending is open, permissionless, and censorship-resistant, giving you full control and new ways to participate in the global financial system.
                  </p>
                  <div className="mt-4">
                    <span className="font-bold text-cyan-400">Featured Examples:</span>
                    <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm mt-1">
                      <li>Interest-free loans via SigmaUSD and custom contracts</li>
                      <li>Microloans and targeted credit for individuals and small businesses</li>
                      <li>Experimental protocols for instant, collateral-free lending (Flash Loans), and decentralized mutual credit</li>
              </ul>
                  </div>
            </div>
          )}
              {cat.key === "Synthetics & Derivatives" && (
            <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-orange-400">
                    <Layers className="w-6 h-6 text-orange-400" /> Synthetics & Derivatives on Ergo
              </h3>
              <p className="text-gray-300 mb-3">
                    Ergo’s advanced smart contract capabilities make it possible to build a new generation of decentralized financial primitives, including synthetic assets, derivatives, prediction markets, and perpetual tokens. These protocols empower traders and DeFi users to create, trade, and manage exposure to a wide range of assets and market outcomes — all in a trustless and decentralized environment.
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm mb-2">
                    <li><b>Synthetic Assets:</b> Create and trade on-chain representations of stocks, commodities, currencies, and other real-world or crypto-native assets.</li>
                    <li><b>Decentralized Derivatives:</b> Trustless protocols for options, futures, and perpetual swaps, enabling users to hedge risk or speculate on price movements.</li>
                    <li><b>Prediction Markets:</b> Bet on real-world events, economic trends, or blockchain outcomes in open, censorship-resistant markets.</li>
                    <li><b>Perpetual Tokens:</b> Innovative DeFi primitives for continuous exposure and leveraged positions, all managed by smart contracts.</li>
              </ul>
              <p className="text-gray-400 text-sm">
                    Ergo’s synthetic and derivative protocols unlock new ways to manage risk, access global markets, and generate yield — giving anyone the tools to participate in the future of open finance.
              </p>
            </div>
          )}
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
              {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {defiList.filter(item => item.category === cat.key).map(item => {
              const moreLink = item.more || null;
              const highlight = (item as any).highlight;
              let description = item.description;
                  if (cat.key === "Synthetics & Derivatives") {
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
                        <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap ${item.status === 'Live' ? 'bg-green-700/80 text-green-200' : item.status === 'Experimental' ? 'bg-orange-700/80 text-orange-200' : item.status === 'In Development' ? 'bg-cyan-800/80 text-cyan-200' : 'bg-neutral-800 text-gray-400'}`}>{item.status}</span>
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
            </AccordionContent>
          </AccordionItem>
        ))}
        {/* Profit Mechanisms Accordion Item (after Crowdfunding, before Tokenomics) */}
        <AccordionItem value="ProfitMechanisms">
          <AccordionTrigger>
            <span className="flex items-center gap-2"><TrendingUp className="w-6 h-6 text-yellow-400" /> Profit Mechanisms</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-yellow-400/10 border border-yellow-400/60 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-yellow-400">
                <Gift className="w-5 h-5" /> Revenue Sharing on Ergo
              </h3>
              <p className="text-gray-300 mb-3">
                Ergo enables decentralized, programmable profit-sharing for dApps and DAOs. Protocols like the Ergo Profit-Sharing DApp allow for transparent, fair, and automated distribution of income among stakeholders using smart contracts and tokens.
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm mb-2">
                <li>Stakeholders receive rewards based on their staked tokens and system income.</li>
                <li>Distribution, staking, and income contracts ensure security and flexibility.</li>
                <li>Supports both ERG and token-based revenue sharing.</li>
              </ul>
              <p className="text-gray-400 text-sm">
                Explore the protocol and its components below.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Profit Sharing Card */}
              <div className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-yellow-700 hover:border-yellow-400/80">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    Profit Sharing
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap bg-yellow-700/80 text-yellow-200">Experimental</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    A modular solution for decentralized profit/revenue sharing on Ergo. Includes distribution, staking, and income contracts for fair and transparent reward allocation among stakeholders. Can be integrated as a service for other dApps.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  {/* More button */}
                  <Link
                    href="/Docs/ecosystem/financial/defi/revenue-sharing"
                    className="inline-flex items-center text-yellow-400 font-semibold text-base hover:text-yellow-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                  >
                    More
                  </Link>
                  {/* Visit button */}
                  <a
                    href="https://github.com/profit-sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-400 font-semibold text-base hover:text-yellow-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              {/* Buy Back Guarantees Card */}
              <div className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-yellow-700 hover:border-yellow-400/80">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    Buy Back Guarantees
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap bg-yellow-700/80 text-yellow-200">Experimental</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Protocols that guarantee token buybacks, stabilizing price and providing investors with an additional profit assurance.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  <Link
                    href="/Docs/ecosystem/financial/defi/buyback-guarantees"
                    className="inline-flex items-center text-yellow-400 font-semibold text-base hover:text-yellow-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                  >
                    More
                  </Link>
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
              {/* Insurance Card */}
              <div className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-yellow-700 hover:border-yellow-400/80">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    Insurance
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap bg-cyan-800/80 text-cyan-200">In Development</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Decentralized insurance protocols to protect user funds and profits from hacks, bugs, or unexpected events in the DeFi ecosystem.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  <Link
                    href="/Docs/ecosystem/financial/defi/insurance"
                    className="inline-flex items-center text-yellow-400 font-semibold text-base hover:text-yellow-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                  >
                    More
                  </Link>
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* Tokenomics Accordion Item */}
        <AccordionItem value="Tokenomics">
          <AccordionTrigger>
            <span className="flex items-center gap-2"><TrendingUp className="w-6 h-6 text-pink-400" /> Tokenomics</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-pink-400/10 border border-pink-400/60 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-pink-400">
                <TrendingUp className="w-5 h-5" /> Tokenomics on Ergo
              </h3>
              <p className="text-gray-300 mb-3">
                Explore innovative token models and economic primitives on Ergo. From ICOs to index coins, PoW tokens, and bonding curves — these mechanisms power new forms of value creation, distribution, and governance in DeFi.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* ICOs Card */}
              <div className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-pink-700 hover:border-pink-400/80">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    ICOs
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap bg-pink-700/80 text-pink-200">Experimental</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Initial Coin Offerings (ICOs) allow projects to raise funds and distribute tokens to early supporters in a transparent, on-chain process.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    More
                  </span>
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
              {/* Index Coins Card */}
              <div className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-pink-700 hover:border-pink-400/80">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    Index Coins
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap bg-pink-700/80 text-pink-200">Experimental</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Index coins track the value of a basket of assets, providing diversified exposure and simplified portfolio management for DeFi users.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    More
                  </span>
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
              {/* PoW Tokens Card */}
              <div className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-pink-700 hover:border-pink-400/80">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    PoW Tokens
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap bg-pink-700/80 text-pink-200">Experimental</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Proof-of-Work tokens are mined or earned through computational work, enabling new incentive models and decentralized distribution.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    More
                  </span>
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
              {/* Bonding Curve Card */}
              <div className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-pink-700 hover:border-pink-400/80">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    Bonding Curve
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap bg-pink-700/80 text-pink-200">Experimental</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Bonding curves are mathematical mechanisms for dynamic token pricing and supply, enabling continuous fundraising and automated market making.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    More
                  </span>
                  <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
} 