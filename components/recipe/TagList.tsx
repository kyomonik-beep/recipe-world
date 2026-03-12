export default function TagList({ tags }: { tags: string }) {
  if (!tags) return null;

  const tagArray = tags.split(",").filter((t) => t.trim());

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tagArray.map((tag, i) => (
        <span 
          key={i} 
          className="bg-accent text-accent-foreground rounded-full px-3 py-1 font-body text-xs font-semibold shadow-sm hover:scale-105 transition-transform"
        >
          #{tag.trim()}
        </span>
      ))}
    </div>
  );
}
