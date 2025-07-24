"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function StarterTutorialPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Ergo Platform Basic Starter Tutorial</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/development-stack"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl">
        This tutorial will teach you the very basics of interacting with the Ergo blockchain to receive and send funds for multiple programming languages. For more in-depth information on the different SDKs available, please refer to their specific pages.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Import the SDK</h2>
      <div className="mb-6">
        <h3 className="font-semibold text-orange-400 mb-2">Gradle</h3>
        <UniversalCopyCodeBlock code={`implementation ("org.ergoplatform:ergo-appkit_2.12:5.0.0")`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">Maven</h3>
        <UniversalCopyCodeBlock code={`<dependency>\n  <groupId>org.ergoplatform</groupId>\n  <artifactId>ergo-appkit_2.12</artifactId>\n  <version>5.0.0</version>\n</dependency>`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">npm</h3>
        <UniversalCopyCodeBlock code={`npm install @fleet-sdk/core`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">yarn</h3>
        <UniversalCopyCodeBlock code={`yarn install @fleet-sdk/core`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">pip</h3>
        <UniversalCopyCodeBlock code={`pip install ergpy`} className="mb-4" />
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Create keys and an address</h2>
      <p className="text-gray-300 mb-4">Ergo Platform uses public key cryptography to ensure that every transaction is secure: every personal wallet has a keypair consisting of a public key and a secret key. The public key is always safe to share — other people need it to verify that you authorized a transaction. It's like an email address. The secret key, however, is private information that proves you own — and gives you access to — your private wallet. It's like a password, and you should never share it with anyone.</p>
      <p className="text-gray-300 mb-4">On Ergo, the secret key is usually a 15 words mnemonic seed phrase that is used to derive the internally used binary master key. From this master key, an infinite number of private and public keys can be derived with an index. So for every mnemonic seed phrase, there are existing multiple key pairs and addresses defined by an index. The main address is always at index 0.</p>
      <p className="text-gray-300 mb-4">You can create this address from a mnemonic phrase the following way:</p>
      <div className="mb-6">
        <h3 className="font-semibold text-orange-400 mb-2">Java</h3>
        <UniversalCopyCodeBlock code={`String ergoAddress = Address.createEip3Address(\n  index,\n  NetworkType.MAINNET,\n  SecretString.create(mnemonic),\n  SecretString.empty(),\n  false\n).toString();`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">Kotlin</h3>
        <UniversalCopyCodeBlock code={`val ergoAddress = Address.createEip3Address(\n  index,\n  NetworkType.MAINNET,\n  SecretString.create(mnemonic),\n  SecretString.empty(),\n  false\n).toString()`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">Scala</h3>
        <UniversalCopyCodeBlock code={`val ergoAddress = Address.createEip3Address(\n  index, \n  NetworkType.MAINNET, \n  SecretString.create(mnemonic),\n  SecretString.empty(),\n  false\n).toString`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">Python</h3>
        <UniversalCopyCodeBlock code={`from jpype import java\nfrom ergpy import helper_functions, appkit\n\nergo = appkit.ErgoAppKit(node_url=node_url)\nergo_address = helper_functions.get_wallet_address(ergo=ergo, amount=1, wallet_mnemonic=mnemonic)[0]\n\n# Proper exit()\nhelper_functions.exit()`} className="mb-4" />
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Sending payments</h2>
      <p className="text-gray-300 mb-4">If you created an address like described above and sent some ERG to it, you can send payments from this address. Sending payments on Ergo is always done within a transaction. Ergo follows Bitcoin's model: A transaction is a set of input boxes and output boxes. The input boxes are spent within a transaction, and output boxes are created. For a transaction to be valid, it must be signed with the private key of the address of the input boxes.</p>
      <p className="text-gray-300 mb-4">So sending payments needs the following steps to be done:</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>Search for unspent boxes covering the amount to be send</li>
        <li>Create an unsigned transaction with the input boxes found and output boxes for the payment recipient</li>
        <li>Sign the transaction</li>
        <li>Submit the transaction to the network</li>
      </ul>
      <p className="text-gray-300 mb-4">Luckily, our SDKs help you by providing high-level methods for this common task.</p>
      <div className="mb-6">
        <h3 className="font-semibold text-orange-400 mb-2">Java</h3>
        <UniversalCopyCodeBlock code={`ErgoClient ergoClient = RestApiErgoClient.create(nodeUrl, NetworkType.MAINNET, "", RestApiErgoClient.getDefaultExplorerUrl(NetworkType.MAINNET));\n\n//address receiving the tx\nAddress recipient = Address.create(recipientAddress);\n//amount to send\nlong amountToSend = 1000L * 1000L * 1000L // 1 ERG in nanoERGs\nergoClient.execute((BlockchainContext ctx) -> {\n    ErgoProver prover = ctx.newProverBuilder().withMnemonic(\n      SecretString.create(mnemonic),\n      SecretString.empty(),\n      false\n    ).withEip3Secret(0).build()\n\n    String txId = BoxOperations.createForProver(prover, ctx)\n            .withAmountToSpend(amountToSend)\n            .withInputBoxesLoader(new ExplorerAndPoolUnspentBoxesLoader().withAllowChainedTx(true))\n            .send(recipient);\n});`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">JavaScript</h3>
        <UniversalCopyCodeBlock code={`import { TransactionBuilder, OutputBuilder } from "@fleet-sdk/core";\n\nnew TransactionBuilder(creationHeight);\n\ntype Box = {\n  boxId: string;\n  value: string | bigint;\n  assets: { tokenId: string; amount: string | bigint }[];\n  ergoTree: string;\n  creationHeight: number;\n  additionalRegisters: NonMandatoryRegisters;\n  index: number;\n  transactionId: TransactionId;\n};\n\nnew TransactionBuilder(creationHeight)\n  .from(inputs)\n  .withDataFrom(dataInputs);\n\nnew TransactionBuilder(creationHeight)\n  .from(inputs)\n  .to(\n    new OutputBuilder(\n      "1000000", // amount of nanoergs\n      "9gNvAv97W71Wm33GoXgSQBFJxinFubKvE6wh2dEhFTSgYEe783j" // recipient address\n    )\n);`} className="mb-4" />
        <h3 className="font-semibold text-orange-400 mb-2">Python</h3>
        <UniversalCopyCodeBlock code={`from jpype import java\nfrom ergpy import helper_functions, appkit\n\nergo = appkit.ErgoAppKit(node_url=node_url)\namount_send = 1 # 1 ERG\n\nhelper_functions.simple_send(ergo=ergo, amount=amount_send, wallet_mnemonic=mnemonic,\n  receiver_addresses=recipient)\n\n# Proper exit()\nhelper_functions.exit()`} className="mb-4" />
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Receiving payments</h2>
      <p className="text-gray-300 mb-4">You don’t actually need to do anything to receive payments: if a payer makes a successful transaction to send assets to you, those assets will automatically be added to your wallet.</p>
      <p className="text-gray-300 mb-4">However, you may want to keep an eye out for incoming payments. For this, you can make use of our <a href="https://api.ergoplatform.com/api/v1/docs/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Explorer API</a>. The API's interfaces are shipping with some of our SDKs.</p>
      <div className="mb-6">
        <h3 className="font-semibold text-orange-400 mb-2">Java</h3>
        <UniversalCopyCodeBlock code={`// appkit ships with a Retrofit interface\nDefaultApi ergoApiService = Retrofit.Builder()\n    .baseUrl(RestApiErgoClient.defaultMainnetExplorerUrl)\n    .addConverterFactory(GsonConverterFactory.create())\n    .build().create(DefaultApi.class)\n\n// call methods on ergoApiService here`} className="mb-4" />
      </div>
      <p className="text-gray-300 mb-4">For JavaScript and Python, see SDK documentation for monitoring incoming payments.</p>
    </>
  );
} 