"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function TransactionLifecyclePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Transaction Lifecycle
      </h1>
      <Link
        href="/Docs/developers/infrastructure/integration"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        Back to Integration Guide
      </Link>
      <p className="text-gray-300 mb-6">
        A typical Ergo payment moves through four well‑defined stages. Follow them in order to keep code, wallets, and monitoring tools predictable.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-6">
        <li><b>Address creation</b> – pick or derive addresses for deposits and change</li>
        <li><b>Unsigned composition</b> – gather inputs, craft outputs, and set the fee</li>
        <li><b>Signature</b> – sign with the node wallet or an offline keystore</li>
        <li><b>Broadcast & confirmation tracking</b> – publish the JSON and watch the mempool</li>
      </ol>
      <p className="text-gray-400 mb-6">Each section links to demo code, REST calls, and common hazards.</p>

      <h2 className="text-2xl font-bold mb-4 mt-8">1. Address Creation</h2>
      <p className="text-gray-300 mb-4">Ergo follows BIP‑32/BIP‑44. One seed drives two deterministic chains:</p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-[400px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Chain</th>
              <th className="py-2 px-3 font-bold">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3 font-semibold">0</td><td className="py-2 px-3">external – deposits and invoices</td></tr>
            <tr><td className="py-2 px-3 font-semibold">1</td><td className="py-2 px-3">internal – change and dust sweeps</td></tr>
          </tbody>
        </table>
      </div>
      <div className="bg-yellow-900/10 border-l-4 border-yellow-500 px-4 py-3 rounded mb-4 text-yellow-200">
        <b>Best practice:</b> Fix <b>chain = 1, index = 0</b> as the change address. The node sends every remainder there and cleans up dust.
      </div>
      <h3 className="text-xl font-bold mb-2 mt-6">1.1 Programmatic derivation (preferred)</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-[400px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Language</th>
              <th className="py-2 px-3 font-bold">Library</th>
              <th className="py-2 px-3 font-bold">Quick link</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">Java / Kotlin</td><td className="py-2 px-3 font-semibold">ergo‑appkit</td><td className="py-2 px-3"><a href="https://gist.github.com/kushti/70dcfa841dfb504721f09c911b0fc53d" className="text-cyan-400 hover:underline">AddressGenerationDemo.java</a></td></tr>
            <tr><td className="py-2 px-3">Java utilities</td><td className="py-2 px-3 font-semibold">ergo‑simple‑addresses</td><td className="py-2 px-3"><a href="https://github.com/kushti/ergo-simple-addresses" className="text-cyan-400 hover:underline">github.com/kushti/ergo-simple-addresses</a></td></tr>
            <tr><td className="py-2 px-3">Java backend</td><td className="py-2 px-3 font-semibold">ergo‑wallet</td><td className="py-2 px-3"><a href="https://mvnrepository.com/artifact/org.ergoplatform/ergo-wallet" className="text-cyan-400 hover:underline">mvnrepository.com/ergo-wallet</a></td></tr>
            <tr><td className="py-2 px-3">Rust / WASM</td><td className="py-2 px-3 font-semibold">sigma‑rust</td><td className="py-2 px-3"><a href="https://git.io/JkzEt" className="text-cyan-400 hover:underline">tx_builder.rs</a></td></tr>
            <tr><td className="py-2 px-3">JS / TS</td><td className="py-2 px-3 font-semibold">ergo‑lib‑wasm</td><td className="py-2 px-3"><a href="https://git.io/JkzEj" className="text-cyan-400 hover:underline">test_transaction.js</a></td></tr>
            <tr><td className="py-2 px-3">Go</td><td className="py-2 px-3 font-semibold">ergo‑lib‑go</td><td className="py-2 px-3"><a href="https://github.com/sigmaspace-io/ergo-lib-go" className="text-cyan-400 hover:underline">github.com/sigmaspace-io/ergo-lib-go</a></td></tr>
            <tr><td className="py-2 px-3">Go (early)</td><td className="py-2 px-3 font-semibold">ergo‑golang</td><td className="py-2 px-3"><a href="https://github.com/azhiganov/ergo-golang" className="text-cyan-400 hover:underline">github.com/azhiganov/ergo-golang</a></td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-300 mb-4">A withdrawal must target <b>P2PK</b>. Other types break audit logic and UX.</p>
      <p className="text-gray-300 mb-2 font-semibold">Path template</p>
      <CodeBlock language="typescript">{`m / 44' / 429' / account' / chain / index`}</CodeBlock>

      <h3 className="text-xl font-bold mb-2 mt-6">1.2 Node wallet derivation</h3>
      <CodeBlock language="typescript">{`curl "http://localhost:9053/wallet/deriveNextKey" \
  -H "accept: application/json" \
  -H "api_key: hello"`}</CodeBlock>
      <CodeBlock language="typescript">{`{
  "derivationPath": "m/44'/429'/0'/0/1",
  "address": "9gF9QP33MoPc8uekF95VHdosL4KzgSz7Ec7MLEtuhx4uPAd3eZs"
}`}</CodeBlock>

      <h2 className="text-2xl font-bold mb-4 mt-8">2. Unsigned Composition</h2>
      <p className="text-gray-300 mb-4">A raw transaction selects inputs, defines outputs, and declares a fee. No cryptographic proof appears yet.</p>
      <h3 className="text-xl font-bold mb-2 mt-6">2.1 Input selection (UTXO lookup)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>Explorer: <code>GET /transactions/boxes/byAddress/unspent</code></li>
        <li>Local node: <code>GET /wallet/boxes/unspent</code></li>
      </ul>
      <h3 className="text-xl font-bold mb-2 mt-6">2.2 Binary bytes for each box</h3>
      <CodeBlock language="typescript">{`curl http://localhost:9053/utxo/byIdBinary/{boxId}`}</CodeBlock>
      <p className="text-gray-300 mb-4">Use the resulting <code>bytes</code> in <code>inputsRaw</code>.</p>
      <h3 className="text-xl font-bold mb-2 mt-6">2.3 Mempool exclusion</h3>
      <CodeBlock language="typescript">{`GET /transactions/unconfirmed/byErgoTree/{ergoTree}`}</CodeBlock>
      <p className="text-gray-300 mb-2">or download the whole list:</p>
      <CodeBlock language="typescript">{`GET /transactions/unconfirmed`}</CodeBlock>
      <h3 className="text-xl font-bold mb-2 mt-6">2.4 Batch withdrawals</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-4">
        <li>Collect pending payouts.</li>
        <li>Create one output per user.</li>
        <li>Send the remainder to the change address.</li>
      </ol>
      <h3 className="text-xl font-bold mb-2 mt-6">2.5 Fee rule</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-[400px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Context</th>
              <th className="py-2 px-3 font-bold">Suggested fee</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">Standard wallet</td><td className="py-2 px-3 font-semibold">0.001 ERG per box</td></tr>
            <tr><td className="py-2 px-3">Many tiny inputs</td><td className="py-2 px-3">raise above the guideline</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">3. Signature</h2>
      <h3 className="text-xl font-bold mb-2 mt-6">3.1 One‑call node workflow</h3>
      <CodeBlock language="typescript">{`POST /wallet/payment/send`}</CodeBlock>
      <p className="text-gray-300 mb-2">Parameters</p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-[400px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Field</th>
              <th className="py-2 px-3 font-bold">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">requests</td><td className="py-2 px-3">target outputs</td></tr>
            <tr><td className="py-2 px-3">fee</td><td className="py-2 px-3">optional manual fee</td></tr>
            <tr><td className="py-2 px-3">inputsRaw</td><td className="py-2 px-3">optional manual input list</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-300 mb-4">The node picks inputs, signs, and broadcasts.</p>
      <h3 className="text-xl font-bold mb-2 mt-6">3.2 Offline workflow</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-4">
        <li>Build the unsigned JSON with a library.</li>
        <li>Copy the file to an air‑gapped host.</li>
        <li>Sign with the master or account key.</li>
        <li>Bring the signed JSON back.</li>
        <li>Broadcast through any node or explorer.</li>
      </ol>

      <h2 className="text-2xl font-bold mb-4 mt-8">4. Broadcast & Confirmation Tracking</h2>
      <h3 className="text-xl font-bold mb-2 mt-6">4.1 Broadcast</h3>
      <p className="text-gray-300 mb-2">If you're using <b>Java (ergo‑appkit)</b>, serialize the signed transaction like this:</p>
      <CodeBlock language="typescript">{`Json json = JsonCodecsWrapper.ergoLikeTransactionEncoder().apply(tx);
System.out.println(json.toString());`}</CodeBlock>
      <p className="text-gray-300 mb-2"><b>Public explorer</b></p>
      <CodeBlock language="typescript">{`curl -X POST https://api.ergoplatform.com/api/v0/transactions/send \
     -H "Content-Type: application/json" \
     -d '{ ...signedTxJson... }'`}</CodeBlock>
      <p className="text-gray-300 mb-2"><b>Local node</b></p>
      <CodeBlock language="typescript">{`curl -X POST http://localhost:9053/transactions \
     -H "Content-Type: application/json" \
     -d '{ ... }'`}</CodeBlock>
      <h3 className="text-xl font-bold mb-2 mt-6">4.2 Monitor</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>Explorer: <code>GET /transactions/{'{txId}'}</code> → <code>numConfirmations</code></li>
        <li>Node: <code>GET /transactions/unconfirmed/{'{txId}'}</code> returns 404 after confirmation</li>
      </ul>
      <p className="text-gray-300 mb-4">A deposit becomes safe after <b>10 blocks (~20 min)</b>.</p>

      <h2 className="text-2xl font-bold mb-4 mt-8">5. Troubleshooting</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Error</th>
              <th className="py-2 px-3 font-bold">Cause</th>
              <th className="py-2 px-3 font-bold">Fix</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">Server was not able to produce a timely response …</td><td className="py-2 px-3">Wallet needs hundreds of inputs</td><td className="py-2 px-3">Set <code>profile="exchange"</code>, bump <code>maxInputs</code> to 300, and sweep dust</td></tr>
            <tr><td className="py-2 px-3">MaxInputsExceededError(…100)</td><td className="py-2 px-3"><code>maxInputs</code> at default 100</td><td className="py-2 px-3">Raise to 300 and restart</td></tr>
            <tr><td className="py-2 px-3">Estimated execution cost … exceeds the limit</td><td className="py-2 px-3">Too many tiny inputs</td><td className="py-2 px-3">Split the payout or sweep dust</td></tr>
            <tr><td className="py-2 px-3">invalid length XXX of Hex data</td><td className="py-2 px-3">Malformed <code>inputsRaw</code></td><td className="py-2 px-3">Provide even‑length raw hex</td></tr>
            <tr><td className="py-2 px-3">NotEnoughErgsError</td><td className="py-2 px-3"><code>value + fee</code> exceeds inputs</td><td className="py-2 px-3">Add inputs or reduce outputs</td></tr>
            <tr><td className="py-2 px-3">Broadcast ok but no confirmation</td><td className="py-2 px-3">Fee too low or node unsynced</td><td className="py-2 px-3">Check <code>/info</code>, raise fee, rebroadcast</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">6. FAQ</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Question</th>
              <th className="py-2 px-3 font-bold">Answer</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">value vs assets</td><td className="py-2 px-3"><code>value</code> counts ERG. <code>assets</code> holds <code>{'{tokenId, amount}'}</code> pairs.</td></tr>
            <tr><td className="py-2 px-3">creationHeight vs inclusionHeight</td><td className="py-2 px-3"><code>creationHeight</code> comes from the sender. <code>inclusionHeight</code> marks the mined block.</td></tr>
            <tr><td className="py-2 px-3">First confirmation block?</td><td className="py-2 px-3">Call <code>/blocks/{'{blockId}'}/header</code> and read <code>height</code>.</td></tr>
            <tr><td className="py-2 px-3">Balance endpoint that sees mempool?</td><td className="py-2 px-3"><code>/wallet/balances/withUnconfirmed</code></td></tr>
            <tr><td className="py-2 px-3">Minimum fee?</td><td className="py-2 px-3">0.001 ERG per box</td></tr>
            <tr><td className="py-2 px-3">Safe confirmations?</td><td className="py-2 px-3">10 blocks</td></tr>
            <tr><td className="py-2 px-3">boxId formula?</td><td className="py-2 px-3">SHA‑256 of serialized box bytes</td></tr>
            <tr><td className="py-2 px-3">Withdraw to non‑P2PK?</td><td className="py-2 px-3">Avoid in production</td></tr>
            <tr><td className="py-2 px-3">Box expiry?</td><td className="py-2 px-3">Yes, after four years. See <a href="rent.md" className="text-cyan-400 hover:underline">rent.md</a>.</td></tr>
            <tr><td className="py-2 px-3">Extra ports?</td><td className="py-2 px-3">None. Wallet shares 9053.</td></tr>
            <tr><td className="py-2 px-3">Whitelist my node IP?</td><td className="py-2 px-3">Not required</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-300 mb-8">
        Return to the <Link href="/Docs/developers/infrastructure/integration" className="text-cyan-400 hover:underline">Node & Wallet Configuration</Link> page and confirm the infrastructure settings.
      </p>
    </>
  );
} 