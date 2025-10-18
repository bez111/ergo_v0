"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function DustCollectionPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Dust Collection
      </h1>
      <Link
        href="/docs/developers/infrastructure/integration"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        Back to Integration Guide
      </Link>
      <p className="text-gray-300 mb-4">
        A <b>dust set</b> is a large group of ERG outputs worth tiny amounts. A node signs a transaction by loading every input box from disk. When the wallet owns thousands of dust boxes the process slows down. The node may hit limits or time out. Exchange and mining‑pool wallets reach that state first.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Automatic Collection in the Node</h2>
      <p className="text-gray-300 mb-4">
        Turn the wallet into “self‑cleaning” mode before dust appears. The node merges dust during every withdrawal when the wallet owns enough surplus inputs.
      </p>
      <p className="text-gray-300 mb-4">
        Add the block below to your <b>ergo.conf</b>. Full syntax is in <a href="conf-wallet.md" className="text-cyan-400 hover:underline">conf‑wallet.md</a>.
      </p>
      <CodeBlock language="typescript">{`ergo {
  wallet {
    # larger Bloom filters and caches
    profile        = "exchange"       

    # hard cap per transaction (default 50)
    maxInputs      = 300

    # extra sweep when withdrawal needs <100 inputs             
    optimalInputs  = 100

    # ignore deposits ≤ 0.001 ERG              
    dustLimit      = 1000000

    # burn every token that is not on this list
    tokensWhitelist = [         
      
      # SigUSD      
      "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
      # SigRSV 
      "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0"  
    ]
  }
}`}</CodeBlock>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Key</th>
              <th className="py-2 px-3 font-bold">Value / Unit</th>
              <th className="py-2 px-3 font-bold">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">profile</td><td className="py-2 px-3">"exchange"</td><td className="py-2 px-3">Bloom filters and caches suit high‑load wallets.</td></tr>
            <tr><td className="py-2 px-3">maxInputs</td><td className="py-2 px-3">300</td><td className="py-2 px-3">Raises the hard cap for inputs in one transaction.</td></tr>
            <tr><td className="py-2 px-3">optimalInputs</td><td className="py-2 px-3">100</td><td className="py-2 px-3">A sweep runs whenever a withdrawal uses fewer than this number.</td></tr>
            <tr><td className="py-2 px-3">dustLimit</td><td className="py-2 px-3">1000000</td><td className="py-2 px-3">The wallet ignores payments at or below 0.001 ERG.</td></tr>
            <tr><td className="py-2 px-3">tokensWhitelist</td><td className="py-2 px-3">list of IDs</td><td className="py-2 px-3">The wallet keeps the listed tokens and burns every other asset.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-300 mb-4">
        Restart the node after saving the file. The wallet merges dust in the background from the first block it scans.
      </p>
      <h3 className="text-xl font-bold mb-2 mt-6">Fast clean‑up for an existing dusty wallet</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-4">
        <li>Send <b>0.001 ERG</b> from the wallet to its own change address.</li>
        <li>Wait <b>60 seconds</b> for confirmation.</li>
        <li>Repeat until the UTXO count drops below <b>500</b>.</li>
      </ol>
      <p className="text-gray-300 mb-4">Each self‑payment pulls about <code>optimalInputs</code> dust boxes into one output, so the backlog shrinks quickly.</p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Manual Collection (fallback)</h2>
      <p className="text-gray-300 mb-4">
        Choose this path when every automatic sweep fails because the node exhausts limits before it can pay the fee.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Step</th>
              <th className="py-2 px-3 font-bold">Call</th>
              <th className="py-2 px-3 font-bold">Result / Note</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">1</td><td className="py-2 px-3"><code>GET /wallet/boxes/unspent?limit=100</code></td><td className="py-2 px-3">Record every <code>boxId</code>.</td></tr>
            <tr><td className="py-2 px-3">2</td><td className="py-2 px-3"><code>GET /utxo/byIdBinary/{'{boxId}'}</code> for each id</td><td className="py-2 px-3">Record the <code>bytes</code> field. Plain even‑length hex only.</td></tr>
            <tr><td className="py-2 px-3">3</td><td className="py-2 px-3">Sum every <code>value</code></td><td className="py-2 px-3">Keep at least 1 000 000 nanoERG for the fee.</td></tr>
            <tr><td className="py-2 px-3">4</td><td className="py-2 px-3">Assemble JSON</td><td className="py-2 px-3">See the example below.</td></tr>
            <tr><td className="py-2 px-3">5</td><td className="py-2 px-3"><code>POST /wallet/transaction/send</code> (api_key header)</td><td className="py-2 px-3">The node broadcasts the sweep.</td></tr>
            <tr><td className="py-2 px-3">6</td><td className="py-2 px-3">Repeat with fresh inputs</td><td className="py-2 px-3">Stop when UTXO count is small.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-300 mb-4">
        Query <code>minConfirmations</code>, <code>minInclusionHeight</code>, or both if you want mature inputs only. Example:
      </p>
      <CodeBlock language="typescript">{`curl "http://127.0.0.1:9053/wallet/boxes/unspent?minConfirmations=10&limit=100" \
  -H "accept: application/json" -H "api_key: hello"`}</CodeBlock>
      <p className="text-gray-300 mb-2">Example request body:</p>
      <CodeBlock language="typescript">{`{
  "inputsRaw": [
    "8e7a…00",
    "d1f5…42"
  ],
  "fee": 1000000,
  "requests": [
    {
      "address": "9hChangeAddressHere",
      "value": 25123456789
    }
  ]
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">Make sure the fee plus the output value equals the sum of your inputs.</p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Troubleshooting</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[600px] w-full text-sm text-left border border-neutral-700 rounded-xl">
          <thead>
            <tr className="bg-neutral-900 text-cyan-300">
              <th className="py-2 px-3 font-bold">Symptom or Log Entry</th>
              <th className="py-2 px-3 font-bold">Probable Cause</th>
              <th className="py-2 px-3 font-bold">Fix</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr><td className="py-2 px-3">MaxInputsExceededError(…100)</td><td className="py-2 px-3"><code>maxInputs</code> still at default</td><td className="py-2 px-3">Set <code>maxInputs = 300</code>, restart the node.</td></tr>
            <tr><td className="py-2 px-3">Server was not able to produce a timely response …</td><td className="py-2 px-3">Too many inputs or node overload</td><td className="py-2 px-3">Sweep dust; verify <code>profile = "exchange"</code>; lower <code>optimalInputs</code> if needed.</td></tr>
            <tr><td className="py-2 px-3">Sweep transaction shows few inputs</td><td className="py-2 px-3">Node did not load the new config</td><td className="py-2 px-3">Check startup log for config path; confirm <code>wallet {'{ … }'}</code> sits inside <code>ergo {'{ … }'}</code>.</td></tr>
            <tr><td className="py-2 px-3">invalid length XXX of Hex data</td><td className="py-2 px-3">An <code>inputsRaw</code> entry has odd length</td><td className="py-2 px-3">Remove wrappers and whitespace; every hex string must have even length.</td></tr>
            <tr><td className="py-2 px-3">NotEnoughErgsError</td><td className="py-2 px-3">Output + fee exceeds input total</td><td className="py-2 px-3">Lower the output amount, add inputs, or choose higher‑value boxes.</td></tr>
            <tr><td className="py-2 px-3">Wallet fills again right after clean‑up</td><td className="py-2 px-3">Constant tiny deposits</td><td className="py-2 px-3">Keep the self‑payment cron job running or raise the minimum deposit limit.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">Native Assets (tokens)</h2>
      <p className="text-gray-300 mb-4">
        Users sometimes send random tokens to exchange addresses. A future node version will offer <b>auto‑burn</b> (see <a href="https://github.com/ergoplatform/ergo/issues/1604" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Issue #1604</a>). Until that release, destroy unwanted tokens with one step:
      </p>
      <p className="text-gray-300 mb-4">
        Send them to the burn address <code>4MQyMKvMbnCJG3aJ</code> in a zero‑ERG transaction.
      </p>
      <p className="text-gray-300 mb-4">
        Community lists such as the <a href="https://github.com/Luivatra/ergotipper-tokens" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ergotipper token list</a> help you recognise unknown assets.
      </p>
    </>
  );
} 