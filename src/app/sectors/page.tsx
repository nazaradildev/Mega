import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Building2, GitBranch, Droplet, Users } from 'lucide-react'; // Assuming 'Users' for Agri and 'Droplet' for Resources
import { SECTORS_SERVED } from '@/lib/constants';

const sectorIcons: { [key: string]: React.ElementType } = {
  "Real Estate & Urban Development": Building2,
  "Infrastructure & Energy": GitBranch,
  "Agriculture & Food Security": Users,
  "Natural Resources & Environment": Droplet,
};


export default function SectorsPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Sectors We Serve
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We understand that every industry has unique challenges, which is why we offer solutions specifically tailored to meet your requirements.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {SECTORS_SERVED.map((sector) => {
                const Icon = sectorIcons[sector.title] || Building2;
                return (
                  <Link href={sector.href} key={sector.title}>
                    <div className="text-center p-6 rounded-lg hover:bg-accent/10 transition-colors border border-transparent hover:border-accent">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-16 h-16 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{sector.title}</h3>
                    </div>
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
