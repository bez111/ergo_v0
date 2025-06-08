"use client"

import { motion } from "framer-motion"
import { Search, MousePointer, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Choose Use Case",
    description: "Identify the real-world problem you want to solve",
  },
  {
    icon: MousePointer,
    title: "Select Project",
    description: "Pick from vetted projects that address your use case",
  },
  {
    icon: Rocket,
    title: "Start Using",
    description: "Begin leveraging Ergo's technology for your needs",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">How do use cases become reality on Ergo?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-gray-300" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
