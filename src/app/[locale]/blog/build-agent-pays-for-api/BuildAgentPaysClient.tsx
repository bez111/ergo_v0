"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { Bot, Terminal, CheckCircle, ArrowRight, Code2, Zap, ChevronDown, Package, Play } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

const TOC = [
  { label: "What We're Building", href: "#what-building" },
  { label: "Step 1: Setup", href: "#setup" },
  { label: "Step 2: Agent Wallet", href: "#agent-wallet" },
  { label: "Step 3: API Service", href: "#api-service" },
  { label: "Step 4: Payment Transaction", href: "#payment" },
  { label: "Step 5: API Verifies Payment", href: "#verify" },
  { label: "Step 6: End-to-End Flow", href: "#e2e" },
  { label: "FAQ", href: "#faq" },
]

const FAQ_ITEMS = [
  { q: "Does the agent need ERG to pay transaction fees?", a: "Not if Babel Fees are available for the token it holds. Babel Fees let agents pay transaction fees in any token — the miner converts it to ERG via an on-chain swap box. For ERG-based payments, the agent needs a small ERG balance, which can come from the first payment it receives." },
  { q: "How does the API service know the payment is for this specific call?", a: "The agent includes an API call ID in register R4 of the payment output. The API service queries the Ergo blockchain for payment UTxOs referencing its address with that call ID in R4. When it finds a confirmed payment, it releases the response." },
  { q: "What if the agent sends the payment but the API fails?", a: "Design the API to respond before the block confirms (optimistic) or to provide a refund Note if the call fails. For production, include an acceptance predicate: the API service can only redeem the payment if it provides proof of the response (e.g., a response hash)." },
  { q: "Can this work with any API, not just crypto APIs?", a: "Yes. Any HTTP API can accept Ergo payments if it queries the blockchain for payment confirmation. The agent sends an Ergo transaction, includes the API endpoint's address as receiver and a call reference in R4, then calls the API with the transaction ID. The API verifies on-chain." },
  { q: "What's the minimum payment amount?", a: "The Ergo minimum box value is 0.001 ERG (~$0.001). That's the practical floor for a payment output. For sub-nanopayments, you'd batch many calls into one payment." },
]

export function BuildAgentPaysClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Build an Agent That Pays for API Calls", href: "/blog/build-agent-pays-for-api" }]} className="mb-10 opacity-70" />

        <div className="flex gap-12 relative">
          <aside className="hidden xl:block w-56 shrink-0"><StickyTOC items={TOC} /></aside>
          <article className="flex-1 min-w-0 max-w-3xl">

            <motion.header variants={stagger} initial="hidden" animate="visible" className="pt-8 pb-12">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full"><Bot className="w-3.5 h-3.5" />Tutorial</span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">15 min read</span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">Advanced</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                How to Build an Agent That
                <span className="block text-orange-400 mt-1">Pays for Its Own API Calls</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-300 leading-relaxed mb-6">
                In this tutorial, we build a minimal but complete agent payment system: an autonomous agent that holds an Ergo wallet, calls a paid API, sends an on-chain payment, and receives the API response — all without human intervention. End-to-end, on Ergo testnet, with full source code.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/10 pt-6">
                <span>Developer Relations</span><span>·</span><time>March 20, 2026</time>
              </motion.div>
            </motion.header>

            <section id="what-building" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">What We're Building</motion.h2>
                <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="space-y-3 text-sm text-gray-300">
                    {[
                      { n: "01", t: "Agent", d: "Node.js script with an Ergo wallet (keypair + testnet ERG)" },
                      { n: "02", t: "Paid API", d: "Express server requiring 0.001 ERG per request, checks on-chain payment" },
                      { n: "03", t: "Payment flow", d: "Agent sends Ergo TX → API verifies → API responds → Agent processes result" },
                      { n: "04", t: "No human", d: "Agent manages its own wallet. No user approves payments. Fully autonomous." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-orange-400 font-mono text-xs shrink-0 mt-0.5">{item.n}</span>
                        <div><span className="text-white font-semibold">{item.t}: </span>{item.d}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </section>

            <section id="setup" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><Package className="w-5 h-5 text-orange-400" />Step 1: Setup</motion.h2>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">bash</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`mkdir ergo-agent-api && cd ergo-agent-api
npm init -y
npm install @fleet-sdk/core express node-fetch`}</pre>
                </motion.div>
                <motion.p variants={fadeUp} className="mt-3 text-sm text-gray-400">
                  You'll also need testnet ERG. Create a testnet address in Nautilus (Settings → Testnet mode) and fund it at testnet.ergofaucet.org.
                </motion.p>
              </motion.div>
            </section>

            <section id="agent-wallet" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><Code2 className="w-5 h-5 text-orange-400" />Step 2: Agent Wallet</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-4 text-sm">The agent needs a wallet — just a keypair and a way to fetch UTxOs. In production, use a proper key management service. For testnet, hardcode the address.</motion.p>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">javascript</span>
                    <span className="text-xs text-gray-600">agent-wallet.js</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`// agent-wallet.js
const TESTNET_API = "https://api-testnet.ergoplatform.com";

export const wallet = {
  address: "YOUR_TESTNET_ADDRESS",  // ← paste your testnet address
  // In production: store private key in KMS, HSM, or env var
  // privateKey: process.env.AGENT_PRIVATE_KEY

  async getInputs() {
    const res = await fetch(
      \`\${TESTNET_API}/api/v1/boxes/unspent/byAddress/\${this.address}\`
    );
    const { items } = await res.json();
    return items ?? [];
  },

  async getHeight() {
    const res = await fetch(\`\${TESTNET_API}/api/v1/info\`);
    const { fullHeight } = await res.json();
    return fullHeight;
  }
};`}</pre>
                </motion.div>
              </motion.div>
            </section>

            <section id="api-service" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><Terminal className="w-5 h-5 text-orange-400" />Step 3: API Service</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-4 text-sm">The API service checks for an on-chain payment before responding. It queries the Ergo blockchain for a UTxO at its address with the correct call ID in R4.</motion.p>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">javascript</span>
                    <span className="text-xs text-gray-600">api-server.js</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`// api-server.js
import express from "express";

const app = express();
app.use(express.json());

const TESTNET_API = "https://api-testnet.ergoplatform.com";
const API_ADDRESS  = "YOUR_API_SERVICE_ADDRESS"; // ← API's receiving address
const PRICE_NANOERG = 1000000; // 0.001 ERG per call

// Verify payment: check blockchain for UTxO at API_ADDRESS
// with callId encoded in R4
async function verifyPayment(callId) {
  const res = await fetch(
    \`\${TESTNET_API}/api/v1/boxes/unspent/byAddress/\${API_ADDRESS}\`
  );
  const { items } = await res.json();

  return items?.some(box => {
    const r4 = box.additionalRegisters?.R4;
    if (!r4) return false;
    // R4 is hex-encoded: "0e" prefix + hex(callId)
    const decodedR4 = Buffer.from(r4.slice(4), "hex").toString();
    return decodedR4 === callId && box.value >= PRICE_NANOERG;
  }) ?? false;
}

// Paid endpoint
app.post("/api/analyze", async (req, res) => {
  const { callId, txId, data } = req.body;

  if (!callId || !txId) {
    return res.status(400).json({ error: "callId and txId required" });
  }

  // Check payment (with simple polling for testnet)
  let paid = false;
  for (let attempt = 0; attempt < 5; attempt++) {
    paid = await verifyPayment(callId);
    if (paid) break;
    await new Promise(r => setTimeout(r, 3000)); // wait 3s between checks
  }

  if (!paid) {
    return res.status(402).json({
      error: "Payment required",
      payTo: API_ADDRESS,
      price: PRICE_NANOERG,
      callId,
    });
  }

  // Payment confirmed — return result
  res.json({
    callId,
    result: \`Analysis complete for: \${data}\`,
    timestamp: Date.now(),
  });
});

app.listen(3001, () => console.log("API service running on :3001"));`}</pre>
                </motion.div>
              </motion.div>
            </section>

            <section id="payment" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><Zap className="w-5 h-5 text-orange-400" />Step 4: Agent Sends Payment</motion.h2>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">javascript</span>
                    <span className="text-xs text-gray-600">agent-pay.js</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`// agent-pay.js
import { TransactionBuilder, OutputBuilder, SColl, SByte } from "@fleet-sdk/core";
import { wallet } from "./agent-wallet.js";

const TESTNET_API  = "https://api-testnet.ergoplatform.com";
const API_ADDRESS  = "YOUR_API_SERVICE_ADDRESS";
const PRICE_NANOERG = 1000000; // 0.001 ERG

export async function payForAPICall(callId) {
  const height = await wallet.getHeight();
  const inputs = await wallet.getInputs();

  if (!inputs.length) throw new Error("No UTxOs — fund your agent wallet");

  // Encode callId in R4 so the API can match payment to call
  const paymentOutput = new OutputBuilder(PRICE_NANOERG.toString(), API_ADDRESS)
    .setAdditionalRegisters({
      R4: SColl(SByte, Buffer.from(callId, "utf8")),
    });

  const unsignedTx = new TransactionBuilder(height)
    .from(inputs)
    .to(paymentOutput)
    .sendChangeTo(wallet.address)
    .payMinFee()
    .build()
    .toEIP12Object();

  // NOTE: In this tutorial you must sign externally (Nautilus or server key)
  // For production server-side signing, see: sigma-rust or ergo-lib-wasm
  console.log("Unsigned TX (sign and submit):");
  console.log(JSON.stringify(unsignedTx, null, 2));

  // After signing and submitting, return the txId
  // const txId = await submitSignedTx(signedTx);
  // return txId;
}`}</pre>
                </motion.div>
              </motion.div>
            </section>

            <section id="verify" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-400" />Step 5: Agent Calls the API</motion.h2>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">javascript</span>
                    <span className="text-xs text-gray-600">agent.js</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`// agent.js — the autonomous agent
import { payForAPICall } from "./agent-pay.js";

async function runAgent(data) {
  const callId = \`call-\${Date.now()}-\${Math.random().toString(36).slice(2)}\`;

  console.log(\`[Agent] Task: analyze "\${data}"\`);
  console.log(\`[Agent] Call ID: \${callId}\`);

  // 1. Pay for the API call
  console.log("[Agent] Sending payment...");
  const txId = await payForAPICall(callId);
  // (in this tutorial: manually sign and submit the printed TX)
  // txId = "the submitted transaction ID"

  // 2. Call the paid API (with callId + txId as proof of payment)
  console.log("[Agent] Calling API...");
  const res = await fetch("http://localhost:3001/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callId, txId, data }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(\`API error: \${err.error}\`);
  }

  const result = await res.json();
  console.log("[Agent] Result:", result);
  return result;
}

// Run
runAgent("the latest Ergo block data").catch(console.error);`}</pre>
                </motion.div>
              </motion.div>
            </section>

            <section id="e2e" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Play className="w-5 h-5 text-orange-400" />Step 6: Run It</motion.h2>
                <div className="space-y-4">
                  {[
                    { step: "01", cmd: "node api-server.js", desc: "Start the paid API service on port 3001" },
                    { step: "02", cmd: "node agent.js", desc: "Run the agent — it builds and prints the unsigned TX" },
                    { step: "03", cmd: "# Sign + submit TX via Nautilus or sigma-rust", desc: "Get the transaction ID from the explorer" },
                    { step: "04", cmd: "# Re-run agent.js with the txId", desc: "API verifies payment on-chain, returns result" },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                      <span className="text-orange-400 font-mono text-xs shrink-0 mt-0.5">{item.step}</span>
                      <div>
                        <code className="text-orange-300 text-xs font-mono block mb-1">{item.cmd}</code>
                        <p className="text-gray-400 text-xs">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={fadeUp} className="mt-6 bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 text-sm">
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Production next step:</strong> Add server-side signing using <code className="text-orange-300">ergo-lib-wasm</code> or <code className="text-orange-300">sigma-rust</code> so the agent signs transactions without a browser wallet. Then the entire flow runs headlessly.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/build/quickstart" className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                      Full quickstart <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a href="https://github.com/bez111/ergo-agent-economy" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                      GitHub examples <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </section>

            <section id="faq" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-8">FAQ</motion.h2>
                <div className="space-y-3">
                  {FAQ_ITEMS.map((item, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <Collapsible open={openFAQ === i} onOpenChange={(open) => setOpenFAQ(open ? i : null)}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-left hover:border-orange-500/30 transition-colors">
                          <span className="text-white font-medium text-sm pr-4">{item.q}</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openFAQ === i ? "rotate-180" : ""}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="bg-white/3 border border-t-0 border-white/10 rounded-b-xl px-5 py-4">
                          <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

          </article>
        </div>
      </div>
      <FinalCTASimple title="Build your own paying agent" description="Full source in the open source repo. Clone, run, extend." />
    </BackgroundWrapper>
  )
}
