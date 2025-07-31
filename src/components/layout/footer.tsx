import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "../icons/logo";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">MEGA GEOSPATIAL</span>
          </Link>
          <p className="text-muted-foreground">
            Shaping the Future with Ultimate Precision.
          </p>
        </div>
        <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
                <li><Link href="/markets" className="text-muted-foreground hover:text-foreground">Markets</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/real-estate" className="text-muted-foreground hover:text-foreground">Real Estate Surveying</Link></li>
            <li><Link href="/services/engineering" className="text-muted-foreground hover:text-foreground">Engineering Surveying</Link></li>
            <li><Link href="/services/satellite-imagery" className="text-muted-foreground hover:text-foreground">Satellite Imagery Analysis</Link></li>
            <li><Link href="/services/photogrammetry" className="text-muted-foreground hover:text-foreground">Photogrammetry & Drone</Link></li>
            <li><Link href="/services/hydrographic" className="text-muted-foreground hover:text-foreground">Hydrographic Engineering</Link></li>
            <li><Link href="/services/geodetic" className="text-muted-foreground hover:text-foreground">Geodetic Surveying</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Markets</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/real-estate-development" className="text-muted-foreground hover:text-foreground">Real Estate & Urban Dev.</Link></li>
            <li><Link href="/markets/infrastructure-energy" className="text-muted-foreground hover:text-foreground">Infrastructure & Energy</Link></li>
            <li><Link href="/markets/agriculture-food-security" className="text-muted-foreground hover:text-foreground">Agriculture & Food Security</Link></li>
            <li><Link href="/markets/natural-resources-environment" className="text-muted-foreground hover:text-foreground">Natural Resources</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
           <h3 className="text-lg font-bold">Contact Us</h3>
           <address className="space-y-2 text-sm text-muted-foreground not-italic">
              <p>Dubai Industrial City, Saih Shuaib 2, SH-734, Office No (9), Dubai, UAE.</p>
              <p>
                <a href="tel:+971542656627" className="hover:text-foreground">+971 54 265 6627</a>
              </p>
               <p>
                <a href="mailto:Contact@mgeo.ae" className="hover:text-foreground">Contact@mgeo.ae</a>
              </p>
           </address>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-border px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 MEGA GEOSPATIAL. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
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
