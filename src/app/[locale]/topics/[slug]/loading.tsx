import { Skeleton } from "@/components/ui/skeleton"

export default function TopicDetailLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex gap-2 mb-8">
            <Skeleton className="h-4 w-16 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-20 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-28 bg-neutral-800" />
          </div>

          {/* Hero */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="h-16 w-16 rounded-lg bg-neutral-800" />
              <div className="flex-1">
                <Skeleton className="h-10 w-1/2 mb-2 bg-neutral-800" />
                <Skeleton className="h-6 w-3/4 bg-neutral-800" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-12">
            <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-5/6 mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-4/5 bg-neutral-800" />
          </div>

          {/* Related content sections */}
          <div className="space-y-12">
            {/* Infographics */}
            <div>
              <Skeleton className="h-8 w-48 mb-6 bg-neutral-800" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-black border border-neutral-800 rounded-lg overflow-hidden">
                    <Skeleton className="aspect-[3/4] w-full bg-neutral-800" />
                    <div className="p-4">
                      <Skeleton className="h-5 w-3/4 bg-neutral-800" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div>
              <Skeleton className="h-8 w-40 mb-6 bg-neutral-800" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="bg-black border border-neutral-800 rounded-lg p-6">
                    <Skeleton className="h-6 w-3/4 mb-3 bg-neutral-800" />
                    <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
                    <Skeleton className="h-4 w-5/6 bg-neutral-800" />
                  </div>
                ))}
              </div>
            </div>

            {/* Glossary terms */}
            <div>
              <Skeleton className="h-8 w-44 mb-6 bg-neutral-800" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-black border border-neutral-800 rounded-lg p-4">
                    <Skeleton className="h-5 w-2/3 mb-2 bg-neutral-800" />
                    <Skeleton className="h-4 w-full bg-neutral-800" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

