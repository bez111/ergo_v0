import { Skeleton } from "@/components/ui/skeleton"

export default function QuestionDetailLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex gap-2 mb-8">
            <Skeleton className="h-4 w-16 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-24 bg-neutral-800" />
            <Skeleton className="h-4 w-4 bg-neutral-800" />
            <Skeleton className="h-4 w-32 bg-neutral-800" />
          </div>

          {/* Category badge */}
          <Skeleton className="h-6 w-24 rounded-full mb-6 bg-neutral-800" />

          {/* Question title */}
          <Skeleton className="h-10 w-full mb-2 bg-neutral-800" />
          <Skeleton className="h-10 w-3/4 mb-8 bg-neutral-800" />

          {/* Meta info */}
          <div className="flex gap-4 mb-8">
            <Skeleton className="h-5 w-20 bg-neutral-800" />
            <Skeleton className="h-5 w-24 bg-neutral-800" />
          </div>

          {/* Short answer */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-32 mb-4 bg-neutral-800" />
            <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-5/6 mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-4/5 bg-neutral-800" />
          </div>

          {/* Key points */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-28 mb-4 bg-neutral-800" />
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="h-5 w-5 rounded-full bg-neutral-800" />
                  <Skeleton className="h-4 w-full bg-neutral-800" />
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-36 mb-4 bg-neutral-800" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded bg-neutral-800" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-3/4 mb-1 bg-neutral-800" />
                    <Skeleton className="h-4 w-1/2 bg-neutral-800" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related questions */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6">
            <Skeleton className="h-6 w-40 mb-4 bg-neutral-800" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full rounded-lg bg-neutral-800" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

