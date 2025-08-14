import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Server, Settings, Terminal, Network, HelpCircle, Wallet, Calculator, AlertTriangle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SoloMiningPage() {
  return (
    <div>
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

      <Tabs defaultValue="overview" className="w-full">
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
          <div className="space-y-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 text-center">
              <Settings className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Node Configuration Coming Soon</h2>
              <p className="text-gray-400">
                Detailed instructions for configuring your Ergo node for solo mining, including EIP-27 rules and optimization settings.
              </p>
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