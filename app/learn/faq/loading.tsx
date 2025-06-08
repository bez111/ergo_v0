import { Skeleton } from "@/components/ui/skeleton"

export default function FAQLoading() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section Skeleton */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-4 bg-gray-800" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-gray-800" />
        </div>
      </section>

      {/* Search and Filters Skeleton */}
      <section className="py-8 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6">
            <Skeleton className="h-10 w-full max-w-md bg-gray-800" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24 bg-gray-800" />
              <Skeleton className="h-8 w-24 bg-gray-800" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-32 bg-gray-800" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items Skeleton */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Skeleton className="h-6 w-20 mb-2 bg-gray-800" />
                  <Skeleton className="h-6 w-3/4 bg-gray-800" />
                </div>
                <Skeleton className="h-5 w-5 bg-gray-800" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
