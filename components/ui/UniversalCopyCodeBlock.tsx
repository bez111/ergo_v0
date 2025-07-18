"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function UniversalCopyCodeBlock({ code, className = "" }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className={`relative group ${className}`}>
      <button
        onClick={handleCopy}
        aria-label={copied ? "Copied!" : "Copy code"}
        type="button"
        className="absolute top-2 right-2 z-10 p-1 rounded-md bg-neutral-800/80 hover:bg-orange-400/10 transition-colors border border-transparent hover:border-orange-400 text-orange-300 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        <span className="sr-only">{copied ? "Copied!" : "Copy code"}</span>
      </button>
      <pre className="bg-neutral-900/80 border border-neutral-700 rounded-lg p-4 text-sm text-orange-200 overflow-x-auto"><code>{code}</code></pre>
    </div>
  );
} 