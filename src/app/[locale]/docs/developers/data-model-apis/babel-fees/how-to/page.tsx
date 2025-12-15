"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function BabelFeesHowToPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        How To Use Babel Fees
      </h1>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/babel-fees" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Babel Fees</span>
        </button>
      </Link>

      {/* The Problem */}
      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">The Problem</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Every blockchain requires a fee to fund transactions, and it is most often a blockchain's respective coin that pays for transactions on the network. In the case of Ergo, every transaction requires a payment in <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code>.
          </p>
          <p>
            For those who are active within a blockchain's ecosystem, there is often a desire to hold assets other than that blockchain's coin. You may want to buy NFTs, or you may want other tokens native to the blockchain. Depending on a wallet's holdings, the need to use <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> to pay for transactions may create some complexities. What if the wallet does not have enough <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> to fund a transaction where the user is trying to send a native token? This sort of scenario might discourage a person from using the chain because they cannot fund a transaction with <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code>.
          </p>
          <p>
            Based on the above scenario, it would be more convenient to pay for transactions in native tokens rather than <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code>. This is now possible with the introduction of Babel fees.
          </p>
        </div>
      </div>

      {/* Babel Fees */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Babel Fees</h2>
        <p className="text-gray-300">
          With Babel fees, you no longer need <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> to pay for a transaction. You can pay for the transaction using fungible, native tokens that have liquidity. Let's take a look at how this new feature works on Ergo.
        </p>
      </div>

      {/* Providing Babel Fee Liquidity */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Providing Babel Fee Liquidity</h2>
        <p className="text-gray-300 mb-4">
          Before using Babel fees, someone (or many people) must provide liquidity on the blockchain. They agree to buy the native asset for <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> at some rate. To illustrate:
        </p>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 mb-6">
          <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300">
            <li>Go to the <a href="https://tokenjay.app/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Tokenjay</a> site.</li>
            <li>Click "Open App".</li>
            <li>Click "Purchase Tokens".</li>
            <li>Click "Babel Fee Liquidity".</li>
            <li>Connect a compatible ErgoPay wallet.</li>
            <li>Click "create new babel fee box".</li>
            <li>Select token from drop-down box or own ID entered below.</li>
            <li>Optional: Enter token ID of a fungible token (not an NFT) not on drop-down list.</li>
            <li>Enter rate, or number of <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> per token, often as a decimal, such as 0.0001.</li>
            <li>Enter the amount of <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> you are willing to buy at that rate.</li>
            <li>Click "create Babel fee box".</li>
            <li>Scan QR code.</li>
            <li>Check the rates before signing.</li>
            <li>Optional: Go back to Step 6 if the rates were not as expected.</li>
            <li>Sign transaction in your ErgoPay compatible wallet.</li>
          </ol>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 mb-4">
          <Image 
            src="https://storage.googleapis.com/ergo-cms-media/babel_liquidity_1_adbeccffe1/babel_liquidity_1_adbeccffe1.png" 
            alt="Babel Liquidity Setup screenshot" 
            width={1280} height={720}
            className="w-full h-auto rounded-lg" 
          />
        </div>

        <p className="text-gray-300">
          This provides a Babel Fee bank box, which anyone can use to trade the digital asset for <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> to pay for transactions. Building the transaction is handled within a wallet that supports Babel Fees.
        </p>
      </div>

      {/* Using Babel Fee Bank Boxes */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Using Babel Fee Bank Boxes</h2>
        <p className="text-gray-300 mb-4">
          Using Babel Fee Boxes is simple. Nautilus, for example, allows you to pick a token to pay a fee based on what is in your wallet, and it selects the best rate from the Babel Fee bank boxes available on the blockchain. In the case below, the token SigUSD is being used to swap for the necessary amount of <code className="bg-neutral-700 px-1 py-0.5 rounded">$ERG</code> to pay for the transaction. The process of choosing to pay with Babel fees is as simple as selecting the native asset from a pull-down list.
        </p>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 mb-4">
          <Image 
            src="https://storage.googleapis.com/ergo-cms-media/babel_nautilius_1_0203d2c22a/babel_nautilius_1_0203d2c22a.png" 
            alt="Babel Fees in Nautilus Wallet screenshot" 
            width={1280} height={720}
            className="w-full h-auto rounded-lg" 
          />
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Conclusion</h2>
        <p className="text-gray-300">
          Babel Fees are an innovative solution that make blockchains easier to use. For users, they eliminate the need to keep the blockchain coin in each wallet they own. It basically helps to prevent assets from getting "stuck" because a wallet does not have the blockchain's coin (or enough of that coin). The introduction of Babel fees on Ergo offers a significant boost to the versatility of the blockchain. With this newly implemented technology, Ergo becomes much more fluid and flexible by increasing the efficiency of transactions and interactions on the network.
        </p>
      </div>
    </div>
  );
} 