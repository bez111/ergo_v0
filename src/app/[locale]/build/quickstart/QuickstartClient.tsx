"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Terminal,
  Copy,
  CheckCircle,
  ArrowRight,
  Bot,
  Package,
  Code2,
  Zap,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

// ── Code snippets ─────────────────────────────────────────────────────────────
const STEP_1_CODE = `npm install @fleet-sdk/core`

const STEP_2_CODE = `mkdir my-agent && cd my-agent
npm init -y
npm install @fleet-sdk/core node-fetch`

const STEP_3_CODE = `// agent-pay.js
import { TransactionBuilder, OutputBuilder, SAFE_MIN_BOX_VALUE } from "@fleet-sdk/core";

// ── Config ───────────────────────────────────────────────────────────────────
const TESTNET_API = "https://api-testnet.ergoplatform.com";
const YOUR_ADDRESS = "YOUR_TESTNET_ADDRESS";  // paste your testnet address
const RECEIVER_ADDRESS = "3WwbzW6u8hKWBcL1W7kNVMr25s2UHfSBnYtwSHvrRQt7DdPuoXrt"; // testnet receiver

// ── 1. Fetch unspent boxes ────────────────────────────────────────────────────
const res = await fetch(
  \`\${TESTNET_API}/api/v1/boxes/unspent/byAddress/\${YOUR_ADDRESS}\`
);
const { items: inputs } = await res.json();

// ── 2. Build transaction ──────────────────────────────────────────────────────
const unsignedTx = new TransactionBuilder(await getCurrentHeight())
  .from(inputs)
  .to(
    new OutputBuilder("1000000", RECEIVER_ADDRESS) // 0.001 ERG
  )
  .sendChangeTo(YOUR_ADDRESS)
  .payMinFee()
  .build()
  .toEIP12Object();

console.log("Unsigned TX:", JSON.stringify(unsignedTx, null, 2));
// → Sign with Nautilus wallet or server-side key, then submit

async function getCurrentHeight() {
  const r = await fetch(\`\${TESTNET_API}/api/v1/info\`);
  const info = await r.json();
  return info.fullHeight;
}`

const STEP_4_CODE = `node agent-pay.js`

const STEP_5_CODE = `// Note payment — agent pays for an API call
import { TransactionBuilder, OutputBuilder, SByte, SColl } from "@fleet-sdk/core";

const TASK_HASH = "a1b2c3d4..."; // blake2b256 of task output

const noteOutput = new OutputBuilder("5000000", RECEIVER_ADDRESS)  // 0.005 ERG
  .setAdditionalRegisters({
    R4: SColl(SByte, Buffer.from(TASK_HASH, "hex")),   // task hash
    R5: SByte(await getCurrentHeight() + 100),          // expiry: +100 blocks
  });

const tx = new TransactionBuilder(await getCurrentHeight())
  .from(inputs)
  .to(noteOutput)
  .sendChangeTo(YOUR_ADDRESS)
  .payMinFee()
  .build();`

// ── Steps ─────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    title: "Install Fleet SDK",
    time: "30 seconds",
    icon: Package,
    code: STEP_2_CODE,
    language: "bash",
    note: "Fleet SDK is the official TypeScript/JS SDK for Ergo. Works in Node.js and browsers.",
  },
  {
    number: "02",
    title: "Create agent-pay.js",
    time: "2 minutes",
    icon: Code2,
    code: STEP_3_CODE,
    language: "javascript",
    note: "This script fetches your testnet UTxOs, builds a transaction, and outputs the unsigned TX object.",
  },
  {
    number: "03",
    title: "Run the script",
    time: "10 seconds",
    icon: Terminal,
    code: STEP_4_CODE,
    language: "bash",
    note: "You'll see the unsigned transaction JSON. Sign it with Nautilus (browser) or a server-side key, then POST to /api/v1/transactions.",
  },
  {
    number: "04",
    title: "Add a Note (agent payment)",
    time: "5 minutes",
    icon: Bot,
    code: STEP_5_CODE,
    language: "javascript",
    note: "This extends the basic TX to create a Note — a bearer instrument with a task hash register. The receiver redeems it against a Reserve.",
  },
]

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
        <span className="text-xs text-gray-500 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">
        {code}
      </pre>
    </div>
  )
}

export function QuickstartClient() {
  return (
    <BackgroundWrapper>
      <Breadcrumbs
        items={[
          { name: "Build", href: "/build/agent-payments" },
          { name: "Quickstart", href: "/build/quickstart" },
        ]}
        className="mb-10 opacity-70"
      />

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 pt-16 pb-12 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" />
              Under 10 minutes
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            First agent payment
            <br />
            <span className="text-orange-400">on Ergo testnet.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            No theory. No setup ceremony. One npm package, 30 lines, one command — and you see a
            real transaction on Ergo testnet explorer.
          </motion.p>

          {/* Quick install */}
          <motion.div variants={fadeUp} className="max-w-xl mx-auto">
            <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
              <span className="text-xs text-gray-500 font-mono">bash</span>
            </div>
            <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg px-4 py-3 text-sm font-mono text-orange-300 text-left">
              {STEP_1_CODE}
            </pre>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Prerequisites ── */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            Prerequisites
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Node.js 18+ installed",
              "A testnet address (create one in Nautilus wallet → Settings → Testnet mode)",
              "Testnet ERG from faucet at testnet.ergofaucet.org",
              "5 minutes of uninterrupted focus",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── Steps ── */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {STEPS.map((step, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded-lg shrink-0">
                  <step.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400/50 font-mono text-sm">{step.number}</span>
                    <h3 className="text-white font-bold text-lg">{step.title}</h3>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                      ~{step.time}
                    </span>
                  </div>
                </div>
              </div>
              <CodeBlock code={step.code} language={step.language} />
              <p className="mt-3 text-sm text-gray-400 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                {step.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Explorer check ── */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6"
        >
          <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-orange-400" />
            See your TX on explorer
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            After submitting, your transaction appears on Ergo testnet explorer. Paste your TX ID at:
          </p>
          <code className="block bg-black/40 rounded-lg px-4 py-3 text-sm font-mono text-orange-300">
            https://testnet.ergoplatform.com/transactions/&#123;TX_ID&#125;
          </code>
        </motion.div>
      </section>

      {/* ── What's next ── */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
            What's next
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Agent Payments Architecture",
                desc: "Reserve, Note, Tracker, Acceptance Predicate — the full technical reference",
                href: "/build/agent-payments",
              },
              {
                title: "7-Step Playbook",
                desc: "From environment setup to mainnet deployment — a full builder guide",
                href: "/playbooks/build-agent-economy-apps",
              },
              {
                title: "Live Demos",
                desc: "See working agent payment flows on Ergo testnet, open source",
                href: "/demos",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href={item.href}
                  className="block bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-5 transition-colors group"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                  <span className="flex items-center gap-1 text-orange-400 text-sm font-medium">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <FinalCTASimple
        title="Ready to go deeper?"
        description="The quickstart gets you moving. The full architecture reference and 7-step playbook are waiting."
      />
    </BackgroundWrapper>
  )
}
