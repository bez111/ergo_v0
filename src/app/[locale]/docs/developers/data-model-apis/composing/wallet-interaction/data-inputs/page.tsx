"use client";

/* eslint-disable react/no-unescaped-entities, react/no-children-prop */

import React from "react";
import { Link } from "@/i18n/navigation";
import { CodeBlock } from "@/components/ui";

export default function DataInputsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Data Inputs in ErgoScript
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/data-model-apis/composing/wallet-interaction"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            ErgoScript's data inputs are a novel feature that enhances the traditional UTXO-based blockchain's functionality. This section delves into the concept of data inputs, their advantages, and their application within Ergo transactions.
          </p>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Understanding Data Inputs</h2>
          <p className="text-gray-300 mb-4">
            Traditional UTXO-based blockchains involve the consumption and subsequent destruction of inputs during transactions. Ergo innovates on this model with <b>data inputs</b>, which permit transactions to reference and read from existing UTXOs without the need to consume them. This breakthrough overcomes several limitations of the classic UTXO model, adding a layer of flexibility and efficiency to Ergo's extended UTXO (eUTXO) model.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">Key Features of Data Inputs</h3>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li><b>Non-Destructive Access:</b> Data inputs grant transactions the ability to tap into UTXO contents without the need to spend or consume them, preserving the UTXOs for future transactions.</li>
            <li><b>Concurrent Data Access:</b> Data inputs allow for the simultaneous referencing and reading of a UTXO's data by multiple transactions within a single block, without any of them spending the UTXO. This feature facilitates parallel processing and alleviates transaction execution bottlenecks.</li>
          </ul>
        </div>

        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Benefits of Data Inputs</h2>
          <p className="text-gray-300 mb-4">
            The integration of data inputs into ErgoScript offers several notable benefits:
          </p>
          
          <ol className="list-decimal list-inside ml-4 space-y-4 text-gray-300">
            <li><b>Reduced Transaction Fees:</b> Since data inputs do not necessitate script execution or the generation of new outputs, they contribute to lower transaction fees, making them an economical choice for intricate transactions.</li>
            
            <li><b>Enhanced DeFi Applications:</b> Data inputs prove invaluable for decentralized finance (DeFi) applications, such as decentralized exchanges (DEXs) or order-book systems. They enable contracts to reference external data, like oracle data or order book states, without the need to consume the data boxes, facilitating concurrent interactions with the same state by multiple parties.</li>
            
            <li><b>Improved Scalability and Efficiency:</b> Data inputs contribute to network scalability and efficiency by allowing several transactions to concurrently read from the same data input, reducing the necessity for extra outputs and lessening the likelihood of transaction conflicts.</li>
          </ol>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Working with Data Inputs</h2>
          <p className="text-gray-300 mb-4">
            Ergo's data inputs are a distinctive feature not found in other eUTXO-based systems. When employing data inputs in ErgoScript, it's crucial to grasp their operation and how to leverage them effectively in smart contracts.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Usage in Transactions</h3>
          <p className="text-gray-300 mb-4">
            In ErgoScript, data inputs are "read-only" boxes that supply vital information for contract validation without being spent in the transaction. For instance, a DeFi contract might utilize a data input to verify an asset's current price from an oracle box, ensuring the transaction complies with specific conditions without modifying the oracle box.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Example Use Case</h3>
          <p className="text-gray-300 mb-4">
            Imagine a transaction that references a box with the ID <code className="bg-neutral-700 px-2 py-1 rounded">d2b9b6536287b242f436436ce5a1e4a117d7b4843a13ce3abe3168bff99924a1</code> as both an input and a data input. This illustrates the versatility of data inputs, enabling a transaction to read and potentially update a box's state in one operation, assuming the box pre-existed the transaction.
          </p>
          
          <p className="text-gray-300 mb-4">
            In ErgoScript, you can refer to other boxes in the transaction using constructs like:
          </p>
          
          <CodeBlock language="typescript"
            children="INPUTS(0).value > 10000 && OUTPUTS(1).value > 20000"
          />
          
          <p className="text-gray-300 mt-4">
            This script enforces conditions based on the values of the first input and the second output boxes, showcasing how data inputs can be used to influence the logic of a transaction without consuming the referenced boxes.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">Comparison with Traditional Models</h3>
          <p className="text-gray-300">
            Data inputs in ErgoScript provide a significant advancement over traditional UTXO models, particularly in how they facilitate more complex and interactive smart contracts. For a more detailed comparison between eUTXO and account-based models, refer to the <a href="https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Off Chain Logic & eUTXO</a> article.
          </p>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Best Practices and Considerations</h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li><b>Selective Use:</b> Only include data inputs that are necessary for your contract logic to minimize transaction size and fees.</li>
            <li><b>Reliable Sources:</b> Ensure that the data accessed through data inputs is reliable and comes from trusted sources, especially when using oracles or external data providers.</li>
            <li><b>Validation Checks:</b> Always validate the data within data inputs to ensure it is in the expected format and state, reducing the risk of transaction failures.</li>
          </ul>
        </div>

        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <p className="text-gray-300 mb-4">
            For further reading and deeper understanding of the UTXO model and its implementation in Ergo, consider the following resources:
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><a href="https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Unlocking The Potential Of The UTXO Model</a></li>
            <li><a href="https://www.ergoforum.org/t/building-a-portable-and-reusable-par-utxo-dapp-standard/441" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Building A Portable And Reusable (PaR) UTXO dApp Standard</a></li>
            <li><a href="https://www.ergoforum.org/t/data-inputs-semantics/654" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Data Inputs Semantics</a></li>
            <li><Link href="/docs/developers/data-model-apis/model-tx" className="text-orange-400 hover:underline">Model Transaction Example</Link></li>
          </ul>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Conclusion</h3>
          <p className="text-gray-300">
            Data inputs are a powerful feature in ErgoScript that significantly enhance the flexibility, efficiency, and scalability of smart contracts. By allowing read-only access to UTXOs, data inputs enable more sophisticated interactions within the Ergo blockchain, making them an essential tool for developers building complex dApps and DeFi solutions.
          </p>
        </div>
      </div>
    </div>
  );
} 