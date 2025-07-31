import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  "Change Detection: We compare images from different dates to monitor changes such as urban expansion or shoreline variations.",
  "Land Use Classification: We identify and separate urban, agricultural, and desert areas to support regional planning.",
  "Vegetation Health Assessment: We assess the health of crops and forests on a large scale.",
  "Major Project Monitoring: We track progress on massive infrastructure projects.",
];

export default function SatelliteImageryPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container flex flex-col items-center px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Satellite Imagery Analysis: Strategic Insights from a Comprehensive Perspective
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We transform satellite images into actionable information and strategic insights that support large-scale planning, resource management, and the evaluation of changes over time.
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
                 <h2 className="text-3xl font-bold tracking-tighter">Discover what space data holds for you.</h2>
                 <Button asChild size="lg">
                    <Link href="/contact">Request a Consultation with Our Specialists</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
