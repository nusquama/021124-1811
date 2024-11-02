"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LocationCard } from "@/components/location-card"
import { Location } from "@/data/regions"

interface LocationSliderProps {
  locations: Location[]
  onLocationSelect?: (slug: string) => void
}

export function LocationSlider({ locations, onLocationSelect }: LocationSliderProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const locationsPerPage = 8
  const totalPages = Math.ceil(locations.length / locationsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentLocations = locations.slice(
    currentPage * locationsPerPage,
    (currentPage + 1) * locationsPerPage
  )

  return (
    <div className="relative">
      <div className="absolute -right-4 top-[-5.5rem] flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentLocations.map((location) => (
          <LocationCard 
            key={location.name} 
            location={location} 
            onClick={() => onLocationSelect?.(location.slug)}
          />
        ))}
      </div>
    </div>
  )
}