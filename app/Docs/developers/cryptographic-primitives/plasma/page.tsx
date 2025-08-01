import React from "react";
import { ArrowLeft, Shield, Database, Code, BookOpen, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function PlasmaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-orange-400" />
        Plasma
      </h1>

      <div className="space-y-8">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <p className="text-gray-300 mb-6">
            <a href="https://github.com/GetBlok-io/GetBlok-Plasma" className="text-blue-400 hover:text-blue-300 underline">GetBlok Plasma</a> is a library on top of Ergo <a href="/Docs/developers/appkit" className="text-blue-400 hover:text-blue-300 underline">Appkit</a> that provides an abstraction layer to simplify the process of integrating AVL Trees (AKA Plasma) into off-chain code. The goal is to give developers an easy way to use this Layer-2 scaling solution in contracts, off-chain code, and distributed systems managing the Plasma itself. GetBlok Plasma uses the default versioned storage implementation powered by LevelDB, with another SwayDB implementation in the works. <strong>This allows for distributed systems to keep track of the key-value pairs held in digests stored on-chain.</strong>
          </p>
          
          <p className="text-gray-300 mb-6">
            See these documents to get started:
          </p>
          
          <ul className="text-gray-300 space-y-2 ml-4 mb-6">
            <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/AVL_Trees.MD" className="text-blue-400 hover:text-blue-300 underline">AVL Trees / Plasma In ErgoScript: Basics, Tips, and Design Patterns</a></li>
            <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/SmartPool_Plasma.MD" className="text-blue-400 hover:text-blue-300 underline">Mining Pool Operating At Layer 2</a></li>
          </ul>
        </section>

        <div className="mb-6">
          <Link
            href="/Docs/developers/cryptographic-primitives"
            className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cryptographic Primitives
          </Link>
        </div>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" />
            Details
          </h2>
          <p className="text-gray-300 mb-6">
            Creating and managing AVL Trees is greatly simplified when using the library. To create a normal, un-stored / temporary AVL Tree, we use <em>Plasma Maps</em>. Plasma Maps look similar to normal Scala maps on the surface with a few changes that make them compatible with on-chain AVL Trees.
          </p>

          <div className="mb-6">
            <UniversalCopyCodeBlock
              code={`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.PlasmaMap
import org.ergoplatform.appkit.ErgoId
import sigmastate.{AvlTreeFlags, Values}
// Plasma Map that uses ErgoId's as keys, and ErgoTrees as values
val plasmaMap = new PlasmaMap[ErgoId, Values.ErgoTree](AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)`}
            />
          </div>

          <p className="text-gray-300 mb-6">
            All Plasma Maps use 32 byte digests and Blake2b256 hashing. Any class may be inserted into a Plasma Map so long as there is a corresponding implicit <code className="bg-neutral-800 px-2 py-1 rounded">ByteConversion</code> for that class.
          </p>

          <div className="mb-6">
            <UniversalCopyCodeBlock
              code={`import io.getblok.getblok_plasma.ByteConversion
import org.ergoplatform.appkit.ErgoId
import sigmastate.Values
import sigmastate.serialization.ErgoTreeSerializer

// Default ByteConversions for ErgoId and ErgoTree
implicit val convertsId: ByteConversion[ErgoId] = new ByteConversion[ErgoId] {
  override def convertToBytes(t: ErgoId): Array[Byte] = t.getBytes

  override def convertFromBytes(bytes: Array[Byte]): ErgoId = new ErgoId(bytes)
}

implicit val convertsErgoTree: ByteConversion[Values.ErgoTree] = new ByteConversion[Values.ErgoTree] {
  override def convertToBytes(t: Values.ErgoTree): Array[Byte] = t.bytes

  override def convertFromBytes(bytes: Array[Byte]): Values.ErgoTree = ErgoTreeSerializer.DefaultSerializer.deserializeErgoTree(bytes)
}`}
            />
          </div>

          <p className="text-gray-300 mb-6">
            Custom classes may also be used with their own definitions to allow for flexibility in contracts:
          </p>

          <div className="mb-6">
            <UniversalCopyCodeBlock
              code={`import com.google.common.primitives.{Ints, Longs}
import io.getblok.getblok_plasma.ByteConversion
import org.bouncycastle.util.encoders.Hex
import org.ergoplatform.appkit.{ErgoType, ErgoValue}
import sigmastate.eval.Colls
import special.collection.Coll

case class StateScore(score: Long, paid: Boolean) {
  def toBytes: Array[Byte] = Longs.toByteArray(score) ++ Array(if(paid) 1.toByte else 0.toByte)
}

def getPaid(byte: Byte): Boolean = {
  byte match {
    case 0 =>
      false
    case 1 =>
      true
    case _ =>
      throw new Exception("A payment byte was serialized incorrectly!")
  }
}
  implicit val scoreConversion: ByteConversion[StateScore] = new ByteConversion[StateScore] {
    override def convertToBytes(t: StateScore): Array[Byte] = t.toBytes

    override def convertFromBytes(bytes: Array[Byte]): StateScore = StateScore(Longs.fromByteArray(bytes.slice(0, 8)), getPaid(bytes.slice(8, 9).head))
  }`}
            />
          </div>

          <p className="text-gray-300 mb-6">
            Once a Plasma Map is created, operations may be performed on it. All operations done on a Plasma Map return some <code className="bg-neutral-800 px-2 py-1 rounded">OpResult</code> that wraps the Plasma Map's <em>value</em> field. The set of these <code className="bg-neutral-800 px-2 py-1 rounded">OpResult</code>s are returned in a <code className="bg-neutral-800 px-2 py-1 rounded">ProvenResult</code>, which holds the returned values along with a <code className="bg-neutral-800 px-2 py-1 rounded">Proof</code> object that holds the corresponding proof for the batched set of operations. <code className="bg-neutral-800 px-2 py-1 rounded">OpResult</code>s are all returned in the order in which they were entered.
          </p>

          <div className="mb-6">
            <UniversalCopyCodeBlock
              code={`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.{OpResult, PlasmaMap, Proof, ProvenResult}
import io.getblok.getblok_plasma.ByteConversion.convertsLongVal
import org.ergoplatform.appkit.ErgoId
import sigmastate.AvlTreeFlags
val tokenMap = new PlasmaMap[ErgoId, Long](AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)

val cometId: ErgoId = ErgoId.create("0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b")
val tokenData: Seq[(ErgoId, Long)] = Seq(cometId -> 100L)

val result: ProvenResult[Long] = tokenMap.insert(tokenData: _*)

val opResults: Seq[OpResult[Long]] = result.response
val proof: Proof = result.proof`}
            />
          </div>

          <p className="text-gray-300 mb-6">
            All of these classes have functions to convert between common types used in Ergo Appkit. This allows for easy interactions between Plasma Map's and on-chain contracts.
          </p>

          <div className="mb-6">
            <UniversalCopyCodeBlock
              code={`import io.getblok.getblok_plasma.collections.{PlasmaMap, Proof}
import org.ergoplatform.appkit.{ErgoClient, ErgoContract, ErgoId, Parameters}

implicit val ergoClient: ErgoClient
implicit val myContract: ErgoContract
implicit val myMap: PlasmaMap[ErgoId, Long]
implicit val myProof: Proof
ergoClient.execute {
  ctx =>
    val txB = ctx.newTxBuilder()
    val outB = txB.outBoxBuilder()
    val outBox = outB
            .value(Parameters.OneErg)
            .contract(myContract)
            .registers(myMap.ergoValue, myProof.ergoValue)
            .build()
}`}
            />
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" />
            LocalPlasmaMap
          </h2>
          <p className="text-gray-300 mb-6">
            Interacting with a locally stored Plasma Map is done in a similar way, except that you must use the <code className="bg-neutral-800 px-2 py-1 rounded">LocalPlasmaMap</code> class instead.
          </p>

          <div className="mb-6">
            <UniversalCopyCodeBlock
              code={`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.LocalPlasmaMap
import io.getblok.getblok_plasma.ByteConversion.convertsLongKey
import scorex.crypto.authds.avltree.batch.VersionedLDBAVLStorage
import scorex.crypto.hash.{Blake2b256, Digest32}
import scorex.db.LDBVersionedStore
import sigmastate.{AvlTreeFlags, Values}
import java.io.File

val ldbStore = new LDBVersionedStore(new File("./level"), 10)
val avlStorage = new VersionedLDBAVLStorage[Digest32](ldbStore, PlasmaParameters.default.toNodeParams)(Blake2b256)
val localMap = new LocalPlasmaMap[Long, Values.ErgoTree](avlStorage, AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)`}
            />
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <LinkIcon className="w-6 h-6 text-yellow-400" />
            ProxyPlasmaMap
          </h2>
          <p className="text-gray-300 mb-6">
            It can be useful to apply changes to a tree without necessarily committing to them. This is especially true in the context of chained transactions or unexpected errors. For example, if changes are applied to the tree but latency causes connection to the node to be lost, then the locally stored tree may have changes that do not exist on-chain!
          </p>
          <p className="text-gray-300 mb-6">
            To deal with this problem, you can use a <code className="bg-neutral-800 px-2 py-1 rounded">ProxyPlasmaMap</code>. This PlasmaMap applies changes on a temporary tree which allows you to receive proofs for the operations you perform. However, none of these changes are saved to storage until the <code className="bg-neutral-800 px-2 py-1 rounded">commitChanges()</code> function is called. This ensures that unexpected errors can be dealt with easily.
          </p>
          <p className="text-gray-300 mb-6">
            When dealing with the <code className="bg-neutral-800 px-2 py-1 rounded">ProxyPlasmaMap</code>, changes must first be explicitly enabled by calling <code className="bg-neutral-800 px-2 py-1 rounded">initiate()</code>. This function initializes the internal temporary map. Following this, operations may be performed on the map. All operations are applied to the temporary map, but are also kept track of inside an internal Queue. Once <code className="bg-neutral-800 px-2 py-1 rounded">commitChanges()</code> is called, the Queued operations are applied to persistent storage, and the temporary map is destroyed.
          </p>

          <div className="mb-6">
            <UniversalCopyCodeBlock
              code={`import io.getblok.getblok_plasma.PlasmaParameters
import io.getblok.getblok_plasma.collections.{LocalPlasmaMap, ProxyPlasmaMap}
import org.ergoplatform.appkit.ErgoId
import scorex.crypto.authds.avltree.batch.VersionedLDBAVLStorage
import scorex.crypto.hash.{Blake2b256, Digest32}
import scorex.db.LDBVersionedStore
import sigmastate.{AvlTreeFlags, Values}
import io.getblok.getblok_plasma.ByteConversion.convertsLongVal
import java.io.File

val ldbStore = new LDBVersionedStore(new File("./level"), 10)
val avlStorage = new VersionedLDBAVLStorage[Digest32](ldbStore, PlasmaParameters.default.toNodeParams)(Blake2b256)
val proxyMap = new ProxyPlasmaMap[ErgoId, Long](avlStorage, AvlTreeFlags.AllOperationsAllowed, PlasmaParameters.default)
val ergopadId: ErgoId = ErgoId.create("d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413")
val tokenDataErgoPad: Seq[(ErgoId, Long)] = Seq(ergopadId -> 100L)


// This will fail due to the ProxyMap being un-initiated
proxyMap.insert(tokenDataErgoPad: _*)

// Initiates operations on the tree
proxyMap.initiate()

// This will be successfully applied to the internal temporary tree, while also queueing this
// operation for later application into persistence
proxyMap.insert(tokenDataErgoPad: _*)

// This commits ALL of the changes made on the temporary tree into persistent storage, while also
// destroying the temporary tree
proxyMap.commitChanges()

val cometId: ErgoId = ErgoId.create("0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b")
val tokenDataComet: Seq[(ErgoId, Long)] = Seq(cometId -> 100L)

proxyMap.initiate()
proxyMap.insert(tokenDataComet: _*)

// This commits only the next operation that exists in the Queue. This does NOT destroy
// the temporary map.
proxyMap.commitNextOperation()

// This drops any uncommitted changes and destroys the temporary map. In this case,
// all changes were already committed since only one operation was performed.

proxyMap.dropChanges()`}
            />
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Resources
          </h2>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li><a href="https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367" className="text-blue-400 hover:text-blue-300 underline">Plasma Example: Off-chain Bank operating at Layer 2</a></li>
            <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma" className="text-blue-400 hover:text-blue-300 underline">GetBlok Plasma</a></li>
            <li><a href="https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/SmartPool_Plasma.MD" className="text-blue-400 hover:text-blue-300 underline">GetBlok: SmartPool Plasma</a></li>
            <li><a href="https://github.com/ergo-pad/paideia-contracts/blob/main/paideia_contracts/contracts/plasma_staking/ergoscript/latest/plasmaStaking.es" className="text-blue-400 hover:text-blue-300 underline">Paideia - Plasma Staking</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
} 