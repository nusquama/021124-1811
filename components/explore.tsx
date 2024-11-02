"use client"

import { useState } from "react"
import { categories } from "@/data/categories"
import { locations, regions } from "@/data/regions"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SearchSection } from "@/components/explore/search-section"
import { ExploreTabs } from "@/components/explore/explore-tabs"

export function Explore() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("areas")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const filteredLocations = locations.filter((location) => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === "all" || location.region.toLowerCase() === selectedRegion
    return matchesSearch && matchesRegion
  })

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <SearchSection 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <ExploreTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            selectedRegion={selectedRegion}
            onRegionChange={setSelectedRegion}
            regions={regions}
            filteredLocations={filteredLocations}
            filteredCategories={filteredCategories}
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}