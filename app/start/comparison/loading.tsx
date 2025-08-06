"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ComparisonLoading() {
  return (
    <div className="min-h-screen relative">
      {/* Digital rain effect removed - was causing issues */}

      <div className="relative z-10">
        {/* Hero Section Skeleton */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Skeleton className="h-12 w-96 mx-auto mb-4 bg-gray-800" />
              <Skeleton className="h-6 w-64 mx-auto mb-2 bg-gray-800" />
              <Skeleton className="h-4 w-80 mx-auto bg-gray-800" />
            </div>

            {/* Quick Stats Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-4 text-center">
                    <Skeleton className="h-8 w-16 mx-auto mb-2 bg-gray-700" />
                    <Skeleton className="h-4 w-20 mx-auto bg-gray-700" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Skeleton */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Skeleton className="h-10 w-80 mx-auto mb-12 bg-gray-800" />

            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-gray-900/30 border border-gray-800 rounded-lg">
                {/* Header Skeleton */}
                <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} className="h-6 bg-gray-700" />
                  ))}
                </div>

                {/* Rows Skeleton */}
                {Array.from({ length: 8 }).map((_, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800/50">
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                      <Skeleton key={colIndex} className="h-8 bg-gray-700" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparisons Skeleton */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Skeleton className="h-10 w-80 mx-auto mb-12 bg-gray-800" />

            {/* Tabs Skeleton */}
            <div className="w-full mb-8">
              <div className="grid grid-cols-3 gap-2 bg-gray-900/50 border border-gray-800 rounded-lg p-1">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="h-10 bg-gray-700" />
                ))}
              </div>
            </div>

            {/* Content Cards Skeleton */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {Array.from({ length: 2 }).map((_, index) => (
                <Card key={index} className="bg-gray-900/30 border-gray-800">
                  <CardHeader>
                    <Skeleton className="h-6 w-32 bg-gray-700" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 3 }).map((_, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <Skeleton className="w-5 h-5 bg-gray-700 flex-shrink-0" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-32 mb-2 bg-gray-700" />
                          <Skeleton className="h-3 w-full bg-gray-700" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Card Skeleton */}
            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-6">
                <Skeleton className="h-6 w-48 mb-4 bg-gray-700" />
                <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
                <Skeleton className="h-4 w-3/4 bg-gray-700" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Skeleton */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-8">
                <Skeleton className="h-8 w-80 mx-auto mb-4 bg-gray-700" />
                <Skeleton className="h-5 w-96 mx-auto mb-8 bg-gray-700" />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Skeleton className="h-12 w-48 bg-gray-700" />
                  <Skeleton className="h-12 w-48 bg-gray-700" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
