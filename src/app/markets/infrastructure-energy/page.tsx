import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  "Engineering surveying",
  "Quantity surveys",
  "Deformation monitoring",
  "Geodetic surveying",
];

export default function InfrastructureEnergyPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container px-4 md:px-6">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary -mx-4 px-4 md:-mx-6 md:px-6">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Precision as the Foundation for Infrastructure & Energy Projects
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Roads, bridges, pipelines, and energy grids require absolute accuracy to ensure safety and efficiency. We provide the necessary spatial data for all project phases, from design to construction and maintenance.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="/market2.png"
                  alt="Infrastructure Project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-xl object-cover"
                  data-ai-hint="bridge infrastructure"
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
                 <h2 className="text-3xl font-bold tracking-tighter">Build strong and sustainable infrastructure.</h2>
                 <Button asChild size="lg" className="mt-4">
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
