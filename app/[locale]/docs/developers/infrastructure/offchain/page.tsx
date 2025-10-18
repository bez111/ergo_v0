"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  Code,
  Server,
  ExternalLink,
  Globe,
  Database,
  Package,
  Zap,
  Info,
  Settings,
  BookOpen,
  Shield,
} from "lucide-react";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "oracle-core", label: "Oracle-Core" },
  { key: "off-chain-bots", label: "Off-Chain Bots" },
  { key: "rust-utilities", label: "Rust Utilities" },
  { key: "plasma", label: "Plasma" },
];

export default function OffChainServicesPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="text-white">
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex gap-2 border-b border-neutral-700">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={clsx(
                "px-4 py-2 font-semibold transition-all text-sm rounded-t-md focus:outline-none",
                activeTab === tab.key
                  ? "bg-neutral-900 text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-cyan-300"
              )}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* === Overview Tab === */}
      {activeTab === "overview" && (
        <>
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Building Off-Chain Services for Ergo dApps
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              A comprehensive guide to backend patterns, SDKs, wallet integration, deployment, and best practices for robust Ergo dApps.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs/developers/infrastructure"
                className="inline-flex items-center px-6 py-3 bg-purple-500 rounded-xl font-semibold text-black hover:bg-purple-600 transition-transform hover:scale-105"
              >
                <Server className="w-5 h-5 mr-2" /> Back to Infrastructure
              </Link>
            </div>
          </div>
          {/* Why Off-Chain Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Info className="w-6 h-6 mr-3" />
              Why Off-Chain Services?
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                Off-chain services bridge the gap between users and the blockchain, enabling features impractical or impossible to implement purely on-chain:
              </p>
              <ul className="list-disc ml-6 text-gray-300 space-y-1">
                <li><b>User Interfaces (UI/UX):</b> Web and mobile frontends.</li>
                <li><b>Complex Transaction Construction:</b> Assembling protocol-specific inputs/outputs.</li>
                <li><b>State Management:</b> Tracking app state (order books, user data).</li>
                <li><b>Event Monitoring:</b> Watch for chain events &amp; trigger actions.</li>
                <li><b>Data Indexing:</b> Efficient blockchain queries (<Link href="../tutorials/blockchain-indexing" className="text-blue-400 hover:underline">Indexing Guide</Link>).</li>
                <li><b>Wallet Interaction:</b> Fetching addresses, signing (<Link href="../wallet/eip-standards" className="text-blue-400 hover:underline">EIP-0012</Link>, <Link href="../wallet/payments/ergopay/ergo-pay" className="text-blue-400 hover:underline">ErgoPay</Link>).</li>
                <li><b>Automation:</b> Bots for liquidation/arbitrage.</li>
                <li><b>External Integrations:</b> Off-chain data/API connectivity.</li>
              </ul>
            </div>
          </div>

          {/* Common Off-Chain Patterns */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-3" />
              Common Off-Chain Patterns
            </h2>
            <div className="space-y-8">
              {/* Watchers / Monitors */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">1. Watchers / Monitors</h3>
                <p className="text-gray-300 mb-2">
                  Services that scan new blocks or the mempool for relevant events.
                </p>
                <p className="text-gray-300 mb-2">
                  <b>Example:</b> <span className="text-blue-400">SigmaUSD's reserve monitoring</span> system watches SigRSV/SigUSD token amounts and triggers UI updates.
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`// Fleet SDK watcher (simplified)
import { ErgoNodeApi } from "@fleet-sdk/common";
const nodeApi = new ErgoNodeApi({ url: "http://your-node-ip:9053" });
let lastHeight = 0;

async function watchForBoxes() {
  try {
    const info = await nodeApi.getNodeInfo();
    const currentHeight = info.fullHeight;
    if (currentHeight > lastHeight) {
      for (let h = lastHeight + 1; h <= currentHeight; h++) {
        const headerIds = await nodeApi.getHeaderIdsAtHeight(h);
        if (!headerIds?.length) continue;
        const block = await nodeApi.getBlockById(headerIds[0]);
        if (!block?.blockTransactions) continue;
        for (const tx of block.blockTransactions) {
          for (const box of tx.outputs) {
            if (box.assets.some(a => a.tokenId === "YOUR_TOKEN_ID")) {
              console.log(\`Found box: \${box.boxId} at height \${h}\`);
            }
          }
        }
      }
      lastHeight = currentHeight;
    }
  } catch (e) { console.error(e); }
  setTimeout(watchForBoxes, 30000);
}
watchForBoxes();
`}
                </pre>
                <p className="text-gray-300">
                  <b>Cross-chain example:</b> <Link href="../../eco/rosen/watcher" className="text-blue-400 hover:underline">Rosen Bridge Watchers</Link> monitor deposit events on other blockchains and relay to Ergo.
                </p>
              </div>
              {/* Bots / Agents */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">2. Bots / Agents</h3>
                <p className="text-gray-300 mb-2">
                  Automated services that construct and submit transactions.
                </p>
                <p className="text-gray-300 mb-2">
                  <b>Example:</b> Oracle Pool bots post new price data to the chain.
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`// Fleet SDK bot (conceptual)
import { OutputBuilder, TransactionBuilder, ErgoNodeApi, ErgoProver } from "@fleet-sdk/core";
const nodeApi = new ErgoNodeApi({ url: "http://your-node-ip:9053" });
const botProver = new ErgoProver(process.env.BOT_SECRET_KEY);
async function updateOraclePrice() {
  try {
    const price = await getExternalPrice("ERG-USD");
    const newPriceLong = BigInt(Math.round(price * 100));
    const oracleBox = await nodeApi.getBoxById("YOUR_ORACLE_POOL_BOX_ID");
    const creationHeight = await nodeApi.getCurrentHeight();
    const unsignedTx = new TransactionBuilder(creationHeight)
      .from([oracleBox])
      .to(new OutputBuilder(oracleBox.value, oracleBox.ergoTree)
        .setAdditionalRegisters({ R4: SLong(newPriceLong).toString() })
        .addTokens(oracleBox.assets))
      .sendChangeTo(botProver.getAddress())
      .payFee(RECOMMENDED_MIN_FEE)
      .build();
    const signedTx = await botProver.sign(unsignedTx);
    await nodeApi.submitTransaction(signedTx);
  } catch (e) { console.error(e); }
  setTimeout(updateOraclePrice, 300000);
}
updateOraclePrice();
`}
                </pre>
                <p className="text-gray-300">
                  <b>See:</b> <Link href="../../eco/oracles-v2" className="text-blue-400 hover:underline">Oracle Pools V2</Link>
                </p>
              </div>
              {/* Backend APIs */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">3. Backend APIs for dApps</h3>
                <p className="text-gray-300 mb-2">
                  Central API for frontends to handle state, indexing, and wallet orchestration.
                </p>
                <p className="text-gray-300 mb-2">
                  <b>Example:</b> Auction House backend provides endpoints for auctions, bids, and transaction construction.
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`// Express.js backend API with Fleet SDK (conceptual)
import express from 'express';
import { ErgoNodeApi } from '@fleet-sdk/common';
const app = express();
app.use(express.json());
const nodeApi = new ErgoNodeApi({ url: "http://your-node-ip:9053" });
app.post('/api/build-auction-tx', async (req, res) => {
  try {
    const { sellerAddress, tokenId, startPrice, auctionLength } = req.body;
    const currentHeight = await nodeApi.getCurrentHeight();
    const deadline = currentHeight + auctionLength;
    const auctionOutput = {
      value: startPrice.toString(),
      ergoTree: "YOUR_AUCTION_CONTRACT_TREE",
      assets: [{ tokenId, amount: "1" }],
      additionalRegisters: {
        R4: SGroupElement(ErgoAddress.fromBase58(sellerAddress).getPublicKey()).toHex(),
        R5: SLong(BigInt(deadline)).toHex()
      },
      creationHeight: currentHeight
    };
    res.json({ auctionOutput, fee: RECOMMENDED_MIN_FEE.toString(), creationHeight });
  } catch (e) { res.status(500).json({ error: 'Failed to build tx params' }); }
});
app.listen(3000, () => console.log('API running'));
`}
                </pre>
              </div>
              {/* Indexer Services */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">4. Indexer Services</h3>
                <p className="text-gray-300 mb-2">
                  Dedicated services for processing/storing blockchain data efficiently. See: <Link href="../tutorials/blockchain-indexing" className="text-blue-400 hover:underline">Indexing Guide</Link>
                </p>
              </div>
            </div>
          </div>

          {/* SDK Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <Package className="w-6 h-6 mr-3" />
              SDK Comparison
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-cyan-400 border-b border-neutral-600">
                    <th className="py-2 px-2">Feature / SDK</th>
                    <th className="py-2 px-2"><Link href="fleet" className="hover:underline text-blue-400">Fleet SDK (JS/TS)</Link></th>
                    <th className="py-2 px-2"><Link href="sigma-rust" className="hover:underline text-blue-400">Sigma-Rust</Link></th>
                    <th className="py-2 px-2"><Link href="appkit" className="hover:underline text-blue-400">Appkit (Scala)</Link></th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr><td className="py-2 px-2 font-semibold">Primary Language</td><td>JS/TS</td><td>Rust</td><td>Scala (JVM)</td></tr>
                  <tr><td className="py-2 px-2 font-semibold">Environment</td><td>Node.js, Web</td><td>Native, WASM</td><td>JVM</td></tr>
                  <tr><td className="py-2 px-2 font-semibold">Strengths</td><td>Web integration, ease, UI/backend</td><td>Performance, WASM, low-level</td><td>Strong typing, JVM, Android</td></tr>
                  <tr><td className="py-2 px-2 font-semibold">Weaknesses</td><td>Perf, less type safety</td><td>Steep curve, smaller web eco</td><td>Not for web front, JVM overhead</td></tr>
                  <tr><td className="py-2 px-2 font-semibold">Ideal Use Cases</td><td>Web dApps, scripts, bots</td><td>Indexers, bots, WASM libs</td><td>Backends, Android, protocol</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Connecting to a Node */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3" />
              Core Tasks &amp; Example Code
            </h2>
            <div className="space-y-8">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
                <h3 className="text-md font-semibold text-blue-300 mb-2">Connecting to a Node (Fleet SDK, JS/TS)</h3>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`import { ErgoNodeApi } from "@fleet-sdk/common";
const nodeApi = new ErgoNodeApi({ url: "http://your-node-ip:9053" });
async function getNodeHeight() {
  try {
    const info = await nodeApi.getNodeInfo();
    console.log("Node Height:", info.fullHeight);
  } catch (e) { console.error("Error", e); }
}`}
                </pre>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
                <h3 className="text-md font-semibold text-blue-300 mb-2">Connecting to a Node (Sigma-Rust, Rust)</h3>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`use ergo_node_interface::NodeInterface;
async fn get_node_height() {
    let node = NodeInterface::new("127.0.0.1", "9053", "your_api_key_hash");
    match node.get_node_info().await {
        Ok(info) => println!("Node Height: {}", info.full_height),
        Err(e) => eprintln!("Error: {:?}", e),
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Wallet Integration */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3" />
              Wallet Integration (EIP-0012 &amp; ErgoPay)
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-3">
                <li>
                  <b>
                    <Link href="../wallet/eip-standards" className="text-blue-400 hover:underline">EIP-0012 (dApp Connector)</Link>:
                  </b>
                  &nbsp;Browser/mobile wallet standard. Enables UI-initiated address/signing actions.
                </li>
                <li>
                  <b>
                    <Link href="../wallet/payments/ergopay/ergo-pay" className="text-blue-400 hover:underline">ErgoPay (EIP-0020)</Link>:
                  </b>
                  &nbsp;QR/deeplink protocol. Enables backends or services to request signing from mobile wallets, even outside browser.
                </li>
              </ul>
              <p className="text-gray-300">
                <b>See:</b> <Link href="../wallet/payments/ergopay/ep-tutorial" className="text-blue-400 hover:underline">ErgoPay Tutorial</Link>
              </p>
            </div>
          </div>

          {/* Development Workflow */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-3" />
              Development Workflow
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ol className="list-decimal ml-6 text-gray-300 space-y-1 mb-2">
                <li><b>Design:</b> Define protocol, contracts, and off-chain logic.</li>
                <li><b>On-Chain Dev:</b> Write and test ErgoScript contracts.</li>
                <li><b>Off-Chain Dev:</b> Build backend, watcher, or bot with an SDK.</li>
                <li><b>Testing (Off-Chain):</b> Simulate with SDK test frameworks (Fleet MockChain, Appkit Mockchain, Sigma-Rust test utils).</li>
                <li><b>Testing (Integrated):</b> Deploy/test on Testnet with real nodes/wallets.</li>
                <li><b>Deployment:</b> Go to Mainnet with monitoring &amp; alerts.</li>
              </ol>
              <p className="text-gray-300">
                <b>See also:</b> <a href="https://dav009.medium.com/learning-ergo-101-development-workflow-aa17dd63ef6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Learning Ergo 101</a>
              </p>
            </div>
          </div>

          {/* Testing Strategies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3" />
              Testing Strategies
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-2">
                <li><b>Unit Testing:</b> Test functions (parsing, state, API formatting).</li>
                <li><b>Mocking:</b> Use SDK mocks to simulate node/indexer/wallet responses.</li>
                <li><b>Integration Testing:</b> Full system flow on Testnet.</li>
                <li><b>Component Testing:</b> Test interactions between off-chain system parts.</li>
                <li><b>Load Testing:</b> Simulate high traffic for performance checks.</li>
              </ul>
            </div>
          </div>

          {/* Deployment & Scaling */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
              <Server className="w-6 h-6 mr-3" />
              Deployment &amp; Scaling
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-2">
                <li><b>Infrastructure:</b> Choose cloud, VPS, bare metal; add redundancy, backups, firewall.</li>
                <li><b>Node Access:</b> Ensure reliable, synced node API. Use load balancing.</li>
                <li><b>Database Scaling:</b> Use replicas/sharding if needed. Monitor performance.</li>
                <li><b>Service Scaling:</b> Stateless, horizontally scalable backend APIs/indexers.</li>
                <li><b>Monitoring:</b> Use Prometheus, Grafana, Datadog, etc. Set alerts.</li>
              </ul>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3" />
              Common Challenges &amp; Solutions
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-2">
                <li><b>Reorg Handling:</b> Use frameworks like <a href="https://github.com/ergoplatform/scanner" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ergoplatform/scanner</a>, track block headers, database rollback.</li>
                <li><b>Node Issues:</b> Implement resilient API clients with retries, timeouts, fallback nodes.</li>
                <li><b>State Consistency:</b> Use DB transactions, mark data with block height/hash, handle reorgs robustly.</li>
                <li><b>Key Management:</b> <b>NEVER</b> store keys in code/config. Use HSM, secret managers, or encrypted envs.</li>
                <li><b>Complex Transaction Building:</b> Rely on SDKs, test edge cases thoroughly.</li>
                <li><b>Indexer Performance:</b> Optimize writes, selective indexing, consider multiple indexer instances.</li>
              </ul>
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3" />
              Real-World Examples
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-blue-300 space-y-1">
                <li><a href="https://github.com/anon-real/sigma-usd" target="_blank" rel="noopener noreferrer" className="hover:underline">SigmaUSD</a>: Oracle and reserve management.</li>
                <li><a href="https://github.com/ergoplatform/oracle-core" target="_blank" rel="noopener noreferrer" className="hover:underline">Oracle Core</a>: Oracle pools, off-chain bots.</li>
                <li><a href="https://github.com/ergoplatform/explorer-backend" target="_blank" rel="noopener noreferrer" className="hover:underline">Ergo Explorer Backend</a>: Full-chain indexer.</li>
                <li><a href="https://github.com/Telefragged/off-the-grid/" target="_blank" rel="noopener noreferrer" className="hover:underline">DEX Bots (Grid Trading)</a>.</li>
                <li><a href="https://exlebot.com/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">Exle Tx Bot</a>.</li>
                <li><a href="https://hummingbot.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">HummingBot</a>, <a href="https://github.com/FlyingPig69/KuPyBot" target="_blank" rel="noopener noreferrer" className="hover:underline">KuPyBot</a>.</li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Info className="w-6 h-6 mr-3" />
              Best Practices
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-gray-300 space-y-1">
                <li><b>Stay Informed:</b> Follow Ergo news, protocol updates, and new off-chain opportunities.</li>
                <li><b>Security:</b> Secure your infra and private keys; never store secrets in code.</li>
                <li><b>Community:</b> Engage in forums, Discord, and share experience.</li>
                <li><b>Compliance:</b> Follow all relevant legal &amp; regulatory requirements.</li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <Package className="w-6 h-6 mr-3" />
              Resources
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-blue-300 space-y-1">
                <li><Link href="fleet" className="hover:underline">Fleet SDK</Link>, <Link href="sigma-rust" className="hover:underline">Sigma-Rust</Link>, <Link href="appkit" className="hover:underline">Appkit</Link></li>
                <li><Link href="../wallet/eip-standards" className="hover:underline">EIP-0012 (dApp Connector)</Link>, <Link href="../wallet/payments/ergopay/ergo-pay" className="hover:underline">EIP-0020 (ErgoPay)</Link>, <a href="https://github.com/ergoplatform/eips" target="_blank" rel="noopener noreferrer" className="hover:underline">Official EIP Repo</a></li>
                <li><Link href="../tutorials/blockchain-indexing" className="hover:underline">Indexing Guide</Link>, <a href="https://github.com/ergoplatform/scanner" target="_blank" rel="noopener noreferrer" className="hover:underline">Ergo Scanner</a></li>
                <li><Link href="swagger" className="hover:underline">Node API Swagger UI</Link></li>
                <li><a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="hover:underline">Ergo Discord</a>, <a href="https://www.ergoforum.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ergo Forum</a></li>
              </ul>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3" />
              Updated Architecture Diagram
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <pre className="text-green-400 text-xs bg-neutral-900 p-3 rounded overflow-x-auto">
{`graph LR
    subgraph User Interaction
        User[User via Frontend/UI]
        Wallet[(User Wallet)]
    end

    subgraph OffChain Infrastructure
        BackendAPI[dApp Backend API]
        IndexerDB[(Indexer Database)]
        Indexer[Indexer Service]
        Bot[Automated Bot/Agent]
        Node[Ergo Node API]
    end

    User -->|HTTP/WebSocket| BackendAPI;
    User -->|EIP-0012 / Deeplink| Wallet;

    BackendAPI -->|Reads Data| IndexerDB;
    BackendAPI -->|Builds Tx / ErgoPay Payload| BackendAPI;
    BackendAPI -->|ErgoPay QR/Link| User;
    Wallet -->|Signs Tx| BackendAPI; 

    BackendAPI -->|Submits Signed Tx| Node;

    Indexer -->|Fetches Blocks| Node;
    Indexer -->|Writes Data / Handles Reorgs| IndexerDB;

    Bot -->|Reads Data| IndexerDB;
    Bot -->|Reads Data / Events| Node;
    Bot -->|Builds/Signs Tx| Bot;
    Bot -->|Submits Signed Tx| Node;

    style IndexerDB fill:#ccf,stroke:#333,stroke-width:2px
    style Node fill:#f9f,stroke:#333,stroke-width:2px
    style Wallet fill:#cfc,stroke:#333,stroke-width:2px
`}
              </pre>
            </div>
          </div>

          {/* Closing */}
          <div className="mb-12">
            <div className="text-gray-400 text-sm">
              Building robust off-chain services for Ergo dApps requires careful planning, the right tools, strong security, and extensive testing across scenarios.
            </div>
          </div>
        </>
      )}

       {/* === Oracle-Core Tab === */}
       {activeTab === "oracle-core" && (
         <div>
           {/* Oracle Core Overview */}
           <div className="mb-12">
             <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
               <Zap className="w-6 h-6 mr-3" />
               Oracle Core
             </h2>
             <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
               <p className="text-gray-300 mb-4">
                 <a href="https://github.com/ergoplatform/oracle-core#roadmap" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracle Core</a> is a crucial off-chain component run by oracles, who form an integral part of an oracle pool. This core component provides a user-friendly HTTP API interface that allows for reading the current protocol state and submitting data points.
               </p>
               <p className="text-gray-300 mb-4">
                 Once a data point is submitted, the Oracle Core takes over the heavy lifting. It automatically generates the required transaction, posts it, and performs any other necessary actions for the protocol to run smoothly. This automation significantly reduces the workload for the oracle operator, allowing them to participate in the oracle pool protocol without any additional effort.
               </p>
               <p className="text-gray-300 mb-4">
                 To function correctly, the Oracle Core requires access to a full node wallet. This access enables it to create transactions and perform UTXO-set scanning. Each Oracle Core is designed to work exclusively with a single oracle pool. If an operator runs multiple oracles across various oracle pools, they can still use a single full node. However, they will need to run several instances of Oracle Cores, each set with different API ports.
               </p>
               <p className="text-gray-300">
                 The current Oracle Core is built to run the protocol specified in the <a href="https://github.com/ergoplatform/eips/pull/41" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0023 PR</a>. This protocol outlines the proposed upgrade to Oracle Pool version 1.0, addressing several limitations and introducing new features for improved functionality. These enhancements include a single pool address, epoch counter, compact pool box, reward in tokens, and transferable oracle and ballot tokens, among others. For a detailed technical description and further understanding, refer to <a href="https://github.com/ergoplatform/eips/pull/41" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0023 Oracle Pool 2.0</a>.
               </p>
             </div>
           </div>

           {/* Bootstrap Guide */}
           <div className="mb-12">
             <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
               <Database className="w-6 h-6 mr-3" />
               Bootstrap an Oracle Pool
             </h2>
             
             {/* Before you start */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-blue-400 mb-4">Before you start</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
                 <h4 className="text-lg font-semibold text-green-300 mb-3">Plan pool parameters</h4>
                 <p className="text-gray-300 mb-3">
                   Let's say we have 5 operators. We want to keep consensus above 1/2, so it means we can start a pool of 9 oracles (<code className="text-green-400">oracle_tokens:quantity: 9</code>, <code className="text-green-400">ballot_tokens:quantity: 9</code>), with 5 oracles threshold for minimum data points (<code className="text-green-400">min_data_points: 5</code>) and voting (<code className="text-green-400">min_votes: 5</code>). This way, we'll have 3 vacant oracles places in case someone wants to join later.
                 </p>
               </div>
             </div>

             {/* Step 1 */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-blue-400 mb-4">Step 1. Generate a bootstrap config template</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                 <p className="text-gray-300 mb-3">
                   Generate an oracle config file from the default template with:
                 </p>
                 <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-3">
{`oracle-core generate-oracle-config`}
                 </pre>
                 <p className="text-gray-300 mb-3">
                   and set the required parameters:
                 </p>
                 <ul className="list-disc ml-6 text-gray-300 mb-3">
                   <li><code className="text-green-400">oracle_address</code> to my node's wallet address (make sure you have coins).</li>
                   <li><code className="text-green-400">node_url</code>, <code className="text-green-400">node_api_key</code> - node connection parameters;</li>
                 </ul>
                 <p className="text-gray-300 mb-3">Run</p>
                 <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`oracle-core bootstrap --generate-config-template bootstrap.yaml`}
                 </pre>
               </div>
             </div>

             {/* Step 2 */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-blue-400 mb-4">Step 2. Edit your bootstrap config template</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                 <p className="text-gray-300 mb-3">
                   I made the following changes:
                 </p>
                 <ul className="list-disc ml-6 text-gray-300 mb-3">
                   <li>Set the parameters described in <a href="#plan-pool-parameters" className="text-blue-400 hover:underline">Plan pool parameters</a></li>
                   <li>Name the tokens in <code className="text-green-400">tokens_to_mint</code> section.</li>
                   <li>Set data point source <code className="text-green-400">data_point_source: NanoErgXau</code></li>
                 </ul>
                 <p className="text-gray-300">
                   So in the end, it looked like - <a href="https://gist.github.com/greenhat/2c6135462fba48773196ad45dd6c7404" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">old version, before oracle/pool split configs</a>
                 </p>
               </div>
             </div>

             {/* Step 3 */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-blue-400 mb-4">Step 3. Run `bootstrap` command</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                 <p className="text-gray-300 mb-3">Run</p>
                 <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`oracle-core bootstrap bootstrap.yaml`}
                 </pre>
                 <p className="text-gray-300 mt-3">
                   It submitted the txs to mint the tokens and make pool, refresh, update boxes. Besides that, it created <code className="text-green-400">pool_config.yaml</code> config file to run an oracle.
                 </p>
               </div>
             </div>

             {/* Step 4 */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-blue-400 mb-4">Step 4. Invite other operators</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                 <p className="text-gray-300 mb-3">
                   To invite other operators, I'm sending one oracle, reward, and ballot tokens to the operator's oracle addresses. I'm using <a href="https://github.com/ergoplatform/oracle-core/blob/develop/scripts/send_new_oracle.sh" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">send_new_oracle.sh</a> for this task.
                 </p>
               </div>
             </div>

             {/* Step 5 */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-blue-400 mb-4">Step 5. Start your oracle</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                 <p className="text-gray-300 mb-3">I started my oracle with the following:</p>
                 <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`oracle-core run`}
                 </pre>
                 <p className="text-gray-300 mt-3">And it posted the first data point.</p>
               </div>
             </div>

             {/* Step 6 */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-blue-400 mb-4">Step 6. Send pool config to the operators</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                 <p className="text-gray-300 mb-3">
                   Besides the tokens the pool config file that you are running now should be sent as well. Send <code className="text-green-400">pool_config.yaml</code> to the operators and ask them to start the oracle with
                 </p>
                 <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`oracle-core run`}
                 </pre>
                 <p className="text-gray-300 mt-3">
                   After they start their oracles keep an eye on your oracle log file and wait for refresh tx generated. It means your pool is running and the pool box was updated.
                 </p>
               </div>
             </div>

             {/* References */}
             <div className="mb-8">
               <h3 className="text-xl font-bold text-green-400 mb-4">References</h3>
               <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                 <ul className="list-disc ml-6 text-blue-300 space-y-1">
                   <li><a href="https://github.com/ergoplatform/oracle-core/blob/develop/docs/how_to_bootstrap.md" className="hover:underline" target="_blank" rel="noopener noreferrer">How I bootsrapped an ERG/XAU pool on testnet</a></li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       )}

      {/* === Off-Chain Bots Tab === */}
      {activeTab === "off-chain-bots" && (
        <div>
          {/* Spectrum.DEX Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
              <Server className="w-6 h-6 mr-3" />
              Spectrum.DEX off-chain services
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">
                Taken from <a href="https://github.com/spectrum-finance/ergo-dex-backend" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-dex-backend</a>
              </p>
              <p className="text-gray-300">
                A set of off-chain services facilitating Spectrum.DEX functioning.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Info className="w-6 h-6 mr-3" />
              Introduction
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <p className="text-gray-300 mb-6">
                A set of off-chain services facilitating Spectrum.DEX functioning.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-3">AMM DEX services:</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><b>UTXO Tracker</b> - extracts AMM orders and pool state updates from the UTXO feed</li>
                    <li><b>AMM Executor</b> - executes AMM orders into a transaction chain</li>
                    <li><b>Pool Resolver</b> - tracks pool updates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">OrderBook DEX services:</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><b>UTXO Tracker</b> - extracts orders from the UTXO feed</li>
                    <li><b>Matcher</b> - order-book matching engine</li>
                    <li><b>Orders Executor</b> - executes orders</li>
                    <li><b>Markets API</b> - aggregates market data and provides a convenient API to access it</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AMM Services Image */}
          <div className="mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                             <img 
                 src="/assets/img/AMM_Backend.svg" 
                 alt="AMM Services Architecture" 
                 className="w-full h-auto rounded-lg"
               />
              <p className="text-gray-400 text-sm mt-2 text-center">AMM Services Architecture</p>
            </div>
          </div>

          {/* Building & Running */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3" />
              Building &amp; Running the off-chain services
            </h2>
            
            {/* Prerequisites */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Prerequisites</h3>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
                <p className="text-gray-300 mb-4">
                  The services require access to an Ergo node, so if you do not have one yet install as instructed here: <a href="https://github.com/ergoplatform/ergo" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo github</a>
                </p>
                <p className="text-gray-300 mb-4">
                  Besides the node the services depend on tools such as Kafka and Redis to run, to make it easier to manage a docker based solution has been made to allow for easy building and running of the services.
                </p>
                <p className="text-gray-300 mb-4">
                  The only requirements besides the node are that you have the following installed:
                </p>
                <ul className="list-disc ml-6 text-gray-300 space-y-1">
                  <li><b>GIT</b> to download the code and help fetch updates. <a href="https://git-scm.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GIT</a></li>
                  <li><b>SBT</b> (which requires Java) for building the bots. <a href="https://www.scala-sbt.org/index.html" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">SBT</a></li>
                  <li><b>Docker</b> and Docker-compose (included in Docker for Windows). <a href="https://www.docker.com/get-started" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Docker</a></li>
                </ul>
              </div>
            </div>

            {/* Building */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Building</h3>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                <p className="text-gray-300 mb-3">
                  First, you need to download the code from this repo. The easiest way to keep it updated in the future is by using git:
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-4">
{`cd <the folder you want to keep the off-chain services code in>
git clone https://github.com/ergolabs/ergo-dex-backend.git`}
                </pre>
                <p className="text-gray-300 mb-3">
                  Instructions for building the services are all combined in the build script and the docker-compose.yml file. The only configuration needed for running the services need to be stored in a file called config.env. An example can be found in config-example.env
                </p>
                <p className="text-gray-300 mb-3">
                  Make a copy of the example file, name it config.env and edit the file to match your values:
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-4">
{`cd ergo-dex-backend
cp ./config-example.env ./config.env`}
                </pre>
                <p className="text-gray-300 mb-3">
                  The 2 values that need to be changed in the config.env file are the address you want to recieve fees on and the URI to your node (localhost/127.0.0.1 might not be accessible from within a docker container, it is best to use the local lan ip if the node is running on the same host).
                </p>
                <p className="text-gray-300 mb-3">
                  Finally the Docker images need to be build before running them:
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`./build`}
                </pre>
              </div>
            </div>

            {/* Running the services */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Running the services</h3>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
                <p className="text-gray-300 mb-3">
                  Once the Docker images are built the only thing left to do is to run them:
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-4">
{`./run`}
                </pre>
                
                <h4 className="text-lg font-semibold text-green-300 mb-3">Verifying the services are running correctly</h4>
                <p className="text-gray-300 mb-3">
                  You can look into the logs of the services to ensure they are running correctly. To look at a combined log for all services use the following command:
                </p>
                <p className="text-gray-300 mb-2 font-semibold">Windows:</p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-3">
{`cd ergo-dex-backend
docker compose logs -f`}
                </pre>
                <p className="text-gray-300 mb-2 font-semibold">Linux:</p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`cd ergo-dex-backend
sudo docker-compose logs -f`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Rust Utilities Tab === */}
      {activeTab === "rust-utilities" && (
        <div>
          {/* Ergo Utilities in Rust Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3" />
              Ergo Utilities in Rust
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">
                The <a href="https://github.com/ergoplatform/ergo-utilities-rust" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-utilities-rust</a> repository contains a collection of experimental libraries designed for writing off-chain Ergo code in Rust. These utilities provide a robust and efficient way to interact with the Ergo blockchain, enabling developers to build powerful and secure applications.
              </p>
              <p className="text-gray-300 mb-4">
                The utilities are built with a focus on performance, security, and ease of use. They offer a wide range of features, including transaction building, signing, and serialization, as well as various cryptographic functions.
              </p>
              <p className="text-gray-300">
                For more information on working in Rust, see the <a href="sigma-rust" className="text-blue-400 hover:underline">Sigma Rust documentation</a>.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Package className="w-6 h-6 mr-3" />
              Key Features
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-3">Performance & Security</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>High-performance Rust implementation</li>
                    <li>Memory-safe and thread-safe operations</li>
                    <li>Zero-cost abstractions for critical paths</li>
                    <li>Cryptographic security guarantees</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Blockchain Integration</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>Transaction building and signing</li>
                    <li>UTXO management and serialization</li>
                    <li>ErgoScript compilation and execution</li>
                    <li>Node API integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <Server className="w-6 h-6 mr-3" />
              Use Cases
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">Off-chain Services</h3>
                  <p className="text-gray-300">
                    Build high-performance off-chain services, bots, and indexers that can process large amounts of blockchain data efficiently.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">WASM Libraries</h3>
                  <p className="text-gray-300">
                    Compile to WebAssembly for use in web applications, providing native performance in browser environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">System Integration</h3>
                  <p className="text-gray-300">
                    Integrate Ergo functionality into existing Rust applications, microservices, and backend systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3" />
              Getting Started
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                To get started with ergo-utilities-rust:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Installation</h3>
                  <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`# Add to Cargo.toml
[dependencies]
ergo-utilities = "0.1.0"`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Basic Usage</h3>
                  <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`use ergo_utilities::transaction::TransactionBuilder;
use ergo_utilities::crypto::SecretKey;

// Create a new transaction
let builder = TransactionBuilder::new();
// ... build your transaction`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              Documentation & Resources
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Official Resources</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><a href="https://github.com/ergoplatform/ergo-utilities-rust" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a> - Source code and issues</li>
                    <li><a href="sigma-rust" className="text-blue-400 hover:underline">Sigma Rust Documentation</a> - Core Rust libraries</li>
                    <li><a href="https://docs.rs/ergo-utilities" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Rust Documentation</a> - API reference</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Community</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>Ergo Discord - #rust channel</li>
                    <li>GitHub Discussions - Q&A and examples</li>
                    <li>Stack Overflow - Tagged with ergo-rust</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Plasma Tab === */}
      {activeTab === "plasma" && (
        <div>
          {/* Plasma Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-3" />
              Plasma
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">
                <a href="https://github.com/GetBlok-io/GetBlok-Plasma" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GetBlok Plasma</a> is a library on top of Ergo <a href="appkit" className="text-blue-400 hover:underline">Appkit</a> that provides an abstraction layer to simplify the process of integrating AVL Trees (AKA Plasma) into off-chain code. The goal is to give developers an easy way to use this Layer-2 scaling solution in contracts, off-chain code, and distributed systems managing the Plasma itself. GetBlok Plasma uses the default versioned storage implementation powered by LevelDB, with another SwayDB implementation in the works. <strong>This allows for distributed systems to keep track of the key-value pairs held in digests stored on-chain.</strong>
              </p>
              <p className="text-gray-300 mb-4">
                See these documents to get started:
              </p>
              <ul className="list-disc ml-6 text-gray-300 space-y-1">
                <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/AVL_Trees.MD" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">AVL Trees / Plasma In ErgoScript: Basics, Tips, and Design Patterns</a></li>
                <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/SmartPool_Plasma.MD" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Mining Pool Operating At Layer 2</a></li>
              </ul>
            </div>
          </div>

          {/* Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Info className="w-6 h-6 mr-3" />
              Details
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-6">
                Creating and managing AVL Trees is greatly simplified when using the library. To create a normal, un-stored / temporary AVL Tree, we use <em>Plasma Maps</em>. Plasma Maps look similar to normal Scala maps on the surface with a few changes that make them compatible with on-chain AVL Trees.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Basic Plasma Map Example</h3>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.PlasmaMap
import org.ergoplatform.appkit.ErgoId
import sigmastate.{AvlTreeFlags, Values}

// Plasma Map that uses ErgoId's as keys, and ErgoTrees as values
val plasmaMap = new PlasmaMap[ErgoId, Values.ErgoTree](AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)`}
                </pre>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-300 mb-3">ByteConversion Implementation</h3>
                <p className="text-gray-300 mb-3">
                  All Plasma Maps use 32 byte digests and Blake2b256 hashing. Any class may be inserted into a Plasma Map so long as there is a corresponding implicit <code className="text-blue-400">ByteConversion</code> for that class.
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`import io.getblok.getblok_plasma.ByteConversion
import org.ergoplatform.appkit.ErgoId
import sigmastate.Values
import sigmastate.serialization.ErgoTreeSerializer

// Default ByteConversions for ErgoId and ErgoTree
implicit val convertsId: ByteConversion[ErgoId] = new ByteConversion[ErgoId] {
  override def convertToBytes(t: ErgoId): Array[Byte] = t.getBytes
  override def convertFromBytes(bytes: Array[Byte]): ErgoId = new ErgoId(bytes)
}

implicit val convertsErgoTree: ByteConversion[Values.ErgoTree] = new ByteConversion[Values.ErgoTree] {
  override def convertToBytes(t: Values.ErgoTree): Array[Byte] = t.bytes
  override def convertFromBytes(bytes: Array[Byte]): Values.ErgoTree = ErgoTreeSerializer.DefaultSerializer.deserializeErgoTree(bytes)
}`}
                </pre>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Custom Classes</h3>
                <p className="text-gray-300 mb-3">
                  Custom classes may also be used with their own definitions to allow for flexibility in contracts:
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`import com.google.common.primitives.{Ints, Longs}
import io.getblok.getblok_plasma.ByteConversion
import org.bouncycastle.util.encoders.Hex
import org.ergoplatform.appkit.{ErgoType, ErgoValue}
import sigmastate.eval.Colls
import special.collection.Coll

case class StateScore(score: Long, paid: Boolean) {
  def toBytes: Array[Byte] = Longs.toByteArray(score) ++ Array(if(paid) 1.toByte else 0.toByte)
}

def getPaid(byte: Byte): Boolean = {
  byte match {
    case 0 => false
    case 1 => true
    case _ => throw new Exception("A payment byte was serialized incorrectly!")
  }
}

implicit val scoreConversion: ByteConversion[StateScore] = new ByteConversion[StateScore] {
  override def convertToBytes(t: StateScore): Array[Byte] = t.toBytes
  override def convertFromBytes(bytes: Array[Byte]): StateScore = StateScore(Longs.fromByteArray(bytes.slice(0, 8)), getPaid(bytes.slice(8, 9).head))
}`}
                </pre>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Operations and Results</h3>
                <p className="text-gray-300 mb-3">
                  Once a Plasma Map is created, operations may be performed on it. All operations done on a Plasma Map return some <code className="text-blue-400">OpResult</code> that wraps the Plasma Map's <em>value</em> field. The set of these <code className="text-blue-400">OpResult</code>s are returned in a <code className="text-blue-400">ProvenResult</code>, which holds the returned values along with a <code className="text-blue-400">Proof</code> object that holds the corresponding proof for the batched set of operations.
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.{OpResult, PlasmaMap, Proof, ProvenResult}
import io.getblok.getblok_plasma.ByteConversion.convertsLongVal
import org.ergoplatform.appkit.ErgoId
import sigmastate.AvlTreeFlags

val tokenMap = new PlasmaMap[ErgoId, Long](AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)

val cometId: ErgoId = ErgoId.create("0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b")
val tokenData: Seq[(ErgoId, Long)] = Seq(cometId -> 100L)

val result: ProvenResult[Long] = tokenMap.insert(tokenData: _*)

val opResults: Seq[OpResult[Long]] = result.response
val proof: Proof = result.proof`}
                </pre>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Ergo Appkit Integration</h3>
                <p className="text-gray-300 mb-3">
                  All of these classes have functions to convert between common types used in Ergo Appkit. This allows for easy interactions between Plasma Map's and on-chain contracts.
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`import io.getblok.getblok_plasma.collections.{PlasmaMap, Proof}
import org.ergoplatform.appkit.{ErgoClient, ErgoContract, ErgoId, Parameters}

implicit val ergoClient: ErgoClient
implicit val myContract: ErgoContract
implicit val myMap: PlasmaMap[ErgoId, Long]
implicit val myProof: Proof

ergoClient.execute {
  ctx =>
    val txB = ctx.newTxBuilder()
    val outB = txB.outBoxBuilder()
    val outBox = outB
            .value(Parameters.OneErg)
            .contract(myContract)
            .registers(myMap.ergoValue, myProof.ergoValue)
            .build()
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* LocalPlasmaMap */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3" />
              LocalPlasmaMap
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">
                Interacting with a locally stored Plasma Map is done in a similar way, except that you must use the <code className="text-blue-400">LocalPlasmaMap</code> class instead.
              </p>
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.LocalPlasmaMap
import io.getblok.getblok_plasma.ByteConversion.convertsLongKey
import scorex.crypto.authds.avltree.batch.VersionedLDBAVLStorage
import scorex.crypto.hash.{Blake2b256, Digest32}
import scorex.db.LDBVersionedStore
import sigmastate.{AvlTreeFlags, Values}
import java.io.File

val ldbStore = new LDBVersionedStore(new File("./level"), 10)
val avlStorage = new VersionedLDBAVLStorage[Digest32](ldbStore, PlasmaParameters.default.toNodeParams)(Blake2b256)
val localMap = new LocalPlasmaMap[Long, Values.ErgoTree](avlStorage, AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)`}
              </pre>
            </div>
          </div>

          {/* ProxyPlasmaMap */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              ProxyPlasmaMap
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">
                It can be useful to apply changes to a tree without necessarily committing to them. This is especially true in the context of chained transactions or unexpected errors. For example, if changes are applied to the tree but latency causes connection to the node to be lost, then the locally stored tree may have changes that do not exist on-chain!
              </p>
              <p className="text-gray-300 mb-4">
                To deal with this problem, you can use a <code className="text-blue-400">ProxyPlasmaMap</code>. This PlasmaMap applies changes on a temporary tree which allows you to receive proofs for the operations you perform. However, none of these changes are saved to storage until the <code className="text-blue-400">commitChanges()</code> function is called. This ensures that unexpected errors can be dealt with easily.
              </p>
              <p className="text-gray-300 mb-4">
                When dealing with the <code className="text-blue-400">ProxyPlasmaMap</code>, changes must first be explicitly enabled by calling <code className="text-blue-400">initiate()</code>. This function initializes the internal temporary map. Following this, operations may be performed on the map. All operations are applied to the temporary map, but are also kept track of inside an internal Queue. Once <code className="text-blue-400">commitChanges()</code> is called, the Queued operations are applied to persistent storage, and the temporary map is destroyed.
              </p>
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.{LocalPlasmaMap, ProxyPlasmaMap}
import org.ergoplatform.appkit.ErgoId
import scorex.crypto.authds.avltree.batch.VersionedLDBAVLStorage
import scorex.crypto.hash.{Blake2b256, Digest32}
import scorex.db.LDBVersionedStore
import sigmastate.{AvlTreeFlags, Values}
import io.getblok.getblok_plasma.ByteConversion.convertsLongVal
import java.io.File

val ldbStore = new LDBVersionedStore(new File("./level"), 10)
val avlStorage = new VersionedLDBAVLStorage[Digest32](ldbStore, PlasmaParameters.default.toNodeParams)(Blake2b256)
val proxyMap = new ProxyPlasmaMap[ErgoId, Long](avlStorage, AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)
val ergopadId: ErgoId = ErgoId.create("d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413")
val tokenDataErgoPad: Seq[(ErgoId, Long)] = Seq(ergopadId -> 100L)

// This will fail due to the ProxyMap being un-initiated
proxyMap.insert(tokenDataErgoPad: _*)

// Initiates operations on the tree
proxyMap.initiate()

// This will be successfully applied to the internal temporary tree, while also queueing this
// operation for later application into persistence
proxyMap.insert(tokenDataErgoPad: _*)

// This commits ALL of the changes made on the temporary tree into persistent storage, while also
// destroying the temporary tree
proxyMap.commitChanges()

val cometId: ErgoId = ErgoId.create("0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b")
val tokenDataComet: Seq[(ErgoId, Long)] = Seq(cometId -> 100L)

proxyMap.initiate()
proxyMap.insert(tokenDataComet: _*)

// This commits only the next operation that exists in the Queue. This does NOT destroy
// the temporary map.
proxyMap.commitNextOperation()

// This drops any uncommitted changes and destroys the temporary map. In this case,
// all changes were already committed since only one operation was performed.
proxyMap.dropChanges()`}
              </pre>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              Resources
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><a href="https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Plasma Example: Off-chain Bank operating at Layer 2</a></li>
                <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GetBlok Plasma</a></li>
                <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/SmartPool_Plasma.MD" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GetBlok: SmartPool Plasma</a></li>
                <li><a href="https://github.com/ergo-pad/paideia-contracts/blob/main/paideia_contracts/contracts/plasma_staking/ergoscript/latest/plasmaStaking.es" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Paideia - Plasma Staking</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
