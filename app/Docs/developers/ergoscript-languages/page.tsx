"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, Settings, Database, Zap, BookOpen, Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ErgoScriptLanguagesPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Info className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="sigma-language" className="flex items-center gap-2 justify-center">
          <Code className="w-4 h-4" /> Sigma Language
        </TabsTrigger>
        <TabsTrigger value="tooling" className="flex items-center gap-2 justify-center">
          <Settings className="w-4 h-4" /> Tooling
        </TabsTrigger>
        <TabsTrigger value="ergotree" className="flex items-center gap-2 justify-center">
          <Database className="w-4 h-4" /> ErgoTree
        </TabsTrigger>
        <TabsTrigger value="features" className="flex items-center gap-2 justify-center">
          <Zap className="w-4 h-4" /> Features
        </TabsTrigger>
        <TabsTrigger value="resources" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Resources
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            ErgoScript Languages
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            ErgoScript is a powerful, developer-friendly programming language designed specifically for writing smart contracts on the Ergo blockchain.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/Docs/developers"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
              Back to Developers
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-lg text-gray-300 mb-6 max-w-2xl">
            <b>ErgoScript</b> is a powerful, developer-friendly programming language designed specifically for writing <Link href="/Docs/developers/contracts" className="text-cyan-400 hover:underline">smart contracts</Link> on the <Link href="/Docs/developers/protocol-overview" className="text-cyan-400 hover:underline">Ergo blockchain</Link>. Think of it as a specialized language that allows you to create complex <Link href="/Docs/developers/contracts" className="text-cyan-400 hover:underline">financial contracts</Link> and applications with unprecedented flexibility and <Link href="/Docs/developers/security" className="text-cyan-400 hover:underline">security</Link>. Designed as a subset of Scala, it allows developers to define complex conditions for spending funds.
          </div>

          <div className="text-gray-300 mb-6 max-w-2xl">
            ErgoScript code is translated into a lower-level representation called <Link href="/Docs/developers/ergotree" className="text-cyan-400 hover:underline font-semibold">ErgoTree</Link> before being stored on the <Link href="/Docs/developers/protocol-overview" className="text-cyan-400 hover:underline">blockchain</Link>. During <Link href="/Docs/developers/validation" className="text-cyan-400 hover:underline">transaction validation</Link>, ErgoTree is interpreted using cryptographic protocols based on <Link href="/Docs/developers/sigma" className="text-cyan-400 hover:underline">Sigma Protocols</Link>. This unique architecture enables Ergo to support advanced cryptographic functionalities like <Link href="/Docs/developers/ring" className="text-cyan-400 hover:underline">ring signatures</Link> and <Link href="/Docs/developers/threshold" className="text-cyan-400 hover:underline">threshold signatures</Link> directly within the scripting language, without requiring special core protocol changes.
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6">
            <div className="text-cyan-400 font-semibold mb-2">💡 Sigma Protocols</div>
            <div className="text-gray-300">
              Ergo's support for <Link href="/Docs/developers/sigma" className="text-cyan-400 hover:underline">Sigma Protocols</Link> (aka generalized Schnorr proofs) is a key feature, providing efficient and composable building blocks for <Link href="/Docs/developers/zkp" className="text-cyan-400 hover:underline">zero-knowledge proofs</Link>. <Link href="/Docs/developers/schnorr" className="text-cyan-400 hover:underline">Schnorr proofs</Link> and <Link href="/Docs/developers/diffie" className="text-cyan-400 hover:underline">proofs of Diffie-Hellman tuples</Link> are supported by default, with the potential for the community to add more through <Link href="/Docs/developers/soft-fork" className="text-cyan-400 hover:underline">soft forks</Link>.
            </div>
          </div>

          <div className="text-gray-300 mb-6 max-w-2xl">
            ErgoScript builds upon the security principles of Bitcoin while enabling much more complex financial contracts. Unlike Bitcoin Script, ErgoScript supports features necessary for advanced applications, including the ability to reference blockchain state and implement complex logic, effectively enabling Turing-Complete computations through <Link href="/Docs/developers/multi" className="text-cyan-400 hover:underline">multi-stage contract interactions</Link>.
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
            <div className="text-blue-400 font-semibold mb-2">📋 Background Reading</div>
            <details className="text-gray-300">
              <summary className="cursor-pointer font-medium">Contract Model Comparison: Ergo (eUTXO) vs. Ethereum (Account)</summary>
              <div className="mt-3 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Paradigm</h4>
                  <p>The account model (used by Ethereum) is imperative: sending coins involves changing balances in a global storage state. Ergo's <Link href="/Docs/developers/eutxo" className="text-cyan-400 hover:underline">eUTXO-based</Link> programming model is declarative: ErgoScript contracts specify <i>conditions</i> under which funds (<Link href="/Docs/developers/eutxo" className="text-cyan-400 hover:underline">UTXOs</Link>) can be spent, rather than dictating state changes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Scalability</h4>
                  <p>In the account model, both storage changes and validity checks happen <b>on-chain</b> during contract execution. In Ergo, <Link href="/Docs/developers/transactions" className="text-cyan-400 hover:underline">transactions</Link> are typically created <b>off-chain</b>, and only the validation checks occur on-chain. This significantly reduces the computational load on validating <Link href="/Docs/developers/modes" className="text-cyan-400 hover:underline">nodes</Link>. The immutable nature of the transaction graph also allows for various optimizations to improve throughput. Furthermore, Ergo's design facilitates <Link href="/Docs/developers/nipopow_nodes" className="text-cyan-400 hover:underline font-semibold">light verifying nodes</Link> (via <Link href="/Docs/developers/nipopows" className="text-cyan-400 hover:underline">NIPoPoWs</Link>), enhancing network <Link href="/Docs/developers/scaling" className="text-cyan-400 hover:underline">scalability</Link> and accessibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Shared State</h4>
                  <p>The account-based model relies on a shared mutable state, which can lead to complex interactions and subtle bugs in concurrent systems. Ergo's model, based on Bitcoin's UTXO concept, uses an immutable <Link href="/Docs/developers/transactions" className="text-cyan-400 hover:underline">graph of transactions</Link>, which is inherently more suitable for distributed environments and simplifies the development of <Link href="/Docs/developers/light-spv-node" className="text-cyan-400 hover:underline">light clients</Link>.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Expressive Power</h4>
                  <p>While Ethereum's Turing-complete language offers theoretical flexibility, it has practical limitations like blockchain bloat, complex bugs, unpredictable gas costs, and limits on contract complexity. Ergo achieves similar expressive power through its <Link href="/Docs/developers/eutxo" className="text-cyan-400 hover:underline">eUTXO model</Link> and <Link href="/Docs/developers/multi-stage-txs" className="text-cyan-400 hover:underline">multi-stage contracts</Link>, but intentionally keeps the core ErgoScript language itself non-Turing-complete to enhance security and predictability.</p>
                </div>
              </div>
            </details>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <div className="text-green-400 font-semibold mb-2">💡 Simple Example</div>
            <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 text-sm text-gray-200 overflow-x-auto"><code>{`// This script locks funds in a box.
// It allows Alice to spend the funds before block 100,000,
// OR Bob to spend them at or after block 100,000.
{
  (HEIGHT < 100000 && alicePubKey) ||
  (HEIGHT >= 100000 && bobPubKey)
}`}</code></pre>
            <div className="text-gray-300 mt-2 text-sm">
              (<code>HEIGHT</code> is a context variable representing the current <Link href="/Docs/developers/block-header" className="text-cyan-400 hover:underline">block height</Link>. <code>alicePubKey</code> and <code>bobPubKey</code> represent proof of knowledge of their respective secret keys, typically via a <Link href="/Docs/developers/signing" className="text-cyan-400 hover:underline">signature check</Link>).
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
            <div className="text-purple-400 font-semibold mb-2">🔑 Key Concepts</div>
            <div className="text-gray-300">
              Explore the <Link href="/Docs/developers/ergoscript-key-concepts" className="text-cyan-400 hover:underline">Core Concepts of ErgoScript</Link>.
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <div className="text-yellow-400 font-semibold mb-2">📝 Data Inputs</div>
            <div className="text-gray-300">
              Ergo offers a unique approach to smart contracts by allowing them to access data from other <Link href="/Docs/developers/box" className="text-cyan-400 hover:underline">boxes</Link> on the blockchain without spending them, using <Link href="/Docs/developers/read-only-inputs" className="text-cyan-400 hover:underline font-semibold">data inputs</Link>. This enables efficient access to shared information like <Link href="/Docs/developers/oracles" className="text-cyan-400 hover:underline">oracle price feeds</Link> or <Link href="/Docs/developers/dao" className="text-cyan-400 hover:underline">DAO</Link> parameters.
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-6">
            <div className="text-orange-400 font-semibold mb-2">⚙️ ErgoScript vs ErgoTree</div>
            <div className="text-gray-300">
              ErgoScript is the high-level, developer-friendly language. It gets compiled into <Link href="/Docs/developers/ergotree" className="text-cyan-400 hover:underline font-semibold">ErgoTree</Link>, a lower-level, serialized representation stored on the blockchain and interpreted by nodes. Explore the distinction <Link href="/Docs/developers/ergotree" className="text-cyan-400 hover:underline">here</Link>.
            </div>
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Experimenting & Tooling</h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            While ErgoScript aims for simplicity and security, debugging complex contracts can still be challenging. Developers often rely on manual inspection and testing using the tools below. Tools are emerging to improve this process:
          </div>

          <h3 className="text-xl font-bold text-orange-400 mb-2">Core Interpreters & Playgrounds</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>🥇 <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Sigmastate Interpreter</a>: The reference implementation used by nodes.</li>
            <li>🥇 <a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Ergo Playgrounds</a>: Scala-based environment for contract and off-chain code testing.</li>
            <li><Link href="/Docs/developers/puppet" className="text-cyan-400 hover:underline">Ergo-Puppet</Link>: Advanced tool built on Ergo Playgrounds for off-chain experimentation and unit testing.</li>
          </ul>

          <h3 className="text-xl font-bold text-orange-400 mb-2">Online Editors & Compilers</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>🥇 <a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">escript.online</a>: Online editor, compiler, and playground.</li>
            <li><a href="https://wallet.plutomonkey.com/p2s/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript P2S Playground (Plutomonkey)</a>: Compile ErgoScript to P2S addresses.</li>
            <li><Link href="/Docs/developers/scastie" className="text-cyan-400 hover:underline">Scastie</Link>: Online Scala compiler suitable for ErgoScript snippets.</li>
            <li><a href="https://github.com/scalahub/KioskWeb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">KioskWeb</a>: Web interface for the Kiosk framework (useful for exploring Kiosk-based contracts).</li>
          </ul>

          <h3 className="text-xl font-bold text-orange-400 mb-2">Compilers & Language Support</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergoscript Compiler (Rust)</a>: Rust implementation.</li>
            <li><a href="https://github.com/ergoplatform/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergoscript Compiler (Scala)</a>: Scala CLI tool.</li>
            <li><a href="https://github.com/ergoplatform/ergoscala-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScala Compiler</a>: Compile a subset of Scala to ErgoScript.</li>
            <li><a href="https://marketplace.visualstudio.com/items?itemName=ergoscript.ergoscript-language-support" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">VSCode ErgoScript Language Support</a>: Syntax highlighting for VSCode.</li>
          </ul>

          <h3 className="text-xl font-bold text-orange-400 mb-2">Debugging & Simulation</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><Link href="/Docs/developers/debugging" className="text-cyan-400 hover:underline font-semibold">Debugging Guide</Link>: Covers current best practices, tools, and techniques.</li>
            <li><a href="https://github.com/spectrum-finance/ergoscript-simulator" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergoscript Simulator</a>: A community-developed tool for simulating ErgoScript execution.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Advanced Patterns & Tutorials</h2>
          <div className="text-gray-300 mb-4 max-w-2xl">
            ErgoScript's features enable the implementation of complex contract patterns:
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><Link href="/Docs/developers/fsm-example" className="text-cyan-400 hover:underline font-semibold">Finite State Machines (FSMs)</Link>: Learn how to model multi-stage contracts where behavior depends on the current state encoded within a box.</li>
            <li><Link href="/Docs/developers/mast-example" className="text-cyan-400 hover:underline font-semibold">Merkleized Abstract Syntax Trees (MAST)</Link>: Explore techniques to improve privacy and efficiency for contracts with many spending conditions by revealing only the executed script branch.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Common Use Cases</h2>
          <div className="text-gray-300 mb-4 max-w-2xl">
            ErgoScript's flexibility enables various applications:
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><Link href="/Docs/developers/threshold" className="text-cyan-400 hover:underline font-semibold">Multi-Signature Wallets</Link>: Create wallets requiring multiple parties to approve <Link href="/Docs/developers/transactions" className="text-cyan-400 hover:underline">transactions</Link>.</li>
            <li><b>Time-Locked Contracts:</b> Define contracts that can only be executed after a specific time or <Link href="/Docs/developers/block-header" className="text-cyan-400 hover:underline">block height</Link>.</li>
            <li><b>Conditional Spending:</b> Set complex conditions for spending funds based on various parameters (e.g., oracle data, specific inputs).</li>
            <li><b>Atomic Swaps:</b> Facilitate trustless peer-to-peer exchange of different assets across blockchains or within Ergo.</li>
            <li><b>Crowdfunding:</b> Implement secure and transparent crowdfunding campaigns.</li>
            <li><b>Complex Financial Derivatives:</b> Build sophisticated financial instruments on the blockchain.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Best Practices</h2>
          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-1">
            <li>Keep contracts simple and readable.</li>
            <li>Use built-in <Link href="/Docs/developers/crypto" className="text-cyan-400 hover:underline">cryptographic primitives</Link> where possible.</li>
            <li>Always consider <Link href="/Docs/developers/validation" className="text-cyan-400 hover:underline">transaction validation</Link> overhead and potential costs.</li>
            <li>Test contracts thoroughly using playgrounds and SDK testing frameworks.</li>
            <li>Reason carefully about all possible execution paths and potential economic exploits.</li>
            <li>Leverage <Link href="/Docs/developers/read-only-inputs" className="text-cyan-400 hover:underline">data inputs</Link> for accessing shared state efficiently.</li>
          </ol>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Common Pitfalls to Avoid</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Overcomplicating contract logic unnecessarily.</li>
            <li>Ignoring performance implications and transaction costs.</li>
            <li>Neglecting comprehensive error handling and edge cases in off-chain code interacting with contracts.</li>
            <li>Not fully understanding the nuances of the <Link href="/Docs/developers/eutxo" className="text-cyan-400 hover:underline">eUTXO model</Link> (e.g., box lifecycle, state transitions).</li>
            <li>Insecure handling of secrets or assumptions about context in off-chain components.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Learning Paths & Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Beginner:</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Understand the <Link href="/Docs/developers/ergoscript-key-concepts" className="text-cyan-400 hover:underline">Core Concepts</Link>.</li>
                <li>Experiment with the <a href="https://wallet.plutomonkey.com/p2s/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">P2S Playground</a>.</li>
                <li>Study simple <Link href="/Docs/developers/contracts" className="text-cyan-400 hover:underline">example contracts</Link>.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Intermediate:</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Learn about <Link href="/Docs/developers/sigma" className="text-cyan-400 hover:underline">Sigma Protocols</Link>.</li>
                <li>Explore <Link href="/Docs/developers/multi" className="text-cyan-400 hover:underline">Multi-Stage Contract patterns</Link>.</li>
                <li>Work through SDK tutorials (<Link href="/Docs/developers/appkit" className="text-cyan-400 hover:underline">AppKit</Link>, <Link href="/Docs/developers/fleet" className="text-cyan-400 hover:underline">Fleet</Link>, <Link href="/Docs/developers/sigma-rust" className="text-cyan-400 hover:underline">SigmaRust</Link>).</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Advanced:</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Understand <Link href="/Docs/developers/ergotree" className="text-cyan-400 hover:underline">ErgoTree Compilation & Serialization</Link>.</li>
                <li>Explore advanced <Link href="/Docs/developers/crypto" className="text-cyan-400 hover:underline">cryptographic protocols</Link>.</li>
                <li>Contribute to open-source projects or build your own dApp.</li>
              </ul>
            </div>
          </div>

          <div className="text-gray-300 mb-6 max-w-2xl">
            Join community discussions on <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Discord</a> (<code>#ergoscript</code>, <code>#sigma-rust</code>, <code>#appkit</code>, <code>#fleet</code>), <a href="https://t.me/ergo_dev" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Telegram</a>, or the <a href="https://www.ergoforum.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Forum</a> to ask questions and collaborate.
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Advanced Cryptography & Structures</h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            ErgoScript's foundation on Sigma Protocols allows for powerful cryptographic primitives. However, some advanced structures have specific considerations:
          </div>
          <div className="text-gray-300 mb-6 max-w-2xl">
            <b>Merkle Trees:</b> While <Link href="/Docs/developers/data-model/structures/merkle/merkle-tree" className="text-cyan-400 hover:underline">Merkle Trees</Link> are fundamental to Ergo's data integrity (e.g., for transactions and extension data), direct verification of arbitrary Merkle proofs <i>within</i> an ErgoScript contract is not natively supported by a single built-in function. Verification typically happens off-chain or relies on specific protocol designs where roots are checked. The <Link href="/Docs/developers/tx/mast-example" className="text-cyan-400 hover:underline">MAST pattern</Link> leverages Merkle trees conceptually, often using <code>executeFromVar</code> for on-chain execution of proven branches rather than full proof verification within the script. Developers interested in the general concept and off-chain usage should consult the main <Link href="/Docs/developers/data-model/structures/merkle/merkle-tree" className="text-cyan-400 hover:underline">Merkle Tree documentation</Link>.
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Technical Resources</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><Link href="/Docs/developers/ergotree" className="text-cyan-400 hover:underline">ErgoTree Documentation</Link></li>
            <li><Link href="/Docs/developers/sigma" className="text-cyan-400 hover:underline">Sigma Protocols Overview</Link></li>
            <li><Link href="/Docs/developers/schnorr" className="text-cyan-400 hover:underline">Schnorr Signatures</Link></li>
            <li><Link href="/Docs/introduction/nipopows" className="text-cyan-400 hover:underline">Light Verifying Nodes</Link></li>
            <li><Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">eUTXO Model Explanation</Link></li>
            <li><a href="https://ergoplatform.org/en/whitepaper/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Whitepaper</a></li>
            <li><Link href="/Docs/developers/lang-spec" className="text-cyan-400 hover:underline">ErgoScript Language Specification</Link> (Detailed reference)</li>
            <li><a href="https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Advanced ErgoScript Tutorial</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Comparative Analysis</h2>
          <div className="text-gray-300 mb-4 max-w-2xl">
            ErgoScript stands out by:
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Enabling complex logic via the <Link href="/Docs/developers/eutxo" className="text-cyan-400 hover:underline">eUTXO model</Link> without full on-chain Turing-completeness risks.</li>
            <li>Natively supporting advanced cryptographic protocols (<Link href="/Docs/developers/sigma" className="text-cyan-400 hover:underline">Sigma Protocols</Link>).</li>
            <li>Allowing complex <Link href="/Docs/developers/contracts" className="text-cyan-400 hover:underline">financial contracts</Link> with predictable <Link href="/Docs/developers/min-fee" className="text-cyan-400 hover:underline">execution costs</Link>.</li>
            <li>Maintaining a declarative, secure programming model based on <Link href="/Docs/developers/eutxo" className="text-cyan-400 hover:underline">UTXOs</Link>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Performance Considerations</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
            <li>Off-chain <Link href="/Docs/developers/transactions" className="text-cyan-400 hover:underline">transaction creation</Link> minimizes <Link href="/Docs/developers/ergoscript" className="text-cyan-400 hover:underline">on-chain computation</Link>.</li>
            <li><Link href="/Docs/developers/validation" className="text-cyan-400 hover:underline">On-chain validation</Link> focuses only on script conditions.</li>
            <li>Immutable <Link href="/Docs/developers/transactions" className="text-cyan-400 hover:underline">transaction graph</Link> allows for optimizations.</li>
            <li>Native support for <Link href="/Docs/developers/light-spv-node" className="text-cyan-400 hover:underline">light verifying nodes</Link> enhances accessibility.</li>
            <li><Link href="/Docs/developers/multi-stage-txs" className="text-cyan-400 hover:underline">Non-Turing complete</Link> base language prevents infinite loops and simplifies cost analysis.</li>
            <li>See the <a href="https://github.com/ergoplatform/sigmastate-interpreter/blob/develop/docs/perf-style-guide.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Interpreter Performance Style Guide</a> for tips on writing efficient scripts.</li>
          </ul>
        </div>
      </TabsContent>

      {/* Placeholder content for other tabs */}
      <TabsContent value="sigma-language">
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            The Sigma Language
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            The Sigma Language is the foundation of ErgoScript, implementing authentication languages based on Sigma-protocols.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/Docs/developers"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
              Back to Developers
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-lg text-gray-300 mb-6 max-w-2xl">
            The <a href="https://github.com/ScorexFoundation/sigmastate-interpreter#sigma-language-background.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigmastate-interpreter</a> repository contains implementations of ErgoScript compiler and ErgoTree Interpreter for a family of Sigma-protocol based authentication languages (or simply <b>Sigma language</b>).
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sigma Language Background</h2>
          <div className="text-gray-300 mb-6 max-w-2xl">
            Every coin in Bitcoin is protected by a program in the stack-based Script language. An interpreter for the language evaluates the program against a context (a few variables containing information about a spending transaction and the blockchain), producing a single boolean value. While Bitcoin Script allows some contracts to be programmed, its abilities are limited. Also, a hard fork would be required to add new cryptographic primitives, such as ring signatures.
          </div>

          <div className="text-gray-300 mb-6 max-w-2xl">
            Generalizing the Bitcoin Script, ErgoScript compiler and ErgoTree interpreter implement an <b>authentication language</b> which allows developers to specify coin spending conditions. The <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sc/src/main/scala/sigmastate/lang/SigmaCompiler.scala#L48" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Compiler</a> compiles the source code into <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/Values.scala#L990" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTree</a> byte code, which can be saved in UTXO coins to protect their spending (same as in Bitcoin).
          </div>

          <div className="text-gray-300 mb-6 max-w-2xl">
            ErgoTree, in turn, is a bytecode language and memory representation that can be deterministically interpreted in the given <i>blockchain context</i>.
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6">
            <div className="text-cyan-400 font-semibold mb-2">💡 Please note</div>
            <div className="text-gray-300">
              ErgoTree defines guarding proposition for a coin as a logic formula which combines predicates over a context and cryptographic statements provable via <Link href="/Docs/developers/sigma" className="text-cyan-400 hover:underline">Σ-protocols</Link> with AND, OR, k-out-of-n connectives.
            </div>
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sigma Language Topics</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Core Concepts
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Fundamental principles and concepts of the Sigma language</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/simple-syntax" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Simple Syntax
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Basic syntax and structure of Sigma language expressions</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/language-description" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Language Description
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Detailed description of the Sigma language features</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/sigma-propositions" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Sigma Propositions
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Understanding Sigma propositions and their role</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/sigmaboolean" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  SigmaBoolean
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Boolean logic and operations in Sigma language</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  The Blockchain Context
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">How Sigma language interacts with blockchain context</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/accessing-boxes" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Accessing Boxes and Registers
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Working with UTXO boxes and their registers</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/global-functions" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Global Functions
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Built-in functions available in Sigma language</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/language-operations" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Language Operations
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Operators and operations supported by Sigma</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/sigma-6" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Sigma 6.0
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Latest version features and improvements</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/wallet-interaction" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Interacting with an Ergo Wallet
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">How Sigma language works with Ergo wallets</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link href="/Docs/developers/ergoscript-languages/examples" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Examples
                </h3>
                <div className="text-gray-300 leading-relaxed mb-2">Practical examples and use cases</div>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>
          </div>

          <div className="text-gray-300 mb-8 max-w-2xl">
            <p className="mb-4">The Sigma Language provides a powerful foundation for ErgoScript development. Each section above covers specific aspects of the language, from basic concepts to advanced features and practical examples.</p>
            <p>For detailed technical specifications and implementation details, refer to the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigmastate-interpreter repository</a>.</p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="tooling">
        <div className="text-gray-300 mb-8">
          <p>Content for Tooling tab will be added soon.</p>
        </div>
      </TabsContent>

      <TabsContent value="ergotree">
        <div className="text-gray-300 mb-8">
          <p>Content for ErgoTree tab will be added soon.</p>
        </div>
      </TabsContent>

      <TabsContent value="features">
        <div className="text-gray-300 mb-8">
          <p>Content for Features tab will be added soon.</p>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="text-gray-300 mb-8">
          <p>Content for Resources tab will be added soon.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
} 