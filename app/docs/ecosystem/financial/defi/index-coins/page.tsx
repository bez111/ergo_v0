import React from "react";
import { Coins, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function IndexCoinsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Index Coins
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Indexed tokens let investors diversify and gain exposure to multiple cryptocurrencies in a single asset—powered by dynamic market-making and transparent on-chain logic.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Coins className="w-6 h-6 text-cyan-400" /> What are Index Coins?
        </h2>
        <p className="text-gray-300 mb-4">
          Not all crypto investors are conscient of different blockchain use cases. Some of the investors may want to benefit from indexed tokens to invest in various cryptocurrencies. For such an innovation, dynamic market-making (DMM) algorithms would be necessary to adjust the funds after price changes. Besides, people who will release index tokens must have the market knowledge to decide which tokens must be involved in the indexed and for how many percentage. Some examples of index coins running on Ethereum are ASSY, YETI, PIPT, YLA issued by Powerpool Protocol.
        </p>
      </div>
    </>
  );
} 