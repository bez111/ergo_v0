"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Copy, Check } from "lucide-react";
import { CodeBlock } from "@/components/ui";

const bash1 = `pkg update && pkg upgrade -y`;
const bash2 = `pkg install openjdk-17 wget -y`;
const bash3 = `# Get the URL for the latest standard JAR
LATEST_JAR_URL=$(wget -qO- "https://api.github.com/repos/ergoplatform/ergo/releases/latest" | grep -o 'https://github.com/ergoplatform/ergo/releases/download/.*ergo-[0-9.]*\.jar' | head -n 1)

# Download it
echo "Downloading latest Ergo node JAR from: $LATEST_JAR_URL"
wget -q --show-progress "$LATEST_JAR_URL" -O ergo.jar`;
const bash4 = `nano ergo.conf`;
const conf = `ergo {
  node {
    stateType = "digest"
    blocksToKeep = 1440 // Keep ~1 day of full blocks (~500MB-1GB), adjust if needed
    mining = false

    # Enable faster bootstrapping (both recommended for flexibility)
    nipopow.nipopowBootstrap = true
    utxoBootstrap = true

    # Optional: Adjust NiPoPoW parameters if using nipopowBootstrap
    # nipopow.p2pNipopows = 2
  }
}

scorex {
  restApi {
    # Set your desired API key hash (generate one if needed)
    # Example hash for password "hello":
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
  }
  network {
    # Optional: Add known reliable peers if discovery is slow
    # knownPeers = ["ip:port", "ip:port"]
  }
}`;
const bash5 = `java -Xmx1536M -jar ergo.jar --mainnet -c ergo.conf`;

export default function TermuxDigestPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Android Node: Direct Termux Setup (Digest Mode)
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        This guide details the recommended method for running an Ergo node on Android using Termux directly. This approach is best suited for the resource-efficient <code className="bg-neutral-800 px-1 rounded">stateType="digest"</code> mode.
      </p>
      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node/setup/android"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Android Guide
        </Link>
      </div>
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
          <li>Android device meeting the <Link href="/Docs/developers/infrastructure/node/setup/android#device-requirements" className="text-cyan-400 hover:underline">requirements</Link>.</li>
          <li>Termux installed from <a href="https://f-droid.org/packages/com.termux/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">F-Droid</a> (see <Link href="/Docs/developers/infrastructure/node/setup/android#direct-termux-setup-digest-mode" className="text-cyan-400 hover:underline">main Android guide</Link>).</li>
        </ul>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-2">1. Update Termux Packages</h2>
          <p className="text-gray-300 mb-2">Open Termux and run:</p>
          <CodeBlock language="typescript" children={bash1} />
          <p className="text-gray-400 text-xs">Answer default prompts if asked.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">2. Install Dependencies</h2>
          <p className="text-gray-300 mb-2">Install Java (OpenJDK 17 recommended) and <code>wget</code>:</p>
          <CodeBlock language="typescript" children={bash2} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">3. Download Ergo Node JAR</h2>
          <p className="text-gray-300 mb-2">For <code>stateType="digest"</code>, the standard Ergo node JAR (without <code>-rocksdb</code> suffix) is usually sufficient. Use <code>wget</code> to download the latest release:</p>
          <CodeBlock language="typescript" children={bash3} />
          <p className="text-gray-400 text-xs">(Verify the downloaded URL or manually find the correct URL on the <a href="https://github.com/ergoplatform/ergo/releases" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Releases</a> page if the script fails).</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">4. Create Configuration File (<code>ergo.conf</code>)</h2>
          <p className="text-gray-300 mb-2">Create the file using <code>nano</code>:</p>
          <CodeBlock language="typescript" children={bash4} />
          <p className="text-gray-300 mb-2">Paste the following configuration, suitable for mobile digest mode:</p>
          <CodeBlock language="typescript" children={conf} />
          <ul className="list-disc list-inside text-gray-400 text-xs mb-2">
            <li><b>stateType = "digest"</b>: Enables the lightweight digest mode.</li>
            <li><b>blocksToKeep = 1440</b>: Keeps roughly the last day's worth of full blocks. Adjust based on storage/needs. Lower values save space but limit historical data access via API.</li>
            <li><b>nipopow.nipopowBootstrap = true</b> & <b>utxoBootstrap = true</b>: Enable fast synchronization methods. The node will use the best available option from peers.</li>
          </ul>
          <p className="text-gray-400 text-xs">Save the file: Press <b>CTRL + O</b>, then <b>Enter</b>. Exit nano: Press <b>CTRL + X</b>.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">5. Launch the Node</h2>
          <p className="text-gray-300 mb-2">Run the node, allocating memory with <code>-Xmx</code>. Start with 1GB or 1.5GB:</p>
          <CodeBlock language="typescript" children={bash5} />
          <p className="text-gray-400 text-xs">Adjust <code>-Xmx1536M</code> (1.5GB) based on your device. If it crashes, try <code>-Xmx1G</code> or increase if you have more RAM available, e.g., <code>-Xmx2G</code>.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">6. Monitor Synchronization</h2>
          <p className="text-gray-300 mb-2">Open a web browser on your Android device and go to <code>http://127.0.0.1:9053/panel</code>.<br />Initial sync (especially the UTXO snapshot download if <code>utxoBootstrap</code> is used) can take time and may not show detailed progress in logs. Monitor network activity or storage usage. Once synced, the panel will update.</p>
        </div>
      </div>
      <div className="mt-12 text-gray-400 text-sm">
        Refer back to the <Link href="/Docs/developers/infrastructure/node/setup/android#direct-termux-setup-digest-mode" className="text-cyan-400 hover:underline">main Android guide</Link> for general tips, disk space clarification, and troubleshooting.
      </div>
    </>
  );
} 