import { Coins, Pickaxe, Shield, TrendingUp, AlertTriangle, Database, Timer, Users, CheckCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function FeesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Fees & Mining
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Learn how transaction fees work in Ergo, how miners secure the network, and what makes Ergo's economic model unique.
        </p>
      </div>

      {/* Fees Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Coins className="w-6 h-6 text-orange-400" /> Transaction Fees: Mechanism & Calculation
        </h2>
        <p className="text-gray-300 mb-6">
          Transaction fees in Ergo are crucial for incentivizing miners to include transactions in blocks and for securing the network. Unlike some other blockchains, Ergo's fee mechanism is designed to be transparent and predictable.
        </p>
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-lg mb-3 text-white">How Fees Work:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>Implicit Payment:</strong> Fees are not explicitly sent to a miner's address. Instead, they are implicitly paid as the difference between the total value of ERG in the input boxes and the total value of ERG in the output boxes.
            </li>
            <li>
              <strong>Minimum Fee:</strong> Every transaction must include a minimum fee, which is typically <span className="text-orange-400">0.001 ERG</span>. This minimum ensures basic network hygiene.
            </li>
            <li>
              <strong>Fee Calculation:</strong> The actual fee paid depends on the transaction's size (in bytes), the number of input and output boxes, the complexity of the ErgoScript involved, and the amount of data stored in registers.
            </li>
            <li>
              <strong>Priority:</strong> While there's a minimum fee, users can opt to pay a higher fee to incentivize miners to prioritize their transaction during periods of network congestion.
            </li>
            <li>
              <strong>No Return:</strong> Once a fee is paid, it is consumed by the network and goes to the miner who includes the transaction in a block. It is not returned to the sender.
            </li>
          </ul>
          <div className="mt-4 p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 text-orange-300">Example: Fee Calculation</h4>
            <p className="text-gray-400 text-xs">
              If your transaction consumes input boxes totaling 10 ERG and creates output boxes totaling 9.99 ERG, the remaining 0.01 ERG is implicitly paid as the transaction fee.
            </p>
          </div>
        </div>
      </section>

      {/* Miners Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Pickaxe className="w-6 h-6 text-cyan-400" /> Role of Miners: Securing the Ergo Network
        </h2>
        <p className="text-gray-300 mb-6">
          Miners are the backbone of the Ergo blockchain, responsible for processing transactions, creating new blocks, and securing the network through Proof-of-Work. Their role is vital for maintaining the integrity and immutability of the blockchain.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-cyan-400">Key Responsibilities:</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                <strong>Transaction Verification:</strong> Miners collect pending transactions from the mempool and verify their validity (checking syntax, script execution, and sufficient funds).
              </li>
              <li>
                <strong>Block Formation:</strong> Valid transactions are grouped together into a new block, along with the block header and other metadata.
              </li>
              <li>
                <strong>Solving the Proof-of-Work Puzzle:</strong> Miners compete to solve a complex cryptographic puzzle (the Proof-of-Work). This process is computationally intensive and secures the network.
              </li>
              <li>
                <strong>Adding Blocks to the Blockchain:</strong> The first miner to successfully solve the puzzle broadcasts their new block to the network. Other nodes verify the block, and if valid, add it to their copy of the blockchain.
              </li>
              <li>
                <strong>Ensuring Network Security:</strong> The immense computational power required for Proof-of-Work makes it extremely difficult and costly for malicious actors to alter past transactions, thus ensuring the integrity and immutability of the Ergo blockchain.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold mb-3 text-cyan-400">Incentives for Miners:</h3>
            <div className="flex items-center gap-2 mb-2"><Shield className="w-5 h-5 text-green-400" /> <span className="font-semibold">Security & Integrity</span></div>
            <span className="text-gray-400 text-sm mb-4">Miners are incentivized to act honestly, as their rewards depend on contributing to a secure and valid blockchain.</span>
            <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-5 h-5 text-orange-400" /> <span className="font-semibold">Block Rewards</span></div>
            <span className="text-gray-400 text-sm mb-4">Miners receive newly issued ERG as a block reward for successfully mining a block.</span>
            <div className="flex items-center gap-2 mb-2"><Coins className="w-5 h-5 text-yellow-400" /> <span className="font-semibold">Transaction Fees</span></div>
            <span className="text-gray-400 text-sm mb-4">All transaction fees from the transactions included in a block go directly to the miner.</span>
            <div className="flex items-center gap-2 mb-2"><Database className="w-5 h-5 text-blue-400" /> <span className="font-semibold">Storage Rent</span></div>
            <span className="text-gray-400 text-sm">A unique Ergo feature where miners receive fees from dormant boxes, contributing to long-term sustainability.</span>
          </div>
        </div>
      </section>

      {/* Consensus Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> Ergo's Consensus: Autolykos v2 Proof-of-Work
        </h2>
        <p className="text-gray-300 mb-6">
          Ergo utilizes Autolykos v2, a unique Proof-of-Work (PoW) algorithm designed to ensure fair and decentralized mining. It's a memory-hard algorithm that aims to be ASIC-resistant and GPU-friendly, promoting participation from a wider range of miners.
        </p>
        <div className="bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/20 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-green-400">Key Characteristics of Autolykos v2:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>ASIC-Resistant:</strong> Designed to make specialized ASIC (Application-Specific Integrated Circuit) mining hardware inefficient, thus preventing centralization of mining power.
            </li>
            <li>
              <strong>GPU-Friendly:</strong> Optimized for general-purpose GPUs, allowing individual miners to participate effectively using readily available hardware.
            </li>
            <li>
              <strong>Memory-Intensive:</strong> The algorithm requires significant amounts of memory, which further deters ASIC development and promotes decentralization.
            </li>
            <li>
              <strong>Dynamic Difficulty Adjustment:</strong> The network automatically adjusts the mining difficulty to maintain a consistent block time (approximately 2 minutes), ensuring a steady flow of new blocks.
            </li>
            <li>
              <strong>Decentralization Focus:</strong> By resisting ASIC dominance, Autolykos v2 aims to keep mining decentralized, preventing any single entity from gaining too much control over the network.
            </li>
          </ul>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <TrendingUp className="w-6 h-6 text-yellow-400" /> Miner Rewards & Ergo's Emission Schedule
        </h2>
        <p className="text-gray-300 mb-6">
          Miners are compensated for their work in securing the Ergo network through a combination of block rewards, transaction fees, and storage rent. Ergo's emission schedule is designed to be deflationary over time.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-yellow-400">Components of Miner Rewards:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>Block Reward:</strong> Newly minted ERG tokens issued by the protocol for each successfully mined block. This reward gradually decreases over time, contributing to Ergo's deflationary supply model.
            </li>
            <li>
              <strong>Transaction Fees:</strong> All transaction fees from the transactions included in a block are collected by the miner. This provides a direct incentive for miners to process transactions efficiently.
            </li>
            <li>
              <strong>Storage Rent:</strong> A unique feature of Ergo where dormant boxes (UTXOs that haven't been spent for a long period, currently 4 years) pay a small fee when they are finally spent. This fee goes to the miners, providing a sustainable long-term income stream as block rewards diminish.
            </li>
          </ul>
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 text-orange-300">Ergo's Emission Schedule:</h4>
            <p className="text-gray-400 text-xs">
              Ergo has a fixed maximum supply of 97,739,925 ERG. The block reward started at 75 ERG and gradually decreases over an 8-year period. This decreasing emission, combined with storage rent, aims to create a sustainable economic model for miners in the long term.
            </p>
          </div>
        </div>
      </section>

      {/* Storage Rent Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Database className="w-6 h-6 text-blue-400" /> Storage Rent: Ergo's Solution to State Bloat
        </h2>
        <p className="text-gray-300 mb-6">
          Storage Rent is a unique and innovative feature of the Ergo blockchain designed to manage blockchain state growth and ensure the long-term sustainability of the network. It addresses the problem of "state bloat," where inactive data accumulates on the blockchain, increasing storage requirements for full nodes.
        </p>
        <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-blue-400">How Storage Rent Works:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>Dormant Boxes:</strong> If an Ergo box (UTXO) remains unspent for a very long period (currently 4 years, or approximately 1,051,200 blocks), it is considered dormant.
            </li>
            <li>
              <strong>Implicit Fee:</strong> When a dormant box is finally spent, a small portion of its ERG value (currently 0.14 ERG per 4 years of dormancy) is implicitly paid as a storage rent fee. This fee goes to the miner who includes the transaction in a block.
            </li>
            <li>
              <strong>No Direct Deduction:</strong> The rent is not deducted from the box's value until it is spent. If a box is never spent, no rent is ever paid.
            </li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-blue-400">Purpose & Benefits:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>Incentivizes State Management:</strong> Encourages users to manage their UTXOs efficiently and spend or consolidate dormant funds, reducing unnecessary data on the blockchain.
            </li>
            <li>
              <strong>Prevents State Bloat:</strong> Helps to keep the blockchain size manageable, making it easier and more affordable for individuals to run full nodes, thus promoting decentralization.
            </li>
            <li>
              <strong>Sustainable Miner Income:</strong> Provides an additional, sustainable source of income for miners, especially as block rewards decrease over time, ensuring the long-term security of the network.
            </li>
            <li>
              <strong>Fairness:</strong> Those who utilize blockchain storage for extended periods contribute to its maintenance.
            </li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> For the vast majority of users, storage rent is almost imperceptible and only affects very old, inactive UTXOs (often referred to as "dust"). Active users will rarely encounter it.
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Deep Dive into Ergo</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Master ErgoScript</h4>
            <p className="text-gray-400 text-sm mb-3">
              Explore advanced ErgoScript concepts and build more complex smart contracts.
            </p>
            <Link
              href="/build/docs/contracts"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Smart Contracts Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}
