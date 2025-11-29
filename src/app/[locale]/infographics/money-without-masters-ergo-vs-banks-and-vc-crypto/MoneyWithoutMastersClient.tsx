'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Scale, Banknote, Target, CheckCircle, Eye, Tag } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicHero } from '@/components/infographics/InfographicHero';
import { InfographicMeta } from '@/types/infographic';

interface MoneyWithoutMastersClientProps {
  infographic: InfographicMeta;
}

export function MoneyWithoutMastersClient({ infographic }: MoneyWithoutMastersClientProps) {
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
    'Traditional banking is centralized and permissioned, with account balances held by banks and subject to KYC, censorship, freezes and policy-driven money decisions.',
    'In VC / ICO crypto, large pre-mines and allocations give teams, foundations and VCs outsized control over supply and governance.',
    'Unlock charts and central choke points like foundations, multisigs and exchanges can turn users into exit liquidity and limit true decentralization.',
    'Ergo uses a fair-launched Proof-of-Work model with no ICO, no premine and no VC allocation.',
    'eUTXO smart contracts on Ergo provide deterministic, parallel and predictable execution for financial applications.',
    'Sigma Protocols enable programmable privacy, allowing privacy-preserving contracts without trusted third parties.',
    'Long-term sustainability is supported by Autolykos, Storage Rent and NiPoPoWs, keeping nodes accessible beyond just data centers.',
    'Ergo emphasizes a community-driven, open-source and research-first cypherpunk ethos.',
    'The infographic’s comparison table frames traditional banking users as customers, VC/ICO users as exit liquidity, and Ergo users as sovereigns if they hold their own keys.',
    'The core message is that money without masters is possible when control is pushed to users rather than states, banks or VC teams.',
  ];

  const readingOrder = [
    'Main title: Money Without Masters.',
    'Subtitle: Open, programmable, censorship-resistant finance. Built on Ergo.',
    'Left panel heading: Traditional Banking – Centralized, permissioned, surveilled.',
    'Left panel bullets: Account-based system: balances live on bank servers, not in your custody. KYC as gatekeeping: no papers, no access. Accounts can be denied or closed. Censorship & freezes: payments can be blocked, reversed, or delayed. Policy-driven money: inflation, capital controls, and bail-ins decided from above.',
    'Left panel footer: Master: State + banks.',
    'Middle panel heading: VC / ICO Crypto – New tech, same old masters.',
    'Middle panel bullets: Pre-mined & pre-allocated: large chunks of supply to teams, foundations, and VCs. Unlock charts: early insiders dump on the market over time. Governance theater: “community votes” with concentrated voting power. Central choke points: foundations, multisigs, and exchanges can stall upgrades or listings.',
    'Middle panel footer: Master: Teams, foundations, and VCs.',
    'Right panel heading: Ergo Blockchain – Money without masters.',
    'Right panel bullets: Fair-launched Proof-of-Work: no ICO, no premine, no VC allocation. eUTXO smart contracts: deterministic, parallel, predictable execution. Programmable privacy: Sigma Protocols enable privacy-preserving contracts. Long-term sustainability: Autolykos, Storage Rent, and NiPoPoWs keep nodes accessible. Community-driven: open-source, research-first, cypherpunk ethos.',
    'Right panel footer: Master: You — if you hold your own keys.',
    'Bottom section heading: Who Owns Your Money?',
    'Bottom table rows: Traditional Banking – Who holds real power? State, central banks, commercial banks. Your position: You are a customer. VC / ICO Crypto – Who holds real power? Teams, foundations, VCs, big exchanges. Your position: You are exit liquidity. Ergo (PoW + eUTXO) – Who holds real power? Open code + miners under consensus rules. Your position: You are the sovereign (if you hold your keys).',
    'Footer URL: ergoblockchain.org.',
  ];

  const systems = [
    {
      title: 'Traditional Banking',
      subtitle: 'Centralized, permissioned, surveilled.',
      type: 'Legacy finance',
      bullets: [
        'Balances live on bank servers, not directly in your custody.',
        'KYC as gatekeeping: without the right papers, accounts can be denied or closed.',
        'Payments can be censored, blocked, reversed or delayed.',
        'Policy-driven money: inflation, capital controls and bail-ins decided from above.',
        'Master: State + banks.',
      ],
    },
    {
      title: 'VC / ICO Crypto',
      subtitle: 'New tech, same old masters.',
      type: 'Speculative chains',
      bullets: [
        'Pre-mined and pre-allocated: large chunks of supply to teams, foundations and VCs.',
        'Unlock charts that let insiders dump on the market over time.',
        'Governance theater where “community votes” mask concentrated voting power.',
        'Central choke points (foundations, multisigs, exchanges) can stall upgrades or listings.',
        'Master: Teams, foundations and VCs.',
      ],
    },
    {
      title: 'Ergo Blockchain',
      subtitle: 'Money without masters.',
      type: 'Cypherpunk PoW + eUTXO',
      bullets: [
        'Fair-launched Proof-of-Work: no ICO, no premine, no VC allocation.',
        'eUTXO smart contracts with deterministic, parallel and predictable execution.',
        'Programmable privacy using Sigma Protocols — privacy-preserving contracts without trusted third parties.',
        'Protocol-level sustainability via Autolykos, Storage Rent and NiPoPoWs to keep nodes accessible.',
        'Master: You — if you hold your own keys.',
      ],
    },
  ];

  const comparisonRows = [
    {
      system: 'Traditional Banking',
      power: 'State, central banks, commercial banks',
      position: 'You are a customer.',
    },
    {
      system: 'VC / ICO Crypto',
      power: 'Teams, foundations, VCs, big exchanges',
      position: 'You are exit liquidity.',
    },
    {
      system: 'Ergo (PoW + eUTXO)',
      power: 'Open code + miners under consensus rules',
      position: 'You are the sovereign (if you hold your keys).',
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
            subtitle="Open, programmable, censorship-resistant finance. Built on Ergo."
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
                  <Shield className="w-6 h-6 text-orange-400" />
                  About This Infographic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300 leading-relaxed">
                  This infographic, titled <strong>“Money Without Masters”</strong>, compares three
                  financial systems side by side: traditional banking, VC / ICO-style crypto and the
                  Ergo blockchain. It asks a simple but uncomfortable question:{' '}
                  <strong>“Who actually owns your money?”</strong>
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  On the left, <strong>Traditional Banking</strong> is shown as a centralized,
                  permissioned and surveilled stack where balances live on bank servers, KYC acts as
                  gatekeeping and payments can be censored, frozen or reversed. In the middle,{' '}
                  <strong>VC / ICO Crypto</strong> highlights how pre-mines, unlock charts,
                  governance theater and centralized choke points often recreate the same power
                  dynamics with new branding.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  On the right, <strong>Ergo Blockchain – Money without masters</strong> presents an
                  alternative: fair-launched Proof-of-Work with no ICO, no premine and no VC
                  allocation; eUTXO smart contracts with deterministic execution; programmable
                  privacy via Sigma Protocols; and protocol-level sustainability through Autolykos,
                  Storage Rent and NiPoPoWs. A bottom table,
                  <span className="text-orange-400 font-semibold"> “Who Owns Your Money?”</span>,
                  reframes the user: from “customer” in banks and “exit liquidity” on VC chains to
                  <strong> “sovereign — if you hold your own keys”</strong> on Ergo.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Systems compared */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Scale className="w-6 h-6 text-orange-400" />
                  Systems Compared
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {systems.map((system) => (
                    <div
                      key={system.title}
                      className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-white font-semibold">{system.title}</h3>
                          <p className="text-xs text-neutral-400">{system.subtitle}</p>
                        </div>
                        {system.title === 'Ergo Blockchain' ? (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/40">
                            <Banknote className="w-5 h-5 text-orange-400" />
                          </div>
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20">
                            <Scale className="w-5 h-5 text-neutral-300" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wide">
                        {system.type}
                      </p>
                      <ul className="space-y-2 text-sm text-neutral-200 leading-relaxed">
                        {system.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                            <span>{bullet}</span>
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
                    'Ergo philosophy and ethos',
                    'Fair launch vs VC chains',
                    'eUTXO and financial sovereignty',
                    'Programmable privacy on Ergo',
                    'Cypherpunk narratives in crypto',
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



