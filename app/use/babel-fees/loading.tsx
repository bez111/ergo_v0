import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero skeleton */}
        <div className="text-center py-20">
          <Skeleton className="h-16 w-3/4 mx-auto mb-4 bg-gray-800" />
          <Skeleton className="h-8 w-1/2 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-gray-800" />
        </div>

        {/* Content skeletons */}
        <div className="space-y-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
              <Skeleton className="h-8 w-1/3 mb-4 bg-gray-800" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full bg-gray-800" />
                <Skeleton className="h-4 w-5/6 bg-gray-800" />
                <Skeleton className="h-4 w-4/6 bg-gray-800" />
              </div>
              {i === 3 && (
                <div className="mt-4 p-4 bg-gray-800/30 rounded">
                  <Skeleton className="h-20 w-full bg-gray-700" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
