"use client";

import { useQuery } from "@tanstack/react-query";
import { getMealDetails } from "@/lib/meals";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import Image from "next/image";
import { ArrowLeft, Play, MapPin } from "lucide-react";
import Link from "next/link";
import IngredientList from "./IngredientList";
import TagList from "./TagList";
import YoutubeEmbed from "./YoutubeEmbed";
import BlobBackground from "@/components/ui/BlobBackground";

export default function RecipeDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["meal", id],
    queryFn: () => getMealDetails(id),
  });

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="w-24 h-10 bg-muted rounded-full animate-pulse mb-8" />
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="aspect-[4/5] bg-muted animate-pulse rounded-[3rem_2rem_4rem_2rem]" />
          <div className="space-y-6">
            <div className="w-1/3 h-6 bg-muted animate-pulse rounded-full" />
            <div className="w-full h-16 bg-muted animate-pulse rounded-xl" />
            <div className="w-2/3 h-8 bg-muted animate-pulse rounded-xl" />
            <div className="w-full h-[50vh] bg-muted animate-pulse rounded-xl mt-12" />
          </div>
        </div>
      </div>
    );
  }

  const meal = data?.meals?.[0];

  if (!meal || error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center text-muted-foreground font-body">
        Sorry, we couldn't find the details for this recipe.
      </div>
    );
  }

  // Parse instructions into an array for nicer rendering
  const instructions = meal.strInstructions
    .split(/\r\n|\n/)
    .filter((step: string) => step.trim().length > 5);

  return (
    <article className="relative max-w-6xl mx-auto px-4 py-12">
      <BlobBackground colorClass="bg-primary/20" sizeClass="w-96 h-96" className="top-0 right-0" />
      <BlobBackground colorClass="bg-secondary/15" sizeClass="w-[30rem] h-[30rem]" className="bottom-0 left-0" />

      <Link 
        href="javascript:history.back()" 
        onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full py-2 px-4 mb-8 transition-colors font-body text-sm font-semibold"
      >
        <ArrowLeft size={16} /> Back
      </Link>

      <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left Side: Image */}
        <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:sticky lg:top-32">
          <div className="absolute inset-x-4 -bottom-4 h-full bg-accent/30 rounded-[60%_40%_70%_30%] blur-3xl -z-10" />
          <div 
            className="w-full h-full border-4 border-white shadow-float overflow-hidden rotate-0 animate-in spin-in-[-2deg] duration-700 ease-out"
            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "rotate(-2deg)" }}
          >
            <Image 
              src={meal.strMealThumb}
              alt={meal.strMeal}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="space-y-12">
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              {meal.strCategory && (
                <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-wide">
                  {meal.strCategory}
                </span>
              )}
              {meal.strArea && (
                <span className="flex items-center gap-1.5 text-muted-foreground font-body text-sm font-medium">
                  <MapPin size={16} />
                  {meal.strArea} Origin
                </span>
              )}
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              {meal.strMeal}
            </h1>

            {meal.strTags && <TagList tags={meal.strTags} />}
          </header>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <span className="bg-accent/50 w-8 h-8 rounded-full flex items-center justify-center text-primary text-sm">1</span>
              Ingredients
            </h2>
            <IngredientList meal={meal} />
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <span className="bg-accent/50 w-8 h-8 rounded-full flex items-center justify-center text-primary text-sm">2</span>
              Instructions
            </h2>
            <div className="space-y-4">
              {instructions.map((step: string, idx: number) => (
                <div key={idx} className="bg-[#FEFEFA] rounded-[1.5rem] p-6 border border-border/50 shadow-sm flex gap-4">
                  <span className="font-heading font-bold text-primary text-xl mt-0.5">
                    {idx + 1}.
                  </span>
                  <p className="font-body text-foreground leading-relaxed text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {meal.strYoutube && (
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <span className="bg-accent/50 w-8 h-8 rounded-full flex items-center justify-center text-primary text-sm"><Play size={14} className="ml-0.5" /></span>
                Video Tutorial
              </h2>
              <YoutubeEmbed url={meal.strYoutube} />
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
