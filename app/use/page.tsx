"use client"

import { useCases } from "./data"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { UseCaseCard } from "@/components/use-cases/use-case-card"

export default function UsePage() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block text-center"
      >
        Ergo Use Cases
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {useCases.map((uc, idx) => (
          <UseCaseCard key={uc.id} useCase={uc} index={idx} />
        ))}
      </motion.div>
    </div>
  )
} 