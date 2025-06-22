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
    <div className={`text-center mb-12 ${className}`}>
      {badgeText && (
        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
          {badgeText}
        </span>
      )}
      {headingText && (
        <h2 className={`text-4xl font-bold text-white mb-4 ${titleClassName}`}>{headingText}</h2>
      )}
      {subtitle && (
        <p className={`mt-2 text-xl text-gray-300 max-w-3xl mx-auto ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className={`mt-4 text-lg text-gray-400 max-w-3xl mx-auto ${descriptionClassName}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
