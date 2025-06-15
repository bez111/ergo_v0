import {
  Organization,
  WebSite,
  BreadcrumbList,
  Article,
  FAQPage,
  HowTo,
} from '@/types/schema'

type SchemaType = 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Article' | 'FAQPage' | 'HowTo'

interface SchemaOrgProps {
  type: SchemaType
  data: Organization | WebSite | BreadcrumbList | Article | FAQPage | HowTo
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
} 