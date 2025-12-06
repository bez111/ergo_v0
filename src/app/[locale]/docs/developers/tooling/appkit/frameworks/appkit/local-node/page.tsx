"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function LocalNodePage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Interacting with a local node</h1>
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/docs/developers/tooling/frameworks/appkit"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Among other things, the Appkit library allows us to communicate with Ergo nodes via the <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">REST API</a>.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Let's see how we can write ErgoTool - a simple Java console application (similar to <a href="https://github.com/ergoplatform/ergo-tool" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-tool</a> utility) which uses Appkit library.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        ErgoTool allows to create and send a new transaction to any existing Ergo node on the network. A new node can also be started locally and thus available at <code>http://localhost:9052/</code>.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Suppose we <a href="https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">set up a full node</a> and started it using the following command.
      </p>
      <CodeBlock language="bash">{`$ java -jar -Xmx4G target/scala-2.12/ergo-4.0.8.jar --testnet -c ergo-testnet.conf`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        We will need some configuration parameters which can be loaded from <code>ergotool.json</code> file
      </p>
      <CodeBlock language="typescript">{`{
  "node": {
    "nodeApi": {
      "apiUrl": "http://139.59.29.87:9053",
      "apiKey": "82344a18c24adc42b78f52c58facfdf19c8cc38858a5f22e68070959499076e1"
    },
    "wallet": {
      "mnemonic": "slow silly start wash bundle suffer bulb ancient height spin express remind today effort helmet",
      "password": "",
      "mnemonicPassword": ""
    },
    "networkType": "MAINNET"
  },
  "parameters": {
    "newBoxSpendingDelay": "30"
  }
}`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Here <code>apiKey</code> is the secret key required for API authentication which can be obtained as described <Link href="/docs/developers/tooling/swagger" className="text-cyan-400 hover:underline">here</Link>. And mnemonic is the secret phrase obtained during <Link href="/docs/developers/tooling/wallet" className="text-cyan-400 hover:underline">setup of a new wallet</Link> or if you don't want to set up your node using ergo-tool's <a href="https://github.com/ergoplatform/ergo-tool#supported-commands" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">mnemonic</a> command.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Our example app also reads the amount of NanoErg to put into a new box from command line arguments
      </p>
      <CodeBlock language="typescript">{`public static void main(String[] args) {
    long amountToPay = Long.parseLong(args[0]);
    ErgoToolConfig conf = ErgoToolConfig.load("ergotool.json");
    int newBoxSpendingDelay = Integer.parseInt(conf.getParameters().get("newBoxSpendingDelay"));
    // the rest of the code shown below 
    ...
}`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Next, we connect to the running testnet node from our Java application by creating a <code>ErgoClient</code> instance.
      </p>
      <CodeBlock language="typescript">{`ErgoNodeConfig nodeConf = conf.getNode();
ErgoClient ergoClient = RestApiErgoClient.create(nodeConf, null);`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Using <code>ErgoClient</code> we can execute <code>lib-api/src/main/java/org/ergoplatform/appkit/ErgoClient.java</code> any block of code in the current blockchain context.
      </p>
      <CodeBlock language="typescript">{`String txJson = ergoClient.execute((BlockchainContext ctx) -> {
    // here we will use ctx to create and sign a new transaction
    // which then be sent to the node and also serialized into Json
});`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        The lambda passed to <code>execute</code> is called when the current blockchain context is loaded from the node. This is where we shall put our application logic.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        We start with some auxiliary steps.
      </p>
      <CodeBlock language="typescript">{`// access wallet embedded in Ergo node
ErgoWallet wallet = ctx.getWallet();

// calculate total amount of NanoErgs we need to create the new box 
// and pay transaction fees
long totalToSpend = amountToPay + Parameters.MinFee;

// request wallet for unspent boxes that cover required amount of NanoErgs
Optional<List<InputBox>> boxes = wallet.getUnspentBoxes(totalToSpend);
if (!boxes.isPresent())
    throw new ErgoClientException(
        "Not enough coins in the wallet to pay " + totalToSpend, null);
    
// create a so called prover, a special object which will be used for signing the transaction
// the prover should be configured with secrets, which are necessary to generate signatures (aka proofs)
ErgoProver prover = ctx.newProverBuilder()
    .withMnemonic(
            SecretString.create(nodeConf.getWallet().getMnemonic()),
            SecretString.create(nodeConf.getWallet().getMnemonicPassword()))
    .build();`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Now that we have the input boxes to spend in the transaction, we need to create an output box with the requested <code>amountToPay</code> and the specific contract protecting that box.
      </p>
      <CodeBlock language="typescript">{`// the only way to create transaction is using builder obtained from the context
// the builder keeps relationship with the context to access necessary blockchain data.
UnsignedTransactionBuilder txB = ctx.newTxBuilder();

// create new box using new builder obtained from the transaction builder
// in this case we compile new ErgoContract from source ErgoScript code
OutBox newBox = txB.outBoxBuilder()
        .value(amountToPay)
        .contract(ctx.compileContract(
                ConstantsBuilder.create()
                        .item("freezeDeadline", ctx.getHeight() + newBoxDelay)
                        .item("pkOwner", prover.getP2PKAddress().pubkey())
                        .build(),
                "{ sigmaProp(HEIGHT > freezeDeadline) && pkOwner }"))
        .build();`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Note, in order to compile <code>ErgoContract</code> from source, the <code>compileContract</code> method requires us to provide values for named constants which are used in the script.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        If no such constants are used, then <code>ConstantsBuilder.empty()</code> can be passed.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        In this specific case, we pass the public key of the <code>prover</code> for <code>pkOwner</code> placeholder of the script meaning the box can be spent only by the owner of the public key from the <code>wallet</code> section of <code>ergotool.json</code>.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Next, we create an unsigned transaction using all the data collected so far.
      </p>
      <CodeBlock language="typescript">{`// tell transaction builder which boxes we are going to spend, which outputs
// to create, amount of transaction fees and address for change coins.
UnsignedTransaction tx = txB.boxesToSpend(boxes.get())
        .outputs(newBox)
        .fee(Parameters.MinFee)
        .sendChangeTo(prover.getP2PKAddress()) // i.e. back to the wallet's pk
        .build();`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        And finally, we use <code>prover</code> to sign the transaction, obtain a new <code>SignedTransaction</code> instance and use context to send it to the Ergo node. 
      </p>
      <CodeBlock language="typescript">{`SignedTransaction signed = prover.sign(tx);
String txId = ctx.sendTransaction(signed);
return signed.toJson(/*prettyPrint=*/true, /*formatJson=*/true);`}</CodeBlock>
      <p className="text-gray-300 mb-4 max-w-2xl">
        As the last step, we serialize signed transactions into Json with pretty printing turned-on. 
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Please see the <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/java-examples/src/main/java/org/ergoplatform/appkit/examples/FreezeCoin.java" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">full source code</a> of the example.
      </p>
    </>
  );
} 