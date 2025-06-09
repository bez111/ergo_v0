import { cn } from "@/lib/utils"

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "fluid"
  withPadding?: boolean
}

export function PageContainer({
  className,
  size = "default",
  withPadding = true,
  ...props
}: PageContainerProps) {
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
        "mx-auto",
        className
      )}
      {...props}
    />
  )
} 