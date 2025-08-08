import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { SchemaOrg } from "./schema-org"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const breadcrumbData = {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.label,
      item: `https://ergoblockchain.org${item.href}`,
    })),
  }

  return (
    <>
      <SchemaOrg type="BreadcrumbList" data={breadcrumbData} />
      <nav className={`flex items-center space-x-2 text-sm text-gray-400 ${className}`} aria-label="Breadcrumb">
        <Link href="/" className="flex items-center hover:text-orange-400 transition-colors">
          <Home className="w-4 h-4" />
        </Link>
        
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            {index === items.length - 1 ? (
              <span className="text-white font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-orange-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
} 