import { Skeleton } from "@/components/ui/skeleton"

export default function InfographicDetailLoading() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Skeleton className="h-10 w-48 mb-8 bg-neutral-800" />

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-5 w-20 rounded-full bg-neutral-800" />
              <Skeleton className="h-5 w-16 rounded-full bg-neutral-800" />
              <Skeleton className="h-5 w-24 rounded-full bg-neutral-800" />
            </div>
            <Skeleton className="h-12 w-3/4 mb-4 bg-neutral-800" />
            <Skeleton className="h-6 w-1/2 mb-6 bg-neutral-800" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16 rounded-full bg-neutral-800" />
              <Skeleton className="h-6 w-20 rounded-full bg-neutral-800" />
              <Skeleton className="h-6 w-18 rounded-full bg-neutral-800" />
            </div>
          </div>

          {/* Main image */}
          <div className="mb-12">
            <Skeleton className="aspect-[3/4] max-w-2xl mx-auto rounded-lg bg-neutral-800" />
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Skeleton className="h-12 w-32 rounded-lg bg-neutral-800" />
            <Skeleton className="h-12 w-32 rounded-lg bg-neutral-800" />
          </div>

          {/* Content sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-black border border-neutral-800 rounded-lg p-6">
                <Skeleton className="h-6 w-1/3 mb-4 bg-neutral-800" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-neutral-800" />
                  <Skeleton className="h-4 w-5/6 bg-neutral-800" />
                  <Skeleton className="h-4 w-4/5 bg-neutral-800" />
                </div>
              </div>
            ))}
          </div>

          {/* Embed section */}
          <div className="bg-black border border-neutral-800 rounded-lg p-6">
            <Skeleton className="h-6 w-48 mb-4 bg-neutral-800" />
            <Skeleton className="h-24 w-full rounded bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  )
}

