import {
  Organization,
  WebSite,
  Article,
  FAQPage,
  HowTo,
  SoftwareApplication,
  Product,
  Event,
  Person,
  TechArticle,
  Course,
  DefinedTerm,
  DefinedTermSet,
} from '@/types/schema'

type SchemaType = 
  | 'Organization'
  | 'WebSite'
  | 'Article'
  | 'FAQPage'
  | 'HowTo'
  | 'SoftwareApplication'
  | 'Product'
  | 'Event'
  | 'Person'
  | 'TechArticle'
  | 'Course'
  | 'DefinedTerm'
  | 'DefinedTermSet'

type SchemaData = 
  | Organization
  | WebSite
  | Article
  | FAQPage
  | HowTo
  | SoftwareApplication
  | Product
  | Event
  | Person
  | TechArticle
  | Course
  | DefinedTerm
  | DefinedTermSet

interface SchemaOrgProps {
  type: SchemaType
  data: SchemaData
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    ...data
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 