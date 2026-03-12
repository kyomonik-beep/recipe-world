"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isOpen: boolean;
  links: { name: string; href: string }[];
  pathname: string;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, links, pathname, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-md rounded-[2rem] shadow-float overflow-hidden z-40 animate-in fade-in slide-in-from-top-4 duration-300">
      <nav className="flex flex-col py-4">
        {links.map((link, index) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={cn(
                "px-6 py-4 font-body font-medium transition-colors",
                index !== links.length - 1 && "border-b border-border/50",
                isActive ? "text-primary font-semibold bg-primary/5" : "text-muted-foreground hover:bg-muted/30"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
