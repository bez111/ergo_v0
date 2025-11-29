"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

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
  Table2,
  Target,
  Sparkles,
  Lightbulb,
} from "lucide-react";

type Props = {
  infographic: InfographicMeta;
};

export function EutxoVsAccountsVsClassicUtxoClient({ infographic }: Props) {
  const router = useRouter();
  
  const {
    title,
    shortDescription,
    category,
    level,
    imageAlt,
    fullImageUrl,
    publishDate,
    readingTimeMinutes,
    // slug,
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

  // Kept for future use if we need absolute URLs in this component
  // const infographicUrl = useMemo(
  //   () => `https://ergoblockchain.org/en/infographics/${slug}`,
  //   [slug],
  // );

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
            <Link 
              href="/infographics"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined') {
                  const returnUrl = sessionStorage.getItem('infographics-return-url');
                  if (returnUrl && returnUrl.includes('/infographics')) {
                    sessionStorage.removeItem('infographics-return-url');
                    window.location.href = returnUrl;
                  } else {
                    router.push('/infographics');
                  }
                } else {
                  router.push('/infographics');
                }
              }}
            >
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
                <Table2 className="h-3.5 w-3.5" />
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
              “eUTXO vs Accounts vs Classic UTXO”
            </span>{" "}
            – comparing Bitcoin-style UTXO, global accounts and Ergo’s eUTXO
            across parallelism, clarity and smart-contract design.
          </div>
        </section>

        <div className="flex flex-col gap-6">
            {/* About */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Lightbulb className="h-4 w-4 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  This graphic compares three major blockchain state models:
                  classic UTXO as used by Bitcoin, the global account model
                  common on many smart-contract platforms, and Ergo’s eUTXO
                  design.
                </p>
                <p>
                  The top row shows how each model represents state. Classic
                  UTXO is built around simple input and output boxes – ideal for
                  payments, but limited for rich on-chain logic. The account
                  model uses a shared global state where many users and
                  contracts read and write the same balances and storage,
                  creating conflict risks when transactions collide. eUTXO, as
                  implemented on Ergo, treats each box as a self-contained state
                  plus script, so transactions consume and create boxes that
                  behave like local state machines.
                </p>
                <p>
                  The lower table then compares the three approaches on
                  parallelism and conflicts, logic transparency, smart-contract
                  friendliness and fee / gas predictability – showing where each
                  model shines and where it creates complexity for builders and
                  users.
                </p>
              </CardContent>
            </Card>

            {/* Comparison table */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Table2 className="h-4 w-4 text-orange-400" />
                  Comparison: Three State Models
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-2 rounded-lg border border-white/10 bg-black/40 text-[11px] sm:text-xs md:text-sm">
                  {/* Header row */}
                  <div className="border-b border-white/10 bg-white/5 px-3 py-2 font-medium text-muted-foreground">
                    Dimension
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Classic UTXO
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      (Bitcoin-style)
                    </span>
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Account Model
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      Global contract state
                    </span>
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    eUTXO (Ergo)
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      Local boxes + scripts
                    </span>
                  </div>

                  {/* Parallelism & conflicts */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Parallelism &amp; conflicts
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    High parallelism for simple payments, but complex flows are
                    mostly pushed off-chain.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Shared global state: many transactions conflict when they
                    touch the same contract or account.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Parallel by design: conflicts only arise when spending the
                    exact same box.
                  </div>

                  {/* Logic transparency */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Logic transparency
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Simple, transparent spend conditions – but limited
                    on-chain logic, so most protocols live off-chain.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Logic and state are buried inside contracts and shared
                    storage, making it harder to reason about all side effects.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Each box carries its own script and data; contract logic is
                    local and inspectable per box.
                  </div>

                  {/* Smart-contract friendliness */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Smart-contract friendliness
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Not designed for rich smart contracts; advanced protocols
                    require complex off-chain coordination.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Very expressive with global contracts and dynamic calls –{" "}
                    but prone to reentrancy and shared-state bugs.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Expressive like accounts, but with local state machines
                    instead of one big shared state – encouraging safer patterns
                    by design.
                  </div>

                  {/* Fee / gas predictability */}
                  <div className="bg-black/50 px-3 py-3 font-medium">
                    Fee / gas predictability
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Straightforward for single sends, but multi-step protocols
                    still depend on mempool conditions and timing.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Gas costs depend on global state; simulation and final
                    inclusion can diverge, leading to unstable fees.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Deterministic local scripts make fees easier to estimate and
                    less sensitive to unrelated global state.
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
                    Classic UTXO (Bitcoin) excels at simple payments with clear
                    spend conditions but is not designed for complex on-chain
                    logic.
                  </li>
                  <li>
                    Account-based models put many users and contracts into a
                    shared global state, which is powerful but creates
                    contention and subtle bugs.
                  </li>
                  <li>
                    Ergo’s eUTXO treats each box as self-contained state plus
                    script, enabling safe parallelism and local reasoning.
                  </li>
                  <li>
                    eUTXO aims to combine UTXO-level safety with account-like
                    expressiveness and more predictable execution costs.
                  </li>
                </ul>
              </CardContent>
            </Card>

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
                    Start with the three top panels: Classic UTXO (Bitcoin),
                    the Account Model (global contract state), and eUTXO
                    (Ergo-style) to see how each represents balances and logic.
                  </li>
                  <li>
                    Look at how conflicts arise: global accounts share state,
                    while eUTXO only conflicts when spending the same box.
                  </li>
                  <li>
                    Use the comparison table to compare logic transparency,
                    smart-contract friendliness and fee predictability across
                    all three designs.
                  </li>
                  <li>
                    Finally, focus on the bottom banner takeaway about eUTXO:
                    UTXO-level safety with smart-contract power and predictable
                    execution.
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
                  <li>Ergo eUTXO model and box-based design</li>
                  <li>UTXO vs account-based blockchains in DeFi</li>
                  <li>Smart-contract design patterns on eUTXO chains</li>
                  <li>Parallelism and conflicts in on-chain applications</li>
                  <li>Fee predictability and UX for users and dApps</li>
                </ul>
              </CardContent>
            </Card>

                    </div>

        {/* Embed code section */}
        <section className="mt-12">
          <EmbedCode infographic={infographic} />
        </section>
      </div>
    </BackgroundWrapper>
  );
}


