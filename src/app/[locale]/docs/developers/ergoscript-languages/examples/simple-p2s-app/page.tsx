"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Copy, Check, Rocket } from "lucide-react";

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

export default function SimpleP2SAppPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Rocket className="w-10 h-10 text-orange-400" />
        Developing Simple Pay-to-Script Applications with ErgoScript
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
          With ErgoScript, you can create basic applications using the pay-to-script (P2S) address compiler available at{' '}
          <a href="https://wallet.plutomonkey.com/p2s/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            wallet.plutomonkey.com/p2s
          </a>. Check out{' '}
          <a href="https://www.youtube.com/watch?v=d6Mf-oxaLIc" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            this video tutorial
          </a>{' '}
          for more details. When you send a transaction to this P2S address, the output is locked with the script you provided.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example Applications</h2>

        <div className="text-gray-300 mb-6">
          Here are a few examples of what you can create:
        </div>

        <div className="text-gray-300 mb-6">
          - <strong>Wrapped ERG</strong>: This script lets you exchange Wrapped ERG tokens for native ERG on a trustless 1:1 basis. For more information, check out the{' '}
          <a href="https://www.ergoforum.org/t/wrapped-erg-wrapping-native-erg-as-a-1-1-token/469" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Wrapped ERG forum thread
          </a>.
        </div>

        <div className="text-gray-300 mb-6">
          - <strong>Crowdfunding</strong>: This script provides a method to raise funds within a specified timeframe. The funds can only be accessed if the fundraising goal is met by the deadline. If the deadline passes without reaching the goal, the funds can be returned to the backers. See the script on{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=ewogICB2YWwgY2FtcGFpZ25JZCA9IFNFTEYuUjRbSW50XS5nZXQKICAgdmFsIGJhY2tlclB1YktleSA9IHByb3ZlRGxvZyhTRUxGLlI1W0dyb3VwRWxlbWVudF0uZ2V0KQogICB2YWwgcHJvamVjdFB1YktleSA9IFNFTEYuUjZbU2lnbWFQcm9wXS5nZXQKICAgdmFsIGRlYWRsaW5lID0gU0VMRi5SN1tJbnRdLmdldCAvLyBoZWlnaHQKICAgdmFsIG1pblRvUmFpc2UgPSBTRUxGLlI4W0xvbmddLmdldAoKICAgdmFsIGZ1bmRyYWlzaW5nRmFpbHVyZSA9IEhFSUdIVCA+PSBkZWFkbGluZSAmJiBiYWNrZXJQdWJLZXkKICAgdmFsIGVub3VnaFJhaXNlZCA9IHsob3V0Qm94OiBCb3gpID0+IG91dEJveC52YWx1ZSA+PSBtaW5Ub1JhaXNlICYmIG91dEJveC5wcm9wb3NpdGlvbkJ5dGVzID09IHByb2plY3RQdWJLZXkucHJvcEJ5dGVzICYmIG91dEJveC5SNFtJbnRdLmdldCA9PSBjYW1wYWlnbklkfQoKICAgdmFsIGZ1bmRyYWlzaW5nU3VjY2VzcyA9IEhFSUdIVCA8IGRlYWRsaW5lICYmIGVub3VnaFJhaXNlZChPVVRQVVRTKDApKQogICBmdW5kcmFpc2luZ0ZhaWx1cmUgfHwgZnVuZHJhaXNpbmdTdWNjZXNzCiB9" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Pluto Monkey P2S
          </a>.
        </div>

        <div className="text-gray-300 mb-6">
          - <strong>3-out-of-5 Threshold Signature</strong>: This script allows the creation of a multi-signature wallet that requires the agreement of at least three out of five participants to authorize transactions. The script can be found on{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=ewphdExlYXN0KAogIDMsIAogIENvbGwoCiAgICBQSygiOWY4WlF0MVN1ZTZXNUFDZE1TUFJ6c0hqM2pqaVprYll5M0NFdEI0QmlzeEV5azRSc05rIiksIAogICAgUEsoIjloRldQeWhDSmN3NEtReUNHdTR5QUdmQzFpZVJBS3lGZzI0RktqTEpLMnVEZ0E4NzN1cSIpLCAKICAgIFBLKCI5ZmRWUDJqY2ExZTVuQ1RUNnE5aWpaTHNzR2o2djRqdVk4Z0VBeFVocDdZVHVTc0xzcFMiKSwgCiAgICBQSygiOWdBS2VSdTFXNERoNmFkV1hublltZnFqQ1RueG5TTXR5bTJMUFBNUEVyQ2t1c0NkNkYzIiksCiAgICBQSygiOWdtTnNxcnFkU3BwTFVCcWcyVXpSRW1taXZncWgxcjNqbU5jTEFjNTNoazNZQ3ZBR1dFIikKICApCikKfQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Pluto Monkey P2S
          </a>.
        </div>
      </div>
    </>
  );
} 