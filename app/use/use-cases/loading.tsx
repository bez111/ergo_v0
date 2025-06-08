import { Skeleton } from "@/components/ui/skeleton"

export default function UseCasesLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-16 w-96 mx-auto mb-6 bg-slate-800" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto bg-slate-800" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <Skeleton className="w-12 h-12 bg-slate-800" />
                <Skeleton className="h-8 w-48 bg-slate-800" />
              </div>
              <Skeleton className="h-4 w-full mb-2 bg-slate-800" />
              <Skeleton className="h-4 w-3/4 mb-6 bg-slate-800" />

              <div className="space-y-2 mb-8">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Skeleton className="w-2 h-2 rounded-full bg-slate-800" />
                    <Skeleton className="h-4 w-32 bg-slate-800" />
                  </div>
                ))}
              </div>

              <Skeleton className="h-12 w-full bg-slate-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
