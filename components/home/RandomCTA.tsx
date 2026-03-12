"use client";

import { useQuery } from "@tanstack/react-query";
import { getRandomMeal } from "@/lib/meals";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Utensils } from "lucide-react";
import BlobBackground from "@/components/ui/BlobBackground";

export default function RandomCTA() {
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["randomCTA"],
    queryFn: getRandomMeal,
    refetchOnWindowFocus: false,
  });

  const meal = data?.meals?.[0];

  return (
    <section className="relative overflow-hidden bg-accent/30 py-24 mt-24">
      <BlobBackground colorClass="bg-secondary/20" sizeClass="w-96 h-96" className="-top-20 -left-20" />
      <BlobBackground colorClass="bg-primary/10" sizeClass="w-[40rem] h-[40rem]" className="-bottom-40 -right-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground rounded-full px-4 py-2 mb-6 font-body text-sm font-semibold">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-secondary">Feeling Adventurous?</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-6">
            Let fate decide your next culinary journey
          </h2>
          
          <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
            Discover something completely new. Our &quot;Feeling Lucky&quot; feature pulls a random, authentic recipe from around the world just for you.
          </p>
          
          <button 
            onClick={() => refetch()}
            disabled={isFetching}
            className="bg-secondary text-white rounded-full px-8 py-4 font-body font-bold shadow-float hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:translate-y-0"
          >
            {isFetching ? "Conjuring a recipe..." : "Show Me Another"}
            <Utensils size={20} className={isFetching ? "animate-spin" : ""} />
          </button>
        </div>

        {meal && !isLoading ? (
          <Link 
            href={`/recipe/${meal.idMeal}`}
            className="group relative w-full max-w-md aspect-square rounded-full border-4 border-white shadow-float bg-white/50 backdrop-blur-sm p-4 rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image 
                src={meal.strMealThumb}
                alt={meal.strMeal}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 py-8 px-6 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent flex flex-col justify-end text-center">
                <span className="font-body text-primary font-bold uppercase tracking-wide text-xs mb-1">
                  {meal.strArea} • {meal.strCategory}
                </span>
                <h3 className="font-heading font-bold text-white text-2xl line-clamp-2">
                  {meal.strMeal}
                </h3>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center font-heading font-bold text-lg shadow-soft rotate-12 group-hover:rotate-0 transition-transform duration-300 border-4 border-white">
              Try It!
            </div>
          </Link>
        ) : (
          <div className="w-full max-w-md aspect-square rounded-full bg-muted animate-pulse border-4 border-white shadow-float" />
        )}
      </div>
    </section>
  );
}
