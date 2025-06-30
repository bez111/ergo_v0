"use client"

import { useRef } from "react"
import { Code, Send, PlusCircle, Wallet, FileText, ChevronRight, Clipboard, CheckCircle, Database, Terminal, Zap, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Transactions",
    anchor: "transactions",
    icon: Send,
    recipes: [
      {
        title: "Send ERG (Fleet SDK)",
        description: "Send ERG from one address to another using Fleet SDK (TypeScript)",
        code: `const unsignedTx = new TransactionBuilder()
  .from(inputBoxes)
  .to({ value: 10000000n, ergoTree: recipientErgoTree })
  .sendChangeTo(senderAddress)
  .payFee(1000000n)
  .build();`,
        language: "typescript",
        doc: "https://fleet-sdk.github.io/docs/"
      },
      {
        title: "Send ERG (curl, Node REST API)",
        description: "Send ERG using Ergo node REST API (curl)",
        code: `curl -X POST https://api.ergoplatform.com/transactions/send \
  -H "Content-Type: application/json" \
  -d '{ ... }'`,
        language: "bash",
        doc: "https://docs.ergoplatform.com/dev/node-api/"
      },
    ]
  },
  {
    name: "Tokens",
    anchor: "tokens",
    icon: PlusCircle,
    recipes: [
      {
        title: "Mint Token (Fleet SDK)",
        description: "Create a new token on Ergo using Fleet SDK (TypeScript)",
        code: `import { TransactionBuilder } from '@fleet-sdk/core';
// ...setup variables
const unsignedTx = new TransactionBuilder()
  .from(inputBoxes)
  .to(outputBox)
  .sendChangeTo(SENDER_ADDRESS)
  .payFee(1000000n)
  .build();`,
        language: "typescript",
        doc: "https://fleet-sdk.github.io/docs/"
      },
      {
        title: "Transfer Token (Fleet SDK)",
        description: "Send a token to another address (TypeScript)",
        code: `const unsignedTx = new TransactionBuilder()
  .from(inputBoxes)
  .to({ value: 1000000n, assets: [{ tokenId, amount }], ergoTree: recipientErgoTree })
  .sendChangeTo(senderAddress)
  .payFee(1000000n)
  .build();`,
        language: "typescript",
        doc: "https://fleet-sdk.github.io/docs/"
      },
    ]
  },
  {
    name: "Smart Contracts",
    anchor: "smart-contracts",
    icon: FileText,
    recipes: [
      {
        title: "Compile ErgoScript (Fleet SDK)",
        description: "Compile ErgoScript to ErgoTree (TypeScript)",
        code: `import { compile } from '@fleet-sdk/compiler';
const ergoTree = compile('sigmaProp(HEIGHT > 1000)');`,
        language: "typescript",
        doc: "https://fleet-sdk.github.io/docs/"
      },
      {
        title: "Deploy Smart Contract (Fleet SDK)",
        description: "Use compiled ErgoTree in your outputBox",
        code: `const outputBox = {
  value: 1000000n,
  ergoTree: compiledErgoTree,
  assets: [],
  additionalRegisters: {}
};`,
        language: "typescript",
        doc: "https://fleet-sdk.github.io/docs/"
      },
    ]
  },
  {
    name: "Node API",
    anchor: "node-api",
    icon: Database,
    recipes: [
      {
        title: "Get Address Balance (API)",
        description: "Fetch ERG and token balance of an address via Ergo node API",
        code: `fetch('https://api.ergoplatform.com/api/v1/addresses/{address}/balance/total')
  .then(res => res.json())
  .then(data => console.log(data));`,
        language: "javascript",
        doc: "https://docs.ergoplatform.com/dev/node-api/"
      },
      {
        title: "Get Block Info (API)",
        description: "Get block information by blockId (curl)",
        code: `curl https://api.ergoplatform.com/api/v1/blocks/{blockId}`,
        language: "bash",
        doc: "https://docs.ergoplatform.com/dev/node-api/"
      },
      {
        title: "Check Transaction Status (API)",
        description: "Check status of a transaction by id (curl)",
        code: `curl https://api.ergoplatform.com/api/v1/transactions/{txId}/status` ,
        language: "bash",
        doc: "https://docs.ergoplatform.com/dev/node-api/"
      },
    ]
  },
  {
    name: "Utilities & Testing",
    anchor: "utilities",
    icon: Zap,
    recipes: [
      {
        title: "Generate Address (Fleet SDK)",
        description: "Generate an Ergo address from mnemonic (TypeScript)",
        code: `import { ErgoAddress } from '@fleet-sdk/core';
const address = ErgoAddress.fromMnemonic('your mnemonic');`,
        language: "typescript",
        doc: "https://fleet-sdk.github.io/docs/"
      },
      {
        title: "Test Transaction (Jest + Fleet)",
        description: "Example Jest test for transaction building",
        code: `test('should build tx', () => {
  // ... test code
});`,
        language: "typescript",
        doc: "https://jestjs.io/"
      },
    ]
  },
]

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}

export default function CookbookPage() {
  return (
    <main>
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-cyan-400 prose-a:underline">
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Ergo Cookbook
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Practical code recipes for common tasks on Ergo. Copy, adapt, and build faster!
          </p>
          <nav className="flex flex-wrap gap-4 mb-8">
            {categories.map(cat => (
              <a key={cat.anchor} href={`#${cat.anchor}`} className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg text-sm font-medium text-white hover:bg-orange-500 transition-colors">
                <cat.icon className="w-4 h-4 text-orange-400" /> {cat.name}
              </a>
            ))}
          </nav>
        </div>
        {categories.map(cat => (
          <section key={cat.anchor} id={cat.anchor} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <cat.icon className="w-6 h-6 text-orange-400" /> {cat.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cat.recipes.map((r, idx) => (
                <div key={r.title} className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col relative">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="w-5 h-5 text-orange-400" />
                    <h3 className="text-xl font-bold text-white">{r.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{r.description}</p>
                  <button
                    className="absolute top-4 right-4 bg-neutral-800 hover:bg-orange-500 text-white rounded p-1"
                    title="Copy code"
                    onClick={() => copyToClipboard(r.code)}
                  >
                    <Clipboard className="w-4 h-4" />
                  </button>
                  <pre className="bg-black text-orange-200 p-3 rounded-lg overflow-x-auto font-mono text-sm mb-2">
                    <code>{r.code}</code>
                  </pre>
                  <div className="mt-auto">
                    <a href={r.doc} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:underline text-sm">
                      Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        <div className="mt-12 text-center">
          <p className="text-gray-400">Want to add your own recipe? <Link href="https://github.com/ergoplatform/ergo-docs" className="text-orange-400 hover:underline">Edit this page on GitHub</Link></p>
        </div>
      </div>
    </main>
  )
} 