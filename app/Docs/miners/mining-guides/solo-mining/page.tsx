import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CopyButton } from "@/components/ui/copy-button";
import { ArrowLeft, Server, Settings, Terminal, Network, HelpCircle, Wallet, Calculator, AlertTriangle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SoloMiningPage() {
  return (
    <div>
      <Tabs defaultValue="overview" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
          <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
            <Server className="w-4 h-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="configuration" className="flex items-center gap-2 justify-center">
            <Settings className="w-4 h-4" /> Node Configuration
          </TabsTrigger>
          <TabsTrigger value="withdraw" className="flex items-center gap-2 justify-center">
            <Wallet className="w-4 h-4" /> Withdraw
          </TabsTrigger>
          <TabsTrigger value="faq" className="flex items-center gap-2 justify-center">
            <HelpCircle className="w-4 h-4" /> FAQ
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="space-y-8">
      {/* Hero Section */}
      <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                Solo Mining
        </h1>
              <p className="text-lg text-gray-400 mb-6">
                Mine independently with your own node setup. Complete guide from configuration to withdrawing rewards.
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/Docs/miners/mining-guides" 
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Mining Guides
        </Link>
      </div>

            {/* Description */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">What is Solo Mining?</h2>
              <p className="text-gray-300 mb-4">
                Solo mining is a method where you mine Ergo independently, without joining a mining pool. This approach can be more rewarding if you have significant mining power, but it also comes with higher variance in rewards.
              </p>
              <p className="text-gray-300">
                Before you decide to solo mine, you might want to use this{" "}
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScBFv3mxpu5Erv55zvfFuIo2NnaWht3cc70xZoRo-3c58Cv0A/viewform" 
                      className="text-orange-400 hover:text-orange-300 underline inline-flex items-center gap-1"
                      target="_blank" rel="noopener noreferrer">
                  calculator <ExternalLink className="w-3 h-3" />
                </Link>{" "}
                to evaluate if solo mining is the right choice for you.
              </p>
            </div>

            {/* EIP-27 Warning */}
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Remember EIP-27!</h3>
                  <p className="text-yellow-100">
                    To be able to spend any ERG mined via the reference client, you will need to include the EIP27 rules in your <code className="bg-yellow-800/30 px-2 py-1 rounded text-yellow-200">ergo.conf</code>. See the Node Configuration tab for more information.
                  </p>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-purple-400" />
                  Use a Mining Pool's Solo Port
                </h3>
                <p className="text-gray-300 mb-4">
                  Some mining pools offer a solo port for miners who prefer to work independently. This is the easier option as you don't need to set up your own infrastructure.
                </p>
                <p className="text-gray-300">
                  You can find a list of such pools on{" "}
                  <Link href="https://miningpoolstats.stream/ergo" 
                        className="text-orange-400 hover:text-orange-300 underline inline-flex items-center gap-1"
                        target="_blank" rel="noopener noreferrer">
                    Mining Pool Stats <ExternalLink className="w-3 h-3" />
                  </Link>.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5 text-cyan-400" />
                  Host Your Own Pool
                </h3>
                <p className="text-gray-300 mb-4">
                  If you prefer to have complete control over your mining process, you can set up and host your own mining pool. This requires more technical knowledge but gives you full control.
                </p>
                <p className="text-gray-300">
                  Our{" "}
                  <Link href="/Docs/miners/mining-guides/host-a-pool" 
                        className="text-orange-400 hover:text-orange-300 underline">
                    pool setup guide
                  </Link>{" "}
                  provides detailed instructions on how to do this.
                </p>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Important Considerations</h3>
              <p className="text-gray-300">
                Remember, solo mining requires a good understanding of the mining process and a significant amount of resources. Make sure to thoroughly evaluate your options before you start. Solo mining is typically recommended for large-scale operations with substantial hashrate.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Node Configuration Tab */}
        <TabsContent value="configuration">
          <div className="space-y-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                Solo Node Configuration
              </h1>
              <p className="text-lg text-gray-400">
                Configure your Ergo node for solo mining with proper EIP-27 support and optimization settings.
              </p>
            </div>

            {/* EIP-27 Warning */}
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Important: EIP-27 Rules Required</h3>
                  <p className="text-yellow-100">
                    To be able to spend any ERG mined this way, you will need to include the EIP27 rules in your <code className="bg-yellow-800/30 px-2 py-1 rounded text-yellow-200">ergo.conf</code> file which you run with the <code className="bg-yellow-800/30 px-2 py-1 rounded text-yellow-200">.jar</code> as such:
                  </p>
                </div>
              </div>
            </div>

            {/* Run Command */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-orange-400" />
                Run Command
              </h2>
              <div className="bg-black/50 rounded-lg p-4 border border-neutral-600 relative">
                <code className="text-green-400 font-mono text-sm">
                  java -Xmx4g -jar ergo-5.0.4.jar --mainnet -c ergo.conf
                </code>
                <CopyButton 
                  text="java -Xmx4g -jar ergo-5.0.4.jar --mainnet -c ergo.conf" 
                  className="absolute top-2 right-2" 
                  size="sm" 
                />
              </div>
            </div>

            {/* Configuration File */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-orange-400" />
                ergo.conf
              </h2>
              <div className="bg-black/50 rounded-lg p-4 border border-neutral-600 relative">
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`ergo {
  node {
    mining = true
  }
  chain {
    reemission {
      checkReemissionRules = true
    }
  }
  wallet {
    checkEIP27 = true
  }
}

scorex {
  restApi {
    ## Hex-encoded Blake2b256 hash of an API key. 
    ## Should be 64-chars long Base16 string.
    ## below is the hash of the string 'hello'
    ## replace with your actual hash generated from within swagger. 
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
  }
}`}
                </pre>
                <CopyButton 
                  text={`ergo {
  node {
    mining = true
  }
  chain {
    reemission {
      checkReemissionRules = true
    }
  }
  wallet {
    checkEIP27 = true
  }
}

scorex {
  restApi {
    ## Hex-encoded Blake2b256 hash of an API key. 
    ## Should be 64-chars long Base16 string.
    ## below is the hash of the string 'hello'
    ## replace with your actual hash generated from within swagger. 
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
  }
}`} 
                  className="absolute top-2 right-2" 
                  size="sm" 
                />
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Next Steps</h2>
              <p className="text-gray-300 mb-4">
                After configuring your node, you'll need to set up a mining server. You have two main options:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/Docs/miners/mining-guides/solo-mining/stratum"
                  className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:bg-neutral-700/50 hover:border-orange-500/50 transition-all cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Ergo Stratum</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Official Ergo stratum mining server for connecting miners to your node.
                  </p>
                </Link>
                <Link 
                  href="/Docs/miners/mining-guides/solo-mining/miningcore"
                  className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:bg-neutral-700/50 hover:border-orange-500/50 transition-all cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Mining Core</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Cross-platform mining pool server that supports Ergo mining.
                  </p>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Resources</h2>
              <div className="space-y-3">
                <Link 
                  href="https://www.youtube.com/watch?v=_1M8dGpfKjU" 
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 underline"
                  target="_blank" rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ergo Node + Stratum Server mining tutorial
                </Link>
                <Link 
                  href="https://www.youtube.com/watch?v=ubov4oweA20" 
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 underline"
                  target="_blank" rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Youtube: Mine Ergo from your own Node
                </Link>
                <Link 
                  href="https://www.ergoforum.org/t/q-a-on-mining-for-pool-operators-and-solo-miners/587" 
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 underline"
                  target="_blank" rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  ErgoForum: Q&A on mining (for pool operators and solo miner)
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Withdraw Tab */}
        <TabsContent value="withdraw">
          <div className="space-y-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                Spending Mining Rewards
              </h1>
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Keep in mind</h3>
                    <p className="text-yellow-200">
                      Please note this page contains information that pre-dates <a href="/Docs/introduction/eip27" className="text-yellow-400 hover:text-yellow-300 underline">EIP-27</a>.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-400">
                This section guides miners on how to withdraw funds they have mined.
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <p className="text-gray-300">
                Many users have launched both a node and a miner, with the miner's <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">pubkeyHex</code> embedded in the node's configuration. This information explains how to identify the coins that have been mined and transfer them to another address.
              </p>
            </div>

            {/* Keys Overview */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-400" />
                Keys Overview
              </h2>
              
              <p className="text-gray-300 mb-4">
                Miners may encounter various keys in different formats. Here are the key formats commonly encountered:
              </p>

              <div className="space-y-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">1. Base16-encoded raw public key</h3>
                  <p className="text-gray-300">
                    Mining software and mining support in the node use this format, represented as a serialized point on an elliptic curve. Miners can use this key without the need for Base58 encoding or address formation.
                  </p>
                </div>

                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">2. Pay-To-Public-Key (P2PK) addresses</h3>
                  <p className="text-gray-300">
                    These addresses are displayed in the node wallet and start with "9." In addition to the elliptic curve point, P2PK addresses also include the network prefix and a checksum, similar to Bitcoin's P2PK and P2PKH addresses.
                  </p>
                </div>

                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">3. Mining/rewardAddress API method</h3>
                  <p className="text-gray-300 mb-2">
                    This method is intended for external tools that generate block candidates. It displays a special encoded script, such as:
                  </p>
                  <code className="text-green-400 bg-neutral-800 px-2 py-1 rounded text-sm break-all">
                    88dhgzEuTXaSfKEbxfa6vghvEGdBH39sn9h7As2Y2Z6SGd8bKXCXmRLY5JtU4g4RYBP4WcZWb3JwjXDK
                  </code>
                  <p className="text-gray-300 mt-2">used to pay a miner.</p>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mt-4">
                <p className="text-blue-300">
                  <strong>Note:</strong> As long as you have entered the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">pubkeyHex</code> from your miner into your node, you don't need to worry about the different keys you encounter.
                </p>
              </div>
            </div>

            {/* Viewing Balance */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Wallet className="w-6 h-6 text-green-400" />
                Viewing Your Balance and Withdrawing Funds
              </h2>
              
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-6">
                <p className="text-yellow-200">
                  After initializing your wallet, you may not see the mined coins if the initialization occurred after the corresponding blocks were mined. It's important to note that the node does not scan blocks retrospectively; it only scans new blocks after initialization.
                </p>
              </div>

              <p className="text-gray-300 mb-4">
                To find mined coins in this situation, you need to perform a full blockchain rescan (or launch another node on a different machine or with different ports configured in the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">scorex.restApi.bindAddress</code> and <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">scorex.network.bindAddress</code> fields of the config). We recommend using version 3.0.1 for easier configuration.
              </p>
            </div>

            {/* Step 1 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-red-400" />
                Step 1: Clear Node State (if stopping the node)
              </h2>
              
              <p className="text-gray-300 mb-4">
                If you intend to stop your node, you must clear its state. To do this, stop the node and remove all contents of the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">.ergo</code> directory.
              </p>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <p className="text-blue-300">
                  <strong>Note:</strong> On Mac and Linux, you may need to use the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">ls -a</code> command in the directory where you ran the node to view the hidden directory.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-purple-400" />
                Step 2: Restoring a Local Wallet from the Autolykos Miner's Seed Phrase
              </h2>
              
              <p className="text-gray-300 mb-4">
                Retrieve the mnemonic sentence you set in the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">config.json</code> when configuring your Autolykos miner. You need to restore the built-in wallet using this phrase.
              </p>

              <p className="text-gray-300 mb-4">
                To restore your wallet, start the node again and send a POST request to <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">http://[your_node_ip]:9053/wallet/restore</code> with the following <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">application/json</code> content-type body:
              </p>

              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 mb-4">
                <CopyButton 
                  text={`{
  "pass": "your_wallet_pass",
  "mnemonic": "mnemonic_sentence_from_your_miner",
  "mnemonicPass": "mnemonic_pass_if_set"
}`}
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "pass": "your_wallet_pass",
  "mnemonic": "mnemonic_sentence_from_your_miner",
  "mnemonicPass": "mnemonic_pass_if_set"
}`}
                </pre>
              </div>

              <div className="space-y-3 text-gray-300">
                <p>In the request:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Provide a new, unique <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">pass</code> to encrypt the wallet data on your local disk</li>
                  <li>• The <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">mnemonic</code> field should contain the mnemonic phrase copied from your Autolykos miner's config</li>
                  <li>• Pay attention to the optional <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">mnemonicPass</code> field - include this only if your mnemonic phrase is protected by a password</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-300 mb-2">ATTENTION</h3>
                    <p className="text-red-200">
                      To allow the wallet to scan all blocks from the genesis, restore the wallet before your node starts downloading full blocks. You can check the <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">fullHeight</code> value in the response of the <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">/info</code> API method. If <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">fullHeight</code> is <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">null</code>, it means your node hasn't started downloading full blocks yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-cyan-400" />
                Step 3: Checking Your Balance
              </h2>
              
              <p className="text-gray-300 mb-4">
                Once your node is synchronized with the network, check the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">/wallet/balances</code> API method. The response should resemble the following:
              </p>

              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 mb-4">
                <CopyButton 
                  text={`{
  "height": 3560,
  "balance": 67500000000,
  "assets": {}
}`}
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "height": 3560,
  "balance": 67500000000,
  "assets": {}
}`}
                </pre>
              </div>

              <div className="space-y-3 text-gray-300">
                <p>Pay attention to:</p>
                <ul className="space-y-2 ml-4">
                  <li>• The <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">height</code> field, which should be equal to the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">fullHeight</code> displayed by the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">/info</code> API route</li>
                  <li>• The <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">balance</code> field represents the confirmed balance discovered by your wallet</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Network className="w-6 h-6 text-yellow-400" />
                Step 4: Making a Transaction to Spend Your Reward
              </h2>
              
              <p className="text-gray-300 mb-4">
                To withdraw a reward from your wallet, create a new payment transaction using the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">/wallet/payment/send</code> API route. Send a POST request with the following <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">application/json</code> content-type body:
              </p>

              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 mb-4">
                <CopyButton 
                  text={`{
  "address": "your_address",
  "value": 10000000
}`}
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "address": "your_address",
  "value": 10000000
}`}
                </pre>
              </div>

              <div className="space-y-3 text-gray-300 mb-4">
                <p>In the request:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Specify the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">address</code> where you want to move your funds</li>
                  <li>• The <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">value</code> represents the amount of nanoERGs you wish to transfer</li>
                </ul>
              </div>

              <p className="text-gray-300">
                After sending the request, the node will return the transaction ID in the response. You can use the <a href="https://explorer.ergoplatform.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
                  explorer <ExternalLink className="w-3 h-3" />
                </a> to track the progress of your transaction until it gets added to a block.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <div className="space-y-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                Solo Mining FAQ
              </h1>
              <p className="text-lg text-gray-400">
                Frequently asked questions about solo mining, troubleshooting, and best practices.
              </p>
            </div>

            {/* FAQ 1: Funds Not Visible */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-400" />
                Why Aren't My Funds Visible in My Wallet?
              </h2>
              
              <p className="text-gray-300 mb-4">
                When you mine, the rewards are initially linked to a <em>time-and-pubkey lock script</em>, not your standard P2PK address. To make these funds visible in your wallet, you need to transfer all the funds to your own address in the node wallet.
              </p>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <p className="text-blue-300">
                  <strong>Solution:</strong> Once the transfer is confirmed on the chain, the Explorer will display them.
                </p>
              </div>
            </div>

            {/* FAQ 2: Rewards Go to Different Address */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-green-400" />
                Why Do My Rewards Go to a Different Address?
              </h2>
              
              <p className="text-gray-300 mb-4">
                Mining rewards are initially directed to UTXOs (Unspent Transaction Outputs) associated with specific scripts. These scripts lock the rewards to the miner's public keys for <strong>720 blocks</strong>.
              </p>

              <p className="text-gray-300 mb-4">
                You can see an example of such a script <a href="https://explorer.ergoplatform.com/en/addresses/88dhgzEuTXaQ3tvkG8KeHesmXdvVomxHoHK5ExawGuxhs3nwBKkoQTxZogna6Dx9Jbu7KG2Wor22Uy73" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
                  here <ExternalLink className="w-3 h-3" />
                </a>.
              </p>

              <div className="space-y-3 text-gray-300">
                <p>Key points:</p>
                <ul className="space-y-2 ml-4">
                  <li>• These UTXOs are not part of the node wallet before the locking height, so they are not included in your balance</li>
                  <li>• However, they are stored in a special node application with <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">id = 9</code> (wallet application id = 10)</li>
                  <li>• You can locate them via the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">/scan/unspentBoxes/9</code> API endpoint</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 mt-4">
                <p className="text-green-300">
                  <strong>Note:</strong> After 720 confirmations, the wallet will display the mined rewards, even if they are still associated with long scripts instead of short P2PK addresses.
                </p>
              </div>
            </div>

            {/* FAQ 3: Verify Block Mined by Me */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Network className="w-6 h-6 text-purple-400" />
                How Do I Verify If a Block Is Mined by Me?
              </h2>
              
              <p className="text-gray-300 mb-4">
                You can obtain your mining rewards address with the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">/mining/rewardAddress</code> API call. The response should look something like this:
              </p>

              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 mb-4">
                <CopyButton 
                  text={`{
  "rewardAddress": "mPdcmQkPPvyMGoCDNg9oiasLyPpKJhHjgjpt89uJZE1oN9PJ9fKbdKDcfomtWoy3d1E7RFLTUbXbt1AS"
}`}
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "rewardAddress": "mPdcmQkPPvyMGoCDNg9oiasLyPpKJhHjgjpt89uJZE1oN9PJ9fKbdKDcfomtWoy3d1E7RFLTUbXbt1AS"
}`}
                </pre>
              </div>

              <p className="text-gray-300 mb-4">
                You can then verify your rewards on the <a href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
                  Ergo Explorer <ExternalLink className="w-3 h-3" />
                </a>.
              </p>

              <p className="text-gray-300 mb-4">
                You can also obtain your "raw" public key via the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">/mining/rewardPublicKey</code> endpoint:
              </p>

              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 mb-4">
                <CopyButton 
                  text={`{
  "rewardPubkey": "03aa53abda9e6c958ed6046e6092b901662a26a01a2029c417b1c3f29b4b1c2799"
}`}
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "rewardPubkey": "03aa53abda9e6c958ed6046e6092b901662a26a01a2029c417b1c3f29b4b1c2799"
}`}
                </pre>
              </div>

              <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                <p className="text-purple-300">
                  <strong>Tip:</strong> Then, you can check block headers (<code className="bg-neutral-800 px-2 py-1 rounded text-purple-400">pk</code> field) for this public key.
        </p>
      </div>
            </div>

            {/* FAQ 4: Mining Solution API */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-cyan-400" />
                /mining/solution API Endpoint
              </h2>
              
              <p className="text-gray-300 mb-4">
                The mining solution API endpoint returns the following format:
              </p>

              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 mb-4">
                <CopyButton 
                  text={`{
  "pk": "0350e25cee8562697d55275c96bb01b34228f9bd68fd9933f2a25ff195526864f5",
  "w": "0366ea253123dfdb8d6d9ca2cb9ea98629e8f34015b1e4ba942b1d88badfcc6a12",
  "n": "0000000000000000",
  "d": 987654321
}`}
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "pk": "0350e25cee8562697d55275c96bb01b34228f9bd68fd9933f2a25ff195526864f5",
  "w": "0366ea253123dfdb8d6d9ca2cb9ea98629e8f34015b1e4ba942b1d88badfcc6a12",
  "n": "0000000000000000",
  "d": 987654321
}`}
                </pre>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Field Explanations:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">pk</h4>
                    <p className="text-gray-300 text-sm">The public key <em>in binary format</em></p>
                  </div>

                  <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">n</h4>
                    <p className="text-gray-300 text-sm">The nonce</p>
                  </div>

                  <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2">w & d</h4>
                    <p className="text-gray-300 text-sm">No longer used in Autolykos2 and are <strong>constant</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 