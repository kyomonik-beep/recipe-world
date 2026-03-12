export default function IngredientList({ meal }: { meal: Record<string, string | undefined | null> }) {
  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {ingredients.map((item, idx) => (
        <div 
          key={idx} 
          className="bg-muted/50 hover:bg-muted transition-colors rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
          <div className="flex flex-col">
            <span className="font-body font-semibold text-foreground text-sm capitalize">
              {item.ingredient}
            </span>
            {item.measure && (
              <span className="font-body text-muted-foreground text-xs">
                {item.measure}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
