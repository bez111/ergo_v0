"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileType } from "lucide-react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function TypingPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <FileType className="w-10 h-10 text-blue-400" />
        ErgoTree Typing
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
        `} />
      </div>

      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <p>
              <InlineMath math="\mathrm{ErgoTree}" /> is a strictly typed language, in which every term should have a type 
              in order to be wellformed and evaluated. Typing judgement of the form <InlineMath math="\Gamma \vdash e : T" /> say 
              that <InlineMath math="e" /> is a term of type <InlineMath math="T" /> in the typing context <InlineMath math="\Gamma" />.
            </p>
          </div>
        </section>

        {/* Typing Rules Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-6">Figure 3: Typing rules of ErgoTree</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Const Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{}{\Gamma \vdash C(\_, T)~:~T}~\text{(Const)}" />
            </div>

            {/* Var Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{}{\Gamma,x~:~T \vdash x~:~T}~\text{(Var)}" />
            </div>

            {/* Prim Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{\overline{\Gamma \vdash e_i:~T_i}~~ptype(\delta, \overline{T_i}) :~(T_1,\dots,T_n) \to T}{\Gamma \vdash \delta\langle\overline{e_i}\rangle:~T}~\text{(Prim)}" />
            </div>

            {/* Tuple Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{\Gamma \vdash e_1 :~T_1~~\dots~~\Gamma \vdash e_n :~T_n}{\Gamma \vdash (e_1,\dots,e_n)~:~(T_1,\dots,T_n)}~\text{(Tuple)}" />
            </div>

            {/* MethodCall Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{\Gamma \vdash e~:~I,~e_i:~T_i~~mtype(m, I, \overline{T_i})~:~(I, T_1,\dots,T_n) \to T}{\Gamma \vdash e.m\langle\overline{e_i}\rangle:~T }~\text{(MethodCall)}" />
            </div>

            {/* FuncExpr Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{\Gamma,\overline{x_i:~T_i} \vdash e~:~T}{\Gamma \vdash \lambda(\overline{x_i:T_i}).e~:~(T_0,\dots,T_n) \to T}~\text{(FuncExpr)}" />
            </div>

            {/* Apply Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{\Gamma \vdash e_f:~(T_1,\dots,T_n) \to T~~~\overline{\Gamma \vdash e_i:~T_i} }{ \Gamma \vdash e_f\langle\overline{e_i}\rangle~:~T }~\text{(Apply)}" />
            </div>

            {/* If Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{\Gamma \vdash e_{cond}:~\mathrm{Boolean}~~\Gamma \vdash e_1:~T~~\Gamma \vdash e_2 :~T }{\Gamma \vdash \text{if}~(e_{cond})~e_1~\text{else}~e_2~:~T }~\mathrm{(If)}" />
            </div>

            {/* BlockExpr Rule */}
            <div className="bg-neutral-900/50 rounded-lg p-3 overflow-x-auto">
              <BlockMath math="\frac{\Gamma \vdash e_1 :~T_1~\wedge~\forall k\in\{2,\dots,n\}~\Gamma,x_1:~T_1,\dots,x_{k-1}:~T_{k-1} \vdash e_k:~T_k~\wedge~\Gamma,x_1:~T_1,\dots,x_n:~T_n \vdash e:~T}{ \Gamma \vdash \{ \overline{\text{val}~x_i = e_i;}~e\}~:~T}~\text{(BlockExpr)}" />
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <p className="text-blue-300">
            <strong>Note:</strong> that each well-typed term has exactly one type; hence we assume there exists a 
            function <InlineMath math="termType: Term \to \mathcal{T}" /> which relates each well-typed term with 
            the corresponding type.
          </p>
        </section>

        {/* Additional Information Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Primitive operations</strong> can be parameterized with type variables; for example,
              <a href="https://raw.githubusercontent.com/ScorexFoundation/sigmastate-interpreter/4daec63275fd4e1364cf7a1132f3e7be6157bb5c/docs/spec/ergotree.pdf" 
                 className="text-blue-400 hover:text-blue-300 underline ml-1" 
                 target="_blank" 
                 rel="noopener noreferrer">
                addition
              </a> has the signature <InlineMath math="+~:~ (T,T) \to T" /> where <InlineMath math="T" /> is 
              a <Link href="/Docs/developers/ergoscript-languages/predefined-types" className="text-blue-400 hover:text-blue-300 underline">numeric type</Link>. 
              Function <InlineMath math="ptype" />, defined in <Link href="/Docs/developers/ergoscript-languages/predefined-functions" className="text-blue-400 hover:text-blue-300 underline">primops</Link>, 
              returns a type of primitive operation specialized for concrete types of its arguments, 
              for example, <InlineMath math="ptype(+,Int, Int) = (Int, Int) \to Int" />.
            </p>
            
            <p>
              Similarly, the function <InlineMath math="mtype" /> returns a type of method specialized for concrete 
              types of the arguments of the MethodCall term.
            </p>
            
            <p>
              <strong>BlockExpr</strong> rule defines a type of well-formed block expression. It assumes a total 
              ordering on <strong>val</strong> definitions. If a block expression is not well-formed, than is cannot 
              be typed and evaluated.
            </p>
            
            <p>
              The rest of the rules are standard for typed lambda calculus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 