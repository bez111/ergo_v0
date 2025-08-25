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
  HelpCircle,
  Calculator,
  Key,
  Wallet,
  Info,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

// Component Code
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

// Mining Calculator Component
const MiningCalculator = () => {
  const [myHashrate, setMyHashrate] = React.useState("160");
  const [power, setPower] = React.useState("130");
  const [cost, setCost] = React.useState("0.10");
  const [netHashrate, setNetHashrate] = React.useState("170");
  const [blockReward, setBlockReward] = React.useState("48");
  const [result, setResult] = React.useState("0");

  const calculate = React.useCallback(() => {
    const myHashrateNum = parseFloat(myHashrate) || 0;
    const powerNum = parseFloat(power) || 0;
    const costNum = parseFloat(cost) || 0;
    const netHashrateNum = (parseFloat(netHashrate) || 0) * 1000 * 1000;
    const blockRewardNum = parseFloat(blockReward) || 0;
    
    const kwh = (powerNum * 24) / 1000;
    const dailyReward = 720 * blockRewardNum;
    const breakEven = kwh * costNum;
    const rewardPerMh = dailyReward / netHashrateNum;
    const targetPrice = breakEven / (rewardPerMh * myHashrateNum);
    
    setResult((Math.round(targetPrice * 100) / 100).toFixed(2));
  }, [myHashrate, power, cost, netHashrate, blockReward]);

  React.useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-indigo-400" /> Mining Profitability Calculator
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Calculate your breakeven ERG price based on your mining setup and electricity costs.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              My Hashrate (MH/s)
            </label>
            <input
              type="text"
              value={myHashrate}
              onChange={(e) => setMyHashrate(e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
              placeholder="160"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Power Consumption (W)
            </label>
            <input
              type="text"
              value={power}
              onChange={(e) => setPower(e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
              placeholder="130"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Power Cost (USD/kWh)
            </label>
            <input
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
              placeholder="0.10"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Network Hashrate (TH/s)
            </label>
            <input
              type="text"
              value={netHashrate}
              onChange={(e) => setNetHashrate(e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
              placeholder="170"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Block Reward (ERG)
            </label>
            <input
              type="text"
              value={blockReward}
              onChange={(e) => setBlockReward(e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
              placeholder="48"
            />
          </div>
          
          <div className="mt-6 p-4 bg-indigo-500/20 border border-indigo-400/30 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">Minimum ERG Price for Breakeven:</div>
            <div className="text-3xl font-bold text-indigo-300">
              ${result}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Info className="w-3 h-3" />
        <span>Calculator assumes 720 blocks per day average</span>
      </div>
    </div>
  );
};

export default function SoloMiningPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Solo Mining
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Solo mining is a method where you mine Ergo independently, without joining a mining pool. This approach can be more rewarding if you have significant mining power, but it also comes with higher variance in rewards.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://miningpoolstats.stream/ergo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <BarChart3 className="w-5 h-5 mr-2" /> Pool Stats
          </a>
          <Link
            href="/docs/miners/mining-guides"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Mining Guides
          </Link>
        </div>
      </div>

      {/* Decision Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-400" /> Before You Start
        </h2>
        <p className="text-gray-300 mb-6">
          Before you decide to solo mine, you might want to use the calculator above to evaluate if solo mining is the right choice for you. If you decide to proceed with solo mining, you have two options:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Option 1: Use a Mining Pool's Solo Port
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Some mining pools offer a solo port for miners who prefer to work independently. You can find a list of such pools on Mining Pool Stats.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Easier setup</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm mt-2">
              <CheckCircle className="w-4 h-4" />
              <span>No node management</span>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-purple-400" /> Option 2: Host Your Own Pool
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              If you prefer to have complete control over your mining process, you can set up and host your own mining pool.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Complete control</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm mt-2">
              <CheckCircle className="w-4 h-4" />
              <span>No third parties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mining Calculator */}
      <MiningCalculator />

      {/* EIP-27 Warning */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" /> Remember EIP-27!
        </h3>
        <p className="text-gray-300">
          To be able to spend any ERG mined via the reference client, you will need to include the EIP27 rules in your <code className="bg-black/50 px-2 py-1 rounded text-green-400">ergo.conf</code>. See the configuration section below for more information.
        </p>
      </div>

      {/* Solo Node Configuration */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-orange-400" /> Solo Node Configuration
        </h2>
        <p className="text-gray-300 mb-6">
          To be able to spend any ERG mined this way, you will need to include the EIP27 rules in your <code className="bg-black/50 px-2 py-1 rounded text-green-400">ergo.conf</code> file which you run with the <code className="bg-black/50 px-2 py-1 rounded text-green-400">.jar</code> as such:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Run Command</h3>
            <CodeBlock language="bash">
{`java -Xmx4g -jar ergo-5.0.4.jar --mainnet -c ergo.conf`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">ergo.conf Configuration</h3>
            <CodeBlock language="bash">
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
            </CodeBlock>
          </div>

          <p className="text-gray-400 text-sm">
            You'll then either want to use the <Link href="/docs/miners/mining-guides/solo-mining/stratum" className="text-blue-400 hover:text-blue-300">Ergo Stratum</Link> mining server or <Link href="/docs/miners/mining-guides/solo-mining/miningcore" className="text-purple-400 hover:text-purple-300">Mining Core</Link>.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Resources
        </h2>
        <ul className="space-y-3">
          <li>
            <a href="https://www.youtube.com/watch?v=_1M8dGpfKjU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4 text-blue-400" />
              Ergo Node + Stratum Server mining tutorial
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ubov4oweA20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4 text-blue-400" />
              Youtube: Mine Ergo from your own Node
            </a>
          </li>
          <li>
            <a href="https://www.ergoforum.org/t/q-a-on-mining-for-pool-operators-and-solo-miners/587" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4 text-blue-400" />
              ErgoForum: Q&A on mining (for pool operators and solo miner)
            </a>
          </li>
        </ul>
      </div>

      {/* Spending Mining Rewards */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wallet className="w-6 h-6 text-green-400" /> Spending Mining Rewards
        </h2>
        
        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-300 mb-1">Keep in mind</h3>
              <p className="text-yellow-100 text-sm">
                Please note this page contains information that pre-dates EIP-27.
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-6">
          This section guides miners on how to withdraw funds they have mined. Many users have launched both a node and a miner, with the miner's <code className="bg-black/50 px-2 py-1 rounded text-green-400">pubkeyHex</code> embedded in the node's configuration.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Key className="w-5 h-5 text-green-400" /> Keys Overview
            </h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">1. Base16-encoded raw public key</h4>
                <p>Mining software and mining support in the node use this format, represented as a serialized point on an elliptic curve.</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">2. Pay-To-Public-Key (P2PK) addresses</h4>
                <p>These addresses are displayed in the node wallet and start with "9." They include the elliptic curve point, network prefix and a checksum.</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">3. Mining/rewardAddress API method</h4>
                <p>Displays a special encoded script used to pay a miner, such as <code className="bg-black/50 px-2 py-1 rounded text-green-400">88dhgzEuTXaSfKEbxfa6vghvEGdBH39sn9h7As2Y2Z6SGd8bKXCXmRLY5JtU4g4RYBP4WcZWb3JwjXDK</code></p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Viewing Your Balance and Withdrawing Funds</h3>
            <p className="text-gray-400 text-sm mb-4">
              After initializing your wallet, you may not see the mined coins if the initialization occurred after the corresponding blocks were mined. The node does not scan blocks retrospectively; it only scans new blocks after initialization.
            </p>
          </div>
        </div>
      </div>

      {/* Step by Step Guide */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-cyan-400" /> Step-by-Step Withdrawal Guide
        </h2>

        <div className="space-y-6">
          <div className="border-l-4 border-cyan-400 pl-4">
            <h3 className="text-lg font-semibold mb-2">Step 1: Clear Node State (if stopping the node)</h3>
            <p className="text-gray-400 text-sm mb-3">
              If you intend to stop your node, you must clear its state. Stop the node and remove all contents of the <code className="bg-black/50 px-2 py-1 rounded text-green-400">.ergo</code> directory.
            </p>
          </div>

          <div className="border-l-4 border-cyan-400 pl-4">
            <h3 className="text-lg font-semibold mb-2">Step 2: Restoring a Local Wallet</h3>
            <p className="text-gray-400 text-sm mb-3">
              Retrieve the mnemonic sentence from your Autolykos miner's <code className="bg-black/50 px-2 py-1 rounded text-green-400">config.json</code>. Send a POST request to restore your wallet:
            </p>
            <CodeBlock language="json">
{`{
  "pass": "your_wallet_pass",
  "mnemonic": "mnemonic_sentence_from_your_miner",
  "mnemonicPass": "mnemonic_pass_if_set"
}`}
            </CodeBlock>
            <p className="text-yellow-400 text-sm mt-3">
              <strong>ATTENTION:</strong> Restore the wallet before your node starts downloading full blocks to allow scanning from genesis.
            </p>
          </div>

          <div className="border-l-4 border-cyan-400 pl-4">
            <h3 className="text-lg font-semibold mb-2">Step 3: Checking Your Balance</h3>
            <p className="text-gray-400 text-sm mb-3">
              Once synchronized, check the <code className="bg-black/50 px-2 py-1 rounded text-green-400">/wallet/balances</code> API method:
            </p>
            <CodeBlock language="json">
{`{
  "height": 3560,
  "balance": 67500000000,
  "assets": {}
}`}
            </CodeBlock>
          </div>

          <div className="border-l-4 border-cyan-400 pl-4">
            <h3 className="text-lg font-semibold mb-2">Step 4: Making a Transaction</h3>
            <p className="text-gray-400 text-sm mb-3">
              To withdraw rewards, create a payment transaction using <code className="bg-black/50 px-2 py-1 rounded text-green-400">/wallet/payment/send</code>:
            </p>
            <CodeBlock language="json">
{`{
  "address": "your_address",
  "value": 10000000
}`}
            </CodeBlock>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-purple-400" /> Solo Mining FAQ
        </h2>
        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">Why Aren't My Funds Visible in My Wallet?</h3>
            <p className="text-gray-400">
              Mining rewards are initially linked to a time-and-pubkey lock script, not your standard P2PK address. You need to transfer all funds to your own address in the node wallet to make them visible.
            </p>
          </div>
          
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">Why Do My Rewards Go to a Different Address?</h3>
            <p className="text-gray-400">
              Mining rewards are directed to UTXOs with specific scripts that lock the rewards to the miner's public keys for 720 blocks. After 720 confirmations, the wallet will display the mined rewards.
            </p>
          </div>
          
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">How Do I Verify If a Block Is Mined by Me?</h3>
            <p className="text-gray-400 mb-3">
              You can obtain your mining rewards address with the <code className="bg-black/50 px-2 py-1 rounded text-green-400">/mining/rewardAddress</code> API call:
            </p>
            <CodeBlock language="json">
{`{
  "rewardAddress": "mPdcmQkPPvyMGoCDNg9oiasLyPpKJhHjgjpt89uJZE1oN9PJ9fKbdKDcfomtWoy3d1E7RFLTUbXbt1AS"
}`}
            </CodeBlock>
            <p className="text-gray-400 text-sm mt-3">
              You can then verify your rewards on the <a href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Ergo Explorer</a>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">​/mining​/solution API Endpoint</h3>
            <p className="text-gray-400 mb-3">The mining solution endpoint returns:</p>
            <CodeBlock language="json">
{`{
  "pk": "0350e25cee8562697d55275c96bb01b34228f9bd68fd9933f2a25ff195526864f5",
  "w": "0366ea253123dfdb8d6d9ca2cb9ea98629e8f34015b1e4ba942b1d88badfcc6a12",
  "n": "0000000000000000",
  "d": 987654321
}`}
            </CodeBlock>
            <ul className="text-gray-400 text-sm mt-3 space-y-1">
              <li>• <strong>pk</strong> is the public key in binary format</li>
              <li>• <strong>n</strong> is the nonce</li>
              <li>• <strong>w</strong> and <strong>d</strong> are no longer used in Autolykos2 and are constant</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/docs/miners/mining-guides/solo-mining/stratum"
          className="group bg-neutral-900/50 border border-neutral-700 hover:border-cyan-600/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Ergo Stratum</h3>
          <p className="text-gray-400 text-sm">Official Ergo stratum server implementation</p>
        </Link>

        <Link
          href="/docs/miners/mining-guides/solo-mining/miningcore"
          className="group bg-neutral-900/50 border border-neutral-700 hover:border-purple-600/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Database className="w-8 h-8 text-purple-400" />
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Mining Core</h3>
          <p className="text-gray-400 text-sm">Multi-currency mining pool/stratum software</p>
        </Link>
      </div>
    </>
  );
} 