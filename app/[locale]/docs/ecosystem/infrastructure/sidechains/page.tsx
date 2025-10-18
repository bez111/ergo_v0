"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  GitBranch, Info, Zap, Shield, Layers, CheckCircle, Star, 
  Settings, ChevronDown, ChevronUp, ChevronRight, Brain, Database, Code
} from "lucide-react";
import Link from 'next/link';

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
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Sidechains on Ergo
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Sigma Chains and NiPoPoWs enable secure, scalable, and interoperable sidechains on Ergo, supporting cross-chain DeFi and rapid innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs/ecosystem/infrastructure"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <ChevronRight className="w-5 h-5 mr-2" /> Back to Infrastructure
              </Link>
              <a
                href="https://github.com/ergoplatform/ergo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
              >
                <GitBranch className="w-5 h-5 mr-2" /> Ergo GitHub
              </a>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-orange-400" /> What are Sidechains?
            </h2>
            <p className="text-gray-300">
              Sidechains are independent blockchains connected to Ergo via two-way pegs, enabling asset transfers, new features, and scalability. Sigma Chains provide a flexible framework for building secure, programmable, and interoperable sidechains.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" /> Security & Interoperability
              </h3>
              <p className="text-gray-300 mb-4">
                Sigma Chains use NiPoPoWs and robust consensus to enable secure cross-chain communication and trust-minimized asset transfers.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Two-way pegged asset transfers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  NiPoPoW-based verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Robust PoW security
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" /> Fast Confirmations
              </h3>
              <p className="text-gray-300 mb-4">
                Sub-blocks and ordering blocks enable near-instant transaction confirmations and improved user experience.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  ~2s onchain confirmations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Cooperative mempool
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Rapid failure detection
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-orange-400" /> Programmability
              </h3>
              <p className="text-gray-300 mb-4">
                Sidechains leverage ErgoScript and the eUTxO model for advanced smart contracts and DeFi applications.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  ErgoScript support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Customizable chain logic
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  DeFi & cross-chain dApps
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" /> Economic Sustainability
              </h3>
              <p className="text-gray-300 mb-4">
                Storage rent and demurrage ensure long-term viability and incentivize active participation.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Storage rent for sustainability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Demurrage to stimulate activity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Miner & ecosystem rewards
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Developments */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-orange-400" /> Recent Developments
            </h2>
            <p className="text-gray-300">Explore recent advancements in sidechain technology through the ErgoHack VII project, which focuses on implementing sidechains in Ergo.</p>
          </div>

          {/* What is a Sidechain? */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-cyan-400" /> What is a Sidechain?
            </h2>
            <p className="text-gray-300 mb-4">A sidechain is a separate blockchain connected to a main chain via a two-way peg, enabling asset transfers and new functionalities while enhancing scalability and flexibility.</p>
          </div>

          {/* Sigma Chains Framework */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-orange-400" /> Sigma Chains: A Framework for Sidechains
            </h2>
            <p className="text-gray-300 mb-4">Sigma Chains provide enhanced programmability, cross-chain compatibility, and economic sustainability for Ergo sidechains.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Programmability</h4>
                <p className="text-gray-300 text-sm mb-2">Support for complex smart contracts, enabling DeFi, digital identities, and more.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Cross-Chain Compatibility</h4>
                <p className="text-gray-300 text-sm mb-2">Seamless interactions between Ergo and other blockchains, enhancing liquidity and interoperability.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Economic Sustainability</h4>
                <p className="text-gray-300 text-sm mb-2">Incorporates storage rent and demurrage for long-term viability.</p>
              </div>
            </div>
          </div>

          {/* NiPoPoWs Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyan-400" /> Non-Interactive Proofs of Proof-of-Work (NiPoPoWs)
            </h2>
            <p className="text-gray-300 mb-4">NiPoPoWs enable sidechains to efficiently and securely verify the state of the main chain, supporting lightweight clients and reducing computational burden.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Efficient Block Verification</h4>
                <p className="text-gray-300 text-sm">Allows sidechains to verify main chain block headers efficiently, negating the need for full blockchain downloads.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Scalability & Security</h4>
                <p className="text-gray-300 text-sm">Supports scalability solutions and provides a security mechanism for off-chain transactions.</p>
              </div>
            </div>
          </div>

          {/* Two-Way Pegged Sidechains */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-orange-400" /> Implementing Two-Way Pegged Sidechains
            </h2>
            <p className="text-gray-300 mb-4">Sigma Chains facilitate two-way pegged sidechains, enabling asset transfers and state synchronization between Ergo and sidechains.</p>
            <ol className="list-decimal pl-6 text-gray-300 mb-4">
              <li><b>Initiating the Transfer:</b> Users lock assets into a contract on the Ergo main chain.</li>
              <li><b>Operating Independently:</b> The sidechain issues corresponding assets and operates under its own rules.</li>
              <li><b>Secure Asset Return:</b> The sidechain burns tokens and provides proof to the main chain to unlock original assets.</li>
            </ol>
          </div>

          {/* Security and Data Considerations */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" /> Security & Data Considerations
            </h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><b>Robust Consensus Mechanisms:</b> Prevent fraud and ensure transaction integrity.</li>
              <li><b>Data Storage on Main Chain:</b> Critical data is stored on the main chain for verifiability and security.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-orange-400" /> Conclusion
            </h2>
            <p className="text-gray-300">Sigma Chains and NiPoPoWs provide a powerful, flexible framework for sidechains on Ergo, enhancing programmability, sustainability, and cross-chain compatibility for a robust blockchain ecosystem.</p>
          </div>
        </TabsContent>

        {/* Sub Blocks Tab */}
        <TabsContent value="sub-blocks">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Sub-blocks in Ergo
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Sub-blocks (input blocks) and ordering blocks enable near-instant confirmations and a more responsive network, dramatically improving user experience on Ergo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ergoplatform/ergo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
              >
                <GitBranch className="w-5 h-5 mr-2" /> Ergo GitHub
              </a>
            </div>
          </div>

          {/* TLDR Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-400" /> TLDR
            </h2>
            <p className="text-gray-300">
              With the introduction of sub-blocks, Ergo now distinguishes between sub-blocks (input blocks) and full blocks (ordering blocks). This change reduces typical onchain confirmation times from about 2 minutes to roughly 2 seconds, achieving a 17× improvement in detecting transaction failures and transforming the current competitive mempool into a more cooperative environment.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Rapid Confirmations
              </h3>
              <p className="text-gray-300 mb-4">
                Sub-blocks enable most transactions to confirm in ~2 seconds, with ordering blocks providing final settlement and security.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  ~2s onchain confirmations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Fast failure detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Improved UX for wallets & dApps
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" /> Cooperative Mempool
              </h3>
              <p className="text-gray-300 mb-4">
                The mempool shifts from competitive to cooperative, improving network responsiveness and reliability for all users.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Cooperative transaction inclusion
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Predictable confirmation times
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Enhanced dApp reliability
                </li>
              </ul>
            </div>
          </div>

          {/* What Are Sub-blocks and Ordering Blocks Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-orange-400" /> What Are Sub-blocks and Ordering Blocks?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Sub-blocks (Input Blocks)</h4>
                <p className="text-gray-300 text-sm">These are block candidates generated with a lower difficulty threshold than full blocks. They are produced approximately once per second and carry most transaction data, allowing transactions to propagate and confirm much faster.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Ordering Blocks</h4>
                <p className="text-gray-300 text-sm">These are the traditional full blocks of Ergo's proof-of-work system, now renamed as ordering blocks. They are generated roughly every 2 minutes and maintain the overall consensus and security of the blockchain.</p>
              </div>
            </div>
          </div>

          {/* Enhanced User Experience Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyan-400" /> Enhanced User Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Rapid Onchain Confirmations</h4>
                <p className="text-gray-300 text-sm">Everyday transactions—such as receiving tokens from DEX swaps or wallet-to-wallet transfers—can now be confirmed in approximately 2 seconds due to the introduction of sub-blocks. These input blocks are produced roughly every second and carry transaction data, allowing dApps and wallets to detect transaction inclusion almost instantly.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Faster Failure Detection</h4>
                <p className="text-gray-300 text-sm">Instead of waiting up to 6 minutes to detect a transaction failure, the new system detects failures in about 2 seconds—a 17× improvement in responsiveness.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">A More Cooperative Mempool</h4>
                <p className="text-gray-300 text-sm">The design shift transforms the mempool from a competitive (PvP) environment into a cooperative, multiplayer-like system, enhancing overall network responsiveness.</p>
              </div>
            </div>
          </div>

          {/* Technical Details Accordion */}
          <div className="mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
              <details className="group">
                <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
                  <span className="inline-block">
                    <Code className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
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

          {/* In a Nutshell Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-orange-400" /> In a Nutshell
            </h2>
            <p className="text-gray-300 mb-4">
              Ergo's renaming and introduction of sub-blocks (input blocks) paired with ordering blocks significantly improves transaction processing speed and reliability. These changes provide users with near-instant confirmations and faster failure detection, thereby offering a smoother and more efficient experience on the network.
            </p>
            <p className="text-gray-400 text-sm italic">
              For a deep dive into the technical details behind these changes, see the technical documentation.
            </p>
          </div>
        </TabsContent>

        {/* Sigma Chains Tab */}
        <TabsContent value="sigma-chains">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Sigma Chains
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Sigma Chains are a groundbreaking innovation designed to revitalize Proof of Work (PoW) and solidify Ergo's position as a programmable, cross-chain, and sustainable blockchain hub.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ergoplatform/ergo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
              >
                <GitBranch className="w-5 h-5 mr-2" /> Ergo GitHub
              </a>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-orange-400" /> What are Sigma Chains?
            </h2>
            <p className="text-gray-300">
              Sigma Chains are a series of blockchains that share the same contractual base layer, while allowing for different chain-specific features and customization. They represent a universe of programmable money, offering a compelling alternative to the EVM for PoW and UTXO-based blockchains.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" /> Security & Interoperability
              </h3>
              <p className="text-gray-300 mb-4">
                Sigma Chains use advanced cryptography and robust consensus to enable secure cross-chain communication and trust-minimized asset transfers.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Zero-knowledge proofs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Threshold signatures
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Robust PoW security
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" /> Programmability
              </h3>
              <p className="text-gray-300 mb-4">
                Sigma Chains leverage ErgoScript and the eUTxO model for advanced smart contracts and DeFi applications across chains.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  ErgoScript support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Modular chain logic
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  DeFi & cross-chain dApps
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" /> Economic Sustainability
              </h3>
              <p className="text-gray-300 mb-4">
                Storage rent and demurrage ensure long-term viability and incentivize active participation across the Sigma Chain ecosystem.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Storage rent for sustainability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Demurrage to stimulate activity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Miner & ecosystem rewards
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" /> Cross-chain Compatibility
              </h3>
              <p className="text-gray-300 mb-4">
                Sigma Chains facilitate seamless interactions between Ergo and other blockchain networks, enhancing liquidity and interoperability.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Trustless value pegging
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Merged mining support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Portable dApps
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Details Accordion */}
          <div className="mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
              <details className="group">
                <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
                  <span className="inline-block">
                    <Code className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
                  </span>
                  <span>Technical Details</span>
                  <span className="ml-auto">
                    <ChevronDown className="w-7 h-7 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-cyan-400" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-300 space-y-6">
                  <section>
                    <h4 className="text-base font-bold mb-2 text-cyan-300">Architecture & Features</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Layered architecture for complex applications with strong security and integrity.</li>
                      <li>Uses extended UTXO model for privacy, scalability, interoperability, and cost predictability.</li>
                      <li>Supports Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) for light clients and sidechains.</li>
                      <li>Network parameters adjustable via decentralized miner voting.</li>
                      <li>Sigma protocols enable advanced cryptographic operations and secure, versatile smart contracts.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-orange-300">Merged Mining & Security</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Merged mining allows Ergo miners to be paid in various tokens while still requiring ERG for transactions.</li>
                      <li>Algorithm-agnostic design attracts ASIC, GPU, and CPU miners.</li>
                      <li>Cross-chain security is prioritized with robust, well-defined models.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-green-300">Portable Projects & DApps</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Built-in DeFi frameworks and dApps for rapid bootstrapping.</li>
                      <li>Portable projects can interact across multiple blockchains and access new on-chain markets.</li>
                      <li>Modular framework for building complex financial applications across chains.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-cyan-300">Smart Contract Emissions</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Smart contract-based emissions allow for multiple treasuries built into the emission curve.</li>
                      <li>No premine; protocol-based emissions can reward early investors, developers, and the community.</li>
                      <li>Ensures long-term sustainability and growth.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-orange-300">Sidechain Constructions</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li><b>Merged-Mined Sidechains:</b> Allow Ergo miners to mine both mainchain and sidechains, enabling efficient, trustless cross-chain interoperability.</li>
                      <li><b>Double Merged-Mined Sidechains:</b> Bridge Ergo with other PoW blockchains (e.g., Bitcoin) with minimal trust.</li>
                      <li><b>Dedicated Mining Algorithms:</b> Support sidechains tailored to specific hardware, with dedicated PoW consensus and Sigma contractual layer.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-yellow-300">Development Plan</h4>
                    <ol className="list-decimal pl-6 mb-2">
                      <li><b>Sigma 6.0 Release:</b> Finalize and release Sigma 6.0 (code 95% complete and under review).</li>
                      <li><b>Flexible Blockchain Context:</b> Make blockchain context implementation more flexible for new chains.</li>
                      <li><b>Ergo Node Modifications:</b> Support merged-mined sidechains and standalone Sigma Chains.</li>
                      <li><b>First Sigma Chain Launch:</b> Launch the first Sigma Chain (merged-mined or standalone).</li>
                      <li><b>Sigma Chain Framework:</b> Develop a generic framework for Sigma Chains, similar to Scorex.</li>
                      <li><b>Partnership and Collaboration:</b> Pursue partnerships to accelerate development and adoption.</li>
                    </ol>
                  </section>
                </div>
              </details>
            </div>
          </div>

          {/* In a Nutshell Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-orange-400" /> In a Nutshell
            </h2>
            <p className="text-gray-300 mb-4">
              Sigma Chains represent a significant leap forward for Ergo and the broader blockchain ecosystem. By revitalizing PoW, enabling cross-chain compatibility, and introducing economic sustainability, Sigma Chains create new opportunities for miners, developers, and users alike.
            </p>
            <p className="text-gray-400 text-sm italic">
              As Sigma Chains gain momentum, Ergo will solidify its position as a key player in the blockchain space, driving innovation and adoption across all hardware classes.
            </p>
          </div>
        </TabsContent>

        {/* PoUW Tab */}
        <TabsContent value="pouw">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Proof of Useful Work (PoUW)
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              PoUW is an intriguing concept for blockchain consensus, aiming to make mining computationally useful. Ergo is open to exploring PoUW, but practical and economic challenges must be addressed before any implementation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ergoplatform/ergo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
              >
                <GitBranch className="w-5 h-5 mr-2" /> Ergo GitHub
              </a>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-400" /> What is PoUW?
            </h2>
            <p className="text-gray-300">
              Proof of Useful Work (PoUW) is a research direction that aims to replace traditional PoW mining with computations that have real-world value, such as scientific research or AI training. While promising, PoUW faces significant technical and economic hurdles.
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" /> Security & Research
              </h3>
              <p className="text-gray-300 mb-4">
                PoUW is still a research topic; practical, secure, and fair implementation is not yet solved. Security definitions and economic incentives are under active investigation.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Ofelimos paper: security definitions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Avoiding private optimizations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Collusion resistance
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" /> Economic Considerations
              </h3>
              <p className="text-gray-300 mb-4">
                PoUW introduces new economic dynamics: someone must pay for useful work, which could lead to collusion between payers and miners. Protocol-determined rewards may be necessary during bootstrapping.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Who pays for useful work?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Collusion and manipulation risks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Bootstrapping with protocol rewards
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Details Accordion */}
          <div className="mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
              <details className="group">
                <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
                  <span className="inline-block">
                    <Code className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
                  </span>
                  <span>Technical Details & Research</span>
                  <span className="ml-auto">
                    <ChevronDown className="w-7 h-7 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-cyan-400" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-300 space-y-6">
                  <section>
                    <h4 className="text-base font-bold mb-2 text-cyan-300">Current Status</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Ergo is considering preliminary research and specification work for PoUW, but its real-world usefulness is still uncertain.</li>
                      <li>A radical change to Ergo's consensus (requiring a hard fork) is likely beyond the current scope and resources of the core team.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-orange-300">Research & Challenges</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>PoUW is still a research topic; practical, secure, and fair implementation is not yet solved.</li>
                      <li>The Ofelimos paper made progress on security definitions, but concrete approaches must avoid private optimizations.</li>
                      <li>It is difficult to make a definitive judgment on PoUW's viability at this time.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-green-300">Economic Considerations</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>PoUW introduces new economic dynamics: someone must pay for useful work, which could lead to collusion between payers and miners.</li>
                      <li>During the bootstrapping phase, protocol-determined rewards seem necessary to avoid manipulation.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-cyan-300">Realistic Options</h4>
                    <ul className="list-disc pl-6 mb-2">
                      <li>The most realistic path is to launch a PoUW sidechain, allowing experimentation without affecting Ergo's main chain.</li>
                      <li>Other possibilities could be explored to benefit the Ergo main chain and ecosystem, but require further research and community input.</li>
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold mb-2 text-yellow-300">Community Discussion</h4>
                    <p>See previous <a href="#" className="text-cyan-400 underline">community discussion - Aug 2022</a></p>
                  </section>
                </div>
              </details>
            </div>
          </div>

          {/* In a Nutshell Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-orange-400" /> In a Nutshell
            </h2>
            <p className="text-gray-300 mb-4">
              PoUW is a promising but still experimental direction for blockchain consensus. Ergo is open to research and experimentation, but practical, secure, and economically sound solutions are needed before adoption.
            </p>
            <p className="text-gray-400 text-sm italic">
              The most realistic path is to launch a PoUW sidechain for experimentation and research.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
} 