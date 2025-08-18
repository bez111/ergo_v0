"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Network, Copy, Check } from "lucide-react";

export default function TransactionGraphsPage() {
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
        <Network className="w-10 h-10 text-purple-400" />
        Transaction Graphs
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
              A transaction graph represents a set of related transactions more flexibly and dynamically than a <Link href="/docs/developers/ergoscript-languages/multi-stage-protocol/transaction-trees" className="text-cyan-400 hover:underline">transaction tree</Link>. While a transaction tree is a hierarchical structure depicting a sequence of transactions with specific linear dependencies, a transaction graph is a more general representation allowing for complex and flexible dependencies between transactions.
            </p>
            <p>
              In a transaction graph, each transaction can be visualized as a node, with directed edges connecting nodes to represent dependencies (i.e., an edge from Tx A to Tx B means Tx B spends an output created by Tx A). Unlike a transaction tree's fixed hierarchy, a transaction graph permits more intricate relationships, such as multiple dependencies (a transaction spending outputs from several previous transactions) and complex branching (a transaction creating outputs spent by multiple subsequent transactions).
            </p>
            <p>
              Transaction graphs are useful for modeling complex transaction flows and dependencies, particularly in the context of smart contracts and advanced blockchain applications. They provide a more flexible and nuanced view of transaction sequences, enabling the representation of sophisticated relationships and dependencies.
            </p>
            <p>
              Ergo's eUTXO model inherently supports the formation of transaction graphs. Furthermore, ErgoScript allows contracts to reference each other (e.g., by checking the script hash of an output), enabling the construction of protocols where the graph structure can even involve cycles in these contract references, as illustrated below.
            </p>
            
            <div className="flex justify-center my-6">
              <Image 
                src="/tx-graph.png" 
                alt="Transaction graph with multiple nodes and connections"
                width={1200} height={675}
                className="rounded-lg max-w-full h-auto"
                priority
              />
            </div>
            
            <p>
              Please see the <a href="https://storage.googleapis.com/ergo-cms-media/docs/AdvancedErgoScriptTutorial.pdf" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Advanced ErgoScript Tutorial</a> Section 3.3.3.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 