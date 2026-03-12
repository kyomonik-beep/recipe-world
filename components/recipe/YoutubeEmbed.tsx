export default function YoutubeEmbed({ url }: { url: string }) {
  if (!url) return null;

  // Convert watch URL to embed URL
  const videoIdMatch = url.match(/(?:\?v=|\/embed\/|\.be\/)([^&\n?\s]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-float group">
      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors pointer-events-none z-10" />
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
