"use client";

export default function NodeConfigPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Node Configuration</h1>
        <p className="text-gray-300 text-lg">
          Core node configuration including state type, mining settings, transaction verification, and memory pool management.
        </p>
      </div>
      
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Node Configuration</h2>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">node{}</code> configuration section specifies general settings for the node view holder regime. It includes parameters for state type, extra index, block and transaction verification, mining configuration, memory pool management, and more.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">State Type</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">stateType = "utxo"</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">stateType</code> setting sets the type of state the node maintains. Possible options are <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">utxo</code>, where the node keeps a full utxo set allowing it to validate arbitrary blocks and generate ADProofs, and <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">digest</code>, where the node only keeps the state root hash and validates transactions via ADProofs.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Extra Index</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">extraIndex = false</code><br />
          <code className="text-orange-400">extraCacheSize = 500</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">extraIndex</code> setting, if set to true, allows the node to store all transactions, boxes, and addresses in an index. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">extraCacheSize</code> sets the number of recently used extra indexes kept in memory.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Verify Transactions</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">verifyTransactions = true</code>
        </div>
        <p className="text-gray-300 mb-6">
          If <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">verifyTransactions</code> is set to true, the node will download block transactions and verify them.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Blocks to Keep</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">blocksToKeep = -1</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">blocksToKeep</code> setting defines the number of last blocks to keep with transactions and ADproofs. Only the header will be stored for other blocks.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">PoPoW Bootstrap</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">PoPoWBootstrap = false</code>
        </div>
        <p className="text-gray-300 mb-6">
          If <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">PoPoWBootstrap</code> is set to true, the node will download the Proof of Proof of Work (PoPoW) on node bootstrap.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Mining</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">mining = false</code><br />
          <code className="text-orange-400">maxTransactionCost = 1000000</code><br />
          <code className="text-orange-400">maxTransactionSize = 98304 // 96 kb</code><br />
          <code className="text-orange-400">useExternalMiner = true</code><br />
          <code className="text-orange-400">internalMinersCount = 1</code><br />
          <code className="text-orange-400">internalMinerPollingInterval = 500ms</code><br />
          <code className="text-orange-400">miningPubKeyHex = null</code>
        </div>
        <p className="text-gray-300 mb-6">
          These settings determine if you are mining through the node, the maximum transaction cost and size to propagate, whether to use an external miner, the number of internal miner threads to spawn, how frequently to ask for new block candidates, and a dedicated public key for mining rewards.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Offline Generation</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">offlineGeneration = false</code>
        </div>
        <p className="text-gray-300 mb-6">
          If <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">offlineGeneration</code> is set to true, the node will generate blocks while disconnected from the mainnet.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Keep Versions</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">keepVersions = 200</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">keepVersions</code> setting specifies the number of state snapshots diffs to keep, which defines the maximum rollback depth.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Acceptable Chain Update Delay</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">acceptableChainUpdateDelay = 30m</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">acceptableChainUpdateDelay</code> setting is the acceptable difference between the current time and the timestamp of the latest chain update or best block. It helps to discover syncing issues.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Memory Pool Configuration</h3>
        <p className="text-gray-300 mb-6">
          The mempool settings define the maximum number of unconfirmed transactions the node will accept, the interval for re-checking a transaction in the memory pool, the mempool transaction sorting scheme, the number of transactions to rebroadcast at each epoch, and the minimum fee amount for transactions.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Blacklisted Transactions</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">blacklistedTransactions = []</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">blacklistedTransactions</code> setting is a list of hex-encoded identifiers of transactions banned from the memory pool.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Header Chain Diff</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">headerChainDiff = 100</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">headerChainDiff</code> setting defines the number of blocks the node considers to be "close" in time when syncing the header chain.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">Checkpoint</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">checkpoint = null</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">checkpoint</code> setting allows you to specify an optional individual checkpoint to skip script validation for performance and memory usage improvements during initial bootstrapping.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">ADProofs Suffix Length</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">adProofsSuffixLength = 114688 // 112k</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">adProofsSuffixLength</code> setting specifies the length of the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ADProofs</code> suffix dumped during bootstrapping.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">UTXO Bootstrap</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">utxoBootstrap = false</code><br />
          <code className="text-orange-400">storingUtxoSnapshots = 2</code><br />
          <code className="text-orange-400">p2pUtxoSnapshots = 2</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">utxoBootstrap</code> setting, if set to true, allows the node to download and apply UTXO set snapshot and full-blocks after that. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">storingUtxoSnapshots</code> sets the number of UTXO set snapshots to store, 0 means that they are not stored at all. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">p2pUtxoSnapshots</code> sets the number of UTXO set snapshots for a height with the same id we need to find in the p2p network in order to start downloading it.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">NiPoPoW Bootstrap</h3>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
          <code className="text-orange-400">nipopowBootstrap = false</code><br />
          <code className="text-orange-400">p2pNipopows = 2</code><br />
          <code className="text-orange-400">nipopowSuffix = 10</code>
        </div>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">nipopowBootstrap</code> setting, if set to true, allows the node to download the Proof of Proof of Work (NiPoPoW) on node bootstrap. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">p2pNipopows</code> sets the number of different proofs we are downloading from other peers and comparing with each other, before choosing the best one. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">nipopowSuffix</code> sets the minimal suffix size for NiPoPoW proof.
        </p>
      </div>
    </div>
  );
} 