'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Table, Target, CheckCircle } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta } from '@/types/infographic';

interface StorageRentVsStateBloatClientProps {
  infographic: InfographicMeta;
}

export function StorageRentVsStateBloatClient({
  infographic,
}: StorageRentVsStateBloatClientProps) {
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
  
  const keyPoints = [
    'Typical L1 blockchains without storage rent allow dead UTXOs and dust outputs to remain in the state forever, causing unbounded growth.',
    'As addresses are abandoned, full node size grows, raising hardware and bandwidth requirements and making long-term sustainability unclear.',
    'Once block rewards diminish on a rent-less L1, miners depend mostly on transaction fees, which may or may not be sufficient.',
    'Ergo introduces storage rent: UTXO boxes that remain inactive for about four years start paying a small per-byte fee in ERG.',
    'If an inactive box cannot pay storage rent, miners can reclaim and recycle its value, cleaning out dead UTXOs over time.',
    'Ergo miners receive both transaction fees and storage-rent income, even after block rewards decline, creating a protocol-level security budget.',
    'Storage rent allows Ergo to keep state size controlled and node requirements more predictable, improving long-term accessibility for full nodes.',
    'Dead coins and dust on Ergo do not accumulate indefinitely; they gradually get reclaimed unless actively managed by users.',
    'The model is intended to impact only long-inactive boxes, leaving active users largely unaffected by storage charges.',
    'The core message is that Ergo’s UTXO set doesn’t just grow—it renews itself through protocol-level incentives and cleanup.',
  ];

  const readingOrder = [
    'Main title: Storage Rent vs State Bloat.',
    'Subtitle: How Ergo keeps its state lean and miners paid in the long run.',
    'Left panel heading: Typical L1 without storage rent.',
    'Left panel chart label: State size vs Time (monotonically rising curve).',
    'Left panel bullets: Dead UTXOs and dust outputs stay forever in the state. Full node size grows without limit as more and more addresses are abandoned. After block rewards end, miners mostly rely on transaction fees only.',
    'Left panel result text: Result: growing state bloat, rising node requirements, long-term sustainability unclear.',
    'Right panel heading: Ergo with storage rent.',
    'Right panel chart labels: State size vs Time with periodic storage rent sweeps; Dust UTXO count before vs after rent.',
    'Right panel bullets: Inactive boxes (UTXOs) after ~4 years start paying a small per-byte fee in ERG. If a box cannot pay, miners can recycle its value – dead UTXOs are cleaned over time. Miners earn both transaction fees and storage rent, even after block rewards decline.',
    'Right panel result text: Result: controlled state size, predictable node requirements, and a protocol level security budget.',
    'Middle strip heading: Key Properties: Without Rent vs Ergo.',
    'Table row 1 – Dead UTXOs & dust: Without storage rent (typical L1) – Accumulate forever. Forgotten coins and dust outputs stay in the state indefinitely. Ergo with storage rent – Gradually cleaned out as storage rent is charged on long-inactive boxes.',
    'Table row 2 – Miner income after main issuance: Without storage rent – Almost entirely from transaction fees once block rewards taper off. Ergo with storage rent – From transaction fees plus ongoing storage rent and reclaimed inactive boxes.',
    'Table row 3 – Long-term state sustainability: Without storage rent – Uncertain. State bloat pushes node hardware and bandwidth requirements up over time. Ergo with storage rent – Planned. Storage rent keeps the state lean and helps full nodes stay affordable for the long run.',
    'Footnote: Storage rent on Ergo is only applied to boxes that have been untouched for a long period (~4 years). Active users are not constantly charged.',
    'Bottom banner: Ergo: a UTXO set that doesn’t just grow – it renews itself.',
    'Footer credit: Based on ergoblockchain.org.',
  ];

  const comparisonRows = [
    {
      heading: 'Dead UTXOs & dust',
      withoutRent:
        'Accumulate forever. Forgotten coins and dust outputs stay in the state indefinitely.',
      ergo:
        'Gradually cleaned out as storage rent is charged on long-inactive boxes.',
    },
    {
      heading: 'Miner income after main issuance',
      withoutRent:
        'Almost entirely from transaction fees once block rewards taper off.',
      ergo:
        'From transaction fees plus ongoing storage rent and value reclaimed from inactive boxes.',
    },
    {
      heading: 'Long-term state sustainability',
      withoutRent:
        'Uncertain. State bloat pushes node hardware and bandwidth requirements up over time.',
      ergo:
        'Planned. Storage rent keeps the state lean and helps full nodes remain affordable in the long run.',
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

          {/* Header (shared hero layout) */}
          <InfographicHero
            infographic={infographic}
            subtitle="How Ergo keeps its state lean and miners paid in the long run."
          />

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
                  <Database className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled <strong>“Storage Rent vs State Bloat”</strong>, explains
                  how Ergo uses storage rent to{' '}
                  <strong>control state growth and fund miners long-term</strong>. The left panel,
                  “Typical L1 without storage rent”, shows state size rising monotonically over
                  time: dead UTXOs and dust stay forever, full node size grows without limit and
                  miners eventually rely almost entirely on transaction fees.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The right panel, “Ergo with storage rent”, instead shows a saw-tooth style chart
                  where the state is periodically reduced during storage-rent sweeps, plus a dust
                  UTXO count before/after. In Ergo, boxes (UTXOs) that remain inactive for roughly
                  four years start paying a small per-byte fee in ERG; if they cannot pay, miners
                  can recycle their value and clean out dead outputs.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  A comparison strip, <strong>“Key Properties: Without Rent vs Ergo”</strong>,
                  summarises differences in dead UTXOs, miner income after issuance and long-term
                  state sustainability. A footnote notes that rent only targets{' '}
                  <strong>long-inactive boxes</strong>, so active users are not constantly charged.
                  The closing slogan reads:{' '}
                  <span className="text-orange-400 font-semibold">
                    “Ergo: a UTXO set that doesn’t just grow – it renews itself.”
                  </span>
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key Properties comparison */}
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
                  Key Properties: Without Rent vs Ergo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                    <thead className="text-neutral-300">
                      <tr>
                        <th className="py-2 pr-4 font-semibold text-neutral-400">Aspect</th>
                        <th className="py-2 px-3 font-semibold text-neutral-200">
                          Without Storage Rent (Typical L1)
                        </th>
                        <th className="py-2 px-3 font-semibold text-orange-300">
                          Ergo with Storage Rent
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.heading} className="align-top">
                          <td className="py-3 pr-4 text-neutral-200">
                            <div className="font-semibold text-white">{row.heading}</div>
                          </td>
                          <td className="py-3 px-3 text-neutral-200">
                            <p className="leading-relaxed">{row.withoutRent}</p>
                          </td>
                          <td className="py-3 px-3">
                            <p className="leading-relaxed text-orange-100">{row.ergo}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-neutral-500">
                  Storage rent on Ergo applies only to boxes untouched for a long period (~4 years),
                  so normal, active users are not constantly charged for storage.
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
                    'Ergo storage rent design',
                    'UTXO vs account model state growth',
                    'Miner incentives after block rewards',
                    'Full node affordability and decentralization',
                    'Long-term blockchain sustainability',
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



