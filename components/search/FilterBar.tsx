"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories, getAreas } from "@/lib/meals";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface Category {
  idCategory: string;
  strCategory: string;
}

interface Area {
  strArea: string;
}

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("c");
  const activeArea = searchParams.get("a");

  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: areasData } = useQuery({
    queryKey: ["areas"],
    queryFn: getAreas,
  });

  const categories: Category[] = categoriesData?.categories || [];
  const areas: Area[] = areasData?.meals || [];

  const handleFilterClick = (type: "c" | "a", value: string) => {
    // If clicking same filter, toggle it off by pushing to /search
    if ((type === "c" && activeCategory === value) || (type === "a" && activeArea === value)) {
      router.push("/search");
    } else {
      router.push(`/search?${type}=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-5xl mx-auto">
      {/* Categories Row */}
      <div className="space-y-3">
        <h3 className="font-heading font-semibold text-foreground px-1">Filter by Category</h3>
        <div className="flex overflow-x-auto pb-4 gap-3 snap-x scrollbar-hide -mx-4 px-4 sm:flex-wrap sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.strCategory;
            return (
              <button
                key={cat.idCategory}
                onClick={() => handleFilterClick("c", cat.strCategory)}
                className={cn(
                  "whitespace-nowrap rounded-full px-5 py-2 font-body text-sm font-medium transition-all snap-start shadow-soft",
                  isActive 
                    ? "bg-primary text-white shadow-hover scale-105" 
                    : "bg-[#F0EBE5] text-[#78786C] hover:bg-accent hover:text-foreground"
                )}
              >
                {cat.strCategory}
              </button>
            );
          })}
        </div>
      </div>

      {/* Areas Row */}
      <div className="space-y-3">
        <h3 className="font-heading font-semibold text-foreground px-1">Filter by Region</h3>
        <div className="flex overflow-x-auto pb-4 gap-3 snap-x scrollbar-hide -mx-4 px-4 sm:flex-wrap sm:mx-0 sm:px-0">
          {areas.map((area) => {
            const isActive = activeArea === area.strArea;
            return (
              <button
                key={area.strArea}
                onClick={() => handleFilterClick("a", area.strArea)}
                className={cn(
                  "whitespace-nowrap rounded-full px-5 py-2 font-body text-sm font-medium transition-all snap-start shadow-soft",
                  isActive 
                    ? "bg-secondary text-white shadow-hover scale-105" 
                    : "bg-[#F0EBE5] text-[#78786C] hover:bg-accent hover:text-foreground"
                )}
              >
                {area.strArea}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
