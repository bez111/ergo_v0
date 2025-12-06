import { Skeleton } from "@/components/ui/skeleton"

export default function CompareLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-2/3 mx-auto mb-4 bg-neutral-800" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-neutral-800" />
          </div>

          {/* Comparison Cards Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-black border border-neutral-800 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-neutral-800">
                  <div className="flex items-center gap-4">
                    {/* Ergo logo placeholder */}
                    <Skeleton className="h-12 w-12 rounded-full bg-neutral-800" />
                    <Skeleton className="h-6 w-8 bg-neutral-800" />
                    {/* Competitor logo placeholder */}
                    <Skeleton className="h-12 w-12 rounded-full bg-neutral-800" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3 bg-neutral-800" />
                  <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
                  <Skeleton className="h-4 w-5/6 mb-4 bg-neutral-800" />
                  {/* Key differences */}
                  <div className="space-y-2 mb-4">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded bg-neutral-800" />
                        <Skeleton className="h-4 w-full bg-neutral-800" />
                      </div>
                    ))}
                  </div>
                  {/* Tags */}
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full bg-neutral-800" />
                    <Skeleton className="h-6 w-20 rounded-full bg-neutral-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

