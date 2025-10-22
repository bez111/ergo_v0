import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: "default" | "sm" | "lg" | "fluid"
}

export function Container({ children, className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 md:px-6",
        {
          "max-w-7xl": size === "default",
          "max-w-4xl": size === "sm",
          "max-w-[1400px]": size === "lg",
          "w-full": size === "fluid",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 