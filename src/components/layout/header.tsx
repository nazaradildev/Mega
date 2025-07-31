
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronLeft, ChevronDown } from "lucide-react";
import { Logo } from "../icons/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
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
    href: "/markets", 
    label: "Markets",
    subLinks: [
      { href: "/markets/real-estate-development", label: "Real Estate & Urban Development" },
      { href: "/markets/infrastructure-energy", label: "Infrastructure & Energy" },
      { href: "/markets/agriculture-food-security", label: "Agriculture & Food Security" },
      { href: "/markets/natural-resources-environment", label: "Natural Resources & Environment" },
    ]
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground transition-colors hover:text-foreground",
        isActive && "text-foreground font-semibold"
      )}
      prefetch={false}
    >
      {children}
    </Link>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 flex-1">
      {NAV_LINKS.map((link) =>
        link.subLinks ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={cn(
                "text-muted-foreground hover:text-foreground px-2 flex items-center gap-1 group",
                (link.subLinks.some(sub => pathname.startsWith(sub.href)) || pathname === link.href) && "text-foreground font-semibold"
              )}>
                {link.label}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href={link.href}>All {link.label}</Link>
              </DropdownMenuItem>
              {link.subLinks.map((subLink) => (
                <DropdownMenuItem key={subLink.href} asChild>
                  <Link href={subLink.href}>{subLink.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLink key={link.label} href={link.href}>
            {link.label}
          </NavLink>
        )
      )}
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetTitle className="sr-only">Main Menu</SheetTitle>
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4 p-4" onClick={() => setOpen(false)}>
          <Logo className="h-6 w-6 text-primary" />
          <span>MEGA GEOSPATIAL</span>
        </Link>
        <nav className="grid gap-2 text-lg font-medium px-4">
           <Accordion type="multiple" className="w-full">
            {NAV_LINKS.map((link) =>
              link.subLinks ? (
                <AccordionItem value={link.label} key={link.label} className="border-b-0">
                  <AccordionTrigger className="text-muted-foreground hover:text-foreground hover:no-underline py-3 text-base flex justify-between items-center w-full group">
                    <span>{link.label}</span>
                    <ChevronDown className="h-5 w-5 text-primary transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 pb-2">
                    <Link
                      href={link.href}
                      className="block text-muted-foreground hover:text-foreground py-2 text-base"
                      prefetch={false}
                      onClick={() => setOpen(false)}
                    >
                      All {link.label}
                    </Link>
                    {link.subLinks?.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block text-muted-foreground hover:text-foreground py-2 text-base"
                        prefetch={false}
                        onClick={() => setOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground py-3 text-base"
                  prefetch={false}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">MEGA GEOSPATIAL</span>
        </Link>

        <DesktopNav />
        
        <div className="flex items-center gap-4 ml-auto">
          {isClient && <MobileNav />}
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
