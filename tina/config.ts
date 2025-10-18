import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
const token = process.env.TINA_TOKEN

export default defineConfig({
  branch,
  clientId: clientId || '', // Get this from tina.io
  token: token || '', // Get this from tina.io
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'content/blog',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
            description: 'The main title of the article (60-70 characters for SEO)',
          },
          {
            type: 'string',
            name: 'slug',
            label: 'URL Slug',
            required: true,
            description: 'URL-friendly version of the title',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Meta Description',
            required: true,
            ui: {
              component: 'textarea',
            },
            description: 'SEO meta description (155-160 characters)',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Featured Image',
            required: true,
            description: 'Main image for social sharing and article header',
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            required: true,
            options: [
              { value: 'defi', label: 'DeFi' },
              { value: 'development', label: 'Development' },
              { value: 'mining', label: 'Mining' },
              { value: 'ecosystem', label: 'Ecosystem' },
              { value: 'technology', label: 'Technology' },
              { value: 'community', label: 'Community' },
              { value: 'tutorials', label: 'Tutorials' },
              { value: 'analysis', label: 'Market Analysis' },
            ],
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            description: 'Keywords for SEO and categorization',
          },
          {
            type: 'object',
            name: 'author',
            label: 'Author',
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Name',
                required: true,
              },
              {
                type: 'image',
                name: 'avatar',
                label: 'Avatar',
              },
              {
                type: 'string',
                name: 'bio',
                label: 'Bio',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'role',
                label: 'Role',
              },
              {
                type: 'object',
                name: 'social',
                label: 'Social Links',
                fields: [
                  { type: 'string', name: 'twitter', label: 'Twitter' },
                  { type: 'string', name: 'github', label: 'GitHub' },
                  { type: 'string', name: 'linkedin', label: 'LinkedIn' },
                ],
              },
            ],
          },
          {
            type: 'datetime',
            name: 'publishedAt',
            label: 'Published Date',
            required: true,
          },
          {
            type: 'datetime',
            name: 'updatedAt',
            label: 'Last Updated',
          },
          {
            type: 'number',
            name: 'readTime',
            label: 'Read Time (minutes)',
            required: true,
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured Post',
            description: 'Show this post as featured on the blog homepage',
          },
          {
            type: 'boolean',
            name: 'trending',
            label: 'Trending',
            description: 'Mark as trending post',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            description: 'Draft posts are not published',
          },
          
          // SEO Advanced Fields
          {
            type: 'object',
            name: 'seo',
            label: 'Advanced SEO',
            fields: [
              {
                type: 'string',
                name: 'keywords',
                label: 'Focus Keywords',
                list: true,
                description: 'Primary keywords to target (3-5 keywords)',
              },
              {
                type: 'string',
                name: 'canonicalUrl',
                label: 'Canonical URL',
                description: 'Optional: Override default canonical URL',
              },
              {
                type: 'string',
                name: 'ogTitle',
                label: 'OG Title',
                description: 'Social media title (if different from main title)',
              },
              {
                type: 'string',
                name: 'ogDescription',
                label: 'OG Description',
                ui: {
                  component: 'textarea',
                },
                description: 'Social media description',
              },
              {
                type: 'image',
                name: 'ogImage',
                label: 'OG Image',
                description: 'Custom social media image (1200x630px)',
              },
              {
                type: 'string',
                name: 'schemaType',
                label: 'Schema Type',
                options: [
                  { value: 'Article', label: 'Article' },
                  { value: 'NewsArticle', label: 'News Article' },
                  { value: 'BlogPosting', label: 'Blog Post' },
                  { value: 'TechArticle', label: 'Tech Article' },
                  { value: 'HowTo', label: 'How-To Guide' },
                  { value: 'Tutorial', label: 'Tutorial' },
                ],
              },
            ],
          },
          
          // Content Fields
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
            templates: [
              {
                name: 'CodeBlock',
                label: 'Code Block',
                fields: [
                  {
                    type: 'string',
                    name: 'language',
                    label: 'Language',
                    options: [
                      'javascript',
                      'typescript',
                      'python',
                      'rust',
                      'bash',
                      'json',
                      'markdown',
                    ],
                  },
                  {
                    type: 'string',
                    name: 'code',
                    label: 'Code',
                    ui: {
                      component: 'textarea',
                    },
                  },
                ],
              },
              {
                name: 'Callout',
                label: 'Callout',
                fields: [
                  {
                    type: 'string',
                    name: 'type',
                    label: 'Type',
                    options: ['info', 'warning', 'error', 'success'],
                  },
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                  },
                  {
                    type: 'string',
                    name: 'content',
                    label: 'Content',
                    ui: {
                      component: 'textarea',
                    },
                  },
                ],
              },
              {
                name: 'Video',
                label: 'Video Embed',
                fields: [
                  {
                    type: 'string',
                    name: 'url',
                    label: 'Video URL',
                    description: 'YouTube or Vimeo URL',
                  },
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                  },
                ],
              },
            ],
          },
        ],
      },
      
      // Content Templates for 90-day strategy
      {
        name: 'templates',
        label: 'Content Templates',
        path: 'content/templates',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Template Name',
            required: true,
          },
          {
            type: 'string',
            name: 'type',
            label: 'Content Type',
            options: [
              'pillar-content',
              'comparison-post',
              'tutorial',
              'news-analysis',
              'guide',
              'case-study',
            ],
          },
          {
            type: 'object',
            name: 'structure',
            label: 'Content Structure',
            fields: [
              {
                type: 'string',
                name: 'outline',
                label: 'Outline',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'keywords',
                label: 'Target Keywords',
                list: true,
              },
              {
                type: 'number',
                name: 'wordCount',
                label: 'Target Word Count',
              },
            ],
          },
        ],
      },
      
      // Editorial Calendar
      {
        name: 'calendar',
        label: 'Editorial Calendar',
        path: 'content/calendar',
        format: 'json',
        fields: [
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish Date',
            required: true,
          },
          {
            type: 'string',
            name: 'title',
            label: 'Article Title',
            required: true,
          },
          {
            type: 'string',
            name: 'status',
            label: 'Status',
            options: [
              'planned',
              'in-progress',
              'review',
              'scheduled',
              'published',
            ],
          },
          {
            type: 'string',
            name: 'assignedTo',
            label: 'Assigned To',
          },
          {
            type: 'string',
            name: 'targetKeywords',
            label: 'Target Keywords',
            list: true,
          },
          {
            type: 'string',
            name: 'contentPillar',
            label: 'Content Pillar',
            options: [
              'education',
              'defi-use-cases',
              'development',
              'market-insights',
            ],
          },
        ],
      },
    ],
  },
}) 