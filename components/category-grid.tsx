"use client"

import { CategoryCard } from "@/components/category-card"
import { Category } from "@/data/categories"

interface CategoryGridProps {
  categories: Category[]
  onCategorySelect?: (slug: string) => void
}

export function CategoryGrid({ categories, onCategorySelect }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard 
          key={category.name} 
          category={category} 
          onClick={() => onCategorySelect?.(category.slug)}
        />
      ))}
    </div>
  )
}