import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  "Topographic surveys",
  "Boundary surveys",
  "3D modeling",
  "Virtual tours",
  "Drone progress monitoring",
  "Change detection to monitor property modifications",
];

export default function RealEstateDevelopmentPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Empowering Real Estate & Urban Development with Precise Spatial Data
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We provide developers, planners, and consultants with the precise tools and data they need to turn their visions into reality, from feasibility studies to marketing and management.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="/market1.png"
                  alt="Real Estate Development"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-xl object-cover"
                  data-ai-hint="cityscape development"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Our Services for the Sector</h2>
                <ul className="space-y-4">
                  {SERVICES.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" />
                      <p className="text-lg text-muted-foreground">{service}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 text-center md:text-left p-8 bg-secondary rounded-lg">
                 <h2 className="text-3xl font-bold tracking-tighter">Turn your real estate vision into a successful project.</h2>
                 <Button asChild className="mt-4 h-auto whitespace-normal text-base md:text-lg lg:h-11">
                    <Link href="/contact">Discuss Your Project with Our Experts</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
