/**
 * Hidden Breadcrumbs Component
 * Provides breadcrumb schema for SEO without visible UI
 * Screen reader accessible but visually hidden
 */

interface BreadcrumbItem {
  name: string
  href: string
}

interface HiddenBreadcrumbsProps {
  items: BreadcrumbItem[]
  currentPage: string
}

export function HiddenBreadcrumbs({ items, currentPage }: HiddenBreadcrumbsProps) {
  const baseUrl = 'https://ergoblockchain.org'
  
  // Build complete breadcrumb list including current page
  const allItems = [
    { name: 'Home', href: '/' },
    ...items,
    { name: currentPage, href: '' } // Current page has no href
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}${items[items.length - 1]?.href || ''}#breadcrumbs`,
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href && { item: `${baseUrl}${item.href}` })
    }))
  }

  return (
    <>
      {/* JSON-LD Schema for search engines */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />
      
      {/* Hidden breadcrumb navigation for screen readers */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          {allItems.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <a href={`${baseUrl}${item.href}`}>{item.name}</a>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
              {index < allItems.length - 1 && <span> / </span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
