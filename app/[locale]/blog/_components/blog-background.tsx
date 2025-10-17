"use client"

import dynamic from "next/dynamic"

const HexagonalGrid = dynamic(
  () => import("@/components/ui-kit/signature-effects").then(m => m.HexagonalGrid),
  { ssr: false }
)

function BlogBackground() {
  return <HexagonalGrid className="opacity-[0.02]" />
}

export default BlogBackground
