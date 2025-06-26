import Link from "next/link"
import {
  ExternalLink,
  Terminal,
  Download,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Code,
  Cpu,
  Github,
  ChevronRight,
  Smartphone,
} from "lucide-react"

export default function SetupPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Dev Environment Setup
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Step-by-step guide to setting up a local environment for full-fledged Ergo dApp development.
        </p>
      </div>

      {/* Requirements Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Wrench className="w-6 h-6 text-orange-400" /> 1. Required Tools & Dependencies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-orange-400" />
              <span className="font-semibold">Git</span>
            </div>
            <p className="text-gray-400 text-sm">
              Version control system.{" "}
              <Link
                href="https://git-scm.com/downloads"
                target="_blank"
                className="text-orange-400 hover:underline inline-flex items-center"
              >
                Download <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </p>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">JDK 11+</span>
            </div>
            <p className="text-gray-400 text-sm">
              Java Development Kit. <span className="text-xs">JDK 17 recommended.</span>{" "}
              <Link
                href="https://openjdk.java.net/install/"
                target="_blank"
                className="text-orange-400 hover:underline inline-flex items-center"
              >
                Install <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </p>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" />
              <span className="font-semibold">Node.js (LTS) & npm/yarn</span>
            </div>
            <p className="text-gray-400 text-sm">
              For JavaScript/TypeScript (Fleet SDK).{" "}
              <Link
                href="https://nodejs.org/en/download/"
                target="_blank"
                className="text-orange-400 hover:underline inline-flex items-center"
              >
                Download <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Rust (optional)</span>
            </div>
            <p className="text-gray-400 text-sm">
              For Sigma-Rust or low-level dev.{" "}
              <Link
                href="https://rustup.rs/"
                target="_blank"
                className="text-orange-400 hover:underline inline-flex items-center"
              >
                Install <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </p>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">Python (optional)</span>
            </div>
            <p className="text-gray-400 text-sm">
              For Python SDK.{" "}
              <Link
                href="https://www.python.org/downloads/"
                target="_blank"
                className="text-orange-400 hover:underline inline-flex items-center"
              >
                Download <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Ergo Node Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan-400" /> 2. Ergo Node Installation
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-500/10 to-neutral-900/60 border border-orange-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Download className="w-5 h-5 text-orange-400" /> Pre-built Binaries (Recommended)
            </h3>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                Download:{" "}
                <Link
                  href="https://github.com/ergoplatform/ergo/releases"
                  target="_blank"
                  className="text-orange-400 hover:underline inline-flex items-center"
                >
                  Ergo Node Releases <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                Unpack: Extract to <code>~/ergo-node</code>
              </li>
              <li>
                Configure:
                <ul className="list-disc pl-6">
                  <li>
                    Copy <code>ergo.conf.template</code> to <code>ergo.conf</code>
                  </li>
                  <li>
                    Edit <code>ergo.conf</code>:
                    <ul className="list-disc pl-6">
                      <li>
                        Set <code>network = "testnet"</code>
                      </li>
                      <li>
                        Set <code>ergo.restApi.bindAddress = 0.0.0.0:9053</code>
                      </li>
                      <li>
                        Configure <code>ergo.restApi.apiKeys</code> if needed
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Start the node:
                <pre className="bg-black text-orange-300 p-3 rounded-lg overflow-x-auto">
                  <code>java -jar ergo.jar -c ergo.conf</code>
                </pre>
              </li>
            </ol>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-neutral-900/60 border border-cyan-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" /> Docker Method
            </h3>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                Install Docker:{" "}
                <Link
                  href="https://docs.docker.com/get-docker/"
                  target="_blank"
                  className="text-orange-400 hover:underline inline-flex items-center"
                >
                  Get Docker <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                Run Ergo Node:
                <pre className="bg-black text-cyan-300 p-3 rounded-lg overflow-x-auto">
                  <code>
                    docker run -p 9053:9053 -p 9030:9030 -v ergo_data:/root/.ergo --name ergo-node ergoplatform/ergo:latest -D ergo.network.network=testnet
                  </code>
                </pre>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Download className="w-6 h-6 text-green-400" /> 3. Ergo Wallet Installation (for testing)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-orange-400" /> Ergo Reference Wallet (GUI)
            </div>
            <Link
              href="https://github.com/ergoplatform/ergo-wallet/releases"
              target="_blank"
              className="text-orange-400 hover:underline inline-flex items-center"
            >
              Download <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Yoroi Wallet (browser extension)
            </div>
            <span className="text-gray-400 text-sm">
              Install from browser extension store (supports Ergo).
            </span>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-green-400" /> Ergo Mobile Wallet
            </div>
            <span className="text-gray-400 text-sm">
              Available for Android and iOS.
            </span>
          </div>
        </div>
        <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> For advanced dev, use a separate test wallet (Reference/CLI Wallet) for full script/key access.
        </div>
      </section>

      {/* IDE Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Wrench className="w-6 h-6 text-purple-400" /> 4. IDE Setup (VS Code)
        </h2>
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-5 h-5 text-purple-400" /> <span className="font-semibold">Install VS Code:</span>{" "}
            <Link
              href="https://code.visualstudio.com/"
              target="_blank"
              className="text-orange-400 hover:underline inline-flex items-center"
            >
              Download <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="font-semibold mb-2">Recommended Extensions:</div>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Scala (Metals): For AppKit and node code</li>
            <li>Rust Analyzer: For Sigma-Rust</li>
            <li>ESLint, Prettier: For JavaScript/TypeScript</li>
            <li>GitLens: For Git integration</li>
          </ul>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> 5. Installation Verification & Troubleshooting
        </h2>
        <div className="bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/20 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>Node verification:</strong> Open <code>http://localhost:9053/info</code> in your browser. You should see node info in JSON. If not, check if the node is running and port is correct.
            </li>
            <li>
              <strong>Sync verification:</strong> In node logs or via <code>/info</code> API, check that <code>fullHeight</code> is increasing.
            </li>
            <li>
              <strong>Java issues:</strong> Ensure correct JDK version and <code>JAVA_HOME</code> is set.
            </li>
            <li>
              <strong>Accelerated sync (Bootstrapping):</strong> For faster sync, use blockchain bootstraps. See{" "}
              <Link
                href="https://ergoforum.org/"
                target="_blank"
                className="text-orange-400 hover:underline inline-flex items-center"
              >
                Ergo Forum <ExternalLink className="w-4 h-4 ml-1" />
              </Link>{" "}
              or Discord for instructions.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
} 