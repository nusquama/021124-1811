"use client"

import { useState } from "react"
import { MapPin, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { CategoryCard } from "@/components/category-card"

const categories = [
  {
    name: "Dining & Restaurants",
    count: 1243,
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    description: "From local warungs to fine dining experiences",
  },
  {
    name: "Hotels & Resorts",
    count: 856,
    icon: "🏨",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    description: "Luxury resorts and boutique hotels",
  },
  {
    name: "Activities & Adventures",
    count: 645,
    icon: "🏄‍♂️",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=800&q=80",
    description: "Surfing, diving, and outdoor adventures",
  },
  {
    name: "Wellness & Sports",
    count: 432,
    icon: "🧘‍♀️",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    description: "Yoga studios, spas, and fitness centers",
  },
  {
    name: "Cultural Experiences",
    count: 367,
    icon: "🏛️",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    description: "Temples, ceremonies, and traditional arts",
  },
  {
    name: "Beach Clubs",
    count: 289,
    icon: "🏖️",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    description: "Beachfront venues and sunset lounges",
  },
  {
    name: "Eco-Tourism",
    count: 245,
    icon: "🌿",
    image: "https://images.unsplash.com/photo-1586325194227-7625ed95172b?w=800&q=80",
    description: "Sustainable tours and nature experiences",
  },
  {
    name: "Spiritual Retreats",
    count: 198,
    icon: "🕉️",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    description: "Meditation centers and healing practices",
  },
]

export function Categories() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
            <div className="flex items-center gap-1 text-orange-500">
              <MapPin className="h-6 w-6" />
              <span>BaliGuide</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link className="text-muted-foreground" href="/">Home</Link>
            <Link className="text-muted-foreground" href="#">About</Link>
            <Link className="font-medium" href="/categories">Categories</Link>
            <Link className="text-muted-foreground" href="#">Blog</Link>
          </nav>
          <div className="flex items-center gap-4 ml-auto">
            <ThemeToggle />
            <Button variant="ghost">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
              Explore Categories
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover all that Bali has to offer, from dining to adventures
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex gap-4">
              <Input
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <div key={category.name} className="group">
                <CategoryCard category={category} />
                <div className="mt-4">
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-orange-500 group-hover:text-white transition-colors"
                      asChild
                    >
                      <Link href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        View All {category.count} Places
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container px-4 py-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="font-semibold">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Restaurants</Link></li>
                <li><Link href="#">Hotels</Link></li>
                <li><Link href="#">Activities</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Newsletter</h3>
              <form className="flex gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">© 2024 BaliGuide. All rights reserved.</p>
            <div className="flex gap-4">
              <Link className="text-muted-foreground hover:text-foreground" href="#">Facebook</Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#">Twitter</Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#">Instagram</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}