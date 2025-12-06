"use client";

/* eslint-disable react/no-unescaped-entities, react/no-children-prop */

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function FeesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Transaction Fees in Ergo
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
          <p className="text-gray-300 mb-4">
            Each Ergo <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/format" className="text-orange-400 hover:underline">transaction</Link> is an atomic state transition operation, involving the destruction of one or more <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/format" className="text-orange-400 hover:underline">boxes</Link> from the state and the creation of new ones. Unlike Bitcoin's implicit fee system, Ergo's fee structure is explicit, requiring a separate output to a specific address for fees.
          </p>
          
          <p className="text-gray-300">
            Ergo's transaction fee system is designed to be both flexible and explicit. While the protocol does not enforce a minimum transaction fee, transactions without a fee are less likely to be included in a block by miners. Therefore, it is generally recommended to include a fee to incentivize miners to process your transaction. The larger the fee, the higher the likelihood of your transaction being included in a block and processed quickly.
          </p>
        </div>

        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Minimum Values</h2>
          <p className="text-gray-300 mb-4">
            Although the protocol does not enforce a specific transaction fee, it employs a spam-prevention strategy that requires each box to contain a minimum amount of ERG. This minimum value is determined by a parameter voted on by miners and the size of the box. Every output box in a transaction must adhere to this rule. This strategy helps prevent the creation of dust in Ergo, thereby mitigating potential spam attacks.
          </p>
          
          <p className="text-gray-300 mb-4">
            This fee is calculated based on the serialized size of the boxes being created, with a minimum threshold set at <b>360 nanoerg per byte</b> and is adjustable via <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">miner voting</Link>. As a guideline, it is suggested to allocate <b>0.001 ERG (1,000,000 NanoErg) for each box</b> involved in the transaction.
          </p>
          
          <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-600/30 rounded-lg">
            <h4 className="text-sm font-semibold text-yellow-300 mb-2">Dust</h4>
            <p className="text-sm text-gray-400">
              To clarify, the Dust-prevention Fee is not an actual fee that users must pay to others (e.g., miners). Instead, it serves as a security measure for the box. If users avoid creating new boxes, the Dust-prevention Fee can be reused by transferring the same amount into a newly created single box. If the new box remains under your control, you can be assured that there will be no loss of funds.
            </p>
          </div>
        </div>

        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Miner Transaction Prioritization</h2>
          <p className="text-gray-300 mb-4">
            Miners prioritize transactions based on either the fee per byte or the validation cost unit. These criteria are adjustable via a <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">voting mechanism among miners</Link>. Nodes can sort transactions based on these metrics, settable in the <Link href="/docs/developers/conf-node" className="text-orange-400 hover:underline">node configuration</Link>.
          </p>
          
          <CodeBlock language="typescript">
    {`# Mempool transaction sorting scheme ("random", "bySize", or "byExecutionCost")
mempoolSorting = "random"`}
  </CodeBlock>
          
          <p className="text-gray-300 mt-4 mb-4">
            When calculating the fee per byte or the fee per validation cost unit, miners initially filter out the fee boxes by checking the <code className="bg-neutral-700 px-2 py-1 rounded">propositionBytes</code> in the R1 register using the <b>feeProposition</b> method. Subsequently, they sum up the ERG value of these boxes. This sum is then divided by either the transaction's size or the total validation cost to yield a result. This final result serves as the basis for sorting transactions in the mempool.
          </p>
          
          <div className="mt-4 p-4 bg-orange-900/30 border border-orange-600/30 rounded-lg">
            <h4 className="text-sm font-semibold text-orange-300 mb-2">Special Considerations</h4>
            <p className="text-sm text-gray-400">
              Although the minimal fee is a standard, miners can select transactions based on their economic incentives. This means transactions offering higher fees per byte or per execution unit are typically prioritized. However, miners may also choose to include their transactions above others when <Link href="/docs/developers/rent-fees" className="text-orange-400 hover:underline">collecting storage rent</Link>.
            </p>
          </div>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Fee Collection</h2>
          <p className="text-gray-300 mb-4">
            Transaction fees are secured in a <a href="https://ergexplorer.com/addresses#2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">contract</a>, which can only be spent through a miner's script. The address used for fees is not fixed by the protocol but is a standard in the Ergo node reference implementation. The ErgoScript for this contract, implicitly defined in the ErgoTree, is detailed in <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/f85f03cc8f063ae7f68d559371733c2b6bbc929a/sigmastate/src/main/scala/org/ergoplatform/ErgoScriptPredef.scala#L72" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">this method</a>.
          </p>
          
          <CodeBlock language="typescript"
            children={`/**
   * This proposition allows sending coins to a box protected by the following proposition:
   * prove the discrete logarithm of the miner's public key and that the height is at least \`delta\` blocks greater than the current one.
   */
def feeProposition(delta: Int = 720): ErgoTree = {
  val out = ByIndex(Outputs, IntConstant(0))
  AND(
    EQ(Height, boxCreationHeight(out)),
    EQ(ExtractScriptBytes(out), expectedMinerOutScriptBytesVal(delta, MinerPubkey)),
    EQ(SizeOf(Outputs), 1)
  ).toSigmaProp.treeWithSegregation
}`}
          />
          
          <p className="text-gray-300 mt-4 mb-4">
            In essence, the fee script requires the spending transaction to have one output that pays to the miner's public key 720+ blocks later.
          </p>
          
          <p className="text-gray-300 mb-4">
            And the method to extract the transaction fee method is as follows:
          </p>
          
          <CodeBlock language="typescript">
    {`private def extractFee(tx: ErgoTransaction): Long = {
  tx.outputs
    .filter(_.ergoTree == settings.chainSettings.monetary.feeProposition)
    .map(_.value)
    .sum
}`}
  </CodeBlock>
          
          <div className="mt-4 p-4 bg-purple-900/30 border border-purple-600/30 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-300 mb-2">Why is it like this?</h4>
            <p className="text-sm text-gray-400">
              <em>Ergo's design philosophy emphasizes explicitness in its transactional model. This includes aspects such as emission, which is handled via a contract, and transaction fees. This approach simplifies the transactional model where possible.</em>
            </p>
          </div>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Determining Appropriate Fees</h2>
          <p className="text-gray-300 mb-4">
            The appropriate transaction fee must meet the protocol's minimum requirements, based on the box size. For best practices, see the <a href="https://github.com/ergoplatform/ergo/blob/e784a70b8fabf7ae41f2ac9aa593a647f488100c/src/main/scala/org/ergoplatform/modifiers/mempool/ErgoTransaction.scala#L163" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoTransaction.scala</a>.
          </p>
        </div>

        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Confirmation Levels and Security</h2>
          <p className="text-gray-300">
            The recommended confirmation levels vary depending on the network hashrate. Higher hashrates reduce double-spend attack risks, thus requiring fewer confirmations.
          </p>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Related</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-orange-300">Babel Fees</h3>
          <p className="text-gray-300 mb-4">
            Babel Fees enable users to pay transaction fees using tokens like SigmaUSD instead of ERG. This involves creating a new box with Babel tokens as change. The necessary ERGs for the transaction recipient and the miner's fee are sourced from this Babel fee box. For more details, see <Link href="/docs/developers/data-model-apis/babel-fees" className="text-orange-400 hover:underline">Babel Fees documentation</Link>.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-orange-300">ErgoMixer</h3>
          <p className="text-gray-300">
            ErgoMixe offers token mixing and dynamic fee management for consistent transaction inclusion in blocks. It uses blockchain-stored parameters for client guidance, supporting transparent and flexible fee and token management. For more insights, see this <a href="https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318/10?u=anon2020s" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">forum post</a>.
          </p>
        </div>
      </div>
    </div>
  );
} 