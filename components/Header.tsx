"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#cakes", label: "Cakes" },
  { href: "#weekly", label: "Weekly bakes" },
  { href: "#classes", label: "Classes" },
  { href: "#menu", label: "Menu" },
  { href: "#order", label: "How to order" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-pink/15 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/media/logo.png"
            alt="The Pink Penguin Bakery logo, a cartoon penguin in a pink dress and bow"
            width={511}
            height={511}
            priority
            className="h-12 w-12 rounded-full ring-2 ring-pink/40"
          />
          <span className="leading-tight">
            <span className="display block text-lg font-semibold tracking-tight text-ink">The Pink Penguin</span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-berry">Bakery</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-cocoa lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-berry">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#inquire"
            className="rounded-full bg-berry px-4 py-2 text-sm font-extrabold text-white shadow-sm hover:bg-pink"
          >
            Order
          </a>
          <button
            type="button"
            className="rounded-full border border-pink/30 px-3 py-2 text-sm font-bold text-berry lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-pink/15 px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-3 py-3 font-bold text-cocoa hover:bg-blush"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
