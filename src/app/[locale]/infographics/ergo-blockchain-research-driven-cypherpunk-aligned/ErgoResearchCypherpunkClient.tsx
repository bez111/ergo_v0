'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Shield,
  Hexagon,
  Target,
  CheckCircle,
  Cpu,
  Infinity,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface ErgoResearchCypherpunkClientProps {
  infographic: InfographicMeta;
}

export function ErgoResearchCypherpunkClient({
  infographic,
}: ErgoResearchCypherpunkClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Ergo launched with no ICO, no premine and no VC carve-outs, distributing coins via Proof-of-Work from block one.',
    'The project was founded by ex-IOHK researchers and follows a Bitcoin-first ethos that extends UTXO security.',
    'Ergo’s culture emphasizes research-driven changes instead of hype cycles, aligning with cypherpunk values.',
    'eUTXO smart contracts upgrade Bitcoin’s model with deterministic, predictable execution and easier DeFi auditing.',
    'Sigma Protocols provide programmable privacy using built-in zero-knowledge proofs for payments, voting and DeFi.',
    'Autolykos PoW is ASIC-resistant, keeping mining accessible to commodity hardware and helping decentralization.',
    'NiPoPoWs enable non-interactive light clients that can verify the chain on phones and older laptops without full history.',
    'Storage rent tackles state bloat by charging tiny fees on long-inactive “dust” boxes after about four years, returning value to miners.',
    'Ergo is framed as infrastructure for people who value verifiable rules over hype, with privacy treated as a right.',
    'The ecosystem already includes DEXs, stablecoins, privacy tools, DAOs and NFT markets built on these foundations.',
  ];

  const readingOrder = [
    'Top-left logo: Ergo Σ hexagon symbol.',
    'Main title: Ergo Blockchain: Research-Driven & Cypherpunk-Aligned.',
    'Subtitle: Built for Sustainability, Privacy, and Verifiable Rules. A Fair-Launched Proof-of-Work Platform.',
    'Left hexagon heading: Origins & Fair Launch (The Past).',
    'Left hexagon bullets: NO ICO, NO Premine, NO VC Carve-outs (Fair distribution via PoW from block one). Founded by ex-IOHK researchers (Kushti & Catena). Philosophy: Bitcoin First ethos, extending UTXO security. Culture: Research-driven changes, not hype cycles. Bottom caption: Decentralized from the start.',
    'Center hexagon heading: Core Technologies (Ergo Today).',
    'Center hexagon subheading: eUTXO Smart Contracts. Text: Bitcoin’s model upgraded. Deterministic execution, predictable outcomes. Simpler auditing for DeFi (avoids global state issues).',
    'Center hexagon subheading: Sigma Protocols. Text: Programmable Privacy via Zero-Knowledge Proofs (built-in primitive). Enables confidential payments, voting, & DeFi positions with selective disclosure.',
    'Right hexagon heading: Long-Term Sustainability (Future-Proofing).',
    'Right hexagon entries: Autolykos PoW – ASIC-resistant mining. Keeps hashpower accessible to commodity hardware. NiPoPoWs – Non-Interactive Proofs for Light Clients. “Don’t Trust, Verify” on phones & old laptops without full history. Storage Rent – Solves State Bloat. Inactive “dust” boxes pay tiny fees after ~4 years, recycling value to miners.',
    'Bottom bar heading: Key Takeaways. Text: Ergo is infrastructure for those who value verifiable rules over hype. It combines Bitcoin-grade security with advanced smart contracts and privacy as a right, built on a foundation of open participation and long-term viability.',
    'Bottom-right icons and text: Live ecosystem – DEXs (Spectrum), Stablecoins (SigmaUSD), Privacy Tools (ErgoMixer), DAOs & NFT Markets.',
    'Bottom-left small text: Based on ergoblockchain.org.',
  ];

  const pillars = [
    {
      title: 'Origins & Fair Launch (The Past)',
      icon: Hexagon,
      items: [
        'No ICO, no premine, no VC carve-outs — distribution via PoW from block one.',
        'Founded by ex-IOHK researchers (Kushti & Catena) with a Bitcoin-first mindset.',
        'Extends UTXO security instead of abandoning it for novel, unproven models.',
        'Prioritizes research-driven changes rather than short-term hype cycles.',
        'Decentralized from the start: no foundation multisig controlling supply.',
      ],
    },
    {
      title: 'Core Technologies (Ergo Today)',
      icon: Cpu,
      items: [
        'eUTXO smart contracts: deterministic execution and predictable outcomes.',
        'Simpler DeFi auditing by avoiding a single mutable global account state.',
        'Sigma Protocols as built-in zero-knowledge primitives for programmable privacy.',
        'Confidential payments, voting and DeFi positions with selective disclosure.',
        'Bitcoin-grade security plus expressive contracts on a PoW base layer.',
      ],
    },
    {
      title: 'Long-Term Sustainability (Future-Proofing)',
      icon: Infinity,
      items: [
        'Autolykos PoW: ASIC-resistant, GPU-friendly mining to keep hashpower broad.',
        'NiPoPoWs: non-interactive proofs enabling “Don’t trust, verify” on phones.',
        'Light clients can check chain work without downloading full history.',
        'Storage rent: long-inactive “dust” boxes pay tiny fees after ~4 years.',
        'Recycling value to miners while keeping node requirements sustainable.',
      ],
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
              Built for sustainability, privacy and verifiable rules on a fair-launched Proof-of-Work
              platform.
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
                  <Shield className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled{' '}
                  <strong>“Ergo Blockchain: Research-Driven & Cypherpunk-Aligned”</strong>, tells
                  Ergo’s story across three time-oriented pillars: its fair-launch{' '}
                  <strong>origins</strong>, the <strong>core technologies</strong> it ships today and
                  the <strong>sustainability stack</strong> that keeps it future-proof.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The left hexagon, <strong>“Origins & Fair Launch (The Past)”</strong>, highlights
                  that Ergo launched with no ICO, no premine and no VC carve-outs, relying on PoW
                  from block one. It credits ex-IOHK researchers (Kushti & Catena), a{' '}
                  <strong>Bitcoin-first ethos</strong> that extends UTXO security and a culture of
                  research-driven changes rather than hype cycles — summarized as{' '}
                  <span className="text-orange-400 font-semibold">
                    “Decentralized from the start.”
                  </span>
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The center hexagon, <strong>“Core Technologies (Ergo Today)”</strong>, focuses on
                  eUTXO smart contracts and Sigma Protocols: deterministic, auditable contracts on a
                  UTXO foundation and built-in zero-knowledge proofs for programmable privacy. The
                  right hexagon, <strong>“Long-Term Sustainability (Future-Proofing)”</strong>,
                  brings together Autolykos PoW, NiPoPoWs and storage rent as a coherent stack that
                  keeps mining accessible, verification light and blockchain state under control.
                  The bottom takeaway bar frames Ergo as{' '}
                  <strong>infrastructure for people who value verifiable rules over hype</strong>,
                  with privacy treated as a right and a live ecosystem of DEXs, stablecoins, privacy
                  tools, DAOs and NFT markets.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Three pillars */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Hexagon className="w-6 h-6 text-orange-400" />
                  Past, Present & Future-Proofing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/40">
                          <pillar.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <h3 className="text-white font-semibold">{pillar.title}</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-neutral-200 leading-relaxed mt-1">
                        {pillar.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
                    'Ergo fair launch and origins',
                    'Research-driven development on Ergo',
                    'eUTXO smart contracts on Ergo',
                    'Sigma Protocols and programmable privacy',
                    'Autolykos, NiPoPoWs and storage rent',
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



