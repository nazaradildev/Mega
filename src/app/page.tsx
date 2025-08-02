
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building2, Droplet, GitBranch, Globe, Eye, Map, Leaf, Satellite, Ruler, Ship, ShieldCheck, Users, BrainCircuit } from "lucide-react";
import { HOME_SERVICES, MARKETS_SERVED, WHY_CHOOSE_US, BLOG_POSTS } from "@/lib/constants";
import Link from "next/link";

const serviceIcons: { [key: string]: React.ElementType } = {
  "Real Estate Surveying Services": Map,
  "Engineering Surveying Services": Ruler,
  "Satellite Imagery Analysis": Satellite,
  "Photogrammetry & Drone Surveys": Eye,
  "Hydrographic Engineering": Ship,
  "Geodetic Surveying": Globe,
};

const marketIcons: { [key: string]: React.ElementType } = {
  "Real Estate & Urban Development": Building2,
  "Infrastructure & Energy": GitBranch,
  "Agriculture & Food Security": Leaf,
  "Natural Resources & Environment": Droplet,
};

const whyChooseUsIcons: { [key: string]: React.ElementType } = {
  "Unmatched Accuracy": ShieldCheck,
  "Expert Team": Users,
  "Innovative Solutions": BrainCircuit,
  "Commitment to Quality": ShieldCheck,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <section
          className="w-full pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
          <Image
            src="/megahero1.png"
            alt="Abstract background"
            fill
            sizes="100vw"
            priority
            className="object-cover z-0"
            data-ai-hint="abstract geometric background"
          />
          <div className="container px-4 md:px-6 z-20 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Shaping the Future with Ultimate Precision
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Innovative geospatial solutions and advanced surveying technologies that empower your projects to achieve the highest standards of accuracy and efficiency in the UAE.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Badge>About Us</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2">
                  MEGA GEOSPATIAL: Where Expertise Meets Innovation
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                  Our company was born from the ambitious vision of seasoned engineers, committed to delivering geomatics services that exceed expectations and keep pace with the tremendous evolution in engineering and construction. We transform complex data into strategic insights that support your decisions and ensure the success of your projects.
                </p>
                <Link href="/about">
                  <Button variant="link" className="px-0 mt-4 text-accent">
                    Learn More About Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/about1.png"
                  alt="Team working"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                  data-ai-hint="engineers collaborating"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Comprehensive Suite of Geospatial Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer an integrated portfolio of services that blend technological precision with deep field expertise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
              {HOME_SERVICES.map((service) => {
                const Icon = serviceIcons[service.title] || Map;
                return (
                  <Card key={service.title} className="bg-card/50 backdrop-blur-lg border border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Icon className="w-8 h-8 text-primary" />
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                       <Link href={service.href}>
                         <Button variant="link" className="px-0 mt-4 text-accent">
                           Discover More <ArrowRight className="ml-2 h-4 w-4" />
                         </Button>
                       </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        <section id="markets" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Badge>Markets We Serve</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customized Solutions for Diverse Markets</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We understand that every industry has unique challenges, which is why we offer solutions specifically tailored to meet your requirements.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 pt-12">
              {MARKETS_SERVED.map((market) => {
                const Icon = marketIcons[market.title] || Building2;
                return (
                  <Link key={market.title} href={market.href} className="h-full">
                    <div className="group relative flex h-full flex-col items-center text-center p-6 rounded-lg bg-background/30 transition-all duration-300 hover:bg-background/50 hover:-translate-y-2">
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-md"></div>
                       <div className="relative z-10 flex flex-col items-center h-full">
                         <Icon className="w-12 h-12 text-primary mb-4" />
                         <h3 className="text-lg font-bold">{market.title}</h3>
                         <p className="text-sm text-muted-foreground mt-2 flex-grow">{market.description}</p>
                       </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/about1.png"
                  alt="Surveying equipment"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                  data-ai-hint="geospatial technology"
                />
              </div>
               <div>
                <Badge>Why Choose Us?</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2">
                  Your Trusted Partner for Success
                </h2>
                <ul className="mt-6 space-y-6">
                  {WHY_CHOOSE_US.map((item) => {
                    const Icon = whyChooseUsIcons[item.title] || ShieldCheck;
                    return (
                       <li key={item.title} className="flex items-start">
                        <Icon className="w-8 h-8 text-primary mr-4 mt-1 shrink-0" />
                        <div>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Latest Articles</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore the Latest Insights from Our Experts</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <Card key={post.title} className="overflow-hidden bg-card/50 backdrop-blur-lg border border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                  <Link href={post.href}>
                  <Image
                    alt="Blog post image"
                    className="aspect-video w-full object-cover"
                    height="310"
                    src={post.image}
                    width="550"
                    data-ai-hint={post.imageHint}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                    <Button variant="link" className="px-0 mt-4 text-accent">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
             <div className="text-center">
                <Link href="/blog">
                  <Button size="lg">Browse The Blog</Button>
                </Link>
             </div>
          </div>
        </section>
        
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Next Project?</h2>
             <p className="mt-4 max-w-xl mx-auto">
               Contact our team of experts today to discuss your requirements and get a customized quote.
             </p>
             <div className="mt-6">
               <Link href="/contact">
                  <Button size="lg" variant="secondary">Contact Us</Button>
                </Link>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
