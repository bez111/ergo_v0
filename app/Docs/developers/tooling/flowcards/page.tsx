"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap, ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function FlowCardsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Zap className="w-10 h-10 text-blue-400" />
        FlowCards
      </h1>
      
      <div className="space-y-8">
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
          <p className="text-yellow-200 text-sm">
            <strong>TODO:</strong> Split Paradigm out of this
          </p>
        </div>

        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            FlowCards aim to radically simplify dApp development on Ergo by providing a high-level declarative language, execution runtime, storage format and a graphical notation.
          </p>
          <p>
            See also, <a href="https://github.com/lucagdangelo/flowcardLib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">flowcardLib: Ergo FlowCard library for diagrams.net <ExternalLink className="w-4 h-4 inline ml-1" /></a>
          </p>
        </div>

        <div className="mb-6">
          <Link
            href="/Docs/developers/ergoscript-languages"
            className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to ErgoScript Languages
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h2>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            <a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript <ExternalLink className="w-4 h-4 inline ml-1" /></a> is the smart contract language used by the Ergo blockchain. While it has concise syntax adopted from Scala/Kotlin, it may still seem confusing at first because conceptually, ErgoScript is quite different from conventional languages. This is because Ergo is a UTXO-based blockchain, whereas smart contracts are traditionally associated with account-based systems like Ethereum. However, Ergo's transaction model has many advantages over the account-based model, and with the right approach, developing Ergo contracts can even be significantly easier than writing and debugging Solidity code.
          </p>
          <p className="mb-4">
            Below, we cover the key aspects of the Ergo contract model that make it different:
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Paradigm</h5>
        <div className="text-gray-300 mb-6">
          <p>
            The account model of Ethereum is imperative. This means that the typical task of sending coins from Alice to Bob requires changing the balances in storage as a series of operations. Ergo's UTXO-based programming model, on the other hand, is declarative. ErgoScript contracts specify conditions for a transaction to be accepted by the blockchain (not changes to be made in the storage state resulting from the contract execution).
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Scalability</h5>
        <div className="text-gray-300 mb-6">
          <p>
            In the account model of Ethereum, both storage changes and validity checks are performed <em>on-chain</em> during code execution. In contrast, Ergo transactions are created <em>off-chain</em>, and only validation checks are performed on-chain, thus reducing the number of operations performed by every node on the network. In addition, due to the immutability of the transaction graph, various optimization strategies can improve the throughput of transactions per second in the network. Light verifying nodes are also possible, thus further facilitating scalability and accessibility of the network.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Shared state</h5>
        <div className="text-gray-300 mb-6">
          <p>
            The account-based model relies on the shared mutable state, which is known to lead to complex semantics (and subtle, million-dollar bugs) in the context of concurrent and distributed computation. Ergo's model is based on an immutable graph of transactions. This approach, inherited from Bitcoin, is well-suited to the concurrent and distributed nature of blockchains and facilitates light trustless clients.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Expressive Power</h5>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            Ethereum advocated the execution of a Turing-complete language on the blockchain. It theoretically promised unlimited potential; however, in practice, severe limitations arose from excessive blockchain bloat, subtle multi-million dollar bugs, gas costs that limit contract complexity, and other such problems. Ergo, on the flip side, extends UTXO to enable Turing-completeness while limiting the complexity of the ErgoScript language itself. The same expressive power is achieved in a different, more semantically sound way.
          </p>
          <p className="mb-4">
            With all of the above points, it should be clear that there are many benefits to the model Ergo uses. In the rest of this article, I will introduce you to the concept of FlowCards - a dApp developer component that allows for designing complex Ergo contracts in a declarative and visual way.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">From Imperative to Declarative</h2>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            In the imperative programming model of Ethereum, a transaction is a sequence of operations executed by the Ethereum VM. The following <a href="https://solidity.readthedocs.io/en/develop/introduction-to-smart-contracts.html#subcurrency-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Solidity function <ExternalLink className="w-4 h-4 inline ml-1" /></a> implements a transfer of tokens from <code className="bg-neutral-800 px-2 py-1 rounded">sender</code> to <code className="bg-neutral-800 px-2 py-1 rounded">receiver</code>. The transaction starts when the <code className="bg-neutral-800 px-2 py-1 rounded">sender</code> calls this function on an instance of a contract and ends when the function returns.
          </p>

          <CodeBlock language="typescript">{`// Sends an amount of existing coins from any caller to an address
function send(address receiver, uint amount) public {
    require(amount <= balances[msg.sender], "Insufficient balance.");
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Sent(msg.sender, receiver, amount);
}`}</CodeBlock>

          <p className="mb-4">
            The function first checks the preconditions, then updates the storage (i.e. balances) and finally publishes the post-condition as the <code className="bg-neutral-800 px-2 py-1 rounded">Sent</code> event. The gas which is consumed by the transaction is sent to the miner as a reward for executing this transaction.
          </p>

          <p className="mb-4">
            Unlike Ethereum, a transaction in Ergo is a data structure holding a list of input coins which it spends and a list of output coins which it creates, preserving the total balances of ERGs and tokens (in which Ergo is similar to Bitcoin).
          </p>

          <p className="mb-4">
            Turning back to the example above, since Ergo natively supports tokens, therefore for this specific example of sending tokens, we don't need to write any code in ErgoScript. Instead, we need to create the 'send' transaction shown in the following figure, which describes the same token transfer but declaratively.
          </p>

          <p className="mb-4">
            The picture visually describes the following steps, which the network user needs to perform:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>Select the sender's unspent boxes, containing a total of <code className="bg-neutral-800 px-2 py-1 rounded">tB {'>'}= amount</code> tokens and <code className="bg-neutral-800 px-2 py-1 rounded">B {'>'}= txFee + minErg</code> ERGs.</li>
            <li>Create an output <code className="bg-neutral-800 px-2 py-1 rounded">target</code> box protected by the <code className="bg-neutral-800 px-2 py-1 rounded">receiver</code> public key with <code className="bg-neutral-800 px-2 py-1 rounded">minErg</code> ERGs and <code className="bg-neutral-800 px-2 py-1 rounded">amount</code> of <code className="bg-neutral-800 px-2 py-1 rounded">T</code> tokens.</li>
            <li>Create one <em>fee</em> output protected by the <code className="bg-neutral-800 px-2 py-1 rounded">minerFee</code> contract with <code className="bg-neutral-800 px-2 py-1 rounded">txFee</code> ERGs.</li>
            <li>Create one <em>change</em> output protected by the <code className="bg-neutral-800 px-2 py-1 rounded">sender</code> public key, containing <code className="bg-neutral-800 px-2 py-1 rounded">B - minErg - txFee</code> ERGs and <code className="bg-neutral-800 px-2 py-1 rounded">tB - amount</code> of <code className="bg-neutral-800 px-2 py-1 rounded">T</code> tokens.</li>
            <li>Create a new transaction, sign it using the sender's secret key, and send it to the Ergo network.</li>
          </ol>

          <p className="mb-4">
            What is important to understand here is that all of these steps are performed <em>off-chain</em> (for example, using the <a href="https://github.com/aslesarenko/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Appkit <ExternalLink className="w-4 h-4 inline ml-1" /></a> Transaction API) by the user's application. Ergo network nodes don't need to repeat this transaction creation process; they only need to validate the already formed transaction. ErgoScript contracts are stored in the inputs of the transaction and check spending conditions. The node executes the contracts <em>on-chain</em> when the transaction is validated. The transaction is valid if all conditions are satisfied.
          </p>

          <p className="mb-4">
            Thus, in Ethereum, when we "send amount from sender to recipient", we are literally editing balances and updating the storage with a concrete set of commands. This happens <em>on-chain</em>, and thus a new transaction is also created <em>on-chain</em> as the result of this process.
          </p>

          <p className="mb-4">
            In Ergo (as in Bitcoin), transactions are created <em>off-chain</em>, and the network nodes only verify them. The effects of the transaction on the blockchain state are that input coins (or Boxes in Ergo's parlance) are removed, and output boxes are added to the <a href="https://en.wikipedia.org/wiki/Unspent_transaction_output" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">UTXO <ExternalLink className="w-4 h-4 inline ml-1" /></a> set.
          </p>

          <p>
            In the example above, we don't use an ErgoScript contract but instead, assume a signature check is used as the spending precondition. However, in more complex application scenarios, we, of course, need to use ErgoScript, which is what we are going to discuss next.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">From Changing State to Checking Context</h2>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            In the <code className="bg-neutral-800 px-2 py-1 rounded">send</code> function example, we first checked the precondition (<code className="bg-neutral-800 px-2 py-1 rounded">require(amount {'<'}= balances[msg.sender],...)</code>) and then changed the state (i.e., updated balances <code className="bg-neutral-800 px-2 py-1 rounded">balances[msg.sender] -= amount</code>). This is typical of Ethereum transactions. Before we change anything, we need to check if it is valid to do so.
          </p>

          <p className="mb-4">
            In Ergo, as we discussed previously, the state (i.e., the UTXO set of boxes) is changed implicitly when a valid transaction is included in a block. Thus, we only need to check the preconditions before the transaction can be added to the block. This is what ErgoScript contracts do.
          </p>

          <p className="mb-4">
            It is not possible to "change the state" in ErgoScript because it is a language for checking preconditions for spending coins. ErgoScript is a purely functional language without side effects that operates on immutable data values. This means all the inputs, outputs, and other transaction parameters available in a script are immutable. This, among other things, makes ErgoScript a very simple language that is easy to learn and safe to use. Similar to Bitcoin, each input box contains a script, which should return the <code className="bg-neutral-800 px-2 py-1 rounded">true</code> value in order to 1) allow spending of the box (i.e., remove it from the UTXO set) and 2) allow the transaction to be added to the block.
          </p>

          <p className="mb-4">
            If we are being pedantic, it is therefore incorrect (strictly speaking) to think of ErgoScript as the language of Ergo contracts because it is the language of propositions (logical predicates, formulas, etc.) that protect boxes from "illegal" spending. Unlike Bitcoin, in Ergo, the whole transaction and a part of the current blockchain context are available to every script. Therefore, each script may check which outputs are created by the transaction, their ERG and token amounts (we will use this capability in our example DEX contracts), the current block number, etc.
          </p>

          <p className="mb-4 italic">
            In ErgoScript, you define whether the conditions of changes (i.e., coin spending) are allowed to happen in a given context. This is in contrast to programming the changes imperatively in the code of a contract.
          </p>

          <p className="mb-4">
            While Ergo's transaction model unlocks a whole range of applications (like DEX, DeFi Apps, LETS, etc.), designing contracts as preconditions for coin spending (or guarding scripts) directly is not intuitive. In the next sections, we will consider a useful graphical notation to design contracts declaratively using <em>FlowCard Diagrams</em>, which are a visual representation of executable components (FlowCards).
          </p>

          <p>
            <em>FlowCards aim to radically simplify dApp development on Ergo by providing a high-level declarative language, execution runtime, storage format, and a graphical notation</em>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">FlowCard Diagrams</h2>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            The idea behind FlowCard diagrams is based on the following observations: 1) An Ergo box is immutable and can only be spent in the transaction that uses it as an input. 2) Therefore, we can draw a flow of boxes through transactions so that boxes <em>flowing in</em> to the transaction are spent and those <em>flowing out</em> are created and added to the UTXO set. 3) A transaction from this perspective is simply a transformer of old boxes to new ones, preserving the balances of ERGs and tokens involved.
          </p>

          <p className="mb-4">
            The following figure shows the main elements of the Ergo transaction we've already seen previously (now under the name of FlowCard Diagram).
          </p>

          <p className="mb-4">
            There is a strictly defined meaning (semantics) behind every element of <em>the diagram</em>, so that the diagram is a visual representation (or a view) of the underlying executable component (called FlowCard).
          </p>

          <p className="mb-4">
            The FlowCard can be used as a reusable component of an Ergo dApp to create and initiate the transaction on the Ergo blockchain. We will discuss this in the coming sections.
          </p>

          <p>
            Now let's look at the individual pieces of the FlowCard diagram one by one.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">1. Name and Parameters</h5>
        <div className="text-gray-300 mb-6">
          <p>
            Each flow card is given a name and a list of typed parameters. This is similar to a template with parameters. In the above figure, we can see the <code className="bg-neutral-800 px-2 py-1 rounded">Send</code> flow card, which has five parameters. The parameters are used in the specification.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">2. Contract Wallet</h5>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            This is a key element of the flow card. Every box has a guarding script. Often, it is the script that checks a signature against a public key. This script is trivial in ErgoScript and is defined like the <code className="bg-neutral-800 px-2 py-1 rounded">def pk(pubkey: Address) = {'{'} pubkey {'}'}</code> template, where <code className="bg-neutral-800 px-2 py-1 rounded">pubkey</code> is a parameter of the type <code className="bg-neutral-800 px-2 py-1 rounded">Address</code>. In the figure, the script template is applied to the parameter <code className="bg-neutral-800 px-2 py-1 rounded">pk(sender)</code>, and thus a concrete wallet contract is obtained. Therefore, <code className="bg-neutral-800 px-2 py-1 rounded">pk(sender)</code> and <code className="bg-neutral-800 px-2 py-1 rounded">pk(receiver)</code> yield different scripts and represent <em>different</em> wallets on the diagram, even though they use the same template.
          </p>
          <p>
            <em>Contract Wallet</em> contains a set of all UTXO boxes which have a given script derived from the given script template using flow card parameters. For example, in the figure, the template is <code className="bg-neutral-800 px-2 py-1 rounded">pk</code>, and the parameter <code className="bg-neutral-800 px-2 py-1 rounded">pubkey</code> is substituted with the <code className="bg-neutral-800 px-2 py-1 rounded">sender</code> flow card parameter.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">3. Contract</h5>
        <div className="text-gray-300 mb-6">
          <p>
            Even though a contract is a property of a box, on the diagram, we group the boxes by their contracts. Therefore, it looks like the boxes belong to the contracts rather than the contracts belonging to the boxes. In the example, we have three instantiated contracts: <code className="bg-neutral-800 px-2 py-1 rounded">pk(sender)</code>, <code className="bg-neutral-800 px-2 py-1 rounded">pk(receiver)</code>, and <code className="bg-neutral-800 px-2 py-1 rounded">minerFee</code>. Note that <code className="bg-neutral-800 px-2 py-1 rounded">pk(sender)</code> is the instantiation of the <code className="bg-neutral-800 px-2 py-1 rounded">pk</code> template with the concrete parameter <code className="bg-neutral-800 px-2 py-1 rounded">sender</code>, and <code className="bg-neutral-800 px-2 py-1 rounded">minerFee</code> is the instantiation of the pre-defined contract that protects the miner reward boxes.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">4. Box name</h5>
        <div className="text-gray-300 mb-6">
          <p>
            In the diagram, we can give each box a name. Besides the readability of the diagram, we also use the name as a synonym for a more complex indexed access to the box in the contract. For example, <code className="bg-neutral-800 px-2 py-1 rounded">change</code> is the name of the box, which can also be used in the ErgoScript conditions instead of <code className="bg-neutral-800 px-2 py-1 rounded">OUTPUTS(2)</code>. We also use box names to associate spending conditions with the boxes.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">5. Boxes in the wallet</h5>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            In the diagram, we show boxes (darker rectangles) as belonging to the contract wallets (lighter rectangles). Each such <em>box rectangle</em> is connected to a grey <em>transaction rectangle</em> by either <strong>orange</strong> or <strong>green</strong> arrows or both. An output box (with an incoming green arrow) may include many lines of text where each line specifies a condition that should be checked as part of the transaction. The first line specifies the condition on the amount of ERG that should be placed in the box. Other lines may take one of the following forms:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><code className="bg-neutral-800 px-2 py-1 rounded">amount: TOKEN</code> - the box should contain the given <code className="bg-neutral-800 px-2 py-1 rounded">amount</code> of the given <code className="bg-neutral-800 px-2 py-1 rounded">TOKEN</code>.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">R == value</code> - the box should contain the given <code className="bg-neutral-800 px-2 py-1 rounded">value</code> in the given register <code className="bg-neutral-800 px-2 py-1 rounded">R</code>.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">boxName ? condition</code> - the box named <code className="bg-neutral-800 px-2 py-1 rounded">boxName</code> should check <code className="bg-neutral-800 px-2 py-1 rounded">condition</code> in its script.</li>
          </ol>
          <p>
            We discuss these conditions in the sections below.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">6. Amount of ERGs in the box</h5>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            Each box must store a minimum amount of ERGs. This is checked when the creating transaction is validated. In the diagram, the amount of ERGs is <em>always</em> shown as the first line (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">B: ERG</code> or <code className="bg-neutral-800 px-2 py-1 rounded">B - minErg - txFee</code>). The value type ascription <code className="bg-neutral-800 px-2 py-1 rounded">B: ERG</code> is optional and may be used for readability. When the value is given as a formula, then this formula must be respected by the transaction that creates the box.
          </p>
          <p>
            It is important to understand that variables like <code className="bg-neutral-800 px-2 py-1 rounded">amount</code> and <code className="bg-neutral-800 px-2 py-1 rounded">txFee</code> are not named properties of the boxes. They are parameters of the whole diagram and represent specific amounts. Put another way, they are shared parameters between transactions (e.g., Sell Order and Swap transactions from the DEX example below share the <code className="bg-neutral-800 px-2 py-1 rounded">tAmt</code> parameter). So, the same name is tied to the same value throughout the diagram (this is where tooling would help significantly). However, when it comes to <em>on-chain</em> validation of those values, only explicit conditions marked with <code className="bg-neutral-800 px-2 py-1 rounded">?</code> are transformed into ErgoScript. At the same time, all other conditions are ensured <em>off-chain</em> during transaction building (for example, in an application using the Appkit API) and during transaction validation when it is added to the blockchain.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">7. Amount of T token</h5>
        <div className="text-gray-300 mb-6">
          <p>
            A box can store the values of many tokens. The tokens on the diagram are named, and a <code className="bg-neutral-800 px-2 py-1 rounded">value</code> variable may be associated with the token <code className="bg-neutral-800 px-2 py-1 rounded">T</code> using the <code className="bg-neutral-800 px-2 py-1 rounded">value: T</code> expression. The <code className="bg-neutral-800 px-2 py-1 rounded">value</code> may be given as a formula. If the formula is prefixed with a box name like <code className="bg-neutral-800 px-2 py-1 rounded">boxName ? formula</code>, then it should also be checked in the guarding script of the <code className="bg-neutral-800 px-2 py-1 rounded">boxName</code> box. This additional specification is very convenient because 1) it allows the visual design to be validated automatically, and 2) the conditions specified in the boxes of a diagram are enough to synthesize the necessary guarding scripts (more about this below at <strong>"From Diagrams To ErgoScript Contracts"</strong>).
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">8. Tx Inputs</h5>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            Inputs are connected to the corresponding transaction by <strong>orange</strong> arrows. An input arrow may have a label of the following forms:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><code className="bg-neutral-800 px-2 py-1 rounded">name@index</code> - optional name with an index, e.g., <code className="bg-neutral-800 px-2 py-1 rounded">fee@0</code> or <code className="bg-neutral-800 px-2 py-1 rounded">@2</code>. This is a property of the target endpoint of the arrow. The name is used in conditions of related boxes, and the <code className="bg-neutral-800 px-2 py-1 rounded">index</code> is the position of the corresponding box in the <code className="bg-neutral-800 px-2 py-1 rounded">INPUTS</code> collection of the transaction.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">!action</code> - is a property of the source of the arrow and gives a name for an alternative spending path of the box (we will see this in the DEX example).</li>
          </ol>
          <p>
            Because of alternative spending paths, a box may have many outgoing <strong>orange</strong> arrows, in which case they should be labeled with different actions.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">9. Transaction</h5>
        <div className="text-gray-300 mb-6">
          <p>
            A transaction spends input boxes and creates output boxes. The input boxes are given by the <strong>orange</strong> arrows, and the labels are expected to place inputs at the right indexes in the <code className="bg-neutral-800 px-2 py-1 rounded">INPUTS</code> collection. The output boxes are given by the <strong>green</strong> arrows. Each transaction must preserve a strict balance of ERG values (sum of inputs == sum of outputs), and for each token, the sum of inputs {'>'}= the sum of outputs. The design diagram requires an explicit specification of the ERG and token values for all output boxes to avoid implicit errors and ensure better readability.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">10. Tx Outputs</h5>
        <div className="text-gray-300 mb-6">
          <p>
            Outputs are connected to the corresponding transaction by <strong>green</strong> arrows. An output arrow may have a label of the following form <code className="bg-neutral-800 px-2 py-1 rounded">name@index</code>, where an optional name is accompanied by an index, e.g., <code className="bg-neutral-800 px-2 py-1 rounded">fee@0</code> or <code className="bg-neutral-800 px-2 py-1 rounded">@2</code>. This is a property of the source endpoint of the arrow. The name is used in conditions of the related boxes, and the <code className="bg-neutral-800 px-2 py-1 rounded">index</code> is the position of the corresponding box in the <code className="bg-neutral-800 px-2 py-1 rounded">OUTPUTS</code> collection of the transaction.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example: Decentralized Exchange (DEX)</h2>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            Now let's use the above-described notation to design a FlowCard for a DEX dApp. It is simple enough yet also illustrates all the key features of FlowCard diagrams that we've introduced in the previous section.
          </p>
          <p className="mb-4">
            The dApp scenario is shown in the figure below:
            There are three participants (buyer, seller, and DEX) of the DEX dApp and five different transaction types that are created by participants. The buyer wants to swap <code className="bg-neutral-800 px-2 py-1 rounded">ergAmt</code> of ERGs for <code className="bg-neutral-800 px-2 py-1 rounded">tAmt</code> of <code className="bg-neutral-800 px-2 py-1 rounded">TID</code> tokens (or vice versa, the seller wants to sell <code className="bg-neutral-800 px-2 py-1 rounded">TID</code> tokens for ERGs; who sends the order first doesn't matter). Both the buyer and the seller can cancel their orders at any time. The DEX off-chain matching service can find matching orders and create the <code className="bg-neutral-800 px-2 py-1 rounded">Swap</code> transaction to complete the exchange.
          </p>
          <p className="mb-4">
            The following diagram fully (and formally) specifies all five transactions that must be created <em>off-chain</em> by the DEX dApp. It also specifies all the spending conditions that must be verified <em>on-chain</em>.
          </p>
          <p>
            Let's discuss the FlowCard diagram and the logic of each transaction in detail:
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Buy Order Transaction</h5>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            A buyer creates a <code className="bg-neutral-800 px-2 py-1 rounded">Buy Order</code> transaction. The transaction spends <code className="bg-neutral-800 px-2 py-1 rounded">E</code> amount of ERGs (which we will write <code className="bg-neutral-800 px-2 py-1 rounded">E: ERG</code>) from one or more boxes in the <code className="bg-neutral-800 px-2 py-1 rounded">pk(buyer)</code> wallet. The transaction creates a <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box with <code className="bg-neutral-800 px-2 py-1 rounded">ergAmt: ERG</code> protected by the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> script. The <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> script is synthesized from the specification (see below at <strong>"From Diagrams To ErgoScript Contracts"</strong>) either manually or automatically by a tool. Even though we don't need to define the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> script explicitly during design, at run time, the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box must contain the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> script as the guarding proposition (which checks the box spending conditions); otherwise, the conditions specified in the diagram will not be checked.
          </p>
          <p>
            The <code className="bg-neutral-800 px-2 py-1 rounded">change</code> box is created to make the input and output sums of the transaction balanced. The transaction fee box is omitted because it can be added automatically by the tools. In practice, however, the designer can add the fee box explicitly to the diagram. This covers cases of more complex transactions (like swap) where there are many ways to pay the transaction fee.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Cancel Buy, Cancel Sell Transactions</h5>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            At any time, the <code className="bg-neutral-800 px-2 py-1 rounded">buyer</code> can cancel the order by sending a <code className="bg-neutral-800 px-2 py-1 rounded">CancelBuy</code> transaction. The transaction must satisfy the guarding <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> contract that protects the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box.
          </p>
          <p>
            As you can see on the diagram, both the <code className="bg-neutral-800 px-2 py-1 rounded">Cancel</code> and the <code className="bg-neutral-800 px-2 py-1 rounded">Swap</code> transactions can spend the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box. When a box has spending alternatives (or <em>spending paths</em>), each alternative is identified by a unique name prefixed with <code className="bg-neutral-800 px-2 py-1 rounded">!</code> (<code className="bg-neutral-800 px-2 py-1 rounded">!cancel</code> and <code className="bg-neutral-800 px-2 py-1 rounded">!swap</code> for the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box). Each alternative path has specific spending conditions. In our example, when the <code className="bg-neutral-800 px-2 py-1 rounded">Cancel Buy</code> transaction spends the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box, the <code className="bg-neutral-800 px-2 py-1 rounded">?buyer</code> condition must be satisfied, which we read as "the signature for the <code className="bg-neutral-800 px-2 py-1 rounded">buyer</code> address must be presented in the transaction". Therefore, only the buyer can cancel the buy order. This "signature" condition is only required for the <code className="bg-neutral-800 px-2 py-1 rounded">!cancel</code> alternative spending path and not required for <code className="bg-neutral-800 px-2 py-1 rounded">!swap</code>.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Sell Order Transaction</h5>
        <div className="text-gray-300 mb-6">
          <p>
            The <code className="bg-neutral-800 px-2 py-1 rounded">Sell Order</code> transaction is similar to the <code className="bg-neutral-800 px-2 py-1 rounded">BuyOrder</code> in that it deals with tokens in addition to ERGs. The transaction spends <code className="bg-neutral-800 px-2 py-1 rounded">E: ERG</code> and <code className="bg-neutral-800 px-2 py-1 rounded">T: TID</code> tokens from the seller's wallet (specified as the <code className="bg-neutral-800 px-2 py-1 rounded">pk(seller)</code> contract). The two outputs are <code className="bg-neutral-800 px-2 py-1 rounded">ask</code> and <code className="bg-neutral-800 px-2 py-1 rounded">change</code>. The <code className="bg-neutral-800 px-2 py-1 rounded">change</code> box is a standard box to balance transactions. The <code className="bg-neutral-800 px-2 py-1 rounded">ask</code> box keeps <code className="bg-neutral-800 px-2 py-1 rounded">tAmt: TID</code> tokens for the exchange and <code className="bg-neutral-800 px-2 py-1 rounded">minErg: ERG</code> - the minimum amount of ERGs required in every box.
          </p>
        </div>

        <h5 className="text-lg font-bold text-orange-400 mb-4">Swap Transaction</h5>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            This is a key transaction in the DEX dApp scenario. The transaction has several spending conditions on the input boxes, and those conditions are included in the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> and <code className="bg-neutral-800 px-2 py-1 rounded">sellOrder</code> scripts, which are verified when the transaction is added to the blockchain. However, on the diagram, those conditions are not specified in the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> and <code className="bg-neutral-800 px-2 py-1 rounded">ask</code> boxes; they are instead defined in the output boxes of the transaction.
          </p>
          <p className="mb-4">
            This is a convention for improved usability because most conditions relate to the properties of the output boxes. We could specify those properties in the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box, but then we would have to use more complex expressions.
          </p>
          <p className="mb-4">
            Let's consider the output created by the arrow labeled with <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut@0</code>. This label tells us that the output is at index <code className="bg-neutral-800 px-2 py-1 rounded">0</code> in the <code className="bg-neutral-800 px-2 py-1 rounded">OUTPUTS</code> collection of the transaction and that in the diagram, we can refer to this box by the <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut</code> name. Thus, we can label both the box itself and the arrow to give the box a name.
          </p>
          <p className="mb-4">
            The conditions shown in the <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut</code> box have the form <code className="bg-neutral-800 px-2 py-1 rounded">bid ? condition</code>, which means they must be verified <em>on-chain</em> in order to spend the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box. The conditions have the following meaning:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><code className="bg-neutral-800 px-2 py-1 rounded">tAmt: TID</code> requires the box to have <code className="bg-neutral-800 px-2 py-1 rounded">tAmt</code> amount of <code className="bg-neutral-800 px-2 py-1 rounded">TID</code> token.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">R4 == bid.id</code> requires the R4 register in the box to be equal to the id of the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> box.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">script == buyer</code> requires the <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut</code> box to have the script of the wallet where it is located on the diagram (i.e., <code className="bg-neutral-800 px-2 py-1 rounded">pk(buyer)</code>).</li>
          </ul>
          <p className="mb-4">
            Similar properties are added to the <code className="bg-neutral-800 px-2 py-1 rounded">sellerOut</code> box, which is specified to be at index <code className="bg-neutral-800 px-2 py-1 rounded">1</code>, and the name is given to it using the label on the box itself rather than on the arrow.
          </p>
          <p className="mb-4">
            The <code className="bg-neutral-800 px-2 py-1 rounded">Swap</code> transaction spends two boxes, <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> and <code className="bg-neutral-800 px-2 py-1 rounded">ask</code>, using the <code className="bg-neutral-800 px-2 py-1 rounded">!swap</code> spending path on both; however, unlike <code className="bg-neutral-800 px-2 py-1 rounded">!cancel</code>, the conditions on the path are not specified. This is where the <code className="bg-neutral-800 px-2 py-1 rounded">bid ?</code> and <code className="bg-neutral-800 px-2 py-1 rounded">ask ?</code> prefixes come into play. They are used so that the conditions listed in the <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut</code> and <code className="bg-neutral-800 px-2 py-1 rounded">sellerOut</code> boxes are moved to the <code className="bg-neutral-800 px-2 py-1 rounded">!swap</code> spending path of the <code className="bg-neutral-800 px-2 py-1 rounded">bid</code> and <code className="bg-neutral-800 px-2 py-1 rounded">ask</code> boxes, respectively.
          </p>
          <p>
            If you look at the conditions of the output boxes, you will see that they exactly specify the swap of values between the seller's and buyer's wallets. The buyer gets the necessary amount of the <code className="bg-neutral-800 px-2 py-1 rounded">TID</code> token, and the seller gets the corresponding amount of ERGs. The <code className="bg-neutral-800 px-2 py-1 rounded">Swap</code> transaction is created when there are two matching boxes with <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> and <code className="bg-neutral-800 px-2 py-1 rounded">sellOrder</code> contracts.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">From Diagrams To ErgoScript Contracts</h2>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            What is interesting about FlowCard specifications is that we can use them to automatically generate the necessary <a href="https://ergoplatform.org/docs/ErgoTree.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTree <ExternalLink className="w-4 h-4 inline ml-1" /></a> scripts. With appropriate tooling support, this can be done automatically, but lacking that, it can be done manually. Thus, the FlowCard allows us to capture and visually represent all design choices and semantic details of an Ergo dApp.
          </p>
          <p className="mb-4">
            What we are going to do next is mechanically create the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> contract from the information given in the <code className="bg-neutral-800 px-2 py-1 rounded">DEX</code> flow card. Recall that each script is a proposition (boolean-valued expression) that must evaluate to <code className="bg-neutral-800 px-2 py-1 rounded">true</code> to allow spending of the box. When we have many conditions to be met simultaneously, we can combine them in a logical formula using the AND binary operation, and if we have alternatives (not necessarily exclusive), we can put them into the OR operation. The <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> box has the alternative spending paths <code className="bg-neutral-800 px-2 py-1 rounded">!cancel</code> and <code className="bg-neutral-800 px-2 py-1 rounded">!swap</code>.
          </p>
          <p className="mb-4">
            Thus, the ErgoScript code should have an OR operation with two arguments - one for each spending path.
          </p>

          <CodeBlock language="typescript">{`/** buyOrder contract */
{
  val cancelCondition = {}
  val swapCondition = {}
  cancelCondition || swapCondition
}`}</CodeBlock>

          <p className="mb-4">
            The formula for the <code className="bg-neutral-800 px-2 py-1 rounded">cancelCondition</code> expression is given in the <code className="bg-neutral-800 px-2 py-1 rounded">!cancel</code> spending path of the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> box. We can directly include it in the script.
          </p>

          <CodeBlock language="typescript">{`/** buyOrder contract */
{
  val cancelCondition = { buyer }
  val swapCondition = {}
  cancelCondition || swapCondition
}`}</CodeBlock>

          <p className="mb-4">
            For the <code className="bg-neutral-800 px-2 py-1 rounded">!swap</code> spending path of the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> box, the conditions are specified in the <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut</code> output box of the <code className="bg-neutral-800 px-2 py-1 rounded">Swap</code> transaction. If we simply include them in the <code className="bg-neutral-800 px-2 py-1 rounded">swapCondition</code>, then we get a syntactically incorrect script.
          </p>

          <CodeBlock language="typescript">{`/** buyOrder contract */
{
  val cancelCondition = { buyer }
  val swapCondition = {
    tAmt: TID &&
    R4 == bid.id &&
    @contract
  }
  cancelCondition || swapCondition
}`}</CodeBlock>

          <p className="mb-4">
            We can, however, translate the conditions from the diagram syntax to ErgoScript expressions using the following simple rules:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><code className="bg-neutral-800 px-2 py-1 rounded">buyerOut@0</code> =={'>'} <code className="bg-neutral-800 px-2 py-1 rounded">val buyerOut = OUTPUTS(0)</code></li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">tAmt: TID</code> =={'>'} <code className="bg-neutral-800 px-2 py-1 rounded">tid._2 == tAmt</code> where <code className="bg-neutral-800 px-2 py-1 rounded">tid = buyerOut.tokens(TID)</code></li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">R4 == bid.id</code> =={'>'} <code className="bg-neutral-800 px-2 py-1 rounded">R4 == SELF.id</code> where <code className="bg-neutral-800 px-2 py-1 rounded">R4 = buyerOut.R4[Coll[Byte]].get</code></li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded">script == buyer</code> =={'>'} <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut.propositionBytes == buyer.propBytes</code></li>
          </ol>

          <p className="mb-4">
            Note, in the diagram, <code className="bg-neutral-800 px-2 py-1 rounded">TID</code> represents a token ID, but ErgoScript doesn't have access to tokens by their IDs, so we cannot write <code className="bg-neutral-800 px-2 py-1 rounded">tokens.getByKey(TID)</code>. For this reason, when the diagram is translated into ErgoScript, <code className="bg-neutral-800 px-2 py-1 rounded">TID</code> becomes a named constant representing the index in the <code className="bg-neutral-800 px-2 py-1 rounded">tokens</code> collection of the box. The concrete value of the constant is assigned when the <code className="bg-neutral-800 px-2 py-1 rounded">BuyOrder</code> transaction with the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> box is created. The correspondence and consistency between the actual token ID, the <code className="bg-neutral-800 px-2 py-1 rounded">TID</code> constant, and the actual tokens of the <code className="bg-neutral-800 px-2 py-1 rounded">buyerOut</code> box is ensured by the <em>off-chain</em> application code; this is completely possible since all transactions are created by the application using the FlowCard as a guiding specification. This may sound complicated, but it is part of the translation from diagram specification to actual executable application code, most of which can be automated.
          </p>

          <p className="mb-4">
            After the transformation, we can obtain a correct script that checks all the required preconditions for spending the <code className="bg-neutral-800 px-2 py-1 rounded">buyOrder</code> box.
          </p>

          <CodeBlock language="typescript">{`/** buyOrder contract */
def DEX(buyer: Addrss, seller: Address, TID: Int, ergAmt: Long, tAmt: Long)
{
  val cancelCondition: SigmaProp = { buyer }      // verify buyer's sig (ProveDlog)
  val swapCondition = OUTPUTS.size > 0 && {       // securing OUTPUTS access
    val buyerOut = OUTPUTS(0)                     // from buyerOut@0
    buyerOut.tokens.size > TID && {               // securing tokens access
      val tid = buyerOut.tokens(TID)
      val regR4 = buyerOut.R4[Coll[Byte]]
      regR4.isDefined && {                        // securing R4 access
        val R4 = regR4.get
        tid._2 == tAmt &&                             // from tAmt: TID 
        R4 == SELF.id &&                              // from R4 == bid.id
        buyerOut.propositionBytes == buyer.propBytes  // from script == buyer
      }
    } 
  }
  cancelCondition || swapCondition
}`}</CodeBlock>

          <p>
            A similar script for the <code className="bg-neutral-800 px-2 py-1 rounded">sellOrder</code> box can be obtained using the same translation rules. With the help of the tooling, the code of contracts can be mechanically generated from the diagram specification.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Conclusions</h2>
        <div className="text-gray-300 mb-8">
          <p className="mb-4">
            Declarative programming models have already won the battle against imperative programming in many application domains (like Big Data, Stream Processing, Deep Learning, Databases, etc.). Ergo is pioneering the declarative model of dApp development as a better and safer alternative to the now-popular imperative model of smart contracts.
          </p>
          <p className="mb-4">
            The concept of FlowCard shifts the focus from writing ErgoScript contracts to the overall flow of values (hence the name) in such a way that ErgoScript can always be generated from them. You may never need to look at the ErgoScript code once the tooling is in place.
          </p>
          <p className="mb-4">
            Here are the possible next steps for future work:
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Storage format for FlowCard Spec and a corresponding EIP-standardized file format (JSON/XML/Protobuf). This will allow various tools (Diagram Editor, Runtime, dApps, etc.) to create and use <code className="bg-neutral-800 px-2 py-1 rounded">*.flowcard</code> files.</li>
            <li>FlowCard Viewer, which can generate diagrams from <code className="bg-neutral-800 px-2 py-1 rounded">*.flowcard</code> files.</li>
            <li>FlowCard Runtime, which can run <code className="bg-neutral-800 px-2 py-1 rounded">*.flowcard</code> files, create, and send transactions to the Ergo network.</li>
            <li>FlowCard Designer Tool, which can simplify the development of complex diagrams. This will make designing and validating Ergo contracts a pleasant experience, more like drawing than coding. In addition, the correctness of the whole dApp scenario can be verified and controlled by the tooling.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">References</h2>
        <div className="text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://ergoplatform.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo <ExternalLink className="w-4 h-4 inline ml-1" /></a></li>
            <li><a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Appkit <ExternalLink className="w-4 h-4 inline ml-1" /></a></li>
            <li><a href="https://ergoplatform.org/en/blog/2019_12_03_top5/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Introduction to Appkit <ExternalLink className="w-4 h-4 inline ml-1" /></a></li>
            <li><a href="https://github.com/aslesarenko/ergo-appkit-examples" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Appkit Examples <ExternalLink className="w-4 h-4 inline ml-1" /></a></li>
            <li><a href="https://ergoplatform.org/docs/ErgoTree.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTree Specification <ExternalLink className="w-4 h-4 inline ml-1" /></a></li>
            <li><a href="https://github.com/lucagdangelo/flowcardLib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">flowcardLib: Ergo FlowCard library for diagrams.net <ExternalLink className="w-4 h-4 inline ml-1" /></a></li>
          </ul>

          <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-gray-400 mt-8">
            With thanks to <a href="https://github.com/robkorn" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Robert Kornacki <ExternalLink className="w-4 h-4 inline ml-1" /></a> for polishing the draft.
          </blockquote>
        </div>
      </div>
    </>
  );
} 