import Link from "next/link"
import { BookOpen, Server, Terminal, Info, ExternalLink } from "lucide-react"

export default function SdksPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4">
          Ergo SDKs & Libraries
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Explore SDKs and libraries for Rust, Scala, JS, Python and more. Build dApps and tools for Ergo in your favorite language.
        </p>
      </div>

      {/* SDKs Table Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <BookOpen className="w-6 h-6 text-cyan-400" /> Available SDKs
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-300 border border-cyan-500/20 rounded-xl overflow-hidden">
            <thead className="bg-cyan-900/40 text-cyan-300">
              <tr>
                <th className="px-4 py-2 font-semibold">SDK Name</th>
                <th className="px-4 py-2 font-semibold">Language(s)</th>
                <th className="px-4 py-2 font-semibold">Description</th>
                <th className="px-4 py-2 font-semibold">Primary Use Case</th>
                <th className="px-4 py-2 font-semibold">Links</th>
              </tr>
            </thead>
            <tbody className="bg-neutral-900/60 divide-y divide-cyan-800/20">
              <tr>
                <td className="px-4 py-3">AppKit</td>
                <td className="px-4 py-3">Java, Kotlin, Scala</td>
                <td className="px-4 py-3">High-level SDK for JVM, providing convenient abstractions for working with transactions, boxes, contracts, and wallets.</td>
                <td className="px-4 py-3">Backend services, wallets, complex dApps, JVM integrations.</td>
                <td className="px-4 py-3 flex flex-col gap-1">
                  <Link href="https://docs.ergoplatform.com/dev/quick-start/" target="_blank" className="text-cyan-400 hover:underline flex items-center gap-1">Docs <ExternalLink className="w-4 h-4" /></Link>
                  <Link href="https://github.com/ergoplatform/ergo-appkit" target="_blank" className="text-cyan-400 hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-4 h-4" /></Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fleet</td>
                <td className="px-4 py-3">TypeScript, JavaScript</td>
                <td className="px-4 py-3">Lightweight and modular SDK for web development, focused on building dApp frontends and interacting with browser wallets.</td>
                <td className="px-4 py-3">Web apps, browser dApps, React/Vue/Angular integration.</td>
                <td className="px-4 py-3 flex flex-col gap-1">
                  <Link href="https://docs.ergoplatform.com/dev/fleet/" target="_blank" className="text-cyan-400 hover:underline flex items-center gap-1">Docs <ExternalLink className="w-4 h-4" /></Link>
                  <Link href="https://github.com/ergoplatform/fleet" target="_blank" className="text-cyan-400 hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-4 h-4" /></Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Sigma-Rust</td>
                <td className="px-4 py-3">Rust</td>
                <td className="px-4 py-3">Low-level library implementing Ergo's cryptographic primitives, ErgoTree, and transaction logic.</td>
                <td className="px-4 py-3">New SDKs, high-performance services, security audits, low-level work.</td>
                <td className="px-4 py-3 flex flex-col gap-1">
                  <Link href="https://docs.ergoplatform.com/dev/sigma-rust/" target="_blank" className="text-cyan-400 hover:underline flex items-center gap-1">Docs <ExternalLink className="w-4 h-4" /></Link>
                  <Link href="https://github.com/ergoplatform/sigma-rust" target="_blank" className="text-cyan-400 hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-4 h-4" /></Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Ergo-Python</td>
                <td className="px-4 py-3">Python</td>
                <td className="px-4 py-3">Python SDK for working with transactions, boxes, and ErgoScript.</td>
                <td className="px-4 py-3">Automation, analytics, simple dApps.</td>
                <td className="px-4 py-3 flex flex-col gap-1">
                  <Link href="https://github.com/anon-real/ergo-python" target="_blank" className="text-cyan-400 hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-4 h-4" /></Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
          <Info className="w-4 h-4" />
          <span>AppKit and Fleet are the most actively maintained. Always check the latest docs and versions in their repositories.</span>
        </div>
      </section>

      {/* Core Functions Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Server className="w-6 h-6 text-orange-400" /> Core Functions of Ergo SDKs
        </h2>
        <div className="bg-gradient-to-r from-cyan-500/10 to-orange-500/10 border border-cyan-500/20 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Creating and building transactions: form input/output boxes, add tokens, set fees.</li>
            <li>Signing transactions: use private keys or integrate with wallets.</li>
            <li>Sending transactions: submit signed transactions to the network.</li>
            <li>Interacting with boxes: retrieve box info, contents, and registers.</li>
            <li>Working with ErgoScript: compile scripts, create addresses from scripts.</li>
            <li>Working with tokens: mint, send, receive custom tokens.</li>
          </ul>
        </div>
      </section>

      {/* Example Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Terminal className="w-6 h-6 text-cyan-400" /> Example: Sending ERG with Fleet SDK
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <pre className="bg-black text-cyan-300 p-3 rounded-lg overflow-x-auto mb-2 font-mono text-sm">{`
import { ErgoAddress, TransactionBuilder } from '@fleet-sdk/core';

// Assuming you have access to your wallet's UTXOs
const senderAddress = '9f...'; // Your address
const recipientAddress = '9g...'; // Recipient's address
const amountToSend = 1000000000n; // 1 ERG (in nano-ERG)
const fee = 1000000n; // 0.001 ERG

async function sendErg(inputBox) {
  const unsignedTx = new TransactionBuilder()
    .from(inputBox)
    .to({
      value: amountToSend,
      ergoTree: ErgoAddress.fromBase58(recipientAddress).ergoTree,
    })
    .sendChangeTo(senderAddress)
    .payFee(fee)
    .build();

  // In a real dApp: unsignedTx will be sent to the user's wallet for signing
  // (e.g., via Yoroi dApp Connector or Nautilus)
  // const signedTx = await wallet.signTx(unsignedTx);
  // await wallet.submitTx(signedTx);

  console.log('Unsigned Transaction:', unsignedTx);
  // For testing, you can use the node's RPC for signing (not for production)
}

// Example call (inputBox must be obtained from your node/wallet)
// sendErg(yourUnspentBox);
`}</pre>
          <span className="text-gray-400 text-xs">This example shows how to build and prepare a transaction using Fleet SDK (JavaScript/TypeScript).</span>
        </div>
      </section>
    </>
  )
}
