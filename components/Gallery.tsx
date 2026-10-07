import Image from "next/image";

const shots = [
  {
    src: "/media/rainbow.webp",
    alt: "Rainbow rosette chocolate birthday cake on a white board",
    caption: "Rainbow rosettes for a fourth birthday",
    href: "https://www.instagram.com/p/Dd89Q1ii3P5/",
    wide: true,
  },
  {
    src: "/media/bright-cake.webp",
    alt: "Bright custom cakes in pink, blue, and green buttercream",
    caption: "Bright colours, fun details",
    href: "https://www.instagram.com/p/DdZA06bqEVd/",
    wide: false,
  },
  {
    src: "/media/pink-cake.webp",
    alt: "Pink celebration cake with bows and a number 4 topper",
    caption: "Pink, pretty, and party ready",
    href: "https://www.instagram.com/p/DZdNQpAibHO/",
    wide: false,
  },
  {
    src: "/media/biscotti.webp",
    alt: "A tin of chocolate dipped biscotti",
    caption: "Chocolate dipped biscotti",
    href: "https://www.instagram.com/p/DbWbGOzCvhK/",
    wide: false,
  },
  {
    src: "/media/mini-cakes.webp",
    alt: "A cluster of colourful personal mini cakes",
    caption: "Little cakes, personal portions",
    href: "https://www.instagram.com/p/DX4KyL6jp2x/",
    wide: false,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-berry">From the kitchen</p>
          <h2 className="display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Recent bakes</h2>
        </div>
        <a href="https://www.instagram.com/thepinkpenguinbakery/" className="font-extrabold text-berry hover:text-pink">
          @thepinkpenguinbakery
        </a>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {shots.map((shot) => (
          <a
            key={shot.src}
            href={shot.href}
            className={`group relative overflow-hidden rounded-[1.8rem] bg-blush ${shot.wide ? "sm:col-span-2" : ""}`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1080}
              height={1080}
              className={`w-full object-cover ${shot.wide ? "max-h-[520px]" : "aspect-square"}`}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 text-sm font-bold text-white">
              {shot.caption}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
