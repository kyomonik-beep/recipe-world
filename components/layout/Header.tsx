"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Utensils } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Search", href: "/search" },
  { name: "Categories", href: "/category" },
  { name: "Areas", href: "/area" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 w-full">
      <div className="bg-white/70 backdrop-blur-md rounded-full border border-border/50 shadow-soft px-4 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary rounded-full p-2 text-white group-hover:scale-105 transition-transform">
            <Utensils size={20} />
          </div>
          <span className="font-heading font-bold text-foreground text-xl tracking-wide">
            Recipe World
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-body font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={NAV_LINKS}
        pathname={pathname}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
