import RecipeDetail from "@/components/recipe/RecipeDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe Details | Recipe World",
  description: "View the full recipe, ingredients, and instructions.",
};

export default function RecipePage({ params }: { params: { id: string } }) {
  return <RecipeDetail id={params.id} />;
}
