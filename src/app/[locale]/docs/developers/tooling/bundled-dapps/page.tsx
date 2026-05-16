"use client";

import React from "react";
import { Link } from "@/i18n/navigation";

const bundleChecklist = [
  "Keep contract constants, network selection, and explorer/node endpoints outside the UI build when possible.",
  "Version the ErgoScript source, compiled ErgoTree, and any off-chain transaction builders together.",
  "Support at least one wallet interaction path: browser connector for extension wallets or ErgoPay for QR/deep links.",
  "Publish a deterministic build artifact and document how users can verify the script address or token IDs."
];

export default function BundledDappsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Bundled dApps
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Distribute your dApp as a bundled package for users.
      </p>
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4">Packaging checklist</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-3">
          {bundleChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/docs/developers/tooling/browser" className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-5 hover:border-cyan-400 transition-colors">
          <h2 className="text-lg font-bold text-cyan-300 mb-2">Browser dApps</h2>
          <p className="text-gray-300 text-sm">Frontend integration choices for connector-based applications.</p>
        </Link>
        <Link href="/docs/developers/tooling/payments/ergopay" className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-5 hover:border-orange-400 transition-colors">
          <h2 className="text-lg font-bold text-orange-300 mb-2">ErgoPay</h2>
          <p className="text-gray-300 text-sm">QR and deep-link signing for mobile and non-extension wallets.</p>
        </Link>
        <Link href="/docs/developers/tooling/development-stack" className="bg-green-400/10 border border-green-400/20 rounded-xl p-5 hover:border-green-400 transition-colors">
          <h2 className="text-lg font-bold text-green-300 mb-2">Development stack</h2>
          <p className="text-gray-300 text-sm">SDKs, libraries, and deployment paths for Ergo applications.</p>
        </Link>
      </div>
    </>
  );
} 
