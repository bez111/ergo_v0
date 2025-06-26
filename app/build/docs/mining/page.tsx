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
          How to participate in Ergo mining: hardware, pools, solo mining, and optimization tips.
        </p>
      </div>

      {/* Overview & Hardware */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400"><Zap className="w-6 h-6" /> Overview & Hardware</h2>
        <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Algorithm:</b> Autolykos v2 (memory-intensive, ASIC-resistant, GPU mining).</li>
            <li><b>GPU:</b> AMD RX 400/500/5000/6000/7000, NVIDIA GTX 10/RTX 20/30/40, 4 GB+ VRAM (8 GB+ recommended).</li>
            <li><b>RAM:</b> 8 GB or more.</li>
            <li><b>CPU:</b> Modern Intel/AMD (i3/i5, Ryzen 3/5).</li>
            <li><b>Storage:</b> SSD (120 GB+).</li>
            <li><b>OS:</b> Linux (Ubuntu, HiveOS, RaveOS), Windows.</li>
          </ul>
        </div>
      </section>

      {/* Hardware Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Monitor className="w-6 h-6" /> Setting up Mining Hardware</h2>
        <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Install latest stable GPU drivers.</li>
            <li>Increase virtual memory (Windows): set paging file to 16 GB+.</li>
            <li>Overclock GPU memory, reduce core clock and power limit for efficiency.</li>
            <li>Use tools: MSI Afterburner (Windows), TeamRedMiner/Gminer (Linux).</li>
          </ul>
        </div>
      </section>

      {/* Mining Pools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Link2 className="w-6 h-6" /> Mining Pools</h2>
        <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 mb-4">
          <div className="mb-2 text-gray-300">Recommended for most miners for stable payouts.</div>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link href="https://woolypooly.com/en/coin/erg" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">WoolyPooly <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <Link href="https://nanopool.org/coin/erg" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Nanopool <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <Link href="https://2miners.com/ru/erg-mining-pool" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">2Miners <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <Link href="https://herominers.com/" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Herominers <ExternalLink className="w-4 h-4 ml-1" /></Link>
          </div>
          <div className="mb-2 text-gray-300">Popular miners: TeamRedMiner (AMD), Gminer (NVIDIA/AMD), NBminer (NVIDIA/AMD).</div>
          <div className="mt-4">
            <span className="text-gray-400 text-sm">Example Gminer config (replace <b>YOUR_ERGO_WALLET_ADDRESS</b> and <b>YOUR_WORKER_NAME</b>):</span>
            <div className="bg-neutral-900/80 border border-blue-500/20 rounded-lg p-4 my-2 overflow-x-auto">
              <pre className="text-orange-200 text-sm"><code>{`miner.exe --algo autolykos2 --server stratum+tcp://erg.2miners.com:9090 --user YOUR_ERGO_WALLET_ADDRESS.YOUR_WORKER_NAME
pause`}</code></pre>
            </div>
            <span className="text-gray-400 text-sm">Linux:</span>
            <div className="bg-neutral-900/80 border border-blue-500/20 rounded-lg p-4 my-2 overflow-x-auto">
              <pre className="text-orange-200 text-sm"><code>{`./miner --algo autolykos2 --server stratum+tcp://erg.2miners.com:9090 --user YOUR_ERGO_WALLET_ADDRESS.YOUR_WORKER_NAME`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Solo Mining */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400"><Server className="w-6 h-6" /> Solo Mining (Advanced)</h2>
        <div className="bg-neutral-900/60 border border-purple-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Run a fully synced Ergo node with RPC API enabled.</li>
            <li>Configure miner to use your local node as the server.</li>
          </ul>
          <div className="mt-4">
            <span className="text-gray-400 text-sm">Example Gminer config for solo mining:</span>
            <div className="bg-neutral-900/80 border border-purple-500/20 rounded-lg p-4 my-2 overflow-x-auto">
              <pre className="text-orange-200 text-sm"><code>{`./miner --algo autolykos2 --server http://localhost:9053 --user YOUR_ERGO_WALLET_ADDRESS`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Profitability & Monitoring */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400"><BarChart2 className="w-6 h-6" /> Profitability & Monitoring</h2>
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Use online calculators (WhatToMine, pool sites) to estimate profitability.</li>
            <li>Monitor your stats on pool dashboards (hashrate, shares, payouts).</li>
            <li>Monitor GPU temperature, power, and hashrate with mining software.</li>
          </ul>
        </div>
      </section>
    </>
  )
} 