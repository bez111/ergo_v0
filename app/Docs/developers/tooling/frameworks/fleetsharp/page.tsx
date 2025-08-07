"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function FleetSharpPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">FleetSharp</h1>
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/Docs/developers/tooling/frameworks"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
        <a
          href="https://github.com/pulsarz/FleetSharp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          FleetSharp Repo <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        <a href="https://github.com/pulsarz/FleetSharp" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">FleetSharp</a> is a C# library for building transactions on the Ergo blockchain, inspired by the excellent TypeScript <Link href="/Docs/developers/tooling/frameworks/fleet" className="text-cyan-400 hover:underline">fleet-sdk</Link>.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Usage</h2>
      <h3 className="text-lg font-semibold text-orange-400 mb-2">Example: Send a simple ERG only transaction</h3>
      <CodeBlock language="typescript">{`var unspentWalletBoxes = await node.GetAllUnspentBoxesInWallet(false);
var currentHeight = await node.GetCurrentHeight();

var tx = new TransactionBuilder(currentHeight)
    .from(unspentWalletBoxes)
    .to(new List<OutputBuilder> { new OutputBuilder(1000000000L, ErgoAddress.fromBase58("9iJyQKGYN4agM8UyJKjj8UoxWRa89dfDr2ptXYKEd7fJxLsYcuF")) })
    .sendChangeTo(ErgoAddress.fromBase58("9gzGJworU5a4yrwLndgLoJa8N4MPMpn7p9mj8TShUTJ7wYhabKn"))
    .payMinFee()
    .build().ToPlainObject();

var signedTx = await node.SignTransaction(tx);
var transactionId = await node.SubmitSignedTransaction(signedTx);`}</CodeBlock>
      <h3 className="text-lg font-semibold text-orange-400 mb-2">Example: Send a transaction with tokens</h3>
      <CodeBlock language="typescript">{`var unspentWalletBoxes = await node.GetAllUnspentBoxesInWallet(false);
var currentHeight = await node.GetCurrentHeight();

var tx = new TransactionBuilder(currentHeight)
    .from(unspentWalletBoxes)
    .to(new List<OutputBuilder>
    { 
        new OutputBuilder(1000000000L, ErgoAddress.fromBase58("9iJyQKGYN4agM8UyJKjj8UoxWRa89dfDr2ptXYKEd7fJxLsYcuF"))
            .AddToken(new TokenAmount<long>
            {
                tokenId = "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
                amount = 10000L
            })
     })
    .sendChangeTo(ErgoAddress.fromBase58("9gzGJworU5a4yrwLndgLoJa8N4MPMpn7p9mj8TShUTJ7wYhabKn"))
    .payMinFee()
    .build().ToPlainObject();

var signedTx = await node.SignTransaction(tx);
var transactionId = await node.SubmitSignedTransaction(signedTx);`}</CodeBlock>
      <h3 className="text-lg font-semibold text-orange-400 mb-2">Example: Minting tokens</h3>
      <CodeBlock language="typescript">{`var unspentWalletBoxes = await node.GetAllUnspentBoxesInWallet(false);
var currentHeight = await node.GetCurrentHeight();

var tx = new TransactionBuilder(currentHeight)
    .from(unspentWalletBoxes)
    .to(new List<OutputBuilder>
    { 
        new OutputBuilder(OutputBuilder.SAFE_MIN_BOX_VALUE, ErgoAddress.fromBase58("9iJyQKGYN4agM8UyJKjj8UoxWRa89dfDr2ptXYKEd7fJxLsYcuF"))
            .mintToken(new NewToken<long>
            {
                amount = 100,
                name = "FleetSharp test mint token #1",
                decimals = 0,
                description = "This is a test token minted with FleetSharp"
            })
    })
    .sendChangeTo(ErgoAddress.fromBase58("9gzGJworU5a4yrwLndgLoJa8N4MPMpn7p9mj8TShUTJ7wYhabKn"))
    .payMinFee()
    .build().ToPlainObject();

var signedTx = await node.SignTransaction(tx);
var transactionId = await node.SubmitSignedTransaction(signedTx);`}</CodeBlock>
      <h3 className="text-lg font-semibold text-orange-400 mb-2">Example: Interacting with a contract and setting registers</h3>
      <CodeBlock language="typescript">{`using static FleetSharp.Sigma.ConstantSerializer;
using static FleetSharp.Sigma.ISigmaCollection;
using static FleetSharp.Sigma.IPrimitiveSigmaType;

var unspentWalletBoxes = await node.GetAllUnspentBoxesInWallet(false);
var currentHeight = await node.GetCurrentHeight();

var spendBox = await node.GetBox("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

var tx = new TransactionBuilder(currentHeight)
    .from(unspentWalletBoxes)
    .to(new List<OutputBuilder>
    { 
        new OutputBuilder(OutputBuilder.SAFE_MIN_BOX_VALUE, ErgoAddress.fromErgoTree(spendBox.ergoTree, Network.Mainnet))
            .SetAdditionalRegisters(new NonMandatoryRegisters
            {
                R4 = SConstant(SInt(47851)),/*integer*/
                R5 = SConstant(SColl(SigmaTypeCode.Byte, FleetSharp.Tools.HexToBytes("e218ee38a9fa71a770968f2746d624f8")))/*hex string as Coll[Byte]*/
            })
    })
    .sendChangeTo(ErgoAddress.fromBase58("9gzGJworU5a4yrwLndgLoJa8N4MPMpn7p9mj8TShUTJ7wYhabKn"))
    .payMinFee()
    .build().ToPlainObject();

var signedTx = await node.SignTransaction(tx);
var transactionId = await node.SubmitSignedTransaction(signedTx);`}</CodeBlock>
      <h3 className="text-lg font-semibold text-orange-400 mb-2">Example: Reading registers from a box</h3>
      <CodeBlock language="typescript">{`using static FleetSharp.Sigma.ConstantSerializer;
using static FleetSharp.Sigma.ISigmaCollection;
using static FleetSharp.Sigma.IPrimitiveSigmaType;

var box = await node.GetBox("07b1276dd8207767c320a76a0a7ba9c76feb1f414c58cb9335810341a02236dc");

byte[] borrower = SParse(box.additionalRegisters.R4);
long amount = SParse(box.additionalRegisters.R5);
long repayment = SParse(box.additionalRegisters.R6);
int maturityLength = SParse(box.additionalRegisters.R7);`}</CodeBlock>
    </>
  );
} 