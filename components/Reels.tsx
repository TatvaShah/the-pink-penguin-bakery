const reels = [
  {
    src: "/media/challah.mp4",
    poster: "/media/challah-poster.webp",
    title: "Warm challah and babka",
    caption: "Weekly orders are open Sunday to Wednesday for Friday or Saturday pickup.",
    href: "https://www.instagram.com/p/DV9CyF0jht2/",
  },
  {
    src: "/media/chocbabka.mp4",
    poster: "/media/chocbabka-poster.webp",
    title: "Chocolate babka",
    caption: "Made to order in small batches, so it stays fresh, soft, and swirled.",
    href: "https://www.instagram.com/p/DVbbyWkDkdF/",
  },
  {
    src: "/media/vintage.mp4",
    poster: "/media/vintage-poster.webp",
    title: "Yellow and purple piping",
    caption: "A vintage style birthday cake. When it comes to birthdays, more buttercream is the answer.",
    href: "https://www.instagram.com/p/DVPG_ANDhlm/",
  },
];

export function Reels() {
  return (
    <section id="reels" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-berry">In motion</p>
      <h2 className="display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Reels from the kitchen</h2>
      <p className="mt-4 max-w-2xl text-lg text-cocoa">
        Press play. These are the bakery&apos;s own Instagram reels, saved here so they play on the page.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {reels.map((reel) => (
          <figure key={reel.src} className="overflow-hidden rounded-[1.8rem] bg-white shadow-sm ring-1 ring-pink/15">
            <video
              controls
              playsInline
              preload="metadata"
              poster={reel.poster}
              className="aspect-[9/16] w-full bg-ink object-cover"
            >
              <source src={reel.src} type="video/mp4" />
            </video>
            <figcaption className="p-4">
              <h3 className="font-extrabold text-ink">{reel.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cocoa">{reel.caption}</p>
              <a href={reel.href} className="mt-3 inline-block text-sm font-extrabold text-berry hover:text-pink">
                Watch on Instagram
              </a>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="display text-3xl font-semibold">On Instagram</h3>
        <p className="mt-2 text-cocoa">The original posts, embedded from Instagram.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <iframe
            src="https://www.instagram.com/p/Dd89Q1ii3P5/embed"
            title="Instagram post of a rainbow rosette birthday cake"
            className="h-[540px] w-full rounded-3xl bg-white"
            loading="lazy"
          />
          <iframe
            src="https://www.instagram.com/reel/DVbbyWkDkdF/embed"
            title="Instagram reel of chocolate babka being baked"
            className="h-[540px] w-full rounded-3xl bg-white"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </section>
  );
}
