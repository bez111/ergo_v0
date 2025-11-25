'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Users,
  Code,
  Shield,
  Zap,
  Target,
  CheckCircle,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface WhoActuallyNeedsErgoClientProps {
  infographic: InfographicMeta;
}

export function WhoActuallyNeedsErgoClient({ infographic }: WhoActuallyNeedsErgoClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Ergo serves real users, not just speculators or governance-token holders.',
    'Builders and developers want a formally modeled stack with eUTXO and ZK, without governance-token drama.',
    'Miners and PoW maxis look for honest Proof-of-Work with no premine, no VC and ASIC resistance.',
    'Privacy-focused users need a blend of auditability and privacy without hacks, wrappers or trusted middlemen.',
    'Cypherpunk OGs want a chain they are not ashamed to show people who care about the original crypto ethos.',
    'Ergo is positioned at the overlap of miners, builders, privacy users and cypherpunks.',
  ];

  const readingOrder = [
    'Title at the top: Who Actually Needs Ergo?',
    'Subtitle below the title: Real people behind the tech: builders, miners, privacy users and cypherpunks.',
    'Top-left persona: Builder / Dev. Quote: “I want a formally modeled stack, eUTXO, and ZK — without the governance-token circus.”',
    'Top-right persona: Miner / PoW Maxi. Quote: “I want honest PoW with no premine, no VC, and an ASIC-resistant algorithm.”',
    'Bottom-left persona: Privacy-Focused User. Quote: “I need a mix of auditability and privacy — without hacks, wrappers, or trusted middlemen.”',
    'Bottom-right persona: Cypherpunk OG. Quote: “I want a chain I\'m not ashamed to show people who care about the original crypto ethos.”',
    'Center graphic: glowing Σ symbol representing Ergo, wired into a digital circuit background.',
    'Footer text: “Ergo: where miners, builders, privacy users, and cypherpunks actually overlap.”',
    'URL at the bottom: ergoblockchain.org.',
  ];

  const personas = [
    {
      title: 'Builder / Dev',
      icon: Code,
      quote:
        '“I want a formally modeled stack, eUTXO, and ZK — without the governance-token circus.”',
      focus:
        'Cares about predictable smart contracts, serious cryptography and infrastructure over hype.',
    },
    {
      title: 'Miner / PoW Maxi',
      icon: Zap,
      quote:
        '“I want honest PoW with no premine, no VC, and an ASIC-resistant algorithm.”',
      focus:
        'Wants fair distribution, GPU-friendly mining and a chain where hashpower—not venture capital—matters.',
    },
    {
      title: 'Privacy-Focused User',
      icon: Shield,
      quote:
        '“I need a mix of auditability and privacy — without hacks, wrappers, or trusted middlemen.”',
      focus:
        'Looks for programmable privacy with selective disclosure, not opaque black boxes.',
    },
    {
      title: 'Cypherpunk OG',
      icon: Users,
      quote:
        '“I want a chain I’m not ashamed to show people who care about the original crypto ethos.”',
      focus:
        'Values censorship-resistance, fair launch and a culture that still remembers why crypto exists.',
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
              Real people behind the tech: builders, miners, privacy users and cypherpunks.
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
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30" variant="secondary">
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
                  <Users className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic answers a simple question: <strong>“Who actually needs Ergo?”</strong> In the
                  center sits the glowing Ergo Σ symbol, surrounded by four personas that capture the real users
                  behind the protocol: builders and developers, PoW miners, privacy-focused users and cypherpunk OGs.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Each quadrant gives voice to a different motivation. The Builder / Dev wants a formally modeled
                  stack with eUTXO and ZK, without governance-token circus. The Miner / PoW Maxi looks for honest PoW
                  with no premine, no VC and ASIC resistance. The Privacy-Focused User needs a mix of auditability and
                  privacy without hacks, wrappers or trusted middlemen. The Cypherpunk OG wants a chain they are not
                  ashamed to show people who still care about the original crypto ethos.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The neon, cyberpunk circuit-board style underlines that Ergo is <strong>serious infrastructure</strong>,
                  not hypeware. A footer caption ties everything together:{" "}
                  <span className="text-orange-400 font-semibold">
                    “Ergo: where miners, builders, privacy users, and cypherpunks actually overlap.”
                  </span>{' '}
                  The message is that Ergo exists for people who need unstoppable, programmable money — not just another
                  governance token.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Personas */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-400" />
                  Who This Is For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {personas.map((persona) => (
                    <div key={persona.title} className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/40">
                          <persona.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{persona.title}</h3>
                          <p className="text-xs text-neutral-400">{persona.focus}</p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-200 italic border-l-2 border-orange-500/60 pl-3">
                        {persona.quote}
                      </p>
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
                  Key Takeaways
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

          {/* Reading Order */}
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

          {/* Related Topics */}
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
                    'Ergo use cases',
                    'Ergo for developers',
                    'Ergo mining',
                    'Ergo privacy features',
                    'Cypherpunk ethos',
                  ].map((topic) => (
                    <Badge key={topic} variant="outline" className="border-neutral-600 text-neutral-300">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Embed Code */}
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


