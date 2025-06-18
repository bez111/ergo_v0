import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { SectionHeading } from "@/components/section-heading"

export default function GuidesLoading() {
  return (
    <main className="container mx-auto px-4 py-16 text-neutral-100 relative z-10 min-h-screen">
      <SectionHeading className="mb-8 text-center">
        <Skeleton className="h-12 w-1/2 mx-auto bg-neutral-700" />
      </SectionHeading>
      <Skeleton className="h-8 w-3/4 md:w-1/2 mx-auto mb-8 bg-neutral-700" />

      <div className="mb-12 max-w-xl mx-auto">
        <Skeleton className="h-12 w-full bg-neutral-700 rounded-lg" />
      </div>

      {[1, 2, 3].map((categoryKey) => (
        <section key={categoryKey} className="mb-16">
          <div className="flex items-center mb-6">
            <Skeleton className="h-8 w-8 mr-3 rounded-full bg-neutral-700" />
            <Skeleton className="h-8 w-1/3 bg-neutral-700" />
          </div>
          <Skeleton className="h-6 w-2/3 mb-8 ml-11 bg-neutral-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((guideKey) => (
              <Card key={guideKey} className="bg-neutral-800/60 border-neutral-700/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <Skeleton className="h-6 w-6 mr-2 rounded-full bg-neutral-700" />
                    <Skeleton className="h-6 w-3/4 bg-neutral-700" />
                  </div>
                  <Skeleton className="h-4 w-1/4 bg-neutral-700" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2 bg-neutral-700" />
                  <Skeleton className="h-4 w-2/3 mb-4 bg-neutral-700" />
                  <Skeleton className="h-10 w-full bg-neutral-700 rounded-md" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
