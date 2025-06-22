"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { quickLinks } from "@/lib/build-page-data"

export function QuickLinks() {
  return (
    <section className="mb-24">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickLinks.map((link, i) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="h-full"
          >
            <Link href={link.href} target={link.external ? "_blank" : "_self"} className="block h-full">
              <Card className="h-full bg-neutral-900/50 border border-neutral-700/50 hover:border-orange-500/50 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-orange-500/10 p-3 rounded-full mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <link.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{link.title}</h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                  {link.external && (
                    <ExternalLink className="w-3 h-3 text-gray-500 absolute top-4 right-4" />
                  )}
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  )
} 