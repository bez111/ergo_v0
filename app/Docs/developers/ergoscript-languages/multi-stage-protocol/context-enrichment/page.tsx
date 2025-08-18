"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Copy, Check } from "lucide-react";

export default function ContextEnrichmentPage() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Layers className="w-10 h-10 text-indigo-400" />
        Context Enrichment
      </h1>

      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/multi-stage-protocol"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Multi-Stage Protocols
        </Link>
      </div>

      <div className="space-y-6">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="text-gray-300 space-y-4">
            <p>
              In Bitcoin and other existing UTXO systems, the <em>context</em> is just the UTXO being processed.
            </p>
            <p>
              In order for a UTXO-based system to support transaction trees, the context must be rich enough to contain at least the entire spending transaction.
            </p>
            <p>
              More formally, for any UTXO based blockchain, we can define the following levels of context, each extending the previous:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Level 1</strong>: current UTXO, height and timestamp</li>
              <li><strong>Level 2</strong>: current transaction (inputs and outputs)</li>
              <li><strong>Level 3</strong>: current block header and block solution</li>
              <li><strong>Level 4</strong>: current block (other sibling transactions)</li>
            </ul>
            <p>
              Any platform at Level 2 and above is suitable for transaction trees. In this regard, Bitcoin operates at Level 1 and Ergo at Level 3.
            </p>
            <p>
              Note that in Level 4 we cannot check validity of transactions independently of other transactions in the block. Hence it is more complex to implement Level 4.
            </p>
            <p className="mt-6">
              In this work we show via examples how to create efficient Ethereum-like contracts in the UTXO model using transaction trees. The examples include a Rock-Paper-Scissors game, an Initial Coin Offering (ICO) campaign and a new primitive called reversible addresses for securely storing funds.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Enriched Context Levels</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Script code can have predicates on objects in context.
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Example: <code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUT(0).value &gt;= 1000</code></li>
                </ul>
              </li>
              <li>It is known that Level 2 can emulate Turing complete (hence Ethereum)</li>
            </ul>
            <p>
              However, the proof uses Rule 110 cellular automation. Reduction is not efficient
            </p>
            <ul className="list-disc list-inside">
              <li>We need something more efficient than Rule 110. This is our contribution.</li>
            </ul>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">How to ensure that each stage follows protocol?</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Code in context Level 2 and higher allows multistage protocols
            </p>
            <p>
              Spending transactions must create another UTXO with the required properties.
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`out.propositionBytes == state_n_code && 
out.R4[Int].get == SELF.R4[Int].get // ensure data is propagated`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`out.propositionBytes == state_n_code && 
out.R4[Int].get == SELF.R4[Int].get // ensure data is propagated`, 'protocol')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['protocol'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            <p>
              This code is checking two conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Whether the <code className="bg-neutral-700 px-2 py-0.5 rounded">propositionBytes</code> of the <code className="bg-neutral-700 px-2 py-0.5 rounded">out</code> box is equal to <code className="bg-neutral-700 px-2 py-0.5 rounded">state_n_code</code>.</li>
              <li>Whether the <code className="bg-neutral-700 px-2 py-0.5 rounded">R4</code> register of the <code className="bg-neutral-700 px-2 py-0.5 rounded">out</code> box is equal to the <code className="bg-neutral-700 px-2 py-0.5 rounded">R4</code> register of the current <code className="bg-neutral-700 px-2 py-0.5 rounded">SELF</code> box.</li>
            </ul>
            <p>
              The first condition checks if the script of the output box matches the expected script (as represented by <code className="bg-neutral-700 px-2 py-0.5 rounded">state_n_code</code>). If this condition is not satisfied, the script will reject the transaction.
            </p>
            <p>
              The second condition ensures that a certain data value stored in the <code className="bg-neutral-700 px-2 py-0.5 rounded">R4</code> register is propagated from the current box to the output box. If this condition is not satisfied, the script will reject the transaction.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 