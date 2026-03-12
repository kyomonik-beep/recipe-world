"use client";

import { ChefHat } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EmptyState() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-sm mx-auto py-24 px-4 translate-y-4 animate-in fade-in duration-500">
      <div className="bg-muted rounded-[2rem] p-8 shadow-soft mb-8">
        <ChefHat size={64} className="text-border" />
      </div>
      
      <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
        No recipes found
      </h3>
      
      <p className="font-body text-muted-foreground mb-10 leading-relaxed">
        We couldn't find any recipes matching your search. Try adjusting your ingredients or cuisine.
      </p>

      <button 
        onClick={() => router.push("/search")}
        className="bg-primary text-white rounded-full px-8 py-4 font-body font-bold shadow-soft hover:-translate-y-1 hover:shadow-hover hover:scale-105 active:scale-95 transition-all"
      >
        Browse All Recipes
      </button>
    </div>
  );
}
