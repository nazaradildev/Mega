"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "../icons/logo";

export function Header() {
  const navLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#sectors", label: "Sectors" },
    { href: "/#blog", label: "Blog" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">MEGA GEOSPATIAL</span>
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4" prefetch={false}>
                  <Logo className="h-6 w-6 text-primary" />
                  <span>MEGA GEOSPATIAL</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
           <Link href="/#contact" className="hidden md:flex">
             <Button>
                Get a Quote
             </Button>
           </Link>
        </div>
      </div>
    </header>
  );
}
