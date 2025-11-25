'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Eye,
  Shield,
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

interface PrivacyButAuditableClientProps {
  infographic: InfographicMeta;
}

export function PrivacyButAuditableClient({ infographic }: PrivacyButAuditableClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const keyPoints = [
    'Mixers & tumblers provide optional, one-shot privacy only for funds routed through them, with very limited options for later disclosure.',
    'Classic privacy coins typically enforce privacy by default at L1, making most activity fully shielded and harder to audit.',
    'Ergo’s Sigma Protocols support optional, contract-level privacy on the same chain, so dApps can choose where to apply private logic.',
    'Programmable selective disclosure on Ergo allows proving balances, flows or contract conditions without revealing complete transaction history.',
    'Mixers have high-friction user experience, often involving external services and smart-contract or custody risks.',
    'Classic privacy coins require separate coins, wallets and liquidity rails, creating UX and integration friction.',
    'Ergo integrates privacy into the same wallets and DeFi stack as public transactions, reducing UX overhead.',
    'From a conceptual regulatory perspective, mixers and fully opaque privacy coins are often seen as high or very high risk.',
    'Sigma Protocols aim for a more balanced signal: strong individual privacy plus math-based proofs and selective disclosure when audits are needed.',
    'The overall message is that Ergo offers privacy for users who need it and verifiable proofs for parties who must verify activity.',
  ];

  const readingOrder = [
    'Main title: Privacy, But Auditable.',
    'Subtitle: Three ways to do on-chain privacy – and why Ergo chooses Sigma Protocols.',
    'Tab labels: Mixers & Tumblers; Classic Privacy Coins; Ergo + Sigma Protocols.',
    'Row heading: Privacy mode. Cells: Mixers & Tumblers – Optional, one-shot privacy. Only for funds routed through a mixer. Classic Privacy Coins – Privacy by default at L1 (ring signatures, zk). Most activity is fully shielded. Ergo + Sigma Protocols – Optional, contract-level privacy on the same chain. dApps choose where to apply Sigma-based privacy.',
    'Row heading: Selective disclosure (auditability). Cells: Mixers & Tumblers – Very limited. Once mixed, links are hard to prove even if users want to. Classic Privacy Coins – Some “view key” concepts, but structured, contract-level disclosure is narrow. Ergo + Sigma Protocols – Built for programmable selective disclosure: prove balances, flows, or conditions without revealing full history.',
    'Row heading: User experience. Cells: Mixers & Tumblers – High friction: extra steps, external services, smart-contract and custody risks. Classic Privacy Coins – Medium: separate coin, separate wallet, separate liquidity from main settlement rails. Ergo + Sigma Protocols – Integrated: same wallets, same DeFi stack. Privacy is part of the smart-contract layer.',
    'Row heading: Regulatory signal (conceptual). Cells: Mixers & Tumblers – Very high risk. Often flagged, blacklisted, or sanctioned as obfuscation tools. Classic Privacy Coins – High risk. Default opacity makes them harder to list and monitor. Ergo + Sigma Protocols – More balanced: individual privacy plus math-based audit proofs and selective disclosure when required.',
    'Footer text: Conceptual comparison, not legal advice. Actual regulation depends on jurisdiction and specific use cases.',
    'Bottom bar: Ergo: Sigma Protocols for people who need privacy — and proofs for those who need to verify.',
  ];

  const comparisonRows = [
    {
      heading: 'Privacy mode',
      mixers:
        'Optional, one-shot privacy. Only for funds explicitly routed through a mixer or tumbler.',
      privacyCoins:
        'Privacy by default at L1 (e.g., ring signatures, zk). Most on-chain activity is fully shielded.',
      ergo:
        'Optional, contract-level privacy on the same chain. dApps choose where to apply Sigma-based privacy.',
    },
    {
      heading: 'Selective disclosure (auditability)',
      mixers:
        'Very limited. Once mixed, links are hard to prove even if users want to cooperate with audits.',
      privacyCoins:
        'Some “view key” concepts, but structured, contract-level disclosure options are narrow.',
      ergo:
        'Programmable selective disclosure: prove balances, flows or contract conditions without revealing full history.',
    },
    {
      heading: 'User experience',
      mixers:
        'High friction: extra steps, external services, and smart-contract or custody risks for users.',
      privacyCoins:
        'Medium friction: separate coin, separate wallet, separate liquidity from main settlement rails.',
      ergo:
        'Integrated: same wallets and DeFi stack for public and private flows. Privacy is part of the smart-contract layer.',
    },
    {
      heading: 'Regulatory signal (conceptual)',
      mixers:
        'Very high risk. Often flagged, blacklisted, or sanctioned as pure obfuscation tools.',
      privacyCoins:
        'High risk. Default opacity makes assets harder for institutions to list, monitor and integrate.',
      ergo:
        'More balanced: strong individual privacy plus math-based audit proofs and selective disclosure when required.',
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
              Three ways to do on-chain privacy – and why Ergo chooses Sigma Protocols.
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
                  This infographic, titled <strong>“Privacy, But Auditable”</strong>, compares three
                  ways to do on-chain privacy: <strong>Mixers & Tumblers</strong>,{' '}
                  <strong>Classic Privacy Coins</strong>, and <strong>Ergo + Sigma Protocols</strong>.
                  A tab bar across the top frames them as peers, and a four-row comparison table
                  walks through privacy mode, selective disclosure, user experience and regulatory
                  signal.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Mixers and tumblers offer one-shot, optional privacy only for funds explicitly
                  routed through them, with very limited possibilities for later disclosure. Classic
                  privacy coins push privacy to the L1 by default, making most activity fully
                  shielded — powerful for privacy but challenging for auditability and integration.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Ergo’s <strong>Sigma Protocols</strong> are presented as a third path: optional,
                  contract-level privacy on the same chain, with{' '}
                  <strong>programmable selective disclosure</strong>. The closing message is that
                  Ergo aims to provide{' '}
                  <span className="text-orange-400 font-semibold">
                    privacy for people who need it — and proofs for those who need to verify
                  </span>
                  , balancing individual confidentiality with math-based auditability.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Comparison table */}
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
                  Mixers, Privacy Coins & Sigma Protocols Compared
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                    <thead className="text-neutral-300">
                      <tr>
                        <th className="py-2 pr-4 font-semibold text-neutral-400">Dimension</th>
                        <th className="py-2 px-3 font-semibold text-neutral-200">
                          Mixers & Tumblers
                        </th>
                        <th className="py-2 px-3 font-semibold text-neutral-200">
                          Classic Privacy Coins
                        </th>
                        <th className="py-2 px-3 font-semibold text-orange-300">
                          Ergo + Sigma Protocols
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
                            <p className="leading-relaxed">{row.mixers}</p>
                          </td>
                          <td className="py-3 px-3 text-neutral-200">
                            <p className="leading-relaxed">{row.privacyCoins}</p>
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
                  Conceptual comparison, not legal advice. Actual regulation depends on jurisdiction,
                  counterparties and concrete use cases.
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
                    'Sigma Protocols on Ergo',
                    'Zero-knowledge proofs and selective disclosure',
                    'Ergo privacy features',
                    'Mixers vs on-chain private smart contracts',
                    'Regulatory considerations for privacy tech',
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



