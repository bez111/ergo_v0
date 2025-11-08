"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TableData {
  [key: string]: string
}

interface ResponsiveTableProps {
  title: string
  headers: string[]
  data: TableData[]
  highlightColumn?: string
  className?: string
}

export function ResponsiveTable({ 
  title, 
  headers, 
  data, 
  highlightColumn,
  className 
}: ResponsiveTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set())

  const toggleRow = (index: number) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedRows(newExpanded)
  }

  return (
    <Card className={cn("bg-black border border-white/10 rounded-3xl overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-white text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr className="border-b border-neutral-700">
                {headers.map((header, index) => (
                  <th 
                    key={header} 
                    className={cn(
                      "text-left p-4 font-semibold",
                      index === 0 ? "text-white" : 
                      highlightColumn === header ? "text-orange-400" : "text-neutral-300"
                    )}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-neutral-300">
              {data.map((row, index) => (
                <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                  {headers.map((header, headerIndex) => (
                    <td 
                      key={header}
                      className={cn(
                        "p-4",
                        headerIndex === 0 ? "font-medium text-white" :
                        highlightColumn === header ? "text-orange-300" : ""
                      )}
                    >
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          {data.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-neutral-800 last:border-b-0"
            >
              <button
                onClick={() => toggleRow(index)}
                className="w-full p-4 text-left hover:bg-neutral-800/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-white text-base mb-1">
                      {row[headers[0]]}
                    </h3>
                    {highlightColumn && row[highlightColumn] && (
                      <p className="text-orange-400 text-sm">
                        {row[highlightColumn]}
                      </p>
                    )}
                  </div>
                  {expandedRows.has(index) ? (
                    <ChevronDown className="w-5 h-5 text-neutral-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-neutral-400" />
                  )}
                </div>
              </button>
              
              {expandedRows.has(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4"
                >
                  <div className="space-y-3 pt-2 border-t border-neutral-800">
                    {headers.slice(1).map((header) => (
                      <div key={header} className="flex flex-col">
                        <span className="text-neutral-400 text-sm font-medium mb-1">
                          {header}:
                        </span>
                        <span className={cn(
                          "text-neutral-300 text-sm",
                          highlightColumn === header && "text-orange-300"
                        )}>
                          {row[header]}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
