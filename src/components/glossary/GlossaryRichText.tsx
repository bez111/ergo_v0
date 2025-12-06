"use client";
/* eslint-disable react-compiler/react-compiler */

import React, { isValidElement, cloneElement, useState, useEffect, useRef } from "react";
import { parseTextForGlossaryTerms } from "./AutoGlossary";
import { GlossaryLink } from "./GlossaryLink";

interface GlossaryRichTextProps {
  children: React.ReactNode;
  /** Maximum links per text node */
  maxLinksPerNode?: number;
  /** Only link first occurrence of each term across entire content */
  firstOccurrenceOnly?: boolean;
  /** Terms to exclude from linking */
  excludeTerms?: string[];
  /** GlossaryLink variant */
  variant?: "inline" | "highlight" | "subtle";
  /** Show tooltips */
  showTooltip?: boolean;
  /** Elements to skip (won't process their children) */
  skipElements?: string[];
}

/**
 * GlossaryRichText - Recursively processes React children and auto-links glossary terms
 * 
 * This component traverses the React tree and replaces text nodes containing
 * glossary terms with GlossaryLink components.
 * 
 * Usage:
 * <GlossaryRichText>
 *   <p>Ergo uses the eUTXO model for smart contracts.</p>
 *   <p>ErgoScript enables complex DeFi applications.</p>
 * </GlossaryRichText>
 * 
 * Or wrap entire sections:
 * <GlossaryRichText variant="subtle" maxLinksPerNode={3}>
 *   <article>
 *     <h2>Understanding eUTXO</h2>
 *     <p>The eUTXO model extends Bitcoin's UTXO...</p>
 *   </article>
 * </GlossaryRichText>
 */
export function GlossaryRichText({
  children,
  maxLinksPerNode = 3,
  firstOccurrenceOnly = true,
  excludeTerms = [],
  variant = "inline",
  showTooltip = true,
  skipElements = ["code", "pre", "a", "button", "input", "script", "style"],
}: GlossaryRichTextProps) {
  // Track if we're on the client
  const [isClient, setIsClient] = useState(false);
  // Track linked terms across entire content for firstOccurrenceOnly
  const linkedTermsRef = useRef(new Set<string>());

  useEffect(() => {
    setIsClient(true);
  }, []);

  // On server or before hydration, just render children as-is
  if (!isClient) {
    return <>{children}</>;
  }

  // Reset linked terms on each render
  linkedTermsRef.current.clear();

  const processNode = (node: React.ReactNode, key?: string | number): React.ReactNode => {
    // Handle null/undefined
    if (node == null) return node;

    // Handle arrays
    if (Array.isArray(node)) {
      return node.map((child, index) => {
        const processed = processNode(child, index);
        // If the processed result is already a valid element with a key, return as-is
        if (isValidElement(processed) && processed.key != null) {
          return processed;
        }
        // Wrap in fragment with key if needed
        return <React.Fragment key={`arr-${index}`}>{processed}</React.Fragment>;
      });
    }

    // Handle strings - this is where we do the glossary linking
    if (typeof node === "string") {
      // Skip empty strings
      if (!node.trim()) return node;

      // Build exclude list including already linked terms
      const currentExclude = firstOccurrenceOnly
        ? [...excludeTerms, ...Array.from(linkedTermsRef.current)]
        : excludeTerms;

      const segments = parseTextForGlossaryTerms(node, {
        maxLinks: maxLinksPerNode,
        firstOccurrenceOnly: true,
        excludeTerms: currentExclude,
      });

      // If no links found, return original text
      if (segments.every((s) => s.type === "text")) {
        return node;
      }

      // Track newly linked terms
      segments.forEach((s) => {
        if (s.type === "link" && s.term) {
          linkedTermsRef.current.add(s.term.slug);
        }
      });

      // Return processed segments
      return segments.map((segment, index) =>
        segment.type === "link" && segment.term ? (
          <GlossaryLink
            key={`gl-${segment.term.slug}-${key}-${index}`}
            term={segment.term.slug}
            variant={variant}
            showTooltip={showTooltip}
          >
            {segment.content}
          </GlossaryLink>
        ) : (
          <React.Fragment key={`text-${key}-${index}`}>
            {segment.content}
          </React.Fragment>
        )
      );
    }

    // Handle numbers
    if (typeof node === "number") return node;

    // Handle React elements
    if (isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      const elementType = typeof element.type === "string" ? element.type : "";

      // Skip certain elements (code blocks, links, etc.)
      if (skipElements.includes(elementType.toLowerCase())) {
        return node;
      }

      // Skip elements that already have glossary-related classes
      const className = (element.props as { className?: string }).className || "";
      if (className.includes("glossary") || className.includes("no-glossary")) {
        return node;
      }

      // Recursively process children
      const processedChildren = processNode(element.props.children);

      // Only clone if children changed
      if (processedChildren !== element.props.children) {
        return cloneElement(element, {}, processedChildren);
      }

      return node;
    }

    return node;
  };

  return <>{processNode(children)}</>;
}

/**
 * NoGlossary - Wrapper to prevent auto-glossary linking within its children
 * 
 * Usage:
 * <GlossaryRichText>
 *   <p>This text will have eUTXO linked.</p>
 *   <NoGlossary>
 *     <p>This text will NOT have eUTXO linked.</p>
 *   </NoGlossary>
 * </GlossaryRichText>
 */
export function NoGlossary({ children }: { children: React.ReactNode }) {
  return <span className="no-glossary">{children}</span>;
}

/**
 * GlossaryArticle - Pre-configured GlossaryRichText for blog articles
 * 
 * Usage:
 * <GlossaryArticle>
 *   <article>
 *     {articleContent}
 *   </article>
 * </GlossaryArticle>
 */
export function GlossaryArticle({
  children,
  maxLinksPerNode = 2,
  ...props
}: Omit<GlossaryRichTextProps, "variant" | "showTooltip">) {
  return (
    <GlossaryRichText
      maxLinksPerNode={maxLinksPerNode}
      variant="subtle"
      showTooltip={true}
      {...props}
    >
      {children}
    </GlossaryRichText>
  );
}

export default GlossaryRichText;
