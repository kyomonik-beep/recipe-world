import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import RandomCTA from "@/components/home/RandomCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 w-full space-y-24">
        <FeaturedRecipes />
        <CategoryGrid />
      </div>
      
      <div id="random" className="scroll-mt-24">
        <RandomCTA />
      </div>
    </div>
  );
}
