"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchBar } from "@/components/search-bar"

interface SiteHeaderProps {
  onSearch?: (query: string) => void
  initialSearch?: string
}

export function SiteHeader({ onSearch, initialSearch = "" }: SiteHeaderProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link className="flex items-center gap-2 text-xl font-bold" href="/">
            <MapPin className="h-6 w-6 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              BaliGuide
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="/blog">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar 
            onSearch={handleSearch} 
            className="hidden md:block w-[300px]" 
            initialValue={searchQuery}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}