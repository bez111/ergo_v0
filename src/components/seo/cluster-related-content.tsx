"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation";
import { 
  BookOpen, 
  FileText, 
  Layers, 
  Image as ImageIcon, 
  Lightbulb, 
  Code,
  GitCompare,
  HelpCircle,
  Users,
  Cpu,
  ArrowRight
} from "lucide-react";
import { getRelatedContent, getPillarForUrl, ClusterLink } from "@/data/topic-clusters";

interface Props {
  currentUrl: string;
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showPillarLink?: boolean;
}

const typeIcons: Record<string, React.ElementType> = {
  'pillar': BookOpen,
  'topic': Layers,
  'use-case': FileText,
  'playbook': BookOpen,
  'pattern': Code,
  'infographic': ImageIcon,
  'compare': GitCompare,
  'faq': HelpCircle,
  'glossary': Lightbulb,
  'persona': Users,
  'technology': Cpu
};

const typeLabels: Record<string, string> = {
  'pillar': 'Pillar',
  'topic': 'Topic Hub',
  'use-case': 'Use Case',
  'playbook': 'Playbook',
  'pattern': 'Pattern',
  'infographic': 'Infographic',
  'compare': 'Comparison',
  'faq': 'FAQ',
  'glossary': 'Glossary',
  'persona': 'Guide',
  'technology': 'Technology'
};

export function ClusterRelatedContent({ 
  currentUrl, 
  title = "Related Content",
  subtitle = "Explore more on this topic",
  maxItems = 6,
  showPillarLink = true
}: Props) {
  const relatedContent = getRelatedContent(currentUrl).slice(0, maxItems);
  const pillar = getPillarForUrl(currentUrl);
  
  if (relatedContent.length === 0) {
    return null;
  }

  // Separate pillar from other content
  const pillarLink = relatedContent.find(link => link.type === 'pillar' || link.url === pillar?.url);
  const otherContent = relatedContent.filter(link => link !== pillarLink);

  return (
    <section className="py-16 px-4" aria-labelledby="related-content-heading">
      <div className="max-w-6xl mx-auto">
        <h2 
          id="related-content-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
        >
          {title.split(' ').map((word, i) => 
            i === title.split(' ').length - 1 
              ? <span key={i} className="text-orange-400">{word}</span>
              : <span key={i}>{word} </span>
          )}
        </h2>
        <p className="text-xl text-center text-neutral-400 mb-12">
          {subtitle}
        </p>

        {/* Pillar Link - Featured */}
        {showPillarLink && pillarLink && (
          <div className="mb-8">
            <Link
              href={pillarLink.url}
              className="group block bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-3xl p-6 hover:border-orange-400/50 hover:bg-orange-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Layers className="w-7 h-7 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">
                      Main Topic Hub
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {pillarLink.title}
                  </h3>
                  {pillarLink.description && (
                    <p className="text-neutral-400 mt-1">{pillarLink.description}</p>
                  )}
                </div>
                <ArrowRight className="w-6 h-6 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        )}

        {/* Other Related Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherContent.map((link, index) => {
            const Icon = typeIcons[link.type] || FileText;
            const label = typeLabels[link.type] || 'Resource';
            
            return (
              <Link
                key={index}
                href={link.url}
                className="group bg-black/80 border border-white/10 rounded-2xl p-5 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      {label}
                    </span>
                    <h3 className="text-base font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                      {link.title}
                    </h3>
                    {link.description && (
                      <p className="text-sm text-neutral-400 mt-1 line-clamp-2">
                        {link.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Compact version for sidebars or smaller sections
export function ClusterRelatedCompact({ 
  currentUrl, 
  title = "Related",
  maxItems = 5
}: { currentUrl: string; title?: string; maxItems?: number }) {
  const relatedContent = getRelatedContent(currentUrl).slice(0, maxItems);
  
  if (relatedContent.length === 0) {
    return null;
  }

  return (
    <div className="bg-black/60 border border-white/10 rounded-2xl p-4">
      <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {relatedContent.map((link, index) => {
          const Icon = typeIcons[link.type] || FileText;
          
          return (
            <li key={index}>
              <Link
                href={link.url}
                className="flex items-center gap-2 text-sm text-neutral-300 hover:text-orange-400 transition-colors group"
              >
                <Icon className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors" />
                <span className="truncate">{link.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Breadcrumb-style pillar link
export function ClusterPillarBreadcrumb({ currentUrl }: { currentUrl: string }) {
  const pillar = getPillarForUrl(currentUrl);
  
  if (!pillar || pillar.url === currentUrl) {
    return null;
  }

  return (
    <div className="mb-6">
      <Link
        href={pillar.url}
        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 transition-colors"
      >
        <Layers className="w-4 h-4" />
        <span>Part of: <span className="font-medium">{pillar.title}</span></span>
      </Link>
    </div>
  );
}

