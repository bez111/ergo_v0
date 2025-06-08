import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen relative p-6">
      <div className="max-w-7xl mx-auto py-12">
        {/* Hero skeleton */}
        <div className="flex flex-col items-center justify-center space-y-6 mb-16">
          <Skeleton className="h-4 w-24 bg-gray-800" />
          <Skeleton className="h-16 w-3/4 max-w-2xl bg-gray-800" />
          <Skeleton className="h-10 w-1/2 max-w-md bg-gray-800" />
          <Skeleton className="h-24 w-3/4 max-w-xl bg-gray-800" />
          <Skeleton className="h-12 w-64 bg-gray-800" />
        </div>

        {/* Features skeleton */}
        <div className="mb-16">
          <Skeleton className="h-10 w-64 mx-auto mb-12 bg-gray-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border border-gray-800 rounded-lg p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Skeleton className="h-12 w-12 rounded-full bg-gray-800" />
                    <Skeleton className="h-6 w-32 bg-gray-800" />
                    <Skeleton className="h-20 w-full bg-gray-800" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA skeleton */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <Skeleton className="h-8 w-64 bg-gray-800" />
          <Skeleton className="h-6 w-96 bg-gray-800" />
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            <Skeleton className="h-12 w-full sm:w-40 bg-gray-800" />
            <Skeleton className="h-12 w-full sm:w-40 bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  )
}
