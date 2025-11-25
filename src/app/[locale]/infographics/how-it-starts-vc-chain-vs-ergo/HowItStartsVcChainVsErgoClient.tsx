'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  SplitSquareHorizontal,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface HowItStartsVcChainVsErgoClientProps {
  infographic: InfographicMeta;
}

export function HowItStartsVcChainVsErgoClient({
  infographic,
}: HowItStartsVcChainVsErgoClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Typical VC chains are structured so insiders and funds enter first through private and strategic rounds with big, discounted allocations.',
    'The public usually only accesses a small portion of supply at a higher price during ICO/TGE and early exchange listings.',
    'Unlock schedules and vesting cliffs let early insiders exit into retail liquidity once narratives and marketing have built demand.',
    'Ergo’s path emphasizes years of research and design on PoW, eUTXO and Sigma Protocols before launch.',
    'Ergo launched mainnet with no ICO, no premine and no VC carve-outs; Block 1 was mined on-chain.',
    'Open PoW mining allows anyone with hardware to join and earn ERG through work rather than allocations.',
    'Community build-out focuses on wallets, DEXes, tools, documentation and education instead of token unlock games.',
    'Long-term security on Ergo is supported by storage rent and tail emission, designed to keep miners incentivized over time.',
    'The infographic’s arrows—“Insiders Profit” vs “Fair Distribution for All”—underline the difference in power structure between VC chains and Ergo.',
    'The core message is that although both call themselves “blockchains”, their launch mechanics and distribution fairness are fundamentally different.',
  ];

  const readingOrder = [
    'Main title: How It Starts: VC Chain vs Ergo.',
    'Question banner: Who really gets in early?',
    'Top arrow label: Insiders Profit.',
    'Left-side vertical label: Typical VC Chain.',
    'Top row stages and text: Private Sale – Insiders & funds get in first. Huge discounts, big allocations. Seed / Strategic Rounds – More VC rounds, more locked tokens for “partners”. ICO / TGE – Public gets a small slice at a much higher price. Exchange Listing – Narrative + marketing push. Liquidity opens for exit. Unlock & Exit – Cliffs & vesting. Early insiders sell into retail liquidity.',
    'Left-side vertical label for bottom row: Ergo (Fair-Launched PoW).',
    'Bottom row stages and text: Research & Design – Years of academic work on PoW, eUTXO, Sigma Protocols. Mainnet Launch – No ICO, no premine, no VC. Block 1 mined on-chain. Open PoW Mining – Anyone with hardware can join. Supply is earned at work. Community Build-Out – Wallets, DEXes, tools, documentation, education. Long-Term Security – Storage rent + tail emission keep miners incentivized.',
    'Bottom arrow label: Fair Distribution for All.',
    'Tagline at the bottom: Same word ‘blockchain’. Completely different power structure.',
    'Footer text: Based on ergoblockchain.org.',
  ];

  const vcStages = [
    {
      title: 'Private Sale',
      description:
        'Insiders and funds get in first with huge discounts and oversized allocations.',
    },
    {
      title: 'Seed / Strategic Rounds',
      description:
        'Additional VC rounds add more locked tokens for “partners” and insiders.',
    },
    {
      title: 'ICO / TGE',
      description:
        'The public finally gets a small slice of supply at a much higher price.',
    },
    {
      title: 'Exchange Listing',
      description:
        'Narrative and marketing push liquidity so early insiders can prepare exits.',
    },
    {
      title: 'Unlock & Exit',
      description:
        'Vesting cliffs end. Early insiders sell into new retail liquidity and hype.',
    },
  ];

  const ergoStages = [
    {
      title: 'Research & Design',
      description:
        'Years of academic work on PoW, eUTXO and Sigma Protocols before launch.',
    },
    {
      title: 'Mainnet Launch',
      description:
        'No ICO, no premine, no VC carve-outs. Block 1 mined on-chain from day one.',
    },
    {
      title: 'Open PoW Mining',
      description:
        'Anyone with hardware can mine and earn supply through work, not allocations.',
    },
    {
      title: 'Community Build-Out',
      description:
        'Wallets, DEXes, tools, docs and education rather than unlock games and hype.',
    },
    {
      title: 'Long-Term Security',
      description:
        'Storage rent plus tail emission keep miners incentivized for the long run.',
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
            <Button variant="ghost" className="text-neutral-400 hover:text-white" asChild>
              <a href="/infographics">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Infographics
              </a>
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
              Same word “blockchain”. Completely different power structure.
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
                  <SplitSquareHorizontal className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled{' '}
                  <strong>“How It Starts: VC Chain vs Ergo”</strong>, compares how a typical
                  VC-backed blockchain launches versus how Ergo began as a fair-launched PoW
                  project. A question across the top —{' '}
                  <strong>“Who really gets in early?”</strong> — sets the frame for two very
                  different funnels.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The top row, labeled <strong>“Typical VC Chain”</strong> with an arrow{' '}
                  <span className="text-orange-400 font-semibold">“Insiders Profit”</span>, walks
                  through private sales, seed/strategic rounds, ICO/TGE, exchange listings and
                  unlock-driven exits. Each stage concentrates supply and advantage among insiders
                  before the public ever touches the asset.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The bottom row, <strong>“Ergo (Fair-Launched PoW)”</strong>, with an arrow{' '}
                  <span className="text-orange-400 font-semibold">“Fair Distribution for All”</span>
                  , starts with years of research and design, then shows a mainnet launch with no
                  ICO, no premine and no VC, followed by open PoW mining, community build-out and a
                  long-term security story based on storage rent and tail emission. The closing line
                  underscores the point:{' '}
                  <strong>same word “blockchain”, completely different power structure.</strong>
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Two launch paths */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <SplitSquareHorizontal className="w-6 h-6 text-orange-400" />
                  Two Launch Paths, Two Power Structures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white/5 border border-red-500/40 p-4">
                    <h3 className="text-white font-semibold mb-1">Typical VC Chain</h3>
                    <p className="text-xs text-red-300 uppercase tracking-wide mb-3">
                      Insiders Profit
                    </p>
                    <ol className="space-y-2 text-sm text-neutral-200 leading-relaxed list-decimal list-inside">
                      {vcStages.map((stage) => (
                        <li key={stage.title}>
                          <span className="font-semibold">{stage.title}:</span>{' '}
                          <span className="font-normal">{stage.description}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-green-500/40 p-4">
                    <h3 className="text-white font-semibold mb-1">Ergo (Fair-Launched PoW)</h3>
                    <p className="text-xs text-green-300 uppercase tracking-wide mb-3">
                      Fair Distribution for All
                    </p>
                    <ol className="space-y-2 text-sm text-neutral-200 leading-relaxed list-decimal list-inside">
                      {ergoStages.map((stage) => (
                        <li key={stage.title}>
                          <span className="font-semibold">{stage.title}:</span>{' '}
                          <span className="font-normal">{stage.description}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
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
                    'Fair launch vs VC tokenomics',
                    'Ergo distribution model',
                    'Open PoW mining on Ergo',
                    'Storage rent and tail emission',
                    'Cypherpunk alternatives to VC chains',
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



