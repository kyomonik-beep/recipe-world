import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export type MealData = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
};

type RecipeCardProps = {
  meal: MealData;
  index: number;
};

const radiusVariants = [
  "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-[2rem] rounded-bl-[2rem]",
  "rounded-tl-[2rem] rounded-br-[5rem] rounded-tr-[3rem] rounded-bl-[2rem]",
  "rounded-[3rem_2rem_4rem_2rem]",
  "rounded-[2rem_4rem_2rem_3rem]"
];

export default function RecipeCard({ meal, index }: RecipeCardProps) {
  const radiusClass = radiusVariants[index % 4];

  return (
    <Link 
      href={`/recipe/${meal.idMeal}`}
      className={cn(
        "group block bg-[#FEFEFA] border border-border/50 shadow-soft hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.15)] transition-all duration-300",
        radiusClass
      )}
    >
      <div className={cn("relative aspect-video w-full overflow-hidden", radiusClass)}>
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {meal.strCategory && (
          <div className="absolute top-4 left-4 bg-primary/10 backdrop-blur-md text-primary rounded-full px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide">
            {meal.strCategory}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3">
        {meal.strArea && (
          <div className="flex items-center gap-1.5 text-muted-foreground font-body text-sm">
            <MapPin size={14} />
            <span>{meal.strArea}</span>
          </div>
        )}
        
        <h3 className="font-heading font-bold text-foreground text-lg sm:text-xl leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {meal.strMeal}
        </h3>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="font-body text-sm text-muted-foreground font-medium">View Recipe</span>
          <ArrowRight size={18} className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
