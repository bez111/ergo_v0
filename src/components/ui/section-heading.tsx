import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subtitle?: string
  description?: string
  size?: "default" | "sm" | "lg"
  align?: "left" | "center" | "right"
}

export function SectionHeading({
  text,
  subtitle,
  description,
  size = "default",
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      <h2
        className={cn("font-mono font-bold tracking-wider text-primary", {
          "text-2xl": size === "sm",
          "text-3xl": size === "default",
          "text-4xl": size === "lg",
        })}
      >
        {text}
      </h2>
      {subtitle && (
        <h3
          className={cn("font-bold text-white", {
            "text-xl": size === "sm",
            "text-2xl": size === "default",
            "text-3xl": size === "lg",
          })}
        >
          {subtitle}
        </h3>
      )}
      {description && (
        <p
          className={cn("text-gray-400 font-mono", {
            "text-sm": size === "sm",
            "text-base": size === "default",
            "text-lg": size === "lg",
          })}
        >
          {description}
        </p>
      )}
    </div>
  )
} 