import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "../icons/logo";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">MEGA GEOSPATIAL</span>
          </Link>
          <p className="text-muted-foreground">
            Precise geospatial solutions for a complex world.
          </p>
        </div>
        <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
                <li><Link href="/sectors" className="text-muted-foreground hover:text-foreground">Sectors</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <div className="text-sm text-muted-foreground">
            <p>Dubai Industrial City, Saih Shuaib 2, SH-734, Office No (9), Dubai, UAE.</p>
            <p>Phone: +971 54 265 6627 | +971 50 900 5398</p>
            <p>Email: Contact@mgeo.ae</p>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 MEGA GEOSPATIAL. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Careers
            </Link>
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
