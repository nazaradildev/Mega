"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "../icons/logo";

export function Header() {
  const navLinks = [
    { href: "#services", label: "الخدمات" },
    { href: "#team", label: "فريقنا" },
    { href: "#blog", label: "المدونة" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-4 md:ml-auto ml-4">
          <Button className="hidden md:flex">
             <a href="#contact">ابدأ</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح قائمة التنقل</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                  <Logo className="h-6 w-6 text-primary" />
                  <span>رؤى جغرافية</span>
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
        </div>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 flex-1 justify-end">
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
        <Link href="#" className="ml-6 flex items-center space-x-2" prefetch={false}>
          <span className="font-bold">ملاح رؤى جغرافية</span>
          <Logo className="h-6 w-6 text-primary" />
        </Link>
      </div>
    </header>
  );
}
