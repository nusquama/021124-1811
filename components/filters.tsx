"use client"

import { X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { categories } from "@/data/categories"
import { locations } from "@/data/regions"

interface FiltersProps {
  onFilterChange: (filters: {
    search: string
    category: string
    location: string
    sortBy: string
  }) => void
  onReset: () => void
  selectedCategory?: string
  selectedLocation?: string
  selectedSort?: string
  hasActiveFilters?: boolean
}

export function Filters({
  onFilterChange,
  onReset,
  selectedCategory = "all-categories",
  selectedLocation = "all-locations",
  selectedSort = "rating",
  hasActiveFilters = false,
}: FiltersProps) {
  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({
      search: key === "search" ? value : "",
      category: key === "category" ? value : selectedCategory,
      location: key === "location" ? value : selectedLocation,
      sortBy: key === "sortBy" ? value : selectedSort,
    })
  }

  return (
    <div className="flex items-center gap-2">
      <Select value={selectedCategory} onValueChange={(value) => handleFilterChange("category", value)}>
        <SelectTrigger className="w-[160px] bg-background">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-categories">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.slug} value={category.slug}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedLocation} onValueChange={(value) => handleFilterChange("location", value)}>
        <SelectTrigger className="w-[160px] bg-background">
          <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-locations">All Locations</SelectItem>
          {locations.map((location) => (
            <SelectItem key={location.slug} value={location.slug}>
              {location.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedSort} onValueChange={(value) => handleFilterChange("sortBy", value)}>
        <SelectTrigger className="w-[160px] bg-background">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="rating">Highest Rated</SelectItem>
          <SelectItem value="reviews">Most Reviews</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>

      {hasActiveFilters && (
        <Button
          variant="outline"
          size="icon"
          onClick={onReset}
          className="h-10 w-10"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}