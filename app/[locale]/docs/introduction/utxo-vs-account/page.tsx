import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function EutxoPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Extending the Power of the UTXO Model
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo utilizes the Extended UTXO (eUTXO) model, based on Bitcoin's original UTXO model but with enhanced capabilities that enable more expressive smart contracts. This section explores the advantages and features of eUTXO.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">The Benefits of UTXO</h2>
        <ul className="list-disc pl-6 mb-2 space-y-2 text-gray-300">
          <li><strong>Privacy:</strong> UTXOs being one-time objects allow for formalized privacy measures, enhancing user confidentiality.</li>
          <li><strong>Scalability:</strong> UTXO's inherent design supports parallel transaction processing, making it simpler to scale the network. Additionally, UTXOs are more compatible with stateless client solutions like NIPoPoWs.</li>
          <li><strong>Interoperability:</strong> UTXOs are well-suited for off-chain and sidechain protocols, enabling seamless integration with various solutions beyond the main chain.</li>
          <li><strong>Transaction Cost Predictability:</strong> In Ergo, the on-chain action is primarily focused on validating smart contracts, resulting in significantly lower transaction costs. Moreover, the transaction costs are predictable, eliminating the need for gas-like mechanisms found in other platforms.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          By leveraging the advantages of UTXO and extending its capabilities with eUTXO, Ergo provides a powerful and efficient platform for building and executing smart contracts.
        </p>
      </div>

      {/* eUTXO and Smart Contracts Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">eUTXO and Smart Contracts</h2>
        <p className="text-gray-300 mb-4">
          In the eUTXO model, Ergo allows smart contracts to utilize UTXOs as data inputs without modifying them. This means that nodes primarily verify transactions rather than balances. In comparison, Ethereum's Account model requires nodes to check all accounts to validate the system.
        </p>
        <p className="text-gray-300 mb-4">
          By leveraging eUTXO, Ergo enables parallel computation and facilitates non-custodial atomic swaps. This makes it easier to perform complex operations securely and efficiently.
        </p>
        <p className="text-gray-300 mb-4">
          Furthermore, Ergo's Multi-Stage UTXO model, as detailed in this peer-reviewed paper, enables the implementation of Turing-complete smart contracts. (Note: ErgoScript itself is not Turing-complete by design for security, but the model allows for Turing-complete computations via multi-stage protocols).
        </p>
        <p className="text-gray-300">
          You can see a comparison between Ergo's eUTXO model and the Account-Based model <Link href="/docs/introduction/utxo-vs-account" className="text-orange-400 hover:text-orange-300 underline">here</Link>.
        </p>
      </div>

      {/* Resources Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Articles</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><a href="https://ergoplatform.org/en/blog/2021-11-10-learning-ergo-101-eutxo-explained-for-human-beings/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Learning Ergo 101 : eUTXO explained for human beings <ExternalLink className="w-4 h-4" /></a></li>
              <li><a href="https://ergoplatform.org/en/blog/2022-01-10-off-chain-logic-and-eutxo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Off-chain logic & eUTXO <ExternalLink className="w-4 h-4" /></a></li>
              <li><a href="https://iohk.io/en/blog/posts/2021/08/12/the-utxo-alliance-announcement/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">The UTXO Alliance Announcement <ExternalLink className="w-4 h-4" /></a></li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><a href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">The Extended UTXO Model - IOHK Research <ExternalLink className="w-4 h-4" /></a></li>
              <li><a href="https://docs.cardano.org/learn/understanding-the-extended-utxo-model/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Understanding the Extended UTXO model - docs.cardano <ExternalLink className="w-4 h-4" /></a></li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Video</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><a href="https://www.youtube.com/watch?v=QwI6U5QkB1A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Ergo Blockchain Crash Course Part 1: eUTXO Model Review <ExternalLink className="w-4 h-4" /></a></li>
              <li><a href="https://www.youtube.com/watch?v=QwI6U5QkB1A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">DeCo EU Layman Class - Basics of eUTxO <ExternalLink className="w-4 h-4" /></a></li>
              <li><a href="https://www.youtube.com/watch?v=QwI6U5QkB1A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Interesting explanation on the eUTXO model and dapps built in it <ExternalLink className="w-4 h-4" /></a></li>
              <li><a href="https://www.youtube.com/watch?v=QwI6U5QkB1A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300">Blockchain Basics & Transactions, UTXO and Script Code <ExternalLink className="w-4 h-4" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 