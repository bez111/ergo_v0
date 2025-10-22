import React from 'react';
import { Link2, Zap, BookOpen, ExternalLink, Layers } from 'lucide-react';

export default function NipopowSidechainsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            NiPoPoW Sidechains
          </h1>
          <p className="text-xl text-gray-400">
            Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) are a novel technology that enables trustless sidechains. They leverage Simplified Payment Verification (SPV) proofs to provide resistance against potential attacks, while maintaining a small enough size for efficient network transmission. NiPoPoWs introduce a paradigm shift in how information is verified across blockchains without trusting centralized parties, enabling secure, efficient, and scalable interoperability.
          </p>
        </div>
      </div>

      {/* How NiPoPoW Sidechains Work */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How NiPoPoW Sidechains Work</h2>
        <p className="text-gray-300 mb-2">
          NiPoPoW sidechains utilize a method where proofs are both succinct and can be quickly verified. This is achieved through the use of <span className="font-semibold">superblocks</span>, which are blocks with significantly more work than average blocks. These superblocks form a backbone that provides a high-level, compressed version of the blockchain's proof-of-work history, enabling efficient verification by sidechains.
        </p>
        <p className="text-gray-300 mb-2">
          In our implementation, sidechains equipped with NiPoPoW verifiers can validate proofs without having access to the full blockchain data of another chain. This is crucial for efficient cross-chain transactions, where operations like asset transfers and smart contract executions can occur seamlessly between different blockchains.
        </p>
      </div>

      {/* Technical Insights Section */}
      <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <BookOpen className="w-8 h-8 text-orange-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Technical Insights from Academic Research</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li><span className="font-semibold">Proof of Work Sidechains:</span> In the <a href="https://eprint.iacr.org/2019/555.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">"Proof of Work Sidechains"</a> paper by Aggelos Kiayias and Dionysis Zindros, they discuss a first-of-its-kind construction for sidechains that allows communication between proof-of-work blockchains without trusted intermediaries. Their approach ensures that as long as miners control less than 50% of the network's hash rate, the security of assets and data crossing between chains is maintained.</li>
            <li>The paper models the security of such sidechains through mathematical proofs, illustrating how NiPoPoWs can be implemented in any blockchain with sufficient expressive power to support the verification of these proofs, such as through smart contracts in Solidity.</li>
          </ul>
        </div>
      </div>

      {/* Applications and Use Cases Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Applications and Use Cases</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><span className="font-semibold">Cross-Chain Transactions:</span> Enable secure and trustless transactions between different blockchains.</li>
          <li><span className="font-semibold">Decentralized Finance (DeFi):</span> Facilitate the seamless transfer of assets for use in DeFi applications across various blockchains.</li>
          <li><span className="font-semibold">Scalability Solutions:</span> Act as a scaling solution by offloading transactions from a congested main chain to a faster, more efficient sidechain.</li>
        </ul>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <div className="mb-2">
          <h3 className="font-semibold text-orange-400 mb-1">Academic Papers</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li><a href="https://eprint.iacr.org/2019/555.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">Proof of Work Sidechains <ExternalLink className="w-4 h-4" /></a></li>
          </ul>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-orange-400 mb-1">Articles</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li><a href="https://www.coindesk.com/markets/2019/06/24/sidechains-why-these-researchers-think-they-solved-a-key-piece-of-the-puzzle/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">Sidechains: Why These Researchers Think They Solved a Key Piece of the Puzzle <ExternalLink className="w-4 h-4" /></a></li>
            <li><a href="https://bitcoinmagazine.com/technical/the-sidechains-breakthrough-almost-everyone-in-bitcoin-missed" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">The Sidechains Breakthrough Almost Everyone in Bitcoin Missed <ExternalLink className="w-4 h-4" /></a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-orange-400 mb-1">Videos</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li><a href="https://www.youtube.com/watch?v=QwI6U5QkB1A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">Thoughts on Cross Chain Communication, Sidechains, NiPoPoWs and Litecoin <ExternalLink className="w-4 h-4" /></a></li>
            <li><a href="https://www.youtube.com/watch?v=6Q1rV1w3QeA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">IOHK Research | Dionysis Zindros, Sidechains <ExternalLink className="w-4 h-4" /></a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLpPQ1IGo8zP1FQnQwQwQwQwQwQwQwQwQw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">NiPoPoW Lecture Series <ExternalLink className="w-4 h-4" /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
} 