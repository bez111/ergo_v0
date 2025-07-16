"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy as CopyIcon, Check as CheckIcon } from "lucide-react";

function CopyableCodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 bg-neutral-800 border border-neutral-700 rounded p-2 text-cyan-400 hover:bg-neutral-700 transition"
        aria-label="Copy code"
        type="button"
      >
        {copied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
      </button>
      <pre className="bg-neutral-800 rounded p-4 text-sm overflow-x-auto mb-2 mt-0"><code>{code}</code></pre>
    </div>
  );
}

export default function BuyBackGuaranteesPage() {
  const buybackCode = `{
    val defined = OUTPUTS(0).R2[Coll[(Coll[Byte], Long)]].isDefined &&  OUTPUTS(0).R4[Coll[Byte]].isDefined
    (buyerPk && sigmaProp(HEIGHT > 100)) || sigmaProp (if (defined) {
      allOf(Coll(
          OUTPUTS(0).tokens(0)._1 == tokenId, 
          OUTPUTS(0).tokens(0)._2 >= tokenAmount,
          OUTPUTS(0).propositionBytes == sellerPk.propBytes,
          OUTPUTS(0).R4[Coll[Byte]].get == SELF.id)
         )
    } else { false } )
}`;
  const sellCode = `{
  sigmaProp(allOf(Coll(
              blake2b256(OUTPUTS(0).propositionBytes) == bbh,
              OUTPUTS(0).value == buyBackAmount,
              OUTPUTS(1).value >= toWithdraw,
              OUTPUTS(1).propositionBytes == sellerPk.propBytes,
              OUTPUTS(1).R4[Coll[Byte]].get == SELF.id
            ))
           )
}`;
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Buy Back Guarantees
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          Explore decentralized token sale scenarios where the seller provides buyback guarantees. These mechanisms enable programmable, trustless buybacks and composable DEX logic on Ergo.
        </p>
        <Link
          href="/Docs/ecosystem/financial/defi"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-4"
        >
          ← Back to DeFi
        </Link>
      </div>

      {/* Description Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3">How Buyback Guarantees Work</h2>
        <p className="text-gray-300 mb-2">
          The guarantee works as follows: the seller requires the buyer to create a buy order at a specific price for a certain amount of tokens. The remaining amount goes to the seller. Each order can have unique buyback properties, such as forming a bonding curve.
        </p>
        <p className="text-gray-300 mb-2">
          We begin with a buyback contract. It has an expiration condition (<code>buyerPk &amp;&amp; sigmaProp(HEIGHT &gt; 100)</code>); otherwise, the box has been spent if the original seller requests the number of tokens sent back.
        </p>
      </div>

      {/* Buyback Contract Code */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-cyan-400">Buyback Contract Example</h3>
        <CopyableCodeBlock code={buybackCode} />
        <p className="text-gray-400 text-xs mb-2">This contract enforces the buyback logic and expiration condition.</p>
      </div>

      {/* Sell Contract Code */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-orange-400">Sell Contract Example</h3>
        <CopyableCodeBlock code={sellCode} />
        <p className="text-gray-400 text-xs mb-2">Here, <code>bbh</code> is the buyback script hash.</p>
      </div>

      {/* Playground Link */}
      <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-cyan-400">Try in Playground</h3>
        <a
          href="https://scastie.scala-lang.org/oVlOW1GpTkWGLPLzDmJTxA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 focus:underline"
        >
          Open in Scastie
        </a>
      </div>

      {/* Smart Orders Section */}
      <div className="bg-neutral-900/50 border border-pink-700 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-pink-400">Smart Orders & Composability</h3>
        <p className="text-gray-300 mb-2">
          Just like the buyback, we can enhance orders with various conditions, thereby achieving DEX functionality. This makes simple DEX orders composable with complex logic such as token-sale, liquidity providing, etc. This concept is referred to as <b>smart orders</b>.
        </p>
        <p className="text-gray-400 text-sm">
          The main challenge is developing front-end apps and user interfaces for smart order-based DEXes.
        </p>
      </div>
    </>
  );
} 