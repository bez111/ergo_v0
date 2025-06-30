"use client"

import { useState } from "react"
import { BookOpen, Play, Copy, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
// import dynamic from "next/dynamic"
// const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false })

const examples = [
  {
    name: "Simple Signature",
    code: "sigmaProp(HEIGHT > 1000)"
  },
  {
    name: "Multi-Sig (2 of 2)",
    code: "sigmaProp(\n  proveDlog(pubkeyA) && proveDlog(pubkeyB)\n)"
  },
  {
    name: "Time-Locked Contract",
    code: "sigmaProp(HEIGHT > 500000)"
  },
  {
    name: "Mint Token Example",
    code: "{ // minting logic here }"
  },
]

export default function PlaygroundPage() {
  const [code, setCode] = useState(examples[0].code)
  const [output, setOutput] = useState('')
  const [selected, setSelected] = useState(0)
  const [copied, setCopied] = useState(false)
  const [success, setSuccess] = useState(true)
  const [showOutput, setShowOutput] = useState(false)

  function runCode() {
    setSuccess(Math.random() > 0.2)
    setOutput(success
      ? '✔️ Simulation successful! (This is a mock output)'
      : '❌ Error: Invalid contract syntax (This is a mock error)')
    setShowOutput(false)
    setTimeout(() => setShowOutput(true), 100)
  }

  function copyCode() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center py-12 px-2">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Sidebar with examples */}
        <aside className="w-full md:w-56 flex-shrink-0 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4 text-gray-200">Templates</h2>
          <ul className="flex md:flex-col gap-2">
            {examples.map((ex, i) => (
              <li key={ex.name}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors text-sm ${selected === i ? 'bg-orange-500 text-black' : 'bg-neutral-900 text-white hover:bg-orange-600 hover:text-black'}`}
                  onClick={() => { setSelected(i); setCode(ex.code); setOutput(''); setShowOutput(false) }}
                >
                  {ex.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-2">
            <Link href="/build/docs/cookbook" className="inline-flex items-center gap-2 text-orange-400 hover:underline text-sm">
              <BookOpen className="w-4 h-4" /> Cookbook
            </Link>
          </div>
        </aside>
        {/* Main editor and output */}
        <section className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">Ergo Playground</h1>
            <button
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-neutral-800 text-white hover:bg-orange-500 transition-colors text-sm"
              title="Copy code"
              onClick={copyCode}
            >
              {copied ? 'Copied!' : <Copy className="w-4 h-4" />} Copy
            </button>
          </div>
          {/* Monaco Editor imitation (replace with MonacoEditor if installed) */}
          <textarea
            className="w-full min-h-[220px] bg-neutral-900 text-orange-200 font-mono rounded-lg p-4 text-base border border-neutral-800 focus:border-orange-400 outline-none resize-y transition-all duration-200 shadow-inner"
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
          />
          {/* Monaco Editor example (uncomment if you install @monaco-editor/react) */}
          {/*
          <MonacoEditor
            height="220px"
            defaultLanguage="javascript"
            value={code}
            onChange={v => setCode(v || '')}
            theme="vs-dark"
            options={{ fontSize: 16, minimap: { enabled: false } }}
          />
          */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={runCode}
              className="inline-flex items-center gap-2 px-6 py-2 bg-green-500 rounded font-semibold text-black hover:bg-green-600 transition-all text-base active:scale-95"
            >
              <Play className="w-5 h-5" /> Run
            </button>
            <button
              onClick={() => { setCode(examples[selected].code); setOutput(''); setShowOutput(false) }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-neutral-800 rounded font-semibold text-white hover:bg-neutral-700 transition-all text-base active:scale-95"
            >
              Reset
            </button>
          </div>
          {/* Output */}
          {showOutput && output && (
            <div className={`flex items-center gap-3 mt-4 px-4 py-3 rounded-lg border text-base font-mono transition-all duration-300 ${success ? 'bg-green-900/30 border-green-700 text-green-300' : 'bg-red-900/30 border-red-700 text-red-300'}`}>
              {success ? <CheckCircle className="w-5 h-5 text-green-400" /> : <AlertTriangle className="w-5 h-5 text-red-400" />}
              <span>{output}</span>
            </div>
          )}
        </section>
      </div>
    </main>
  )
} 