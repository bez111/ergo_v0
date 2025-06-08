import { Skeleton } from "@/components/ui/skeleton"

export default function MiningLoading() {
  return (
    <div className="min-h-screen relative">
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Skeleton */}
          <div className="text-center mb-16">
            <Skeleton className="h-16 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-[600px] mx-auto mb-12" />

            {/* Stats Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          </div>

          {/* Tabs Skeleton */}
          <div className="space-y-8">
            <Skeleton className="h-12 w-full" />

            {/* Content Grid Skeleton */}
            <div className="grid md:grid-cols-2 gap-8">
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
            </div>

            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
