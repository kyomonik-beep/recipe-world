import Link from "next/link";
import { Utensils } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <div className="bg-primary rounded-full p-2 text-white">
                <Utensils size={20} />
              </div>
              <span className="font-heading font-bold text-white text-xl tracking-wide">
                Recipe World
              </span>
            </Link>
            <p className="text-border max-w-sm font-body text-sm leading-relaxed">
              Discover the art of cooking with recipes from around the globe.
              Embracing the beauty of perfect imperfection in every meal.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-accent transition-colors">Search Recipes</Link>
              </li>
              <li>
                <Link href="/category" className="hover:text-accent transition-colors">Categories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Discover</h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li>
                <Link href="/area" className="hover:text-accent transition-colors">Cuisines by Area</Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Surprise Me</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">About</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Recipe World. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Powered by TheMealDB
          </p>
        </div>
      </div>
    </footer>
  );
}
