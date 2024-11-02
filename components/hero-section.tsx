import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="container px-4 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Discover The Beauty of Bali
            </h1>
            <h2 className="text-xl font-semibold text-orange-500">
              Your Ultimate Island Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Experience the perfect blend of culture, nature, and modern lifestyle in the heart of 
              Indonesia. From pristine beaches to ancient temples, let us guide you through the best 
              of what Bali has to offer.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>

        {/* Right Column - Photo Gallery */}
        <div className="grid grid-cols-5 gap-4 h-[600px]">
          {/* Large Photo */}
          <div className="relative col-span-3 h-full">
            <Image
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
              alt="Bali Temple"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          {/* Stacked Photos */}
          <div className="col-span-2 grid gap-4">
            <div className="relative h-[290px]">
              <Image
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80"
                alt="Bali Beach"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative h-[290px]">
              <Image
                src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80"
                alt="Bali Culture"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}