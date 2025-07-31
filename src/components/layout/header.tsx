"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "../icons/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const navLinks = [
    { href: "/about", label: "About Us" },
    { 
      href: "/services", 
      label: "Services",
      subLinks: [
        { href: "/services/real-estate", label: "Real Estate Surveying" },
        { href: "/services/engineering", label: "Engineering Surveying" },
        { href: "/services/satellite-imagery", label: "Satellite Imagery Analysis" },
        { href: "/services/photogrammetry", label: "Photogrammetry & Drone Surveys" },
        { href: "/services/hydrographic", label: "Hydrographic Engineering" },
        { href: "/services/geodetic", label: "Geodetic Surveying" },
      ] 
    },
    { 
      href: "/sectors", 
      label: "Sectors",
      subLinks: [
        { href: "/sectors/real-estate-development", label: "Real Estate & Urban Development" },
        { href: "/sectors/infrastructure-energy", label: "Infrastructure & Energy" },
        { href: "/sectors/agriculture-food-security", label: "Agriculture & Food Security" },
        { href: "/sectors/natural-resources-environment", label: "Natural Resources & Environment" },
      ]
    },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
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
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground px-2">
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.label} asChild>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              {link.label}
            </Link>
            )
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
           <Link href="/contact" className="hidden md:flex">
             <Button>
                Get a Quote
             </Button>
           </Link>
        </div>
      </div>
    </header>
  );
}
