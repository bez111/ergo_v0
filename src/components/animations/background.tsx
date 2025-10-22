"use client"

import { motion } from "framer-motion"

export default function Background() {
  return (
    <>
      {/* Анимированные линии сетки */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] z-0"
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "40px 40px" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Светящиеся элементы */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0"
        initial={{ scale: 1.2, opacity: 0.6 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </>
  )
} 