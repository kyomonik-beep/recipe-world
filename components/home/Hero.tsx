"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import BlobBackground from "@/components/ui/BlobBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden w-full max-w-7xl mx-auto px-4 py-12 md:py-24">
      {/* Decorative Blobs */}
      <BlobBackground colorClass="bg-primary/20" sizeClass="w-96 h-96" className="-top-20 -left-20" />
      <BlobBackground colorClass="bg-secondary/15" sizeClass="w-[30rem] h-[30rem]" className="-bottom-32 right-0" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 w-full relative">
        {/* Text Content */}
        <div className="space-y-8 max-w-2xl">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-foreground leading-tight tracking-tight">
            Discover the beauty in <br />
            <span className="text-primary relative inline-block">
              every meal
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            Embrace the wabi-sabi philosophy of cooking. Find joy in the imperfect, authentic, and rustic flavors from kitchens around the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/search"
              className="bg-primary text-primary-foreground rounded-full px-8 py-4 font-body font-bold shadow-soft hover:shadow-hover hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Recipes
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#random"
              className="border-2 border-secondary text-secondary rounded-full px-8 py-4 font-body font-bold hover:bg-secondary/5 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              Feeling Lucky
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-lg aspect-square">
          <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse blur-3xl" />
          
          {/* Main Masked Image */}
          <div 
            className="relative w-full h-full border-4 border-white shadow-float overflow-hidden rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-700"
            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          >
            <Image 
              src="https://www.themealdb.com/images/media/meals/1529446352.jpg"
              alt="Rustic organic meal spread"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark overlay specifically for organic texturing */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Floating Badges */}
          <div className="absolute top-8 -left-4 sm:-left-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft px-5 py-3 border border-border/50 animate-float" style={{ animationDelay: '0s' }}>
            <span className="font-heading font-bold text-foreground block text-lg">1000+</span>
            <span className="font-body text-xs text-muted-foreground uppercase tracking-wider font-semibold">Recipes</span>
          </div>

          <div className="absolute bottom-12 -right-4 sm:-right-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft px-5 py-3 border border-border/50 animate-float" style={{ animationDelay: '-6s' }}>
            <span className="font-heading font-bold text-foreground block text-lg">50+</span>
            <span className="font-body text-xs text-muted-foreground uppercase tracking-wider font-semibold">Cuisines</span>
          </div>
        </div>
      </div>
    </section>
  );
}
