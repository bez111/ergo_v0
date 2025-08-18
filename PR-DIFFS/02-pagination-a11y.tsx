// ✅ ГОТОВЫЙ PR-DIFF: Proper Pagination с A11y
// Файл: app/blog/_components/blog-pagination.tsx

import Link from 'next/link'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function BlogPagination({ currentPage, totalPages, baseUrl }: BlogPaginationProps) {
  if (totalPages <= 1) return null

  // ✅ Smart pagination logic - показываем релевантные страницы
  const getVisiblePages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages]
    }

    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
  }

  const visiblePages = getVisiblePages()

  return (
    <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
      {/* ✅ Previous Button */}
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? baseUrl : `${baseUrl}?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded-lg hover:border-brand-primary-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={`Go to previous page, page ${currentPage - 1}`}
        >
          <span aria-hidden="true">←</span>
          <span className="ml-1">Previous</span>
        </Link>
      )}

      {/* ✅ Page Numbers with proper ARIA */}
      <ol className="flex items-center gap-2" role="list">
        {visiblePages.map((page, index) => (
          <li key={`${page}-${index}`}>
            {page === '...' ? (
              <span 
                className="px-2 py-2 text-neutral-500"
                aria-hidden="true"
              >
                …
              </span>
            ) : (
              <Link
                href={page === 1 ? baseUrl : `${baseUrl}?page=${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                aria-label={
                  page === currentPage 
                    ? `Current page, page ${page}` 
                    : `Go to page ${page}`
                }
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  page === currentPage
                    ? "bg-brand-primary-500 text-black border-brand-primary-500 font-bold"
                    : "text-neutral-300 hover:text-white border-neutral-700 hover:border-brand-primary-500/50 hover:bg-neutral-800/50"
                }`}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
      </ol>

      {/* ✅ Next Button */}
      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded-lg hover:border-brand-primary-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={`Go to next page, page ${currentPage + 1}`}
        >
          <span>Next</span>
          <span className="ml-1" aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  )
}

/* 
✅ A11Y FEATURES:
1. Proper <nav> with aria-label
2. aria-current="page" for current page
3. Descriptive aria-labels for all links
4. Semantic <ol> structure for page list
5. Visual indicators for current page
6. Focus-visible support with proper contrast
7. Smart ellipsis for large page counts
*/ 