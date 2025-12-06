"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";

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

const CodeBlock = ({ children, language = "scala" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function LanguageDescriptionPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        ErgoScript Language Description
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-lg text-gray-300 mb-6 max-w-2xl">
          🔗 From <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigmastate-interpreter</a>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          ErgoScript is a language to write contracts for <a href="https://ergoplatform.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo blockchain</a>. ErgoScript contracts can be compiled to ErgoTrees, serialized and stored in UTXOs.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          A good starting point to writing contracts is to use <a href="https://github.com/ergoplatform/ergoscript-by-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript by Example</a> with <a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Playgrounds</a> or <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Appkit</a>.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The ErgoScript compiler is <a href="https://mvnrepository.com/artifact/org.scorexfoundation/sigma-state" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">published</a> as a library which is cross compiled for Java 7 and Java 8+ and can be used from any JVM language, Android or JavaFX.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Example: Creating Transactions with AppKit</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          The following example shows how source code of ErgoScript contract can be used to create new transaction using <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Appkit</a>, see <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/java-examples/src/main/java/org/ergoplatform/appkit/examples/FreezeCoin.java" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">FreezeCoin.java</a> for more details.
        </div>

        <CodeBlock>{`// To create transaction we use a builder obtained from the context
// the builder keeps relationship with the context to access necessary blockchain data.
UnsignedTransactionBuilder txB = ctx.newTxBuilder();

// create new box using new builder obtained from the transaction builder
// in this case we compile new ErgoContract from source ErgoScript code
OutBox newBox = txB.outBoxBuilder()
        .value(amountToPay)
        .contract(ctx.compileContract(
                ConstantsBuilder.create()
                        .item("freezeDeadline", ctx.getHeight() + newBoxDelay)
                        .item("pkOwner", prover.getP2PKAddress().pubkey())
                        .build(),
                "{ " +
                "  val deadlinePassed = sigmaProp(HEIGHT > freezeDeadline)" +
                "  deadlinePassed && pkOwner " +
                "}"))
        .build();`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The contract is given as the string literal which contains the block of <code className="bg-neutral-800 px-1 rounded">val</code> declarations followed by the logical expression. The expression defines all possible conditions to spend the box. The contract can also contain <strong>named constants</strong> (which cannot be represented as literals in the source code).
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          In the example <code className="bg-neutral-800 px-1 rounded">freezeDeadline</code> and <code className="bg-neutral-800 px-1 rounded">pkOwner</code> are named constants. The concrete values of named constants should be given to the compiler (see <code className="bg-neutral-800 px-1 rounded">compileContract</code> method).
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl font-semibold">
          The following sections describe ErgoScript and its operations.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoScript Language Features Overview</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Syntax borrowed from Scala</li>
          <li>Standard syntax and semantics for well known constructs (operations, code blocks, if branches etc.)</li>
          <li>High-order language with first-class lambdas which are used in collection operations</li>
          <li>Call-by-value (eager evaluation)</li>
          <li>Statically typed with local type inference</li>
          <li>Blocks are expressions</li>
          <li>Semicolon inference in blocks</li>
          <li>Type constructors: Pair, Coll, Option</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Operations and Constructs Overview</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Binary operations: <code className="bg-neutral-800 px-1 rounded">&gt;, &lt;, &gt;=, &lt;=, +, -, &amp;&amp;, ||, ==, !=, |, &amp;, *, /, %, ^, ++</code></li>
          <li>Predefined primitives: <code className="bg-neutral-800 px-1 rounded">blake2b256</code>, <code className="bg-neutral-800 px-1 rounded">byteArrayToBigInt</code>, <code className="bg-neutral-800 px-1 rounded">proveDlog</code> etc.</li>
          <li>Val declarations: <code className="bg-neutral-800 px-1 rounded">val h = blake2b256(pubkey)</code></li>
          <li>If-then-else clause: <code className="bg-neutral-800 px-1 rounded">if (x &gt; 0) 1 else 0</code></li>
          <li>Collection literals: <code className="bg-neutral-800 px-1 rounded">Coll(1, 2, 3, 4)</code></li>
          <li>Generic high-order collection operations: <code className="bg-neutral-800 px-1 rounded">map</code>, <code className="bg-neutral-800 px-1 rounded">filter</code>, <code className="bg-neutral-800 px-1 rounded">fold</code>, <code className="bg-neutral-800 px-1 rounded">exists</code>, <code className="bg-neutral-800 px-1 rounded">forall</code>, etc.</li>
          <li>Accessing fields of any predefined types: <code className="bg-neutral-800 px-1 rounded">box.value</code></li>
          <li>Method invocation for predefined types: <code className="bg-neutral-800 px-1 rounded">coll.map(x =&gt; x + 1)</code></li>
          <li>Function invocations (predefined and user defined): <code className="bg-neutral-800 px-1 rounded">proveDlog(pubkey)</code></li>
          <li>User defined function declarations: <code className="bg-neutral-800 px-1 rounded">def isProven(pk: GroupElement) = proveDlog(pk).isProven</code></li>
          <li>Lambdas and high-order methods: <code className="bg-neutral-800 px-1 rounded">OUTPUTS.exists(out: Box) =&gt; out.value &gt;= minToRaise</code></li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Data Types</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          In ErgoScript, everything is an object in the sense that we can call member functions and properties on any variable. Some of the types can have a special internal representation - for example, numbers and booleans can be represented as primitive values at runtime - but to the user they look like ordinary classes.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          NOTE: in ErgoScript we use <em>type</em>, <em>class</em> and <em>trait</em> as synonyms, we prefer <em>type</em> when talking about primitive values and <em>trait</em> or <em>class</em> when talking about methods.
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <div className="text-cyan-400 font-semibold mb-3">Type Name | Description</div>
          <div className="space-y-2 text-sm">
            <div><code className="bg-neutral-800 px-1 rounded">Any</code> - a supertype of any other type (not used directly in ErgoScript)</div>
            <div><code className="bg-neutral-800 px-1 rounded">Unit</code> - a type with a single value <code className="bg-neutral-800 px-1 rounded">()</code></div>
            <div><code className="bg-neutral-800 px-1 rounded">Boolean</code> - a type with two logical values <code className="bg-neutral-800 px-1 rounded">true</code> and <code className="bg-neutral-800 px-1 rounded">false</code></div>
            <div><code className="bg-neutral-800 px-1 rounded">Byte</code> - 8 bit signed integer</div>
            <div><code className="bg-neutral-800 px-1 rounded">Short</code> - 16 bit signed integer</div>
            <div><code className="bg-neutral-800 px-1 rounded">Int</code> - 32 bit signed integer</div>
            <div><code className="bg-neutral-800 px-1 rounded">Long</code> - 64 bit signed integer</div>
            <div><code className="bg-neutral-800 px-1 rounded">BigInt</code> - 256 bit signed integer</div>
            <div><code className="bg-neutral-800 px-1 rounded">SigmaProp</code> - a type representing a <em>sigma proposition</em> which can be verified by executing a Sigma protocol with zero-knowledge proof of knowledge. Every contract should return a value of this type.</div>
            <div><code className="bg-neutral-800 px-1 rounded">AvlTree</code> - represents a digest of authenticated dynamic dictionary and can be used to verify proofs of operations performed on the dictionary</div>
            <div><code className="bg-neutral-800 px-1 rounded">GroupElement</code> - elliptic curve points</div>
            <div><code className="bg-neutral-800 px-1 rounded">Box</code> - a box containing a monetary value (in NanoErgs), tokens and registers along with a guarding proposition</div>
            <div><code className="bg-neutral-800 px-1 rounded">Option[T]</code> - a container which either have some value of type <code className="bg-neutral-800 px-1 rounded">T</code> or none.</div>
            <div><code className="bg-neutral-800 px-1 rounded">Coll[T]</code> - a collection of arbitrary length with all values of type <code className="bg-neutral-800 px-1 rounded">T</code></div>
            <div><code className="bg-neutral-800 px-1 rounded">(T1,T2)</code> - a pair of values where T1, T2 can be different types</div>
          </div>
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The type constructors <code className="bg-neutral-800 px-1 rounded">Coll</code>, <code className="bg-neutral-800 px-1 rounded">(_,_)</code> can be used to construct complex types as in the following example.
        </div>

        <CodeBlock>{`{
  val keyValues = OUTPUTS(0).R4[Coll[(Int, (Byte, Long))]].get
  ...
}`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Literal Syntax and Constants</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Literals are used to introduce values of some types directly in program text like in the following example:
        </div>

        <CodeBlock>{`val unit: Unit = ()       // unit constant
val long: Int = 10        // integer value literal
val bool: Boolean = true  // logical literal
val arr = Coll(1, 2, 3)   // constructs a collection with given items
val str = "abc"           // string of characters`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Note that many types don't have literal syntax and their values are introduced by applying operations, for example <code className="bg-neutral-800 px-1 rounded">deserialize</code> function can be used to introduce a constant of any type by using Base64 encoded string (See <a href="#PredefinedFunctions" className="text-cyan-400 hover:underline">predefined functions</a>).
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4" id="DataTypes">Data Types</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Primitive Types</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Below we specify methods of pre-defined types using Scala-like declaration of classes.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Note, the <code className="bg-neutral-800 px-1 rounded">Boolean</code> type doesn't have pre-defined methods in addition to the standard operations.
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <div className="text-cyan-400 font-semibold mb-3">Note</div>
          <div className="text-gray-300 text-sm">
            ErgoScript doesn't allow to define new <code className="bg-neutral-800 px-1 rounded">class</code> types, however it has many pre-defined classes with methods defined below.
          </div>
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Every numeric type has the following methods:
        </div>

        <CodeBlock>{`/** Base supertype for all numeric types. */
class Numeric {
  /** Convert this Numeric value to Byte. 
   * @throws ArithmeticException if overflow happens. 
   */
  def toByte: Byte
  
  /** Convert this Numeric value to Short. 
   * @throws ArithmeticException if overflow happens. 
   */
  def toShort: Short
  
  /** Convert this Numeric value to Int. 
   * @throws ArithmeticException if overflow happens. 
   */
  def toInt: Int
  
  /** Convert this Numeric value to Long. 
   * @throws ArithmeticException if overflow happens. 
   */
  def toLong: Long
  
  /** Convert this Numeric value to BigInt. */
  def toBigInt: BigInt
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          All the predefined numeric types inherit Numeric class and its methods. They can be thought of as being pre-defined, like the following:
        </div>

        <CodeBlock>{`class Byte extends Numeric
class Short extends Numeric
class Int extends Numeric
class Long extends Numeric
class BigInt extends Numeric`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Context Data</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Every script is executed in a context, which is a collection of data available for operations in the script. The context data is available using the <code className="bg-neutral-800 px-1 rounded">CONTEXT</code> variable which is of pre-defined class <code className="bg-neutral-800 px-1 rounded">Context</code> which is shown below.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          There are also shortcut variables which are available in every script to simplify access to the most commonly used context data.
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <div className="text-cyan-400 font-semibold mb-3">Variable | Type | Shortcut for ...</div>
          <div className="space-y-2 text-sm">
            <div><code className="bg-neutral-800 px-1 rounded">HEIGHT</code> - <code className="bg-neutral-800 px-1 rounded">Int</code> - <code className="bg-neutral-800 px-1 rounded">CONTEXT.HEIGHT</code></div>
            <div><code className="bg-neutral-800 px-1 rounded">SELF</code> - <code className="bg-neutral-800 px-1 rounded">Box</code> - <code className="bg-neutral-800 px-1 rounded">CONTEXT.SELF</code></div>
            <div><code className="bg-neutral-800 px-1 rounded">INPUTS</code> - <code className="bg-neutral-800 px-1 rounded">Coll[Box]</code> - <code className="bg-neutral-800 px-1 rounded">CONTEXT.INPUTS</code></div>
            <div><code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> - <code className="bg-neutral-800 px-1 rounded">Coll[Box]</code> - <code className="bg-neutral-800 px-1 rounded">CONTEXT.OUTPUTS</code></div>
          </div>
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The following listing shows the methods of pre-defined <code className="bg-neutral-800 px-1 rounded">Context</code>, <code className="bg-neutral-800 px-1 rounded">Header</code>, <code className="bg-neutral-800 px-1 rounded">PreHeader</code> types.
        </div>

        <CodeBlock>{`/** Represents data available in ErgoScript using CONTEXT global variable */
class Context {
  /** Height (block number) of the block which is currently being validated. */
  def HEIGHT: Int
  
  /** Box whose proposition is being currently executing */
  def SELF: Box

  /** Zero based index in inputs of selfBox */
  def selfBoxIndex: Int
  
  /** A collection of inputs of the current transaction, the transaction where
    * selfBox is one of the inputs. 
    */
  def INPUTS: Coll[Box]
  
  /** A collection of data inputs of the current transaction. Data inputs are
    * not going to be spent and thus don't participate in transaction validation
    * as INPUTS, but data boxes are available in guarding propositions of
    * INPUTS and thus can be used in spending logic.
    */
  def dataInputs: Coll[Box]
  
  /** A collection of outputs of the current transaction. */
  def OUTPUTS: Coll[Box]
  
  /** Authenticated dynamic dictionary digest representing Utxo state before
    * current state. 
    */
  def LastBlockUtxoRootHash: AvlTree
  
  /** A fixed number of last block headers in descending order (first header is
    * the newest one) */
  def headers: Coll[Header]

  /** Fields of a new block header, that can be predicted by a miner before block's formation */
  def preHeader: PreHeader
  /** Bytes of encoded miner's public key.
    * Same as preHeader.minerPk.getEncoded
    */
  def minerPubKey: Coll[Byte] 
}`}</CodeBlock>

        <CodeBlock>{`/** Represents data of the block headers available in scripts. */
class Header {  
  /** Bytes representation of ModifierId of this Header */
  def id: Coll[Byte]

  /** Block version, to be increased on every soft and hardfork. */
  def version: Byte
  
  /** Id of parent block (as bytes) */
  def parentId: Coll[Byte]
  
  /** Hash of ADProofs for transactions in a block */
  def ADProofsRoot: Coll[Byte] // Digest32. Can we build AvlTree out of it? 

  /** AvlTree of a state after block application */
  def stateRoot: Coll[Byte]  // ADDigest  //33 bytes! extra byte with tree height here!

  /** Root hash (for a Merkle tree) of transactions in a block. */
  def transactionsRoot: Coll[Byte]  // Digest32

  /** Block timestamp (in milliseconds since beginning of Unix Epoch) */
  def timestamp: Long

  /** Current difficulty in a compressed view.
    * NOTE: actually it is unsigned Int*/
  def nBits: Long  // actually it is unsigned Int 

  /** Block height */
  def height: Int

  /** Root hash of extension section (Digest32) */
  def extensionRoot: Coll[Byte]

  /** Miner's public key. Should be used to collect block rewards.
    * Part of Autolykos solution (pk). 
    */
  def minerPk: GroupElement

  /** One-time public key. Prevents revealing of miners secret. 
    * Part of Autolykos solution (w). 
    */
  def powOnetimePk: GroupElement

  /** Nonce value found by the miner. Part of Autolykos solution (n). */
  def powNonce: Coll[Byte]

  /** Distance between pseudo-random number, corresponding to nonce powNonce
    * and a secret, corresponding to minerPk. The lower powDistance is, the
    * harder it was to find this solution. 
    * Part of Autolykos solution (d).
    */
  def powDistance: BigInt

  /** Miner votes for changing system parameters. */
  def votes: Coll[Byte]
}`}</CodeBlock>

        <CodeBlock>{`/** Only header fields that can be predicted by a miner. */
class PreHeader { 
  /** Block version, to be increased on every soft and hardfork. */
  def version: Byte

  /** Id of parent block */
  def parentId: Coll[Byte] // ModifierId

  /** Block timestamp (in milliseconds since beginning of Unix Epoch) */
  def timestamp: Long

  /** Current difficulty in a compressed view.
    * NOTE: actually it is 32-bit unsigned Int */
  def nBits: Long

  /** Block height */
  def height: Int

  /** Miner public key. Should be used to collect block rewards. */
  def minerPk: GroupElement

  /** Miner votes for changing system parameters. */
  def votes: Coll[Byte]
}`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Box Type</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Box represents a unit of storage in Ergo blockchain. It contains 10 registers (indexed 0-9). First 4 are mandatory and the others are optional.
        </div>

        <CodeBlock>{`/** Representation of Ergo boxes used during execution of ErgoTree operations. */
class Box {
  /** Box monetary value in NanoErg */
  def value: Long 
  
  /** Blake2b256 hash of this box's content, basically equals to
    * blake2b256(bytes) 
    */
  def id: Coll[Byte] 

  /** Serialized bytes of guarding script, which should be evaluated to true in
    * order to open this box. 
    */
  def propositionBytes: Coll[Byte] 
  
  /** Serialized bytes of this box's content, including proposition bytes. */
  def bytes: Coll[Byte] 
  
  /** Serialized bytes of this box's content, excluding transactionId and index
    * of output. 
    */
  def bytesWithoutRef: Coll[Byte]
    
  /** If tx is a transaction which generated this box, then creationInfo._1
    * is a height of the tx's block. The creationInfo._2 is a serialized
    * transaction identifier followed by box index in the transaction outputs.
    */
  def creationInfo: (Int, Coll[Byte]) 
  
  /** Synonym of R2 obligatory register */
  def tokens: Coll[(Coll[Byte], Long)] 
  
  /** Extracts register by id and type.
    * ErgoScript is typed, so accessing a register is an operation which involves some
    * expected type given in brackets. Thus SELF.R4[Int] expression should evaluate to a
    * valid value of the Option[Int] type.
    *
    * For example val x = SELF.R4[Int] expects the
    * register, if it is present, to have type Int. At runtime the corresponding type
    * descriptor is passed as implicit t: RType[T] parameter of getReg method and
    * checked against the actual value of the register.
    *
    * There are three cases:
    * 1) If the register doesn't exist.
    *   Then val x = SELF.R4[Int] succeeds and returns the None value, which conforms to
    *   any value of type Option[T] for any T. (In the example above T is equal to
    *   Int). Calling x.get fails when x is equal to None, but x.isDefined
    *   succeeds and returns false.
    * 2) If the register contains a value v of type Int.
    *   Then val x = SELF.R4[Int] succeeds and returns Some(v), which is a valid value
    *   of type Option[Int]. In this case, calling x.get succeeds and returns the
    *   value v of type Int. Calling x.isDefined returns true.
    * 3) If the register contains a value v of type T other then Int.
    *   Then val x = SELF.R4[Int] fails, because there is no way to return a valid value
    *   of type Option[Int]. The value of register is present, so returning it as None
    *   would break the typed semantics of registers collection.
    *
    * In some use cases one register may have values of different types. To access such
    * register an additional register can be used as a tag.
    *
    * <pre class="stHighlight">
    *   val tagOpt = SELF.R5[Int]
    *   val res = if (tagOpt.isDefined) {
    *     val tag = tagOpt.get
    *     if (tag == 1) {
    *       val x = SELF.R4[Int].get
    *       // compute res using value x is of type Int
    *     } else if (tag == 2) {
    *       val x = SELF.R4[GroupElement].get
    *       // compute res using value x is of type GroupElement
    *     } else if (tag == 3) {
    *       val x = SELF.R4[ Array[Byte] ].get
    *       // compute res using value x of type Array[Byte]
    *     } else {
    *       // compute res when tag is not 1, 2 or 3
    *     }
    *   }
    *   else {
    *     // compute value of res when register is not present
    *   }
    * </pre>
    *
    * @param i zero-based identifier of the register.
    * @tparam T expected type of the register.
    * @return Some(value) if the register is defined AND has the given type.
    *         None otherwise
    * @throws special.sigma.InvalidType exception when the type of the register value is
    *                                   different from T.
    */
  def Ri[T]: Option[T]

  /** Executes the script stored in the register regId of the SELF box.
    * Similar to executeFromVar, this performs a macro-like substitution and
    * execution of the script (stored as Coll[Byte] representing serialized ErgoTree)
    * found in the specified register.
    *
    * **Important Behavior Notes (based on interpreter implementation):**
    * - **Missing Register:** If register regId does not exist in SELF, this
    *   operation fails. Unlike getVar or Ri, it does **not** return an Option
    *   or handle default values automatically in this case. The script author must
    *   explicitly check for the register's existence first (e.g., using SELF.Ri[Coll[Byte]](regId).isDefined).
    * - **Type Mismatch:** If the register exists but does not contain valid
    *   serialized ErgoTree (Coll[Byte]), or if the executed script's result
    *   type does not match the expected type T, the operation fails.
    * - **No Automatic Option Wrapping:** The result type T is the direct result
    *   of the executed script. If the executed script itself returns an Option[X],
    *   then T must be Option[X]. executeFromSelfReg does not automatically
    *   wrap the result in an Option.
    *
    * This function is powerful for implementing complex state transitions and
    * contract patterns where parts of the execution logic are stored within the box itself.
    *
    * @param regId zero-based identifier of the register (R4-R9) in the SELF box containing the script bytes.
    * @tparam T expected type of the script's result after execution.
    * @return The result of executing the script stored in the register.
    * @throws InterpreterException if the register is not found, does not contain
    *         valid serialized ErgoTree, or if the script execution fails or results
    *         in a type different from T.
    */
  def executeFromSelfReg[T](regId: Int): T
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Besides properties, every box can have up to 10 numbered registers. The following syntax is supported to access registers on box objects:
        </div>

        <CodeBlock>{`box.R3[Int].get          // access R3 register, check that its value of type Int and return it
box.R3[Int].isDefined    // check that value of R3 is defined and has type Int
box.R3[Int].getOrElse(d) // access R3 register, check that its value of type Int, return it if defined, otherwise return d`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">GroupElement</h3>
        <CodeBlock>{`/** Base class for points on elliptic curves. */
class GroupElement {
  /** Exponentiate this GroupElement to the given number.
    * @param k The power.
    * @return this to the power of k.
    */
  def exp(k: BigInt): GroupElement

  /** Group operation. */
  def multiply(that: GroupElement): GroupElement

  /** Inverse element in the group. */
  def negate: GroupElement

  /** Get an encoding of the point value.
    *
    * @return the point encoding
    */
  def getEncoded: Coll[Byte]
}`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">AvlTree</h3>
        <CodeBlock>{`/** Type of data which efficiently authenticates potentially huge dataset having key-value dictionary interface.
  * Only root hash of dynamic AVL+ tree, tree height, key length, optional value length, and access flags are stored
  * in an instance of the datatype.
  *
  * Please note that standard hash function from scorex.crypto.hash is used, and height is stored along with root hash of
  * the tree, thus digest size is always CryptoConstants.hashLength + 1 bytes.
  */
class AvlTree {
  /** Returns digest of the state represented by this tree.
    * Authenticated tree digest = root hash bytes ++ tree height
    */
  def digest: Coll[Byte]

  /** Flags of enabled operations packed in single byte.
    * isInsertAllowed == (enabledOperations & 0x01) != 0
    * isUpdateAllowed == (enabledOperations & 0x02) != 0
    * isRemoveAllowed == (enabledOperations & 0x04) != 0
    */
  def enabledOperations: Byte

  /** All the elements under the tree have the same length of the keys */
  def keyLength: Int
  
  /** If non-empty, all the values under the tree are of the same length. */
  def valueLengthOpt: Option[Int]

  /** Checks if Insert operation is allowed for this tree instance. */
  def isInsertAllowed: Boolean

  /** Checks if Update operation is allowed for this tree instance. */
  def isUpdateAllowed: Boolean

  /** Checks if Remove operation is allowed for this tree instance. */
  def isRemoveAllowed: Boolean

  /** Replace digest of this tree producing a new tree.
    * Since AvlTree is immutable, this tree instance remains unchanged.
    * @param newDigest   a new digest
    * @return a copy of this AvlTree instance where this.digest replaced by
    *         newDigest
    */
  def updateDigest(newDigest: Coll[Byte]): AvlTree

  /** Enable/disable operations of this tree producing a new tree.
    * Since AvlTree is immutable, this tree instance remains unchanged.
    * @param newOperations a new flags which specify available operations on a
    *                      new tree.
    * @return              a copy of this AvlTree instance where
    *                      this.enabledOperations replaced by newOperations
    */
  def updateOperations(newOperations: Byte): AvlTree

  /** Checks if an entry with key key exists in this tree using proof proof.
    * Throws exception if proof is incorrect.
    *
    * @note CAUTION! Does not support multiple keys check, use getMany instead.
    * Return true if a leaf with the key key exists
    * Return false if leaf with provided key does not exist.
    * @param key    a key of an element of this authenticated dictionary.
    * @param proof data to reconstruct part of the tree enough to perform the check
    */
  def contains(key: Coll[Byte], proof: Coll[Byte]): Boolean

  /** Perform a lookup of key key in this tree using proof proof.
    * Throws exception if proof is incorrect
    *
    * @note CAUTION! Does not support multiple keys check, use getMany instead.
    * Return Some(bytes) of leaf with key key if it exists
    * Return None if leaf with provided key does not exist.
    * @param key    a key of an element of this authenticated dictionary.
    * @param proof data to reconstruct part of the tree enough to get the value
    *              by the key
    */
  def get(key: Coll[Byte], proof: Coll[Byte]): Option[Coll[Byte]]

  /** Perform a lookup of many keys keys in this tree using proof proof.
    *
    * @note CAUTION! Keys must be ordered the same way they were in lookup
    * before proof was generated.
    * For each key return Some(bytes) of leaf if it exists and None if is doesn't.
    * @param keys  keys of elements of this authenticated dictionary.
    * @param proof data to reconstruct part of the tree enough to get the values
    *              by the keys
    */
  def getMany(keys: Coll[Coll[Byte]], proof: Coll[Byte]): Coll[Option[Coll[Byte]]]

  /** Perform insertions of key-value entries into this tree using proof proof.
    * Throws exception if proof is incorrect
    *
    * @note CAUTION! Pairs must be ordered the same way they were in insert ops
    * before proof was generated.
    * Return Some(newTree) if successful
    * Return None if operations were not performed.
    * @param operations collection of key-value pairs to insert in this
    *                   authenticated dictionary.
    * @param proof data to reconstruct part of the tree
    */
  def insert(operations: Coll[(Coll[Byte], Coll[Byte])], proof: Coll[Byte]): Option[AvlTree]

  /** Perform updates of key-value entries into this tree using proof proof.
    * Throws exception if proof is incorrect
    *
    * @note CAUTION! Pairs must be ordered the same way they were in update ops
    * before proof was generated.
    * Return Some(newTree) if successful
    * Return None if operations were not performed.
    * @param operations collection of key-value pairs to update in this
    *                   authenticated dictionary.
    * @param proof      data to reconstruct part of the tree
    */
  def update(operations: Coll[(Coll[Byte], Coll[Byte])], proof: Coll[Byte]): Option[AvlTree]

  /** Perform removal of entries into this tree using proof proof.
    * Throws exception if proof is incorrect
    * Return Some(newTree) if successful
    * Return None if operations were not performed.
    *
    * @note CAUTION! Keys must be ordered the same way they were in remove ops
    * before proof was generated.
    * @param operations collection of keys to remove from this authenticated
    *                   dictionary.
    * @param proof      data to reconstruct part of the tree
    */
  def remove(operations: Coll[Coll[Byte]], proof: Coll[Byte]): Option[AvlTree]
}`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Option[T]</h3>
        <CodeBlock>{`/** Represents optional values. Instances of Option
 *  are either an instance of Some(x) or the value None.
 */
class Option[A] {
  /** Returns true if the option is an instance of Some(value), false otherwise. 
   */
  def isDefined: Boolean;
  
  /** Returns the option's value if the option is nonempty, otherwise
    * return the result of evaluating default.
    * NOTE: the default is evaluated even if the option contains the value
    * i.e. not lazily.
    *
    * @param default  the default expression.
    */
  def getOrElse[B](default: B): B  

  /** Returns the option's value.
   *  @note The option must be nonempty.
   *  @throws InterpreterException if the option is empty.
   */
  def get: A

  /** Returns a Some containing the result of applying $f to this option's
   * value if this option is nonempty.
   * Otherwise return None.
   *
   * @note This is similar to flatMap except here, $f does not need to wrap its result in an $option.
   *
   * @param  f   the function to apply
   * @since  2.0
   * @see flatMap
   */
  def map[B](f: A => B): Option[B]

  
  /** Returns this option if it is nonempty '''and''' applying the predicate $p to
   * this option's value returns true. Otherwise, return $none.
   *
   * @param  p   the predicate used for testing.
   * @since  2.0
   */
  def filter(p: A => Boolean): Option[A]
}`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Coll[T]</h3>
        <CodeBlock>{`/** Indexed (zero-based) collection of elements of type A 
  * @tparam A the collection element type
  */
class Coll[A] {
  /** The number of elements in the collection */
  def size: Int
  
  /** The element at given index.
   *  Indices start at 0; xs.apply(0) is the first element of collection xs.
   *  Note the indexing syntax xs(i) is a shorthand for xs.apply(i).
   *
   *  @param    i   the index
   *  @return       the element at the given index
   *  @throws       ArrayIndexOutOfBoundsException if i < 0 or length <= i
   */
  def apply(i: Int): A
  
  /** The element of the collection or default value. 
   * If an index is out of bounds (i < 0 || i >= length) then default value is returned.
   *  @param    i   the index
   *  @return       the element at the given index or default value if index is out or bounds
   */
  def getOrElse(i: Int, default: A): A
  
  /** Builds a new collection by applying a function to all elements of this collection.
   *
   *  @param f      the function to apply to each element.
   *  @tparam B     the element type of the returned collection.
   *  @return       a new collection of type Coll[B] resulting from applying the given function
   *                f to each element of this collection and collecting the results.
   */
  def map[B](f: A => B): Coll[B]

  /** For this collection (x0, ..., xN) and other collection (y0, ..., yM)
   * produces a collection ((x0, y0), ..., (xK, yK)) where K = min(N, M) 
   */
  def zip[B](ys: Coll[B]): Coll[(A, B)]

  /** Tests whether a predicate holds for at least one element of this collection.
   *  @param   p     the predicate used to test elements.
   *  @return        true if the given predicate p is satisfied by at least one element of this collection, otherwise false
   */
  def exists(p: A => Boolean): Boolean
  
  /** Tests whether a predicate holds for all elements of this collection.
   *  @param   p   the predicate used to test elements.
   *  @return      true if this collection is empty or the given predicate p
   *               holds for all elements of this collection, otherwise false.
   */
  def forall(p: A => Boolean): Boolean
  
  /** Selects all elements of this collection which satisfy a predicate.
   *  @param p     the predicate used to test elements.
   *  @return      a new collection consisting of all elements of this collection that satisfy the given
   *               predicate p. The order of the elements is preserved.
   */
  def filter(p: A => Boolean): Coll[A]
  
  /** Applies a binary operator to a start value and all elements of this collection,
   *  going left to right.
   *
   *  @param   z    the start value.
   *  @param   op   the binary operator.
   *  @tparam  B    the result type of the binary operator.
   *  @return  the result of inserting op between consecutive elements of this collection,
   *           going left to right with the start value z on the left:
   *           {{{
   *             op(...op(z, x_1), x_2, ..., x_n)
   *           }}}
   *           where x,,1,,, ..., x,,n,, are the elements of this collection.
   *           Returns z if this collection is empty.
   */
  def fold[B](z: B, op: (B, A) => B): B

  /** Produces the range of all indices of this collection [0 .. size-1] */
  def indices: Coll[Int]

  /**
    * Builds a new collection by applying a function to all elements of this collection
    * and using the elements of the resulting collections.
    *
    * Function f is constrained to be of the form x => x.someProperty, otherwise
    * it is illegal.
    * 
    * @param f the function to apply to each element.
    * @tparam B the element type of the returned collection.
    * @return a new collection of type Coll[B] resulting from applying the given collection-valued function
    *         f to each element of this collection and concatenating the results.
    */
  def flatMap[B](f: A => Coll[B]): Coll[B]

  /** Produces a new collection where a slice of elements in this collection is replaced by another sequence.
    *
    *  @param  from     the index of the first replaced element
    *  @param  patch    the replacement sequence
    *  @param  replaced the number of elements to drop in the original collection
    *  @return          a new collection consisting of all elements of this collection
    *                   except that replaced elements starting from from are replaced by patch.
    */
  def patch(from: Int, patch: Coll[A], replaced: Int): Coll[A]

  /** A copy of this collection with one single replaced element.
    *  @param  index  the position of the replacement
    *  @param  elem   the replacing element
    *  @return a new collection which is a copy of this collection with the element at position index replaced by elem.
    *  @throws IndexOutOfBoundsException if index does not satisfy 0 <= index < length.
    */
  def updated(index: Int, elem: A): Coll[A]

  /** Returns a copy of this collection where elements at indexes are replaced
    * with values. 
    */
  def updateMany(indexes: Coll[Int], values: Coll[A]): Coll[A]

  /** Selects an interval of elements.  The returned collection is made up
   *  of all elements x which satisfy the invariant:
   *  {{{
   *    from <= indexOf(x) < until
   *  }}}
   *  @param from   the lowest index to include from this collection.
   *  @param until  the lowest index to EXCLUDE from this collection.
   */
  def slice(from: Int, until: Int): Coll[A]
  
  /** Puts the elements of other collection after the elements of this
    * collection (concatenation of 2 collections).
    */
  def append(other: Coll[A]): Coll[A]
  
  /** Finds index of first occurrence of some value in this collection after or
    * at some start index.
    *  @param   elem   the element value to search for.
    *  @param   from   the start index
    *  @return  the index >= from of the first element of this collection that is equal (as determined by ==)
    *           to elem, or -1, if none exists.
    */
  def indexOf(elem: A, from: Int): Int
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Each item can be accessed by constant index, for example:
        </div>

        <CodeBlock>{`val myOutput = OUTPUTS(0)
val myInput = INPUTS(0)`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Any collection have the <code className="bg-neutral-800 px-1 rounded">size</code> property which returns the number of elements in the collection.
        </div>

        <CodeBlock>{`val size = OUTPUTS.size`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The following script check the existence of some element in the collection satisfying some predicate (condition):
        </div>

        <CodeBlock>{`val ok = OUTPUTS.exists { (box: Box) => box.value > 1000 }`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4" id="PredefinedFunctions">Predefined Global Functions</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          ErgoScript standard library include predefined functions that can be called without prior declaration.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The following function declarations are automatically imported into any script:
        </div>

        <CodeBlock>{`/** Returns true if all the elements in collection are true. */
def allOf(conditions: Coll[Boolean]): Boolean

/** Returns true if at least on element of the conditions is true */
def anyOf(conditions: Coll[Boolean]): Boolean

/** Similar to allOf, but performing logical XOR operation instead of && */
def xorOf(conditions: Coll[Boolean]): Boolean 

/** Returns SigmaProp value which can be ZK proven to be true 
 * if at least k properties can be proven to be true. 
 */
def atLeast(k: Int, properties: Coll[SigmaProp]): SigmaProp
    
/** Embedding of Boolean values to SigmaProp values. As an example, this
 * operation allows boolean expressions to be used as arguments of
 * atLeast(..., sigmaProp(myCondition), ...) operation.
 */
def sigmaProp(condition: Boolean): SigmaProp
        
/** Cryptographic hash function Blake2b256 (See scorex.crypto.hash.Blake2b256) */
def blake2b256(input: Coll[Byte]): Coll[Byte]

/** Cryptographic hash function Sha256 (See scorex.crypto.hash.Sha256) */
def sha256(input: Coll[Byte]): Coll[Byte]

/** Create BigInt from a collection of bytes. */
def byteArrayToBigInt(input: Coll[Byte]): BigInt

/** Create Long from a collection of bytes. */
def byteArrayToLong(input: Coll[Byte]): Long  

/** Returns bytes representation of Long value. */
def longToByteArray(input: Long): Coll[Byte]

/** Convert bytes representation of group element (ECPoint) 
  * to a new value of GroupElement (using
  * org.bouncycastle.math.ec.ECCurve.decodePoint())
  */
def decodePoint(bytes: Coll[Byte]): GroupElement 

/** Extracts Context variable by id and type.
  * ErgoScript is typed, so accessing a the variables is an operation which involves
  * some expected type given in brackets. Thus getVar[Int](id) expression should
  * evaluate to a valid value of the Option[Int] type.
  *
  * For example val x = getVar[Int](10) expects the variable, if it is present, to have
  * type Int. 
  *
  * There are three cases:
  * 1) If the variable doesn't exist.
  *   Then val x = getVar[Int](id) succeeds and returns the None value, which conforms to
  *   any value of type Option[T] for any T. (In the example above T is equal to
  *   Int). Calling x.get fails when x is equal to None, but x.isDefined
  *   succeeds and returns false.
  * 2) If the variable contains a value v of type Int.
  *   Then val x = getVar[Int](id) succeeds and returns Some(v), which is a valid value
  *   of type Option[Int]. In this case, calling x.get succeeds and returns the
  *   value v of type Int. Calling x.isDefined returns true.
  * 3) If the variable contains a value v of type T other then Int.
  *   Then val x = getVar[Int](id) fails, because there is no way to return a valid value
  *   of type Option[Int]. The value of variable is present, so returning it as None
  *   would break the typed semantics of variables collection.
  *
  * In some use cases one variable may have values of different types. To access such
  * variable an additional variable can be used as a tag.
  *
  * <pre class="stHighlight">
  *   val tagOpt = getVar[Int](id)
  *   val res = if (tagOpt.isDefined) {
  *     val tag = tagOpt.get
  *     if (tag == 1) {
  *       val x = getVar[Int](id2).get
  *       // compute res when value x is of type Int
  *     } else if (tag == 2) {
  *       val x = getVar[GroupElement](id2).get
  *       // compute res when value x is of type GroupElement
  *     } else if (tag == 3) {
  *       val x = getVar[ Array[Byte] ](id2).get
  *       // compute res when value x of type Array[Byte]
  *     } else {
  *       // compute res when tag is not 1, 2 or 3
  *     }
  *   }
  *   else {
  *     // compute value of res when the variable is not present
  *   }
  * </pre>
  *
  * @param id zero-based identifier of the variable.
  * @tparam T expected type of the variable.
  * @return Some(value) if the variable is defined in the context AND has the given type.
  *         None otherwise
  * @throws special.sigma.InvalidType exception when the type of the variable value is
  *                                   different from cT.
  */
def getVar[T](tag: Int): Option[T]

/** Executes the script stored in the Context variable with the given tag.
  * This is distinct from getVar, which simply retrieves the evaluated value stored
  * in the variable. executeFromVar performs a macro-like substitution: it takes
  * the script (typically stored as Coll[Byte] representing serialized ErgoTree)
  * from the variable and executes it in the current context.
  *
  * This is particularly useful for advanced contract patterns like MAST (Merkleized
  * Abstract Syntax Trees) where script fragments are stored and executed dynamically.
  *
  * @param tag zero-based identifier of the context variable containing the script bytes.
  * @tparam T expected type of the script's result after execution.
  * @return The result of executing the script stored in the variable.
  * @throws InterpreterException if the variable is not found, does not contain
  *         valid serialized ErgoTree, or if the script execution fails or results
  *         in a type different from T.
  */
def executeFromVar[T](tag: Int): T

/** Construct a new SigmaProp value representing public key of Diffie Hellman
  * signature protocol. When executed as part of Sigma protocol allow to provide
  * for a verifier a zero-knowledge proof of secret knowledge.
  */
def proveDHTuple(g: GroupElement, h: GroupElement, 
                 u: GroupElement, v: GroupElement): SigmaProp
                 
/** Construct a new SigmaProp value representing public key of discrete
  * logarithm signature protocol. When executed as part of Sigma protocol allow
  * to provide for a verifier a zero-knowledge proof of secret knowledge.
  */
def proveDlog(value: GroupElement): SigmaProp

/** Transforms Base16 encoded string literal into constant of type BigInt.
  * It is a compile-time operation and only string literal (constant) can be its
  * argument.
  */
def fromBase16(input: String): Coll[Byte]

/** Transforms Base58 encoded string literal into constant of type Coll[Byte].
  * It is a compile-time operation and only string literal (constant) can be its
  * argument.
  */
def fromBase58(input: String): Coll[Byte]

/** Transforms Base64 encoded string literal into constant of type Coll[Byte].
  * It is a compile-time operation and only string literal (constant) can be its
  * argument.
  */
def fromBase64(input: String): Coll[Byte]

/** It is executed in compile time. The compiler takes Base58 encoding of public
  * key as String literal and create GroupElement constant. Then the compiler
  * used this constant to construct proveDlog public key out of it.
  */
def PK(input: String): SigmaProp
    
/** Deserializes values from Base58 encoded binary data at compile time into a
  * value of type T.
  */
def deserialize[T](string: String): T

/**
  * Transforms serialized bytes of ErgoTree with segregated constants by
  * replacing constants at given positions with new values. This operation allow
  * to use serialized scripts as pre-defined templates.

  * The typical usage is "check that output box have proposition equal to given
  * script bytes, where minerPk (constants(0)) is replaced with currentMinerPk".
  * Each constant in original scriptBytes have SType serialized before actual
  * data (see ConstantSerializer). During substitution each value from newValues
  * is checked to be an instance of the corresponding type. This means, the
  * constants during substitution cannot change their types.
  *
  * @param scriptBytes serialized ErgoTree with ConstantSegregationFlag set to 1.
  * @param positions zero based indexes in ErgoTree.constants array which should
  *                  be replaced with new values
  * @param newValues new values to be injected into the corresponding positions
  *                  in ErgoTree.constants array
  * @return original scriptBytes array where only specified constants are
  *         replaced and all other bytes remain exactly the same
  */
def substConstants[T](scriptBytes: Coll[Byte], positions: Coll[Int], newValues: Coll[T]): Coll[Byte]`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Examples</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          See <a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">white paper for examples</a>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <Link href="/docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">
              Core Concepts
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/simple-syntax" className="text-cyan-400 hover:underline">
              Simple Syntax
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/sigmaboolean" className="text-cyan-400 hover:underline">
              SigmaBoolean
            </Link>
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Language Specification
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/ergoscript-by-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ErgoScript by Example
            </a>
          </li>
        </ul>
      </div>
    </>
  );
} 