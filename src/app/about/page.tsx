import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container px-4 md:px-6">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary rounded-lg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Our Story: From an Ambitious Vision to a Leading Reality
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  MEGA GEOSPATIAL was founded by a group of elite engineers who shared a common passion for geomatics and a deep desire to make a real difference in the surveying industry. Our journey began in the heart of the dynamic and fast-paced business environment of the UAE, where the demand for accuracy and efficiency in engineering projects was constantly growing.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  From the outset, we set a clear goal: not just to be a service provider, but a strategic partner to our clients. We invested in the latest global technologies—from ultra-precise GPS systems to advanced LiDAR and drones—and honed our team's expertise to tackle the toughest field challenges.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Team of engineers"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-xl object-cover"
                  data-ai-hint="team collaboration"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <Badge>Our Vision</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  To be the leading company in providing innovative geospatial solutions in the Middle East and Africa, and to become the first choice for clients seeking accuracy, reliability, and innovation.
                </h2>
              </div>
              <div className="space-y-4">
                <Badge>Our Mission</Badge>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  To empower our clients to make informed decisions and build successful, sustainable projects by providing them with high-accuracy spatial data and deep analytical insights, while adhering to the highest standards of quality, safety, and social responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary rounded-lg">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Building a Sustainable Future... with Precision</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
                At MEGA GEOSPATIAL, we believe our success is measured not only by our projects' success but also by our positive impact on the environment and society. Sustainability is not just a slogan; it's an integral part of how we operate and make decisions every day.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Environmental Commitment</h3>
                <p className="text-muted-foreground">We adopt technologies that reduce the carbon footprint of our field operations and contribute to environmental management projects through our services.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Social Commitment</h3>
                <p className="text-muted-foreground">We provide a safe, healthy, and motivating work environment for our employees and adhere to the highest safety standards at all work sites.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Economic Commitment</h3>
                <p className="text-muted-foreground">We help our clients achieve economic sustainability in their projects and operate with transparency and integrity in all our dealings.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
           <div className="container px-4 md:px-6">
             <div className="grid gap-10 md:grid-cols-2 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Be Part of a Team That Shapes the Future</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                      Are you passionate about technology and precision? Are you looking for a dynamic work environment that allows you to grow and develop? At MEGA GEOSPATIAL, we are always looking for exceptional talent to join our vision.
                    </p>
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold">Why Work With Us?</h3>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground md:text-lg">
                            <li><span className="font-semibold text-foreground">Innovation:</span> An opportunity to work with the latest technologies in the geomatics field.</li>
                            <li><span className="font-semibold text-foreground">Collaborative Culture:</span> We work as one team to achieve our common goals.</li>
                        </ul>
                    </div>
                     <div className="mt-8">
                        <h3 className="text-2xl font-bold">Are You Ready to Join Us?</h3>
                        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                           We are always interested in getting to know talented individuals. Send us your CV, and we will contact you when an opportunity matching your ambitions and experience becomes available.
                        </p>
                        <Button asChild className="mt-4">
                            <a href="mailto:careers@mgeo.ae">Send your CV to: careers@mgeo.ae</a>
                        </Button>
                    </div>
                </div>
                <div className="relative h-80">
                  <Image src="https://placehold.co/600x450.png" alt="Careers at MEGA GEOSPATIAL" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-xl object-cover" data-ai-hint="office team working"/>
                </div>
             </div>
           </div>
        </section>
      </main>
    </div>
  );
}
