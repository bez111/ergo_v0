"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Code2, Gamepad2, Coins, GitBranch, Workflow } from "lucide-react";

export default function ExamplesPage() {
  const examples = [
    {
      title: "Reversible Address",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      description: "A smart contract that allows for reversible transactions with a time-lock mechanism. Enables secure fund storage with the ability to reverse transactions within a specified time period.",
      link: "/Docs/developers/ergoscript-languages/multi-stage-protocol/examples/reversible-address"
    },
    {
      title: "Rock/Paper/Scissors",
      icon: <Gamepad2 className="w-6 h-6 text-green-400" />,
      description: "Implementation of the classic game using multi-stage transactions. Demonstrates commit-reveal schemes and fair randomness generation on the blockchain.",
      link: "/Docs/developers/ergoscript-languages/multi-stage-protocol/examples/rock-paper-scissors"
    },
    {
      title: "ICO",
      icon: <Coins className="w-6 h-6 text-orange-400" />,
      description: "Initial Coin Offering implementation showcasing multi-stage funding rounds, token distribution, and refund mechanisms using ErgoScript.",
      link: "/Docs/developers/ergoscript-languages/multi-stage-protocol/examples/ico"
    },
    {
      title: "MAST Example",
      icon: <GitBranch className="w-6 h-6 text-purple-400" />,
      description: "Merkelized Abstract Syntax Trees (MAST) implementation demonstrating efficient complex contract structures with selective script revelation.",
      link: "/Docs/developers/ergoscript-languages/multi-stage-protocol/examples/mast"
    },
    {
      title: "FSM Example",
      icon: <Workflow className="w-6 h-6 text-indigo-400" />,
      description: "Finite State Machine implementation showing how to model complex state transitions and workflows using ErgoScript's multi-stage capabilities.",
      link: "/Docs/developers/ergoscript-languages/multi-stage-protocol/examples/fsm"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Multi-Stage Protocol Examples
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

      <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">About These Examples</h2>
        <div className="text-gray-300 space-y-4">
          <p>
            These examples demonstrate various applications of multi-stage protocols in ErgoScript. Each example showcases different aspects of Ergo's capabilities:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Complex state management across multiple transactions</li>
            <li>Time-based conditions and reversibility</li>
            <li>Commit-reveal schemes for fair randomness</li>
            <li>Token distribution and crowdfunding mechanisms</li>
            <li>Advanced cryptographic constructions like MAST</li>
            <li>State machine implementations for workflow management</li>
          </ul>
          <p>
            Each example includes detailed explanations, code snippets, and visual diagrams to help you understand how to implement similar patterns in your own projects.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {examples.map((example, index) => (
          <Link
            key={index}
            href={example.link}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer group relative"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {example.icon}
                {example.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {example.description}
              </p>
            </div>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 