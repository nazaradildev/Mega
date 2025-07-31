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
            <span className="text-xl font-bold">GeoInsights Navigator</span>
          </Link>
          <p className="text-muted-foreground">
            Precision geospatial solutions for a complex world.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>123 Geospatial Lane, Suite 100</p>
            <p>Surveyville, ST 12345</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <form className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" placeholder="Name" className="bg-input"/>
              <Input type="email" placeholder="Email" className="bg-input"/>
            </div>
            <Textarea placeholder="Message" rows={4} className="bg-input"/>
            <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
          </form>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 GeoInsights Navigator. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
