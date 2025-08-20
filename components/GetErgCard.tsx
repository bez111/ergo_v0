import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

export type GetErgCardProps = {
  icon: LucideIcon
  name: string
  description?: string
  link: string
  cta?: string
  badge?: string
  featured?: boolean
  className?: string
}

export function GetErgCard({
  icon: Icon,
  name,
  description,
  link,
  cta = "Go",
  badge,
  featured = false,
  className = "",
}: GetErgCardProps) {
  return (
    <Card
      className={cn(
        "relative bg-neutral-900/60 border border-neutral-700 rounded-2xl shadow",
        "hover:shadow-lg hover:ring-2 hover:ring-orange-500/20 transition-all duration-200",
        "flex flex-col h-full cursor-pointer group",
        className
      )}
    >
      <CardContent className="p-6 flex flex-col items-center text-center flex-1">
        {badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-700 text-xs font-bold text-orange-300 shadow">
            {badge}
          </span>
        )}
        {featured && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange-500/20 text-xs font-bold text-orange-400 shadow animate-pulse">
            Recommended
          </span>
        )}
        <div className="p-3 mb-3 rounded-md bg-orange-500/20 border border-orange-500/30 w-fit transition-transform duration-200 group-hover:scale-110">
          <Icon className="w-8 h-8 text-orange-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        {description && (
          <p className="text-neutral-400 text-sm mb-4 flex-1">{description}</p>
        )}
        <Button
          asChild
          className={cn(
            "w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold border border-orange-500/50",
            !featured && "mt-auto"
          )}
        >
          <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${name}`}>
            {cta} <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
} 