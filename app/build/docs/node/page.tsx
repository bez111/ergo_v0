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
          Become a fundamental part of the Ergo network by running your own full node. This guide provides step-by-step instructions for deploying, configuring, and maintaining an Ergo node, giving you direct, trustless access to the blockchain.
        </p>
      </div>

      {/* Installation Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Download className="w-6 h-6" /> Choosing Your Node Installation Method</h2>
        <p className="text-gray-300 mb-6">
          Ergo offers several ways to run a full node, catering to different levels of technical expertise and deployment preferences. Choose the method that best suits your needs:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-400" /> Pre-built Binaries
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              **Recommended for most users.** This is the simplest way to get started. You download a ready-to-run `.jar` file and execute it directly.
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
              <li>**Pros:** Easiest setup, no compilation required.</li>
              <li>**Cons:** Less control over build process, relies on pre-compiled versions.</li>
            </ul>
          </div>
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Database className="w-5 h-5 text-cyan-400" /> Docker
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Ideal for containerized environments, cloud deployments, or users who prefer isolated setups. Uses the official Ergo Docker image.
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
              <li>**Pros:** Isolated environment, easy deployment, consistent across platforms.</li>
              <li>**Cons:** Requires Docker knowledge, slight overhead.</li>
            </ul>
          </div>
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-400" /> Build from Source
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              For advanced users, developers, or those who need to customize the node. Requires Scala Build Tool (SBT) and JDK.
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
              <li>**Pros:** Full control, latest features, contributes to decentralization.</li>
              <li>**Cons:** More complex setup, requires development tools.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step-by-step Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Terminal className="w-6 h-6" /> Step-by-step Installation: Pre-built Binaries</h2>
        <p className="text-gray-300 mb-6">
          This guide focuses on installing the Ergo node using pre-built binaries, which is the recommended method for most users due to its simplicity.
        </p>
        <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 mb-4">
          <ol className="list-decimal list-inside text-gray-300 space-y-3">
            <li>
              <b>Download the latest release:</b> Visit the official Ergo Node GitHub releases page and download the `.jar` file for your operating system.
              <Link href="https://github.com/ergoplatform/ergo/releases" target="_blank" className="text-orange-400 hover:underline inline-flex items-center ml-2">
                Ergo Node GitHub Releases <ExternalLink className="w-4 h-4 inline" />
              </Link>
            </li>
            <li>
              <b>Unpack the archive:</b> Extract the downloaded `.jar` file to a directory of your choice (e.g., <span className="font-mono">/opt/ergo</span> on Linux/macOS or <span className="font-mono">C:\ErgoNode</span> on Windows). This will be your node's working directory.
            </li>
            <li>
              <b>Configure your node:</b>
              <ul className="list-disc ml-6 mt-2 text-sm space-y-2">
                <li>
                  Copy the provided configuration template: Locate <span className="font-mono">ergo.conf.template</span> in the extracted directory and copy it to <span className="font-mono">ergo.conf</span> in the same directory.
                </li>
                <li>
                  Edit <span className="font-mono">ergo.conf</span>: Open <span className="font-mono">ergo.conf</span> with a text editor and modify the following settings as needed:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      <b>Network:</b> Set <span className="font-mono">ergo.network.network = "mainnet"</span> for the main network or <span className="font-mono">"testnet"</span> for the test network (recommended for development).
                    </li>
                    <li>
                      <b>Data Directory:</b> Specify where blockchain data will be stored: <span className="font-mono">ergo.directory = "/path/to/your/data"</span>. Ensure this directory has sufficient disk space.
                    </li>
                    <li>
                      <b>RPC API Binding:</b> To allow external applications (like wallets or dApps) to communicate with your node, set <span className="font-mono">ergo.restApi.bindAddress = "0.0.0.0:9053"</span>. **Caution:** Be extremely careful exposing this port to the public internet without proper security measures (e.g., firewall, VPN).
                    </li>
                    <li>
                      <b>API Key:</b> For security, it's highly recommended to set an API key: <span className="font-mono">ergo.restApi.apiKeys = ["your_secret_api_key"]</span>. Include this key in the `api_key` header for all RPC requests.
                    </li>
                    <li>
                      <b>API Modules:</b> Define which API modules are enabled: <span className="font-mono">ergo.restApi.use = ["wallet", "blockchain", "mining", "utils", "peers"]</span>. Enable only what you need.
                    </li>
                    <li>
                      <b>Wallet Configuration:</b> If you plan to use the node's built-in wallet, configure <span className="font-mono">ergo.wallet.mnemonicPass</span> (password for mnemonic) and <span className="font-mono">ergo.wallet.secretStorage</span> (password for encrypted wallet file).
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Start the node:</b> Open your terminal, navigate to your node's working directory, and run the `.jar` file:
              <div className="bg-neutral-900/80 border border-green-500/20 rounded-lg p-4 my-2 overflow-x-auto">
                <pre className="text-orange-200 text-sm"><code>{`java -jar ergo.jar -c ergo.conf`}</code></pre>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                To run the node in the background (recommended for servers, Linux/macOS):
              </p>
              <div className="bg-neutral-900/80 border border-green-500/20 rounded-lg p-4 my-2 overflow-x-auto">
                <pre className="text-orange-200 text-sm"><code>{`nohup java -jar ergo.jar -c ergo.conf > ergo_node.log 2>&1 &`}</code></pre>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                This command will redirect output to `ergo_node.log` and run the process in the background.
              </p>
            </li>
            <li>
              <b>Monitor your node:</b> After starting, monitor its status and synchronization progress:
              <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                <li>
                  Check node info via RPC: Open your browser or use `curl` to access <span className="font-mono">http://localhost:9053/info</span>. You should see detailed node information in JSON format.
                  <div className="bg-neutral-900/80 border border-green-500/20 rounded-lg p-4 my-2 overflow-x-auto">
                    <pre className="text-orange-200 text-sm"><code>{`curl http://localhost:9053/info`}</code></pre>
                  </div>
                </li>
                <li>
                  Monitor logs: Check the `ergo_node.log` file for any errors or warnings.
                </li>
                <li>
                  Verify synchronization: Compare your node's `fullHeight` (from `/info` endpoint) with the current network height on the official Ergo Explorer:{" "}
                  <Link href="https://explorer.ergoplatform.com" target="_blank" className="text-orange-400 hover:underline inline-flex items-center">
                    Ergo Explorer <ExternalLink className="w-4 h-4 inline" />
                  </Link>.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* Syncing & Blockchain Data */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400"><Database className="w-6 h-6" /> Node Synchronization & Blockchain Data</h2>
        <p className="text-gray-300 mb-6">
          After starting your Ergo node, it will begin synchronizing with the network, downloading and verifying the entire blockchain history. This process can take a significant amount of time, especially for the initial sync.
        </p>
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 mb-4">
          <h3 className="font-semibold mb-3 text-cyan-400">Key Aspects of Synchronization:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              **Initial Sync:** Your node will download and verify all historical blocks from the genesis block to the current network height. This ensures your node has a complete and accurate copy of the blockchain.
            </li>
            <li>
              **Disk Space:** The blockchain data will be stored in the directory specified by `ergo.directory` in your `ergo.conf`. Ensure you have sufficient disk space (currently several hundred GBs and growing).
            </li>
            <li>
              **Accelerated Sync (Bootstrapping):** To significantly speed up the initial synchronization process, you can use blockchain snapshots or bootstraps. These are pre-synced copies of the blockchain data. Instructions for using them are typically found on the Ergo Forum or Discord channels.
            </li>
            <li>
              **Continuous Sync:** Once fully synchronized, your node will continuously listen for new blocks and transactions, keeping its copy of the blockchain up-to-date in real-time.
            </li>
          </ul>
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 text-orange-300">Monitoring Sync Progress:</h4>
            <p className="text-gray-400 text-xs">
              You can monitor your node's synchronization progress by checking the `fullHeight` value via the `/info` RPC endpoint or by observing the node's logs. Compare your node's height with the current network height on a block explorer.
            </p>
          </div>
        </div>
      </section>

      {/* Node Updates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400"><Settings className="w-6 h-6" /> Node Updates & Maintenance</h2>
        <p className="text-gray-300 mb-6">
          Keeping your Ergo node updated is crucial for network security, stability, and access to the latest features. Node updates are typically released periodically and involve replacing the node software.
        </p>
        <div className="bg-neutral-900/60 border border-yellow-500/30 rounded-xl p-6 mb-4">
          <h3 className="font-semibold mb-3 text-yellow-400">Update Procedure:</h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>
              **Stop the Node:** Gracefully stop your running Ergo node. This ensures that all data is properly saved and prevents corruption.
            </li>
            <li>
              **Download New Version:** Download the latest `ergo.jar` file from the official Ergo Node GitHub Releases page.
              <Link href="https://github.com/ergoplatform/ergo/releases" target="_blank" className="text-orange-400 hover:underline inline-flex items-center ml-2">
                Ergo Node GitHub Releases <ExternalLink className="w-4 h-4 inline" />
              </Link>
            </li>
            <li>
              **Replace Executable:** Replace your old `ergo.jar` file with the newly downloaded one in your node's working directory.
            </li>
            <li>
              **Review Configuration:** Always check the `ergo.conf.template` file included with the new release for any changes or new configuration options. Update your `ergo.conf` file accordingly.
            </li>
            <li>
              **Start the New Version:** Start the updated Ergo node using the same command as before.
            </li>
          </ol>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>**Important:** Always back up your node's data directory and wallet files before performing any updates to prevent data loss.</span>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Engage with the Ergo Network</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Explore the RPC API</h4>
            <p className="text-gray-400 text-sm mb-3">
              Learn how to interact with your running node programmatically using its RPC API.
            </p>
            <Link
              href="/build/docs/references/rpc-api"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              RPC API Reference <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Start Mining Ergo</h4>
            <p className="text-gray-400 text-sm mb-3">
              Contribute to network security and earn rewards by mining ERG.
            </p>
            <Link
              href="/build/docs/mining"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              Mining Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 