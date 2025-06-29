import {
  Cpu,
  Database,
  Server,
  MemoryStick,
  HardDrive,
  Terminal,
  AlertTriangle,
  Info,
  ExternalLink,
  ChevronRight,
  Monitor,
  Zap,
  BarChart2,
  Link2,
} from "lucide-react"
import Link from "next/link"

export default function MiningPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Ergo Mining
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Participate in securing the Ergo blockchain and earn rewards by mining ERG. This comprehensive guide covers everything from hardware setup and software configuration to pool mining, solo mining, and profitability optimization.
        </p>
      </div>

      {/* Overview & Hardware */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400"><Zap className="w-6 h-6" /> Autolykos v2: Ergo's Mining Algorithm & Hardware Requirements</h2>
        <p className="text-gray-300 mb-6">
          Ergo utilizes Autolykos v2, a unique Proof-of-Work (PoW) algorithm designed to be ASIC-resistant and GPU-friendly. Understanding its characteristics is key to efficient mining.
        </p>
        <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 mb-4">
          <h3 className="font-semibold mb-3 text-orange-400">Autolykos v2 Characteristics:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Memory-Hard:** The algorithm is memory-intensive, meaning it requires significant RAM on your GPU. This design choice makes it difficult and expensive to develop specialized ASIC hardware, promoting decentralization.
            </li>
            <li>
              **ASIC-Resistant:** By being memory-hard, Autolykos v2 aims to prevent the dominance of large-scale ASIC farms, allowing individual GPU miners to remain competitive.
            </li>
            <li>
              **GPU-Friendly:** Optimized for general-purpose GPUs, making it accessible to a wide range of miners using consumer-grade hardware.
            </li>
            <li>
              **Dynamic Difficulty:** The network automatically adjusts the mining difficulty to maintain a consistent block time (approximately 2 minutes), ensuring a steady flow of new blocks.
            </li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-orange-400">Minimum Hardware Requirements:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **GPU:** AMD RX 400/500/5000/6000/7000 series, NVIDIA GTX 10/RTX 20/30/40 series. **Minimum 4 GB VRAM, 8 GB+ recommended** for optimal performance and future-proofing.
            </li>
            <li>
              **RAM:** 8 GB or more system RAM.
            </li>
            <li>
              **CPU:** Modern Intel (i3/i5 equivalent or newer) or AMD (Ryzen 3/5 equivalent or newer).
            </li>
            <li>
              **Storage:** SSD (Solid State Drive) with at least 120 GB free space for the operating system and mining software. More space is needed if running a full Ergo node.
            </li>
            <li>
              **Operating System:** Linux (e.g., Ubuntu, HiveOS, RaveOS) is generally preferred for mining due to better performance and stability, but Windows is also supported.
            </li>
          </ul>
        </div>
      </section>

      {/* Hardware Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Monitor className="w-6 h-6" /> Setting up Your Mining Hardware & Software</h2>
        <p className="text-gray-300 mb-6">
          Proper configuration of your hardware and mining software is essential for maximizing your mining efficiency and profitability.
        </p>
        <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 mb-4">
          <h3 className="font-semibold mb-3 text-green-400">Hardware & OS Preparation:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Install Latest GPU Drivers:** Always ensure you have the most recent stable drivers for your graphics cards. Outdated drivers can significantly impact performance.
            </li>
            <li>
              **Increase Virtual Memory (Windows):** On Windows, set your paging file (virtual memory) to at least 16 GB or more, especially if you have multiple GPUs. This is crucial for Autolykos v2's memory-hard nature.
            </li>
            <li>
              **Linux Optimizations:** For Linux-based mining rigs, consider using specialized mining operating systems like HiveOS or RaveOS, which come pre-configured with optimizations and mining software.
            </li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-green-400">GPU Overclocking & Undervolting:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Memory Overclocking:** Autolykos v2 is memory-intensive, so increasing your GPU's memory clock speed will directly improve your hashrate. Experiment with values to find stability.
            </li>
            <li>
              **Core Clock & Power Limit Reduction:** Reduce your GPU's core clock and power limit. This will lower power consumption and heat generation without significantly impacting Autolykos v2 performance, as it's less dependent on core clock.
            </li>
            <li>
              **Tools:** Use tools like MSI Afterburner (Windows) or command-line utilities (Linux) for precise control over your GPU settings.
            </li>
          </ul>
        </div>
      </section>

      {/* Mining Pools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Link2 className="w-6 h-6" /> Pool Mining: Joining a Mining Pool</h2>
        <p className="text-gray-300 mb-6">
          For most individual miners, joining a mining pool is highly recommended. Mining pools combine the hashrate of many miners, increasing the frequency of finding blocks and providing more consistent, smaller payouts, rather than waiting for a rare solo block reward.
        </p>
        <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 mb-4">
          <h3 className="font-semibold mb-3 text-blue-400">Popular Ergo Mining Pools:</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link href="https://woolypooly.com/en/coin/erg" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">WoolyPooly <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <Link href="https://nanopool.org/coin/erg" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Nanopool <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <Link href="https://2miners.com/ru/erg-mining-pool" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">2Miners <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <Link href="https://herominers.com/" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Herominers <ExternalLink className="w-4 h-4 ml-1" /></Link>
          </div>
          <h3 className="font-semibold mt-6 mb-3 text-blue-400">Recommended Mining Software:</h3>
          <p className="text-gray-300 text-sm mb-3">
            Choose a miner compatible with Autolykos v2. Popular choices include:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
            <li>**TeamRedMiner:** (AMD GPUs)</li>
            <li>**Gminer:** (NVIDIA/AMD GPUs)</li>
            <li>**NBminer:** (NVIDIA/AMD GPUs)</li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-blue-400">Configuration Example (Gminer):</h3>
          <p className="text-gray-300 text-sm mb-3">
            Replace `YOUR_ERGO_WALLET_ADDRESS` with your actual Ergo wallet address and `YOUR_WORKER_NAME` with a name for your mining rig.
          </p>
          <p className="text-gray-300 text-sm mb-1">**Windows (.bat file):**</p>
          <div className="bg-neutral-900/80 border border-blue-500/20 rounded-lg p-4 my-2 overflow-x-auto">
            <pre className="text-orange-200 text-sm"><code>{`miner.exe --algo autolykos2 --server stratum+tcp://erg.2miners.com:9090 --user YOUR_ERGO_WALLET_ADDRESS.YOUR_WORKER_NAME
pause`}</code></pre>
          </div>
          <p className="text-gray-300 text-sm mb-1">**Linux (command line):**</p>
          <div className="bg-neutral-900/80 border border-blue-500/20 rounded-lg p-4 my-2 overflow-x-auto">
            <pre className="text-orange-200 text-sm"><code>{`./miner --algo autolykos2 --server stratum+tcp://erg.2miners.com:9090 --user YOUR_ERGO_WALLET_ADDRESS.YOUR_WORKER_NAME`}</code></pre>
          </div>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Always verify the pool's stratum address and port on their official website.
          </div>
        </div>
      </section>

      {/* Solo Mining */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400"><Server className="w-6 h-6" /> Solo Mining: For Advanced Users</h2>
        <p className="text-gray-300 mb-6">
          Solo mining means you are mining blocks independently, without joining a pool. While the rewards are less frequent, if you find a block, you receive the entire block reward and transaction fees. This method requires a significant amount of hashrate and a fully synchronized Ergo node.
        </p>
        <div className="bg-neutral-900/60 border border-purple-500/30 rounded-xl p-6 mb-4">
          <h3 className="font-semibold mb-3 text-purple-400">Requirements for Solo Mining:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Fully Synced Ergo Node:** You must run your own full Ergo node with its RPC API enabled. Your miner will connect directly to your local node.
            </li>
            <li>
              **Significant Hashrate:** Solo mining is a lottery. Without a very high hashrate, finding a block can take a very long time (months or even years).
            </li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-purple-400">Configuration Example (Gminer for Solo Mining):</h3>
          <p className="text-gray-300 text-sm mb-3">
            Ensure your Ergo node is running and its RPC API is accessible (typically `http://localhost:9053`).
          </p>
          <pre className="bg-black text-orange-200 text-sm p-3 rounded-lg overflow-x-auto font-mono">{`./miner --algo autolykos2 --server http://localhost:9053 --user YOUR_ERGO_WALLET_ADDRESS`}</pre>
          <p className="text-gray-400 text-xs mt-2">
            Replace `YOUR_ERGO_WALLET_ADDRESS` with the address of the wallet associated with your local node.
          </p>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Solo mining is generally not recommended for most miners due to the high variance in rewards. Pool mining offers more consistent payouts.
          </div>
        </div>
      </section>

      {/* Profitability & Monitoring */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400"><BarChart2 className="w-6 h-6" /> Profitability & Monitoring</h2>
        <p className="text-gray-300 mb-6">
          Monitoring your mining operation's profitability and performance is crucial for long-term success. Several tools and resources can help you track your earnings and optimize your setup.
        </p>
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 mb-4">
          <h3 className="font-semibold mb-3 text-cyan-400">Estimating Profitability:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Online Calculators:** Use websites like WhatToMine or dedicated pool profitability calculators to estimate your potential earnings based on your hashrate, power consumption, and current network conditions.
            </li>
            <li>
              **Factors to Consider:** Electricity costs, hardware efficiency, network difficulty, and ERG price fluctuations will all impact your profitability.
            </li>
          </ul>
          <h3 className="font-semibold mt-6 mb-3 text-cyan-400">Monitoring Your Mining Operation:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Pool Dashboards:** If you're pool mining, your chosen pool will provide a dashboard to monitor your hashrate, submitted shares, estimated earnings, and payout history.
            </li>
            <li>
              **Mining Software Logs:** Your mining software (e.g., Gminer, TeamRedMiner) will display real-time hashrate, temperature, power consumption, and any errors.
            </li>
            <li>
              **GPU Monitoring Tools:** Use tools specific to your GPU (e.g., GPU-Z, HWMonitor) to keep an eye on temperatures, fan speeds, and power draw.
            </li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Contribute to Ergo's Security</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Run a Full Ergo Node</h4>
            <p className="text-gray-400 text-sm mb-3">
              Support the network's decentralization and gain direct access to blockchain data.
            </p>
            <Link
              href="/build/docs/node"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Node Setup Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Explore Ergo's Economic Model</h4>
            <p className="text-gray-400 text-sm mb-3">
              Understand the unique aspects of Ergo's fees, emission, and storage rent.
            </p>
            <Link
              href="/build/docs/fees"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              Fees & Mining Overview <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 