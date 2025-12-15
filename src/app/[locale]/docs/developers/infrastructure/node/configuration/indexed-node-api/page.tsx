"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import { ChevronRight, ExternalLink, Database, Code, AlertTriangle } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function IndexedNodeAPIPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Indexed Node API
      </h1>

      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node/configuration"
          className="inline-flex items-center px-5 py-2 bg-blue-500 rounded-lg font-semibold text-black hover:bg-blue-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
        </Link>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" /> Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            An indexed Ergo node provides an enhanced set of API endpoints (beyond the standard Node API) for querying blockchain data efficiently. These endpoints allow retrieving information about transactions, boxes, tokens, and balances based on various criteria like address, ErgoTree, or global index.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            This documentation guides you through the usage of these indexed API methods, including example requests and responses.
          </p>
        </section>

        {/* Public Instance */}
        <section className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" /> Public Instance
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            A public instance of an indexed node's API explorer (Swagger UI) is available:
          </p>
          <a 
            href="http://128.253.41.49:9053/swagger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Open Swagger UI
          </a>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            The base path for all indexed API endpoints described below is <code className="bg-gray-700 px-2 py-1 rounded text-green-400">/blockchain</code>.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-400" /> Disclaimer
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Please note that this is a public instance intended for exploration and testing. For production use or heavy querying, you should host your own instance of an Ergo node and enable indexing by setting <code className="bg-gray-700 px-2 py-1 rounded text-green-400">ergo.node.extraIndex = true</code> in the node's configuration file.
          </p>
        </section>

        {/* Methods */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" /> Methods
          </h2>
          
          {/* indexedHeight */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/indexedHeight</h3>
            <p className="text-gray-300 mb-4">
              Retrieves the current block height up to which the node's indexer has processed the blockchain.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /indexedHeight`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "indexedHeight": 123456
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* transaction byId */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/transaction/byId/{'{txId}'}</h3>
            <p className="text-gray-300 mb-4">
              Retrieves details of a specific transaction by its ID.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /transaction/byId/123abc`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "transactionId": "123abc",
  "blockHeight": 1234,
  "inputs": [
    {
      "boxId": "abc123",
      "value": 1000000
    }
  ],
  "outputs": [
    {
      "boxId": "def456",
      "value": 500000
    },
    {
      "boxId": "ghi789",
      "value": 500000
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* transaction byIndex */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/transaction/byIndex/{'{txIndex}'}</h3>
            <p className="text-gray-300 mb-4">
              Retrieves details of a specific transaction by its global index number (sequential order in the blockchain).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /transaction/byIndex/1234`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "transactionId": "123abc",
  "blockHeight": 1234,
  "inputs": [
    {
      "boxId": "abc123",
      "value": 1000000
    }
  ],
  "outputs": [
    {
      "boxId": "def456",
      "value": 500000
    },
    {
      "boxId": "ghi789",
      "value": 500000
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* transaction byAddress */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">POST /blockchain/transaction/byAddress</h3>
            <p className="text-gray-300 mb-4">
              Retrieves a list of transactions associated with a given address (either as input or output). Requires the address in the request body.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`POST /transaction/byAddress
Content-Type: application/json

{
  "address": "your_address"
}`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "transactions": [
    {
      "transactionId": "123abc",
      "blockHeight": 1234,
      "inputs": [
        {
          "boxId": "abc123",
          "value": 1000000
        }
      ],
      "outputs": [
        {
          "boxId": "def456",
          "value": 500000
        },
        {
          "boxId": "ghi789",
          "value": 500000
        }
      ]
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* transaction range */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/transaction/range</h3>
            <p className="text-gray-300 mb-4">
              Retrieves a list of transaction IDs within a specified global index range (start and end query parameters).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /transaction/range?start=0&end=100`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "transactionIds": ["123abc", "456def", "789ghi", ...]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* box byId */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/box/byId/{'{boxId}'}</h3>
            <p className="text-gray-300 mb-4">
              Retrieves details of a specific box by its ID.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /box/byId/abc123`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "boxId": "abc123",
  "value": 1000000,
  "ergoTree": "your_ergo_tree",
  "address": "your_address"
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* box byIndex */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/box/byIndex/{'{boxIndex}'}</h3>
            <p className="text-gray-300 mb-4">
              Retrieves details of a specific box by its global index number.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /box/byIndex/1234`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "boxId": "abc123",
  "value": 1000000,
  "ergoTree": "your_ergo_tree",
  "address": "your_address"
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* box byAddress */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">POST /blockchain/box/byAddress</h3>
            <p className="text-gray-300 mb-4">
              Retrieves a list of boxes associated with a given address. Requires the address in the request body.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`POST /box/byAddress
Content-Type: application/json

{
  "address": "your_address"
}`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "boxes": [
    {
      "boxId": "abc123",
      "value": 1000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    },
    {
      "boxId": "def456",
      "value": 2000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* box unspent byAddress */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">POST /blockchain/box/unspent/byAddress</h3>
            <p className="text-gray-300 mb-4">
              Retrieves a list of unspent boxes associated with a given address. Requires the address in the request body.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`POST /box/unspent/byAddress
Content-Type: application/json

{
  "address": "your_address"
}`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "boxes": [
    {
      "boxId": "abc123",
      "value": 1000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    },
    {
      "boxId": "def456",
      "value": 2000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* box range */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/box/range</h3>
            <p className="text-gray-300 mb-4">
              Retrieves a list of box IDs within a specified global index range (start and end query parameters).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /box/range?start=0&end=100`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "boxIds": ["abc123", "def456", "ghi789", ...]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* box byErgoTree */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">POST /blockchain/box/byErgoTree</h3>
            <p className="text-gray-300 mb-4">
              Retrieves a list of boxes protected by a specific ErgoTree script (provided in hex format in the request body).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`POST /box/byErgoTree
Content-Type: application/json

{
  "ergoTree": "your_ergo_tree"
}`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "boxes": [
    {
      "boxId": "abc123",
      "value": 1000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    },
    {
      "boxId": "def456",
      "value": 2000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* box unspent byErgoTree */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">POST /blockchain/box/unspent/byErgoTree</h3>
            <p className="text-gray-300 mb-4">
              Retrieves a list of unspent boxes protected by a specific ErgoTree script (provided in hex format in the request body).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`POST /box/unspent/byErgoTree
Content-Type: application/json

{
  "ergoTree": "your_ergo_tree"
}`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "boxes": [
    {
      "boxId": "abc123",
      "value": 1000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    },
    {
      "boxId": "def456",
      "value": 2000000,
      "ergoTree": "your_ergo_tree",
      "address": "your_address"
    }
  ]
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* token byId */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">GET /blockchain/token/byId/{'{tokenId}'}</h3>
            <p className="text-gray-300 mb-4">
              Retrieves information about a specific token (name, description, decimals, etc.) by its ID. Note that the token ID is the ID of the first input box in the token issuance transaction.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`GET /token/byId/123abc`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "tokenId": "123abc",
  "name": "Your Token",
  "description": "Description of your token",
  "totalSupply": 1000000,
  "decimals": 8,
  "issuer": "your_address"
}`}</CodeBlock>
              </div>
            </div>
          </div>

          {/* balance */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">POST /blockchain/balance</h3>
            <p className="text-gray-300 mb-4">
              Retrieves the confirmed and unconfirmed ERG and token balances for a given address (provided in the request body).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Request</h4>
                <CodeBlock language="typescript">{`POST /balance
Content-Type: application/json

{
  "address": "your_address"
}`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-bold text-gray-300 mb-2">Response</h4>
                <CodeBlock language="typescript">{`{
  "confirmedBalance": 1000000,
  "unconfirmedBalance": 500000
}`}</CodeBlock>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" /> Conclusion
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            This documentation covers the indexed API methods provided by an Ergo node with <code className="bg-gray-700 px-2 py-1 rounded text-green-400">extraIndex = true</code>. You can use these endpoints to efficiently query blockchain data and build applications on top of Ergo.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Example Explorer</h3>
            <p className="text-gray-300 mb-4">
              An example explorer utilizing these indexed endpoints can be found here:
            </p>
            <a 
              href="https://github.com/Luivatra/indexed-node-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
            </a>
          </div>
        </section>
      </div>
    </>
  );
} 