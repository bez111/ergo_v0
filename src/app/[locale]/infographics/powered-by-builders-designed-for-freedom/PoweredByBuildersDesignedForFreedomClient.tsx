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
  Sparkles,
  Target,
  Users,
  Hammer,
  Shield,
} from "lucide-react";

type Props = {
  infographic: InfographicMeta;
};

export function PoweredByBuildersDesignedForFreedomClient({
  infographic,
}: Props) {
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
                <Users className="h-3.5 w-3.5" />
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
              “Powered by Builders. Designed for Freedom.”
            </span>{" "}
            – a three-layer Ergo pyramid of miners, builders and freedom seekers
            aligned around money without masters.
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Left column: explanation + layers */}
          <div className="flex flex-col gap-6">
            {/* About */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Users className="h-4 w-4 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  This graphic shows Ergo’s ecosystem as a three-layer pyramid:
                  miners at the base, builders in the middle and freedom seekers
                  at the top. Together they describe how the network is powered
                  by builders but ultimately designed for people who want to own
                  their finance.
                </p>
                <p>
                  The bottom layer, “Miners — secure the base layer”, focuses on
                  fair-launched Proof-of-Work with no VC premine and hashpower
                  as a neutral referee. The middle layer, “Builders — ship tools
                  &amp; dApps”, highlights wallets, DEXes, oracles and DAOs
                  built on eUTXO and Sigma contracts. The top layer, “Freedom
                  seekers — own your finance”, speaks to cypherpunks, savers and
                  people escaping fiat systems.
                </p>
                <p>
                  A closing line ties the roles together: miners anchor security,
                  builders compose protocols and freedom seekers stand on top –
                  using Ergo as money without masters, with no VC, no ICO and no
                  premine.
                </p>
              </CardContent>
            </Card>

            {/* Layers details */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Target className="h-4 w-4 text-orange-400" />
                  The Three Layers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                {/* Freedom seekers */}
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/40 p-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-orange-400" />
                    <h3 className="text-sm font-semibold">
                      Freedom seekers — own your finance
                    </h3>
                  </div>
                  <ul className="list-disc space-y-1 pl-4 text-xs sm:text-sm">
                    <li>Cypherpunks, savers, builders, refugees from fiat.</li>
                    <li>Self-custody with no trusted middlemen.</li>
                    <li>Censorship-resistant, borderless payments.</li>
                    <li>Opt-in, programmable free markets.</li>
                  </ul>
                </div>

                {/* Builders */}
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/40 p-3">
                  <div className="flex items-center gap-2">
                    <Hammer className="h-4 w-4 text-orange-400" />
                    <h3 className="text-sm font-semibold">
                      Builders — ship tools &amp; dApps
                    </h3>
                  </div>
                  <ul className="list-disc space-y-1 pl-4 text-xs sm:text-sm">
                    <li>eUTXO &amp; Sigma contracts on Ergo.</li>
                    <li>Wallets, DEXes, oracles, DAOs and more.</li>
                    <li>Open-source tools with no gatekeepers.</li>
                  </ul>
                </div>

                {/* Miners */}
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/40 p-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-400" />
                    <h3 className="text-sm font-semibold">
                      Miners — secure the base layer
                    </h3>
                  </div>
                  <ul className="list-disc space-y-1 pl-4 text-xs sm:text-sm">
                    <li>Proof-of-Work security.</li>
                    <li>Fair launch, no VC premine.</li>
                    <li>Hashpower as a neutral referee for the rules.</li>
                  </ul>
                </div>
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
                    Start with the title and three-tier pyramid to see how
                    miners, builders and freedom seekers stack together.
                  </li>
                  <li>
                    Read the “Freedom seekers” tier to understand who the system
                    is ultimately designed for and what “own your finance”
                    means.
                  </li>
                  <li>
                    Move down to the “Builders” tier to see what tools and dApps
                    sit on top of Ergo’s protocol.
                  </li>
                  <li>
                    Finish with the “Miners” tier and bottom caption to connect
                    fair-launch PoW with the money-without-masters philosophy.
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
                  <li>Ergo ecosystem roles: miners, builders, users</li>
                  <li>Proof-of-Work and fair launch on Ergo</li>
                  <li>eUTXO and Sigma contracts for builders</li>
                  <li>Cypherpunk approaches to financial freedom</li>
                  <li>“Money without masters” philosophy</li>
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
                  Want to include this pyramid in your docs, blog or deck? Copy
                  the HTML snippet below to embed it with proper attribution.
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


