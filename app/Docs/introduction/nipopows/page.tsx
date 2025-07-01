"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Link2, Zap, Layers, ArrowRightLeft, BookOpen, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const applications = [
  {
    title: 'Light Clients',
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    content: (
      <>
        <p className="text-gray-300 mb-2">NIPoPoWs facilitate the creation of efficient light clients, enhancing accessibility and scalability of blockchain networks. Light clients address the challenges of running a full node, which requires substantial resources. With NIPoPoWs, light clients can operate without maintaining the entire blockchain, as they can verify the occurrence of events using succinct proofs.</p>
      </>
    ),
  },
  {
    title: 'Light Miners',
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    content: (
      <>
        <p className="text-gray-300 mb-2">NIPoPoWs enable logarithmic space mining, allowing "light miners" to start with block headers, similar to light clients, without downloading the entire blockchain. By retaining only a select few important blocks, light miners can validate the entire blockchain, eliminating the need for full storage. This approach can be integrated through velvet (soft) forks, avoiding hard fork complexities.</p>
      </>
    ),
  },
  {
    title: 'Sidechains',
    icon: <ArrowRightLeft className="w-5 h-5 text-orange-400" />,
    content: (
      <>
        <p className="text-gray-300 mb-2">NIPoPoWs enable the construction of trustless proof-of-work sidechains, allowing communication between blockchains without trusted intermediaries. They can be used to transfer assets from one blockchain to another and back, implementing a two-way peg. The security of the sidechain construction relies on the security of the underlying NIPoPoW protocol. NIPoPoWs leverage Simplified Payment Verification (SPV) proofs to provide resistance against potential attacks while maintaining a small size for efficient network transmission. This novel technology opens up new possibilities for interoperability between blockchains.</p>
      </>
    ),
  },
  {
    title: 'Cross-Chain Communication',
    icon: <Link2 className="w-5 h-5 text-cyan-400" />,
    content: (
      <>
        <p className="text-gray-300 mb-2">NIPoPoWs facilitate generic cross-chain communication, allowing smart contracts on one blockchain to receive and react to events that occur on another blockchain without the need for a trusted third party. This enables various applications, such as:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Remote ICOs: Investors can directly pay for tokens in one cryptocurrency (e.g., Bitcoin) and receive the tokens on another blockchain (e.g., Ethereum).</li>
          <li>Atomic Swaps: Two parties can exchange cryptocurrencies across different blockchains without the need for a centralized exchange, using NIPoPoWs to verify the occurrence of payments.</li>
        </ul>
      </>
    ),
  },
];

function ApplicationsAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-orange-400/20 rounded-xl overflow-hidden bg-neutral-900/60 border border-orange-400/20 mb-8">
      {applications.map((app, idx) => (
        <div key={idx}>
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-semibold text-orange-300 hover:bg-orange-400/10 transition-colors group"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span className="flex items-center gap-2">{app.icon}{app.title}</span>
            {open === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {open === idx && (
            <div className="px-8 pb-6 text-gray-200 text-base animate-fade-in">
              {app.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function NipopowsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <BookOpen className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Non-interactive Proof-of-Proof-of-Work (NIPoPoWs)
          </h1>
          <p className="text-xl text-gray-400">
            Non-interactive Proofs of Proof-of-Work (NIPoPoWs) is a powerful cryptographic protocol integrated into the Ergo blockchain, enabling efficient authentication of blockchain events using proof-of-work. NIPoPoWs allow verifying that an event took place without requiring a direct network connection or downloading all block headers, making them particularly useful for cross-chain communication, sidechains, and light clients.
          </p>
        </div>
      </div>

      {/* How NIPoPoWs Work Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How NIPoPoWs Work</h2>
        <p className="text-gray-300 mb-2">
          NIPoPoWs consist of a <strong>prover</strong> (full node on the source blockchain) and a <strong>verifier</strong> (who does not have access to the full blockchain but knows its genesis block). The prover generates a short proof that convinces the verifier that an event occurred in the source blockchain. This proof is succinct, growing only polylogarithmically with the size of the blockchain.
        </p>
        <p className="text-gray-300 mb-2">
          The security of NIPoPoWs relies on the honest majority assumption. The verifier accepts multiple proofs, and as long as at least one of them is honestly generated, the verifier can extract the correct information about the occurrence of the event.
        </p>
      </div>

      {/* Ergo Block Structure Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">NIPoPoWs in Ergo's Block Structure</h2>
        <p className="text-gray-300 mb-2">
          Ergo's block structure goes beyond the traditional header and transaction format, incorporating an <strong>extension</strong> section that houses NIPoPoW links, updated every 1,024 block epochs. This unique structure allows different types of nodes and clients to selectively download required block sections, optimizing storage, bandwidth, and CPU usage.
        </p>
      </div>

      {/* Applications Section (Accordion) */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Applications of NIPoPoWs</h2>
        <ApplicationsAccordion />
      </div>

      {/* Adoption Considerations Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Adoption Considerations</h2>
        <p className="text-gray-300 mb-2">
          To adopt NIPoPoWs, the source blockchain needs to support interlink structures, which can be added through a velvet fork without requiring a hard fork. The target blockchain must be able to run the NIPoPoW verification function, which can be implemented in a Turing-complete language such as Solidity.
        </p>
        <p className="text-gray-300 mb-2">
          Miners and full nodes of the target blockchain do not need to be aware of the source blockchain, as they treat the NIPoPoW proofs as opaque strings passed to a smart contract. This blockchain agnosticism allows users to initiate cross-chain relationships between different blockchains dynamically.
        </p>
      </div>

      {/* Ongoing Research Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Ongoing Research and Development</h2>
        <p className="text-gray-300 mb-2">
          NIPoPoWs have been a crucial part of the Ergo blockchain since its inception. Ergo is dedicated to continually exploring the potential of NIPoPoWs and expanding this research area in collaboration with partners at IOHK. Increased use of NIPoPoWs is anticipated with ongoing contributions from the active developer community.
        </p>
      </div>

      {/* Conclusion Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-300 mb-2">
          Non-interactive Proof-of-Proof-of-Work (NIPoPoWs) is a groundbreaking technology that enables efficient verification of blockchain events without requiring direct network access or full block header downloads. Its applications span light clients, light miners, sidechains, and cross-chain communication, offering enhanced accessibility, scalability, and interoperability for blockchain networks.
        </p>
        <p className="text-gray-300 mb-2">
          Ergo's implementation of NIPoPoWs, along with its unique block structure, positions it at the forefront of this research area. As the blockchain ecosystem continues to evolve, NIPoPoWs are expected to play a significant role in shaping the future of cross-chain interactions and the development of more efficient and accessible blockchain solutions.
        </p>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><a href="https://nipopows.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Non-Interactive Proofs of Proof-of-Work <ExternalLink className="w-4 h-4" /></a></li>
          <li><a href="https://eprint.iacr.org/2018/1180.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Compact Storage of Superblocks for NIPoPoW Applications <ExternalLink className="w-4 h-4" /></a></li>
          <li><a href="https://eprint.iacr.org/2018/123.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Proof-of-Work Sidechains (Kiayias & Zindros) <ExternalLink className="w-4 h-4" /></a></li>
        </ul>
      </div>
    </>
  );
} 