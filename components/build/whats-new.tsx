"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import Link from "next/link"
import { whatsNew } from "@/lib/build-page-data"

export function WhatsNew() {
  return (
    <section className="mb-24">
      <SectionHeading text="What's New" />
      <div className="grid md:grid-cols-3 gap-6">
        {whatsNew.map(item => (
          <Link href={item.href} key={item.title} className="block group">
            <Card className="h-full bg-neutral-900/50 border border-neutral-700/50 group-hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                <h3 className="font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
} 