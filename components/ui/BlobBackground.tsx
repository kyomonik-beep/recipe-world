import { cn } from "@/lib/utils";

type BlobProps = {
  className?: string;
  colorClass?: string;
  sizeClass?: string;
};

export default function BlobBackground({ 
  className, 
  colorClass = "bg-primary/20", 
  sizeClass = "w-72 h-72 md:w-96 md:h-96" 
}: BlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute pointer-events-none blur-3xl animate-float",
        colorClass,
        sizeClass,
        className
      )}
      style={{
        borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%"
      }}
    />
  );
}
