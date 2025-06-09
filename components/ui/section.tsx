import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  size?: "default" | "sm" | "lg"
  variant?: "default" | "primary" | "secondary"
  withBorder?: boolean
}

export function Section({
  children,
  className,
  size = "default",
  variant = "default",
  withBorder = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        {
          "py-16": size === "default",
          "py-12": size === "sm",
          "py-20": size === "lg",
        },
        {
          "bg-transparent": variant === "default",
          "bg-black/50": variant === "primary",
          "bg-gray-900/20": variant === "secondary",
        },
        {
          "border-t border-primary/20": withBorder,
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
} 