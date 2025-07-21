"use client";

import React from "react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function ColdWalletPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        EIP-0019 Cold Wallet: an interaction protocol between Hot and Cold mobile wallets
      </h1>
      <Link
        href="/Docs/developers/infrastructure/wallets/standards"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        Back to Standards
      </Link>
      <blockquote className="border-l-4 border-cyan-600 pl-4 text-gray-300 italic mb-6">
        🔗 From <a href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0019</a>
      </blockquote>
      <div className="text-gray-400 text-sm mb-6">
        <div><b>Author:</b> @MrStahlfelge, @aslesarenko</div>
        <div><b>Status:</b> Proposed</div>
        <div><b>Created:</b> 18-August-2021</div>
        <div><b>License:</b> CC0</div>
        <div><b>Forking:</b> not needed</div>
      </div>

      <h2 id="description" className="text-2xl font-bold mb-4 mt-8">Description</h2>
      <p className="text-gray-300 mb-4">
        This EIP defines a standard for cross-device interaction between "Hot" (online) and "Cold" (offline) wallets for signing Ergo transactions.
      </p>

      <h2 id="background-and-motivation" className="text-2xl font-bold mb-4 mt-8">Background And Motivation</h2>
      <p className="text-gray-300 mb-4">
        Mobile wallets (like <a href="https://github.com/MrStahlfelge/ergo-wallet-android" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Android Wallet</a>) typically store private keys (aka mnemonics) on the device.
      </p>
      <p className="text-gray-300 mb-4">
        However, modern mobile OSes (Android, iOS) as well as desktop PCs are always connected to the internet and can be <a href="https://latesthackingnews.com/2021/07/30/apple-patched-zero-day-bug-under-attack-for-mac-and-ios-devices/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">hacked</a> and secrets <a href="https://latesthackingnews.com/2021/07/06/numerous-trojanized-android-apps-caught-stealing-users-facebook-credentials/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">stolen</a>. Screenreading and keystroke logging are system-independant ways to steal user data.
      </p>
      <p className="text-gray-300 mb-4">
        That is why specialized <a href="https://www.ledger.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">hardware wallets</a> are considered much more secure to store private keys.
      </p>
      <p className="text-gray-300 mb-4">
        Another option for more security is to use "Cold" wallet - a device which is not connected to the internet or better, with all connectivity turned-off and internet access blocked. Candidates could be outdated (but still functioning) mobile devices with clean factory setup or a Raspberry Pi with a fresh Raspbian setup and only Cold Wallet application installed. As long as the device never connects to the internet, it is guaranteed that no secrets left the device.
      </p>
      <p className="text-gray-300 mb-4">
        Interaction with the Cold Wallet device can be done via QR codes (in case of mobile devices) or by transferring files (in case of Raspberry Pi). For simplicity, only QR code is mentioned in the following text. This does not mean any restriction of the transportation method.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>A user creates a transaction in the Hot Wallet application and then presses a "Sign With Cold Wallet" button</li>
        <li>The Hot Wallet application shows a QR code with serialized transaction bytes on the screen</li>
        <li>User scans the QR code using the Cold Wallet device, signs the transaction after which QR code of the signed transaction is displayed.</li>
        <li>Then user scans the QR code of the signed transaction and sends it to blockchain.</li>
      </ul>
      <p className="text-gray-300 mb-4">
        The design of Ergo contracts allows for a simple and universal implementation which we describe in <a href="#reference-implementation-of-hot-wallet" className="text-cyan-400 hover:underline">Reference Implementation</a> section.
      </p>
      <p className="text-gray-300 mb-4">
        In the following sections we:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>describe the main problem we need to solve;</li>
        <li>describe a solution;</li>
        <li>specify a protocol with two roles: HotWallet and ColdWallet which must be implemented by complying Wallet applications and</li>
        <li>describe a reference implementation of both Hot and Cold roles in <a href="https://github.com/MrStahlfelge/ergo-wallet-android" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Wallet for Android</a>.</li>
      </ul>

      <h2 id="cold-signing-problem" className="text-2xl font-bold mb-4 mt-8">Cold Signing Problem</h2>
      <p className="text-gray-300 mb-4">
        In the Ergo's eUTXO model a box can be protected by an arbitrary complex contract (aka spending condition) and the spending transaction should satisfy that condition by adding required context variables, creating expected number of outputs with specific <a href="registers.md" className="text-blue-400 hover:underline">registers</a> etc. i.e. a special data structure called <code>Context</code>. The Context should be created for each input of the transaction and then passed to the Prover which will generate a signature for that input. See <a href="https://github.com/ScorexFoundation/sigmastate-interpreter#sigma-language-background" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">general overview of signing and verification</a> process in Ergo for details.
      </p>
      <p className="text-gray-300 mb-4">
        In general, the Context represents the current state of the blockchain and includes current header, previous 10 headers, current height etc. This data can be retrieved from blockchain nodes. This is possible on Hot Wallet device, but is not possible on Cold Wallet device (there is no network connection).
      </p>
      <p className="text-gray-300 mb-4">
        At the same time the prover need to know both the Context data and the private keys, which are stored on the Cold Wallet device, and so the Prover must run on the Cold Wallet device.
      </p>
      <p className="text-gray-300 mb-4">
        And finally, which is the problem, we cannot transfer unsigned transaction along with all the contexts for each input to the Cold Wallet via QR code.
      </p>
      <p className="text-gray-300 mb-4">
        QR codes have limit of 4K bytes on the maximum size of serialized data. Most of the transactions with required Contexts will exceed this limit.
      </p>

      <h2 id="simplified-signing-using-reducedtransaction" className="text-2xl font-bold mb-4 mt-8">Simplified Signing using ReducedTransaction</h2>
      <p className="text-gray-300 mb-4">
        To solve the problem of <i>cold signing</i> we need a new data structure and serialization format called <code>ReducedTransaction</code>.
      </p>
      <UniversalCopyCodeBlock code={`ReducedTransaction:
  - unsignedTx: UnsignedTransaction
  - reducedInputs: Seq[ReducedInputData]
  - txCost: Int

UnsignedTransaction:
  - inputs: Seq[UnsignedInput],
  - dataInputs: Seq[DataInput],
  - outputCandidates: Seq[ErgoBoxCandidate]

UnsignedInput:
  - boxId: BoxId
  - extension: ContextExtension

ReducedInputData:
  - reductionResult: ReductionResult 

ReductionResult:
  - value: SigmaBoolean
  - cost: Long`} />
      <p className="text-gray-300 mb-4">
        Having the <code>ReducedTransaction</code> data structure the full transaction signing consists of three steps
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4">
        <li>Create unsigned transaction and then reduce it in the current blockchain context, which has connection to one of the network nodes. This step is performed on Hot Wallet and produces ReducedTransaction without requiring secret keys.</li>
      </ol>
      <UniversalCopyCodeBlock code={`val ctx: BlockchainContext = ...
val unsignedIx = createTransaction(ctx, from, to, amountToSend, assets)
val prover = ctx.newProverBuilder.build // prover without secrets
val reducedTx: ReducedTransaction = prover.reduce(unsigned, 0)`} />
      <ol className="list-decimal pl-6 text-gray-300 mb-4" start={2}>
        <li>Serialize ReducedTransaction data structure to bytes and then pass it to the Cold Wallet via QR code.</li>
        <li>Once scanned in the Cold Wallet, the ReducedTransaction object can be deserialized back from bytes and then signed using prover configured with local secrets.</li>
      </ol>
      <UniversalCopyCodeBlock code={`val reducedTx = ReducedTransactionSerializer.fromBytes(reducedTxBytes)
val ctx: ColdBlockchainContext = ...
// create prover in the cold context using secrets stored on this device
val prover = ctx.newProverBuilder.withSecretStorage("storage.json").build
val signedTx = prover.signReduced(reducedTx)`} />
      <p className="text-gray-300 mb-4">
        It is important to note, that signatures for all inputs of the ReducedTransaction can be generated directly, without script evaluation (aka script reduction) and and thus, Cold Wallet don't need complex spending contexts.
      </p>

      <h2 id="transaction-interchange" className="text-2xl font-bold mb-4 mt-8">Transaction Interchange</h2>
      <p className="text-gray-300 mb-4">
        For better security and usability additional data can be transfered between Hot and Cold wallets via QR codes. Hot Wallet passes data to the Cold Wallet using ColdSigningRequest data format and Cold Wallet replies back with ColdSigningResponse.
      </p>
      <h3 className="text-xl font-bold mb-2 mt-6">ColdSigningRequest</h3>
      <p className="text-gray-300 mb-2">Json format, holding</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>reducedTx</b> (mandatory): Base64-encoded <code>ReducedTransaction</code> as defined above</li>
        <li><b>sender</b> (optional): P2PK address sending the transaction, can be used by cold wallets to determine which secret to use for signing the transaction</li>
        <li><b>inputs</b> (mandatory): List of base64-encoded serialized input boxes, can be used by cold wallets to show the user which boxes are burnt</li>
      </ul>
      <h3 className="text-xl font-bold mb-2 mt-6">ColdSigningResponse</h3>
      <p className="text-gray-300 mb-2">Json format, holding</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>signedTx</b> (mandatory): Base64-encoded <code>SignedTransaction</code></li>
      </ul>
      <h3 className="text-xl font-bold mb-2 mt-6">Interchange format</h3>
      <p className="text-gray-300 mb-4">
        As QR codes are length-limited and it could be needed to transfer the data in chunks, it is needed to wrap the actual data sent by a small layer containing information about number of chunk pages and page index of a chunk. This is done by wrapping it in another JSON container with three properties:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>The actual chunk data, named CSR for ColdSigningRequest or CSTX for ColdSigningResponse</li>
        <li>property "p", 1-based page index of current chunk (optional if there is only one page)</li>
        <li>property "n", number of pages (optional if there is only one page)</li>
      </ul>
      <p className="text-gray-300 mb-4">Examples:</p>
      <UniversalCopyCodeBlock code={`{"CSR":"{\"reducedTx\":\"....\",\"sender\":\"9...\",\"inputs\":[\"...\"]}"}`} />
      <UniversalCopyCodeBlock code={`{"CSTX":"{\"signedTx\":\"... (actual data, no valid JSON on its own)","n":3,"p":1}`} />
      <p className="text-gray-300 mb-4">
        In addition to using the above formats the following requirements are imposed on Hot Wallet and Cold Wallets:
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4">
        <li>There should be a way for a given unsigned transaction on the HotWallet to show QR code of ColdSigningRequest on the screen, and then scan the QR code of the corresponding ColdSigningResponse.</li>
        <li>There should be a way on ColdWallet to scan QR code of ColdSigningRequest, show transaction details on the screen and allow user to either sign or reject. If signed, the QR code of ColdSigningResponse should be shown.</li>
      </ol>

      <h2 id="reference-implementation-of-hot-wallet" className="text-2xl font-bold mb-4 mt-8">Reference Implementation of Hot Wallet</h2>
      <a href="https://github.com/ergoplatform/ergo-wallet-android" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/ergoplatform/ergo-wallet-android</a>

      <h2 id="reference-implementation-of-cold-wallet" className="text-2xl font-bold mb-4 mt-8">Reference Implementation of Cold Wallet</h2>
      <a href="https://github.com/ergoplatform/ergo-wallet-android" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/ergoplatform/ergo-wallet-android</a>
      <p className="text-gray-300 mb-4 mt-2">
        A special <code>ColdErgoClient</code> instance can be created to perform signing operations. <code>ColdErgoClient</code> don't have connections to Ergo nodes and explorer, moreover for better security, cold client can forbig operations if any device connectivity is turned-on, such as WiFi, Bluetooth, NFC, Cellular etc. Note, using ColdErgoClient is not strictly required and ordinary client can be used instead, however ColdErgoClient allows this EIP to be easily supported in an implementation of Cold Wallet application based on Appkit.
      </p>

      <h2 id="benefits" className="text-2xl font-bold mb-4 mt-8">Benefits</h2>
      <p className="text-gray-300 mb-4">
        Any wallet can become compatible with this EIP by implementing HotWallet role in addition to basic wallet features. Any Hot wallet implementation can interact with any Cold wallet implementation. Users have an alternative to specialized hardware wallets and can gain more security for their funds stored on the Ergo Blockchain.
      </p>
    </>
  );
} 