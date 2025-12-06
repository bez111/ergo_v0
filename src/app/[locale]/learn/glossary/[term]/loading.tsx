import { Skeleton } from "@/components/ui/skeleton"

export default function GlossaryTermLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex gap-2 mb-8">
            <Skeleton className="h-4 w-16 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-20 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-24 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-28 bg-neutral-800" />
          </div>

          {/* Category & difficulty badges */}
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-6 w-24 rounded-full bg-neutral-800" />
            <Skeleton className="h-6 w-20 rounded-full bg-neutral-800" />
          </div>

          {/* Term title */}
          <Skeleton className="h-12 w-2/3 mb-4 bg-neutral-800" />

          {/* Short definition */}
          <Skeleton className="h-6 w-full mb-2 bg-neutral-800" />
          <Skeleton className="h-6 w-4/5 mb-8 bg-neutral-800" />

          {/* Full definition */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-32 mb-4 bg-neutral-800" />
            <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-5/6 mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-4/5 mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-full bg-neutral-800" />
          </div>

          {/* Key points */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-28 mb-4 bg-neutral-800" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="h-5 w-5 rounded-full bg-neutral-800" />
                  <Skeleton className="h-4 w-full bg-neutral-800" />
                </div>
              ))}
            </div>
          </div>

          {/* Technical details */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-40 mb-4 bg-neutral-800" />
            <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-5/6 mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-4/5 bg-neutral-800" />
          </div>

          {/* Use cases */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-28 mb-4 bg-neutral-800" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="h-8 w-8 rounded bg-neutral-800" />
                  <Skeleton className="h-4 w-full bg-neutral-800" />
                </div>
              ))}
            </div>
          </div>

          {/* Related terms */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-36 mb-4 bg-neutral-800" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-24 rounded-full bg-neutral-800" />
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6">
            <Skeleton className="h-6 w-48 mb-4 bg-neutral-800" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border-b border-neutral-800 pb-4 last:border-0">
                  <Skeleton className="h-5 w-3/4 mb-2 bg-neutral-800" />
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

