"use client";

import { Code, BookOpen, Settings, Rocket, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function FirstDappPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Build Your First Ergo dApp
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Step-by-step guide to building and deploying your first decentralized application (dApp) on the Ergo blockchain. Learn the basics of ErgoScript, smart contract deployment, and web3 development best practices.
        </p>
      </div>

      {/* Prerequisites Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Code className="w-5 h-5 text-orange-400" /> Prerequisites
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>Basic knowledge of JavaScript or TypeScript</li>
          <li>Node.js and npm installed</li>
          <li>Familiarity with blockchain concepts (UTXO, transactions)</li>
        </ul>
      </div>

      {/* Step 1 */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Settings className="w-5 h-5 text-orange-400" /> 1. Set Up Your Development Environment
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>
            Install <b>Node.js</b> (v18+ recommended):{' '}
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">nodejs.org</a>
          </li>
          <li>
            Clone the <b>Fleet SDK</b> starter project:
                          <UniversalCopyCodeBlock
                code={`git clone https://github.com/fleet-sdk/fleet-starter.git`}
              />
          </li>
          <li>
            Install dependencies:
                          <UniversalCopyCodeBlock
                code={`cd fleet-starter
npm install`}
              />
          </li>
        </ol>
      </div>

      {/* Step 2 */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Code className="w-5 h-5 text-cyan-400" /> 2. Write a Simple ErgoScript Contract
        </h2>
        <p className="mb-2">Let's create a basic contract that allows spending only by a specific public key.</p>
                  <UniversalCopyCodeBlock
            code={`// simple-contract.es
sigmaProp(pubKey == YOUR_PUBLIC_KEY)`}
          />
        <p className="text-gray-400 text-xs mb-2">Replace <code>YOUR_PUBLIC_KEY</code> with your actual public key (not your full Ergo address).</p>
      </div>

      {/* Step 3 */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-orange-400" /> 3. Compile and Deploy the Contract
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>
            Use Fleet SDK or{' '}
            <a href="https://scastie.scala-lang.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Scastie</a>{' '}
            to compile your ErgoScript to ErgoTree.
          </li>
          <li>
            Build a transaction using Fleet SDK:
            <UniversalCopyCodeBlock
            code={`import { compile } from '@fleet-sdk/compiler';
const ergoTree = compile('sigmaProp(pubKey == YOUR_PUBLIC_KEY)');`}
          />
          </li>
          <li>Send the transaction to the Ergo testnet using your wallet or Fleet SDK.</li>
        </ol>
      </div>

      {/* Step 4 */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-400" /> 4. Test Your dApp
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>
            Use the{' '}
            <a href="https://testnet.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Ergo Testnet Explorer</a>{' '}
            to verify your contract and transactions.
          </li>
          <li>Try spending from your contract using the correct and incorrect keys to test access control.</li>
        </ul>
      </div>

      {/* Best Practices Callout */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-400" /> Best Practices & Next Steps
        </h3>
        <ul className="list-disc pl-6 text-gray-200 space-y-1">
          <li>Always test on testnet before deploying to mainnet.</li>
          <li>Keep contracts simple and auditable.</li>
          <li>Explore advanced patterns: multi-sig, time-locks, oracles.</li>
          <li>
            Read the{' '}
            <Link href="/build/docs/contracts" className="text-cyan-400 underline">ErgoScript Language Reference</Link>{' '}for more details.
          </li>
        </ul>
      </div>

      {/* Resources Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> More Resources
        </h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>
            <a href="https://docs.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Official Ergo Documentation</a>
          </li>
          <li>
            <a href="https://fleet-sdk.github.io/docs/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Fleet SDK Docs</a>
          </li>
          <li>
            <a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">ErgoScript Whitepaper (PDF)</a>
          </li>
        </ul>
      </div>
    </>
  );
}
