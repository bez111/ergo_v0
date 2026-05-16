"use client";

import React from "react";
import { Link } from "@/i18n/navigation";

const starterSteps = [
  {
    title: "Understand the box model",
    description: "Ergo state is made of immutable boxes. Start with eUTXO and the data model before writing contracts.",
    href: "/docs/developers/data-model-apis"
  },
  {
    title: "Pick a wallet flow",
    description: "Browser dApps usually use the dApp connector; QR/deep-link flows usually use ErgoPay.",
    href: "/docs/developers/tooling/payments"
  },
  {
    title: "Choose a stack",
    description: "Use AppKit for JVM apps, Fleet for TypeScript, sigma-rust for Rust and WASM workflows.",
    href: "/docs/developers/tooling/development-stack"
  },
  {
    title: "Build the first transaction",
    description: "Create an address, find input boxes, build outputs, sign, and submit through a node or explorer API.",
    href: "/docs/developers/tooling/starter-tutorial"
  }
];

export default function BeginnerPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Beginner
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Just testing the waters? Not sure where to start?
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {starterSteps.map((step) => (
          <Link
            key={step.title}
            href={step.href}
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400 transition-colors min-h-[160px]"
          >
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300">
              {step.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-cyan-300 mb-3">Recommended first pass</h2>
        <p className="text-gray-300 mb-4">
          For a first Ergo app, avoid starting with a large smart contract. Build a simple payment transaction first, inspect the boxes it creates, then add ErgoScript constraints once the transaction flow is clear.
        </p>
        <Link href="/docs/developers/tooling/basics-tutorial" className="text-orange-400 hover:text-orange-300 font-semibold">
          Continue to the basics tutorial
        </Link>
      </div>
    </>
  );
} 
