"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, GitBranch, Shield, Server, CheckCircle, Database, DollarSign, Link2 } from "lucide-react";

export default function WalletInteractionPage() {
  const walletSections = [
    {
      title: "Format",
      description:
        "ErgoScript transaction format and structure. Learn how wallet interactions are formatted and processed in the Ergo blockchain.",
      icon: FileText,
      color: "text-blue-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/format"
    },
    {
      title: "Merkle Tree",
      description:
        "Merkle tree structures for efficient verification. Understanding cryptographic proofs and tree-based verification in wallet operations.",
      icon: GitBranch,
      color: "text-green-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/merkle-tree"
    },
    {
      title: "Signing",
      description:
        "Digital signature mechanisms for secure transactions. Explore how wallets generate and verify cryptographic signatures.",
      icon: Shield,
      color: "text-purple-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/signing"
    },
    {
      title: "Signing Backend",
      description:
        "Backend infrastructure for signature generation. Learn about secure key management and signing service architectures.",
      icon: Server,
      color: "text-orange-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/signing-backend"
    },
    {
      title: "Validation",
      description:
        "Transaction and script validation processes. Understanding how wallets validate ErgoScript contracts and transaction integrity.",
      icon: CheckCircle,
      color: "text-cyan-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/validation"
    },
    {
      title: "Data Inputs",
      description:
        "Data input handling in wallet transactions. Learn how wallets process and validate data inputs for smart contracts.",
      icon: Database,
      color: "text-pink-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/data-inputs"
    },
    {
      title: "Fees",
      description:
        "Transaction fee calculation and management. Understanding fee structures, optimization, and wallet fee handling strategies.",
      icon: DollarSign,
      color: "text-yellow-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/fees"
    },
    {
      title: "Unified Transactions",
      description:
        "Unified transaction formats and cross-chain compatibility. Explore standardized transaction structures across different implementations.",
      icon: Link2,
      color: "text-red-400",
      link: "/Docs/developers/ergoscript-languages/wallet-interaction/unified-transactions"
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Wallet Interaction
      </h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>
      
      <p className="text-lg text-gray-300 mb-8 max-w-2xl">
        Comprehensive guide to wallet interactions in the Ergo ecosystem. Explore transaction formats, signing mechanisms, validation processes, and the technical components that enable secure wallet operations with ErgoScript.
      </p>

      {/* Wallet Interaction Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {walletSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link
              key={index}
              href={section.link}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <IconComponent className={`w-6 h-6 ${section.color}`} />
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.description}
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>
          );
        })}
      </div>

      {/* Detailed Sections */}
      <div className="space-y-12">
        <section id="format">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-400" />
            Transaction Format
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            ErgoScript transactions follow a specific format that wallets must understand to properly construct and process transactions. This includes input/output structures, script serialization, and metadata handling.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Transaction input and output structures</li>
            <li>ErgoScript serialization formats</li>
            <li>Metadata and extension handling</li>
            <li>Version compatibility and upgrades</li>
          </ul>
        </section>

        <section id="merkle-tree">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-green-400" />
            Merkle Tree Verification
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Merkle trees provide efficient cryptographic verification for wallet operations. Wallets use Merkle proofs to verify transaction inclusion and state transitions without downloading the entire blockchain.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Merkle proof generation and verification</li>
            <li>Light client support and SPV</li>
            <li>State tree verification</li>
            <li>Efficient batch verification</li>
          </ul>
        </section>

        <section id="signing">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            Digital Signing
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Wallets implement sophisticated signing mechanisms to generate cryptographic proofs for ErgoScript contracts. This includes support for various signature schemes and multi-signature protocols.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Schnorr signature generation</li>
            <li>Multi-signature and threshold schemes</li>
            <li>Zero-knowledge proof generation</li>
            <li>Hardware wallet integration</li>
          </ul>
        </section>

        <section id="signing-backend">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Server className="w-6 h-6 text-orange-400" />
            Signing Backend Infrastructure
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Backend services that support wallet signing operations, including key management systems, signing services, and secure enclaves for enterprise and custodial solutions.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Secure key storage and management</li>
            <li>HSM and secure enclave integration</li>
            <li>Multi-party computation (MPC)</li>
            <li>Audit and compliance features</li>
          </ul>
        </section>

        <section id="validation">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-cyan-400" />
            Transaction Validation
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Comprehensive validation processes that wallets perform to ensure transaction integrity, script correctness, and network compliance before broadcasting transactions.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>ErgoScript contract validation</li>
            <li>Input/output consistency checks</li>
            <li>Fee validation and optimization</li>
            <li>Network rule compliance</li>
          </ul>
        </section>

        <section id="data-inputs">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-pink-400" />
            Data Input Processing
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Data inputs provide read-only access to blockchain state for smart contracts. Wallets must properly handle data input selection, validation, and integration with transaction construction.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Data input selection strategies</li>
            <li>Oracle data integration</li>
            <li>State snapshot handling</li>
            <li>Privacy-preserving data access</li>
          </ul>
        </section>

        <section id="fees">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-yellow-400" />
            Fee Management
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Intelligent fee calculation and management strategies for optimal transaction processing. Includes dynamic fee estimation, fee optimization, and user experience considerations.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Dynamic fee estimation algorithms</li>
            <li>Priority-based fee strategies</li>
            <li>Batch transaction optimization</li>
            <li>Fee-less transaction patterns</li>
          </ul>
        </section>

        <section id="unified-transactions">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Link2 className="w-6 h-6 text-red-400" />
            Unified Transaction Standards
          </h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Standardized transaction formats that enable interoperability between different wallet implementations and cross-chain protocols. Ensures consistent behavior across the ecosystem.
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Cross-wallet compatibility standards</li>
            <li>Bridge transaction formats</li>
            <li>Atomic swap implementations</li>
            <li>Protocol upgrade mechanisms</li>
          </ul>
        </section>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-12">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/language-description" className="text-cyan-400 hover:underline">
            ErgoScript Language Description
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">
            The Blockchain Context
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/sigmaboolean" className="text-cyan-400 hover:underline">
            SigmaBoolean
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/global-functions" className="text-cyan-400 hover:underline">
            Global Functions
          </Link>
        </li>
        <li>
          <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Sigmastate Interpreter Repository
          </a>
        </li>
      </ul>
    </>
  );
} 