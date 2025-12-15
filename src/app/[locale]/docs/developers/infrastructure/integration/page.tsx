import React from "react";
import { Link } from "@/i18n/navigation";

export default function IntegrationGuidePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Platform Blockchain Integration Guide
      </h1>
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/infrastructure"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          Back to Infrastructure
        </Link>
        <Link
          href="/docs/developers/infrastructure/integration/transaction-lifecycle"
          className="inline-flex items-center px-6 py-3 bg-cyan-700 rounded-xl font-semibold text-white hover:bg-cyan-800 transition-transform hover:scale-105"
        >
          Transaction Lifecycle
        </Link>
        <Link
          href="/docs/developers/infrastructure/integration/dust-collection"
          className="inline-flex items-center px-6 py-3 bg-yellow-600 rounded-xl font-semibold text-black hover:bg-yellow-700 transition-transform hover:scale-105"
        >
          Dust Collection
        </Link>
      </div>
      <p className="text-gray-300 mb-4">
        This guide explains every step required to connect software and services to the Ergo blockchain. It keeps all original detail while arranging information in a logical build‑order: <b>concepts → infrastructure → transactions → operations → reference</b>.
      </p>
      <p className="text-gray-300 mb-4">
        Send questions or suggestions to <a href="mailto:team@ergoplatform.org" className="text-blue-400 hover:underline">team@ergoplatform.org</a> or join the <a href="https://discord.gg/kj7s7nb" className="text-cyan-400 hover:underline">#development Discord channel</a>.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">1. Core Concepts</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Topic</th>
              <th className="py-2 px-3 font-bold">Essential facts</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3 font-semibold">Transaction Model</td><td className="py-2 px-3">Each transaction spends one‑time “boxes” (UTXOs) and creates new boxes. Examine the full <a href="box.md" className="text-cyan-400 hover:underline">Ergo Box model</a>.</td></tr>
            <tr><td className="py-2 px-3 font-semibold">Addresses</td><td className="py-2 px-3">Standard P2PK scripts appear at regular wallets. The <a href="address.md" className="text-cyan-400 hover:underline">address scheme</a> documents every variant.</td></tr>
            <tr><td className="py-2 px-3 font-semibold">Boxes & Registers</td><td className="py-2 px-3">A box stores an ERG amount <b>and</b> an optional list of <code>{'{tokenId, tokenAmount}'}</code> pairs inside typed registers. Details live in the <a href="registers.md" className="text-cyan-400 hover:underline">register guide</a>.</td></tr>
            <tr><td className="py-2 px-3 font-semibold">Precision</td><td className="py-2 px-3">Smallest unit = 0.000 000 001 ERG (10⁻⁹ ERG).</td></tr>
            <tr><td className="py-2 px-3 font-semibold">Block Interval</td><td className="py-2 px-3">Average block time ≈ 2 minutes.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">2. Infrastructure & Tooling</h2>
      <h3 className="text-xl font-bold mb-3 mt-6">2.1 Ergo Node</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>Installation</b> — follow the <a href="install.md" className="text-cyan-400 hover:underline">node install guide</a>.</li>
        <li><b>Public alternative</b> — <code>http://213.239.193.208:9053</code> (dynamic list at <a href="https://api.tokenjay.app/peers/list" className="text-cyan-400 hover:underline">api.tokenjay.app/peers/list</a>).</li>
        <li><b>Disk space</b> — secure at least <b>100 GB</b>.</li>
        <li><b>Web panel</b> — open <code>127.0.0.1:9053/panel</code> on main‑net or <code>127.0.0.1:9052/panel</code> on <a href="testnet.md" className="text-cyan-400 hover:underline">test‑net</a>.</li>
        <li><b>Pruned mode</b> — accelerate sync with a <a href="pruned-full-node.md" className="text-cyan-400 hover:underline">pruned node snapshot plus NiPoPoWs</a>.</li>
      </ul>
      <div className="bg-cyan-900/10 border-l-4 border-cyan-500 px-4 py-3 rounded mb-4 text-cyan-200">
        <b>Tip:</b> Ergo node offers a REST API accessible via HTTP. The complete API specification, in OpenAPI format, can be found <a href="openapi.md" className="text-cyan-400 hover:underline">here</a>. When the node is operational, access the user-friendly Swagger UI at <code>127.0.0.1:9053/swagger</code> or experiment with it <a href="swagger_api.md" className="text-cyan-400 hover:underline">here</a>. An optional <a href="indexed-node.md" className="text-cyan-400 hover:underline">indexed node API</a> is also available.
      </div>
      <p className="text-gray-300 mb-2">Major wallet functionalities include:</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>Wallet creation (<code>/wallet/init</code>) and mnemonic generation</li>
        <li>Wallet restoration (<code>/wallet/restore</code>) from mnemonic</li>
        <li>Wallet unlock (<code>/wallet/unlock</code>) for transaction signing</li>
        <li>Wallet lock (<code>/wallet/lock</code>)</li>
        <li>Sending a simple payment (<code>/wallet/payment/send</code>)</li>
        <li>Checking wallet status (<code>/wallet/status</code>)</li>
        <li>Deriving a new key according to <a href="eip3.md" className="text-cyan-400 hover:underline">EIP-3</a> (<code>/wallet/deriveNextKey</code>)</li>
        <li>Checking wallet balance (<code>/wallet/balances</code>) for all addresses</li>
        <li>Retrieving wallet transactions (<code>/wallet/transactions</code>) for all addresses</li>
      </ul>
      <div className="text-gray-300 mb-4">
        <b>RPC Documentation:</b>
        <ul className="list-disc pl-6">
          <li><a href="swagger.md" className="text-cyan-400 hover:underline">Overview</a></li>
          <li><a href="openapi.md" className="text-cyan-400 hover:underline">API Spec</a></li>
          <li><a href="indexed-node.md" className="text-cyan-400 hover:underline">Indexed Node</a></li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mb-3 mt-6">2.2 Wallet Configuration (for exchanges & pools)</h3>
      <div className="bg-yellow-900/10 border-l-4 border-yellow-500 px-4 py-3 rounded mb-4 text-yellow-200">
        <b>Warning:</b> Wallets that receive continuous micro‑deposits must enable <b>dust collection</b>; otherwise transactions will time‑out or exceed the execution‑cost ceiling. The <a href="dust-collection.md" className="text-yellow-400 hover:underline">dust‑collection guide</a> shows you how to automate sweeping, perform manual clean‑ups, and monitor UTXO counts.
      </div>

      <h3 className="text-xl font-bold mb-3 mt-6">2.3 Explorers & GraphQL Endpoints</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>Official Explorer (UI + REST)</b> — <a href="https://explorer.ergoplatform.com" className="text-cyan-400 hover:underline">explorer.ergoplatform.com</a></li>
        <li><b>Community Explorer</b> — <a href="https://ergexplorer.com" className="text-cyan-400 hover:underline">ergexplorer.com</a></li>
        <li><b>Community Explorer</b> — <a href="https://sigmaspace.io" className="text-cyan-400 hover:underline">sigmaspace.io</a></li>
        <li><b>Public GraphQL API</b> — <code>https://explore.sigmaspace.io/api/graphql</code></li>
        <li><b>Self‑hosted Indexed Node</b> — enable indexing via <a href="indexed-node.md" className="text-cyan-400 hover:underline">Indexed Node Setup</a> to expose explorer‑style REST <b>and</b> GraphQL endpoints directly from your own node—no separate explorer UI needed (recommended for exchanges & other high‑volume backends).</li>
      </ul>
      <p className="text-gray-300 mb-4">
        High‑volume operators should run a private indexed node so queries never depend on external rate limits or third‑party uptime.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">3. Transactions & Wallet Operations</h2>
      <p className="text-gray-300 mb-4">
        Before accepting or returning funds, you’ll need addresses. The <a href="transaction-lifecycle.md" className="text-cyan-400 hover:underline">Transaction Lifecycle</a> section walks through an Ergo transaction step by step:
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4">
        <li>Generate an address for incoming funds</li>
        <li>Select UTXOs and build an unsigned transaction</li>
        <li>Sign—via the node wallet or an offline key store</li>
        <li>Broadcast and track confirmations</li>
      </ol>

      <h2 className="text-2xl font-bold mb-4 mt-8">4. Protocol Governance & Security Essentials</h2>
      <h3 className="text-xl font-bold mb-3 mt-6">4.1 Forking & Upgrade Mechanisms</h3>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Mode</th>
              <th className="py-2 px-3 font-bold">Who must upgrade?</th>
              <th className="py-2 px-3 font-bold">Back‑compatibility</th>
              <th className="py-2 px-3 font-bold">Typical use</th>
              <th className="py-2 px-3 font-bold">More</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3 font-semibold">Soft‑fork</td><td className="py-2 px-3">Miner majority (≥ 90 %)</td><td className="py-2 px-3">✅ old nodes keep syncing</td><td className="py-2 px-3">Protocol tweaks like EIP‑37 re‑emission</td><td className="py-2 px-3"><a href="soft-fork.md" className="text-cyan-400 hover:underline">Soft‑fork</a></td></tr>
            <tr><td className="py-2 px-3 font-semibold">Velvet‑fork</td><td className="py-2 px-3">Minority of miners</td><td className="py-2 px-3">✅ 100 % backward compatible</td><td className="py-2 px-3">Opt‑in features (e.g., NiPoPoW interlinks)</td><td className="py-2 px-3"><a href="velvet-fork.md" className="text-cyan-400 hover:underline">Velvet‑fork</a></td></tr>
            <tr><td className="py-2 px-3 font-semibold">Hard‑fork</td><td className="py-2 px-3">All nodes</td><td className="py-2 px-3">❌ split if some stay old</td><td className="py-2 px-3">Only for critical consensus changes</td><td className="py-2 px-3"><a href="hard-fork.md" className="text-cyan-400 hover:underline">Hard‑fork</a></td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-300 mb-4">
        Ergo deliberately keeps hard‑fork risk low by pushing complexity to the application layer and preferring soft‑ or velvet‑forks whenever possible.
      </p>

      <h3 className="text-xl font-bold mb-3 mt-6">4.2 51 %‑Attack Resistance</h3>
      <p className="text-gray-300 mb-4">
        Ergo’s ASIC‑resistant <b>Autolykos</b> PoW requires large memory and favours off‑exchange solo mining, making hashrate capture expensive. Diversified pools (see <a href="pools.md" className="text-cyan-400 hover:underline">pools.md</a>) further dilute control.
      </p>

      <h3 className="text-xl font-bold mb-3 mt-6">4.3 Storage Rent</h3>
      <p className="text-gray-300 mb-4">
        Unspent boxes older than ≈ 4 years pay <b>storage rent</b> (~0.14 ERG for a simple box). This recycles lost coins and keeps the UTXO set bounded. Rent rules live in <a href="rent.md" className="text-cyan-400 hover:underline">storage‑rent.md</a>.
      </p>
    </>
  );
} 