"use client"

import Image from "next/image"

interface LocationCardProps {
  location: {
    name: string
    count: number
    image: string
    description: string
    slug: string
  }
  onClick?: () => void
}

export function LocationCard({ location, onClick }: LocationCardProps) {
  return (
    <div 
      className="relative w-full h-[200px] rounded-lg overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={location.image}
        alt={location.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-2xl font-semibold mb-1">{location.name}</h3>
        <p className="text-sm text-white/90 mb-1">{location.description}</p>
        <p className="text-sm font-medium">{location.count} places</p>
      </div>
    </div>
  )
}