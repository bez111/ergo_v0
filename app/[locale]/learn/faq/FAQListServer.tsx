import { getTranslations } from "next-intl/server"
import { faqData } from "./faqData"

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")

export default async function FAQListServer({ 
  data = faqData, 
  rootId = "faq-root",
  locale 
}: { 
  data?: typeof faqData
  rootId?: string
  locale: string
}) {
  const t = await getTranslations({ locale, namespace: 'learn.faq' })
  
  const categories = [...new Set(data.map((q) => q.category))]

  return (
    <div id={rootId} className="space-y-8">
      {/* Categories ToC */}
      <nav className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('categories.title') || 'Categories'}</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#category-${cat}`}
              className="px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-sm"
            >
              {t(`categories.${cat}`) || cat}
            </a>
          ))}
        </div>
      </nav>

      {/* FAQ by category */}
      {categories.map((category) => {
        const categoryQuestions = data.filter((q) => q.category === category)
        return (
          <section key={category} id={`category-${category}`} className="space-y-4">
            <h2 className="text-3xl font-bold capitalize">{t(`categories.${category}`) || category}</h2>
            <div className="space-y-3">
              {categoryQuestions.map((q) => (
                <details
                  key={q.id}
                  data-faq-item
                  data-faq-question={q.question.toLowerCase()}
                  data-faq-answer={q.answer.toLowerCase()}
                  className="group bg-neutral-900/30 border border-neutral-800 rounded-lg overflow-hidden"
                >
                  <summary
                    id={slug(q.question)}
                    className="cursor-pointer p-4 hover:bg-neutral-800/50 transition-colors"
                  >
                    <h3 className="text-lg font-medium inline">{q.question}</h3>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-300 leading-relaxed">
                    {q.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
} 