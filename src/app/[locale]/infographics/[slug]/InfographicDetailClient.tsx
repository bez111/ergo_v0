'use client';

/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */

import React from 'react';
import { useRouter } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Eye } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EmbedCode } from '@/components/infographics/EmbedCode';
import { InfographicMeta, CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface InfographicDetailClientProps {
  infographic: InfographicMeta;
}

export function InfographicDetailClient({ infographic }: InfographicDetailClientProps) {
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
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              className="text-neutral-400 hover:text-white"
              onClick={handleBackClick}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Infographics
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-orange-400/20 text-orange-400 border-orange-400/30">
                {CATEGORY_LABELS[infographic.category]}
              </Badge>
              <Badge variant="outline" className="border-white/20 text-white">
                {LEVEL_LABELS[infographic.level]}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {infographic.title}
            </h1>
            
            <p className="text-xl text-neutral-300 mb-6">
              {infographic.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Published {formatDate(infographic.publishDate)}
              </div>
              {infographic.readingTimeMinutes && (
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {infographic.readingTimeMinutes} min read
                </div>
              )}
            </div>
          </motion.header>

          {/* Main infographic image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-black/60 border border-white/10 rounded-2xl p-8">
              <picture>
                <source 
                  srcSet={infographic.fullImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.avif')} 
                  type="image/avif" 
                />
                <source 
                  srcSet={infographic.fullImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp')} 
                  type="image/webp" 
                />
                <img
                  src={infographic.fullImageUrl}
                  alt={infographic.imageAlt}
                  className="w-full h-auto rounded-lg"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </motion.div>

          {/* Tags */}
          {infographic.tags && infographic.tags.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {infographic.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-white/20 text-neutral-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.section>
          )}

          {/* Embed Code Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <EmbedCode infographic={infographic} />
          </motion.section>

          {/* Related infographics CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
                onClick={handleBackClick}
              >
                Browse All Infographics
              </Button>
            </div>
          </motion.section>

        </div>
      </div>
    </BackgroundWrapper>
  );
}
