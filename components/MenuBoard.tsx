"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  { src: "/media/menu-01.webp", alt: "Menu cover for The Pink Penguin Bakery" },
  { src: "/media/menu-02.webp", alt: "Welcome note and challah prices: plain 10 dollars, sesame 10 dollars, raisin 12 dollars" },
  { src: "/media/menu-03.webp", alt: "Babka menu: cinnamon and chocolate at 18 dollars, babka balls at 10 dollars" },
  { src: "/media/menu-04.webp", alt: "Cookie and chocolate dipped biscotti prices" },
  { src: "/media/menu-05.webp", alt: "Cake flavours including vanilla, chocolate, funfetti, red velvet, and lemon" },
  { src: "/media/menu-06.webp", alt: "Cupcakes at 36 dollars a dozen and mini cakes at 5 dollars or 27 dollars for six" },
  { src: "/media/menu-07.webp", alt: "Treat boxes: small 40 dollars and large 60 dollars" },
  { src: "/media/menu-08.webp", alt: "Bundles: Sweet Start 26 dollars, Friday Faves 68 dollars, Treat and Twist 70 dollars" },
];

const groups = [
  {
    title: "Challah",
    items: [
      ["Plain", "$10"],
      ["Sesame", "$10"],
      ["Raisin", "$12"],
    ],
  },
  {
    title: "Babka",
    items: [
      ["Cinnamon", "$18"],
      ["Chocolate", "$18"],
      ["Babka balls, cinnamon or chocolate", "$10"],
    ],
  },
  {
    title: "Cookies",
    items: [
      ["Funfetti", "$2.50 each, $14 half dozen, $26 dozen"],
      ["Chocolate chunk", "$2.50 each, $14 half dozen, $26 dozen"],
      ["Marshmallow crunch", "$3 each, $16 half dozen, $30 dozen"],
      ["Triple chocolate", "$3 each, $16 half dozen, $30 dozen"],
      ["Black and white", "$18"],
    ],
  },
  {
    title: "Biscotti",
    items: [["Chocolate dipped", "$16 for 8, or $28 for 16"]],
  },
  {
    title: "Cupcakes and minis",
    items: [
      ["Cupcakes, dozen", "$36"],
      ["Mini cake", "$5"],
      ["Mini cakes, six", "$27"],
    ],
  },
  {
    title: "Treat boxes",
    items: [
      ["Small", "$40"],
      ["Large", "$60"],
    ],
  },
  {
    title: "Bundles",
    items: [
      ["The Sweet Start: challah and babka", "$26"],
      ["The Friday Faves: 2 challah, babka, 12 cookies", "$68"],
      ["The Treat and Twist: challah, babka, small treat box", "$70"],
    ],
  },
];

export function MenuBoard() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="menu" className="bg-blush/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-berry">Pricing</p>
        <h2 className="display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">The current menu</h2>
        <p className="mt-4 max-w-2xl text-lg text-cocoa">
          Here is what I bake, fresh to order. Custom cakes are quoted with the design, so tell me the date and the vibe. If you want to double check what is baking this week, just send a note.
        </p>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(index)}
              className="shrink-0 overflow-hidden rounded-2xl ring-2 ring-white focus-visible:ring-berry"
            >
              <Image src={slide.src} alt={slide.alt} width={1080} height={1080} className="h-44 w-44 object-cover sm:h-56 sm:w-56" />
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="rounded-3xl bg-foam p-5 ring-1 ring-pink/15">
              <h3 className="display text-2xl font-semibold">{group.title}</h3>
              <ul className="mt-3 grid gap-2">
                {group.items.map(([name, price]) => (
                  <li key={name} className="flex items-baseline justify-between gap-4 border-b border-pink/10 pb-2 text-sm last:border-0">
                    <span className="font-bold text-ink">{name}</span>
                    <span className="text-right text-cocoa">{price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-cocoa">
          Cupcake flavours listed: vanilla, chocolate, funfetti, and red velvet. Custom flavours are welcome. Treat box contents change with the month.
        </p>
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4" role="dialog" aria-modal="true" aria-label="Menu slide">
          <button type="button" className="absolute inset-0 cursor-default" aria-label="Close menu image" onClick={() => setActive(null)} />
          <div className="relative max-h-[90vh] max-w-xl">
            <Image src={slides[active].src} alt={slides[active].alt} width={1080} height={1080} className="max-h-[80vh] w-auto rounded-3xl object-contain" />
            <button
              type="button"
              onClick={() => setActive(null)}
              className="mt-3 w-full rounded-full bg-foam px-4 py-2 font-extrabold text-berry"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
