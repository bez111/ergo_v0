"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, Info } from "lucide-react";

const cards = [
  {
    title: "Sync from scratch",
    content: "Start syncing with the testnet from genesis",
    url: "/Docs/developers/infrastructure/node/testnet/testnet-full"
  },
  {
    title: "Use a presynced node",
    content: "Quickly launch a ready-to-use node from MGPai",
    url: "https://github.com/mgpai22/ergo-synced-node#ergo-testnet-node-setup"
  },
  {
    title: "Mine with CPU",
    content: "Use your CPU to mine blocks on the testnet",
    url: "/Docs/developers/infrastructure/node/testnet/cpu-mining"
  },
  {
    title: "Launch a custom chain",
    content: "Fork Ergo with your own parameters",
    url: "/Docs/developers/infrastructure/node/testnet/mine-your-own-chain"
  },
  {
    title: "Testnet Resources",
    content: "All port numbers, bookmarks, and tools in one place",
    url: "/Docs/developers/infrastructure/node/testnet/testnet-resources"
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
      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Node
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <a
            key={card.title}
            href={card.url}
            target={card.url.startsWith('http') ? '_blank' : undefined}
            rel={card.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group block bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400 transition-colors h-full flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-orange-300 mb-2">{card.title}</h2>
              <p className="text-gray-300 text-base mb-2">{card.content}</p>
            </div>
            <div className="flex justify-end mt-4">
              <span className="text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:underline">
                Learn more
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
} 