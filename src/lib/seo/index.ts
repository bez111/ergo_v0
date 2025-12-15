// Centralized SEO Module
// Import everything from here for consistent SEO across the site

// Types
export type {
  PageSEOConfig,
  BreadcrumbItem,
  FAQItem,
  TechArticleConfig,
  CollectionPageConfig,
  ItemListConfig,
  HowToConfig,
  HowToStep,
  SoftwareAppConfig,
  WebApplicationConfig,
  DatasetConfig,
  FinancialServiceConfig,
  EventConfig,
  FullPageSEO,
} from "./types"

// Metadata generators
export {
  createMetadata,
  createTechnologyMetadata,
  createUseCaseMetadata,
  createBlogMetadata,
  createHubMetadata,
  getCanonicalUrl,
  getAlternates,
} from "./metadata"

// Schema generators
export {
  createBreadcrumbSchema,
  createFAQSchema,
  createTechArticleSchema,
  createCollectionSchema,
  createItemListSchema,
  createHowToSchema,
  createSoftwareAppSchema,
  createWebSiteSchema,
  createOrganizationSchema,
  createWebApplicationSchema,
  createDatasetSchema,
  createFinancialServiceSchema,
  createEventSchema,
  createBlogSchema,
} from "./schemas"

// Re-export existing SchemaTypes for backward compatibility
export { SchemaTypes, generateCompleteSchema } from "../schema-ultimate"

// NoIndex configuration for SEO optimization
export {
  shouldNoIndex,
  getRobotsMeta,
  NOINDEX_PATTERNS,
  FORCE_INDEX_PATHS,
  PAGE_ESTIMATES,
} from "./noindex-config"

