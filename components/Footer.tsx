import { bakery } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="display text-2xl font-semibold">The Pink Penguin Bakery</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            A home bakery in Thornhill, Ontario. Custom cakes, weekly bakes, and private decorating classes.
          </p>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-butter">Visit</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <a href={bakery.instagram} className="hover:text-butter">
                Instagram {bakery.instagramHandle}
              </a>
            </li>
            <li>
              <a href={bakery.facebook} className="hover:text-butter">
                Facebook
              </a>
            </li>
            <li>
              <a href={bakery.threads} className="hover:text-butter">
                Threads
              </a>
            </li>
            <li>
              <a href={`mailto:${bakery.email}`} className="hover:text-butter">
                {bakery.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-butter">Pickup</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Friday or Saturday in Thornhill. Other days by request. The exact address is shared after an order is confirmed.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/70 sm:px-6">
          <p>Orders by message. No storefront hours are published.</p>
          <a href="https://www.claudaura.ca" className="font-bold text-white hover:text-butter">
            Website by ClaudAura
          </a>
        </div>
      </div>
    </footer>
  );
}
