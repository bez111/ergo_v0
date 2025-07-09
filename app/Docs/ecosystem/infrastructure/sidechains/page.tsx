"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  GitBranch, Info, Zap, Shield, Layers, CheckCircle, Star, 
  Settings, ChevronDown, ChevronUp 
} from "lucide-react";

export default function SidechainsPage() {
  return (
    <>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
          <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
            <Info className="w-4 h-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="sub-blocks" className="flex items-center gap-2 justify-center">
            <Layers className="w-4 h-4" /> Sub Blocks
          </TabsTrigger>
          <TabsTrigger value="sigma-chains" className="flex items-center gap-2 justify-center">
            <GitBranch className="w-4 h-4" /> Sigma Chains
          </TabsTrigger>
          <TabsTrigger value="pouw" className="flex items-center gap-2 justify-center">
            <Shield className="w-4 h-4" /> PoUW
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 flex items-center gap-3">
              <GitBranch className="w-8 h-8 text-orange-400" /> Sidechains on Ergo: Leveraging Sigma Chains and NiPoPoWs
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Ergo's robust architectural design supports the innovative development of sidechains through the Sigma Chains framework, incorporating Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) to ensure efficient and secure cross-chain interaction. This document explores the concept of sidechains within the Ergo ecosystem, emphasizing their utility, the implementation of Sigma Chains, and how NiPoPoWs facilitate robust sidechain functionality.
            </p>

            <h2 className="text-2xl font-bold text-orange-300 mb-3 mt-8">Recent Developments</h2>
            <p className="text-gray-300 mb-4">Explore recent advancements in sidechain technology through the ErgoHack VII project, which focuses on implementing sidechains in Ergo.</p>

            <h2 className="text-2xl font-bold text-cyan-300 mb-3 mt-8">What is a Sidechain?</h2>
            <p className="text-gray-300 mb-4">A sidechain is a separate blockchain that is connected to a main chain via a two-way peg. This connection allows for the transfer of assets between the main and side chains under different rules or functionalities, enabling sidechains to operate independently while enhancing the overall scalability and flexibility of the main chain.</p>

            <h2 className="text-2xl font-bold text-orange-300 mb-3 mt-8">Sigma Chains: A Framework for Sidechains on Ergo</h2>
            <p className="text-gray-300 mb-4">Sigma Chains are a specialized implementation framework for sidechains on Ergo, designed to provide enhanced programmability, cross-chain compatibility, and economic sustainability. They enable a wide range of applications by allowing each sidechain to maintain customized features while securing robust connectivity to the Ergo main chain.</p>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Key Benefits of Sigma Chains:</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><b>Programmability:</b> Support for complex smart contracts, enabling applications ranging from DeFi to digital identities.</li>
              <li><b>Cross-Chain Compatibility:</b> Facilitates seamless interactions between Ergo and other blockchain networks, enhancing liquidity and interoperability.</li>
              <li><b>Economic Sustainability:</b> Incorporates mechanisms such as storage rent and demurrage within sidechains, ensuring long-term economic viability.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cyan-300 mb-3 mt-8">Non-Interactive Proofs of Proof-of-Work (NiPoPoWs)</h2>
            <p className="text-gray-300 mb-4">NiPoPoWs are critical cryptographic components that enable sidechains to verify the state of the main chain efficiently and securely without requiring the entire chain's data. They are particularly beneficial for lightweight clients and are instrumental in reducing the computational burden on sidechain systems.</p>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Applications of NiPoPoWs in Sidechains:</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><b>Efficient Block Verification:</b> Allows sidechains to verify main chain block headers efficiently, negating the need for full blockchain downloads.</li>
              <li><b>Scalability and Security:</b> Supports scalability solutions like state channels and provides a security mechanism to verify off-chain transactions securely.</li>
            </ul>

            <h2 className="text-2xl font-bold text-orange-300 mb-3 mt-8">Implementing Two-Way Pegged Sidechains on Ergo</h2>
            <p className="text-gray-300 mb-4">The Sigma Chains framework facilitates the development of two-way pegged sidechains by providing a clear structure for asset transfers and state synchronization between the Ergo main chain and sidechains.</p>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Implementation Steps:</h3>
            <ul className="list-decimal pl-6 text-gray-300 mb-4">
              <li><b>Initiating the Transfer:</b> Users lock assets into a contract on the Ergo main chain, initiating their transfer to the sidechain.</li>
              <li><b>Operating Independently:</b> The sidechain, utilizing Sigma Chains, operates under its own rules and issues corresponding assets to the user.</li>
              <li><b>Secure Asset Return:</b> To transfer assets back, the sidechain burns its tokens and provides proof of this action to the main chain, which then unlocks the original assets.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cyan-300 mb-3 mt-8">Security and Data Considerations</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><b>Robust Consensus Mechanisms:</b> Essential for preventing fraud and ensuring the integrity of transactions across the Ergo network.</li>
              <li><b>Data Storage on Main Chain:</b> Critical transaction and state data are stored on the main chain, ensuring that interactions are verifiable and secure.</li>
            </ul>

            <h2 className="text-2xl font-bold text-orange-300 mb-3 mt-8">Conclusion</h2>
            <p className="text-gray-300 mb-4">Sigma Chains and NiPoPoWs together provide a powerful and flexible framework for implementing sidechains on the Ergo platform. By enhancing the programmability, economic sustainability, and cross-chain compatibility of sidechains, these technologies help foster a scalable, interoperable, and robust blockchain ecosystem. As Ergo continues to evolve, the integration of these advanced technologies will be pivotal in driving innovation and adoption in the broader blockchain space.</p>
          </div>
        </TabsContent>

        {/* Sub Blocks Tab */}
        <TabsContent value="sub-blocks">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Subblocks in Ergo
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              With the introduction of sub-blocks (input blocks) and ordering blocks, Ergo achieves near-instant transaction confirmations and a more cooperative mempool, dramatically improving user experience and network responsiveness.
            </p>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <blockquote className="text-xl italic text-center text-gray-300">
              "Sub-blocks (input blocks) are produced every second and carry most transaction data, allowing confirmations in ~2 seconds. Ordering blocks (full blocks) are generated every 2 minutes and maintain consensus and security."
            </blockquote>
          </div>

          {/* Core Concepts Grid */}
          <div className="flex flex-col gap-6 mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 transition-shadow hover:shadow-[0_0_0_2px_rgba(34,211,238,0.3)] focus-within:shadow-[0_0_0_2px_rgba(34,211,238,0.5)] mb-4">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-7 h-7 text-orange-400" />
                <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">What Are Sub-blocks and Ordering Blocks?</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-x-6 gap-y-4 items-start">
                <div className="flex items-center gap-2 font-bold text-lg text-gray-100">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Sub-blocks (Input Blocks):
                </div>
                <div className="text-gray-300 text-base">
                  Produced every second, lower difficulty, carry most transaction data, enable fast confirmations.
                </div>
                <div className="flex items-center gap-2 font-bold text-lg text-gray-100">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Ordering Blocks:
                </div>
                <div className="text-gray-300 text-base">
                  Traditional full blocks, every 2 minutes, maintain consensus and security.
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-400 italic">
                See <a href="#" className="text-cyan-400 underline">this document</a> for naming details.
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 transition-shadow hover:shadow-[0_0_0_2px_rgba(34,211,238,0.3)] focus-within:shadow-[0_0_0_2px_rgba(34,211,238,0.5)]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-7 h-7 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Enhanced User Experience</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-x-6 gap-y-4 items-start">
                <div className="flex items-center gap-2 font-bold text-lg text-gray-100">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Rapid Onchain Confirmations:
                </div>
                <div className="text-gray-300 text-base">
                  Most transactions confirm in ~2 seconds via sub-blocks. Ordering blocks still required for final settlement.
                </div>
                <div className="flex items-center gap-2 font-bold text-lg text-gray-100">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Faster Failure Detection:
                </div>
                <div className="text-gray-300 text-base">
                  Transaction failures detected in ~2 seconds (vs. up to 6 minutes before).
                </div>
                <div className="flex items-center gap-2 font-bold text-lg text-gray-100">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Cooperative Mempool:
                </div>
                <div className="text-gray-300 text-base">
                  Mempool shifts from competitive to cooperative, improving network responsiveness.
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" /> In a Nutshell
            </h3>
            <p className="text-gray-300 mb-2">
              Ergo’s sub-blocks and ordering blocks significantly improve transaction speed and reliability, providing users with near-instant confirmations and faster failure detection for a smoother, more efficient network experience.
            </p>
            <p className="text-gray-400 text-sm italic">
              For a deep dive into the technical details behind these changes, see <a href="#" className="text-cyan-400 underline">the technical details</a>.
            </p>
          </div>

          {/* Technical Details Accordion */}
          <div className="mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
              <details className="group">
                <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
                  <span className="inline-block">
                    <Settings className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
                  </span>
                  <span>Technical Details</span>
                  <span className="ml-auto">
                    <ChevronDown className="w-7 h-7 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-cyan-400" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-300 space-y-6">
                  <section>
                    <h4 className="text-base font-bold mb-2 text-cyan-300">Input Blocks and Ordering Blocks – Technical Details</h4>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Background on the Legacy System</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Previous Process:</b> Transactions from wallets enter a common mempool. Miners select and include them in blocks produced approximately every 2 minutes. These blocks contain full proof-of-work (PoW), enforce consensus, and settle transactions.</li>
                      <li><b>Replace-By-Fee (RBF):</b> RBF allows a user to rebroadcast a transaction with a higher fee to increase inclusion chances or refund the sender if it fails. Under high network congestion, RBF can cause delays or confusion, particularly for dApps like SigmaUSD which rely on timely confirmations.</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Limitations</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Unpredictable Confirmation Times:</b> Due to natural PoW variance, a transaction might take anywhere from 2 to 10 minutes to confirm, even under normal conditions.</li>
                      <li><b>Poor UX in Wallets and dApps:</b> Users face friction from waiting, multiple signing attempts, and retries, which degrades trust and usability.</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Introducing Input Blocks and Ordering Blocks</h5>
                    <p className="mb-2">Following ideas in PRISM, Bitcoin-NG, Tailstorm, and Parallel Proof-of-Work, Ergo introduces a dual-block architecture via a soft fork that maintains backward compatibility.</p>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Redefining the Block Structure</h5>
                    <div className="mb-2">
                      <p className="mb-1">In traditional Ergo:</p>
                      <pre className="bg-neutral-800 rounded p-3 text-sm overflow-x-auto">H(b) &lt; T
  H(b) is the hash of the block header under Autolykos
  T is the target value for PoW
  Difficulty D = 2^256 / T, adjusted to maintain ~2-minute block intervals</pre>
                      <p className="mb-1">This rule continues to define ordering blocks, but Ergo now introduces input blocks with a lower difficulty threshold:</p>
                      <pre className="bg-neutral-800 rounded p-3 text-sm overflow-x-auto">H(ib) &lt; t   where   t = T / 64</pre>
                      <p>This allows miners to produce approximately one input block every second, on average, for each ordering block cycle.</p>
                    </div>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">The Role of Superblocks</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li>A level-n superblock must satisfy: <span className="font-mono">H(S) &lt; T / 2^n</span></li>
                      <li>Every superblock is a valid ordering block</li>
                      <li>Higher-level superblocks are rarer and used in succinct chain proofs</li>
                      <li>Useful for mobile wallets and sidechains needing trust-minimized verification</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Input Blocks and Their Mechanics</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Ordering Blocks:</b> Full PoW blocks that anchor consensus, produced every ~2 minutes. They finalize the inclusion of input blocks and distribute rewards.</li>
                      <li><b>Input Blocks (Sub-blocks):</b> Low-difficulty blocks generated approximately every second, used for fast transaction propagation. They are not consensus anchors but allow for near-instant detection of transaction inclusion.</li>
                    </ul>
                    <pre className="bg-neutral-800 rounded p-3 text-sm overflow-x-auto">ordering block → input block → input block → input block → ordering block → input block → ...
Each ordering block is valid as an input block, but not vice versa</pre>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Transaction Classes</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>First-Class Transactions:</b> Deterministic and miner-independent, these transactions yield consistent validation across all miners and can safely be included in input blocks only.</li>
                      <li><b>Second-Class Transactions:</b> May rely on miner-specific data (timestamps, pubkeys, etc.) and are included in both input and ordering blocks to ensure consistency.</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Merkle Trees and Digest Extensions</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Miners maintain Merkle roots for all first-class transactions since the last ordering block and for transactions in each individual input block</li>
                      <li>These roots are embedded in block header extensions to enable efficient proof construction and light client validation</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Block Propagation Protocol</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Header Announcements:</b> Each input block header is announced immediately, along with its parent input block ID.</li>
                      <li><b>Verification:</b> Peers request introspection messages (similar to Compact Blocks in Bitcoin) to verify Merkle digests without downloading full block data.</li>
                      <li><b>Cut-through Propagation:</b> Redundant data across input blocks is eliminated to optimize bandwidth and speed.</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Incentives and Rewards</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Input Blocks:</b> Miners collect transaction fees from first-class transactions included in input blocks.</li>
                      <li><b>Ordering Blocks:</b> Miners earn full block rewards, second-class transaction fees, and storage rent/emission rewards.</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Upgrade Process</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Soft Fork Activation:</b> Backward-compatible upgrade. Legacy nodes continue to process ordering blocks. Input blocks are only utilized after 90% of hashpower adopts the upgrade.</li>
                      <li><b>Steps:</b>
                        <ul className="list-disc pl-6">
                          <li>Introduce input blocks alongside ordering blocks</li>
                          <li>Upgrade mining software</li>
                          <li>Adjust transaction validation logic and fee scripts</li>
                          <li>Update dApp interfaces for faster feedback</li>
                          <li>Enable sidechain commitments within input blocks</li>
                        </ul>
                      </li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">Security Considerations</h5>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Input Block Validation:</b> All ordering blocks must validate preceding input blocks. Invalid transactions are not finalized.</li>
                      <li><b>Dual Confirmation Model:</b> Input blocks offer fast, provisional feedback. Final settlement still relies on inclusion in an ordering block.</li>
                    </ul>
                  </section>
                  <section>
                    <h5 className="font-semibold mb-1 text-orange-300">TLDR</h5>
                    <p>Input blocks provide rapid, low-cost transaction propagation (~1s), greatly improving user feedback without altering the security guarantees of Ergo’s existing PoW system. Ordering blocks retain finality and economic incentives, while superblocks support long-range verification. This architecture balances performance, security, and decentralization.</p>
                  </section>
                </div>
              </details>
            </div>
          </div>
        </TabsContent>

        {/* Sigma Chains Tab */}
        <TabsContent value="sigma-chains">
          {/* Hero Section */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Sigma Chains
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Sigma Chains represent a groundbreaking innovation designed to revitalize Proof of Work (PoW) and solidify Ergo's position as a programmable, cross-chain, and sustainable blockchain hub.
            </p>
          </div>

          {/* What are Sigma Chains */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-orange-300">What are Sigma Chains?</h2>
            <p className="text-gray-300 mb-3">
              Sigma Chains are a series of blockchains that share the same contractual base layer, while allowing for different chain-specific features and customization. They represent a universe of programmable money, offering a compelling alternative to the EVM for PoW and UTXO-based blockchains.
            </p>
            <p className="text-gray-300 mb-3">
              The Sigma Chain standard has already proven its success in the PoW and UTXO setting, with Ergo currently ranking as the #1 PoW blockchain in TVL relative to market cap. Sigma Chains are designed to operate as a cross-chain standard, enabling seamless interoperability and trust-minimized communication between different blockchains through advanced cryptographic techniques such as zero-knowledge proofs and threshold signatures.
            </p>
          </div>

          {/* Ergo at the Center */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">Ergo at the Center of Sigma Chains</h2>
            <p className="text-gray-300 mb-3">
              Sigma Chains are built upon the robust foundation of Ergo, leveraging its advanced features and technologies to create a thriving network of interconnected blockchains. With different pegging mechanisms, Sigma Chains offer more flexibility compared to other blockchain ecosystems like Cosmos and Polkadot.
            </p>
            <p className="text-gray-300 mb-3">
              Sigma Chains also place a strong emphasis on cross-chain security, prioritizing a robust and well-defined security model. This ensures the interconnected network of blockchains remains resilient and resistant to attacks, providing a secure environment for users and developers alike.
            </p>
            <p className="text-gray-300">
              The growth of Sigma Chains will accelerate development and increase Ergo's mindshare, attracting more talent, resources, and innovation to the ecosystem.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Key Features of Sigma Chains
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Programmability</h4>
                <p className="text-gray-300 text-sm mb-2">Support for complex smart contracts and DApps using ErgoScript, enabling a wide range of applications from DeFi to digital identities.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Cross-Chain Compatibility</h4>
                <p className="text-gray-300 text-sm mb-2">Facilitates seamless interactions between Ergo and other blockchain networks, enhancing liquidity and interoperability. Enables trustless value pegging between chains.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Sustainability</h4>
                <p className="text-gray-300 text-sm mb-2">Introduces storage rent and demurrage for long-term economic sustainability. Storage fees serve as additional miner rewards and stimulate coin circulation.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Security & Decentralization</h4>
                <p className="text-gray-300 text-sm mb-2">Maintains robust PoW security and decentralized consensus. Sigma protocols enable true peer-to-peer privacy and censorship resistance.</p>
              </div>
            </div>
          </div>

          {/* Revitalizing Proof of Work with Merged Mining */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-orange-300">Revitalizing Proof of Work with Merged Mining</h2>
            <p className="text-gray-300 mb-3">
              Sigma Chains introduce an innovative approach to PoW through merged mining. Being algorithm agnostic, they attract unprofitable miners across ASIC, GPU, and CPU hardware, empowering them to contribute to the security and growth of the Ergo ecosystem.
            </p>
            <p className="text-gray-300">
              Merged mining allows Ergo miners to be paid in various tokens while still requiring ERG for transactions, creating a sustainable economic model that benefits both miners and the ecosystem.
            </p>
          </div>

          {/* Empowering Portable Projects and DApps */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">Empowering Portable Projects and DApps</h2>
            <p className="text-gray-300 mb-3">
              Sigma Chains enable the creation of portable projects and DApps that can interact across multiple blockchains. With built-in DeFi frameworks and dApps, projects can bootstrap faster and reward existing Ergo holders.
            </p>
            <p className="text-gray-300">
              Portable projects gain access to other on-chain markets, expanding their reach. The Sigma protocol suite provides a robust, modular framework for building complex financial applications across chains.
            </p>
          </div>

          {/* Architecture of Sigma Chains */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-orange-300">Architecture of Sigma Chains</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-3">
              <li>Layered architecture for complex applications with strong security and integrity.</li>
              <li>Uses extended UTXO model for privacy, scalability, interoperability, and cost predictability.</li>
              <li>Supports Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) for light clients and sidechains.</li>
              <li>Network parameters adjustable via decentralized miner voting.</li>
            </ul>
            <p className="text-gray-300">
              Sigma protocols enable advanced cryptographic operations and secure, versatile smart contracts.
            </p>
          </div>

          {/* Smart Contract Emissions with No Premine */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">Smart Contract Emissions with No Premine</h2>
            <p className="text-gray-300 mb-3">
              Sigma Chains introduce smart contract-based emissions, allowing for multiple treasuries built into the emission curve. This rewards investors, developers, and the community without premining.
            </p>
            <p className="text-gray-300">
              Protocol-based emissions can be structured to reward early investors and fund development, community, and marketing, ensuring long-term sustainability and growth.
            </p>
          </div>

          {/* Sidechain Constructions */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-orange-300">Sidechain Constructions</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-3">
              <li><b>Merged-Mined Sidechains:</b> Allow Ergo miners to mine both mainchain and sidechains, enabling efficient, trustless cross-chain interoperability. Smart contracts on Ergo can read sidechain data for secure pegging.</li>
              <li><b>Double Merged-Mined Sidechains:</b> Bridge Ergo with other PoW blockchains (e.g., Bitcoin) with minimal trust. Sigma Chain acts as a Bitcoin sidechain, enabling rich applications and secure pegging.</li>
              <li><b>Dedicated Mining Algorithms:</b> Support sidechains tailored to specific hardware, with dedicated PoW consensus and Sigma contractual layer. Relay contracts incentivize mainchain miners for submitting proper sidechain data.</li>
            </ul>
            <p className="text-gray-300">
              These constructions provide flexibility, security, and clear incentives for miners and developers.
            </p>
          </div>

          {/* Development Plan for Sigma Chains */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">Development Plan for Sigma Chains</h2>
            <ol className="list-decimal pl-6 text-gray-300 mb-3">
              <li><b>Sigma 6.0 Release:</b> Finalize and release Sigma 6.0 (code 95% complete and under review).</li>
              <li><b>Flexible Blockchain Context:</b> Make blockchain context implementation more flexible for new chains.</li>
              <li><b>Ergo Node Modifications:</b> Support merged-mined sidechains and standalone Sigma Chains.</li>
              <li><b>First Sigma Chain Launch:</b> Launch the first Sigma Chain (merged-mined or standalone).</li>
              <li><b>Sigma Chain Framework:</b> Develop a generic framework for Sigma Chains, similar to Scorex.</li>
              <li><b>Partnership and Collaboration:</b> Pursue partnerships to accelerate development and adoption.</li>
            </ol>
            <p className="text-gray-300">
              This plan establishes Sigma Chains as a leading standard for programmable PoW blockchains.
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 text-orange-300">Conclusion</h2>
            <p className="text-gray-300 mb-3">
              Sigma Chains represent a significant leap forward for Ergo and the broader blockchain ecosystem. By revitalizing PoW, enabling cross-chain compatibility, and introducing economic sustainability, Sigma Chains create new opportunities for miners, developers, and users alike.
            </p>
            <p className="text-gray-300">
              As Sigma Chains gain momentum, Ergo will solidify its position as a key player in the blockchain space, driving innovation and adoption across all hardware classes.
            </p>
          </div>
        </TabsContent>

        {/* PoUW Tab */}
        <TabsContent value="pouw">
          {/* Hero Section */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Proof of Useful Work (PoUW)
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              While PoUW is an intriguing concept, it remains in the research phase. Ergo is open to exploring PoUW, but practical and economic challenges must be addressed before any implementation.
            </p>
          </div>

          {/* Current Status */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-orange-300">Current Status</h2>
            <p className="text-gray-300 mb-3">
              Ergo is considering preliminary research and specification work for PoUW, but its real-world usefulness is still uncertain. A radical change to Ergo's consensus (requiring a hard fork) is likely beyond the current scope and resources of the core team.
            </p>
          </div>

          {/* Research & Challenges */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">Research & Challenges</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-3">
              <li>PoUW is still a research topic; practical, secure, and fair implementation is not yet solved.</li>
              <li>The Ofelimos paper made progress on security definitions, but concrete approaches must avoid private optimizations.</li>
              <li>It is difficult to make a definitive judgment on PoUW's viability at this time.</li>
            </ul>
          </div>

          {/* Economic Considerations */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-orange-300">Economic Considerations</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-3">
              <li>PoUW introduces new economic dynamics: someone must pay for useful work, which could lead to collusion between payers and miners.</li>
              <li>During the bootstrapping phase, protocol-determined rewards seem necessary to avoid manipulation.</li>
            </ul>
          </div>

          {/* Realistic Options */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">Realistic Options</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-3">
              <li>The most realistic path is to launch a PoUW sidechain, allowing experimentation without affecting Ergo's main chain.</li>
              <li>Other possibilities could be explored to benefit the Ergo main chain and ecosystem, but require further research and community input.</li>
            </ul>
          </div>

          <div className="text-gray-400 text-sm italic">
            See previous <a href="#" className="text-cyan-400 underline">community discussion - Aug 2022</a>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
} 