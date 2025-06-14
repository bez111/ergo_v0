import { ReactNode } from "react"

interface SectionHeadingProps {
  title?: string
  text?: string
  subtitle?: string
  description?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  badgeText?: string
  children?: ReactNode
}

export function SectionHeading({
  title,
  text,
  subtitle,
  description,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
  badgeText,
  children,
}: SectionHeadingProps) {
  const headingText = title || text || ""

  return (
    <div className={className}>
      {badgeText && (
        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
          {badgeText}
        </span>
      )}
      {headingText && (
        <h2
          className={`text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block ${titleClassName}`}
        >
          {headingText}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-2 text-xl md:text-2xl text-gray-300 mb-2 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className={`mt-4 text-lg text-gray-400 max-w-2xl ${descriptionClassName}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
