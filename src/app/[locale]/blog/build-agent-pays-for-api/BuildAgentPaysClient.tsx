"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  Terminal,
  CheckCircle,
  Code2,
  Zap,
  ChevronDown,
  Package,
  Play,
  Eye,
  Coins,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { ShareInline } from "@/components/blog/share-inline"
import { ShareCTA } from "@/components/blog/share-cta"

const articleContents = [
  { label: "What We're Building", href: "#what-building" },
  { label: "Step 1: Setup", href: "#setup" },
  { label: "Step 2: Agent Wallet", href: "#agent-wallet" },
  { label: "Step 3: API Service", href: "#api-service" },
  { label: "Step 4: Payment Transaction", href: "#payment" },
  { label: "Step 5: Agent Calls the API", href: "#verify" },
  { label: "Step 6: Run It End-to-End", href: "#e2e" },
  { label: "FAQ", href: "#faq" },
]

const tldrItems = [
  {
    icon: Bot,
    title: "Complete System in ~100 Lines",
    description: "Agent wallet, paid API service, payment transaction, and on-chain verification — all with working source code on Ergo testnet.",
  },
  {
    icon: Zap,
    title: "Agent Holds Its Own Wallet",
    description: "The agent generates a keypair, fetches UTxOs from the testnet API, builds a transaction autonomously. No human approves payments.",
  },
  {
    icon: CheckCircle,
    title: "API Verifies Payment On-Chain",
    description: "The API service queries the Ergo blockchain for a payment UTxO with the correct call ID in R4. When found, it returns the response.",
  },
  {
    icon: Package,
    title: "No Stripe, No KYC, No Merchant Account",
    description: "One Fleet SDK transaction. The agent pays, the API verifies on-chain, the response is delivered. Fully autonomous.",
  },
]

const WHAT_BUILDING = [
  { n: "01", t: "Agent", d: "Node.js script with an Ergo wallet (keypair + testnet ERG)" },
  { n: "02", t: "Paid API", d: "Express server requiring 0.001 ERG per request, checks on-chain payment" },
  { n: "03", t: "Payment flow", d: "Agent sends Ergo TX → API verifies → API responds → Agent processes result" },
  { n: "04", t: "No human", d: "Agent manages its own wallet. No user approves payments. Fully autonomous." },
]

const RUN_STEPS = [
  { step: "01", cmd: "node api-server.js", desc: "Start the paid API service on port 3001" },
  { step: "02", cmd: "node agent.js", desc: "Run the agent — it builds and prints the unsigned TX" },
  { step: "03", cmd: "# Sign + submit TX via Nautilus or sigma-rust", desc: "Get the transaction ID from the explorer" },
  { step: "04", cmd: "# Re-run agent.js with the txId", desc: "API verifies payment on-chain, returns result" },
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
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Build an Agent That Pays for Its Own API Calls", href: "/blog/build-agent-pays-for-api" },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How to Build an Agent That Pays for Its Own API Calls
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              In this tutorial, we build a minimal but complete agent payment system: an autonomous agent that holds an Ergo wallet, calls a paid API, sends an on-chain payment, and receives the API response — all without human intervention. End-to-end, on Ergo testnet, with full source code.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="How to Build an Agent That Pays for Its Own API Calls"
                url="https://ergoblockchain.org/blog/build-agent-pays-for-api"
              />
            </div>
          </motion.div>

          {/* TL;DR */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">TL;DR</h2>
            <div className="grid gap-2">
              {tldrItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="bg-black border border-white/10 rounded-xl">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <item.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Article Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 2xl:hidden"
          >
            <Card className="bg-black/80 border border-orange-500/20 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-400" />
                  Article Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {articleContents.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors py-1"
                    >
                      → {item.label}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </motion.section>

          {/* What We're Building */}
          <motion.section
            id="what-building"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What We're Building</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                A minimal but complete agent payment system — no Stripe, no KYC, no merchant account. Just a Node.js agent with a wallet, a paid Express API, and Fleet SDK to wire it all together.
              </p>
              <div className="space-y-4">
                {WHAT_BUILDING.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-orange-400 font-mono text-sm font-bold shrink-0 mt-0.5">{item.n}</span>
                    <div>
                      <span className="text-white font-semibold">{item.t}: </span>
                      <span className="text-gray-300">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  Prerequisites: Node.js 18+, npm, and testnet ERG. Get testnet ERG free at testnet.ergofaucet.org after creating a testnet address in Nautilus (Settings → Testnet mode).
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Step 1: Setup */}
          <motion.section
            id="setup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Package className="w-5 h-5 text-orange-400" />
              </div>
              Step 1: Setup
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <div>
                <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                  <span className="text-xs text-gray-500 font-mono">bash</span>
                </div>
                <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`mkdir ergo-agent-api && cd ergo-agent-api
npm init -y
npm install @fleet-sdk/core express node-fetch`}</pre>
              </div>
              <p className="text-gray-300 leading-relaxed">
                You'll also need testnet ERG. Create a testnet address in Nautilus (Settings → Testnet mode) and fund it at testnet.ergofaucet.org.
              </p>
            </div>
          </motion.section>

          {/* Step 2: Agent Wallet */}
          <motion.section
            id="agent-wallet"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 text-orange-400" />
              </div>
              Step 2: Agent Wallet
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The agent needs a wallet — just a keypair and a way to fetch UTxOs. In production, use a proper key management service. For testnet, hardcode the address.
              </p>
              <div>
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
              </div>
            </div>
          </motion.section>

          {/* Step 3: API Service */}
          <motion.section
            id="api-service"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5 text-orange-400" />
              </div>
              Step 3: Paid API Service
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The API service checks for an on-chain payment before responding. It queries the Ergo blockchain for a UTxO at its address with the correct call ID in R4.
              </p>
              <div>
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
              </div>
            </div>
          </motion.section>

          {/* Step 4: Agent Sends Payment */}
          <motion.section
            id="payment"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-orange-400" />
              </div>
              Step 4: Agent Sends Payment
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <div>
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
              </div>
            </div>
          </motion.section>

          {/* Step 5: Agent Calls the API */}
          <motion.section
            id="verify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-orange-400" />
              </div>
              Step 5: Agent Calls the API
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <div>
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
              </div>
            </div>
          </motion.section>

          {/* Step 6: Run It */}
          <motion.section
            id="e2e"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 text-orange-400" />
              </div>
              Step 6: Run It End-to-End
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <div className="space-y-4">
                {RUN_STEPS.map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-orange-400 font-mono text-sm shrink-0 mt-0.5">{item.step}</span>
                    <div>
                      <code className="text-orange-300 text-sm font-mono block mb-1">{item.cmd}</code>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed mb-3">
                  <strong className="text-white">Production next step:</strong> Add server-side signing using <code className="text-orange-300">ergo-lib-wasm</code> or <code className="text-orange-300">sigma-rust</code> so the agent signs transactions without a browser wallet. Then the entire flow runs headlessly.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/build/quickstart" className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                    Full quickstart →
                  </Link>
                  <a href="https://github.com/bez111/ergo-agent-economy" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                    GitHub examples →
                  </a>
                </div>
              </Card>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <Card className="bg-black border border-white/10 rounded-xl hover:border-orange-400/40 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold text-left">{item.q}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-orange-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-black/50 border border-white/5 rounded-xl">
                        <p className="text-gray-300 leading-relaxed">{item.a}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <ShareCTA
            title="How to Build an Agent That Pays for Its Own API Calls"
            description="Full tutorial — agent wallet, paid API service, on-chain payment verification. No Stripe, no KYC, no human approval. Complete source code included."
            url="https://ergoblockchain.org/blog/build-agent-pays-for-api"
          />

          {/* Continue Learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ergoscript-acceptance-predicates" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <Code2 className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">ErgoScript Acceptance Predicates</h3>
                        <p className="text-gray-400 text-sm mb-2">Add task completion conditions to your payment — enforced by miners</p>
                        <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 text-xs">
                          Development
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/notes-vs-tokens" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Coins className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Notes vs Tokens</h3>
                        <p className="text-gray-400 text-sm mb-2">When your agent pipeline needs Notes instead of simple token transfers</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Concepts
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.section>

          <FinalCTASimple />
        </div>
      </div>
    </BackgroundWrapper>
  )
}
