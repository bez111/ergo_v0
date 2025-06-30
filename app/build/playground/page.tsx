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
  const [loading, setLoading] = useState(false)

  async function runCode() {
    setLoading(true)
    setShowOutput(false)
    setOutput('')
    try {
      const res = await fetch('http://localhost:3001/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
      const data = await res.json()
      setSuccess(res.ok)
      setOutput(res.ok ? data.result : data.error)
    } catch (e) {
      setSuccess(false)
      setOutput('Network error: ' + (e instanceof Error ? e.message : String(e)))
    }
    setLoading(false)
    setShowOutput(true)
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
          {/* Requirements for Playground */}
          <div className="mb-4 bg-neutral-900/80 border-l-4 border-cyan-500 rounded px-4 py-3 text-cyan-200 text-sm">
            <span className="font-bold block mb-1">Requirements for Playground:</span>
            <ul className="list-disc pl-5">
              <li>Installed <b>Docker</b> (for sandboxed compilation)</li>
              <li>Running backend server (<code>server.js</code>) with access to Docker and the <code>ergoplatform/ergo-tool</code> image</li>
              <li>Open port <b>3001</b> (or another, if changed)</li>
              <li>For local development: make sure Docker and backend are running on the same machine as the frontend</li>
            </ul>
          </div>
          {/* Instruction about sandbox */}
          <div className="mb-4 flex items-center bg-neutral-800/80 border-l-4 border-orange-500 rounded px-4 py-3 text-orange-200 text-sm">
            <span className="mr-2 flex items-center"><span className="text-xl mr-2">⚠️</span><span className="font-bold">Note:</span></span>
            <span>Your code is compiled in an isolated environment (Docker sandbox) for security. Compilation errors and results are returned in real time.</span>
          </div>
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
              disabled={loading}
              className={`inline-flex items-center gap-2 px-6 py-2 rounded font-semibold text-base active:scale-95 transition-all ${loading ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-green-500 text-black hover:bg-green-600'}`}
            >
              <Play className="w-5 h-5" /> {loading ? 'Running...' : 'Run'}
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
              <span className="whitespace-pre-line">{output}</span>
            </div>
          )}
        </section>
      </div>
    </main>
  )
} 