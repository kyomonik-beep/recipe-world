import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("c");
  const area = searchParams.get("a");

  const query = category ? `c=${category}` : area ? `a=${area}` : "";

  if (!query) {
    return NextResponse.json({ meals: [] });
  }

  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${query}`);
    if (!res.ok) throw new Error("API response not OK");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch filtered meals" }, { status: 500 });
  }
}
