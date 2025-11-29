'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

// Mapping of topic keywords to internal links
const topicLinkMap: Record<string, { href: string; label: string }> = {
  // Glossary terms
  'eutxo': { href: '/learn/glossary/eutxo', label: 'eUTXO Model' },
  'utxo': { href: '/learn/glossary/eutxo', label: 'eUTXO Model' },
  'nipopows': { href: '/learn/glossary/nipopows', label: 'NiPoPoWs' },
  'sigma protocols': { href: '/learn/glossary/sigma-protocols', label: 'Sigma Protocols' },
  'sigma-protocols': { href: '/learn/glossary/sigma-protocols', label: 'Sigma Protocols' },
  'storage rent': { href: '/learn/glossary/storage-rent', label: 'Storage Rent' },
  'autolykos': { href: '/learn/glossary/autolykos', label: 'Autolykos' },
  'oracle pools': { href: '/learn/glossary/oracle-pools', label: 'Oracle Pools' },
  'ergoscript': { href: '/learn/glossary/ergoscript', label: 'ErgoScript' },
  'ergo script': { href: '/learn/glossary/ergoscript', label: 'ErgoScript' },
  'boxes': { href: '/learn/glossary/boxes', label: 'Boxes' },
  'sigmausd': { href: '/learn/glossary/sigmausd', label: 'SigmaUSD' },
  'fair launch': { href: '/learn/glossary/fair-launch', label: 'Fair Launch' },
  'proof-of-work': { href: '/learn/glossary/proof-of-work', label: 'Proof-of-Work' },
  'pow': { href: '/learn/glossary/proof-of-work', label: 'Proof-of-Work' },
  'proof-of-stake': { href: '/learn/glossary/proof-of-stake', label: 'Proof-of-Stake' },
  'pos': { href: '/learn/glossary/proof-of-stake', label: 'Proof-of-Stake' },
  'mev': { href: '/learn/glossary/mev-resistance', label: 'MEV Resistance' },
  'native tokens': { href: '/learn/glossary/native-tokens', label: 'Native Tokens' },
  'light clients': { href: '/learn/glossary/light-clients', label: 'Light Clients' },
  'defi': { href: '/learn/glossary/defi', label: 'DeFi' },
  'daos': { href: '/learn/glossary/daos', label: 'DAOs' },
  'bridges': { href: '/learn/glossary/bridges', label: 'Bridges' },
  'stablecoins': { href: '/learn/glossary/stablecoins', label: 'Stablecoins' },
  'nfts': { href: '/learn/glossary/nfts', label: 'NFTs' },
  'cbdc': { href: '/learn/glossary/cbdc', label: 'CBDC' },
  'privacy': { href: '/learn/glossary/privacy-features', label: 'Privacy Features' },
  'emission': { href: '/learn/glossary/emission-schedule', label: 'Emission Schedule' },
  'subblocks': { href: '/learn/glossary/subblocks', label: 'Subblocks' },
  'velvet forks': { href: '/learn/glossary/velvet-forks', label: 'Velvet Forks' },
  'babel fees': { href: '/learn/glossary/babel-fees', label: 'Babel Fees' },
  'ergomixer': { href: '/learn/glossary/ergomixer', label: 'ErgoMixer' },
  
  // Technology pages
  'ergo eutxo': { href: '/technology/eutxo-model', label: 'eUTXO Model' },
  'eutxo model': { href: '/technology/eutxo-model', label: 'eUTXO Model' },
  'ergo privacy': { href: '/technology/privacy-features', label: 'Privacy Features' },
  'ergo mining': { href: '/technology/secure-pow', label: 'Secure PoW' },
  'ergo nipopows': { href: '/technology/nipopows', label: 'NiPoPoWs' },
  'ergo storage rent': { href: '/technology/storage-rent', label: 'Storage Rent' },
  'ergo oracle': { href: '/technology/oracle-pools', label: 'Oracle Pools' },
  
  // Playbooks
  'build defi': { href: '/playbooks/build-defi-on-ergo', label: 'Build DeFi on Ergo' },
  'financial freedom': { href: '/playbooks/escape-financial-repression', label: 'Financial Freedom Playbook' },
  'mining guide': { href: '/playbooks/start-mining-ergo', label: 'Mining Playbook' },
  'portfolio': { href: '/playbooks/add-ergo-to-portfolio', label: 'Investment Playbook' },
  
  // Blog articles
  'ergo manifesto': { href: '/blog/ergo-manifesto', label: 'Ergo Manifesto' },
  'ergo in 5 minutes': { href: '/blog/ergo-in-5-minutes', label: 'Ergo in 5 Minutes' },
  
  // Compare pages
  'vc chains': { href: '/compare/ergo-vs-vc-chain', label: 'Ergo vs VC Chains' },
  'vc chain': { href: '/compare/ergo-vs-vc-chain', label: 'Ergo vs VC Chains' },
  'vs bitcoin': { href: '/compare/ergo-vs-bitcoin', label: 'Ergo vs Bitcoin' },
  'vs ethereum': { href: '/compare/ergo-vs-ethereum', label: 'Ergo vs Ethereum' },
  'vs monero': { href: '/compare/ergo-vs-monero', label: 'Ergo vs Monero' },
};

// Find the best matching link for a topic
function findTopicLink(topic: string): { href: string; label: string } | null {
  const normalizedTopic = topic.toLowerCase();
  
  // Direct match
  if (topicLinkMap[normalizedTopic]) {
    return topicLinkMap[normalizedTopic];
  }
  
  // Partial match - find if any key is contained in the topic
  for (const [key, value] of Object.entries(topicLinkMap)) {
    if (normalizedTopic.includes(key) || key.includes(normalizedTopic)) {
      return value;
    }
  }
  
  return null;
}

interface RelatedTopicsLinksProps {
  topics: string[];
  utmSource?: string;
}

export function RelatedTopicsLinks({ topics, utmSource = 'infographic' }: RelatedTopicsLinksProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => {
        const link = findTopicLink(topic);
        
        if (link) {
          const href = `${link.href}?utm_source=${utmSource}&utm_medium=related_topics&utm_campaign=internal_linking`;
          return (
            <Link key={topic} href={href}>
              <Badge 
                variant="outline" 
                className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400/50 transition-colors cursor-pointer"
              >
                {topic}
              </Badge>
            </Link>
          );
        }
        
        // No link found - render as plain badge
        return (
          <Badge 
            key={topic} 
            variant="outline" 
            className="border-neutral-600 text-neutral-300"
          >
            {topic}
          </Badge>
        );
      })}
    </div>
  );
}

