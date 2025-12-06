"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";

export default function BabelFeesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Babel Fees
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/data-model-apis"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Data Model & APIs
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            Babel fees (introduced via <a href="https://github.com/ergoplatform/eips/blob/master/eip-0031.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0031</a>) allow users to pay transaction fees in tokens other than the platform's primary token (ERG). This system is particularly helpful for users primarily interested in transferring tokens without needing to obtain ERG.
          </p>
        </div>

        {/* Hero Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link href="/docs/developers/data-model-apis/babel-fees/babel-fleet" className="group">
            <button className="px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-green-400 font-semibold">Babel Fees Plugin</span>
            </button>
          </Link>
          <Link href="/docs/developers/data-model-apis/babel-fees/how-to" className="group">
            <button className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl hover:bg-teal-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <span className="text-teal-400 font-semibold">How To</span>
            </button>
          </Link>
          <Link href="/docs/developers/data-model-apis/babel-fees/implementation" className="group">
            <button className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <span className="text-blue-400 font-semibold">Implementation</span>
            </button>
          </Link>
        </div>

        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">How Babel Fees Work on Ergo</h2>
          <p className="text-gray-300 mb-4">
            On Ergo, Babel fee payments are facilitated through pre-defined Babel Fee pools, offering a predictable and transparent fee payment process. This system differs from Cardano's approach, where users broadcast incomplete transactions and wait for a third party to pay fees in ADA in exchange for the offered tokens.
          </p>
          
          <p className="text-gray-300 mb-4">
            Here's how Babel fees work:
          </p>
          
          <ol className="list-decimal list-inside ml-4 space-y-4 text-gray-300">
            <li className="space-y-2">
              <b className="text-green-300">EIP-31 Supporters Provide Liquidity:</b>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
                <li>Users (referred to as "EIP-31 supporters") create Unspent Transaction Outputs (UTXOs) containing ERG locked in a smart contract</li>
                <li>These UTXOs have a price attribute specifying the amount of ERG the supporter is willing to pay for one unit of a specific "babel token"</li>
                <li>Smart contracts secure these UTXOs</li>
              </ul>
            </li>
            
            <li className="space-y-2">
              <b className="text-green-300">Users Select a Babel Fee Box:</b>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
                <li>Users locate UTXOs for their desired token</li>
                <li>Verify sufficient ERG for transaction fees</li>
                <li>Evaluate exchange rates</li>
                <li>Choose the most favorable rate</li>
              </ul>
            </li>
            
            <li className="space-y-2">
              <b className="text-green-300">Babel Fee Box is Spent and Recreated:</b>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
                <li>User spends the selected UTXO</li>
                <li>Recreates UTXO with identical parameters (creator's public key and price)</li>
                <li>Deposits required token amount</li>
                <li>Smart contract ensures the difference in ERG is less than or equal to the amount of inserted babel tokens multiplied by the price</li>
              </ul>
            </li>
          </ol>
          
          <div className="mt-6 p-4 bg-blue-900/30 border border-blue-600/30 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-blue-300 mb-2"><b>On Cardano</b>, you will send an "incomplete" transaction, offering to pay the fee using x amount of tokens and wait until a third party accepts your tokens in exchange for ADA to pay the fees.</p>
                <p className="text-sm text-green-300"><b>On Ergo</b>, we have pre-defined Babel Fee pools, so there is no waiting, and we can know in advance what tokens we can use to pay fees and the best price available.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-300">Additional Resources</h3>
            <p className="text-gray-300 mb-4">
              For more information about the origin of the term and concepts behind "babel fees", please see the following articles:
            </p>
            
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://iohk.io/en/blog/posts/2021/02/25/babel-fees/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Babel fees - denominating transaction costs in native tokens</a></li>
              <li><a href="https://www.ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Paying fee in ErgoMix in primary tokens</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Providing Babel Fee Liquidity</h2>
          <p className="text-gray-300 mb-4">
            Providing liquidity for Babel fees is a way to earn passive income while helping new users onboard to Ergo. As a liquidity provider, you lock up ERG in a smart contract and specify a rate at which you're willing to buy tokens. When users pay transaction fees with those tokens, you automatically receive them in exchange for your ERG. This creates a win-win situation - users can transact without needing ERG, and you accumulate tokens at your desired rate.
          </p>
          
          <div className="mt-6 p-4 bg-teal-900/30 border border-teal-600/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-teal-300">Step-by-Step Guide</h3>
            <ol className="list-decimal list-inside ml-4 space-y-3 text-gray-300">
              <li>Go to the <a href="https://tokenjay.app/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Tokenjay</a> site</li>
              <li>Click "Open App"</li>
              <li>Click "Purchase Tokens"</li>
              <li>Click "Babel Fee Liquidity"</li>
              <li>Connect a compatible ErgoPay wallet</li>
              <li>Click "create new babel fee box"</li>
              <li>Select token from drop-down box or own ID entered below</li>
              <li>Optional: Enter token ID of a fungible token (not an NFT) not on drop-down list</li>
              <li>Enter rate, or number of $ERG per token, often as a decimal, such as 0.0001</li>
              <li>Enter the amount of $ERG you are willing to buy at that rate</li>
              <li>Click "create Babel fee box"</li>
              <li>Scan QR code</li>
              <li>Check the rates before signing</li>
              <li>Optional: Go back to Step 6 if the rates were not as expected</li>
              <li>Sign transaction in your ErgoPay compatible wallet</li>
            </ol>
          </div>
        </div>

        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Developers</h2>
          <p className="text-gray-300 mb-4">
            By implementing babel fees in your application, you can enable new users to start transacting immediately using tokens instead of ERG. The Fleet SDK makes this easy with its babel-fees plugin, which handles all the complexities of token-to-ERG conversions and contract interactions.
          </p>
          
          <p className="text-gray-300">
            You can see the full documentation <Link href="/docs/developers/data-model-apis/babel-fleet" className="text-orange-400 hover:underline">here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
} 