import { Skeleton } from "@/components/ui/skeleton"

export default function CompareDetailLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex gap-2 mb-8">
            <Skeleton className="h-4 w-16 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-24 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-32 bg-neutral-800" />
          </div>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-6 mb-6">
              <Skeleton className="h-20 w-20 rounded-full bg-neutral-800" />
              <Skeleton className="h-8 w-12 bg-neutral-800" />
              <Skeleton className="h-20 w-20 rounded-full bg-neutral-800" />
            </div>
            <Skeleton className="h-10 w-2/3 mx-auto mb-4 bg-neutral-800" />
            <Skeleton className="h-6 w-1/2 mx-auto bg-neutral-800" />
          </div>

          {/* Summary */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-12">
            <Skeleton className="h-6 w-32 mb-4 bg-neutral-800" />
            <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-5/6 mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-4/5 bg-neutral-800" />
          </div>

          {/* Comparison table */}
          <div className="bg-black border border-neutral-800 rounded-lg overflow-hidden mb-12">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-neutral-800">
              <Skeleton className="h-6 w-24 bg-neutral-800" />
              <Skeleton className="h-6 w-20 bg-neutral-800" />
              <Skeleton className="h-6 w-28 bg-neutral-800" />
            </div>
            {/* Rows */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-4 border-b border-neutral-800 last:border-0">
                <Skeleton className="h-5 w-full bg-neutral-800" />
                <Skeleton className="h-5 w-full bg-neutral-800" />
                <Skeleton className="h-5 w-full bg-neutral-800" />
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-8 mb-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-black border border-neutral-800 rounded-lg p-6">
                <Skeleton className="h-8 w-1/3 mb-4 bg-neutral-800" />
                <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
                <Skeleton className="h-4 w-5/6 mb-2 bg-neutral-800" />
                <Skeleton className="h-4 w-4/5 mb-4 bg-neutral-800" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="flex gap-2">
                      <Skeleton className="h-4 w-4 rounded bg-neutral-800" />
                      <Skeleton className="h-4 w-full bg-neutral-800" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6">
            <Skeleton className="h-8 w-48 mb-6 bg-neutral-800" />
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-b border-neutral-800 pb-4 last:border-0">
                  <Skeleton className="h-6 w-3/4 mb-2 bg-neutral-800" />
                  <Skeleton className="h-4 w-full bg-neutral-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

