import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DAppsLoading() {
  return (
    <div className="min-h-screen relative">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="text-center mb-20">
            <Skeleton className="h-20 w-3/4 mx-auto mb-6 bg-gray-800" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-12 bg-gray-800" />
            <Skeleton className="h-12 w-96 mx-auto bg-gray-800" />
          </div>

          {/* Featured Section Skeleton */}
          <div className="mb-12">
            <Skeleton className="h-10 w-48 mb-6 bg-gray-800" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Skeleton className="h-8 w-8 bg-gray-700" />
                      <Skeleton className="h-6 w-16 bg-gray-700" />
                    </div>
                    <Skeleton className="h-6 w-3/4 bg-gray-700" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 mb-4 bg-gray-700" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-12 bg-gray-700" />
                      <Skeleton className="h-4 w-12 bg-gray-700" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filters Skeleton */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 bg-gray-800" />
            ))}
          </div>

          {/* Main Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-8 w-8 bg-gray-700" />
                    <Skeleton className="h-6 w-16 bg-gray-700" />
                  </div>
                  <Skeleton className="h-6 w-3/4 bg-gray-700" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
                  <Skeleton className="h-4 w-2/3 mb-4 bg-gray-700" />
                  <div className="flex gap-1 mb-4">
                    <Skeleton className="h-5 w-12 bg-gray-700" />
                    <Skeleton className="h-5 w-16 bg-gray-700" />
                    <Skeleton className="h-5 w-14 bg-gray-700" />
                  </div>
                  <div className="flex justify-between mb-4">
                    <Skeleton className="h-4 w-12 bg-gray-700" />
                    <Skeleton className="h-4 w-12 bg-gray-700" />
                  </div>
                  <Skeleton className="h-10 w-full bg-gray-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
