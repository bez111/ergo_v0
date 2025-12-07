'use client';

/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Clock,
  Shield,
  CheckCircle,
  Eye,
  Target,
  Sparkles,
  Scale,
  Banknote,
  Info,
  BookOpen,
  Layers,
  Code,
  Cpu,
  Lock,
  Zap,
  Users,
  Globe,
  Database,
  ShieldAlert,
  ZoomIn,
  Share2,
  Copy,
  Send,
  Download,
} from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { 
  InfographicMeta, 
  CATEGORY_LABELS, 
  LEVEL_LABELS,
} from '@/types/infographic';

interface UniversalInfographicClientProps {
  infographic: InfographicMeta;
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  CheckCircle,
  Eye,
  Target,
  Sparkles,
  Scale,
  Banknote,
  Info,
  BookOpen,
  Layers,
  Code,
  Cpu,
  Lock,
  Zap,
  Users,
  Globe,
  Database,
  ShieldAlert,
};

const getIcon = (iconName?: string) => {
  if (!iconName) return Shield;
  return iconMap[iconName] || Shield;
};

export function UniversalInfographicClient({ infographic }: UniversalInfographicClientProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    if (!shareUrl || typeof navigator === 'undefined') return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  const openSharePopup = (url: string) => {
    if (typeof window === 'undefined') return;
    const width = 600;
    const height = 400;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(
      url,
      'share',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
    );
  };

  // Get full image URL for sharing
  const getImageUrl = () => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}${infographic.fullImageUrl}`;
  };

  const handleDownload = async () => {
    const imageUrl = getImageUrl();
    if (!imageUrl) return;
    
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${infographic.slug}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      // Fallback: open in new tab
      window.open(imageUrl, '_blank');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const {
    title,
    shortDescription,
    subtitle,
    category,
    level,
    tags,
    fullImageUrl,
    imageAlt,
    publishDate,
    readingTimeMinutes,
    aboutContent,
    keyPoints,
    howToRead,
    relatedTopics,
    customSections,
    comparisonSystems,
  } = infographic;

  const displaySubtitle = subtitle || shortDescription;
  const hasDetailedContent = aboutContent || keyPoints || howToRead || relatedTopics || customSections || comparisonSystems;

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Infographics', href: '/infographics' },
              { name: title, href: `/infographics/${infographic.slug}` },
            ]}
            className="mb-8"
          />

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 border-b border-white/5 pb-6 mb-8"
          >
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {publishDate && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{formatDate(publishDate)}</span>
                </span>
              )}
              {readingTimeMinutes && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{readingTimeMinutes} min read</span>
                </span>
              )}
              {category && (
                <span className="inline-flex items-center gap-1.5">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  <span>{CATEGORY_LABELS[category] ?? category}</span>
                </span>
              )}
              {level && (
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{LEVEL_LABELS[level] ?? level}</span>
                </span>
              )}
            </div>

            {/* Title & subtitle */}
            <div className="space-y-2">
              <h1 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                {title}
              </h1>
              {displaySubtitle && (
                <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                  {displaySubtitle}
                </p>
              )}
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-orange-500/40 bg-orange-500/5 text-[10px] font-medium uppercase tracking-wide text-orange-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </motion.header>

          {/* Main infographic image */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div 
              className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-xl shadow-black/40 cursor-pointer group relative"
              onClick={() => setIsImageExpanded(true)}
            >
              <div className="relative w-full">
                {/* Using picture element for WebP/AVIF with PNG fallback */}
                <picture>
                  <source 
                    srcSet={fullImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.avif')} 
                    type="image/avif" 
                  />
                  <source 
                    srcSet={fullImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp')} 
                    type="image/webp" 
                  />
                  <img
                    src={fullImageUrl}
                    alt={imageAlt}
                    width={1600}
                    height={900}
                    loading="eager"
                    decoding="async"
                    className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ aspectRatio: '16/9' }}
                  />
                </picture>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center gap-2 text-white text-lg font-semibold">
                    <ZoomIn className="w-6 h-6" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Share bar - suppressHydrationWarning to handle client-only content */}
          <section className="mb-10" suppressHydrationWarning>
            {isMounted ? (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-neutral-400">
                  <span className="font-medium text-neutral-100">Share this infographic</span>
                  <span className="hidden sm:inline text-neutral-500"> — help others discover Ergo</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
                    onClick={() =>
                      openSharePopup(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title}\n${shareUrl}\n@BuildOnErgo $ERG`)}`
                      )
                    }
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    <span>X</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
                    onClick={() =>
                      openSharePopup(
                        `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
                      )
                    }
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Telegram</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
                    onClick={() => {
                      const imageUrl = getImageUrl();
                      openSharePopup(
                        `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(title)}`
                      );
                    }}
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Pinterest</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
                    onClick={handleDownload}
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-black/60 text-xs hover:bg-white/10 hover:border-orange-500/50"
                    onClick={handleCopyLink}
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy link'}</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-12" /> 
            )}
          </section>

          {/* Expanded image dialog */}
          <Dialog open={isImageExpanded} onOpenChange={setIsImageExpanded}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 bg-black/95 border-white/10">
              <DialogTitle className="sr-only">{title} - Full Size</DialogTitle>
              <div className="relative w-full h-full flex items-center justify-center">
                <picture>
                  <source 
                    srcSet={fullImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.avif')} 
                    type="image/avif" 
                  />
                  <source 
                    srcSet={fullImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp')} 
                    type="image/webp" 
                  />
                  <img
                    src={fullImageUrl}
                    alt={imageAlt}
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                </picture>
              </div>
            </DialogContent>
          </Dialog>

          {/* Content sections - only if detailed content exists */}
          {hasDetailedContent && (
            <div className="flex flex-col gap-6">
              
              {/* About section */}
              {aboutContent && aboutContent.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="border-white/10 bg-black/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                        <Shield className="h-5 w-5 text-orange-400" />
                        About This Infographic
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-neutral-300">
                      {aboutContent.map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">{paragraph}</p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Comparison Systems (for vs-style infographics) */}
              {comparisonSystems && comparisonSystems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <Card className="border-white/10 bg-black/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                        <Scale className="h-5 w-5 text-orange-400" />
                        Systems Compared
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        {comparisonSystems.map((system) => (
                          <div
                            key={system.title}
                            className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <h3 className="text-white font-semibold">{system.title}</h3>
                                <p className="text-xs text-neutral-400">{system.subtitle}</p>
                              </div>
                              {system.isHighlighted ? (
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
                              {system.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-2">
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
                </motion.div>
              )}

              {/* Custom sections */}
              {customSections && customSections.map((section, index) => {
                const IconComponent = getIcon(section.icon);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 + index * 0.05 }}
                  >
                    <Card className="border-white/10 bg-black/40">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                          <IconComponent className="h-5 w-5 text-orange-400" />
                          {section.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-neutral-300">
                        {Array.isArray(section.content) ? (
                          <ul className="space-y-2">
                            {section.content.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed">{section.content}</p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Key Points */}
              {keyPoints && keyPoints.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="border-white/10 bg-black/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        Key Points
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 shrink-0" />
                            <p className="text-neutral-300 leading-relaxed text-sm">{point}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* How to Read */}
              {howToRead && howToRead.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <Card className="border-white/10 bg-black/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                        <Eye className="h-5 w-5 text-orange-400" />
                        How to Read This Infographic
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {howToRead.map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-orange-400 font-mono text-sm mt-0.5 shrink-0">
                              {(index + 1).toString().padStart(2, '0')}.
                            </span>
                            <p className="text-neutral-300 text-sm leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Related Topics */}
              {relatedTopics && relatedTopics.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="border-white/10 bg-black/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                        <Target className="h-5 w-5 text-orange-400" />
                        Related Topics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {relatedTopics.map((topic) => (
                          <Badge 
                            key={topic} 
                            variant="outline" 
                            className="border-neutral-600 text-neutral-300"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          )}

          {/* Embed code section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 mb-12"
          >
            <EmbedCode infographic={infographic} />
          </motion.section>

          {/* Bottom CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-black/60 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Explore More Ergo Infographics
              </h2>
              <p className="text-neutral-300 mb-6">
                Discover visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and more.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
                asChild
              >
                <Link href="/infographics">
                  Browse All Infographics
                </Link>
              </Button>
            </div>
          </motion.section>

        </div>
      </div>
    </BackgroundWrapper>
  );
}

export default UniversalInfographicClient;

