"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Server, 
  Settings, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Download,
  ChevronRight,
  Target,
  Users,
  DollarSign,
  Zap,
  Code,
  Terminal,
  HardDrive,
  Network,
  Clock,
  TrendingUp,
  Copy,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SoloMiningPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const advantagesData = [
    {
      title: "Full Control",
      description: "Complete control over mining operations and node configuration",
      icon: Shield
    },
    {
      title: "No Pool Fees",
      description: "Keep 100% of block rewards without pool commission",
      icon: DollarSign
    },
    {
      title: "Network Support",
      description: "Directly contribute to Ergo network decentralization",
      icon: Network
    },
    {
      title: "Privacy",
      description: "No need to share hashrate data with third parties",
      icon: Target
    }
  ];

  const requirementsData = [
    {
      title: "High Hashrate",
      description: "Typically need 50+ GH/s for reasonable block finding frequency",
      icon: Zap,
      critical: true
    },
    {
      title: "Technical Knowledge",
      description: "Understanding of node operation and troubleshooting",
      icon: Settings,
      critical: true
    },
    {
      title: "Stable Infrastructure",
      description: "Reliable internet, power, and hardware setup",
      icon: Server,
      critical: false
    },
    {
      title: "Storage Space",
      description: "At least 50GB for blockchain data and growing",
      icon: HardDrive,
      critical: false
    }
  ];

  const nodeConfigSteps = [
    {
      title: "Download Ergo Node",
      code: "wget https://github.com/ergoplatform/ergo/releases/latest/download/ergo-*.jar",
      description: "Download the latest Ergo reference client"
    },
    {
      title: "Create Configuration",
      code: `ergo {
  node {
    mining = true
    miningPubKeyHex = "YOUR_MINING_ADDRESS_HEX"
    
    state {
      type = "utxo"
    }
  }
  
  wallet {
    secretStorage {
      secretDir = \${ergo.node.dataDir}"/wallet/keystore"
    }
  }
}`,
      description: "Configure your node for mining operations"
    },
    {
      title: "Start Node",
      code: "java -jar ergo-*.jar --mainnet -c application.conf",
      description: "Launch your Ergo node with mining enabled"
    }
  ];

  const withdrawSteps = [
    {
      step: "1",
      title: "Access Wallet API",
      description: "Connect to your node's wallet API on port 9053"
    },
    {
      step: "2", 
      title: "Unlock Wallet",
      description: "Use your wallet password to unlock for transactions"
    },
    {
      step: "3",
      title: "Create Transaction",
      description: "Send mined ERG to your preferred address"
    },
    {
      step: "4",
      title: "Broadcast",
      description: "Submit transaction to the network"
    }
  ];

  const faqData = [
    {
      question: "How long until I find a block?",
      answer: "With current network difficulty, you need significant hashrate (50+ GH/s) to find blocks regularly. Smaller operations might wait weeks or months between blocks."
    },
    {
      question: "Can I use a mining pool's solo port?",
      answer: "Yes, many pools offer solo mining ports that handle the technical setup while you keep full block rewards. This is easier than running your own node."
    },
    {
      question: "What hardware do I need?",
      answer: "A modern computer with at least 8GB RAM, 50GB+ storage, and stable internet. The mining hardware connects separately to your node."
    },
    {
      question: "Is solo mining profitable?",
      answer: "Solo mining is generally only profitable for large operations due to variance in block finding. Pool mining provides more consistent returns for smaller miners."
    }
  ];

  return (
    <>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/Docs/miners/mining-guides"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Mining Guides</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Solo Mining Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Mine Ergo independently without pools. Run your own node and keep 100% of block rewards while supporting network decentralization.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/miners/mining-guides/pools"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            Pool Mining
          </Link>
          <Link
            href="/Docs/miners/mining-guides/software"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            Mining Software
          </Link>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="node-config">Node Configuration</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          {/* Solo Mining Overview */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">What is Solo Mining?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Solo mining means operating your own Ergo node and mining directly without joining a pool. 
                When you find a block, you receive the full reward (~67.5 ERG) plus transaction fees, 
                but blocks may be infrequent depending on your hashrate.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                  <h3 className="font-semibold text-green-400 mb-2">Best For</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Large mining operations (50+ GH/s)</li>
                    <li>• Technical users comfortable with nodes</li>
                    <li>• Long-term network supporters</li>
                    <li>• Privacy-conscious miners</li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-400 mb-2">Consider Pool Mining If</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• You have less than 50 GH/s</li>
                    <li>• You prefer steady income</li>
                    <li>• Technical setup seems complex</li>
                    <li>• You're just starting mining</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages & Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Advantages */}
            <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Advantages</h2>
              <div className="space-y-4">
                {advantagesData.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <advantage.icon className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">{advantage.title}</h3>
                      <p className="text-gray-400 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-6">Requirements</h2>
              <div className="space-y-4">
                {requirementsData.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <requirement.icon className={`w-6 h-6 mt-1 ${requirement.critical ? 'text-red-400' : 'text-yellow-400'}`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white">{requirement.title}</h3>
                        {requirement.critical && (
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{requirement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mining Calculator */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Expected Block Times</h2>
              <p className="text-gray-300 mb-6">
                Estimated time to find a block based on your hashrate and current network difficulty:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-white">Hashrate</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Network Share</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Expected Block Time</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Monthly Blocks</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">10 GH/s</td>
                      <td className="py-3 px-4">~0.01%</td>
                      <td className="py-3 px-4">~7 days</td>
                      <td className="py-3 px-4">~4 blocks</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">50 GH/s</td>
                      <td className="py-3 px-4">~0.05%</td>
                      <td className="py-3 px-4">~1.5 days</td>
                      <td className="py-3 px-4">~20 blocks</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">100 GH/s</td>
                      <td className="py-3 px-4">~0.1%</td>
                      <td className="py-3 px-4">~18 hours</td>
                      <td className="py-3 px-4">~40 blocks</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">500 GH/s</td>
                      <td className="py-3 px-4">~0.5%</td>
                      <td className="py-3 px-4">~3.6 hours</td>
                      <td className="py-3 px-4">~200 blocks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                * Based on current network hashrate of ~100 TH/s. Block times are statistical averages.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Node Configuration Tab */}
        <TabsContent value="node-config">
          {/* Configuration Steps */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Node Setup Steps</h2>
              <div className="space-y-6">
                {nodeConfigSteps.map((step, index) => (
                  <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <button
                        onClick={() => copyToClipboard(step.code, index)}
                        className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                      >
                        {copiedIndex === index ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copiedIndex === index ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                    <div className="bg-black/50 border border-gray-600 rounded p-3 overflow-x-auto">
                      <code className="text-green-400 text-sm whitespace-pre-wrap">{step.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stratum Server Options */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border border-cyan-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Stratum Server Options</h2>
              <p className="text-gray-300 mb-6">
                Choose a stratum server to connect your mining hardware to your Ergo node:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/Docs/miners/mining-guides/solo-mining/stratum"
                  className="group bg-gray-900/50 border border-gray-700 hover:border-cyan-600/50 rounded-lg p-6 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Terminal className="w-8 h-8 text-cyan-400" />
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ergo Stratum</h3>
                  <p className="text-gray-400 text-sm">Official Ergo stratum server implementation</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Recommended</span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Official</span>
                  </div>
                </Link>

                <Link
                  href="/Docs/miners/mining-guides/solo-mining/miningcore"
                  className="group bg-gray-900/50 border border-gray-700 hover:border-purple-600/50 rounded-lg p-6 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Server className="w-8 h-8 text-purple-400" />
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mining Core</h3>
                  <p className="text-gray-400 text-sm">Multi-currency mining pool/stratum software</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">Advanced</span>
                    <span className="bg-yellow-600 text-black text-xs px-2 py-1 rounded">Multi-coin</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Withdraw Tab */}
        <TabsContent value="withdraw">
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Withdrawing Your Mining Rewards</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When you successfully mine a block, the rewards (currently ~67.5 ERG plus fees) are automatically 
                added to your node's wallet. Here's how to access and withdraw these funds:
              </p>
              
              <div className="space-y-6">
                {withdrawSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-300 mb-1">Security Note</h3>
                    <p className="text-yellow-100 text-sm">
                      Always backup your wallet seed phrase before withdrawing funds. 
                      Consider using a hardware wallet for large amounts of ERG.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wallet Management */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Wallet Management Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Security Measures</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Backup your wallet seed phrase securely
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Use strong passwords for wallet encryption
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Regular wallet backups to multiple locations
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Operational Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      Monitor node sync status regularly
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      Keep sufficient ERG for transaction fees
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      Test small transactions before large withdrawals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <div className="mb-12">
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3">Community Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <Network className="w-4 h-4 text-orange-400" />
                      Ergo Discord mining channel
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <Users className="w-4 h-4 text-orange-400" />
                      r/ergonauts subreddit
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <Terminal className="w-4 h-4 text-orange-400" />
                      Ergo node documentation
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3">Monitoring Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                      Network statistics dashboards
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <BarChart3 className="w-4 h-4 text-orange-400" />
                      Mining profitability calculators
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-orange-400" />
                      Block explorer for tracking rewards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/Docs/miners/mining-guides/pools"
          className="group bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-6 hover:border-blue-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-blue-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Pool Mining</h3>
          <p className="text-gray-400 text-sm">Join a pool for more consistent rewards</p>
        </Link>

        <Link
          href="/Docs/miners/mining-guides/host-a-pool"
          className="group bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-xl p-6 hover:border-green-600/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Server className="w-8 h-8 text-green-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Host a Pool</h3>
          <p className="text-gray-400 text-sm">Learn how to set up your own mining pool</p>
        </Link>
      </div>
    </>
  );
} 