import {
  Server,
  Download,
  Settings,
  Terminal,
  FileText,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Database,
  Info,
} from "lucide-react"
import Link from "next/link"

export default function NodePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Running an Ergo Node
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Step-by-step guide to deploying and configuring a full Ergo node for direct, trustless blockchain access.
        </p>
      </div>

      {/* Installation Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Download className="w-6 h-6" /> Choosing an Installation Method</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><Download className="w-5 h-5 text-blue-400" /> Pre-built Binaries</div>
            <span className="text-gray-400 text-sm">Recommended for most users. Download and run the executable.</span>
          </div>
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><Database className="w-5 h-5 text-cyan-400" /> Docker</div>
            <span className="text-gray-400 text-sm">For containerized environments. Use the official Docker image.</span>
          </div>
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-orange-400" /> Build from Source</div>
            <span className="text-gray-400 text-sm">For advanced users. Requires SBT and JDK.</span>
          </div>
        </div>
      </section>

      {/* Step-by-step Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Terminal className="w-6 h-6" /> Step-by-step Installation (Binaries)</h2>
        <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 mb-4">
          <ol className="list-decimal list-inside text-gray-300 space-y-3">
            <li>
              <b>Download:</b> <Link href="https://github.com/ergoplatform/ergo/releases" target="_blank" className="text-orange-400 hover:underline">Ergo Node GitHub Releases <ExternalLink className="w-4 h-4 inline" /></Link>
            </li>
            <li>
              <b>Unpack:</b> Extract the archive to your chosen directory (e.g., <span className="font-mono">/opt/ergo</span> or <span className="font-mono">C:\ErgoNode</span>).
            </li>
            <li>
              <b>Configure:</b> Copy <span className="font-mono">ergo.conf.template</span> to <span className="font-mono">ergo.conf</span> and edit settings:
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li><b>Network:</b> <span className="font-mono">ergo.network.network = "mainnet"</span> or <span className="font-mono">"testnet"</span></li>
                <li><b>Data Directory:</b> <span className="font-mono">ergo.directory = "/path/to/your/data"</span></li>
                <li><b>RPC API:</b> <span className="font-mono">ergo.restApi.bindAddress = "0.0.0.0:9053"</span> (be careful with security!)</li>
                <li><b>API Key:</b> <span className="font-mono">ergo.restApi.apiKeys = ["your_secret_api_key"]</span></li>
                <li><b>API Modules:</b> <span className="font-mono">ergo.restApi.use = ["wallet", "blockchain", "mining", "utils", "peers"]</span></li>
                <li><b>Wallet:</b> <span className="font-mono">ergo.wallet.mnemonicPass</span> and <span className="font-mono">ergo.wallet.secretStorage</span></li>
              </ul>
            </li>
            <li>
              <b>Start the node:</b>
              <div className="bg-neutral-900/80 border border-green-500/20 rounded-lg p-4 my-2 overflow-x-auto">
                <pre className="text-orange-200 text-sm"><code>{`java -jar ergo.jar -c ergo.conf`}</code></pre>
              </div>
              <span className="text-gray-400 text-sm">To run in background (Linux/macOS):</span>
              <div className="bg-neutral-900/80 border border-green-500/20 rounded-lg p-4 my-2 overflow-x-auto">
                <pre className="text-orange-200 text-sm"><code>{`nohup java -jar ergo.jar -c ergo.conf > ergo_node.log 2>&1 &`}</code></pre>
              </div>
            </li>
            <li>
              <b>Monitor:</b> Check logs and use the RPC API:
              <div className="bg-neutral-900/80 border border-green-500/20 rounded-lg p-4 my-2 overflow-x-auto">
                <pre className="text-orange-200 text-sm"><code>{`curl http://localhost:9053/info`}</code></pre>
              </div>
              <span className="text-gray-400 text-sm">Check <Link href="https://explorer.ergoplatform.com" target="_blank" className="text-orange-400 hover:underline">Ergo Explorer</Link> for your node's status.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Syncing & Blockchain Data */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400"><Database className="w-6 h-6" /> Syncing & Blockchain Data</h2>
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Initial sync downloads and verifies the full blockchain. May take hours or days.</li>
            <li>Data stored in <span className="font-mono">ergo.directory</span>. Ensure enough disk space.</li>
            <li>Accelerate sync with blockchain snapshots (see official resources for instructions).</li>
          </ul>
        </div>
      </section>

      {/* Node Updates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400"><Settings className="w-6 h-6" /> Node Updates</h2>
        <div className="bg-neutral-900/60 border border-yellow-500/30 rounded-xl p-6 mb-4">
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Stop the node.</li>
            <li>Download the new version from <Link href="https://github.com/ergoplatform/ergo/releases" target="_blank" className="text-orange-400 hover:underline">GitHub Releases <ExternalLink className="w-4 h-4 inline" /></Link>.</li>
            <li>Replace <span className="font-mono">ergo.jar</span> with the new one.</li>
            <li>Check <span className="font-mono">ergo.conf.template</span> for changes and update <span className="font-mono">ergo.conf</span> if needed.</li>
            <li>Start the new version.</li>
          </ol>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Always back up your data and wallet before updating!</span>
          </div>
        </div>
      </section>
    </>
  )
} 