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
                  href="/Docs/miners/mining-guides/solo-mining/host-a-pool/stratum"
                  className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:bg-neutral-700/50 hover:border-orange-500/50 transition-all cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Ergo Stratum</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Official Ergo stratum mining server for connecting miners to your node.
                  </p>
                </Link>
                <Link 
                  href="/Docs/miners/mining-guides/solo-mining/host-a-pool/miningcore"
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
          <div className="space-y-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 text-center">
              <Wallet className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Withdraw Guide Coming Soon</h2>
              <p className="text-gray-400">
                Instructions on how to withdraw your mined ERG from your node wallet to your personal wallet.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <div className="space-y-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 text-center">
              <HelpCircle className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">FAQ Coming Soon</h2>
              <p className="text-gray-400">
                Frequently asked questions about solo mining, troubleshooting, and best practices.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 