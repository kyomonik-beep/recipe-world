"use client";

import RecipeCard, { MealData } from "./RecipeCard";

export default function RecipeGrid({ meals, isLoading }: { meals: MealData[], isLoading?: boolean }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-[2rem]" />
        ))}
      </div>
    );
  }

  if (!meals || meals.length === 0) {
    return null; // The parent page will render EmptyState
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {meals.map((meal, idx) => (
        <RecipeCard key={meal.idMeal} meal={meal} index={idx} />
      ))}
    </div>
  );
}
