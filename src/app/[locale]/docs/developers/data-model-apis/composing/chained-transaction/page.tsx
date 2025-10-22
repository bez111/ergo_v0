"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function ChainedTransactionPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Executing a Chained Transaction
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/data-model-apis/composing"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Composing Transactions
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            Chained transactions allow for the sequential use of outputs from off-chain transactions. This guide will walk you through the process of submitting a chained transaction on Ergo. The basic method demonstrated here is based on the <a href="https://github.com/mgpai22/ergpy/tree/main/examples" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ergpy examples</a>. For managing extensive interlinked transactions, you can refer to the <a href="https://github.com/GetBlok-io/Subpooling#frameworks--abstractions" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Transaction Group framework</a> provided by GetBlok.
          </p>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Establish a Blockchain Connection</h2>
          <p className="text-gray-300 mb-4">
            Start by defining the URL of the node to connect to the Ergo blockchain. This could be either a MainNet or TestNet node URL. The connection is then established using the <code className="bg-neutral-700 px-2 py-1 rounded">ErgoAppKit</code>.
          </p>
          
          <CodeBlock language="typescript">
    {`# Assign the node URL
node_url: str = "http://213.239.193.208:9052/"

# Establish the connection
ergo = appkit.ErgoAppKit(node_url=node_url)`}
  </CodeBlock>
        </div>

        <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Set Up Wallet Mnemonic</h2>
          <p className="text-gray-300 mb-4">
            Next, prepare your wallet mnemonic. This is a sentence-like password that will be used to access your wallet. This example includes receiver addresses and the amount to be sent in each transaction. Furthermore, it sets a sleep time, which is the delay between transaction submissions. The required amount for the genesis outbox, which is the first transaction in the chain, is also calculated.
          </p>
          
          <CodeBlock language="typescript">
    {`# Define the wallet mnemonic
wallet_mnemonic = "decline reward asthma enter three clean borrow repeat identify wisdom horn pull entire adapt neglect."

# Specify receiver addresses
receiver_addresses = [
    "3WwdXmYP39DLmDWJ6grH9ArXbWuCt2uGAh46VTfeGPrHKJJY6cSJ",
    "3WwuG9amNVDwkJdgT5Ce7aJCfeoafVmd9tag9AEiAZwgPi7pYX3w",
    "3Wxk5oofZ3Laq2CpFW4Fi9YQiaep9bZr6QFg4s4xpzz4bi9tZq2U"
]

# Define the amount for each transaction
amount = [0.22, 0.33, 0.11]

# Set the number of consecutive transactions
consecutive_transactions = 3

# Define the time gap between submissions of transactions
sleep_time = 0.5 

# Calculate the total amount for the genesis outbox
genesis_amount = [consecutive_transactions * (0.22 + 0.33 + 0.11) + (consecutive_transactions + 1) * 0.001]

# Wallet of the sender
genesis_receiver = [""]`}
  </CodeBlock>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Generate an Output Box</h2>
          <p className="text-gray-300 mb-4">
            To create an output box from the signed transaction, we use the <code className="bg-neutral-700 px-2 py-1 rounded">simple_send</code> method from the <code className="bg-neutral-700 px-2 py-1 rounded">helper_functions</code> module. The function returns a signed transaction, which we then use to obtain the genesis outbox.
          </p>
          
          <CodeBlock language="typescript">
    {`# Generate a signed transaction
genesis_tx = helper_functions.simple_send(ergo=ergo, amount=genesis_amount, wallet_mnemonic=wallet_mnemonic,
                                          receiver_addresses=genesis_receiver, return_signed=True)
# Get the genesis outbox
genesis_outbox = appkit.get_outputs_to_spend(genesis_tx, 0)`}
  </CodeBlock>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Submit the Transactions</h2>
          <p className="text-gray-300 mb-4">
            Finally, we submit the transactions to the node. For each transaction in the chain, we use the output box from the previous transaction as the input box for the current transaction. The first transaction retrieves the input box from the genesis outbox. The last transaction is not chained, i.e., its output box will not be used as an input box in any subsequent transaction. The ID of the genesis transaction and the last transaction are printed to the console. After the final transaction is submitted, the process ends.
          </p>
          
          <CodeBlock language="typescript">
    {`# Print the transaction ID of the genesis transaction
print(ergo.txId(genesis_tx))  

outBox_list = []

# Process all the transactions in the chain
for x in range(consecutive_transactions):
    # If it's the first transaction
    if x == 0: 
        tx_1 = helper_functions.simple_send(ergo=ergo, amount=amount, wallet_mnemonic=wallet_mnemonic,
                                            receiver_addresses=receiver_addresses, input_box=genesis_outbox,
                                            return_signed=True, chained=True)
    # If it's the last transaction
    elif x == consecutive_transactions - 1: 
        tx_1 = helper_functions.simple_send(ergo=ergo, amount=amount, wallet_mnemonic=wallet_mnemonic,
                                            receiver_addresses=receiver_addresses, input_box=outBox_list[x - 1],
                                            return_signed=True)
    # If it's neither the first nor the last transaction
    else: 
        tx_1 = helper_functions.simple_send(ergo=ergo, amount=amount, wallet_mnemonic=wallet_mnemonic,
                                            receiver_addresses=receiver_addresses, input_box=outBox_list[x - 1],
                                            return_signed=True, chained=True)
    # Get the outbox from the current transaction
    tx_1_outbox = appkit.get_outputs_to_spend(tx_1, 0)
    outBox_list.append(tx_1_outbox)
    
    # Pause before processing the next transaction
    time.sleep(sleep_time)

# Print the transaction ID of the last transaction
print(ergo.txId(tx_1)) 

# Pause before ending the program
time.sleep(sleep_time)

# End the program
helper_functions.exit()`}
  </CodeBlock>
        </div>
      </div>
    </div>
  );
} 