"use client";

import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { BookOpen, Code, Info, ArrowLeft } from "lucide-react";

export default function ErgoTreeLanguageClassicPage() {
  return (
    <div className="space-y-10">
             {/* Hero Section */}
       <div className="mb-10">
         <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
           <Code className="w-8 h-8 text-cyan-400" /> ErgoTree as a Language
      </h1>
         <p className="text-xl text-gray-400 mb-6 max-w-2xl">
           This section provides improved and clearer documentation for the ErgoTree language. ErgoTree is a typed, call-by-value, higher-order functional language without recursion. It supports various features such as single-assignment blocks, tuples, optional values, indexed collections with higher-order operations, short-circuiting logical operations, and ternary if-else expressions with lazy branches.
         </p>
        <Link
          href="/Docs/developers/ergoscript-languages"
           className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105 gap-2"
        >
           <ArrowLeft className="w-5 h-5" />
          Back to ErgoScript Languages
        </Link>
      </div>

      {/* Overview Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Language Semantics
        </h2>
        <p className="text-gray-300 mb-2">
          The semantics of ErgoTree are specified by first translating it to a lower-level language called Core-λ and then providing its denotational evaluation semantics. The abstract syntax of ErgoTree is defined in Table 1, which represents the <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">Value</code> class hierarchy in the reference implementation.
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm">
          <li>All operations in ErgoTree are deterministic, without side effects</li>
          <li>All values are immutable</li>
          <li>The values in the "Mnemonic" column correspond to specific classes in the reference implementation</li>
        </ul>
        </div>

             {/* Table 1 Section */}
       <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <BookOpen className="w-6 h-6 text-blue-400" /> Table 1: Abstract syntax of ErgoTree language
         </h2>
         <div className="flex justify-center">
           <Image 
             src="/ergotree-table1.png" 
             alt="Table 1: Abstract syntax of ErgoTree language"
             width={800}
             height={600}
             className="border border-gray-300 rounded-lg shadow-sm"
           />
          </div>
        </div>

       {/* Typing Rules Section */}
       <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <Info className="w-6 h-6 text-green-400" /> ErgoTree Typing Rules
         </h2>
         <div className="space-y-4 text-gray-300">
           <p className="mb-4">
             The terms in ErgoTree are assigned types according to the typing rules specified in <a className="text-red-400 underline hover:text-red-300" href="#">Typing</a>.
           </p>

           <ul className="list-disc pl-6 mb-4 space-y-3">
             <li>
               <span className="font-bold text-white">Constants</span> contain both the type and the data value of that type. The type of a constant must correspond to its value for it to be well-formed.
             </li>
             <li>
               <span className="font-bold text-white">Variables</span> are always typed and identified by a unique ID, which refers to either a lambda-bound variable or a val-bound variable.
             </li>
             <li>
               <span className="font-bold text-white">Lambda expressions</span> can take a list of lambda-bound variables, which can be used in the body expression. The body expression itself can also be a <span className="font-bold text-white">block expression</span>.
             </li>
             <li>
               <span className="font-bold text-white">Function application</span> takes an expression of functional type (e.g., <InlineMath math="(T_1, \ldots, T_n) \to T" />) and a list of arguments. The notation <InlineMath math="e_f\langle \overline{e} \rangle" /> is not used to represent function application because it suggests that <InlineMath math="(\overline{e})" /> is a subterm, which it is not.
             </li>
             <li>
               <span className="font-bold text-white">Method invocation</span> allows the application of functions defined as methods of types. If an expression <InlineMath math="e" /> has type <InlineMath math="T" />, and a method <InlineMath math="m" /> is declared in type <InlineMath math="T" />, the method invocation <InlineMath math="e.m(args)" /> is valid. For more information on types and their methods, refer to <a className="text-red-400 underline hover:text-red-300" href="#">Types</a>.
             </li>
             <li>
               <span className="font-bold text-white">Conditional expressions</span> in ErgoTree evaluate the condition strictly and the branches lazily. Each branch is an expression executed based on the result of the condition. This laziness is specified by lowering the expressions to Core-λ (see Figure 2).
             </li>
             <li>
               <span className="font-bold text-white">Block expressions</span> contain a list of <span className="font-bold text-white">val</span> definitions (bindings) of variables. Each subsequent definition in the block can only refer to previously defined variables. The result of the block's execution is the result of the final expression <InlineMath math="e" />, which can refer to any variable defined within the block.
             </li>
           </ul>

           <p className="mb-4">
             Each <span className="font-bold text-white">type</span> in ErgoTree can be associated with a list of method declarations, indicating that the type has methods. The semantics of these methods follow similar principles to those in object-oriented languages like Java or Scala. When an instance of a type with methods exists, it is possible to call methods on the instance with additional arguments.
           </p>
           <p className="mb-4">
             Each <span className="font-bold text-white">method</span> in ErgoTree can be parameterized by type variables, which are used in the method signature. Since ErgoTree only supports monomorphic values, each method call is monomorphic, and all type variables are assigned concrete types (see the MethodCall typing rule in <a className="text-red-400 underline hover:text-red-300" href="#">typing</a>).
           </p>
        <p>
          To specify the semantics of ErgoTree, its terms are translated to a lower-level language called Core-λ, which is a simplified language without lazy operations. The lowering rules are defined in Figure 2.
        </p>
         </div>
       </div>

              {/* Figure 2 Section */}
       <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <BookOpen className="w-6 h-6 text-purple-400" /> Figure 2: Lowering to Core-λ
         </h2>
         <div className="flex justify-center">
           <Image 
             src="/ergotree-figure2.png" 
             alt="Figure 2: Lowering to Core-λ"
             width={800}
             height={600}
             className="border border-gray-300 rounded-lg shadow-sm"
           />
         </div>
        </div>

       {/* Lambda Semantics Section */}
       <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <Code className="w-6 h-6 text-orange-400" /> ErgoTree Lambda Semantics
         </h2>
         <div className="space-y-4 text-gray-300">
           <p className="mb-4">
             All <InlineMath math="n" />-ary lambdas where <InlineMath math="n > 1" /> are transformed into single-argument lambdas using tuplized arguments.
           </p>
           <p className="mb-4">
             It should be noted that the <InlineMath math="\mathrm{if}\ (e_\mathrm{cond})\ e_1\ \mathrm{else}\ e_2" /> term in ErgoTree has lazy evaluation of its branches, while the right-hand-side <InlineMath math="if" /> is a primitive operation with strict evaluation of the arguments. Laziness is achieved using lambda expressions of type <span className="italic text-cyan-300"><InlineMath math="Unit \to Boolean" /></span>.
           </p>
           <p className="mb-4">
             Logical operations (<InlineMath math="\|\|" />, <InlineMath math="\&\&" />) in ErgoTree, which are lazy (short-circuiting) on the second argument, are translated to <InlineMath math="if" /> terms in ErgoTree, which are then recursively translated to the corresponding Core-λ terms.
           </p>
           <p className="mb-4">
             Syntactic blocks in ErgoTree are eliminated and translated into nested lambda expressions, which unambiguously specify the evaluation semantics of blocks. The evaluation semantics of Core-λ are specified in <a className="text-red-400 underline hover:text-red-300" href="#">evaluation</a>.
           </p>
           <p>
             Note that the lowering transformation is used solely to specify semantics. Implementations may optimize the evaluation of ErgoTree directly as long as the semantics are preserved.
          </p>
        </div>
      </div>
     </div>
  );
} 
