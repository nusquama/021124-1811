export interface Location {
  name: string
  count: number
  image: string
  description: string
  slug: string
  region: string
  places?: string[]
}

export const regions = [
  "South Bali",
  "Central Bali",
  "East Bali",
  "North Bali",
  "West Bali",
  "Nusa Islands"
] as const

export const locations: Location[] = [
  // South Bali
  {
    name: "Kuta",
    count: 876,
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
    description: "Vibrant nightlife hub",
    slug: "kuta",
    region: "South Bali",
    places: ["Kuta Beach", "Legian", "Tuban", "Jalan Pantai Kuta", "Discovery Shopping Mall"]
  },
  {
    name: "Seminyak",
    count: 1243,
    image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2a?w=800&q=80",
    description: "Trendy beach resort area",
    slug: "seminyak",
    region: "South Bali",
    places: ["Petitenget", "Oberoi", "Jalan Kayu Aya", "Batu Belig"]
  },
  {
    name: "Canggu",
    count: 987,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    description: "Surfer's paradise",
    slug: "canggu",
    region: "South Bali",
    places: ["Berawa Beach", "Batu Bolong Beach", "Echo Beach", "Pererenan"]
  },
  {
    name: "Jimbaran",
    count: 543,
    image: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=800&q=80",
    description: "Famous for seafood dining",
    slug: "jimbaran",
    region: "South Bali",
    places: ["Kedonganan", "Balangan Beach", "Muaya Beach", "Garuda Wisnu Kencana"]
  },
  {
    name: "Nusa Dua",
    count: 654,
    image: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&q=80",
    description: "Luxury resort enclave",
    slug: "nusa-dua",
    region: "South Bali",
    places: ["Benoa", "Tanjung Benoa", "Sawangan", "Geger Beach"]
  },

  // Central Bali
  {
    name: "Ubud",
    count: 1567,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "Cultural heart of Bali",
    slug: "ubud",
    region: "Central Bali",
    places: ["Monkey Forest", "Campuhan Ridge Walk", "Ubud Palace", "Tegallalang Rice Terraces"]
  },
  {
    name: "Tegallalang",
    count: 234,
    image: "https://images.unsplash.com/photo-1513625667-33c843e38fb5?w=800&q=80",
    description: "Famous rice terraces",
    slug: "tegallalang",
    region: "Central Bali",
    places: ["Tegallalang Rice Terraces", "Ceking Rice Fields", "Kenderan"]
  },

  // East Bali
  {
    name: "Amed",
    count: 256,
    image: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?w=800&q=80",
    description: "Snorkeling and diving paradise",
    slug: "amed",
    region: "East Bali",
    places: ["Jemeluk Bay", "Lipah Beach", "Japanese Shipwreck"]
  },
  {
    name: "Candidasa",
    count: 198,
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80",
    description: "Peaceful coastal retreat",
    slug: "candidasa",
    region: "East Bali",
    places: ["Lotus Lagoon", "Virgin Beach", "Blue Lagoon Beach", "Tenganan"]
  },

  // North Bali
  {
    name: "Lovina",
    count: 287,
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
    description: "Dolphin watching destination",
    slug: "lovina",
    region: "North Bali",
    places: ["Kalibukbuk", "Anturan", "Temukus", "Banyualit"]
  },
  {
    name: "Singaraja",
    count: 245,
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=800&q=80",
    description: "Historical capital",
    slug: "singaraja",
    region: "North Bali",
    places: ["Pura Beji Sangsit", "Air Sanih", "Gitgit Waterfall"]
  },

  // Nusa Islands
  {
    name: "Nusa Penida",
    count: 345,
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&q=80",
    description: "Island adventure destination",
    slug: "nusa-penida",
    region: "Nusa Islands",
    places: ["Kelingking Beach", "Angel's Billabong", "Crystal Bay", "Diamond Beach"]
  },
  {
    name: "Nusa Lembongan",
    count: 267,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
    description: "Island getaway",
    slug: "nusa-lembongan",
    region: "Nusa Islands",
    places: ["Dream Beach", "Devil's Tears", "Mushroom Bay", "Mangrove Point"]
  }
]