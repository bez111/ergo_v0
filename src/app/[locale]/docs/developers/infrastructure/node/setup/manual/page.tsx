
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

export default function ManualSetupPage() {
  return (
    <div className="prose prose-invert max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
        Ergo Full Node Installation Guide
      </h1>
      
      <p className="text-lg text-gray-300 mb-8">
        This guide covers the manual setup process for running an Ergo full node. For alternative methods, see{" "}
        <Link href="/docs/developers/infrastructure/node/setup/docker" className="text-cyan-400 hover:underline">
          Docker Setup
        </Link>{" "}
        or{" "}
        <Link href="/docs/developers/infrastructure/node/setup/android" className="text-cyan-400 hover:underline">
          Running on Android
        </Link>.
      </p>

      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/infrastructure/node/setup"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Setup
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-orange-300 mb-4">Getting Started</h2>

      <h3 className="text-xl font-semibold text-cyan-300 mb-3">Preparing Your Environment</h3>

      <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-6">
        <li>
          <strong>Create a Folder:</strong> Start by creating a dedicated folder for your Ergo node files (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">ergo</code> in your home directory).
        </li>
        <li>
          <strong>Obtain the Ergo Client JAR:</strong> You have two main options:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>
              <strong>Download (Recommended):</strong> Visit the{" "}
              <a href="https://github.com/ergoplatform/ergo/releases/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Ergo GitHub releases page
              </a>{" "}
              and download the latest stable <code className="bg-neutral-800 px-2 py-1 rounded">ergo-&lt;version&gt;.jar</code> file. This is the simplest method for most users. Place the downloaded JAR file in your <code className="bg-neutral-800 px-2 py-1 rounded">ergo</code> folder.
            </li>
            <li>
              <strong>Build from Source:</strong> If you need a specific version (like a Release Candidate) or want to contribute to development, you can compile the JAR yourself. This requires Git, JDK, and SBT.
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>
                  See the detailed guide:{" "}
                  <Link href="/docs/developers/infrastructure/node/setup/build" className="text-cyan-400 hover:underline">
                    Building the Ergo Node from Source
                  </Link>
                </li>
                <li>
                  <em>Note:</em> Building development versions might require handling SNAPSHOT dependencies. Refer to the build guide and the specific{" "}
                  <Link href="/docs/developers/infrastructure/node/setup/snapshot" className="text-cyan-400 hover:underline">
                    SNAPSHOT Dependencies guide
                  </Link>{" "}
                  if you encounter issues.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-cyan-300 mb-3">Setting Up Your Node</h3>

      <ol className="list-decimal list-inside text-gray-300 space-y-4 mb-6">
        <li>
          <strong>Create a Configuration File (<code className="bg-neutral-800 px-2 py-1 rounded">ergo.conf</code>):</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>In your <code className="bg-neutral-800 px-2 py-1 rounded">ergo</code> folder, create a text file named <code className="bg-neutral-800 px-2 py-1 rounded">ergo.conf</code>.</li>
            <li>This file overrides default node settings. Only add settings you need to change.</li>
            <li>Start with a basic configuration (adjust <code className="bg-neutral-800 px-2 py-1 rounded">apiKeyHash</code> later if needed):</li>
          </ul>
          
          <pre className="bg-neutral-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto mt-3">
{`ergo {
    node {
        mining = false // Disable mining unless intended
    }
}
scorex {
    restApi {
        // Set a secure API key hash for API access
        // Example hash for password "hello":
        apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf" 
    }
}`}
          </pre>
          
          <p className="text-gray-400 mt-2">
            For more configuration options, see the{" "}
            <Link href="/docs/developers/infrastructure/node/setup/configuration" className="text-cyan-400 hover:underline">
              Configuration Files documentation
            </Link>.
          </p>
        </li>

        <li>
          <strong>Launch Your Node:</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>Open a terminal or command prompt in your <code className="bg-neutral-800 px-2 py-1 rounded">ergo</code> folder.</li>
            <li>Run the node using the <code className="bg-neutral-800 px-2 py-1 rounded">java -jar</code> command, specifying the JAR file, network (<code className="bg-neutral-800 px-2 py-1 rounded">--mainnet</code> or <code className="bg-neutral-800 px-2 py-1 rounded">--testnet</code>), and configuration file (<code className="bg-neutral-800 px-2 py-1 rounded">-c</code>). Allocate sufficient memory using <code className="bg-neutral-800 px-2 py-1 rounded">-Xmx</code>.</li>
          </ul>
          
          <pre className="bg-neutral-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto mt-3">
{`# Example for mainnet with 4GB RAM allocated
java -jar -Xmx4G ergo-<version>.jar --mainnet -c ergo.conf`}
          </pre>
          
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>Adjust <code className="bg-neutral-800 px-2 py-1 rounded">-Xmx4G</code> based on your system's available RAM (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">-Xmx2G</code>, <code className="bg-neutral-800 px-2 py-1 rounded">-Xmx8G</code>). More RAM generally improves performance, especially during sync.</li>
            <li>Replace <code className="bg-neutral-800 px-2 py-1 rounded">ergo-&lt;version&gt;.jar</code> with the actual name of your downloaded or built JAR file.</li>
          </ul>
        </li>

        <li>
          <strong>Wait for Initialization &amp; Synchronization:</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>The node will start up and begin synchronizing with the Ergo network. This process downloads and validates the blockchain history.</li>
            <li><strong>Synchronization can take a significant amount of time</strong> (hours to days) depending on your hardware, network speed, and the chosen{" "}
              <Link href="/docs/developers/infrastructure/node/setup/modes" className="text-cyan-400 hover:underline">
                Node Mode
              </Link>. Be patient.
            </li>
          </ul>
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-orange-300 mb-4">Verifying Node Synchronization</h2>

      <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-6">
        <li>
          <strong>Monitor via Web Panel:</strong> Open <code className="bg-neutral-800 px-2 py-1 rounded">http://127.0.0.1:9053/panel</code> (or port 9052 for testnet) in your web browser. During sync, it should show "Active synchronization" and increasing block height.
        </li>
        <li>
          <strong>Check Sync Status:</strong> Once synchronization is complete, the panel will indicate "Node is synced." You can also check the <code className="bg-neutral-800 px-2 py-1 rounded">/info</code> endpoint (<code className="bg-neutral-800 px-2 py-1 rounded">http://127.0.0.1:9053/info</code>) and compare the reported <code className="bg-neutral-800 px-2 py-1 rounded">fullHeight</code> with a reliable public explorer like{" "}
          <a href="https://explorer.ergoplatform.com/en/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
            explorer.ergoplatform.com
          </a>.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-orange-300 mb-4">Additional Resources</h2>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <Link href="/docs/developers/infrastructure/node/setup/troubleshooting" className="text-cyan-400 hover:underline">
            Troubleshooting Guide
          </Link>
        </li>
        <li>
          <Link href="/docs/developers/infrastructure/node/setup/configuration" className="text-cyan-400 hover:underline">
            Node Configuration Files
          </Link>
        </li>
        <li>
          <Link href="/docs/developers/infrastructure/node/setup/modes" className="text-cyan-400 hover:underline">
            Node Modes
          </Link>
        </li>
        <li>
          <Link href="/docs/developers/infrastructure/node/setup/api" className="text-cyan-400 hover:underline">
            Node API (Swagger)
          </Link>
        </li>
        <li>
          <Link href="/docs/developers/infrastructure/node/setup/testnet" className="text-cyan-400 hover:underline">
            Testnet Guide
          </Link>
        </li>
        <li>
          <Link href="/docs/developers/infrastructure/node/setup/faq" className="text-cyan-400 hover:underline">
            Node FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
} 