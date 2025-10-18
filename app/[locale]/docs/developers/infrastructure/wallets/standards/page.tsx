"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const standards = [
  {
    title: "UTXO-Set Scanning Wallet API",
    href: "/docs/developers/infrastructure/wallets/utxo-set-scanning-wallet-api",
    description: "API standard for scanning the UTXO set in Ergo wallets."
  },
  {
    title: "Deterministic Wallet Standard",
    href: "/docs/developers/infrastructure/wallets/deterministic-wallet-standard",
    description: "Standard for deterministic wallet generation and management."
  },
  {
    title: "Cold Wallet",
    href: "/docs/developers/infrastructure/wallets/cold-wallet",
    description: "Guidelines and standards for cold (offline) wallets."
  },
  {
    title: "EIP Standards Overview",
    href: "/docs/developers/infrastructure/wallets/eip-standards-overview",
    description: "Overview of Ergo Improvement Proposals (EIPs) relevant to wallets."
  },
  {
    title: "EIP-0005",
    href: "/docs/developers/infrastructure/wallets/eip-0005",
    description: "EIP-0005: Deterministic Wallets for Ergo."
  }
];

export default function WalletStandardsPage() {
  return (
    <>
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Wallet Standards
      </h1>
      <Link
        href="/docs/developers/infrastructure/wallets"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        Back to Wallets
      </Link>
      <p className="text-lg text-gray-300 mb-8">
        Technical standards and specifications for Ergo wallets, APIs, and integrations.
      </p>

      {/* Standards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {standards.map((std) => (
          <Link
            key={std.title}
            href={std.href}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-pointer group relative"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                {std.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                {std.description}
              </p>
            </div>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
              Learn more
            </div>
          </Link>
        ))}
      </div>
    </>
  );
} 