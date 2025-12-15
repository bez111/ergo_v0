"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, AlertTriangle, Info, Terminal, ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/ui";

const conf = `ergo {
  networkType = "testnet"

  node {
    mining = true
    useExternalMiner = false
  }
}

scorex {

network {
    bindAddress = "0.0.0.0:9022"
    nodeName = "ergo-testnet"
    #knownPeers = []
  }

restApi {
    # Hex-encoded Blake2b256 hash of an API key. Should be 64-chars long Base16 string.
    # Below is hash corresponding to API_KEY = "hello" (with no quotes)
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
  }
}`;

const javaCmd = `java -jar -Xmx4G ergo-*.jar --testnet -c testnet.conf`;

const miningLog = `INFO  [ef-critical-dispatcher-15] o.e.m.CandidateGenerator$ - Assembling a block candidate for block #120866 from 1 transactions available
INFO  [ef-critical-dispatcher-15] o.e.m.CandidateGenerator$ - No fee proposition found in txs List(1c79bade7ba9a6eb22333f8457fb3816cef119d0ad0fd7e72737ff25676918c6)
INFO  [ef-critical-dispatcher-15] o.e.m.CandidateGenerator$ - Got candidate block at height 120866 with 1 transactions, msg 3551b7fd6f3eeee2476529213162c8824b6b54e4909696b7359afa71300d119d
INFO  [ef-critical-dispatcher-15] o.e.m.CandidateGenerator - Generated new candidate in 5 ms
INFO  [tor.default-dispatcher-13] o.e.m.ErgoMiningThread - Trying nonce 1000
INFO  [tor.default-dispatcher-13] o.e.m.ErgoMiningThread - Trying nonce 2000
INFO  [tor.default-dispatcher-13] o.e.m.ErgoMiningThread - Trying nonce 3000
INFO  [tor.default-dispatcher-13] o.e.m.ErgoMiningThread - Trying nonce 4000
INFO  [tor.default-dispatcher-13] o.e.m.ErgoMiningThread - Trying nonce 5000`;

const curlCmd = `curl -X GET \"http://127.0.0.1:9052/mining/rewardPublicKey\" -H  \"accept: application/json\"`;

export default function CpuMiningPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        CPU Mining
      </h1>
      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node/testnet"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Testnet
        </Link>
      </div>
      <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-xl p-4 mb-8 flex items-start">
        <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
        <div>
          <b className="text-yellow-300">Warning!</b>
          <p className="text-yellow-100 text-sm mt-1">
            Please do not GPU mine the testnet! It prevents CPU miners from winning any blocks and then leaves a high difficulty when you stop.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2 mt-8">Getting Set-up</h2>
      <p className="text-gray-300 mb-4">
        Please refer to <Link href="/docs/developers/infrastructure/node/setup" className="text-cyan-400 hover:underline">node</Link> for basic node set-up up to this point.
      </p>
      <p className="text-gray-300 mb-4">
        To CPU mine on the testnet, your <code className="bg-neutral-800 px-1 rounded">testnet.conf</code> should look like this:
      </p>
      <CodeBlock language="typescript">
    {conf}
  </CodeBlock>
      <p className="text-gray-300 mb-4">Then run:</p>
      <CodeBlock language="typescript">
    {javaCmd}
  </CodeBlock>
      <p className="text-gray-300 mb-4">
        Make sure your wallet is initialised and unlocked, providing you're fully synchronised you should see an output like this indicating that you are mining.
      </p>
      <CodeBlock language="typescript">
    {miningLog}
  </CodeBlock>
      <p className="text-gray-300 mb-4">
        Your rewards will be sent to your <code className="bg-neutral-800 px-1 rounded">rewardPublicKey</code>, which is different from your wallet address.
      </p>
      <CodeBlock language="typescript">
    {curlCmd}
  </CodeBlock>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mt-8 flex items-start">
        <Info className="w-6 h-6 text-cyan-400 mr-3 mt-1" />
        <div>
          <b className="text-cyan-300">Keep in mind</b>
          <p className="text-cyan-100 text-sm mt-1">
            Please note that blocks take 720 confirmations on Ergo.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2 mt-8">Resources</h2>
      <p className="text-gray-300 mb-4">
        <a href="https://testnet.sigmaexplorer.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">testnet.sigmaexplorer.org</a> is a handy alternative version of the ergo explorer that shows miner distribution, hashrate and difficulty.
      </p>
    </>
  );
} 