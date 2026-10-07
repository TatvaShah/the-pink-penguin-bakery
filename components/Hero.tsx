import Image from "next/image";

const ribbon = ["Challah", "Babka", "Buttercream", "Biscotti", "Custom cakes", "Decorating classes"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-berry">
            Home bakery in Thornhill
          </p>
          <h1 className="display mt-5 text-5xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-6xl">
            A cake you could stare at all day.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cocoa">
            Custom buttercream, fresh weekly challah and babka, and private cake decorating classes. Everything is baked to order in one Thornhill kitchen, then picked up on Friday or Saturday.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inquire" className="rounded-full bg-berry px-5 py-3 font-extrabold text-white hover:bg-pink">
              Start an order
            </a>
            <a href="#menu" className="rounded-full border border-berry/30 bg-foam px-5 py-3 font-extrabold text-berry hover:bg-blush">
              See the menu
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-2xl bg-foam p-3 ring-1 ring-pink/15">
              <dt className="font-extrabold text-berry">Order window</dt>
              <dd className="mt-1 text-cocoa">Sunday to Wednesday</dd>
            </div>
            <div className="rounded-2xl bg-foam p-3 ring-1 ring-pink/15">
              <dt className="font-extrabold text-berry">Pickup</dt>
              <dd className="mt-1 text-cocoa">Friday or Saturday</dd>
            </div>
            <div className="col-span-2 rounded-2xl bg-foam p-3 ring-1 ring-pink/15 sm:col-span-1">
              <dt className="font-extrabold text-berry">How to reach her</dt>
              <dd className="mt-1 text-cocoa">Instagram DM or email</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="absolute -top-6 right-6 h-40 w-40 rounded-full bg-butter/80 blur-2xl" aria-hidden="true" />
          <div className="absolute bottom-8 left-0 h-36 w-36 rounded-full bg-pink/25 blur-2xl" aria-hidden="true" />
          <div className="relative grid grid-cols-6 gap-3">
            <Image
              src="/media/rainbow.webp"
              alt="Chocolate birthday cake with rainbow buttercream rosettes, made for a fourth birthday"
              width={1080}
              height={1080}
              priority
              className="col-span-6 aspect-square rounded-[2rem] object-cover shadow-xl ring-4 ring-white sm:col-span-4"
            />
            <Image
              src="/media/crown-challah.webp"
              alt="Golden crown challah with raisins, baked for Rosh Hashanah"
              width={1080}
              height={1426}
              className="col-span-2 -mt-8 hidden rounded-[1.6rem] object-cover object-top shadow-lg ring-4 ring-white sm:block"
            />
            <Image
              src="/media/pink-cake.webp"
              alt="Pink buttercream cake with bows, pearls, and a small number 4 topper"
              width={1080}
              height={1080}
              className="col-span-6 rounded-[1.6rem] object-cover shadow-lg ring-4 ring-white sm:col-span-6 sm:-mt-2"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-pink/15 bg-blush">
        <div className="marquee-track flex w-max gap-8 py-3 text-sm font-extrabold tracking-wide text-berry uppercase">
          {ribbon.map((item) => (
            <span key={item} className="px-2">
              {item}
            </span>
          ))}
          <span className="marquee-copy contents" aria-hidden="true">
            {ribbon.map((item) => (
              <span key={`${item}-repeat`} className="px-2">
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
