"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, DollarSign, Code } from "lucide-react"

const faqs = [
  {
    icon: Code,
    question: "What if I want to build my own use case?",
    answer: "Start with our developer portal for documentation, tools, and community support.",
    cta: "Dev Portal",
    link: "/docs",
  },
  {
    icon: DollarSign,
    question: "How can I get support or funding?",
    answer: "Apply for community grants or ecosystem funding to bring your ideas to life.",
    cta: "Community Grants",
    link: "/ecosystem/grants",
  },
  {
    icon: MessageCircle,
    question: "Need help getting started?",
    answer: "Join our active Discord community for real-time support and discussions.",
    cta: "Ask in Discord",
    link: "https://discord.gg/ergo",
  },
]

export function FAQSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find the resources you need to build, fund, or learn more about Ergo use cases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <faq.icon className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">{faq.answer}</p>

              <motion.a
                href={faq.link}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="font-medium">{faq.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
