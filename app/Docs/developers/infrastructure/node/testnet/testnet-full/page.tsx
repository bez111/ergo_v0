"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, Info, Download, Terminal, ExternalLink } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

const javaCommand = `java -jar -Xmx4G ergo-*.jar --testnet -c testnet.conf`;
const testnetConf = `ergo {
  networkType = "testnet"
}
scorex {
 restApi {
    # Hex-encoded Blake2b256 hash of an API key. Should be 64-chars long Base16 string.
    # Below is hash corresponding to API_KEY = "hello" (with no quotes)
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
  }
}`;

export default function TestnetFullPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Synchronising a full node
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        To join the testnet, download the latest Ergo protocol reference client and launch using the commands below.
      </p>
      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node/testnet"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Testnet
        </Link>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Download className="w-6 h-6 text-cyan-400" /> Download and Launch
          </h2>
          <p className="text-gray-300 mb-4">
            Download the <a href="https://github.com/ergoplatform/ergo/releases" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">latest Ergo protocol reference client</a> and launch using:
          </p>
          <UniversalCopyCodeBlock code={javaCommand} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-orange-400" /> Configuration File
          </h2>
          <p className="text-gray-300 mb-4">
            A minimal <code className="bg-neutral-800 px-1 rounded">testnet.conf</code> would be:
          </p>
          <UniversalCopyCodeBlock code={testnetConf} />
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Access Points</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-orange-300 mb-2">Node Panel</h3>
              <p className="text-gray-300 mb-2">The node will be available at:</p>
              <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">localhost:9052/panel</code>
            </div>
            <div>
              <h3 className="font-semibold text-orange-300 mb-2">Swagger UI</h3>
              <p className="text-gray-300 mb-2">Once the node is synchronised, a user interface for Swagger is available at:</p>
              <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">localhost:9052/swagger</code>
            </div>
          </div>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-cyan-400" /> Mining
          </h2>
          <p className="text-gray-300">
            If you want to help mine the testnet, you can do so by following the steps outlined on <Link href="/Docs/developers/infrastructure/node/testnet/cpu-mining" className="text-cyan-400 hover:underline">CPU Mining</Link>.
          </p>
        </div>
      </div>
    </>
  );
} 