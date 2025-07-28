"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Code } from "lucide-react";

export default function ErgoTreeAsLanguagePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Code className="w-10 h-10 text-green-400" />
        As a Language
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

      <div className="text-lg text-gray-300 mb-8 space-y-6">
        <p>
          This section provides improved and clearer documentation for the ErgoTree language. ErgoTree is a typed, call-by-value, higher-order functional language without recursion. It supports various features such as single-assignment blocks, tuples, optional values, indexed collections with higher-order operations, short-circuiting logical operations, and ternary if-else expressions with lazy branches. It is important to note that all operations in ErgoTree are deterministic, without side effects, and all values are immutable.
        </p>

        <p>
          The semantics of ErgoTree are specified by first translating it to a lower-level language called Core-λ and then providing its denotational evaluation semantics. The abstract syntax of ErgoTree is defined in Table 1, which represents the <code className="bg-neutral-800 px-2 py-1 rounded">Value</code> class hierarchy in the reference implementation. The values in the "Mnemonic" column correspond to specific classes in the reference implementation.
        </p>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Table 1: Abstract syntax of ErgoTree language</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-neutral-700 bg-neutral-900/50 rounded-lg">
            <thead>
              <tr className="bg-neutral-800">
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-400">Set Name</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-400">Syntax</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-400">Mnemonic</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-400">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-700 px-4 py-3">T ∈ T</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">P</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">SPredefType</td>
                <td className="border border-neutral-700 px-4 py-3">See <Link href="/Docs/developers/ergoscript-languages/predefined-types" className="text-cyan-400 hover:underline">Types</Link></td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">τ</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">STypeVar</td>
                <td className="border border-neutral-700 px-4 py-3">Type variable</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">(T₁, ..., Tₙ)</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">STuple</td>
                <td className="border border-neutral-700 px-4 py-3">Tuple of n elements (see Tuple type)</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">(T₁, ..., Tₙ) → T</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">SFunc</td>
                <td className="border border-neutral-700 px-4 py-3">Function of n arguments (see Func type)</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">Coll[T]</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">SCollection</td>
                <td className="border border-neutral-700 px-4 py-3">Collection of elements of type T</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">Option[T]</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">SOption</td>
                <td className="border border-neutral-700 px-4 py-3">Optional value of type T</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3">Term ∋ e</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">C(v, T)</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">Constant</td>
                <td className="border border-neutral-700 px-4 py-3">Typed constant</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">x</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">ValUse</td>
                <td className="border border-neutral-700 px-4 py-3">Variable</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">λ(x̄ᵢ:T̄ᵢ).e</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">FuncExpr</td>
                <td className="border border-neutral-700 px-4 py-3">Lambda expression</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">eₓ⟨ēᵢ⟩</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">Apply</td>
                <td className="border border-neutral-700 px-4 py-3">Application of a functional expression</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">e.m⟨ēᵢ⟩</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">MethodCall</td>
                <td className="border border-neutral-700 px-4 py-3">Method invocation</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">(ē₁, ..., ēₙ)</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">Tuple</td>
                <td className="border border-neutral-700 px-4 py-3">Constructor of a tuple with n items</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">δ⟨ēᵢ⟩</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400"></td>
                <td className="border border-neutral-700 px-4 py-3">Primitive application</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">if (e_cond) e₁ else e₂</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">If</td>
                <td className="border border-neutral-700 px-4 py-3">If-then-else expression</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3"></td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">{"{"} val x̄ᵢ = ēᵢ; e {"}"}</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">BlockExpr</td>
                <td className="border border-neutral-700 px-4 py-3">Block expression</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="border border-neutral-700 px-4 py-3">cd</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">trait I {"{"} ms̄ᵢ {"}"}</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">STypeCompanion</td>
                <td className="border border-neutral-700 px-4 py-3">Interface declaration</td>
              </tr>
              <tr>
                <td className="border border-neutral-700 px-4 py-3">ms</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono">def m[τ̄ᵢ](x̄ᵢ : T̄ᵢ): T</td>
                <td className="border border-neutral-700 px-4 py-3 font-mono text-orange-400">SMethod</td>
                <td className="border border-neutral-700 px-4 py-3">Method signature declaration</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The terms in ErgoTree are assigned types according to the typing rules specified in <Link href="/Docs/developers/ergoscript-languages/typing" className="text-cyan-400 hover:underline">Typing</Link>.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Constants</h3>
            <p>contain both the type and the data value of that type. The type of a constant must correspond to its value for it to be well-formed.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Variables</h3>
            <p>are always typed and identified by a unique ID, which refers to either a lambda-bound variable or a val-bound variable.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Lambda expressions</h3>
            <p>can take a list of lambda-bound variables, which can be used in the body expression. The body expression itself can also be a <strong>block expression</strong>.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Function application</h3>
            <p>takes an expression of functional type (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">(T₁, ..., Tₙ) → T</code>) and a list of arguments. The notation <code className="bg-neutral-800 px-2 py-1 rounded">eₓ(ē)</code> is not used to represent function application because it suggests that <code className="bg-neutral-800 px-2 py-1 rounded">(ē)</code> is a subterm, which it is not.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Method invocation</h3>
            <p>allows the application of functions defined as methods of types. If an expression <code className="bg-neutral-800 px-2 py-1 rounded">e</code> has type <code className="bg-neutral-800 px-2 py-1 rounded">T</code>, and a method <code className="bg-neutral-800 px-2 py-1 rounded">m</code> is declared in type <code className="bg-neutral-800 px-2 py-1 rounded">T</code>, the method invocation <code className="bg-neutral-800 px-2 py-1 rounded">e.m(args)</code> is valid. For more information on types and their methods, refer to <Link href="/Docs/developers/ergoscript-languages/predefined-types" className="text-cyan-400 hover:underline">Types</Link>.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Conditional expressions</h3>
            <p>in ErgoTree evaluate the condition strictly and the branches lazily. Each branch is an expression executed based on the result of the condition. This laziness is specified by lowering the expressions to Core-λ (see Figure 2).</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Block expressions</h3>
            <p>contain a list of <strong>val</strong> definitions (bindings) of variables. Each subsequent definition in the block can only refer to previously defined variables. The result of the block's execution is the result of the final expression <code className="bg-neutral-800 px-2 py-1 rounded">e</code>, which can refer to any variable defined within the block.</p>
          </div>
        </div>

        <p>
          Each <strong>type</strong> in ErgoTree can be associated with a list of method declarations, indicating that the type has methods. The semantics of these methods follow similar principles to those in object-oriented languages like Java or Scala. When an instance of a type with methods exists, it is possible to call methods on the instance with additional arguments.
        </p>

        <p>
          Each <strong>method</strong> in ErgoTree can be parameterized by type variables, which are used in the method signature. Since ErgoTree only supports monomorphic values, each method call is monomorphic, and all type variables are assigned concrete types (see the MethodCall typing rule in <Link href="/Docs/developers/ergoscript-languages/typing" className="text-cyan-400 hover:underline">typing</Link>).
        </p>

        <p>
          To specify the semantics of ErgoTree, its terms are translated to a lower-level language called Core-λ, which is a simplified language without lazy operations. The lowering rules are defined in Figure 2.
        </p>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Figure 2: Lowering to Core-λ</h2>
        
        <div className="overflow-x-auto bg-neutral-900/50 rounded-lg p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-cyan-400 pb-4">Term<sub>ErgoTree</sub></th>
                <th className="text-center text-cyan-400 pb-4"></th>
                <th className="text-left text-cyan-400 pb-4">Term<sub>Core</sub></th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm space-y-2">
              <tr>
                <td className="py-2 pr-4">𝒫[λ(x̄ᵢ:T̄ᵢ).e]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">λx:(T₀,...,Tₙ). 𝒫[{val x̄ᵢ: T̄ᵢ = x._i; e}]</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="py-2 pr-4">𝒫[eₓ⟨ēᵢ⟩]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">𝒫[eₓ]⟨𝒫[(ēᵢ)]⟩</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">𝒫[e.m⟨ēᵢ⟩]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">𝒫[e].m⟨𝒫[ēᵢ]⟩</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="py-2 pr-4">𝒫[(e₁, ..., eₙ)]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">(𝒫[e₁], ..., 𝒫[eₙ])</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">𝒫[e₁ || e₂]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">𝒫[if (e₁) true else e₂]</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="py-2 pr-4">𝒫[e₁ && e₂]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">𝒫[if (e₁) e₂ else false]</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">𝒫[if (e_cond) e₁ else e₂]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">if(𝒫[e_cond], λ(_:Unit).𝒫[e₁], λ(_:Unit).𝒫[e₂])()</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="py-2 pr-4">𝒫[{val x̄ᵢ: T̄ᵢ = ēᵢ; e}]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">(λ(x₁:T₁).(... (λ(xₙ:Tₙ).𝒫[e])(𝒫[eₙ]) ...))(𝒫[e₁])</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">𝒫[δ⟨ēᵢ⟩]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">δ⟨𝒫[ēᵢ]⟩</td>
              </tr>
              <tr className="bg-neutral-800/30">
                <td className="py-2 pr-4">𝒫[e]</td>
                <td className="text-center px-4">→</td>
                <td className="py-2">e</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          All n-ary lambdas where n {' > '} 1 are transformed into single-argument lambdas using tupled arguments.
        </p>

        <p>
          It should be noted that the <code className="bg-neutral-800 px-2 py-1 rounded">if (e_cond) e₁ else e₂</code> term in ErgoTree has lazy evaluation of its branches, while the right-hand-side <code className="bg-neutral-800 px-2 py-1 rounded">if</code> is a primitive operation with strict evaluation of the arguments. Laziness is achieved using lambda expressions of type <code className="bg-neutral-800 px-2 py-1 rounded">Unit → Boolean</code>.
        </p>

        <p>
          Logical operations (<code className="bg-neutral-800 px-2 py-1 rounded">||</code>, <code className="bg-neutral-800 px-2 py-1 rounded">&& </code>) in ErgoTree, which are lazy (short-circuiting) on the second argument, are translated to <code className="bg-neutral-800 px-2 py-1 rounded">if</code> terms in ErgoTree, which are then recursively translated to the corresponding Core-λ terms.
        </p>

        <p>
          Syntactic blocks in ErgoTree are eliminated and translated into nested lambda expressions, which unambiguously specify the evaluation semantics of blocks. The evaluation semantics of Core-λ are specified in <Link href="/Docs/developers/ergoscript-languages/evaluation" className="text-cyan-400 hover:underline">evaluation</Link>.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> The lowering transformation is used solely to specify semantics. Implementations may optimize the evaluation of ErgoTree directly as long as the semantics are preserved.
          </p>
        </div>
      </div>
    </>
  );
} 