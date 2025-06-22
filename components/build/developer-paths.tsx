"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { StaggerContainer } from "@/components/animations/stagger-container"
import Link from "next/link"
import { developerPaths } from "@/lib/build-page-data"

export function DeveloperPaths() {
  return (
    <section className="mb-24">
      <SectionHeading text="Find Your Path" />
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developerPaths.map((path, i) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="h-full"
          >
            <Card
              className={`h-full bg-gradient-to-br ${path.color} border border-neutral-700 hover:border-orange-500/50 transition-all duration-300 flex flex-col`}
            >
              <CardContent className="p-8 flex flex-col flex-grow">
                <path.icon className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{path.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{path.description}</p>
                <Button asChild className="mt-auto bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                  <Link href={path.href}>{path.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  )
} 