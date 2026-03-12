"use client";

import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "@/lib/meals";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import BlobBackground from "@/components/ui/BlobBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryNamePage({ params }: { params: { name: string } }) {
  const categoryName = decodeURIComponent(params.name);

  const { data, isLoading } = useQuery({
    queryKey: ["category", categoryName],
    queryFn: () => getMealsByCategory(categoryName),
  });

  const meals = data?.meals || [];

  return (
    <div className="relative min-h-screen py-12">
      <BlobBackground colorClass="bg-primary/10" sizeClass="w-[40rem] h-[40rem]" className="-top-32 -right-32" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-12">
        <div className="space-y-6">
          <Link 
            href="/category" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} /> All Categories
          </Link>
          
          <div className="space-y-4">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground">
              {categoryName} Recipes
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl">
              Explore our collection of authentically crafted {categoryName.toLowerCase()} dishes.
            </p>
          </div>
        </div>

        <RecipeGrid meals={meals} isLoading={isLoading} />
      </div>
    </div>
  );
}
