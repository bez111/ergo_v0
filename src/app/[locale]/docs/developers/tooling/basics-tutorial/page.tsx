"use client";

import React from "react";
import { Link } from "@/i18n/navigation";

const basicsChecklist = [
  "Install a supported SDK and connect it to a node or explorer API.",
  "Create or import a wallet mnemonic and derive the address you will fund.",
  "Fetch unspent boxes for that address and choose inputs that cover the payment plus fee.",
  "Build outputs for the recipient, change, and any token or register data.",
  "Sign the unsigned transaction locally, then submit the signed bytes to the network."
];

export default function BasicsTutorialPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Basics Tutorial
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Generate keys and address, send and receive payments.
      </p>
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4">Basic payment workflow</h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-3">
          {basicsChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Link href="/docs/developers/tooling/starter-tutorial" className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-5 hover:border-orange-400 transition-colors">
          <h2 className="text-lg font-bold text-orange-300 mb-2">Starter tutorial</h2>
          <p className="text-gray-300 text-sm">Language-specific examples for address creation and payment submission.</p>
        </Link>
        <Link href="/docs/developers/data-model-apis/block-transactions" className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-5 hover:border-cyan-400 transition-colors">
          <h2 className="text-lg font-bold text-cyan-300 mb-2">Transactions</h2>
          <p className="text-gray-300 text-sm">How inputs, outputs, data inputs, and spending proofs fit together.</p>
        </Link>
        <Link href="/docs/developers/tooling/payments" className="bg-green-400/10 border border-green-400/20 rounded-xl p-5 hover:border-green-400 transition-colors">
          <h2 className="text-lg font-bold text-green-300 mb-2">Payment tools</h2>
          <p className="text-gray-300 text-sm">ErgoPay, ErgoAuth, connector flows, and proxy-contract patterns.</p>
        </Link>
      </div>
      <p className="text-gray-300">
        Keep test transactions small, verify every generated address, and inspect the final unsigned transaction before signing. The box model is deterministic, so mistakes are easiest to catch before the signature is produced.
      </p>
    </>
  );
} 
