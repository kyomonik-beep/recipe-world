import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    if (!res.ok) throw new Error("API response not OK");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (_error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
