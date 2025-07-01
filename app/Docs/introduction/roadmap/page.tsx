"use client";

import React, { useState } from "react";
import { Flag, TrendingUp, Layers, Users, BookOpen, Link2, ExternalLink, ListChecks, Calendar, Star, Wrench, Shield, Coins, Swords, Network, Book, Zap, Trophy, MessageSquare, Target, BarChart3, Cpu, GitBranch, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const TABS = [
  { key: "roadmap", label: "Roadmap" },
  { key: "scaling", label: "Scaling" },
  { key: "layer0", label: "Layer 0" },
  { key: "layer1", label: "Layer 1" },
  { key: "layer2", label: "Layer 2" },
  { key: "discussions", label: "Discussions" },
  { key: "atomic", label: "Atomic Composability" },
  { key: "txspeed", label: "Transaction Speed" },
  // Остальные табы добавятся позже
];

function ScalingContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <TrendingUp className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Scaling Ergo
          </h1>
          <p className="text-xl text-gray-400">
            Creating a scalable blockchain infrastructure is a complex task. Ergo, fortified by a decade of research, rigorous testing, and ongoing development, has risen to the challenge. This guide will walk you through Ergo's sophisticated scalability features.
          </p>
        </div>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Factors Influencing Blockchain Scalability</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Cryptoeconomic incentive model:</b> Ensures miners receive suitable rewards for the various costs associated with scaling a blockchain, which may include an increase in state-related costs.</li>
          <li><b>Consensus model:</b> The chosen model can determine the feasibility of certain scalability solutions. For example, the Proof of Stake consensus model does not support Non-interactive Proofs of Proof-of-Work (NiPoPoWs).</li>
          <li><b>Accounting model:</b> This pertains to the management of transactions and operations within the blockchain. Bitcoin uses the UTXO Model, while Ethereum uses the Account Model.</li>
        </ul>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Ergo's Approach to Scalability</h2>
        <p className="text-gray-300 mb-2">Ergo's innovative approach to scalability, underpinned by these aspects, sets it apart from other blockchain technologies. Unlike Ethereum's Account model, which manages storage changes and validity checks on-chain during code execution, Ergo's eUTXO employs a unique strategy: transactions are created off-chain, and validation checks are conducted on-chain.</p>
        <p className="text-gray-300 mb-2">This approach reduces the operational load on each network node, thereby enhancing overall efficiency. The immutability of the transaction graph allows for further optimization of this process, increasing the number of transactions processed per second. Additionally, the use of light-verifying nodes boosts both the scalability and accessibility of the network.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Layers className="w-7 h-7 text-orange-400" /> The Three Layers of Ergo Scalability</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 flex flex-col items-start">
            <Network className="w-8 h-8 text-cyan-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Layer 0: The Network or Peer-to-Peer Layer</h3>
            <p className="text-gray-300">The foundation of the blockchain, responsible for peer-to-peer communication and data propagation across the network.</p>
          </div>
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-6 flex flex-col items-start">
            <Layers className="w-8 h-8 text-orange-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Layer 1: The Core Blockchain Layer</h3>
            <p className="text-gray-300">Handles the core consensus, transaction validation, and state management. Ergo's eUTXO model enables efficient and secure on-chain operations.</p>
          </div>
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 flex flex-col items-start">
            <Zap className="w-8 h-8 text-cyan-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Layer 2: The Off-chain Layer</h3>
            <p className="text-gray-300">Supports off-chain protocols and solutions, such as sidechains and payment channels, to further enhance scalability and flexibility for developers and users.</p>
          </div>
        </div>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-300 mb-2">These layers work in harmony to enhance Ergo's scalability, making it a flexible and potent choice for both developers and users. This collaborative model enables Ergo to provide robust, scalable solutions that are prepared to meet the challenges of global expansion.</p>
      </div>
    </>
  );
}

function Layer0Content() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <Network className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Layer 0: The Network Layer
          </h1>
          <p className="text-xl text-gray-400">
            Layer 0, also known as the Network or Peer-to-Peer (P2P) layer, forms the bedrock of decentralized communication within a blockchain network. It plays a pivotal role in facilitating the exchange of data and information across the network, allowing nodes to distribute and validate transactions, blocks, and other data types without the need for a centralized authority.
          </p>
        </div>
      </div>

      {/* Client Types Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Client Types</h2>
        <p className="text-gray-300 mb-2">In the context of scaling, the type of client used can significantly impact the performance and efficiency of a blockchain network. Ergo supports multiple types of clients, each offering different levels of security and resource requirements. These client types are designed to cater to various use cases and network conditions, thereby contributing to the overall scalability of the Ergo network. Here are the available client types:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
          <li><b>Full 'Archive' Node Mode:</b> Stores all blocks from genesis, checks PoW, verifies linking, maintains full UTXO set. Highest security, high storage needs.</li>
          <li><b>Pruned-Fullnode Mode:</b> Downloads all headers, validates PoW, prunes unnecessary data after UTXO snapshot. Improves storage efficiency.</li>
          <li><b>Light-Fullnode Mode:</b> Holds only root digest, checks full blocks or suffix. Balance between security and efficiency.</li>
          <li><b>Light-SPV Mode:</b> Verifies transactions with a small sample of block headers. Highly scalable for limited devices.</li>
        </ul>
        <p className="text-gray-300 mb-2">Ergo also supports <b>Logarithmic space mining</b>, enabling light miners to bootstrap using block headers without downloading the entire blockchain. This can be integrated via a velvet (soft) fork, further enhancing scalability.</p>
      </div>

      {/* Sub Blocks Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Sub Blocks</h2>
        <p className="text-gray-300 mb-2">One of the most promising advancements for Layer 0 scalability is the introduction of "subblocks"—block candidates with lower PoW difficulty, serving as temporary placeholders for faster confirmations and optimized bandwidth. For users, this means quicker, weakly confirmed transactions (often within 20 seconds) and better network resource usage.</p>
        <p className="text-gray-300 mb-2">For a more in-depth look at weak blocks, their advantages, and their role in Ergo's scalability strategy, see this page.</p>
      </div>

      {/* State Bloat Management Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">State Bloat Management</h2>
        <p className="text-gray-300 mb-2">Managing the growth of the state size ('state bloat') is a key challenge. Ergo addresses this with:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Persistent updatable storage:</b> Only the digest of the authenticated data structure is stored in the UTXO set, regardless of data set size.</li>
          <li><b>Storage Rent Fee:</b> Deters spam and recycles unused data bytes (dust), reducing network pollution and encouraging user activity.</li>
        </ul>
      </div>

      {/* Miner-Adjustable Parameters Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Miner-Adjustable Parameters</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Block size:</b> Miners can adjust this based on validation time and hardware/software advances. Current block size: 8MB.</li>
          <li><b>Transaction size:</b> Mempool transaction size limit is 96kb (as of node 4.0.23). Larger transactions can be included manually by miners.</li>
        </ul>
        <p className="text-gray-300 mb-2">For more details, see the Governance section.</p>
      </div>

      {/* Subblocks in Ergo Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Subblocks in Ergo</h2>
        <p className="text-gray-300 mb-2">With the renaming and introduction of sub-blocks, Ergo now distinguishes between sub-blocks (input blocks) and full blocks (ordering blocks). This reduces typical onchain confirmation times from about 2 minutes to roughly 2 seconds, achieving a 17× improvement in detecting transaction failures and transforming the mempool into a more cooperative environment.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Sub-blocks (Input Blocks):</b> Lower difficulty, produced ~1/sec, carry most transaction data for fast propagation.</li>
          <li><b>Ordering Blocks:</b> Traditional full blocks, produced ~every 2 min, maintain consensus and security.</li>
        </ul>
        <p className="text-gray-300 mb-2">Input blocks allow near-instant confirmations, while ordering blocks provide final settlement and consensus.</p>
      </div>

      {/* Enhanced User Experience Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Enhanced User Experience</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Rapid Onchain Confirmations:</b> Transactions can be confirmed in ~2 seconds via sub-blocks, but finality still requires ordering blocks.</li>
          <li><b>Faster Failure Detection:</b> Transaction failures detected in ~2 seconds (vs. up to 6 minutes before).</li>
          <li><b>Cooperative Mempool:</b> Mempool becomes more cooperative, improving responsiveness.</li>
        </ul>
      </div>

      {/* Technical Details Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Technical Details: Input Blocks and Ordering Blocks</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Ordering Blocks:</b> Full PoW blocks, produced every ~2 min, anchor consensus and distribute rewards.</li>
          <li><b>Input Blocks (Sub-blocks):</b> Low-difficulty blocks, ~1/sec, for fast transaction propagation.</li>
          <li><b>Superblocks:</b> Enable efficient long-range proofs and light client support via NiPoPoWs.</li>
        </ul>
        <p className="text-gray-300 mb-2">Input blocks provide rapid, low-cost transaction propagation (~1s), improving user feedback without altering security guarantees. Ordering blocks retain finality and economic incentives, while superblocks support long-range verification.</p>
      </div>

      {/* Security Considerations Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Security Considerations</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Input Block Validation:</b> Ordering blocks must validate preceding input blocks. Invalid transactions are not finalized.</li>
          <li><b>Dual Confirmation Model:</b> Input blocks offer fast, provisional feedback. Final settlement relies on ordering blocks.</li>
        </ul>
      </div>

      {/* TLDR Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">TL;DR</h2>
        <p className="text-gray-300 mb-2">Input blocks provide rapid, low-cost transaction propagation (~1s), greatly improving user feedback without altering the security guarantees of Ergo's existing PoW system. Ordering blocks retain finality and economic incentives, while superblocks support long-range verification. This architecture balances performance, security, and decentralization.</p>
      </div>
    </>
  );
}

function Layer1Content() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <Layers className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Layer 1: On-chain Scalability in Ergo
          </h1>
          <p className="text-xl text-gray-400">
            Layer 1, the foundational protocol layer of a blockchain system, is responsible for core functions such as transaction processing, consensus mechanisms, and security protocols. Ergo's Layer 1 is designed with a focus on scalability, incorporating features that boost transaction processing capacity and overall throughput.
          </p>
        </div>
      </div>

      {/* Current Scalability Features */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Current Scalability Features</h2>
        <h3 className="text-xl font-semibold mb-2">Extended UTXO Model (EUTXO)</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Turing Complete smart contracts</li>
          <li>Parallel transaction processing</li>
          <li>Higher throughput compared to account-based models</li>
          <li>Efficient state management</li>
        </ul>
      </div>

      {/* Protocol Optimizations */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Protocol Optimizations</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Removal of unused complexity from the Sigma protocol</li>
          <li>Enhanced code readability and maintenance</li>
          <li>Refined transaction ordering and mempool tracking</li>
          <li>Regular node version updates addressing performance</li>
        </ul>
      </div>

      {/* Mainnet 5.0 and Beyond: Just-in-Time Costing */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Mainnet 5.0 and Beyond</h2>
        <h3 className="text-xl font-semibold mb-2">Just-in-Time Costing</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>5-10x increase in block capacity</li>
          <li>Improved transaction processing capability</li>
          <li>More efficient resource utilization</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-4">Miner Parameter Adjustments</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Increased block size parameters</li>
          <li>Enhanced transaction size limits</li>
          <li>Optimized mining efficiency</li>
          <li>Improved difficulty calculations through Autolykos updates</li>
        </ul>
      </div>

      {/* Future Scalability Enhancements */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Future Scalability Enhancements</h2>
        <h3 className="text-xl font-semibold mb-2">Microblocks and the Ergo Block Extension Section</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Mandatory and arbitrary key-value data</li>
          <li>Anchors for microblock creation</li>
          <li>Support for service chains</li>
          <li>Potential for generic sidechain implementation</li>
        </ul>
        <p className="text-gray-300 mb-2">These features enable faster block generation times, improved transaction throughput, support for velvet or soft forks, and creation of Aspen-style service chains.</p>
        <h3 className="text-xl font-semibold mb-2 mt-4">Sub-Block Confirmation Protocols</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Group transactions into sub-blocks</li>
          <li>Reduce confirmation times</li>
          <li>Increase overall throughput</li>
          <li>Improve transaction processing efficiency</li>
        </ul>
        <p className="text-gray-300 mb-2">This development is guided by EIP-15 and builds upon established research from platforms like Bitcoin-NG and Flux.</p>
        <h3 className="text-xl font-semibold mb-2 mt-4">Sharding</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Partitioning the blockchain database into smaller segments</li>
          <li>Enabling parallel transaction processing</li>
          <li>Maintaining security while improving throughput</li>
        </ul>
        <p className="text-gray-300 mb-2">For detailed information, refer to: <a href="https://eprint.iacr.org/2016/917.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">On the Security and Performance of Blockchain Sharding</a> and <a href="https://ergoplatform.org/en/blog/2021-07-14-sharding-and-atomic-composability-on-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">Sharding and Atomic Composability on Ergo</a>.</p>
      </div>

      {/* Community-Driven Development */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Community-Driven Development</h2>
        <h3 className="text-xl font-semibold mb-2">Ergo Improvement Proposals (EIPs)</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Community-driven proposals</li>
          <li>Focused scalability improvements</li>
          <li>Systematic implementation processes</li>
          <li>Regular protocol updates</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-4">Node Version Updates</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Bug fixes and performance enhancements</li>
          <li>New scalability features</li>
          <li>Improved difficulty calculations</li>
          <li>Refined Autolykos implementation</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-4">Research and Development</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Advanced sharding techniques</li>
          <li>Novel consensus mechanisms</li>
          <li>Improved transaction ordering</li>
          <li>Enhanced mempool management</li>
        </ul>
        <p className="text-gray-300 mb-2">For the latest developments in these areas, refer to <a href="https://eprint.iacr.org/2020/1176.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">Flux: Revisiting Near Blocks for Proof-of-Work Blockchains</a>.</p>
      </div>
    </>
  );
}

function Layer2Content() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <Zap className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Layer 2: Off-Chain
          </h1>
          <p className="text-xl text-gray-400">
            Layer 2 solutions are secondary frameworks or protocols constructed on top of a Layer 1 blockchain protocol. Their purpose is to enhance the efficiency, scalability, and capabilities of the underlying blockchain by facilitating off-chain transactions or computations.
          </p>
          <p className="text-gray-300 mt-2">Ergo is compatible with a broad range of Layer 2 solutions derived from other UTXO blockchains. The platform can implement various off-chain solutions like Hydra and sidechains, which help alleviate blockchain congestion and offer benefits akin to ZK-rollups.</p>
        </div>
      </div>

      {/* ErgoScript Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">ErgoScript: Powering Layer 2 Transactions</h2>
        <p className="text-gray-300 mb-2">ErgoScript's flexible design allows large parts of transactions to be executed on Layer 2, which are then settled on the Ergo blockchain in a single transaction. For instance, a developer successfully used the eUTXO model to airdrop native tokens to 10,000 addresses simultaneously.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Time-weighted data</li>
          <li>Turing completeness</li>
          <li>Read-only data inputs</li>
          <li>Multi-stage contracts</li>
          <li>Sigma protocols</li>
          <li>NIPoPoWs</li>
        </ul>
        <p className="text-gray-300">These enhancements enable a variety of Layer 2 protocols, each addressing scalability issues in their unique way. Ergo serves as a settlement layer for multiple Layer 2 protocols and applications.</p>
      </div>

      {/* Current Layer 2 Projects and Developments */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Current Layer 2 Projects and Developments</h2>
        <h3 className="text-xl font-semibold mb-2">Layer 2 Solutions Leveraging Sub-Blocks</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Faster confirmation times for Layer 2 protocols</li>
          <li>Enhanced support for payment channels</li>
          <li>More efficient state channel operations</li>
          <li>Improved settlement layer for off-chain transactions</li>
        </ul>
        <p className="text-gray-300 mb-2">Layer 2 protocols can utilize sub-blocks to group off-chain transactions more efficiently, reduce settlement times, increase throughput, and enable more responsive user experiences.</p>
      </div>

      {/* SigmaChains and Sidechains */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">SigmaChains and Sidechains</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Enhanced scalability and privacy features</li>
          <li>Experimental platform for new features</li>
          <li>Various chain commitment options for main chain security</li>
          <li>Comprehensive technical documentation in "Sigma Deck 2"</li>
        </ul>
      </div>

      {/* ChainCash */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">ChainCash</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Elastic money creation capabilities</li>
          <li>Digital notes representing various values</li>
          <li>Support for digital tokens and real-world assets</li>
          <li>Implementation of top-up transactions and blockchain scanning</li>
        </ul>
      </div>

      {/* Plasma: Enhancing Data Structures */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Plasma: Enhancing Data Structures</h2>
        <p className="text-gray-300 mb-2">Ergo inherently supports AVL trees, an efficient authenticated data structure that allows for proving different properties of the data without accessing the entire dataset.</p>
        <p className="text-gray-300 mb-2">The ledger is maintained as an AVL tree using Plasma. Users conduct off-chain transactions with the bank, resulting in changes in the ledger. The bank periodically publishes a compact snapshot of the ledger on the blockchain.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Data compression</li>
          <li>Contract simplification</li>
          <li>Plasma staking contracts</li>
          <li>Off-chain operation management</li>
        </ul>
      </div>

      {/* NIPoPoWs: Facilitating Scalability */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">NIPoPoWs: Facilitating Scalability</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Smaller chains can leverage security of larger networks</li>
          <li>Periodic proof-of-work submissions between chains</li>
          <li>Cryptographically secure asset transfers</li>
          <li>Enables seamless asset transfers without centralized intermediaries</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-4">Cross-Chain Communications</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Facilitates smart contract executions across networks</li>
          <li>Enables consolidated data verification</li>
          <li>Supports integrated blockchain ecosystems</li>
          <li>Improves scalability of Layer 2 solutions like sidechains</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-4">Applications in Layer 2 Technologies</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Sidechains: NIPoPoWs enable sidechains to operate more autonomously while maintaining security</li>
          <li>State Channels: Transactions can be processed off-chain with assurances of eventual consistency</li>
          <li>Cross-Chain Verification: Enables efficient verification of transactions across different chains</li>
          <li>Security Enhancement: Smaller chains can leverage the security of larger networks</li>
        </ul>
      </div>

      {/* Emerging Layer 2 Solutions */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Emerging Layer 2 Solutions</h2>
        <h3 className="text-xl font-semibold mb-2">Lightning Network</h3>
        <p className="text-gray-300 mb-2">The Lightning Network creates payment channels through multi-signature wallets, enabling off-chain transactions between participants.</p>
        <h3 className="text-xl font-semibold mb-2">Rainbow Network</h3>
        <p className="text-gray-300 mb-2">A non-custodial exchange and payment network supporting multiple assets through price oracles, enabling off-chain trading, borrowing, and lending.</p>
        <h3 className="text-xl font-semibold mb-2">Rollups</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Optimistic Rollups: Handle transactions on parallel chains using fraud-proof principles</li>
          <li>ZK-Rollups: Utilize zkSNARKs to bundle hundreds of transfers off-chain</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Additional Solutions</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Hydra: Implements isomorphic state channels for multi-party transactions</li>
          <li>Zero-Knowledge Contingent Payments: Enable trustless knowledge-based payments</li>
          <li>FairSwap/FastSwap protocols: Provide secure and efficient transaction methods</li>
          <li>Coinpools: Group transactions for improved efficiency</li>
        </ul>
      </div>

      {/* Development Considerations */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Development Considerations</h2>
        <h3 className="text-xl font-semibold mb-2">Security and Consensus</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Careful evaluation of security implications for new Layer 2 solutions</li>
          <li>Selection of appropriate consensus mechanisms for different applications</li>
          <li>Implementation of robust fraud prevention measures</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-4">User Experience</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Development of mempool chaining for immediate transaction feedback</li>
          <li>Focus on seamless integration between Layer 1 and Layer 2 solutions</li>
          <li>Optimization of transaction processing and confirmation times</li>
        </ul>
      </div>

      {/* Research and Development */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Research and Development</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Advanced sharding techniques</li>
          <li>Novel consensus mechanisms</li>
          <li>Improved transaction ordering</li>
          <li>Enhanced mempool management</li>
        </ul>
      </div>
    </>
  );
}

function DiscussionsContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <MessageSquare className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Ergo Scaling Roadmap Discussions
          </h1>
          <p className="text-xl text-gray-400">
            Join our discussions on scaling on Telegram or #layer2 on Discord. We welcome all insights and contributions.
          </p>
        </div>
      </div>

      {/* Current Focus */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Target className="w-7 h-7 text-orange-400" /> Current Focus</h2>
        <p className="text-gray-300 mb-4">With the successful integration of UTXO set snapshots and Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) for ultra-fast bootstrapping in the pruned full node, our focus has now shifted towards optimizing this implementation. We are also exploring ways to further increase block limits for miners, given the live status of the pruned full node.</p>
      </div>

      {/* Recent Developments */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="w-7 h-7 text-cyan-400" /> Recent Developments</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
          <li><b>(TBA)</b> Planning for Node V6 & scalability improvements</li>
          <li><b>(WIP)</b> Development of SPV Client</li>
          <li>Pruned Full Node is now live</li>
          <li>Release of Node V5</li>
          <li>GetBlok released the Plasma Library</li>
          <li>Plasma Tutorials have been published</li>
        </ul>
      </div>

      {/* Ergo Design and Implementation Roadmap */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><ListChecks className="w-7 h-7 text-orange-400" /> Ergo Design and Implementation Roadmap</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Phase 1: Foundations</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Start with the basic design of Ergo as digital gold (commodity money).</li>
              <li>Introduce programmability features including:
                <ul className="list-disc pl-6 mt-1">
                  <li>Crypto contracts</li>
                  <li>Stealth addresses</li>
                  <li>Arbitrarily complex signatures</li>
                  <li>Mixing schemes</li>
                </ul>
              </li>
              <li>Position Ergo as a basis for unstoppable, grassroots economies, serving as a decentralized central bank digital currency (CBDC) for the people.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Phase 2: Initial Experiments</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Conduct initial experiments to test functionality and user engagement.</li>
              <li>Evaluate the outcomes considering the initial motivations.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Phase 3: Defining Adoption</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Clarify the term "adoption" as it is often ambiguous in industry discussions.</li>
              <li>Develop metrics or KPIs to measure adoption success.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Phase 4: Scaling and Optimization</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Peer-to-peer (P2P) level optimizations and rework.</li>
              <li>Consider pre-block commitments to transaction ordering (sub-blocks).</li>
              <li>Aim to increase transactions per second (TPS) while maintaining security.</li>
            </ul>
            <div className="bg-neutral-900/50 border border-orange-400/20 rounded-lg p-4 mt-3">
              <h4 className="font-semibold mb-2 text-orange-300">Constraints for Scaling</h4>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Limitations include requirements for a flat P2P network running on commodity hardware.</li>
                <li>No use of centralized or "bankster" data centers for scalability.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Phase 5: Offloading Solutions</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Propose options for offloading transactions to Layer 2 or sidechains, if not already implemented.</li>
              <li>Introduce "Know Your Algorithm" KYA as a way to explain security in offloading options in a concise and understandable manner.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Phase 6: Convergence</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Multiple developments in scaling, optimization, and offloading are expected to converge, culminating in a comprehensive solution for widespread adoption.</li>
            </ul>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mt-4">Summarised from Kushti, 7 Aug, 2023</p>
      </div>

      {/* Understanding Transaction Speed */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Cpu className="w-7 h-7 text-cyan-400" /> Understanding Transaction Speed in Blockchains</h2>
        <p className="text-gray-300 mb-4">The speed of transactions, commonly known as Transactions Per Second (TPS), is a vital performance metric for blockchains. It quantifies the capacity of a blockchain to process transactions, expressed in transactions per second.</p>
        
        <p className="text-gray-300 mb-4">The primary bottleneck for increasing transactions per second (TPS) is the peer-to-peer (p2p) network layer. Proof-of-Work (PoW) is already an efficient timestamping protocol for the base layer (Layer 0) because it operates asynchronously, without the need for additional network messages.</p>
        
        <p className="text-gray-300 mb-4">While TPS could be boosted by introducing measures like supernodes or eliminating mempools, as seen in projects like Solana and Avalanche, these approaches compromise the decentralization and integrity of the network. Therefore, if the goal is to maintain a truly decentralized cryptocurrency, these methods should be avoided.</p>
        
        <p className="text-gray-300">The remaining viable solution for improving TPS lies in optimizing bandwidth usage and implementing Layer 2 solutions and sidechains, also known as application-specific chains.</p>
      </div>

      {/* Comparative TPS Values */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Comparative TPS Values for Renowned Blockchains</h2>
        <p className="text-gray-300 mb-4">To provide a perspective, here are the estimated TPS values for some of the leading blockchains:</p>
        <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
          <li><b>Bitcoin (BTC):</b> Roughly 7 TPS (Gobbel, 2017).</li>
          <li><b>Ethereum (ETH):</b> Roughly 15 TPS (Clincy et al., 2019)</li>
          <li><b>Ripple (XRP):</b> Roughly 1500 TPS (Clincy et al., 2019)</li>
          <li><b>Cardano (ADA):</b> Roughly 7 TPS (Can reach up to 250 in controlled tests) (Stamoulis, 2021).</li>
          <li><b>Polkadot (DOT):</b> Roughly 1500 TPS (Hiemstra et al., 2021)</li>
        </ul>
        <p className="text-gray-300 mb-4">However, the conventional TPS metric only offers a glimpse into Ergo's true potential. It's not merely about the number of transactions; the weight of the transaction and the computational cost limit per block are equally important.</p>
        <p className="text-gray-300">With the Node v5 already operational, Ergo's raw TPS is approximately 47.5 transactions/second, with room for further enhancements.</p>
      </div>

      {/* eUTXO Model Advantage */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">The Extended Unspent Transaction Output (eUTXO) Model Advantage</h2>
        <p className="text-gray-300 mb-4">Ergo's transaction management system leverages the Extended Unspent Transaction Output (eUTXO) model, which outperforms the traditional UTXO model in terms of efficiency and flexibility. This model allows for multiple outputs in a single transaction, each potentially carrying different tokens.</p>
        <p className="text-gray-300 mb-4">Moreover, Ergo is capable of handling complex DeFi transactions, thereby enabling a broad spectrum of DeFi applications within the network. By processing multiple token types per transaction output and facilitating the simultaneous execution of complex transactions within a block, Ergo significantly boosts its blockchain's performance and scalability.</p>
        <p className="text-gray-300">The primary objective in scaling Ergo is to enhance TPS without compromising the fundamental principles and assurances typically linked with blockchain technology.</p>
      </div>

      {/* Atomic Composability */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Lock className="w-7 h-7 text-orange-400" /> Understanding Atomic Composability in Blockchain Systems</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Introduction</h3>
            <p className="text-gray-300 mb-2">In the context of blockchain technology and decentralized applications (dApps), atomic composability refers to the ability to combine and execute multiple operations or transactions as a single, indivisible unit. This means that either all components of a multi-step process are executed successfully, or none of them are executed at all.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">The Significance of Atomic Composability in DeFi</h3>
            <p className="text-gray-300 mb-2">The open-source nature of DeFi allows for the integration, modification, and reuse of dApps, enabling a high degree of composability within the ecosystem. However, certain DeFi applications, such as flash loans and instant arbitrage, require a specific form of composability known as atomic composability. These applications involve multiple interconnected transactions that must execute atomically, ensuring that all related transactions either complete successfully or are entirely rolled back.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Balancing Scalability and Atomic Composability</h3>
            <p className="text-gray-300 mb-2">While blockchain technology aims to achieve scalability, it is equally important to maintain atomic composability at scale. Ergo addresses this challenge by optimizing the use of resources within existing blockchain platforms, rather than relying on unproven technologies. This approach ensures that atomic composability is preserved while enabling scalability.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">The eUTXO Model and ErgoScript</h3>
            <p className="text-gray-300 mb-2">Ergo's eUTXO model, in conjunction with the ErgoScript smart contract language, allows for the atomic execution of complex, multi-stage transactions within a single transaction. This ensures that all components of a transaction are executed in full or not at all, a fundamental aspect of atomic composability. ErgoScript enables the creation and execution of complex smart contracts with predictable outcomes, while leveraging the benefits of the UTXO (Unspent Transaction Output) model, such as statelessness, improved parallelism, and reliable data handling.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Layer 2 Solutions: Hydra State Channels</h3>
            <p className="text-gray-300 mb-2">Layer 2 solutions, such as Hydra state channels, contribute to atomic composability by facilitating communication across different heads (participants). This allows for the atomic execution of complex operations involving multiple state channel participants. This mechanism enables complex transactions to be executed off-chain, with the final state being settled on the main chain. This approach ensures that atomic composability is preserved while enabling scalability.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">ACE: Enhancing the Execution of Complex Smart Contracts</h3>
            <p className="text-gray-300 mb-2">Ergo's ability to execute complex and composable smart contracts could be further enhanced by implementing concepts like ACE (Asynchronous Contract Execution). ACE suggests decomposing smart contracts into smaller, concurrent tasks that can be executed independently, thereby improving overall performance and throughput. It allows one contract to safely invoke another contract executed by a different set of service providers, facilitating off-chain execution of interactive smart contracts with flexible trust assumptions and enhancing atomic composability. This approach enables complex transactions to be executed off-chain, with the final state being settled on the main chain. This mechanism ensures that atomic composability is preserved while enabling scalability.</p>
          </div>
        </div>
      </div>

      {/* Sharding and Atomic Composability */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><GitBranch className="w-7 h-7 text-cyan-400" /> Sharding and Its Impact on Atomic Composability</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">An Overview of Sharding</h3>
            <p className="text-gray-300 mb-2">Sharding is a technique that divides a blockchain network into smaller sections, or shards, to enhance scalability. Each shard processes a subset of transactions independently. However, maintaining atomic composability, where all components of a multi-step transaction are executed in full or not at all, can be challenging in a sharded environment. This means that if any part of a transaction fails to execute atomically across all shards, it could lead to inconsistencies, such as assets being locked or lost, or operations being partially executed.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">Strategies for Preserving Atomic Composability in Sharding</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-2">
              <li><b>Cross-shard Transactions:</b> Establish a mechanism for secure and efficient communication between shards to enable cross-shard transactions. This mechanism ensures that all components of a multi-step transaction are either fully committed or rolled back, even when the transaction spans multiple shards. This approach enables complex transactions to be executed off-chain, with the final state being settled on the main chain. This mechanism ensures that atomic composability is preserved while enabling scalability.</li>
              <li><b>Locking Mechanisms:</b> Introduce locking mechanisms to prevent double-spending and fraud during cross-shard transactions. Temporarily locking the assets involved until the transaction is complete can help preserve atomic composability. This approach ensures that atomic composability is preserved while enabling scalability.</li>
              <li><b>Two-phase Commit Protocols:</b> Employ two-phase commit protocols to coordinate cross-shard transactions. In the first phase, shards tentatively execute the transaction and lock the relevant assets. In the second phase, once all shards have confirmed the transaction, it is committed, and the locked assets are released. If any shard fails to confirm, the transaction is rolled back, and the locked assets are released. This approach ensures that atomic composability is preserved while enabling scalability.</li>
              <li><b>Optimistic Execution:</b> Allow shards to optimistically execute transactions, assuming dependencies between shards are resolved. If conflicts arise later, the transaction can be rolled back, and the network can learn from the conflict to prevent similar issues in the future. This approach ensures that atomic composability is preserved while enabling scalability.</li>
              <li><b>State Channels or Sidechains:</b> Use state channels or sidechains to process transactions off-chain, settling the final state back on the main chain. These off-chain solutions enable complex, multi-step transactions without directly involving multiple shards, thus preserving atomic composability. This approach ensures that atomic composability is preserved while enabling scalability.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">Challenges and Limitations</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li><b>Increased Complexity:</b> Implementing mechanisms for cross-shard communication, locking, and two-phase commit protocols can add significant complexity to the system, potentially introducing new attack vectors or vulnerabilities. This complexity could potentially negate some of the scalability benefits of sharding.</li>
              <li><b>Performance Overhead:</b> Maintaining atomic composability across shards may introduce performance overhead, such as increased latency or decreased throughput, which could potentially negate some of the scalability benefits of sharding.</li>
              <li><b>Trust Assumptions:</b> Some solutions, like optimistic execution or off-chain processing, may require additional trust assumptions or introduce new trust models, which could be challenging to implement and maintain in a decentralized environment. This trust assumption could potentially introduce new vulnerabilities or risks to the system.</li>
              <li><b>Adoption and Standardization:</b> Achieving widespread adoption and standardization of atomic composability solutions across different blockchain networks and dApps may be difficult, potentially leading to fragmentation or compatibility issues. This could potentially lead to inconsistencies or conflicts between different implementations of atomic composability solutions, which could undermine the overall security and reliability of the blockchain.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Future Developments */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Future Developments and Research Directions</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
          <li>Improved Cross-Shard Communication Protocols: Research into more efficient and secure protocols for enabling cross-shard transactions and maintaining atomic composability.</li>
          <li>Hybrid Approaches: Exploring hybrid approaches that combine sharding with other scaling solutions, such as Layer 2 solutions or sidechains, to enhance atomic composability while maintaining scalability.</li>
          <li>Formal Verification and Testing: Developing formal verification methods and rigorous testing frameworks to ensure the correctness and reliability of atomic composability solutions, particularly in complex multi-shard environments.</li>
          <li>Decentralized Governance Models: Investigating decentralized governance models for coordinating and managing atomic composability solutions across different blockchain networks and dApps.</li>
          <li>Integration with Advanced Smart Contract Languages: Exploring the integration of atomic composability solutions with advanced smart contract languages and execution environments, enabling more sophisticated and composable decentralized applications.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-300 mb-2">Atomic composability is a crucial aspect of blockchain technology and decentralized applications, ensuring the integrity and reliability of complex multi-step operations. While scaling solutions like sharding introduce challenges in maintaining atomic composability, various strategies and approaches can be employed to address these challenges. As the blockchain ecosystem continues to evolve, ongoing research and development efforts will be essential to strike the right balance between scalability and atomic composability, enabling the creation of robust and reliable decentralized applications.</p>
      </div>

      {/* References */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Book className="w-7 h-7 text-orange-400" /> References</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
          <li><a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Nov 22) A Scalability Plan for Ergo <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
          <li><a href="https://www.ergoforum.org/t/ergo-protocol-research-and-client-development-roadmap/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Dec 21) Ergo protocol research and client development roadmap <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
          <li><a href="https://www.ergoforum.org/t/long-term-vision-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Sep 21) Long-term vision for Ergo <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
          <li><a href="https://www.ergoforum.org/t/network-congestion-on-jul-10th-2021/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Jul 21) Network congestion on Jul 10th, 2021 <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
          <li><a href="https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(May 20) Protecting mempool from computationally heavy transactions <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
          <li><a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(May 20) A Scalability Plan for Ergo <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
        </ul>
      </div>
    </>
  );
}

function AtomicComposabilityContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-6">
        <Lock className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Atomic Composability in Blockchain Systems
          </h1>
          <p className="text-xl text-gray-400">Why atomic composability is crucial for DeFi and scalable blockchains.</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Lock className="w-7 h-7 text-orange-400" /> Introduction</h2>
        <p className="text-gray-300">In the context of blockchain technology and decentralized applications (dApps), <b>atomic composability</b> refers to the ability to combine and execute multiple operations or transactions as a single, indivisible unit. This means that either all components of a multi-step process are executed successfully, or none of them are executed at all. Atomic composability is crucial for ensuring the integrity and reliability of complex operations, particularly in the realm of Decentralized Finance (DeFi).</p>
      </div>

      {/* Significance in DeFi */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">The Significance of Atomic Composability in DeFi</h2>
        <p className="text-gray-300">The open-source nature of DeFi allows for the integration, modification, and reuse of dApps, enabling a high degree of composability within the ecosystem. However, certain DeFi applications, such as flash loans and instant arbitrage, require a specific form of composability known as atomic composability. These applications involve multiple interconnected transactions that must execute atomically, ensuring that all related transactions either complete successfully or are entirely rolled back.</p>
        <div className="bg-neutral-900/60 border border-orange-400/20 rounded-lg p-4 mt-4">
          <b className="text-orange-300">Example:</b> In a flash loan scenario, a user borrows funds from a lending pool, trades those funds on a DEX, and then repays the loan with a profit, all within a single transaction. If any part of this process fails, the entire transaction must be reversed to prevent the user from retaining the borrowed funds without repayment.
        </div>
      </div>

      {/* Balancing Scalability and Atomic Composability */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Balancing Scalability and Atomic Composability</h2>
        <p className="text-gray-300">While blockchain technology aims to achieve scalability, it is equally important to maintain atomic composability at scale. Ergo addresses this challenge by optimizing the use of resources within existing blockchain platforms, rather than relying on unproven technologies. This approach ensures that atomic composability is preserved while enabling scalability.</p>
      </div>

      {/* Impact of Scaling Solutions */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">The Impact of Scaling Solutions on Atomic Composability</h2>
        <p className="text-gray-300">Scaling solutions often involve partitioning the blockchain platform into smaller sections, such as shards, or adding a new layer atop the base layer. However, if these solutions are not implemented correctly, they can disrupt the smooth interaction between assets and applications across different sections of the platform, potentially compromising atomic composability.</p>
      </div>

      {/* eUTXO Model and ErgoScript */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">The eUTXO Model and ErgoScript</h2>
        <p className="text-gray-300">Ergo's <b>eUTXO model</b>, in conjunction with the ErgoScript smart contract language, allows for the atomic execution of complex, multi-stage transactions within a single transaction. This ensures that all components of a transaction are executed in full or not at all, a fundamental aspect of atomic composability. ErgoScript enables the creation and execution of complex smart contracts with predictable outcomes, while leveraging the benefits of the UTXO (Unspent Transaction Output) model, such as statelessness, improved parallelism, and reliable data handling.</p>
      </div>

      {/* Layer 2 Solutions: Hydra State Channels */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Layer 2 Solutions: Hydra State Channels</h2>
        <p className="text-gray-300">Layer 2 solutions, such as <b>Hydra state channels</b>, contribute to atomic composability by facilitating communication across different heads (participants). This allows for the atomic execution of complex operations involving multiple state channel participants. This mechanism enables complex transactions to be executed off-chain, with the final state being settled on the main chain.</p>
      </div>

      {/* ACE: Enhancing the Execution of Complex Smart Contracts */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">ACE: Enhancing the Execution of Complex Smart Contracts</h2>
        <p className="text-gray-300">Ergo's ability to execute complex and composable smart contracts could be further enhanced by implementing concepts like <b>ACE (Asynchronous Contract Execution)</b>. ACE suggests decomposing smart contracts into smaller, concurrent tasks that can be executed independently, thereby improving overall performance and throughput. It allows one contract to safely invoke another contract executed by a different set of service providers, facilitating off-chain execution of interactive smart contracts with flexible trust assumptions and enhancing atomic composability.</p>
      </div>

      {/* Sharding and Its Impact on Atomic Composability */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><GitBranch className="w-7 h-7 text-cyan-400" /> Sharding and Its Impact on Atomic Composability</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">An Overview of Sharding</h3>
        <p className="text-gray-300">Sharding is a technique that divides a blockchain network into smaller sections, or shards, to enhance scalability. Each shard processes a subset of transactions independently. However, maintaining atomic composability, where all components of a multi-step transaction are executed in full or not at all, can be challenging in a sharded environment. This means that if any part of a transaction fails to execute atomically across all shards, it could lead to inconsistencies, such as assets being locked or lost, or operations being partially executed.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Example: Cross-Shard Transaction</h3>
        <div className="bg-neutral-900/60 border border-cyan-400/20 rounded-lg p-4 mb-2">
          <b className="text-cyan-300">Example:</b> Consider a scenario where a user wants to execute a transaction that involves assets and operations spanning multiple shards. If the transaction fails to execute atomically across all shards, it could lead to inconsistencies, such as assets being locked or lost, or operations being partially executed.
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Strategies for Preserving Atomic Composability in Sharding</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-orange-300 mb-2">Cross-shard Transactions</h4>
            <p className="text-gray-300">Establish a mechanism for secure and efficient communication between shards to enable cross-shard transactions. This mechanism ensures that all components of a multi-step transaction are either fully committed or rolled back, even when the transaction spans multiple shards.</p>
          </div>
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-cyan-300 mb-2">Locking Mechanisms</h4>
            <p className="text-gray-300">Introduce locking mechanisms to prevent double-spending and fraud during cross-shard transactions. Temporarily locking the assets involved until the transaction is complete can help preserve atomic composability.</p>
          </div>
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-orange-300 mb-2">Two-phase Commit Protocols</h4>
            <p className="text-gray-300">Employ two-phase commit protocols to coordinate cross-shard transactions. In the first phase, shards tentatively execute the transaction and lock the relevant assets. In the second phase, once all shards have confirmed the transaction, it is committed, and the locked assets are released. If any shard fails to confirm, the transaction is rolled back, and the locked assets are released.</p>
          </div>
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-cyan-300 mb-2">Optimistic Execution</h4>
            <p className="text-gray-300">Allow shards to optimistically execute transactions, assuming dependencies between shards are resolved. If conflicts arise later, the transaction can be rolled back, and the network can learn from the conflict to prevent similar issues in the future.</p>
          </div>
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-orange-300 mb-2">State Channels or Sidechains</h4>
            <p className="text-gray-300">Use state channels or sidechains to process transactions off-chain, settling the final state back on the main chain. These off-chain solutions enable complex, multi-step transactions without directly involving multiple shards, thus preserving atomic composability.</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Challenges and Limitations</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-orange-300 mb-2">Increased Complexity</h4>
            <p className="text-gray-300">Implementing mechanisms for cross-shard communication, locking, and two-phase commit protocols can add significant complexity to the system, potentially introducing new attack vectors or vulnerabilities.</p>
          </div>
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-cyan-300 mb-2">Performance Overhead</h4>
            <p className="text-gray-300">Maintaining atomic composability across shards may introduce performance overhead, such as increased latency or decreased throughput, which could potentially negate some of the scalability benefits of sharding.</p>
          </div>
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-orange-300 mb-2">Trust Assumptions</h4>
            <p className="text-gray-300">Some solutions, like optimistic execution or off-chain processing, may require additional trust assumptions or introduce new trust models, which could be challenging to implement and maintain in a decentralized environment.</p>
          </div>
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <h4 className="font-semibold text-cyan-300 mb-2">Adoption and Standardization</h4>
            <p className="text-gray-300">Achieving widespread adoption and standardization of atomic composability solutions across different blockchain networks and dApps may be difficult, potentially leading to fragmentation or compatibility issues.</p>
          </div>
        </div>
      </div>

      {/* Future Developments and Research Directions */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Future Developments and Research Directions</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>Improved Cross-Shard Communication Protocols</li>
          <li>Hybrid Approaches</li>
          <li>Formal Verification and Testing</li>
          <li>Decentralized Governance Models</li>
          <li>Integration with Advanced Smart Contract Languages</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
        <p className="text-gray-300">Atomic composability is a crucial aspect of blockchain technology and decentralized applications, ensuring the integrity and reliability of complex multi-step operations. While scaling solutions like sharding introduce challenges in maintaining atomic composability, various strategies and approaches can be employed to address these challenges. As the blockchain ecosystem continues to evolve, ongoing research and development efforts will be essential to strike the right balance between scalability and atomic composability, enabling the creation of robust and reliable decentralized applications.</p>
      </div>
    </div>
  );
}

function TransactionSpeedContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-6">
        <Cpu className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Transaction Speed & TPS in Blockchains
          </h1>
          <p className="text-xl text-gray-400">How fast can blockchains process transactions? What really matters for scalability?</p>
        </div>
      </div>

      {/* TPS Definition */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Cpu className="w-7 h-7 text-cyan-400" /> What is TPS?</h2>
        <p className="text-gray-300">The speed of transactions, commonly known as <b>Transactions Per Second (TPS)</b>, is a vital performance metric for blockchains. It quantifies the capacity of a blockchain to process transactions, expressed in transactions per second.</p>
      </div>

      {/* Network Bottlenecks and Consensus */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Network Bottlenecks and Consensus</h2>
        <p className="text-gray-300">The primary bottleneck for increasing TPS is the <b>peer-to-peer (p2p) network layer</b>. Proof-of-Work (PoW) is already an efficient timestamping protocol for the base layer (Layer 0) because it operates asynchronously, without the need for additional network messages. Many alternative consensus mechanisms require extra bandwidth, making them less efficient. For instance, the original Ouroboros consensus protocol generated large log files, although this was later improved in the Praos version using Verifiable Random Functions (VRF). However, relying on novel cryptographic primitives can be risky, especially when significant assets are involved.</p>
      </div>

      {/* Decentralization vs. TPS */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Decentralization vs. TPS</h2>
        <p className="text-gray-300">While TPS could be boosted by introducing measures like <b>supernodes</b> or eliminating <b>mempools</b>, as seen in projects like Solana and Avalanche, these approaches compromise the decentralization and integrity of the network. Therefore, if the goal is to maintain a truly decentralized cryptocurrency, these methods should be avoided.</p>
      </div>

      {/* Viable Solutions */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Viable Solutions</h2>
        <p className="text-gray-300">The remaining viable solution for improving TPS lies in <b>optimizing bandwidth usage</b> and implementing <b>Layer 2 solutions</b> and <b>sidechains</b>, also known as application-specific chains.</p>
      </div>

      {/* Comparative TPS Values */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Comparative TPS Values for Renowned Blockchains</h2>
        <p className="text-gray-300">To provide a perspective, here are the estimated TPS values for some of the leading blockchains:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-4">
            <ul className="list-disc pl-6 text-gray-300">
              <li><b>Bitcoin (BTC):</b> Roughly 7 TPS (Gobbel, 2017).</li>
              <li><b>Ethereum (ETH):</b> Roughly 15 TPS (Clincy et al., 2019)</li>
              <li><b>Ripple (XRP):</b> Roughly 1500 TPS (Clincy et al., 2019)</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-4">
            <ul className="list-disc pl-6 text-gray-300">
              <li><b>Cardano (ADA):</b> Roughly 7 TPS (Can reach up to 250 in controlled tests) (Stamoulis, 2021).</li>
              <li><b>Polkadot (DOT):</b> Roughly 1500 TPS (Hiemstra et al., 2021)</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mt-4">However, the conventional TPS metric only offers a glimpse into Ergo's true potential. It's not merely about the number of transactions; the <b>weight of the transaction</b> and the <b>computational cost limit per block</b> are equally important. These aspects are shaped by several dynamic factors, including the size of the network and the hardware resources available to miners.</p>
      </div>

      {/* Ergo's TPS and Technical Details */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Ergo's TPS and Technical Details</h2>
        <p className="text-gray-300">With the Node v5 already operational, Ergo's raw TPS is approximately <b>47.5 transactions/second</b>, with room for further enhancements. For an in-depth technical understanding of how this figure is derived, please refer to this report.</p>
      </div>

      {/* eUTXO Model Advantage */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">The Extended Unspent Transaction Output (eUTXO) Model Advantage</h2>
        <p className="text-gray-300">Ergo's transaction management system leverages the <b>Extended Unspent Transaction Output (eUTXO) model</b>, which outperforms the traditional UTXO model in terms of efficiency and flexibility. This model allows for multiple outputs in a single transaction, each potentially carrying different tokens. Moreover, Ergo is capable of handling complex DeFi transactions, thereby enabling a broad spectrum of DeFi applications within the network. By processing multiple token types per transaction output and facilitating the simultaneous execution of complex transactions within a block, Ergo significantly boosts its blockchain's performance and scalability.</p>
        <p className="text-gray-300 mt-2">The primary objective in scaling Ergo is to enhance TPS without compromising the fundamental principles and assurances typically linked with blockchain technology.</p>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState("roadmap");

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors border
              ${activeTab === tab.key
                ? "bg-orange-400 text-white border-orange-400"
                : "bg-neutral-900 text-gray-300 border-neutral-700 hover:bg-orange-300 hover:text-white"}`}
          >
            {tab.key === "roadmap" && <Flag className="w-4 h-4" />}
            {tab.key === "scaling" && <TrendingUp className="w-4 h-4" />}
            {tab.key === "layer0" && <Network className="w-4 h-4" />}
            {tab.key === "layer1" && <Layers className="w-4 h-4" />}
            {tab.key === "layer2" && <Zap className="w-4 h-4" />}
            {tab.key === "discussions" && <MessageSquare className="w-4 h-4" />}
            {tab.key === "atomic" && <Lock className="w-4 h-4" />}
            {tab.key === "txspeed" && <Cpu className="w-4 h-4" />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "roadmap" && (
        <div>
          {/* Hero Section */}
          <div className="mb-12 flex items-center gap-4">
            <Flag className="w-10 h-10 text-orange-400" />
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
                Ergo Development Roadmap & History
              </h1>
              <p className="text-xl text-gray-400">
                Ergo is a blockchain platform designed to provide a secure, efficient, and user-friendly environment for the development of decentralized applications and financial tools. This roadmap outlines the key milestones and objectives for the development and growth of the Ergo ecosystem.
              </p>
            </div>
          </div>

          {/* Vision & Key Features */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Star className="w-8 h-8 text-orange-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Vision & Key Features</h2>
              <p className="text-gray-300 mb-2">Ergo is a cutting-edge smart contract platform that provides secure, accessible, and decentralized financial tools to empower ordinary people. Utilizing a sophisticated scripting language and advanced cryptographic features, Ergo builds on fundamental blockchain principles to transform the concept of Contractual Money.</p>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>eUTXO Model: Allows UTXOs to carry arbitrary data and complex scripts, enabling advanced smart contracts</li>
                <li>Autolykos PoW Algorithm: ASIC-resistant and designed for fair mining, promoting decentralization</li>
                <li>Emission Schedule: Ensures a stable and predictable supply of ERG tokens</li>
                <li>NiPoPoWs: Enables efficient light clients, log-space mining, trustless sidechains, and enhances accessibility and decentralization</li>
                <li>ErgoScript: Supports clear and concise smart contract development with Σ-protocols</li>
                <li>Storage Rent: Mitigates blockchain bloat, incentivizes efficient storage usage, and contributes to long-term economic sustainability</li>
                <li>Turing-Complete Smart Contracts: Allows for complex on-chain computations and advanced dApp development</li>
                <li>Long-Term Economic Sustainability: Ensured through storage rent, transaction fees from DeFi, and subpool mining</li>
              </ul>
              <p className="text-gray-300">For more information please see the <Link href="/Docs/why-ergo" className="text-orange-300 underline hover:text-orange-200">Why Ergo?</Link> section.</p>
            </div>
          </div>

          {/* General Overarching Ergo Design and Implementation Roadmap */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <ListChecks className="w-8 h-8 text-cyan-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">General Overarching Ergo Design and Implementation Roadmap</h2>
              <ol className="list-decimal pl-6 text-gray-300 mb-2 space-y-1">
                <li><b>Phase 1: Foundations</b>
                  <ul className="list-disc pl-6">
                    <li>Start with the basic design of Ergo as digital gold (commodity money).</li>
                    <li>Introduce programmability features including crypto contracts, stealth addresses, arbitrarily complex signatures, mixing schemes.</li>
                    <li>Position Ergo as a basis for unstoppable, grassroots economies, serving as a decentralized CBDC for the people.</li>
                  </ul>
                </li>
                <li><b>Phase 2: Initial Experiments</b>
                  <ul className="list-disc pl-6">
                    <li>Conduct initial experiments to test functionality and user engagement.</li>
                    <li>Evaluate the outcomes considering the initial motivations.</li>
                  </ul>
                </li>
                <li><b>Phase 3: Defining Adoption</b>
                  <ul className="list-disc pl-6">
                    <li>Clarify the term "adoption" as it is often ambiguous in industry discussions.</li>
                    <li>Develop metrics or KPIs to measure adoption success.</li>
                  </ul>
                </li>
                <li><b>Phase 4: Scaling and Optimization</b>
                  <ul className="list-disc pl-6">
                    <li>P2P level optimizations and rework.</li>
                    <li>Consider pre-block commitments to transaction ordering (sub-blocks).</li>
                    <li>Aim to increase transactions per second (TPS) while maintaining security.</li>
                    <li>Constraints: flat P2P network, commodity hardware, no centralized data centers.</li>
                  </ul>
                </li>
                <li><b>Phase 5: Offloading Solutions</b>
                  <ul className="list-disc pl-6">
                    <li>Propose options for offloading transactions to Layer 2 or sidechains.</li>
                    <li>Introduce "Know Your Assumptions" (KYA) for security explanation.</li>
                  </ul>
                </li>
                <li><b>Phase 6: Convergence</b>
                  <ul className="list-disc pl-6">
                    <li>Multiple developments in scaling, optimization, and offloading converge for widespread adoption.</li>
                  </ul>
                </li>
              </ol>
              <p className="text-gray-400 text-sm mt-2">Summarised from Kushti, 7 Aug, 2023</p>
            </div>
          </div>

          {/* Scaling Ergo */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <TrendingUp className="w-8 h-8 text-orange-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Scaling Ergo</h2>
              <p className="text-gray-300 mb-2">Creating a scalable blockchain infrastructure is a complex task. Ergo, fortified by a decade of research, rigorous testing, and ongoing development, has risen to the challenge. This guide will walk you through Ergo's sophisticated scalability features.</p>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Cryptoeconomic incentive model: Ensures miners receive suitable rewards for scaling costs.</li>
                <li>Consensus model: Determines feasibility of scalability solutions (e.g., PoS vs PoW).</li>
                <li>Accounting model: Management of transactions and operations (eUTXO vs Account model).</li>
              </ul>
              <p className="text-gray-300 mb-2">Ergo's eUTXO model creates transactions off-chain and validates on-chain, reducing node load and increasing efficiency. Light-verifying nodes further boost scalability and accessibility.</p>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Layer 0: The Network or Peer-to-Peer Layer</li>
                <li>Layer 1: The Core Blockchain Layer</li>
                <li>Layer 2: The Off-chain Layer</li>
              </ul>
              <p className="text-gray-300">These layers work in harmony to enhance Ergo's scalability, making it a flexible and potent choice for both developers and users.</p>
            </div>
          </div>

          {/* Who develops Ergo? */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Users className="w-8 h-8 text-cyan-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Who develops Ergo?</h2>
              <p className="text-gray-300 mb-2">Ergo is developed by a combination of the Ergo Foundation, community developers, and the recently launched DevDAO.</p>
              <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200 transition flex items-center">See the code repositories supported by the Ergo Foundation <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a>
            </div>
          </div>

          {/* Ergo Timeline */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Calendar className="w-8 h-8 text-orange-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Ergo Timeline</h2>
              {/* Timeline content here, with years and milestones as nested lists */}
              <div className="space-y-6">
                {/* 2019 */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">2019: Genesis Year</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>July 1: Ergo mainnet launched during the "crypto winter"</li>
                    <li>Autumn: Ergo Foundation established</li>
                    <li>First tools and libraries emerged</li>
                    <li>Inaugural crowdfunding using UTXOs and smart contracts</li>
                    <li>Zero-join paper published</li>
                    <li>Multi-stage contracts paper by Amitabh released</li>
                    <li>First smart contract formally verified</li>
                  </ul>
                </div>
                {/* 2020 */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">2020: Foundation Building</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>January 7: Introduction of the Ergo Foundation as a community-driven entity</li>
                    <li>Ergo Mixer (initially a raw application, later improved by Anon2020)</li>
                    <li>Late August: Oracle pools</li>
                    <li>Zero-knowledge treasury by anon_real</li>
                    <li>Auction House</li>
                    <li>Collaboration with Emurgo for joint research (Oracle Pools, SigmaUSD, headless dApp framework)</li>
                    <li>Listings: CoinEx, Gate.io</li>
                    <li>Roadmap released and Discord community initiated</li>
                  </ul>
                </div>
                {/* 2021 */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">2021: Expansion and Recognition</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>Q1: SigmaUSD launched</li>
                    <li>Spectrum DEX and DeFi ecosystem development began</li>
                    <li>Autolykos v2 hard fork: opened Ergo to mining pools, improved liquidity and brought many new users</li>
                    <li>Collaboration with Jinse, Chinese community expanded to 10,000+ members</li>
                    <li>Listed on KuCoin and Changelly</li>
                    <li>UTXO Alliance formed</li>
                    <li>Inaugural Ergo Summit and two hackathons</li>
                    <li>EIP-27 discussions initiated</li>
                    <li>US Legal Opinion obtained on Ergo's security classification</li>
                    <li>December 19: Ergo Foundation incorporated in Singapore</li>
                    <li>Joseph Armeanio and Mark Glasgow join Ergo Foundation</li>
                    <li>Daniel Friedman (IOHK) appointed Advisor to Ergo Foundation Board</li>
                    <li>EF hired wallet developers to alleviate users' lack of usable wallet options</li>
                  </ul>
                </div>
                {/* 2022 */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">2022: Technical Advancements</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>EIP-27 (emission soft-fork) implemented</li>
                    <li>EIP-37 (difficulty retargeting hard fork) implemented</li>
                    <li>Listed on Indodax, Huobi, Bittrue</li>
                    <li>Parallel asset launched on Flux</li>
                    <li>Sigmanauts Program launched</li>
                    <li>Two summits and three hackathons held</li>
                    <li>ergoplatform.org and sigmaverse.io redesigned and relaunched</li>
                    <li>Node V5 with JITC released</li>
                    <li>Warwick (CW), Stacie, and Alison Robson joined as EF Officers</li>
                    <li>Open source economy pitch deck created</li>
                  </ul>
                </div>
                {/* 2023 */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">2023: Ecosystem Flourishing</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>Significant donations to EF Treasury from ecosystem projects</li>
                    <li>Storage rent activation</li>
                    <li>Sigmanauts: sigmanauts.com launches, voting rework, mission statement published, events, treasury, Twitter management</li>
                    <li>Bitpanda, nonkyc.io, Koinly, StealthEx integrations</li>
                    <li>Sigma.js, UTXO Set Snapshots, bootstrapping with NiPoPoWs, SigmaState advancements</li>
                    <li>Kushti's scalability plan and sub-block confirmation protocol work</li>
                    <li>Pruned Full Node, Plasma Library, ergo-lib-go, uExplorer, FleetSDK, Ledger support, Oracles v2</li>
                    <li>Ergo Summit 2023, ErgoVersary 2023, ErgoHack VI and VII</li>
                    <li>Erg0ne, Sigmanauts @ NFTxLV, Sigmanauts mining pool</li>
                    <li>ergexplorer, Off-The-Grid, DeFi: Rosen Lite, SigmaFi, Duckpools, AuctionHouse v3, AuctionCoin, Hodlcoin & PhoenixFinance, Spectrum Finance yield farming, Hodlbox, Lilium, single-tx-swap, EXLE MVP, TabbyPOS, Crux Finance MVP, SigmaO options trading platform</li>
                  </ul>
                </div>
                {/* 2024 */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">2024: Future Horizons (In Progress and Planned)</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>Ongoing work to define rules for new releases and research-driven development frameworks</li>
                    <li>Encouragement of new stakeholder organizations within the Ergo ecosystem</li>
                    <li>ErgoHack VIII - Ergo as a Smart Layer</li>
                    <li>DAO for Ergo core</li>
                    <li>Ergo achieved #1 in TVL% of market cap for a PoW chain</li>
                    <li>Ergo listed on MEXC exchange</li>
                    <li>Node improvements: migration to RocksDB, 6.0.0-alpha1, AVL+ Tree optimizations</li>
                    <li>Sigma protocol updates: Sigma 5.0.14, Sigma 6.0.0, scrypto 3.0.0</li>
                    <li>Infrastructure: Sigmaspace indexer, explorer API, storage rent dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones & Achievements */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Trophy className="w-8 h-8 text-cyan-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Milestones & Achievements</h2>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoHack VIII - Ergo as a Smart Layer</li>
                <li>DAO for Ergo core</li>
                <li>Ergo achieved #1 in TVL% of market cap for a PoW chain</li>
                <li>Ergo listed on MEXC exchange</li>
                <li>Node improvements: migration to RocksDB, 6.0.0-alpha1, AVL+ Tree optimizations</li>
                <li>Sigma protocol updates: Sigma 5.0.14, Sigma 6.0.0, scrypto 3.0.0</li>
                <li>Infrastructure: Sigmaspace indexer, explorer API, storage rent dashboard</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">Sigmanauts Achievements</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sigmanauts Mining Pool launch</li>
                <li>Storage rent integration completed for Sigmanauts Mining Pool</li>
                <li>First proposal on Paideia passes (January 2024)</li>
                <li>Official takeover of Market-Making services management (March 2024)</li>
                <li>Substantial EF grant received matching Sigmanauts-raised funds (March 2024)</li>
              </ul>
            </div>
          </div>

          {/* Application Achievements */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Wrench className="w-8 h-8 text-orange-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Application Achievements</h2>
              <h3 className="text-xl font-semibold mb-2">Wallet Developments</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Nautilus Wallet improvements: v0.15.0, new frontend, Firefox compatibility, asset ranking, dApp docs</li>
                <li>Minotaur Wallet: v2.0.1 production release</li>
                <li>Satergo Wallet: 3x faster history, new Ergonnection, easier Windows install</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Infrastructure & Tools</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sigmaspace: full blockchain indexer, storage rent dashboard, explorer API</li>
                <li>Lithos: client dev, fraud proofs for NISPs</li>
                <li>Rosen Bridge: improved decimals, API & UI</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">DeFi Applications</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaUSD: stability improvements, oracle upgrades</li>
                <li>Fleet SDK: AgeUSD integration, toolkit upgrades</li>
                <li>Celaut, Bene fundraising, and more</li>
              </ul>
            </div>
          </div>

          {/* Development Focus */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Wrench className="w-8 h-8 text-cyan-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Development Focus</h2>
              <h3 className="text-xl font-semibold mb-2">Reference Client</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sub-blocks implementation, candidate generation, block template regeneration</li>
                <li>P2P layer optimization, bootstrapping, sidechain modularization</li>
                <li>RocksDB integration, enhanced testing</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Sigma</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sigma 6.0 implementation, validation context extension</li>
                <li>Signature re-checking optimization, ErgoScript 2.0, EIP-0046/47/44</li>
                <li>Bulletproofs, Rust/JS support, high-level language support, improved debugging</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">SDKs, Libraries & Tooling</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>AppKit, FleetSDK, sigma-rust, JIT costing, Sigma.js</li>
                <li>ergo-lib-go, escript.online, Lithos light-client integration</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Mining Ecosystem</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Lithos decentralized mining pool launch (2024)</li>
                <li>Fair Initial Mining Offerings (FIMOs)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Wallets</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Nautilus: Manifest v3 rework</li>
                <li>Ledger: developer mode, Keystone integration, EIP-12/20, Metamask, Trustwallet, Light SPV</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Ecosystem Growth</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>DeFi expansion, NFT platform improvements, new protocols</li>
                <li>UX/UI improvements, onboarding, documentation</li>
              </ul>
            </div>
          </div>

          {/* Ongoing Challenges */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Shield className="w-8 h-8 text-orange-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Ongoing Challenges</h2>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Scalability improvements (Layer 1 & 2), sub-blocks, Layer 2 solutions</li>
                <li>P2P optimization, bootstrapping, transaction processing</li>
                <li>Usability: wallet/dApp UX, developer tools, onboarding</li>
                <li>Security: vulnerability assessment, protocol & contract security, audits</li>
                <li>Ecosystem: accessibility, listings, team coordination, contribution process</li>
                <li>Technical debt: code quality, performance, architecture, docs</li>
              </ul>
            </div>
          </div>

          {/* DeFi Ecosystem */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Coins className="w-8 h-8 text-cyan-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">DeFi Ecosystem</h2>
              <h3 className="text-xl font-semibold mb-2">Decentralized Exchanges</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoDex (AMM + Yield Farming)</li>
                <li>ErgoAuctionHouse (peer-to-peer auctions)</li>
                <li>Trade House (orderbook-based P2P DEX)</li>
                <li>SkyHarbor (NFT Market), SkyHarbor Raffle, single-tx-swap, TokenJay, Crooks Finance, PalmyraComDex, Crystal Pool, Machina Finance, Mew Finance</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Stablecoins</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaUSD (Djed protocol), SigmaUSD v2</li>
                <li>Gluon (gold stablecoin)</li>
                <li>DexyGold (seigniorage stablecoin)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Lending and Borrowing</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaFi (peer-to-peer loans via bonds)</li>
                <li>Duckpools (lending pools), optionPools, EXLE (uncollateralized lending)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Gaming and Metaverse</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>BlitzTCG (trading card game)</li>
                <li>CyberVerse (metaverse gaming platform), Cyberverse Multiplayer</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Derivatives and Synthetics</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaO (trustless options), HodlCoin, AuctionCoin, Hodlbox, OptionCoin, ChainCash</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Crowdfunding</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoRaffle (decentralized crowdfunding), V2 features</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Interoperability and Bridges</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Oracle Pools, Rosen Bridge (ADA, BTC, EVM, DOGE, BCH, Runes, RosenFast, Bridge SDK, Hummingbot)</li>
                <li>Sigma Chains, trustless relays, sidechains, sharding, ERG/tokens on sidechains, launching apps on sidechains</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Privacy and Mixing</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoMixer, Stealth addresses, SigmaJoin, privacy-preserving voting</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">DAOs and Governance</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Paideia, Lithos, The Field</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Tooling</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Lilium, Moria Finance, Trustless Relys, RNG, TabbyPOS, Crux Finance, ErgoNames, Reputation System</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Miner Tooling</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>GuapSwap, CYTI, Lithos, Smartpools</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Other Infrastructure</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ergexplorer, sigmaspace</li>
              </ul>
            </div>
          </div>

          {/* References */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
            <Book className="w-8 h-8 text-orange-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">References</h2>
              <p className="text-gray-300 mb-2">Developing Digital Gold 2.0 and its Infrastructure</p>
              <p className="text-gray-300 mb-2">The following is adapted from this post on the R&D DAO for Ergo Core thread.</p>
              <p className="text-gray-300 mb-2">Vision: The Ergo Core Dev DAO envisions Ergo as Digital Gold 2.0, a mineable digital commodity with trustless derivatives and expressive contracts. By building upon Ergo's robust DeFi ecosystem and introducing sidechains, we aim to expand the decentralized monetary base and derivative money supply, creating a more inclusive and accessible financial system for the Ergo community and beyond.</p>
              <h3 className="text-xl font-semibold mb-2">Completed Milestones</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaUSD stablecoin (Djed protocol)</li>
                <li>Spectrum DEX (AMM-based)</li>
                <li>ErgoMixer (non-interactive, non-custodial mixer)</li>
                <li>ErgoAuctionHouse (peer-to-peer auctions)</li>
                <li>SigmaFi (peer-to-peer loans via bonds)</li>
                <li>Duckpools (lending pools)</li>
                <li>ErgoRaffle (decentralized crowdfunding)</li>
                <li>EXLE (uncollateralized lending)</li>
                <li>SigmaO (trustless options)</li>
                <li>HodlCoin (trustless ERG derivative with non-declining price)</li>
                <li>AuctionCoin (emission via auctions)</li>
                <li>Oracle Pools (federated transparent data providing)</li>
                <li>Rosen Bridge (two-layered federated bridge)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Upcoming Milestones</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Paideia, Dexy/Gluon, ChainCash, Analog Ergo, OptionCoin</li>
                <li>Implementing sidechains, trustless transfers, consensus mechanisms</li>
                <li>Expanding contractual layer to sidechains, Bulletproofs, first-class contracts</li>
                <li>Sharding on sidechains, ERG/tokens on sidechains, launching apps on sidechains</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Monetization Strategies for ErgoDevs DAO</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Receiving a percentage of sidechain token emissions</li>
                <li>Consultancy services and support for launching applications on sigma chains</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li><a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Nov 22) A Scalability Plan for Ergo <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
                <li><a href="https://www.ergoforum.org/t/ergo-protocol-research-and-client-development-roadmap/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Dec 21) Ergo protocol research and client development roadmap <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
                <li><a href="https://www.ergoforum.org/t/long-term-vision-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Sep 21) Long-term vision for Ergo <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
                <li><a href="https://www.ergoforum.org/t/network-congestion-on-jul-10th-2021/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Jul 21) Network congestion on Jul 10th, 2021 <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
                <li><a href="https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(May 20) Protecting mempool from computationally heavy transactions <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
                <li><a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(May 20) A Scalability Plan for Ergo <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {activeTab === "scaling" && <ScalingContent />}
      {activeTab === "layer0" && <Layer0Content />}
      {activeTab === "layer1" && <Layer1Content />}
      {activeTab === "layer2" && <Layer2Content />}
      {activeTab === "discussions" && <DiscussionsContent />}
      {activeTab === "atomic" && <AtomicComposabilityContent />}
      {activeTab === "txspeed" && <TransactionSpeedContent />}
    </>
  );
} 