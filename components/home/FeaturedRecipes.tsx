"use client";

import { useQuery } from "@tanstack/react-query";
import { searchMeals } from "@/lib/meals";
import RecipeCard from "@/components/recipe/RecipeCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedRecipes() {
  // Let's just fetch popular letter "b" or "c" representing featured meals. 
  // Free meal APi doesn't have "featured" endpoints without a key.
  const { data, isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: () => searchMeals("b"),
  });

  const meals = data?.meals?.slice(0, 4) || [];

  return (
    <section>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
            Featured Recipes
          </h2>
          <p className="font-body text-muted-foreground max-w-lg">
            Hand-picked selections of our most beloved dishes, prepared perfectly imperfect just for you.
          </p>
        </div>
        <Link 
          href="/search" 
          className="hidden md:flex items-center gap-2 text-primary font-body font-semibold hover:text-primary/80 transition-colors"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-[2rem]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal: any, idx: number) => (
            <RecipeCard key={meal.idMeal} meal={meal} index={idx} />
          ))}
        </div>
      )}
      
      <div className="mt-8 md:hidden">
        <Link 
          href="/search" 
          className="block w-full text-center bg-primary/10 text-primary rounded-full py-4 font-body font-bold"
        >
          View All Recipes
        </Link>
      </div>
    </section>
  );
}
