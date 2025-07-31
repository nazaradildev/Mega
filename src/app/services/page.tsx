import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Map, Compass, Satellite, Eye, Ship, Globe } from 'lucide-react';
import { HOME_SERVICES } from '@/lib/constants';

const serviceIcons: { [key: string]: React.ElementType } = {
  "Real Estate Surveying Services": Map,
  "Engineering Surveying Services": Compass,
  "Satellite Imagery Analysis": Satellite,
  "Photogrammetry & Drone Surveys": Eye,
  "Hydrographic Engineering": Ship,
  "Geodetic Surveying": Globe,
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container flex flex-col items-center px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We offer an integrated portfolio of services that blend technological precision with deep field expertise, providing comprehensive geospatial solutions for a variety of needs.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {HOME_SERVICES.map((service) => {
                const Icon = serviceIcons[service.title] || Map;
                return (
                  <Link href={service.href} key={service.title} className="flex">
                    <Card className="flex flex-col w-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Icon className="w-10 h-10 text-primary" />
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow">
                        <p className="text-muted-foreground flex-grow">{service.description}</p>
                        <div className="mt-4">
                          <Button variant="link" className="px-0 text-accent">
                            Discover More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
