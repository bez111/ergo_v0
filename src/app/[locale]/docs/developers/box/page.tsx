
/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import Link from 'next/link'
import { Database, Package, GitBranch, Key, Coins, Clock, Shield, Code, ChevronRight, ExternalLink, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Box Model | Ergo Developers',
  description: 'Understanding Ergo\'s box-based UTXO model - the foundation of all smart contracts and transactions',
  keywords: 'Ergo box, UTXO, eUTXO, box model, smart contracts, registers, tokens'
}

export default function BoxModelPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Box Model
          </h1>
          <p className="text-xl text-gray-400">
            Understanding Ergo's extended UTXO model and box-based architecture
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Database className="w-8 h-8 text-orange-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">What is a Box?</h2>
              <p className="text-gray-300 mb-4">
                In Ergo, a box is the fundamental unit of the blockchain state. It's an extended version of Bitcoin's UTXO 
                (Unspent Transaction Output) that can hold not just ERG tokens, but also other tokens, data, and smart contract code.
              </p>
              <p className="text-gray-300">
                Each box is immutable once created and can only be spent (destroyed) once. When a transaction spends boxes, 
                it creates new boxes as outputs, maintaining the blockchain's state transition.
              </p>
            </div>
          </div>
        </div>

        {/* Box Structure */}
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Package className="w-6 h-6 text-orange-400" />
            Box Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Mandatory Fields</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Coins className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Value:</span> Amount of nanoERG (1 ERG = 10^9 nanoERG)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">ErgoTree:</span> Smart contract guarding the box
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Creation Height:</span> Block height when created
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Optional Components</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Key className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Tokens:</span> Up to 255 different tokens
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Registers (R4-R9):</span> Additional data storage
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Extension:</span> Key-value data dictionary
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Registers */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Box Registers</h2>
          <p className="text-gray-300 mb-6">
            Each box has 10 registers (R0-R9) for storing data. The first 4 are mandatory and predefined:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-mono mb-2">R0 - Value</h4>
              <p className="text-gray-400 text-sm">Amount of nanoERG in the box</p>
            </div>
            <div className="bg-black/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-mono mb-2">R1 - Script</h4>
              <p className="text-gray-400 text-sm">ErgoTree script (guard condition)</p>
            </div>
            <div className="bg-black/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-mono mb-2">R2 - Tokens</h4>
              <p className="text-gray-400 text-sm">Array of token IDs and amounts</p>
            </div>
            <div className="bg-black/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-mono mb-2">R3 - Creation Info</h4>
              <p className="text-gray-400 text-sm">Creation height and transaction ID/index</p>
            </div>
            <div className="bg-black/50 rounded-lg p-4 md:col-span-2">
              <h4 className="text-cyan-400 font-mono mb-2">R4-R9 - User Defined</h4>
              <p className="text-gray-400 text-sm">
                Available for storing arbitrary data like addresses, numbers, byte arrays, or complex data structures
              </p>
            </div>
          </div>
        </div>

        {/* Box Lifecycle */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/docs/developers/box/lifecycle" 
                className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
            <GitBranch className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 mb-2">
              Box Lifecycle
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Learn how boxes are created, spent, and managed in transactions
            </p>
            <span className="text-cyan-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <ChevronRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/docs/developers/box/assets" 
                className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
            <Coins className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 mb-2">
              Assets & Tokens
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Working with native tokens and custom assets in boxes
            </p>
            <span className="text-cyan-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <ChevronRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/docs/developers/box/modelling" 
                className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
            <Database className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 mb-2">
              Data Modelling
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Best practices for structuring data in box registers
            </p>
            <span className="text-cyan-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Code Example */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Example: Creating a Box</h2>
          <pre className="bg-black rounded-lg p-6 overflow-x-auto">
            <code className="text-gray-300 text-sm">{`// Using Fleet SDK (JavaScript)
const box = new OutputBuilder(
  1000000000n, // 1 ERG in nanoERG
  "9hY16vzHmmfyVBwKeFGHvb2bMFsG94A1u7To1QWtUokACyFVENQ" // Recipient address
)
  .addTokens({
    tokenId: "token_id_here",
    amount: 100n
  })
  .setAdditionalRegisters({
    R4: "0x0580dac409", // Store integer 1234567890
    R5: "0e0568656c6c6f", // Store string "hello"
    R6: "1a0201020304" // Store byte array
  })
  .build();`}</code>
          </pre>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Considerations</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Minimum box value is 0.001 ERG (1,000,000 nanoERG)</li>
                <li>• Boxes are subject to storage rent after 4 years of inactivity</li>
                <li>• Token emission must happen in the first transaction output</li>
                <li>• Box size is limited to 4KB</li>
                <li>• Registers can store various data types but have size limits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/ergoplatform/eips/blob/master/eip-0004.md" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1">
                    EIP-4: Box Format Specification <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <Link href="/docs/introduction/eutxo" className="text-cyan-400 hover:text-cyan-300">
                    eUTXO Model Overview
                  </Link>
                </li>
                <li>
                  <Link href="/docs/developers/data-model-apis" className="text-cyan-400 hover:text-cyan-300">
                    Data Model & APIs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://explorer.ergoplatform.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1">
                    Ergo Explorer (View boxes) <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="https://fleet-sdk.github.io" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1">
                    Fleet SDK Documentation <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 