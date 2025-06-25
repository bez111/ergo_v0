import { Coins, Pickaxe, Shield, TrendingUp, AlertTriangle, Database, Timer, Users, CheckCircle } from "lucide-react"

export default function FeesPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Fees & Mining
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Learn how transaction fees work in Ergo, how miners secure the network, and what makes Ergo's economic model unique.
        </p>
      </div>

      {/* Fees Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Coins className="w-6 h-6 text-orange-400" /> How Transaction Fees are Calculated and Paid
        </h2>
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Minimum Fee:</strong> Every transaction must include a minimum fee (typically <span className="text-orange-400">0.001 ERG</span>).</li>
            <li><strong>Fee Size:</strong> Depends on transaction size, number of inputs/outputs, script complexity, and data in registers.</li>
            <li><strong>Priority:</strong> Higher fees can speed up transaction inclusion during network congestion.</li>
            <li><strong>Payment:</strong> Fee is deducted from input boxes and not returned to the sender.</li>
          </ul>
        </div>
      </section>

      {/* Miners Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Pickaxe className="w-6 h-6 text-cyan-400" /> Role of Miners in Transaction Processing & Security
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong>Transaction Verification:</strong> Miners collect transactions, verify validity (syntax, scripts, funds).</li>
              <li><strong>Block Formation:</strong> Valid transactions are grouped into blocks.</li>
              <li><strong>Solving a Puzzle:</strong> Miners compete to solve a cryptographic puzzle (Proof-of-Work).</li>
              <li><strong>Adding Blocks:</strong> The first miner to solve broadcasts the block; others verify and add it.</li>
              <li><strong>Ensuring Security:</strong> Mining makes the blockchain immutable and attack-resistant.</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2"><Shield className="w-5 h-5 text-green-400" /> <span className="font-semibold">Security</span></div>
            <span className="text-gray-400 text-sm">Mining ensures the integrity and immutability of the Ergo blockchain.</span>
            <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-5 h-5 text-orange-400" /> <span className="font-semibold">Incentives</span></div>
            <span className="text-gray-400 text-sm">Miners are rewarded for their work with block rewards, fees, and storage rent.</span>
          </div>
        </div>
      </section>

      {/* Consensus Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> Ergo's Consensus Mechanism (Proof-of-Work)
        </h2>
        <div className="bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/20 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Autolykos v2:</strong> Ergo uses a unique PoW algorithm designed to be <span className="text-orange-400">ASIC-resistant</span> and <span className="text-cyan-400">GPU-friendly</span>.</li>
            <li><strong>Memory-Intensive:</strong> Requires significant memory, making ASICs less efficient and promoting decentralization.</li>
            <li><strong>Dynamic Difficulty:</strong> Network adjusts mining difficulty to maintain ~2 minute block times.</li>
          </ul>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <TrendingUp className="w-6 h-6 text-yellow-400" /> Miner Rewards & Token Emission
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Block Reward:</strong> New ERG issued by the protocol, gradually decreasing over time (deflationary).</li>
            <li><strong>Transaction Fees:</strong> All fees from included transactions go to the miner.</li>
            <li><strong>Storage Rent:</strong> Unique Ergo feature: inactive boxes (not spent for 4 years) pay a small rent to miners.</li>
          </ul>
        </div>
      </section>

      {/* Storage Rent Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Database className="w-6 h-6 text-blue-400" /> Storage Rent: A Unique Ergo Feature
        </h2>
        <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>If a box is unspent for 4 years (~1,051,200 blocks), it pays a small fee (<span className="text-orange-400">0.14 ERG</span> per 4 years) when spent. This goes to miners.</li>
            <li><strong>Purpose:</strong>
              <ul className="list-disc pl-6">
                <li>Incentivize activity: Encourages users to manage UTXOs.</li>
                <li>Blockchain size management: Prevents "dead" state from growing indefinitely.</li>
                <li>Additional miner income: Sustainable as block rewards decrease.</li>
              </ul>
            </li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> For most users, storage rent is almost imperceptible and only affects very old, inactive UTXOs ("dust").
          </div>
        </div>
      </section>
    </div>
  )
} 