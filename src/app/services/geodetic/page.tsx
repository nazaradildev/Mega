import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  "Geodetic Control Networks: Establishing primary reference points for major projects.",
  "High-Precision GPS Surveys: Positioning with centimeter-level accuracy.",
  "Gravity Field Measurement: Detailed analysis of the Earth's gravity field.",
  "Crustal Deformation Monitoring: Monitoring minute movements of the Earth's surface.",
];

export default function GeodeticPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Geodetic Surveying: The Foundation of Spatial Accuracy
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We establish and measure ultra-precise ground control networks that form the reference foundation for all types of engineering projects and national mapping.
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
                 <h2 className="text-3xl font-bold tracking-tighter">Build your project on a foundation of absolute accuracy.</h2>
                 <Button asChild size="lg">
                    <Link href="/contact">Discuss Your Requirements With Us</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}