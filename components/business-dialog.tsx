"use client"

import { Clock, Globe, MapPin, Phone, Star, X } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface BusinessDialogProps {
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
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BusinessDialog({ business, open, onOpenChange }: BusinessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{business.name}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              alt={business.name}
              className="object-cover"
              fill
              src={business.image}
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white">
                {business.priceLevel}
              </Badge>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-lg">{business.rating}</span>
                <span className="text-muted-foreground">({business.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {business.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 text-muted-foreground shrink-0" />
                <p className="text-muted-foreground">{business.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-red-500">{business.status}</span>
                <span className="text-muted-foreground">· Opens {business.opensAt}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="flex-1">
                <Globe className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
              <Button className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground">
                Experience the authentic flavors and atmosphere of {business.name}. 
                Located in the heart of Bali, we offer a unique blend of traditional 
                and modern experiences.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}