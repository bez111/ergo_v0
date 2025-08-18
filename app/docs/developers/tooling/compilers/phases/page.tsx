"use client";
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

const CodeBlock = ({ children, language = "text" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function CompilerPhasesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        ErgoScript Compiler Phases
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/compilers"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compilers
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300">
          <p className="mb-6">
            This document provides an overview of the key phases in the ErgoScript compiler pipeline, including specific implementations in the sigma-rust and sigmastate-interpreter projects. The ErgoScript compiler takes high-level ErgoScript code and translates it into an intermediate form that can be evaluated by the ErgoTree interpreter or serialized for execution in the Ergo blockchain.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Compiler Pipeline Overview</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">The Sigma frontend implements the following pipeline:</p>
          
          <CodeBlock>SourceCode → parse → bind → typecheck → buildGraph → buildTree → ErgoTree</CodeBlock>

          <p className="mb-4">Here's a breakdown of each phase:</p>
          
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Source Code</strong>: The input is a string of Unicode characters representing the ErgoScript code.</li>
            <li><strong>Parse</strong>: Converts the source code into an Abstract Syntax Tree (AST).</li>
            <li><strong>Bind</strong>: Resolves identifiers within the AST, linking them to their corresponding definitions.</li>
            <li><strong>Typecheck</strong>: Ensures all expressions in the AST are type-safe by assigning types to each node.</li>
            <li><strong>BuildGraph</strong>: Transforms the typed AST into a directed acyclic graph (DAG) for optimization.</li>
            <li><strong>BuildTree</strong>: Converts the optimized graph into an ErgoTree, the executable intermediate representation.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Lexical Analysis (Lexer)</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: The Lexer, or tokenizer, scans the source code and converts it into a sequence of tokens. Tokens are the smallest meaningful elements in the code, such as keywords, operators, literals, and identifiers.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The Lexer reads the input source code character by character and groups characters into tokens. These tokens are categorized and labeled for the parser to consume.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Example</strong>: Keywords like <code className="bg-neutral-800 px-2 py-1 rounded">if</code>, <code className="bg-neutral-800 px-2 py-1 rounded">else</code>, or operators like <code className="bg-neutral-800 px-2 py-1 rounded">+</code>, <code className="bg-neutral-800 px-2 py-1 rounded">-</code> are converted into tokens representing these elements in the language.</li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: Implemented using the <code className="bg-neutral-800 px-2 py-1 rounded">Logos</code> crate, which provides an efficient way to define lexing rules in Rust.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergoscript-compiler/src/lexer.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergoscript-compiler/src/lexer.rs</code></a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: A custom Scala-based Lexer is used for tokenization.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/parsers/shared/src/main/scala/sigmastate/lang/Lexer.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>parsers/shared/src/main/scala/sigmastate/lang/Lexer.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Syntax Analysis (Parser)</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: The Parser takes the list of tokens generated by the Lexer and constructs an Abstract Syntax Tree (AST). The AST represents the syntactical structure of the source code in a tree format, where each node corresponds to a language construct like an expression, statement, or function.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The parser traverses the tokens in a predefined grammatical order to build the AST. This process involves ensuring that the source code follows the language's syntax rules. In Sigma, this is done via the <code className="bg-neutral-800 px-2 py-1 rounded">SigmaCompiler.parse</code> method.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Example</strong>: An expression like <code className="bg-neutral-800 px-2 py-1 rounded">a + b</code> would be represented as a node in the AST with <code className="bg-neutral-800 px-2 py-1 rounded">+</code> as the root and <code className="bg-neutral-800 px-2 py-1 rounded">a</code> and <code className="bg-neutral-800 px-2 py-1 rounded">b</code> as its children.</li>
                <li><strong>Error Handling</strong>: Any parsing errors throw a <code className="bg-neutral-800 px-2 py-1 rounded">ParserException</code>.</li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: The parser uses the <code className="bg-neutral-800 px-2 py-1 rounded">Rowan</code> library to manage Concrete Syntax Trees (CST) and Abstract Syntax Trees (AST). AST nodes wrap Rowan's trees (CST) and expose node-specific details through methods (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">BinaryExpr::lhs()</code>).
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergoscript-compiler/src/parser.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergoscript-compiler/src/parser.rs</code></a></li>
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergoscript-compiler/src/ast.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergoscript-compiler/src/ast.rs</code></a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: The Scala implementation utilizes its own parsing strategies to construct the AST from tokens.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/parsers/shared/src/main/scala/sigmastate/lang/SigmaParser.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>parsers/shared/src/main/scala/sigmastate/lang/SigmaParser.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. High-level Intermediate Representation (HIR)</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: The HIR simplifies the AST by abstracting away certain syntactical details while retaining the logical structure of the code. This intermediate representation is more conducive to further analysis and transformation.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The AST is transformed into HIR by "lowering" its structure, which means simplifying and standardizing the representation while retaining all necessary information for the subsequent compilation phases.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Example</strong>: Complex language constructs in the AST are reduced to simpler, more uniform representations in the HIR.</li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: Each HIR node has a kind (enum), span (source code reference), and an optional type. This makes it easier to perform operations like type inference and binding.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergoscript-compiler/src/hir.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergoscript-compiler/src/hir.rs</code></a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: HIR serves a similar purpose, with emphasis on compatibility with the Scala language's functional programming features.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sc/shared/src/main/scala/sigma/compiler/ir/TypeDescs.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>sc/shared/src/main/scala/sigma/compiler/ir/TypeDescs.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Binding (Binder)</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: The Binder phase resolves and links identifiers in the HIR to their corresponding definitions. This includes resolving variables, functions, and constants to ensure that the script's logic is correctly mapped to the underlying data structures.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The Binder, implemented in <code className="bg-neutral-800 px-2 py-1 rounded">SigmaBinder.bind</code>, traverses the HIR and replaces symbolic names with actual references. This process involves checking the environment (like global variables and predefined constants) and linking them appropriately. It also transforms environment values of predefined Scala types (such as <code className="bg-neutral-800 px-2 py-1 rounded">Int</code>, <code className="bg-neutral-800 px-2 py-1 rounded">Boolean</code>, <code className="bg-neutral-800 px-2 py-1 rounded">Box</code>, etc.) into constant nodes (<code className="bg-neutral-800 px-2 py-1 rounded">IntConstant</code>, <code className="bg-neutral-800 px-2 py-1 rounded">BoxConstant</code>, etc.) of the corresponding type.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Example</strong>: An identifier like <code className="bg-neutral-800 px-2 py-1 rounded">HEIGHT</code> in a script would be resolved to the actual block height from the environment.</li>
                <li><strong>Error Handling</strong>: Any binding errors throw a <code className="bg-neutral-800 px-2 py-1 rounded">BinderException</code>.</li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: The Binder rewrites the HIR tree, swapping identifiers (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">HEIGHT</code>), some predefined functions (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">min/max</code>), and variables from the environment (<code className="bg-neutral-800 px-2 py-1 rounded">ScriptEnv</code>) with their HIR nodes, ensuring correct references.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergoscript-compiler/src/binder.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergoscript-compiler/src/binder.rs</code></a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: A similar process is implemented in Scala, using the Scala language's features for name resolution and binding.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sc/shared/src/main/scala/sigma/compiler/phases/SigmaBinder.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>sc/shared/src/main/scala/sigma/compiler/phases/SigmaBinder.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Type Inference</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: Type Inference ensures that all expressions in the script are type-safe by determining the types of all expressions. This phase is crucial for ensuring that all operations in the script are performed on compatible types.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The Type Inference algorithm recursively analyzes the HIR and assigns types to each expression. It checks for type consistency and infers types where they are not explicitly provided. The type assignment is performed by the <code className="bg-neutral-800 px-2 py-1 rounded">assignType</code> tree transformation, which assigns correct types to all tree nodes.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Example</strong>: In a script, if an integer is added to a floating-point number, type inference will ensure that the operation is valid and determine the result's type.</li>
              </ul>
            </li>
          </ul>

          <p className="mb-4"><strong>Error Handling</strong>: Any type inference errors throw a <code className="bg-neutral-800 px-2 py-1 rounded">TyperException</code>.</p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: Type inference is implemented as a separate phase that traverses the HIR tree and assigns types, ensuring type correctness before moving to the next phase.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergoscript-compiler/src/type_infer.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergoscript-compiler/src/type_infer.rs</code></a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: Type inference follows Scala's type system rules, ensuring that all expressions are type-safe.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sc/shared/src/main/scala/sigma/compiler/phases/SigmaTyper.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>sc/shared/src/main/scala/sigma/compiler/phases/SigmaTyper.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Graph Building</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: This phase converts the type-checked AST into a directed acyclic graph (DAG) where nodes represent operations and edges represent dependencies between operations. This graph representation allows for optimizations such as constant propagation, common subexpression elimination, and dead code elimination.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The <code className="bg-neutral-800 px-2 py-1 rounded">IRContext.buildGraph</code> method takes the typed AST and builds the graph. During graph building, the following optimizations are performed:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Constant Propagation</strong>: Replaces variables with their known constant values.</li>
                <li><strong>Common Subexpression Elimination</strong>: Identifies and eliminates redundant computations.</li>
                <li><strong>Dead Code Elimination</strong>: Removes code that does not affect the final output.</li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: The MIR generated during this phase is the final form of the intermediate representation used by the interpreter and for serialization.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergotree-ir/src/mir.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergotree-ir/src/mir.rs</code></a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: The graph building phase focuses on preparing the code for efficient execution by the ErgoTree interpreter.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sc/shared/src/main/scala/sigma/compiler/ir/ProgramGraphs.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>sc/shared/src/main/scala/sigma/compiler/ir/ProgramGraphs.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Tree Building</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: This phase converts the optimized graph into an ErgoTree, which is the executable intermediate representation of the script. The ErgoTree is then ready to be interpreted by the ErgoTree interpreter.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The <code className="bg-neutral-800 px-2 py-1 rounded">IRContext.buildTree</code> method takes the graph produced in the previous phase and constructs the final ErgoTree. This involves finalizing the structure of the script in a form that can be executed by the interpreter.
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: The resulting ErgoTree can be processed by the Sigma interpreter, allowing for secure and efficient execution of the script.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sc/shared/src/main/scala/sigma/compiler/ir/ProgramGraphs.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>sc/shared/src/main/scala/sigma/compiler/ir/ProgramGraphs.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">8. Type Checking</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: Type Checking ensures that the types of all expressions and operations in the MIR are consistent and correct. This phase verifies that the script adheres to the type rules established during type inference.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The Type Checker traverses the MIR, checking that each operation's input types are compatible with its output types, and ensuring that the script is type-safe.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Example</strong>: The Type Checker would flag an error if a string were incorrectly used in a numerical operation.</li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: Type checking is performed alongside the MIR traversal, validating the correctness of the types before the script is executed.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergotree-ir/src/type_check.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergotree-ir/src/type_check.rs</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">9. Execution (ErgoTree Interpreter)</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: The ErgoTree interpreter evaluates the MIR nodes by calling the <code className="bg-neutral-800 px-2 py-1 rounded">Evaluable::eval()</code> method on the tree root. Each node implements the <code className="bg-neutral-800 px-2 py-1 rounded">Evaluable::eval()</code> trait method.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: The interpreter evaluates the ErgoTree to produce a result based on the logic defined in the script.
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: The interpreter evaluates the MIR nodes by calling <code className="bg-neutral-800 px-2 py-1 rounded">Evaluable::eval()</code> on the tree root.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergotree-interpreter/src/lib.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergotree-interpreter/src/lib.rs</code></a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigmastate-interpreter</code></strong>: The Scala-based interpreter executes the ErgoTree, providing the final evaluation of the script.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/SigmaPropProver.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>interpreter/shared/src/main/scala/org/ergoplatform/SigmaPropProver.scala</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">10. ErgoTree Serialization</h2>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <strong>Objective</strong>: Each MIR node implements the <code className="bg-neutral-800 px-2 py-1 rounded">SigmaSerializable</code> trait with <code className="bg-neutral-800 px-2 py-1 rounded">sigma_parse()</code> and <code className="bg-neutral-800 px-2 py-1 rounded">sigma_serialize()</code> methods for serialization and deserialization.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>How it works</strong>: This phase ensures that the ErgoTree can be serialized into a format suitable for storage or transmission and can be deserialized back into an executable form.
            </li>
          </ul>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In <code className="bg-neutral-800 px-2 py-1 rounded">sigma-rust</code></strong>: Each MIR node implements the <code className="bg-neutral-800 px-2 py-1 rounded">SigmaSerializable</code> trait for serialization and deserialization.
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Location</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergotree-ir/src/serialization.rs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><code>ergotree-ir/src/serialization.rs</code></a></li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resources</h2>
        <div className="text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/docs/architecture.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                sigma-rust/docs/architecture
              </a>
            </li>
            <li>
              <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/ergoscript-compiler.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                ErgoScript Compiler Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
} 