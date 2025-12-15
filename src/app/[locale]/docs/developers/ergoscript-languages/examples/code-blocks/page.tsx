"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Copy, Check, Code } from "lucide-react";

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

const CodeBlock = ({ children, language = "scala" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function CodeBlocksPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Code className="w-10 h-10 text-green-400" />
        Using Code-Blocks in ErgoScript
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-3xl">
          When using multiple lines in ErgoScript, the lines must be contained within a code-block, which is enclosed in braces <code className="bg-neutral-800 px-1 rounded">{`{}`}</code>. Consider the following example:
        </div>

        <CodeBlock>{`{
   val out = OUTPUTS(0)
   val in = INPUTS(0)
   in.value == out.value
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          In this example, note that Scala accesses arrays using round parentheses <code className="bg-neutral-800 px-1 rounded">()</code>, not square brackets <code className="bg-neutral-800 px-1 rounded">[]</code> as in Java or Python. Therefore, <code className="bg-neutral-800 px-1 rounded">OUTPUTS(0)</code> is referencing the first element of the <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> array. In Scala, the last line of a block serves as the returned value of that block. Here, the returned value is the boolean predicate <code className="bg-neutral-800 px-1 rounded">in.value == out.value</code>.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          This script maps to the{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=eyAgCiAgdmFsIG91dCA9IE9VVFBVVFMoMCkKICB2YWwgaW4gPSBJTlBVVFMoMCkKICBpbi52YWx1ZSA9PSBvdXQudmFsdWUKfQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            address
          </a>{' '}
          <code className="bg-neutral-800 px-1 rounded">2EUTBShk4TbLWJNwGpkVYh8dAPqbrfvb3p</code>. It allows anyone to spend the box associated with this address, as long as the first input and the first output of the transaction contain the same value.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          We used the <code className="bg-neutral-800 px-1 rounded">val</code> keyword to define intermediate immutable variables, similar to Scala. As <code className="bg-neutral-800 px-1 rounded">val</code> creates an immutable object, the object's value can't be changed once assigned. This makes the following code snippet invalid:
        </div>

        <CodeBlock>{`...
val out = OUTPUTS(0)        // defines an immutable value and sets it to the first output.  
out = OUTPUTS(1)            // reassignment of a val will cause an error
...`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          Unlike Scala, ErgoScript does not support the <code className="bg-neutral-800 px-1 rounded">var</code> keyword, meaning all variables are immutable.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          However, mutable variables can be emulated using lambda syntax, which will be covered separately.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          Multiple blocks can be combined as shown below:
        </div>

        <CodeBlock>{`{
  INPUTS(0).id == SELF.id
} || {
  INPUTS(0).value == 100000 
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          In this example, the script checks whether the id of the first input is the same as the current box's id or if the value of the first input equals 100,000 nanoErgs.
        </div>
      </div>
    </>
  );
} 