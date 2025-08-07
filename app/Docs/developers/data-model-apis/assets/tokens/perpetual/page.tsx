import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Code, FileText, ExternalLink } from 'lucide-react';
import { UniversalCopyCodeBlock } from '@/components/ui/UniversalCopyCodeBlock';

export default function PerpetualTokensPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Perpetual Tokens
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding perpetual tokens in ErgoScript
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis/assets/tokens"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tokens
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <p className="text-lg text-gray-300 mb-6">
            ErgoScript allows the creation of a <em>perpetual token</em>, a token that is designed to exist indefinitely, unless it is removed by garbage collection.
          </p>

          <CodeBlock language="typescript"
            code={String.raw`{
  val isPerpetual = {(b: Box) =>
    b.propositionBytes == SELF.propositionBytes && b.tokens == SELF.tokens
  }

  sigmaProp(OUTPUTS.exists(isPerpetual))
}`}
          />

          <p className="text-gray-300 mt-6">
            This code snippet ensures the persistence of a collection of perpetual tokens, even if the collection's size is zero. If you protect a single token using this script, it guarantees that the token will only be removed by garbage collection.
          </p>

          <p className="text-gray-300 mt-4">
            For a comprehensive discussion, refer to <a href="https://www.ergoforum.org/t/a-perpetual-token/205/3" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">this thread</a>.
          </p>
        </div>

        {/* Multi-Stage Protocols Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Multi-Stage Protocols
          </h2>
          
          <p className="text-gray-300 mb-6">
            Multi-stage protocols are beneficial in situations where multiple scripts need to interact. In these protocols, a script can reference the script of a subsequent stage.
          </p>

          <p className="text-gray-300 mb-4">
            For instance, consider the following example:
          </p>

          <p className="text-gray-300 mb-4">
            In <code className="bg-neutral-700 px-2 py-1 rounded">script1</code>, we have the statement:
          </p>

          <CodeBlock language="typescript"
            code={String.raw`hash(OUTPUTS(0).propositionBytes) == script2Hash`}
          />

          <p className="text-gray-300 mt-4 mb-4">
            Here, <code className="bg-neutral-700 px-2 py-1 rounded">script1</code> verifies if the hash of the first output's <code className="bg-neutral-700 px-2 py-1 rounded">propositionBytes</code> matches the hash of <code className="bg-neutral-700 px-2 py-1 rounded">script2</code>.
          </p>

          <p className="text-gray-300 mb-4">
            But, if we want <code className="bg-neutral-700 px-2 py-1 rounded">script2</code> to refer back to <code className="bg-neutral-700 px-2 py-1 rounded">script1</code>, as shown below:
          </p>

          <CodeBlock language="typescript"
            code={String.raw`hash(OUTPUTS(0).propositionBytes) == script1Hash`}
          />

          <p className="text-gray-300 mt-4 mb-4">
            We face a cyclic reference problem, as both scripts are referencing each other.
          </p>

          <p className="text-gray-300 mb-4">
            To overcome this, we can store <code className="bg-neutral-700 px-2 py-1 rounded">script1Hash</code> in a register of the <Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">box</Link> that contains <code className="bg-neutral-700 px-2 py-1 rounded">script2</code>. We also need to modify <code className="bg-neutral-700 px-2 py-1 rounded">script1</code> to ensure that the corresponding register of any box containing <code className="bg-neutral-700 px-2 py-1 rounded">script2</code> equals <code className="bg-neutral-700 px-2 py-1 rounded">hash(SELF.propositionBytes)</code>.
          </p>

          <p className="text-gray-300 mt-6">
            While the "vanilla" perpetual token is intriguing, the "max-once-per-block-use" perpetual token offers more flexibility and power, and should be considered as a distinct design pattern.
          </p>
        </div>
      </div>
    </>
  );
} 