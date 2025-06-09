import { cn } from "@/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: "none" | "sm" | "default" | "lg"
  className?: string
}

export function Grid({
  cols = 3,
  gap = "default",
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        {
          "grid-cols-1": cols === 1,
          "grid-cols-1 sm:grid-cols-2": cols === 2,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": cols === 4,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5": cols === 5,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6": cols === 6,
        },
        {
          "gap-0": gap === "none",
          "gap-4": gap === "sm",
          "gap-6": gap === "default",
          "gap-8": gap === "lg",
        },
        className
      )}
      {...props}
    />
  )
} 