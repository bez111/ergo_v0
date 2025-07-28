"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Archive } from "lucide-react";

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

export default function StoringDataPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Archive className="w-10 h-10 text-blue-400" />
        Data Storage in ErgoScript
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-3xl">
          ErgoScript, the language used in the Ergo blockchain, provides two primary methods for data storage. The first method involves the use of <em>registers</em> during the creation of a box. The second method utilizes <em>context variables</em> when a box is being spent. For the purpose of this discussion, we will concentrate on the use of registers.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          An Ergo box is equipped with ten registers, labeled from <code className="bg-neutral-800 px-1 rounded">R0</code> to <code className="bg-neutral-800 px-1 rounded">R9</code>. The protocol reserves the first four registers (<code className="bg-neutral-800 px-1 rounded">R0</code> through <code className="bg-neutral-800 px-1 rounded">R3</code>). The remaining six registers (<code className="bg-neutral-800 px-1 rounded">R4</code> through <code className="bg-neutral-800 px-1 rounded">R9</code>) are available for data storage and are initially empty. It's important to note that you cannot have an empty register between two filled registers.
        </div>

        <div className="text-gray-300 mb-6">
          Below is an example demonstrating how registers can be used in ErgoScript:
        </div>

        <CodeBlock>{`{
   val r4 = SELF.R4[GroupElement]
   if (r4.isDefined) {
      val x = r4.get
      proveDlog(x) 
   } else {
      proveDlog(decodePoint(fromBase64("AlCGOtZKh66KL+g8GvGoQDy1P1PkhthRHa2KBIh+WyNS")))
   } 
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          In this code snippet, the line <code className="bg-neutral-800 px-1 rounded">SELF.R4[GroupElement]</code> returns an <code className="bg-neutral-800 px-1 rounded">Option[GroupElement]</code> type. The <code className="bg-neutral-800 px-1 rounded">Option</code> type semantics in ErgoScript are identical to{' '}
          <a href="https://alvinalexander.com/scala/using-scala-option-some-none-idiom-function-java-null/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            those in Scala
          </a>. If the <code className="bg-neutral-800 px-1 rounded">Option</code> is defined—meaning <code className="bg-neutral-800 px-1 rounded">SELF.R4</code> does contain a <code className="bg-neutral-800 px-1 rounded">GroupElement</code> type—then the first branch of the if statement is executed. Otherwise, if <code className="bg-neutral-800 px-1 rounded">Option</code> is undefined, the second branch is executed.
        </div>
      </div>
    </>
  );
} 