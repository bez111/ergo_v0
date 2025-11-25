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
  Scale,
} from "lucide-react";

type Props = {
  infographic: InfographicMeta;
};

export function PowVsPosCensorshipAttackSurfaceClient({ infographic }: Props) {
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
              “PoW vs PoS: Censorship &amp; Attack Surface”
            </span>{" "}
            – comparing miners, stakers and validator committees on who can
            censor, how cartels form and how systems react under pressure.
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
                  This graphic looks at censorship and attack surface across
                  three consensus families: Proof-of-Work (Ergo / Bitcoin),
                  classic Proof-of-Stake, and validator-committee designs
                  (DPoS/BFT).
                </p>
                <p>
                  The top section asks a simple but uncomfortable question: who
                  can actually block your transactions? PoW puts that power with
                  miners and pools controlling hashpower, but those actors are
                  permissionless and can change over time. Classic PoS shifts
                  power to large validators and custodians controlling bonded
                  stake. Validator committees go further, concentrating block
                  production in a small, named set of companies.
                </p>
                <p>
                  The comparison rows then explore how easy it is to form a
                  cartel, what happens under regulatory or legal pressure, and
                  which resistance tools users really have in each model – from
                  redirecting hashpower and spinning up new miners to slow,
                  painful exits from captured staking providers.
                </p>
              </CardContent>
            </Card>

            {/* Comparison table */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Scale className="h-4 w-4 text-orange-400" />
                  Consensus Models Compared
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-2 rounded-lg border border-white/10 bg-black/40 text-[11px] sm:text-xs md:text-sm">
                  {/* Header row */}
                  <div className="border-b border-white/10 bg-white/5 px-3 py-2 font-medium text-muted-foreground">
                    Dimension
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    PoW
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      Ergo / Bitcoin
                    </span>
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Classic PoS
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      Stake validators
                    </span>
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Validator Committees
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      DPoS / BFT sets
                    </span>
                  </div>

                  {/* Who can censor transactions? */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Who can censor transactions?
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Miners and mining pools controlling a majority of
                    hashpower. They are permissionless and can change over time,
                    so power is decentralized.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Large stakeholders and validator operators (often exchanges,
                    custodians, staking pools) who control most bonded stake –
                    a more concentrated set.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    A small, named set of validators or companies with explicit
                    roles in block production – censorship power is centralized
                    by design.
                  </div>

                  {/* How easy is it to form a cartel? */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    How easy is it to form a cartel?
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Hard: requires coordinating massive hashpower from many
                    miners, and hash can defect to non-censoring pools at any
                    time.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Medium to easy: stake tends to concentrate with large
                    providers, and a few big validators or custodians can
                    coordinate policy.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Trivial: the committee is effectively a cartel from day one;
                    a small group can coordinate censorship or reordering.
                  </div>

                  {/* Under regulatory / legal pressure */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Under regulatory / legal pressure
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Regulators can pressure pools or local miners, but
                    hashpower can migrate across borders and to non-compliant
                    entities – global censorship is hard to enforce.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Key validators and custodians are often regulated entities
                    that can be forced to block addresses or filter mempools
                    under threat of slashing or legal action.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Regulators only need to reach a handful of known companies;
                    blacklists, whitelists or KYC gating can be imposed
                    directly on the committee.
                  </div>

                  {/* Resistance tools */}
                  <div className="bg-black/50 px-3 py-3 font-medium">
                    Resistance tools
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Users can redirect hashpower to non-censoring pools, spin up
                    new miners or coordinate forks; the economic majority can
                    abandon censoring miners.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Social coordination and chain splits are possible, but stake
                    is often locked or custodied, making exits slow, painful and
                    limited.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Very limited: if the committee is captured, options shrink
                    to launching a new chain or attempting a governance
                    revolution – both highly disruptive.
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
                    PoW places censorship power with hashpower, but miners and
                    pools are permissionless and can change over time.
                  </li>
                  <li>
                    Classic PoS and validator committees concentrate control in
                    large stakers, custodians and small validator sets.
                  </li>
                  <li>
                    Under regulatory pressure, it is much easier to capture a
                    few validators or named companies than a broad, mobile PoW
                    hashbase.
                  </li>
                  <li>
                    Users in PoW systems have stronger resistance tools –
                    redirecting hash, spinning up new miners, coordinating
                    forks – than in locked, committee-driven designs.
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
                    Start with the column headers: PoW (Ergo / Bitcoin), classic
                    PoS and validator committees (DPoS / BFT).
                  </li>
                  <li>
                    Read the first row to see who can actually censor
                    transactions in each model.
                  </li>
                  <li>
                    Move down to cartel formation and regulatory pressure to
                    understand how easy each design is to capture or weaponize.
                  </li>
                  <li>
                    Finish with the resistance tools row and the bottom banner
                    about broad, mobile PoW hashpower being hardest to capture.
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
                  <li>Proof-of-Work vs Proof-of-Stake security trade-offs</li>
                  <li>Censorship resistance and neutrality in blockchains</li>
                  <li>Regulatory pressure on validators, miners and pools</li>
                  <li>DPoS and BFT validator committee centralization risks</li>
                  <li>Ergo’s PoW design and decentralization goals</li>
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
                  Want to add this consensus comparison to your article, docs or
                  presentation? Copy the HTML snippet below to embed it with
                  proper attribution.
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


