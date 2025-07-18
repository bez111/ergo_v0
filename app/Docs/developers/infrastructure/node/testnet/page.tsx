"use client";
import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";

const cards = [
  {
    title: "Synchronising from scratch",
    content: "Start sychronising with the testnet from genesis",
    url: "/Docs/developers/infrastructure/node/testnet/testnet-full.md"
  },
  {
    title: "ergo-synced-node",
    content: "A presynced testnet node from MGPai",
    url: "https://github.com/mgpai22/ergo-synced-node#ergo-testnet-node-setup"
  },
  {
    title: "CPU Mining",
    content: "You can use your CPU to mine on the testnet",
    url: "/Docs/developers/infrastructure/node/testnet/cpu-mining.md"
  },
  {
    title: "Mine your own chain",
    content: "Start your own alternative version of Ergo with custom parameters.",
    url: "/Docs/developers/infrastructure/node/testnet/mine-your-own-chain.md"
  },
  {
    title: "Resources",
    content: "Port numbers, bookmarks, and any other testnet resources here!",
    url: "/Docs/developers/infrastructure/node/testnet/testnet-resources.md"
  }
];

export default function TestnetPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Testnet
      </h1>
      <div className="flex items-start bg-cyan-900/20 border border-cyan-400/30 rounded-xl p-4 mb-8">
        <Info className="w-6 h-6 text-cyan-400 mr-3 mt-1" />
        <div>
          <p className="text-base text-gray-200 mb-1">
            The testnet is an alternative Ergo blockchain you can use for testing and experimentation without having to use real ERG or worrying about breaking the main chain.
          </p>
          <p className="text-sm text-cyan-200">
            The testnet runs on different ports than the mainnet and can be accessed by changing your <code className="bg-neutral-800 px-1 rounded">.conf</code> and running with the <code className="bg-neutral-800 px-1 rounded">--testnet</code> flag.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <a
            key={card.title}
            href={card.url}
            target={card.url.startsWith('http') ? '_blank' : undefined}
            rel={card.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="block bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400 transition-colors h-full"
          >
            <h2 className="text-xl font-semibold text-orange-300 mb-2">{card.title}</h2>
            <p className="text-gray-300 text-base mb-2">{card.content}</p>
            <span className="text-cyan-400 text-sm font-medium hover:underline">Learn more →</span>
          </a>
        ))}
      </div>
    </>
  );
} 