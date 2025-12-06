'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  HelpCircle,
  Layers,
  GitCompare,
  Image as ImageIcon,
  FileText,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { SeeAlsoData } from '@/lib/related-content';

interface SeeAlsoProps {
  data: SeeAlsoData;
  title?: string;
  className?: string;
  /** Which sections to show */
  show?: {
    glossary?: boolean;
    questions?: boolean;
    playbooks?: boolean;
    comparisons?: boolean;
    infographics?: boolean;
    blogPosts?: boolean;
  };
}

const sectionConfig = {
  glossary: {
    title: 'Related Terms',
    icon: Lightbulb,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
  questions: {
    title: 'Related Questions',
    icon: HelpCircle,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  playbooks: {
    title: 'Playbooks & Guides',
    icon: Layers,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
  comparisons: {
    title: 'Comparisons',
    icon: GitCompare,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  infographics: {
    title: 'Visual Guides',
    icon: ImageIcon,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
  blogPosts: {
    title: 'Articles',
    icon: FileText,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
  },
};

export function SeeAlso({
  data,
  title = 'See Also',
  className = '',
  show = {
    glossary: true,
    questions: true,
    playbooks: true,
    comparisons: true,
    infographics: true,
    blogPosts: true,
  },
}: SeeAlsoProps) {
  // Check if there's any content to show
  const hasContent =
    (show.glossary && data.glossaryTerms.length > 0) ||
    (show.questions && data.questions.length > 0) ||
    (show.playbooks && data.playbooks.length > 0) ||
    (show.comparisons && data.comparisons.length > 0) ||
    (show.infographics && data.infographics.length > 0) ||
    (show.blogPosts && data.blogPosts.length > 0);

  if (!hasContent) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`py-12 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-orange-400" />
          </span>
          {title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Glossary Terms */}
          {show.glossary && data.glossaryTerms.length > 0 && (
            <SeeAlsoSection
              type="glossary"
              items={data.glossaryTerms.map((term) => ({
                title: term.term,
                description: term.shortDefinition,
                href: `/learn/glossary/${term.slug}`,
                badge: term.category,
              }))}
            />
          )}

          {/* Questions */}
          {show.questions && data.questions.length > 0 && (
            <SeeAlsoSection
              type="questions"
              items={data.questions.map((q) => ({
                title: q.query,
                description: q.shortAnswer.slice(0, 100) + '...',
                href: `/questions/${q.slug}`,
                badge: q.category,
              }))}
            />
          )}

          {/* Playbooks */}
          {show.playbooks && data.playbooks.length > 0 && (
            <SeeAlsoSection
              type="playbooks"
              items={data.playbooks.map((p) => ({
                title: p.title,
                description: p.subtitle,
                href: `/playbooks/${p.slug}`,
              }))}
            />
          )}

          {/* Comparisons */}
          {show.comparisons && data.comparisons.length > 0 && (
            <SeeAlsoSection
              type="comparisons"
              items={data.comparisons.map((c) => ({
                title: `Ergo vs ${c.name}`,
                description: c.summary.subheadline.slice(0, 80) + '...',
                href: `/compare/ergo-vs-${c.slug}`,
              }))}
            />
          )}

          {/* Infographics */}
          {show.infographics && data.infographics.length > 0 && (
            <SeeAlsoSection
              type="infographics"
              items={data.infographics.map((i) => ({
                title: i.title,
                description: i.shortDescription,
                href: `/infographics/${i.slug}`,
                image: i.previewImageUrl,
              }))}
            />
          )}

          {/* Blog Posts */}
          {show.blogPosts && data.blogPosts.length > 0 && (
            <SeeAlsoSection
              type="blogPosts"
              items={data.blogPosts.map((p) => ({
                title: p.title,
                description: p.excerpt?.slice(0, 80) + '...',
                href: `/blog/${p.slug}`,
              }))}
            />
          )}
        </div>
      </div>
    </motion.section>
  );
}

interface SeeAlsoItem {
  title: string;
  description?: string;
  href: string;
  badge?: string;
  image?: string;
}

interface SeeAlsoSectionProps {
  type: keyof typeof sectionConfig;
  items: SeeAlsoItem[];
}

function SeeAlsoSection({ type, items }: SeeAlsoSectionProps) {
  const config = sectionConfig[type];
  const Icon = config.icon;

  return (
    <Card className="bg-black border border-white/10 rounded-2xl overflow-hidden">
      <div className={`px-4 py-3 ${config.bgColor} border-b ${config.borderColor}`}>
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${config.color}`} />
          <span className={`text-sm font-medium ${config.color}`}>{config.title}</span>
        </div>
      </div>
      <CardContent className="p-0">
        <ul className="divide-y divide-white/5">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="group flex items-start gap-3 p-4 hover:bg-white/5 transition-colors"
              >
                {item.image && (
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-800">
                    <picture>
                      <source 
                        srcSet={item.image.replace(/\.(png|jpg|jpeg)$/i, '.avif')} 
                        type="image/avif" 
                      />
                      <source 
                        srcSet={item.image.replace(/\.(png|jpg|jpeg)$/i, '.webp')} 
                        type="image/webp" 
                      />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 flex-shrink-0 mt-0.5 transition-colors" />
                  </div>
                  {item.badge && (
                    <Badge
                      variant="outline"
                      className="mt-1 text-[10px] border-white/10 text-neutral-400"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default SeeAlso;

