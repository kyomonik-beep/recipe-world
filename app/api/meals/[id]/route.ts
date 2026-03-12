import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
    if (!res.ok) throw new Error("API response not OK");
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch meal" }, { status: 500 });
  }
}
