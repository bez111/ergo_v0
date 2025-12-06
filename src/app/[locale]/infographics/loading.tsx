import { Skeleton } from "@/components/ui/skeleton"

export default function InfographicsLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-2/3 mx-auto mb-4 bg-neutral-800" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-neutral-800" />
          </div>

          {/* Filters Skeleton */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-24 rounded-full bg-neutral-800" />
            ))}
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden">
                {/* Image placeholder */}
                <Skeleton className="aspect-[3/4] w-full bg-neutral-800" />
                {/* Content */}
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3 bg-neutral-800" />
                  <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
                  <Skeleton className="h-4 w-2/3 mb-4 bg-neutral-800" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full bg-neutral-800" />
                    <Skeleton className="h-6 w-20 rounded-full bg-neutral-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-10 rounded bg-neutral-800" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

