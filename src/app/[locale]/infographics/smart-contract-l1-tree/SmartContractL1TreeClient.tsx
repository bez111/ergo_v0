"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmbedCode } from "@/components/infographics/EmbedCode";
import { Button } from "@/components/ui/button";
import { CATEGORY_LABELS, LEVEL_LABELS } from "@/types/infographic";
import type { InfographicMeta } from "@/types/infographic";

import {
  ArrowLeft,
  CalendarDays,
  Clock,
  TreeDeciduous,
  Target,
  Sparkles,
  Table2,
} from "lucide-react";

type Props = {
  infographic: InfographicMeta;
};

export function SmartContractL1TreeClient({ infographic }: Props) {
  const {
    title,
    shortDescription,
    category,
    level,
    imageAlt,
    fullImageUrl,
    publishDate,
    readingTimeMinutes,
    slug,
    tags,
  } = infographic;

  const formattedDate = useMemo(() => {
    if (!publishDate) return null;
    const date = new Date(publishDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }, [publishDate]);

  const infographicUrl = useMemo(
    () => `https://ergoblockchain.org/en/infographics/${slug}`,
    [slug],
  );

  return (
    <BackgroundWrapper>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="group inline-flex items-center gap-2 px-0 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <Link href="/infographics">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to all infographics</span>
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="flex flex-col gap-4 border-b border-white/5 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {formattedDate && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{formattedDate}</span>
              </span>
            )}
            {readingTimeMinutes && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{readingTimeMinutes} min read</span>
              </span>
            )}
            {category && (
              <span className="inline-flex items-center gap-1.5">
                <TreeDeciduous className="h-3.5 w-3.5" />
                <span>{CATEGORY_LABELS[category] ?? category}</span>
              </span>
            )}
            {level && (
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{LEVEL_LABELS[level] ?? level}</span>
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              {title}
            </h1>
            {shortDescription && (
              <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                {shortDescription}
              </p>
            )}
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-orange-500/40 bg-orange-500/5 text-[10px] font-medium uppercase tracking-wide text-orange-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Main infographic image */}
        <section className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-xl shadow-black/40">
          <div className="relative w-full">
            <Image
              src={fullImageUrl}
              alt={imageAlt}
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="border-t border-white/10 bg-black/40 px-4 py-3 text-center text-[11px] text-muted-foreground sm:text-xs">
            Full-resolution version of{" "}
            <span className="font-medium text-foreground">
              “Smart-Contract L1 Tree”
            </span>{" "}
            – tracing smart-contract L1 evolution from Bitcoin’s basic UTXO
            scripts to Ethereum’s account model and the eUTXO family (Cardano &
            Ergo).
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Left column: explanation */}
          <div className="flex flex-col gap-6">
            {/* About */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <TreeDeciduous className="h-4 w-4 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  This graphic draws a “family tree” of smart-contract L1s. It
                  starts from Bitcoin as the root – basic UTXO scripting for
                  payments – and branches into three main state-model paths:
                  Ethereum’s account-based global VM, Cardano’s eUTXO + Plutus,
                  and Ergo’s eUTXO + ErgoScript + Sigma Protocols.
                </p>
                <p>
                  The top half of the visual groups Cardano and Ergo as the
                  “eUTXO family”, showing how they extend UTXO ideas for smart
                  contracts while Ethereum follows a global-account approach.
                  The bottom half then compares these four L1s across
                  determinism, audit complexity, expressiveness and hidden
                  global state risk.
                </p>
                <p>
                  Together, the tree and table show how state model choices
                  impact predictability, how hard code is to audit, how much
                  power developers get, and how much invisible shared state
                  risk each ecosystem carries.
                </p>
              </CardContent>
            </Card>

            {/* Comparison table */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Table2 className="h-4 w-4 text-orange-400" />
                  Smart-Contract L1s Compared
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-2 rounded-lg border border-white/10 bg-black/40 text-[11px] sm:text-xs md:text-sm">
                  {/* Header row */}
                  <div className="border-b border-white/10 bg-white/5 px-3 py-2 font-medium text-muted-foreground">
                    Dimension
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Bitcoin
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Ethereum
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Cardano
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Ergo
                  </div>

                  {/* Determinism */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Determinism
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    High: simple scripts with limited opcodes and predictable
                    behavior.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Deterministic VM, but execution paths and gas usage depend
                    on changing global state.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    High: eUTXO forces explicit inputs and outputs; contracts
                    behave like local state machines.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    High: eUTXO + ErgoScript keep logic local to boxes with
                    clear spending conditions.
                  </div>

                  {/* Audit complexity */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Audit complexity
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Low for simple payments; more complex protocols tend to move
                    off-chain.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    High: global state, internal calls and reentrancy make full
                    audits demanding.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Medium: explicit eUTXO transaction graph, but Plutus code
                    and off-chain components still require deep review.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Medium: each box carries its script and data, making flows
                    more explicit than a fully shared global state.
                  </div>

                  {/* Expressiveness */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Expressiveness
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Low: good for payments, timelocks and multisig; rich logic
                    is pushed to higher layers.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Very high: Turing-complete EVM supports arbitrary DeFi,
                    NFTs and DAOs – with a large attack surface.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    High: expressive Plutus smart contracts built on eUTXO.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    High: ErgoScript for rich on-chain logic plus Sigma
                    Protocols for private, composable contracts.
                  </div>

                  {/* Hidden global state risk */}
                  <div className="bg-black/50 px-3 py-3 font-medium">
                    Hidden global state risk
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Low: no general global contract state; most complexity lives
                    off-chain.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    High: many contracts share and mutate global storage; subtle
                    interactions can hide systemic risk.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Lower: eUTXO reduces shared mutable state and forces
                    interactions through explicit boxes.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Lower: box-local state and scripts limit invisible
                    shared-state coupling and make interactions more explicit.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key points */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Target className="h-4 w-4 text-orange-400" />
                  Key Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    Bitcoin is the root of the smart-contract L1 tree with basic
                    UTXO scripting focused on payments.
                  </li>
                  <li>
                    Ethereum adds a global account model and Turing-complete VM,
                    trading simplicity for expressiveness and audit complexity.
                  </li>
                  <li>
                    Cardano and Ergo form an eUTXO family, using extended UTXO
                    for more deterministic, explicit smart-contract flows.
                  </li>
                  <li>
                    Ergo combines eUTXO, ErgoScript and Sigma Protocols to
                    balance determinism, auditability, expressiveness and
                    privacy at L1.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right column: how to read, related, embed */}
          <div className="flex flex-col gap-6">
            {/* How to read */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  How to Read This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ol className="list-decimal space-y-1 pl-4">
                  <li>
                    Start at the left root: Bitcoin as basic UTXO scripting for
                    payments.
                  </li>
                  <li>
                    Follow the branches to Ethereum, Cardano and Ergo to see
                    how their state models diverge.
                  </li>
                  <li>
                    Use the comparison table to compare determinism, audit
                    complexity, expressiveness and hidden global state risk
                    across all four L1s.
                  </li>
                  <li>
                    Focus on the eUTXO rows to understand why Cardano and Ergo
                    emphasize explicit transaction graphs and local state.
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Related topics */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  Related Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc space-y-1 pl-4">
                  <li>eUTXO vs account-based state models</li>
                  <li>ErgoScript and Sigma Protocols on Ergo</li>
                  <li>Ethereum EVM design and global contract state</li>
                  <li>Cardano Plutus and eUTXO smart contracts</li>
                  <li>Smart-contract security and auditability</li>
                </ul>
              </CardContent>
            </Card>

            {/* Embed code */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  Embed This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Want to include this L1 comparison in your docs, blog or
                  deck? Copy the HTML snippet below to embed it with proper
                  attribution.
                </p>
                <EmbedCode
                  title={title}
                  imageUrl={fullImageUrl}
                  pageUrl={infographicUrl}
                  altText={imageAlt}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}


