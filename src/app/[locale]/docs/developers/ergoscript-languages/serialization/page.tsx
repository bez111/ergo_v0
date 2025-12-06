"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function SerializationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Package className="w-10 h-10 text-green-400" />
        Serialization
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

      {/* LaTeX Macros Block - Hidden */}
      <div className="hidden">
        <BlockMath math={String.raw`
\newcommand{\TEnv}{\Gamma}
\newcommand{\Der}[2]{#1~\vdash~#2}
\newcommand{\DerV}[2]{#1~\vdash^{\text{\mathrm{v}}}~#2}
\newcommand{\DerC}[2]{#1~\vdash^{\text{\mathrm{c}}}~#2}
\newcommand{\DerEnv}[1]{\Der{\TEnv}{#1}}
\newcommand{\DerEnvV}[1]{\DerV{\TEnv}{#1}}
\newcommand{\DerEnvC}[1]{\DerC{\TEnv}{#1}}
\newcommand{\lst}[1]{\mathrm{#1}}
\newcommand{\Tup}[1]{(#1)}
\newcommand{\Apply}[2]{#1\langle#2\rangle}
\newcommand{\MSig}[3]{\text{def}~#1(#2): #3}
\newcommand{\Ov}[1]{\overline{#1}}
\newcommand{\TyLam}[3]{\lambda(\Ov{#1:#2}).#3}
\newcommand{\Trait}[2]{\text{trait}~#1~\{ #2 \}}
\newcommand{\To}{\mapsto}
\newcommand{\Low}[1]{\mathcal{L}{[\![#1]\!]}}
\newcommand{\Lam}[2]{\lambda#1.#2}
\newcommand{\IfThenElse}[3]{\text{if}~(#1)~#2~\text{else}~#3}
\newcommand{\False}{\text{false}}
\newcommand{\True}{\text{true}}
\newcommand{\langname}{ErgoTree}
\newcommand{\corelang}{Core-\lambda}
\newcommand{\MaxVlqSize}{VLQ_{max}}
\newcommand{\MaxBits}{Bits_{max}}
\newcommand{\MaxBytes}{Bytes_{max}}
\newcommand{\MaxTypeSize}{T_{max}}
\newcommand{\MaxDataSize}{D_{max}}
\newcommand{\MaxBox}{Box_{max}}
\newcommand{\MaxSigmaProp}{SigmaProp_{max}}
\newcommand{\MaxAvlTree}{AvlTree_{max}}
\newcommand{\MaxConstSize}{C_{max}}
\newcommand{\MaxExprSize}{Expr_{max}}
\newcommand{\MaxErgoTreeSize}{ErgoTree_{max}}
\newcommand{\Denot}[1]{[\![#1]\!]}
\newcommand{\ASDag}{ErgoTree}
        `} />
      </div>

      <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
        <p className="text-gray-300 mb-4">
          This page defines the binary format used to store ErgoTree contracts in persistent stores, 
          transfer them over the wire, and enable cross-platform interoperation.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The terms of the <Link href="/docs/developers/ergoscript-languages" className="text-blue-400 hover:text-blue-300 underline">ErgoTree language</Link> can 
              be serialized into an array of bytes for storage in the Ergo blockchain (e.g., in the <code className="bg-neutral-800 px-2 py-1 rounded">propositionBytes</code> field of a <code className="bg-neutral-800 px-2 py-1 rounded">Box</code>).
            </p>
            <p>
              When the guarding script of a transaction's input box is validated, the <code className="bg-neutral-800 px-2 py-1 rounded">propositionBytes</code> array 
              is deserialized into an <strong>ErgoTree Intermediate Representation (IR)</strong> (represented by the <code className="bg-neutral-800 px-2 py-1 rounded">ErgoTree</code> class 
              in the reference implementation), which can then be <Link href="/docs/developers/ergoscript-languages/evaluation" className="text-blue-400 hover:text-blue-300 underline">evaluated</Link>.
            </p>
            <p>
              The serialization procedure is specified in general terms. The serialization format for ErgoTree types 
              (specified by the <code className="bg-neutral-800 px-2 py-1 rounded">SType</code> class hierarchy) and expression nodes 
              (specified by the <code className="bg-neutral-800 px-2 py-1 rounded">Value</code> class hierarchy) is defined in section 5.1 and Appendix C, respectively.
            </p>
            <p>
              Table 1 shows the size limits checked during contract deserialization, which are important for resisting malicious script attacks.
            </p>
          </div>

          {/* Table 1: Serialization limits */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Table 1: Serialization limits</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Constant</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Value</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">VLQ<sub>max</sub></td>
                    <td className="border border-neutral-700 px-4 py-2">10</td>
                    <td className="border border-neutral-700 px-4 py-2">Maximum size of VLQ encoded byte sequence (See VLQ formats E.1)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">T<sub>max</sub></td>
                    <td className="border border-neutral-700 px-4 py-2">100</td>
                    <td className="border border-neutral-700 px-4 py-2">Maximum size of serialized type term (see Type format 5.1)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">D<sub>max</sub></td>
                    <td className="border border-neutral-700 px-4 py-2">4Kb</td>
                    <td className="border border-neutral-700 px-4 py-2">Maximum size of serialized data instance (see Data format 5.2)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">C<sub>max</sub></td>
                    <td className="border border-neutral-700 px-4 py-2">= T<sub>max</sub> + D<sub>max</sub></td>
                    <td className="border border-neutral-700 px-4 py-2">Maximum size of serialized data instance (see Const format 5.3)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Expr<sub>max</sub></td>
                    <td className="border border-neutral-700 px-4 py-2">4Kb</td>
                    <td className="border border-neutral-700 px-4 py-2">Maximum size of serialized ErgoTree term (see Expr format 5.4)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">ErgoTree<sub>max</sub></td>
                    <td className="border border-neutral-700 px-4 py-2">4Kb</td>
                    <td className="border border-neutral-700 px-4 py-2">Maximum size of serialized ErgoTree contract (see ErgoTree format 5.5)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-gray-300 mt-4">
            All the serialization formats used and defined throughout this section are listed in Table 2, 
            which introduces a name for each format and shows the number of bytes each format may occupy in the byte stream.
          </p>

          {/* Table 2: Serialization formats */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Table 2: Serialization formats</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Format</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">#bytes</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Byte}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="1" /></td>
                    <td className="border border-neutral-700 px-4 py-2">8-bit signed two's-complement integer</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Short}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="2" /></td>
                    <td className="border border-neutral-700 px-4 py-2">16-bit signed two's-complement integer (big-endian)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Int}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="4" /></td>
                    <td className="border border-neutral-700 px-4 py-2">32-bit signed two's-complement integer (big-endian)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Long}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="8" /></td>
                    <td className="border border-neutral-700 px-4 py-2">64-bit signed two's-complement integer (big-endian)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{UByte}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="1" /></td>
                    <td className="border border-neutral-700 px-4 py-2">8-bit unsigned integer</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{UShort}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="2" /></td>
                    <td className="border border-neutral-700 px-4 py-2">16-bit unsigned integer (big-endian)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{UInt}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="4" /></td>
                    <td className="border border-neutral-700 px-4 py-2">32-bit unsigned integer (big-endian)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{ULong}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="8" /></td>
                    <td className="border border-neutral-700 px-4 py-2">64-bit unsigned integer (big-endian)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{VLQ(UShort)}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..3]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Encoded unsigned <InlineMath math="\mathrm{Short}" /> value using VLQ.</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{VLQ(UInt)}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..5]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Encoded unsigned 32-bit integer using VLQ.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{VLQ(ULong)}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..VLQ_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Encoded unsigned 64-bit integer using VLQ.</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Bits}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..Bits_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">A collection of bits packed in a sequence of bytes.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Bytes}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..Bytes_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">A sequence of bytes, whose size is stored elsewhere or well-known.</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Type}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..T_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized type terms of <InlineMath math="\mathrm{ErgoTree}" />.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Data}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..D_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized data values of <InlineMath math="\mathrm{ErgoTree}" />.</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{GroupElement}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="33" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized elements of elliptic curve group.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{SigmaProp}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..SigmaProp_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized sigma propositions.</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{AvlTree}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="44" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized dynamic dictionary digest.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Constant}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..C_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized <InlineMath math="\mathrm{ErgoTree}" /> constants (values with types).</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Expr}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..Expr_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized expression terms of <InlineMath math="\mathrm{ErgoTree}" />.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{ErgoTree}" /></td>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[1..ErgoTree_{max}]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Serialized instances of <InlineMath math="\mathrm{ErgoTree}" /> contracts.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-300 mt-6">
            <p>
              We use the <code className="bg-neutral-800 px-2 py-1 rounded">[1..n]</code> notation when serialization may produce from <strong>1 to n bytes</strong> (depending on the actual data).
            </p>
            <p>
              The serialization format of ErgoTree is optimized for compact storage and rapid deserialization.
            </p>
            <p>
              In many cases, the serialization procedure is <em>data dependent</em> and thus has branching logic.
            </p>
            <p>
              We use a pseudo-language with operators like <code className="bg-neutral-800 px-2 py-1 rounded">for</code>, <code className="bg-neutral-800 px-2 py-1 rounded">match</code>, 
              <code className="bg-neutral-800 px-2 py-1 rounded">if</code>, and <code className="bg-neutral-800 px-2 py-1 rounded">optional</code> to express this complex serialization logic in the specification.
            </p>
            <p>
              The language allows us to specify a structure composed of simple <em>serialization slots</em>.
            </p>
            <p>
              Each slot specifies a fragment of the serialized stream of bytes, while operators specify how the slots are combined to form the resulting stream of bytes.
            </p>
            <p>
              The notation is summarized in Table 3.
            </p>
          </div>

          {/* Table 3: Serialization Notation */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Table 3: Serialization Notation</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Notation</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="[\![T]\!]" /> where <InlineMath math="T" /> - type</td>
                    <td className="border border-neutral-700 px-4 py-2">Denotes a set of values of type <InlineMath math="T" /></td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="v \in [\![T]\!]" /></td>
                    <td className="border border-neutral-700 px-4 py-2">The value <InlineMath math="v" /> belongs to the set <InlineMath math="[\![T]\!]" /></td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="v : T" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Same as <InlineMath math="v \in [\![T]\!]" /></td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{match}" /> <InlineMath math="(t, v)" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Pattern match on pair <InlineMath math="(t, v)" /> where <InlineMath math="t, v" /> - values</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{with}" /> <InlineMath math="(Unit, v \in [\![Unit]\!])" /></td>
                    <td className="border border-neutral-700 px-4 py-2">Pattern case</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">
                      <InlineMath math="\mathrm{for}" /> i=1 <InlineMath math="\mathrm{to}" /> len <br />
                      <InlineMath math="~\mathrm{serialize(}" />v_i<InlineMath math="\mathrm{)}" /> <br />
                      <InlineMath math="\mathrm{end~for}" />
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      Call the given <InlineMath math="\mathrm{serialize}" /> function repeatedly. 
                      The output bytes of all invocations are concatenated and become the output of the <InlineMath math="\mathrm{for}" /> statement.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">
                      <InlineMath math="\mathrm{if}~" />condition<InlineMath math="~\mathrm{then}" /> <br />
                      <InlineMath math="\mathrm{serialize1(}" />v_1<InlineMath math="\mathrm{)}" /> <br />
                      <InlineMath math="\mathrm{else}" /> <br />
                      <InlineMath math="\mathrm{serialize2(}" />v_2<InlineMath math="\mathrm{)}" /> <br />
                      <InlineMath math="\mathrm{end~if}" />
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      Serialize one of the branches depending on the <em>condition</em>. 
                      The output bytes of the executed branch become the output of the <InlineMath math="\mathrm{if}" /> statement.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-gray-300 mt-4">
            In the next section, we describe how types (<strong>Int</strong>, <strong>Coll[Byte]</strong>, etc.) are serialized; 
            then, we define the serialization of typed data.
          </p>
          <p className="text-gray-300">
            This will give us a basis to describe the serialization of Constant nodes of ErgoTree. 
            After that, we will proceed to the serialization of arbitrary ErgoTree trees.
          </p>
        </section>

        {/* Type Serialization Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Type Serialization</h2>
          <p className="text-gray-300 mb-4">
            For the motivation behind this type of encoding, please see{" "}
            <a href="https://raw.githubusercontent.com/ScorexFoundation/sigmastate-interpreter/4daec63275fd4e1364cf7a1132f3e7be6157bb5c/docs/spec/ergotree.pdf" 
               className="text-blue-400 hover:text-blue-300 underline" 
               target="_blank" 
               rel="noopener noreferrer">
              Appendix D.1
            </a>.
          </p>

          <h3 className="text-xl font-semibold mb-3">Distribution of type codes</h3>
          <p className="text-gray-300 mb-3">
            The whole space of 256 one-byte codes is divided, as shown in Table 4.
          </p>

          {/* Table 4: Distribution of type codes */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Table 4: Distribution of type codes between Data and Function types</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Value/Interval</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Distribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{0x00}" /></td>
                    <td className="border border-neutral-700 px-4 py-2">
                      special value to represent undefined type (<InlineMath math="\mathrm{NoType}" /> in <InlineMath math="\mathrm{ErgoTree}" />)
                    </td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{0x01 - 0x6F(111)}" /></td>
                    <td className="border border-neutral-700 px-4 py-2">
                      <strong>data types</strong> including primitive types, arrays, options aka nullable types, classes (in future), 111 = 255 - 144 different codes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{0x70(112) - 0xFF(255)}" /></td>
                    <td className="border border-neutral-700 px-4 py-2">
                      <strong>function types</strong> <InlineMath math="\mathrm{T1 => T2}" />, 144 = 12 x 12 different codes
                      <sup className="text-xs text-gray-400 ml-1">*</sup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              * Note that the function types are never serialized in version 1 of the Ergo protocol, 
              this encoding is reserved for future development of the protocol.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">Encoding of Data Types</h3>
          <p className="text-gray-300 mb-3">
            There are eight different values for <em>embeddable</em> types, and three more are reserved for future extensions. 
            Each embeddable type has a type code in the range <code className="bg-neutral-800 px-2 py-1 rounded">1,...,11</code> as shown in Table 5.
          </p>

          {/* Table 5: Embeddable Types */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Table 5: Embeddable Types</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Code</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>Boolean</strong></td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">2</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>Byte</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">3</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>Short</strong> (16-bit)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">4</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>Int</strong> (32 bit)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">5</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>Long</strong> (64-bit)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">6</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>BigInt</strong> (represented by java.math.BigInteger)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">7</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>GroupElement</strong> (represented by org.bouncycastle.math.ec.ECPoint)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">8</td>
                    <td className="border border-neutral-700 px-4 py-2"><strong>SigmaProp</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">9</td>
                    <td className="border border-neutral-700 px-4 py-2">reserved for <strong>Char</strong></td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">10</td>
                    <td className="border border-neutral-700 px-4 py-2">reserved</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">11</td>
                    <td className="border border-neutral-700 px-4 py-2">reserved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 6: Code Ranges of Data Types */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Table 6: Code Ranges of Data Types</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Interval</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Constructor</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x01 - 0x0B(11)</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">embeddable types (including 3 reserved)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x0C(12)</td>
                    <td className="border border-neutral-700 px-4 py-2">Coll[_]</td>
                    <td className="border border-neutral-700 px-4 py-2">Collection of non-embeddable types (Coll[(Int,Boolean)])</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x0D(13) - 0x17(23)</td>
                    <td className="border border-neutral-700 px-4 py-2">Coll[_]</td>
                    <td className="border border-neutral-700 px-4 py-2">Collection of embeddable types (Coll[Byte], Coll[Int], etc.)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x18(24)</td>
                    <td className="border border-neutral-700 px-4 py-2">Coll[Coll[_]]</td>
                    <td className="border border-neutral-700 px-4 py-2">Nested collection of non-embeddable types (Coll[Coll[(Int,Boolean)]])</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x19(25) - 0x23(35)</td>
                    <td className="border border-neutral-700 px-4 py-2">Coll[Coll[_]]</td>
                    <td className="border border-neutral-700 px-4 py-2">Nested collection of embeddable types (Coll[Coll[Byte]], Coll[Coll[Int]])</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x24(36)</td>
                    <td className="border border-neutral-700 px-4 py-2">Option[_]</td>
                    <td className="border border-neutral-700 px-4 py-2">Option of non-embeddable type (Option[(Int, Byte)])</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x25(37) - 0x2F(47)</td>
                    <td className="border border-neutral-700 px-4 py-2">Option[_]</td>
                    <td className="border border-neutral-700 px-4 py-2">Option of embeddable type (Option[Int])</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x30(48)</td>
                    <td className="border border-neutral-700 px-4 py-2">Option[Coll[_]]</td>
                    <td className="border border-neutral-700 px-4 py-2">Option of Coll of non-embeddable type (Option[Coll[(Int, Boolean)]])</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x31(49) - 0x3B(59)</td>
                    <td className="border border-neutral-700 px-4 py-2">Option[Coll[_]]</td>
                    <td className="border border-neutral-700 px-4 py-2">Option of Coll of embeddable type (Option[Coll[Int]])</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x3C(60)</td>
                    <td className="border border-neutral-700 px-4 py-2">(_,_)</td>
                    <td className="border border-neutral-700 px-4 py-2">Pair of non-embeddable types (((Int, Byte), (Boolean,Box)), etc.)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x3D(61) - 0x47(71)</td>
                    <td className="border border-neutral-700 px-4 py-2">(_, Int)</td>
                    <td className="border border-neutral-700 px-4 py-2">Pair of types where first is embeddable ((_, Int))</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x48(72)</td>
                    <td className="border border-neutral-700 px-4 py-2">(_,_,_)</td>
                    <td className="border border-neutral-700 px-4 py-2">Triple of types</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x49(73) - 0x53(83)</td>
                    <td className="border border-neutral-700 px-4 py-2">(Int, _)</td>
                    <td className="border border-neutral-700 px-4 py-2">Pair of types where second is embeddable ((Int, _))</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x54(84)</td>
                    <td className="border border-neutral-700 px-4 py-2">(_,_,_,_)</td>
                    <td className="border border-neutral-700 px-4 py-2">Quadruple of types</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x55(85) - 0x5F(95)</td>
                    <td className="border border-neutral-700 px-4 py-2">(_, _)</td>
                    <td className="border border-neutral-700 px-4 py-2">Symmetric pair of embeddable types ((Int, Int), (Byte,Byte), etc.)</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x60(96)</td>
                    <td className="border border-neutral-700 px-4 py-2">(_,...,_)</td>
                    <td className="border border-neutral-700 px-4 py-2">Tuple type with more than 4 items (Int, Byte, Box, Boolean, Int)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x61(97)</td>
                    <td className="border border-neutral-700 px-4 py-2">Any</td>
                    <td className="border border-neutral-700 px-4 py-2">Any type</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x62(98)</td>
                    <td className="border border-neutral-700 px-4 py-2">Unit</td>
                    <td className="border border-neutral-700 px-4 py-2">Unit type</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x63(99)</td>
                    <td className="border border-neutral-700 px-4 py-2">Box</td>
                    <td className="border border-neutral-700 px-4 py-2">Box type</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x64(100)</td>
                    <td className="border border-neutral-700 px-4 py-2">AvlTree</td>
                    <td className="border border-neutral-700 px-4 py-2">AvlTree type</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x65(101)</td>
                    <td className="border border-neutral-700 px-4 py-2">Context</td>
                    <td className="border border-neutral-700 px-4 py-2">Context type</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x66(102)</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">reserved for String</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x67(103)</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">reserved for TypeVar</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x68(104)</td>
                    <td className="border border-neutral-700 px-4 py-2">Header</td>
                    <td className="border border-neutral-700 px-4 py-2">Header type</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x69(105)</td>
                    <td className="border border-neutral-700 px-4 py-2">PreHeader</td>
                    <td className="border border-neutral-700 px-4 py-2">PreHeader type</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x6A(106)</td>
                    <td className="border border-neutral-700 px-4 py-2">Global</td>
                    <td className="border border-neutral-700 px-4 py-2">Global type</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">0x6B(107)-0x6E(110)</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">reserved for future use</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">0x6F(111)</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">Reserved for future Class type (e.g. user-defined types)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-300">
            <p>
              We use the encoding schema defined below for each type constructor, like <strong>Coll</strong> or <strong>Option</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A type constructor has an associated base code which is a multiple of 12
                <ul className="list-disc pl-6 mt-1">
                  <li>(e.g., 12 for <strong>Coll[_]</strong>, 24 for <strong>Coll[Coll[_]]</strong>, etc.).</li>
                </ul>
              </li>
              <li>
                The base code can be added to the embeddable type code to produce the code of the constructed type.
                <ul className="list-disc pl-6 mt-1">
                  <li>For example, <code className="bg-neutral-800 px-2 py-1 rounded">12 + 1 = 13</code> is the code for <strong>Coll[Byte]</strong>.</li>
                  <li>The code of the type constructor (e.g., 12 in this example) is used when the type parameter is a non-embeddable type (e.g., <strong>Coll[(Byte, Int)]</strong>).</li>
                  <li>In this case, the code of the type constructor is read first, and then recursive descent is performed to read the bytes of the parameter type (in this case, <em>(Byte, Int)</em>).</li>
                </ul>
              </li>
            </ul>
            <p>
              This encoding allows very simple and fast decoding using <strong>div</strong> and <strong>mod</strong> operations.
            </p>
            <p>
              Following the above encoding schema, the interval of codes for data types is divided, as shown in Table 6.
            </p>
          </div>
        </section>

        {/* Encoding of Function Types */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold mb-3">Encoding of Function Types</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              We use 12 different values for both domain and range types of functions.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-300">
                <strong>This gives us 144 (12∗12) function types in total and allows us to represent 121 (11∗11) functions over primitive types using just a single byte.</strong>
              </p>
            </div>
            <p>
              Each code <strong>F</strong> in the range of function types (i.e., <strong>F ∈ {'{112, . . . , 255}'}</strong>) can be represented as <strong>F = D∗12+R+112</strong>, 
              where <strong>D, R ∈ {'{0, . . . , 11}'}</strong> are the indices of domain and range types correspondingly, and 112 is the first code in the interval of function types.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If <strong>D = 0</strong>, the domain type is not embeddable, and recursive descent is necessary to write/read the domain type.</li>
              <li>If <strong>R = 0</strong>, then the range type is not embeddable, and recursive descent is necessary to write/read the range type.</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold mb-2 mt-4">Recursive Descent</h4>
          <div className="space-y-4 text-gray-300">
            <p>
              When an argument of a type constructor is not a primitive type, we fall back to the simple encoding schema. 
              In this case, we emit the separate code for the type constructor according to the table above and descend recursively to every child node of the type tree.
            </p>
            <p>
              We perform this descent only for those children whose code cannot be embedded in the parent code.
            </p>
            <p>
              For example, serialization of <strong>Coll[(Int,Boolean)]</strong> proceeds as follows:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Emit <strong>0x0C</strong> because the element type of the collection is not embeddable.</li>
              <li>Recursively serialize <strong>(Int, Boolean)</strong>.</li>
              <li>Emit <strong>0x41(=0x3D+4)</strong> because the first type of the pair is embeddable, and its code is <strong>4</strong>.</li>
              <li>Recursively serialize <strong>Boolean</strong>.</li>
              <li>Emit <strong>0x02</strong> - the code for the embeddable type <strong>Boolean</strong>.</li>
            </ol>
            <p className="mt-4">
              More examples of type serialization are shown in Table 7.
            </p>
          </div>

          {/* Table 7: Type Serialization Examples */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Table 7: Type Serialization Examples</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Type</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">D</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">R</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Serialized Bytes</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">#Bytes</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Byte</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">2</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">simple embeddable type</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">Coll[Byte]</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">12 + 2 = 14</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">embeddable type in Coll</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Coll[Coll[Byte]]</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">24 + 2 = 26</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">embeddable type in nested Coll</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">Option[Byte]</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">36 + 2 = 38</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">embeddable type in Option</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Option[Coll[Byte]]</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">48 + 2 = 50</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">embeddable type in Coll nested in Option</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">(Int,Int)</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">84 + 4 = 88</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">symmetric pair of embeddable type</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Int=&gt;Boolean</td>
                    <td className="border border-neutral-700 px-4 py-2">4</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">161 = 4*12+1+112</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">embeddable domain and range</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">(Int,Int)=&gt;Int</td>
                    <td className="border border-neutral-700 px-4 py-2">0</td>
                    <td className="border border-neutral-700 px-4 py-2">4</td>
                    <td className="border border-neutral-700 px-4 py-2">115=0*12+4+112, 88</td>
                    <td className="border border-neutral-700 px-4 py-2">2</td>
                    <td className="border border-neutral-700 px-4 py-2">embeddable range, then symmetric pair</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">(Int,Boolean)</td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2"></td>
                    <td className="border border-neutral-700 px-4 py-2">60 + 4, 1</td>
                    <td className="border border-neutral-700 px-4 py-2">2</td>
                    <td className="border border-neutral-700 px-4 py-2">Int embedded in pair, then Boolean</td>
                  </tr>
                  <tr className="bg-neutral-900/30">
                    <td className="border border-neutral-700 px-4 py-2">(Int,Box)=&gt;Boolean</td>
                    <td className="border border-neutral-700 px-4 py-2">0</td>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">0*12+1+112, 60+4, 99</td>
                    <td className="border border-neutral-700 px-4 py-2">3</td>
                    <td className="border border-neutral-700 px-4 py-2">func with embedded range, then Int embedded, then Box</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Data Serialization Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold mb-3">Data Serialization</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              In ErgoTree, all runtime data values have an associated type also available at runtime (this is called{" "}
              <a href="https://en.wikipedia.org/wiki/Reification_(computer_science)" 
                 className="text-blue-400 hover:text-blue-300 underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <em>type reification</em>
              </a>).
            </p>
            <p>
              However, the serialization format separates data values from their type descriptors. This saves space when, 
              for example, a collection of items is serialized. This is done so that a type tree can fully describe the contents of a typed data structure.
            </p>
            <p>
              For example, having a typed data object <strong>d: (Int, Coll[Byte], Boolean)</strong>, we can tell, by examining the structure of the type, 
              that <strong>d</strong> is a tuple with three items; the first item contains a <em>32-bit integer</em>, the second a collection of <em>bytes</em>, 
              and the third a logical <em>true/false</em> value.
            </p>
            <p>
              To serialize/deserialize typed data, we need to know its type descriptor (type tree). The data serialization procedure is recursive 
              over the type tree and the corresponding sub-components of the data object. For primitive types (the leaves of the type tree), 
              the format is fixed. The data values of ErgoTree types are serialized according to the predefined recursive function shown in Figure 5, 
              which uses the notation from Table 3.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-400">Figure 5: Data serialization format</p>
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-2 mt-6">GroupElement serialization</h4>
          <div className="space-y-4 text-gray-300">
            <p>
              A value of the GroupElement type is represented in the reference implementation using the <code className="bg-neutral-800 px-2 py-1 rounded">SecP256K1Point</code> class 
              of the <code className="bg-neutral-800 px-2 py-1 rounded">org.bouncycastle.math.ec.custom.sec</code> package and serialized using <strong>ASN.1</strong> encoding.
            </p>
            <p>
              Different encodings are considered during deserialization, including point compression for Fp (see X9.62 sec. 4.2.1 pg. 17).
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-400">Figure 6: GroupElement serialization format</p>
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-2 mt-6">SigmaProp serialization</h4>
          <p className="text-gray-300">
            In the reference implementation, values of the <strong>SigmaProp</strong> type are serialized using <code className="bg-neutral-800 px-2 py-1 rounded">SigmaBoolean.serializer</code>.
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-6">AvlTree serialization</h4>
          <div className="space-y-4 text-gray-300">
            <p>
              In the reference implementation, values of the <strong>AvlTree</strong> type are serialized using <code className="bg-neutral-800 px-2 py-1 rounded">AvlTreeData.serializer</code>.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-400">Figure 8: AvlTree serialization format</p>
            </div>
          </div>
        </section>

        {/* Constant Serialization Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold mb-3">Constant Serialization</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              The <strong>Constant</strong> format is simple and self-sufficient to represent any data value. Serialized bytes in the Constant format 
              contain both the <strong>type bytes</strong> and the <strong>data bytes</strong>; thus, they can be stored or transferred over the wire 
              and then later unambiguously interpreted. The format is shown in Figure 9.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-400">Figure 9: Constant serialization format</p>
            </div>
            <p className="mt-4">
              To parse the <strong>Constant</strong> format, first, use the type serializer from section 5.1 and read the type. 
              Then use the parsed type as an argument of the data serializer given in section 5.2.
            </p>
          </div>
        </section>

        {/* Expression Serialization Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold mb-3">Expression Serialization</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              Expressions of ErgoTree are serialized as tree data structures using the recursive procedure described in Figure 10. 
              Expression nodes are represented in the reference implementation using the <code className="bg-neutral-800 px-2 py-1 rounded">Value</code> class hierarchy.
            </p>
          </div>
        </section>

        {/* ErgoTree Serialization Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold mb-3">ErgoTree serialization</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              The ErgoTree propositions stored in UTXO boxes are represented in the reference implementation using the <code className="bg-neutral-800 px-2 py-1 rounded">ErgoTree</code> class. 
              The class is serialized using the ErgoTree serialization format shown in Figure 11.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-400">Figure 11: ErgoTree serialization format</p>
            </div>
            <p className="mt-4">
              Serialized instances of the <code className="bg-neutral-800 px-2 py-1 rounded">ErgoTree</code> class are self-sufficient and can be stored and passed around.
            </p>
            <p>
              The ErgoTree format defines the top-level serialization format of ErgoTree scripts. The interpretation of the byte array depends on 
              the first header byte(s), which use VLQ encoding (up to 30 bits are reserved). We currently define meaning only for the first byte, 
              which may be extended in future versions. The meaning of the bits is shown in Figure 12.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-400">Figure 12: ErgoTree header bits</p>
            </div>
            <p className="mt-4">
              Currently, we don't specify interpretation for the second and other bytes of the header. We reserve the possibility to extend 
              the header by using <strong>Bit 7 == 1</strong> and chaining additional bytes as in <strong>VLQ</strong>.
            </p>
            <p>
              Once new bytes are required, a new language version should be created and implemented via soft-forkability. 
              That new language will give an interpretation for the new bytes.
            </p>
            <p>
              The default behavior of ErgoTreeSerializer is to preserve the original structure of ErgoTree and check consistency. 
              In case of any inconsistency, the serializer throws an exception.
            </p>
            <p>
              If the constant segregation bit (Bit 4) is set to 1, then the constants collection contains the constants for which there 
              may be <code className="bg-neutral-800 px-2 py-1 rounded">ConstantPlaceholder</code> nodes in the tree. However, if the constant segregation bit is 0, 
              then the constants collection should be empty, and any placeholder in the tree will lead to an exception.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 