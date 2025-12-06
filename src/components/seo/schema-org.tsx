
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  BreadcrumbList,
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
  | 'BreadcrumbList'

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
  | BreadcrumbList

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