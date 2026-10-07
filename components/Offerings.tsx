import Image from "next/image";

const sizes = [
  { size: "4 inch", note: "A small celebration or smash style cake" },
  { size: "6 inch", note: "An intimate gathering" },
  { size: "9 inch", note: "Around 10 to 15 guests" },
  { size: "10 inch", note: "When the guest list is getting a little bigger" },
  { size: "12 inch", note: "A larger celebration" },
];

export function Offerings() {
  return (
    <>
      <section id="cakes" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative pb-10 sm:pb-14">
            <Image
              src="/media/vintage-cake.webp"
              alt="Vintage style cake with yellow and purple buttercream piping, bows, and pearls"
              width={1080}
              height={1080}
              className="rounded-[2rem] object-cover shadow-lg"
            />
            <Image
              src="/media/number-cake.webp"
              alt="White buttercream cake with a large pink number 4 and fresh flowers"
              width={1080}
              height={1350}
              className="absolute right-3 bottom-0 w-36 rounded-3xl object-cover shadow-xl ring-4 ring-cream sm:w-44"
            />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-berry">Custom cakes</p>
            <h2 className="display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Kinda chic to celebrate everything with cake.</h2>
            <p className="mt-4 text-lg leading-relaxed text-cocoa">
              Every custom cake is baked fresh and designed for the celebration, whether you have a full vision or just a colour palette and a vibe. Buttercream, bright colours, and a little bit extra.
            </p>
            <p className="mt-4 text-cocoa">
              Flavours on the menu include vanilla, chocolate, funfetti, red velvet, lemon, and more. Cake pricing is shared when you inquire, because size and design change the order.
            </p>
            <ul className="mt-6 grid gap-2">
              {sizes.map((item) => (
                <li key={item.size} className="flex items-baseline justify-between gap-4 rounded-2xl bg-foam px-4 py-3 ring-1 ring-pink/15">
                  <span className="font-extrabold text-ink">{item.size}</span>
                  <span className="text-right text-sm text-cocoa">{item.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-cocoa">
              Serving counts shift with how the cake is cut, how many layers it has, and whether other desserts are on the table. If you are unsure, send the guest count.
            </p>
          </div>
        </div>
      </section>

      <section id="weekly" className="bg-white">
        <div className="scallop bg-cream" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-berry">Weekly bakes</p>
            <h2 className="display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Challah, babka, and the treats that keep coming back.</h2>
            <p className="mt-4 text-lg leading-relaxed text-cocoa">
              Soft, buttery challah and babka swirled with chocolate or cinnamon, baked fresh to order. Weekly orders close every Wednesday for Friday or Saturday pickup. Instagram highlights include Shabbat and how to order.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <article className="rounded-3xl bg-blush p-5">
                <h3 className="display text-2xl font-semibold">Challah</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa">Plain $10, sesame $10, raisin $12. Crown challah appears for Rosh Hashanah.</p>
              </article>
              <article className="rounded-3xl bg-cream p-5 ring-1 ring-pink/15">
                <h3 className="display text-2xl font-semibold">Babka</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa">Cinnamon or chocolate, $18. Babka balls in either flavour, $10.</p>
              </article>
            </div>
            <p className="mt-4 text-sm text-cocoa">
              Chocolate dipped biscotti are a standing favourite: $16 for 8 pieces, or $28 for 16. Cookies, cupcakes, mini cakes, and bundles are on the full menu.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/media/crown-challah.webp"
              alt="Braided crown challah with a glossy crust and raisins"
              width={1080}
              height={1426}
              className="col-span-2 max-h-[460px] rounded-[2rem] object-cover"
            />
            <Image
              src="/media/biscotti.webp"
              alt="Chocolate dipped biscotti arranged in a round tin"
              width={1080}
              height={1080}
              className="rounded-3xl object-cover"
            />
            <Image
              src="/media/mini-cakes.webp"
              alt="Personal mini cakes in pink, blue, and chocolate buttercream"
              width={1080}
              height={1080}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="classes" className="bg-berry text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Image
            src="/media/classes.webp"
            alt="Pink Penguin Bakery graphic inviting people to a private cake decorating class"
            width={1080}
            height={1080}
            className="rounded-[2rem] object-cover"
          />
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-butter">Cake decorating classes</p>
            <h2 className="display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">I come to you.</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Private cake decorating classes are perfect for birthdays, bridal showers, girls&apos; nights, and more. The cakes, buttercream, tools, and sprinkles come with her. You gather the group and have fun.
            </p>
            <p className="mt-4 text-white/90">
              Class pricing is not posted. Send a note with the occasion, the group, and a date, and she will share availability.
            </p>
            <a href="#inquire" className="mt-8 inline-flex rounded-full bg-butter px-5 py-3 font-extrabold text-ink hover:bg-white">
              Ask about a class
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
