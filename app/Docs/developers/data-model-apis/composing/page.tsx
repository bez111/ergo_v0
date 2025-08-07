"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";
import { Network, Box, Database, Eye, FileText, Settings, ExternalLink } from "lucide-react";

export default function ComposingTransactionsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Composing Transactions
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/Docs/developers/data-model-apis"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Data Model & APIs
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            Each Ergo transaction represents an <b>atomic state transition operation</b>. This operation <em>destroys</em> an existing <Link href="/Docs/developers/data-model-apis" className="text-orange-400 hover:underline">box</Link> from the state and generates new ones.
          </p>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Anatomy of a Transaction</h2>
          <p className="text-gray-300 mb-4">
            Every transaction executed on Ergo comprises <b>three main components</b>:
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">
                <code className="bg-purple-600/20 px-2 py-1 rounded">One or more</code> Input boxes
              </h3>
              <p className="text-gray-300">
                These are the sources of your funds for the transaction. These boxes, which must already exist, will be destroyed by the transaction. The guard script in each box is evaluated and must return <code className="bg-neutral-700 px-2 py-1 rounded">true</code> for the transaction to be deemed valid.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">
                <code className="bg-pink-600/20 px-2 py-1 rounded">One or more</code> Output boxes
              </h3>
              <p className="text-gray-300">
                These are the destinations of your funds. These boxes will be created by the transaction.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                <code className="bg-cyan-600/20 px-2 py-1 rounded">Zero or more</code> Data-Input boxes
              </h3>
              <p className="text-gray-300">
                These are supplementary boxes whose data can be referenced and utilized by the smart contracts of the inputs. The guard script in these boxes is not evaluated.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/Docs/developers/data-model-apis/composing/chained-transaction" className="group">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-purple-400">Sending A Chained Transaction</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Learn how to create and send chained transactions that spend outputs of off-chain transactions.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/Docs/developers/data-model-apis/composing/wallet-interaction" className="group">
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-pink-400">Interacting with an Ergo Wallet</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Understand how to interact with Ergo wallets for transaction signing and management.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-pink-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">Data Inputs</h3>
          <p className="text-gray-300 mb-4">
            <Link href="/Docs/developers/data-model-apis/composing/wallet-interaction/data-inputs" className="text-orange-400 hover:underline">Data inputs</Link> are a unique feature introduced by Ergo and later adopted by Cardano with the <em>Vasil</em> Hardfork. This concept allows multiple transactions to share a data-input box, storing only a single reference to the box in the block.
          </p>
          
          <p className="text-gray-300 mb-4">
            In traditional UTXO-based blockchains, transactions typically require spending and destroying all inputs. However, Ergo introduces the concept of <b>data inputs</b> to allow transactions to reference existing UTXOs and read their data without consuming them. This innovation solves the limitations normally associated with eUTXO.
          </p>
          
          <p className="text-gray-300">
            Data inputs enable multiple transactions within a block or slot to read the data from the same UTXO concurrently, as none of them actually spend or destroy the data. This parallel processing of data inputs reduces transaction fees, as smart contract execution is not required, and there is no need to create extra outputs. Additionally, data inputs address various other challenges, making them a valuable design choice for all UTXO-based blockchains.
          </p>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>If the transaction is spending boxes protected by a non-trivial script, its inputs should also contain <em>proof of spending correctness</em> - context extension (user-defined key-value map) and data inputs (links to existing boxes in the state) that can be used during script reduction to crypto, signatures that satisfy the remaining cryptographic protection of the script.</li>
            <li>Transactions are not encrypted, which means that transactions included in blocks can be viewed publicly.</li>
          </ul>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Tools for Composing Transactions</h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li>
              <a href="https://thierrym1212.github.io/txbuilder/" className="text-orange-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Transaction builder</a>: This application enables you to manipulate Ergo JSON transactions with a UI and to sign them with a wallet or to prepare the JSON for the Swagger API. It can also load the JSON of an unsigned transaction for editing. 
              <div className="mt-2 ml-4 flex gap-3">
                <a href="https://github.com/ThierryM1212/transaction-builder/" className="inline-flex items-center text-purple-300 hover:text-purple-200 text-sm" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" /> GitHub
                </a>
                <span className="text-gray-500">|</span>
                <a href="https://youtu.be/0VhfY7osT2k" className="inline-flex items-center text-pink-300 hover:text-pink-200 text-sm" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" /> Video
                </a>
              </div>
            </li>
            <li>Refer to this <Link href="/Docs/developers/data-model-apis/basics#sending-payments" className="text-orange-400 hover:underline">basic tutorial for sending a transaction</Link> for an introduction.</li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            Ergo also supports <Link href="/Docs/developers/data-model-apis/chained" className="text-orange-400 hover:underline">'<em>Chained transactions</em>'</Link> (spending outputs of off-chain transactions).
          </p>
        </div>
      </div>
    </div>
  );
} 