/**
 * SEOSchemas - Server-compatible JSON-LD rendering utilities
 * 
 * These functions render JSON-LD structured data scripts for SEO.
 * Can be used in both server and client components.
 * 
 * @example
 * // In a page.tsx or layout.tsx:
 * import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
 * import { createBreadcrumbSchema, createFAQSchema } from "@/lib/seo"
 * 
 * export default function Page() {
 *   const schemas = [
 *     createBreadcrumbSchema([{ name: "Technology", href: "/technology" }]),
 *     createFAQSchema([{ question: "...", answer: "..." }]),
 *   ]
 *   
 *   return (
 *     <>
 *       {renderSchemaScripts(schemas)}
 *       <PageContent />
 *     </>
 *   )
 * }
 */

interface SEOSchemasProps {
  schemas: object[]
}

/**
 * Component version for rendering schemas
 */
export function SEOSchemas({ schemas }: SEOSchemasProps) {
  if (!schemas || schemas.length === 0) return null

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

/**
 * Render a single JSON-LD schema script
 */
export function renderSchemaScript(schema: object) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Render multiple JSON-LD schema scripts
 */
export function renderSchemaScripts(schemas: object[]) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export default SEOSchemas
