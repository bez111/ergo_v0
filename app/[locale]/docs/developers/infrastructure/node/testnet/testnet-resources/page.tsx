"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, Info, ExternalLink, List, Server } from "lucide-react";
import { CodeBlock } from "@/components/ui";

const peerListMainnet = `https://api.tokenjay.app/peers/list?unreachable=false&closedApi=false&limit=50`;
const nodeConf = `ergo {
  networkType = "testnet"
  directory = "/ergo/.ergo"
  node {
    useExternalMiner = true
    offlineGeneration = true
    mining = true
    mempoolCapacity = 10000
    extraIndex = true
    maxTransactionSize = 1000000
    maxTransactionCost = 2000000
  }
  wallet.secretStorage.secretDir = "/ergo/.ergo/wallet/keystore"
  chain {
    genesisStateDigestHex = "cb63aa99a3060f341781d8662b58bf18b9ad258db4fe88d09f8f71cb668cad4502"
    reemission {
      checkReemissionRules = true
    }
  }
}

scorex {
  restApi {
    apiKeyHash = ""
    bindAddress = "0.0.0.0:9052"
  }
  network {
    bindAddress = "0.0.0.0:9022"
    knownPeers = [
      "213.239.193.208:9022",
      "51.158.54.129:9022",
      "51.89.40.122:9022"
    ]
    maxConnections = 100
  }
}`;
const devToolsConf = `node.url = "http://213.239.193.208:9052/"
node.networkType = "TESTNET"
explorer.url = "https://testnet.ergoplatform.com/"`;

export default function TestnetResourcesPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Testnet Resources
      </h1>
      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node/testnet"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Testnet
        </Link>
      </div>
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2"><List className="w-5 h-5 text-cyan-400" /> Finding & Connecting to Testnet Peers</h2>
          <p className="text-gray-300 mb-2">Synchronizing a testnet node requires connecting to active testnet peers. Finding reliable peers can sometimes be challenging.</p>
          <h3 className="font-semibold text-orange-300 mb-2 mt-4">Peer Lists</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>
              <b>Public Peer Lists:</b>
              <ul className="list-disc list-inside ml-6">
                <li>Mainnet peers: <CodeBlock language="typescript" children={peerListMainnet} /></li>
                <li>Testnet peers: Use the same list but swap the port numbers (mainnet uses 9053, testnet uses 9052)</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2"><Server className="w-5 h-5 text-cyan-400" /> Node Configuration</h2>
          <p className="text-gray-300 mb-2">Below is an example configuration for a testnet node:</p>
          <CodeBlock language="typescript" children={nodeConf} />
          <h3 className="font-semibold text-orange-300 mb-2 mt-4">Important Configuration Options</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li><b>knownPeers</b>: Manually specify testnet peers to connect to</li>
            <li><b>maxConnections</b>: Default is around 30, can be increased for better network connectivity (may require more resources)</li>
            <li><b>bindAddress</b>: For REST API, use port 9052 for testnet (compared to 9053 for mainnet)</li>
            <li><b>networkType</b>: Must be set to "testnet"</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">Port Reference</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[340px] text-sm text-left text-gray-300 border border-neutral-700 rounded-xl">
              <thead className="bg-neutral-800 text-orange-300">
                <tr>
                  <th className="px-4 py-2">Service</th>
                  <th className="px-4 py-2">Mainnet</th>
                  <th className="px-4 py-2">Testnet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">REST API</td>
                  <td className="px-4 py-2">9053</td>
                  <td className="px-4 py-2">9052</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">P2P Network</td>
                  <td className="px-4 py-2">9030</td>
                  <td className="px-4 py-2">9022</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Address Prefix</td>
                  <td className="px-4 py-2">(0) 0x00</td>
                  <td className="px-4 py-2">(16) 0x10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">Testnet Resources</h2>
          <ul className="list-disc list-inside text-cyan-300 mb-4">
            <li><a href="https://testnet.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1"><ExternalLink className="w-4 h-4 inline" /> Testnet Explorer</a></li>
            <li><a href="https://testnet.ergofaucet.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1"><ExternalLink className="w-4 h-4 inline" /> Testnet Faucet</a> - Get test ERG for development</li>
            <li><a href="https://github.com/capt-nemo429/nautilus-wallet#testnet" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1"><ExternalLink className="w-4 h-4 inline" /> Nautilus Testnet Build</a></li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">Development Tools</h2>
          <p className="text-gray-300 mb-2">When configuring dApps for testnet, update these settings:</p>
          <CodeBlock language="typescript" children={devToolsConf} />
          <p className="text-gray-300 mt-4">For detailed documentation on node setup and development, refer to the <a href="https://docs.ergoplatform.com/documents/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">official Ergo documentation</a>.</p>
        </section>
      </div>
    </>
  );
} 