"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { BackgroundWrapper } from "@/components/layout/BackgroundWrapper";
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
  ShieldAlert,
  Target,
  Sparkles,
  Table2,
} from "lucide-react";

type Props = {
  infographic: InfographicMeta;
};

export function MevResistanceVsDarkForestClient({ infographic }: Props) {
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
                <ShieldAlert className="h-3.5 w-3.5" />
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
              “MEV-Resistance vs the “Dark Forest””
            </span>{" "}
            – contrasting global DeFi “dark forest” MEV mempools with Ergo’s
            MEV-aware eUTXO local ordering design.
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Left column: explanation */}
          <div className="flex flex-col gap-6">
            {/* About */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <ShieldAlert className="h-4 w-4 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  This graphic compares two very different MEV environments:
                  the “dark forest” of global DeFi mempools on Ethereum-style
                  chains and Ergo’s MEV-aware, local ordering design built on
                  eUTXO.
                </p>
                <p>
                  Side A shows a shared public mempool where user transactions
                  become prey for MEV bots and searchers. They scan pending
                  txs, simulate strategies and bid in priority gas auctions to
                  run sandwiches, backruns and liquidations around popular DeFi
                  contracts.
                </p>
                <p>
                  Side B shows Ergo’s approach: eUTXO with many local states and
                  local mempools, no single global AMM-style mempool and no
                  global priority gas auction. Miners and pools order
                  transactions locally, shrinking the MEV surface and making
                  many “dark forest” tactics less straightforward.
                </p>
              </CardContent>
            </Card>

            {/* Comparison table */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Table2 className="h-4 w-4 text-orange-400" />
                  Dark Forest DeFi vs Ergo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] gap-2 rounded-lg border border-white/10 bg-black/40 text-[11px] sm:text-xs md:text-sm">
                  {/* Header row */}
                  <div className="border-b border-white/10 bg-white/5 px-3 py-2 font-medium text-muted-foreground">
                    Question
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Dark Forest DeFi
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      Ethereum-style global mempools
                    </span>
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Ergo
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      MEV-aware local ordering
                    </span>
                  </div>

                  {/* Where front-running happens */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Where front-running happens
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    In a shared global mempool around popular contracts (DEXes,
                    lending, liquidations), where searchers race to insert or
                    reorder transactions ahead of users.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Within local pools and box-level interactions; fewer shared
                    global books mean fewer obvious chokepoints for
                    sandwich-style games.
                  </div>

                  {/* Who captures the value */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Who captures the value
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Specialized MEV bots, searchers and block builders who can
                    pay the highest tips in priority gas auctions.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Mostly miners and MEV-aware protocol users; there is no
                    separate builder/relay marketplace dominating ordering.
                  </div>

                  {/* UX for a normal user */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    UX for a normal user
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Users can be sandwiched, slipped or outbid without
                    realizing it; what the interface shows is not always what
                    the chain will execute.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Less adversarial environment where eUTXO contracts and local
                    ordering make behavior more predictable and easier to reason
                    about.
                  </div>

                  {/* Mitigation at L1 */}
                  <div className="bg-black/50 px-3 py-3 font-medium">
                    Mitigation at L1
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Most mitigation lives in higher layers: private mempools,
                    order-flow auctions and specialized relays; the base L1
                    still runs open MEV markets.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Mitigation starts at protocol design: eUTXO + local ordering
                    reduce shared-state MEV by default, and contracts can
                    further constrain ordering rules.
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
                    Global DeFi mempools behave like a “dark forest” where MEV
                    bots hunt user transactions with priority gas auctions.
                  </li>
                  <li>
                    Ergo’s eUTXO model and local ordering avoid a single global
                    AMM-style mempool and shrink the MEV surface by design.
                  </li>
                  <li>
                    In dark-forest environments, specialized searchers and
                    builders capture most MEV; on Ergo, value tends to stay with
                    miners and protocol users.
                  </li>
                  <li>
                    Ergo does not magically delete MEV, but it reduces shared
                    choke points and makes typical user UX less adversarial.
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
                    Start with Side A (“Dark Forest” DeFi) to see how a global
                    mempool plus DeFi contracts create MEV-rich search spaces.
                  </li>
                  <li>
                    Look at Side B (Ergo) to understand how eUTXO and local
                    mempools change where and how ordering games can happen.
                  </li>
                  <li>
                    Use the table to compare where front-running occurs, who
                    captures value, typical UX and how L1 mitigates MEV.
                  </li>
                  <li>
                    Finish with the bottom banner: Ergo doesn’t erase MEV, but
                    it shrinks the “dark forest” by design.
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
                  <li>MEV on Ethereum and DeFi-heavy chains</li>
                  <li>Ergo’s MEV-aware local ordering design</li>
                  <li>eUTXO and shared-state MEV considerations</li>
                  <li>Private mempools and order-flow auctions</li>
                  <li>Front-running and sandwich attacks in DeFi</li>
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
                  Want to include this MEV comparison in your article or docs?
                  Copy the HTML snippet below to embed it with proper
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


