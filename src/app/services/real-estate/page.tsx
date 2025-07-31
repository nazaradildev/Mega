import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  "Change Detection: Precise monitoring of any modifications or additions to properties over time, ensuring compliance with permits and providing a documented record of developments.",
  "360° Virtual Tours: Immersive experiences that allow remote property exploration.",
  "Professional Real Estate Photography: High-quality images that highlight a property's aesthetics and details.",
  "Boundary Surveys: Accurate demarcation of property boundaries.",
  "Topographic Surveys: Detailed maps of a site's terrain and features.",
  "3D Modeling & Aerial Imaging: Advanced visualizations of projects from multiple angles.",
];

export default function RealEstatePage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Certified Real Estate Surveying Services
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We offer comprehensive real estate surveying solutions, certified by the Dubai Land Department (DLD), designed to support developers, investors, owners, and regulatory bodies.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <ul className="space-y-4">
                  {SERVICES.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground">{service}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 text-center md:text-left p-8 bg-secondary rounded-lg">
                 <h2 className="text-3xl font-bold tracking-tighter">Turn your real estate vision into a tangible reality.</h2>
                 <Button asChild size="lg">
                    <Link href="/contact">Contact Us</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}