"use client";

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function HeadlessFrameworkPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Ergo Headless dApp Framework (HDF)</h1>
      <div className="mb-6 flex flex-wrap gap-4">
        <Link
          href="/docs/developers/tooling/frameworks"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
        <Link
          href="/docs/developers/tooling/frameworks/headless-dapp-framework/modules"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          Modules
        </Link>
      </div>
      <p className="text-gray-300 mb-4">The <a href="https://github.com/ergoplatform/ergo-headless-dapp-framework" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Headless dApp Framework (HDF)</a> is a powerful <b>Rust framework</b> designed for developing portable and reusable off-chain logic for Ergo dApps, often referred to as "Headless dApps". It provides developers with the first portable <a href="/docs/developers/intro/eutxo" className="text-cyan-400 hover:underline">UTXO</a>-based headless dApp development framework on any blockchain.</p>
      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8 flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Testnet Address Limitation</h3>
          <p className="text-gray-300">
            Please be aware that the current version of the Headless dApp Framework <a href="https://github.com/ergoplatform/ergo-headless-dapp-framework/blob/main/src/encoding.rs#L104" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">does not support testnet addresses</a>. Development and testing should target mainnet address formats.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">What Are Headless dApps?</h2>
      <p className="text-gray-300 mb-4">Headless dApps represent a novel approach to dApp development, focusing on creating pure, portable, self-contained logic for interacting with on-chain <a href="/docs/developers/intro/scs/smart-contracts-overview" className="text-cyan-400 hover:underline">smart contract protocols</a>.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Separation of Concerns:</b> They separate the core dApp logic (reading blockchain state, constructing transactions) from the user interface (frontend). The HDF <i>is</i> the "backend" logic, but without a built-in frontend (hence "headless").</li>
        <li><b>Portability:</b> Because they are self-contained logic (often compiled to WebAssembly or native libraries), headless dApps built with the HDF can run anywhere  desktop OS, mobile OS, browsers, servers, bots, etc.</li>
        <li><b>Reusability & Composability:</b> They expose a streamlined interface, allowing various frontends (websites, mobile apps, CLI tools) and automated systems (scripts, arbitrage bots) to easily integrate and interact with the underlying protocol without needing deep knowledge of its internal workings. Multiple headless dApps can be composed together within a single application.</li>
        <li><b>Decentralized Ecosystem:</b> This model encourages a diverse ecosystem of frontends built by different developers or companies, all leveraging the same core headless dApp logic. This contrasts with the traditional model where the protocol creators often also control the single, primary frontend.</li>
        <li><b>New Business Models:</b> It creates opportunities for frontend developers to build value and potentially generate revenue by creating user interfaces for existing headless dApps.</li>
      </ul>
      <p className="text-gray-300 mb-4">In essence, headless dApps provide the standardized "engine" for interacting with a smart contract protocol, allowing anyone to build the "car" (the user interface or application) around it.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">The Ergo HDF: Goals & Concepts</h2>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Write Once, Run Anywhere:</b> Enable developers to write off-chain logic once in Rust and target all platforms.</li>
        <li><b>Simplified Development:</b> Provide a clearer path from <a href="https://github.com/ergoplatform/eips/blob/master/eip-0006.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo dApp Specifications (like EIP-6)</a> to a working implementation.</li>
        <li><b>Standardized Interface:</b> Offer easy-to-use methods for frontend implementors to access dApp state and perform actions.</li>
        <li><b>Input Abstraction:</b> Abstract the complexity of finding and selecting input UTXOs using <code>BoxSpec</code> definitions.</li>
        <li><b>Composability:</b> Facilitate building scripts, bots, and complex applications on top of multiple HDF-based dApps.</li>
      </ol>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Core Concepts (Based on EIP-6)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Protocol:</b> Your dApp is defined as a smart contract protocol.</li>
        <li><b>Stage:</b> Represents a specific state within the protocol where a UTXO (box) resides at a point in time. Protocols can be single-stage or multi-stage.</li>
        <li><b>Action:</b> Defines the logic for state transitions  how UTXOs move between stages, enter the protocol, or exit the protocol. Actions involve:
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li><b>Acquiring Inputs:</b> Gathering necessary UTXOs, user inputs, or external data.</li>
            <li><b>Creating Outputs:</b> Constructing the output UTXOs that represent the new state after the action, embedded within an <code>UnsignedTx</code>.</li>
          </ol>
        </li>
      </ul>
      <p className="text-gray-300 mb-4">The HDF provides Rust structs, traits, and utilities to define these stages, actions, input specifications (<code>BoxSpec</code>), and transaction-building logic.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Getting Started with the HDF</h2>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>
          <b>Prerequisites:</b>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Install the <a href="https://www.rust-lang.org/tools/install" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Rust toolchain</a>.</li>
            <li>Basic understanding of Rust programming.</li>
            <li>Familiarity with Ergo's <a href="/docs/developers/intro/eutxo" className="text-cyan-400 hover:underline">eUTXO model</a> and <a href="/docs/developers/intro/scs/ergoscript" className="text-cyan-400 hover:underline">ErgoScript</a> concepts.</li>
          </ul>
        </li>
        <li>
          <b>Clone the Repository:</b>
          <CodeBlock language="typescript">{`git clone https://github.com/ergoplatform/ergo-headless-dapp-framework.git\ncd ergo-headless-dapp-framework`}</CodeBlock>
        </li>
        <li><b>Explore Examples:</b> Review the example projects within the repository to understand usage patterns.</li>
        <li><b>Follow Tutorials:</b> Work through the official tutorials (linked below) to build your first headless dApp.</li>
        <li><b>Consult Documentation:</b> Refer to the framework's Rust documentation (often generated via <code>cargo doc --open</code>) and the EIP-6 specification.</li>
      </ol>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>GitHub Repository:</b> <a href="https://github.com/ergoplatform/ergo-headless-dapp-framework" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergoplatform/ergo-headless-dapp-framework</a> (Primary source code, examples, and tutorials)</li>
        <li><b>Video Introduction:</b> <a href="https://www.youtube.com/watch?v=temmjyKpsEU" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Robert Kornacki explains Headless dApps</a> (Covers technical, business, and ecosystem aspects).</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Tutorials (Located in HDF GitHub Repo)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Math Bounty Headless dApp Series:</b> A step-by-step guide to building a complete headless dApp with a CLI frontend.
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><a href="https://github.com/ergoplatform/ergo-headless-dapp-framework/blob/main/tutorials/Math_Bounty/1-math-bounty-dApp-getting-started.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Part 1: Getting Started Writing Your First Action</a></li>
            <li><a href="https://github.com/ergoplatform/ergo-headless-dapp-framework/blob/main/tutorials/Math_Bounty/2-math-bounty-dApp-finishing-the-headless-dapp.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Part 2: Finishing The Headless dApp</a></li>
            <li><a href="https://github.com/ergoplatform/ergo-headless-dapp-framework/blob/main/tutorials/Math_Bounty/3-math-bounty-dApp-writing-a-cli-frontend-that-allows-creating-bounties.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Part 3: Writing A CLI Frontend</a></li>
          </ul>
        </li>
        <li><i>(Note: The JDE links in the original document refer to a different, potentially related or deprecated project, Ergo-JDE. The HDF tutorials above are the primary resource for this framework.)</i></li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">References</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>EIP-6:</b> <a href="https://github.com/ergoplatform/eips/blob/master/eip-0006.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Smart Contract Protocol Specification Format</a> (Underlying design philosophy).</li>
      </ul>
    </>
  );
} 