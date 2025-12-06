"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { getTermBySlug, glossaryTerms } from "@/data/glossary";

interface GlossaryLinkProps {
  /** The term slug or exact term name to link to */
  term: string;
  /** Optional custom display text (defaults to term name) */
  children?: React.ReactNode;
  /** Show tooltip on hover (default: true) */
  showTooltip?: boolean;
  /** Custom className for the link */
  className?: string;
  /** Style variant */
  variant?: "inline" | "highlight" | "subtle";
}

/**
 * GlossaryLink - A component for linking to glossary terms throughout the site.
 * 
 * Usage:
 * <GlossaryLink term="eUTXO" />
 * <GlossaryLink term="eutxo">Extended UTXO</GlossaryLink>
 * <GlossaryLink term="sigma-protocols" variant="highlight" />
 */
export function GlossaryLink({
  term,
  children,
  showTooltip = true,
  className = "",
  variant = "inline",
}: GlossaryLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<"top" | "bottom">("top");
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Find the term - try by slug first, then by name (case-insensitive)
  const glossaryTerm = getTermBySlug(term) || 
    glossaryTerms.find(t => t.term.toLowerCase() === term.toLowerCase());

  // Calculate tooltip position based on viewport
  useEffect(() => {
    if (isHovered && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      
      // Show tooltip below if not enough space above
      setTooltipPosition(spaceAbove < 150 ? "bottom" : "top");
    }
  }, [isHovered]);

  // If term not found, render as plain text
  if (!glossaryTerm) {
    console.warn(`GlossaryLink: Term "${term}" not found in glossary`);
    return <span className={className}>{children || term}</span>;
  }

  const displayText = children || glossaryTerm.term;
  const href = `/learn/glossary/${glossaryTerm.slug}`;

  const variantStyles = {
    inline: "text-orange-400 hover:text-orange-300 underline decoration-orange-400/30 hover:decoration-orange-400/60 underline-offset-2",
    highlight: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 px-1.5 py-0.5 rounded-md no-underline",
    subtle: "text-neutral-300 hover:text-orange-400 border-b border-dotted border-neutral-500 hover:border-orange-400",
  };

  return (
    <span className="relative inline-block">
      <Link
        ref={linkRef}
        href={href}
        className={`transition-colors duration-200 ${variantStyles[variant]} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayText}
      </Link>

      {/* Tooltip */}
      {showTooltip && (
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: tooltipPosition === "top" ? 10 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: tooltipPosition === "top" ? 10 : -10 }}
              transition={{ duration: 0.15 }}
              className={`absolute z-50 w-72 p-4 bg-neutral-900 border border-white/10 rounded-xl shadow-xl block
                         ${tooltipPosition === "top" ? "bottom-full mb-2" : "top-full mt-2"} left-1/2 -translate-x-1/2`}
              style={{ pointerEvents: "none" }}
            >
              {/* Arrow */}
              <span
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 border-white/10 rotate-45 block
                           ${tooltipPosition === "top" ? "bottom-[-6px] border-r border-b" : "top-[-6px] border-l border-t"}`}
              />

              {/* Content */}
              <span className="relative block">
                <span className="flex items-center justify-between mb-2">
                  <strong className="font-bold text-white">{glossaryTerm.term}</strong>
                  <span className={`text-xs px-2 py-0.5 rounded-full
                    ${glossaryTerm.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                      glossaryTerm.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'}`}
                  >
                    {glossaryTerm.difficulty}
                  </span>
                </span>
                <span className="text-sm text-neutral-400 line-clamp-3 block">
                  {glossaryTerm.shortDefinition}
                </span>
                <span className="flex items-center gap-1 mt-3 text-xs text-orange-400">
                  <ExternalLink className="w-3 h-3" />
                  <span>Click to learn more</span>
                </span>
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </span>
  );
}

/**
 * GlossaryTooltip - A wrapper that adds glossary tooltip to any content
 * 
 * Usage:
 * <GlossaryTooltip term="eUTXO">
 *   <span>some complex content</span>
 * </GlossaryTooltip>
 */
export function GlossaryTooltip({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<"top" | "bottom">("top");

  const glossaryTerm = getTermBySlug(term) || 
    glossaryTerms.find(t => t.term.toLowerCase() === term.toLowerCase());

  useEffect(() => {
    if (isHovered && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setTooltipPosition(rect.top < 150 ? "bottom" : "top");
    }
  }, [isHovered]);

  if (!glossaryTerm) {
    return <>{children}</>;
  }

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block cursor-help"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: tooltipPosition === "top" ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: tooltipPosition === "top" ? 10 : -10 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 w-72 p-4 bg-neutral-900 border border-white/10 rounded-xl shadow-xl
                       ${tooltipPosition === "top" ? "bottom-full mb-2" : "top-full mt-2"} left-1/2 -translate-x-1/2`}
          >
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 border-white/10 rotate-45
                         ${tooltipPosition === "top" ? "bottom-[-6px] border-r border-b" : "top-[-6px] border-l border-t"}`}
            />

            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-white">{glossaryTerm.term}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full
                  ${glossaryTerm.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                    glossaryTerm.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'}`}
                >
                  {glossaryTerm.difficulty}
                </span>
              </div>
              <p className="text-sm text-neutral-400 line-clamp-3">
                {glossaryTerm.shortDefinition}
              </p>
              <Link
                href={`/learn/glossary/${glossaryTerm.slug}`}
                className="flex items-center gap-1 mt-3 text-xs text-orange-400 hover:text-orange-300"
                style={{ pointerEvents: "auto" }}
              >
                <ExternalLink className="w-3 h-3" />
                <span>Learn more</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export default GlossaryLink;

