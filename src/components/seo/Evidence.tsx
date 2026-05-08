import Link from "next/link"
import { Info } from "lucide-react"

/**
 * Tiny inline citation strip. Renders as a small "Evidence" line under a
 * strong product claim, linking to a primary source (a blog post, GitHub
 * file, an external paper, or the security advisories page) and, where
 * applicable, an honest caveat. This keeps the marketing copy short while
 * still being verifiable.
 *
 * Use sparingly — only for claims where a reasonable reader will ask "says
 * who?" Examples: "no kill switch", "MEV-resistant", "~$0.01 fees",
 * "100+ developers", "no critical incidents".
 */
export interface EvidenceLink {
  /** Short label for the source. */
  label: string
  /** URL — internal /path or external https URL. */
  href: string
}

export interface EvidenceProps {
  /** What the evidence supports — used for screen readers. */
  claim?: string
  /** Sources backing the claim. */
  sources: EvidenceLink[]
  /** Optional honest caveat on the claim's scope or limitation. */
  caveat?: string
  /** Optional className for layout tweaks. */
  className?: string
}

export function Evidence({ claim, sources, caveat, className = "" }: EvidenceProps) {
  return (
    <p
      role="note"
      aria-label={claim ? `Evidence for: ${claim}` : "Evidence"}
      className={`text-xs text-neutral-500 leading-snug mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}
    >
      <span className="inline-flex items-center gap-1 font-mono uppercase tracking-wider text-neutral-400">
        <Info className="w-3 h-3" aria-hidden="true" />
        Evidence
      </span>
      {sources.map((s, i) => {
        const isExternal = /^https?:/.test(s.href)
        return (
          <span key={s.href} className="inline-flex items-baseline">
            {isExternal ? (
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-orange-300"
              >
                {s.label}
              </a>
            ) : (
              <Link
                href={s.href}
                className="underline underline-offset-2 hover:text-orange-300"
              >
                {s.label}
              </Link>
            )}
            {i < sources.length - 1 && <span className="mx-1 text-neutral-600">·</span>}
          </span>
        )
      })}
      {caveat && (
        <span className="block w-full text-neutral-500 italic mt-0.5">
          Caveat: {caveat}
        </span>
      )}
    </p>
  )
}
