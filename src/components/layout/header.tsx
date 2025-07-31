
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Menu, ChevronLeft } from "lucide-react";
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
import { cn } from "@/lib/utils";

export function Header() {
  const [isClient, setIsClient] = useState(false)
  const [openMobile, setOpenMobile] = useState(false);


  useEffect(() => {
    setIsClient(true)
  }, [])
  
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
  
  const handleLinkClick = () => {
    setOpenMobile(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={cn("container flex h-14 max-w-screen-2xl items-center", isClient && "px-4 md:px-6")}>
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
                  <DropdownMenuItem asChild>
                     <Link href={link.href}>All {link.label}</Link>
                  </DropdownMenuItem>
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
           {isClient && (
            <Sheet open={openMobile} onOpenChange={setOpenMobile}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
                 <SheetDescription className="sr-only">Primary site navigation.</SheetDescription>
                 <div className="flex items-center gap-2 text-lg font-semibold mb-4 p-4">
                   <Logo className="h-6 w-6 text-primary" />
                   <span>MEGA GEOSPATIAL</span>
                 </div>
                 <nav className="grid gap-2 text-lg font-medium px-4">
                   <Accordion type="multiple" className="w-full">
                     {navLinks.map((link) =>
                       link.subLinks ? (
                         <AccordionItem value={link.label} key={link.label} className="border-b-0">
                           <AccordionTrigger className="text-muted-foreground hover:text-foreground hover:no-underline py-3 text-base flex justify-between items-center w-full">
                            <Link href={link.href} onClick={handleLinkClick}>{link.label}</Link>
                            <ChevronLeft className="h-5 w-5 text-primary transition-transform duration-200 group-[&[data-state=open]]:-rotate-90" />
                           </AccordionTrigger>
                           <AccordionContent className="pl-6 pb-2">
                             {link.subLinks.map((subLink) => (
                               <Link
                                 key={subLink.label}
                                 href={subLink.href}
                                 className="block text-muted-foreground hover:text-foreground py-2 text-base"
                                 prefetch={false}
                                 onClick={handleLinkClick}
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
                           onClick={handleLinkClick}
                         >
                           {link.label}
                         </Link>
                       )
                     )}
                   </Accordion>
                 </nav>
               </SheetContent>
            </Sheet>
           )}
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
