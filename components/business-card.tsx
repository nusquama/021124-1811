"use client"

import { useState, useEffect } from "react"
import { Globe, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BusinessDialog } from "@/components/business-dialog"

interface BusinessCardProps {
  business: {
    id: number
    name: string
    rating: number
    reviews: number
    address: string
    status: string
    opensAt: string
    priceLevel: string
    tags: string[]
    image: string
  }
}

export function BusinessCard({ business }: BusinessCardProps) {
  const [mounted, setMounted] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-lg" onClick={() => setDialogOpen(true)}>
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {business.priceLevel}
            </Badge>
          </div>
          <Image
            alt={business.name}
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src={business.image}
            width={400}
          />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {business.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-black/50 text-white backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <CardHeader className="p-4">
          <div className="space-y-1">
            <h3 className="font-semibold text-xl">{business.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{business.rating}</span>
              <span className="text-muted-foreground">({business.reviews} reviews)</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
            <p className="text-sm text-muted-foreground">{business.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${
              business.status === "Open" ? "text-green-500" : "text-red-500"
            }`}>
              {business.status}
            </span>
            <span className="text-sm text-muted-foreground">· Opens {business.opensAt}</span>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1" 
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                // Add website link action
              }}
            >
              <Globe className="h-4 w-4 mr-2" />
              Website
            </Button>
            <Button 
              variant="outline" 
              className="flex-1" 
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                // Add phone call action
              }}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>

      <BusinessDialog
        business={business}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  )
}