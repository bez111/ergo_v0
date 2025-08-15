"use client";

import React from 'react';
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
  Check,
  BarChart3,
  GitBranch,
  Database,
  Lock,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

// Стандартный компонент копирования кода
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

const CodeBlock = ({ children, language = "bash" }: { children: string; language?: string }) => {
  return (
    <div className="relative group">
      <CopyButton text={children} />
      <pre className="bg-black/50 border border-gray-700 rounded-lg p-4 overflow-x-auto">
        <code className="text-green-400 text-sm">{children}</code>
      </pre>
    </div>
  );
};

export default function SoloMiningPage() {
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
            className="inline-flex items-center px-6 py-3 bg-purple-500 rounded-xl font-semibold text-white hover:bg-purple-600 transition-transform hover:scale-105"
          >
            <Users className="w-5 h-5 mr-2" /> Pool Mining
          </Link>
          <Link
            href="/Docs/miners/mining-guides/software"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Download className="w-5 h-5 mr-2" /> Mining Software
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-purple-400" /> What is Solo Mining?
        </h2>
        <p className="text-gray-300 mb-4">
          Solo mining means operating your own Ergo node and mining directly without joining a pool. 
          When you find a block, you receive the full reward (~67.5 ERG) plus transaction fees, 
          but blocks may be infrequent depending on your hashrate.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Best For</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Large mining operations (50+ GH/s)</li>
              <li>• Technical users comfortable with nodes</li>
              <li>• Long-term network supporters</li>
              <li>• Privacy-conscious miners</li>
            </ul>
          </div>
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4">
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

      {/* Advantages & Requirements */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Advantages
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Full Control</div>
                <div className="text-sm text-gray-400">Complete control over mining operations and node configuration</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">No Pool Fees</div>
                <div className="text-sm text-gray-400">Keep 100% of block rewards without pool commission</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Network className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Network Support</div>
                <div className="text-sm text-gray-400">Directly contribute to Ergo network decentralization</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Privacy</div>
                <div className="text-sm text-gray-400">No need to share hashrate data with third parties</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" /> Requirements
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-red-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">High Hashrate</div>
                <div className="text-sm text-gray-400">Typically need 50+ GH/s for reasonable block finding frequency</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Settings className="w-5 h-5 text-red-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Technical Knowledge</div>
                <div className="text-sm text-gray-400">Understanding of node operation and troubleshooting</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Server className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Stable Infrastructure</div>
                <div className="text-sm text-gray-400">Reliable internet, power, and hardware setup</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <HardDrive className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Storage Space</div>
                <div className="text-sm text-gray-400">At least 50GB for blockchain data and growing</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Node Configuration Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-orange-400" /> Node Configuration
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">1. Download Ergo Node</h3>
            <p className="text-gray-400 text-sm mb-3">Download the latest Ergo reference client</p>
            <CodeBlock language="bash">
{`wget https://github.com/ergoplatform/ergo/releases/latest/download/ergo-*.jar`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. Create Configuration</h3>
            <p className="text-gray-400 text-sm mb-3">Configure your node for mining operations</p>
            <CodeBlock language="hocon">
{`ergo {
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
}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. Start Node</h3>
            <p className="text-gray-400 text-sm mb-3">Launch your Ergo node with mining enabled</p>
            <CodeBlock language="bash">
{`java -jar ergo-*.jar --mainnet -c application.conf`}
            </CodeBlock>
          </div>
        </div>
      </div>

      {/* Stratum Server Options */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-cyan-400" /> Stratum Server Options
        </h2>
        <p className="text-gray-300 mb-6">
          Choose a stratum server to connect your mining hardware to your Ergo node:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/Docs/miners/mining-guides/solo-mining/stratum"
            className="group bg-neutral-900/50 border border-neutral-700 hover:border-cyan-600/50 rounded-lg p-6 transition-all"
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
            className="group bg-neutral-900/50 border border-neutral-700 hover:border-purple-600/50 rounded-lg p-6 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <Database className="w-8 h-8 text-purple-400" />
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

      {/* Expected Block Times */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-400" /> Expected Block Times
        </h2>
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

      {/* Withdrawing Rewards */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-400" /> Withdrawing Your Mining Rewards
        </h2>
        <p className="text-gray-300 mb-6">
          When you successfully mine a block, the rewards (currently ~67.5 ERG plus fees) are automatically 
          added to your node's wallet. Here's how to access and withdraw these funds:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="font-semibold text-white mb-1">Access Wallet API</h3>
                <p className="text-gray-400 text-sm">Connect to your node's wallet API on port 9053</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="font-semibold text-white mb-1">Unlock Wallet</h3>
                <p className="text-gray-400 text-sm">Use your wallet password to unlock for transactions</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="font-semibold text-white mb-1">Create Transaction</h3>
                <p className="text-gray-400 text-sm">Send mined ERG to your preferred address</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="font-semibold text-white mb-1">Broadcast</h3>
                <p className="text-gray-400 text-sm">Submit transaction to the network</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
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

      {/* Wallet Management */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-green-400" /> Security Measures
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Backup your wallet seed phrase securely
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Use strong passwords for wallet encryption
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Regular wallet backups to multiple locations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Consider hardware wallet for large amounts
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" /> Operational Tips
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Monitor node sync status regularly
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Keep sufficient ERG for transaction fees
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Test small transactions before large withdrawals
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Maintain node uptime for optimal performance
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-purple-400" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">How long until I find a block?</h3>
            <p className="text-gray-400">
              With current network difficulty, you need significant hashrate (50+ GH/s) to find blocks regularly. 
              Smaller operations might wait weeks or months between blocks.
            </p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">Can I use a mining pool's solo port?</h3>
            <p className="text-gray-400">
              Yes, many pools offer solo mining ports that handle the technical setup while you keep full block rewards. 
              This is easier than running your own node.
            </p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">What hardware do I need?</h3>
            <p className="text-gray-400">
              A modern computer with at least 8GB RAM, 50GB+ storage, and stable internet. 
              The mining hardware connects separately to your node.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Is solo mining profitable?</h3>
            <p className="text-gray-400">
              Solo mining is generally only profitable for large operations due to variance in block finding. 
              Pool mining provides more consistent returns for smaller miners.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-400" /> Community Support
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Network className="w-4 h-4 text-orange-400" />
              Ergo Discord mining channel
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-400" />
              r/ergonauts subreddit
            </li>
            <li className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-orange-400" />
              Ergo node documentation
            </li>
            <li className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-orange-400" />
              GitHub discussions
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" /> Monitoring Tools
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              Network statistics dashboards
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Mining profitability calculators
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              Block explorer for tracking rewards
            </li>
            <li className="flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              Node monitoring solutions
            </li>
          </ul>
        </div>
      </div>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/Docs/miners/mining-guides/pools"
          className="group bg-neutral-900/50 border border-neutral-700 hover:border-blue-600/50 rounded-xl p-6 transition-all"
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
          className="group bg-neutral-900/50 border border-neutral-700 hover:border-green-600/50 rounded-xl p-6 transition-all"
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