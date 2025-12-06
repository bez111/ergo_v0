
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { Zap, Layers, Smartphone, Link2, ExternalLink } from 'lucide-react';

export default function LightClientsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Light Clients and NIPoPoWs in Ergo
          </h1>
          <p className="text-xl text-gray-400">
            Light Clients enhance blockchain accessibility and scalability. Ergo leverages NIPoPoWs to enable efficient, secure, and lightweight clients that verify blockchain events without downloading the entire chain.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-gray-300 mb-2">
          Running a full node requires significant computational resources, electricity, and storage. Light clients address these challenges by verifying blockchain events without maintaining the entire blockchain. Ergo uses Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) to make this possible.
        </p>
      </div>

      {/* Pruned Full-Node Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">Pruned Full-Node</h2>
          <p className="text-gray-300 mb-2">
            With NIPoPoWs, Ergo can implement a Pruned Full-Node strategy: maintaining a UTXO Set Snapshot while discarding older, unnecessary blockchain data. This reduces storage needs while keeping the node capable of verifying and processing transactions.
          </p>
          <p className="text-gray-300 mb-2">
            A pruned full node retains critical block information and selectively prunes away data not needed for future validations, supporting operational efficiency and scalability.
          </p>
        </div>
      </div>

      {/* SPV Client Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">Simplified Payment Verification (SPV) Client</h2>
          <p className="text-gray-300 mb-2">
            Ergo's SPV clients leverage NIPoPoWs to drastically reduce data requirements for transaction verification. Mobile SPV clients need to download only about 100KB of block headers, compared to gigabytes for full nodes.
          </p>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Advantages of NIPoPoW-based SPV Clients</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><strong>Efficient Data Use:</strong> NIPoPoWs compress the proof-of-work into a succinct string, making synchronization fast and data-efficient.</li>
          <li><strong>Lower Bandwidth Consumption:</strong> Less data for block verification means minimal bandwidth usage—ideal for mobile and limited connectivity.</li>
          <li><strong>Enhanced Security:</strong> SPV clients inherit the security of proof-of-work, trusting the blockchain's integrity without a full copy.</li>
        </ul>
      </div>

      {/* Applications Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">Applications</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li><strong>Mobile Wallets:</strong> Lightweight mobile wallets with secure, real-time transaction verification and great UX.</li>
            <li><strong>Cross-Chain Transactions:</strong> SPV clients can safely participate in cross-chain transactions, interacting with multiple blockchains efficiently.</li>
          </ul>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-300 mb-2">
          By leveraging NIPoPoWs, Ergo ensures users can interact with its blockchain efficiently, regardless of device capabilities. This approach improves accessibility, usability, and broadens blockchain integration into everyday applications.
        </p>
      </div>

      {/* Resources Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Further Reading and Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><a href="https://eprint.iacr.org/2018/1180.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Compact Storage of Superblocks for NIPoPoW Applications <ExternalLink className="w-4 h-4" /></a></li>
          <li><a href="https://eprint.iacr.org/2018/123.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Proof of Work Sidechains <ExternalLink className="w-4 h-4" /></a></li>
        </ul>
      </div>
    </>
  );
} 