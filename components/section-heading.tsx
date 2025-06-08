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
}: SectionHeadingProps) {
  const headingText = title || text || ""
  return null
}
