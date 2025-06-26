import {
  Search,
  Wallet,
  Terminal,
  Bug,
  Globe,
  Database,
  ExternalLink,
  ChevronRight,
  Smartphone,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Developer Tools
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Overview and instructions for using tools that facilitate Ergo development: explorers, wallets, debuggers, CLI, and testnets.
        </p>
      </div>

      {/* Block Explorers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Search className="w-6 h-6" /> Block Explorers</h2>
        <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <Link href="https://explorer.ergoplatform.com" target="_blank" className="text-orange-400 hover:underline font-semibold">Ergo Explorer</Link>
          </div>
          <ul className="list-disc list-inside text-gray-300 mb-2">
            <li>Search by transaction ID, box ID, address, or token ID for details.</li>
            <li>View latest blocks, their contents, and transactions.</li>
            <li>Analyze addresses: balances, transaction history.</li>
            <li>Box details: scripts (ErgoTree), register data.</li>
          </ul>
          <div className="text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Useful for debugging, contract state checks, and network monitoring.
          </div>
        </div>
      </section>

      {/* Wallets */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Wallet className="w-6 h-6" /> Wallets</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Nautilus Wallet */}
          <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><Wallet className="w-5 h-5 text-green-400" /> Nautilus Wallet (Browser Extension)</div>
            <Link href="https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Install <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <span className="text-gray-400 text-sm">User-friendly, dApp integration, hardware wallet support.</span>
          </div>
          {/* Ergo Reference Wallet */}
          <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><Database className="w-5 h-5 text-orange-400" /> Ergo Reference Wallet (Desktop)</div>
            <Link href="https://github.com/ergoplatform/ergo-wallet/releases" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">Download <ExternalLink className="w-4 h-4 ml-1" /></Link>
            <span className="text-gray-400 text-sm">Full control over keys, "view-only" mode.</span>
          </div>
          {/* Ergo Mobile Wallet */}
          <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-cyan-400" /> Ergo Mobile Wallet (Android/iOS)</div>
            <span className="text-gray-400 text-sm">Available on Google Play and App Store. Basic send/receive functions.</span>
          </div>
        </div>
      </section>

      {/* ErgoScript Debuggers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400"><Bug className="w-6 h-6" /> ErgoScript Debuggers</h2>
        <div className="bg-neutral-900/60 border border-purple-500/30 rounded-xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/build/playground" className="text-orange-400 hover:underline font-semibold">Ergo Playground</Link>
            <ChevronRight className="w-4 h-4 text-orange-400" />
            <span className="text-gray-400">Simulator for step-by-step script execution.</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 mb-2">
            <li>Step through scripts, see context changes.</li>
            <li>Great for learning and debugging contracts.</li>
            <li>Third-party debuggers are emerging in the community.</li>
          </ul>
        </div>
      </section>

      {/* Command Line Utilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400"><Terminal className="w-6 h-6" /> Command Line Utilities</h2>
        <div className="bg-neutral-900/60 border border-yellow-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 mb-2">
            <li><span className="font-mono">ergo.jar</span> (Node CLI): Manage node and wallet.</li>
            <li><span className="font-mono">curl / wget</span>: Send HTTP requests to RPC API.</li>
            <li><span className="font-mono">jq</span>: Parse JSON responses in the terminal.</li>
          </ul>
          <div className="text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Automate tasks and interact with the node at a low level.
          </div>
        </div>
      </section>

      {/* Testnets */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400"><Globe className="w-6 h-6" /> Testnets</h2>
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 mb-2">
            <li>Configure your node with <span className="font-mono">network = "testnet"</span> in <span className="font-mono">ergo.conf</span>.</li>
            <li>Get free test ERG from the <Link href="https://testnet.ergofaucet.org/" target="_blank" className="text-orange-400 hover:underline">Ergo Testnet Faucet</Link>.</li>
            <li>Use public testnet nodes for quick testing (see Ergo community for up-to-date lists).</li>
          </ul>
          <div className="text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Always start on testnet to avoid losing real funds.
          </div>
        </div>
      </section>
    </>
  )
} 