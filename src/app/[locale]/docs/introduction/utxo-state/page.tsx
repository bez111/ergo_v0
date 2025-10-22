import React from 'react';
import Link from 'next/link';
import { Database, Layers, ShieldCheck, AlertTriangle, ExternalLink } from 'lucide-react';

export default function UtxoStatePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <Database className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            UTXO State
          </h1>
          <p className="text-xl text-gray-400">
            The UTXO (Unspent Transaction Output) state is a fundamental concept in blockchain technology, especially for platforms like Ergo and Cardano. It underpins transaction validation and the design of smart contracts in the eUTXO model.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <Layers className="w-8 h-8 text-orange-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-300 mb-2">
            The UTXO model differs from the account-based model (used by Ethereum). In the account model, nodes check all accounts to validate the system. In the UTXO model, nodes primarily verify transactions, making validation more efficient and parallelizable.
          </p>
        </div>
      </div>

      {/* UTXO and Transaction Validation Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">UTXO and Transaction Validation</h2>
        <p className="text-gray-300 mb-2">
          The UTXO state is central to transaction validation. In the eUTXO model (as in Ergo), smart contracts can use UTXOs as data inputs without modifying them, enabling parallel computation and non-custodial atomic swaps. This makes complex operations more secure and efficient.
        </p>
        <p className="text-gray-300">
          By leveraging eUTXO, Ergo provides a powerful platform for building and executing smart contracts.
        </p>
      </div>

      {/* UTXO Model and Transactions Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">UTXO Model and Transactions</h2>
        <p className="text-gray-300 mb-2">
          In the UTXO model, a transaction consumes unspent outputs from previous transactions and creates new outputs for future use. Each transaction is an atomic state transition: it destroys input boxes and creates new ones.
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Inputs: Unspent outputs (boxes) from previous transactions, destroyed by the transaction</li>
          <li>Outputs: New boxes created by the transaction, available for future spending</li>
        </ul>
        <p className="text-gray-300">
          This atomicity ensures clear ownership and prevents double-spending.
        </p>
      </div>

      {/* UTXO State and Boxes Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">UTXO State and Boxes</h2>
        <p className="text-gray-300 mb-2">
          The UTXO state is a database of all unspent outputs (boxes). Each box is immutable: it can be created or removed, but never altered. A box contains:
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Monetary value</li>
          <li>Protection script (smart contract)</li>
          <li>Transaction ID that created the box</li>
          <li>Registers for custom data</li>
        </ul>
        <p className="text-gray-300 mb-2">
          Each box has a unique ID, derived from its contents and the creating transaction. All data and code are stored in registers.
        </p>
        <div className="overflow-x-auto mb-2">
          <table className="min-w-fit text-sm text-gray-200 border border-neutral-700 rounded-lg mb-2">
            <thead className="bg-neutral-800">
              <tr><th className="px-4 py-2">Register</th><th className="px-4 py-2">Purpose</th></tr>
            </thead>
            <tbody className="bg-neutral-900">
              <tr><td className="px-4 py-2">R0</td><td className="px-4 py-2">Value (in nanoErgs)</td></tr>
              <tr><td className="px-4 py-2">R1</td><td className="px-4 py-2">Protection script</td></tr>
              <tr><td className="px-4 py-2">R2</td><td className="px-4 py-2">Assets (tokens)</td></tr>
              <tr><td className="px-4 py-2">R3</td><td className="px-4 py-2">Creation details</td></tr>
              <tr><td className="px-4 py-2">R4-R9</td><td className="px-4 py-2">Custom use</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* UTXO and Cryptocurrency Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">UTXO and Cryptocurrency</h2>
        <p className="text-gray-300 mb-2">
          Each UTXO represents a certain amount of cryptocurrency and can only be spent once by the owner of the private key. When spent, it is removed from the UTXO state; new outputs are added as new UTXOs.
        </p>
      </div>

      {/* Advantages Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <ShieldCheck className="w-8 h-8 text-cyan-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Advantages of the UTXO Model</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li>Parallel transaction processing (scalability)</li>
            <li>Improved privacy</li>
            <li>Clear ownership structure</li>
            <li>Compatibility with stateless clients and off-chain/sidechain protocols</li>
          </ul>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <AlertTriangle className="w-8 h-8 text-orange-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Challenges in the UTXO Model</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li>UTXO fragmentation</li>
            <li>Handling "change" outputs</li>
            <li>Complexity with non-trivial scripts (proofs, context extension, data inputs)</li>
            <li>Need for signatures and cryptographic proofs for spending</li>
          </ul>
          <p className="text-gray-300">
            Developers must understand these aspects to build efficient and secure dApps.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-300 mb-2">
          The UTXO model, despite its challenges, offers a robust and efficient method for transaction validation and smart contract execution.
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>
            Learn more: <Link href="/docs/introduction/ergo-vs-cardano" className="text-orange-400 hover:text-orange-300 underline">Ergo vs Cardano</Link>
          </li>
          <li>
            Explore cryptography: <Link href="/docs/introduction/ergoscript-whitepaper" className="text-orange-400 hover:text-orange-300 underline">Sigma Protocols</Link>
          </li>
        </ul>
      </div>
    </>
  );
} 