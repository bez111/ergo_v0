"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Terminal, ExternalLink, CheckCircle, AlertTriangle, ChevronRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/ui"

export default function RpcApiReferencePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          RPC API Reference
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Detailed documentation for interacting with the Ergo Node's RPC (Remote Procedure Call) API. This API allows you to programmatically control your Ergo node, query blockchain data, and manage wallets.
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Terminal className="w-6 h-6 text-orange-400" /> API Overview
        </h2>
        <p className="text-gray-300 mb-6">
          The Ergo Node RPC API is a RESTful interface that uses JSON for requests and responses. It's typically accessed on port 9053 of your running Ergo node. Authentication via an API key is recommended for security.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-orange-400">Base URL:</h3>
          <CodeBlock language="typescript">{""http://localhost:9053/" />
          <h3 className="font-semibold mt-6 mb-3 text-orange-400">Authentication:</h3>
          <p className="text-gray-300 text-sm mb-3">
            For secure access, configure an API key in your <code>ergo.conf</code> file and include it in the <code>api_key</code> header for all requests.
          </p>
          <CodeBlock language="typescript" code='ergo.restApi.apiKeys = ["YOUR_API_KEY"]' />
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> **Security Warning:** Never expose your node's RPC API to the public internet without proper security measures (e.g., VPN, firewall). API keys alone are not sufficient for public exposure.
          </div>
        </div>
      </section>

      {/* Key Endpoints Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-cyan-400" /> Key API Endpoints
        </h2>
        <p className="text-gray-300 mb-6">
          Here's a selection of commonly used RPC endpoints. For a complete list, refer to the official Swagger UI or the node's source code.
        </p>
        <div className="space-y-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-cyan-400">Node Information:</h3>
            <CodeBlock language="typescript">{""GET /info" />
            <p className="text-gray-400 text-sm mt-2">
              Returns general information about the node, including network height, version, and state.
            </p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-cyan-400">Wallet Management:</h3>
            <CodeBlock language="typescript">{`GET /wallet/balances
GET /wallet/boxes/unspent
POST /wallet/transaction/send`}</CodeBlock>
            <p className="text-gray-400 text-sm mt-2">
              Endpoints for checking wallet balances, listing unspent boxes, and sending signed transactions.
            </p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-cyan-400">Transaction & Block Data:</h3>
            <CodeBlock language="typescript">{`GET /blockchain/headers/last
GET /blockchain/block/byid/{id}
GET /transactions/unconfirmed`}</CodeBlock>
            <p className="text-gray-400 text-sm mt-2">
              Retrieve blockchain headers, specific blocks by ID, and unconfirmed transactions in the mempool.
            </p>
          </div>
        </div>
      </section>

      {/* Example Usage Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-purple-400" /> Example: Fetching Node Info (JavaScript)
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <pre className="bg-black text-purple-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">{`async function getNodeInfo() {
  const NODE_URL = 'http://localhost:9053';
  const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

  try {
    const response = await fetch(NODE_URL + '/info', {
      headers: {
        'api_key': API_KEY
      }
    });
    const data = await response.json();
    console.log('Node Info:', data);
  } catch (error) {
    console.error('Error fetching node info:', error);
  }
}

getNodeInfo();
`}</pre>
        </div>
      </section>

      {/* Further Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <BookOpen className="w-6 h-6 text-green-400" /> Further Resources
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <Link
                href="https://api.ergoplatform.com/api/v1/docs"
                target="_blank"
                className="text-orange-400 hover:underline inline-flex items-center"
              >
                Official Ergo Node Swagger UI <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link
                href="/build/docs/setup"
                className="inline-flex items-center text-orange-400 hover:underline"
              >
                Setup Local Environment Guide <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <p className="text-gray-400 text-xs mt-1">
                Learn how to set up your own Ergo node for local development.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Build with Ergo's API</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Integrate with SDKs</h4>
            <p className="text-gray-400 text-sm mb-3">
              Learn how Ergo SDKs simplify interaction with the RPC API.
            </p>
            <Link
              href="/build/docs/sdks"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Ergo SDKs Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}
