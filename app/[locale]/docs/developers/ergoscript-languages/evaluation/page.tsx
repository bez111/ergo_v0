"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function EvaluationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Calculator className="w-10 h-10 text-purple-400" />
        ErgoTree Evaluation
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
\newcommand{\Denot}[1]{[\![#1]\!]}
        `} />
      </div>

      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <p>
              Evaluation of <InlineMath math="\mathrm{ErgoTree}" /> is specified by its translation to <InlineMath math="\mathrm{Core\text{-}\lambda}" />, 
              whose terms form a subset of <InlineMath math="\mathrm{ErgoTree}" /> terms. Thus, typing rules of <InlineMath math="\mathrm{Core\text{-}\lambda}" /> 
              form a subset of typing rules of <InlineMath math="\mathrm{ErgoTree}" />.
            </p>
            <p>
              Here we specify evaluation semantics of <InlineMath math="\mathrm{Core\text{-}\lambda}" />, which is based on call-by-value (CBV) lambda calculus. 
              Evaluation of <InlineMath math="\mathrm{Core\text{-}\lambda}" /> is specified using denotational semantics. To do that, we first specify 
              denotations of types, then typed terms and then equations of denotational semantics.
            </p>
          </div>
        </section>

        {/* Definition 1 */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <details className="group" open>
            <summary className="cursor-pointer list-none">
              <div className="flex items-center gap-2">
                <div className="text-yellow-400 group-open:rotate-90 transition-transform">▶</div>
                <h3 className="text-xl font-semibold inline">Definition 1</h3>
              </div>
            </summary>
            <div className="mt-4 pl-6 space-y-4">
              <p className="text-gray-300">
                <strong>The following <InlineMath math="\mathrm{Core\text{-}\lambda}" /> terms are called values:</strong>
              </p>
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <BlockMath math="V :== x \mid C(d, T) \mid \lambda x.M" />
              </div>
              <p className="text-gray-300">
                All <InlineMath math="\mathrm{Core\text{-}\lambda}" /> terms are called <strong><em>producers</em></strong>. 
                (This is because, when evaluated, they produce a value.)
              </p>
            </div>
          </details>
        </section>

        {/* Denotational Semantics Introduction */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <p>
              We now describe and explain a denotational semantics for the <InlineMath math="\mathrm{Core\text{-}\lambda}" /> language. 
              The key principle is that each type <InlineMath math="A" /> denotes a set <InlineMath math="[\![A]\!]" /> whose elements 
              are the denotations of values of the type <InlineMath math="A" />.
            </p>
            <p>
              Thus the type <Link href="/docs/developers/ergoscript-languages/predefined-types#boolean" className="text-blue-400 hover:text-blue-300 underline">
              <InlineMath math="\mathrm{Boolean}" /></Link> denotes the 2-element set <InlineMath math="\{\mathrm{true},\mathrm{false}\}" />, 
              because there are two values of type <InlineMath math="\mathrm{Boolean}" />. Likewise the type <InlineMath math="(T_1,\dots,T_n)" /> 
              denotes <InlineMath math="([\![T_1]\!],\dots,[\![T_n]\!])" /> because a value of type <InlineMath math="(T_1,\dots,T_n)" /> 
              must be of the form <InlineMath math="(V_1,\dots,V_n)" />, where each <InlineMath math="V_i" /> is value of type <InlineMath math="T_i" />.
            </p>
            <p>
              Given a value <InlineMath math="V" /> of type <InlineMath math="A" />, we write <InlineMath math="[\![V]\!]" /> for the element 
              of <InlineMath math="A" /> that it denotes. Given a close term <InlineMath math="M" /> of type <InlineMath math="A" />, 
              we recall that it produces a value <InlineMath math="V" /> of type <InlineMath math="A" />. So <InlineMath math="M" /> will 
              denote an element <InlineMath math="[\![M]\!]" /> of <InlineMath math="[\![A]\!]" />.
            </p>
            <p>
              A value of type <InlineMath math="A \to B" /> is of the form <InlineMath math="\lambda x.M" />. This, when applied to a value 
              of type <InlineMath math="A" /> gives a value of type <InlineMath math="B" />. So <InlineMath math="A \to B" /> denotes 
              <InlineMath math="[\![A]\!] \to [\![B]\!]" />. It is true that the syntax appears to allow us to apply <InlineMath math="\lambda x.M" /> 
              to any term <InlineMath math="N" /> of type <InlineMath math="A" />. But <InlineMath math="N" /> will be evaluated before it 
              interracts with <InlineMath math="\lambda x.M" />, so <InlineMath math="\lambda x.M" /> is really only applied to the value 
              that <InlineMath math="N" /> produces.
            </p>
          </div>
        </section>

        {/* Definition 2 */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <details className="group" open>
            <summary className="cursor-pointer list-none">
              <div className="flex items-center gap-2">
                <div className="text-yellow-400 group-open:rotate-90 transition-transform">▶</div>
                <h3 className="text-xl font-semibold inline">Definition 2</h3>
              </div>
            </summary>
            <div className="mt-4 pl-6 space-y-4">
              <p className="text-gray-300">
                A <strong>context</strong> <InlineMath math="\Gamma" /> is a finite sequence of identifiers with valuetypes 
                <InlineMath math="x_1:A_1, \dots ,x_n:A_n" />. Sometimes we omit the identifiers and write <InlineMath math="\Gamma" /> 
                as a list of value types.
              </p>
            </div>
          </details>
        </section>

        {/* Environment and Denotations */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Given a context <InlineMath math="\Gamma = x_1:A_1,\dots,x_n:A_n" />, an environment (list of bindings for identifiers) 
                associates to each <InlineMath math="x_i" /> as value of type <InlineMath math="A_i" />. So the environment denotes 
                an element of <InlineMath math="([\![A_1]\!],\dots,[\![A_n]\!])" />, and we write <InlineMath math="[\![\Gamma]\!]" /> for this set.
              </li>
              <li>
                Given a <InlineMath math="\mathrm{Core\text{-}\lambda}" /> term <InlineMath math="\Gamma \vdash M: B" />, we see that <InlineMath math="M" />, 
                together with environment, gives a closed term of type <InlineMath math="B" />. So <InlineMath math="M" /> denotes 
                a function <InlineMath math="[\![M]\!]" /> from <InlineMath math="[\![\Gamma]\!]" /> to <InlineMath math="[\![B]\!]" />.
              </li>
            </ul>
            
            <p className="mt-6">
              In summary, the denotational semantics is organized as follows.
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>A type <InlineMath math="A" /> denotes a set <InlineMath math="[\![A]\!]" /></li>
              <li>A context <InlineMath math="x_1:A_1,\dots,x_n:A_n" /> denotes the set <InlineMath math="([\![A_1]\!],\dots,[\![A_n]\!])" /></li>
              <li>A term <InlineMath math="\Gamma \vdash M: B" /> denotes a function <InlineMath math="[\![M]\!]" />: <InlineMath math="[\![\Gamma]\!] \to [\![B]\!]" /></li>
            </ul>
          </div>
        </section>

        {/* Denotations of Types */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">The denotations of <InlineMath math="\mathrm{Core\text{-}\lambda}" /> <strong>types</strong></h2>
          
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![\mathrm{Boolean}]\!] = \{ \mathrm{true}, \mathrm{false} \}" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![\mathrm{P}]\!] = \text{see set of values in Appendix A}" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![(T_1,\dots,T_n)]\!] = ([\![T_1]\!],\dots,[\![T_n]\!])" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![A \to B]\!] = [\![A]\!] \to [\![B]\!]" />
            </div>
          </div>
        </section>

        {/* Denotations of Terms */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">
            The denotations of <InlineMath math="\mathrm{Core\text{-}\lambda}" /> <strong>terms</strong> which together specify 
            the function <InlineMath math="[\![\_]\!]: [\![\Gamma]\!] \to [\![T]\!]" />
          </h2>
          
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![\mathrm{x}]\!]\langle(\rho,\mathrm{x}\mapsto x, \rho')\rangle = x" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![C(d, T)]\!]\langle\rho\rangle = d" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![(\overline{M_i})]\!]\langle\rho\rangle = (\overline{[\![M_i]\!]\langle\rho\rangle})" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![\delta\langle N\rangle]\!]\langle\rho\rangle = ([\![\delta]\!]\langle\rho\rangle)\langle v \rangle~\text{where}~v = [\![N]\!]\langle\rho\rangle" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![\lambda\mathrm{x}.M]\!]\langle\rho\rangle = \lambda x.[\![M]\!]\langle(\rho, \mathrm{x}\mapsto x)\rangle" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![M_f\langle N\rangle]\!]\langle\rho\rangle = ([\![M_f]\!]\langle\rho\rangle)\langle v \rangle~\text{where}~v = [\![N]\!]\langle\rho\rangle" />
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <BlockMath math="[\![M_I.\mathrm{m}\langle\overline{N_i}\rangle]\!]\langle\rho\rangle = ([\![M_I]\!]\langle\rho\rangle).m\langle\overline{v_i}\rangle~\text{where}~\overline{v_i = [\![N_i]\!]\langle\rho\rangle}" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 