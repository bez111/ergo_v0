"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Code } from "lucide-react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function AsALanguagePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Code className="w-10 h-10 text-cyan-400" />
        ErgoTree as a Language
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
\newcommand{\lst}[1]{#1}
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
        `} />
      </div>

      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <p>
              This section provides improved and clearer documentation for the ErgoTree language. ErgoTree is a typed, 
              call-by-value, higher-order functional language without recursion. It supports various features such as 
              single-assignment blocks, tuples, optional values, indexed collections with higher-order operations, 
              short-circuiting logical operations, and ternary if-else expressions with lazy branches. It is important 
              to note that all operations in ErgoTree are deterministic, without side effects, and all values are immutable.
            </p>
            <p>
              The semantics of ErgoTree are specified by first translating it to a lower-level language called Core-λ 
              and then providing its denotational evaluation semantics. The abstract syntax of ErgoTree is defined in 
              Table 1, which represents the <code className="bg-neutral-700 px-2 py-0.5 rounded text-cyan-300">Value</code> class 
              hierarchy in the reference implementation. The values in the "Mnemonic" column correspond to specific 
              classes in the reference implementation.
            </p>
          </div>
        </section>

        {/* Table 1: Abstract syntax */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-bold mb-4">Table 1: Abstract syntax of ErgoTree language</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-600">
                  <th className="text-left py-3 px-4">Set Name</th>
                  <th className="text-left py-3 px-4">Syntax</th>
                  <th className="text-left py-3 px-4">Mnemonic</th>
                  <th className="text-left py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{T} \ni T" /></td>
                  <td className="py-3 px-4"><strong>P</strong></td>
                  <td className="py-3 px-4"><strong>SPredefType</strong></td>
                  <td className="py-3 px-4">See <Link href="/docs/developers/ergoscript-languages/predefined-types" className="text-blue-400 hover:text-blue-300 underline">Types</Link></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="\tau" /></td>
                  <td className="py-3 px-4"><strong>STypeVar</strong></td>
                  <td className="py-3 px-4">Type variable</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="(T_1, \ldots, T_n)" /></td>
                  <td className="py-3 px-4"><strong>STuple</strong></td>
                  <td className="py-3 px-4">Tuple of <InlineMath math="n" /> elements (see [Tuple] type)</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="(T_1, \ldots, T_n) \to T" /></td>
                  <td className="py-3 px-4"><strong>SFunc</strong></td>
                  <td className="py-3 px-4">Function of <InlineMath math="n" /> arguments (see [Func] type)</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="\text{Coll}[T]" /></td>
                  <td className="py-3 px-4"><strong>SCollection</strong></td>
                  <td className="py-3 px-4">Collection of elements of type <InlineMath math="T" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="\text{Option}[T]" /></td>
                  <td className="py-3 px-4"><strong>SOption</strong></td>
                  <td className="py-3 px-4">Optional value of type <InlineMath math="T" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="Term \ni e" /></td>
                  <td className="py-3 px-4"><InlineMath math="C(v, T)" /></td>
                  <td className="py-3 px-4"><strong>Constant</strong></td>
                  <td className="py-3 px-4">Typed constant</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="x" /></td>
                  <td className="py-3 px-4"><strong>ValUse</strong></td>
                  <td className="py-3 px-4">Variable</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="\lambda(\overline{x_i:T_i}).e" /></td>
                  <td className="py-3 px-4"><strong>FuncExpr</strong></td>
                  <td className="py-3 px-4">Lambda expression</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="e_f\langle\overline{e_i}\rangle" /></td>
                  <td className="py-3 px-4"><strong>Apply</strong></td>
                  <td className="py-3 px-4">Application of a functional expression</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="e.m\langle\overline{e_i}\rangle" /></td>
                  <td className="py-3 px-4"><strong>MethodCall</strong></td>
                  <td className="py-3 px-4">Method invocation</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="(e_1, \ldots, e_n)" /></td>
                  <td className="py-3 px-4"><strong>Tuple</strong></td>
                  <td className="py-3 px-4">Constructor of a tuple with <InlineMath math="n" /> items</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="\delta\langle\overline{e_i}\rangle" /></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">Primitive application</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="\text{if}~(e_{\text{cond}})~e_1~\text{else}~e_2" /></td>
                  <td className="py-3 px-4"><strong>If</strong></td>
                  <td className="py-3 px-4">If-then-else expression</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"><InlineMath math="\{ \overline{\text{val}~x_i = e_i;}~e\}" /></td>
                  <td className="py-3 px-4"><strong>BlockExpr</strong></td>
                  <td className="py-3 px-4">Block expression</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="cd" /></td>
                  <td className="py-3 px-4"><InlineMath math="\text{trait}~I~\{ \overline{ms_i} \}" /></td>
                  <td className="py-3 px-4"><strong>STypeCompanion</strong></td>
                  <td className="py-3 px-4">Interface declaration</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="ms" /></td>
                  <td className="py-3 px-4"><InlineMath math="\text{def}~m[\overline{\tau_i}](\overline{x_i : T_i}): T" /></td>
                  <td className="py-3 px-4"><strong>SMethod</strong></td>
                  <td className="py-3 px-4">Method signature declaration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <p>
              The terms in ErgoTree are assigned types according to the typing rules specified in <Link href="/docs/developers/ergoscript-languages/typing" className="text-blue-400 hover:text-blue-300 underline">Typing</Link>.
            </p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Constants</strong> contain both the type and the data value of that type. The type of a constant must 
                correspond to its value for it to be well-formed.
              </li>
              <li>
                <strong>Variables</strong> are always typed and identified by a unique ID, which refers to either a lambda-bound 
                variable or a val-bound variable.
              </li>
              <li>
                <strong>Lambda expressions</strong> can take a list of lambda-bound variables, which can be used in the body 
                expression. The body expression itself can also be a <strong>block expression</strong>.
              </li>
              <li>
                <strong>Function application</strong> takes an expression of functional type (e.g., <InlineMath math="(T_1, \ldots, T_n) \to T" />) 
                and a list of arguments. The notation <InlineMath math="e_f(\overline{e})" /> is not used to represent function 
                application because it suggests that <InlineMath math="(\overline{e})" /> is a subterm, which it is not.
              </li>
              <li>
                <strong>Method invocation</strong> allows the application of functions defined as methods of types. If an 
                expression <InlineMath math="e" /> has type <InlineMath math="T" />, and a method <InlineMath math="m" /> is 
                declared in type <InlineMath math="T" />, the method invocation <InlineMath math="e.m(args)" /> is valid. 
                For more information on types and their methods, refer to <Link href="/docs/developers/ergoscript-languages/predefined-types" className="text-blue-400 hover:text-blue-300 underline">Types</Link>.
              </li>
              <li>
                <strong>Conditional expressions</strong> in ErgoTree evaluate the condition strictly and the branches lazily. 
                Each branch is an expression executed based on the result of the condition. This laziness is specified by 
                lowering the expressions to Core-λ (see Figure 2).
              </li>
              <li>
                <strong>Block expressions</strong> contain a list of <strong>val</strong> definitions (bindings) of variables. 
                Each subsequent definition in the block can only refer to previously defined variables. The result of the 
                block's execution is the result of the final expression <InlineMath math="e" />, which can refer to any 
                variable defined within the block.
              </li>
            </ul>
            
            <p>
              Each <strong>type</strong> in ErgoTree can be associated with a list of method declarations, indicating that 
              the type has methods. The semantics of these methods follow similar principles to those in object-oriented 
              languages like Java or Scala. When an instance of a type with methods exists, it is possible to call methods 
              on the instance with additional arguments.
            </p>
            
            <p>
              Each <strong>method</strong> in ErgoTree can be parameterized by type variables, which are used in the method 
              signature. Since ErgoTree only supports monomorphic values, each method call is monomorphic, and all type 
              variables are assigned concrete types (see the MethodCall typing rule in <Link href="/docs/developers/ergoscript-languages/typing" className="text-blue-400 hover:text-blue-300 underline">typing</Link>).
            </p>
            
            <p>
              To specify the semantics of ErgoTree, its terms are translated to a lower-level language called Core-λ, 
              which is a simplified language without lazy operations. The lowering rules are defined in Figure 2.
            </p>
          </div>
        </section>

        {/* Figure 2: Lowering to Core-λ */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-6">Figure 2: Lowering to Core-λ</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-600">
                  <th className="text-left py-3 px-4"><InlineMath math="Term_{ErgoTree}" /></th>
                  <th className="text-center py-3 px-4"></th>
                  <th className="text-left py-3 px-4"><InlineMath math="Term_{Core}" /></th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-mono">
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![\lambda(\overline{x_i:T_i}).e]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="\lambda x:(T_0,\dots,T_n).\mathcal{L}{[\![\{ \overline{\text{val}~x_i: T_i = x.\_i;}~e\}]\!]}" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![e_f\langle\overline{e_i}\rangle]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![e_f]\!]}\langle\mathcal{L}{[\![(\overline{e_i})]\!]}\rangle" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![e.m\langle\overline{e_i}\rangle]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![e]\!]}.m\langle\overline{\mathcal{L}{[\![e_i]\!]}}\rangle" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![(e_1, \dots ,e_n)]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="(\mathcal{L}{[\![e_1]\!]}, \dots ,\mathcal{L}{[\![e_n]\!]})" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![e_1~\text{||}~e_2]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![\text{if}~(e_1)~\text{true}~\text{else}~e_2]\!]}" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![e_1~\text{\&\&}~e_2]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![\text{if}~(e_1)~e_2~\text{else}~\text{false}]\!]}" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![\text{if}~(e_{cond})~e_1~\text{else}~e_2]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="if(\mathcal{L}{[\![e_{cond}]\!]},~\lambda(\_:Unit).\mathcal{L}{[\![e_1]\!]},~\lambda(\_:Unit).\mathcal{L}{[\![e_2]\!]})\langle\rangle" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![\{ \overline{\text{val}~x_i: T_i = e_i;}~e\}]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="(\lambda(x_1:T_1).( \dots (\lambda(x_n:T_n).\mathcal{L}{[\![e]\!]})\langle\mathcal{L}{[\![e_n]\!]}\rangle \dots ))\langle\mathcal{L}{[\![e_1]\!]}\rangle" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![\delta\langle\overline{e_i}\rangle]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="\delta\langle\overline{\mathcal{L}{[\![e_i]\!]}}\rangle" /></td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3 px-4"><InlineMath math="\mathcal{L}{[\![e]\!]}" /></td>
                  <td className="text-center px-4"><InlineMath math="\mapsto" /></td>
                  <td className="py-3 px-4"><InlineMath math="e" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Notes */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <p>
              All <InlineMath math="n" />-ary lambdas where <InlineMath math="n > 1" /> are transformed into single-argument 
              lambdas using tupled arguments.
            </p>
            
            <p>
              It should be noted that the <InlineMath math="\text{if}~(e_{\text{cond}})~e_1~\text{else}~e_2" /> term in 
              ErgoTree has lazy evaluation of its branches, while the right-hand-side <InlineMath math="\text{if}" /> is 
              a primitive operation with strict evaluation of the arguments. Laziness is achieved using lambda expressions 
              of type <InlineMath math="\text{Unit} \to \text{Boolean}" />.
            </p>
            
            <p>
              Logical operations (<InlineMath math="\text{||}" />, <code className="bg-neutral-700 px-2 py-0.5 rounded">&amp;&amp;</code>) 
              in ErgoTree, which are lazy (short-circuiting) on the second argument, are translated to <InlineMath math="\text{if}" /> terms 
              in ErgoTree, which are then recursively translated to the corresponding Core-λ terms.
            </p>
            
            <p>
              Syntactic blocks in ErgoTree are eliminated and translated into nested lambda expressions, which unambiguously 
              specify the evaluation semantics of blocks. The evaluation semantics of Core-λ are specified in <Link href="/docs/developers/ergoscript-languages/evaluation" className="text-blue-400 hover:text-blue-300 underline">evaluation</Link>.
            </p>
            
            <p>
              Note that the lowering transformation is used solely to specify semantics. Implementations may optimize the 
              evaluation of ErgoTree directly as long as the semantics are preserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 
