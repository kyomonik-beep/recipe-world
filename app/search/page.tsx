"use client";

import { useQuery } from "@tanstack/react-query";
import { searchMeals, getMealsByCategory, getMealsByArea } from "@/lib/meals";
import SearchBar from "@/components/search/SearchBar";
import FilterBar from "@/components/search/FilterBar";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import BlobBackground from "@/components/ui/BlobBackground";
import EmptyState from "@/components/ui/EmptyState";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("c");
  const area = searchParams.get("a");

  const { data, isLoading } = useQuery({
    queryKey: ["search", query, category, area],
    queryFn: () => {
      if (category) return getMealsByCategory(category);
      if (area) return getMealsByArea(area);
      return searchMeals(query || ""); // if no query, fetch arbitrary default or search empty string (returns all)
    },
  });

  const meals = data?.meals || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <div className="space-y-8 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground">
            Find Your Next Meal
          </h1>
          <p className="font-body text-muted-foreground w-full max-w-lg mx-auto">
            Search our extensive database of perfectly imperfect recipes from around the world.
          </p>
        </div>
        
        <SearchBar />
        <div className="py-6 border-y border-border/30 my-8">
          <FilterBar />
        </div>
      </div>

      <div className="relative z-10">
        {!isLoading && meals.length === 0 ? (
          <EmptyState />
        ) : (
          <RecipeGrid meals={meals} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="relative min-h-screen">
      <BlobBackground colorClass="bg-primary/20" sizeClass="w-96 h-96" className="-top-20 -left-20" />
      <BlobBackground colorClass="bg-secondary/15" sizeClass="w-[30rem] h-[30rem]" className="-bottom-32 right-0" />
      
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-32 text-center text-muted-foreground">Loading Search...</div>
      }>
        <SearchContent />
      </Suspense>
    </div>
  );
}
