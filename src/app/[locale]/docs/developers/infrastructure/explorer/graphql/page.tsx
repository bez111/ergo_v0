"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import {
  Globe,
  Code,
  Server,
  Package,
  GitBranch,
  Info,
  ChevronRight,
  ExternalLink,
  Zap,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function GraphQLPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          GraphQL API
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Flexible data querying for Ergo Platform. Fetch exactly what you need. 
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure"
            className="inline-flex items-center px-6 py-3 bg-pink-500 rounded-xl font-semibold text-black hover:bg-pink-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Infrastructure
          </Link>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Info className="w-6 h-6 mr-3" />
          Introduction
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            GraphQL queries allow flexible data fetching, reducing over-fetching and under-fetching.
            <span className="ml-2">
              <a
                href="https://gql.ergoplatform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                gql.ergoplatform.com <ExternalLink className="inline w-4 h-4 ml-1 mb-1" />
              </a>
            </span>
            {" "}is a GraphQL server on top of Ergo Platform's explorer database schema.
          </p>
        </div>
      </div>

      {/* Instances */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <Server className="w-6 h-6 mr-3" />
          Instances
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 space-y-2">
          <p className="text-gray-300 mb-3 font-semibold">Public mainnet GraphQL endpoints:</p>
          <ul className="list-disc ml-6 text-blue-300 space-y-1">
            <li>
              <a href="https://gql.ergoplatform.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                gql.ergoplatform.com
              </a>
            </li>
            <li>
              <a href="https://explore.sigmaspace.io/api/graphql" target="_blank" rel="noopener noreferrer" className="hover:underline">
                explore.sigmaspace.io/api/graphql
              </a>
            </li>
            <li>
              <a href="https://graphql.erg.zelcore.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                graphql.erg.zelcore.io
              </a>
            </li>
            <li>
              <a href="https://sigmaexplorer.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                sigmaexplorer.org
              </a>
            </li>
          </ul>
          <p className="text-gray-300 mt-4 mb-2 font-semibold">Testnet GraphQL endpoints:</p>
          <ul className="list-disc ml-6 text-blue-300">
            <li>
              <a href="https://gql-testnet.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                gql-testnet.ergoplatform.com
              </a>
            </li>
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
          <ul className="list-disc ml-6 text-blue-300">
            <li>
              <a
                href="https://github.com/capt-nemo429/ergo-graphql"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ergo GraphQL GitHub <ExternalLink className="inline w-4 h-4 mb-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Examples Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Code className="w-6 h-6 mr-3" />
          Query Examples
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">

          <p className="text-gray-300 mb-4">
            Explore the schema visually using Apollo Studio or your favorite GraphQL client.<br />
            Here are some common queries you can try:
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Fetching Box Details with Assets</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  boxes(boxId: "your_box_id") {
    boxId
    transactionId
    value
    address
    assets {
      tokenId
      amount
    }
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Fetching Transactions for Specific Addresses</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  transactions(addresses: ["address1", "address2"]) {
    transactionId
    inclusionHeight
    timestamp
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Fetching Balance for a List of Addresses</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  addresses(addresses: ["address1", "address2"]) {
    address
    balance {
      nanoErgs
      assets(tokenId: "your_token_id") {
        amount
        tokenId
      }
    }
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Fetching Details of Specific Tokens</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  tokens(tokenIds: ["token_id1", "token_id2"]) {
    tokenId
    boxId
    name
    description
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Fetching State of the Blockchain</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  state {
    blockId
    height
    boxGlobalIndex
    transactionGlobalIndex
    network
    difficulty
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Fetching the First 10 Transactions</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  transactions(take: 10) {
    transactionId
    size
    inclusionHeight
    timestamp
    inputs {
      boxId
      transactionId
    }
    outputs {
      boxId
      value
    }
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Advanced: Boxes Created Between Block Heights</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  boxes(minHeight: 1000, maxHeight: 2000) {
    boxId
    creationHeight
    value
    address
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Advanced: First 5 Transactions & Their Boxes</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`query {
  transactions(take: 5) {
    transactionId
    timestamp
    outputs {
      boxId
      value
      assets {
        tokenId
        amount
      }
    }
  }
}`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Mutation: Submit Transaction</h3>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto mb-2">
{`mutation {
  submitTransaction(signedTransaction: {
    id: "your_transaction_id",
    inputs: [
      {
        boxId: "your_box_id",
        spendingProof: {
          proofBytes: "your_proof_bytes",
          extension: {}
        }
      }
    ],
    dataInputs: [
      {
        boxId: "your_data_input_box_id"
      }
    ],
    outputs: [
      {
        value: "1000",
        ergoTree: "your_ergo_tree",
        creationHeight: 1000,
        assets: [
          {
            tokenId: "your_token_id",
            amount: "100"
          }
        ],
        additionalRegisters: {},
        index: 0
      }
    ],
    size: 100
  }) 
}
`}
            </pre>
          </div>

        </div>
      </div>

      {/* Query Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
          <Zap className="w-6 h-6 mr-3" />
          Query Categories
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Fetching Box Details</li>
            <li>Fetching Multiple Boxes with Specific Conditions</li>
            <li>Fetching Specific Tokens</li>
            <li>Fetching Tokens Associated with a Box</li>
            <li>Fetching Inputs by Transaction or Box ID</li>
            <li>Fetching Transactions with Specific Conditions</li>
            <li>Fetching Data Inputs by Transaction or Box ID</li>
            <li>Fetching Block Headers by Height or Header ID</li>
            <li>Fetching Addresses with Balance and Transaction Count</li>
            <li>Fetching the State of the Mempool</li>
            <li>Fetching Blocks by Height or Header ID</li>
            <li>Fetching the Current State of the Blockchain</li>
            <li>Fetching Information about the Blockchain</li>
            <li>Fetching the Balance for a List of Addresses</li>
            <li>Fetching Transactions for Specific Addresses</li>
            <li>Fetching Box Details with Assets</li>
            <li>Fetching Unconfirmed Transactions from the Mempool</li>
            <li>Fetching Unconfirmed Boxes from the Mempool</li>
            <li>Fetching Unconfirmed Inputs from the Mempool</li>
            <li>Fetching Unconfirmed Addresses from the Mempool</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
