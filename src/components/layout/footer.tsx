import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Logo } from "../icons/logo";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">MEGA GEOSPATIAL</span>
          </Link>
          <p className="text-muted-foreground">
            Precise geospatial solutions for a complex world.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>Dubai Industrial City, Saih Shuaib 2, SH-734, Office No (9), Dubai, UAE.</p>
            <p>Phone: +971 54 265 6627 | +971 50 900 5398</p>
            <p>Email: Contact@mgeo.ae</p>
            <p>Business Hours: Sunday - Thursday: 8:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
          <form className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" placeholder="First Name*" className="bg-input"/>
              <Input type="text" placeholder="Last Name*" className="bg-input"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email*" className="bg-input"/>
              <Input type="tel" placeholder="Phone Number" className="bg-input"/>
            </div>
            <Input type="text" placeholder="Service of Interest" className="bg-input"/>
            <Textarea placeholder="Your Message*" rows={4} className="bg-input"/>
            <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
          </form>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 MEGA GEOSPATIAL. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
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
