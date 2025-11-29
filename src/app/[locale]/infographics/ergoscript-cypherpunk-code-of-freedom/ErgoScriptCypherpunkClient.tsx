'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Tag, Eye, Shield, Zap, Layers, Target, CheckCircle, Code } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta } from '@/types/infographic';

interface ErgoScriptCypherpunkClientProps {
  infographic: InfographicMeta;
}

export function ErgoScriptCypherpunkClient({
  infographic,
}: ErgoScriptCypherpunkClientProps) {
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
    'ErgoScript is built on the eUTXO foundation, where outputs carry spending conditions, enabling stateless validation and fine-grained control.',
    'Determinism, security and flexibility are core design principles of ErgoScript, avoiding infinite loops while staying expressive.',
    'Sigma Protocols provide zero-knowledge capabilities that power zk-privacy for anonymous transactions and voting.',
    'ErgoScript’s privacy and security model turns it into a practical tool for cypherpunks who value self-sovereignty and censorship resistance.',
    'On top of ErgoScript, builders can launch decentralized exchanges (DEX), algorithmic stablecoins and DAOs.',
    'These components together make ErgoScript a “weapon of decentralization” on the Ergo blockchain.',
  ];

  const readingOrder = [
    'Main title at the top: ErgoScript: The Cypherpunk Code of Freedom.',
    'First panel heading: eUTXO Foundation. Text: Not just balance, but spending conditions. Stateless validation. Control over each output.',
    'Second panel heading: Design Principles. Bullets: Determinism: Predictability. Security: No infinite loops. Flexibility: Powerful contract language.',
    'Third panel heading: Sigma Protocols: ZK-Privacy. Text: Zero-knowledge proofs. Anonymous transactions, voting. Your data — your secret.',
    'Fourth panel heading: Weapon of Decentralization. Bullets: DEX: Trustless trading. Stablecoins: Algorithmic stability. DAO: Transparent governance.',
    'Footer text: Based on ergoblockchain.org.',
  ];

  const panels = [
    {
      title: 'eUTXO Foundation',
      icon: Layers,
      summary: 'Not just balances, but spending conditions.',
      details:
        'ErgoScript is built on the extended UTXO model. Each output carries explicit spending conditions, enabling stateless validation and fine-grained control over how value moves.',
    },
    {
      title: 'Design Principles',
      icon: Code,
      summary: 'Determinism, security, flexibility.',
      details:
        'Determinism keeps contracts predictable. Security rules out infinite loops. Flexibility comes from a powerful, expressive language designed for serious financial logic.',
    },
    {
      title: 'Sigma Protocols: ZK-Privacy',
      icon: Shield,
      summary: 'Zero-knowledge proofs for cypherpunk privacy.',
      details:
        'Sigma Protocols bring efficient zero-knowledge proofs to ErgoScript, enabling anonymous transactions and voting while keeping user data off the public graph.',
    },
    {
      title: 'Weapon of Decentralization',
      icon: Zap,
      summary: 'DEX, stablecoins, DAOs and beyond.',
      details:
        'On this foundation, builders can launch trustless DEXes, algorithmic stablecoins and DAOs, treating ErgoScript as a practical cypherpunk tool for deep decentralization.',
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
            subtitle="How eUTXO, strict design principles and Sigma Protocols turn ErgoScript into a weapon of decentralization."
          />

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
                  This infographic presents ErgoScript as{' '}
                  <strong>“The Cypherpunk Code of Freedom.”</strong> The first panel,
                  <strong> “eUTXO Foundation”</strong>, explains that ErgoScript is built on the extended
                  UTXO model: not just balances, but explicit spending conditions for each output, with
                  stateless validation and fine-grained control over every path value can take.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The <strong>“Design Principles”</strong> panel highlights three core properties:
                  Determinism for predictability, Security with no infinite loops, and Flexibility via a
                  powerful contract language. Together they create a scripting environment that is both safe
                  and expressive for serious financial applications.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The <strong>“Sigma Protocols: ZK-Privacy”</strong> panel focuses on privacy. It shows how
                  ErgoScript leverages zero-knowledge proofs and Sigma Protocols to enable anonymous
                  transactions and voting while guarding user data. Finally, the{' '}
                  <strong>“Weapon of Decentralization”</strong> panel illustrates what this stack enables:
                  DEXes for trustless trading, stablecoins for algorithmic stability and DAOs for transparent
                  governance. A footer credits the material as based on ergoblockchain.org, framing
                  ErgoScript as a cypherpunk-oriented language for privacy, security and decentralization.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Panels */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Code className="w-6 h-6 text-orange-400" />
                  ErgoScript Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {panels.map((panel) => (
                    <div
                      key={panel.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/40">
                          <panel.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{panel.title}</h3>
                          <p className="text-xs text-neutral-400">{panel.summary}</p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-200 leading-relaxed">{panel.details}</p>
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
                    'ErgoScript overview',
                    'eUTXO and smart contracts',
                    'Sigma Protocols and ZK proofs',
                    'Ergo DEX and DeFi',
                    'DAOs on Ergo',
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


