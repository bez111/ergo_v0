import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function MiningLoading() {
  return (
    <div className="min-h-screen relative">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Skeleton className="h-12 w-3/4 mb-4 bg-gray-800" />
              <Skeleton className="h-10 w-full mb-6 bg-gray-800" />
              <Skeleton className="h-6 w-full mb-8 bg-gray-800" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-40 bg-gray-800" />
                <Skeleton className="h-12 w-40 bg-gray-800" />
              </div>
            </div>
            <Skeleton className="h-80 w-full bg-gray-800 rounded-lg" />
          </div>

          {/* Why Mine Section Skeleton */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-1/2 mx-auto mb-4 bg-gray-800" />
              <Skeleton className="h-6 w-2/3 mx-auto bg-gray-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <Skeleton className="h-8 w-8 mb-2 bg-gray-700" />
                    <Skeleton className="h-6 w-1/2 bg-gray-700" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-24 w-full bg-gray-700" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Getting Started Skeleton */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-1/2 mx-auto mb-4 bg-gray-800" />
              <Skeleton className="h-6 w-2/3 mx-auto bg-gray-800" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Skeleton className="h-80 w-full bg-gray-800 rounded-lg" />
              <Skeleton className="h-80 w-full bg-gray-800 rounded-lg" />
            </div>
          </div>

          {/* Calculator Skeleton */}
          <div>
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-1/3 mx-auto mb-4 bg-gray-800" />
              <Skeleton className="h-6 w-1/2 mx-auto bg-gray-800" />
            </div>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-20 w-full bg-gray-700" />
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full bg-gray-700" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}