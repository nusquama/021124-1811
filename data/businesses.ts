export interface Business {
  id: number
  name: string
  rating: number
  reviews: number
  address: string
  status: string
  opensAt: string
  priceLevel: string
  tags: string[]
  category: string
  location: string
  image: string
}

export const businesses: Business[] = [
  {
    id: 1,
    name: "Bambu",
    rating: 4.6,
    reviews: 1309,
    address: "Jl. Petitenget No.198, Kerobokan Kelod",
    status: "Open",
    opensAt: "12 PM",
    priceLevel: "$$$",
    tags: ["Fine Dining", "Indonesian", "Romantic"],
    category: "restaurants",
    location: "seminyak",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
  },
  {
    id: 2,
    name: "Potato Head Beach Club",
    rating: 4.5,
    reviews: 2456,
    address: "Jl. Petitenget No.51B, Seminyak",
    status: "Open",
    opensAt: "10 AM",
    priceLevel: "$$$",
    tags: ["Beach Club", "Pool", "Sunset Views"],
    category: "beach-clubs",
    location: "seminyak",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"
  },
  {
    id: 3,
    name: "Jungle Fish",
    rating: 4.7,
    reviews: 892,
    address: "Banjar Susut, Desa Buahan, Ubud",
    status: "Open",
    opensAt: "8 AM",
    priceLevel: "$$",
    tags: ["Pool Club", "Restaurant", "Jungle Views"],
    category: "beach-clubs",
    location: "ubud",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80"
  },
  {
    id: 4,
    name: "Yoga Barn",
    rating: 4.8,
    reviews: 1567,
    address: "Jl. Raya Pengosekan, Ubud",
    status: "Open",
    opensAt: "7 AM",
    priceLevel: "$$",
    tags: ["Yoga", "Wellness", "Meditation"],
    category: "wellness-sports",
    location: "ubud",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
  },
  {
    id: 5,
    name: "Tanah Lot Temple",
    rating: 4.6,
    reviews: 3421,
    address: "Beraban, Kediri, Tabanan",
    status: "Open",
    opensAt: "6 AM",
    priceLevel: "$",
    tags: ["Temple", "Sunset", "Cultural"],
    category: "cultural-experiences",
    location: "tabanan",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80"
  },
  {
    id: 6,
    name: "La Favela",
    rating: 4.5,
    reviews: 1876,
    address: "Jl. Kayu Aya No.177X, Seminyak",
    status: "Open",
    opensAt: "5 PM",
    priceLevel: "$$$",
    tags: ["Nightclub", "Restaurant", "Bar"],
    category: "nightlife",
    location: "seminyak",
    image: "https://images.unsplash.com/photo-1576457412712-c6aa249f62b0?w=800&q=80"
  },
  {
    id: 7,
    name: "Uluwatu Temple",
    rating: 4.7,
    reviews: 4532,
    address: "Pecatu, South Kuta, Badung",
    status: "Open",
    opensAt: "7 AM",
    priceLevel: "$",
    tags: ["Temple", "Sunset", "Cultural"],
    category: "cultural-experiences",
    location: "uluwatu",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80"
  },
  {
    id: 8,
    name: "Single Fin",
    rating: 4.6,
    reviews: 2187,
    address: "Jl. Labuan Sait, Uluwatu",
    status: "Open",
    opensAt: "8 AM",
    priceLevel: "$$",
    tags: ["Bar", "Sunset", "Surf"],
    category: "nightlife",
    location: "uluwatu",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80"
  },
  {
    id: 9,
    name: "Karma Kandara Beach Club",
    rating: 4.8,
    reviews: 1432,
    address: "Jl. Villa Kandara, Ungasan",
    status: "Open",
    opensAt: "9 AM",
    priceLevel: "$$$",
    tags: ["Beach Club", "Luxury", "Restaurant"],
    category: "beach-clubs",
    location: "uluwatu",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"
  },
  {
    id: 10,
    name: "The Lawn",
    rating: 4.5,
    reviews: 1654,
    address: "Jl. Pura Dalem, Canggu",
    status: "Open",
    opensAt: "11 AM",
    priceLevel: "$$",
    tags: ["Beach Club", "Restaurant", "Sunset"],
    category: "beach-clubs",
    location: "canggu",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"
  },
  {
    id: 11,
    name: "Mason",
    rating: 4.7,
    reviews: 876,
    address: "Jl. Batu Bolong No.89, Canggu",
    status: "Open",
    opensAt: "5 PM",
    priceLevel: "$$$",
    tags: ["Fine Dining", "Modern", "Cocktails"],
    category: "restaurants",
    location: "canggu",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
  },
  {
    id: 12,
    name: "The Practice",
    rating: 4.9,
    reviews: 543,
    address: "Jl. Batu Bolong No.94, Canggu",
    status: "Open",
    opensAt: "7 AM",
    priceLevel: "$$",
    tags: ["Yoga", "Meditation", "Wellness"],
    category: "wellness-sports",
    location: "canggu",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
  }
]