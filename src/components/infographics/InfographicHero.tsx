'use client';

import { useMemo } from 'react';
import { CalendarDays, Clock, Shield, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { InfographicMeta } from '@/types/infographic';
import { CATEGORY_LABELS, LEVEL_LABELS } from '@/types/infographic';

interface InfographicHeroProps {
  infographic: InfographicMeta;
  /**
   * Optional custom subtitle. If not provided, falls back to infographic.shortDescription.
   */
  subtitle?: string;
}

export function InfographicHero({ infographic, subtitle }: InfographicHeroProps) {
  const {
    title,
    shortDescription,
    category,
    level,
    publishDate,
    readingTimeMinutes,
    tags,
  } = infographic;

  const formattedDate = useMemo(() => {
    if (!publishDate) return null;
    const date = new Date(publishDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }, [publishDate]);

  const description = subtitle ?? shortDescription;

  return (
    <header className="flex flex-col gap-4 border-b border-white/5 pb-6">
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        {formattedDate && (
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{formattedDate}</span>
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
            <Shield className="h-3.5 w-3.5" />
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

      {/* Title + subtitle */}
      <div className="space-y-2">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            {description}
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
    </header>
  );
}


