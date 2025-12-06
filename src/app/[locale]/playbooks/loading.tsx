import { Skeleton } from "@/components/ui/skeleton"

export default function PlaybooksLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-2/3 mx-auto mb-4 bg-neutral-800" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-neutral-800" />
          </div>

          {/* Category Tabs Skeleton */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-32 rounded-lg bg-neutral-800" />
            ))}
          </div>

          {/* Playbooks Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-black border border-neutral-800 rounded-lg overflow-hidden">
                {/* Header with icon */}
                <div className="p-6 border-b border-neutral-800">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-12 w-12 rounded-lg bg-neutral-800" />
                    <div className="flex-1">
                      <Skeleton className="h-6 w-3/4 mb-2 bg-neutral-800" />
                      <Skeleton className="h-4 w-full bg-neutral-800" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Steps preview */}
                  <div className="space-y-3 mb-4">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <Skeleton className="h-6 w-6 rounded-full bg-neutral-800" />
                        <Skeleton className="h-4 w-full bg-neutral-800" />
                      </div>
                    ))}
                  </div>
                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                    <Skeleton className="h-4 w-20 bg-neutral-800" />
                    <Skeleton className="h-4 w-24 bg-neutral-800" />
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

