"use client"

import Image from "next/image"

interface CategoryCardProps {
  category: {
    name: string
    count: number
    image: string
    slug: string
  }
  onClick?: () => void
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <div 
      className="relative w-full h-[200px] rounded-lg overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-2xl font-semibold mb-1">{category.name}</h3>
        <p className="text-sm font-medium">{category.count} places</p>
      </div>
    </div>
  )
}