'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Globe2,
  Table,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface EngineeredForGlobalSettlementClientProps {
  infographic: InfographicMeta;
}

export function EngineeredForGlobalSettlementClient({
  infographic,
}: EngineeredForGlobalSettlementClientProps) {
  const router = useRouter();
  
  const handleBackClick = (e: React.MouseEvent) => {
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
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'The infographic frames Ergo as a PoW base layer specifically engineered for global settlement rather than just speculation.',
    'Ergo targets ~2-minute block times, providing a human-scale settlement rhythm compared with much slower Bitcoin blocks and much faster, more jittery blocks on Ethereum or L2s.',
    'Typical user fees on Ergo are presented in the ≈$0.01–0.10 range under normal conditions, aiming for predictable, low costs.',
    'Bitcoin’s fees are shown as higher and more volatile (≈$0.20–5.00+), while Ethereum’s can range from ≈$1–50+ depending on gas, with L2 rollups spanning ≈$0.005–0.50.',
    'Ergo’s MEV-aware design leverages local ordering in eUTXO to reduce shared mempool games and mitigate classic MEV exploits.',
    'Bitcoin is characterized as having relatively low-complexity MEV, while Ethereum’s builder markets and priority auctions create a high-MEV environment.',
    'Typical L2 rollups often rely on centralized sequencers, leading to single-entity ordering and potential MEV concentration.',
    'Ergo’s eUTXO (programmable UTXO) model is contrasted with Bitcoin’s basic UTXO and the account-based models used on Ethereum and most L2s.',
    'The eUTXO design is positioned as enabling easier parallelism and predictable execution costs at L1, which helps with fee planning for applications.',
    'The closing message emphasizes that Ergo aims for block times people can reason about, fees that apps can budget for, and a PoW architecture suitable for global settlement with accessible full nodes.',
  ];

  const readingOrder = [
    'Main title: Engineered for Global Settlement.',
    'Subtitle: Fast, low-cost, MEV-resistant settlement built on Ergo.',
    'Top box: Banks, fintech, wallets, DEXes, L2s – Where people interact — UX, brands, interfaces.',
    'Middle box: Bitcoin • Ethereum L1 • EVM L1s • Rollups • Sidechains – Different chains, different trade-offs in fees, latency, and MEV.',
    'Highlighted banner: Ergo: PoW settlement with ~2 min blocks, ≈$0.01–0.10 fees & MEV-aware eUTXO design. Text: Designed to stay accessible for full nodes and predictable for global settlement.',
    'Table header row: Parameter; Ergo (L1); Bitcoin (L1); Ethereum (L1); Typical L2 Rollup.',
    'Row 1 – Block time (typical): Ergo ~2 minutes; Bitcoin ~10 minutes; Ethereum ~12 seconds; Typical L2 Rollup ~2–10 seconds.',
    'Row 2 – Typical user fee (normal conditions): Ergo ≈$0.01–0.10 per tx; Bitcoin ≈$0.20–5.00+; Ethereum ≈$1–50+ depending on gas; Typical L2 Rollup ≈$0.005–0.50.',
    'Row 3 – MEV & ordering: Ergo – MEV-aware design, local ordering in eUTXO, fewer shared mempool games. Bitcoin – Low-complexity MEV. Ethereum – High MEV, builder markets, priority auctions, sandwich attacks. Typical L2 Rollup – Depends on sequencer; often single-entity ordering with MEV.',
    'Row 4 – State / contract model: Ergo – eUTXO (programmable UTXO), easier parallelism and predictable execution cost at L1. Bitcoin – UTXO. Ethereum – Account-based. Typical L2 Rollup – Usually account-based.',
    'Footnote under table: Numbers are rough ranges in USD and depend on asset price and network conditions. Not a fee guarantee.',
    'Bottom bar: Ergo: block times humans can reason about, fees apps can budget for, and a PoW base layer designed for global settlement.',
    'Source text at very bottom: Based on ergoblockchain.org/technology — for builders, see the “Engineered for global settlement” section.',
  ];

  const parameters = [
    {
      name: 'Block Time',
      description:
        'How often new blocks — and thus settlement opportunities — arrive on each system.',
      ergo: '~2 minutes',
      bitcoin: '~10 minutes',
      ethereum: '~12 seconds',
      l2: '~2–10 seconds (typical)',
    },
    {
      name: 'Typical User Fee (Normal Conditions)',
      description:
        'Approximate fee ranges for simple transfers under normal network conditions (rough USD ranges).',
      ergo: '≈$0.01–0.10 per tx',
      bitcoin: '≈$0.20–5.00+',
      ethereum: '≈$1–50+ (gas-dependent)',
      l2: '≈$0.005–0.50',
    },
    {
      name: 'MEV & Ordering',
      description:
        'How transactions are ordered and where Miner/Maximal Extractable Value tends to show up.',
      ergo: 'MEV-aware, local ordering in eUTXO, fewer shared mempool games.',
      bitcoin: 'Low-complexity MEV; simpler scripting and ordering.',
      ethereum:
        'High MEV with builder markets, priority auctions and sandwich attacks.',
      l2: 'Depends on sequencer; often single-entity ordering with MEV concentration.',
    },
    {
      name: 'State / Contract Model',
      description:
        'The underlying accounting and smart contract model used for tracking balances and logic.',
      ergo: 'eUTXO (programmable UTXO), easier parallelism & predictable L1 execution costs.',
      bitcoin: 'UTXO (simple, non-programmable in comparison).',
      ethereum: 'Account-based with global mutable state.',
      l2: 'Usually account-based (inherits many L1 assumptions).',
    },
  ];

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button variant="ghost" className="text-neutral-400 hover:text-white" onClick={handleBackClick}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Infographics
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {infographic.title}
            </h1>
            <p className="text-xl text-neutral-300 mb-6 max-w-3xl mx-auto">
              Fast, low-cost, MEV-resistant settlement built on Ergo.
            </p>

            {/* Meta information */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(infographic.publishDate)}</span>
              </div>
              {infographic.readingTimeMinutes && (
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{infographic.readingTimeMinutes} min read</span>
                </div>
              )}
              <Badge
                className="bg-orange-500/20 text-orange-400 border-orange-500/30"
                variant="secondary"
              >
                <Tag className="h-3 w-3 mr-1" />
                {CATEGORY_LABELS[infographic.category] || infographic.category}
              </Badge>
              <Badge variant="outline" className="border-neutral-600 text-neutral-300">
                {LEVEL_LABELS[infographic.level] || infographic.level}
              </Badge>
            </div>
          </motion.header>

          {/* Main infographic image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={infographic.fullImageUrl}
                  alt={infographic.imageAlt}
                  className="w-full h-auto"
                  loading="eager"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* About section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Globe2 className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled{' '}
                  <strong>“Engineered for Global Settlement”</strong>, positions Ergo as a
                  Proof-of-Work base settlement layer with predictable fees and MEV-aware execution.
                  A world map backdrop shows three layers: the UX layer where people interact
                  (banks, fintech, wallets, DEXes, L2s), the broader landscape of L1s and rollups,
                  and a highlighted Ergo band that calls out{' '}
                  <strong>~2-minute blocks, ≈$0.01–0.10 fees and an MEV-aware eUTXO design</strong>.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The bottom half is a comparison table contrasting Ergo (L1) with Bitcoin (L1),
                  Ethereum (L1) and a typical L2 rollup. Rows walk through block times, typical user
                  fees under normal conditions, MEV and ordering models, and underlying state and
                  contract models. Each cell shows how different systems trade off latency, fee
                  stability and MEV exposure.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  A closing bar summarises the thesis:{' '}
                  <span className="text-orange-400 font-semibold">
                    “Ergo: block times humans can reason about, fees apps can budget for, and a PoW
                    base layer designed for global settlement.”
                  </span>{' '}
                  A footnote clarifies that fee ranges are approximate and depend on asset prices
                  and network conditions, guiding builders to the “Engineered for global settlement”
                  section on ergoblockchain.org for deeper technical context.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Settlement comparison */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Table className="w-6 h-6 text-orange-400" />
                  Settlement Parameters at a Glance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                    <thead className="text-neutral-300">
                      <tr>
                        <th className="py-2 pr-4 font-semibold text-neutral-400">Parameter</th>
                        <th className="py-2 px-3 font-semibold text-orange-300">Ergo (L1)</th>
                        <th className="py-2 px-3 font-semibold text-neutral-300">Bitcoin (L1)</th>
                        <th className="py-2 px-3 font-semibold text-neutral-300">Ethereum (L1)</th>
                        <th className="py-2 px-3 font-semibold text-neutral-300">
                          Typical L2 Rollup
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {parameters.map((row) => (
                        <tr key={row.name} className="align-top">
                          <td className="py-3 pr-4 text-neutral-200">
                            <div className="font-semibold text-white">{row.name}</div>
                            <div className="text-xs text-neutral-400 mt-1">
                              {row.description}
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="text-orange-100 font-medium">{row.ergo}</div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="text-neutral-200">{row.bitcoin}</div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="text-neutral-200">{row.ethereum}</div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="text-neutral-200">{row.l2}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-neutral-500">
                  Fee ranges are rough estimates in USD, dependent on asset prices and network
                  conditions. They are illustrative only and not a guarantee of future fees.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key Points */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-400" />
                  Key Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 shrink-0" />
                      <p className="text-neutral-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Reading order */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Eye className="w-6 h-6 text-orange-400" />
                  How to Read This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {readingOrder.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-orange-400 font-mono text-sm mt-1 shrink-0">
                        {(index + 1).toString().padStart(2, '0')}.
                      </span>
                      <p className="text-neutral-300 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Related topics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Target className="w-6 h-6 text-orange-400" />
                  Related Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Ergo as a settlement layer',
                    'MEV-aware eUTXO design',
                    'Ergo vs Bitcoin and Ethereum fees',
                    'L1 vs L2 trade-offs',
                    'Full node accessibility on Ergo',
                  ].map((topic) => (
                    <Badge key={topic} variant="outline" className="border-neutral-600 text-neutral-300">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Embed code */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-12"
          >
            <EmbedCode infographic={infographic} />
          </motion.section>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {infographic.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-neutral-600 text-neutral-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}



