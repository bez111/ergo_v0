import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ErgoScriptLoading() {
  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 py-16">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-6 w-48 mx-auto mb-4 bg-gray-800" />
          <Skeleton className="h-12 w-96 mx-auto mb-4 bg-gray-800" />
          <Skeleton className="h-6 w-64 mx-auto bg-gray-800" />
        </div>

        {/* Main Content Skeleton */}
        <Card className="mb-16 bg-gray-900/50 border-primary/20">
          <CardHeader>
            <Skeleton className="h-8 w-64 bg-gray-800" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-6 w-full mb-4 bg-gray-800" />
            <Skeleton className="h-6 w-3/4 mb-8 bg-gray-800" />
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="w-12 h-12 mx-auto mb-4 bg-gray-800" />
                  <Skeleton className="h-6 w-32 mx-auto mb-2 bg-gray-800" />
                  <Skeleton className="h-4 w-24 mx-auto bg-gray-800" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Example Skeleton */}
        <Card className="mb-16 bg-gray-900/50 border-primary/20">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-gray-800" />
          </CardHeader>
          <CardContent>
            <div className="bg-black/50 rounded-lg p-6">
              <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
              <Skeleton className="h-4 w-3/4 mb-2 bg-gray-700" />
              <Skeleton className="h-4 w-1/2 bg-gray-700" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
