"use client";

import { useQuery } from "@tanstack/react-query";
import { getAreas } from "@/lib/meals";
import Link from "next/link";
import { MapPin } from "lucide-react";
import BlobBackground from "@/components/ui/BlobBackground";

interface Area {
  strArea: string;
}

export default function AreaIndexPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["areas"],
    queryFn: getAreas,
  });

  const areas: Area[] = data?.meals || [];

  return (
    <div className="relative min-h-screen py-12">
      <BlobBackground colorClass="bg-primary/10" sizeClass="w-[40rem] h-[40rem]" className="-top-32 right-0" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-16">
        <div className="space-y-4 max-w-2xl text-center mx-auto">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground">
            Cuisines by Region
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            Travel the globe through your kitchen. Explore recipes by their geographic origins.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded-[1.5rem]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {areas.map((area) => (
              <Link
                key={area.strArea}
                href={`/area/${area.strArea}`}
                className="group flex flex-col items-center justify-center gap-2 bg-[#FEFEFA] border border-border/50 rounded-[1.5rem] py-6 shadow-soft hover:-translate-y-1 hover:shadow-hover transition-all duration-300"
              >
                <div className="bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white rounded-full p-3 transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <span className="font-heading font-bold text-foreground text-center">
                  {area.strArea}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
