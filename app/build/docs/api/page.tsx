import {
    Server,
    Terminal,
    Wallet,
    Link2,
    Info,
    AlertTriangle,
    KeyRound,
    Settings2,
    ChevronRight,
    ExternalLink,
  } from "lucide-react"
  import Link from "next/link"
  
  export default function ApiPage() {
    return (
      <>
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            RPC API (Ergo Node)
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Comprehensive guide to interacting with your Ergo node via RESTful RPC endpoints.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
            <span>Base URL: <span className="font-mono bg-neutral-800 px-2 py-0.5 rounded">http://localhost:9053</span></span>
            <span className="flex items-center gap-1"><KeyRound className="w-4 h-4" />API key for wallet endpoints</span>
            <Link href="http://localhost:9053/swagger" target="_blank" className="inline-flex items-center gap-1 text-orange-400 hover:underline"><Link2 className="w-4 h-4" />Swagger UI</Link>
          </div>
        </div>
  
        {/* Endpoint Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Node Info */}
          <div className="bg-neutral-900/60 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold"><Info className="w-5 h-5" /> Node Info</div>
            <ul className="list-disc list-inside text-gray-300">
              <li><span className="font-mono">/info</span>: General node info</li>
              <li><span className="font-mono">/peers/all</span>: List all peers</li>
              <li><span className="font-mono">/mining/candidate</span>: Block candidate for mining</li>
            </ul>
          </div>
          {/* Blockchain */}
          <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold"><Terminal className="w-5 h-5" /> Blockchain</div>
            <ul className="list-disc list-inside text-gray-300">
              <li><span className="font-mono">/blockchain/height</span>: Current height</li>
              <li><span className="font-mono">/blockchain/headerById/{'{id}'}</span>: Block header by ID</li>
              <li><span className="font-mono">/blockchain/blockById/{'{id}'}</span>: Full block by ID</li>
              <li><span className="font-mono">/blockchain/boxById/{'{id}'}</span>: Box info by ID</li>
              <li><span className="font-mono">/blockchain/transactionById/{'{id}'}</span>: Transaction info by ID</li>
            </ul>
          </div>
          {/* Transactions */}
          <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-green-400 font-bold"><Settings2 className="w-5 h-5" /> Transactions</div>
            <ul className="list-disc list-inside text-gray-300">
              <li><span className="font-mono">/transactions/send</span>: Send signed transaction</li>
              <li><span className="font-mono">/transactions/check</span>: Check transaction validity</li>
              <li><span className="font-mono">/transactions/unconfirmed</span>: Unconfirmed transactions</li>
            </ul>
          </div>
          {/* Wallet */}
          <div className="bg-neutral-900/60 border border-yellow-500/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-yellow-400 font-bold"><Wallet className="w-5 h-5" /> Wallet <span className="ml-2 text-xs bg-yellow-100/10 text-yellow-400 px-2 py-0.5 rounded">API key</span></div>
            <ul className="list-disc list-inside text-gray-300">
              <li><span className="font-mono">/wallet/status</span>: Wallet status</li>
              <li><span className="font-mono">/wallet/init</span>: Initialize wallet</li>
              <li><span className="font-mono">/wallet/restore</span>: Restore from mnemonic</li>
              <li><span className="font-mono">/wallet/unlock</span>: Unlock wallet</li>
              <li><span className="font-mono">/wallet/lock</span>: Lock wallet</li>
              <li><span className="font-mono">/wallet/addresses</span>: Wallet addresses</li>
              <li><span className="font-mono">/wallet/balances</span>: Balances</li>
              <li><span className="font-mono">/wallet/boxes/unspent</span>: Unspent UTXOs</li>
              <li><span className="font-mono">/wallet/transaction/send</span>: Send from wallet</li>
              <li><span className="font-mono">/wallet/transaction/generateAndSend</span>: Generate & send simple tx</li>
            </ul>
          </div>
          {/* Utils */}
          <div className="bg-neutral-900/60 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold"><Link2 className="w-5 h-5" /> Utils</div>
            <ul className="list-disc list-inside text-gray-300">
              <li><span className="font-mono">/utils/address/{'{address}'}</span>: Check address validity</li>
              <li><span className="font-mono">/utils/ergoTreeToAddress</span>: ErgoTree → address</li>
              <li><span className="font-mono">/utils/addressToErgoTree</span>: Address → ErgoTree</li>
              <li><span className="font-mono">/utils/hashBlake2b</span>: Blake2b hash</li>
            </ul>
          </div>
        </div>
  
        {/* Example: Node Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Info className="w-6 h-6" /> Example: Get Node Info</h2>
          <p className="mb-2 text-gray-300">Returns general information about the node's status, including current blockchain height, version, and sync status.</p>
          <div className="bg-neutral-900/80 border border-blue-500/20 rounded-lg p-4 mb-2 overflow-x-auto">
            <pre className="text-orange-200 text-sm"><code>{`curl http://localhost:9053/info`}</code></pre>
          </div>
          <div className="bg-neutral-900/60 border border-blue-500/10 rounded-lg p-4 text-xs font-mono text-gray-200 overflow-x-auto">
            <pre>{`{
    "name": "ergo",
    "appVersion": "5.0.0",
    "fullHeight": 1234567,
    "headersHeight": 1234567,
    "isSynchronized": true,
    "stateRoot": "...",
    "stateType": "utxo",
    "peersCount": 15,
    "unconfirmedCount": 3,
    "difficulty": 1234567890,
    "genesisBlockId": "...",
    "network": "testnet",
    "parameters": {}
  }`}</pre>
          </div>
        </section>
  
        {/* Example: Send Transaction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Settings2 className="w-6 h-6" /> Example: Send Signed Transaction</h2>
          <p className="mb-2 text-gray-300">Submits a fully signed transaction to the network. The transaction must be in JSON format.</p>
          <div className="bg-neutral-900/80 border border-green-500/20 rounded-lg p-4 mb-2 overflow-x-auto">
            <pre className="text-orange-200 text-sm"><code>{`curl -X POST -H "Content-Type: application/json" \
    -d '{
      "id": "...",
      "inputs": [...],
      "dataInputs": [],
      "outputs": [...]
    }' \
    http://localhost:9053/transactions/send`}</code></pre>
          </div>
          <div className="bg-neutral-900/60 border border-green-500/10 rounded-lg p-4 text-xs font-mono text-gray-200 overflow-x-auto">
            <pre>{`"transactionId_of_submitted_transaction"`}</pre>
          </div>
        </section>
  
        {/* Error Handling */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400"><AlertTriangle className="w-5 h-5" /> Error Handling & Status Codes</h2>
          <ul className="list-disc list-inside text-gray-300 mb-2">
            <li>Standard HTTP status codes (200, 400, 401, 500, ...)</li>
            <li>JSON error responses with <span className="font-mono">error</span> and <span className="font-mono">detail</span> fields</li>
          </ul>
          <div className="bg-neutral-900/60 border border-red-500/10 rounded-lg p-4 text-xs font-mono text-gray-200 overflow-x-auto mb-2">
            <pre>{`{
    "error": 400,
    "reason": "Bad Request",
    "detail": "Transaction is invalid: Insufficient funds"
  }`}</pre>
          </div>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <Info className="w-4 h-4" />
            For the most up-to-date API docs, use the <Link href="http://localhost:9053/swagger" target="_blank" className="underline text-orange-400">Swagger UI</Link> of your running node.
          </div>
        </section>
      </>
    )
  }
  