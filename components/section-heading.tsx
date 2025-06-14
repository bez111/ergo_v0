import { ReactNode } from "react"

interface SectionHeadingProps {
  title?: string
  text?: string
  subtitle?: string
  description?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string // This was the prop for the text above the main title in some versions
  descriptionClassName?: string
  badgeText?: string // Adding an optional badge text to be rendered by SectionHeading itself
  children?: ReactNode
}

export function SectionHeading({
  title,
  text,
  subtitle, // This is the text that usually goes below the main title
  description,
  className = "",
  titleClassName = "",
  subtitleClassName = "", // This prop will be used for the text below the main title
  descriptionClassName = "",
  badgeText, // If a badge is part of the heading structure
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
        <h2 className={`text-3xl font-bold tracking-tight ${titleClassName}`}>
          {headingText}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-2 text-lg text-gray-400 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className={`mt-4 text-gray-500 ${descriptionClassName}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
