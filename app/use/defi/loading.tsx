import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DeFiLoading() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section Skeleton */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Skeleton className="h-16 w-96 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-8 w-64 mx-auto mb-4 bg-gray-800" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-12 bg-gray-800" />

          {/* Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <Skeleton className="h-8 w-20 mb-2 bg-gray-700" />
                  <Skeleton className="h-4 w-24 bg-gray-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tabs Skeleton */}
          <div className="flex space-x-1 bg-gray-900/50 p-1 rounded-lg mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 flex-1 bg-gray-700" />
            ))}
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <Skeleton className="h-6 w-32 mb-2 bg-gray-700" />
                  <Skeleton className="h-4 w-24 bg-gray-700" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-4 bg-gray-700" />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Skeleton className="h-8 bg-gray-700" />
                    <Skeleton className="h-8 bg-gray-700" />
                  </div>
                  <Skeleton className="h-10 w-full bg-gray-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
