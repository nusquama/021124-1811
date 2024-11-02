import Link from "next/link"
import { MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-orange-50/50 dark:bg-orange-950/10">
      {/* Newsletter Section */}
      <div className="container px-4 py-12 border-b border-orange-100/50 dark:border-orange-900/50">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h3 className="text-lg font-semibold">Stay Updated with BaliGuide</h3>
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter for the latest updates and travel tips
          </p>
          <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              placeholder="Enter your email" 
              type="email"
              className="bg-white/50 dark:bg-background/50"
            />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Site Title */}
          <Link className="flex items-center gap-2 text-xl font-bold justify-center md:justify-start" href="/">
            <MapPin className="h-6 w-6 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              BaliGuide
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} BaliGuide. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-6">
            <Link href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}