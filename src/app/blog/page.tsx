import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container px-4 md:px-6">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10 -mx-4 px-4 md:-mx-6 md:px-6">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              MEGA GEOSPATIAL Blog
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              Industry Insights, Technologies, and News. Welcome to our knowledge hub. Here, our experts share the latest trends and technologies in the world of geomatics, offering deep analysis to help you stay ahead.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <Card key={post.title} className="overflow-hidden">
                   <Link href={post.href}>
                    <Image
                      alt={post.title}
                      className="aspect-video w-full object-cover"
                      height="310"
                      src={post.image}
                      width="550"
                      data-ai-hint={post.imageHint}
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{post.title}</h3>
                      <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                      <Button variant="link" className="px-0 mt-4 text-accent">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
