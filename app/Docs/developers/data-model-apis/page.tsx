"use client";

import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui";
import {
  Database, Box, FileText, Shield, Key, Users, Layers, 
  BookOpen, ChevronRight, Cpu, Zap, Lock, Eye, Quote,
  Brain, Target, Code, Network, Settings, Globe, RefreshCw, Coins, Sigma
} from "lucide-react";

// Table of contents for Overview tab
const toc = [
  { id: "intro", title: "1. Introduction: The Ergo Data Model Revolution" },
  { id: "foundations", title: "2. Theoretical Foundations & Core Concepts" },
  { id: "blockchain", title: "3. Blockchain Structure: Components and Function" },
  { id: "boxes", title: "4. Boxes: Foundational State Units" },
  { id: "transactions", title: "5. Transactions: Engines of State Change" },
  { id: "assets", title: "6. Assets and Tokens: Powering a Diverse Economy" },
  { id: "addressing", title: "7. Addressing and Identity" },
  { id: "payments", title: "8. Payment Standards and Protocols" },
  { id: "crypto", title: "9. Cryptographic Foundations" },
  { id: "consensus", title: "10. Verification, Consensus, and Sustainability" },
  { id: "structures", title: "11. Data Structures and Performance" },
  { id: "advanced", title: "12. Advanced Concepts: Mastering Ergo's Capabilities" },
];

export default function DataModelApisPage() {
  const [activeSection, setActiveSection] = React.useState<string>('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Enable smooth scroll for anchor links
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Track active section on scroll
    const handleScroll = () => {
      const sections = toc.map(item => item.id);
      let currentActiveSection = sections[0]; // Default to first section
      
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        // If at bottom, activate the last section
        currentActiveSection = sections[sections.length - 1];
      } else {
        // Find the section that is currently visible in the top part of the viewport
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            // Section is active if its top is above the fold (with some offset for header)
            if (rect.top <= 200) {
              currentActiveSection = sections[i];
              break;
            }
          }
        }
      }
      
      setActiveSection(currentActiveSection);
    };

    // Throttle scroll handler for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Call once to set initial state

    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
        window.removeEventListener('scroll', throttledHandleScroll);
      }
    };
  }, []);

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Database className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="box" className="flex items-center gap-2 justify-center">
          <Box className="w-4 h-4" /> Box
        </TabsTrigger>
        <TabsTrigger value="addresses" className="flex items-center gap-2 justify-center">
          <Key className="w-4 h-4" /> Addresses
        </TabsTrigger>
        <TabsTrigger value="transactions" className="flex items-center gap-2 justify-center">
          <Network className="w-4 h-4" /> Transactions
        </TabsTrigger>
        <TabsTrigger value="block" className="flex items-center gap-2 justify-center">
          <Layers className="w-4 h-4" /> Block
        </TabsTrigger>
        <TabsTrigger value="discrete" className="flex items-center gap-2 justify-center">
          <Lock className="w-4 h-4" /> DLog Proofs
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="flex flex-col lg:flex-row gap-8 relative min-h-screen">
          {/* Main content */}
          <main className="flex-1 min-w-0 lg:order-1">
            {/* Title */}
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
              The Ergo Data Model: Revolutionizing Blockchain Architecture
            </h1>
            {/* Mobile TOC */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex items-center justify-between p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-gray-300 hover:text-orange-300 transition"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium">Table of Contents</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
              </button>
              {isMobileMenuOpen && (
                <div className="mt-2 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col gap-1">
                    {toc.map(({ id, title }) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(id);
                          if (element) {
                            const yOffset = -80;
                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                            setIsMobileMenuOpen(false); // Close menu after navigation
                          }
                        }}
                        className={`
                          cursor-pointer transition-all duration-200 block py-2 px-3 rounded-md border-l-2 text-sm
                          ${activeSection === id 
                            ? 'text-orange-300 bg-orange-400/10 border-orange-400 font-medium' 
                            : 'text-gray-400 hover:text-orange-300 hover:bg-neutral-800/50 border-transparent'
                          }
                        `}
                      >
                        {title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* 1. Introduction */}
            <section id="intro">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                1. Introduction: The Ergo Data Model Revolution
              </h2>
              <div className="mb-6 text-gray-300">
                <span className="block mb-2 font-bold italic text-orange-300">
                  "Ergo's data model represents a paradigm shift in blockchain architecture, combining the best of UTXO with programmable state." 
                </span>
                <p>
                  This document provides a comprehensive and in-depth exploration of Ergo's unique data model, based on the <Link href="/Docs/introduction/eutxo" className="text-orange-400 hover:underline">UTXO (Unspent Transaction Output)</Link> model, enhanced with powerful <Link href="/Docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">smart contract</Link> capabilities (<Link href="/Docs/introduction/eutxo" className="text-orange-400 hover:underline">eUTXO</Link>).
                </p>
                <p className="mt-2">
                  Unlike traditional blockchain architectures, Ergo's model introduces programmable state transitions, stateless verification, and deterministic execution - creating a foundation for truly scalable and secure decentralized applications.
                </p>
                <span className="mt-2 block px-4 py-2 border-l-4 border-cyan-400 bg-neutral-900 text-cyan-300 font-semibold">
                  Vision: Transform blockchain from simple value transfer to a programmable, scalable, and secure computational platform.
                </span>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 2. Theoretical Foundations */}
            <section id="foundations">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                2. Theoretical Foundations & Core Concepts
              </h2>

              <h3 className="text-xl font-semibold mb-3">2.1 Computational Model Evolution & UTXO vs. Account Model</h3>
              <div className="mb-6 text-gray-300">
                <p>
                  Ergo represents a significant advancement in blockchain computational models, extending the traditional Unspent Transaction Output (UTXO) paradigm through its enhanced <Link href="/Docs/introduction/eutxo" className="text-orange-400 hover:underline">eUTXO (Extended UTXO)</Link> model. Unlike conventional blockchain architectures, Ergo's model introduces:
                </p>
                <ul className="list-disc list-inside ml-4 mt-3">
                  <li><b>Programmable State Transitions:</b> Enabling complex computational logic within <Link href="/Docs/developers/box" className="text-orange-400 hover:underline">transaction outputs</Link>. This contrasts with the account-based model used in other blockchains (like Ethereum), where state is globally mutable. See <Link href="/Docs/introduction/utxo-vs-account" className="text-orange-400 hover:underline">UTXO vs Account Model Comparison</Link> for a comparison of Ergo's model in terms of parallelism, <Link href="/Docs/introduction/privacy" className="text-orange-400 hover:underline">privacy</Link>, and <Link href="/Docs/ecosystem/infrastructure" className="text-orange-400 hover:underline">scalability</Link>.</li>
                  <li><b>Stateless Verification:</b> Allowing efficient validation without maintaining complete blockchain state, facilitated by technologies like <Link href="/Docs/introduction/nipopows" className="text-orange-400 hover:underline">NIPoPoWs</Link>.</li>
                  <li><b>Deterministic Execution:</b> Ensuring predictable and verifiable transaction outcomes.</li>
                </ul>
                
                <div className="my-6 overflow-x-auto">
                  <table className="min-w-full border border-neutral-700 rounded-xl text-sm">
                    <thead className="bg-neutral-800">
                      <tr>
                        <th className="px-4 py-2 border-b border-neutral-700 text-left">Feature</th>
                        <th className="px-4 py-2 border-b border-neutral-700 text-left">eUTXO (Ergo)</th>
                        <th className="px-4 py-2 border-b border-neutral-700 text-left">Account Model (Ethereum)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-neutral-900">
                      <tr>
                        <td className="px-4 py-2 border-b border-neutral-800">State Management</td>
                        <td className="px-4 py-2 border-b border-neutral-800">Local, in boxes/UTXO</td>
                        <td className="px-4 py-2 border-b border-neutral-800">Global, in accounts/contracts</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-neutral-800">Parallelism</td>
                        <td className="px-4 py-2 border-b border-neutral-800">High, non-interfering txs</td>
                        <td className="px-4 py-2 border-b border-neutral-800">Low, must process in order</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-neutral-800">Predictability</td>
                        <td className="px-4 py-2 border-b border-neutral-800">High, deterministic</td>
                        <td className="px-4 py-2 border-b border-neutral-800">Low, variable gas/MEV</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-neutral-800 border-l-4 border-orange-400 p-4 my-4 text-orange-200 italic">
                  <b>Key Insight:</b> "eUTXO transforms blockchain from a simple ledger into a programmable, parallel computational platform where each transaction can carry complex logic while maintaining cryptographic security."
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">2.2 Fundamental Design Principles</h3>
              <div className="mb-6 text-gray-300">
                <ol className="list-decimal list-inside ml-4">
                  <li><b>Computational Completeness:</b> Supporting Turing-complete smart contract execution within strict cryptographic constraints via <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/multi-stage-transactions" className="text-orange-400 hover:underline">multi-stage contracts</Link>.</li>
                  <li><b>Cryptographic Composability:</b> Enabling complex cryptographic protocols through <Link href="/Docs/developers/cryptographic-primitives" className="text-orange-400 hover:underline">Sigma Protocols</Link>.</li>
                  <li><b>Scalable State Management:</b> Designing a model that supports parallel transaction processing and efficient state verification.</li>
                </ol>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 3. Blockchain Structure */}
            <section id="blockchain">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                3. Blockchain Structure: Components and Function
              </h2>
              <div className="mb-6 text-gray-300">
                <p>
                  A solid understanding of the blockchain structure lays the groundwork for exploring Ergo's data model. Ergo <Link href="/Docs/developers/data-model-apis/block-header" className="text-orange-400 hover:underline">blocks</Link> contain critical metadata, <Link href="/Docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">transactions</Link>, and proofs.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">3.1 Block Components</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/data-model-apis/block-header" className="text-orange-400 hover:underline">Block Overview</Link>: Comprehensive introduction to block structure in Ergo, detailing how blocks aggregate transactions, references, and proofs.</li>
                  <li><Link href="/Docs/developers/data-model-apis/block-header" className="text-orange-400 hover:underline">Block Header</Link>: Detailed examination of block header components, which include references to previous blocks, <Link href="/Docs/introduction/autolykos" className="text-orange-400 hover:underline">difficulty</Link>, and other crucial metadata.</li>
                  <li><Link href="/Docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">Block Transactions</Link>: Understanding how transactions are organized within a block to form the ledger state.</li>
                  <li><Link href="/Docs/developers/data-model-apis/block-adproofs" className="text-orange-400 hover:underline">AD Proofs</Link>: Authenticated Data Proofs enable efficient <Link href="/Docs/introduction/nipopows" className="text-orange-400 hover:underline">stateless client</Link> verification by providing cryptographic proofs of state transitions.</li>
                  <li><Link href="/Docs/developers/data-model-apis/extension-section" className="text-orange-400 hover:underline">Extension Section</Link>: An exploration of Ergo's flexible data storage section that can hold additional metadata and information beyond basic transactions.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 4. Boxes */}
            <section id="boxes">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                4. Boxes: Foundational State Units
              </h2>
              <div className="mb-6 text-gray-300">
                <p>
                  At the core of Ergo's data model is the <b>"<Link href="/Docs/developers/box" className="text-orange-400 hover:underline">Box</Link>,"</b> which is Ergo's implementation and extension of the <Link href="/Docs/introduction/eutxo" className="text-orange-400 hover:underline">UTXO (Unspent Transaction Output)</Link> concept. While traditional UTXOs simply track unspent coins, Ergo's Boxes enhance this model with additional programmable capabilities.
                </p>
                <span className="block mt-2 px-4 py-2 border-l-4 border-orange-400 bg-neutral-900 text-orange-200 italic">
                  <Quote className="inline w-5 h-5 mb-1 text-orange-300" /> "Boxes are smart UTXOs - they carry not just value, but programmable logic and rich data structures."
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">4.1 The Box Concept</h3>
              <div className="mb-6 text-gray-300">
                <p>
                  A <Link href="/Docs/developers/box" className="text-orange-400 hover:underline">Box</Link> is essentially a "smart UTXO" - it serves the same role as a UTXO in tracking unspent value, but extends this with sophisticated computational features. Like a UTXO, a Box is created when value is sent in a <Link href="/Docs/developers/data-model-apis/composing" className="text-orange-400 hover:underline">transaction</Link> and is consumed (spent) when that value is transferred elsewhere. However, Boxes add the following capabilities that go beyond basic UTXOs:
                </p>
                <ul className="list-disc list-inside ml-4 mt-3">
                  <li><b>Immutable State:</b> Each box represents an atomic, immutable state unit that cannot be modified after creation.</li>
                  <li><b>Typed Registers:</b> Boxes contain 10 <Link href="/Docs/developers/data-model-apis/registers" className="text-orange-400 hover:underline">registers</Link> (R0-R9) with specific purposes and rich computational potential:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>R0: Monetary Value (in nanoERGs)</li>
                      <li>R1: Protection Script (<Link href="/Docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">Smart Contract</Link>)</li>
                      <li>R2: Assets/<Link href="/Docs/ecosystem/Standards/eip4" className="text-orange-400 hover:underline">Tokens</Link></li>
                      <li>R3: Creation Details</li>
                      <li>R4-R9: Flexible, Typed Custom Data Storage</li>
                    </ul>
                  </li>
                  <li><b>Programmable Spending Conditions:</b> Each box specifies precise conditions under which it can be spent, enabling complex logic through <Link href="/Docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">ErgoScript</Link>. See <Link href="/Docs/developers/box/modelling" className="text-orange-400 hover:underline">Box Modeling</Link> and <Link href="/Docs/developers/box" className="text-orange-400 hover:underline">Box Overview</Link> for detailed exploration.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 5. Transactions */}
            <section id="transactions">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                5. Transactions: Engines of State Change
              </h2>
              <div className="mb-6 text-gray-300">
                <p>
                  <Link href="/Docs/developers/data-model-apis/composing" className="text-orange-400 hover:underline">Transactions</Link> define how <Link href="/Docs/developers/box" className="text-orange-400 hover:underline">boxes</Link> are created, transformed, and consumed, and are central to Ergo's dynamic state evolution.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">5.1 Transaction Foundations</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/data-model-apis/composing" className="text-orange-400 hover:underline">Transaction Overview</Link>: Fundamental principles of how transactions work in Ergo.</li>
                  <li><Link href="/Docs/developers/data-model-apis/composing" className="text-orange-400 hover:underline">Transaction Composition</Link>: Detailed guide to constructing complex transactions off-chain before submitting them on-chain.</li>
                  <li><Link href="/Docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">Transaction Format</Link>: Technical specification of transaction structure, ensuring interoperability and standardization.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">5.2 Advanced Transaction Mechanisms</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/ergoscript-languages/wallet-interaction/chained-transactions" className="text-orange-400 hover:underline">Chained Transactions</Link>: Explore how sequentially dependent transactions can be composed.</li>
                  <li><Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle Tree in Transactions</Link>: Understanding how <Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle trees</Link> provide data integrity and facilitate efficient proofs.</li>
                  <li><Link href="/Docs/developers/ergoscript-languages/wallet-interaction/signing" className="text-orange-400 hover:underline">Transaction Signing</Link> and <Link href="/Docs/developers/ergoscript-languages/wallet-interaction/signing" className="text-orange-400 hover:underline">Backend Signing</Link>: Cryptographic principles and implementations for authenticating transactions.</li>
                  <li><Link href="/Docs/developers/ergoscript-languages/wallet-interaction/validation" className="text-orange-400 hover:underline">Transaction Validation</Link>: Comprehensive overview of on-chain verification processes that ensure correctness and adherence to protocol rules.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">5.3 Specialized Transaction Features</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/data-model-apis/composing/wallet-interaction/data-inputs" className="text-orange-400 hover:underline">Data Inputs (Read-Only Inputs)</Link>: Access additional data in transactions without spending boxes.</li>
                  <li><Link href="/Docs/developers/ergoscript-languages/wallet-interaction/fees" className="text-orange-400 hover:underline">Transaction Fees</Link>: Understanding fee structures, ensuring that <Link href="/Docs/miners" className="text-orange-400 hover:underline">miners</Link> are incentivized.</li>
                  <li><Link href="/Docs/developers/data-model-apis/babel-fees" className="text-orange-400 hover:underline">Babel Fees</Link> and <Link href="/Docs/ecosystem/tooling/babel-fleet" className="text-orange-400 hover:underline">Babel Fees Plugin</Link>: Innovative mechanisms allowing fees to be paid in alternative <Link href="/Docs/ecosystem/Standards/eip4" className="text-orange-400 hover:underline">tokens</Link>.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 6. Assets and Tokens */}
            <section id="assets">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                6. Assets and Tokens: Powering a Diverse Economy
              </h2>
              <div className="mb-6 text-gray-300">
                <p>
                  Ergo supports a rich ecosystem of assets, from fungible <Link href="/Docs/ecosystem/Standards/eip4" className="text-orange-400 hover:underline">tokens</Link> to <Link href="/Docs/ecosystem/nfts" className="text-orange-400 hover:underline">NFTs</Link>, enabling complex economic models.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">6.1 Fungible Tokens</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/ecosystem/Standards/eip4" className="text-orange-400 hover:underline">Token Basics</Link>: Introduction to tokens within the Ergo ecosystem and their fundamental characteristics.</li>
                  <li><Link href="/Docs/ecosystem/Standards/eip4" className="text-orange-400 hover:underline">Asset Standard (EIP-4)</Link>: Standard for creating and managing tokens in Ergo.</li>
                  <li><Link href="/Docs/ecosystem/Standards/eip21" className="text-orange-400 hover:underline">Token Verification (EIP-21)</Link>: Ensuring token authenticity and integrity.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">6.2 Non-Fungible Tokens (NFTs)</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/ecosystem/nfts" className="text-orange-400 hover:underline">NFT Overview</Link>: Comprehensive introduction to NFTs on Ergo.</li>
                  <li><Link href="/Docs/ecosystem/nfts/create-nft" className="text-orange-400 hover:underline">NFT Creation</Link>: Guide to minting NFTs.</li>
                  <li><Link href="/Docs/ecosystem/nfts/nft-v1-v2" className="text-orange-400 hover:underline">NFT Versions (V1 vs V2)</Link>: Comparison of different NFT implementation standards.</li>
                  <li><Link href="/Docs/ecosystem/nfts/on-chain-nft" className="text-orange-400 hover:underline">On-Chain NFTs</Link>: Storing NFT data directly on the blockchain.</li>
                  <li><Link href="/Docs/ecosystem/nfts/royalties" className="text-orange-400 hover:underline">NFT Royalties</Link>: Mechanisms for continuous compensation to creators.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">6.3 Special Token Concepts</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/data-model-apis/assets/tokens/perpetual" className="text-orange-400 hover:underline">Perpetual Tokens</Link>: Tokens designed to exist indefinitely.</li>
                  <li><Link href="/Docs/developers/data-model-apis/assets/tokens/burning" className="text-orange-400 hover:underline">Token Burning</Link>: Permanently removing tokens from circulation.</li>
                  <li><Link href="/Docs/developers/data-model-apis/assets/tokens/singletons" className="text-orange-400 hover:underline">Singletons</Link>: Unique tokens with special properties.</li>
                  <li><Link href="/Docs/ecosystem/Standards/eip22" className="text-orange-400 hover:underline">Auction Contract (EIP-22)</Link>: Standard auction contract implementation details.</li>
                  <li><Link href="/Docs/ecosystem/Standards/eip24" className="text-orange-400 hover:underline">Artwork Contract (EIP-24)</Link>: Specialized standard for managing digital artwork tokens.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 7. Addressing and Identity */}
            <section id="addressing">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                7. Addressing and Identity
              </h2>
              <div className="mb-6 text-gray-300">
                <p>
                  Ergo uses an <Link href="/Docs/developers/data-model-apis/address_types" className="text-orange-400 hover:underline">address</Link> system that ensures security, privacy, and flexibility.
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/data-model-apis/address_types" className="text-orange-400 hover:underline">Address Basics</Link>: Fundamental concepts of Ergo addresses, including encoding, format, and usage.</li>
                  <li><Link href="/Docs/developers/data-model-apis/address_types" className="text-orange-400 hover:underline">Address Types</Link>: Detailed overview of Pay-to-Public-Key (P2PK), Pay-to-Script-Hash (P2SH), and Pay-to-Script (P2S) address types.</li>
                  <li><Link href="/Docs/developers/data-model-apis/address_validation" className="text-orange-400 hover:underline">Address Validation</Link>: Methods and best practices for validating Ergo addresses, including checksum verification and format validation.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 8. Payment Standards and Protocols */}
            <section id="payments">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                8. Payment Standards and Protocols
              </h2>
              <div className="mb-6 text-gray-300">
                <p>
                  Ergo defines protocols to streamline user interactions with <Link href="/Docs/introduction/wallets" className="text-orange-400 hover:underline">wallets</Link> and applications.
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/ecosystem/Standards/eip20" className="text-orange-400 hover:underline">ErgoPay Protocol (EIP-20)</Link>: Interaction protocol for mobile wallets and dApps.</li>
                  <li><Link href="/Docs/ecosystem/Standards/eip25" className="text-orange-400 hover:underline">Payment Request URI (EIP-25)</Link>: Standard format for payment requests.</li>
                  <li><Link href="/Docs/ecosystem/Standards/eip17" className="text-orange-400 hover:underline">Proxy Contracts (EIP-17)</Link>: Mechanisms to manage funds and logic via intermediary contracts.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 9. Cryptographic Foundations */}
            <section id="crypto">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                9. Cryptographic Foundations
              </h2>
              <div className="mb-6 text-gray-300">
                <p>
                  Ergo's <Link href="/Docs/developers/cryptographic-primitives" className="text-orange-400 hover:underline">cryptographic</Link> design ensures robust security, privacy, and flexibility.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">9.1 Sigma Protocols</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/cryptographic-primitives/zerojoin" className="text-orange-400 hover:underline">Non-interactive Zero-Knowledge Proofs</Link>: Private transaction verification without revealing sensitive data.</li>
                  <li><Link href="/Docs/developers/cryptographic-primitives" className="text-orange-400 hover:underline">Flexible Signature Schemes</Link>: Supporting multiple signature types via Sigma Protocols.</li>
                  <li><Link href="/Docs/introduction/privacy" className="text-orange-400 hover:underline">Privacy-Preserving Mechanisms</Link>: Advanced features to protect user privacy.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">9.2 Cryptographic Primitives</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/cryptographic-primitives/schnorr" className="text-orange-400 hover:underline">Discrete Logarithm Proofs</Link>: Foundational to signature verification (Schnorr).</li>
                  <li><Link href="/Docs/developers/cryptographic-primitives/other-signatures/ring" className="text-orange-400 hover:underline">Ring Signatures</Link>: Enhanced privacy through signer ambiguity.</li>
                  <li><Link href="/Docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-orange-400 hover:underline">Threshold Signatures</Link>: Enabling multi-party computational scenarios.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 10. Verification, Consensus, and Sustainability */}
            <section id="consensus">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                10. Verification, Consensus, and Sustainability
              </h2>

              <h3 className="text-xl font-semibold mb-3">10.1 Transaction Validation and Script Execution</h3>
              <div className="mb-6 text-gray-300">
                <p>
                  Ergo employs a robust, stateless transaction validation approach:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li><b>Transaction Construction & Signing:</b> See <Link href="/Docs/developers/data-model-apis/composing" className="text-orange-400 hover:underline">Transaction Composition</Link>, <Link href="/Docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">Transaction Format</Link>, and <Link href="/Docs/developers/ergoscript-languages/wallet-interaction/signing" className="text-orange-400 hover:underline">Signing</Link>.</li>
                  <li><b>On-Chain Verification:</b> <Link href="/Docs/developers/ergoscript-languages/wallet-interaction/validation" className="text-orange-400 hover:underline">Transaction Validation</Link> and <Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle Proofs</Link>.</li>
                  <li><b>Script Validation:</b> Detailed in <Link href="/Docs/developers/ergoscript-languages/script-validation" className="text-orange-400 hover:underline">ErgoTree Script Validation</Link> and the <Link href="/Docs/developers/ergoscript-languages/language-description" className="text-orange-400 hover:underline">ErgoScript Language Specification</Link>.</li>
                  <li><b>Execution Environment:</b> Access blockchain state via <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-orange-400 hover:underline">Context Variables</Link>, ensure deterministic <Link href="/Docs/developers/ergoscript-languages/evaluation" className="text-orange-400 hover:underline">evaluation</Link>, and apply cost constraints.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">10.2 Consensus Algorithm & Storage Rent</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><b><Link href="/Docs/introduction/autolykos" className="text-orange-400 hover:underline">Difficulty Adjustment</Link>:</b> A dynamic mechanism that adjusts mining difficulty every epoch to maintain a target block time of approximately 2 minutes, ensuring network stability and predictable block creation despite fluctuations in mining power.</li>
                  <li><b><Link href="/Docs/introduction/storage-rent" className="text-orange-400 hover:underline">Storage Rent Mechanism</Link>:</b> A novel approach that prevents blockchain bloat and ensures long-term sustainability by requiring users to pay rent for storing data on-chain. See the linked page for implementation, fees, and economic incentives.</li>
                </ul>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 11. Data Structures and Performance */}
            <section id="structures">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                11. Data Structures and Performance
              </h2>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/ergoscript-languages/predefined-types" className="text-orange-400 hover:underline">General Data Structures</Link></li>
                  <li><Link href="/Docs/introduction/nipopows" className="text-orange-400 hover:underline">Proof of Proof-of-Work (PoPow)</Link>: Consensus mechanism enhancement for light clients, related to <Link href="/Docs/introduction/nipopows" className="text-orange-400 hover:underline">NIPoPoWs</Link>.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">11.1 Authenticated Data Structures</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle Trees</Link> for efficient state commitment.
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li><Link href="/Docs/developers/cryptographic-primitives/merkle-tree/batch-proofs" className="text-orange-400 hover:underline">Merkle Batch Proof</Link></li>
                      <li><Link href="/Docs/developers/cryptographic-primitives/merkle-tree/extension-block" className="text-orange-400 hover:underline">Merkle Extension</Link></li>
                      <li><Link href="/Docs/developers/cryptographic-primitives/merkle-tree/lightweight-proofs" className="text-orange-400 hover:underline">Merkle Light Proof</Link></li>
                    </ul>
                  </li>
                  <li>AVL+ Trees for authenticated key-value storage.</li>
                  <li><Link href="/Docs/introduction/nipopows" className="text-orange-400 hover:underline">Interlink Vectors</Link>: Lightweight blockchain verification.</li>
                  <li><Link href="/Docs/developers/data-model-apis/block-adproofs" className="text-orange-400 hover:underline">AD Proofs</Link>: Supporting stateless clients.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">11.2 Scalability and Efficiency</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li>Parallel transaction validation inherent in the <Link href="/Docs/introduction/eutxo" className="text-orange-400 hover:underline">eUTXO model</Link>.</li>
                  <li>Stateless validation reduces computational and storage overhead.</li>
                  <li>Just-in-time costing ensures resource use is always checked.</li>
                </ul>
                <p className="mt-3">
                  For more information see the <Link href="/Docs/ecosystem/infrastructure" className="text-orange-400 hover:underline">scaling</Link> section.
                </p>
              </div>
            </section>

            <hr className="border-neutral-700 my-8" />

            {/* 12. Advanced Concepts */}
            <section id="advanced">
              <h2 className="text-2xl font-bold mb-4 mt-8">
                12. Advanced Concepts: Mastering Ergo's Capabilities
              </h2>

              <h3 className="text-xl font-semibold mb-3">12.1 Multi-Stage Transactions</h3>
              <div className="mb-6 text-gray-300">
                <ul className="list-disc list-inside ml-4">
                  <li><Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/multi-stage-transactions" className="text-orange-400 hover:underline">Multi-Stage Transactions</Link>: Understanding how to design and implement complex, multi-step transaction flows using the eUTXO model.</li>
                </ul>
              </div>
            </section>
          </main>
          {/* Table of contents sidebar - направо на десктопе */}
          <aside className="w-64 flex-shrink-0 hidden lg:block lg:h-fit lg:order-2">
            <div 
              className="flex flex-col gap-1 text-sm text-gray-300 bg-neutral-900/95 rounded-xl p-4 border border-neutral-800 backdrop-blur-md shadow-xl"
              style={{
                position: 'sticky',
                top: '80px',
                zIndex: 50,
                maxHeight: 'calc(100vh - 100px)',
                overflowY: 'auto',
                alignSelf: 'flex-start'
              }}
            >
              <div className="mb-3 font-bold text-orange-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Table of Contents
              </div>
              {toc.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      const yOffset = -80; // Header offset
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`
                    cursor-pointer transition-all duration-200 block py-1.5 px-2 rounded-md border-l-2
                    ${activeSection === id 
                      ? 'text-orange-300 bg-orange-400/10 border-orange-400 font-medium' 
                      : 'text-gray-400 hover:text-orange-300 hover:bg-neutral-800/50 border-transparent hover:border-orange-400/30'
                    }
                  `}
                >
                  {title}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </TabsContent>

      <TabsContent value="box">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
            The Ergo 'Box' Model
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo uses a transactional model similar to Bitcoin's UTXO model, where transactions create and consume single-use entities called 'boxes'.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/Docs/developers/data-model-apis/registers" className="group">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400">Registers</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Boxes contain 10 registers (R0-R9) with specific purposes and rich computational potential.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/box/lifecycle" className="group">
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-400">Lifecycle</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Understanding how boxes are created, consumed, and managed throughout their lifecycle.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/box/assets" className="group">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Coins className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">Assets</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Boxes can hold various assets including ERG, tokens, and custom data structures.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/box/modelling" className="group">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-orange-400">Modeling</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Advanced patterns and techniques for modeling complex state in Ergo boxes.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Key Points</h2>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>A box is an immutable unit, which can be created or removed, but never altered.</li>
                <li>The box is not just a simple coin; it houses data, code, and <Link href="/Docs/developers/data-model-apis/registers" className="text-orange-400 hover:underline">registers</Link>, with all of its contents exclusively stored in the registers.</li>
                <li>Four pre-defined registers contain the box's monetary value, its protection script (the <Link href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree" className="text-orange-400 hover:underline">ErgoTree</Link>), and the ID of the transaction that created the box.</li>
                <li>Each box has a unique ID, derived from the unique contents of the box, including the data of the transaction that created it.</li>
                <li>Boxes are integral to the Ergo <Link href="/Docs/developers/infrastructure" className="text-orange-400 hover:underline">protocol</Link>. The active box set (UTXO set) is authenticated through a <Link href="/Docs/developers/tooling/frameworks/sigmajs/merkle-tree" className="text-orange-400 hover:underline">hash-based data structure</Link>, facilitating the development of <Link href="/Docs/introduction/light-clients" className="text-orange-400 hover:underline">lightweight full nodes</Link>, as detailed in <a href="https://eprint.iacr.org/2016/994" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">this paper</a>.</li>
                <li>A box can hold up to six additional <Link href="/Docs/developers/data-model-apis/registers" className="text-orange-400 hover:underline">registers</Link> (R4-R9) with typed data, accessible by the script.</li>
                <li>Transactions consist of both <em>input</em> and <em>output</em> boxes.</li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Example Box</h2>
              <p className="text-gray-300 mb-4">
                Consider the 'proof-of-no-premine' box from the Ergo genesis state. This box contains the last block IDs from Bitcoin and Ethereum at the launch time, as well as the latest news headlines:
              </p>
              <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
                <CodeBlock language="json">{`{
  "boxId": "b8ce8cfe331e5eadfb0783bdc375c94413433f65e1e45857d71550d42e4d83bd",
  "value": 1000000000,
  "ergoTree": "10010100d17300",
  "assets": [],
  "creationHeight": 0,
  "additionalRegisters": {
    "R5": "0e42307864303761393732393334363864393133326335613261646162326535326132333030396536373938363038653437623064323632336337653365393233343633",
    "R6": "0e464272657869743a20626f746820546f727920736964657320706c617920646f776e207269736b206f66206e6f2d6465616c20616674657220627573696e65737320616c61726d",
    "R8": "0e45d094d0b8d0b2d0b8d0b4d0b5d0bdd0b4d18b20d0a7d0a2d09fd09720d0b2d18bd180d0b0d182d183d18220d0bdd0b02033332520d0bdd0b020d0b0d0bad186d0b8d18e",
    "R7": "0e54e8bfb0e8af84efbc9ae5b9b3e8a1a1e38081e68c81e7bbade38081e58c85e5aeb9e28094e28094e696b0e697b6e4bba3e5ba94e5afb9e585a8e79083e58c96e68c91e68898e79a84e4b8ade59bbde4b98be98193",
    "R4": "0e4030303030303030303030303030303030303031346332653265376533336435316165376536366636636362363934326333343337313237623336633333373437"
  }
}`}</CodeBlock>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Additional Box Functions</h2>
              <p className="text-gray-300 mb-4">
                Besides the <Link href="/Docs/developers/data-model-apis/registers" className="text-orange-400 hover:underline">registers</Link>, each box features a unique identification hash that can be referenced using the <code className="bg-neutral-700 px-2 py-1 rounded">id</code> function in <Link href="/Docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">ErgoScript</Link>. Box ids are computed by applying the <code className="bg-neutral-700 px-2 py-1 rounded">blake2b256</code> hash function to the box's content.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Example ErgoScript</h3>
              <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
                <CodeBlock language="scala">{`{ // Example ErgoScript using box properties
  // Retrieve the value and token multipliers from the registers of the current box (SELF)
  val valueMultiplier = SELF.R4[Int].get
  val tokenMultiplier = INPUTS(1).R4[Int].get // Accessing register of another input box

  // Check if the current box being spent (SELF) is the same as the first input box
  if(SELF.id == INPUTS(0).id){
    // If it is, check if the first output box has the correct value and token amounts
    val outputValue = OUTPUTS(0).value == SELF.value * valueMultiplier
    val outputTokens = OUTPUTS(0).tokens(0)._2 == SELF.value * tokenMultiplier
    // Return a Sigma proposition that is true only if both outputValue and outputTokens are true
    sigmaProp(outputValue && outputTokens)
  }else{
    // If the current box is not the same as the first input box, check if the output goes to a specified address
    val outputGoesToCheese = {
      // Create a public key that corresponds to a specific address
      PK("9etXmP7D3ZkWssDopWcWkCPpjn22RVuEyXoFSbVPWAvvzDbcDXE").propBytes
        == OUTPUTS(0).propositionBytes // propositionBytes holds the script (ErgoTree)
    }
    // Return a Sigma proposition that is true only if outputGoesToCheese is true
    sigmaProp(outputGoesToCheese)
  }
}
// Context Variables used: SELF, INPUTS, OUTPUTS (See ../scs/blockchain-context.md)
// Functions used: sigmaProp, PK (See ../scs/sigma.md)`}</CodeBlock>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Additional Resources</h2>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>See the <Link href="/Docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">Transaction Format</Link> page for details on how boxes are serialized within transactions.</li>
                <li>For the box type description in the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md#box-type" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoScript language specification</a>.</li>
                <li>Visit <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/ec71a6f988f7412bc36199f46e7ad8db643478c7/sigmastate/src/main/scala/org/ergoplatform/ErgoAddress.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoAddress.scala</a>, <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/ErgoBoxCandidate.scala#L24-L43" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoBoxCandidate</a>, and <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/ErgoBox.scala#L22-L59" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoBox</a> in the reference client codebase.</li>
                <li>For an in-depth explanation on Ergo box modeling, see <Link href="/Docs/developers/box/modelling" className="text-orange-400 hover:underline">this page</Link>.</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="addresses">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
            Addresses
          </h1>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>Addresses in Ergo are short strings that correspond to specific scripts and serve as a means to protect a <Link href="/Docs/developers/box" className="text-orange-400 hover:underline">box</Link>.</li>
                <li>Unlike Bitcoin (BTC), where addresses store a single amount, in Ergo's <Link href="/Docs/introduction/eutxo" className="text-orange-400 hover:underline">eUTxO</Link> model, a box contains <Link href="/Docs/developers/data-model-apis/registers" className="text-orange-400 hover:underline">registers</Link> that can store various values, including its native tokens.</li>
                <li>So, each <Link href="/Docs/developers/box" className="text-orange-400 hover:underline">box</Link> has an ERG amount and may or may not have a bunch of <code className="bg-neutral-700 px-2 py-1 rounded">{`{tokenid, token amount}`}</code> pairs, all in the UTXO model.</li>
                <li>Unlike account-based models like eth, ergo tokens are <em>native</em> and are not smart contracts.</li>
              </ul>
            </div>

            {/* Hero Buttons */}
            <div className="flex gap-4">
              <Link href="/Docs/developers/data-model-apis/address_types" className="group">
                <button className="px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
                  <Key className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Types</span>
                </button>
              </Link>
              <Link href="/Docs/developers/data-model-apis/address_validation" className="group">
                <button className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl hover:bg-teal-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
                  <Shield className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-400 font-semibold">Validation</span>
                </button>
              </Link>
            </div>

            <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Address Types</h2>
              <p className="text-gray-300">
                Learn about the different types of addresses used in Ergo and their corresponding address types by visiting the <Link href="/Docs/developers/data-model-apis/address_types" className="text-orange-400 hover:underline">Address Types</Link> page.
              </p>
            </div>

            <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Address Validation</h2>
              <p className="text-gray-300">
                Learn how to validate Ergo addresses by visiting the <Link href="/Docs/developers/data-model-apis/address_validation" className="text-orange-400 hover:underline">Address Validation</Link> page, which provides essential insights and methods for verifying P2S, P2SH, and P2PK addresses.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Resources</h2>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li><a href="https://github.com/CryptoCream/ErgoVision" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Vision</a> | A wallet visualization tool to be used for investigating transactions and addresses</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="transactions">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
            Transactions
          </h1>
          
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300">
              Each Ergo transaction is an <b>atomic state transition operation</b>, which means that it <em>destroys</em> a <Link href="/Docs/developers/box" className="text-orange-400 hover:underline">box</Link> from the state and creates new ones.
            </p>
          </div>

          {/* Hero Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/Docs/developers/data-model-apis/composing" className="group">
              <button className="px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl hover:bg-purple-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
                <Network className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">Composing Transactions</span>
              </button>
            </Link>
            <Link href="/Docs/developers/data-model-apis/babel-fees" className="group">
              <button className="px-6 py-3 bg-pink-500/10 border border-pink-500/20 rounded-xl hover:bg-pink-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
                <Coins className="w-5 h-5 text-pink-400" />
                <span className="text-pink-400 font-semibold">Babel Fees</span>
              </button>
            </Link>
            <Link href="/Docs/developers/data-model-apis/resources" className="group">
              <button className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Resources</span>
              </button>
            </Link>
          </div>

          <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Anatomy</h2>
            <p className="text-gray-300 mb-4">
              Each transaction executed on Ergo consists of <b>these three things</b>.
            </p>
            
            <div className="space-y-4">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  <code className="bg-purple-600/20 px-2 py-1 rounded">One or more</code> Input boxes
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                  <li>This is the source of your funds for the transaction.</li>
                  <li>These boxes must already exist and will be destroyed by the transaction.</li>
                  <li>The guard script in each box will be evaluated and must return <code className="bg-neutral-700 px-2 py-1 rounded">true</code> for the transaction to be considered valid.</li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">
                  <code className="bg-pink-600/20 px-2 py-1 rounded">One or more</code> Output boxes
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                  <li>This is your destination of funds.</li>
                  <li>These boxes will be created.</li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  <code className="bg-cyan-600/20 px-2 py-1 rounded">Zero or more</code> Data-Input boxes
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                  <li>These are additional boxes whose data can be referenced and used by smart contracts of the inputs.</li>
                  <li>The guard script in these boxes will not be evaluated.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Data Inputs</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/data-model-apis/composing/wallet-interaction/data-inputs" className="text-orange-400 hover:underline"><b>Data inputs</b></Link> are a unique concept created by Ergo, which were added to Cardano with the <em>Vasil</em> Hardfork. These allow multiple transactions to share a data-input box, storing only a single reference to the box in the block.</li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>If the transaction is spending boxes protected by a non-trivial script, its inputs should also contain <em>proof of spending correctness</em> - context extension (user-defined key-value map) and data inputs (links to existing boxes in the state) that you may use during script reduction to crypto, signatures that satisfies the remaining cryptographic protection of the script.</li>
              <li>Transactions are not encrypted, meaning you can publicly view transactions included in blocks.</li>
            </ul>
          </div>

          <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Tools</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>
                <a href="https://thierrym1212.github.io/txbuilder/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Transaction builder</a> | The application allows you to manipulate Ergo JSON transactions with a UI and to sign them with a wallet or to prepare the JSON for the Swagger API. It can also load the JSON of an unsigned transaction to edit it. | <a href="https://github.com/ThierryM1212/transaction-builder/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://youtu.be/0VhfY7osT2k" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Video</a>
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="block">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
            Understanding Blocks in Ergo
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            In blockchain technology, a <b>block</b> is a fundamental unit of data that groups together a set of transactions. These blocks are linked together chronologically to form a "blockchain," serving as a secure and transparent record of all transactions.
          </p>

          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              <Link href="/Docs/technology/autolykos" className="text-orange-400 hover:underline">Proof-of-Work (PoW)</Link> is a consensus mechanism that requires <Link href="/Docs/miners" className="text-orange-400 hover:underline">miners</Link> to solve complex mathematical problems to add new blocks to the blockchain. This process, known as "<Link href="/Docs/miners" className="text-orange-400 hover:underline">mining</Link>," involves significant computational effort, ensuring the security and immutability of the blockchain.
            </p>
            <p className="text-gray-300">
              Ergo, like other Proof-of-Work (PoW) blockchains such as Bitcoin, uses blocks to record transactions and ensure the integrity of the network. However, Ergo's block structure is more sophisticated, offering enhanced functionality and efficiency.
            </p>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Block Creation & Rewards</h2>
            <p className="text-gray-300 mb-4">
              In Ergo, a new block is created approximately every <b>two minutes</b>. Initially, each block rewarded miners with 75 ERG, which were distributed among them and the <Link href="/Docs/introduction/entities" className="text-orange-400 hover:underline">Ergo Foundation Treasury</Link>. This <Link href="/Docs/ecosystem/infrastructure" className="text-orange-400 hover:underline">emission schedule</Link> applied for the first two years of the network's operation.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Ergo Block Structure</h2>
            <p className="text-gray-300 text-lg">
              Ergo's blocks are divided into distinct sections to optimize organization and functionality:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/Docs/developers/data-model-apis/block-header" className="group">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 pb-12 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-400">Header</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  The header acts as a summary of the block's content. It includes metadata (block version, timestamp, etc.), hashes linking to other block sections, and the Proof-of-Work solution.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/data-model-apis/block-transactions" className="group">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 pb-12 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-orange-400">Transactions</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  This section contains the core data of the block – a list of all transactions included within it. These transactions define how tokens and assets are transferred on the Ergo blockchain.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/data-model-apis/block-adproofs" className="group">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 pb-12 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-red-400">ADProofs</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  These cryptographic proofs, short for Authenticated Data Proofs, allow light clients (nodes with limited storage) to verify transactions without downloading the entire block or the full UTXO set.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/data-model-apis/extension-section" className="group">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 pb-12 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">Extension Section</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  This section provides a flexible space to store additional data that doesn't fit into the other sections. It includes interlinks for NiPoPoWs (efficient proof-of-work verification) and system parameters (e.g., block size).
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </Link>
          </div>

          {/* Main Content */}
          <div className="space-y-6">


            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Related Concepts</h2>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li><b>Ergo Modifiers:</b> In Ergo's peer-to-peer network protocol, blocks and transactions are referred to as "modifiers." These modifiers are exchanged between nodes to keep the network synchronized.</li>
                <li><b>Superblock Clients:</b> Ergo supports "superblock clients," which provide an additional layer of efficiency and flexibility for specific use cases, related to <Link href="/Docs/introduction/nipopows" className="text-orange-400 hover:underline">logarithmic space mining</Link>.</li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Additional Resources</h2>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li><Link href="/Docs/developers/data-model-apis/block-header" className="text-orange-400 hover:underline">Block Header</Link>: Detailed examination of block header components</li>
                <li><Link href="/Docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">Block Transactions</Link>: Understanding how transactions are organized within a block</li>
                <li><Link href="/Docs/developers/data-model-apis/block-adproofs" className="text-orange-400 hover:underline">AD Proofs</Link>: Authenticated Data Proofs for stateless client verification</li>
                <li><Link href="/Docs/developers/data-model-apis/extension-section" className="text-orange-400 hover:underline">Extension Section</Link>: Flexible data storage section for additional metadata</li>
                <li><Link href="/Docs/miners" className="text-orange-400 hover:underline">Mining Overview</Link>: Understanding the mining process and block creation</li>
                <li><Link href="/Docs/ecosystem/infrastructure" className="text-orange-400 hover:underline">Emission Schedule</Link>: Details about ERG distribution and rewards</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="discrete">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
            Discrete Logarithm Proofs in Ergo
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Discrete logarithm proofs are a fundamental cryptographic primitive in Ergo's signature verification mechanism, based on the computational hardness of the discrete logarithm problem in elliptic curve cryptography.
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-red-400">Key Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 pb-12 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-red-400">DLog Proof</h3>
                </div>
                <p className="text-gray-300 text-sm min-h-[5rem]">
                  Proofs of knowledge of a discrete logarithm (DLog) verify signature authenticity without revealing the secret key.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 pb-12 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Key className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">Schnorr Signature</h3>
                </div>
                <p className="text-gray-300 text-sm min-h-[5rem]">
                  Ergo uses Schnorr signatures built on discrete logarithm proofs for efficient and secure signature verification.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 pb-12 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Sigma className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-400">Sigma Protocols</h3>
                </div>
                <p className="text-gray-300 text-sm min-h-[5rem]">
                  Related cryptographic protocols: 
                  <Link href="/Docs/developers/cryptographic-primitives" className="text-orange-400 hover:underline font-semibold">Sigma Protocols</Link>, 
                  <Link href="/Docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-orange-400 hover:underline font-semibold">Threshold Signatures</Link>, 
                  <Link href="/Docs/developers/cryptographic-primitives/other-signatures/ring" className="text-orange-400 hover:underline font-semibold">Ring Signatures</Link>.
                </p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
                  Learn more
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Technical Details</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><b>Proof Structure:</b> Demonstrate knowledge of secret exponent <code>w</code> such that <code>g^w = x</code></li>
              <li><b>g:</b> Generator of an elliptic curve group</li>
              <li><b>x:</b> Public key point</li>
              <li><b>w:</b> Private key</li>
            </ul>
          </div>

          <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Implementation in ErgoScript</h2>
            <p className="text-gray-300 mb-4">
              In ErgoScript, discrete logarithm proofs are implemented using the <code>proveDlog()</code> predicate, which returns true if a valid proof of knowledge can be provided.
            </p>
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 my-4">
              <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-200 overflow-x-auto">
{`// DLog-based signature verification
val pubKey = ...  // Public key point
val signature = ...  // Signature proof
proveDlog(pubKey)`}
              </pre>
            </div>
          </div>

          <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Practical Examples</h2>
            <div className="space-y-4">
              <Link href="/Docs/developers/cryptographic-primitives/schnorr" className="group block">
                <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
                  <span className="font-semibold text-green-300 group-hover:underline">Schnorr Signature Verification</span>
                </div>
              </Link>
              <Link href="/Docs/developers/cryptographic-primitives/other-signatures" className="group block">
                <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
                  <span className="font-semibold text-green-300 group-hover:underline">Public Key Cryptography</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">Security Considerations</h2>
            <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
              <li>Based on discrete logarithm problem hardness</li>
              <li>Efficient and compact signature verification</li>
              <li>Supports multi-signatures and ring signatures</li>
            </ul>
          </div>

          <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Advanced Applications</h2>
            <div className="space-y-4">
              <Link href="/Docs/developers/cryptographic-primitives" className="group block">
                <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
                  <span className="font-semibold text-pink-300 group-hover:underline">Cryptographic Foundations</span>
                </div>
              </Link>
              <Link href="/Docs/developers/cryptographic-primitives/zerojoin" className="group block">
                <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
                  <span className="font-semibold text-pink-300 group-hover:underline">ZeroJoin Privacy Protocol</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">References</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/cryptographic-primitives" className="text-orange-400 hover:underline">Cryptographic Primitives</Link></li>
              <li><Link href="/Docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">ErgoScript</Link></li>
            </ul>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 