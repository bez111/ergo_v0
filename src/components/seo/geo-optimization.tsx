import React from 'react'

// GEO (Generative Engine Optimization) Component
// Optimized for AI crawlers like ChatGPT, Claude, Perplexity, etc.

interface GEOMetaProps {
  title: string
  description: string
  keywords?: string[]
  topic?: string
  expertise?: string
  lastUpdated?: string
  accuracy?: string
  sources?: string[]
}

export function GEOMeta({
  title,
  description,
  keywords = [],
  topic,
  expertise,
  lastUpdated,
  accuracy,
  sources = []
}: GEOMetaProps) {
  return (
    <>
      {/* AI-friendly meta tags */}
      <meta name="ai-title" content={title} />
      <meta name="ai-description" content={description} />
      <meta name="ai-keywords" content={keywords.join(', ')} />
      
      {topic && <meta name="ai-topic" content={topic} />}
      {expertise && <meta name="ai-expertise-level" content={expertise} />}
      {lastUpdated && <meta name="ai-last-updated" content={lastUpdated} />}
      {accuracy && <meta name="ai-accuracy" content={accuracy} />}
      
      {/* Source attribution for AI */}
      {sources.length > 0 && (
        <meta name="ai-sources" content={sources.join(', ')} />
      )}
      
      {/* Structured content hints for AI */}
      <meta name="ai-content-type" content="technical-documentation" />
      <meta name="ai-language" content="en" />
      <meta name="ai-reading-level" content="professional" />
    </>
  )
}

// Semantic content wrapper for better AI understanding
interface SemanticSectionProps {
  type: 'definition' | 'explanation' | 'example' | 'comparison' | 'tutorial' | 'faq'
  title?: string
  children: React.ReactNode
  keywords?: string[]
}

export function SemanticSection({ 
  type, 
  title, 
  children, 
  keywords = [] 
}: SemanticSectionProps) {
  return (
    <section 
      data-ai-section={type}
      data-ai-keywords={keywords.join(', ')}
      className="ai-optimized-section"
    >
      {title && (
        <h2 data-ai-heading="true" className="text-2xl font-bold mb-4">
          {title}
        </h2>
      )}
      <div data-ai-content="true">
        {children}
      </div>
    </section>
  )
}

// Key concepts highlighter for AI
interface KeyConceptProps {
  term: string
  definition: string
  relatedTerms?: string[]
}

export function KeyConcept({ term, definition, relatedTerms = [] }: KeyConceptProps) {
  return (
    <div 
      data-ai-concept="true"
      data-ai-term={term}
      data-ai-related={relatedTerms.join(', ')}
      className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 mb-4"
    >
      <dt className="font-bold text-orange-400 mb-2">{term}</dt>
      <dd className="text-gray-300">{definition}</dd>
    </div>
  )
}

// FAQ structure optimized for AI
interface FAQItemProps {
  question: string
  answer: string
  category?: string
}

export function FAQItem({ question, answer, category }: FAQItemProps) {
  return (
    <div 
      data-ai-faq="true"
      data-ai-category={category}
      className="mb-6"
    >
      <h3 
        data-ai-question="true" 
        className="text-lg font-semibold mb-2 text-white"
      >
        {question}
      </h3>
      <p 
        data-ai-answer="true" 
        className="text-gray-300"
      >
        {answer}
      </p>
    </div>
  )
}

// Comparison table optimized for AI
interface ComparisonData {
  feature: string
  ergo: string
  others: string
  advantage?: string
}

export function ComparisonTable({ data }: { data: ComparisonData[] }) {
  return (
    <table 
      data-ai-comparison="true"
      className="w-full border-collapse"
    >
      <thead>
        <tr className="border-b border-gray-700">
          <th className="text-left p-4">Feature</th>
          <th className="text-left p-4">Ergo</th>
          <th className="text-left p-4">Others</th>
          <th className="text-left p-4">Advantage</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr 
            key={index}
            data-ai-comparison-row="true"
            className="border-b border-gray-800"
          >
            <td className="p-4 font-medium">{row.feature}</td>
            <td className="p-4 text-green-400">{row.ergo}</td>
            <td className="p-4 text-gray-400">{row.others}</td>
            <td className="p-4 text-orange-400">{row.advantage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// Technical specification component for AI
interface TechSpecProps {
  name: string
  value: string | number
  unit?: string
  description?: string
}

export function TechSpec({ name, value, unit, description }: TechSpecProps) {
  return (
    <div 
      data-ai-spec="true"
      data-ai-spec-name={name}
      className="flex justify-between items-center py-2 border-b border-gray-800"
    >
      <span className="text-gray-400">{name}</span>
      <span className="font-mono text-white">
        {value}{unit && ` ${unit}`}
        {description && (
          <span className="text-xs text-gray-500 ml-2">({description})</span>
        )}
      </span>
    </div>
  )
}

// Code example wrapper for AI understanding
interface CodeExampleProps {
  language: string
  title?: string
  description?: string
  children: string
}

export function CodeExample({ language, title, description, children }: CodeExampleProps) {
  return (
    <div 
      data-ai-code-example="true"
      data-ai-language={language}
      className="mb-6"
    >
      {title && (
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
      )}
      {description && (
        <p className="text-gray-400 mb-3">{description}</p>
      )}
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code data-ai-code="true" className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  )
} 