import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  "Satellite imagery analysis for change detection",
  "Hydrographic surveys",
  "Land use classification",
];

export default function NaturalResourcesEnvironmentPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Sustainable Management of Natural Resources & the Environment
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We offer advanced solutions for monitoring and managing our natural resources and protecting the environment. Our services contribute to environmental impact assessments and monitoring changes in vegetation and water resources.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Natural Resources"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  data-ai-hint="forest river"
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
                 <h2 className="text-3xl font-bold tracking-tighter">Help protect our planet.</h2>
                 <Button asChild size="lg" className="mt-4">
                    <Link href="/contact">Learn More</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
