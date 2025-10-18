"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

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
      className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-300" />
      )}
    </button>
  );
};

const CodeBlock = ({ children, language = "text" }: { children: string; language?: string }) => (
  <div className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
    <CopyButton text={children} />
    <pre className="p-4 overflow-x-auto">
      <code className={`language-${language} text-sm`}>
        {children}
      </code>
    </pre>
  </div>
);

export default function CliPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        ErgoScript Compiler
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/compilers"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compilers
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300">
          <p className="mb-6">
            The{' '}
            <a href="https://github.com/ergoplatform/ergoscript-compiler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ErgoScript Compiler
            </a>{' '}
            is a Command Line Interface (CLI) tool designed to compile ErgoScript code into an Ergo address.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">User Guide</h2>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Setup and Compilation</h3>

        <div className="text-gray-300 mb-6">
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              If you're starting from source, compile the ErgoScript compiler using these steps:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Clone the repository by executing <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">git clone https://github.com/scalahub/ErgoScriptCompiler.git</code>.</li>
                <li>Make sure SBT is installed and correctly set up in your path.</li>
                <li>Use the command <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sbt assembly</code> in the project root folder to compile the JAR file.</li>
              </ul>
              <p className="mt-4 ml-6">
                Upon successful compilation, a JAR file is generated in the following path: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">target/scala-2.12/ErgoScriptCompiler-assembly-0.1.jar</code>. In the steps below, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">&lt;jarFile&gt;</code> refers to this JAR.
              </p>
              <p className="mt-2 ml-6">
                If you're using the precompiled JAR, proceed directly to the next step.
              </p>
            </li>
            <li>
              Compiling ErgoScript code involves the following steps:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Save your ErgoScript code in a text file, for example, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">myScript.es</code>. You can choose any file extension.</li>
                <li>If your code references any symbols (constants), save them in a separate file, for instance, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">mySymbols.json</code>. Refer to the section below on how to write this file.</li>
                <li>This symbols file is optional and is only required if your code references any symbols.</li>
                <li>
                  Use the command <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">java -cp &lt;jarFile&gt; Compile &lt;ergoScriptFile&gt; &lt;optionalSymbolsFile&gt;</code> to compile the file. For example:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">java -cp ErgoScriptCompiler.jar Compile myScript.es mySymbols.json</code></li>
                    <li><code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">java -cp ErgoScriptCompiler.jar Compile myScript.es</code></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-4">
            Refer to the example below for a sample output.
          </p>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Integration in Your Project</h3>

        <div className="text-gray-300 mb-4">
          To use ErgoScript Compiler in your project, add the following to your build.sbt:
        </div>

        <CodeBlock>
{`libraryDependencies += "io.github.ergoplatform" %% "ergoscriptcompiler" % "1.0"`}
        </CodeBlock>

        <div className="text-gray-300 mb-6">
          Then call: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">util.Compiler.compile(ergoScriptFile: String,  symbolsFile: Option[String])</code>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Examples and Outputs</h2>

        <div className="text-gray-300 mb-4">
          The <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">src/test/resources</code> directory contains sample ErgoScript and symbol files. Here's an example execution:
        </div>

        <CodeBlock language="bash">
{`java -cp \\
      target/scala-2.12/ErgoScriptCompiler-assembly-0.1.jar \\
      Compile \\
      src/test/resources/AgeUSD.es \\
      src/test/resources/AgeUSD_symbols.json`}
        </CodeBlock>

        <div className="text-gray-300 mb-6">
          The output includes:
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>The ErgoTree corresponding to the Script, serialized and hex-encoded.</li>
            <li>The Blake2b256 hash of the ErgoTree, hex-encoded.</li>
            <li>The address corresponding to the ErgoTree.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Symbol File Format</h2>

        <div className="text-gray-300 mb-4">
          If your ErgoScript code references token IDs or script hashes, encode such values in a "symbols" file as follows (any file extension is permissible):
        </div>

        <CodeBlock language="json">
{`{
  "symbols":[
    {
      "name":"poolTokenId",
      "type":"CollByte",
      "value":"0fb1eca4646950743bc5a8c341c16871a0ad9b4077e3b276bf93855d51a042d1"
    },
    {
      "name":"epochPrepScriptHash",
      "type":"CollByte",
      "value":"d998e06e0c093b0990fa3da4f3bea4364546803551ea9cac02623e9675ba4522"
    },
    {
      "name":"buffer",
      "type":"Int",
      "value":"4"
    }
  ]


}`}
        </CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Generating Payment Requests</h2>

        <div className="text-gray-300 mb-6">
          Apart from compiling ErgoScript, this tool can generate a "payment request". It replaces register values from human-understandable forms to serialized-hex needed by the Ergo client's REST API. For instance, to store the integer 1, you would provide the register value as <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">0402</code>.
        </div>

        <div className="text-gray-300 mb-6">
          The command to generate payment requests is: <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">java -cp &lt;jarFile&gt; Payment &lt;humanRequest.json&gt; &lt;symbolsFile.json&gt;</code>
        </div>
      </div>
    </>
  );
} 