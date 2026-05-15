"use client"

/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import {
  Terminal,
  Copy,
  CheckCircle,
  Circle,
  ArrowRight,
  Bot,
  Package,
  Code2,
  Zap,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Github,
  RotateCcw,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const QUICKSTART_PROGRESS_KEY = "quickstart-progress-v1"

function useStepProgress(totalSteps: number) {
  const [done, setDone] = useState<boolean[]>(() => Array(totalSteps).fill(false))
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
    try {
      const raw = localStorage.getItem(QUICKSTART_PROGRESS_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as boolean[]
        if (Array.isArray(parsed) && parsed.length === totalSteps) {
          setDone(parsed)
        }
      }
    } catch {
      /* ignore localStorage errors */
    }
  }, [totalSteps])
  function toggle(i: number) {
    setDone((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      try {
        localStorage.setItem(QUICKSTART_PROGRESS_KEY, JSON.stringify(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }
  function reset() {
    setDone(Array(totalSteps).fill(false))
    try {
      localStorage.removeItem(QUICKSTART_PROGRESS_KEY)
    } catch {
      /* ignore */
    }
  }
  const completed = done.filter(Boolean).length
  return { done, hydrated, toggle, reset, completed, total: totalSteps }
}

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

// ── Step icon map ────────────────────────────────────────────────────────────
const STEP_ICONS = [Package, Code2, Terminal, Bot]
const STEP_CODES = [STEP_2_CODE, STEP_3_CODE, STEP_4_CODE, STEP_5_CODE]
const STEP_LANGUAGES = ["bash", "javascript", "bash", "javascript"]

function CodeBlock({ code, language, copiedLabel, copyLabel }: { code: string; language: string; copiedLabel: string; copyLabel: string }) {
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
              <span className="text-green-400">{copiedLabel}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              {copyLabel}
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
  const t = useTranslations('quickstartPage')

  const STEPS = [
    { number: "01", titleKey: "step1Title" as const, timeKey: "step1Time" as const, noteKey: "step1Note" as const },
    { number: "02", titleKey: "step2Title" as const, timeKey: "step2Time" as const, noteKey: "step2Note" as const },
    { number: "03", titleKey: "step3Title" as const, timeKey: "step3Time" as const, noteKey: "step3Note" as const },
    { number: "04", titleKey: "step4Title" as const, timeKey: "step4Time" as const, noteKey: "step4Note" as const },
  ]

  const progress = useStepProgress(STEPS.length)

  const PREREQUISITES = [
    t('prereq1'),
    t('prereq2'),
    t('prereq3'),
    t('prereq4'),
  ]

  const NEXT_CARDS = [
    { titleKey: "nextCard1Title" as const, descKey: "nextCard1Desc" as const, href: "/build/agent-payments" },
    { titleKey: "nextCard2Title" as const, descKey: "nextCard2Desc" as const, href: "/playbooks/build-agent-economy-apps" },
    { titleKey: "nextCard3Title" as const, descKey: "nextCard3Desc" as const, href: "/demos" },
    { titleKey: "nextCard4Title" as const, descKey: "nextCard4Desc" as const, href: "https://github.com/accord-protocol/accord-protocol" },
  ]

  return (
    <BackgroundWrapper>
      <Breadcrumbs
        items={[
          { name: t('breadcrumbBuild'), href: "/build/agent-payments" },
          { name: t('breadcrumbQuickstart'), href: "/build/quickstart" },
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
              {t('badge')}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {t('heroTitle1')}
            <br />
            <span className="text-orange-400">{t('heroTitle2')}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {t('heroDescription')}
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

      {/* ── Skip-the-typing: clone the starter repo ── */}
      <section className="container mx-auto px-4 pt-4 pb-2 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-orange-500/8 via-black/80 to-black/80 border border-orange-500/25 p-6 md:p-7"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Github className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h3 className="text-white font-bold text-base">Don&apos;t want to type? Clone the starter repo.</h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/30 rounded-full px-2 py-0.5">
                    10 examples
                  </span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  <code className="font-mono text-orange-300 text-xs">accord-protocol</code> ships 10 working examples (LangChain, OpenAI, CrewAI, AutoGen, Python, MCP) plus three SDK packages — TypeScript, Python, and a Model Context Protocol server. Each example is a self-contained, runnable folder.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/accord-protocol/accord-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-4 py-2.5 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-xs whitespace-nowrap"
            >
              <span>View on GitHub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <pre className="mt-5 font-mono text-xs bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-orange-300 overflow-x-auto">{`git clone https://github.com/accord-protocol/accord-protocol
cd accord-protocol/examples/01-basic-payment && npm install && npm run start`}</pre>
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
            {t('prerequisitesTitle')}
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {PREREQUISITES.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── Progress tracker ── */}
      <section className="container mx-auto px-4 pt-2 pb-0 max-w-4xl">
        <div
          className={`sticky top-4 z-20 mb-6 flex items-center gap-4 rounded-2xl border px-4 py-3 backdrop-blur transition-colors ${
            progress.completed === progress.total && progress.hydrated
              ? "border-orange-500/50 bg-orange-500/[0.08]"
              : "border-white/10 bg-black/70"
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] uppercase tracking-widest font-mono text-orange-400">
                Quickstart progress
              </span>
              <span className="text-[10px] font-mono text-gray-400">
                {progress.hydrated ? `${progress.completed} / ${progress.total} done` : "—"}
              </span>
              {progress.hydrated && progress.completed === progress.total && (
                <span className="text-[10px] uppercase tracking-widest font-mono text-orange-300">
                  · ready to build
                </span>
              )}
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-500"
                style={{
                  width: `${progress.hydrated ? (progress.completed / progress.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
          {progress.hydrated && progress.completed > 0 && (
            <button
              type="button"
              onClick={progress.reset}
              className="shrink-0 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-gray-400 hover:text-orange-300 px-2 py-1 rounded border border-white/10 hover:border-orange-500/40 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
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
          {STEPS.map((step, i) => {
            const StepIcon = STEP_ICONS[i]
            const isDone = progress.hydrated && progress.done[i]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-2xl border transition-colors p-5 md:p-6 ${
                  isDone
                    ? "border-orange-500/40 bg-orange-500/[0.04]"
                    : "border-white/8 bg-white/[0.015]"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => progress.toggle(i)}
                    aria-label={isDone ? "Mark step as not done" : "Mark step as done"}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors ${
                      isDone
                        ? "bg-orange-500/30 border border-orange-400 text-black"
                        : "bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:border-orange-500/60"
                    }`}
                  >
                    {isDone ? <CheckCircle className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-orange-400/50 font-mono text-sm">{step.number}</span>
                      <h3
                        className={`font-bold text-lg ${isDone ? "text-orange-100 line-through decoration-orange-400/40" : "text-white"}`}
                      >
                        {t(step.titleKey)}
                      </h3>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                        ~{t(step.timeKey)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => progress.toggle(i)}
                    className={`hidden sm:inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded border transition-colors ${
                      isDone
                        ? "border-orange-500/50 bg-orange-500/15 text-orange-200"
                        : "border-white/15 bg-white/[0.02] text-gray-400 hover:border-orange-500/40 hover:text-orange-300"
                    }`}
                  >
                    {isDone ? <CheckCircle className="w-3 h-3" /> : <Circle className="w-3 h-3" />}
                    {isDone ? "Done" : "Mark done"}
                  </button>
                </div>
                <CodeBlock code={STEP_CODES[i]} language={STEP_LANGUAGES[i]} copiedLabel={t('copied')} copyLabel={t('copy')} />
                <p className="mt-3 text-sm text-gray-400 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  {t(step.noteKey)}
                </p>
              </motion.div>
            )
          })}
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
            {t('explorerTitle')}
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            {t('explorerDescription')}
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
            {t('whatsNextTitle')}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-4">
            {NEXT_CARDS.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href={item.href}
                  className="block bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-5 transition-colors group"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{t(item.descKey)}</p>
                  <span className="flex items-center gap-1 text-orange-400 text-sm font-medium">
                    {t('readMore')} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <FinalCTASimple
        title={t('ctaTitle')}
        description={t('ctaDescription')}
      />
    </BackgroundWrapper>
  )
}
