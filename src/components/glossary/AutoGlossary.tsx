"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import React, { useMemo } from "react";
import { glossaryTerms, GlossaryTerm } from "@/data/glossary";
import { GlossaryLink } from "./GlossaryLink";

/**
 * Configuration for auto-glossary behavior
 */
interface AutoGlossaryConfig {
  /** Maximum number of terms to link per text block (default: 5) */
  maxLinks?: number;
  /** Only link first occurrence of each term (default: true) */
  firstOccurrenceOnly?: boolean;
  /** Minimum word length to consider for linking (default: 3) */
  minWordLength?: number;
  /** Terms to exclude from auto-linking */
  excludeTerms?: string[];
  /** GlossaryLink variant to use */
  variant?: "inline" | "highlight" | "subtle";
  /** Show tooltip on hover */
  showTooltip?: boolean;
}

/**
 * Build a map of term variations to their glossary entries
 * Includes: term name, slug, and common variations
 */
function buildTermMap(): Map<string, GlossaryTerm> {
  const map = new Map<string, GlossaryTerm>();
  
  for (const term of glossaryTerms) {
    // Add the main term (case-insensitive)
    map.set(term.term.toLowerCase(), term);
    
    // Add the slug
    map.set(term.slug.toLowerCase(), term);
    
    // Add common variations from keywords (first 3 most relevant)
    for (const keyword of term.keywords.slice(0, 3)) {
      const normalized = keyword.toLowerCase();
      // Only add if it's reasonably close to the term
      if (normalized.length >= 4 && !map.has(normalized)) {
        map.set(normalized, term);
      }
    }
  }
  
  return map;
}

// Pre-built term map for performance
const TERM_MAP = buildTermMap();

// Terms sorted by length (longest first) for proper matching
const SORTED_TERMS = Array.from(TERM_MAP.keys()).sort((a, b) => b.length - a.length);

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Build regex pattern for matching glossary terms
 */
function buildTermPattern(terms: string[]): RegExp {
  const patterns = terms.map((term) => escapeRegex(term));
  // Word boundary matching, case-insensitive
  return new RegExp(`\\b(${patterns.join("|")})\\b`, "gi");
}

/**
 * Parse text and return array of text/link segments
 */
interface TextSegment {
  type: "text" | "link";
  content: string;
  term?: GlossaryTerm;
}

export function parseTextForGlossaryTerms(
  text: string,
  config: AutoGlossaryConfig = {}
): TextSegment[] {
  const {
    maxLinks = 5,
    firstOccurrenceOnly = true,
    minWordLength = 3,
    excludeTerms = [],
  } = config;

  // Filter terms based on config
  const availableTerms = SORTED_TERMS.filter(
    (term) =>
      term.length >= minWordLength &&
      !excludeTerms.some((e) => e.toLowerCase() === term)
  );

  if (availableTerms.length === 0) {
    return [{ type: "text", content: text }];
  }

  const pattern = buildTermPattern(availableTerms);
  const segments: TextSegment[] = [];
  const linkedTerms = new Set<string>();
  let linkCount = 0;
  let lastIndex = 0;

  // Find all matches
  let match;
  while ((match = pattern.exec(text)) !== null) {
    const matchedText = match[0];
    const matchedLower = matchedText.toLowerCase();
    const term = TERM_MAP.get(matchedLower);

    // Skip if term not found or already linked (if firstOccurrenceOnly)
    if (!term) continue;
    if (firstOccurrenceOnly && linkedTerms.has(term.slug)) continue;
    if (linkCount >= maxLinks) continue;

    // Add text before match
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        content: text.slice(lastIndex, match.index),
      });
    }

    // Add link segment
    segments.push({
      type: "link",
      content: matchedText,
      term,
    });

    linkedTerms.add(term.slug);
    linkCount++;
    lastIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      type: "text",
      content: text.slice(lastIndex),
    });
  }

  return segments.length > 0 ? segments : [{ type: "text", content: text }];
}

/**
 * AutoGlossaryText - Automatically links glossary terms in text content
 * 
 * Usage:
 * <AutoGlossaryText>
 *   Ergo uses the eUTXO model with ErgoScript for smart contracts.
 * </AutoGlossaryText>
 */
interface AutoGlossaryTextProps extends AutoGlossaryConfig {
  children: string;
  /** Wrapper element type */
  as?: "p" | "span" | "div";
  /** Additional className */
  className?: string;
}

export function AutoGlossaryText({
  children,
  as: Component = "span",
  className = "",
  variant = "inline",
  showTooltip = true,
  ...config
}: AutoGlossaryTextProps) {
  const segments = useMemo(
    () => parseTextForGlossaryTerms(children, config),
    [children, config.maxLinks, config.firstOccurrenceOnly, config.minWordLength, config.excludeTerms?.join(",")]
  );

  return (
    <Component className={className}>
      {segments.map((segment, index) =>
        segment.type === "link" && segment.term ? (
          <GlossaryLink
            key={`${segment.term.slug}-${index}`}
            term={segment.term.slug}
            variant={variant}
            showTooltip={showTooltip}
          >
            {segment.content}
          </GlossaryLink>
        ) : (
          <React.Fragment key={index}>{segment.content}</React.Fragment>
        )
      )}
    </Component>
  );
}

/**
 * AutoGlossaryParagraph - Wrapper for paragraphs with auto-linking
 * 
 * Usage:
 * <AutoGlossaryParagraph>
 *   Ergo's eUTXO model provides deterministic execution...
 * </AutoGlossaryParagraph>
 */
export function AutoGlossaryParagraph({
  children,
  className = "",
  ...config
}: Omit<AutoGlossaryTextProps, "as">) {
  return (
    <AutoGlossaryText as="p" className={className} {...config}>
      {children}
    </AutoGlossaryText>
  );
}

/**
 * withAutoGlossary - HOC to wrap text content with auto-linking
 * 
 * Usage:
 * const EnhancedParagraph = withAutoGlossary('p');
 * <EnhancedParagraph>Text with eUTXO terms...</EnhancedParagraph>
 */
export function withAutoGlossary<P extends { children?: React.ReactNode; className?: string }>(
  WrappedComponent: React.ComponentType<P>,
  defaultConfig: AutoGlossaryConfig = {}
) {
  return function AutoGlossaryWrapper(props: P & AutoGlossaryConfig) {
    const { children, ...rest } = props;
    
    // Only process string children
    if (typeof children !== "string") {
      return <WrappedComponent {...(rest as P)}>{children}</WrappedComponent>;
    }

    const config = { ...defaultConfig, ...rest };
    const segments = parseTextForGlossaryTerms(children, config);

    return (
      <WrappedComponent {...(rest as P)}>
        {segments.map((segment, index) =>
          segment.type === "link" && segment.term ? (
            <GlossaryLink
              key={`${segment.term.slug}-${index}`}
              term={segment.term.slug}
              variant={config.variant || "inline"}
              showTooltip={config.showTooltip !== false}
            >
              {segment.content}
            </GlossaryLink>
          ) : (
            <React.Fragment key={index}>{segment.content}</React.Fragment>
          )
        )}
      </WrappedComponent>
    );
  };
}

/**
 * useAutoGlossary - Hook for processing text with glossary links
 * 
 * Usage:
 * const { segments, hasLinks } = useAutoGlossary("Text with eUTXO...");
 */
export function useAutoGlossary(text: string, config: AutoGlossaryConfig = {}) {
  const segments = useMemo(
    () => parseTextForGlossaryTerms(text, config),
    [text, config.maxLinks, config.firstOccurrenceOnly, config.minWordLength]
  );

  const hasLinks = segments.some((s) => s.type === "link");
  const linkedTerms = segments
    .filter((s) => s.type === "link" && s.term)
    .map((s) => s.term!);

  return { segments, hasLinks, linkedTerms };
}

/**
 * Get all glossary terms that appear in a text
 * Useful for generating "Terms used in this article" sections
 */
export function findGlossaryTermsInText(text: string): GlossaryTerm[] {
  const segments = parseTextForGlossaryTerms(text, {
    maxLinks: 100,
    firstOccurrenceOnly: true,
  });

  return segments
    .filter((s) => s.type === "link" && s.term)
    .map((s) => s.term!);
}

/**
 * Check if a specific term exists in the glossary
 */
export function isGlossaryTerm(text: string): boolean {
  return TERM_MAP.has(text.toLowerCase());
}

/**
 * Get glossary term by text (case-insensitive)
 */
export function getGlossaryTermByText(text: string): GlossaryTerm | undefined {
  return TERM_MAP.get(text.toLowerCase());
}

export default AutoGlossaryText;

