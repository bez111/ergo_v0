"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Network, Copy, Check } from "lucide-react";

export default function TransactionTreesPage() {
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
        <Network className="w-10 h-10 text-green-400" />
        Transaction Tree
      </h1>

      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages/multi-stage-protocol"
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
              A <em>transaction tree</em> represents a sequence of related transactions hierarchically. Each transaction in the tree can have one or more child transactions dependent on its successful execution.
            </p>
            <p>
              A transaction tree can be seen as a more complex version of a <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/transaction-chains" className="text-cyan-400 hover:underline">transaction chain</Link>. In a chain, each transaction typically leads to a single next transaction. In a tree, however, a transaction might create multiple outputs, each potentially initiating a separate branch or sequence of subsequent transactions. This creates a branching structure resembling a tree, with the initial transaction at the root and subsequent transactions forming the branches.
            </p>
            <p>
              Transaction trees are useful for representing complex transaction sequences and dependencies, especially within smart contracts and advanced blockchain applications. They help ensure transactions execute in the correct order with appropriate dependencies while offering a detailed and flexible view of the overall transaction flow, including conditional branching.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Process</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              A transaction tree extends the concept of transaction chains, allowing for conditional logic (<code className="bg-neutral-700 px-2 py-0.5 rounded">if</code> statements) within the scripts that determine which branch of the tree is followed. Simple loops can also be implemented where a transaction recreates a box protected by the same script (effectively transitioning back to the same state node). The following figure illustrates a transaction tree structure with branching:
            </p>
            
                          <div className="flex justify-center my-6">
                <img 
                  src="/tx-tree.png" 
                  alt="Transaction tree with branching" 
                  className="rounded-lg max-w-full"
                />
              </div>

            <p>
              Conditional branching using an <code className="bg-neutral-700 px-2 py-0.5 rounded">if</code> statement within a script is handled conceptually as follows:
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`if (condition) {
    out.propositionBytes == state_3_code // if true, set proposition to state_3_code
} else {
    out.propositionBytes == state_4_code // if false, set proposition to state_4_code
}`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`if (condition) {
    out.propositionBytes == state_3_code // if true, set proposition to state_3_code
} else {
    out.propositionBytes == state_4_code // if false, set proposition to state_4_code
}`, 'code1')}
                className="absolute top-2 right-2 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                title="Copy code"
              >
                {copiedStates['code1'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            <p>
              A simple loop (returning to the same state) is conceptually a special case of the <code className="bg-neutral-700 px-2 py-0.5 rounded">if</code> statement:
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`if (condition) {
    out.propositionBytes == state_2_code // if true, set proposition to state_2_code
} else {
    out.propositionBytes == SELF.propositionBytes // if false, set proposition to SELF.propositionBytes
}`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`if (condition) {
    out.propositionBytes == state_2_code // if true, set proposition to state_2_code
} else {
    out.propositionBytes == SELF.propositionBytes // if false, set proposition to SELF.propositionBytes
}`, 'code2')}
                className="absolute top-2 right-2 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                title="Copy code"
              >
                {copiedStates['code2'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            <p>
              Many useful contracts can be represented using these branching structures (trees) and simple loops without requiring arbitrary cycles in the state transitions (as demonstrated in the linked paper). Ergo's eUTXO model allows the creation of such contracts.
            </p>
            
            <p className="mt-6">
              Next, we will examine <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/transaction-graphs" className="text-cyan-400 hover:underline">Transaction Graphs</Link>, which allow for even more complex structures, including cycles.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 