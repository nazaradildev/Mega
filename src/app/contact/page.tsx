import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container flex flex-col items-center px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              We are here to help. Whether you have a question about our services, want to request a quote, or wish to discuss your project's challenges, our team is ready to listen and provide support.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Send Us a Message</h2>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="text" placeholder="First Name*" className="bg-input" required/>
                  <Input type="text" placeholder="Last Name*" className="bg-input" required/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email*" className="bg-input" required/>
                  <Input type="tel" placeholder="Phone Number" className="bg-input"/>
                </div>
                <Input type="text" placeholder="Service of Interest" className="bg-input"/>
                <Textarea placeholder="Your Message*" rows={5} className="bg-input" required/>
                <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Direct Contact Information</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Address:</strong><br />
                   Dubai Industrial City, Saih Shuaib 2, SH-734, Office No (9), Dubai, UAE.
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong><br />
                  <a href="tel:+971542656627" className="hover:text-primary">+971 54 265 6627</a> | <a href="tel:+971509005398" className="hover:text-primary">+971 50 900 5398</a>
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong><br />
                  <a href="mailto:Contact@mgeo.ae" className="hover:text-primary">Contact@mgeo.ae</a>
                </p>
                <p>
                  <strong className="text-foreground">Business Hours:</strong><br />
                  Sunday - Thursday: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
