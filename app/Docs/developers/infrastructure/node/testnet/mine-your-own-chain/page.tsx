"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, Terminal, Info, ExternalLink } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

const conf = `ergo {
  networkType = "testnet"

  node {
    mining = true
    offlineGeneration = true
    useExternalMiner = false
  }

  chain {
    addressPrefix = 32 #  to avoid address clashing with Ergo mainnet and public testnet
  }
}

scorex {
  network {
    magicBytes = [2, 0, 4, 8] # custom value to avoid connections with other networks
    bindAddress = "0.0.0.0:9022"
    nodeName = "ergo-testnet-5"
    #knownPeers = []
  }

  restApi {
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
  }
}`;

const sbtCmd = `sbt assembly`;
const javaCmd = `java -jar -Xmx4G ergo-*.jar --testnet -c testnet.conf`;

export default function MineYourOwnChainPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Fork Your Own Ergo Chain
      </h1>
      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node/testnet"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Testnet
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-4 mt-8">Configuration</h2>
      <p className="text-gray-300 mb-4">
        To start your custom Ergo chain, you need to modify the configuration to ensure it doesn't clash with the Ergo mainnet or public testnet. The key changes involve setting a unique <code className="bg-neutral-800 px-1 rounded">addressPrefix</code> and custom <code className="bg-neutral-800 px-1 rounded">magicBytes</code>.
      </p>
      <p className="text-gray-300 mb-4">
        Here’s an updated configuration for your <code className="bg-neutral-800 px-1 rounded">testnet.conf</code> file:
      </p>
      <UniversalCopyCodeBlock code={conf} />
      <h2 className="text-xl font-bold mb-4 mt-8">Steps to Run the Node</h2>
      <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-4">
        <li>
          <b>Set Up the Configuration:</b>
          <p className="text-sm mb-2">Make sure your <code className="bg-neutral-800 px-1 rounded">testnet.conf</code> file is configured as shown above. This will help prevent address clashes with the mainnet and public testnet by using a custom <code className="bg-neutral-800 px-1 rounded">addressPrefix</code> and <code className="bg-neutral-800 px-1 rounded">magicBytes</code>.</p>
        </li>
        <li>
          <b>Compile the Node:</b>
          <p className="text-sm mb-2">Use the following command to compile the Ergo node:</p>
          <UniversalCopyCodeBlock code={sbtCmd} />
          <p className="text-sm">This will generate an <code className="bg-neutral-800 px-1 rounded">ergo.jar</code> file at <code className="bg-neutral-800 px-1 rounded">/target/scala*/ergo-*.jar</code>.</p>
        </li>
        <li>
          <b>Run the Node:</b>
          <p className="text-sm mb-2">Start the node using the command:</p>
          <UniversalCopyCodeBlock code={javaCmd} />
        </li>
        <li>
          <b>Initialize and Unlock the Wallet:</b>
          <p className="text-sm">Access the panel at <code className="bg-neutral-800 px-1 rounded">127.0.0.1:9052/panel</code> to initialize and unlock your wallet. This is necessary as the first blocks will be generated using Autolykos v1.</p>
        </li>
      </ol>
      <h2 className="text-xl font-bold mb-4 mt-8">Additional Support</h2>
      <p className="text-gray-300 mb-2">For deeper modifications or any questions, you can join the community on:</p>
      <ul className="list-disc list-inside text-cyan-300 mb-8">
        <li>
          <a href="https://t.me/ErgoDevelopers" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
            <ExternalLink className="w-4 h-4 inline" /> Telegram: Ergo Developers Chat
          </a>
        </li>
        <li>
          <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
            <ExternalLink className="w-4 h-4 inline" /> Discord: Ergo Platform Developers Channel
          </a>
        </li>
      </ul>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mt-8 flex items-start">
        <Info className="w-6 h-6 text-cyan-400 mr-3 mt-1" />
        <div>
          <b className="text-cyan-300">Note</b>
          <p className="text-cyan-100 text-sm mt-1">
            This setup ensures your custom chain runs independently and avoids conflicts with existing networks.
          </p>
        </div>
      </div>
    </>
  );
} 