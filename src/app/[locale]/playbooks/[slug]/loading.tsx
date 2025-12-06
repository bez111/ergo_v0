import { Skeleton } from "@/components/ui/skeleton"

export default function PlaybookDetailLoading() {
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
            <Skeleton className="h-4 w-40 bg-neutral-800" />
          </div>

          {/* Hero */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="h-16 w-16 rounded-lg bg-neutral-800" />
              <div className="flex-1">
                <Skeleton className="h-10 w-3/4 mb-2 bg-neutral-800" />
                <Skeleton className="h-6 w-1/2 bg-neutral-800" />
              </div>
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-5 w-24 bg-neutral-800" />
              <Skeleton className="h-5 w-20 bg-neutral-800" />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <Skeleton className="h-4 w-24 bg-neutral-800" />
              <Skeleton className="h-4 w-16 bg-neutral-800" />
            </div>
            <Skeleton className="h-2 w-full rounded-full bg-neutral-800" />
          </div>

          {/* Problem statement */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-32 mb-4 bg-neutral-800" />
            <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-5/6 bg-neutral-800" />
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-black border border-neutral-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-8 w-8 rounded-full bg-neutral-800" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-3/4 mb-3 bg-neutral-800" />
                    <Skeleton className="h-4 w-full mb-2 bg-neutral-800" />
                    <Skeleton className="h-4 w-5/6 mb-4 bg-neutral-800" />
                    <Skeleton className="h-10 w-32 rounded bg-neutral-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-40 mb-4 bg-neutral-800" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded bg-neutral-800" />
                  <Skeleton className="h-5 w-24 bg-neutral-800" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black border border-neutral-800 rounded-lg p-8 text-center">
            <Skeleton className="h-8 w-2/3 mx-auto mb-4 bg-neutral-800" />
            <Skeleton className="h-12 w-48 mx-auto rounded-lg bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  )
}

