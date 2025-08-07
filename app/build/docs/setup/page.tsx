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
import { CodeBlock } from "@/components/ui"

export default function SetupPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Dev Environment Setup
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Step-by-step guide to setting up a local environment for full-fledged Ergo dApp development.
        </p>
      </div>

      {/* Prerequisites Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Prerequisites
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Basic understanding of command-line interface (CLI).</li>
            <li>Familiarity with fundamental programming concepts.</li>
            <li>Stable internet connection.</li>
          </ul>
        </div>
      </section>

      {/* Core Development Tools Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Wrench className="w-6 h-6 text-orange-400" /> Core Development Tools
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
          <Cpu className="w-6 h-6 text-cyan-400" /> Ergo Node Setup
        </h2>
        <p className="text-gray-300 mb-6">
          Running a local Ergo node is crucial for full-fledged dApp development, allowing you to interact directly with the blockchain.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-500/10 to-neutral-900/60 border border-orange-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Download className="w-5 h-5 text-orange-400" /> Option 1: Pre-built Binaries (Recommended)
            </h3>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                Download the latest release from:{" "}
                <Link
                  href="https://github.com/ergoplatform/ergo/releases"
                  target="_blank"
                  className="text-orange-400 hover:underline inline-flex items-center"
                >
                  Ergo Node Releases <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                Unpack the archive to a directory of your choice (e.g., <code>~/ergo-node</code>).
              </li>
              <li>
                **Configuration:**
                <ul className="list-disc pl-6">
                  <li>
                    Copy <code>ergo.conf.template</code> to <code>ergo.conf</code> in the same directory.
                  </li>
                  <li>
                    Edit <code>ergo.conf</code> to suit your needs. For local development, consider:
                    <ul className="list-disc pl-6">
                      <li>
                        Setting <code>ergo.network.network = "testnet"</code> for development on the testnet.
                      </li>
                      <li>
                        Setting <code>ergo.restApi.bindAddress = "0.0.0.0:9053"</code> to allow external connections.
                      </li>
                      <li>
                        Configuring <code>ergo.restApi.apiKeys</code> for security (recommended for production, optional for local dev).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                **Start the node:** Open your terminal in the node directory and run:
                <CodeBlock language="typescript"
                  code="java -jar ergo.jar -c ergo.conf"
                />
              </li>
            </ol>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-neutral-900/60 border border-cyan-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" /> Option 2: Docker
            </h3>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                Install Docker Desktop:{" "}
                <Link
                  href="https://docs.docker.com/get-docker/"
                  target="_blank"
                  className="text-orange-400 hover:underline inline-flex items-center"
                >
                  Get Docker <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                Run the Ergo Node Docker image:
                <CodeBlock language="typescript"
                  code={`docker run -p 9053:9053 -p 9030:9030 -v ergo_data:/root/.ergo --name ergo-node ergoplatform/ergo:latest -D ergo.network.network=testnet`}
                />
                <p className="text-sm text-gray-400 mt-2">
                  This command maps ports 9053 (REST API) and 9030 (P2P) and mounts a volume for persistent data.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Download className="w-6 h-6 text-green-400" /> Ergo Wallets for Development
        </h2>
        <p className="text-gray-300 mb-6">
          For testing your dApps and smart contracts, you'll need an Ergo wallet. Consider using a dedicated test wallet for development purposes.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Github className="w-5 h-5 text-orange-400" /> Ergo Reference Wallet (GUI)
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              A desktop wallet ideal for local node interaction and advanced testing.
            </p>
            <Link
              href="https://github.com/ergoplatform/ergo-wallet/releases"
              target="_blank"
              className="text-orange-400 hover:underline inline-flex items-center"
            >
              Download <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Nautilus Wallet (Browser Extension)
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              A popular browser extension wallet, great for testing web dApps.
            </p>
            <Link
              href="https://chrome.google.com/webstore/detail/nautilus-wallet/gjlopmhkopkdckjkidfcikbjoajgceja"
              target="_blank"
              className="text-orange-400 hover:underline inline-flex items-center"
            >
              Install <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-green-400" /> Ergo Mobile Wallet
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              Available for Android and iOS, useful for mobile dApp testing.
            </p>
            <Link
              href="https://ergoplatform.org/en/wallets/"
              target="_blank"
              className="text-orange-400 hover:underline inline-flex items-center"
            >
              Learn More <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> Always use a separate test wallet with minimal funds for development and testing.
        </div>
      </section>

      {/* IDE Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <Wrench className="w-6 h-6 text-purple-400" /> IDE & Editor Setup
        </h2>
        <p className="text-gray-300 mb-6">
          While any text editor can be used, an Integrated Development Environment (IDE) or a powerful code editor can significantly enhance your development workflow.
        </p>
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4">Recommended Editors & Extensions:</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Download className="w-5 h-5 text-purple-400" /> VS Code
              </h4>
              <p className="text-gray-400 text-sm mb-2">
                A popular choice with a rich extension ecosystem.{" "}
                <Link
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  className="text-orange-400 hover:underline inline-flex items-center"
                >
                  Download <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </p>
              <p className="font-semibold text-sm mb-1">Recommended Extensions for VS Code:</p>
              <ul className="list-disc pl-6 text-gray-300 text-sm">
                <li>**Scala (Metals):** For Ergo AppKit and node development.</li>
                <li>**Rust Analyzer:** Essential for Sigma-Rust development.</li>
                <li>**ESLint, Prettier:** For JavaScript/TypeScript projects.</li>
                <li>**GitLens:** Enhances Git capabilities within the editor.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" /> IntelliJ IDEA (for Scala/Java)
              </h4>
              <p className="text-gray-400 text-sm mb-2">
                A powerful IDE for JVM-based development.{" "}
                <Link
                  href="https://www.jetbrains.com/idea/"
                  target="_blank"
                  className="text-orange-400 hover:underline inline-flex items-center"
                >
                  Download <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </p>
              <p className="font-semibold text-sm mb-1">Recommended Plugins for IntelliJ IDEA:</p>
              <ul className="list-disc pl-6 text-gray-300 text-sm">
                <li>**Scala Plugin:** For Scala development.</li>
                <li>**Git Integration:** For version control.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Verification & Troubleshooting
        </h2>
        <p className="text-gray-300 mb-6">
          After setting up your environment, it's crucial to verify that everything is working as expected. Here are some common checks and troubleshooting tips.
        </p>
        <div className="bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/20 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-3">
            <li>
              <strong>Ergo Node Verification:</strong>
              <p className="text-sm text-gray-400 mt-1">
                Open <code>http://localhost:9053/info</code> in your browser. You should see node information in JSON format. If not, ensure your Ergo node is running and that port 9053 is not blocked.
              </p>
            </li>
            <li>
              <strong>Node Synchronization:</strong>
              <p className="text-sm text-gray-400 mt-1">
                Check the <code>fullHeight</code> value in the <code>/info</code> API response or in your node logs. It should be continuously increasing, indicating that your node is synchronizing with the network.
              </p>
            </li>
            <li>
              <strong>Java Environment Issues:</strong>
              <p className="text-sm text-gray-400 mt-1">
                Ensure you have JDK 11+ installed and that your <code>JAVA_HOME</code> environment variable is correctly set. You can verify your Java version by running <code>java -version</code> in your terminal.
              </p>
            </li>
            <li>
              <strong>Accelerated Synchronization (Bootstrapping):</strong>
              <p className="text-sm text-gray-400 mt-1">
                For faster node synchronization, especially on new setups, consider using blockchain bootstraps. Refer to the{" "}
                <Link
                  href="https://ergoforum.org/"
                  target="_blank"
                  className="text-orange-400 hover:underline inline-flex items-center"
                >
                  Ergo Forum <ExternalLink className="w-4 h-4 ml-1" />
                </Link>{" "}
                or the official Ergo Discord for up-to-date instructions on how to use them.
              </p>
            </li>
            <li>
              <strong>Common Port Conflicts:</strong>
              <p className="text-sm text-gray-400 mt-1">
                If your node fails to start, check if other applications are using ports 9053 or 9030. You can use tools like <code>netstat</code> (Windows) or <code>lsof -i :9053</code> (macOS/Linux) to identify conflicting processes.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
