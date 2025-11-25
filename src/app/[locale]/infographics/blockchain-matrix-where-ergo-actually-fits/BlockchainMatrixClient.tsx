'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Table,
  Grid3X3,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface BlockchainMatrixClientProps {
  infographic: InfographicMeta;
}

export function BlockchainMatrixClient({ infographic }: BlockchainMatrixClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'The infographic compares Bitcoin, Ethereum, Monero, Zcash, Cardano, Solana, a Typical VC Chain and Ergo across multiple technical and economic dimensions.',
    'Ergo uses PoW with the Autolykos algorithm, remaining GPU-friendly while other newer chains rely on PoS or VC-optimized designs.',
    'Ergo is highlighted as fair-launched with no ICO, no premine and no VC allocation, unlike ICO and VC-heavy competitors.',
    'Ergo’s eUTXO (Programmable UTXO) model is contrasted with account-based models used by Ethereum, Solana and many VC chains.',
    'Programmable privacy with Sigma Protocols gives Ergo a distinct L1 privacy story, in contrast to fully transparent account models.',
    'Protocol-level storage rent on inactive boxes (~4+ years) addresses state bloat and funds security; most other chains have no equivalent.',
    'Ergo’s MEV-aware, eUTXO plus local ordering is presented as a structurally MEV-resistant design compared with high-MEV ecosystems.',
    'Typical fees and finality on Ergo are shown as low (~$0.01) with ~2-minute blocks and stable PoW finality, positioned as cheap, stable and fast.',
    'The “Why Ergo Stands Out” banner claims Ergo is the only chain in the matrix combining PoW, fair launch, eUTXO smart contracts, programmable privacy and protocol-level storage rent.',
    'The bottom slogan ties the matrix back to Ergo’s ideological framing: “Money Without Masters.”',
  ];

  const readingOrder = [
    'Main title: Blockchain Matrix: Where Ergo Actually Fits.',
    'Subtitle: Comparing consensus, launches, privacy and incentives across major chains.',
    'Matrix header row listing chains: Bitcoin, Ethereum, Monero, Zcash, Cardano, Solana, Typical VC Chain, Ergo.',
    'Row 1 heading: Consensus. Example cells: Bitcoin – PoW (SHA-256). Ethereum – PoS (Beacon). Ergo – PoW (Autolykos, GPU-friendly).',
    'Row 2 heading: Launch & Distribution. Example cells: Bitcoin – Fair launch, no ICO, no premine. Ethereum – ICO + premine. Typical VC Chain – Large insider & VC allocation. Ergo – Fair-launched PoW. No ICO, no premine, no VC. Label: Fair Launch.',
    'Row 3 heading: State / Accounting Model. Example cells: Bitcoin – UTXO. Ethereum – Account-based. Ergo – eUTXO (Programmable UTXO).',
    'Row 4 heading: L1 Privacy. Example cells: Monero – Yes, default privacy. Zcash – Yes, optional shielded pools. Most account-based chains – No, transparent accounts. Ergo – “Programmable privacy” with Sigma Protocols. Label: Programmable Privacy.',
    'Row 5 heading: Demurrage / Storage Rent. Example cells: Bitcoin – None, state grows indefinitely. Most chains – None. Ergo – Storage rent on inactive boxes (~4+ years). Note: miners reclaim fees from inactive boxes, keeping state lean and funding security. Label: Storage Rent.',
    'Row 6 heading: MEV Resistance. Example cells: Ethereum – High MEV, priority auctions, sandwich bots. Typical VC Chain – High MEV, full mempool games. Ergo – MEV-aware, eUTXO + local ordering → MEV-resistant design. Label: MEV-Resistant Design.',
    'Row 7 heading: Fees & Finality (Typical). Example cells: Bitcoin – Medium fees; ~10–60 min deep finality. Ethereum – High L1 fees; minutes to finality. Solana – Very low fees; sub-second/seconds finality. Ergo – ~$0.01 fees; ~2 min blocks, stable PoW finality. Label: Cheap/Stable/Fast.',
    'Bottom banner: Why Ergo Stands Out: The only chain in this matrix that combines: PoW consensus + Fair launch (no ICO, no premine, no VC) + eUTXO smart contracts + Programmable privacy with Sigma Protocols + Protocol-level storage rent.',
    'Bottom slogan: Money Without Masters.',
  ];

  const dimensions = [
    {
      name: 'Consensus',
      description:
        'Bitcoin and Monero stay on Proof-of-Work, Ethereum and many newcomers move to PoS variants. Ergo keeps PoW with Autolykos, designed to be GPU-friendly and accessible.',
      ergoCell: 'PoW (Autolykos, GPU-friendly)',
    },
    {
      name: 'Launch & Distribution',
      description:
        'Some chains launched fairly (Bitcoin, Monero), others via ICOs or heavy VC allocations. Typical VC chains lean on insider distributions and unlock charts.',
      ergoCell:
        'Fair-launched PoW. No ICO, no premine, no VC — aligned with cypherpunk values.',
    },
    {
      name: 'State / Accounting Model',
      description:
        'Bitcoin uses simple UTXO, Ethereum and many VC chains rely on global account state, while Cardano and Ergo use eUTXO variants.',
      ergoCell: 'eUTXO (Programmable UTXO) for parallelism, determinism and safer contracts.',
    },
    {
      name: 'L1 Privacy',
      description:
        'Monero and Zcash offer default or optional privacy; most account-based chains are fully transparent.',
      ergoCell:
        'Programmable privacy with Sigma Protocols at the smart contract layer, enabling ZK-style flows without custodians.',
    },
    {
      name: 'Demurrage / Storage Rent',
      description:
        'Most chains let state grow forever with no explicit cleanup, increasing node costs and centralization pressure over time.',
      ergoCell:
        'Storage rent on inactive boxes (~4+ years); miners can reclaim value from long-forgotten outputs, keeping state lean and funding security.',
    },
    {
      name: 'MEV Resistance',
      description:
        'High-MEV environments on some PoS and VC chains encourage complex mempool games, auctions and extraction strategies.',
      ergoCell:
        'MEV-aware, eUTXO plus local ordering structure transactions as independent boxes, reducing many classic MEV vectors by design.',
    },
    {
      name: 'Fees & Finality',
      description:
        'Fees and confirmation times vary widely: from expensive L1s with long finality to ultra-fast but more experimental systems.',
      ergoCell:
        'Around ~$0.01 fees, ~2-minute blocks and stable PoW finality — targeting cheap, stable and fast for everyday usage.',
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
              Comparing consensus, launches, privacy and incentives across major chains.
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
                  <Table className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This matrix-style infographic,
                  <strong> “Blockchain Matrix: Where Ergo Actually Fits”</strong>, lines up major
                  chains — Bitcoin, Ethereum, Monero, Zcash, Cardano, Solana, a Typical VC Chain
                  and Ergo — as columns, and compares them across key rows like consensus, launch
                  model, accounting model, L1 privacy, storage rent, MEV resistance and typical
                  fees and finality.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The top rows show how different ecosystems made tradeoffs: from Bitcoin’s PoW and
                  fair launch to Ethereum’s PoS and ICO, to VC-heavy chains with insider
                  allocations. The middle rows highlight structural choices such as account vs UTXO
                  vs eUTXO, and whether privacy is available at the base layer or pushed to
                  side-chains and apps.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The bottom rows focus on sustainability and incentives: almost all chains let
                  state grow without explicit cleanup and operate in high-MEV environments. Ergo’s
                  column stands out with{' '}
                  <strong>storage rent on inactive boxes, MEV-aware eUTXO design and low, stable
                  fees</strong>. A banner titled{' '}
                  <span className="text-orange-400 font-semibold">“Why Ergo Stands Out”</span>{' '}
                  underlines that Ergo is the only chain in this matrix that combines PoW, fair
                  launch, eUTXO smart contracts, programmable privacy and protocol-level storage
                  rent — tying back to the slogan “Money Without Masters.”
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Dimensions compared */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Grid3X3 className="w-6 h-6 text-orange-400" />
                  Dimensions in the Matrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {dimensions.map((dimension) => (
                    <div
                      key={dimension.name}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <h3 className="text-white font-semibold">{dimension.name}</h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {dimension.description}
                      </p>
                      <div className="mt-1 rounded-xl border border-orange-500/40 bg-orange-500/10 p-3">
                        <p className="text-xs uppercase tracking-wide text-orange-300 mb-1">
                          Ergo in this row
                        </p>
                        <p className="text-sm text-orange-100 leading-relaxed">
                          {dimension.ergoCell}
                        </p>
                      </div>
                    </div>
                  ))}
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
                    'Ergo vs other blockchains',
                    'Fair launch vs ICO/VC models',
                    'eUTXO vs account model',
                    'MEV-resistant design on Ergo',
                    'Ergo storage rent and sustainability',
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



