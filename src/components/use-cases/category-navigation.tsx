"use client"

import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Use Cases" },
  { id: "defi", label: "DeFi" },
  { id: "privacy", label: "Privacy" },
  { id: "gaming", label: "Gaming" },
  { id: "payments", label: "Payments" },
  { id: "oracles", label: "Oracles" },
];

interface CategoryNavigationProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryNavigation({ selectedCategory, onCategoryChange }: CategoryNavigationProps) {
  return (
    <SectionContainer>
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "transition-all duration-300",
              selectedCategory === category.id
                ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                : "bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500"
            )}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </SectionContainer>
  )
}
