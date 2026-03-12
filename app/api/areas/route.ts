import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    if (!res.ok) throw new Error("API response not OK");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch areas" }, { status: 500 });
  }
}
