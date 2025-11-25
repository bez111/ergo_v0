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
  ShieldAlert,
  Target,
  Sparkles,
} from "lucide-react";

type Props = {
  infographic: InfographicMeta;
};

export function WhatWeAreFightingAgainstClient({ infographic }: Props) {
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
              “What We’re Fighting Against”
            </span>{" "}
            – a layered view of the financial repression stack and what Ergo
            offers instead.
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Left column: explanation + stack */}
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
                  This graphic lays out the “financial repression stack” –
                  capital controls, frozen accounts, sanctions, KYC overreach
                  and programmable CBDCs – and contrasts it with what Ergo
                  offers instead.
                </p>
                <p>
                  The tower in the center shows how different tools, from
                  capital controls up to CBDCs, all push in the same direction:
                  less individual control over value. The right-hand callout
                  makes it explicit: different mechanisms, same outcome.
                </p>
                <p>
                  Along the bottom, the Ergo bar highlights censorship-resistant
                  settlement, programmability without gatekeepers and privacy on
                  demand – positioning Ergo as infrastructure for people escaping
                  financial choke points, not for those who profit from them.
                </p>
              </CardContent>
            </Card>

            {/* Stack layers */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  The Financial Repression Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/40 p-3 text-xs sm:text-sm">
                  <h3 className="mb-1 text-sm font-semibold">
                    From top to bottom:
                  </h3>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>
                      Programmable restrictions (CBDCs) – Money that can expire,
                      be blocked or steered by policy in real time.
                    </li>
                    <li>
                      KYC overreach – Surveillance, data hoarding and denial of
                      access for “unprofitable” users.
                    </li>
                    <li>
                      Sanctions – Whole regions, industries or individuals cut
                      off from global rails.
                    </li>
                    <li>
                      Freezing accounts – Banks and platforms can lock funds at
                      the flip of a switch.
                    </li>
                    <li>
                      Capital controls – Restrictions on moving money across
                      borders or into sound assets.
                    </li>
                  </ul>
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  Different mechanisms. Same outcome: less control over your own
                  value.
                </p>
              </CardContent>
            </Card>

            {/* What Ergo offers instead */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  What Ergo Offers Instead
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/40 p-3 text-xs sm:text-sm">
                  <h3 className="mb-1 text-sm font-semibold">
                    Censorship-resistant settlement
                  </h3>
                  <p>
                    PoW-based, non-custodial transactions that intermediaries
                    cannot freeze.
                  </p>
                </div>
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/40 p-3 text-xs sm:text-sm">
                  <h3 className="mb-1 text-sm font-semibold">
                    Programmability without gatekeepers
                  </h3>
                  <p>
                    eUTXO, ErgoScript and Sigma Protocols to encode free-market
                    rules on-chain without centralized platforms deciding who
                    can build.
                  </p>
                </div>
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/40 p-3 text-xs sm:text-sm">
                  <h3 className="mb-1 text-sm font-semibold">
                    Privacy on demand
                  </h3>
                  <p>
                    Opt-in tools for hiding flows and balances when exposure
                    becomes a risk.
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  Ergo is built for people escaping financial choke points – not
                  for those who profit from them.
                </p>
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
                    Start from the top of the stack (CBDCs) and move downward
                    through KYC overreach, sanctions, frozen accounts and
                    capital controls.
                  </li>
                  <li>
                    Notice how each layer uses a different mechanism but pushes
                    toward the same outcome: more central control over value.
                  </li>
                  <li>
                    Read the “What Ergo offers instead” bar to see how
                    censorship-resistant settlement, permissionless
                    programmability and privacy on demand answer each layer.
                  </li>
                  <li>
                    Connect the bottom line and footer (PoW, fair launch, no VC,
                    cypherpunk tools) back to Ergo’s broader philosophy.
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
                  <li>CBDCs and financial control</li>
                  <li>Capital controls and sanctions regimes</li>
                  <li>Censorship-resistant settlement on Ergo</li>
                  <li>Sigma-based privacy tools on Ergo</li>
                  <li>Cypherpunk approaches to financial freedom</li>
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
                  Want to add this “financial repression stack” visual to your
                  article or presentation? Copy the HTML snippet below to embed
                  it with proper attribution.
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


