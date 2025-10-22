import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ResearchLoading() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-gray-800" />
          <div className="flex flex-wrap justify-center gap-4">
            <Skeleton className="h-8 w-32 bg-gray-800" />
            <Skeleton className="h-8 w-40 bg-gray-800" />
            <Skeleton className="h-8 w-36 bg-gray-800" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Key Papers Section Skeleton */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-2/3 mx-auto mb-4 bg-gray-800" />
            <Skeleton className="h-6 w-1/2 mx-auto bg-gray-800" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-700/50">
                <CardHeader>
                  <Skeleton className="h-6 w-20 mb-2 bg-gray-700" />
                  <Skeleton className="h-6 w-full bg-gray-700" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-16 w-full mb-4 bg-gray-700" />
                  <Skeleton className="h-8 w-full bg-gray-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Research Section Skeleton */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/2 mx-auto mb-4 bg-gray-800" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-gray-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-700/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-lg bg-gray-700" />
                    <Skeleton className="h-6 w-48 bg-gray-700" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <Skeleton key={j} className="h-12 w-full bg-gray-700" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Developer Resources Section Skeleton */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-2/3 mx-auto mb-4 bg-gray-800" />
            <Skeleton className="h-6 w-1/2 mx-auto bg-gray-800" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-700/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Skeleton className="h-10 w-10 rounded-lg bg-gray-700" />
                    <Skeleton className="h-6 w-32 bg-gray-700" />
                  </div>
                  <Skeleton className="h-8 w-full bg-gray-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}