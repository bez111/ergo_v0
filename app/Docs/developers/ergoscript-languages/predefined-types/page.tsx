"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function PredefinedTypesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <BookOpen className="w-10 h-10 text-blue-400" />
        Predefined Types
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      {/* LaTeX Macros Block */}
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
\newcommand{\Denot}[1]{[\![#1]\!]}
\newcommand{\Set}[1]{\{ #1 \}}
        `} />
      </div>

      <div className="space-y-8">
        {/* Boolean Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Boolean</h2>
          <p className="text-gray-300">The Boolean type represents true/false values.</p>
        </section>

        {/* Byte Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Byte</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Byte.toByte (106.1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Byte</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toByte: Byte</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Byte.toShort (106.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Short</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toShort: Short</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Byte.toInt (106.3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Int</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toInt: Int</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Byte.toLong (106.4)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Long</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toLong: Long</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Byte.toBigInt (106.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>BigInt</strong>.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toBigInt: BigInt</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Short Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Short</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Short.toByte (106.1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Byte</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toByte: Byte</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Short.toShort (106.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Short</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toShort: Short</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Short.toInt (106.3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Int</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toInt: Int</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Short.toLong (106.4)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Long</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toLong: Long</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Short.toBigInt (106.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>BigInt</strong>.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toBigInt: BigInt</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Int Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Int</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Int.toByte (106.1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Byte</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toByte: Byte</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Int.toShort (106.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Short</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toShort: Short</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Int.toInt (106.3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Int</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toInt: Int</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Int.toLong (106.4)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Long</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toLong: Long</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Int.toBigInt (106.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>BigInt</strong>.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toBigInt: BigInt</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Long Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Long</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Long.toByte (106.1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Byte</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toByte: Byte</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Long.toShort (106.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Short</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toShort: Short</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Long.toInt (106.3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Int</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toInt: Int</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Long.toLong (106.4)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>Long</strong>, throwing an exception on overflow.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toLong: Long</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Long.toBigInt (106.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>BigInt</strong>.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toBigInt: BigInt</code></li>
                <li><strong>Serialized as:</strong> Upcast</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BigInt Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">BigInt</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">BigInt.toBigInt (106.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Converts this numeric value to <strong>BigInt</strong>.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def toBigInt: BigInt</code></li>
                <li><strong>Serialized as:</strong> Downcast</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GroupElement Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">GroupElement</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">GroupElement.getEncoded (7.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns an encoding of the point value.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def getEncoded: Coll[Byte]</code></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">GroupElement.exp (7.3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Exponentiates this GroupElement to the given number. Returns this group element raised to the power of k.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def exp(k: BigInt): GroupElement</code></li>
                <li><strong>Parameters:</strong> <code>k</code> The power</li>
                <li><strong>Serialized as:</strong> Exponentiate</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">GroupElement.multiply (7.4)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Performs the group operation (multiplication) with another element.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def multiply(other: GroupElement): GroupElement</code></li>
                <li><strong>Parameters:</strong> <code>other</code> The other element of the group.</li>
                <li><strong>Serialized as:</strong> MultiplyGroup</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">GroupElement.negate (7.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the inverse element in the group.</li>
                <li><strong>Signature:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">def negate: GroupElement</code></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SigmaProp Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">SigmaProp</h2>
          <p className="text-gray-300 mb-4">
            Values of <strong>SigmaProp</strong> type hold sigma propositions, which can be proved and verified using Sigma protocols. 
            Each sigma proposition is represented as an expression where sigma protocol primitives such as <strong>ProveDlog</strong> 
            and <strong>ProveDHTuple</strong> are used as constants, and special sigma protocol connectives like <strong>AND</strong>, 
            <strong>OR</strong>, and <strong>THRESHOLD</strong> are used as operations.
          </p>
          
          <p className="text-gray-300 mb-4">The abstract syntax of sigma propositions is shown below.</p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-neutral-700">
              <thead>
                <tr className="bg-neutral-800">
                  <th className="border border-neutral-700 px-4 py-2 text-left">Set</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left"></th>
                  <th className="border border-neutral-700 px-4 py-2 text-left">Syntax</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left">Mnemonic</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="Tree \ni t" /></td>
                  <td className="border border-neutral-700 px-4 py-2">:=</td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Trivial(b)}" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{TrivialProp}" /></td>
                  <td className="border border-neutral-700 px-4 py-2">boolean value <InlineMath math="\mathrm{b}" /> as sigma proposition</td>
                </tr>
                <tr className="bg-neutral-900/30">
                  <td className="border border-neutral-700 px-4 py-2"></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mid" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{Dlog(ge)}" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{ProveDLog}" /></td>
                  <td className="border border-neutral-700 px-4 py-2">knowledge of discrete logarithm of <InlineMath math="\mathrm{ge}" /></td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2"></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mid" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{DHTuple(g,h,u,v)}" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{ProveDHTuple}" /></td>
                  <td className="border border-neutral-700 px-4 py-2">knowledge of Diffie-Hellman tuple</td>
                </tr>
                <tr className="bg-neutral-900/30">
                  <td className="border border-neutral-700 px-4 py-2"></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mid" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{THRESHOLD}(k,t_1,\dots,t_n)" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{THRESHOLD}" /></td>
                  <td className="border border-neutral-700 px-4 py-2">knowledge of <InlineMath math="k" /> out of <InlineMath math="n" /> secrets</td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2"></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mid" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{OR}(t_1,\dots,t_n)" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{OR}" /></td>
                  <td className="border border-neutral-700 px-4 py-2">knowledge of any one of <InlineMath math="n" /> secrets</td>
                </tr>
                <tr className="bg-neutral-900/30">
                  <td className="border border-neutral-700 px-4 py-2"></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mid" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{AND}(t_1,\dots,t_n)" /></td>
                  <td className="border border-neutral-700 px-4 py-2"><InlineMath math="\mathrm{AND}" /></td>
                  <td className="border border-neutral-700 px-4 py-2">knowledge of all <InlineMath math="n" /> secrets</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 mb-4">
            Every well-formed tree of sigma proposition is a value of type <InlineMath math="\mathrm{SigmaProp}" />, 
            thus following the notation of the evaluation section we can define denotation of <InlineMath math="\mathrm{SigmaProp}" />
          </p>

          <div className="bg-neutral-900/50 rounded-lg p-4 mb-6">
            <BlockMath math="[\![\mathrm{SigmaProp}]\!] = \{ t \in Tree \}" />
          </div>

          <p className="text-gray-300 mb-4">
            The following methods can be called on all instances of <InlineMath math="\mathrm{SigmaProp}" /> type.
          </p>

          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">SigmaProp.propBytes (8.1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the serialized bytes of this sigma proposition represented as ErgoTree.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">Coll[Byte]</code></li>
                <li><strong>Serialized as:</strong> SigmaPropBytes</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">SigmaProp.isProven (8.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Verifies that the sigma proposition is proven. (FRONTEND ONLY)</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <code className="bg-neutral-800 px-2 py-1 rounded">Boolean</code></li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 mt-4">
            For a full list of primitive operations on <InlineMath math="\mathrm{SigmaProp}" /> type, see 
            <a href="https://raw.githubusercontent.com/ScorexFoundation/sigmastate-interpreter/fada073b82a16a928c457693b888da4c0310aca6/docs/spec/spec.pdf#appendix.B" 
               className="text-blue-400 hover:text-blue-300 underline ml-1" 
               target="_blank" 
               rel="noopener noreferrer">
              Appendix B
            </a>
          </p>
        </section>

        {/* Box Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Box</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.value (99.1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Monetary value in nanoErgs.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Long}" /></li>
                <li><strong>Serialized as:</strong> ExtractAmount</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.propositionBytes (99.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Serialized bytes of the guarding script. This script must evaluate to true to spend the box.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Byte]}" /></li>
                <li><strong>Serialized as:</strong> ExtractScriptBytes</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.bytes (99.3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the serialized bytes of this box's content, including proposition bytes.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Byte]}" /></li>
                <li><strong>Serialized as:</strong> ExtractBytes</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.bytesWithoutRef (99.4)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the serialized bytes of this box's content, excluding the transactionId and output index.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Byte]}" /></li>
                <li><strong>Serialized as:</strong> ExtractBytesWithNoRef</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.id (99.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the Blake2b256 hash of this box's content (<code>blake2b256(bytes)</code>).</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Byte]}" /></li>
                <li><strong>Serialized as:</strong> ExtractId</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.creationInfo (99.6)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the height and transaction/output index where the box was created. <code>creationInfo._1</code> is the block height, and <code>creationInfo._2</code> is the transaction identifier concatenated with the box index.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{(Int,Coll[Byte])}" /></li>
                <li><strong>Serialized as:</strong> ExtractCreationInfo</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.getReg (99.7)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Extracts register <code>regId</code> by ID and expected type <code>T</code>. Returns <code>Some(value)</code> if the register exists and has the specified type, <code>None</code> otherwise.</li>
                <li><strong>Parameters:</strong> <InlineMath math="\mathrm{regId : Int}" /> {`// zero-based identifier of the register.`}</li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Option[T]}" /></li>
                <li><strong>Serialized as:</strong> ExtractRegisterAs</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Box.tokens (99.8)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the collection of secondary tokens held in the box.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[(Coll[Byte],Long)]}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            {/* R0-R9 Registers */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <div key={num} className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Box.R{num} (99.{9 + num})</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><strong>Description:</strong> 
                    {num === 0 && "Register R0: Monetary value in nanoErgs. Use `ExtractAmount` (value property)."}
                    {num === 1 && "Register R1: Guarding script bytes. Use `ExtractScriptBytes` (propositionBytes property)."}
                    {num === 2 && "Register R2: Secondary tokens [(TokenId, Amount)]. Use `ExtractTokens` (tokens property)."}
                    {num === 3 && "Register R3: Box creation information (height, txId, index). Use `ExtractCreationInfo` (creationInfo property)."}
                    {num >= 4 && `Optional register R${num} for arbitrary data storage. Use \`ExtractRegisterAs\`.`}
                  </li>
                  <li><strong>Parameters:</strong></li>
                  <li><strong>Result:</strong> <InlineMath math="\mathrm{Option[T]}" /></li>
                  <li><strong>Serialized as:</strong> ExtractRegisterAs</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* AvlTree Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">AvlTree</h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.digest (100.1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the digest of the state represented by this tree (root hash bytes ++ tree height).</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Byte]}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.enabledOperations (100.2)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong> Returns the flags of enabled operations packed into a single byte.</li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Byte}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
              <pre className="bg-neutral-800 p-2 rounded mt-2 text-xs overflow-x-auto">
{`isInsertAllowed == (enabledOperations & 0x01) != 0
isUpdateAllowed == (enabledOperations & 0x02) != 0
isRemoveAllowed == (enabledOperations & 0x04) != 0`}
              </pre>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.keyLength (100.3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Int}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.valueLengthOpt (100.4)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Byte]}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.isInsertAllowed (100.5)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Byte]}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.isUpdateAllowed (100.6)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Boolean}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.isRemovedAllowed (100.7)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Boolean}" /></li>
                <li><strong>Serialized as:</strong> PropertyCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.updateOperations (100.8)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{AvlTree}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.contains (100.9)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Boolean}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.get (100.10)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Option[Coll[Byte]]}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.getMeny (100.11)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Coll[Option[Coll[Byte]]]}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.insert (100.12)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Option[AvlTree]}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.update (100.13)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Option[AvlTree]}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.remove (100.14)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{Option[AvlTree]}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">AvlTree.updateDigest (100.15)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Description:</strong></li>
                <li><strong>Parameters:</strong></li>
                <li><strong>Result:</strong> <InlineMath math="\mathrm{AvlTree}" /></li>
                <li><strong>Serialized as:</strong> MethodCall</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Header Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Header</h2>
          <p className="text-gray-300">Documentation for Header type methods will be added here.</p>
        </section>

        {/* PreHeader Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">PreHeader</h2>
          <p className="text-gray-300">Documentation for PreHeader type methods will be added here.</p>
        </section>

        {/* Context Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Context</h2>
          <p className="text-gray-300">Documentation for Context type methods will be added here.</p>
        </section>

        {/* Global Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Global</h2>
          <p className="text-gray-300">Documentation for Global type methods will be added here.</p>
        </section>

        {/* Coll Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Coll</h2>
          <p className="text-gray-300">Documentation for Coll type methods will be added here.</p>
        </section>

        {/* Option Type */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Option</h2>
          <p className="text-gray-300">Documentation for Option type methods will be added here.</p>
        </section>
      </div>
    </div>
  );
} 