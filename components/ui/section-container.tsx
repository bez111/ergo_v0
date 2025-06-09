import { cn } from "@/lib/utils"

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "fluid"
  withPadding?: boolean
  withBorder?: boolean
  withBackground?: boolean
}

export function SectionContainer({
  className,
  size = "default",
  withPadding = true,
  withBorder = false,
  withBackground = false,
  ...props
}: SectionContainerProps) {
  return (
    <div
      className={cn(
        "relative",
        {
          "max-w-7xl": size === "default",
          "max-w-5xl": size === "sm",
          "max-w-[90rem]": size === "lg",
          "max-w-none": size === "fluid",
        },
        {
          "px-4 sm:px-6 lg:px-8": withPadding,
        },
        {
          "border-t border-white/10": withBorder,
        },
        {
          "bg-black/20 backdrop-blur-sm": withBackground,
        },
        "mx-auto",
        className
      )}
      {...props}
    />
  )
} 