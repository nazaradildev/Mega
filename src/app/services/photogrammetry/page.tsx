import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  "Orthophoto Maps: High-resolution, geometrically corrected aerial maps.",
  "Digital Elevation Models (DEM/DSM): Accurate models of the earth's surface and terrain.",
  "3D Modeling: Creation of realistic 3D models of buildings and sites.",
  "Construction Progress Monitoring: Periodic tracking of workflow at construction sites.",
];

export default function PhotogrammetryPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Photogrammetry & Drone Surveys: Efficiency and Accuracy from the Air
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We use the latest drones and photogrammetry techniques to collect 3D spatial data quickly and safely, providing an effective alternative to traditional surveying.
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
                 <h2 className="text-3xl font-bold tracking-tighter">Get a new perspective on your projects.</h2>
                 <Button asChild size="lg">
                    <Link href="/contact">Request a Quote</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
