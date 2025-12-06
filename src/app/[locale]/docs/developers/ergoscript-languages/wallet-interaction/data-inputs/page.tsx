"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Database } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

const CodeBlock = ({ children, language = "scala" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function DataInputsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Database className="w-10 h-10 text-pink-400" />
        Data Inputs in ErgoScript
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/wallet-interaction"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-2xl">
          ErgoScript's data inputs are a novel feature that enhances the traditional UTXO-based blockchain's functionality. This section delves into the concept of data inputs, their advantages, and their application within Ergo transactions.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Understanding Data Inputs</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Traditional UTXO-based blockchains involve the consumption and subsequent destruction of inputs during transactions. Ergo innovates on this model with <strong>data inputs</strong>, which permit transactions to reference and read from existing UTXOs without the need to consume them. This breakthrough overcomes several limitations of the classic UTXO model, adding a layer of flexibility and efficiency to Ergo's extended UTXO (eUTXO) model.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Key Features of Data Inputs</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>Non-Destructive Access:</strong> Data inputs grant transactions the ability to tap into UTXO contents without the need to spend or consume them, preserving the UTXOs for future transactions.</li>
          <li><strong>Concurrent Data Access:</strong> Data inputs allow for the simultaneous referencing and reading of a UTXO's data by multiple transactions within a single block, without any of them spending the UTXO. This feature facilitates parallel processing and alleviates transaction execution bottlenecks.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Benefits of Data Inputs</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          The integration of data inputs into ErgoScript offers several notable benefits:
        </div>

        <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>Reduced Transaction Fees:</strong> Since data inputs do not necessitate script execution or the generation of new outputs, they contribute to lower transaction fees, making them an economical choice for intricate transactions.</li>
          <li><strong>Enhanced DeFi Applications:</strong> Data inputs prove invaluable for decentralized finance (DeFi) applications, such as decentralized exchanges (DEXs) or order-book systems. They enable contracts to reference external data, like oracle data or order book states, without the need to consume the data boxes, facilitating concurrent interactions with the same state by multiple parties.</li>
          <li><strong>Improved Scalability and Efficiency:</strong> Data inputs contribute to network scalability and efficiency by allowing several transactions to concurrently read from the same data input, reducing the necessity for extra outputs and lessening the likelihood of transaction conflicts.</li>
        </ol>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Working with Data Inputs</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Ergo's data inputs are a distinctive feature not found in other eUTXO-based systems. When employing data inputs in ErgoScript, it's crucial to grasp their operation and how to leverage them effectively in smart contracts.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Usage in Transactions</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          In ErgoScript, data inputs are "read-only" boxes that supply vital information for contract validation without being spent in the transaction. For instance, a DeFi contract might utilize a data input to verify an asset's current price from an oracle box, ensuring the transaction complies with specific conditions without modifying the oracle box.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Example Use Case</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Imagine a transaction that references a box with the ID <code className="bg-neutral-800 px-1 rounded">d2b9b6536287b242f436436ce5a1e4a117d7b4843a13ce3abe3168bff99924a1</code> as both an input and a data input. This illustrates the versatility of data inputs, enabling a transaction to read and potentially update a box's state in one operation, assuming the box pre-existed the transaction.
        </div>

        <div className="text-gray-300 mb-4 max-w-2xl">
          In ErgoScript, you can refer to other boxes in the transaction using constructs like:
        </div>

        <CodeBlock language="scala">{`INPUTS(0).value > 10000 && OUTPUTS(1).value > 20000`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          This script enforces conditions based on the values of the first input and the second output boxes, showcasing how data inputs can be used to influence the logic of a transaction without consuming the referenced boxes.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Comparison with Traditional Models</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Data inputs in ErgoScript provide a significant advancement over traditional UTXO models, particularly in how they facilitate more complex and interactive smart contracts. For a more detailed comparison between eUTXO and account-based models, refer to the{' '}
          <a href="https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Off Chain Logic {'&'} eUTXO
          </a>{' '}
          article.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Best Practices and Considerations</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>Selective Use:</strong> Only include data inputs that are necessary for your contract logic to minimize transaction size and fees.</li>
          <li><strong>Reliable Sources:</strong> Ensure that the data accessed through data inputs is reliable and comes from trusted sources, especially when using oracles or external data providers.</li>
          <li><strong>Validation Checks:</strong> Always validate the data within data inputs to ensure it is in the expected format and state, reducing the risk of transaction failures.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Additional Resources</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          For further reading and deeper understanding of the UTXO model and its implementation in Ergo, consider the following resources:
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Unlocking The Potential Of The UTXO Model
            </a>
          </li>
          <li>
            <a href="https://www.ergoforum.org/t/building-a-portable-and-reusable-par-utxo-dapp-standard/441" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Building A Portable And Reusable (PaR) UTXO dApp Standard
            </a>
          </li>
          <li>
            <a href="https://www.ergoforum.org/t/data-inputs-semantics/654" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Data Inputs Semantics
            </a>
          </li>
          <li>Model Transaction Example</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Conclusion</h3>
        <div className="text-gray-300 mb-8 max-w-2xl">
          Data inputs are a powerful feature in ErgoScript that significantly enhance the flexibility, efficiency, and scalability of smart contracts. By allowing read-only access to UTXOs, data inputs enable more sophisticated interactions within the Ergo blockchain, making them an essential tool for developers building complex dApps and DeFi solutions.
        </div>
      </div>
    </>
  );
} 