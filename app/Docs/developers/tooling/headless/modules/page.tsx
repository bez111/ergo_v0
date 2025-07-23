"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function HeadlessModulesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Modules Of The Ergo Headless dApp Framework</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/pathways/headless"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Box Spec</h2>
      <p className="text-gray-300 mb-4">This module exposes the <code>BoxSpec</code> struct, which allows you to create a specification of a UTXO. This is used for defining the boxes which are required for the actions of your protocol.</p>
      <UniversalCopyCodeBlock code={`/// A specification which specifies parameters of an \`ErgoBox\`.
/// This spec is used as a "source of truth" to both verify and find
/// \`ErgoBox\`es which match the spec. This is often used for defining
/// Stages in multi-stage smart contract protocols, but can also be used
/// to define input boxes for Actions.
/// All fields are wrapped in \`Option\`s to allow ignoring specifying
/// the field.
#[wasm_bindgen]
#[derive(Clone)]
pub struct BoxSpec {
    /// The address of the box
    address: Option&lt;ErgoAddressString&gt;,
    /// The allowed range of nanoErgs
    value_range: Option&lt;Range&lt;NanoErg&gt;&gt;,
    /// A sorted list of \`Constant\`s which define registers
    /// of an \`ErgoBox\`.
    /// First element is treated as R4, second as R5, and so on.
    registers: Vec&lt;Option&lt;Constant&gt;&gt;,
    /// A sorted list of \`TokenSpec\`s which define tokens
    /// of an \`ErgoBox\`.
    tokens: Vec&lt;Option&lt;TokenSpec&gt;&gt;,
    /// An optional predicate which allows for defining custom
    /// specification logic which gets processed when verifying
    /// the box.
    predicate: Option&lt;fn(&ErgoBox) -&gt; bool&gt;,
}`} />
      <p className="text-gray-300 mb-4">Once you've constructed a <code>BoxSpec</code>, you have a number of essential methods that simplify the experience of writing off-chain code for dApps.</p>
      <p className="text-gray-300 mb-4">For example, <code>verify_box</code> allows you to test whether an <code>ErgoBox</code> you provide as input matches the specification you created with your <code>BoxSpec</code>.</p>
      <UniversalCopyCodeBlock code={`pub fn verify_box(&self, ergo_box: &ErgoBox) -> Result<()> {`} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Box Traits</h2>
      <p className="text-gray-300 mb-4">This module exposes two traits:</p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li><code>WrappedBox</code></li>
        <li><code>SpecifiedBox</code></li>
        <li><code>ExplorerFindable</code></li>
      </ol>
      <p className="text-gray-300 mb-4">All <code>ExplorerFindable</code> structs are also <code>SpecifiedBox</code>es which are all <code>WrappedBox</code>es. In your off-chain code you will be defining all of your inputs UTXOs to actions as structs that implement <code>SpecifiedBox</code>, while automatically deriving <code>WrappedBox</code> and <code>ExplorerFindable</code> without any extra work.</p>
      <p className="text-gray-300 mb-4"><code>WrappedBox</code>es provide a simplified interface for interacting with <code>ErgoBox</code>es. <code>SpecifiedBox</code>es on the other hand specify that a given <code>WrappedBox</code> also implements a <code>BoxSpec</code> via the <code>box_spec()</code> method. And lastly <code>ExplorerFindable</code> provides an interface on top of the <code>SpecifiedBox</code> trait for finding boxes that match the <code>BoxSpec</code> from an Ergo Explorer API instance.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Specified Boxes</h2>
      <p className="text-gray-300 mb-4">This module exposes generic "Specified Box" structs that implement the <code>SpecifiedBox</code>/<code>WrappedBox</code>/<code>ExplorerFindable</code> traits. These boxes can be used as inputs for Actions in your off-chain protocol code, while also enabling front-end devs to easily gain access to on-chain data, such as Oracle Pool data.</p>
      <p className="text-gray-300 mb-4">Currently Implemented Specified Boxes:</p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>ErgsBox</li>
        <li>ErgUsdOraclePoolBox</li>
        <li>AdaUsdOraclePoolBox</li>
      </ol>
      <p className="text-gray-300 mb-4"><code>ErgsBox</code> are used for acquiring inputs that hold Ergs inside of them which can be used within your smart contract protocol actions.</p>
      <p className="text-gray-300 mb-4"><code>ErgUsdOraclePoolBox</code> & <code>AdaUsdOraclePoolBox</code> provide an extremely simplified interface for both headless dApp developers as well as front-end implementors to utilize data from the two currently running Oracle Pools. These two specified boxes can even be used by wallets/any off-chain application that needs to read the current rates from the Oracle Pool boxes.</p>
      <p className="text-gray-300 mb-4">The code block below shows how in 4 lines you can read the current Erg-USD oracle pool rate from your preferred Ergo Explorer API instance:</p>
      <UniversalCopyCodeBlock code={`let url = ErgUsdOraclePoolBox::explorer_endpoint("https://api.ergoplatform.com/api").unwrap();
let response = get(&url).unwrap().text().unwrap();
let oracle_pool_box =
    ErgUsdOraclePoolBox::process_explorer_response(&response).unwrap()[0].clone();
println!(
    "Erg-USD Oracle Pool: {} nanoErgs per USD",
    oracle_pool_box.datapoint()
);`} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Output Builders</h2>
      <p className="text-gray-300 mb-4">This module exposes structs which provide you with a basic interface for creating common output UTXOs within your Actions. These are often used for creating outputs that hold a user's change or pay a tx fee.</p>
      <p className="text-gray-300 mb-4">Example Output Builders:</p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>ChangeBox</li>
        <li>TokensChangeBox</li>
        <li>TxFeeBox</li>
      </ol>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Tx Creation</h2>
      <p className="text-gray-300 mb-4">This module exposes a few basic functions for making your life easier when building <code>UnsignedTransaction</code>s inside of your Actions.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Encoding</h2>
      <p className="text-gray-300 mb-4">This module exposes a number of helpful functions related to encoding/decoding/wrapping/unwrapping values from one form into another.</p>
      <p className="text-gray-300 mb-4">Examples:</p>
      <UniversalCopyCodeBlock code={`pub fn erg_to_nano_erg(erg_amount: f64) -> u64;
pub fn nano_erg_to_erg(nanoerg_amount: u64) -> f64;
pub fn unwrap_long(c: &Constant) -> Result<i64>;
pub fn serialize_p2s_from_ergo_tree(ergo_tree: ErgoTree) -> P2SAddressString;`} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Procedural Macros</h2>
      <p className="text-gray-300 mb-4">This crate exposes three procedural macros to make the life of devs much simpler:</p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>WrapBox</li>
        <li>SpecBox</li>
        <li>WASMBox</li>
      </ol>
      <p className="text-gray-300 mb-4"><code>WrapBox</code> simply implements the <code>WrappedBox</code> trait for you, <code>SpecBox</code> implements a customized <code>new()</code> method that uses your <code>BoxSpec</code> + implements the <code>ExplorerFindable</code> trait for you, and <code>WASMBox</code> implements the two basic required methods to enable WASM support for your struct (<code>w_new()</code> and <code>w_box_struct()</code>).</p>
    </>
  );
} 