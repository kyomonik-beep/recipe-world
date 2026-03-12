"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/meals";
import { ArrowRight } from "lucide-react";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export default function CategoryGrid() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <section>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square bg-muted animate-pulse rounded-[2rem]" />
          ))}
        </div>
      </section>
    );
  }

  const categories: Category[] = data?.categories || [];

  // Filter out some less appealing categories or just take first 8-12 for home page
  const displayCategories = categories.slice(0, 12);

  return (
    <section>
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          Explore Categories
        </h2>
        <Link href="/category" className="hidden sm:flex items-center gap-2 text-primary font-body font-semibold hover:text-primary/80 transition-colors">
          View All <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayCategories.map((category) => (
          <Link
            key={category.idCategory}
            href={`/category/${category.strCategory}`}
            className="group relative aspect-square overflow-hidden rounded-[2rem] shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <Image
              src={category.strCategoryThumb}
              alt={category.strCategory}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Dark gradient overlay so text is readable */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent pointer-events-none" />
            
            <h3 className="absolute bottom-4 left-4 right-4 font-heading font-bold text-white text-xl md:text-2xl drop-shadow-md">
              {category.strCategory}
            </h3>
            
            {/* Little hover chevron */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 sm:hidden">
        <Link 
          href="/category" 
          className="block w-full text-center bg-primary/10 text-primary rounded-full py-4 font-body font-bold"
        >
          View All Categories
        </Link>
      </div>
    </section>
  );
}
