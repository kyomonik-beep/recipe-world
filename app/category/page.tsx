"use client";

import CategoryGrid from "@/components/home/CategoryGrid";
import BlobBackground from "@/components/ui/BlobBackground";

export default function CategoryIndexPage() {
  return (
    <div className="relative min-h-screen py-12">
      <BlobBackground colorClass="bg-secondary/10" sizeClass="w-[40rem] h-[40rem]" className="-top-32 left-0" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-16">
        <div className="space-y-4 max-w-2xl text-center mx-auto">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground">
            All Categories
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            Browse our full taxonomy of organic, imperfect, and wonderful meal categories.
          </p>
        </div>

        {/* 
          CategoryGrid on home page slices the array, but since we are at /category 
          let's just reuse it. If we wanted all, we could duplicate CategoryGrid and remove slicing.
          For simplicity, extending CategoryGrid logic or duplicating is fine. We'll duplicate the fetch here 
          to show all categories without slicing.
        */}
        <AllCategoriesGrid />
      </div>
    </div>
  );
}

// Inline component to display ALL categories without slicing
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/lib/meals";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function AllCategoriesGrid() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(14)].map((_, i) => (
          <div key={i} className="aspect-square bg-muted animate-pulse rounded-[2rem]" />
        ))}
      </div>
    );
  }

  const categories = data?.categories || [];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {categories.map((category: any) => (
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
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent pointer-events-none" />
          
          <h3 className="absolute bottom-4 left-4 right-4 font-heading font-bold text-white text-xl drop-shadow-md">
            {category.strCategory}
          </h3>
          
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity text-white">
            <ArrowRight size={16} />
          </div>
        </Link>
      ))}
    </div>
  );
}
