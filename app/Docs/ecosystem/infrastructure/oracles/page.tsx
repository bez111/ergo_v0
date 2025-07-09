"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Settings, Database, Link2, BookOpen, ExternalLink, GitBranch, Zap, Info } from "lucide-react";
import Link from "next/link";

export default function OraclesPage() {
  return (
    // Удаляю внешний контейнер
    <>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-neutral-900/50 border border-neutral-700/50">
          <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
            <Info className="w-4 h-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="oracle-pools-v2" className="flex items-center gap-2 justify-center">
            <GitBranch className="w-4 h-4" /> Oracle Pools V2
          </TabsTrigger>
          <TabsTrigger value="mixicles" className="flex items-center gap-2 justify-center">
            <Zap className="w-4 h-4" /> Mixicles
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 flex items-center gap-3">
              <Database className="w-8 h-8 text-orange-400" /> Oracles on Ergo
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Oracles form the critical infrastructure in a decentralized financial system, connecting off-chain data with on-chain transactions. They provide essential data feeds for various operations, from atomic swaps to more complex interactions like lending/borrowing and dynamic market-making. Yet, DeFi ecosystems are vulnerable to Flash Loan attacks due to centralized price oracle misinformation.
            </p>

            <h2 className="text-2xl font-bold text-orange-300 mb-3 mt-8">Oracle Pools on Ergo</h2>
            <p className="text-gray-300 mb-4">
              Ergo has pioneered Oracle Pools to sustain a resilient DeFi ecosystem. Utilizing the Extended UTXO (eUTXO) model and the powerful ErgoScript programming language, Ergo facilitates highly decentralized oracle networks. Oracle Pools serve as an abstraction layer over the Oracle data, allowing scalable benefits while managing trade-offs between cost and speed. An example of this is the operational ERG/USD oracle pool on the Ergo Blockchain.
            </p>
            <p className="text-gray-300 mb-4">
              External oracle data, when posted on-chain, must be precisely encoded within a transaction. Oracle pools, which consist of various interconnected components, require specific transactions to transition through the pool protocol's different stages. <b>Oracle Core</b> handles these complex transactions, which include data posting and executing the on-chain oracle pool protocol (like data point averaging). It is packaged with the Oracle Pool Bootstrap and a Connector Library. You can refer to the <a href="https://github.com/anon-real/ada-usd-oracle" className="text-cyan-400 underline" target="_blank">ada-usd-oracle source</a> for an illustration. For a comprehensive perspective, see this <a href="https://medium.com/ergonauts/ergo-oracle-pools-overview-7e3b5b6c2e6b" className="text-cyan-400 underline" target="_blank">overview by Robert Kornacki</a>.
            </p>

            <h2 className="text-2xl font-bold text-cyan-300 mb-3 mt-8">Introduction to Oracle Pools V2</h2>
            <p className="text-gray-300 mb-4">
              The following section delves into the Oracle Pools V2, an innovative upgrade to the existing Oracle Pool v1.0, as documented in <a href="https://github.com/ergoplatform/eips/blob/master/eip-0016.md" className="text-cyan-400 underline" target="_blank">EIP16</a>. This proposed update is designed to resolve various drawbacks associated with the first version such as the generation of extensive dust, low rewards, complexity due to two types of pool boxes, and issues related to the non-transferability of oracle and ballot tokens.
            </p>
            <p className="text-gray-300 mb-4">
              Oracle Pools V2 offers a range of new features and improvements including a single pool address, an epoch counter, a compact pool box, a refresh box, token-based rewards, no separate funding process, reward accumulation, and transferability of oracle and ballot tokens.
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Single pool address for all operations</li>
              <li>Epoch counter for better state management</li>
              <li>Compact pool and refresh boxes</li>
              <li>Token-based rewards and reward accumulation</li>
              <li>No separate funding process required</li>
              <li>Transferability of oracle and ballot tokens</li>
              <li>Reduced dust and improved efficiency</li>
            </ul>
            <p className="text-gray-300 mb-4">
              For detailed steps on how to bootstrap an ERG/XAU pool on testnet with this new version, follow the <a href="https://github.com/anon-real/easy-ergo-oracle" className="text-cyan-400 underline" target="_blank">easy-ergo-oracle guide</a>.
            </p>
            <p className="text-gray-300 mb-4">
              To gain a deeper understanding of these changes and how they enhance the overall performance of Oracle Pools, refer to the comprehensive <a href="https://github.com/ergoplatform/eips/blob/master/eip-0023.md" className="text-cyan-400 underline" target="_blank">EIP-0023 Oracle pool 2.0</a>. The document provides an exhaustive comparison between versions v1.0 and v2.0, highlighting the significant advancements in the latter.
            </p>
            <p className="text-gray-300 mb-4">
              For further details, refer to <a href="https://github.com/anon-real/oracles-v2" className="text-cyan-400 underline" target="_blank">Oracles-V2</a>.
            </p>
            <p className="text-gray-300 mb-4">
              For an easy docker setup see <a href="https://github.com/anon-real/easy-ergo-oracle" className="text-cyan-400 underline" target="_blank">easy-ergo-oracle</a>.
            </p>

            <h2 className="text-2xl font-bold text-orange-300 mb-3 mt-8">Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Forum Posts</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><a href="https://www.ergoforum.org/t/trustless-oracle-contracts/" className="text-cyan-400 underline" target="_blank">Trustless Oracle Contracts</a></li>
                  <li><a href="https://www.ergoforum.org/t/shrimpcoin-the-first-shrimp-pinned-stablecoin-on-ergo-inactive/" className="text-cyan-400 underline" target="_blank">Shrimpcoin - The first shrimp-pinned stablecoin on Ergo (Inactive)</a></li>
                </ul>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><GitBranch className="w-4 h-4" /> GitHub</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><a href="https://github.com/anon-real/eth-usd-connector" className="text-cyan-400 underline" target="_blank">eth/usd connector</a></li>
                  <li><a href="https://github.com/anon-real/ergo-oracles" className="text-cyan-400 underline" target="_blank">Ergo oracles | CLI tool for launching oracles (USD/ERG, EUR/ERG, BTC/ERG, AUG/ERG)</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Articles</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><a href="https://blog.chain.link/chainlink-oracles-vs-ergo-oracle-pools/" className="text-cyan-400 underline" target="_blank">Chainlink Oracles vs. Ergo Oracle Pools</a></li>
                  <li><a href="https://medium.com/ergonauts/oracle-pools-a-new-oracle-model-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">Oracle Pools - A New Oracle Model</a></li>
                  <li><a href="https://medium.com/ergonauts/interoperability-with-cardano-oracles-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">Interoperability with Cardano Oracles</a></li>
                  <li><a href="https://medium.com/ergonauts/ergo-blockchain-oracle-pool-governance-update-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">Ergo Blockchain: Oracle Pool Governance Update</a></li>
                  <li><a href="https://medium.com/ergonauts/the-role-of-ergo-oracles-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">The Role of Ergo Oracles</a></li>
                </ul>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><Info className="w-4 h-4" /> The Delphi Project (Inactive)</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><a href="https://delphi.ergoplatform.com/" className="text-cyan-400 underline" target="_blank">Website</a></li>
                  <li><a href="https://github.com/anon-real/delphi-final-report" className="text-cyan-400 underline" target="_blank">Final Report</a></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Oracle Pools V2 Tab */}
        <TabsContent value="oracle-pools-v2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Settings className="w-6 h-6 text-orange-400" /> Oracle Pools on Ergo
            </h2>
            <p className="text-gray-300 mb-4">
              Ergo has pioneered Oracle Pools to sustain a resilient DeFi ecosystem. Utilizing the Extended UTXO (eUTXO) model and the powerful ErgoScript programming language, Ergo facilitates highly decentralized oracle networks. Oracle Pools serve as an abstraction layer over the Oracle data, allowing scalable benefits while managing trade-offs between cost and speed. An example of this is the operational ERG/USD oracle pool on the Ergo Blockchain.
            </p>
            <p className="text-gray-300 mb-4">
              External oracle data, when posted on-chain, must be precisely encoded within a transaction. Oracle pools, which consist of various interconnected components, require specific transactions to transition through the pool protocol's different stages. <b>Oracle Core</b> handles these complex transactions, which include data posting and executing the on-chain oracle pool protocol (like data point averaging). It is packaged with the Oracle Pool Bootstrap and a Connector Library. You can refer to the <Link href="https://github.com/anon-real/ada-usd-oracle" className="text-cyan-400 underline" target="_blank">ada-usd-oracle source</Link> for an illustration. For a comprehensive perspective, see this <Link href="https://medium.com/ergonauts/ergo-oracle-pools-overview-7e3b5b6c2e6b" className="text-cyan-400 underline" target="_blank">overview by Robert Kornacki</Link>.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Introduction to Oracle Pools V2</h3>
            <p className="text-gray-300 mb-4">
              The following section delves into the Oracle Pools V2, an innovative upgrade to the existing Oracle Pool v1.0, as documented in <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0016.md" className="text-cyan-400 underline" target="_blank">EIP16</Link>. This proposed update is designed to resolve various drawbacks associated with the first version such as the generation of extensive dust, low rewards, complexity due to two types of pool boxes, and issues related to the non-transferability of oracle and ballot tokens.
            </p>
            <p className="text-gray-300 mb-4">
              Oracle Pools V2 offers a range of new features and improvements including a single pool address, an epoch counter, a compact pool box, a refresh box, token-based rewards, no separate funding process, reward accumulation, and transferability of oracle and ballot tokens.
            </p>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold text-orange-300 mb-2 flex items-center gap-2"><Info className="w-5 h-5" /> Key Improvements in V2</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Single pool address for all operations</li>
                <li>Epoch counter for better state management</li>
                <li>Compact pool and refresh boxes</li>
                <li>Token-based rewards and reward accumulation</li>
                <li>No separate funding process required</li>
                <li>Transferability of oracle and ballot tokens</li>
                <li>Reduced dust and improved efficiency</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-4">
              For detailed steps on how to bootstrap an ERG/XAU pool on testnet with this new version, follow the <Link href="https://github.com/anon-real/easy-ergo-oracle" className="text-cyan-400 underline" target="_blank">easy-ergo-oracle guide</Link>.
            </p>
            <p className="text-gray-300 mb-4">
              To gain a deeper understanding of these changes and how they enhance the overall performance of Oracle Pools, refer to the comprehensive <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0023.md" className="text-cyan-400 underline" target="_blank">EIP-0023 Oracle pool 2.0</Link>. The document provides an exhaustive comparison between versions v1.0 and v2.0, highlighting the significant advancements in the latter.
            </p>
            <p className="text-gray-300 mb-4">
              For further details, refer to <Link href="https://github.com/anon-real/oracles-v2" className="text-cyan-400 underline" target="_blank">Oracles-V2</Link>.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Forum Posts</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><Link href="https://www.ergoforum.org/t/trustless-oracle-contracts/" className="text-cyan-400 underline" target="_blank">Trustless Oracle Contracts</Link></li>
                  <li><Link href="https://www.ergoforum.org/t/shrimpcoin-the-first-shrimp-pinned-stablecoin-on-ergo-inactive/" className="text-cyan-400 underline" target="_blank">Shrimpcoin - The first shrimp-pinned stablecoin on Ergo (Inactive)</Link></li>
                </ul>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><GitBranch className="w-4 h-4" /> GitHub</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><Link href="https://github.com/anon-real/eth-usd-connector" className="text-cyan-400 underline" target="_blank">eth/usd connector</Link></li>
                  <li><Link href="https://github.com/anon-real/ergo-oracles" className="text-cyan-400 underline" target="_blank">Ergo oracles | CLI tool for launching oracles (USD/ERG, EUR/ERG, BTC/ERG, AUG/ERG)</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Articles</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><Link href="https://blog.chain.link/chainlink-oracles-vs-ergo-oracle-pools/" className="text-cyan-400 underline" target="_blank">Chainlink Oracles vs. Ergo Oracle Pools</Link></li>
                  <li><Link href="https://medium.com/ergonauts/oracle-pools-a-new-oracle-model-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">Oracle Pools - A New Oracle Model</Link></li>
                  <li><Link href="https://medium.com/ergonauts/interoperability-with-cardano-oracles-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">Interoperability with Cardano Oracles</Link></li>
                  <li><Link href="https://medium.com/ergonauts/ergo-blockchain-oracle-pool-governance-update-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">Ergo Blockchain: Oracle Pool Governance Update</Link></li>
                  <li><Link href="https://medium.com/ergonauts/the-role-of-ergo-oracles-2e6b5b6c2e6b" className="text-cyan-400 underline" target="_blank">The Role of Ergo Oracles</Link></li>
                </ul>
                <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><Info className="w-4 h-4" /> The Delphi Project (Inactive)</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li><Link href="https://delphi.ergoplatform.com/" className="text-cyan-400 underline" target="_blank">Website</Link></li>
                  <li><Link href="https://github.com/anon-real/delphi-final-report" className="text-cyan-400 underline" target="_blank">Final Report</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Mixicles Tab */}
        <TabsContent value="mixicles">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-400" /> Mixicles on Ergo
            </h2>
            <p className="text-gray-300 mb-4">
              Mixicles are a privacy-preserving oracle primitive, originally proposed by Chainlink, that can be implemented on Ergo thanks to its flexible eUTXO model and expressive ErgoScript language. Mixicles enable conditional payments based on external data, while hiding the actual data and outcome from the public blockchain, thus providing privacy for DeFi contracts.
            </p>
            <p className="text-gray-300 mb-4">
              On Ergo, Mixicles can be used to build advanced DeFi applications such as private prediction markets, confidential derivatives, and more. The combination of oracles and privacy features makes Ergo a unique platform for such innovations.
            </p>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold text-orange-300 mb-2 flex items-center gap-2"><Info className="w-5 h-5" /> Key Features of Mixicles</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Privacy-preserving conditional payments</li>
                <li>External data integration without revealing outcomes</li>
                <li>Composable with other DeFi primitives</li>
                <li>Enabled by eUTXO and ErgoScript</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-4">
              For more on Mixicles, see the <Link href="https://blog.chain.link/mixicles-chainlink-privacy/" className="text-cyan-400 underline" target="_blank">original Chainlink Mixicles article</Link> and <Link href="https://ergoplatform.org/en/blog/2020-07-20-mixicles-on-ergo/" className="text-cyan-400 underline" target="_blank">Mixicles on Ergo</Link>.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
} 