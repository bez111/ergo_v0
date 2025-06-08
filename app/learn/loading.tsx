import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Skeleton className="h-16 w-64 bg-gray-800 mx-auto mb-6" />
            <Skeleton className="h-8 w-96 bg-gray-800 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 bg-gray-800 mx-auto" />
          </div>
        </div>
      </section>

      {/* Learning Resources Skeleton */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 bg-gray-800 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Skeleton */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-10 w-48 bg-gray-800 mx-auto mb-6" />
            <Skeleton className="h-6 w-64 bg-gray-800 mx-auto mb-8" />
            <div className="flex justify-center gap-4">
              <Skeleton className="h-12 w-32 bg-gray-800" />
              <Skeleton className="h-12 w-32 bg-gray-800" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
