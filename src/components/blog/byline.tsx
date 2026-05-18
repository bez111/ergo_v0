import { Calendar, Clock } from "lucide-react"

interface BylineProps {
  authorName: string
  authorRole?: string
  authorTwitter?: string
  publishedDate: string  // YYYY-MM-DD or ISO
  modifiedDate?: string  // YYYY-MM-DD or ISO
  readMinutes?: number
}

/**
 * Compact author byline for hand-coded blog posts.
 * Renders Author name/role, publish date, optional last-updated date,
 * and reading time. For E-E-A-T (Experience, Expertise, Authoritativeness).
 */
export function Byline({
  authorName,
  authorRole,
  authorTwitter,
  publishedDate,
  modifiedDate,
  readMinutes,
}: BylineProps) {
  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso)
      return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
    } catch {
      return iso
    }
  }

  const showUpdated = modifiedDate && modifiedDate !== publishedDate

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-400 border-y border-white/8 py-4 my-6">
      <span className="flex items-center gap-2">
        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-black font-bold text-xs">
          {authorName.charAt(0)}
        </span>
        <span className="text-white">
          By{" "}
          {authorTwitter ? (
            <a
              href={`https://x.com/${authorTwitter.replace(/^@/, "")}`}
              target="_blank"
              rel="noopener noreferrer author"
              className="font-semibold hover:text-orange-400 transition-colors"
            >
              {authorName}
            </a>
          ) : (
            <span className="font-semibold">{authorName}</span>
          )}
          {authorRole && <span className="text-neutral-500 font-normal"> · {authorRole}</span>}
        </span>
      </span>

      <span className="flex items-center gap-1.5">
        <Calendar className="w-3.5 h-3.5" />
        <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
      </span>

      {showUpdated && (
        <span className="flex items-center gap-1.5 text-orange-400/80">
          <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">Updated</span>
          <time dateTime={modifiedDate}>{formatDate(modifiedDate)}</time>
        </span>
      )}

      {readMinutes && (
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{readMinutes} min read</span>
        </span>
      )}
    </div>
  )
}
