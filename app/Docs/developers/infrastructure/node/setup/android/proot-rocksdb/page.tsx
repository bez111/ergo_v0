"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, ExternalLink, AlertTriangle, Info, CheckCircle } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

const bash1 = `pkg update && pkg upgrade -y`;
const bash2 = `pkg install proot-distro -y`;
const bash3 = `proot-distro install archlinux`;
const bash4 = `proot-distro login archlinux`;
const bash5 = `pacman -Syu --noconfirm`;
const bash6 = `pacman -S jdk-openjdk wget nano --noconfirm`;
const bash7 = `# Example (replace URL with the actual RocksDB JAR URL):
ROCKSDB_JAR_URL="https://github.com/ergoplatform/ergo/releases/download/vX.Y.Z/ergo-X.Y.Z-rocksdb.jar"
echo "Downloading RocksDB Ergo node JAR from: $ROCKSDB_JAR_URL"
wget -q --show-progress "$ROCKSDB_JAR_URL" -O ergo-rocksdb.jar`;
const bash8 = `nano ergo.conf`;
const conf = `ergo {
  node {
    stateType = "utxo" // Use UTXO state with RocksDB
    // Keep ~1 week of blocks (~3-5GB?), adjust based on storage
    // WARNING: -1 (archival) is likely impractical on mobile storage
    blocksToKeep = 10080 
    mining = false

    # Enable faster bootstrapping (both recommended)
    nipopow.nipopowBootstrap = true
    utxoBootstrap = true
  }
}

scorex {
  restApi {
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf" // Example, change this
  }
  network {
    # Optional: Add known reliable peers
    # knownPeers = ["ip:port", "ip:port"]
  }
}`;
const bash9 = `java -Xmx2G -jar ergo-rocksdb.jar --mainnet -c ergo.conf`;

export default function ProotRocksdbPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Android Node: Arch Linux via proot (RocksDB/UTXO Mode)
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        This guide details the more advanced method for running an Ergo node on Android using an Arch Linux environment within Termux via <code className="bg-neutral-800 px-1 rounded">proot</code>. This method is necessary if you need to run the node with <code className="bg-neutral-800 px-1 rounded">stateType="utxo"</code> (which uses RocksDB for state storage) or if you encounter database issues (e.g., LevelDB failures) with the direct Termux setup.
      </p>
      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node/setup/android"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Android Guide
        </Link>
      </div>

      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-orange-400" /> Why is this needed?
        </h2>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
          <li>The Ergo node uses database engines (LevelDB by default, RocksDB as an option, especially for <code className="bg-neutral-800 px-1 rounded">stateType="utxo"</code>) to store blockchain state.</li>
          <li>The Java bindings for RocksDB often rely on the standard GNU C Library (<code className="bg-neutral-800 px-1 rounded">glibc</code>).</li>
          <li>Android/Termux typically use a different C library (<code className="bg-neutral-800 px-1 rounded">musl libc</code> via Bionic).</li>
          <li>Running the RocksDB-enabled node JAR directly in Termux can lead to incompatibility errors.</li>
          <li><code className="bg-neutral-800 px-1 rounded">proot-distro</code> allows running a Linux distribution (like Arch Linux, which uses <code className="bg-neutral-800 px-1 rounded">glibc</code>) within Termux, providing the necessary environment for RocksDB.</li>
        </ul>
      </div>

      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Disclaimer
        </h2>
        <p className="text-gray-300">
          This is a more complex setup than the <Link href="/Docs/developers/infrastructure/node/setup/android/termux-digest" className="text-cyan-400 hover:underline">direct Termux method</Link> and adds overhead. It's primarily required for specific use cases needing RocksDB/UTXO mode. For most mobile users, the direct Termux setup with <code className="bg-neutral-800 px-1 rounded">stateType="digest"</code> is recommended.
        </p>
      </div>

      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
          <li>Android device meeting the <Link href="/Docs/developers/infrastructure/node/setup/android#device-requirements" className="text-cyan-400 hover:underline">requirements</Link> (Note: UTXO mode requires significantly more storage than digest mode).</li>
          <li>Termux installed from <a href="https://f-droid.org/packages/com.termux/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">F-Droid</a>.</li>
        </ul>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-2">1. Install proot-distro in Termux</h2>
          <p className="text-gray-300 mb-2">Open Termux and run:</p>
          <UniversalCopyCodeBlock code={bash1} />
          <UniversalCopyCodeBlock code={bash2} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">2. Install Arch Linux via proot-distro</h2>
          <p className="text-gray-300 mb-2">This will download the Arch Linux root filesystem:</p>
          <UniversalCopyCodeBlock code={bash3} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">3. Login to Arch Linux Environment</h2>
          <p className="text-gray-300 mb-2">Each time you want to run the node using this method, you first need to log into the Arch environment:</p>
          <UniversalCopyCodeBlock code={bash4} />
          <p className="text-gray-400 text-xs">Your terminal prompt should change, indicating you are now inside Arch Linux within Termux.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">4. Inside Arch Linux: Install Dependencies (First Time Only)</h2>
          <p className="text-gray-300 mb-2">Update package lists:</p>
          <UniversalCopyCodeBlock code={bash5} />
          <p className="text-gray-300 mb-2">Install Java (OpenJDK 17 recommended), <code>wget</code>, and <code>nano</code>:</p>
          <UniversalCopyCodeBlock code={bash6} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">5. Inside Arch Linux: Download RocksDB Ergo Node JAR</h2>
          <p className="text-gray-300 mb-2">You <b>must</b> download the JAR variant specifically built with RocksDB support. Find the correct <code>.jar</code> file (often named <code>ergo-&lt;version&gt;-rocksdb.jar</code>) on the <a href="https://github.com/ergoplatform/ergo/releases" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Releases</a> page.</p>
          <p className="text-gray-300 mb-2">Get the download URL for the specific RocksDB JAR you need. Use <code>wget</code> to download it <i>within the Arch environment</i>:</p>
          <UniversalCopyCodeBlock code={bash7} />
          <p className="text-gray-400 text-xs">(Replace URL with the actual RocksDB JAR URL from the releases page).</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">6. Inside Arch Linux: Create Configuration File (ergo.conf)</h2>
          <p className="text-gray-300 mb-2">Create the file using <code>nano</code>:</p>
          <UniversalCopyCodeBlock code={bash8} />
          <p className="text-gray-300 mb-2">Paste a configuration suitable for <code>stateType="utxo"</code> with pruning (adjust <code>blocksToKeep</code> based on your storage capacity):</p>
          <UniversalCopyCodeBlock code={conf} />
          <ul className="list-disc list-inside text-gray-400 text-xs mb-2">
            <li><b>stateType = "utxo"</b>: Use UTXO state with RocksDB.</li>
            <li><b>blocksToKeep = 10080</b>: Keeps roughly the last week's worth of full blocks. Adjust based on storage/needs. Lower values save space but limit historical data access via API.</li>
            <li><b>nipopow.nipopowBootstrap = true</b> & <b>utxoBootstrap = true</b>: Enable fast synchronization methods. The node will use the best available option from peers.</li>
          </ul>
          <p className="text-gray-400 text-xs">Save the file: Press <b>CTRL + O</b>, then <b>Enter</b>. Exit nano: Press <b>CTRL + X</b>.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">7. Inside Arch Linux: Launch the Node</h2>
          <p className="text-gray-300 mb-2">Run the RocksDB JAR, allocating sufficient memory (UTXO mode generally needs more than digest mode):</p>
          <UniversalCopyCodeBlock code={bash9} />
          <p className="text-gray-400 text-xs">Adjust <code>-Xmx2G</code> based on your device's available RAM. You might need more or less.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">8. Monitor Synchronization</h2>
          <p className="text-gray-300 mb-2">Open a web browser on your Android device and go to <code>http://127.0.0.1:9053/panel</code>.<br />Synchronization, especially the initial UTXO snapshot download, will take time and consume significant storage.</p>
        </div>
      </div>

      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mt-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Exiting
        </h2>
        <p className="text-gray-300 mb-2">To stop the node, press <code className="bg-neutral-800 px-1 rounded">CTRL + C</code> in the Arch Linux terminal. To exit the Arch Linux environment back to the main Termux shell, type <code className="bg-neutral-800 px-1 rounded">exit</code>.</p>
      </div>

      <div className="mt-12 text-gray-400 text-sm">
        Refer back to the <Link href="/Docs/developers/infrastructure/node/setup/android" className="text-cyan-400 hover:underline">main Android guide</Link> for general tips, disk space clarification, and troubleshooting. Remember this method adds complexity and resource overhead compared to the direct Termux approach.
      </div>
    </>
  );
} 