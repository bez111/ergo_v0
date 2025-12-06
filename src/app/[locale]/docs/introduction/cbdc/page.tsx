"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { Globe, Lock, Users, Coins, Key, Shield, ArrowRight, FileText, Star, CheckCircle } from "lucide-react";

export default function CBDCPage() {
  return (
    <div className="px-4 max-w-3xl mx-auto pb-24">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo: The Decentralised Bank Digital Currency For Everyone
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          As the blockchain revolution gains steam, one of its most promising opportunities is Central Bank Digital Currencies (CBDCs). While CBDCs offer transformative potential, they grapple with a fundamental paradox: reconciling control with innovation. This equilibrium could greatly impact privacy, functionality, and widespread adoption. But what if there were a solution that harmonizes these seemingly conflicting elements? Enter Ergo—a blockchain platform that aims to be the CBDC everyone can use, privately and programmably.
        </p>
      </div>

      {/* Democratization of Programmable Money */}
      <div className="bg-orange-400/10 border border-orange-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-400" /> The Democratization of Programmable Money
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          DeFi has opened the gates to programmable money, allowing for sophisticated transactions without the traditional financial sector's limitations. CBDCs could offer programmable assets, but most are confined to permissioned ledgers and centralized control.
        </p>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Ergo provides open systems that unleash the transformative potential of digital cash. Imagine sending or receiving money privately and securely worldwide, with programmable features and low fees. Ergo is designed for efficiency, making it ideal for micro-transactions and complex financial products.
        </p>
      </div>

      {/* Guarding Your Financial Privacy */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-cyan-400" /> Guarding Your Financial Privacy
        </h2>
        <p className="text-gray-300 mb-4">
          Privacy is a cornerstone of financial security, and Ergo takes this seriously. Unlike state-sponsored digital currencies that may serve as surveillance tools, Ergo offers a secure, private avenue for financial interactions. Optional privacy features let you choose public or private transactions.
        </p>
      </div>

      {/* Seamless Financial Interactions */}
      <div className="bg-green-400/10 border border-green-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Globe className="w-5 h-5 text-green-400" /> Seamless Financial Interactions with Ergo
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Ergo is designed for the future, developing infrastructure for tokenization, stablecoins, and digital identity. As traditional and blockchain economies converge, Ergo bridges these worlds, offering the ease and flexibility a truly global CBDC should have.
        </p>
      </div>

      {/* Tokenization: The Future of Asset Management */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Key className="w-5 h-5 text-cyan-400" /> Tokenization: The Future of Asset Management
        </h2>
        <p className="text-gray-300 mb-4">
          In the future, almost everything will be tokenized—from shares and bonds to real estate and precious metals. Ergo enables frictionless trade, borrowing, and leverage, all underpinned by decentralized protocols.
        </p>
      </div>

      {/* Stablecoins: Bridging the Old and the New */}
      <div className="bg-blue-400/10 border border-blue-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Coins className="w-5 h-5 text-blue-400" /> Stablecoins: Bridging the Old and the New
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Stablecoins offer underappreciated utility in DeFi. Ergo envisions a two-tier system: a native stablecoin for mainstream users and ERG for advanced users and mining. This simplifies transactions and fee payments while supporting technical applications.
        </p>
      </div>

      {/* Digital Identity: Enabling Compliant Transactions */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-cyan-400" /> Digital Identity: Enabling Compliant Transactions
        </h2>
        <p className="text-gray-300 mb-4">
          As assets migrate to the blockchain, digital identity will link online transactions with offline identities, enabling compliant operations and automating processes like taxation. Ergo offers decentralized identity solutions that work with smart contracts, removing reliance on centralized KYC.
        </p>
      </div>

      {/* Beyond Simple Transactions: Programmable Contracts */}
      <div className="bg-orange-400/10 border border-orange-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-orange-400" /> Beyond Simple Transactions: A World of Programmable Contracts
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Ergo allows for complex contractual agreements, enabled by its advanced blockchain technology. Buy gold-backed tokens, purchase blockchain-based insurance, and more—all without centralized entities or sacrificing privacy.
        </p>
      </div>

      {/* Smart Insurance and Beyond */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" /> Smart Insurance and Beyond
        </h2>
        <p className="text-gray-300 mb-4">
          In Ergo's ecosystem, insurance contracts can be customized and automatically enforced. For example, gold-backed tokens can be paired with insurance, mitigating risks and ensuring value. This illustrates Ergo's vision for user-friendly, decentralized finance.
        </p>
      </div>

      {/* Conclusion */}
      <div className="bg-green-400/10 border border-green-400 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="font-bold text-green-500">Conclusion</span>
        </div>
        <p className="text-gray-800 dark:text-gray-200">
          Ergo is not just another blockchain platform—it's the future of money. It brings the promise of CBDCs to everyone, packaged in a form that prioritizes both control and innovation. Ergo is transparent yet private, decentralized yet flexible, and most importantly, accessible to everyone. Welcome to the future of finance. Welcome to Ergo.
        </p>
      </div>
    </div>
  );
} 