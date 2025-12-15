
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CodeBlock } from "@/components/ui";

export default function ThreeOutOfFiveThresholdPage() {
  return (
    <>
      {/* HERO section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          3-out-of-5 Threshold Signature
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A practical example of threshold signatures in Ergo, demonstrating how to create a ring spending contract where any member of a group can make a transaction without revealing which specific member is spending the funds.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures/threshold"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Threshold Signatures
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-8">
          Let's say you want to create a <strong>ring spending contract</strong>, where any member of a group can make a transaction from the same address, but you do not want anyone else to know which specific member is spending the funds. This is not possible with Bitcoin. While Ethereum can achieve this, it would be expensive and complicated – especially with a ring size of 10 or 20 members, which might be required for robust privacy.
        </p>

        <p className="text-gray-300 mb-8">
          With Ergo, this kind of application can be created quickly, thanks to the integration of Sigma protocols in the core. This enables <strong>self-sovereign application-level privacy</strong>: trustless scripts that can be used to access mixers or other functionality without requiring any third parties.
        </p>

        <div className="mb-8">
          <CodeBlock language="typescript">
    {`val ringScript = s"""
{
atLeast(
  3, 
  Coll(
    PK("9f8ZQt1Sue6W5ACdMSPRzsHj3jjiZkbYy3CEtB4BisxEyk4RsNk"), 
    PK("9hFWPyhCJcw4KQyCGu4yAGfC1ieRAKyFg24FKjLJK2uDgA873uq"), 
    PK("9fdVP2jca1e5nCTT6q9ijZLssGj6v4juY8gEAxUhp7YTuSsLspS"), 
    PK("9gAKeRu1W4Dh6adWXnnYmfqjCTnxnSMtym2LPPMPErCkusCd6F3"),
    PK("9gmNsqrqdSppLUBqg2UzREmmivgqh1r3jmNcLAc53hk3YCvAGWE")
  )
)
}
"""`}
  </CodeBlock>
        </div>

        <p className="text-gray-300 mb-8">
          The above is an example of a <code className="bg-neutral-800 px-2 py-1 rounded">3-out-of-5</code> <strong>threshold signature</strong> script, which can be compiled to a Pay-to-Script (<code className="bg-neutral-800 px-2 py-1 rounded">P2S</code>) address.
        </p>

        <p className="text-gray-300 mb-8">
          Sending Ergs to the <a href="https://wallet.plutomonkey.com/p2s/?source=ewphdExlYXN0KAogIDMsIAogIENvbGwoCiAgICBQSygiOWY4WlF0MVN1ZTZXNUFDZE1TUFJ6c0hqM2pqaVprYll5M0NFdEI0QmlzeEV5azRSc05rIiksIAogICAgUEsoIjloRldQeWhDSmN3NEtReUNHdTR5QUdmQzFpZVJBS3lGZzI0RktqTEpLMnVEZ0E4NzN1cSIpLCAKICAgIFBLKCI5ZmRWUDJqY2ExZTVuQ1RUNnE5aWpaTHNzR2o2djRqdVk4Z0VBeFVocDdZVHVTc0xzcFMiKSwgCiAgICBQSygiOWdBS2VSdTFXNERoNmFkV1hublltZnFqQ1RueG5TTXR5bTJMUFBNUEVyQ2t1c0NkNkYzIiksCiAgICBQSygiOWdtTnNxcnFkU3BwTFVCcWcyVXpSRW1taXZncWgxcjNqbU5jTEFjNTNoazNZQ3ZBR1dFIikKICApCikKfQ==" className="text-orange-400 hover:text-orange-300 underline">resulting address</a> locks them under the protection of this threshold signature contract.
        </p>

        <p className="text-gray-300 mb-8">
          Here is a good introduction to <a href="https://www.youtube.com/watch?v=daP67yp-Czs&list=PLUWruihtE-HtL-JZk8Vb4Yn_H18aE3rb6&index=4" className="text-orange-400 hover:text-orange-300 underline">making a signature</a>.
        </p>

        <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-white">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Privacy:</strong> No one can determine which specific member signed the transaction</li>
            <li><strong>Flexibility:</strong> Any 3 out of 5 members can authorize a transaction</li>
            <li><strong>Security:</strong> Requires multiple signatures for enhanced security</li>
            <li><strong>Efficiency:</strong> Much more cost-effective than Ethereum implementations</li>
          </ul>
        </div>

        <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Use Cases</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Corporate Wallets:</strong> Requiring multiple executives to approve transactions</li>
            <li><strong>DAO Governance:</strong> Distributed decision-making for fund management</li>
            <li><strong>Privacy Applications:</strong> Mixers and anonymous transactions</li>
            <li><strong>Multi-Signature Wallets:</strong> Enhanced security for high-value holdings</li>
          </ul>
        </div>
      </div>
    </>
  );
} 