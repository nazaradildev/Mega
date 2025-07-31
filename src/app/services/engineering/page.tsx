import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  "Construction Staking: Precise layout of columns, foundations, and roads.",
  "As-Built Surveys: Accurate documentation of a project post-completion.",
  "Quantity Surveys: Precise calculations of earthwork and material volumes.",
  "Deformation Monitoring: Precise monitoring of dams, bridges, and buildings.",
];

export default function EngineeringPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Precision Engineering Surveys for Infrastructure & Construction Projects
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We provide ultra-precise engineering surveying services that ensure your designs are implemented on the ground exactly as planned, minimizing errors, saving time, and reducing costs.
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
                 <h2 className="text-3xl font-bold tracking-tighter">Do you have an engineering project that demands uncompromising accuracy?</h2>
                 <Button asChild size="lg">
                    <Link href="/contact">Contact Our Experts Today</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}