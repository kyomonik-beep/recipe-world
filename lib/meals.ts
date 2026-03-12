export async function getCategories() {
  const res = await fetch('/api/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getRandomMeal() {
  const res = await fetch('/api/meals/random');
  if (!res.ok) throw new Error('Failed to fetch random meal');
  return res.json();
}

export async function searchMeals(query: string) {
  const res = await fetch(`/api/meals/search?query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Failed to search meals');
  return res.json();
}

export async function getMealsByCategory(category: string) {
  const res = await fetch(`/api/filter?c=${encodeURIComponent(category)}`);
  if (!res.ok) throw new Error('Failed to fetch meals by category');
  return res.json();
}

export async function getMealsByArea(area: string) {
  const res = await fetch(`/api/filter?a=${encodeURIComponent(area)}`);
  if (!res.ok) throw new Error('Failed to fetch meals by area');
  return res.json();
}

export async function getMealDetails(id: string) {
  const res = await fetch(`/api/meals/${id}`);
  if (!res.ok) throw new Error('Failed to fetch meal details');
  return res.json();
}

export async function getAreas() {
  const res = await fetch('/api/areas');
  if (!res.ok) throw new Error('Failed to fetch areas');
  return res.json();
}
