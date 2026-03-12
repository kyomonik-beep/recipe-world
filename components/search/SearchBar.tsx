"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      router.push(`/search`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative group">
      <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
        <Search className="text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
      </div>
      <input
        type="search"
        placeholder="Search recipes, ingredients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-14 pl-14 pr-32 bg-white/70 backdrop-blur-md border border-border/70 rounded-full font-body outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-soft"
      />
      <button 
        type="submit"
        className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary text-white rounded-full px-8 font-body font-bold hover:scale-105 active:scale-95 transition-all shadow-soft"
      >
        Search
      </button>
    </form>
  );
}
