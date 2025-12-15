"use client";
import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
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

export default function P2SPlaygroundPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Compiling ErgoScript
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/playgrounds"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Playgrounds
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            To compile any ErgoScript contract into a P2S (Pay-to-Script) address, you can use <strong>plutomonkey</strong>:
          </p>
        </div>

        <CodeBlock>
{`https://wallet.plutomonkey.com/p2s/?source=`}
        </CodeBlock>

        <div className="text-gray-300 mb-4">
          After compiling, the resulting P2S address can be utilized within Rust, as demonstrated in the following code snippet:
        </div>

        <CodeBlock language="rust">
{`    fn simplified_age_usd_bank_contract() {
        let p2s_addr_str = "7Nq5tKsVYCgneNgEfA2BJKwGsWozezNLhCNsRBihcHVFkDTuTThd4Qt1bi7NfCK1HuuVfjksMrEftV6MEFajjuyp1TMD2PX7SYWvkg9zH4CtgpdoBjekCNXs5XawxXnW6FT7GCqXTpJUP2TkkuqBh1df99PTigehys36uZz9wQnkrJXrv3mw3Yy4CM622qe5wdqLtpEonjazEmsw8weqEYegDyfJnswDvDkLPXtcCB86i19jik4fnSTtCcYj3jpWCQ7WL5dZn1ivs5JGRsR2ioNCRiZd3Gu1zJBgbHkMg41Z6VeCRWXjGY99BUtgtQiepSHGHajFCVcFAHhVxccdVUPCxGeEL6c2dNx6qzEkVfTfHs5qBgJewR8KCZTCVTurNBHeqCSVdxnfFvhW3f72cNrae5E1UhTAXU2iX4LZMHQsKyefY24Aq1b1srTyRWLpixjbcezFqA2TKjGSn1p1ruxbR7AQpW24ByPKT9sFE9ii4qNeXDnLcGtAAGS9FC5SD1s516a4NCu6v9zZfTvRKGkCwt78J8DEVnhTbttjcsvqFsUXQrvAv7TGVsaT4mL6B7F5BhRoZwFkgRXqFUVCWvgqJrwwjFRtbc5aZz";
        let encoder = AddressEncoder::new(NetworkPrefix::Mainnet);
        let addr = encoder.parse_address_from_str(p2s_addr_str).unwrap();
        let script: Rc<Expr> = addr.script().unwrap().proposition().unwrap();
        dbg!(&script);
        let res: bool = eval_out_wo_ctx::<SigmaProp>(script.as_ref())
            .try_into()
            .unwrap();
        assert!(res);
    }`}
        </CodeBlock>

        <div className="text-gray-300 mb-6">
          See{' '}
          <a href="https://github.com/ergoplatform/sigma-rust/blob/fd197d0c0892cd24bbcb475e0a83243784700e32/ergotree-interpreter/src/contracts.rs#L159-L167" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            this link
          </a>{' '}
          for full context
        </div>

        <div className="text-gray-300 mb-6">
          This approach should also be applicable with JavaScript or TypeScript WASM (WebAssembly) bindings.
        </div>
      </div>
    </>
  );
} 