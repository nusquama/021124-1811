"use client"

import { useState, useRef } from "react"
import { businesses } from "@/data/businesses"
import { categories } from "@/data/categories"
import { locations } from "@/data/regions"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/hero-section"
import { LocationSlider } from "@/components/location-slider"
import { CategoryGrid } from "@/components/category-grid"
import { BusinessCard } from "@/components/business-card"
import { Filters } from "@/components/filters"
import { SectionHeader } from "@/components/section-header"

export function MainContent() {
  const businessSectionRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all-categories")
  const [selectedLocation, setSelectedLocation] = useState<string>("all-locations")
  const [sortBy, setSortBy] = useState<string>("rating")

  const filteredAndSortedBusinesses = businesses
    .filter((business) => {
      const matchesCategory = selectedCategory === "all-categories" || business.category === selectedCategory
      const matchesLocation = selectedLocation === "all-locations" || business.location === selectedLocation
      return matchesCategory && matchesLocation
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "reviews") return b.reviews - a.reviews
      if (sortBy === "price-low") return a.priceLevel.length - b.priceLevel.length
      if (sortBy === "price-high") return b.priceLevel.length - a.priceLevel.length
      return 0
    })

  const handleFilterChange = (filters: {
    category: string
    location: string
    sortBy: string
  }) => {
    setSelectedCategory(filters.category)
    setSelectedLocation(filters.location)
    setSortBy(filters.sortBy)
  }

  const handleResetFilters = () => {
    setSelectedCategory("all-categories")
    setSelectedLocation("all-locations")
    setSortBy("rating")
  }

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug)
    businessSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleLocationSelect = (slug: string) => {
    setSelectedLocation(slug)
    businessSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const hasActiveFilters = 
    selectedCategory !== "all-categories" || 
    selectedLocation !== "all-locations" || 
    sortBy !== "rating"

  const getBusinessSectionTitle = () => {
    const categoryName = selectedCategory !== "all-categories" 
      ? categories.find(c => c.slug === selectedCategory)?.name 
      : 'Featured Businesses'
    const locationName = selectedLocation !== "all-locations"
      ? locations.find(l => l.slug === selectedLocation)?.name
      : ''
    
    return locationName ? `${categoryName} in ${locationName}` : categoryName
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />

        <div className="container mx-auto px-4">
          {/* Locations Section */}
          <section className="py-16">
            <SectionHeader
              title="Popular Areas"
              description="Discover the best spots in each area of Bali"
            />
            <LocationSlider 
              locations={locations} 
              onLocationSelect={handleLocationSelect}
            />
          </section>

          {/* Categories Section */}
          <section className="py-16">
            <SectionHeader
              title="Browse Categories"
              description="Find the perfect places by category"
              action={{
                label: "View All Categories",
                href: "/categories"
              }}
            />
            <CategoryGrid 
              categories={categories.slice(0, 8)} 
              onCategorySelect={handleCategorySelect}
            />
          </section>

          {/* Businesses Section */}
          <section className="py-16" ref={businessSectionRef}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">{getBusinessSectionTitle()}</h2>
                <span className="text-muted-foreground">
                  {filteredAndSortedBusinesses.length} places found
                </span>
              </div>
              <Filters
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
                selectedCategory={selectedCategory}
                selectedLocation={selectedLocation}
                selectedSort={sortBy}
                hasActiveFilters={hasActiveFilters}
              />
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}