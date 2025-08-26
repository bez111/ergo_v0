import { Skeleton } from "@/components/ui/skeleton"

export default function GrantsLoading() {
  return (
    <div className="min-h-screen relative">
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-20 w-96 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-16 w-64 mx-auto mb-8 bg-gray-800" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-12 bg-gray-800" />

          <div className="flex justify-center items-center gap-4 mb-12">
            <Skeleton className="h-6 w-6 bg-gray-800" />
            <Skeleton className="h-6 w-48 bg-gray-800" />
          </div>

          <div className="max-w-md mx-auto flex gap-2">
            <Skeleton className="h-12 flex-1 bg-gray-800" />
            <Skeleton className="h-12 w-32 bg-gray-800" />
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-16 bg-gray-800" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <Skeleton className="h-12 w-12 mx-auto mb-4 bg-gray-800" />
                <Skeleton className="h-6 w-32 mx-auto mb-3 bg-gray-800" />
                <Skeleton className="h-16 w-full bg-gray-800" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
