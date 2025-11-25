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
  Shield,
  Target,
  Sparkles,
  Table2,
} from "lucide-react";

type Props = {
  infographic: InfographicMeta;
};

export function ErgoVsPrivacyCoinsClient({ infographic }: Props) {
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
                <Shield className="h-3.5 w-3.5" />
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
              “Ergo vs Privacy Coins”
            </span>{" "}
            – comparing Ergo, Monero, Zcash and L2 mixers on privacy models,
            programmability, auditability and tokenomics.
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Left column: explanation */}
          <div className="flex flex-col gap-6">
            {/* About */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Shield className="h-4 w-4 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  This graphic compares four approaches to on-chain privacy:
                  Ergo, Monero, Zcash and L2 mixers built on transparent L1s.
                  Each column shows how they differ across privacy model,
                  programmability, selective disclosure, auditability and
                  tokenomics.
                </p>
                <p>
                  Ergo sits between fully transparent chains and fully private
                  coins: optional, contract-level privacy using Sigma Protocols
                  on a mostly transparent PoW chain. Monero offers privacy by
                  default at L1 with ring signatures, stealth addresses and
                  RingCT. Zcash uses optional shielded pools via zk-SNARKs, and
                  L2 mixers add zk-based privacy on top of transparent
                  smart-contract platforms.
                </p>
                <p>
                  The lower rows highlight programmability and auditability:
                  Ergo brings full smart contracts and programmable selective
                  disclosure, while Monero and Zcash have limited native
                  programmability and rely on view keys. L2 mixers inherit
                  smart-contract power from their host chain but keep privacy
                  siloed to the mixer contract and follow typical DeFi-style
                  tokenomics.
                </p>
              </CardContent>
            </Card>

            {/* Comparison table */}
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Table2 className="h-4 w-4 text-orange-400" />
                  Privacy Models Compared
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-2 rounded-lg border border-white/10 bg-black/40 text-[11px] sm:text-xs md:text-sm">
                  {/* Header row */}
                  <div className="border-b border-white/10 bg-white/5 px-3 py-2 font-medium text-muted-foreground">
                    Dimension
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Ergo
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Monero
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    Zcash
                  </div>
                  <div className="border-b border-l border-white/10 bg-white/5 px-3 py-2 font-medium">
                    L2 Mixers
                  </div>

                  {/* Privacy model */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Privacy model
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Optional, contract-level privacy using Sigma Protocols on a
                    mostly transparent PoW chain.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Privacy by default at L1 with ring signatures, stealth
                    addresses and RingCT hiding senders, receivers and amounts.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Optional shielded transactions using zk-SNARKs with both
                    transparent and shielded pools.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    ZK-based mixers on top of transparent L1s, breaking the
                    on-chain link between deposit and withdrawal for specific
                    deposits.
                  </div>

                  {/* Programmability (contracts) */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Programmability (contracts)
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Full smart-contract platform (ErgoScript + eUTXO) with
                    built-in Sigma primitives for private DeFi and complex
                    dApps.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    No general-purpose smart contracts; limited scripting for
                    transfers and simple conditions.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Not a native smart-contract platform; focuses on
                    confidential transfers, with privacy sometimes bridged to
                    external chains.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Implemented as smart contracts on programmable L1s/L2s, but
                    privacy remains siloed to the mixer contract.
                  </div>

                  {/* Selective disclosure */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Selective disclosure
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Programmable selective disclosure via Sigma proofs: reveal
                    balances, flows or conditions without exposing full
                    history.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    View keys share a wallet’s history with third parties, but
                    fine-grained, per-contract proofs are limited.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Viewing keys for shielded addresses enable wallet-level
                    auditing and selective disclosure for compliance.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Typically very limited; once coins are mixed, deposit–
                    withdraw links are hidden even from auditors.
                  </div>

                  {/* Auditability (reserves & audits) */}
                  <div className="border-b border-white/10 bg-black/50 px-3 py-3 font-medium">
                    Auditability (reserves &amp; audits)
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Base layer auditable like Bitcoin; optional privacy and
                    proof-of-reserves can be handled in contracts using Sigma
                    proofs.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Total supply and emission provably correct, but individual
                    balances and flows are opaque; audits rely on schemes or
                    view keys.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Overall supply and shielded pool balances enforced by
                    zk-SNARK invariants; viewing keys allow targeted audits.
                  </div>
                  <div className="border-b border-l border-white/10 bg-black/30 px-3 py-3">
                    Underlying L1 remains auditable, but mixer usage breaks
                    transaction graph continuity and complicates reserve
                    tracking.
                  </div>

                  {/* Fair launch / tokenomics */}
                  <div className="bg-black/50 px-3 py-3 font-medium">
                    Fair launch / tokenomics
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Fair-launched PoW with no ICO, premine or VC allocation; all
                    ERG are mined, with storage rent and block rewards funding
                    security.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Fair, pre-announced launch with no premine, ICO or founder
                    reward; ongoing tail emission keeps miners incentivized.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    Fixed 21M cap with founders’ reward/dev fund directing a
                    portion of block rewards to founders and development.
                  </div>
                  <div className="border-l border-t border-white/10 bg-black/30 px-3 py-3">
                    No native asset; any governance token follows standard DeFi
                    distribution patterns rather than fair-launch mining.
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
                    Ergo offers optional, Sigma-based privacy on a transparent
                    PoW base layer, rather than default opacity.
                  </li>
                  <li>
                    Monero and Zcash focus on base-layer privacy, while L2
                    mixers provide privacy only for flows that pass through the
                    mixer.
                  </li>
                  <li>
                    Ergo combines real smart contracts with programmable
                    selective disclosure, whereas Monero/Zcash rely on view keys
                    and mixers lack fine-grained proofs.
                  </li>
                  <li>
                    Both Ergo and Monero emphasize fair-launch PoW economics,
                    contrasting with founders’ rewards and DeFi-style token
                    distributions elsewhere.
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
                    Start with the column headers: Ergo, Monero, Zcash and L2
                    mixers.
                  </li>
                  <li>
                    Read the privacy model row to understand how each handles
                    confidentiality at the base layer or on L2.
                  </li>
                  <li>
                    Move through programmability, selective disclosure and
                    auditability to see how usable and auditable each design is.
                  </li>
                  <li>
                    Finish with the tokenomics row and bottom banner that frame
                    Ergo’s place between transparent chains and full privacy
                    coins.
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
                  <li>Ergo privacy with Sigma Protocols</li>
                  <li>Monero’s default L1 privacy model</li>
                  <li>Zcash shielded transactions and viewing keys</li>
                  <li>L2 mixers on Ethereum and other smart-contract L1s</li>
                  <li>Fair-launch tokenomics vs founders’ rewards</li>
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
                  Want to include this comparison in your article, docs or
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


