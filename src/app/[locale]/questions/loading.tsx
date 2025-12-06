import { Skeleton } from "@/components/ui/skeleton"

export default function QuestionsLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-2/3 mx-auto mb-4 bg-neutral-800" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-neutral-800" />
          </div>

          {/* Search Skeleton */}
          <div className="max-w-2xl mx-auto mb-12">
            <Skeleton className="h-12 w-full rounded-lg bg-neutral-800" />
          </div>

          {/* Category Filters Skeleton */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-28 rounded-full bg-neutral-800" />
            ))}
          </div>

          {/* Questions Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-black border border-neutral-800 rounded-lg p-6">
                {/* Category badge */}
                <Skeleton className="h-5 w-20 rounded-full mb-4 bg-neutral-800" />
                {/* Question title */}
                <Skeleton className="h-6 w-full mb-2 bg-neutral-800" />
                <Skeleton className="h-6 w-3/4 mb-4 bg-neutral-800" />
                {/* Short answer */}
                <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
                <Skeleton className="h-4 w-5/6 mb-4 bg-neutral-800" />
                {/* Meta */}
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-16 bg-neutral-800" />
                  <Skeleton className="h-4 w-20 bg-neutral-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

