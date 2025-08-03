"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, Box, RefreshCw, Info, AlertTriangle } from "lucide-react";

export default function ModelTransactionPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Understanding Model Transaction
      </h1>

      {/* Introduction */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Database className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">UTXO vs Account Model</h2>
        </div>
        <p className="text-gray-300 mb-4">
          The UTXO (Unspent Transaction Output) model, which we use, can be a bit confusing if you're used to the Account model. Here's a simple way to understand it: In the Account model, you have a single account where you receive your coins. In the UTXO model, every transaction creates a new "box", and your balance is the sum of all the boxes linked to your addresses.
        </p>
        <p className="text-gray-300">
          In other words, your Yoroi private key can consist of multiple boxes within a single address to hold your coins.
        </p>
        
        {/* First Image */}
        <div className="mt-6 flex justify-center">
          <img 
            src="https://lh6.googleusercontent.com/qxEWrauKaD8yEXAjwXFzlikSNAXFeAxSPwuxUolS410Xf5HgOzJh_1vCL6YOfFfOyWnBhxLVIWZ0scz4BbIF9w4Tm_9aywTKo3EIrvG0zSPhCIPvLoyrlwgvZCHWHqEfXZb43klV=s0" 
            alt="UTXO Model Diagram" 
            className="max-w-full h-auto rounded-lg border border-neutral-700 shadow-lg"
          />
        </div>
      </div>

      {/* Back Button */}
      <Link href="/Docs/developers/data-model-apis/resources" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Resources</span>
        </button>
      </Link>

      {/* Box Creation */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Box className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-blue-400">Box Creation Process</h2>
        </div>
        <p className="text-gray-300 mb-4">
          When you generate a new address, a secondary box is created to hold your coins. Once created, you can send funds to this new address. These funds will be linked with your private key. You can create an unlimited number of new boxes to hold your coins. Therefore, every receiving and spending action will also create an additional unique box.
        </p>
        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mt-4">
          <p className="text-yellow-200 font-semibold mb-2">⚠️ Important Note</p>
          <p className="text-gray-300 text-sm">
            This feature can initially create misconceptions. When you make a transaction, the network scans your "boxes" to verify if you have your tokens and then initiates the transaction.
          </p>
        </div>
      </div>

      {/* Transaction Complexity */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-purple-400">Transaction Complexity</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Things get complex after this point because you can not predict which boxes are going to be spent. Let's say you have three different receiving addresses. You received a couple of coins in each of them, and you want to spend some of your coins. In a Yoroi wallet, you can hold any Ergo native coins such as SigRSV or SigUSD. When you initiate a transaction that accesses the boxes of these coins, you will see that they are taken away and then redeposited.
        </p>
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mt-4">
          <p className="text-blue-200 font-semibold mb-2">💡 Real Example</p>
          <p className="text-gray-300 text-sm">
            Recently, an Ergonaut raised the following <a href="https://www.reddit.com/r/ergonauts/comments/prn7x3/comment/hdty87z/?utm_source=share&utm_medium=web2x&context=3" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">question</a>: 
          </p>
          <blockquote className="border-l-4 border-orange-400 pl-4 mt-2 text-gray-300 italic">
            "I just created a Yoroi Nightly wallet. I transferred 31 Erg from my main Yoroi wallet to the Yoroi Nightly wallet. The transaction shows 31 Erg plus a small fee, 0.0011. But it also says +92,000 SigRSV. My balance shows no change in SigRSV. What is the meaning of the +92,000 SigRSV in the transaction?"
          </blockquote>
        </div>
      </div>

      {/* Transaction Breakdown */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Info className="w-6 h-6 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-orange-400">Transaction Breakdown</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Let's break down this particular <a href="https://explorer.ergoplatform.com/en/transactions/143f5ba0ee1482d332d1020c94f261399f220c7f4523063ade8290c478acbd29" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">transaction</a>:
        </p>
        
        {/* Second Image */}
        <div className="mb-6 flex justify-center">
          <img 
            src="https://lh5.googleusercontent.com/HOFhlYx5l3wvUzET-wa9E4dhU8az4srODa_4n09qZm3y-gWQz1L9Obw5qobgQM5Bthokn8SYMuO13cLDNEW5fqbboSj3qAwf2rzYH1rHkyvaoDsIMSDa3zwJU31s5XLEc_n5VbZ0=s0" 
            alt="Transaction Breakdown Diagram" 
            className="max-w-full h-auto rounded-lg border border-neutral-700 shadow-lg"
          />
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
          <p className="text-gray-300 mb-4">
            To make a transaction of '31 ERG`, the wallet selected three of the boxes with ERG:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>A box containing <code className="bg-neutral-700 px-2 py-1 rounded">0.029595 ERG</code> that was received on <code className="bg-neutral-700 px-2 py-1 rounded">07/19/21</code></li>
            <li>A second box containing <code className="bg-neutral-700 px-2 py-1 rounded">19.76 ERG</code> that was received on <code className="bg-neutral-700 px-2 py-1 rounded">07/19/21</code></li>
            <li>A third box containing <code className="bg-neutral-700 px-2 py-1 rounded">208.26 ERG</code> that was received on <code className="bg-neutral-700 px-2 py-1 rounded">06/09/21</code></li>
          </ul>
          <p className="text-gray-300 mt-4">
            On the left section of the image above, you will see approximately 228 ERG taken, while on the right section, you will see 31 ERG sent and 197 ERG redeposited to your wallet.
          </p>
        </div>
        <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mt-4">
          <p className="text-green-200 font-semibold mb-2">🔍 Key Insight</p>
          <p className="text-gray-300 text-sm">
            So your wallet used three of your boxes to spend the desired amount. This action includes all the assets in that box to the transaction. After the desired amount is spent, your funds are simply refunded to your address in a newly created UTXO box or boxes. Therefore, spending any coin in a box means spending the whole box and creating a new UTXO box, which is why you see your tokens are taken away and then redeposited.
          </p>
        </div>
        <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4 mt-4">
          <p className="text-purple-200 font-semibold mb-2">🎯 Box Selection</p>
          <p className="text-gray-300 text-sm">
            The selection of which boxes to spend is determined by the wallet's random selection strategy. Whatever coins are in the selected boxes, be it SigRSV, SigUSD or NFT will be displayed as per the example.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-cyan-400">Summary</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-red-400">Account Model</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Contains a single box</li>
              <li>This box is not spent</li>
              <li>It remains the same</li>
              <li>Non-related coins remain unaffected</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-green-400">UTXO Model</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Contains a set of boxes</li>
              <li>Represents total user balance</li>
              <li>Unspent transaction output changes with each spending transaction</li>
              <li>Coins stored in one-use UTXO boxes</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mt-6">
          <p className="text-yellow-200 font-semibold mb-2">📝 Important Note</p>
          <p className="text-gray-300 mb-4">
            You may see a long list of tokens when swapping just 5 SigRSV as below:
          </p>
          
          {/* Third Image */}
          <div className="flex justify-center">
            <img 
              src="https://lh6.googleusercontent.com/wK-uprlqrj6wKt74AODkxBt6xR5Dey_qGB4kclXm5OuhWz2nfIuBTZm412oFA1h0OHXRi_oGcx6y7jR6A6kRcgpAUU7vSaQrfAMY6lKzdzy8THl2Hh2uEMzHjs5M5Sdlly6DO8f4=s0" 
              alt="Token List Example" 
              className="max-w-full h-auto rounded-lg border border-neutral-700 shadow-lg"
            />
          </div>
          
          <p className="text-gray-300 mt-4">
            This is how UTXO model Transaction works - its storage is different from the Accounts model. In the UTXO model, coins will be stored in one-use UTXO boxes and not in long-living accounts.
          </p>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Related Documentation</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="/Docs/introduction/eutxo" className="text-orange-400 hover:underline">Extended UTXO Model</a></li>
              <li><a href="/Docs/developers/data-model-apis" className="text-orange-400 hover:underline">Data Model & APIs</a></li>
              <li><a href="/Docs/developers/box" className="text-orange-400 hover:underline">Box Overview</a></li>
              <li><a href="/Docs/developers/transactions" className="text-orange-400 hover:underline">Transaction Structure</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">External Links</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://explorer.ergoplatform.com/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Explorer</a></li>
              <li><a href="https://github.com/ergoplatform/ergo" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Core</a></li>
              <li><a href="https://ergoplatform.org/en/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Platform</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 