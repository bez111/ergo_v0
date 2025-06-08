import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function EUTXOModelLoading() {
  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-cyan-500/5" />
      <div className="fixed inset-0 bg-[url('/cyberpunk-grid.png')] opacity-10" />

      <div className="relative z-10">
        {/* Hero Section Skeleton */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-8 w-48 mx-auto mb-6 bg-gray-800" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-6 bg-gray-800" />
            <Skeleton className="h-8 w-3/4 mx-auto mb-8 bg-gray-800" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-gray-800" />
          </div>
        </section>

        {/* Introduction Skeleton */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <Skeleton className="h-8 w-48 mb-6 bg-gray-800" />
                <Skeleton className="h-4 w-full mb-4 bg-gray-800" />
                <Skeleton className="h-4 w-full mb-4 bg-gray-800" />
                <Skeleton className="h-4 w-3/4 bg-gray-800" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Model Comparison Skeleton */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <Skeleton className="h-12 w-96 mx-auto mb-12 bg-gray-800" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[1, 2].map((i) => (
                <Card key={i} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-8">
                    <Skeleton className="h-8 w-64 mb-4 bg-gray-800" />
                    <Skeleton className="h-4 w-full mb-4 bg-gray-800" />
                    <Skeleton className="h-4 w-3/4 mb-6 bg-gray-800" />

                    <div className="space-y-4">
                      <div>
                        <Skeleton className="h-5 w-24 mb-2 bg-gray-800" />
                        <Skeleton className="h-3 w-full bg-gray-800" />
                      </div>
                      <div>
                        <Skeleton className="h-5 w-24 mb-2 bg-gray-800" />
                        <Skeleton className="h-3 w-full bg-gray-800" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Box Components Skeleton */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-12 w-80 mx-auto mb-12 bg-gray-800" />

            <Card className="bg-gray-900/50 border-gray-800 mb-12">
              <CardContent className="p-8">
                <Skeleton className="h-6 w-full mx-auto bg-gray-800" />
              </CardContent>
            </Card>

            <Skeleton className="h-10 w-96 mx-auto mb-8 bg-gray-800" />

            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Skeleton className="w-12 h-12 bg-gray-800 rounded-lg" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-32 mb-2 bg-gray-800" />
                        <Skeleton className="h-4 w-full bg-gray-800" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transaction Steps Skeleton */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-12 w-80 mx-auto mb-12 bg-gray-800" />

            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center space-x-6">
                  <Skeleton className="w-12 h-12 bg-gray-800 rounded-full flex-shrink-0" />
                  <Card className="flex-1 bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-32 mb-2 bg-gray-800" />
                      <Skeleton className="h-4 w-full bg-gray-800" />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Skeleton */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <Skeleton className="h-12 w-80 mx-auto mb-12 bg-gray-800" />

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <Skeleton className="w-12 h-12 bg-gray-800 rounded-lg" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-48 mb-2 bg-gray-800" />
                        <Skeleton className="h-4 w-full mb-4 bg-gray-800" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Skeleton className="h-4 w-20 mb-2 bg-gray-800" />
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3].map((j) => (
                          <Skeleton key={j} className="h-6 w-24 bg-gray-800 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
