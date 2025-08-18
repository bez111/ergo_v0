"use client";

import React from "react";
import { 
  ArrowLeft, 
  Network, 
  Server, 
  Code, 
  Activity, 
  Settings, 
  Youtube, 
  ExternalLink, 
  AlertTriangle, 
  HelpCircle,
  Copy,
  Check,
  Terminal,
  GitBranch,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

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

const CodeBlock = ({ children, language = "javascript" }: { children: string; language?: string }) => {
  return (
    <div className="relative group">
      <CopyButton text={children} />
      <pre className="bg-black/50 border border-gray-700 rounded-lg p-4 overflow-x-auto">
        <code className="text-green-400 text-sm">{children}</code>
      </pre>
    </div>
  );
};

export default function StratumPage() {
  return (
    <>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/docs/miners/mining-guides/solo-mining"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Solo Mining</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          ErgoStratum Server
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Stratum mining server for Ergo. Complete setup guide for hosting your own mining pool infrastructure.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/mhssamadani/ErgoStratumServer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-white hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <GitBranch className="w-5 h-5 mr-2" /> View on GitHub
          </a>
          <Link
            href="/docs/miners/mining-guides/solo-mining/miningcore"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Server className="w-5 h-5 mr-2" /> Mining Core Alternative
          </Link>
        </div>
      </div>

      {/* Setup Steps */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-blue-400" /> Setup Steps
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h3 className="font-semibold text-white mb-2">Setup Ergo Node</h3>
              <p className="text-gray-400">
                Setup a <Link href="/docs/miners/mining-guides/solo-mining" className="text-blue-400 hover:text-blue-300">
                  Ergo Node for solo mining
                </Link>, making sure to include the EIP27 rules.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h3 className="font-semibold text-white mb-2">ErgoStratumServer</h3>
              <p className="text-gray-400">
                Setup <a href="https://github.com/mhssamadani/ErgoStratumServer" target="_blank" rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                  ErgoStratumServer <ExternalLink className="w-3 h-3" />
                </a> (the pool server)
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600/50 rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h3 className="font-semibold text-white mb-2">Optional: NOMP Portal</h3>
              <p className="text-gray-400">
                Point <a href="https://github.com/btclinux/ergo-nomp" target="_blank" rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                  ergo-nomp <ExternalLink className="w-3 h-3" />
                </a>, a node open mining portal configured for ergo to both.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-cyan-400/10 border border-cyan-400/20 rounded-lg">
          <p className="text-cyan-300 text-sm">
            <strong>Note:</strong> For Miner Connection and Work Management, <a href="https://github.com/mhssamadani/ErgoStratumProxy" 
              target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1">
              ErgoStratumProxy <ExternalLink className="w-3 h-3" />
            </a> is also available and is used when you want to mine with open source miner (client side app).
          </p>
        </div>
      </div>

      {/* Configuration Files */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Configuration
        </h2>
        
        {/* Daemon Configuration */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Daemon Configuration (start.js)</h3>
          <p className="text-gray-400 text-sm mb-3">Configure your node connection in the daemons section:</p>
          <CodeBlock language="javascript">
{`"daemons": [
    {   //Main daemon instance
        "host": "NODE IP ADDRESS",
        "port": 9053,
        "user": "",
        "password": ""
    }
],`}
          </CodeBlock>
        </div>

        {/* Port Configuration */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Port Configuration (start.js)</h3>
          <p className="text-gray-400 text-sm mb-3">
            Make sure to update <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">varDiff</code> depending on your hardware.
          </p>
          <CodeBlock language="javascript">
{`/* Each pool can have as many ports for your miners to connect to as you wish. Each port can
   be configured to use its own pool difficulty and variable difficulty settings. varDiff is
   optional and will only be used for the ports you configure it for. */
"ports": {
    "3032": { //A port for your miners to connect to
        "diff": 240000, //the pool difficulty for this port
        /*
        * use this parameter to multiply difficulty to b for each request.
        * some miner like NBMiner does not support difficulty method of stratum.
        * if you want your pool work with these miners set this parameters.
        */
        "multiplyDifficulty": true,
        /* Variable difficulty is a feature that will automatically adjust difficulty for
           individual miners based on their hashrate in order to lower networking overhead */
        "varDiff": {
            "minDiff": 240000, //Minimum difficulty
            "maxDiff": 16431986528747520, //Network difficulty will be used if it is lower than this
            "targetTime": 15, //Try to get 1 share per this many seconds
            "retargetTime": 10, //Check to see if we should retarget every this many seconds
            "variancePercent": 30, //Allow time to very this % from target without retargeting
        }
    },
    "3256": { //Another port for your miners to connect to, this port does not use varDiff
        "diff": 240000 //The pool difficulty
    }
}`}
          </CodeBlock>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-yellow-400" /> Troubleshooting
        </h2>
        
        <div className="space-y-4">
          {/* Common Issues */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-300 mb-2">Common Issues</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Have you tried turning it off and on again?</li>
                  <li>• Is your <Link href="/docs/miners/mining-guides/solo-mining" className="text-blue-400 hover:text-blue-300">ergo.conf</Link> configured correctly?</li>
                  <li>• You can rescan from swagger</li>
                  <li>• The Node needs to be fully synchronized. Make sure your wallet is also unlocked.</li>
                  <li>• Try adjusting difficulty in start.js if you're getting <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">No new blocks</code> debug errors.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Git Configuration Fix */}
          <div>
            <h3 className="font-semibold text-white mb-2">Git Configuration Fix</h3>
            <p className="text-gray-400 text-sm mb-3">
              If you get <code className="bg-neutral-800 px-2 py-1 rounded text-red-400">fatal:unable to connect to github.com</code>, run:
            </p>
            <CodeBlock language="bash">
{`git config --global url.https://github.com/.insteadOf git://github.com/`}
            </CodeBlock>
          </div>
          
          {/* Community Support */}
          <div className="p-4 bg-purple-400/10 border border-purple-400/20 rounded-lg">
            <h3 className="font-semibold text-purple-300 mb-2">Community Support</h3>
            <p className="text-gray-400">
              Join the <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300">🃏│solo-mining</a> channel on our Discord for community support.
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* YouTube Videos */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-400" /> YouTube Tutorials
          </h3>
          <div className="space-y-3">
            <a 
              href="https://www.youtube.com/watch?v=_1M8dGpfKjU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 bg-black/30 border border-gray-700 rounded-lg hover:border-red-500/50 transition-all group"
            >
              <h4 className="text-white group-hover:text-red-400 transition-colors mb-1">Ergo Node + Stratum Server Tutorial</h4>
              <p className="text-gray-400 text-sm">Complete setup guide for Ergo node and stratum server</p>
            </a>
            
            <a 
              href="https://www.youtube.com/watch?v=ubov4oweA20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 bg-black/30 border border-gray-700 rounded-lg hover:border-red-500/50 transition-all group"
            >
              <h4 className="text-white group-hover:text-red-400 transition-colors mb-1">Mine Ergo from your own Node</h4>
              <p className="text-gray-400 text-sm">Learn how to mine directly from your Ergo node</p>
            </a>
          </div>
        </div>
        
        {/* Additional Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" /> Additional Resources
          </h3>
          <div className="space-y-3">
            <a 
              href="https://github.com/Satergo/stratum4ergo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 bg-black/30 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-all group"
            >
              <h4 className="text-white group-hover:text-blue-400 transition-colors mb-1 flex items-center gap-2">
                stratum4ergo <ExternalLink className="w-3 h-3" />
              </h4>
              <p className="text-gray-400 text-sm">Java library for creating Stratum mining pool servers for Ergo</p>
            </a>
            
            <a 
              href="https://www.ergoforum.org/t/q-a-on-mining-for-pool-operators-and-solo-miners/587" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 bg-black/30 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-all group"
            >
              <h4 className="text-white group-hover:text-blue-400 transition-colors mb-1 flex items-center gap-2">
                ErgoForum: Q&A on Mining <ExternalLink className="w-3 h-3" />
              </h4>
              <p className="text-gray-400 text-sm">Community Q&A for pool operators and solo miners</p>
            </a>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/docs/miners/mining-guides/solo-mining/miningcore"
          className="group bg-neutral-900/50 border border-neutral-700 hover:border-purple-600/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Server className="w-8 h-8 text-purple-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Mining Core</h3>
          <p className="text-gray-400 text-sm">Alternative multi-currency pool software</p>
        </Link>

        <Link
          href="/docs/miners/mining-guides/host-a-pool"
          className="group bg-neutral-900/50 border border-neutral-700 hover:border-green-600/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Network className="w-8 h-8 text-green-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Host a Pool</h3>
          <p className="text-gray-400 text-sm">Learn how to set up your own mining pool</p>
        </Link>
      </div>
    </>
  );
} 