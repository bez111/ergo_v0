
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Coins, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function BondingCurvePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Bonding Curves
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Bonding curves are a powerful primitive for continuous token offerings, augmented bonding curves, and even AMM DEXes—enabling dynamic pricing and programmable liquidity.
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
          <Coins className="w-6 h-6 text-cyan-400" /> What are Bonding Curves?
        </h2>
        <p className="text-gray-300 mb-4">
          Bonding curves are a useful primitive for continuous token offerings (CTOs), augmented bonded curves, and perhaps AMM DEXes.<br/><br/>
          There is a cheap way to do bonding curves on Ergo, with most of the load performed off-chain.<br/><br/>
          Assume a project is willing to issue 100 tokens and sell the first one for 100 ergs, second for 200, ..., 100th for 10,000 ergs (to raise 505,000) in total in case of full sale. This is a very simple example of a bonding curve. See this article for more details.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Sell-only</h3>
            <p className="text-gray-300">
              First, assume a token sale scenario only. The token issuer creates 100 boxes with one token each, with a set price for the token in register R4 of a box. The box is spendable if the spending transaction pays the price to the issuer's address (issuer's script in general).
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Sell with buy-back</h3>
            <p className="text-gray-300">
              Now assume that token sell comes with a buy-back guarantee, e.g. seller is buying back tokens within one year since selling for 95% of the selling price. The selling contract requires a spending transaction to lock 95% of the price, at least with buying contract. Buying contract is time-locked and requires a spending transaction to send token bought-back to a predefined address (e.g. issuer's).
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Clients</h3>
            <p className="text-gray-300">
              As the curve is made upon many boxes, some work is required on the client-side, namely the possibility of finding boxes associated with the token and selling-script, and then sorting the boxes by R4.
            </p>
          </div>
        </div>
        <a
          href="https://blog.giveth.io/deep-dive-augmented-bonding-curves-3f1f7c1fa751"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mt-6"
        >
          More details in this Giveth article <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </>
  );
} 