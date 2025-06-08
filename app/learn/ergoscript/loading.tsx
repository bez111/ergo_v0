import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Skeleton className="h-12 w-3/4 bg-gray-800 mb-4" />
              <Skeleton className="h-6 w-full bg-gray-800 mb-2" />
              <Skeleton className="h-6 w-5/6 bg-gray-800 mb-8" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-36 bg-gray-800" />
                <Skeleton className="h-12 w-36 bg-gray-800" />
              </div>
            </div>
            <Skeleton className="h-64 w-full bg-gray-800 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Why Learn Section Skeleton */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 bg-gray-800 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section Skeleton */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 bg-gray-800 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview Skeleton */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 bg-gray-800 mx-auto mb-6" />
          <Skeleton className="h-6 w-48 bg-gray-800 mx-auto mb-12" />

          <Skeleton className="h-64 w-full max-w-3xl mx-auto bg-gray-800 rounded-lg mb-12" />

          <div className="flex justify-center gap-4 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 bg-gray-800 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Module Details Skeleton */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 bg-gray-800 mx-auto mb-6" />
          <Skeleton className="h-6 w-80 bg-gray-800 mx-auto mb-12" />

          <div className="space-y-6 max-w-4xl mx-auto">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-16 w-full bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
