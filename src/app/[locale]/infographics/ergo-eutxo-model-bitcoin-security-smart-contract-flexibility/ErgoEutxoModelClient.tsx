'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Shield,
  Layers,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface ErgoEutxoModelClientProps {
  infographic: InfographicMeta;
}

export function ErgoEutxoModelClient({ infographic }: ErgoEutxoModelClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    "Bitcoin’s UTXO model provides simple, secure, deterministic value transfer where coins are spent whole and change is returned.",
    'Ergo extends UTXO into eUTXO, where boxes can hold ERG, tokens and data registers along with complex spending conditions.',
    'Programmable validators in Ergo use ErgoScript and Sigma Protocols, making validation depend on both state and transaction context.',
    'eUTXO enables determinism and predictability: execution cost is known upfront and transactions either fully succeed or fail.',
    'Parallelism and scalability are improved because transactions touching different boxes can be processed simultaneously.',
    'Off-chain logic and privacy are supported, as complex logic can be moved off-chain and Sigma Protocols enable privacy-preserving contracts.',
    'Compared with the account model, eUTXO offers localized state changes, high assurance and easier formal verification.',
    'The account model maintains a global state updated by transactions, with sequential execution, higher complexity and potential for state bloat.',
    'Ergo’s eUTXO model aims to combine Bitcoin-level security with flexible smart contracts.',
    'Overall, eUTXO provides a secure, scalable and powerful foundation for decentralized financial infrastructure on Ergo.',
  ];

  const readingOrder = [
    'Main title at the top: Ergo’s eUTXO Model: Bitcoin’s Security Meets Smart Contract Flexibility.',
    'Top section heading: Bitcoin’s UTXO (Unspent Transaction Output) Foundation. Text: Simple, secure value transfer. Coins are spent whole, change is returned. Deterministic.',
    'Middle section heading: Ergo’s eUTXO (Extended UTXO) Upgrade.',
    'Left middle panel: The “Box” Concept. Visual: ERG value, tokens and data registers inside a box. Text: More than just value. Boxes hold data and complex spending conditions (scripts).',
    'Right middle panel: Programmable Validators. Flow: Input Box (locked with script) → Transaction Data (context) → ErgoScript Validator (e.g., Sigma Protocols) → Output Box (new conditions) → Valid Transaction. Text: Scripts are flexible programs. Validation depends on current state and transaction context, not just signatures.',
    'Bottom large heading: Key Benefits of eUTXO.',
    'Bottom benefit panel 1: Determinism & Predictability. Text: Execution cost is known upfront. No gas fee surprises. Transactions either succeed or fail completely.',
    'Bottom benefit panel 2: Parallelism & Scalability. Text: Transactions processing different boxes can run simultaneously. Enhances network throughput.',
    'Bottom benefit panel 3: Off-Chain Logic & Privacy. Text: Complex logic can be moved off-chain. Sigma protocols enable privacy-preserving smart contracts.',
    'Bottom-right heading: eUTXO vs. Account Model (e.g., Ethereum).',
    'Bottom-right subpanel 1: eUTXO (Ergo). Text: State as a set of unspent outputs. Localized changes. High assurance, easier formal verification.',
    'Bottom-right subpanel 2: Account Model. Text: Global state updated by transactions. Sequential execution. Higher complexity, state bloat potential.',
    'Footer text: Ergo’s eUTXO: Combining the best of both worlds for a secure, scalable, and powerful decentralized financial infrastructure.',
    'Vertical side text on the right: Based on ergoblockchain.org.',
  ];

  const benefitPanels = [
    {
      title: 'Determinism & Predictability',
      summary: 'Execution cost known upfront; no gas fee surprises.',
      details:
        'In eUTXO, scripts are evaluated against a finite, local context. Transactions either fully succeed or fail, which makes costs and outcomes easier to reason about.',
    },
    {
      title: 'Parallelism & Scalability',
      summary: 'Independent boxes can be processed in parallel.',
      details:
        'Because state is a set of independent boxes, transactions that touch different boxes can be processed simultaneously, opening the door to better horizontal scaling.',
    },
    {
      title: 'Off-Chain Logic & Privacy',
      summary: 'Move complexity off-chain; keep sensitive data private.',
      details:
        'Complex logic can live off-chain while on-chain scripts only verify succinct conditions. Sigma Protocols allow privacy-preserving proofs instead of raw data.',
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
              How Ergo’s extended UTXO design combines Bitcoin-grade security with powerful smart
              contracts.
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

          {/* Main infographic */}
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
                  This infographic explains Ergo’s eUTXO model under the title{' '}
                  <strong>“Ergo’s eUTXO Model: Bitcoin’s Security Meets Smart Contract Flexibility.”</strong>{' '}
                  The top section, <strong>“Bitcoin’s UTXO Foundation”</strong>, illustrates simple value
                  transfer and highlights coins being spent whole with change returned, giving a simple,
                  secure and deterministic model.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The middle section, <strong>“Ergo’s eUTXO Upgrade”</strong>, introduces the Box concept and
                  programmable validators. Boxes can hold ERG, tokens and data registers locked by
                  ErgoScript, while validators use transaction context and Sigma Protocols to determine
                  whether spending conditions are met, not just raw signatures.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The bottom row showcases key benefits—determinism, parallelism, off-chain logic and
                  privacy—and contrasts eUTXO with the traditional account model. The footer summarises the
                  message: <span className="text-orange-400 font-semibold">
                    “Ergo’s eUTXO: Combining the best of both worlds for a secure, scalable, and powerful
                    decentralized financial infrastructure.”
                  </span>{' '}
                  A side caption credits the content as based on ergoblockchain.org.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Layers className="w-6 h-6 text-orange-400" />
                  Key Benefits of eUTXO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {benefitPanels.map((panel) => (
                    <div
                      key={panel.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <h3 className="text-white font-semibold">{panel.title}</h3>
                      <p className="text-xs text-neutral-400">{panel.summary}</p>
                      <p className="text-sm text-neutral-200 leading-relaxed">{panel.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Key points */}
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
                    'Ergo eUTXO overview',
                    'UTXO vs account model',
                    'ErgoScript and smart contracts',
                    'Sigma Protocols on Ergo',
                    'Scalability and formal verification in Ergo',
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


