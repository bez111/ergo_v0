"use client"

import React from "react"

/**
 * Tiny in-house renderer for Sage assistant messages.
 *
 * Handles the small Markdown subset the model actually emits:
 *   - fenced code blocks (```lang\n...\n```)
 *   - inline code (`x`)
 *   - bold (**x**)
 *   - links [text](url) — internal href stays relative, external opens new tab
 *
 * Deliberately not pulling react-markdown to keep the chat-widget chunk
 * tight. If the corpus starts emitting tables / nested lists, swap this
 * for react-markdown then.
 */
export function MessageBody({ text }: { text: string }) {
  const blocks = splitFencedBlocks(text)
  return (
    <>
      {blocks.map((b, i) =>
        b.kind === "code" ? (
          <pre
            key={i}
            className="my-2 overflow-x-auto rounded-md border border-orange-500/15 bg-black/60 p-3 text-[12px] leading-relaxed"
          >
            {b.lang && (
              <div className="mb-1 text-[10px] uppercase tracking-widest text-orange-400/60">
                {b.lang}
              </div>
            )}
            <code className="block whitespace-pre text-gray-100 font-mono">{b.content}</code>
          </pre>
        ) : (
          <Paragraph key={i} text={b.content} />
        ),
      )}
    </>
  )
}

interface Block {
  kind: "text" | "code"
  content: string
  lang?: string
}

function splitFencedBlocks(text: string): Block[] {
  const out: Block[] = []
  const re = /```([a-z0-9_-]*)?\n?([\s\S]*?)```/gi
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      out.push({ kind: "text", content: text.slice(last, m.index) })
    }
    out.push({ kind: "code", content: m[2].replace(/\n$/, ""), lang: m[1] || undefined })
    last = re.lastIndex
  }
  if (last < text.length) {
    out.push({ kind: "text", content: text.slice(last) })
  }
  return out.length > 0 ? out : [{ kind: "text", content: text }]
}

/**
 * Render a single non-code block: split on newlines, run inline formatter
 * (bold / inline code / links).
 */
function Paragraph({ text }: { text: string }) {
  const lines = text.split("\n")
  return (
    <div className="whitespace-pre-wrap break-words">
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {renderInline(line)}
          {i < lines.length - 1 && "\n"}
        </React.Fragment>
      ))}
    </div>
  )
}

const INLINE_RE =
  /(\*\*[^*]+\*\*)|(`[^`]+`)|(\[[^\]]+\]\([^)]+\))|(https?:\/\/[^\s)]+)/g

function renderInline(line: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  let key = 0
  while ((m = INLINE_RE.exec(line)) !== null) {
    if (m.index > last) parts.push(line.slice(last, m.index))
    const token = m[0]
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={key++} className="text-white font-semibold">
          {token.slice(2, -2)}
        </strong>,
      )
    } else if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code
          key={key++}
          className="rounded bg-black/60 border border-white/10 px-1 py-0.5 text-[12px] text-orange-200 font-mono"
        >
          {token.slice(1, -1)}
        </code>,
      )
    } else if (token.startsWith("[") && token.includes("](")) {
      const closeBracket = token.indexOf("](")
      const text = token.slice(1, closeBracket)
      const href = token.slice(closeBracket + 2, -1)
      parts.push(<SmartLink key={key++} href={href} text={text} />)
    } else if (token.startsWith("http")) {
      parts.push(<SmartLink key={key++} href={token} text={token} />)
    }
    last = INLINE_RE.lastIndex
  }
  if (last < line.length) parts.push(line.slice(last))
  return parts
}

function SmartLink({ href, text }: { href: string; text: string }) {
  const isExternal = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-orange-300 underline decoration-orange-500/40 underline-offset-2 hover:text-orange-200 hover:decoration-orange-400"
    >
      {text}
    </a>
  )
}
