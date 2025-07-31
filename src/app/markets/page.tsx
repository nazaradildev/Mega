import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { MARKETS_SERVED } from '@/lib/constants';

export default function MarketsPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container flex flex-col items-center px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Markets We Serve
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We understand that every industry has unique challenges, which is why we offer solutions specifically tailored to meet your requirements.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16">
              {MARKETS_SERVED.map((market, index) => (
                <div key={market.title} className="grid md:grid-cols-2 gap-10 items-center">
                  <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                    <h2 className="text-3xl font-bold tracking-tighter">{market.title}</h2>
                    <p className="text-muted-foreground md:text-lg">{market.description}</p>
                    <Button asChild>
                      <Link href={market.href}>
                        Explore More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative h-80">
                    <Image
                      src={market.image || "https://placehold.co/600x450.png"}
                      alt={market.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-xl object-cover"
                      data-ai-hint={market.imageHint}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
