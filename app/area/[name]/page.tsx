"use client";

import { useQuery } from "@tanstack/react-query";
import { getMealsByArea } from "@/lib/meals";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import BlobBackground from "@/components/ui/BlobBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AreaNamePage({ params }: { params: { name: string } }) {
  const areaName = decodeURIComponent(params.name);

  const { data, isLoading } = useQuery({
    queryKey: ["area", areaName],
    queryFn: () => getMealsByArea(areaName),
  });

  const meals = data?.meals || [];

  return (
    <div className="relative min-h-screen py-12">
      <BlobBackground colorClass="bg-secondary/15" sizeClass="w-[40rem] h-[40rem]" className="-top-32 -left-32" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-12">
        <div className="space-y-6">
          <Link 
            href="/area" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} /> All Regions
          </Link>
          
          <div className="space-y-4">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground">
              {areaName} Cuisine
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl">
              Immerse yourself in the authentic flavors and rustic preparations of {areaName}.
            </p>
          </div>
        </div>

        <RecipeGrid meals={meals} isLoading={isLoading} />
      </div>
    </div>
  );
}
