"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { AlertTriangle, CheckCircle, Lock, Users, Cpu, Coins, Database, Globe, BookOpen, Shield, Key, Star, ExternalLink } from "lucide-react";

export default function MisconceptionsPage() {
  return (
    <div className="px-4 max-w-3xl mx-auto pb-24">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Common Misconceptions
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          FUD FAQ
        </p>
        <p className="text-lg text-gray-300 mb-2">
          This page aims to provide some clarity around some common misconceptions that have cropped up about Ergo.
        </p>
      </div>

      {/* Emission Myths */}
      <div className="bg-orange-400/10 border border-orange-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Coins className="w-5 h-5 text-orange-400" /> Emission
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li><b>Myth:</b> Ergo developers can manipulate the emission.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: The emission process is controlled by a transparent smart contract, visible in the source code. Any changes require miner consensus and are public on-chain. See EIP-27 and the foundational paper 'Soft Power: Upgrading Chain Macroeconomic Policy Through Soft Forks'.</span>
          </li>
          <li><b>Myth:</b> All Erg was pre-mined.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Coins were produced at genesis and systematically awarded to miners. The emission contract is public and does not allow arbitrary extraction by developers.</span>
          </li>
          <li><b>Myth:</b> There are out-of-thin-air emissions in the "coinbase" transaction.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Ergo prohibits out-of-thin-air emission in the coinbase transaction. Every coin is traceable and originates from a legitimate source.</span>
          </li>
          <li><b>Myth:</b> EFYT was an ICO.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: EFYT was an airdrop to foster community, not a traditional ICO. It constitutes less than 1% of supply.</span>
          </li>
          <li><b>Myth:</b> Ergo won't be able to support miners after emissions ends.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: After emissions, miners are incentivized by transaction fees, MEV, storage rent, and potentially custom emission contracts (FIMO). Off-chain bots and new DeFi tools also provide rewards.</span>
          </li>
        </ul>
      </div>

      {/* Mining Myths */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" /> Mining
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Myth:</b> ASICs will take over Ergo.<br/>
            <span className="text-gray-400">Fact: The algorithm is designed to neutralize ASIC advantage. No known serious ASIC efforts exist. The community can hardfork if needed.</span>
          </li>
          <li><b>Myth:</b> FPGAs are already taking over Ergo.<br/>
            <span className="text-gray-400">Fact: FPGAs are not competitive due to chip shortages and ROI. SRAM is not feasible long-term due to memory requirements.</span>
          </li>
          <li><b>Myth:</b> Ergo is at risk of a 51% attack.<br/>
            <span className="text-gray-400">Fact: Real-world risk is low. Decentralized mining pool projects like Lithos further reduce risk. See miningpoolstats and Lithos project for more info.</span>
          </li>
          <li><b>Myth:</b> Ergo ignored miners who warned about the difficulty algorithm.<br/>
            <span className="text-gray-400">Fact: Miners' concerns were considered. The EIP process now encourages greater miner participation and transparency.</span>
          </li>
          <li><b>Myth:</b> Ergo's difficulty adjustment algorithm is being manipulated.<br/>
            <span className="text-gray-400">Fact: The algorithm maintains the intended block time. Fluctuations are monitored and the community can propose changes if needed.</span>
          </li>
        </ul>
      </div>

      {/* Organisational Myths */}
      <div className="bg-blue-400/10 border border-blue-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-400" /> Organisational
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li><b>Myth:</b> Ergo's marketing sucks.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Ergo prioritizes organic, community-driven growth and education over conventional marketing. The Sigmanauts programme empowers the community to lead initiatives.</span>
          </li>
          <li><b>Myth:</b> Ergo won't succeed without VC investment.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Ergo thrives without VC funding, avoiding centralization and conflicts of interest. Progress is driven by the community and robust technology.</span>
          </li>
          <li><b>Myth:</b> The Foundation is centralized.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: The Foundation's role is transitional. As the network matures, the community takes over. See the Transparency Report for more info.</span>
          </li>
          <li><b>Myth:</b> Ergo could not operate without its foundation.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Ergo is open-source and permissionless. The ecosystem is becoming more decentralized and would persist without the Foundation.</span>
          </li>
          <li><b>Myth:</b> Ergo is a 'Russian coin'.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Ergo is a global project with contributors worldwide. Its decentralized nature prevents influence from any single country.</span>
          </li>
          <li><b>Myth:</b> Ergo is an unregistered security.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Based on the Howey Test, Ergo is not considered a security. The initial allocation was for ecosystem development, not investment.</span>
          </li>
          <li><b>Myth:</b> The Foundation's actions are causing price depreciation.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Foundation expenses are a tiny fraction of trading volume. Most payments are in ERG and recipients manage them independently.</span>
          </li>
        </ul>
      </div>

      {/* Ecosystem Myths */}
      <div className="bg-green-400/10 border border-green-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Globe className="w-5 h-5 text-green-400" /> Ecosystem
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li><b>Myth:</b> Ergo's TVL ratio is too low.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: TVL is growing as infrastructure matures. The Rosen Bridge and new dApps are increasing liquidity and utility.</span>
          </li>
          <li><b>Myth:</b> The ecosystem isn't growing.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: The number of dApps and developers is increasing. Track growth on DefiLlama and Artemus.</span>
          </li>
          <li><b>Myth:</b> This new stablecoin will kill SigmaUSD.<br/>
            <span className="text-gray-600 dark:text-gray-400">Fact: Multiple stablecoins can coexist. Competition drives innovation and benefits users.</span>
          </li>
        </ul>
      </div>

      {/* Technical Myths */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Key className="w-5 h-5 text-cyan-400" /> Technical
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Myth:</b> eUTXO is too difficult for developers.<br/>
            <span className="text-gray-400">Fact: eUTXO offers flexibility and security. Resources and tutorials are making it more accessible.</span>
          </li>
          <li><b>Myth:</b> Ergo should've used an easier language than Scala.<br/>
            <span className="text-gray-400">Fact: Scala is concise, efficient, and cross-platform. Off-chain code can be written in many languages. SDKs are available for JVM, Rust, JS/TS.</span>
          </li>
          <li><b>Myth:</b> Ergo's lack of in-built sharding means it won't scale with atomic composability.<br/>
            <span className="text-gray-400">Fact: Ergo uses other strategies for scalability and atomic composability, including eUTXO, Layer 2, and ACE concepts.</span>
          </li>
          <li><b>Myth:</b> Proof of Work is not sustainable.<br/>
            <span className="text-gray-400">Fact: PoW's energy use is proportional to value and security. More efficient mining solutions are emerging.</span>
          </li>
          <li><b>Myth:</b> Proof of Work may face increased regulatory scrutiny.<br/>
            <span className="text-gray-400">Fact: Legal challenges are complex. Fair-launch PoW chains are best positioned to weather regulation.</span>
          </li>
          <li><b>Myth:</b> Ergo is a privacy coin.<br/>
            <span className="text-gray-400">Fact: Privacy is optional and not unique to Ergo. Transparent and private transactions are both supported.</span>
          </li>
          <li><b>Myth:</b> Ergo transactions are too slow.<br/>
            <span className="text-gray-400">Fact: 2-minute block interval is strategic for security and smart contracts. Weak blocks and scaling methods improve throughput.</span>
          </li>
          <li><b>Myth:</b> Ergo's development is too slow.<br/>
            <span className="text-gray-400">Fact: The eUTXO model and fair start require careful implementation. The approach ensures long-term sustainability and fairness.</span>
          </li>
          <li><b>Myth:</b> Ergo is at risk of quantum attacks.<br/>
            <span className="text-gray-400">Fact: Quantum computers are not yet practical. Ergo monitors developments and will adapt as needed.</span>
          </li>
          <li><b>Myth:</b> There is nothing unique in Ergo.<br/>
            <span className="text-gray-400">Fact: ErgoScript, Sigma Protocols, NIPoPoWs, Storage Rent, and the eUTXO model make Ergo unique. See the Discover Ergo document for more.</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 