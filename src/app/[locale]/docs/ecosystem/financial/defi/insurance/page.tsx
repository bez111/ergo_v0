"use client";

import React from "react";
import { Link } from "@/i18n/navigation";

export default function InsurancePage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Insurance
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          The insurance sector is a significant part of the finance industry, helping manage the risk of losing assets due to unexpected or expected events. Decentralized insurance protocols on Ergo can provide transparent, programmable, and community-driven risk management.
        </p>
        <Link
          href="/docs/ecosystem/financial/defi"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-4"
        >
          ← Back to DeFi
        </Link>
      </div>

      {/* About Insurance Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3">Why Insurance Matters in DeFi</h2>
        <p className="text-gray-300 mb-2">
          Insurance helps users and protocols manage the risk of losing assets due to events like theft, hacks, or fraud. In traditional finance, insurance is a cornerstone of risk management. In DeFi, new protocols like Nexus Mutual have emerged to address the unique challenges of decentralized systems.
        </p>
        <p className="text-gray-300 mb-2">
          Insurance works by paying a premium to those who bear risk in case of an unfortunate event, in exchange for financial protection. Decentralized insurance platforms allow anyone to participate as a risk-bearer or policyholder, creating a more open and transparent ecosystem.
        </p>
      </div>

      {/* Ergo Insurance Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 text-cyan-400">Decentralized Insurance on Ergo</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li>Smart contracts automate premium collection, claim validation, and payouts.</li>
          <li>Oracles can validate real-world events and trigger insurance claims.</li>
          <li>Community members can participate as underwriters, sharing risk and earning premiums.</li>
          <li>Transparent, auditable, and censorship-resistant insurance logic.</li>
        </ul>
        <p className="text-gray-400 text-sm">
          Decentralized insurance on Ergo can help build a more resilient and inclusive financial ecosystem, where risk is managed collectively and transparently.
        </p>
      </div>
    </>
  );
} 