"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, DollarSign } from "lucide-react";

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

const CodeBlock = ({ children, language = "conf" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function FeesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <DollarSign className="w-10 h-10 text-pink-400" />
        Transaction Fees in Ergo
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
          Each Ergo transaction is an atomic state transition operation, involving the destruction of one or more boxes from the state and the creation of new ones. Unlike Bitcoin's implicit fee system, Ergo's fee structure is explicit, requiring a separate output to a specific address for fees.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Ergo's transaction fee system is designed to be both flexible and explicit. While the protocol does not enforce a minimum transaction fee, transactions without a fee are less likely to be included in a block by miners. Therefore, it is generally recommended to include a fee to incentivize miners to process your transaction. The larger the fee, the higher the likelihood of your transaction being included in a block and processed quickly.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Minimum Values</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Although the protocol does not enforce a specific transaction fee, it employs a spam-prevention strategy that requires each box to contain a minimum amount of ERG. This minimum value is determined by a parameter voted on by miners and the size of the box. Every output box in a transaction must adhere to this rule. This strategy helps prevent the creation of dust in Ergo, thereby mitigating potential spam attacks.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          This fee is calculated based on the serialized size of the boxes being created, with a minimum threshold set at <strong>360 nanoerg per byte</strong> and is adjustable via miner voting. As a guideline, it is suggested to allocate <strong>0.001 ERG (1,000,000 NanoErg) for each box</strong> involved in the transaction.
        </div>

        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-bold text-blue-400 mb-3">Dust</h3>
          <div className="text-gray-300">
            To clarify, the Dust-prevention Fee is not an actual fee that users must pay to others (e.g., miners). Instead, it serves as a security measure for the box. If users avoid creating new boxes, the Dust-prevention Fee can be reused by transferring the same amount into a newly created single box. If the new box remains under your control, you can be assured that there will be no loss of funds.
          </div>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Miner Transaction Prioritization</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Miners prioritize transactions based on either the fee per byte or the validation cost unit. These criteria are adjustable via a voting mechanism among miners. Nodes can sort transactions based on these metrics, settable in the node configuration.
        </div>

        <CodeBlock language="conf">{`# Mempool transaction sorting scheme ("random", "bySize", or "byExecutionCost")
mempoolSorting = "random"`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          When calculating the fee per byte or the fee per validation cost unit, miners initially filter out the fee boxes by checking the <code className="bg-neutral-800 px-1 rounded">propositionBytes</code> in the R1 register using the <strong>feeProposition</strong> method. Subsequently, they sum up the ERG value of these boxes. This sum is then divided by either the transaction's size or the total validation cost to yield a result. This final result serves as the basis for sorting transactions in the mempool.
        </div>

        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-bold text-blue-400 mb-3">Special Considerations</h3>
          <div className="text-gray-300">
            Although the minimal fee is a standard, miners can select transactions based on their economic incentives. This means transactions offering higher fees per byte or per execution unit are typically prioritized. However, miners may also choose to include their transactions above others when collecting storage rent.
          </div>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Fee Collection</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Transaction fees are secured in a{' '}
          <a href="https://ergexplorer.com/addresses#2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            contract
          </a>, which can only be spent through a miner's script. The address used for fees is not fixed by the protocol but is a standard in the Ergo node reference implementation. The ErgoScript for this contract, implicitly defined in the ErgoTree, is detailed in{' '}
          <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/f85f03cc8f063ae7f68d559371733c2b6bbc929a/sigmastate/src/main/scala/org/ergoplatform/ErgoScriptPredef.scala#L72" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            this method
          </a>.
        </div>

        <CodeBlock language="scala">{` /**
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
  }`}</CodeBlock>

        <div className="text-gray-300 mb-4 max-w-2xl">
          In essence, the fee script requires the spending transaction to have one output that pays to the miner's public key 720+ blocks later.
        </div>

        <div className="text-gray-300 mb-4 max-w-2xl">
          And the method to extract the transaction fee method is as follows:
        </div>

        <CodeBlock language="scala">{`  private def extractFee(tx: ErgoTransaction): Long = {
    tx.outputs
      .filter(_.ergoTree == settings.chainSettings.monetary.feeProposition)
      .map(_.value)
      .sum
  }`}</CodeBlock>

        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-bold text-yellow-400 mb-3">Why is it like this?</h3>
          <div className="text-gray-300">
            <em>Ergo's design philosophy emphasizes explicitness in its transactional model. This includes aspects such as emission, which is handled via a contract, and transaction fees. This approach simplifies the transactional model where possible.</em>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Determining Appropriate Fees</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The appropriate transaction fee must meet the protocol's minimum requirements, based on the box size. For best practices, see the{' '}
          <a href="https://github.com/ergoplatform/ergo/blob/e784a70b8fabf7ae41f2ac9aa593a647f488100c/src/main/scala/org/ergoplatform/modifiers/mempool/ErgoTransaction.scala#L163" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            ErgoTransaction.scala
          </a>.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Confirmation Levels and Security</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The recommended confirmation levels vary depending on the network hashrate. Higher hashrates reduce double-spend attack risks, thus requiring fewer confirmations.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Babel Fees</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Babel Fees enable users to pay transaction fees using tokens like SigmaUSD instead of ERG. This involves creating a new box with Babel tokens as change. The necessary ERGs for the transaction recipient and the miner's fee are sourced from this Babel fee box. For more details, see Babel Fees documentation.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">ErgoMixer</h3>
        <div className="text-gray-300 mb-8 max-w-2xl">
          ErgoMixer offers token mixing and dynamic fee management for consistent transaction inclusion in blocks. It uses blockchain-stored parameters for client guidance, supporting transparent and flexible fee and token management. For more insights, see this{' '}
          <a href="https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318/10?u=anon2020s" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            forum post
          </a>.
        </div>
      </div>
    </>
  );
} 