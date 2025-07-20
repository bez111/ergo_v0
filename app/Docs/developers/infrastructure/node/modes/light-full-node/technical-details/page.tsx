"use client";

import { 
  ArrowLeft,
  BookOpen,
  Code,
  Database,
  FileText,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Zap,
  Settings,
  HardDrive,
  Network,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function LightFullNodeTechnicalDetailsPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
          Light Full Node Technical Workflow
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          The light full node operates by checking all the full blocks or a specified suffix of the full blockchain, depending on the settings. It starts from a trusted pre-genesis digest or a digest within the blockchain.
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-6 mb-12">
        <Link 
          href="/Docs/developers/infrastructure/node/modes/light-full-node"
          className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 mr-2" />
          Back to Light Full-Node
        </Link>
        <Link 
          href="/Docs/developers/infrastructure/node/modes"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          All Node Modes
        </Link>
        <a 
          href="https://eprint.iacr.org/2016/994"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          Research Paper
        </a>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Overview Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Database className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Overview</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              The light full node operates by checking all the full blocks or a specified suffix of the full blockchain, 
              depending on the settings. It starts from a trusted pre-genesis digest or a digest within the blockchain.
            </p>
            <p className="text-lg leading-relaxed">
              To obtain a new digest from an old one, the light full node utilizes AD-transformations (authenticated 
              dictionary transformations) block sections that contain batch-proof for UTXO transformations. However, 
              it only stores a single digest and does not retain any transaction data.
            </p>
            <p className="text-lg leading-relaxed">
              For more detailed information, refer to{" "}
              <a 
                href="https://eprint.iacr.org/2016/994"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                this paper
              </a>.
            </p>
          </div>
        </div>

        {/* Additional Settings Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-8">
            <Settings className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Additional Settings</h2>
          </div>
          <p className="text-gray-300 mb-6 text-lg">
            The light full node supports the following additional settings:
          </p>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  <code className="text-blue-400">depth</code>
                </h3>
                <button
                  onClick={() => copyToClipboard('depth')}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                From which block in the past to check transactions (if 0, then go from genesis).
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  <code className="text-blue-400">additional-checks</code>
                </h3>
                <button
                  onClick={() => copyToClipboard('additional-checks')}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Light-full node trusts the previous digest and checks current digest validity by using 
                the previous one as well as AD-transformations.
              </p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  <code className="text-blue-400">additional-depth</code>
                </h3>
                <button
                  onClick={() => copyToClipboard('additional-depth')}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Depth to start additional checks from.
              </p>
            </div>
          </div>
        </div>

        {/* Workflow Steps Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-8">
            <Zap className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Workflow Steps</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Step 1: Send ErgoSyncInfo</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed ml-8">
                Send <code className="text-blue-400">ErgoSyncInfo</code> message to connected peers.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Step 2: Receive INV Response</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed ml-8">
                Get a response with an <code className="text-blue-400">INV</code> message containing the IDs 
                of blocks that are better than the current best block.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Step 3: Request Headers</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed ml-8">
                Request headers for all the IDs received in step 2.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Step 4: Header Validation</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4 ml-8">
                Upon receiving a header, perform the following checks:
              </p>
              <div className="bg-neutral-900/50 border border-neutral-600 rounded-lg p-6 ml-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-400">Java Code</span>
                  <button
                    onClick={() => copyToClipboard(`if (History.apply(header).isSuccess) {
    if (localScore != networkScore) {
        GOTO 1
    } else {
        GOTO 5
    }
} else {
    blacklist peer
}`)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
{`if (History.apply(header).isSuccess) {
    if (localScore != networkScore) {
        GOTO 1
    } else {
        GOTO 5
    }
} else {
    blacklist peer
}`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Step 5: Request Block Data</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed ml-8">
                Request block data for all the headers received in step 4.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Step 6: Block Validation</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4 ml-8">
                Upon receiving a block, perform the following checks:
              </p>
              <div className="bg-neutral-900/50 border border-neutral-600 rounded-lg p-6 ml-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-400">Java Code</span>
                  <button
                    onClick={() => copyToClipboard(`if (History.apply(block).isSuccess) {
    if (localScore != networkScore) {
        GOTO 1
    } else {
        GOTO 7
    }
} else {
    blacklist peer
}`)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
{`if (History.apply(block).isSuccess) {
    if (localScore != networkScore) {
        GOTO 1
    } else {
        GOTO 7
    }
} else {
    blacklist peer
}`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Step 7: Sync Complete</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed ml-8">
                The light full node is now synchronized with the network.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Additional Resources</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Research Paper</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                For detailed technical information about AD-transformations and light node implementation.
              </p>
              <a 
                href="https://eprint.iacr.org/2016/994"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                View Research Paper
              </a>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Network className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Related Node Modes</h3>
              </div>
              <div className="space-y-2">
                <Link 
                  href="/Docs/developers/infrastructure/node/modes/archival-node"
                  className="block text-blue-400 hover:text-blue-300 text-sm"
                >
                  • Archival Full-Node Mode
                </Link>
                <Link 
                  href="/Docs/developers/infrastructure/node/modes/pruned-full-node"
                  className="block text-blue-400 hover:text-blue-300 text-sm"
                >
                  • Pruned Full-Node Mode
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 