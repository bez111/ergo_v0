"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, Settings, Database, Zap, BookOpen, Info, Cpu } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui";
import { ArrowRight, FileText, Globe, Lightbulb, Users } from "lucide-react";

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
            <b>ErgoScript</b> is a powerful, developer-friendly programming language designed specifically for writing <Link href="/Docs/developers/ergoscript-languages/examples" className="text-cyan-400 hover:underline">smart contracts</Link> on the <Link href="/Docs/introduction" className="text-cyan-400 hover:underline">Ergo blockchain</Link>. Think of it as a specialized language that allows you to create complex <Link href="/Docs/developers/ergoscript-languages/examples" className="text-cyan-400 hover:underline">financial contracts</Link> and applications with unprecedented flexibility and <Link href="/Docs/introduction/audit" className="text-cyan-400 hover:underline">security</Link>. Designed as a subset of Scala, it allows developers to define complex conditions for spending funds.
          </div>

          <div className="text-gray-300 mb-6 max-w-2xl">
            ErgoScript code is translated into a lower-level representation called <Link href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree" className="text-cyan-400 hover:underline">ErgoTree</Link> before being stored on the <Link href="/Docs/introduction" className="text-cyan-400 hover:underline">blockchain</Link>. During <Link href="/Docs/developers/data-model-apis/block-transactions" className="text-cyan-400 hover:underline">transaction validation</Link>, ErgoTree is interpreted using cryptographic protocols based on <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Sigma Protocols</Link>. This unique architecture enables Ergo to support advanced cryptographic functionalities like <Link href="/Docs/developers/cryptographic-primitives/other-signatures/ring" className="text-cyan-400 hover:underline">ring signatures</Link> and <Link href="/Docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-cyan-400 hover:underline">threshold signatures</Link> directly within the scripting language, without requiring special core protocol changes.
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6">
            <div className="text-cyan-400 font-semibold mb-2">💡 Sigma Protocols</div>
            <div className="text-gray-300">
              Ergo's support for <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Sigma Protocols</Link> (aka generalized Schnorr proofs) is a key feature, providing efficient and composable building blocks for <Link href="/Docs/developers/cryptographic-primitives/zero-knowledge-proofs" className="text-cyan-400 hover:underline">zero-knowledge proofs</Link>. <Link href="/Docs/developers/cryptographic-primitives/schnorr" className="text-cyan-400 hover:underline">Schnorr proofs</Link> and <Link href="/Docs/developers/cryptographic-primitives/diffie" className="text-cyan-400 hover:underline">proofs of Diffie-Hellman tuples</Link> are supported by default, with the potential for the community to add more through <Link href="/Docs/introduction" className="text-cyan-400 hover:underline">soft forks</Link>.
            </div>
          </div>

          <div className="text-gray-300 mb-6 max-w-2xl">
            ErgoScript builds upon the security principles of Bitcoin while enabling much more complex financial contracts. Unlike Bitcoin Script, ErgoScript supports features necessary for advanced applications, including the ability to reference blockchain state and implement complex logic, effectively enabling Turing-Complete computations through <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol" className="text-cyan-400 hover:underline">multi-stage contract interactions</Link>.
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
            <div className="text-blue-400 font-semibold mb-2">📋 Background Reading</div>
            <details className="text-gray-300">
              <summary className="cursor-pointer font-medium">Contract Model Comparison: Ergo (eUTXO) vs. Ethereum (Account)</summary>
              <div className="mt-3 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Paradigm</h4>
                  <p>The account model (used by Ethereum) is imperative: sending coins involves changing balances in a global storage state. Ergo's <Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">eUTXO-based</Link> programming model is declarative: ErgoScript contracts specify <i>conditions</i> under which funds (<Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">UTXOs</Link>) can be spent, rather than dictating state changes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Scalability</h4>
                  <p>In the account model, both storage changes and validity checks happen <b>on-chain</b> during contract execution. In Ergo, <Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">transactions</Link> are typically created <b>off-chain</b>, and only the validation checks occur on-chain. This significantly reduces the computational load on validating <Link href="/Docs/developers/infrastructure/node" className="text-cyan-400 hover:underline">nodes</Link>. The immutable nature of the transaction graph also allows for various optimizations to improve throughput. Furthermore, Ergo's design facilitates <Link href="/Docs/introduction/light-clients" className="text-cyan-400 hover:underline font-semibold">light verifying nodes</Link> (via <Link href="/Docs/introduction/nipopows" className="text-cyan-400 hover:underline">NIPoPoWs</Link>), enhancing network <Link href="/Docs/technology" className="text-cyan-400 hover:underline">scalability</Link> and accessibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Shared State</h4>
                  <p>The account-based model relies on a shared mutable state, which can lead to complex interactions and subtle bugs in concurrent systems. Ergo's model, based on Bitcoin's UTXO concept, uses an immutable <Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">graph of transactions</Link>, which is inherently more suitable for distributed environments and simplifies the development of <Link href="/Docs/introduction/light-clients" className="text-cyan-400 hover:underline">light clients</Link>.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Expressive Power</h4>
                  <p>While Ethereum's Turing-complete language offers theoretical flexibility, it has practical limitations like blockchain bloat, complex bugs, unpredictable gas costs, and limits on contract complexity. Ergo achieves similar expressive power through its <Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">eUTXO model</Link> and <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol" className="text-cyan-400 hover:underline">multi-stage contracts</Link>, but intentionally keeps the core ErgoScript language itself non-Turing-complete to enhance security and predictability.</p>
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
              (<code>HEIGHT</code> is a context variable representing the current <Link href="/Docs/developers/data-model-apis/block-header" className="text-cyan-400 hover:underline">block height</Link>. <code>alicePubKey</code> and <code>bobPubKey</code> represent proof of knowledge of their respective secret keys, typically via a <Link href="/Docs/developers/ergoscript-languages/examples" className="text-cyan-400 hover:underline">signature check</Link>).
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
            <div className="text-purple-400 font-semibold mb-2">🔑 Key Concepts</div>
            <div className="text-gray-300">
              Explore the <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">Core Concepts of ErgoScript</Link>.
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <div className="text-yellow-400 font-semibold mb-2">📝 Data Inputs</div>
            <div className="text-gray-300">
              Ergo offers a unique approach to smart contracts by allowing them to access data from other <Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">boxes</Link> on the blockchain without spending them, using <Link href="/Docs/developers/data-model-apis/composing/wallet-interaction/data-inputs" className="text-cyan-400 hover:underline font-semibold">data inputs</Link>. This enables efficient access to shared information like <Link href="/Docs/ecosystem/infrastructure/oracles" className="text-cyan-400 hover:underline">oracle price feeds</Link> or <Link href="/Docs/ecosystem/daos" className="text-cyan-400 hover:underline">DAO</Link> parameters.
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-6">
            <div className="text-orange-400 font-semibold mb-2">⚙️ ErgoScript vs ErgoTree</div>
            <div className="text-gray-300">
              ErgoScript is the high-level, developer-friendly language. It gets compiled into <Link href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree" className="text-cyan-400 hover:underline font-semibold">ErgoTree</Link>, a lower-level, serialized representation stored on the blockchain and interpreted by nodes. Explore the distinction <Link href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree" className="text-cyan-400 hover:underline">here</Link>.
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
            <li><Link href="/Docs/developers/tooling/debugging" className="text-cyan-400 hover:underline">Ergo-Puppet</Link>: Advanced tool built on Ergo Playgrounds for off-chain experimentation and unit testing.</li>
          </ul>

          <h3 className="text-xl font-bold text-orange-400 mb-2">Online Editors & Compilers</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>🥇 <a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">escript.online</a>: Online editor, compiler, and playground.</li>
            <li><a href="https://wallet.plutomonkey.com/p2s/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript P2S Playground (Plutomonkey)</a>: Compile ErgoScript to P2S addresses.</li>
            <li><a href="https://scastie.scala-lang.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scastie</a>: Online Scala compiler suitable for ErgoScript snippets.</li>
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
            <li><Link href="/Docs/developers/tooling/debugging" className="text-cyan-400 hover:underline font-semibold">Debugging Guide</Link>: Covers current best practices, tools, and techniques.</li>
            <li><a href="https://github.com/spectrum-finance/ergoscript-simulator" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergoscript Simulator</a>: A community-developed tool for simulating ErgoScript execution.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Advanced Patterns & Tutorials</h2>
          <div className="text-gray-300 mb-4 max-w-2xl">
            ErgoScript's features enable the implementation of complex contract patterns:
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><Link href="/Docs/developers/ergoscript-languages/examples" className="text-cyan-400 hover:underline font-semibold">Finite State Machines (FSMs)</Link>: Learn how to model multi-stage contracts where behavior depends on the current state encoded within a box.</li>
            <li><Link href="/Docs/developers/ergoscript-languages/examples" className="text-cyan-400 hover:underline font-semibold">Merkleized Abstract Syntax Trees (MAST)</Link>: Explore techniques to improve privacy and efficiency for contracts with many spending conditions by revealing only the executed script branch.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Common Use Cases</h2>
          <div className="text-gray-300 mb-4 max-w-2xl">
            ErgoScript's flexibility enables various applications:
          </div>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><Link href="/Docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-cyan-400 hover:underline font-semibold">Multi-Signature Wallets</Link>: Create wallets requiring multiple parties to approve <Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">transactions</Link>.</li>
            <li><b>Time-Locked Contracts:</b> Define contracts that can only be executed after a specific time or <Link href="/Docs/developers/data-model-apis/block-header" className="text-cyan-400 hover:underline">block height</Link>.</li>
            <li><b>Conditional Spending:</b> Set complex conditions for spending funds based on various parameters (e.g., oracle data, specific inputs).</li>
            <li><b>Atomic Swaps:</b> Facilitate trustless peer-to-peer exchange of different assets across blockchains or within Ergo.</li>
            <li><b>Crowdfunding:</b> Implement secure and transparent crowdfunding campaigns.</li>
            <li><b>Complex Financial Derivatives:</b> Build sophisticated financial instruments on the blockchain.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Best Practices</h2>
          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-1">
            <li>Keep contracts simple and readable.</li>
            <li>Use built-in <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">cryptographic primitives</Link> where possible.</li>
            <li>Always consider <Link href="/Docs/developers/data-model-apis/block-transactions" className="text-cyan-400 hover:underline">transaction validation</Link> overhead and potential costs.</li>
            <li>Test contracts thoroughly using playgrounds and SDK testing frameworks.</li>
            <li>Reason carefully about all possible execution paths and potential economic exploits.</li>
            <li>Leverage <Link href="/Docs/developers/data-model-apis/composing/wallet-interaction/data-inputs" className="text-cyan-400 hover:underline">data inputs</Link> for accessing shared state efficiently.</li>
          </ol>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Common Pitfalls to Avoid</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Overcomplicating contract logic unnecessarily.</li>
            <li>Ignoring performance implications and transaction costs.</li>
            <li>Neglecting comprehensive error handling and edge cases in off-chain code interacting with contracts.</li>
            <li>Not fully understanding the nuances of the <Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">eUTXO model</Link> (e.g., box lifecycle, state transitions).</li>
            <li>Insecure handling of secrets or assumptions about context in off-chain components.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Learning Paths & Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Beginner:</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Understand the <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">Core Concepts</Link>.</li>
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
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            ErgoScript Tooling
          </h1>

          <div className="text-gray-300 mb-8">
            <p className="mb-4">
              ErgoScript is a powerful and flexible language for creating smart contracts on the Ergo blockchain. As with any programming language, having the right tools can greatly enhance the development experience and productivity. This page provides an overview of various tools, resources, and examples to help you get started with ErgoScript development.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h2>
          <div className="text-gray-300 mb-8">
            <p className="mb-4">
              ErgoScript is a domain-specific language designed specifically for the Ergo blockchain. It is inspired by Scala and allows developers to create secure and efficient smart contracts. While ErgoScript is not Turing-complete, it can be used to build Turing-complete applications by leveraging the extended UTXO model of the Ergo blockchain.
            </p>
            <p className="mb-4">
              The ErgoScript ecosystem offers a wide range of tools and resources to help developers at all levels, from beginners to experienced professionals. These tools include playgrounds, tutorials, courses, explanations, references, and examples.
            </p>
          </div>

          {/* Tooling Cards Grid */}
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Tooling Categories</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              href="/Docs/developers/tooling/compilers"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  Interpreters & Compilers
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Core tools for compiling and interpreting ErgoScript code, including the reference implementation and development environments.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/tooling/playgrounds"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Code className="w-6 h-6 text-green-400" />
                  Playgrounds
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Interactive environments for experimenting with ErgoScript code, testing contracts, and learning the language.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/tooling/debugging"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-red-400" />
                  Debugging
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Tools and techniques for debugging ErgoScript contracts, testing functionality, and ensuring contract security.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/tooling/flowcards"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-400" />
                  FlowCards: Visual dApp Design for Ergo
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                FlowCards let you quickly build Ergo smart contracts with visual diagrams and declarative templates—no manual coding required.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>
          </div>

          <h3 className="text-xl font-bold text-orange-400 mb-4">Playgrounds</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">escript.online</a></li>
            <li>Compile ErgoScript directly in your browser with <a href="https://wallet.plutomonkey.com/p2s/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Playground</a></li>
            <li>There is also <a href="https://scastie.scala-lang.org/greenhat/T2jSEv11QcWpXX1XrcHUdw/31" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scastie</a></li>
            <li><Link href="/Docs/developers/tooling/kiosk" className="text-cyan-400 hover:underline">Kiosk</Link> lets anyone play with ErgoScript using a basic web-based UI</li>
            <li><a href="https://github.com/ergoplatform/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergoscript-compiler</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">Courses</h4>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><a href="https://docs.google.com/presentation/d/10gYO82z_7qloRrFOcCxTFuzpP40IImPyIKMV2ZFd9M4/edit#slide=id.p" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript 101 Crash Course</a> (Slides)</li>
            <li><a href="https://www.youtube.com/watch?v=8l2v1asHgyA" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Learn ErgoScript By Example Via The Ergo Playground with Robert Kornacki (Video)</a></li>
            <li><a href="https://github.com/DeCo-Education/ErgoScript-Developer-Course" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">The ErgoScript Developer Course from DeCo Education</a></li>
            <li><a href="https://www.youtube.com/watch?v=qR0_k7VH6KI&list=PLopsKGshj0B4DfFnS-pvriZhba050eaXu" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Deco Education: 2022 Script Class</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">Tutorials</h4>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><a href="https://github.com/ergoplatform/ergoscript-by-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript by Example Repository</a></li>
            <li><a href="https://github.com/anon-real/contract-testing" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testing Ergo Contracts Off-chain</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">Advanced Tutorials</h4>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><a href="https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Advanced ErgoScript Tutorial</a></li>
            <li><a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript tutorial</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">Explanations</h4>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><a href="https://www.ergoforum.org/t/ergoscript-design-patterns/222" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Design patterns</a></li>
            <li><a href="https://storage.googleapis.com/ergo-cms-media/docs/sigmastate_protocols.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SigmaState Protocols</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">References</h4>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Language Spec</a></li>
            <li><a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript</a></li>
            <li><a href="https://ergoplatform.org/docs/ErgoTree.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTree</a></li>
            <li><a href="https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/High%20Level%20Design%20Patterns%20In%20Extended%20UTXO%20Systems.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">High-Level Design Patterns In Extended UTXO Systems</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">Examples</h4>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><a href="https://github.com/paideiadao/paideia-contracts/blob/main/paideia_contracts/contracts/plasma_staking/ergoscript/latest/plasmaStaking.es" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoPad Plasma Staking Contracts</a></li>
            <li><a href="https://github.com/GetBlok-io/ergo-smartpooling-contracts" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GetBlok.io Smart Pools</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">Visual</h4>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li><Link href="/Docs/developers/tooling/flowcards" className="text-cyan-400 hover:underline">FlowCards</Link> is <em>A Declarative Framework for Development of Ergo dApps</em></li>
            <li><a href="https://github.com/lucagdangelo/flowcardLib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">flowcardLib: Ergo FlowCard library for diagrams.net</a></li>
            <li><a href="https://github.com/iandebeer/ergo-castanet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-castanet</a></li>
          </ul>

          <h4 className="text-lg font-bold text-orange-400 mb-4">Box</h4>
          <div className="text-gray-300 mb-8">
            <p className="mb-4">Here is a box you can experiment with:</p>
            <p>
              This P2S <a href="https://wallet.plutomonkey.com/p2s/?source=c2lnbWFQcm9wKFNFTEYuaWQgPT0gSU5QVVRTKDApLmlkKQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">address</a> corresponds to this unspent <a href="https://api.ergoplatform.com/api/v0/transactions/boxes/byAddress/unspent/ZX44DGQZJ4SoDVh58XRuNZjAq" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">box</a>.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="ergotree">
        <div className="space-y-8">
          <div className="text-gray-300 mb-8">
            <h1 className="text-3xl font-bold text-cyan-400 mb-6">ErgoTree: Reference Manual</h1>
            
            <p className="mb-4">
              ErgoTree forms the backbone of Ergo's <Link href="/Docs/developers/data-model" className="text-cyan-400 hover:underline">smart contracts</Link>. It is the typed abstract syntax of the ErgoTree language used for defining logical propositions that protect <Link href="/Docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">boxes</Link> (coin abstractions) in Ergo. While ErgoTree is fundamental, most users interact with it indirectly, primarily developing contracts using a higher-level language called <Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript</Link>, which later compiles into ErgoTree.
            </p>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Understanding ErgoTree</h2>
            
            <p className="mb-4">
              ErgoTree serves as a specialized language, encapsulating the <a href="https://www.martinfowler.com/bliki/UbiquitousLanguage.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><em>universal language</em> <ExternalLink className="w-4 h-4 inline ml-1" /></a> of the <Link href="/Docs/introduction" className="text-cyan-400 hover:underline">Ergo blockchain</Link>. It directly interacts with key components such as <Link href="/Docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">Boxes</Link>, <Link href="/Docs/developers/data-model" className="text-cyan-400 hover:underline">Tokens</Link>, and <Link href="/Docs/developers/ergoscript-languages/sigma-propositions" className="text-cyan-400 hover:underline">Zero-Knowledge Sigma-Propositions</Link>. ErgoTree is optimized for efficient storage and rapid execution.
            </p>

            <p className="mb-4">
              A language intended for writing <Link href="/Docs/developers/data-model" className="text-cyan-400 hover:underline">blockchain contracts</Link> must be deterministic to ensure spam-resistance. It also needs to be simple yet expressive enough to function as a solid platform for contractual money. ErgoTree meets these requirements, making it an essential tool for creating, securing, and managing boxes on the <Link href="/Docs/introduction" className="text-cyan-400 hover:underline">Ergo blockchain</Link>.
            </p>

            <p className="mb-6">
              Complementing ErgoTree is a frontend language named <Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript</Link>. Drawing inspiration from Scala/Kotlin, ErgoScript shares common subsets with Java and C#, making it user-friendly for programmers acquainted with these languages. ErgoScript is designed to attract a broad spectrum of programmers with its intuitive approach.
            </p>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Structure, Authentication, and Application</h2>
            
            <p className="mb-4">
              ErgoTree, distinct from low-level languages like stack-based EVM assembly, is structured as a <em>typed abstract syntax tree</em>. In this regard, ErgoTree is a kind of authentication language aka <em>"smart signature"</em> used to validate transactions or actions by verifying specific conditions.
            </p>

            <p className="mb-4">ErgoTree achieves this by combining:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Secret Data Predicates</strong>: Conditions verifying confidential information such as <Link href="/Docs/developers/infrastructure/wallets" className="text-cyan-400 hover:underline">digital signatures</Link> or <Link href="/Docs/developers/infrastructure/wallets" className="text-cyan-400 hover:underline">secret keys</Link>.</li>
              <li><strong><Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">Blockchain Context</Link> Predicates</strong>: Conditions dependent on the <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">transaction's specific context</Link> within the <Link href="/Docs/introduction" className="text-cyan-400 hover:underline">blockchain</Link>.</li>
            </ul>

            <p className="mb-4">
              By evaluating these predicates, ErgoTree authenticates transactions, ensuring their legitimacy and adherence to set rules. Its ability to validate and secure transactions while adapting to the transaction context makes ErgoTree a versatile tool, extending its applicability to various digital platforms, including other cryptocurrencies and <Link href="/Docs/introduction/cbdc" className="text-cyan-400 hover:underline">Central Bank Digital Currencies (CBDCs)</Link>, or even non-monetary digital objects where smart access could be needed. Off-chain applications often need to perform similar validations; see <Link href="/Docs/developers/tooling/fleet" className="text-cyan-400 hover:underline">Fleet SDK Recipes</Link> for examples using JavaScript/TypeScript.
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Additional parties can be authorized</li>
              <li>Parties can delegate authorization</li>
              <li>AND/OR expressions</li>
              <li>Conditions can extend beyond signer identity.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Key ErgoTree Concepts</h2>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>ErgoTree is written into <Link href="/Docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">UTXO boxes</Link> and is subsequently evaluated by the transaction verifier.</li>
              <li>The propositions are stored in the blockchain in the <a href="https://ergoplatform.org/docs/ErgoTree.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTree serialization format <ExternalLink className="w-4 h-4 inline ml-1" /></a>. This format optimizes for compact storage, swift script execution, and efficient transaction validation.</li>
              <li>The reference implementation of ErgoTree is in Scala, but alternative implementations can utilize other languages.</li>
              <li>ErgoTree's binary format intentionally omits metadata, which might be necessary for various Ergo applications.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Additional Resources</h2>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>ErgoTree serialization section <a href="https://ergoplatform.org/docs/ErgoTree.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">available here <ExternalLink className="w-4 h-4 inline ml-1" /></a>.</li>
              <li><a href="https://github.com/ScorexFoundation/sigmastate-interpreter/issues/264" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Constant-less lambdas <ExternalLink className="w-4 h-4 inline ml-1" /></a>.</li>
              <li><a href="https://www.ergoforum.org/t/ergotree-as-an-authentication-language/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTree as an Authentication Language <ExternalLink className="w-4 h-4 inline ml-1" /></a>.</li>
              <li><a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/812" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Human representation for ergo tree #812 <ExternalLink className="w-4 h-4 inline ml-1" /></a>.</li>
              <li><a href="https://github.com/ross-weir/ergo-script-re/tree/main/ergotree-pseudo-code" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTree pseudo-code <ExternalLink className="w-4 h-4 inline ml-1" /></a>: Generates pseudo code for compiled ErgoTrees on a best effort basis.</li>
            </ul>
          </div>

          {/* ErgoTree Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link
              href="/Docs/developers/ergoscript-languages/introduction"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Info className="w-6 h-6 text-cyan-400" />
                  Introduction
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Overview of ErgoTree language fundamentals and core concepts.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/as-a-language"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Code className="w-6 h-6 text-green-400" />
                  As a Language
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  ErgoTree as a programming language with syntax and semantics.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/typing"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  Typing
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Type system and type inference in ErgoTree expressions.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/evaluation"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-orange-400" />
                  Evaluation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  How ErgoTree expressions are evaluated and executed.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/serialization"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Database className="w-6 h-6 text-purple-400" />
                  Serialization
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Binary format and serialization of ErgoTree structures.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/predefined-types"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  Predefined Types
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Built-in data types available in ErgoTree language.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/predefined-functions"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-red-400" />
                  Predefined Functions
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Built-in functions and operations in ErgoTree.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/encoding"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Code className="w-6 h-6 text-indigo-400" />
                  Encoding
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Encoding schemes and data representation in ErgoTree.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/script-validation"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-emerald-400" />
                  Script Validation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Validation process and rules for ErgoTree scripts.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/script-optimisation"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-pink-400" />
                  Script Optimisation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Optimization techniques for ErgoTree script performance.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/templates"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-teal-400" />
                  Templates
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reusable ErgoTree templates and pattern libraries.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Database className="w-6 h-6 text-amber-400" />
                  ErgoScript vs ErgoTree
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Comparison between high-level ErgoScript and low-level ErgoTree.
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
                Learn more
              </div>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="features">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Data Inputs in ErgoScript
          </h1>

          <div className="mb-6">
            <Link
              href="/Docs/developers/ergoscript-languages/multi-stage-protocol"
              className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
            >
              Multi-Stage Protocols
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="text-gray-300">
              <p className="mb-4">
                ErgoScript's data inputs are a novel feature that enhances the traditional UTXO-based blockchain's functionality. This section delves into the concept of data inputs, their advantages, and their application within Ergo transactions.
              </p>
            </div>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Understanding Data Inputs</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Traditional UTXO-based blockchains involve the consumption and subsequent destruction of inputs during transactions. Ergo innovates on this model with <strong>data inputs</strong>, which permit transactions to reference and read from existing UTXOs without the need to consume them. This breakthrough overcomes several limitations of the classic UTXO model, adding a layer of flexibility and efficiency to Ergo's extended UTXO (eUTXO) model.
                </p>

                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">Key Features of Data Inputs</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Non-Destructive Access:</strong> Data inputs grant transactions the ability to tap into UTXO contents without the need to spend or consume them, preserving the UTXOs for future transactions.</li>
                    <li><strong>Concurrent Data Access:</strong> Data inputs allow for the simultaneous referencing and reading of a UTXO's data by multiple transactions within a single block, without any of them spending the UTXO. This feature facilitates parallel processing and alleviates transaction execution bottlenecks.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Benefits of Data Inputs</h2>
              <div className="text-gray-300">
                <p className="mb-4">The integration of data inputs into ErgoScript offers several notable benefits:</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Reduced Transaction Fees:</strong> Since data inputs do not necessitate script execution or the generation of new outputs, they contribute to lower transaction fees, making them an economical choice for intricate transactions.
                  </li>
                  <li>
                    <strong>Enhanced DeFi Applications:</strong> Data inputs prove invaluable for decentralized finance (DeFi) applications, such as decentralized exchanges (DEXs) or order-book systems. They enable contracts to reference external data, like oracle data or order book states, without the need to consume the data boxes, facilitating concurrent interactions with the same state by multiple parties.
                  </li>
                  <li>
                    <strong>Improved Scalability and Efficiency:</strong> Data inputs contribute to network scalability and efficiency by allowing several transactions to concurrently read from the same data input, reducing the necessity for extra outputs and lessening the likelihood of transaction conflicts.
                  </li>
                </ol>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Working with Data Inputs</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Ergo's data inputs are a distinctive feature not found in other eUTXO-based systems. When employing data inputs in ErgoScript, it's crucial to grasp their operation and how to leverage them effectively in smart contracts.
                </p>

                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">Usage in Transactions</h3>
                  <p className="mb-4">
                    In ErgoScript, data inputs are "read-only" boxes that supply vital information for contract validation without being spent in the transaction. For instance, a DeFi contract might utilize a data input to verify an asset's current price from an oracle box, ensuring the transaction complies with specific conditions without modifying the oracle box.
                  </p>
                </div>

                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">Example Use Case</h3>
                  <p className="mb-4">
                    Imagine a transaction that references a box with the ID <code className="bg-neutral-700 px-2 py-0.5 rounded text-cyan-300">d2b9b6536287b242f436436ce5a1e4a117d7b4843a13ce3abe3168bff99924a1</code> as both an input and a data input. This illustrates the versatility of data inputs, enabling a transaction to read and potentially update a box's state in one operation, assuming the box pre-existed the transaction.
                  </p>
                  <p className="mb-4">In ErgoScript, you can refer to other boxes in the transaction using constructs like:</p>
                  <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 text-sm text-gray-200 overflow-x-auto">
<code className="language-scala">INPUTS(0).value &gt; 10000 &amp;&amp; OUTPUTS(1).value &gt; 20000</code>
                  </pre>
                  <p className="mt-4">
                    This script enforces conditions based on the values of the first input and the second output boxes, showcasing how data inputs can be used to influence the logic of a transaction without consuming the referenced boxes.
                  </p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Comparison with Traditional Models</h3>
                  <p>
                    Data inputs in ErgoScript provide a significant advancement over traditional UTXO models, particularly in how they facilitate more complex and interactive smart contracts. For a more detailed comparison between eUTXO and account-based models, refer to the <a href="https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Off Chain Logic & eUTXO</a> article.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Best Practices and Considerations</h2>
              <div className="text-gray-300">
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Selective Use:</strong> Only include data inputs that are necessary for your contract logic to minimize transaction size and fees.</li>
                  <li><strong>Reliable Sources:</strong> Ensure that the data accessed through data inputs is reliable and comes from trusted sources, especially when using oracles or external data providers.</li>
                  <li><strong>Validation Checks:</strong> Always validate the data within data inputs to ensure it is in the expected format and state, reducing the risk of transaction failures.</li>
                </ul>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Additional Resources</h2>
              <div className="text-gray-300">
                <p className="mb-4">For further reading and deeper understanding of the UTXO model and its implementation in Ergo, consider the following resources:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Unlocking The Potential Of The UTXO Model</a></li>
                  <li><a href="https://www.ergoforum.org/t/building-a-portable-and-reusable-par-utxo-dapp-standard/441" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Building A Portable And Reusable (PaR) UTXO dApp Standard</a></li>
                  <li><a href="https://www.ergoforum.org/t/data-inputs-semantics/654" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Data Inputs Semantics</a></li>
                  <li><Link href="/Docs/developers/ergoscript-languages/examples/model-tx" className="text-cyan-400 hover:underline">Model Transaction Example</Link></li>
                </ul>
              </div>
            </section>

            <section className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-3">Conclusion</h3>
              <div className="text-gray-300">
                <p>
                  Data inputs are a powerful feature in ErgoScript that significantly enhance the flexibility, efficiency, and scalability of smart contracts. By allowing read-only access to UTXOs, data inputs enable more sophisticated interactions within the Ergo blockchain, making them an essential tool for developers building complex dApps and DeFi solutions.
                </p>
              </div>
            </section>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            ErgoScript FAQ
          </h1>

          <div className="space-y-6">
            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Does Ergo Use [Coll] Instead of an Array?</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Ergo uses [Coll] instead of an Array to maintain a one-to-one correspondence between ErgoScript and Scala. In Scala, an Array is mutable, which means its elements can be changed after it's created. However, all elements in ErgoScript are immutable - they can't be altered after creation. This difference could lead to confusion if both languages used the term "Array".
                </p>
                <p>
                  During the design discussions in our Slack channel in 2018-2019, several names were considered, but none seemed more suitable than "Coll". The term "Collection[Int]" was also considered, but it appeared visually unappealing and cumbersome to type.
                </p>
                <p>
                  "Seq" wasn't an ideal choice either, as it is covariant in Scala while Coll is not covariant in ErgoScript. Covariance refers to the ability of a type to change its element type to a subtype, which doesn't align with the principles of ErgoScript.
                </p>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Debugging Techniques</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Check the versions of dependencies like <code className="bg-neutral-700 px-2 py-0.5 rounded">ergo-lib-wasm-nodejs</code> and <code className="bg-neutral-700 px-2 py-0.5 rounded">ergo-lib-wasm-browser</code> to ensure you have the latest fixes.</li>
                  <li>If an issue is suspected to originate from the Nautilus wallet, try manually replacing the <code className="bg-neutral-700 px-2 py-0.5 rounded">.wasm</code> file in the extension directory with an updated version from <code className="bg-neutral-700 px-2 py-0.5 rounded">sigma-rust</code>.</li>
                  <li>Building Nautilus from source with updated dependencies can help identify issues.</li>
                  <li>When encountering issues with on-chain boxes, you can try the following:
                    <ol className="list-decimal pl-6 mt-2 space-y-1">
                      <li>Make temporary contract edits (e.g., set a condition to always evaluate to <code className="bg-neutral-700 px-2 py-0.5 rounded">true</code>).</li>
                      <li>Compile the modified contract and obtain the new ErgoTree hex.</li>
                      <li>Replace the ErgoTree of the problematic box with the new hex (off-chain).</li>
                      <li>Attempt to sign the transaction (this should work locally even if the modified tree wouldn't validate on-chain, helping isolate signing issues).</li>
                    </ol>
                  </li>
                  <li>For mocking boxes in unit tests, use the <code className="bg-neutral-700 px-2 py-0.5 rounded">mockUTxO</code> function from <code className="bg-neutral-700 px-2 py-0.5 rounded">@fleet-sdk/mock-chain</code> instead of manually editing box contents.</li>
                </ul>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">FAQs</h2>
              <div className="text-gray-300 space-y-4">
                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">Is the EIP-3 Secret similar to an account index for derived public keys?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>Yes, the EIP-3 secret functions similarly to an account index for deriving public keys. As confirmed by user 'Aberg (Satergo dev)', the Satergo wallet refers to this as the "address index," and custom indices can be utilized.</p>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">How do I convert a Coll[Byte] of proposition bytes to the SigmaProp type?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>The <code className="bg-neutral-700 px-2 py-0.5 rounded">decodePoint</code> method is likely what you need to convert proposition bytes (<code className="bg-neutral-700 px-2 py-0.5 rounded">Coll[Byte]</code>) into a <code className="bg-neutral-700 px-2 py-0.5 rounded">SigmaProp</code>.</p>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">Can I insert two tokens with the same ID but different amounts into a box?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>Yes, you can, but be aware that some off-chain code might become confused. The amounts will be merged into a single entry in the box's tokens array.</p>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">How do I fix the "Tree root should be real but was UnprovenSchnorr(ProveDlog(Ecp(..." error?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>This error usually indicates that the transaction was signed using an incorrect private key (i.e., one that doesn't correspond to the public key expected by the script).</p>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">As a complete coding beginner, should I learn Java then Scala before ErgoScript?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>It's generally recommended to focus on understanding UTXO model concepts first, rather than diving deep into Java or Scala initially. The courses available at <a href="https://docs.ergoplatform.com/dev/get-started/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://docs.ergoplatform.com/dev/get-started/</a> provide a good starting point without requiring prior Java or Scala knowledge.</p>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">How are dApp fees handled in ErgoScript contracts?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>In ErgoScript, fees are handled explicitly during the transaction building process, not directly within the script logic itself. The script verifies conditions based on the transaction outputs. See the Token Sale Service contract example for illustration: <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/tokenSalesService.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://github.com/ergoplatform/ergoscript-by-example/blob/main/tokenSalesService.md</a></p>
                    <div className="bg-neutral-900/50 rounded-lg p-4 mt-3">
                      <h4 className="text-md font-semibold text-cyan-400 mb-2">Key aspects:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>The transaction fee (<code className="bg-neutral-700 px-2 py-0.5 rounded">MinTxFee</code>) must be included in one of the output boxes (typically the last one, designated for the miner).</li>
                        <li>Other output boxes handle the distribution of payment and token amounts according to the contract's logic.</li>
                        <li>The fee is paid from the value contained within the input boxes being spent.</li>
                      </ul>
                    </div>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">How can Option/Some(...) be used in ErgoScript outside of registers and context variables?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>The use of <code className="bg-neutral-700 px-2 py-0.5 rounded">Option</code> types (like <code className="bg-neutral-700 px-2 py-0.5 rounded">Some(...)</code>) is effectively limited to values originating from registers (<code className="bg-neutral-700 px-2 py-0.5 rounded">box.R&lt;N&gt;[Type]</code>) and context variables (<code className="bg-neutral-700 px-2 py-0.5 rounded">getVar[T](...)</code>). A potential workaround for other scenarios involves using a "dummy" optional register value and applying a map operation: <code className="bg-neutral-700 px-2 py-0.5 rounded">box.R4[Boolean].map(r =&gt; &lt;some expression which doesn't depend on r&gt;)</code>.</p>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">What's the proper syntax for fold/map/reduce operations in ErgoScript?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>Here are some examples demonstrating common collection operations:</p>
                    <CodeBlock language="typescript">{`// Simple sum using fold with an explicitly defined function
def sumFunc(a: Long, b: Box): Long = a + b.value
val totalValue = INPUTS.fold(0L, sumFunc)

// Using fold with an inline lambda function
val totalValueLambda = INPUTS.fold(0L, { (accum: Long, box: Box) => accum + box.value })

// Declaring a generic function (though type parameter often inferred)
// def sumGeneric[T](a: T, b: Box): T = ??? // Example structure
// val totalGeneric = INPUTS.fold(0L, sumGeneric) // Type parameter usually not needed here

// Note: Upcoming Sigma 6.0 might introduce more direct methods like:
// val total = INPUTS.sumBy(b => b.value)`}</CodeBlock>
                  </div>
                </details>

                <details className="group border border-neutral-700 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-neutral-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400">How can I store a script hash in a register using Fleet for later comparison?</h3>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0">
                    <p>To store the bytes of a script (ErgoTree) in a register, allowing an ErgoScript contract to later verify that an output box is protected by that specific script:</p>
                    <div className="bg-neutral-900/50 rounded-lg p-4 mt-3">
                      <h4 className="text-md font-semibold text-cyan-400 mb-2">In your off-chain Fleet code (JavaScript/TypeScript):</h4>
                      <CodeBlock language="typescript">{`// Create an output box and set register R8 to the hex representation 
// of the target script's ErgoTree bytes.
new OutputBuilder(SAFE_MIN_BOX_VALUE, /* Some Address */)  
  // ... other builder methods
  .setAdditionalRegisters({
    R8: SConstant(SColl(SByte, ErgoAddress.fromBase58(TARGET_SCRIPT_ADDRESS).ergoTree)).toHex() 
  });`}</CodeBlock>
                    </div>
                    <div className="bg-neutral-900/50 rounded-lg p-4 mt-3">
                      <h4 className="text-md font-semibold text-cyan-400 mb-2">In your ErgoScript contract:</h4>
                      <CodeBlock language="typescript">{`{
  // Retrieve the expected script bytes from the register
  val expectedScriptBytes = SELF.R8[Coll[Byte]].get 
  
  // Get the actual script bytes of an output box
  val outputBoxScriptBytes = OUTPUTS(0).propositionBytes 

  // Verify that the output box uses the expected script
  expectedScriptBytes == outputBoxScriptBytes
  // ... other conditions
}`}</CodeBlock>
                    </div>
                  </div>
                </details>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Noted Issues</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>A bug existed in <code className="bg-neutral-700 px-2 py-0.5 rounded">sigma-rust</code> where <code className="bg-neutral-700 px-2 py-0.5 rounded">coll.slice</code> did not gracefully handle empty collections, differing from the Scala version used in nodes. This caused issues for approximately 3 weeks until fixed by user 'greenhat'. The fix has been merged into the <code className="bg-neutral-700 px-2 py-0.5 rounded">develop</code> branch of <code className="bg-neutral-700 px-2 py-0.5 rounded">sigma-rust</code>.</li>
                  <li>This fix needs to propagate through the dependency tree (including updates to libraries like <code className="bg-neutral-700 px-2 py-0.5 rounded">ergo-lib-wasm</code> and wallets like Nautilus) before fully resolving issues for all end users.</li>
                  <li>Some unexpected exceptions have been reported when using <code className="bg-neutral-700 px-2 py-0.5 rounded">.toBigInt</code> on <code className="bg-neutral-700 px-2 py-0.5 rounded">Long</code> register values in ErgoScript. Further investigation is needed.</li>
                  <li>With ErgoNames, if a token representing a registered name is burned, that name registration is permanently lost. Potential solutions are being researched.</li>
                </ul>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tutorial Code Snippets</h2>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">Summing nanoErgs of all inputs:</h3>
                  <CodeBlock language="typescript">{`// Define a function to add a box's value to an accumulator
def sumValues(accum: Long, box: Box): Long = accum + box.value
// Use fold to apply the sum function across all INPUTS, starting with 0L
val totalNanoErgs = INPUTS.fold(0L, sumValues)`}</CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">Storing a script hash in a register using Fleet:</h3>
                  <CodeBlock language="typescript">{`// Off-chain code to create an output box storing the target script's hash in R8
const targetAddress = "TARGET_SCRIPT_ADDRESS"; // Replace with the actual address
const targetErgoTreeBytes = ErgoAddress.fromBase58(targetAddress).ergoTree;

new OutputBuilder(SAFE_MIN_BOX_VALUE, /* Some Address */)
  .setAdditionalRegisters({ 
    R8: SConstant(SColl(SByte, targetErgoTreeBytes)).toHex() 
  });`}</CodeBlock>
                </div>
              </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Additional Resources</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Language Specification</a></li>
                  <li><a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Playground/eScript IDE</a></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 