import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-16 w-96 mx-auto mb-6 bg-gray-800" />
          <Skeleton className="h-6 w-80 mx-auto mb-4 bg-gray-800" />
          <Skeleton className="h-20 w-full max-w-2xl mx-auto bg-gray-800" />
        </div>
      </div>
    </div>
  )
}
