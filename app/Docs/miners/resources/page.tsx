import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BookOpen,
  Cpu,
  Coins,
  Repeat,
  Code,
  FileText,
} from "lucide-react";

export default function MinersResourcesPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="cpu-gpu" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> CPU vs GPU
        </TabsTrigger>
        <TabsTrigger value="emission" className="flex items-center gap-2 justify-center">
          <Coins className="w-4 h-4" /> Emission Update
        </TabsTrigger>
        <TabsTrigger value="difficulty" className="flex items-center gap-2 justify-center">
          <Repeat className="w-4 h-4" /> Adaptive Difficulty
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Mining Resources
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            This page provides a collection of resources related to Ergo mining. It includes academic papers, code repositories, test vectors, and discussion threads.
          </p>
        </div>

        {/* Academic Papers Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-400" /> Academic Papers
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <a href="https://ergoplatform.org/docs/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline font-semibold">Ergo White Paper</a>: This paper provides a comprehensive overview of Ergo, including its design principles, consensus algorithm, and economic model.
            </li>
            <li>
              <a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline font-semibold">Ergo Yellow Paper</a>: The Yellow Paper offers a more technical perspective on Ergo, detailing the platform's underlying algorithms and data structures.
            </li>
            <li>
              <a href="https://eprint.iacr.org/2020/352.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline font-semibold">Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts</a>: This paper discusses a novel approach to bypassing non-outsourceable proof-of-work schemes using smart contracts.
            </li>
          </ul>
        </div>

        {/* Code Section */}
        <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" /> Code
          </h2>
          <p className="text-gray-300 mb-2">
            The <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">Ergo GitHub repository</a> contains the Scala files related to Ergo's mining algorithm. This is a great resource if you're interested in understanding the technical details of Ergo mining.
          </p>
        </div>

        {/* Test Vectors Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-green-400" /> Test Vectors
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <a href="https://www.ergoforum.org/t/test-vectors-for-increased-n-values/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline font-semibold">Test vectors for increased N values</a>: This forum post provides test vectors for Ergo's proof-of-work algorithm with increased N values.
            </li>
          </ul>
        </div>

        {/* EIPs Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" /> EIPs
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <a href="https://github.com/ergoplatform/eips/pull/27" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">EIP27</a>
            </li>
            <li>
              <a href="https://github.com/ergoplatform/eips/pull/37" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">EIP37</a>
            </li>
          </ul>
        </div>
      </TabsContent>

      {/* CPU vs GPU Tab */}
      <TabsContent value="cpu-gpu">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            GPU vs. CPU Mining: A Comparative Analysis
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            The evolution of cryptocurrency mining has been marked by a constant tug-of-war between optimizing algorithms for general-purpose hardware like CPUs and GPUs, and the inevitable emergence of specialized hardware like ASICs.
          </p>
        </div>

        {/* ASIC Resistance Section */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-orange-400" />
            The Pursuit of ASIC Resistance
          </h2>
          <p className="text-gray-300 mb-4">
            One of the primary goals of many cryptocurrency projects is to achieve a high degree of decentralization by enabling mining on widely available hardware. The idea is that if specialized hardware like ASICs dominate the network, it could lead to centralization as the production and distribution of this hardware is often controlled by a small number of entities.
          </p>
          <p className="text-gray-300">
            However, the concept of ASIC resistance is not without controversy. Ergo's lead developer, kushti, has acknowledged the difficulty of achieving perfect ASIC resistance, stating "any algorithm can be optimized with specialized hardware." However, he also notes that the goal is to find a balance that maximizes decentralization while still providing sufficient network security.
          </p>
        </div>

        {/* RandomX vs Autolykos Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* RandomX Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">RandomX (Monero)</h3>
                <p className="text-sm text-gray-400">CPU-optimized algorithm</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              RandomX leverages the complexity of modern CPU design by generating PoW programs with high numbers of random branches, playing to CPU strengths like branch prediction units.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">• Optimized for CPU architecture</p>
              <p className="text-sm text-gray-400">• Vulnerable to botnet infiltration</p>
              <p className="text-sm text-gray-400">• Lower performance per watt</p>
            </div>
          </div>

          {/* Autolykos Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Autolykos (Ergo)</h3>
                <p className="text-sm text-gray-400">GPU-optimized algorithm</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Autolykos strikes a balance between ASIC resistance and accessibility to GPUs, providing robust botnet resistance while maintaining energy efficiency.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">• Optimized for GPU parallel processing</p>
              <p className="text-sm text-gray-400">• Resistant to botnet exploitation</p>
              <p className="text-sm text-gray-400">• Superior energy efficiency</p>
            </div>
          </div>
        </div>

        {/* Decentralization Challenges */}
        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            The Decentralization Dilemma and Botnet Threat
          </h2>
          <p className="text-gray-300 mb-4">
            Monero's RandomX algorithm takes a CPU-centric approach, seeking to leverage the ubiquity of general-purpose processors. Yet in practice, the low barriers to entry have made RandomX a prime target for botnets. By secretly infecting countless computers with mining malware, these botnets can amass significant amounts of illicitly gained hashing power.
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-red-400 mb-2">Notable Botnet Examples:</h3>
            <ul className="space-y-1 text-gray-300">
              <li>• <strong>Smominru:</strong> Infected over 500,000 Windows computers</li>
              <li>• <strong>MyKings:</strong> Estimated to have minted $3 million worth of XMR</li>
              <li>• <strong>Overall Impact:</strong> Core developers estimate ~20% of network hashrate from botnets</li>
            </ul>
          </div>
          <p className="text-gray-300">
            In stark contrast, Ergo's Autolykos algorithm embraces GPU mining. The higher cost of entry makes it far less attractive to botnets, as it's simply not economically viable for hackers to invest in racks of GPUs. As a result, Autolykos achieves a more robust and sustainable form of decentralization.
          </p>
        </div>

        {/* Autolykos Hardening */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Autolykos: Balancing GPU Accessibility and ASIC Resistance
          </h2>
          <p className="text-gray-300 mb-4">
            In 2020, the Ergo community engaged in extensive discussions about potential improvements to the Autolykos algorithm to strengthen its ASIC resistance. These discussions culminated in a "hardening hard-fork" that implemented several key changes:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Memory Hardness</h4>
              <p className="text-sm text-gray-300">Memory access patterns were changed to increase resistance to specialized hardware optimization.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Iteration Count</h4>
              <p className="text-sm text-gray-300">Increased computational intensity making ASIC implementation more costly.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Random Buffer</h4>
              <p className="text-sm text-gray-300">Added random program buffer to increase complexity and irregularity.</p>
            </div>
          </div>
          <p className="text-gray-300">
            These changes were designed to make Autolykos more resistant to ASIC development while still maintaining its accessibility to GPUs.
          </p>
        </div>

        {/* Performance Comparison */}
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-green-400" />
            The Performance Paradigm
          </h2>
          <p className="text-gray-300 mb-4">
            When it comes to raw mining performance, GPUs leave CPUs in the dust. The highly parallel architecture of GPUs is tailor-made for the complex mathematical problems that form the basis of most mining algorithms. Autolykos takes full advantage of this, harnessing the immense computational throughput of GPUs to accelerate the mining process.
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Energy Efficiency Advantages:</h3>
            <p className="text-gray-300 mb-2">
              Modern GPUs are marvels of electrical engineering, designed to deliver maximum performance per watt. When paired with an optimized algorithm like Autolykos, GPUs can process mining problems while maintaining energy efficiency.
            </p>
            <p className="text-gray-300">
              In contrast, general-purpose CPUs are notoriously power-hungry when pushed to their limits, leading to significantly higher energy consumption per hash.
            </p>
          </div>
        </div>

        {/* Lithos Initiative */}
        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            Lithos: Advancing Decentralization in Ergo
          </h2>
          <p className="text-gray-300 mb-4">
            Ergo is actively exploring new ways to further decentralize its mining ecosystem. Lithos is a promising initiative that aims to create a fully decentralized, efficient, and trustless mining pool infrastructure.
          </p>
          <div className="space-y-3">
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <h4 className="font-semibold text-purple-400 mb-1">Protocol Innovation</h4>
              <p className="text-sm text-gray-300">Utilizes a new protocol that verifies miners' work and leverages the Stratum protocol as a networking layer.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <h4 className="font-semibold text-cyan-400 mb-1">Decentralized Mining</h4>
              <p className="text-sm text-gray-300">Allows miners to directly insert necessary transactions into blocks in a decentralized and trustless manner.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <h4 className="font-semibold text-green-400 mb-1">Blockchain Agnostic</h4>
              <p className="text-sm text-gray-300">Designed to potentially support mining pools for any Proof-of-Work (PoW) blockchain.</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-400" />
            Conclusion
          </h2>
          <p className="text-gray-300 mb-4">
            The choice between optimizing a mining algorithm for CPUs or GPUs is complex, with significant implications for the long-term health and viability of a cryptocurrency network. RandomX's CPU-centric approach offers broad accessibility but opens up risks in terms of botnet infiltration and energy inefficiency.
          </p>
          <p className="text-gray-300 mb-4">
            Autolykos, with its focus on GPU mining, provides a compelling alternative. By combining wide accessibility with robust botnet resistance, ASIC resistance, and energy efficiency, Autolykos demonstrates the advantages of GPU mining in practice.
          </p>
          <p className="text-gray-300">
            The rise of specialized hardware like ASICs may be inevitable, but Ergo's goal is not to completely prevent their existence. Instead, Autolykos aims to ensure that no single type of hardware gains a significant advantage over the others, helping to secure the network against the risks of hardware monoculture and centralization.
          </p>
        </div>
      </TabsContent>

      {/* Emission Update Tab */}
      <TabsContent value="emission">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            EIP27: Emission Retargeting Soft-Fork
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            A comprehensive overview of Ergo's tokenomics evolution and the community-driven emission schedule adjustment that ensures long-term network sustainability.
          </p>
        </div>

        {/* Ergo Tokenomics Overview */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-blue-400" />
            Ergo Tokenomics and Emission
          </h2>
          <p className="text-gray-300 mb-4">
            As a Proof of Work blockchain, Ergo has a defined emission schedule for the release of ERG tokens. When Ergo launched in 2019, there was no ICO (initial coin offering), no pre-mine and no pre-allocation of tokens to any founders or venture capitalists.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Total Supply</h4>
              <p className="text-2xl font-bold text-white mb-1">97,739,925</p>
              <p className="text-sm text-gray-300">ERG tokens (fixed supply)</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Foundation Share</h4>
              <p className="text-2xl font-bold text-white mb-1">4.43%</p>
              <p className="text-sm text-gray-300">Received over 2.5 years</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Block Time</h4>
              <p className="text-2xl font-bold text-white mb-1">2 minutes</p>
              <p className="text-sm text-gray-300">Average mining interval</p>
            </div>
          </div>
          <p className="text-gray-300">
            Once the mainnet was activated, Ergo's emission schedule was set to be completed within eight years. After two and a half years, the Ergo Foundation ceased to receive any rewards from the mining protocol.
          </p>
        </div>

        {/* Original Emission Schedule */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-400" />
            The Original Emission Schedule
          </h2>
          <p className="text-gray-300 mb-4">
            Ergo currently mines blocks every two minutes. For the first two years, each block was set to release 75 ERG into circulation. At the end of the 2nd year, the emission rate was set to drop by 3 ERG/block with a schedule that would see block rewards further reduced by 3 ERG every three months.
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-3">Original Schedule Timeline:</h3>
            <div className="space-y-2 text-gray-300">
              <p>• <strong>Years 1-2:</strong> 75 ERG per block</p>
              <p>• <strong>After Year 2:</strong> Reduction of 3 ERG every 3 months</p>
              <p>• <strong>After 8 years:</strong> Complete emission, reliance on fees + Storage Rent</p>
            </div>
          </div>
        </div>

        {/* EIP27 Proposal */}
        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-400" />
            EIP27 and the Adjustment of Ergo's Emission Schedule
          </h2>
          <p className="text-gray-300 mb-4">
            Recently, the Ergo Foundation undertook the initiative to ensure the long-term sustainability of the mining protocol by proposing an amendment to the emission schedule. As the blockchain is still in the early stages of focusing on promotion and development, there was a concern that the ecosystem may need more time before the end of the eight-year emission schedule.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">The Problem</h4>
              <p className="text-gray-300 text-sm">
                If there are not enough dApps and users in the ecosystem at the end of the original emission schedule, there may not be enough transactions to incentivize miners to maintain the network.
              </p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">The Solution</h4>
              <p className="text-gray-300 text-sm">
                EIP27 extends Ergo emissions by approximately 17.38 years, offering time to develop the necessary crypto-economic security for the blockchain until approximately 2045.
              </p>
            </div>
          </div>
          <p className="text-gray-300">
            Ergo's co-founder, Alex Chepurnoy, proposed this solution. The plan alters the amount of the block rewards so that a portion of the supply can be put into a remission contract that will release block rewards until approximately 2045.
          </p>
        </div>

        {/* Community Voting */}
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-400" />
            Community Consensus and Implementation
          </h2>
          <p className="text-gray-300 mb-4">
            On Ergo, miners enjoy the ability to suggest and vote on proposed changes to the network. With EIP27, the proposal required a 90% pass vote in order to be scheduled for implementation.
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-400 font-semibold">Voting Results</span>
              <span className="text-white font-bold">✓ PASSED</span>
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-3 mb-2">
              <div className="bg-green-500 h-3 rounded-full" style={{width: '92%'}}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-300">
              <span>Required: 90%</span>
              <span>Achieved: 92%+</span>
            </div>
          </div>
          <p className="text-gray-300">
            The mining community voted over 90% in favor of this proposal and after successful testnet implementation, the new emission schedule is slated for deployment with block #777217.
          </p>
        </div>

        {/* Technical Implementation */}
        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-yellow-400" />
            Remission Contract Rules
          </h2>
          <p className="text-gray-300 mb-4">
            Chepurnoy provided the following breakdown of the remission in a recent EIP27 update on an Ergo Forum post:
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">Rule 1: High Block Rewards</h4>
              <p className="text-gray-300 text-sm mb-2">
                "If block reward is not less than 15 ERG, send 12 ERG from it to the remission contract"
              </p>
              <div className="bg-neutral-700/50 rounded p-2">
                <span className="text-green-400 font-mono text-sm">Block Reward ≥ 15 ERG → Remission = 12 ERG</span>
              </div>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Rule 2: Low Block Rewards</h4>
              <p className="text-gray-300 text-sm mb-2">
                "Otherwise, block reward R is less than 15 ERG, send R - 3 ERG from it to the remission contract"
              </p>
              <div className="bg-neutral-700/50 rounded p-2">
                <span className="text-blue-400 font-mono text-sm">Block Reward &lt; 15 ERG → Remission = R - 3 ERG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-cyan-400" />
            Implementation Timeline and Schedule
          </h2>
          <p className="text-gray-300 mb-4">
            These new emission rules will be integrated with the original emission schedule of the Whitepaper. Currently, block rewards are reduced every three months by 3 ERG/block - this will still be the case after EIP27 is activated.
          </p>
          <div className="space-y-3">
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-cyan-400 font-semibold">Activation Block</span>
                <span className="text-white font-mono">#777217</span>
              </div>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">Initial Block Reward</span>
                <span className="text-white font-mono">51 ERG/block</span>
              </div>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-semibold">Reduction Schedule</span>
                <span className="text-white">3 ERG every 3 months</span>
              </div>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-orange-400 font-semibold">Minimum Reward</span>
                <span className="text-white font-mono">3 ERG/block</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mt-4">
            Block rewards will remain steady at 3 ERG/block until the remission contract has been depleted.
          </p>
        </div>

        {/* Conclusion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-400" />
            Long-term Sustainability Commitment
          </h2>
          <p className="text-gray-300 mb-4">
            EIP27 is a commitment to ensuring the long-term and sustained growth of Ergo. Since changes in the emission schedule can not be implemented without consensus within the mining community (90% pass is required), EIP27 represents the collaborative spirit of the Ergo community to collectively build a better blockchain for everyone.
          </p>
          <div className="bg-green-400/20 border border-green-400/30 rounded-lg p-4">
            <p className="text-green-200 text-sm">
              <strong>Community-Driven Decision:</strong> This emission adjustment demonstrates Ergo's commitment to decentralized governance, where miners have the power to shape the network's future through consensus-based voting mechanisms.
            </p>
          </div>
        </div>
      </TabsContent>

      {/* Adaptive Difficulty Tab */}
      <TabsContent value="difficulty">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-blue-400" /> Adaptive Difficulty
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>
    </Tabs>
  );
} 